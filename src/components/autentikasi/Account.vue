<template>
    <ul>
        <li>
            <router-link to="/" >Account setting</router-link>
        </li>
        <li>
            <button @click="logout">Logout</button>
        </li>
    </ul>
</template>

<script>
import axios from 'axios'
export default {
    methods:{
        logout(){
            axios.post('auth/logout',{
                headers:{
                    Authorization : 'Bearer ' + this.$store.state.token
                }
            }).then((res)=>{
                    this.$router.push('/login')
                    localStorage.removeItem('token')
                    console.log(res.data)
                }).catch(er=>console.log(er.response.data))
        }
    }
}
</script>

<style scoped>
ul{
    background-color: rgb(238, 130, 238);
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: 4px;
}
li{
    padding: 0 0.4rem;
    list-style: none;
}
a{
    text-decoration: none;
    color: whitesmoke;
    font-size: .9rem;
}
button{
    background-color: transparent;
    font-size: .9rem;
    border:none;
    padding: 0;
    color: whitesmoke;
}
</style>