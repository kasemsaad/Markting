<script setup>
    import WhatsappSidebar from './WhatsappSidebar.vue';
    import ChatWindow from './ChatWindow.vue';
</script>

<template>
    <div class="sides-container flex mx-auto pt-1">
        <WhatsappSidebar />
        <ChatWindow />
    </div>
</template>

<style scoped>
    .sides-container {
        width: 95%;
        height: 100vh;
        overflow-y: hidden;
    }
</style>
