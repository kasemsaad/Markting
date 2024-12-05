<template>
    <div class="chat-list flex flex-col w-96 p-8 bg-white">
      <div>
        <div class="flex justify-between items-center mb-7 ">
          <img class="whatsapp w-36" src="../../assets/icons/whatsapp.svg" alt="">
          <select name="" id="" class="text-sm px-2 border border-[#DDD] rounded-md w-28 h-9">
            <option value="" class="">All(3)</option>
          </select>
        </div>
        <div class="relative">
          <input
            type="text"
            placeholder="Search"
            class="search-input text-sm outline-none w-full p-2 pl-10 border border-[#DBDBDB]"
          />
          <img
            src="../../assets/icons/search.svg"
            alt="search"
            class="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>
      <ul class="flex-1 overflow-y-auto py-2">
        <li
          v-for="chat in chats"
          :key="chat.id"
          class="flex items-center py-4 cursor-pointer"
        >
          <img :src="chat.image" alt="" class="w-10 h-10 rounded-lg mr-4" />
          <div>
            <p class="text-sm text-black">{{ chat.name }}</p>
            <p class="text-xs text-[#DBDBDB]">{{ chat.lastMessage }}</p>
          </div>
          <span class="ml-auto text-xs text-[#7F7F7F]">{{ chat.time }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import user1 from '@/assets/icons/user1.svg';
  import user2 from '@/assets/icons/user2.svg';
  import user3 from '@/assets/icons/user3.svg';
  import user4 from '@/assets/icons/user4.svg';
  
  const chats = ref([
    {
      id: 1,
      name: "John Doe",
      lastMessage: "how are you?",
      time: "11:04 AM",
      image: user1,
    },
    {
      id: 2,
      name: "Jane Smiths",
      lastMessage: "how are you?",
      time: "11:04 AM",
      image: user2,
    },
    {
      id: 3,
      name: "Steven Malone",
      lastMessage: "how are you?",
      time: "11:04 AM",
      image: user3,
    },
    {
      id: 4,
      name: "Pam Stone",
      lastMessage: "how are you?",
      time: "11:04 AM",
      image: user4,
    },
  ]);
  </script>
  
  <style>
    .chat-list {
        box-shadow: 0px 0px 38.7px 0px rgba(211, 211, 211, 0.25);
        border-radius: 20px;
    }
    .search-input {
        border-radius: 10px;
    }
  </style>
  