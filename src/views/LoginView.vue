<script lang="ts">
    import CustomInput from '@/components/general/CustomInput.vue';
    import {defineComponent} from 'vue';
    import loginIcon from '../assets/images/mail.svg';
    import passwordIcon from '../assets/images/key.svg';
    import { LoginServices } from '@/services/LoginServices';
    import router from '@/router';

    const loginServices = new LoginServices();

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
    },

    methods: {
        setLogin(v:string){
            this.login = v
        },
        setPassword(v:string){
            this.password = v
        },
        async doLogin(){
            try{
                console.log(this.login)
                console.log(this.password)
                if(!this.login || !this.login.trim() || !this.password || !this.password.trim()){
                    return this.error = 'Favor informar usuário e senha.';
                }

                this.loading = true;
                await loginServices.login({login: this.login, password: this.password});
                this.loading = false;
                return router.push('/');
            }catch(e: any){
                console.log('erro ao efeutar login:', e)

                if(e?.response?.data?.message){
                    this.error = e?.response?.data?.message;
                }else{
                    this.error = 'Não foi possível efeutar login, tente novamente!'
                }
            }

            this.loading = false;
        }
    }
})
</script>

<template>
    <div class="container-public">
        <img src="../assets/images/logo.svg" alt="logo devameet" class="logo"/>
        <form>
            <p v-if="error" class="error">{{ error }}</p>
            <CustomInput :icon="loginIcon" alt="login" name="login" placeholder="Login" type="text" :model-value="login" @setInput="setLogin"/>
            <CustomInput :icon="passwordIcon" alt="senha" name="senha" placeholder="Senha" type="password" :model-value="password" @setInput="setPassword"/>
            
            <button type="button" @click="doLogin">{{ buttonText }}</button>
            <div class="link">
                <p>Não Possui uma conta?</p>
                <RouterLink to="/register">Faça seu cadastro agora!</RouterLink>
            </div>
        </form>
    </div>
</template>

<style src="../assets/styles/public.scss" lang="scss"/>
