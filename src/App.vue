<template>
  <div>
    <headerVue></headerVue>
      <div class="container">
    <router-view>
      
    </router-view>
    
      </div>
  </div>
</template>

<script>
import headerVue from "@/components/Header.vue";
export default {
  name: "app",
  components: {
    headerVue,
  },
  data() {
    return {};
  },
};
</script>

<style>
.main {
  text-align: center;
  margin: 0 auto;
  padding-top: 70px;
}
.signup_area input,
.login input {
  width: 300px;
  height: 35px;
  display: flex;
  padding-left: 12px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  border: 1px solid green;
  outline: none;
}
.signup_area .btn-success,
.login .btn-primary {
  width: 304px;
  height: 39px;
  border: 1px solid deepskyblue;
  background: skyblue;
  cursor: pointer;
}
</style>
