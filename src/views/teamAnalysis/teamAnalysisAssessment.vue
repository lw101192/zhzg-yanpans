<template>
    <section class="container">
        <el-container>
            <el-main>
                <div>
                    <div class="mianportrait" style="padding: 10px 0px;">
                    <el-row>
                        <el-col :span="12">
                            <div class="mianportrait" style="text-align: left;padding: 0px 10px;">
                                <img src="./../../assets/image/logo_main.png" />
                                <span style="font-weight: 900;padding: 5px 5px;font-size: 18px;">南京公安智慧政工</span>
                                <span class="sexcolors3" style="font-weight: 900;padding: 5px 5px;font-size: 18px;">队伍综合评估系统</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="mianportrait" style="text-align: right;">
                                <el-button type="primary" class="buttoncolor" @click="myportselist">队伍综合建设成效</el-button>
                                <el-button type="primary" class="buttoncolor" @click="portraitreportse">队伍人员立体剖析</el-button>
                                <el-button type="primary" class="buttoncolor" @click="contrastse">队伍效能深度较量</el-button>
                                <el-button type="primary" class="buttoncolor" @click="myportse" style="margin-right:20px;">队伍人员画像对比</el-button>
                            </div>
                        </el-col>
                    </el-row>
                    </div>
                    <div></div>
                </div>
                <dialog-teamcomprehensive v-if="indexs == '1'"></dialog-teamcomprehensive>
                <dialog-teamAnalysisportrait v-if="indexs == '4'"></dialog-teamAnalysisportrait>
            </el-main>
        </el-container>
    </section>
</template>

<script>
import DialogTeamAnalysisportrait from "./teamAssessmentplus/teamAnalysisportrait";
import DialogTeamcomprehensive from "./teamAssessmentplus/teamcomprehensive";
export default {
  name: "teamAnalysisAssessment",
  components: {
    DialogTeamAnalysisportrait,
    DialogTeamcomprehensive,
  },
  data() {
    return {
      indexs: "1"
    };
  },
  methods: {
    // dialogEmit(e) {
    //   this.activeDialog = e;
    //   this.dialogTitle = e;
    // },
    myportselist() {
      this.indexs = "1";
    },
    portraitreportse() {
      this.indexs = "2";
    },
    contrastse() {
      this.indexs = "3";
    },
    myportse() {
      this.indexs = "4";
    }
  },
  watch: {}
};
</script>
<style lang="scss" scoped >
.container {
  .el-container {
    display: block;
  }
  /deep/.el-main {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }
  font-size: 14px;
  border: none;
  color: #000;
  text-align: -webkit-left;
  .mianportrait {
    width: 100%;
    clear: both;
    font-weight: 500;
    font-size: 16px;
  }
  .buttoncolor {
    color: #fff;
    background-color: #576ea9;
    border-color: #576ea9;
    border-radius: 20px;
  }
  .sexcolors3 {
    color: #4477fb;
  }
}
</style>