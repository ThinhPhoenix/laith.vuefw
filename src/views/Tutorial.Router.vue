<template>
  <div class="container">
    <div class="box">
      <span class="title">
        Automatically implements routing based on the 
        <code class="highlight">/views</code> directory.
      </span>
      <div class="description">
        <ol class="list">
          <li>
            The file <code class="highlight">/views/Index.vue</code> serves as the app root.
          </li>
          <li>
            The file <code class="highlight">/views/404.vue</code> is the 404 error page.
          </li>
          <li>
            Generate a sub-url separated by a dot <code class="highlight">.</code>. 
            For example: 
            <code class="highlight">/tutorial/router</code> corresponds to 
            <code class="highlight">/views/Tutorial.Router.vue</code>.
          </li>
          <li>
            Create path parameters using the template <code class="highlight">[param]</code>. 
            For example: 
            <code class="highlight">/settings/:user_id</code> corresponds to 
            <code class="highlight">/views/Settings[user_id].vue</code>.
          </li>
          <li>
            You can combine sub-URLs and parameters, allowing for unlimited growth in the number of parameters and sub-URLs.
          </li>
        </ol>
      </div>
      <span>
        Back to
        <router-link to="/">
          <redirect class="link">root</redirect>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script setup>
import Redirect from '@/components/Redirect.vue';
</script>

<style scoped>
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

.title {
  font-weight: bold;
  color: #e0e0e0;
}

.description {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #d1d1d1;
}

.list {
  list-style-type: decimal;
  list-style-position: inside;
  line-height: 1.75;
}

.list li{
  margin-top: 3px;
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
  font-weight: 400;
}
</style>
