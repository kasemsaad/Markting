<template>
  <div class=" bg-white rounded-xl p-4 mt-6 flex flex-col">
   <div class="flex items-center justify-between">
    <div class=" mb-4">
      <h3 class="text-[14px] text-[#A7A7A7]">{{ title }}</h3>
      <p class="text-[24px] text-[#111111]">{{ value }}</p>
    </div>
    <img :src="icon" alt="" class="bg-[#F6F6F6] rounded-full p-3" />
   </div>
    <div class="flex flex-col sm:flex-row">
        <div class="">
            <p class=" text-[#929292] flex justify-between items-center text-[9px] mt-1">
                <span v-if="percentage > 0" class="mr-1"><img src="../../../assets/icons/Dashboard/arrow.svg" alt=""></span>
                <!-- <span v-else-if="percentage < 0" class="mr-1"><img src="../../../assets/icons/Dashboard/arrow.svg" alt=""></span> -->
                {{ Math.abs(percentage) }}% increase compared to last month
            </p>
        </div>
       
    </div>
  </div>
  </template>
  
  <script setup>
    import { computed } from 'vue';
    import contactsIcon from '@/assets/icons/Dashboard/contacts.svg';
    import campaignsIcon from '@/assets/icons/Dashboard/campaign.svg';
    import templatesIcon from '@/assets/icons/Dashboard/templates.svg';
    import chatsIcon from '@/assets/icons/Dashboard/chats.svg';
  // Props
 const props = defineProps({
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    percentage: {
      type: Number,
      required: true
    }
  });

const icon = computed(() => {
  switch (props.title.toLowerCase()) {
    case 'contacts':
      return contactsIcon;
    case 'campaigns':
      return campaignsIcon;
    case 'templates':
      return templatesIcon;
    case 'all chats':
      return chatsIcon;
    default:
      return '';
  }
});
  </script>
  
  <style scoped>


  </style>
  