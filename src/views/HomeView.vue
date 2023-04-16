<script lang="ts">
import HeaderVue from '@/components/general/Header.vue';
import FooterVue from '@/components/general/Footer.vue';
import MeetHomeVue from '@/components/meet/MeetHome.vue'
import { defineComponent } from 'vue';

export default defineComponent({
    components: { HeaderVue, FooterVue, MeetHomeVue}
});
</script>

<template>
    <HeaderVue/>
    <MeetHomeVue/>
    <FooterVue/>
</template>



<style lang="scss"/>