<template>
  <el-container>
    <el-aside width="200px">
      <!--      左侧导航栏-->
      <IndexSideMenu></IndexSideMenu>
    </el-aside>
    <el-container>
      <!--      header头部-->
      <el-header>
        <IndexHeader></IndexHeader>
      </el-header>
      <el-main>
        <Tabs></Tabs>
        <div style="margin: 0 15px;">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import IndexSideMenu from "./inc/IndexSideMenu";
import IndexHeader from "./inc/IndexHeader";
import Tabs from "./inc/Tabs";

export default {
  name: "Home",
  components: {
    IndexSideMenu,
    IndexHeader,
    Tabs
  }
}
</script>
<style scoped>
.el-container {
  padding: 0;
  margin: 0;
  height: 100%;
}


.el-header {
  background-color: #17B3A3;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  line-height: 200px;
}

.el-main {
  color: #333;
  padding: 0;
}


</style>
