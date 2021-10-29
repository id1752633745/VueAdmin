<template>
  <div>
    <strong>VueAdmin后台管理系统</strong>
    <div class="header-avatar">
      <el-avatar size="medium" :src="userInfo.avatar"></el-avatar>
      <el-dropdown>
              <span class="el-dropdown-link">
                {{ userInfo.username }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/userCenter">个人中心</router-link>
          </el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-link href="https://baidu.com/" target="_blank">网站</el-link>
      <el-link href="https://www.bilibili.com/" target="_blank">B站</el-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userInfo: {
        id: "",
        username: "",
        avatar: ""
      }
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      this.$axios.get("/sys/userInfo").then(res => {
        this.userInfo = res.data.data
      })
    },
    logout(){
      this.$axios.post("/logout").then(res => {
        localStorage.clear()
        sessionStorage.clear()

        this.$store.commit("resetState")
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style scoped>
.header-avatar {
  float: right;
  width: 210px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.el-dropdown-link {
  cursor: pointer;
}
</style>