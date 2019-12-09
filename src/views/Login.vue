<template>
    <section class="container">
        <el-container>
            <el-header>
                <el-dropdown trigger="click" style="z-index: 10;
                padding-left: 1000px;
                top: 20px;">
                    <span class="el-dropdown-link">

                        <i class="el-icon-setting el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item class="clearfix">
                            评论
                            <el-badge class="mark" :value="12" />
                        </el-dropdown-item>
                        <el-dropdown-item class="clearfix">
                            回复
                            <el-badge class="mark" :value="3" />
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <!-- <el-button class="set" v-popover:popover2>设置
                    <i class="el-icon-setting"></i> 
                </el-button> -->
                <el-popover ref="popover2" placement="bottom" title="标题" width="200" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                </el-popover>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="我的布控" name="first" disabled size="large"></el-tab-pane>
                    <el-tab-pane label="正在布控对象" name="second"></el-tab-pane>
                    <el-tab-pane label="正在布控对象" name="third"></el-tab-pane>
                </el-tabs>
            </el-header>
            <el-header>
                <el-input v-model="input" placeholder="请输入内容" style="float: left;width: 220px;"></el-input>
                <el-dropdown trigger="click" class="down">
                    <span class="el-dropdown-link">
                        排序
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item class="clearfix">
                            轨迹时间倒序
                        </el-dropdown-item>
                        <el-dropdown-item class="clearfix">
                            轨迹时间正序
                        </el-dropdown-item>
                        <el-dropdown-item class="clearfix">
                            审批时间倒序
                        </el-dropdown-item>
                        <el-dropdown-item class="clearfix">
                            审批时间正序
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button class="addObject" @click="bukong">添加布控对象</el-button>
            </el-header>
            <el-main>
                <div>
                    <img :src="'static/assets/1563690210.png'" alt="">
                    <h3>布控对象：刘超群
                        <span>布控审批时间：2019-06-17 02:20:00</span>
                        <span>已布控：2天15小时</span>
                    </h3>
                </div>
                <div class="idstyle">
                    <div>身份证号码
                        <span>在</span>
                        <span>华翔宾馆 8809 办理入住，时间 2019-06-17 05:00:00</span>
                    </div>
                    <div>人像照片
                        <span>在</span>
                        <span>徐州东站 西出口 抓拍，时间 2019-06-17 05:00:00</span>
                    </div>
                    <div>车牌号码
                        <span>在</span>
                        <span>解放南路 1卡口 抓拍，时间 2019-06-17 05:00:00</span>
                    </div>
                </div>
                <div style="float: right;">
                    <h5>修改布控</h5>
                    <h5>取消布控</h5>
                    <el-button type="primary"> 查看详情</el-button>

                </div>

            </el-main>
            <!--设备新增/修改-->
            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item>
                        <h3 style="float: left;
                                left: 80px;
                                position: relative;
                            ">基本信息</h3>
                    </el-form-item>
                    <el-row style="display: flex;">
                        <el-form-item label="布控对象" :label-width="formLabelWidth">
                            <el-input v-model="form.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="布控期限" :label-width="formLabelWidth">
                            <el-input v-model="form.name"  type="date"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-form-item label="布控理由:" :label-width="formLabelWidth">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系手机号:" :label-width="formLabelWidth">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <h3 style="float: left;
                                    left: 80px;
                                    position: relative;
                                ">布控配置</h3>
                    </el-form-item>
                    <el-form-item label="常用布控"  style="margin-left: 40px;">
                        <el-checkbox-group v-model="checkList" style="float: left;">
                            <el-checkbox label="复选框 A"></el-checkbox>
                            <el-checkbox label="复选框 B"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="常用布控" style="margin-left: 40px;">
                        <el-checkbox-group v-model="checkList"  style="float: left;">
                            <el-checkbox label="复选框 A"></el-checkbox>
                            <el-checkbox label="复选框 B"></el-checkbox>

                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item style="left: -200px;
                    position: relative;">
                        <el-button>添加自定义布控</el-button>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>

        </el-container>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                checkList: ['选中且禁用', '复选框 A'],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',
                dialogFormVisible: false,
                input: '',
                activeName: 'second',
            }
        },

        methods: {
            bukong() {
                this.dialogFormVisible = true;
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        mounted: function () {



        }
    }
</script>

<style scoped lang="scss">
    .container {
        .el-input__inner {
            width: 220px;
        }
    }
</style>
<style lang="scss">
    .container {
        .set {
            float: right;
            font-size: 18px;
            margin-top: 10px;
            /* margin-top: 0px;
            border: 1px solid transparent; */
        }
        .addObject {
            position: relative;
        }
        .el-select {
            float: left;
        }

        border: 1px solid;
        .el-input__inner {
            float: left;
            width: 220px;
        }
        .down {
            position: relative;

            float: left;
            margin-left: 10px;
        }
        .el-main {
            .idstyle {
                float: left;
                margin-top: 50px;
                position: absolute;
                left: 140px;
            }
            .el-form-item__content {
                height: 0px;
            }
            border-top: 1px solid #a19595;
            border-bottom: 1px solid #a19595;
            img {
                float: left;
            }
            h3 {
                float: left;

            }
            h5 {
                color: #007bff;
            }
        }
    }
</style>