<script lang="ts">
    import CustomInput from '@/components/general/CustomInput.vue';
    import {defineComponent} from 'vue';
    import loginIcon from '../assets/images/mail.svg';
    import passwordIcon from '../assets/images/key.svg';

    export default defineComponent({
    components: { CustomInput },

    setup(){
        return {
            loginIcon,
            passwordIcon,
        }
    },

    data(){
        return {
            login: '',
            password: '',
            error: '',
            loading: false
        }
    },

    computed: {
        buttonText(){
            return this.loading ? 'Carregando...' : 'Login'
        }
    }
})
</script>

<template>
    <div class="container-public">
        <img src="../assets/images/logo.svg" alt="logo devameet" class="logo"/>
        <form>
            <p v-if="error" class="error">{{ error }}</p>
            <CustomInput :icon="loginIcon" alt="login" name="login" placeholder="Login" type="text" :model-value="login"/>
            <CustomInput :icon="passwordIcon" alt="senha" name="senha" placeholder="Senha" type="password" :model-value="password"/>
            
            <button>{{ buttonText }}</button>
            <div class="link">
                <p>Não Possui uma conta?</p>
                <RouterLink to="/register">Faça seu cadastro agora!</RouterLink>
            </div>
        </form>
    </div>
</template>

<style src="../assets/styles/public.scss" lang="scss"/>
