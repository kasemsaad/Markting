<template>
  <div class="app-container bg-white rounded-3xl overflow-hidden flex w-[90%] mx-auto">
  <!-- Sidebar -->
  <Sidebar class="w-[42%] mt-[-.2px]"/>
    <!-- Chat Lists -->
    <div class="chat-list w-[55%] bg-white p-6">
    <div>
      <div class="flex justify-between items-center mb-7">
        <img v-if="hideLogo" class="whatsapp w-36" src="../../../assets/icons/whatsapp.svg" alt="">
        <p class="text-[20px]" v-if="!hideText">Contacts</p>
        <select name="" id="" v-if="!hideSelect" class="text-sm px-2 border border-[#DDD] rounded-md w-28 h-9">
          <option value="" class="">All(3)</option>
        </select>
        <div class="flex">
          <router-link to="/contacts/addContacts" v-if="!hideAddBtn" class="bg-[#DC4852] text-[#FDFDFD] text-[14px] rounded-md p-2 flex items-center mr-2"><img src="../../../assets/icons/add.svg" alt="" class="mr-1"> <span class="font-light">Add</span></router-link>
        <a href="#" class="bg-[#111111] p-3 rounded-md " v-if="!hideDots"><img src="../../../assets/icons/dots-2.svg" alt=""></a>
        </div>
      </div>
      <div class="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          class="search-input text-sm outline-none w-full p-2 pl-10 border border-[#EFEFEF]"
        />
        <img
          src="../../../assets/icons/search.svg"
          alt="search"
          class="absolute left-3 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </div>

 <!-- Chat list -->
 <ul class="flex-1 py-2">
      <li
        v-for="chat in chats"
        :key="chat.id"
        class="users-chat flex items-center mt-2 py-4 px-2 cursor-pointer rounded-[10px]"
        :class="{
          'border-[#FBE9EA]': chat.id,
          'border': chat.id,
          'shadow-[0px_0px_13.7px_0px_rgba(149,149,149,0.25)]': selectedChat === chat.id,
          'border-transparent': selectedChat !== chat.id,
        }"
        @click="selectChat(chat.id)"
      >
      <img
      v-if="selectedChat === chat.id"
      src="../../../assets/icons/on.svg"
      alt="On"
      class="w-3 h-4 mr-2"
    />
    <img
      v-else
      src="../../../assets/icons/off.svg"
      alt="Off"
      class="w-3 h-4 mr-2"
    />
        <img :src="chat.image" alt="" class="w-10 h-10 rounded-lg mr-4" />
        <div>
          <p class="text-sm text-black">{{ chat.name }}</p>
          <p class="text-xs text-[#DBDBDB]">{{ chat.lastMessage }}</p>
        </div>
        <span class="ml-auto text-xs text-[#7F7F7F]">{{ chat.time }}</span>
      </li>
 
    </ul>
  </div>
  </div>
</template>

<script setup>
import Sidebar from "../Sidebar.vue";
import { reactive, ref } from "vue";
// import whatsappLight from '@/assets/icons/whatsapp-light.svg'
// import whatsappSelected from '@/assets/icons/colored-whatsapp.svg'
// import messengerLight from '@/assets/icons/messenger.svg'
// import messengerColored from '@/assets/icons/messenger-selected.svg'
// import rhombus from '@/assets/icons/rhombus.svg';
// import rhombusColored from '@/assets/icons/diamond-colored.svg';
import arrowUp from '@/assets/icons/arrow-up.svg';
import arrowDown from '@/assets/icons/arrow-down.svg';
import chat from '@/assets/icons/chat.svg';
import chatWhite from '@/assets/icons/chat-white.svg'
import dashboardIcon from "@/assets/icons/dashboard.svg";
import dashboardIconWhite from "@/assets/icons/dashboard-white.svg";
import contactIcon from "@/assets/icons/contact.svg";
import contactIconWhite from "@/assets/icons/contact-white.svg";
import campaignIcon from "@/assets/icons/campaign.svg";
import campaignIconWhite from "@/assets/icons/campaign-white.svg";
import messageIcon from "@/assets/icons/message.svg";
import messageIconWhite from "@/assets/icons/message-white.svg";
import automationIcon from "@/assets/icons/automation.svg";
import automationIconWhite from "@/assets/icons/automation-white.svg";
import socialMediaIcon from "@/assets/icons/social-media.svg";
import socialMediaIconWhite from "@/assets/icons/social-white.svg";
import teamIcon from "@/assets/icons/user-sharing.svg";
import teamIconWhite from "@/assets/icons/team-white.svg";
import supportIcon from "@/assets/icons/ticket-star.svg";
import supportIconWhite from "@/assets/icons/support-white.svg";
import settingsIcon from "@/assets/icons/settings.svg";
import settingsIconWhite from "@/assets/icons/settings-white.svg";

