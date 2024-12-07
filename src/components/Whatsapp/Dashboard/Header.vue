<template>
    <div class="flex justify-between items-center">
      <div>
        <p class="text-[14px] text-[#757575]">Dashboard</p>
        <h1>Welcome back, John 👋</h1>
      </div>
      <div class="flex justify-between">
        <div class="relative">
        <input
          type="text"
          placeholder="Search"
          class="search-input text-sm outline-none w-[270px] mr-2 p-3 pl-10 border border-[#E7E7E7] bg-transparent rounded-[100px]"
        />
        <img
          src="../../../assets/icons/search.svg"
          alt="search"
          class="absolute left-3 top-1/2 transform -translate-y-1/2" width="20"
        />
      </div>

      <div class="flex justify-between items-center w-[140px] px-2 py-1.5 mr-2 rounded-[46px] bg-[#FDFDFD] shadow-[0px_4px_4px_0px_rgba(253, 253, 253, 0.25)]">
        <div class="flex items-center">
            <span class="bg-[#EEA4AA] rounded-full w-[34px] h-[34px] mr-2 flex items-center justify-center">T</span>
            <p class="text-[14px]">Test</p>
        </div>
        <img src="../../../assets/icons/arrow-down.svg" alt="" width="16px">
      </div>
    
      <div class="flex justify-between w-[200px] rounded-[46px] py-1.5 px-2 bg-[#393939]">
        <div class="flex">
        <img src="../../../assets/icons/Dashboard/user.svg" alt="">
        <div class="ml-2">
            <div class="text-[#E7E7E7] text-[12px]">John Doe</div>
            <p class="text-[#A7A7A7] text-[10px]">john@example.com</p>
        </div>
        </div>
        <img src="../../../assets/icons/Dashboard/logout.svg" alt="">
      </div>
      </div>
    </div>
  </template>
  
<script setup>

</script>
  
<style scoped>

</style>