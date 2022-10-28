<template class="text-center">
    <div class="container">
        <h4 class="text-secondary">Hello there,<br><span>{{ Key.name }}</span></h4><br>
        <div class="row">
            <h1>Booking requests</h1>
            <div class="col-sm-6 mb-4">
                <div class="card">
                <div class="card-body p-4">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <!-- <a href="#" class="btn btn-primary position-absolute bottom-0 end-0">Go somewhere</a> -->
                    <div class="col-md-12">
                        <li>Icon</li>
                        <li>Icon</li>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-sm-6 mb-4">
                <div class="card">
                <div class="card-body p-4">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div class="col-md-12">
                        <li>Icon</li>
                        <li>Icon</li>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    <!-- <h1>{{ this.id }}</h1> -->
</template>
<script>
    export default {
        setup(){
             // set token
             let Key = JSON.parse(localStorage.getItem('token'));
             return{
                Key
             }
        }
    }
</script>
<style scoped>

</style>