import user1 from '@/assets/icons/user1.svg';
import user2 from '@/assets/icons/user2.svg';
import user3 from '@/assets/icons/user3.svg';
import user4 from '@/assets/icons/user4.svg';

const listItems = ref([
{
    id: 1,
    name: 'Dashboard',
    icon: dashboardIcon,
    iconWhite: dashboardIconWhite,
    hasArrow: false,
    route: '/'
  },
  {
    id: 2,
    name: 'Chats',
    icon: chat,
    iconWhite: chatWhite,
    hasArrow: true,
    route: '/chats',
    subItems: [
            { id: 1, name: "SubItem 1" },
            { id: 2, name: "SubItem 2" }]
  },
  {
    id: 3,
    name: 'Contacts',
    icon: contactIcon,
    iconWhite: contactIconWhite,
    hasArrow: true,
    route: '/contacts',
    subItems: [
            { id: 1, name: "SubItem 1" },
            { id: 2, name: "SubItem 2" }]
  },
  {
  id: 4,
    name: 'Campaigns',
    icon: campaignIcon,
    iconWhite: campaignIconWhite,
    hasArrow: false,
    route: '/campaigns'
  },
  {
    id: 5,
    name: 'Message Templates',
    icon: messageIcon,
    iconWhite: messageIconWhite,
    hasArrow: false,
    route: '/messageTemplate'
  },
  {
    id: 6,
    name: 'Automation',
    icon: automationIcon,
    iconWhite: automationIconWhite,
    hasArrow: false,
    route: '/automation'
  },
  {
    id: 7,
    name: 'Social Media Accounts',
    icon: socialMediaIcon,
    iconWhite: socialMediaIconWhite,
    hasArrow: true,
    route: '/socialMedia',
    subItems: [
            { id: 1, name: "SubItem 1" },
            { id: 2, name: "SubItem 2" }]
  },
  {
    id: 8,
    name: 'Team',
    icon: teamIcon,
    iconWhite: teamIconWhite,
    hasArrow: false,
    route: '/team'
  },
  {
    id: 9,
    name: 'Support',
    icon: supportIcon,
    iconWhite: supportIconWhite,
    hasArrow: false,
    route: '/support'
  },
  {
    id: 10,
    name: 'Settings',
    icon: settingsIcon,
    iconWhite: settingsIconWhite,
    hasArrow: false,
    route: 'settings'
  },

])

const selectedItem = ref(null);
const dropdownState = ref({});

const selectItem = (id) => {
  selectedItem.value = selectedItem.value === id ? null : id
}

const toggleDropdown = (id) => {
  dropdownState.value[id] = !dropdownState.value[id];
};
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

const users = [
  { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/40', message: 'How are you?' },
  { id: 2, name: 'Jane Smiths', avatar: 'https://via.placeholder.com/40', message: 'Hello!' },
  { id: 3, name: 'Steven Malone', avatar: 'https://via.placeholder.com/40', message: 'Good morning!' },
  { id: 4, name: 'Pam Stone', avatar: 'https://via.placeholder.com/40', message: 'How are you?' },
];

const selectedChat = ref(null)

const selectChat = (id) => {
  selectedChat.value = id === selectedChat.value ? null : id }

defineProps({
  hideText: {
    type: Boolean,
    default: false
  },
  hideLogo: {
    type: Boolean,
    default: false
  },
  hideSelect: {
    type: Boolean,
    default: false,
  },
  hideAddBtn: {
    type: Boolean,
    default: false
  },
  hideDots: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.app-container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  border-radius: 20px;
  display: flex;
  box-shadow: 0px 0px 38.7px 0px rgba(211, 211, 211, 0.25);
  height: 95vh;
}

.overflow-y-auto {
  overflow-y: auto;
  height: 100%;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: transparent;
}
li:hover {
  cursor: pointer;
}

.users-chat {
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.search-input {
  border-radius: 10px;
}
</style>
