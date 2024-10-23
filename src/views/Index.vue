<template>
    <section class="">
      <div class="w-screen h-screen blur-[0.8px] absolute"></div>
      <div class="flex justify-center items-center h-screen flex-col gap-3">
        <monalisa/>
        <p>Learn <router-link to="/tutorial/router"><redirect>router</redirect></router-link>, <router-link to="/tutorial/pinia"><redirect>pinia</redirect></router-link> and <router-link to="/tutorial/tailwindcss"><redirect>tailwindcss</redirect></router-link> others the same as Vue + Vite.</p>
      </div>
    </section>
  </template>
  
  <script setup>
    import Redirect from '@/components/Redirect.vue';
    import Monalisa from '@/components/Monalisa.vue'
  </script>