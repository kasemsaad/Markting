<script setup>
    import Sidebar from '../Sidebar.vue';
    import Header from '../Header.vue';
    import CampaignsTable from '../Campaigns/CampaignsTable.vue';
</script>
<template>
    <div class="app-container ">
        <Sidebar />
        <div class="main-content py-4 pl-4 flex-1">
            <Header title="Basic Replies / AI Reply Assistant" :hide-menu="true" headerText="Automation" />
            <CampaignsTable menuTitle="Automation" btn-text="Create" :hideButton="true" :tableHeaders="[
                { key: 'name', label: 'Name' },
                { key: 'trigger text', label: 'Trigger Text' },
                { key: 'match criteria', label: 'Match Criteria' },
                { key: 'response type', label: 'Response Type' },
                { key: 'last updated', label: 'Last Updated' }
            ]"
            :tableData="messageTemplateData" />
        </div>
    </div>
</template>