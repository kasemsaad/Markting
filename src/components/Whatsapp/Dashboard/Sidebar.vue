<template>
  <!-- Sidebar -->
  <aside class="sidebar overflow-y-auto w-[21%] bg-[#EFEFEF] mt-4 p-4 pt-6 flex flex-col">
    <div class="mb-4 text-xl font-bold">
      <img src="../../../assets/icons/logo-colored.svg" alt="Logo">
    </div>
    <ul class="font-medium text-xs text-black">
      <li
        v-for="item in listItems"
        :key="item.id"
        class="flex flex-col"
      >
        <div
          class="flex justify-between items-center py-1 h-[44px] px-3 cursor-pointer rounded-lg transition-all"
          :class="{
            'bg-[#393939] text-white': selectedItem === item.id,
            'text-black bg-transparent': selectedItem !== item.id
          }"
          @click="toggleDropdown(item.id); selectItem(item.id)"
        >
          <div class="flex items-center">
            <img
              :src="selectedItem === item.id ? item.iconWhite : item.icon"
              alt="icon"
              v-if="item.icon" 
            />
            <span v-else class="icon-placeholder"></span>

            <router-link 
              :to="item.route"
              class="ml-4"
              @click.native.stop="selectItem(item.id)"
            >
              {{ item.name }}
            </router-link>
          </div>
          <img
            width="18"
            v-if="item.hasArrow"
            :src="selectedItem === item.id ? arrowUp : arrowDown"
            alt="arrow"
          />
        </div>
        
        <!-- Sub menu rendering -->
        <ul
          v-if="dropdownState[item.id]"
          class="pl-8 mt-2 transition-all overflow-hidden"
        >
          <li
            v-for="subItem in item.subItems"
            :key="subItem.id"
            class="flex items-center mb-2 font-thin py-1 cursor-pointer text-[#929292] hover:text-[#111]"
            @click="toggleSubItem(item.id, subItem.id)"
          >
            <img
              :src="subItem.isSelected ? subItem.rhombusColored : subItem.rhombusIcon"
              alt="rhombus icon"
              class="mr-2"
            />
            <img
              :src="subItem.isSelected ? subItem.iconColored : subItem.icon"
              alt="sub-item icon"
              class="mr-2"
              v-if="subItem.icon"  
            />
            <span v-else class="icon-placeholder"></span> <!-- Fallback if sub-item icon is missing -->
            {{ subItem.name }}
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script setup>

import { reactive, ref } from "vue";
  import whatsappLight from '@/assets/icons/whatsapp-light.svg'
  import whatsappSelected from '@/assets/icons/colored-whatsapp.svg'
  import messengerLight from '@/assets/icons/messenger.svg'
  import messengerColored from '@/assets/icons/messenger-selected.svg'
  import rhombus from '@/assets/icons/rhombus.svg';
  import rhombusColored from '@/assets/icons/diamond-colored.svg';
  import facebook from '@/assets/icons/facebook-colored.svg';
  import facebookLight from '@/assets/icons/facebook.svg';
  import instagram from '@/assets/icons/instagram-colored.svg';
  import instagramLight from '@/assets/icons/instagram-light.svg';
  import twitter from '@/assets/icons/twitter-colored.svg';
  import twitterLight from '@/assets/icons/twitter-light.svg';
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
  
  const listItems = ref([
  {
      id: 1,
      name: 'Dashboard',
      icon: dashboardIcon,
      iconWhite: dashboardIconWhite,
      route: '/',
      hasArrow: false,
    },
    {
      id: 2,
      name: 'Chats',
      icon: chat,
      iconWhite: chatWhite,
      hasArrow: true,
      route: '/chats',
      subItems: [
      {
        id: 1,
        icon: whatsappLight,
        iconColored: whatsappSelected,
        rhombusIcon: rhombus,
        rhombusColored: rhombusColored,
        name: "WhatsApp",
        isSelected: false,
      },
      {
        id: 2,
        icon: messengerLight,
        iconColored: messengerColored,
        rhombusIcon: rhombus,
        rhombusColored: rhombusColored,
        name: "Messenger",
        isSelected: false,
      },
    ],
    },
    {
      id: 3,
      name: 'Contacts',
      icon: contactIcon,
      iconWhite: contactIconWhite,
      hasArrow: true,
      route: '/contacts',
      subItems: [
              { id: 1, 
                rhombusIcon: rhombus,
                rhombusColored: rhombusColored, 
                icon: null,
                iconColored: null,
                name: 'All Contacts',
                isSelected: false,
               },
              { id: 2, 
                rhombusIcon: rhombus,
                rhombusColored: rhombusColored, 
                icon: null,
                iconColored: null,
                name: 'Groups',
                isSelected: false,
               }]
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
      route: '/messageTemplates'
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
      name: 'Posting',
      icon: socialMediaIcon,
      iconWhite: socialMediaIconWhite,
      hasArrow: true,
      route: '/posting',
      subItems: [
              { id: 1, 
                rhombusIcon: rhombus,
                rhombusColored: rhombusColored, 
                icon: null,
                iconColored: null,
                name: 'Schedule',
                isSelected: false,
               },
              { id: 2,
                rhombusIcon: rhombus,
                rhombusColored: rhombusColored, 
                icon: facebookLight,
                iconColored: facebook,
                name: 'Facebook',
                isSelected: false
               },
              { id: 3,
                rhombusIcon: rhombus,
                rhombusColored: rhombusColored, 
                icon: twitterLight,
                iconColored: twitter,
                name: 'Twitter',
                isSelected: false
               },
              { id: 4,
                rhombusIcon: rhombus,
                rhombusColored: rhombusColored, 
                icon: instagramLight,
                iconColored: instagram,
                name: 'Instagram',
                isSelected: false
               },
              
              ]
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
      route: '/settings'
    },
  
  ])
  
   const selectedItem = ref(null);
   const dropdownState = reactive({});

  const selectItem = (id) => {
    selectedItem.value = selectedItem.value === id ? null : id
  }

  const toggleDropdown = (id) => {
    dropdownState[id] = !dropdownState[id];
  };

  const toggleSubItem = (parentId, subItemId) => {
    const parentItem = listItems.value.find((item) => item.id === parentId);
    parentItem.subItems.forEach((sub) => {
      sub.isSelected = sub.id === subItemId;
    });
  };

</script>
  
<style scoped>

.overflow-y-auto {
  overflow-y: auto;
  height: 98%;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: transparent;
}

.sub-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, padding 0.3s ease;
}

.sub-menu.open {
  max-height: 300px; 
  padding: 10px 0; 
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
  











