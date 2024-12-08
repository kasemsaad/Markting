<script setup>
    import WhatsappSidebar from '../Whatsapp/WhatsappSidebar.vue';
    import OptionsWindow from './OptionsWindow.vue';
</script>

<template>
    <div class="sides-container flex mx-auto pt-1">
        <WhatsappSidebar :hide-logo="false" :hide-text="false" :hide-select="true" :hide-add-btn="false" :hide-dots="false"/>
        <OptionsWindow />
    </div>
</template>