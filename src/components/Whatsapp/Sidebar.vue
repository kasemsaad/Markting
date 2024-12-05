<template>
    <aside class="sidebar  flex flex-col justify-between h-screen min-w-64 bg-[#EFEFEF] p-8">
      <div>
        <img src="../../assets/icons/logo.svg" alt="" class="mb-8"/>
        <nav>
          <ul class="font-medium space-y-4 text-sm text-black">
            <li class="flex"><img src="../../assets/icons/dashboard.svg" alt=""><a href="#" class="ml-4 inline">Dashboard</a></li>
            <div class="flex justify-between">
                <li class="flex pt-1.5">
                <img src="../../assets/icons/chat.svg" alt=""> <a href="#" class="block ml-4">Chats</a>
            </li><img src="../../assets/icons/arrow-down.svg" alt="" class="w-5">
            </div>
            <div class="flex justify-between">
                <li class="flex pt-1.5"><img src="../../assets/icons/contact.svg" alt=""><a href="#" class="ml-4 block">Contacts</a></li><img src="../../assets/icons/arrow-down.svg" alt="" class="w-5">
            </div>
            <li class="flex pt-1.5"><img src="../../assets/icons/campaign.svg" alt=""><a href="#" class="ml-4 block">Campaigns</a></li>
            <li class="flex pt-1.5"><img src="../../assets/icons/message.svg" alt=""><a href="#" class="ml-4 block">Message Templates</a></li>
            <li class="flex pt-1.5"><img src="../../assets/icons/automation.svg" alt=""><a href="#" class="ml-4 block">Automation</a></li>
            <div class="flex justify-between">
                <li class="flex pt-1.5"><img src="../../assets/icons/social-media.svg" alt=""><a href="#" class="ml-4 block">Social Media Accounts</a></li><img src="../../assets/icons/arrow-down.svg" alt="" class="w-5">
            </div>
            <li class="flex pt-1.5"><img src="../../assets/icons/user-sharing.svg" alt=""><a href="#" class="ml-4 block">Team</a></li>
            <li class="flex pt-1.5"><img src="../../assets/icons/ticket-star.svg" alt=""><a href="#" class="ml-4 block">Support</a></li>
          </ul>
        </nav>
      </div>
      <footer class="mt-8  px-2 flex items-center justify-center gap-8 space-x-4 bg-[#FBFBFB]">
       <div class="flex gap-2">
        <img src="../../assets/icons/user.svg" alt="User" class="w-10 h-10 rounded-md" />
        <div>
          <p class="text-sm font-normal text-black">John Doe</p>
          <p class="text-xs text-[#9D9D9D]">john@example.com</p>
        </div>
       </div>
        <img src="../../assets/icons/out.svg" alt="">
      </footer>
    </aside>
  </template>
  
  <script setup>
  </script>
  <style scoped>
   .sidebar {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
   }
   footer {
    border-radius: 10px;
    width: 234px;
    height: 62px;
   }
  </style>