<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Typed from 'typed.js'; 

export default defineComponent({
  mounted() {
    const typed = new Typed('.text', {
      strings: ["Github", "Yandex", "Telegram", "Microsoft"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  },
});
</script>

<template>
  <div style="">
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-400  shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-8"
      style="margin-left: auto; margin-right: auto"
    >
      <form class="space-y-6" action="#">

        
<p class="max-w-lg text-3xl font-semibold leading-loose text-gray-900 dark:text-white">My platform</p>

          <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Remember me</label
            >
          </div>
          <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >Forget Password?</a
          >
        </div>
        <button
          type="submit"
          class="login-btn w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>

        <div class="flex" style="gap: 5px">
          <div class="w-full bg-gray-400 mt-3 mx-2" style="height: 1px"></div>

          <div class="text-gray-500 text-sm " style="width: 600px">Or Login in with      
          </div>

          <div class="text text-gray-500 text-sm ;"></div>
          <div class="w-full bg-gray-400 mt-3 mx-2" style="height: 1px"></div>
        </div>

        <div class="asosiy-sci">
          <a href="#"><i class="bx bxl-github"></i></a>
          <a href="#" class="pb-1"><i class="bx bxl-yandex">Я</i></a>
          <a href="#"><i class="bx bxl-telegram"></i></a>
          <a href="#"><i class="bx bxl-microsoft"></i></a>
        </div>
      </form>
    </div>

    <div
      class="w-full max-w-sm px-4 py-3 bg-white border border-gray-400 shadow  dark:bg-gray-800 dark:border-gray-700 mt-2 mb-4"
      style="margin-left: auto; margin-right: auto"
    >
      <div class="flex text-sm font-medium text-gray-500 dark:text-gray-300" style="justify-content: center; align-items:center;">
    
        Not registered?
        <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
  
      </div>
    </div>
  </div>
</template>
<style scoped>
.asosiy-sci {
  width: full;
  display: flex;
  margin-right:30px;
}

.login-btn:hover{
  box-shadow: 0 0 10px blue;
}

.asosiy-sci a {

  margin-left: auto;
  margin-top: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid blue;
  border-radius: 50%;
  font-size: 20px;
  color: blue;
  text-decoration: none;
  text-decoration: 30px 15px 30px 0;
}
.asosiy-sci a:hover {
  background: blue;
  color: snow;
  box-shadow: 0 0 20px blue;
  border-radius: 40px;
  letter-spacing: 1px;
  font-weight: 600;
}
</style>