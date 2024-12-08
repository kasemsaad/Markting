<template>
    <div class="flex flex-col flex-1 pl-4 pt-4 ">
        <div class="bg-white rounded-[20px] pt-5 pb-2 mb-4">
            <div class="flex items-center px-4 justify-between">
        <div class="flex items-center">
            <div class="ml-3">
                <h2 class="text-lg">Add Contact</h2>
            </div>
        </div>
    </div>
        
    <div class="flex justify-center items-center relative">
        <img src="../../../assets/icons/add-contact-user.svg" class="w-32" alt="" />
        <div class="bg-[#D5222F] rounded-full p-1 absolute top-20 right-64">
            <img src="../../../assets/icons/upload.svg" alt="">
        </div>
    </div>
      
<div class="px-6 py-2 flex items-center">
<div class="w-[565px]">
    <div class="form-container">
    <form @submit.prevent="handleSubmit" class="space-y-4">
    <div class="grid grid-cols-2 gap-4">
        <div>
        <label for="name" class="block text-sm font-medium text-[#111111]">Name</label>
        <select
            v-model="form.name"
            id="name"
            class="mt-1 px-2 block w-full text-[#E7E7E7] rounded-[10px] border border-[#DBDBDB] outline-none h-[40px] sm:text-sm"
        >
            <option value="" selected>Select your name</option>
            <option value="John">John</option>
            <option value="Jane">Jane</option>
            <option value="Doe">Doe</option>
        </select>
        </div>

        <!-- Country Input -->
        <div class="relative w-full">
        <label for="phone" class="block text-sm font-medium text-[#111111]">Phone</label>
        <select
            v-model="form.phone"
            id="phone"
            class="mt-1 px-2 block w-full text-[#E7E7E7] rounded-[10px] border border-[#DBDBDB] outline-none h-[40px] sm:text-sm"
        >
    </select>
    <div class="absolute top-[52%] px-1 border-r flex">
        <img src="../../../assets/icons/Egypt.svg" alt="">
        <img src="../../../assets/icons/arrow-down.svg" width="15" class="ml-1" alt="">
    </div>
        </div>
        <div>
        <label for="email" class="block text-sm font-medium text-[#111111]">Email</label>
        <select
            v-model="form.email"
            id="email"
            class="mt-1 px-2 block w-full text-[#E7E7E7] rounded-[10px] border border-[#DBDBDB] outline-none h-[40px] sm:text-sm"
        >
            <option value="" disabled>Select your email</option>
            <option value="user1@example.com">user1@example.com</option>
            <option value="user2@example.com">user2@example.com</option>
        </select>
        </div>
        <div>
        <label for="group" class="block text-sm font-medium text-[#111111]">Group</label>
        <select
            v-model="form.group"
            id="group"
            class="mt-1 px-2 block w-full text-[#E7E7E7] rounded-[10px] border border-[#DBDBDB] outline-none h-[40px] sm:text-sm"
        >
            <option value="" disabled>Select your group</option>
            <option value="Group A">Group A</option>
            <option value="Group B">Group B</option>
        </select>
        </div>
    </div>
    <hr>
    <div class="grid grid-cols-3 gap-4">
        <div>
        <label for="country" class="block text-sm font-medium text-[#111111]">Country</label>
        <select
            v-model="form.country"
            id="country"
            class="mt-1 px-2 block w-full text-[#E7E7E7] rounded-[10px] border border-[#DBDBDB] outline-none h-[40px] sm:text-sm"
        >
            <option value="" disabled>Select your country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
        </select>
        </div>
        <div>
        <label for="state" class="block text-sm font-medium text-[#111111]">State</label>
        <select
            v-model="form.state"
            id="state"
            class="mt-1 px-2 block w-full text-[#E7E7E7] rounded-[10px] border border-[#DBDBDB] outline-none h-[40px] sm:text-sm"
        >
            <option value="" disabled>Select your state</option>
            <option value="California">California</option>
            <option value="Texas">Texas</option>
        </select>
        </div>
        <div>
        <label for="city" class="block text-sm font-medium text-[#111111]">City</label>
        <select
            v-model="form.city"
            id="city"
            class="mt-1 px-2 block w-full text-[#E7E7E7] rounded-[10px] border border-[#DBDBDB] outline-none h-[40px] sm:text-sm"
        >
            <option value="" disabled>Select your city</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Houston">Houston</option>
        </select>
        </div>
    </div>
    <div>
        <label for="address" class="block text-sm font-medium text-[#111111]">Address</label>
        <select
        v-model="form.address"
        id="address"
        class="mt-1 px-2 block w-full text-[#E7E7E7] rounded-[10px] border border-[#DBDBDB] outline-none h-[40px] sm:text-sm"
        >
        <option value="" disabled>Select your address</option>
        <option value="123 Main St">123 Main St</option>
        <option value="456 Oak St">456 Oak St</option>
        </select>
    </div>
    </form>
  </div>
    </div>
    </div>
    </div>
    <div class="text-right">
        <a href="#" class=" bg-[#E7E7E7] text-[#D5222F] rounded-md inline-block w-[113px] py-2 text-center text-base font-extralight">Cancel</a>
        <a href="#" class=" bg-[#D5222F] text-[#FDFDFD] rounded-md inline-block w-[113px] py-2 text-center ml-3 text-base font-extralight">Save</a>
    </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from "vue";
  import user from '@/assets/icons/user-rounded.svg'
  import { reactive } from 'vue';

    const form = reactive({
    name: '',
    phone: '',
    email: '',
    group: '',
    country: '',
    state: '',
    city: '',
    address: '',
    });

const handleSubmit = () => {
  
  
};
  const selectedChat = ref({
    image: user,
    name: "Jane Smiths",
    phone: "+000 123 456 7890",
  });
  </script>
  
  <style scoped>
    form input::placeholder {
        color: #E7E7E7;
        font-size: 14px;
    }
    option {
        color: #E7E7E7;
        font-size: 14px;
    }

   
  </style>
  