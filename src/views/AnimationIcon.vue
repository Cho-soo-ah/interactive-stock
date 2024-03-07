<template>
  <div>
    <!-- 
      Lordicon - Lordicon is a powerful library of thousands of carefully crafted animated icons.
      Lottie - Render After Effects animations natively on Web, Android and iOS, and React Native.
     -->

    <lord-icon
      src="https://cdn.lordicon.com/vduvxizq.json"
      trigger="hover"
      stroke="light"
      colors="primary:green"
      style="width: 250px; height: 250px"
    >
    </lord-icon>

    <lord-icon
      src="./checkmark.json"
      trigger="hover"
      style="width: 250px; height: 250px"
    ></lord-icon>
  </div>
</template>

<script setup lang="ts">
import lottie from 'lottie-web'
import { defineElement } from '@lordicon/element'

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation)
</script>
<style lang="scss" scoped></style>
