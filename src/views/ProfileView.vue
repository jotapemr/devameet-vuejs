<script lang="ts">
import HeaderVue from '@/components/general/Header.vue';
import FooterVue from '@/components/general/Footer.vue';
import { defineComponent } from 'vue';
import AvatarInput from '@/components/general/AvatarInput.vue';
import ActionHeader from '@/components/profile/ActionHeader.vue'

export default defineComponent({
    components: { HeaderVue, FooterVue, AvatarInput, ActionHeader }
});
</script>

<template>
    <HeaderVue/>
    <div class="container-profile">
        <ActionHeader/>
        <AvatarInput/>
        <div class="input">
            <span>Nome</span>
            <input type="text" placeholder="Informe seu nome"/>
            <img src="../assets/images/clear.svg" alt="limpar"/>
        </div>
        <div class="logout">
            <div>
                <img src="../assets/images/logout.svg" alt="sair"/>
                <span>Sair</span>
            </div>
        </div>
    </div>
    <FooterVue/>
</template>



<style lang="scss"/>