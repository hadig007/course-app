// home ini akan menampung sidebar dan content
// menggunakan grid:bootstrap untuk membagi sidebar dan content

<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <!-- sidebar  -->
                    <sidebar></sidebar>
                </div>
                <div class="col-md-10">
                    <!-- content  -->
                    <Content/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Content from './content/Content.vue'
import Sidebar from './content/Sidebar.vue'
export default {
  components: { Sidebar, Content },
    
}
</script>

<style scoped>
.row>*{
    padding: 0;
}
</style>