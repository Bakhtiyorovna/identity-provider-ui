<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    login() {
      const msalConfig = {
        clientId: 'SizningClientID',
        authority: 'https://login.microsoftonline.com/SizningDirectoryID',
        redirectUri: 'http://localhost:8080', // O'zgartiring o'zingizning sayt manzilingizga
      };

      const myMSALObj = new Msal.UserAgentApplication(msalConfig);

      myMSALObj.loginPopup()
        .then(response => {
          // Kirish muvaffaqiyatli amalga oshirildi
          console.log('Foydalanuvchi kirdi: ', response);
        })
        .catch(err => {
          // Kirishda xatolik yuz berdi
          console.error('Kirishda xatolik: ', err);
        });
    },
  },
});
</script>

<template>
  <div style="">
    <div
      class="w-full p-4 bg-white border border-gray-400  shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-8 rounded-lg"
      style="margin-left: auto; margin-right: auto; width: 450px "
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
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>

        <div class="flex" style="gap: 5px">
          <div class="w-full bg-gray-400 mt-3 mx-2" style="height: 1px"></div>

          <div class="text-gray-500 text-sm ">Or     
          </div>

          <div class="text text-gray-500 text-sm ;"></div>
          <div class="w-full bg-gray-400 mt-3 mx-2" style="height: 1px"></div>
        </div>
       

<button  type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 w-full" style="justify-content: center; align-items:center;">
  <svg class="w-4 h-4 mr-2" fill="currentcolor" width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="m0 0v10.719h10.719v-10.719zm13.279 0v10.719h10.719v-10.719zm-13.279 13.281v10.719h10.719v-10.719zm13.279 0v10.719h10.719v-10.719z"/></svg>
  Sign in with Microsoft
</button>
<button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 w-full" style="justify-content: center; align-items:center;">
  <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
  </svg>
  Sign in with Github
</button>
<button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-full" style="justify-content: center; align-items:center;">
  <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
  </svg>
  Sign in with Google
</button>
<button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center text-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 w-full" style="justify-content: center; align-items:center;">
  <svg class="w-4 h-4 mr-2" width="18px" height="18px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path fill="currentcolor" stroke="#000000" stroke-linejoin="round" stroke-width="5" d="M120.675 42.01h-12.121c-22.222 0-33.91 10.69-33.91 26.45 0 17.818 8.08 26.163 24.675 36.866l13.708 8.772L73.634 170H44.197l35.353-50.01c-20.334-13.842-31.746-27.285-31.746-50.022C47.804 41.46 68.728 22 108.41 22h39.394v147.863h-27.128z" data-name="Контур 2" style="stroke-width:12;stroke-miterlimit:4;stroke-dasharray:none"/></svg>
Sign in with Yandex
</button>
        
<button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-full" style="justify-content: center; align-items:center;">
  <!-- <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
  </svg> -->

  <svg class="w-4 h-4 mr-2" width="17px" height="17px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><title>Telegram icon</title><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>
  Sign in with Telegram
</button>

        <div class="flex text-sm font-medium text-gray-500 dark:text-gray-300" style="justify-content: center; align-items:center;">
    
    Not registered?
    <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>

  </div>
      </form>
    </div>

    
  </div>
</template>
<style scoped>


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