<template>
  <section>
    <div class="background"></div>
    <div class="content">
      <monalisa/>
      <p>
        Learn 
        <router-link to="/tutorial/router">
          <redirect>router</redirect>
        </router-link>, 
        <router-link to="/tutorial/pinia">
          <redirect>pinia</redirect>
        </router-link> and 
        <router-link to="/tutorial/tailwindcss">
          <redirect>tailwindcss</redirect>
        </router-link> others the same as Vue + Vite.
      </p>
    </div>
  </section>
</template>

<script setup>
import Redirect from '@/components/Redirect.vue';
import Monalisa from '@/components/Monalisa.vue';
</script>

<style scoped>
section {
  display: flex; /* Use flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  position: relative;
  min-height: calc(100vh - 20px); /* Adjust based on actual header/footer height */
  margin: 0; /* Remove default margin */
}

.background {
  filter: blur(0.8px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  z-index: 0; /* Background behind content */
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative; /* Position content relative to the section */
  z-index: 1; /* Ensure content is above the background */
  text-align: center; /* Center text */
  justify-content: center;
  align-items: center;
}
</style>
