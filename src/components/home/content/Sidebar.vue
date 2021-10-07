<template>
    <div>
        <div class="sidebar">
            <!-- sidebar untuk admin  -->
            <h5>Admin</h5>
            <admin></admin>
            <!-- sidebar untuk materi belajar  -->
            <h5>Materi Belajar</h5>
            <ul>
                <li>
                    <router-link @click="showHtml=!showHtml" to="/dashboard/html"><h6>HTML</h6></router-link>
                    <Html v-if="showHtml"/>
                </li>
                <li><button to="/"><h6>CSS</h6></button></li>
                <li><button to="/"><h6>JAVASCRIPT</h6></button></li>
            </ul>
            <!-- sidebar untuk admin  -->
            <h5>Pelajar</h5>
            <ul>
                <li><button to="/"><h6>Nama</h6></button></li>
                <li><button to="/"><h6>Nama</h6></button></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Admin from '../admin/Admin.vue'
import Html from './html/Html.vue'
export default {
    components: { Html, Admin },
    data(){
        return{
            showHtml: false
        }
    }

}
</script>Html

<style scoped>
.sidebar{
    /* background-color: rgba(189, 160, 189, 0.308); */
    border-right: solid 3px grey;
    padding: 2rem 1.2rem;
}
h1{
    text-align: center;
}
ul{
    padding: 0;
}
li{
    list-style: none;
    transition: 0.15s;
    margin: 0.5rem;
    padding: .3rem;
}
button{
    background-color: transparent;
    border:none;
    margin:0;
    padding: 0;
}
/* li:hover{
    transform: scale(1.1);
    background-color: violet;
    border-radius: 4px;
} */
h6:hover{
    font-weight: bold;
}
h5{
    border-bottom: solid grey 2px;
}
a{
    color: black;
    text-decoration: none;
}
a:hover{
    color: black;
}
</style>