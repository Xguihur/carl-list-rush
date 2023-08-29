<template>
    <div>
        <div>
            <h2>
                交通事件列表
                <el-button class="flr" style="margin-right: 10px" @click="open_item2_1()" type="info">查看事件</el-button>
                <el-button class="flr" style="margin-right: 10px" @click="open_item1_1()" type="primary">添加事件</el-button>
                <admin-file-reader accept=".json" @on-read="importJson">
                    <el-button class="flr" style="margin-right: 10px">导入事件文件</el-button>
                </admin-file-reader>
            </h2>
            <el-table :data="tableData1_1" style="width: 100%">
                <el-table-column align="center" label="设备ID" width="220">
                    <template slot-scope="scope">
                        {{ scope.row.data.rtes[0].rteId }}
                    </template>
                </el-table-column>
                <!-- <el-table-column align="center" label="RTE_ID">
                      <template slot-scope="scope">
                        {{scope.row.isecId}}
                    </template>
                </el-table-column> -->
                <el-table-column align="center" label="事件类型" width="220">
                    <template slot-scope="scope">
                        {{ MixGetLabelName(tableData2_1, scope.row.data.rtes[0].eventType).text }}
                    </template>
                </el-table-column>
                <el-table-column align="center" label="描述" width="220">
                    <template slot-scope="scope">
                        {{ scope.row.data.rtes[0].description }}
                    </template>
                </el-table-column>
                <el-table-column align="center" label="事件坐标" width="220">
                    <template slot-scope="scope">
                        {{ formatCoord(scope.row.data.rtes[0].eventPos.offsetLL.lon) }},
                        {{ formatCoord(scope.row.data.rtes[0].eventPos.offsetLL.lat) }}
                    </template>
                </el-table-column>
                <el-table-column align="center" label="路径坐标" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span v-html="msgHtmlPath(scope.row.data.rtes[0].referencePaths[0])"></span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="180">
                    <template slot-scope="scope">
                        <a class="operation" @click="open_item1_1(scope.row)">编辑</a>
                        <a class="delete" @click="delete_item1_1(scope.row)">删除</a>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog class="cms-dialog" title="查询事件" :visible.sync="dialogInfo2_1" :close-on-click-modal="false">
            <el-table :data="tableData2_1">
                <el-table-column align="center" label="ID">
                    <template slot-scope="scope">
                        {{ scope.row.value }}
                    </template>
                </el-table-column>
                <el-table-column align="center" label="事件类型">
                    <template slot-scope="scope">
                        {{ scope.row.label }}
                    </template>
                </el-table-column>
                <el-table-column align="center" label="描述">
                    <template slot-scope="scope">
                        {{ scope.row.despEn }}
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
        <el-dialog class="cms-dialog" title="添加交通事件" :visible.sync="dialogInfo1_1" :close-on-click-modal="false">
            <el-form ref="dataItem1_1" :model="dataItem1_rte" :rules="rules">
                <el-row>
                    <el-form-item label="RSU设备ID:" label-width="100px">
                        <el-select v-model="dataItem1_rte.tempId" disabled placeholder="选择设备">
                            <el-option v-for="item in tableData1_2" :key="item.value" :label="item.name" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form ref="dataItem1_1" :model="dataItem1_rte" :rules="rules">
                        <el-form-item label="rteId:" prop="rteId" label-width="100px">
                            <el-input v-model.number="dataItem1_rte.rteId" oninput="this.value=this.value.replace(/[^\d]/g,'');if(value.length>3)value=value.slice(0,3)"></el-input>
                        </el-form-item>
                    </el-form>

                    <el-form ref="dataItem1_eventPosOffset" :model="dataItem1_eventPosOffset" :rules="rules">
                        <el-form-item label="事件经度:" label-width="100px" prop="lon">
                            <el-input v-model="dataItem1_eventPosOffset.lon"></el-input>
                        </el-form-item>
                        <el-form-item label="事件纬度" label-width="100px" prop="lat">
                            <el-input v-model="dataItem1_eventPosOffset.lat"></el-input>
                        </el-form-item>
                    </el-form>

                    <el-form ref="dataItem1_1" :model="dataItem1_rte" :rules="rules">
                        <el-form-item label="事件半径:" label-width="100px" prop="eventRadius">
                            <el-input v-model.number="dataItem1_rte.eventRadius" autocomplete="off" oninput="this.value=this.value.replace(/[^\d]/g,'');"><template slot="append">分米</template></el-input>
                        </el-form-item>
                    </el-form>

                    <el-form-item label="事件类型:" label-width="100px" prop="eventType">
                        <el-select v-model="dataItem1_rte.eventType" placeholder="选择发布点位" filterable>
                            <el-option v-for="item in tableData2_1" :key="item.value" :label="item.label" :value="item.value">
                                <span style="float: left">{{ item.label.split('-')[0] }}</span>
                                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="有效时间:" label-width="100px">
                        <el-date-picker type="datetime" style="width: 46%" placeholder="请选择" format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm" v-model="dataItem1_referencePath.tempBeginTime"></el-date-picker>
                        ~
                        <el-date-picker type="datetime" style="width: 46%" placeholder="请选择" format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm" v-model="dataItem1_referencePath.tempEndTime"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="描述:" label-width="100px" prop="description">
                        <el-input v-model="dataItem1_rte.description" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form ref="dataItem1_1" :model="dataItem1_referencePath" :rules="rules">
                        <el-form-item label="影响半径:" label-width="100px" prop="pathRadius">
                            <el-input v-model.number="dataItem1_referencePath.pathRadius" autocomplete="off" oninput="this.value=this.value.replace(/[^\d]/g,'');"><template slot="append">分米</template></el-input>
                        </el-form-item>
                    </el-form>

                    <!-- 为什么这个路径不能使用 rules 呢？不懂为啥获取不到 value ，导致调用校验方法报错 -->
                    <el-form label="路径坐标:" label-width="100px">
                        <div v-for="(v, i) in dataItem1_referencePath.activePath" :key="i" class="psr">
                            <el-col :span="9">
                                <el-form-item label="经度" label-width="40px" prop="lon">
                                    <el-input v-model="v.offsetLL.lon" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col class="line" :span="2"></el-col>
                            <el-col :span="11">
                                <el-form-item label="纬度" label-width="40px" prop="lat">
                                    <el-input v-model="v.offsetLL.lat" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col class="line" :span="2">
                                <el-button type="danger" icon="el-icon-delete" circle @click="removePaths(i)"></el-button>
                            </el-col>
                        </div>
                    </el-form>
                    <el-form-item label="" label-width="100px">
                        <el-button @click="addPaths()">添加</el-button>
                    </el-form-item>
                </el-row>
            </el-form>

            <div class="reg-bottom-panel">
                <el-button type="primary" @click="Save_item1_1()">提交</el-button>
                <el-button type="info" plain @click="cancel_item1_1()">取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import dayjs from 'dayjs';
