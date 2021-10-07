<template>
    <div>
        <div class="box">
            <h2>Login Form</h2>
            <form @submit.prevent="login">
                <div class="form">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email">
                </div>
                <div class="form">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password">
                </div>
                <div class="form">
                    <button>Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login(){
            await axios.post('auth/login',{
                email : this.email,
                password :this.password
            }).then((res)=>{
                localStorage.setItem('token', res.data.access_token )
                this.$router.push('/dashboard')
            }).catch(e=>console.log('gagal login',e.response.data))
        }
    }
}
</script>

<style scoped>
.box{
    background-color: violet;
    border: solid 2px violet;
    padding: 2rem;
    margin: 15%;
    border-radius: 4px;
}
h2{
    text-align: center;
    font-weight: bold;
    color: whitesmoke;
    padding-bottom: 10px;
    border-bottom: 2px solid gray;
    font-size: 2.2rem;
}
form{
    margin-top: 20px;
    font-size: 1.3rem;
    background-color: rgba(255, 255, 255, 0.356);
    padding: 1rem;
    border-radius: 4px;
    color: rgb(68, 96, 148);
}
.form{
    display: flex;
    flex-direction: column;
    padding: 0.4rem;
}
input{
    border-radius: 4px;
    border: solid rgba(128, 128, 128, 0.377) 1px;
    padding: 3px 10px;
}
button{
    border-radius: 4px;
    border: solid grey 2px;
    font-weight: bold;
}
</style>