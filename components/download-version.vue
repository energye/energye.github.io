<template>
  <div>
    <div>Latest: v{{ latestVersion.version }}</div>
    <div>
      <h2></h2>
      Select:
      <select class="versionSelect" v-model="data.value" @change="event.selectVersionChange">
        <option v-for="option in data.options" :value="option.value" :selected="option.selected">
          {{ option.label }}
        </option>
      </select>
      <a :href="data.md5URL" target="_blank">MD5</a>
      <div>
        <!-- 版本下载信息 -->
        <table>
          <tr style="font-weight: bold;">
            <td>Version</td>
            <td>OS</td>
            <td>LibLCL</td>
            <td>CEF</td>
          </tr>
          <!-- Lib Download List -->
          <tbody v-for="version in data.versionDownloadList">
          <tr>
            <td rowspan="4" style="font-weight: bold;">
              {{ event.verDesc(version.version) }}
            </td>
          </tr>
          <tr v-for="(module, key, i) in version.os">
            <td>{{ key }}</td>
            <td>
              <a v-for="lcl in module.lcl" :href="lcl.url" target="_blank" style="margin-left: 5px;">{{ lcl.label }}</a>
            </td>
            <td>
              <a v-for="cef in module.cef" :href="cef.url" target="_blank" style="margin-left: 5px;">{{ cef.label }}</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
// 最新版本号
import latestVersion from '/public/data/latest-version.json';
// 模块-基础配置
import baseConfig from '/public/data/model-base-config.json';
import modelLCLData from '/public/data/model-liblcl.json';
import modelCEFData from '/public/data/model-cef.json';
// 版本升级配置
import versionsUpgrade from '/public/data/versions-upgrade.json';

// 排序
const versionKeys = Object.keys(versionsUpgrade).sort();
const versionKeysDesc = versionKeys.reverse();

// 下载源
const downloadSourceItem = baseConfig.downloadSourceItem


