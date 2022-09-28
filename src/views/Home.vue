<template>
    <div>
        <h1>Hello</h1>
    </div>
</template>

<script>
export default{
    mounted(){
    const getToken = localStorage.getItem('token');
        if(!getToken){
         this.$router.push('/login')
        }    
   }
}



</script>
