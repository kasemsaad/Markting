<template>
    <div class="flex justify-between items-center">
      <div>
        <p class="text-[14px] text-[#757575]">{{ title }}</p>
        <h1 v-if="!hideTitle">{{ headerText }}</h1>
    
      </div>
      <div class="flex justify-between">
        <div class="relative">
        <input
          type="text"
          placeholder="Search"
          class="search-input text-sm outline-none w-[270px] mr-2 p-3 pl-10 border border-[#E7E7E7] bg-transparent rounded-[100px]"
        />
        <img
          src="../../assets/icons/search.svg"
          alt="search"
          class="absolute left-3 top-1/2 transform -translate-y-1/2" width="20"
        />
      </div>

      <div class="flex justify-between items-center w-[140px] px-2 py-1.5 mr-2 rounded-[46px] bg-[#FDFDFD] shadow-[0px_4px_4px_0px_rgba(253, 253, 253, 0.25)]">
        <div class="flex items-center">
            <span class="bg-[#EEA4AA] rounded-full w-[34px] h-[34px] mr-2 flex items-center justify-center">T</span>
            <p class="text-[14px]">Test</p>
        </div>
        <img src="../../assets/icons/arrow-down.svg" alt="" width="16px">
      </div>
    
      <div class="flex justify-between w-[200px] rounded-[46px] py-1.5 px-2 bg-[#393939]">
        <div class="flex">
        <img src="../../assets/icons/Dashboard/user.svg" alt="">
        <div class="ml-2">
            <div class="text-[#E7E7E7] text-[12px]">John Doe</div>
            <p class="text-[#A7A7A7] text-[10px]">john@example.com</p>
        </div>
        </div>
        <img src="../../assets/icons/Dashboard/logout.svg" alt="">
      </div>
      </div>
    </div>
    <div class="flex  gap-8 mt-8 border-b w-[50%]" v-if="hideMenu">
      <!-- Header Menu -->
      <!-- <div class="flex gap-2 items-center cursor-pointer border-b border-transparent pb-3">
        <img src="../../assets/icons/automation-settings.svg" alt="">
        <span class="text-[14px] text-[#111111]">Basic Replies</span>
      </div>
      <div class="flex gap-2 items-center cursor-pointer border-b border-transparent pb-3">
        <img src="../../assets/icons/illustrator.svg" alt="">
        <span class="text-[14px] text-[#111111]">AI Replies Assistant</span>
      </div>
      <div class="flex gap-2 items-center cursor-pointer border-b border-transparent pb-3">
        <img src="../../assets/icons/automation-settings.svg" alt="">
        <span class="text-[14px] text-[#111111]">Flow Builder</span>
      </div> -->
      <div
      v-for="(menu, index) in menus"
      :key="index"
      class="flex gap-2 items-center cursor-pointer border-b pb-3"
      :class="{'border-[#D5222F] border-b-2': activeMenu === index, 'border-transparent': activeMenu !== index}"
      @click="selectMenu(index)"
    >
      <img :src="menu.icon" :alt="menu.label" />
      <span class="text-[14px] text-[#111111]">{{ menu.label }}</span>
    </div>
    </div>
  </template>
  
<script setup>
import settings from '@/assets/icons/automation-settings.svg';
import AI from '@/assets/icons/illustrator.svg';
import flowBuilder from '@/assets/icons/automation-settings.svg';
import { ref } from 'vue';

const activeMenu = ref(0); 

const menus = ref([
  {
    label: "Basic Replies",
    icon: settings,
  },
  {
    label: "AI Replies Assistant",
    icon: AI,
  },
  {
    label: "Flow Builder",
    icon: flowBuilder,
  },
]);

const selectMenu = (index) => {
  activeMenu.value = index; 
};

  defineProps({
    title: {
      type: String,
      default: 'Dashboard',  
    },
   
    headerText: {
      type: String,
      default: 'Welcome back, John 👋',  
    },
    hideMenu: {
      type: Boolean,
      default: true
    }
  });
</script>
  
<style scoped>

</style>