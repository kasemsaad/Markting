<template>
    <div class="flex items-center justify-center pl-4 pt-5 w-[90%] shadow-[0px_0px_40px_0px_rgba(185, 185, 185, 0.25)] ">
        <div class="bg-white flex items-center justify-center rounded-[20px] w-[458px] h-[268px] text-center">
            <div>
                <p>Select Contacts</p>
                <span class="py-6 inline-block">Or</span>
                <div class="">
                    <router-link to="/contacts/addContact" class="bg-[#D5222F] rounded-md py-2.5  px-6 text-sm text-white">Add Contact</router-link>
                    <router-link to="/contacts/bulkContact" class="bg-[#D5222F] rounded-md py-2.5  px-6 ml-6 text-sm text-white">Bulk contact</router-link>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from "vue";
  import user from '@/assets/icons/user-rounded.svg'
  
  const selectedChat = ref({
    image: user,
    name: "Jane Smiths",
    phone: "+000 123 456 7890",
  });
  </script>
  
  <style scoped>
    body {
        color:rgba(185, 185, 185, 0.25)
    }

  </style>
  