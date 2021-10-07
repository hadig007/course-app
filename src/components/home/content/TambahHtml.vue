<template>
  <div class="tambah">
      <QuillEditor v-model="content" class="editor" theme="snow" toolbar="full"/>
      <button @click="simpan">simpan</button>
  </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from 'axios';
export default {
    components: {
        QuillEditor
    },
    data(){
        return{
            content:''
        }
    },
    methods:{
        simpan(){
            axios.post('create_html',{
                judul:'judul 1',
                materi:this.content,
                penulis:this.$store.state.user.name
            }).then(res=>console.log(res.data))
            .catch(e=>console.log(e.response.data))
        }
    }
}
</script>

<style scoped>
.editor{
    height: 500px;
}
</style>
