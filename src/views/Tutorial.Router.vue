<template>
    <div class="flex justify-center items-center h-screen">
      <div class="bg-[#3030307e] backdrop-blur-sm rounded-lg p-6 border border-emerald-600 border-opacity-50 shadow-lg">
        <span class="font-bold text-gray-200">
          Automatically implements routing based on the 
          <code class="highlight">/views</code> directory.
        </span>
        <div class="mt-3 text-sm text-gray-300">
          <ol class="list-decimal list-inside space-y-2">
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
        <span>Back to
            <router-link to="/">
                <redirect class="mt-5 font-normal">root</redirect>
            </router-link>
        </span>
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