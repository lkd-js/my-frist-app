<template>
  <div>
    <div class="login-container">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DaLogin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values["用户名"], values["密码"]);
      if (values["用户名"] == "123" && values["密码"] == "123") {
        this.$router.replace("/DaPerson/DaUser");
      } else {
        alert("密码错误，请重新输入");
        this.username = "";
        this.password = "";
      }
    },
  },
};
</script>

<style>
</style>