<template>
    <div>
        <div class="cards"
        v-for="user in users"
        :key="user.id"
        >
            <div class="body">
                <h4><span>Nama</span> {{ user.name }}</h4>
                <h5><span>Email</span> {{ user.email }}</h5>
            </div>
        </div>
    </div>
        <p>klik salah satu untuk melihat aktifitas terbaru</p>
</template>


<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['users']),
        // filterUser(){
        //     return this.users.filter(users=> users.id == 1)
        // }
    },
    async created(){
        await axios.get('users').then((res)=>{
            console.log('data users', res.data)
            this.$store.dispatch('users', res.data)
        }).catch(e=>console.log(e.response.data))
    }
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.cards{
    background-color: rgba(102, 51, 153, 0.404);
    padding: 1rem;
    margin: 1rem;
    border-radius: 4px;
}
.body{
    display: flex;
    flex-direction: column;
}
span{
    color: grey;
    font-size: 1rem;
}
</style>

