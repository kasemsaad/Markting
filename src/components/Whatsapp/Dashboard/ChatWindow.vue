<template>
  <div class="flex flex-col flex-1 pl-4 pt-5">
    <div class="flex items-center px-4 justify-between">
      <div class="flex items-center">
        <img :src="selectedChat.image" alt="" />
        <div class="ml-3">
          <h2 class="text-lg">{{ selectedChat.name }}</h2>
          <p class="text-xs text-[#A7A7A7]">{{ selectedChat.phone }}</p>
        </div>
      </div>

      <div class="flex items-center space-x-2">
        <button
          class="bg-[#DC4852] text-white rounded-md text-sm mark-btn"
        >
          <img src="../../../assets/icons/mark.svg" class="inline mr-1" alt="" />
          Mark as closed
        </button>
        <div class="bg-[#111] rounded-md dots">
          <img src="../../../assets/icons/dots-white.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="flex-1 p-4"> </div>

    <div class="p-4 flex items-center">
      <div class="relative flex-1">
        <input
          type="text"
          placeholder="Type your message..."
          class="send-input text-md outline-none flex-1 w-full py-3 pl-6 bg-[#EFEFEF]"
        />
        <button
          class="absolute right-0 top-1/2 transform -translate-y-1/2 "
        >
          <div class="flex">
            <img src="../../../assets/icons/smile.svg" alt="" class="mr-4"/>
            <img src="../../../assets/icons/attachment.svg" alt="" class="mr-4"/>
            <img src="../../../assets/icons/send.svg" alt="" class="bg-[#D5222F] p-3 rounded-full"/>
          </div>
        </button>
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
  .dots {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .mark-btn {
    width: 155px;
    height: 44px;
  }
  .send-input {
      border-radius: 50px;
      width: 565px;
  }
</style>
