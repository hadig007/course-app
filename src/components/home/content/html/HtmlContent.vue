<template>
    <div>
        <div class="pembuka">
            <button @click="showTambah=!showTambah"><h2>Tambah Konten HMTL</h2></button>
            <html-content v-if="showTambah"></html-content>
            <!-- <list-html
            v-for="h in html" :key="h.id"
            :judul="h.judul"
            :materi="h.materi"
            ></list-html> -->
            <hr>
            <!-- <router-view></router-view> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import HtmlContent from '../TambahHtml.vue'
// import ListHtml from './ListHtml.vue'
export default {
    components:{
        HtmlContent
    },
    data(){
        return{
            html:null,
            showTambah: true
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
.pembuka{
    margin: 1rem;
    border: solid rgb(196, 196, 196) 2px;
    padding: 1rem;
}
p{
    text-align: justify;
    padding: 1rem;
}
button{
    background-color: transparent;
    border: none;
}
</style>