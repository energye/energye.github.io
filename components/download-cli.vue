<template>
  v{{ data.version }}
</template>

<script setup lang="ts">
import {reactive} from 'vue'
// 最新版本号
import cli from '/public/data/command-line-tools.json';


const data = reactive({
  version: '-.-.-',
})
const event = {
  latest() {
    data.version = cli.major + "." + cli.minor + "." + cli.build
  }
}
event.latest()
</script>

<style scoped>
</style>
