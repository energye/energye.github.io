<template>
  <h2 id="{{ data.version }}">{{ data.version }}<br></h2>
  Download Source:
  <select class="versionSelect" v-model="data.downloadValue" @change="event.selectVersionChange">
    <option v-for="option in data.downloadSource" :value="option.name" :selected="option.name">
      {{ option.name }}
    </option>
  </select>
  <div>
    <!-- 版本下载信息 -->
    <table>
      <tr style="font-weight: bold;">
        <td>OS Platform</td>
        <td>ARCH</td>
        <td>Install CLI CMD</td>
        <td>32</td>
        <td>64</td>
      </tr>
      <!-- CLI Download List -->
      <tbody>
      <tr v-for="(os, i) in data.os">
        <td>{{ os.name }}</td>
        <td>{{ os.ARCH }}</td>
        <td><code>{{ os.CMD }}</code></td>
        <td v-if="os.file32 !== ''">
          <a :href="event.getURLFile(os.URL, os.file32)" target="_blank">Download</a>
        </td>
        <td v-else>-</td>
        <td v-if="os.file64 !== ''">
          <a :href="event.getURLFile(os.URL, os.file64)" target="_blank">Download</a>
        </td>
        <td v-else>-</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
// CLI 最新版本号
import cli from '/public/data/command-line-tools.json';


const data = reactive({
  version: '-.-.-',
  downloadValue: "Sourceforge",
  downloadURL: "https://sourceforge.net/projects/energye/files/",
  downloadSource: [
    {name: "Sourceforge", url: "https://sourceforge.net/projects/energye/files/"},
    {name: "Github", url: "https://github.com/energye/energy/releases/download/"},
    {name: "Gitee", url: "https://gitee.com/energye/energy/releases/download/"}
  ],
  os: [
    {
      name: "Windows",
      ARCH: "x86_64",
      CMD: "-",
      ARCH32: true,
      ARCH64: true,
      URL: "",
      file32: "energy-windows32.zip",
      file64: "energy-windows64.zip"
    },
    {
      name: "MacOSX",
      ARCH: "x86_64",
      CMD: "brew install energy",
      ARCH32: false,
      ARCH64: true,
      URL: "",
      file32: "",
      file64: "energy-macosx64.zip"
    },
    {
      name: "MacOS",
      ARCH: "ARM64",
      CMD: "brew install energy",
      ARCH32: false,
      ARCH64: true,
      URL: "",
      file32: "",
      file64: "energy-macosarm64.zip"
    },
    {
      name: "Linux",
      ARCH: "x86_64",
      CMD: "brew install energy",
      ARCH32: true,
      ARCH64: true,
      URL: "",
      file32: "energy-linux32.zip",
      file64: "energy-linux64.zip"
    },
    {
      name: "Linux",
      ARCH: "ARM",
      CMD: "-",
      ARCH32: true,
      ARCH64: true,
      URL: "",
      file32: "energy-linuxarm.zip",
      file64: "energy-linuxarm64.zip"
    },
  ],
  downloadList: []
})
const event = {
  latest() {
    data.version = "v" + cli.major + "." + cli.minor + "." + cli.build
  },
  getURLFile(url, file) {
    if (file == "") {
      return "-"
    }
    return url + "/" + file
  },
  selectVersionChange() {
    console.log(data.downloadValue)
    for (let i in data.downloadSource) {
      if (data.downloadSource[i].name == data.downloadValue) {
        data.downloadURL = data.downloadSource[i].url
        break
      }
    }
    event.initDownloadList()
  },
  initDownloadList() {
    for (let i in data.os) {
      let os = data.os[i]
      os.URL = data.downloadURL + data.version
    }
  }
}
event.latest()
event.initDownloadList()


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
  width: 150px;
  font-weight: bold;
  text-align: center;
}

.versionSelect option {
  height: 50px;
}
</style>
