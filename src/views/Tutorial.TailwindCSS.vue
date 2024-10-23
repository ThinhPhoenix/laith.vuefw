<template>
    <div class="flex justify-center items-center h-screen">
      <div class="bg-[#3030307e] backdrop-blur-sm rounded-lg p-6 border border-emerald-600 border-opacity-50 shadow-lg">
        <span class="font-bold text-gray-200">
          TailwindCSS already setup you can use it without any hesitaion.
        </span>
        <div>
            <span>Back to
            <router-link to="/">
                <redirect class="mt-5 font-normal">root</redirect>
            </router-link>
        </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Redirect from '@/components/Redirect.vue';
  </script>
  
  <style scoped>
  code.highlight {
    background-color: rgba(55, 245, 112, 0.15);
    color: #32ff6f;
    padding: 3px;
    border-radius: 4px;
    border: 0.5px solid #32ff6fd2;
  }
  </style>  