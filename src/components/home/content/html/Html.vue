<template>
    <div v-for="h in html" :key="h.id">
        <!-- router link yang mengarah ke materi sesuai judul -->
        <!-- <router-link :to="`/dashboard/html/html_list/${h.id}`">{{ h.judul}}</router-link> -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            html:null
        }
    },
    async created(){
        await axios.get('html_index').then((res)=>{
            console.log(res.data)
            console.log('berhasil mengambil data materi html')
            this.html = res.data
        }).catch(e=>console.log(e.response.data))
    }
}
</script>

<style scoped>
div{
    padding-left: 10px;
}
p{
    margin: 0;
    font-size: 0.9rem;
}
a{
    color: black;
    text-decoration: none;
    font-size: 0.9rem;
}
</style>