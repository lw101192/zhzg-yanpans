<template>
    <section class="container">
        <el-container>
            <el-main>
              <div :class="'mianportrait'+(this.sex=='man'?' _WHITE':'')">
                <div class="mianportrait manageBox" v-show="portraits == '1'">
                  <div class="floor">
                      <div class="mianportrait">
                        <div class="mianportrait" style="padding: 10px 0px;">
                          <el-row>
                            <el-col :span="12">
                              <div class="mianportrait" style="text-align: left;padding: 0px 10px;">
                                <img src="./../../assets/image/logo_main.png" />
                                <span style="font-weight: 900;padding: 5px 5px;font-size: 18px;">南京公安智慧政工</span>
                                <span class="sexcolors3" style="font-weight: 900;padding: 5px 5px;font-size: 18px;">民警精准画像系统</span>
                              </div>
                            </el-col>
                            <el-col :span="12">
                              <div class="mianportrait" style="text-align: right;">
                                <el-button type="primary" class="buttoncolor" @click="myport">我的画像</el-button>
                                <el-button type="primary" class="buttoncolor" @click="portraitreport">画像报告</el-button>
                                <el-button type="primary" class="buttoncolor" style="margin-right:20px;" @click="contrast">对比看看</el-button>
                              </div>
                            </el-col>
                          </el-row>
                        </div>
                        <div class="mianportrait" style="padding: 20px;">
                          <el-row>
                            <el-col :span="14">
                              <div class="mianportrait" style="height: 600px;text-align: -webkit-center;"> 
                                <div class="impression" style="padding-top:40px;padding-bottom:40px;position: relative;" v-if="listdetaill.policeContent != null">
                                  <div style="width: 50px;height: 50px;line-height: 50px;float: left;">
                                    <img v-if="sex=='man'" src="./../../assets/image/portasts/man/manpolice.png" style="width: 400px;"/>
                                    <img v-if="sex=='woman'" src="./../../assets/image/portasts/woman/womanpolice.png"  style="width: 400px;"/>
                                  </div>
                                  <div style="position: absolute;top: 73px;left: 120px;color: #fff;">{{listdetaill.policeContent}}</div>
                                </div>
                                <div class="impression" style="padding-top:40px;padding-bottom:40px;position: relative;" v-if="listdetaill.politicalContent != null">
                                  <div style="width: 50px;height: 50px;line-height: 50px;float: left;">
                                    <img src="./../../assets/image/portasts/man/tanghui.png"  style="width: 400px;"/>
                                  </div>
                                  <div style="position: absolute;top: 73px;left: 120px;color: #fff;">{{listdetaill.politicalContent}}</div>
                                </div>
                                <div class="impression" style="padding-top:40px;padding-bottom:40px;position: relative;" v-if="listdetaill.dutyContent != null">
                                  <div style="width: 50px;height: 50px;line-height: 50px;float: left;">
                                    <img src="./../../assets/image/portasts/man/zhiji.png"  style="width: 400px;"/>
                                  </div>
                                  <div style="position: absolute;top: 73px;left: 120px;color: #fff;">{{listdetaill.dutyContent}}</div>
                                </div>
                                <div class="impression" style="padding-top:40px;padding-bottom:40px;position: relative;" v-if="listdetaill.policeRankContent != null">
                                  <div style="width: 50px;height: 50px;line-height: 50px;float: left;">
                                    <img src="./../../assets/image/portasts/man/stars.png"  style="width: 400px;"/>
                                  </div>
                                  <div style="position: absolute;top: 73px;left: 120px;color: #fff;">{{listdetaill.policeRankContent}}</div>
                                </div>
                                <div class="impression" style="padding-top:40px;padding-bottom:40px;position: relative;" v-if="listdetaill.talentsContent != null||listdetaill.fxContent!= null||listdetaill.jzContent!= null">
                                  <div style="width: 50px;height: 50px;line-height: 50px;float: left;">
                                    <img src="./../../assets/image/portasts/man/zhiye.png"  style="width: 400px;"/>
                                  </div>
                                  <div style="position: absolute;top: 73px;left: 120px;color: #fff;"><span  v-if="listdetaill.talentsContent != null">{{listdetaill.talentsContent}},</span><span  v-if="listdetaill.fxContent != null">{{listdetaill.fxContent}},</span>{{listdetaill.jzContent}}</div>
                                </div>
                                <div class="impression" style="padding-top:40px;padding-bottom:40px;position: relative;" v-if="listdetaill.honorContent != null">
                                  <div style="width: 50px;height: 50px;line-height: 50px;float: left;">
                                    <img src="./../../assets/image/portasts/man/rongyu.png"  style="width: 400px;"/>
                                  </div>
                                  <div style="position: absolute;top: 73px;left: 120px;color: #fff;">{{listdetaill.honorContent}}</div>
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="10" style="height:600px;">
                              <div class="mianportrait" style="position: absolute;text-align: -webkit-left;top: 40px;padding-left: 40px;color:#000;">
                                <div class="sexcolor" style="font-size: 40px;margin: 10px 0;">初印象</div>
                                <div>{{listdetailr.ageContent}}</div>
                                <div>{{listdetailr.dutyContent}}</div>
                                <div>{{listdetailr.politicalContent}}</div>
                              </div>
                            </el-col>
                          </el-row>
                        </div>
                      </div>
                      <div class="mianportrait">
                         <el-row>
                            <el-col :span="10">
                              <div class="mianportrait" style="height: 700px;text-align: -webkit-left;color:#000;">
                                <div class="yboxleft">
                                  <div class="sexcolor" style="font-size: 40px;margin: 10px 0;">勇争先</div>
                                  <div>{{listlv.ageContent}}</div>
                                  <div>{{listlv.dutyContent}}</div>
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="14">
                              <div  :class="'mianportrait'+(this.sex=='man'?' _WHITE':'')" style="height: 700px;padding-top:100px;padding-right: 10%;width: 90%;">
                                  <el-carousel indicator-position="outside" interval='10000' height='600px'>
                                    <el-carousel-item  v-for="item in beTheBestLabellist" :key="item">
                                      <div class="carouselinsides">
                                        <div class="leftinsides">
                                          <img src="./../../assets/image/portasts/rightround1.png" style="width: 75px;margin: 40px 0px 0 20px;"/>
                                          <span style="font-weight: 700;position: absolute;top: 90px;left: 20px;">{{item[0].time.slice(0, 4)}}年</span>
                                          <span style="color:#FFF;font-size: 24px;position: absolute;top: 50px;left: 45px;">{{item[0].time.slice(4, 6)}}月</span>
                                        </div>
                                        <div class="rightinsides">
                                          <div><h4 style="margin-top: 20px;text-align: -webkit-left;margin-left: 30px;">{{item[0].deptName}}</h4></div>
                                          <div style="margin-top: 10px;text-align: -webkit-left;margin-left: 30px;font-size:14px;" v-if="item[0].opinion"><span v-if="item[0].opinion.jq">共处理警情<span  class="sexcolors">{{item[0].opinion.jq}}</span>件,</span><span v-if="item[0].opinion.xzaj">行政案件<span class="sexcolors">{{item[0].opinion.xzaj}}</span>件，</span><span v-if="item[0].opinion.mymyd">民意执法评价值<span class="sexcolors">{{item[0].opinion.mymyd}}</span></span></div>
                                          <div style="margin-top: 10px;text-align: -webkit-left;margin-left: 30px;font-size:14px;" v-if="item[0].assess.length>0"><span v-for="items in item[0].assess" :key="items">{{items.year}}年年度考核<span class="sexcolors" style="font-size:20px;">{{items.grade}}</span>,</span></div>
                                          <div class="sexcolors" style="margin-top: 10px;text-align: -webkit-left;margin-left: 30px;font-size:14px;" v-if="item[0].honor&&item[0].honor.length<40">{{item[0].honor}}</div>
                                          <div class="sexcolors" style="margin-top: 10px;text-align: -webkit-left;margin-left: 30px;font-size:14px;" v-if="item[0].honor&&item[0].honor.length>=40" :title="item[0].honor">{{item[0].honor.slice(0,40)}}...</div>
                                        </div>
                                      </div>
                                      <div class="carouselinsides ishouse" v-if="item.length >= 2">
                                        <div class="leftinsides">
                                          <img src="./../../assets/image/portasts/rightround2.png" style="width: 75px;margin: 40px 0px 0 20px;"/>
                                          <span style="font-weight: 700;position: absolute;top: 90px;left: 20px;">{{item[1].time.slice(0, 4)}}年</span>
                                          <span style="color:#FFF;font-size: 24px;position: absolute;top: 50px;left: 45px;">{{item[1].time.slice(4, 6)}}月</span>
                                        </div>
                                        <div class="rightinsides">
                                          <div><h4 style="margin-top: 20px;text-align: -webkit-left;margin-left: 30px;">{{item[1].deptName}}</h4></div>
                                          <div style="margin-top: 10px;text-align: -webkit-left;margin-left: 30px;font-size:14px;" v-if="item[1].opinion"><span v-if="item[1].opinion.jq">共处理警情<span class="sexcolors1">{{item[1].opinion.jq}}</span>件,</span><span v-if="item[1].opinion.xzaj">行政案件<span class="sexcolors1">{{item[1].opinion.xzaj}}</span>件，</span><span v-if="item[1].opinion.mymyd">民意执法评价值<span class="sexcolors1">{{item[1].opinion.mymyd}}</span></span></div>
                                          <div style="margin-top: 10px;text-align: -webkit-left;margin-left: 30px;font-size:14px;" v-if="item[1].assess.length>0"><span v-for="items in item[1].assess" :key="items">{{items.year}}年年度考核<span class="sexcolors1" style="font-size:20px;">{{items.grade}}</span>,</span></div>
                                          <div class="sexcolors1" style="margin-top: 10px;text-align: -webkit-left;margin-left: 30px;font-size:14px;" v-if="item[1].honor&&item[1].honor.length<40">{{item[1].honor}}</div>
                                          <div class="sexcolors1" style="margin-top: 10px;text-align: -webkit-left;margin-left: 30px;font-size:14px;" v-if="item[1].honor&&item[1].honor.length>=40" :title="item[1].honor">{{item[1].honor.slice(0,40)}}...</div>
                                        </div>
                                      </div>
                                      <div class="carouselinsides" v-if="item.length == 3">
                                        <div class="leftinsides">
                                          <img src="./../../assets/image/portasts/rightround3.png" style="width: 75px;margin: 40px 0px 0 20px;"/>
                                          <span style="font-weight: 700;position: absolute;top: 90px;left: 20px;">{{item[2].time.slice(0, 4)}}年</span>
                                          <span style="color:#FFF;font-size: 24px;position: absolute;top: 50px;left: 45px;">{{item[2].time.slice(4, 6)}}月</span>
                                        </div>
                                        <div class="rightinsides">
                                          <div><h4 style="margin-top: 20px;text-align: -webkit-left;margin-left: 30px;">{{item[2].deptName}}</h4></div>
                                          <div style="margin-top: 10px;text-align: -webkit-left;margin-left: 30px;font-size:14px;" v-if="item[2].opinion"><span v-if="item[2].opinion.jq">共处理警情<span class="sexcolors2">{{item[2].opinion.jq}}</span>件,</span><span v-if="item[2].opinion.xzaj">行政案件<span class="sexcolors2">{{item[2].opinion.xzaj}}</span>件，</span><span v-if="item[2].opinion.mymyd">民意执法评价值<span class="sexcolors2">{{item[2].opinion.mymyd}}</span></span></div>
                                          <div style="margin-top: 10px;text-align: -webkit-left;margin-left: 30px;font-size:14px;" v-if="item[2].assess.length>0"><span v-for="items in item[2].assess" :key="items">{{items.year}}年年度考核<span class="sexcolors2" style="font-size:20px;">{{items.grade}}</span>,</span></div>
                                          <div class="sexcolors2" style="margin-top: 10px;text-align: -webkit-left;margin-left: 30px;font-size:14px;" v-if="item[2].honor&&item[2].honor.length<40">{{item[2].honor}}</div>
                                          <div class="sexcolors2" style="margin-top: 10px;text-align: -webkit-left;margin-left: 30px;font-size:14px;" v-if="item[2].honor&&item[2].honor.length>=40" :title="item[2].honor">{{item[2].honor.slice(0,40)}}...</div>
                                        </div>
                                      </div>
                                    </el-carousel-item>
                                  </el-carousel>
                              </div>
                            </el-col>
                         </el-row>
                      </div>
                      <div class="mianportrait">
                          <el-row>
                            <el-col :span="16">
                              <div class="mianportrait" style="height: 700px;text-align: -webkit-center;">
                                <div style="width:36%;height: 350px;float: right;margin:0px 10px;background-color: rgb(177, 205, 243,0.4);border-radius: 30px;">
                                  <div class="sexcolor" style="width:100%;height: 40px;text-aglin:center;line-height: 40px;font-weight: 700;">市局</div>
                                  <div id="locations" v-if="isDutyses == '学历'" style="width:100%;height: 330px;"></div>
                                  <div id="locationsl" v-if="isDutyses == '年龄'" style="width:100%;height: 330px;"></div>
                                  <div id="locationsw" v-if="isDutyses == '职务'" style="width:100%;height: 330px;"></div>
                                  <div id="locationsj" v-if="isDutyses == '职级'" style="width:100%;height: 330px;"></div>
                                  <div id="locationsx" v-if="isDutyses == '警衔'" style="width:100%;height: 330px;"></div>
                                  <div id="locationsy" v-if="isDutyses == '来源'" style="width:100%;height: 330px;"></div>
                                </div>
                                <div style="width:36%;height: 350px;float: right;margin:0px 10px;background-color: rgb(177, 205, 243,0.4);border-radius: 30px;">
                                  <div class="sexcolor" style="width:100%;height: 40px;text-aglin:center;line-height: 40px;font-weight: 700;">部门</div>
                                  <div id="locationse" v-if="isDutyses == '学历'"  style="width:100%;height: 330px;"></div>
                                  <div id="locationsel" v-if="isDutyses == '年龄'" style="width:100%;height: 330px;"></div>
                                  <div id="locationsew" v-if="isDutyses == '职务'" style="width:100%;height: 330px;"></div>
                                  <div id="locationsej" v-if="isDutyses == '职级'" style="width:100%;height: 330px;"></div>
                                  <div id="locationsex" v-if="isDutyses == '警衔'" style="width:100%;height: 330px;"></div>
                                  <div id="locationsey" v-if="isDutyses == '来源'" style="width:100%;height: 330px;"></div>
                                </div>
                              </div>
                            </el-col>
                            <el-col :span="8">
                              <div class="mianportrait" style="height: 700px;text-align: -webkit-left;color:#000;">
                                <div class="zboxleft">
                                  <div class="sexcolor" style="font-size: 40px;margin: 10px 0;">找位置</div>
                                  <div>{{listwz.ageContent}}</div>
                                  <div class="mianportrait mianportraitse">
                                    <div class="boxbutton">
                                      <el-button type="primary" class="boxquery actives"  @click="education">学历</el-button>
                                    </div>
                                    <div class="boxbutton">
                                      <el-button type="primary" class="boxquery"  @click="agequery">年龄</el-button>
                                    </div>
                                    <div class="boxbutton" v-if="isDuty != '职务'">
                                      <el-button type="primary" class="boxquery"  @click="rankquery">职级</el-button>
                                    </div>
                                    <div class="boxbutton" v-if="isDuty == '职务'">
                                      <el-button type="primary" class="boxquery"  @click="ranksquery">职务</el-button>
                                    </div>
                                    <div class="boxbutton">
                                      <el-button type="primary" class="boxquery"  @click="policerank">警衔</el-button>
                                    </div>
                                    <div class="boxbutton">
                                      <el-button type="primary" class="boxquery"  @click="sourcequery">来源</el-button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </el-col>
                         </el-row>
                      </div>
                      <div class="mianportrait">
                          <el-row>
                            <el-col :span="10">
                              <div class="mianportrait" style="height: 700px;text-align: -webkit-left;">
                                <div class="zboxleft" style="margin-top: 13%; margin-left: 25%;color:#000;">
                                  <div class="sexcolor" style="font-size: 40px;margin: 10px 0;">展未来</div>
                                  <div>最后，给自己总体的职位，工作，民意评价进行总结，就从警生涯来说，我还有很远的路要走！</div>
                                  <div class="mianportrait mianportraitzw" style="margin-top: 50px;">
                                      <el-button type="primary" class="boxquerys actives" @click="jobanalysis">工作分析</el-button>
                                      <el-button type="primary" class="boxquerys"  @click="positionanalysis">职位分析</el-button>
                                      <el-button type="primary" class="boxquerys"  @click="publicopinionanalysis">民意分析</el-button>
                                  </div>
                                </div>
                              </div>                                
                            </el-col>                          
                            <el-col :span="14">
                              <div class="mianportrait">
                                <div class="zboxright" style="text-align: -webkit-right;">
                                  <div class="boxrightst activeposit">
                                    <div id="jobanalyecharts" style="width:50%;height:100%;float: left;"></div>
                                    <div id="jobanalyechartsaj" style="width:50%;height:100%;float: left;"></div>
                                  </div>
                                  <div class="boxrightst activeposit1">
                                    <div id="positionanalyecharts" style="width:100%;height:100%;"></div>
                                  </div>
                                  <div class="boxrightst">
                                    <div id="publicopinionanalyecharts" style="width:100%;height:100%;"></div>
                                  </div>
                                </div>
                              </div>
                            </el-col>
                         </el-row>
                      </div>
                  </div>
                  <ul class="floorNav" style="cursor: pointer;font-size: 12px;">
                      <li  @click="setFloorNavMountClick(0)">初印象</li>
                      <li  @click="setFloorNavMountClick(1)">述履历</li>
                      <li  @click="setFloorNavMountClick(2)">找位置</li>
                      <li  @click="setFloorNavMountClick(3)">做总结</li>
                  </ul>
                </div>
                <div class="mianportrait" v-show="portraits == '2'">
                  <div class="mianportrait" style="padding: 20px 0px;">
                    <el-row>
                      <el-col :span="12">
                        <div class="mianportrait" style="text-align: left;padding: 0px 10px;">
                          <img src="./../../assets/image/logo_main.png" />
                          <span style="font-weight: 900;padding: 5px 5px;font-size: 18px;">南京公安智慧政工</span>
                          <span class="sexcolors3" style="font-weight: 900;padding: 5px 5px;font-size: 18px;">民警精准画像系统</span>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="mianportrait" style="text-align: right;">
                          <el-button type="primary" class="buttoncolor" @click="myport">我的画像</el-button>
                          <el-button type="primary" class="buttoncolor" @click="portraitreport">画像报告</el-button>
                          <el-button type="primary" class="buttoncolor" style="margin-right:20px;" @click="contrast">对比看看</el-button>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  efwgv
                </div>
                <div class="mianportrait manageBoxes" v-show="portraits == '3'" style="min-height:900px;">
                  <div class="mianportrait" style="padding: 20px 0px;">
                    <el-row>
                      <el-col :span="12">
                        <div class="mianportrait" style="text-align: left;padding: 0px 10px;">
                          <img src="./../../assets/image/logo_main.png" />
                          <span style="font-weight: 900;padding: 5px 5px;font-size: 18px;">南京公安智慧政工</span>
                          <span class="sexcolors3" style="font-weight: 900;padding: 5px 5px;font-size: 18px;">民警精准画像系统</span>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="mianportrait" style="text-align: right;">
                          <el-button type="primary" class="buttoncolor" @click="myport">我的画像</el-button>
                          <el-button type="primary" class="buttoncolor" @click="portraitreport">画像报告</el-button>
                          <el-button type="primary" class="buttoncolor" style="margin-right:20px;" @click="contrast">对比看看</el-button>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <el-col :span="12">
                          <div class="mianportrait contrastbox">
                            <div class="mianportrait buttoncolor" style="width: 675px;padding: 20px 15px;">
                              <el-checkbox  style="color:#FFF;" @change="contrastdata" v-model="isAges">同年龄段</el-checkbox>
                              <el-checkbox  style="color:#FFF;" @change="contrastdata" v-model="isInPolices">同入警年限</el-checkbox>
                              <el-checkbox  style="color:#FFF;" @change="contrastdata" v-model="isToWorks">同年参加工作</el-checkbox>
                              <el-checkbox  style="color:#FFF;" @change="contrastdata" v-model="isInPartys">同年入党</el-checkbox>
                              <el-checkbox  style="color:#FFF;" @change="contrastdata" v-model="isSchools">同毕业学校</el-checkbox>
                              <el-checkbox  style="color:#FFF;" @change="contrastdata" v-model="isSubjects">同专业</el-checkbox>
                            </div>
                          </div>
                        </el-col>
                        <el-col :span="12" style="padding: 0px 20px;">
                          <div class="mianportrait contrastbox" style="text-align: -webkit-right;padding: 10px 10px 10px 0;">
                              <el-date-picker
                                v-model="year"
                                type="year"
                                placeholder="选择年"
                                @change="contrastdata"
                                format="yyyy"
                                value-format='yyyy'>
                              </el-date-picker>
                          </div>
                        </el-col>
                      </el-col>
                      <el-col :span="24">
                        <el-col :span="8">
                          <div class="mianportrait">
                            <div style="margin-top: 20%;margin-right: 40%;">
                              <div style="text-align: -webkit-center;">和全市平均情况对比来看</div>
                              <div style="text-align: -webkit-center;">我在表彰奖励方面还有欠缺</div>
                              <div style="text-align: -webkit-center;">需要再加油</div>
                            </div>
                          </div>
                        </el-col>
                        <el-col :span="16">
                          <div class="mianportrait">
                            <div class="contrastst" style="background:#fff;float: left;width: 43%;margin: 10px 2%;height: 300px;">
                              <div class="mianportrait" style="height: 40px;line-height: 40px;padding-left: 15px;font-size: 14px;">
                                <div style="float: left;">
                                  <img v-if="sex=='man'" src="./../../assets/image/portasts/zwzjman.png" />
                                  <img v-if="sex=='woman'" src="./../../assets/image/portasts/zwzjwoman.png" />
                                  <span style="padding-left: 10px;">职务职级</span>
                                </div>
                                <div style="float: right;margin-right: 35px;">我的职位：{{dutyRankcont}}</div>
                              </div>
                              <div id="erchatzwzj" style="width: 100%;height:260px;"></div>
                            </div>
                            <div class="contrastst" style="background:#fff;float: left;width: 43%;margin: 10px 2%;height: 300px;">
                              <div class="mianportrait" style="height: 40px;line-height: 40px;padding-left: 15px;font-size: 14px;">
                                <div style="float: left;">
                                  <img v-if="sex=='man'" src="./../../assets/image/portasts/policerankman.png" />
                                  <img v-if="sex=='woman'" src="./../../assets/image/portasts/policerankwoman.png" />
                                  <span style="padding-left: 10px;">警衔晋升</span>
                                </div>
                                <div style="float: right;margin-right: 35px;">我的警衔：{{policerankcont}}</div>
                              </div>
                              <div id="erchatjxjs" style="width: 100%;height:260px;"></div>
                            </div>
                            <div class="contrastst" style="background:#fff;float: left;width: 43%;margin: 10px 2%;height: 300px;">
                              <div class="mianportrait" style="height: 40px;line-height: 40px;padding-left: 15px;font-size: 14px;">
                                <div style="float: left;">
                                  <img v-if="sex=='man'" src="./../../assets/image/portasts/recognitionkman.png" />
                                  <img v-if="sex=='woman'" src="./../../assets/image/portasts/recognitionkwoman.png" />
                                  <span style="padding-left: 10px;">表彰奖励</span>
                                </div>
                                <div style="float: right;margin-right: 35px;width: 45%;" v-if="this.recognitioncont.length>6" :title="this.recognitioncont">我的表彰：{{this.recognitioncont.slice(0,6)}}...</div>
                                <div style="float: right;margin-right: 35px;width: 45%;" v-else>我的表彰：{{this.recognitioncont}}</div>
                              </div>
                              <div id="erchatbzjl" style="width: 100%;height:260px;"></div>
                            </div>
                            <div class="contrastst" style="background:#fff;float: left;width: 43%;margin: 10px 2%;height: 300px;">
                              <div class="mianportrait" style="height: 40px;line-height: 40px;padding-left: 15px;font-size: 14px;">
                                <div style="float: left;">
                                  <img v-if="sex=='man'" src="./../../assets/image/portasts/opinionsatisfactionman.png" />
                                  <img v-if="sex=='woman'" src="./../../assets/image/portasts/opinionsatisfactionwoman.png" />
                                  <span style="padding-left: 10px;">民意满意度</span>
                                </div>
                                <div style="float: right;margin-right: 35px;">我的民意满意度：{{opinionsatisfactioncont}}</div>                                
                              </div>
                              <div id="erchatmymyd" style="width: 100%;height:260px;"></div>
                              </div>
                            <div class="contrastst" style="background:#fff;float: left;width: 43%;margin: 10px 25%;height: 300px;">
                              <div class="mianportrait" style="height: 40px;line-height: 40px;padding-left: 15px;font-size: 14px;">
                                <div style="float: left;">
                                  <img v-if="sex=='man'" src="./../../assets/image/portasts/educationtrainingman.png" />
                                  <img v-if="sex=='woman'" src="./../../assets/image/portasts/educationtrainingwoman.png" />
                                  <span style="padding-left: 10px;">教育培训</span>
                                </div>
                                <div style="float: right;margin-right: 35px;">我的教育培训：{{educationtrainingcont}}</div>  
                              </div>
                              <div id="erchatzjjypx" style="width: 100%;height:260px;"></div>
                            </div>
                          </div>
                          </el-col>
                      </el-col>
                    </el-row>
                  </div>               
                </div>
              </div>
            </el-main>
        </el-container>
    </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      portraits: "1",
      sex: "man",
      idNumberse: "",
      listdetailr: {
        politicalContent: "",
        dutyContent: "",
        ageContent: ""
      },
      listdetaill: {
        policeContent: "",
        politicalContent: "",
        dutyContent: "",
        policeRankContent: "",
        talentsContent: "",
        honorContent: "",
        fxContent: "",
        jzContent: ""
      },
      listlv: {
        ageContent: "",
        dutyContent: ""
      },
      listwz: {
        ageContent: ""
      },
      isDuty: "职务",
      myChart: null,
      myChartse: null,
      myChartw: null,
      myChartsew: null,
      myChartj: null,
      myChartsej: null,
      myChartx: null,
      myChartsex: null,
      myCharty: null,
      myChartsey: null,
      myChartl: null,
      myChartsel: null,
      isDutyses: "学历",
      isAges: false,
      isInPartys: false,
      isInPolices: false,
      isSchools: false,
      isSubjects: false,
      isToWorks: false,
      year: "2019",
      optionslist: [
        {
          value: "全部",
          label: "全部"
        },
        {
          value: "2019",
          label: "2019年"
        },
        {
          value: "2018",
          label: "2018年"
        }
      ],
      dutyRankcont: "",
      policerankcont: "",
      recognitioncont: "",
      opinionsatisfactioncont: "",
      educationtrainingcont: "",
      beTheBestLabellist: [],
      frequency: 1
    };
  },

  methods: {
    //我的画像按钮
    myport() {
      this.portraits = "1";
      this.setFloorNavMountClick(0);
    },
    //画像报告按钮
    portraitreport() {
      this.portraits = "2";
    },
    //对比看看按钮
    contrast() {
      this.portraits = "3";
      this.contrastdata();
    },
    //我的画像右侧导航点击方法
    setFloorNavMountClick(activeIndex) {
      document.documentElement.scrollTop = activeIndex * 900;
      document.body.scrollTop = activeIndex * 900;
    },
    //初映象右侧介绍以及判断是否为职务
    firstImpression() {
      this.$axios
        .get("/perComparison/firstImpression?idNumbers=" + this.idNumberse)
        .then(res => {
          if (res.data.code == 0) {
            this.listdetailr.politicalContent = res.data.data.politicalContent;
            this.listdetailr.dutyContent = res.data.data.dutyContent;
            this.listdetailr.ageContent = res.data.data.ageContent;
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$axios
        .get("/perComparison/isDuty?idNumbers=" + this.idNumberse)
        .then(res => {
          if (res.data.code == 0) {
            this.isDuty = res.data.data;
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //初映象左侧标签
    firstLabelImpression() {
      this.$axios
        .get("/perComparison/firstLabelImpression?idNumbers=" + this.idNumberse)
        .then(res => {
          if (res.data.code == 0) {
            this.listdetaill.policeContent = res.data.data.policeContent;
            this.listdetaill.politicalContent = res.data.data.politicalContent;
            this.listdetaill.dutyContent = res.data.data.dutyContent;
            this.listdetaill.policeRankContent =
              res.data.data.policeRankContent;
            this.listdetaill.talentsContent = res.data.data.talentsContent;
            this.listdetaill.jzContent = res.data.data.jzContent;
            this.listdetaill.fxContent = res.data.data.fxContent;
            this.listdetaill.honorContent = res.data.data.honorContent;
            //样式修改
            setTimeout(() => {
              let floorse = document.querySelectorAll(
                ".mianportrait>.impression"
              );
              floorse.forEach((nav, index) => {
                if (index == 1) {
                  nav.classList.add("initial");
                } else if (index == 3) {
                  nav.classList.add("initial");
                } else if (index == 5) {
                  nav.classList.add("initial");
                }
              });
            }, 200);
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //找位置右侧介绍
    locationImpression() {
      this.$axios
        .get("/perComparison/locationImpression?idNumbers=" + this.idNumberse)
        .then(res => {
          if (res.data.code == 0) {
            this.listwz.ageContent = res.data.data;
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //勇争先左侧文字
    bravely() {
      this.$axios
        .get("/perComparison/beTheBest?idNumbers=" + this.idNumberse)
        .then(res => {
          if (res.data.code == 0) {
            // let details = res.data.data.split(",");
            // console.log(details);
            // for (let i = 0; i < details.length; i++) {
            //   if (i == 0) {
            //     this.listlv.ageContent = details[0];
            //   } else {
            //     if (i == 1) {
            //       this.listlv.dutyContent = details[i];
            //     } else {
            //       this.listlv.dutyContent =
            //         this.listlv.dutyContent + "," + details[i];
            //     }
            //   }
            // }
            this.listlv.ageContent = res.data.data;
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //勇争先右侧数据
    beTheBestLabel() {
      this.$axios
        .get("/perComparison/beTheBestLabel?idNumbers=" + this.idNumberse)
        .then(res => {
          if (res.data.code == 0) {
            this.beTheBestLabellist = [];
            let lists = res.data.data;
            this.frequency = Math.ceil(lists.length / 3);
            for (let k = 0; k < this.frequency; k++) {
              let datas = lists.slice(k * 3, 3 * (k + 1));
              this.beTheBestLabellist.push(datas);
            }
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //学历
    education() {
      let floorNavses = document.querySelectorAll(".mianportraitse .boxquery");
      floorNavses.forEach((nav, index) => {
        index == 0
          ? nav.classList.add("actives")
          : nav.classList.remove("actives");
      });
      this.isDutyses = "学历";
      this.location("学历");
    },
    //年龄
    agequery() {
      let floorNavses = document.querySelectorAll(".mianportraitse .boxquery");
      floorNavses.forEach((nav, index) => {
        index == 1
          ? nav.classList.add("actives")
          : nav.classList.remove("actives");
      });
      this.isDutyses = "年龄";
      this.location("年龄");
    },
    //职级
    rankquery() {
      this.isDutyses = "职级";
      let floorNavses = document.querySelectorAll(".mianportraitse .boxquery");
      floorNavses.forEach((nav, index) => {
        index == 2
          ? nav.classList.add("actives")
          : nav.classList.remove("actives");
      });
      this.location("职级");
    },
    //职务
    ranksquery() {
      this.isDutyses = "职务";
      let floorNavses = document.querySelectorAll(".mianportraitse .boxquery");
      floorNavses.forEach((nav, index) => {
        index == 2
          ? nav.classList.add("actives")
          : nav.classList.remove("actives");
      });
      this.location("职务");
    },
    //警衔
    policerank() {
      this.isDutyses = "警衔";
      let floorNavses = document.querySelectorAll(".mianportraitse .boxquery");
      floorNavses.forEach((nav, index) => {
        index == 3
          ? nav.classList.add("actives")
          : nav.classList.remove("actives");
      });
      this.location("警衔");
    },
    //来源
    sourcequery() {
      this.isDutyses = "来源";
      let floorNavses = document.querySelectorAll(".mianportraitse .boxquery");
      floorNavses.forEach((nav, index) => {
        index == 4
          ? nav.classList.add("actives")
          : nav.classList.remove("actives");
      });
      this.location("来源");
    },
    //职位分析
    positionanalysis() {
      let floorNavszw = document.querySelectorAll(".mianportraitzw>.boxquerys");
      floorNavszw.forEach((nav, index) => {
        index == 1
          ? nav.classList.add("actives")
          : nav.classList.remove("actives");
      });
      let floorstse = document.querySelectorAll(".zboxright>.boxrightst");
      floorstse.forEach((nav, index) => {
        if (index == 1) {
          nav.classList.add("activeposit");
        } else if (index == 2) {
          nav.classList.remove("activeposit");
          nav.classList.add("activeposit1");
        } else if (index == 0) {
          nav.classList.remove("activeposit");
          nav.classList.remove("activeposit1");
        }
      });
    },
    positionanalysisecharts() {
      this.$axios
        .post("/perComparison/jobAnalysis", {
          idNumber: this.idNumberse,
          type: this.isDuty
        })
        .then(res => {
          if (res.data.code == 0) {
            let myChartpositionanaly = this.$echarts.init(
              document.getElementById("positionanalyecharts")
            );
            let jlist = [];
            let plist = [];
            let zlist = [];
            let listzt = 0;
            for (let key in res.data.data.reward) {
              jlist.push(res.data.data.reward[key]);
            }
            for (let key in res.data.data.training) {
              plist.push(res.data.data.training[key]);
            }
            for (let key in res.data.data.duty) {
              listzt = res.data.data.column.indexOf(res.data.data.duty[key]);
              zlist.push(listzt);
            }
            let colorslist = ["#2ec7c9", "#b6a2de", "#85baec"];
            let optionses = {
              color: colorslist,
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "cross",
                  crossStyle: {
                    color: "#999"
                  }
                },
                formatter: function(params) {
                  return (
                    params[0].axisValue +
                    "</br>奖励次数:" +
                    params[0].data +
                    "</br>培训次数:" +
                    params[1].data +
                    "</br>职位:" +
                    res.data.data.column[params[2].data]
                  );
                }
              },
              legend: {
                data: ["奖励次数", "培训次数", "职位变动"]
              },
              xAxis: [
                {
                  type: "category",
                  data: res.data.data.row,
                  axisPointer: {
                    type: "shadow"
                  },
                  axisLabel: {
                    rotate: 75
                  }
                }
              ],
              yAxis: [
                {
                  type: "value",
                  name: "数量",
                  min: 0,
                  max: 8,
                  interval: 1,
                  axisLabel: {
                    formatter: "{value}"
                  },
                  axisLine: {
                    lineStyle: {
                      color: colorslist[0]
                    }
                  }
                },
                {
                  type: "value",
                  name: "职位",
                  min: 0,
                  max: 8,
                  interval: 1,
                  axisLabel: {
                    formatter: function(value) {
                      return res.data.data.column[value];
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: colorslist[0]
                    }
                  }
                }
              ],
              series: [
                {
                  name: "奖励次数",
                  type: "bar",
                  data: jlist
                },
                {
                  name: "培训次数",
                  type: "bar",
                  data: plist
                },
                {
                  name: "职位变动",
                  type: "line",
                  yAxisIndex: 1,
                  data: zlist
                }
              ]
            };
            myChartpositionanaly.setOption(optionses, true);
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //民意分析
    publicopinionanalysis() {
      let floorNavszw = document.querySelectorAll(".mianportraitzw>.boxquerys");
      floorNavszw.forEach((nav, index) => {
        index == 2
          ? nav.classList.add("actives")
          : nav.classList.remove("actives");
      });
      let floorstse = document.querySelectorAll(".zboxright>.boxrightst");
      floorstse.forEach((nav, index) => {
        if (index == 2) {
          nav.classList.add("activeposit");
        } else if (index == 0) {
          nav.classList.remove("activeposit");
          nav.classList.add("activeposit1");
        } else if (index == 1) {
          nav.classList.remove("activeposit");
          nav.classList.remove("activeposit1");
        }
      });
    },
    publicoptioneachart() {
      this.$axios
        .get("/perComparison/getPersonOpinion?idNumbers=" + this.idNumberse)
        .then(res => {
          if (res.data.code == 0) {
            let myChartpublicopinionanaly = this.$echarts.init(
              document.getElementById("publicopinionanalyecharts")
            );
            let publiclist = [];
            let publicdatas = [];
            res.data.data.opinionVoList.forEach(items => {
              publiclist.push(items.year);
              publicdatas.push({
                value: items.opinion,
                name: items.year,
                itemStyle: { color: "#45ccce" }
              });
            });
            let optionpublic = {
              tooltip: {
                trigger: "axis"
              },
              legend: {
                data: ["满意度"]
              },
              xAxis: {
                type: "category",
                boundaryGap: false,
                data: publiclist
              },
              yAxis: {
                type: "value",
                axisLabel: {
                  formatter: "{value}%"
                }
              },
              visualMap: {
                show: false,
                dimension: 0,
                pieces: [
                  {
                    gt: 0,
                    lte: 100,
                    color: "#45ccce"
                  }
                ]
              },
              series: [
                {
                  name: "满意度",
                  type: "line",
                  data: publicdatas,
                  markPoint: {
                    data: [
                      {
                        type: "max",
                        name: "最大值",
                        itemStyle: { color: "#45ccce" }
                      },
                      {
                        type: "min",
                        name: "最小值",
                        itemStyle: { color: "#45ccce" }
                      }
                    ]
                  },
                  markLine: {
                    data: [
                      {
                        type: "average",
                        name: "平均值",
                        itemStyle: { color: "#45ccce" }
                      }
                    ]
                  }
                }
              ]
            };
            myChartpublicopinionanaly.setOption(optionpublic, true);
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //找位置
    location(type) {
      this.$axios
        .post("/perComparison/location", {
          idNumber: this.idNumberse,
          type: type
        })
        .then(res => {
          if (res.data.code == 0) {
            if (this.isDutyses == "学历") {
              this.myChart = this.$echarts.init(
                document.getElementById("locations")
              );
              this.myChartse = this.$echarts.init(
                document.getElementById("locationse")
              );
            } else if (this.isDutyses == "年龄") {
              this.myChartl = this.$echarts.init(
                document.getElementById("locationsl")
              );
              this.myChartsel = this.$echarts.init(
                document.getElementById("locationsel")
              );
            } else if (this.isDutyses == "职务") {
              this.myChartw = this.$echarts.init(
                document.getElementById("locationsw")
              );
              this.myChartsew = this.$echarts.init(
                document.getElementById("locationsew")
              );
            } else if (this.isDutyses == "职级") {
              this.myChartj = this.$echarts.init(
                document.getElementById("locationsj")
              );
              this.myChartsej = this.$echarts.init(
                document.getElementById("locationsej")
              );
            } else if (this.isDutyses == "警衔") {
              this.myChartx = this.$echarts.init(
                document.getElementById("locationsx")
              );
              this.myChartsex = this.$echarts.init(
                document.getElementById("locationsex")
              );
            } else if (this.isDutyses == "来源") {
              this.myCharty = this.$echarts.init(
                document.getElementById("locationsy")
              );
              this.myChartsey = this.$echarts.init(
                document.getElementById("locationsey")
              );
            }
            let options = [];
            let optionse = [];
            var val1data2 = [];
            var val1data21 = [];
            let locas1 = 0;
            let locasz1 = 0;
            let locase1 = 0;
            let locasez1 = 0;
            let datalist = [];
            let details = "";
            if (this.isDutyses == "学历") {
              datalist = res.data.data.education;
              details = "我的学历" + res.data.data.mySelf;
            } else if (this.isDutyses == "年龄") {
              datalist = res.data.data.age;
              details = "我的年龄" + res.data.data.mySelf;
            } else if (this.isDutyses == "职务") {
              datalist = res.data.data.duty;
              details = "我的职务" + res.data.data.mySelf;
            } else if (this.isDutyses == "职级") {
              datalist = res.data.data.dutyRank;
              details = "我的职级" + res.data.data.mySelf;
            } else if (this.isDutyses == "警衔") {
              datalist = res.data.data.policeRank;
              details = "我的警衔" + res.data.data.mySelf;
            } else if (this.isDutyses == "来源") {
              datalist = res.data.data.source;
              details = res.data.data.mySelf;
            }
            for (let key in datalist["市局"]) {
              val1data2.push({
                value: datalist["市局"][key],
                name: key
              });
              locasz1 = locasz1 + datalist["市局"][key];
              if (res.data.data.mySelf == key) {
                locas1 = datalist["市局"][key];
              }
            }
            for (let key in datalist["部门"]) {
              val1data21.push({
                value: datalist["部门"][key],
                name: key
              });
              locasez1 = locasez1 + datalist["部门"][key];
              if (res.data.data.mySelf == key) {
                locase1 = datalist["部门"][key];
              }
            }
            let locas = locas1 / locasz1;
            let locase = locase1 / locasez1;
            var arrs = ["middleLost", locas, val1data2, details];
            var arrse = ["middleLost2", locase, val1data21, details];
            options = {
              title: {
                top: "45%",
                left: "center",
                text: arrs[3],
                textStyle: {
                  color: "#000",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: 12
                },
                subtext:
                  "占所有数据的" + (arrs[1] * 10000 / 100).toFixed(2) + "%",
                subtextStyle: {
                  color: "#000",
                  fontSize: 10
                }
              },
              tooltip: {
                trigger: "item",
                formatter: function(res) {
                  if (res.componentSubType == "liquidFill") {
                    return (
                      res.seriesName +
                      ": " +
                      (res.value * 10000 / 100).toFixed(2) +
                      "%"
                    );
                  } else {
                    return (
                      '<span class="ii" style="background:' +
                      res.color +
                      ' "></span>' +
                      res.name +
                      ":<br/> " +
                      res.data.value
                    );
                  }
                }
              },
              series: [
                // {
                //   type: "liquidFill",
                //   itemStyle: {
                //     normal: {
                //       opacity: 0.4,
                //       shadowBlur: 0,
                //       shadowColor: "blue"
                //     }
                //   },
                //   name: arrs[3],
                //   data: [
                //     {
                //       value: locas,
                //       itemStyle: {
                //         normal: {
                //           color: "#53d5ff",
                //           opacity: 0.6
                //         }
                //       }
                //     }
                //   ],
                //   color: ["#53d5ff"],
                //   center: ["50%", "50%"],
                //   label: {
                //     normal: {
                //       formatter: "",
                //       textStyle: {
                //         fontSize: 12
                //       }
                //     }
                //   },
                //   outline: {
                //     itemStyle: {
                //       borderColor: "#86c5ff",
                //       borderWidth: 0
                //     },
                //     borderDistance: 0
                //   }
                // },
                {
                  type: "pie",
                  radius: ["42%", "50%"],
                  color: [
                    "#a3c8fd",
                    "#ff9898",
                    "#fad669",
                    // "#fe9668",
                    "#7addb1",
                    "#9ad3ea",
                    "#947bf0",
                    "#b6ea98",
                    "#1F78B4",
                    "#FB9A99",
                    "#A6CEE3",
                    "#B2DF8A",
                    "#33A02C",
                    "#E31A1C"
                  ],
                  hoverAnimation: false,
                  label: {
                    show: true,
                    normal: {
                      formatter: "{b}\n{d}%",
                      show: true,
                      position: "",
                      color: "#000"
                    }
                  },
                  labelLine: {
                    normal: {
                      show: true
                    }
                  },
                  itemStyle: {
                    normal: {
                      borderWidth: 2,
                      borderColor: "#fff"
                    },
                    emphasis: {
                      borderWidth: 0,
                      shadowBlur: 2,
                      shadowOffsetX: 0,
                      shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                  },
                  data: arrs[2]
                }
              ]
            };
            optionse = {
              title: {
                top: "45%",
                left: "center",
                text: arrse[3],
                textStyle: {
                  color: "#000",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: 12
                },
                subtext:
                  "占所有数据的" + (arrse[1] * 10000 / 100).toFixed(2) + "%",
                subtextStyle: {
                  color: "#000",
                  fontSize: 10
                }
              },
              tooltip: {
                trigger: "item",
                formatter: function(res) {
                  if (res.componentSubType == "liquidFill") {
                    return (
                      res.seriesName +
                      ": " +
                      (res.value * 10000 / 100).toFixed(2) +
                      "%"
                    );
                  } else {
                    return (
                      '<span class="ii" style="background:' +
                      res.color +
                      ' "></span>' +
                      res.name +
                      ":<br/> " +
                      res.data.value
                    );
                  }
                }
              },
              series: [
                // {
                //   type: "liquidFill",
                //   itemStyle: {
                //     normal: {
                //       opacity: 0.4,
                //       shadowBlur: 0,
                //       shadowColor: "blue"
                //     }
                //   },
                //   name: arrse[3],
                //   data: [
                //     {
                //       value: locase,
                //       itemStyle: {
                //         normal: {
                //           color: "#53d5ff",
                //           opacity: 0.6
                //         }
                //       }
                //     }
                //   ],
                //   color: ["#53d5ff"],
                //   center: ["50%", "50%"],
                //   label: {
                //     normal: {
                //       formatter: "",
                //       textStyle: {
                //         fontSize: 12
                //       }
                //     }
                //   },
                //   outline: {
                //     itemStyle: {
                //       borderColor: "#86c5ff",
                //       borderWidth: 0
                //     },
                //     borderDistance: 0
                //   }
                // },
                {
                  type: "pie",
                  radius: ["42%", "50%"],
                  color: [
                    "#a3c8fd",
                    "#ff9898",
                    // "#fad669",
                    "#fe9668",
                    "#7addb1",
                    "#9ad3ea",
                    "#947bf0",
                    "#b6ea98",
                    "#1F78B4",
                    "#FB9A99",
                    "#A6CEE3",
                    "#B2DF8A",
                    "#33A02C",
                    "#E31A1C"
                  ],
                  hoverAnimation: false,
                  label: {
                    show: true,

                    normal: {
                      formatter: "{b}\n{d}%",
                      show: true,
                      position: "",
                      color: "#000"
                    }
                  },
                  labelLine: {
                    normal: {
                      show: true
                    }
                  },

                  itemStyle: {
                    normal: {
                      borderWidth: 2,
                      borderColor: "#fff"
                    },
                    emphasis: {
                      borderWidth: 0,
                      shadowBlur: 2,
                      shadowOffsetX: 0,
                      shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                  },
                  data: arrse[2]
                }
              ]
            };
            if (this.isDutyses == "学历") {
              this.myChart.setOption(options, true);
              this.myChartse.setOption(optionse, true);
            } else if (this.isDutyses == "年龄") {
              this.myChartl.setOption(options, true);
              this.myChartsel.setOption(optionse, true);
            } else if (this.isDutyses == "职务") {
              this.myChartw.setOption(options, true);
              this.myChartsew.setOption(optionse, true);
            } else if (this.isDutyses == "职级") {
              this.myChartj.setOption(options, true);
              this.myChartsej.setOption(optionse, true);
            } else if (this.isDutyses == "警衔") {
              this.myChartx.setOption(options, true);
              this.myChartsex.setOption(optionse, true);
            } else if (this.isDutyses == "来源") {
              this.myCharty.setOption(options, true);
              this.myChartsey.setOption(optionse, true);
            }
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //对比看看数据查询
    contrastdata() {
      let isAgee = this.isAges == true ? 1 : 0;
      let isInPartye = this.isInPartys == true ? 1 : 0;
      let isInPolicee = this.isInPolices == true ? 1 : 0;
      let isSchoolee = this.isSchools == true ? 1 : 0;
      let isSubjecte = this.isSubjects == true ? 1 : 0;
      let isToWorke = this.isToWorks == true ? 1 : 0;
      //奖章
      this.$axios
        .post("/personComparison/getHonorComparison", {
          idNo: this.idNumberse,
          isAge: isAgee,
          // isAge: 1,
          isInParty: isInPartye,
          isInPolice: isInPolicee,
          isSchool: isSchoolee,
          isSubject: isSubjecte,
          isToWork: isToWorke,
          year: this.year
        })
        .then(res => {
          if (res.data.code == 0) {
            this.recognitioncont = "";
            let val1data2 = [];
            let colordata = [
              "#a3c8fd",
              "#ff9898",
              "#fad669",
              "#fe9668",
              "#7addb1",
              "#9ad3ea",
              "#947bf0",
              "#b6ea98"
            ];
            let kes = 0;
            if (res.data.data["我的表彰"] == "无") {
              this.recognitioncont = "无";
            } else {
              res.data.data["我的表彰"].forEach(item => {
                if (this.recognitioncont) {
                  this.recognitioncont = this.recognitioncont + "," + item;
                } else {
                  this.recognitioncont = item;
                }
              });
            }
            for (let key in res.data.data.chartData) {
              val1data2.push({
                value: res.data.data.chartData[key].count,
                name: key,
                itemStyle: { color: colordata[kes] }
              });
              kes++;
            }
            let myChartbzjl = this.$echarts.init(
              document.getElementById("erchatbzjl")
            );
            let options = {
              tooltip: {
                trigger: "item",
                formatter: "{b} : {c} ({d}%)"
              },
              series: [
                {
                  type: "pie",
                  radius: "55%",
                  center: ["50%", "45%"],
                  data: val1data2,
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                  }
                }
              ]
            };
            myChartbzjl.setOption(options, true);
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      //民意满意度
      this.$axios
        .post("/personComparison/getSatisfiedComparison", {
          idNo: this.idNumberse,
          isAge: isAgee,
          isInParty: isInPartye,
          isInPolice: isInPolicee,
          isSchool: isSchoolee,
          isSubject: isSubjecte,
          isToWork: isToWorke,
          // isToWork: 1,
          year: this.year
        })
        .then(res => {
          if (res.data.code == 0) {
            let myChartmymyd = this.$echarts.init(
              document.getElementById("erchatmymyd")
            );
            this.opinionsatisfactioncont = res.data.data["我的民意满意度"];
            let labels = [];
            let indicators = [];
            let indicatorse = [];
            let indicase = 0;
            for (let key in res.data.data.chartData) {
              if (res.data.data.chartData[key].count > indicase) {
                indicase = res.data.data.chartData[key].count;
              }
            }
            for (let key in res.data.data.chartData) {
              indicators.push({
                max: indicase,
                name: key
              });
              indicatorse.push(res.data.data.chartData[key].count);
              labels.push(key);
            }
            let optiones = {
              tooltip: {
                formatter: function(params) {
                  var results = "";
                  for (var i = 0; i < labels.length; i++) {
                    results += labels[i] + ":" + params.value[i] + "人<br>";
                  }
                  return results;
                }
              },
              radar: {
                name: {
                  textStyle: {
                    color: "#000"
                  }
                },
                indicator: indicators
              },
              series: [
                {
                  type: "radar",
                  data: [
                    {
                      value: indicatorse
                    }
                  ],
                  areaStyle: {
                    normal: {}
                  }
                }
              ]
            };
            myChartmymyd.setOption(optiones, true);
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      //警衔
      this.$axios
        .post("/personComparison/getRankComparison", {
          idNo: this.idNumberse,
          isAge: isAgee,
          // isAge: 1,
          isInParty: isInPartye,
          isInPolice: isInPolicee,
          isSchool: isSchoolee,
          isSubject: isSubjecte,
          isToWork: isToWorke,
          year: this.year
        })
        .then(res => {
          if (res.data.code == 0) {
            this.policerankcont = res.data.data["我的警衔"];
            let myChartjxjs = this.$echarts.init(
              document.getElementById("erchatjxjs")
            );
            let listdatas = [];
            let listdatase = [];
            let colrlists = [
              "#a3c8fd",
              "#ff9898",
              "#fad669",
              "#fe9668",
              "#7addb1",
              "#9ad3ea",
              "#947bf0",
              "#b6ea98",
              "#1F78B4",
              "#FB9A99",
              "#A6CEE3",
              "#B2DF8A",
              "#33A02C",
              "#E31A1C"
            ];
            let xlistdatas = [];
            let kess = 0;
            let keys = 0;
            for (let key in res.data.data.chartData) {
              listdatas.push({
                value: res.data.data.chartData[key].count,
                name: key,
                itemStyle: {
                  color: colrlists[kess]
                }
              });
              keys = keys + res.data.data.chartData[key].count;
              xlistdatas.push(key);
              kess++;
            }
            let keyse = 0;
            let non = 0;
            let nons = 0;
            for (let key in res.data.data.chartData) {
              non = res.data.data.chartData[key].count / keys * 100;
              nons = String(non).slice(0, 4);
              listdatase.push({
                value: nons,
                name: key,
                itemStyle: {
                  color: colrlists[keyse]
                }
              });
              keyse++;
            }
            let optionses = {
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow"
                },
                formatter: function(prams) {
                  return (
                    prams[1].data.name +
                    ":" +
                    prams[1].data.value +
                    "</br>占比:" +
                    prams[0].data.value +
                    "%"
                  );
                }
              },
              grid: {
                left: "0%",
                right: "0%",
                bottom: "0%",
                containLabel: true
              },
              xAxis: [
                {
                  type: "category",
                  axisTick: {
                    show: false,
                    color: "#707070"
                  },
                  axisLabel: {
                    textStyle: {
                      fontSize: 14,
                      color: "#4D4D4D",
                      position: "top"
                    },
                    rotate: 40
                    // margin:-200
                  },
                  axisLine: {
                    lineStyle: {
                      color: "#707070"
                    }
                  },
                  data: xlistdatas
                }
              ],
              yAxis: {
                type: "value",
                show: false
              },
              series: [
                {
                  name: "",
                  type: "pictorialBar",
                  symbolSize: [20, 10],
                  z: 12,
                  data: listdatase,
                  label: {
                    normal: {
                      show: true,
                      position: "inside",
                      formatter: "{c}%",
                      color: "#000"
                    }
                  }
                },
                {
                  type: "bar",
                  barWidth: "60%",
                  data: listdatas,
                  label: {
                    normal: {
                      show: true,
                      position: "top"
                    }
                  }
                }
              ]
            };
            myChartjxjs.setOption(optionses, true);
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      //职位职级
      this.$axios
        .post("/personComparison/getPostComparison", {
          idNo: this.idNumberse,
          isAge: isAgee,
          // isAge: 1,
          isInParty: isInPartye,
          isInPolice: isInPolicee,
          isSchool: isSchoolee,
          isSubject: isSubjecte,
          isToWork: isToWorke,
          year: this.year
        })
        .then(res => {
          if (res.data.code == 0) {
            this.dutyRankcont = res.data.data["我的职位"];
            let myChartzwzj = this.$echarts.init(
              document.getElementById("erchatzwzj")
            );
            let listdatas = [];
            let listdatase = [];
            let colrlists = [
              "#a3c8fd",
              "#ff9898",
              "#fad669",
              "#fe9668",
              "#7addb1",
              "#9ad3ea",
              "#947bf0",
              "#b6ea98",
              "#1F78B4",
              "#FB9A99",
              "#A6CEE3",
              "#B2DF8A",
              "#33A02C",
              "#E31A1C"
            ];
            let xlistdatas = [];
            let kess = 0;
            let keys = 0;
            for (let key in res.data.data.chartData) {
              listdatas.push({
                value: res.data.data.chartData[key].count,
                name: key,
                itemStyle: {
                  color: colrlists[kess]
                }
              });
              keys = keys + res.data.data.chartData[key].count;
              xlistdatas.push(key);
              kess++;
            }
            let keyse = 0;
            let non = 0;
            let nons = 0;
            for (let key in res.data.data.chartData) {
              non = res.data.data.chartData[key].count / keys * 100;
              nons = String(non).slice(0, 4);
              listdatase.push({
                value: nons,
                name: key,
                itemStyle: {
                  color: colrlists[keyse]
                }
              });
              keyse++;
            }
            let optionse = {
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow"
                },
                formatter: function(prams) {
                  return (
                    prams[1].data.name +
                    ":" +
                    prams[1].data.value +
                    "</br>占比:" +
                    prams[0].data.value +
                    "%"
                  );
                }
              },
              grid: {
                left: "3%",
                right: "4%",
                bottom: "0%",
                containLabel: true
              },
              xAxis: [
                {
                  type: "category",
                  axisTick: {
                    show: false,
                    color: "#707070"
                  },
                  axisLabel: {
                    textStyle: {
                      fontSize: 14,
                      color: "#4D4D4D",
                      position: "top"
                    },
                    rotate: 30
                    // margin:-200
                  },
                  axisLine: {
                    lineStyle: {
                      color: "#707070"
                    }
                  },
                  data: xlistdatas
                }
              ],
              yAxis: {
                type: "value",
                show: false
              },
              series: [
                {
                  name: "",
                  type: "pictorialBar",
                  symbolSize: [20, 10],
                  z: 12,
                  data: listdatase,
                  label: {
                    normal: {
                      show: true,
                      position: "inside",
                      formatter: "{c}%",
                      color: "#000"
                    }
                  }
                },
                {
                  type: "bar",
                  barWidth: "60%",
                  data: listdatas,
                  label: {
                    normal: {
                      show: true,
                      position: "top"
                    }
                  }
                }
              ]
            };
            myChartzwzj.setOption(optionse, true);
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      //教育培训
      this.$axios
        .post("/personComparison/getTrainComparison", {
          idNo: this.idNumberse,
          isAge: isAgee,
          // isAge: 1,
          isInParty: isInPartye,
          isInPolice: isInPolicee,
          isSchool: isSchoolee,
          isSubject: isSubjecte,
          isToWork: isToWorke,
          year: this.year
        })
        .then(res => {
          if (res.data.code == 0) {
            let myChartjypx = this.$echarts.init(
              document.getElementById("erchatzjjypx")
            );
            this.educationtrainingcont = res.data.data["我的教育培训"];
            let datase = [];
            for (let key in res.data.data.chartData) {
              datase.push({
                value: res.data.data.chartData[key].count,
                name: key
              });
            }
            let arrName = getArrayValue(datase, "name");
            let arrValue = getArrayValue(datase, "value");
            let sumValue = eval(arrValue.join("+"));
            let objData = array2obj(datase, "name");
            let optionData = getData(datase);
            let optionse = {
              backgroundColor: "#fff",
              legend: {
                show: false
              },
              tooltip: {
                show: true,
                trigger: "item",
                formatter: "{b}:{c}({d}%)"
              },
              color: ["#a3c8fd", "#ff9898", "#f7cf55"],
              series: optionData.series
            };
            function getData(data) {
              var res = {
                series: [],
                yAxis: []
              };
              for (let i = 0; i < data.length; i++) {
                res.series.push({
                  type: "pie",
                  clockWise: false, //顺时加载
                  hoverAnimation: false, //鼠标移入变大
                  radius: [65 - i * 15 + "%", 57 - i * 15 + "%"],
                  center: ["50%", "50%"],
                  label: {
                    show: true,
                    trigger: "item",
                    formatter: "{d}%的人参加{b}培训"
                  },
                  itemStyle: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: true
                    },
                    borderWidth: 5
                  },
                  data: [
                    {
                      value: data[i].value,
                      name: data[i].name
                    },
                    {
                      value: sumValue - data[i].value,
                      name: "",
                      itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                      },
                      tooltip: {
                        show: false
                      },
                      hoverAnimation: false
                    }
                  ]
                });
                res.series.push({
                  name: "",
                  type: "pie",
                  silent: true,
                  z: 1,
                  clockWise: false, //顺时加载
                  hoverAnimation: false, //鼠标移入变大
                  radius: [65 - i * 15 + "%", 57 - i * 15 + "%"],
                  center: ["50%", "50%"],
                  label: {
                    show: false
                  },
                  itemStyle: {
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    },
                    borderWidth: 5
                  },
                  data: [
                    {
                      value: 8,
                      itemStyle: {
                        color: "#E3F0FF",
                        borderWidth: 0
                      },
                      tooltip: {
                        show: false
                      },
                      hoverAnimation: false
                    }
                  ]
                });
                res.yAxis.push(
                  (data[i].value / sumValue * 100).toFixed(2) + "%"
                );
              }
              return res;
            }
            function array2obj(array, key) {
              var resObj = {};
              for (var i = 0; i < array.length; i++) {
                resObj[array[i][key]] = array[i];
              }
              return resObj;
            }
            function getArrayValue(array, key) {
              var key = key || "value";
              var res = [];
              if (array) {
                array.forEach(function(t) {
                  res.push(t[key]);
                });
              }
              return res;
            }
            myChartjypx.setOption(optionse, true);
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //判断男女
    getSex() {
      this.$axios
        .get("/perComparison/getSex?idNumbers=" + this.idNumberse)
        .then(res => {
          if (res.data.code == 0) {
            if (res.data.data == "男") {
              this.sex = "man";
            } else {
              this.sex = "woman";
            }
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //工作分析
    jobanalysis() {
      let floorNavszw = document.querySelectorAll(".mianportraitzw>.boxquerys");
      floorNavszw.forEach((nav, index) => {
        index == 0
          ? nav.classList.add("actives")
          : nav.classList.remove("actives");
      });
      let floorstse = document.querySelectorAll(".zboxright>.boxrightst");
      floorstse.forEach((nav, index) => {
        if (index == 0) {
          nav.classList.add("activeposit");
        } else if (index == 1) {
          nav.classList.remove("activeposit");
          nav.classList.add("activeposit1");
        } else if (index == 2) {
          nav.classList.remove("activeposit");
          nav.classList.remove("activeposit1");
        }
      });
    },
    getJcj() {
      this.$axios
        .get("/perComparison/getJcj?idNumbers=" + this.idNumberse)
        .then(res => {
          if (res.data.code == 0) {
            var myChartjobanalyed = this.$echarts.init(
              document.getElementById("jobanalyecharts")
            );
            var myChartjobanalyajed = this.$echarts.init(
              document.getElementById("jobanalyechartsaj")
            );
            let dataslist = ["占位"];
            var datajsl = [];
            var datajslz = [];
            let dataslistaj = ["占位"];
            var datajslaj = [];
            var datajslzaj = [];
            res.data.data.forEach(item => {
              dataslist.push(item.year + "年");
              datajsl.push(item.jcj);
              datajslz.push({
                year: item.year + "年",
                accountedFoJcj: item.accountedFoJcj
              });
              dataslistaj.push(item.year + "年");
              datajslaj.push(item.aj);
              datajslzaj.push({
                year: item.year + "年",
                accountedForAj: item.accountedForAj
              });
            });
            dataslist.push("占位");
            dataslistaj.push("占位");
            var gap = 0;
            var total = 0;
            var maxIndex;
            var gapaj = 0;
            var totalaj = 0;
            var maxIndexaj;
            var dataArray = (function() {
              var max = Math.max.apply(Math, datajsl);
              var min = Math.min.apply(Math, datajsl);
              gap = Math.round(max - min);
              var nd = [{ value: datajsl[0] + gap, symbol: "none" }];
              for (var i = 0, l = datajsl.length; i < l; i++) {
                if (datajsl[i] == max) {
                  maxIndex = i;
                }
                total += datajsl[i];
                nd.push(datajsl[i] + gap);
              }
              nd.push({
                value: datajsl[datajsl.length - 1] + gap,
                symbol: "none"
              });
              return nd;
            })();
            var dataArrayaj = (function() {
              var maxaj = Math.max.apply(Math, datajslaj);
              var minaj = Math.min.apply(Math, datajslaj);
              gapaj = Math.round(maxaj - minaj);
              var ndaj = [{ value: datajslaj[0] + gapaj, symbol: "none" }];
              for (var iaj = 0, laj = datajslaj.length; iaj < laj; iaj++) {
                if (datajslaj[iaj] == maxaj) {
                  maxIndexaj = iaj;
                }
                totalaj += datajslaj[iaj];
                ndaj.push(datajslaj[iaj] + gapaj);
              }
              ndaj.push({
                value: datajslaj[datajslaj.length - 1] + gapaj,
                symbol: "none"
              });
              return ndaj;
            })();
            let option = {
              backgroundColor: "#fff",
              legend: {
                data: ["接警量", "占比"],
                x: "left",
                orient: "vertical",
                selectedMode: false
              },
              tooltip: {
                trigger: "item",
                formatter: function(params) {
                  if (params.seriesName == "占比") {
                    var percent = 0;
                    datajslz.forEach(items => {
                      if (items.year == params.name) {
                        percent = items.accountedFoJcj;
                      }
                    });
                    return (
                      params.name +
                      " : " +
                      params.value +
                      "<br/>" +
                      "占比 : " +
                      percent +
                      "%"
                    );
                  } else if (params.name != "占位") {
                    update(params);
                    let sert = params.value - gap;
                    return params.name + " : " + sert;
                  }
                },
                axisPointer: {
                  type: "none"
                }
              },
              grid: {
                show: true,
                backgroundColor: "#ccc",
                borderWidth: 0,
                left: "288",
                right: "288",
                top: "250",
                bottom: "220"
              },
              xAxis: [
                {
                  type: "category",
                  boundaryGap: false,
                  show: false,
                  data: dataslist
                }
              ],
              yAxis: [
                {
                  type: "value",
                  boundaryGap: [0, 0.5],
                  show: false
                }
              ],
              animation: false,
              series: [
                {
                  name: "接警量",
                  type: "line",
                  symbol: "emptyCircle",
                  symbolSize: 6,
                  showAllSymbol: true,
                  smooth: true,
                  itemStyle: {
                    normal: {
                      areaStyle: { type: "default" },
                      color: "#7dc9ca"
                    }
                  },
                  data: dataArray
                },
                {
                  name: "遮罩",
                  type: "pie",
                  clickable: false,
                  tooltip: { show: false },
                  radius: [100, 500],
                  silent: true,
                  itemStyle: {
                    color: "#fff",
                    emphasis: { color: "rgba(0,0,0,0)" }
                  },
                  label: { show: false },
                  labelLine: { show: false },
                  data: [{ value: 100, name: "直接访问" }]
                },
                {
                  name: "占比",
                  type: "pie",
                  clickable: false,
                  clockWise: true,
                  radius: [110, 125],
                  itemStyle: {
                    normal: {
                      color: "#7dc9ca"
                    }
                  },
                  data: [
                    {
                      label: {
                        show: false,
                        position: "inside",
                        formatter: "\n{b} : {c}\n\n( {d}% )",
                        textStyle: {
                          fontSize: 15,
                          baseline: "top"
                        }
                      }
                    },
                    {
                      name: "其他",
                      tooltip: { show: false },
                      itemStyle: {
                        color: "#fff"
                      },
                      label: { show: false },
                      labelLine: { show: false }
                    }
                  ]
                }
              ]
            };
            let optionse = {
              backgroundColor: "#fff",
              legend: {
                data: ["办案量", "单位占比"],
                x: "left",
                orient: "vertical",
                selectedMode: false
              },
              tooltip: {
                trigger: "item",
                formatter: function(params) {
                  if (params.seriesName == "单位占比") {
                    var percentaj = 0;
                    datajslzaj.forEach(items => {
                      if (items.year == params.name) {
                        percentaj = items.accountedForAj;
                      }
                    });
                    return (
                      params.name +
                      " : " +
                      params.value +
                      "<br/>" +
                      "单位占比 : " +
                      percentaj +
                      "%"
                    );
                  } else if (params.name != "占位") {
                    updateaj(params);
                    let sertaj = params.value - gapaj;
                    return params.name + " : " + sertaj;
                  }
                },
                axisPointer: {
                  type: "none"
                }
              },
              grid: {
                show: true,
                backgroundColor: "#ccc",
                borderWidth: 0,
                left: "288",
                right: "288",
                top: "250",
                bottom: "220"
              },
              xAxis: [
                {
                  type: "category",
                  boundaryGap: false,
                  show: false,
                  data: dataslistaj
                }
              ],
              yAxis: [
                {
                  type: "value",
                  boundaryGap: [0, 0.5],
                  show: false
                }
              ],
              animation: false,
              series: [
                {
                  name: "办案量",
                  type: "line",
                  symbol: "emptyCircle",
                  symbolSize: 6,
                  showAllSymbol: true,
                  smooth: true,
                  itemStyle: {
                    normal: {
                      areaStyle: { type: "default" },
                      color: "#7dc9ca"
                    }
                  },
                  data: dataArrayaj
                },
                {
                  name: "遮罩",
                  type: "pie",
                  clickable: false,
                  tooltip: { show: false },
                  radius: [100, 500],
                  silent: true,
                  itemStyle: {
                    color: "#fff",
                    emphasis: { color: "rgba(0,0,0,0)" }
                  },
                  label: { show: false },
                  labelLine: { show: false },
                  data: [{ value: 100, name: "直接访问" }]
                },
                {
                  name: "单位占比",
                  type: "pie",
                  clickable: false,
                  clockWise: true,
                  radius: [110, 125],
                  itemStyle: {
                    normal: {
                      color: "#7dc9ca"
                    }
                  },
                  data: [
                    {
                      label: {
                        show: false,
                        position: "inside",
                        formatter: "\n{b} : {c}\n\n( {d}% )",
                        textStyle: {
                          fontSize: 15,
                          baseline: "top"
                        }
                      }
                    },
                    {
                      name: "其他",
                      tooltip: { show: false },
                      itemStyle: {
                        color: "#fff"
                      },
                      label: { show: false },
                      labelLine: { show: false }
                    }
                  ]
                }
              ]
            };
            //接案量
            function changePieSeries(params) {
              var curData = params.value - gap;
              var accountedFoJcjs = 0;
              datajslz.forEach(itemse => {
                let years = itemse.year;
                if (years == params.name) {
                  accountedFoJcjs = itemse.accountedFoJcj;
                }
              });
              if (accountedFoJcjs == "0.0") {
                option.series[2].startAngle =
                  -90 + accountedFoJcjs / 100 * 360 / 2;
                option.series[2].data[0].name = params.name;
                option.series[2].data[0].value = curData;
                option.series[2].data[1].value = 1;
              } else {
                option.series[2].startAngle =
                  -90 + accountedFoJcjs / 100 * 360 / 2;
                option.series[2].data[0].name = params.name;
                option.series[2].data[0].value = curData;
                option.series[2].data[1].value =
                  curData / (accountedFoJcjs / 100) - curData;
              }
              for (
                var i = 1, l = option.series[0].data.length - 1;
                i < l;
                i++
              ) {
                if (option.series[0].data[i].symbol) {
                  option.series[0].data[i].symbol = "emptyCircle";
                  option.series[0].data[i].symbolSize = 6;
                }
              }
              option.series[0].data[params.dataIndex] = {
                name: params.name,
                value: params.value,
                symbol: "emptyDiamond",
                symbolSize: 10
              };
            }
            function update(params) {
              changePieSeries(params);
              option.animation = true;
              myChartjobanalyed.setOption(option);
            }
            changePieSeries({
              name: option.xAxis[0].data[maxIndex + 1],
              value: option.series[0].data[maxIndex + 1],
              dataIndex: maxIndex + 1
            });
            myChartjobanalyed.setOption(option);
            //办案量
            function changePieSeriesaj(params) {
              var curDataaj = params.value - gapaj;
              var accountedFoJcjsaj = 0;
              datajslzaj.forEach(itemse => {
                let yearsaj = itemse.year;
                if (yearsaj == params.name) {
                  accountedFoJcjsaj = itemse.accountedForAj;
                }
              });
              if (accountedFoJcjsaj == "0.0") {
                optionse.series[2].startAngle =
                  -90 + accountedFoJcjsaj / 100 * 360 / 2;
                optionse.series[2].data[0].name = params.name;
                optionse.series[2].data[0].value = curDataaj;
                optionse.series[2].data[1].value = 1;
              } else {
                optionse.series[2].startAngle =
                  -90 + accountedFoJcjsaj / 100 * 360 / 2;
                optionse.series[2].data[0].name = params.name;
                optionse.series[2].data[0].value = curDataaj;
                optionse.series[2].data[1].value =
                  curDataaj / (accountedFoJcjsaj / 100) - curDataaj;
              }
              for (
                var is = 1, ls = optionse.series[0].data.length - 1;
                is < ls;
                is++
              ) {
                if (optionse.series[0].data[is].symbol) {
                  optionse.series[0].data[is].symbol = "emptyCircle";
                  optionse.series[0].data[is].symbolSize = 6;
                }
              }
              optionse.series[0].data[params.dataIndex] = {
                name: params.name,
                value: params.value,
                symbol: "emptyDiamond",
                symbolSize: 10
              };
            }
            function updateaj(params) {
              changePieSeriesaj(params);
              optionse.animation = true;
              myChartjobanalyajed.setOption(optionse);
            }
            changePieSeriesaj({
              name: optionse.xAxis[0].data[maxIndexaj + 1],
              value: optionse.series[0].data[maxIndexaj + 1],
              dataIndex: maxIndexaj + 1
            });
            myChartjobanalyajed.setOption(optionse);
          } else {
            this.$message(res.data.message);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  computed: {},
  mounted: function() {
    //获取楼层
    let floors = document.querySelectorAll(".floor>div");
    //获取楼层导航
    let floorNavs = document.querySelectorAll(".floorNav>li");
    //根据索引数设置楼层样式
    floorNavs.forEach((nav, index) => {
      index == 0 ? nav.classList.add("active") : nav.classList.remove("active");
    });
    //滚动监听
    window.onscroll = function() {
      //获取滚动条高度，兼容ie
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //符合点亮条件的楼层索引
      let activeIndex;
      //楼层导航图标点亮控制
      floors.forEach((floor, index) => {
        //检查各楼层顶端距离视窗顶端距离，如果满足条件则修改楼层图标
        floor.offsetTop - 200 <= scrollTop ? (activeIndex = index) : null;
      });
      //根据索引数设置楼层样式
      floorNavs.forEach((nav, index) => {
        index === activeIndex
          ? nav.classList.add("active")
          : nav.classList.remove("active");
      });
    };
    let urls = window.location.href;
    let idNumbersed = urls.split("=");
    this.idNumberse = idNumbersed[1];
    this.idNumberse = "320114196707282415";
    // this.idNumberse = "320107196312150019";
    setTimeout(() => {
      this.getSex();
      this.firstImpression();
      this.firstLabelImpression();
      this.locationImpression();
      this.location("学历");
      this.bravely();
      this.beTheBestLabel();
      this.publicoptioneachart();
      this.positionanalysisecharts();
      this.getJcj();
    });
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
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
    .floor > div {
      height: 900px;
      text-align: center;
      // font-size: 40px;
    }
    .floorNav {
      width: 60px;
      height: 200px;
      position: fixed;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    .floorNav > li {
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #a6a2a2cf;
      list-style: disc inside;
    }
    .active {
      color: #e4393c !important;
    }
  }
  .buttoncolor {
    color: #fff;
    background-color: #fb7d7d;
    border-color: #fb7d7d;
    border-radius: 20px;
  }
  ._WHITE .buttoncolor {
    color: #fff;
    background-color: #576ea9;
    border-color: #576ea9;
    border-radius: 20px;
  }
  ._WHITE .manageBox {
    color: #fff;
    background-color: #576ea9;
    border-color: #576ea9;
    border-radius: 20px;
  }
  .manageBox {
    background: url("./../../assets/image/portasts/BG-w.png") no-repeat center;
    background-size: cover;
    max-width: 1536px;
    min-width: 1280px;
    margin: 0 auto;
  }
  ._WHITE .manageBox {
    background: url("./../../assets/image/portasts/BG-m.png") no-repeat center;
    background-size: cover;
    max-width: 1536px;
    min-width: 1280px;
    margin: 0 auto;
  }
  .manageBoxes {
    background: url("./../../assets/image/portasts/womanbg.png") no-repeat
      center;
    background-size: cover;
  }
  ._WHITE .manageBoxes {
    background: url("./../../assets/image/portasts/manbg.png") no-repeat center;
    background-size: cover;
  }
  .yboxleft {
    margin-top: 140px;
    margin-left: 25%;
  }
  .zboxleft {
    margin-left: 15%;
    padding: 0px 20px;
  }
  .zboxright {
    height: 600px;
    margin-top: 17%;
    padding-right: 10%;
    position: relative;
  }
  .boxrightst {
    background: rgba(255, 255, 255, 0.4);
    width: 85%;
    height: 285px;
    -moz-box-shadow: 10px 10px 5px #84c7bb;
    box-shadow: 10px 10px 5px #84c7bb;
    z-index: 1;
    position: absolute;
    top: 0;
    right: 10%;
  }
  .boxbutton {
    margin: 30px 0;
  }
  .boxquery {
    padding: 12px 40px;
    background-color: #b1c5f6;
    border: 1px solid #b1c5f6;
  }
  .boxquerys {
    padding: 12px 20px;
    background-color: #b1c5f6;
    border: 1px solid #b1c5f6;
    margin-right: 7px;
  }
  .actives {
    background-color: #3066e7;
    border: 1px solid #3066e7;
  }
  .impression {
    width: 100%;
    clear: both;
    font-weight: 500;
    font-size: 16px;
    margin-left: 20%;
  }
  .initial {
    margin-left: 40%;
  }
  .contrastbox {
    padding: 0 20px;
  }
  .contrastbox /deep/.el-input--suffix .el-input__inner {
    padding-right: 30px;
    background: #fb7d7d;
    color: #fff;
  }
  ._WHITE .contrastbox /deep/.el-input--suffix .el-input__inner {
    padding-right: 30px;
    background: #576ea9;
    color: #fff;
  }
  .activeposit1 {
    z-index: 111;
    background: rgba(255, 255, 255, 0.6);
    top: 15%;
    right: 20%;
  }
  .activeposit {
    z-index: 999;
    background: rgba(255, 255, 255, 1);
    position: absolute;
    top: 30%;
    right: 30%;
  }
  .el-carousel__item {
    color: #475669;
    font-size: 16px;
    opacity: 0.75;
    // line-height: 700px;
    margin: 0;
  }
  /deep/.el-carousel__indicators--outside button {
    background-color: #c0c4cc;
    opacity: 0.24;
    width: 10px;
    height: 10px;
    border-radius: 10px;
  }
  /deep/.el-carousel__indicators--outside .is-active button {
    opacity: 1;
    background-color: #3066e7;
  }
  .carouselinsides {
    height: 160px;
    margin: 20px 0 20px 5%;
    width: 80%;
  }
  .ishouse {
    margin: 20px 0 20px 15%;
  }
  .leftinsides {
    height: 100%;
    width: 20%;
    float: left;
    position: relative;
  }
  .rightinsides {
    width: 80%;
    height: 100%;
    background-color: #f1c2c6;
    float: left;
    color: #fff;
    overflow-y: auto;
  }
  ._WHITE .rightinsides {
    width: 80%;
    height: 100%;
    background-color: #5780cb;
    float: left;
    color: #fff;
    overflow-y: auto;
  }
  .sexcolor {
    color: #ed6a6a;
  }
  ._WHITE .sexcolor {
    color: #1f6bf3;
  }
  .sexcolors {
    color: #2e50fb;
  }
  ._WHITE .sexcolors {
    color: #ffe064;
  }
  .sexcolors1 {
    color: #e649ef;
  }
  ._WHITE .sexcolors1 {
    color: #eb8446;
  }
  .sexcolors2 {
    color: #6884ff;
  }
  ._WHITE .sexcolors2 {
    color: #e66a79;
  }
  .sexcolors2 {
    color: #6884ff;
  }
  ._WHITE .sexcolors2 {
    color: #e66a79;
  }
  .sexcolors3 {
    color: #d57575;
  }
  ._WHITE .sexcolors3 {
    color: #4477fb;
  }
  .rightinsides::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
    // scrollbar-arrow-color: red;
  }
  ._WHITE .rightinsides::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 255, 0.8);
    background: rgba(0, 0,255, 0.2);
    // scrollbar-arrow-color: red;
  }
  ._WHITE .rightinsides::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(117, 153, 214, 0.2);
    border-radius: 0;
    background: rgba(117, 153, 214, 0.1);
  }
  .rightinsides::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(255, 0, 0, 0.8);
    background: rgba(255, 0,0, 0.2);
    // scrollbar-arrow-color: red;
  }
  .rightinsides::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(228, 100, 154, 0.2);
    border-radius: 0;
    background: rgba(228, 100, 154, 0.1);
  }
}
</style>