// 事件和函数
const event = {
  verDesc(v) { // 针对特定版本的CEF描述
    let tv = v.split("-")[1]
    switch (tv) { // case是特定版本
      case '87':
        return v + ' Flash'
      case '106':
        return v + ' GTK2'
      case '109':
        return v + ' Windows 7/8/8.1/2012'
      default:
        return v // 当前最新版本
    }
  },
  clone(object) {
    return JSON.parse(JSON.stringify(object))
  },
  findIdenticalVersion(source, version) { // 查找相当版本
    let data = source[version]
    let identical = data.identical
    if (identical) {
      return this.findIdenticalVersion(source, identical)
    } else {
      return data;
    }
  },
  findModule(moduleData, module) { // 在模块配置里查找模块信息
    for (let key in module) {
      let versionValue = module[key]
      let data = moduleData[key]
      let findVersion = data[versionValue]
      let identical = findVersion.identical
      if (identical) {
        findVersion = this.findIdenticalVersion(data, identical)
      }
      module[key] = {
        moduleName: key,
        v: versionValue,
        cfg: findVersion
      }
    }
  },
  mergeModule(moduleLCL, moduleCEF) { //模块合并, 将CEF和LCL匹配成对
    let result = []
    let findLCLByNum = function (vNum) {
      for (let v in moduleLCL) {
        let tmpVNum = v.split("-") // liblcl-87 ..., 由此得到87类似的版本号
        // 只有带 “-” 命名的是需要匹配的, 如果 liblcl 没有 "-" 命名是最新版本
        if (tmpVNum.length > 1 && tmpVNum[1] === vNum) {
          return moduleLCL[v]
        }
      }
      return null
    }
    // 当前energy最新版本支持的CEF版本号
    let supportLatestCEFVersion = 0
    let latestCEFVersionModule = undefined
    let latestCEFVersion = ''
    // 根据cef版本号匹配
    for (let v in moduleCEF) {
      let vNum = v.split("-")[1].trim() // cef-87 ..., 由此得到87类似的版本号
      let lcl = findLCLByNum(vNum)
      if (lcl !== null) {
        result.push({
          os: {}, // 不同系统的下载链接列表
          version: v.toUpperCase(),
          lcl: lcl,
          cef: moduleCEF[v]
        })
      }
      if (Number(vNum) > supportLatestCEFVersion) {
        supportLatestCEFVersion = Number(vNum)
        latestCEFVersionModule = moduleCEF[v]
        latestCEFVersion = v
      }
    }
    // 当前energy最新版本支持的CEF版本号
    if (latestCEFVersionModule) {
      let lcl = moduleLCL["liblcl"] // 如果 liblcl 没有 "-" 命名是最新版本
      if (lcl) {
        result.push({
          os: {}, // 不同系统的下载链接列表
          version: latestCEFVersion.toUpperCase(),
          lcl: lcl,
          cef: latestCEFVersionModule
        })
      }
    }
    return result
  },
  splitModuleAndGenURL(versionList) { // 拆分模块并生成链接
    let osList = ["Windows", "Linux", "MacOS"]
    // 模块系统支持区分
    let moduleOSSupport = function (osName, versionData, module, moduleName) {
      // 模块系统列表
      let osList = versionData.os[osName];
      if (!osList) {
        osList = {}
        versionData.os[osName] = osList
      }
      // 当前模块系统列表下载地址列表
      let osURLs = osList[moduleName]
      if (!osURLs) {
        osURLs = []
        osList[moduleName] = osURLs
      }
      // 当前模块配置
      let cfg = module.cfg
      let curSupportOSArch = cfg.supportOSArch.split(",")
      // 当前模块支持系统架构
      for (let i in curSupportOSArch) {
        let tmpOSName = curSupportOSArch[i]
        if (tmpOSName.indexOf(osName) === 0) {
          let downloadSource = downloadSourceItem[moduleName][cfg.downloadSource]
          let tmpUrl = downloadSource.url
          // 下载地址占位符替换
          tmpUrl = tmpUrl.replace("{version}", "v" + module.v)
          tmpUrl = tmpUrl.replace("{module}", module.moduleName)
          if (module.moduleName.indexOf("liblcl") === -1) {
            tmpOSName = tmpOSName.toLowerCase()
          }
          tmpUrl = tmpUrl.replace("{OSARCH}", tmpOSName)
          // 下载地址
          osURLs.push({
            label: tmpOSName,
            url: tmpUrl
          })
        }
      }
    }
    // lib动态库所在的真实版本号
    let libRealVersion = undefined
    for (let i = 0; i < osList.length; i++) {
      let osName = osList[i]
      // 遍历版本列表，将 lcl 和 cef 模块支持的系统和 osName 相同的生成对象
      for (let j = 0; j < versionList.length; j++) {
        let versionData = versionList[j]
        let lclModule = versionData.lcl
        let cefModule = versionData.cef
        moduleOSSupport(osName, versionData, lclModule, "lcl")
        moduleOSSupport(osName, versionData, cefModule, "cef")
        // 在lcl配置模块获取实际下载地址配置
        if (!libRealVersion) {
          libRealVersion = {v: lclModule.v, source: lclModule.cfg.downloadSource}
        }
      }
    }
    return libRealVersion
  },
  selectVersionChange() { // 下拉框 change 事件
    // 当前版本号
    let versionKey = data.value
    // console.log('version:', versionKey)
    // 在版本升级列表里找到这个版本信息
    let versionValue = versionsUpgrade[versionKey]
    if (!versionValue) {
      return
    }
    let enable = versionValue.enable === 1;
    // 相同版本
    let identical = versionValue.identical;
    if (enable) {
      // 相同版本, 需要在升级版本配置里找到它
      if (identical) {
        versionValue = this.findIdenticalVersion(versionsUpgrade, identical)
      }
      // 依赖模块, lcl cef
      let module = versionValue.dependenceModule
      // 全新的模块对象
      let newLCL = this.clone(module.lcl)
      let newCEF = this.clone(module.cef)
      // 查找模块配置信息
      this.findModule(modelLCLData, newLCL)
      this.findModule(modelCEFData, newCEF)
      // console.log("lcl", newLCL)
      // console.log("cef", newCEF)
      // 将模块匹配合并返回
      let versionList = this.mergeModule(newLCL, newCEF)
      // console.log("versionList", versionList)
      // 把 lcl 和 cef 模拟版本以系统(Windows, Linux, MacOS)分别生成对应的下载链接
      let libRealVersion = this.splitModuleAndGenURL(versionList)
      data.versionDownloadList = versionList
      // md5.txt
      let downloadSource = downloadSourceItem["lcl"][libRealVersion.source]
      let tmpMd5Url = downloadSource.md5
      tmpMd5Url = tmpMd5Url.replace("{version}", "v" + libRealVersion.v)
      data.md5URL = tmpMd5Url
      // console.log("实际版本号:", libRealVersion,data.md5URL)
    }
  }

}

const data = reactive({
  value: latestVersion.version,
  options: [],
  versionDownloadList: [],
  md5URL: ""
})

// toRefs(data)

for (let i = 0; i < versionKeysDesc.length; i++) {
  let key = versionKeysDesc[i]
  let versionValue = versionsUpgrade[key]
  if (versionValue.enable === 1) {
    let newOptions = {
      value: key,
      label: "v" + key
    }
    data.options.push(newOptions)
    if (key === latestVersion.version) {
      newOptions["selected"] = "selected"
    }
  }
}
event.selectVersionChange()
</script>

<style scoped>
.versionSelect {
  margin: 5px;
  background: #979292;
  -moz-appearance: auto;
  appearance: auto;
  -webkit-appearance: auto;
  border: 1px solid rgba(209, 234, 222, 0.94);
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  width: 100px;
  text-align: center;
}

.versionSelect option {
  height: 50px;
}
</style>
