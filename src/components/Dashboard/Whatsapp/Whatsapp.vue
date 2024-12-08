<script setup>
    import WhatsappSidebar from './WhatsappSidebar.vue';
    import ChatWindow from './ChatWindow.vue';
</script>

<template>
    <div class="sides-container flex mx-auto pt-1">
        <WhatsappSidebar :hide-logo="true" :hide-text="true" :hide-add-btn="true" :hide-dots="true"/>
        <ChatWindow />
    </div>
</template>

<style scoped>
 
</style>
