<template>
  <div class="box" :style="{ backgroundImage: 'url(assets/images/a2.jpg)' }">
    <div class="container">
      <div class="top-header">
        <h1>login</h1>
      </div>
      <div class="input-field">
        <input type="text" class="input" placeholder="Email" required autocomplete="off">
        <i class="bx bx-user"></i>
      </div>
      <div class="input-field">
        <input type="password" class="input" placeholder="Password" required autocomplete="off">
        <i class="bx bx-lock-alt"></i>
      </div>
      <div class="input-field2">
        <input type="submit" class="submit" value="SIGN IN">
      </div>
      <div class="bottom">
      
        <div class="right mt-4">
          
          <span class="register-link ms-5">Not a member? <router-link to="/register">Register</router-link></span>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'LoginBox'
}
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

body {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

.register-link {
  font-family: Arial, sans-serif; /* Chọn font chữ */
  font-size: 16px; /* Chọn kích thước chữ */
  color: #ede9e9; /* Chọn màu chữ */
  /* Các thuộc tính khác tùy chỉnh */
}

/* Tùy chỉnh cho thẻ <router-link> */
.register-link router-link {
  font-weight: bold; /* In đậm chữ */
  text-decoration: underline; /* Gạch chân chữ */
  color: rgb(237, 237, 246); /* Chọn màu chữ */
  /* Các thuộc tính khác tùy chỉnh */
}


.box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.container {
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
}

h1{
  color: #fff;
  font-size: 40px;
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  position: relative;
  left: -39px;
  font-family: Arial, sans-serif; /* Chọn font chữ */
    /* Chọn kích thước chữ */
    color: #ded3d3; /* Chọn màu chữ */
    text-align: center; /* Căn giữa nội dung */
    text-transform: uppercase; /* Chuyển đổi thành chữ in hoa */
    letter-spacing: 2px; /* Khoảng cách giữa các ký tự */
    font-weight: bold; /* In đậm chữ */
    margin-bottom: 20px; /* Khoảng cách dưới */
}

span{
  position: relative;
  left: 20px;
}


.input-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.input-field input {
  height: 45px;
  width: 87%;
  border: none;
  outline: none;
  border-radius: 30px;
  color: #fff;
  padding: 0 0 0 42px;
  background: rgba(255, 255, 255, 0.1);
}
.input-field2 input {
  height: 45px;
  width: 87%;
  border: none;
  outline: none;
  border-radius: 30px;
  color: #fff;
  padding: 0 0 20 12px;
  background: rgba(255, 255, 255, 0.1);
}

.input-field input::placeholder {
  color: #fff;
}

.input-field i {
  position: relative;
  top: -31px;
  left: 17px;
  color: #fff;
}

.submit {
  border: none;
  border-radius: 30px;
  font-size: 15px;
  height: 45px;
  outline: none;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: 0.35s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit:hover {
  box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.2);
}

.bottom {
  display: flex;
  justify-content: space-between;
  font-size: small;
  color: #fff;
  margin-top: 10px;
}

.left {
  display: flex;
  align-items: center;
}

label a {
  color: #fff;
  text-decoration: none;
}
</style>
