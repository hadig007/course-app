<template>
    <div>
        <nav>
            <h1><span>Portal</span>Kampus</h1>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link  to="/">About</router-link></li>
                <li>
                    <router-link @click="showAccount=!showAccount" to="/">Account</router-link>
                    <account @click="showAccount=!showAccount" v-if="showAccount"></account>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import Account from '../autentikasi/Account.vue'
export default {
    components: { Account },
    data(){
        return{
            showAccount:false
        }
    }
    
}
</script>

<style scoped>
div{
    background-color: blueviolet;
}
nav{
    padding: 0.5rem 3rem;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: space-between;

}
a{
    color: whitesmoke;
    text-decoration: none;
}
h1{
    margin: 0;
}
ul{
    display: flex;
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
    margin: 5px 10px;
    padding: 5px 10px;
    transition: 0.2s;
}
span{
    color: rgba(245, 245, 245, 0.425);
}
li:hover{
    /* transform: scale(1.2); */
    /* background-color: rgba(238, 130, 238, 0.479); */
    border-radius: 4px;
}
a:hover{
    color: white;
}
</style>