<script lang="ts">
import HeaderVue from '@/components/general/Header.vue';
import FooterVue from '@/components/general/Footer.vue';

import { defineComponent } from 'vue';
import MeetAddVue from '@/components/meet/MeetAdd.vue';
import router from '@/router';

export default defineComponent({

    setup(){
        return{
            mobile: window.innerWidth <= 992
        }
    },
    beforeCreate(){
        if(this.mobile ){
            router.push({name: 'home'})
        }
    },

    components: { HeaderVue, FooterVue, MeetAddVue }
});
</script>

<template>
    <HeaderVue/>
    <MeetAddVue/>
    <FooterVue/>
</template>



<style lang="scss"/>