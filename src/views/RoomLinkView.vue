<script lang="ts">
import HeaderVue from '@/components/general/Header.vue';
import FooterVue from '@/components/general/Footer.vue';

import { defineComponent } from 'vue';
import router from '@/router';
import RoomLink from '@/components/room/RoomLink.vue';

export default defineComponent({

    setup(){
        return{
            mobile: window.innerWidth <= 992
        }
    },
    beforeCreate(){
        if(!this.mobile ){
            router.push({name: 'home'})
        }
    },

    components: { HeaderVue, FooterVue, RoomLink }
});
</script>

<template>
    <HeaderVue/>
        <RoomLink/>
    <FooterVue/>
</template>



<style lang="scss"/>