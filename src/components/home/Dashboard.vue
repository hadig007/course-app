<template>
    <div >
        <headers></headers>
        <!-- content dan sidebar  -->
        <home></home>
    </div>
</template>

<script>
import axios from 'axios'
import Headers from '../layout/Headers.vue'
import Home from './Home.vue'
export default {
  components: { Headers, Home },
    computed:{
        cekToken(){
            return this.$store.state.token
        }
    },
    async created(){
        let has = localStorage.getItem('token')
        if(!has){
            this.$router.push('/login')
            localStorage.removeItem('token')
            console.log('kembali ke halaman login karena token null, dan menghapus token dari localstorage')
        }
        await axios.get('auth/user-profile',{
            headers:{
                Authorization : 'Bearer ' + localStorage.getItem('token')
            }
        }).then((res)=>{
            console.log('berhasil mendapat data user', res.data)
            this.$store.dispatch('user', res.data)
        }).catch((e)=>{
            console.log(e.response.data)
            this.$router.push('/login')
            localStorage.removeItem('token')
            console.log('kembali ke halaman login karena token null, dan menghapus token dari localstorage')
        })

    }
}
</script>