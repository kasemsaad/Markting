<script setup>
    import Sidebar from '../Sidebar.vue';
    import Header from '../Header.vue';
    import CampaignsTable from './CampaignsTable.vue';
</script>
<template>
    <div class="app-container ">
        <Sidebar />
        <div class="main-content py-4 pl-4 flex-1">
            <Header title="Campaigns / Add Campaign"  header-text="Campaigns" :hide-menu="false" />
            <CampaignsTable menu-title="Campaigns" hide-button="false" :tableHeaders="[
                { key: 'name', label: 'Campaign Name' },
                { key: 'template', label: 'Template' },
                { key: 'deliveryRate', label: 'Delivery Rate' },
                { key: 'readRate', label: 'Read Rate' },
                { key: 'status', label: 'Status' }
            ]"
            :tableData="campaignsData"/>
        </div>
    </div>
</template>