import { formatCoord, isEmptyObject, reFormatCoord, formPekingDate } from '../../plugins/utils';
export default {
    data() {
        // 验证设备经纬度格式
        let lonValid = (rule, value, callback) => {
            if (value === 0) {
                //为 0 的情况不需要考虑小数点
                callback();
            }
            const data = value.toString().split('.');
            if (!data[1] || data[1].length != 7) {
                callback(new Error('请确保经度在 0-180 之间并以 7 位小数结尾'));
                return;
            }
            if (value >= 0 && value <= 180) {
                callback();
            } else {
                callback(new Error('请确保经度在 0-180 之间'));
            }
        };
        let latValid = (rule, value, callback) => {
            if (value === 0) {
                //为 0 的情况不需要考虑小数点
                callback();
            }
            const data = value.toString().split('.');
            if (!data[1] || data[1].length != 7) {
                callback(new Error('请确保经度在 0-90 之间并以 7 位小数结尾'));
                return;
            }
            if (value >= 0 && value <= 90) {
                callback();
            } else {
                callback(new Error('请确保经度在 0-90 之间'));
            }
        };
        return {
            formatCoord,
            dialogInfo1_1: false,
            dialogInfo2_1: false,
            dataItem1_1: {
                rtes: [
                    {
                        rteId: null,
                        referencePaths: [],
                        eventSource: 0,
                        eventPos: {},
                        description: '',
                        eventType: 0
                    }
                ],
                refPos: {}
            },
            judgeDatas: [],
            dataItem1_rte: {
                eventPos: {
                    offsetLL: {}
                }
            },
            dataItem1_eventPosOffset: { lon: 123, lat: 333 },
            dataItem1_referencePath: { activePath: [] },
            tableData1_1: [],
            tableData1_2: [], //设备管理列表
            tableData2_1: window.api.rtes,
            rules: {
                rteId: [{ required: true, message: 'rteId不能为空', trigger: 'blur' }],
                description: [{ required: true, message: '描述不能为空', trigger: 'blur' }],
                eventType: [{ required: true, message: '事件类型不能为空', trigger: 'blur' }],
                pathRadius: [{ required: true, message: '范围不能为空', trigger: 'blur' }],
                eventRadius: [{ required: true, message: '范围不能为空', trigger: 'blur' }],
                // lon: [
                //     {
                //         required: true,
                //         min: 10,
                //         max: 10,
                //         message: '请输入10个字符',
                //         trigger: 'blur'
                //     }
                // ],
                // lat: [
                //     {
                //         required: true,
                //         min: 9,
                //         max: 9,
                //         message: '请输入9个字符',
                //         trigger: 'blur'
                //     }
                // ]
                lon: [{ validator: lonValid, trigger: 'blur' }],
                lat: [{ validator: latValid, trigger: 'blur' }]
            },
            AORules: {
                lon: [{ validator: lonValid, trigger: 'blur', required: true }],
                lat: [{ validator: latValid, trigger: 'blur', required: true }]
            }
        };
    },
    mounted() {
        this.Get_DataList1_1();
    },
    methods: {
        // 路径的经纬度校验
        checkLon(value) {
            if (value === 0) {
                //为 0 的情况不需要考虑小数点
                // callback();
                return true;
            }
            const data = value.toString().split('.');
            if (!data[1] || data[1].length != 7) {
                // return new Error('请确保经度在 0-180 之间并以 7 位小数结尾');
                return false;
            }
            if (value >= 0 && value <= 180) {
                return true;
            } else {
                // return new Error('请确保经度在 0-180 之间');
                return false;
            }
        },
        checkLat(value) {
            if (value === 0) {
                //为 0 的情况不需要考虑小数点
                // callback();
                return true;
            }
            const data = value.toString().split('.');
            if (!data[1] || data[1].length != 7) {
                // callback(new Error('请确保经度在 0-90 之间并以 7 位小数结尾'));
                return false;
            }
            if (value >= 0 && value <= 90) {
                return true;
            } else {
                // callback(new Error('请确保经度在 0-90 之间'));
                return false;
            }
        },
        importJson(strJson) {
            try {
                if (strJson.includes('rtes')) {
                    let _jsonData = {
                        createAt: dayjs(),
                        updateAt: dayjs(),
                        isecId: 6,
                        endAt: 0,
                        tag: '',
                        type: 1,
                        data: JSON.parse(strJson)
                    };
                    this.add_mecEvents(_jsonData);
                } else {
                    this.$admin.tip('json 文件内容错误', 'error');
                }
            } catch (error) {
                this.$admin.tip('json 文件内容错误', 'error');
            }
        },
        open_item2_1() {
            this.dialogInfo2_1 = true;
        },
        open_item1_1(row) {
            this.Get_DataList1_2();
            if (!row) {
                this.dataItem1_referencePath = {
                    tempBeginTime: null,
                    tempEndTime: null,
                    pathRadius: 500,
                    activePath: [
                        {
                            offsetLL: {
                                lon: 113.3746101,
                                lat: 23.0743661
                            }
                        },
                        {
                            offsetLL: {
                                lon: 113.3746102,
                                lat: 23.0743662
                            }
                        }
                    ]
                };
                this.dataItem1_eventPosOffset = {
                    lon: 113.37461,
                    lat: 23.074366
                };
                this.dataItem1_rte = {
                    tempId: null,
                    rteId: '',
                    eventRadius: 500,
                    referencePaths: [this.dataItem1_referencePath],
                    eventSource: 0,
                    eventPos: {
                        offsetLL: this.dataItem1_eventPosOffset
                    },
                    description: 'description',
                    eventType: 707
                };
                this.dataItem1_1 = {
                    rtes: [this.dataItem1_rte],
                    refPos: {
                        elevation: '0',
                        lat: 0,
                        long: 0
                    }
                };
            } else {
                this.dataItem1_1 = row.data;
                this.dataItem1_rte = this.dataItem1_1.rtes[0];
                // console.log('999', this.dataItem1_rte);
                // 经纬度格式化 formatCoord
                this.dataItem1_rte.referencePaths[0].activePath.forEach(item => {
                    item.offsetLL.lat = formatCoord(item.offsetLL.lat);
                    item.offsetLL.lon = formatCoord(item.offsetLL.lon);
                });
                this.dataItem1_rte.eventPos.offsetLL.lat = formatCoord(this.dataItem1_rte.eventPos.offsetLL.lat);
                this.dataItem1_rte.eventPos.offsetLL.lon = formatCoord(this.dataItem1_rte.eventPos.offsetLL.lon);
                this.dataItem1_referencePath = this.dataItem1_rte.referencePaths[0];
                this.dataItem1_eventPosOffset = this.dataItem1_rte.eventPos.offsetLL;
                this.dataItem1_1.id = row.id; //存储新增或者编辑

                // let _timeDetails = this.dataItem1_referencePath.timeDetails
                if (this.dataItem1_rte.timeDetails) {
                    let _timeDetails = this.dataItem1_rte.timeDetails;
                    let _headingYear = dayjs().format('YYYY') + '-01-01';
                    this.$set(this.dataItem1_referencePath, 'tempBeginTime', formPekingDate(dayjs(_headingYear).add(_timeDetails.startTime, 'minutes')));
                    this.$set(this.dataItem1_referencePath, 'tempEndTime', formPekingDate(dayjs(_headingYear).add(_timeDetails.endTime, 'minutes')));
                }
            }
            this.dialogInfo1_1 = true;
        },
        msgHtmlPath(referencePath) {
            let _activePath = referencePath.activePath;
            let _offsetLLs = [];
            for (let i in _activePath) {
                _offsetLLs.push([_activePath[i].offsetLL.lon / 1e7, _activePath[i].offsetLL.lat / 1e7]);
            }
            return '半径:' + referencePath.pathRadius / 10 + '米; 路径:' + _offsetLLs.join('->');
        },
        add_mecEvents(data) {
            console.log('data: ', data);
            this.$api.addMecEvents(data).then(ret => {
                if (ret) {
                    this.$admin.tip('操作成功', 'success');
                    this.Get_DataList1_1();
                    this.cancel_item1_1();
                } else {
                    this.$admin.tip('操作失败,请联系接口管理员', 'error');
                }
            });
        },
        async Save_item1_1() {
            this.$refs['dataItem1_1'].validate(async valid => {
                if (valid) {
                    if (this.dataItem1_1.rtes[0].referencePaths[0].activePath.length >= 2) {
                        let _endAt = 0;
                        if (!this.dataItem1_1.rtes[0].rteId) {
                            this.$message({ message: '请输入rteId值', type: 'error' });
                            return false;
                        }
                        if (!this.dataItem1_1.rtes[0].eventRadius) {
                            this.$message({ message: '请输入事件半径', type: 'error' });
                            return false;
                        }
                        if (this.dataItem1_1.rtes[0].rteId > 255) {
                            this.$message({
                                message: '输入rteId格式有误,范围小于255',
                                type: 'error'
                            });
                            return false;
                        }
                        // 事件经纬度格式校验
                        await this.$refs['dataItem1_eventPosOffset'].validate();

                        let _headingYear = dayjs().format('YYYY') + '-01-01 00:00';
                        let _detailsStartTime = this.dataItem1_referencePath.tempBeginTime ? dayjs(this.dataItem1_referencePath.tempBeginTime).diff(dayjs(_headingYear), 'minutes') : 0;
                        let _detailstempEndTime = this.dataItem1_referencePath.tempEndTime ? dayjs(this.dataItem1_referencePath.tempEndTime).diff(dayjs(_headingYear), 'minutes') : 0;
                        let _detailsStartYear = this.dataItem1_referencePath.tempBeginTime ? dayjs(this.dataItem1_referencePath.tempBeginTime).format('YYYY') : 0;
                        let _detailsEndYear = this.dataItem1_referencePath.tempEndTime ? dayjs(this.dataItem1_referencePath.tempEndTime).format('YYYY') : 0;
                        if ((_detailsStartTime == 0 && _detailstempEndTime != 0) || (_detailsStartTime != 0 && _detailstempEndTime == 0)) {
                            alert('请输入开始和结束时间,或者两者都不填');
                            return false;
                        }
                        if (_detailsStartTime != 0 && _detailstempEndTime != 0) {
                            this.dataItem1_1.rtes[0].timeDetails = {
                                startTime: _detailsStartTime,
                                startTimeYear: parseInt(_detailsStartYear), //2023
                                endTime: _detailstempEndTime,
                                endTimeYear: parseInt(_detailsEndYear) //2023
                            };
                            _endAt = dayjs(this.dataItem1_referencePath.tempEndTime).unix();
                        }
                        // 路径经纬度格式校验 lonValid latValid
                        let _flag = true;
                        this.dataItem1_1.rtes[0].referencePaths[0].activePath.map(obj => {
                            // 如果任何一个值为 false ，让 flag 取反
                            if (!(this.checkLon(obj.offsetLL.lon) && this.checkLat(obj.offsetLL.lat))) {
                                _flag = false;
                            }
                        });
                        if (!_flag) {
                            this.$message({
                                message: '格式有误, 请输入正确设置经纬度坐标.',
                                type: 'error'
                            });
                            return false;
                        }

                        // 格式化经纬度 reFormatCoord  成功了！！！
                        // 事件经纬度
                        this.dataItem1_eventPosOffset.lon = reFormatCoord(this.dataItem1_eventPosOffset.lon);
                        this.dataItem1_eventPosOffset.lat = reFormatCoord(this.dataItem1_eventPosOffset.lat);
                        // 路径经纬度
                        this.dataItem1_1.rtes[0].referencePaths[0].activePath.map(obj => {
                            obj.offsetLL.lon = reFormatCoord(obj.offsetLL.lon);
                            obj.offsetLL.lat = reFormatCoord(obj.offsetLL.lat);
                        });

                        let _data = {
                            data: this.dataItem1_1,
                            createAt: dayjs(),
                            updateAt: dayjs(),
                            isecId: 6,
                            // "endAt":dayjs(this.dataItem1_referencePath.tempEndTime).unix(),
                            endAt: _endAt,
                            tag: '',
                            type: 1 //1 交通事件  2交通标牌
                        };

                        delete this.dataItem1_referencePath.tempBeginTime;
                        delete this.dataItem1_referencePath.tempEndTime;
                        delete this.dataItem1_rte.tempId;
                        if (!this.dataItem1_1.id) {
                            this.add_mecEvents(_data);
                        } else {
                            _data.id = this.dataItem1_1.id;
                            this.$api.updateMecEvents(_data).then(ret => {
                                if (ret) {
                                    this.$admin.tip('操作成功', 'success');
                                    this.Get_DataList1_1();
                                    this.cancel_item1_1();
                                } else {
                                    this.$admin.tip('操作失败,请联系接口管理员', 'error');
                                }
                            });
                        }
                    } else {
                        this.$message({
                            message: '添加的路径坐标不能少于2个',
                            type: 'warning'
                        });
                    }
                }
            });
        },
        Get_DataList1_2() {
            this.$api.getMecDevs().then(
                ret => {
                    this.tableData1_2 = [];
                    for (let i in ret) {
                        if (ret[i].V2XOBJ_TYPE == 'V2XOBJ_RSU') {
                            ret[i].keyValue = i;
                            this.tableData1_2.push({
                                value: ret[i].V2XOBJ_INTERSECTIONID,
                                name: ret[i].V2XOBJ_NAME,
                                key: ret[i].keyValue
                            });
                        }
                    }
                    if (this.tableData1_2.length > 0) {
                        this.dataItem1_rte.tempId = this.tableData1_2[0].value;
                    }
                },
                err => {
                    this.$admin.tip('接口异常,请联系管理员', 'error');
                }
            );
        },
        Get_DataList1_1() {
            this.$api.getMecEvents().then(
                ret => {
                    this.tableData1_1 = [];
                    for (let i in ret) {
                        ret[i].keyValue = i;
                        this.tableData1_1.push(ret[i]);
                    }
                },
                err => {
                    this.$admin.tip('接口异常,请联系管理员', 'error');
                }
            );
        },
        cancel_item1_1() {
            this.Get_DataList1_1();
            this.dialogInfo1_1 = false;
        },
        delete_item1_1(row) {
            console.log('row: ', row);
            this.$confirm(`是否删除该数据?`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$api.removeMecEvents(row.id).then(ret => {
                        if (ret) {
                            this.$admin.tip('操作成功', 'success');
                            this.Get_DataList1_1();
                        } else {
                            this.$admin.tip('操作失败,请联系接口管理员', 'error');
                        }
                    });
                })
                .catch(_ => {});
        },
        removePaths(index) {
            let _path = this.dataItem1_1.rtes[0].referencePaths[0].activePath;
            _path.splice(index, 1);
            this.$set(this.dataItem1_1.rtes[0].referencePaths[0], 'activePath', _path);
        },
        addPaths() {
            let _path = this.dataItem1_1.rtes[0].referencePaths[0].activePath;
            _path.push({ offsetLL: { lon: 1133746101, lat: 230743661 } });
            this.$set(this.dataItem1_1.rtes[0].referencePaths[0], 'activePath', _path);
        }
    }
};
</script>

<style>
.line {
    text-align: center;
    margin-left: 10px;
}
.psr {
    margin-bottom: 10px;
    height: 40px;
}
.el-icon-close {
    cursor: pointer;
}
</style>
