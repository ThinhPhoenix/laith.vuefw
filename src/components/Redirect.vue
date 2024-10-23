<template>
    <button @click="handleClick">
      <span><slot /></span> <!-- Use slot to allow any content inside the button -->
      <span class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="svg-icon"
        >
          <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
          ></path>
        </svg>
      </span>
    </button>
  </template>
  
  <script setup>
  // Define props (if needed, you can define other props in the future)
  const props = defineProps({
    onClick: {
      type: Function,
      default: () => {}, // Default function if not provided
    },
  });
  
  // Emit a click event
  const handleClick = () => {
    props.onClick(); // Call the provided onClick function
  };
  </script>
  
  <style scoped>
  button {
    font-weight: 400;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    color: #ffffff70;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
    display: inline-flex;
    align-items: center;
  }
  
  button:focus,
  button:hover {
    color: #32ff70e1;
  }
  
  button:after {
    content: "";
    pointer-events: none;
    bottom: -7px;
    left: 0; /* Start from the left */
    position: absolute;
    width: 0%;
    height: 1px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 500ms;
    transition-property: width, right;
  }
  
  button:focus:after,
  button:hover:after {
    width: 100%;
  }
  
  .svg-icon {
    width: 0.9em;
    height: 0.8em;
    margin-left: 10px;
    fill: grey;
    transform: rotate(-45deg);
    transition: transform 0.5s ease-out;
  }
  
  button:hover .svg-icon {
    transform: rotate(0deg);
    fill: white;
  }
  </style>  