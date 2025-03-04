<template>
    <div class="spinner-wrapper">
        <div class="spinner">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<style scoped>

.spinner-wrapper {
    display: flex;  
    justify-content: center;
  }

  .spinner {
    width: 6.25rem;
    height: 6.25rem;
    position: relative;
  }

  .spinner div {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 10px solid transparent;
    border-top-color: rgb(246, 171, 73);
    border-radius: 50%;
    animation: spinnerOne 1.2s linear infinite;
  }

  .spinner div:nth-child(2) {
    border: 10px solid transparent;
    border-bottom-color: rgb(246, 171, 73);
  }

  @keyframes spinnerOne {
    0% { transform: rotate(0deg); border-width: 10px; }
    50% { transform: rotate(180deg); border-width: 1px; }
    100% { transform: rotate(360deg); border-width: 10px; }
  }
</style>