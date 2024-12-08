<template>
    <div class="rounded-2xl bg-white mt-4 p-4">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
        <p class="text-2xl mb-4 md:mb-0">{{ menuTitle }}</p>
        <div class="flex flex-col md:flex-row gap-4">
          <div class="relative">
            <input
              type="text"
              placeholder="Search"
              v-model="search"
              class="w-full md:w-[270px] pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img
              src="../../../assets/icons/search.svg"
              alt="search"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5"
            />
          </div>
          <a v-if="!hideButton" href="#" class="ml-2 bg-[#D5222F] rounded-lg flex items-center justify-center px-4"><img src="../../../assets/icons/reload.svg" alt=""></a>
          <div class="flex items-center justify-center bg-[#D5222F] w-full md:w-auto px-4 py-2 rounded-lg">
            <img src="../../../assets/icons/add.svg" alt="" class="w-5 h-5">
            <a href="#" class="ml-2 text-white">{{ btnText }}</a>
          </div>
        </div>
      </div>
  
      <div class="mt-6 overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
          <tr class=" text-[#393939] border-0 border-b-2 border-[#EEA4AA]">
            <th
              v-for="header in tableHeaders"
              :key="header.key"
              class="px-4 py-2 border-b font-light text-[14px] "
            >
              {{ header.label }}
            </th>
          </tr>
        </thead>
        <tbody>
  <tr v-for="item in paginatedData" :key="item.id">
    <td
      v-for="header in tableHeaders"
      :key="header.key"
      :class="getColumnClass(header.key)" 
      :style="getColumnStyle(header.key, item[header.key])"
      class="text-[13px] text-[#393939] px-4 py-5 border-b border-[#F6F6F6]"
    >
      {{ item[header.key] }}
    </td>
  </tr>
</tbody>
        </table>
  
        <div class="flex justify-between">
          <div class="flex items-center mt-4 gap-2 text-[14px] text-[#111]">
            <button
              :disabled="currentPage === 1"
              @click="goToPage(1)"
              class="px-3 py-1 border  border-[#EFEFEF] rounded-lg bg-white disabled:opacity-50"
            >
              &lt;&lt;
            </button>
            <button
              :disabled="currentPage === 1"
              @click="currentPage--"
              class="px-3 py-1 border border-[#EFEFEF] rounded-lg bg-white disabled:opacity-50"
            >
              &lt;
            </button>
  
            <button
              v-for="page in visiblePages"
              :key="page"
              :class="['px-3 py-1 border border-[#EFEFEF] rounded-lg', { 'bg-[#D5222F] text-white transition-all': currentPage === page, 'bg-white': currentPage !== page }]"
              @click="goToPage(page)"
            >
              {{ page === -1 ? '...' : page }}
            </button>
  
            <button
              :disabled="currentPage === totalPages"
              @click="currentPage++"
              class="px-3 py-1 border border-[#EFEFEF] rounded-lg bg-white disabled:opacity-50"
            >
              &gt;
            </button>
            <button
              :disabled="currentPage === totalPages"
              @click="goToPage(totalPages)"
              class="px-3 py-1 border  border-[#EFEFEF] rounded-lg bg-white disabled:opacity-50"
            >
              &gt;&gt;
            </button>
          </div>
          <div class="text-[14px] mt-4">
            <span class="text-[#393939]">Showing</span>
            <select
              v-model="pageSize"
              class="bg-white border rounded-lg py-1.5 px-2 mx-2 outline-none"
              @change="goToPage(1)" 
            >
              <option value="4">4</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <span>of {{ filteredData.length }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from "vue";
  
  const campaigns = ref([]);
  const search = ref("");
  const currentPage = ref(1);
  const pageSize = ref(4);


  defineProps({
    menuTitle: {
      type: String,
      default: 'Dashboard',  
    },
   
    hideButton: {
      type: Boolean,
      default: false,  
    },
    tableHeaders: {
    type: Array,
    required: true
  },
  btnText: {
    type: String,
    default: 'Add'
  },
  tableData: {
    type: Array,
    required: true
  }
  });
  
  // Fake API Data
  const fetchCampaigns = () => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: "Campaign " + (i + 1),
      template: "Template " + (i % 5 + 1),
      deliveryRate: Math.floor(Math.random() * 100) + "%",
      readRate: Math.floor(Math.random() * 100),
      status: i % 2 === 0 ? "Active" : "Inactive",
    }));
  };
  
  onMounted(() => {
    campaigns.value = fetchCampaigns();
  });
  
  const filteredData = computed(() => {
    return campaigns.value.filter((campaign) =>
      campaign.name.toLowerCase().includes(search.value.toLowerCase())
    );
  });
  
  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return filteredData.value.slice(start, end);
  });
  
  const totalPages = computed(() =>
    Math.ceil(filteredData.value.length / pageSize.value)
  );
  
  const visiblePages = computed(() => {
    const pages = [];
    const total = totalPages.value;
  
    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage.value > 3) {
        pages.push(1, -1);
      }
      for (
        let i = Math.max(2, currentPage.value - 1);
        i <= Math.min(total - 1, currentPage.value + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage.value < total - 2) {
        pages.push(-1, total);
      }
    }
    return pages;
  });
  
const goToPage = (page) => {
  if (page !== -1) {
    currentPage.value = page;
  }
};

const getColumnClass = (key, value) => {
  if (key === 'status') 
  return '';
};

const getColumnStyle = (key, value) => {
  if (key === 'status') {
    const isActive = value === 'Active';
    return {
      backgroundColor: isActive ? 'rgba(27, 131, 84, 0.20)' : ' rgba(213, 34, 47, .20)', 
      color: '#393939', 
      fontSize: '10px',
      borderRadius: '12px', 
      textAlign: 'center',
      padding: '2px 7px', 
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px',
      display: 'inline-block', 
      textAlign: 'center',
      justifyConten: 'center',
      maxWidth: '60px', 
    };
  }
  return {};
};
</script>
  
<style scoped>
body {
  color: rgba(27, 131, 84, 0.20);
  background-color: rgba(213, 34, 47, .20);
}
</style>
  