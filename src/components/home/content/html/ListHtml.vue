<template>
    <div>
        <h2>{{ judul }}</h2>
        <p>{{ materi }}</p>
    </div>
</template>

<script>
export default {
    props:['judul', 'materi'],
    data(){
        return{
            html:null
        }
    },  
}
</script>