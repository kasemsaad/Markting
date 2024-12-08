<script setup>
    import Sidebar from '../Sidebar.vue';
    import Header from '../Header.vue';
    import CampaignsTable from '../Campaigns/CampaignsTable.vue';
</script>
<template>
    <div class="app-container ">
        <Sidebar />
        <div class="main-content py-4 pl-4 flex-1">
            <Header title="Message Templates / Add Template" headerText="Message Templates" :hide-menu="false"  />
            <CampaignsTable menuTitle="Message Templates" :hideButton="false" :tableHeaders="[
                { key: 'name', label: 'Name' },
                { key: 'category', label: 'Category' },
                { key: 'preview', label: 'Preview' },
                { key: 'status', label: 'Status' },
                { key: 'last updated', label: 'Last Updated' }
            ]"
            :tableData="messageTemplateData" />
        </div>
    </div>
</template>