<template>
  <div class="container">
    <div class="box">
      <div class="content">
        <span class="text-main">
          Run <code class="highlight">npm run use tailwind</code> in terminal
        </span>
        <span class="text-small">
          TailwindCSS already setup, you can use it without any hesitation.
        </span>
      </div>
      <div>
        <span>
          Back to
          <router-link to="/">
            <redirect class="link">root</redirect>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Redirect from "@/components/Redirect.vue";
</script>

<style scoped>
.content{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 20px); /* Adjust based on actual header/footer height */
}

.box {
  background-color: rgba(48, 48, 48, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid rgba(16, 185, 129, 0.5);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.text-main {
  color: #e0e0e0;
}

.text-small {
  font-size: 0.875rem;
  color: #d1d1d1;
  margin-top: 1rem;
}

code.highlight {
  background-color: rgba(55, 245, 112, 0.15);
  color: #32ff6f;
  padding: 3px;
  border-radius: 4px;
  border: 0.5px solid #32ff6fd2;
}

.link {
  margin-top: 1.25rem;
}
</style>
