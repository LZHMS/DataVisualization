import * as echarts from 'echarts' 
import {useEffect} from 'react'
import 'echarts-gl';
import ChinaMap from "./china.json";

export default function FlowMap() {
  useEffect(() => {
    var FlowMap;
    
    if (FlowMap !== null && FlowMap !== undefined && FlowMap !== ''){
      FlowMap.dispose();
    }

    echarts.registerMap('China', {geoJSON: ChinaMap});

    var dom = document.getElementById('FlowMap');
    FlowMap = echarts.init(dom);

    var option = null;
    option = {
        baseOption: {
            backgroundColor: '#358791',
            timeline: {
                axisType: 'category',
                autoPlay: true,
                show: true,
                playInterval: 500,
                data: [
                    '2020-01-24','2020-01-25','2020-01-26','2020-01-27','2020-01-28','2020-01-29','2020-01-30','2020-01-31','2020-02-01','2020-02-02','2020-02-03','2020-02-04','2020-02-05','2020-02-06','2020-02-07','2020-02-08','2020-02-09','2020-02-10','2020-02-11','2020-02-12',
                    '2020-02-13','2020-02-14','2020-02-15','2020-02-16','2020-02-17','2020-02-18','2020-02-19','2020-02-20','2020-02-21','2020-02-22','2020-02-23','2020-02-24','2020-02-25','2020-02-26','2020-02-27','2020-02-28','2020-02-29','2020-03-01','2020-03-02','2020-03-03',
                    '2020-03-04','2020-03-05','2020-03-06','2020-03-07','2020-03-08','2020-03-09','2020-03-10','2020-03-11','2020-03-12','2020-03-13','2020-03-14','2020-03-15','2020-03-16','2020-03-17','2020-03-18','2020-03-19','2020-03-20','2020-03-21','2020-03-22','2020-03-23',
                    '2020-03-24','2020-03-25','2020-03-26','2020-03-27','2020-03-28','2020-03-29','2020-03-30','2020-03-31','2020-04-01','2020-04-02','2020-04-03','2020-04-04','2020-04-05','2020-04-06','2020-04-07','2020-04-08','2020-04-09','2020-04-10','2020-04-11','2020-04-12',
                    '2020-04-13','2020-04-14','2020-04-15','2020-04-16','2020-04-17','2020-04-18',
                ],
                realtime: true,
                loop: true,
                lineStyle: {
                    color: '#466872',
                    width: 2,
                },
                label: {
                    color: '#5cc5da',
                    fontSize: 14,
                },
            },
            title: {
                text: "2022年中国新冠疫情实时数据地图",
                left: 'center',
                textStyle: {
                    color: '#96169f'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            roamController: {
                show: true,
                left: 'right',
                mapTypeControl: {
                  'China': true
                }
            },
            visualMap: {
                type: 'piecewise',
                pieces: [
                    { min: 10000, label: '>10000', color: '#D94E5D' },
                    { min: 1000, max: 10000, label: '1000-10000', color: '#DF765F' },
                    { min: 500, max: 1000, label: '500-1000', color: '#E49F61' },
                    { min: 100, max: 500, label: '100-500', color: '#EAC763' },
                    { min: 50, max: 100, label: '50-100', color: '#B7BB80' },
                    { min: 10, max: 50, label: '10-50', color: '#83AF9D' },
                    { min: 0, max: 10, label: '0-10', color: '#50A3BA' },
                ],
                color: ['#E0022B', '#E09107', '#A3E00B']
            },
            series: [{
                name: '确诊数',
                map: "China",
                type: 'map',
                roam: true,
                label: {
                  show: true,
                  color: 'rgb(249, 249, 249)'
                },
            }]
        },
        options: [
            {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-01-24疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 4},
                        {'name': '辽宁省', 'value': 3},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 0},
                        {'name': '湖北省', 'value': 549},
                        {'name': '北京市', 'value': 51},
                        {'name': '浙江省', 'value': 43},
                        {'name': '内蒙古自治区', 'value': 1},
                        {'name': '河北省', 'value': 2},
                        {'name': '江苏省', 'value': 9},
                        {'name': '陕西省', 'value': 5},
                        {'name': '福建省', 'value': 10},
                        {'name': '广东省', 'value': 54},
                        {'name': '山东省', 'value': 15},
                        {'name': '吉林省', 'value': 3},
                        {'name': '山西省', 'value': 1},
                        {'name': '云南省', 'value': 5},
                        {'name': '甘肃省', 'value': 2},
                        {'name': '四川省', 'value': 15},
                        {'name': '河南省', 'value': 9},
                        {'name': '江西省', 'value': 7},
                        {'name': '安徽省', 'value': 15},
                        {'name': '湖南省', 'value': 24},
                        {'name': '广西壮族自治区', 'value': 13},
                        {'name': '重庆市', 'value': 27},
                        {'name': '海南省', 'value': 8},
                        {'name': '贵州省', 'value': 3},
                        {'name': '宁夏回族自治区', 'value': 2},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-01-25疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 9},
                        {'name': '辽宁省', 'value': 14},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 0},
                        {'name': '湖北省', 'value': 761},
                        {'name': '北京市', 'value': 41},
                        {'name': '浙江省', 'value': 62},
                        {'name': '内蒙古自治区', 'value': 7},
                        {'name': '河北省', 'value': 8},
                        {'name': '江苏省', 'value': 18},
                        {'name': '陕西省', 'value': 15},
                        {'name': '福建省', 'value': 18},
                        {'name': '广东省', 'value': 78},
                        {'name': '山东省', 'value': 27},
                        {'name': '吉林省', 'value': 4},
                        {'name': '山西省', 'value': 6},
                        {'name': '云南省', 'value': 11},
                        {'name': '甘肃省', 'value': 5},
                        {'name': '四川省', 'value': 28},
                        {'name': '河南省', 'value': 32},
                        {'name': '江西省', 'value': 18},
                        {'name': '安徽省', 'value': 39},
                        {'name': '湖南省', 'value': 43},
                        {'name': '广西壮族自治区', 'value': 23},
                        {'name': '重庆市', 'value': 57},
                        {'name': '海南省', 'value': 19},
                        {'name': '贵州省', 'value': 4},
                        {'name': '宁夏回族自治区', 'value': 3},
                        {'name': '新疆维吾尔自治区', 'value': 3},
                        {'name': '青海省', 'value': 1},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-01-26疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 15},
                        {'name': '辽宁省', 'value': 19},
                        {'name': '天津市', 'value': 12},
                        {'name': '上海市', 'value': 0},
                        {'name': '湖北省', 'value': 1058},
                        {'name': '北京市', 'value': 68},
                        {'name': '浙江省', 'value': 104},
                        {'name': '内蒙古自治区', 'value': 7},
                        {'name': '河北省', 'value': 13},
                        {'name': '江苏省', 'value': 33},
                        {'name': '陕西省', 'value': 22},
                        {'name': '福建省', 'value': 35},
                        {'name': '广东省', 'value': 111},
                        {'name': '山东省', 'value': 46},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 9},
                        {'name': '云南省', 'value': 16},
                        {'name': '甘肃省', 'value': 7},
                        {'name': '四川省', 'value': 44},
                        {'name': '河南省', 'value': 86},
                        {'name': '江西省', 'value': 36},
                        {'name': '安徽省', 'value': 60},
                        {'name': '湖南省', 'value': 69},
                        {'name': '广西壮族自治区', 'value': 36},
                        {'name': '重庆市', 'value': 75},
                        {'name': '海南省', 'value': 22},
                        {'name': '贵州省', 'value': 5},
                        {'name': '宁夏回族自治区', 'value': 4},
                        {'name': '新疆维吾尔自治区', 'value': 4},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-01-27疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 21},
                        {'name': '辽宁省', 'value': 25},
                        {'name': '天津市', 'value': 20},
                        {'name': '上海市', 'value': 53},
                        {'name': '湖北省', 'value': 1423},
                        {'name': '北京市', 'value': 80},
                        {'name': '浙江省', 'value': 128},
                        {'name': '内蒙古自治区', 'value': 22},
                        {'name': '河北省', 'value': 18},
                        {'name': '江苏省', 'value': 47},
                        {'name': '陕西省', 'value': 35},
                        {'name': '福建省', 'value': 59},
                        {'name': '广东省', 'value': 151},
                        {'name': '山东省', 'value': 75},
                        {'name': '吉林省', 'value': 6},
                        {'name': '山西省', 'value': 13},
                        {'name': '云南省', 'value': 26},
                        {'name': '甘肃省', 'value': 14},
                        {'name': '四川省', 'value': 69},
                        {'name': '河南省', 'value': 133},
                        {'name': '江西省', 'value': 48},
                        {'name': '安徽省', 'value': 70},
                        {'name': '湖南省', 'value': 100},
                        {'name': '广西壮族自治区', 'value': 46},
                        {'name': '重庆市', 'value': 110},
                        {'name': '海南省', 'value': 33},
                        {'name': '贵州省', 'value': 7},
                        {'name': '宁夏回族自治区', 'value': 7},
                        {'name': '新疆维吾尔自治区', 'value': 5},
                        {'name': '青海省', 'value': 6},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-01-28疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 30},
                        {'name': '辽宁省', 'value': 32},
                        {'name': '天津市', 'value': 22},
                        {'name': '上海市', 'value': 66},
                        {'name': '湖北省', 'value': 2714},
                        {'name': '北京市', 'value': 91},
                        {'name': '浙江省', 'value': 173},
                        {'name': '内蒙古自治区', 'value': 30},
                        {'name': '河北省', 'value': 33},
                        {'name': '江苏省', 'value': 70},
                        {'name': '陕西省', 'value': 46},
                        {'name': '福建省', 'value': 80},
                        {'name': '广东省', 'value': 208},
                        {'name': '山东省', 'value': 95},
                        {'name': '吉林省', 'value': 8},
                        {'name': '山西省', 'value': 20},
                        {'name': '云南省', 'value': 44},
                        {'name': '甘肃省', 'value': 22},
                        {'name': '四川省', 'value': 90},
                        {'name': '河南省', 'value': 188},
                        {'name': '江西省', 'value': 72},
                        {'name': '安徽省', 'value': 106},
                        {'name': '湖南省', 'value': 143},
                        {'name': '广西壮族自治区', 'value': 51},
                        {'name': '重庆市', 'value': 132},
                        {'name': '海南省', 'value': 40},
                        {'name': '贵州省', 'value': 9},
                        {'name': '宁夏回族自治区', 'value': 11},
                        {'name': '新疆维吾尔自治区', 'value': 10},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-01-29疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 38},
                        {'name': '辽宁省', 'value': 35},
                        {'name': '天津市', 'value': 27},
                        {'name': '上海市', 'value': 96},
                        {'name': '湖北省', 'value': 3554},
                        {'name': '北京市', 'value': 111},
                        {'name': '浙江省', 'value': 296},
                        {'name': '内蒙古自治区', 'value': 16},
                        {'name': '河北省', 'value': 48},
                        {'name': '江苏省', 'value': 99},
                        {'name': '陕西省', 'value': 56},
                        {'name': '福建省', 'value': 82},
                        {'name': '广东省', 'value': 282},
                        {'name': '山东省', 'value': 130},
                        {'name': '吉林省', 'value': 9},
                        {'name': '山西省', 'value': 30},
                        {'name': '云南省', 'value': 55},
                        {'name': '甘肃省', 'value': 24},
                        {'name': '四川省', 'value': 108},
                        {'name': '河南省', 'value': 206},
                        {'name': '江西省', 'value': 109},
                        {'name': '安徽省', 'value': 155},
                        {'name': '湖南省', 'value': 221},
                        {'name': '广西壮族自治区', 'value': 58},
                        {'name': '重庆市', 'value': 147},
                        {'name': '海南省', 'value': 43},
                        {'name': '贵州省', 'value': 9},
                        {'name': '宁夏回族自治区', 'value': 12},
                        {'name': '新疆维吾尔自治区', 'value': 15},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-01-30疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 44},
                        {'name': '辽宁省', 'value': 41},
                        {'name': '天津市', 'value': 32},
                        {'name': '上海市', 'value': 112},
                        {'name': '湖北省', 'value': 4586},
                        {'name': '北京市', 'value': 90},
                        {'name': '浙江省', 'value': 428},
                        {'name': '内蒙古自治区', 'value': 18},
                        {'name': '河北省', 'value': 65},
                        {'name': '江苏省', 'value': 129},
                        {'name': '陕西省', 'value': 63},
                        {'name': '福建省', 'value': 101},
                        {'name': '广东省', 'value': 354},
                        {'name': '山东省', 'value': 158},
                        {'name': '吉林省', 'value': 14},
                        {'name': '山西省', 'value': 35},
                        {'name': '云南省', 'value': 70},
                        {'name': '甘肃省', 'value': 26},
                        {'name': '四川省', 'value': 142},
                        {'name': '河南省', 'value': 278},
                        {'name': '江西省', 'value': 162},
                        {'name': '安徽省', 'value': 200},
                        {'name': '湖南省', 'value': 277},
                        {'name': '广西壮族自治区', 'value': 78},
                        {'name': '重庆市', 'value': 182},
                        {'name': '海南省', 'value': 46},
                        {'name': '贵州省', 'value': 12},
                        {'name': '宁夏回族自治区', 'value': 18},
                        {'name': '新疆维吾尔自治区', 'value': 14},
                        {'name': '青海省', 'value': 6},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-01-31疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 59},
                        {'name': '辽宁省', 'value': 43},
                        {'name': '天津市', 'value': 32},
                        {'name': '上海市', 'value': 165},
                        {'name': '湖北省', 'value': 5806},
                        {'name': '北京市', 'value': 260},
                        {'name': '浙江省', 'value': 537},
                        {'name': '内蒙古自治区', 'value': 19},
                        {'name': '河北省', 'value': 82},
                        {'name': '江苏省', 'value': 168},
                        {'name': '陕西省', 'value': 87},
                        {'name': '福建省', 'value': 120},
                        {'name': '广东省', 'value': 436},
                        {'name': '山东省', 'value': 184},
                        {'name': '吉林省', 'value': 14},
                        {'name': '山西省', 'value': 39},
                        {'name': '云南省', 'value': 83},
                        {'name': '甘肃省', 'value': 34},
                        {'name': '四川省', 'value': 177},
                        {'name': '河南省', 'value': 354},
                        {'name': '江西省', 'value': 240},
                        {'name': '安徽省', 'value': 237},
                        {'name': '湖南省', 'value': 332},
                        {'name': '广西壮族自治区', 'value': 87},
                        {'name': '重庆市', 'value': 266},
                        {'name': '海南省', 'value': 64},
                        {'name': '贵州省', 'value': 29},
                        {'name': '宁夏回族自治区', 'value': 21},
                        {'name': '新疆维吾尔自治区', 'value': 19},
                        {'name': '青海省', 'value': 8},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-01疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 80},
                        {'name': '辽宁省', 'value': 64},
                        {'name': '天津市', 'value': 41},
                        {'name': '上海市', 'value': 169},
                        {'name': '湖北省', 'value': 7153},
                        {'name': '北京市', 'value': 168},
                        {'name': '浙江省', 'value': 599},
                        {'name': '内蒙古自治区', 'value': 23},
                        {'name': '河北省', 'value': 96},
                        {'name': '江苏省', 'value': 202},
                        {'name': '陕西省', 'value': 101},
                        {'name': '福建省', 'value': 144},
                        {'name': '广东省', 'value': 535},
                        {'name': '山东省', 'value': 206},
                        {'name': '吉林省', 'value': 18},
                        {'name': '山西省', 'value': 47},
                        {'name': '云南省', 'value': 93},
                        {'name': '甘肃省', 'value': 46},
                        {'name': '四川省', 'value': 207},
                        {'name': '河南省', 'value': 462},
                        {'name': '江西省', 'value': 286},
                        {'name': '安徽省', 'value': 297},
                        {'name': '湖南省', 'value': 389},
                        {'name': '广西壮族自治区', 'value': 100},
                        {'name': '重庆市', 'value': 247},
                        {'name': '海南省', 'value': 77},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 26},
                        {'name': '新疆维吾尔自治区', 'value': 18},
                        {'name': '青海省', 'value': 18},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-02疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 95},
                        {'name': '辽宁省', 'value': 71},
                        {'name': '天津市', 'value': 48},
                        {'name': '上海市', 'value': 182},
                        {'name': '湖北省', 'value': 9074},
                        {'name': '北京市', 'value': 191},
                        {'name': '浙江省', 'value': 661},
                        {'name': '内蒙古自治区', 'value': 27},
                        {'name': '河北省', 'value': 104},
                        {'name': '江苏省', 'value': 236},
                        {'name': '陕西省', 'value': 116},
                        {'name': '福建省', 'value': 159},
                        {'name': '广东省', 'value': 632},
                        {'name': '山东省', 'value': 230},
                        {'name': '吉林省', 'value': 23},
                        {'name': '山西省', 'value': 56},
                        {'name': '云南省', 'value': 105},
                        {'name': '甘肃省', 'value': 40},
                        {'name': '四川省', 'value': 231},
                        {'name': '河南省', 'value': 493},
                        {'name': '江西省', 'value': 333},
                        {'name': '安徽省', 'value': 340},
                        {'name': '湖南省', 'value': 463},
                        {'name': '广西壮族自治区', 'value': 111},
                        {'name': '重庆市', 'value': 275},
                        {'name': '海南省', 'value': 64},
                        {'name': '贵州省', 'value': 38},
                        {'name': '宁夏回族自治区', 'value': 28},
                        {'name': '新疆维吾尔自治区', 'value': 21},
                        {'name': '青海省', 'value': 9},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-03疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 121},
                        {'name': '辽宁省', 'value': 74},
                        {'name': '天津市', 'value': 60},
                        {'name': '上海市', 'value': 203},
                        {'name': '湖北省', 'value': 11177},
                        {'name': '北京市', 'value': 212},
                        {'name': '浙江省', 'value': 724},
                        {'name': '内蒙古自治区', 'value': 34},
                        {'name': '河北省', 'value': 113},
                        {'name': '江苏省', 'value': 271},
                        {'name': '陕西省', 'value': 128},
                        {'name': '福建省', 'value': 179},
                        {'name': '广东省', 'value': 725},
                        {'name': '山东省', 'value': 259},
                        {'name': '吉林省', 'value': 31},
                        {'name': '山西省', 'value': 66},
                        {'name': '云南省', 'value': 109},
                        {'name': '甘肃省', 'value': 51},
                        {'name': '四川省', 'value': 254},
                        {'name': '河南省', 'value': 781},
                        {'name': '江西省', 'value': 391},
                        {'name': '安徽省', 'value': 408},
                        {'name': '湖南省', 'value': 521},
                        {'name': '广西壮族自治区', 'value': 127},
                        {'name': '重庆市', 'value': 312},
                        {'name': '海南省', 'value': 72},
                        {'name': '贵州省', 'value': 46},
                        {'name': '宁夏回族自治区', 'value': 31},
                        {'name': '新疆维吾尔自治区', 'value': 24},
                        {'name': '青海省', 'value': 14},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-04疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 155},
                        {'name': '辽宁省', 'value': 81},
                        {'name': '天津市', 'value': 67},
                        {'name': '上海市', 'value': 219},
                        {'name': '湖北省', 'value': 13522},
                        {'name': '北京市', 'value': 228},
                        {'name': '浙江省', 'value': 829},
                        {'name': '内蒙古自治区', 'value': 35},
                        {'name': '河北省', 'value': 126},
                        {'name': '江苏省', 'value': 308},
                        {'name': '陕西省', 'value': 142},
                        {'name': '福建省', 'value': 194},
                        {'name': '广东省', 'value': 813},
                        {'name': '山东省', 'value': 275},
                        {'name': '吉林省', 'value': 47},
                        {'name': '山西省', 'value': 74},
                        {'name': '云南省', 'value': 119},
                        {'name': '甘肃省', 'value': 57},
                        {'name': '四川省', 'value': 282},
                        {'name': '河南省', 'value': 675},
                        {'name': '江西省', 'value': 476},
                        {'name': '安徽省', 'value': 480},
                        {'name': '湖南省', 'value': 593},
                        {'name': '广西壮族自治区', 'value': 139},
                        {'name': '重庆市', 'value': 344},
                        {'name': '海南省', 'value': 80},
                        {'name': '贵州省', 'value': 58},
                        {'name': '宁夏回族自治区', 'value': 34},
                        {'name': '新疆维吾尔自治区', 'value': 29},
                        {'name': '青海省', 'value': 15},
                        {'name': '西藏自治区', 'value': 1},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-05疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 190},
                        {'name': '辽宁省', 'value': 89},
                        {'name': '天津市', 'value': 69},
                        {'name': '上海市', 'value': 243},
                        {'name': '湖北省', 'value': 16678},
                        {'name': '北京市', 'value': 253},
                        {'name': '浙江省', 'value': 895},
                        {'name': '内蒙古自治区', 'value': 42},
                        {'name': '河北省', 'value': 135},
                        {'name': '江苏省', 'value': 341},
                        {'name': '陕西省', 'value': 165},
                        {'name': '福建省', 'value': 205},
                        {'name': '广东省', 'value': 895},
                        {'name': '山东省', 'value': 307},
                        {'name': '吉林省', 'value': 54},
                        {'name': '山西省', 'value': 81},
                        {'name': '云南省', 'value': 124},
                        {'name': '甘肃省', 'value': 57},
                        {'name': '四川省', 'value': 301},
                        {'name': '河南省', 'value': 764},
                        {'name': '江西省', 'value': 548},
                        {'name': '安徽省', 'value': 530},
                        {'name': '湖南省', 'value': 661},
                        {'name': '广西壮族自治区', 'value': 150},
                        {'name': '重庆市', 'value': 376},
                        {'name': '海南省', 'value': 91},
                        {'name': '贵州省', 'value': 64},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 32},
                        {'name': '青海省', 'value': 17},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-06疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 227},
                        {'name': '辽宁省', 'value': 94},
                        {'name': '天津市', 'value': 78},
                        {'name': '上海市', 'value': 257},
                        {'name': '湖北省', 'value': 19665},
                        {'name': '北京市', 'value': 274},
                        {'name': '浙江省', 'value': 954},
                        {'name': '内蒙古自治区', 'value': 46},
                        {'name': '河北省', 'value': 157},
                        {'name': '江苏省', 'value': 373},
                        {'name': '陕西省', 'value': 173},
                        {'name': '福建省', 'value': 215},
                        {'name': '广东省', 'value': 970},
                        {'name': '山东省', 'value': 347},
                        {'name': '吉林省', 'value': 59},
                        {'name': '山西省', 'value': 90},
                        {'name': '云南省', 'value': 133},
                        {'name': '甘肃省', 'value': 62},
                        {'name': '四川省', 'value': 321},
                        {'name': '河南省', 'value': 851},
                        {'name': '江西省', 'value': 600},
                        {'name': '安徽省', 'value': 591},
                        {'name': '湖南省', 'value': 711},
                        {'name': '广西壮族自治区', 'value': 168},
                        {'name': '重庆市', 'value': 400},
                        {'name': '海南省', 'value': 106},
                        {'name': '贵州省', 'value': 71},
                        {'name': '宁夏回族自治区', 'value': 40},
                        {'name': '新疆维吾尔自治区', 'value': 43},
                        {'name': '青海省', 'value': 18},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-07疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 277},
                        {'name': '辽宁省', 'value': 99},
                        {'name': '天津市', 'value': 81},
                        {'name': '上海市', 'value': 277},
                        {'name': '湖北省', 'value': 22112},
                        {'name': '北京市', 'value': 297},
                        {'name': '浙江省', 'value': 1006},
                        {'name': '内蒙古自治区', 'value': 50},
                        {'name': '河北省', 'value': 172},
                        {'name': '江苏省', 'value': 408},
                        {'name': '陕西省', 'value': 184},
                        {'name': '福建省', 'value': 224},
                        {'name': '广东省', 'value': 1034},
                        {'name': '山东省', 'value': 386},
                        {'name': '吉林省', 'value': 65},
                        {'name': '山西省', 'value': 96},
                        {'name': '云南省', 'value': 136},
                        {'name': '甘肃省', 'value': 67},
                        {'name': '四川省', 'value': 344},
                        {'name': '河南省', 'value': 914},
                        {'name': '江西省', 'value': 661},
                        {'name': '安徽省', 'value': 665},
                        {'name': '湖南省', 'value': 772},
                        {'name': '广西壮族自治区', 'value': 171},
                        {'name': '重庆市', 'value': 415},
                        {'name': '海南省', 'value': 117},
                        {'name': '贵州省', 'value': 81},
                        {'name': '宁夏回族自治区', 'value': 43},
                        {'name': '新疆维吾尔自治区', 'value': 47},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-08疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 295},
                        {'name': '辽宁省', 'value': 105},
                        {'name': '天津市', 'value': 88},
                        {'name': '上海市', 'value': 286},
                        {'name': '湖北省', 'value': 24953},
                        {'name': '北京市', 'value': 315},
                        {'name': '浙江省', 'value': 1048},
                        {'name': '内蒙古自治区', 'value': 52},
                        {'name': '河北省', 'value': 195},
                        {'name': '江苏省', 'value': 439},
                        {'name': '陕西省', 'value': 195},
                        {'name': '福建省', 'value': 239},
                        {'name': '广东省', 'value': 1095},
                        {'name': '山东省', 'value': 416},
                        {'name': '吉林省', 'value': 69},
                        {'name': '山西省', 'value': 104},
                        {'name': '云南省', 'value': 138},
                        {'name': '甘肃省', 'value': 79},
                        {'name': '四川省', 'value': 364},
                        {'name': '河南省', 'value': 981},
                        {'name': '江西省', 'value': 698},
                        {'name': '安徽省', 'value': 733},
                        {'name': '湖南省', 'value': 803},
                        {'name': '广西壮族自治区', 'value': 183},
                        {'name': '重庆市', 'value': 428},
                        {'name': '海南省', 'value': 123},
                        {'name': '贵州省', 'value': 89},
                        {'name': '宁夏回族自治区', 'value': 45},
                        {'name': '新疆维吾尔自治区', 'value': 42},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-09疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 307},
                        {'name': '辽宁省', 'value': 107},
                        {'name': '天津市', 'value': 90},
                        {'name': '上海市', 'value': 293},
                        {'name': '湖北省', 'value': 27100},
                        {'name': '北京市', 'value': 326},
                        {'name': '浙江省', 'value': 1075},
                        {'name': '内蒙古自治区', 'value': 54},
                        {'name': '河北省', 'value': 206},
                        {'name': '江苏省', 'value': 468},
                        {'name': '陕西省', 'value': 208},
                        {'name': '福建省', 'value': 250},
                        {'name': '广东省', 'value': 1131},
                        {'name': '山东省', 'value': 444},
                        {'name': '吉林省', 'value': 78},
                        {'name': '山西省', 'value': 115},
                        {'name': '云南省', 'value': 141},
                        {'name': '甘肃省', 'value': 79},
                        {'name': '四川省', 'value': 386},
                        {'name': '河南省', 'value': 1033},
                        {'name': '江西省', 'value': 740},
                        {'name': '安徽省', 'value': 779},
                        {'name': '湖南省', 'value': 838},
                        {'name': '广西壮族自治区', 'value': 195},
                        {'name': '重庆市', 'value': 450},
                        {'name': '海南省', 'value': 129},
                        {'name': '贵州省', 'value': 99},
                        {'name': '宁夏回族自治区', 'value': 45},
                        {'name': '新疆维吾尔自治区', 'value': 45},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-10疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 331},
                        {'name': '辽宁省', 'value': 108},
                        {'name': '天津市', 'value': 95},
                        {'name': '上海市', 'value': 299},
                        {'name': '湖北省', 'value': 29631},
                        {'name': '北京市', 'value': 337},
                        {'name': '浙江省', 'value': 1092},
                        {'name': '内蒙古自治区', 'value': 58},
                        {'name': '河北省', 'value': 218},
                        {'name': '江苏省', 'value': 492},
                        {'name': '陕西省', 'value': 213},
                        {'name': '福建省', 'value': 261},
                        {'name': '广东省', 'value': 1159},
                        {'name': '山东省', 'value': 466},
                        {'name': '吉林省', 'value': 80},
                        {'name': '山西省', 'value': 119},
                        {'name': '云南省', 'value': 149},
                        {'name': '甘肃省', 'value': 83},
                        {'name': '四川省', 'value': 405},
                        {'name': '河南省', 'value': 1073},
                        {'name': '江西省', 'value': 771},
                        {'name': '安徽省', 'value': 830},
                        {'name': '湖南省', 'value': 879},
                        {'name': '广西壮族自治区', 'value': 210},
                        {'name': '重庆市', 'value': 473},
                        {'name': '海南省', 'value': 138},
                        {'name': '贵州省', 'value': 109},
                        {'name': '宁夏回族自治区', 'value': 49},
                        {'name': '新疆维吾尔自治区', 'value': 49},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-11疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 360},
                        {'name': '辽宁省', 'value': 111},
                        {'name': '天津市', 'value': 105},
                        {'name': '上海市', 'value': 303},
                        {'name': '湖北省', 'value': 31728},
                        {'name': '北京市', 'value': 342},
                        {'name': '浙江省', 'value': 1117},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 239},
                        {'name': '江苏省', 'value': 515},
                        {'name': '陕西省', 'value': 219},
                        {'name': '福建省', 'value': 267},
                        {'name': '广东省', 'value': 1177},
                        {'name': '山东省', 'value': 487},
                        {'name': '吉林省', 'value': 81},
                        {'name': '山西省', 'value': 122},
                        {'name': '云南省', 'value': 153},
                        {'name': '甘肃省', 'value': 86},
                        {'name': '四川省', 'value': 417},
                        {'name': '河南省', 'value': 1105},
                        {'name': '江西省', 'value': 804},
                        {'name': '安徽省', 'value': 860},
                        {'name': '湖南省', 'value': 912},
                        {'name': '广西壮族自治区', 'value': 215},
                        {'name': '重庆市', 'value': 489},
                        {'name': '海南省', 'value': 144},
                        {'name': '贵州省', 'value': 127},
                        {'name': '宁夏回族自治区', 'value': 53},
                        {'name': '新疆维吾尔自治区', 'value': 55},
                        {'name': '青海省', 'value': 18},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-12疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 378},
                        {'name': '辽宁省', 'value': 116},
                        {'name': '天津市', 'value': 112},
                        {'name': '上海市', 'value': 311},
                        {'name': '湖北省', 'value': 33366},
                        {'name': '北京市', 'value': 352},
                        {'name': '浙江省', 'value': 1131},
                        {'name': '内蒙古自治区', 'value': 60},
                        {'name': '河北省', 'value': 251},
                        {'name': '江苏省', 'value': 543},
                        {'name': '陕西省', 'value': 225},
                        {'name': '福建省', 'value': 272},
                        {'name': '广东省', 'value': 1219},
                        {'name': '山东省', 'value': 497},
                        {'name': '吉林省', 'value': 83},
                        {'name': '山西省', 'value': 124},
                        {'name': '云南省', 'value': 154},
                        {'name': '甘肃省', 'value': 86},
                        {'name': '四川省', 'value': 436},
                        {'name': '河南省', 'value': 1135},
                        {'name': '江西省', 'value': 844},
                        {'name': '安徽省', 'value': 889},
                        {'name': '湖南省', 'value': 946},
                        {'name': '广西壮族自治区', 'value': 222},
                        {'name': '重庆市', 'value': 509},
                        {'name': '海南省', 'value': 157},
                        {'name': '贵州省', 'value': 133},
                        {'name': '宁夏回族自治区', 'value': 58},
                        {'name': '新疆维吾尔自治区', 'value': 59},
                        {'name': '青海省', 'value': 18},
                        {'name': '西藏自治区', 'value': 1},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-13疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 395},
                        {'name': '辽宁省', 'value': 117},
                        {'name': '天津市', 'value': 117},
                        {'name': '上海市', 'value': 315},
                        {'name': '湖北省', 'value': 48206},
                        {'name': '北京市', 'value': 366},
                        {'name': '浙江省', 'value': 1145},
                        {'name': '内蒙古自治区', 'value': 61},
                        {'name': '河北省', 'value': 265},
                        {'name': '江苏省', 'value': 570},
                        {'name': '陕西省', 'value': 229},
                        {'name': '福建省', 'value': 279},
                        {'name': '广东省', 'value': 1241},
                        {'name': '山东省', 'value': 509},
                        {'name': '吉林省', 'value': 84},
                        {'name': '山西省', 'value': 126},
                        {'name': '云南省', 'value': 156},
                        {'name': '甘肃省', 'value': 90},
                        {'name': '四川省', 'value': 451},
                        {'name': '河南省', 'value': 1169},
                        {'name': '江西省', 'value': 872},
                        {'name': '安徽省', 'value': 910},
                        {'name': '湖南省', 'value': 968},
                        {'name': '广西壮族自治区', 'value': 222},
                        {'name': '重庆市', 'value': 526},
                        {'name': '海南省', 'value': 157},
                        {'name': '贵州省', 'value': 135},
                        {'name': '宁夏回族自治区', 'value': 64},
                        {'name': '新疆维吾尔自治区', 'value': 63},
                        {'name': '青海省', 'value': 18},
                        {'name': '西藏自治区', 'value': 1},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-14疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 419},
                        {'name': '辽宁省', 'value': 119},
                        {'name': '天津市', 'value': 120},
                        {'name': '上海市', 'value': 318},
                        {'name': '湖北省', 'value': 51986},
                        {'name': '北京市', 'value': 372},
                        {'name': '浙江省', 'value': 1155},
                        {'name': '内蒙古自治区', 'value': 65},
                        {'name': '河北省', 'value': 283},
                        {'name': '江苏省', 'value': 593},
                        {'name': '陕西省', 'value': 230},
                        {'name': '福建省', 'value': 281},
                        {'name': '广东省', 'value': 1261},
                        {'name': '山东省', 'value': 523},
                        {'name': '吉林省', 'value': 86},
                        {'name': '山西省', 'value': 126},
                        {'name': '云南省', 'value': 162},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 463},
                        {'name': '河南省', 'value': 1184},
                        {'name': '江西省', 'value': 900},
                        {'name': '安徽省', 'value': 934},
                        {'name': '湖南省', 'value': 988},
                        {'name': '广西壮族自治区', 'value': 226},
                        {'name': '重庆市', 'value': 532},
                        {'name': '海南省', 'value': 159},
                        {'name': '贵州省', 'value': 140},
                        {'name': '宁夏回族自治区', 'value': 67},
                        {'name': '新疆维吾尔自治区', 'value': 65},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-15疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 425},
                        {'name': '辽宁省', 'value': 119},
                        {'name': '天津市', 'value': 122},
                        {'name': '上海市', 'value': 326},
                        {'name': '湖北省', 'value': 54406},
                        {'name': '北京市', 'value': 375},
                        {'name': '浙江省', 'value': 1162},
                        {'name': '内蒙古自治区', 'value': 68},
                        {'name': '河北省', 'value': 291},
                        {'name': '江苏省', 'value': 604},
                        {'name': '陕西省', 'value': 232},
                        {'name': '福建省', 'value': 285},
                        {'name': '广东省', 'value': 1294},
                        {'name': '山东省', 'value': 532},
                        {'name': '吉林省', 'value': 88},
                        {'name': '山西省', 'value': 127},
                        {'name': '云南省', 'value': 168},
                        {'name': '甘肃省', 'value': 90},
                        {'name': '四川省', 'value': 470},
                        {'name': '河南省', 'value': 1212},
                        {'name': '江西省', 'value': 913},
                        {'name': '安徽省', 'value': 950},
                        {'name': '湖南省', 'value': 1001},
                        {'name': '广西壮族自治区', 'value': 235},
                        {'name': '重庆市', 'value': 538},
                        {'name': '海南省', 'value': 162},
                        {'name': '贵州省', 'value': 143},
                        {'name': '宁夏回族自治区', 'value': 70},
                        {'name': '新疆维吾尔自治区', 'value': 70},
                        {'name': '青海省', 'value': 18},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-16疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 445},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 124},
                        {'name': '上海市', 'value': 328},
                        {'name': '湖北省', 'value': 56249},
                        {'name': '北京市', 'value': 380},
                        {'name': '浙江省', 'value': 1167},
                        {'name': '内蒙古自治区', 'value': 70},
                        {'name': '河北省', 'value': 300},
                        {'name': '江苏省', 'value': 617},
                        {'name': '陕西省', 'value': 236},
                        {'name': '福建省', 'value': 287},
                        {'name': '广东省', 'value': 1316},
                        {'name': '山东省', 'value': 537},
                        {'name': '吉林省', 'value': 89},
                        {'name': '山西省', 'value': 128},
                        {'name': '云南省', 'value': 171},
                        {'name': '甘肃省', 'value': 90},
                        {'name': '四川省', 'value': 481},
                        {'name': '河南省', 'value': 1231},
                        {'name': '江西省', 'value': 925},
                        {'name': '安徽省', 'value': 962},
                        {'name': '湖南省', 'value': 1004},
                        {'name': '广西壮族自治区', 'value': 237},
                        {'name': '重庆市', 'value': 547},
                        {'name': '海南省', 'value': 162},
                        {'name': '贵州省', 'value': 144},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 71},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-17疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 457},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 125},
                        {'name': '上海市', 'value': 332},
                        {'name': '湖北省', 'value': 58182},
                        {'name': '北京市', 'value': 381},
                        {'name': '浙江省', 'value': 1171},
                        {'name': '内蒙古自治区', 'value': 72},
                        {'name': '河北省', 'value': 301},
                        {'name': '江苏省', 'value': 626},
                        {'name': '陕西省', 'value': 240},
                        {'name': '福建省', 'value': 290},
                        {'name': '广东省', 'value': 1322},
                        {'name': '山东省', 'value': 541},
                        {'name': '吉林省', 'value': 89},
                        {'name': '山西省', 'value': 129},
                        {'name': '云南省', 'value': 171},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 495},
                        {'name': '河南省', 'value': 1246},
                        {'name': '江西省', 'value': 930},
                        {'name': '安徽省', 'value': 973},
                        {'name': '湖南省', 'value': 1006},
                        {'name': '广西壮族自治区', 'value': 238},
                        {'name': '重庆市', 'value': 552},
                        {'name': '海南省', 'value': 163},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 70},
                        {'name': '新疆维吾尔自治区', 'value': 75},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-18疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 464},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 128},
                        {'name': '上海市', 'value': 333},
                        {'name': '湖北省', 'value': 59989},
                        {'name': '北京市', 'value': 387},
                        {'name': '浙江省', 'value': 1172},
                        {'name': '内蒙古自治区', 'value': 73},
                        {'name': '河北省', 'value': 302},
                        {'name': '江苏省', 'value': 629},
                        {'name': '陕西省', 'value': 240},
                        {'name': '福建省', 'value': 292},
                        {'name': '广东省', 'value': 1328},
                        {'name': '山东省', 'value': 543},
                        {'name': '吉林省', 'value': 89},
                        {'name': '山西省', 'value': 130},
                        {'name': '云南省', 'value': 172},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 508},
                        {'name': '河南省', 'value': 1257},
                        {'name': '江西省', 'value': 933},
                        {'name': '安徽省', 'value': 982},
                        {'name': '湖南省', 'value': 1007},
                        {'name': '广西壮族自治区', 'value': 242},
                        {'name': '重庆市', 'value': 553},
                        {'name': '海南省', 'value': 163},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 70},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 18},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-19疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 470},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 333},
                        {'name': '湖北省', 'value': 61682},
                        {'name': '北京市', 'value': 393},
                        {'name': '浙江省', 'value': 1174},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 306},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 242},
                        {'name': '福建省', 'value': 293},
                        {'name': '广东省', 'value': 1331},
                        {'name': '山东省', 'value': 544},
                        {'name': '吉林省', 'value': 90},
                        {'name': '山西省', 'value': 131},
                        {'name': '云南省', 'value': 173},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 514},
                        {'name': '河南省', 'value': 1262},
                        {'name': '江西省', 'value': 934},
                        {'name': '安徽省', 'value': 986},
                        {'name': '湖南省', 'value': 1008},
                        {'name': '广西壮族自治区', 'value': 244},
                        {'name': '重庆市', 'value': 553},
                        {'name': '海南省', 'value': 163},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 71},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 18},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-20疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 476},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 131},
                        {'name': '上海市', 'value': 334},
                        {'name': '湖北省', 'value': 62031},
                        {'name': '北京市', 'value': 395},
                        {'name': '浙江省', 'value': 1175},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 307},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 244},
                        {'name': '福建省', 'value': 293},
                        {'name': '广东省', 'value': 1332},
                        {'name': '山东省', 'value': 546},
                        {'name': '吉林省', 'value': 91},
                        {'name': '山西省', 'value': 131},
                        {'name': '云南省', 'value': 173},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 520},
                        {'name': '河南省', 'value': 1265},
                        {'name': '江西省', 'value': 934},
                        {'name': '安徽省', 'value': 987},
                        {'name': '湖南省', 'value': 1010},
                        {'name': '广西壮族自治区', 'value': 245},
                        {'name': '重庆市', 'value': 560},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 71},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-21疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 479},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 132},
                        {'name': '上海市', 'value': 334},
                        {'name': '湖北省', 'value': 62662},
                        {'name': '北京市', 'value': 396},
                        {'name': '浙江省', 'value': 1169},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 308},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 293},
                        {'name': '广东省', 'value': 1333},
                        {'name': '山东省', 'value': 949},
                        {'name': '吉林省', 'value': 91},
                        {'name': '山西省', 'value': 132},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 525},
                        {'name': '河南省', 'value': 1267},
                        {'name': '江西省', 'value': 934},
                        {'name': '安徽省', 'value': 988},
                        {'name': '湖南省', 'value': 1011},
                        {'name': '广西壮族自治区', 'value': 246},
                        {'name': '重庆市', 'value': 567},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 71},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 18},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-22疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 479},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 135},
                        {'name': '上海市', 'value': 335},
                        {'name': '湖北省', 'value': 63454},
                        {'name': '北京市', 'value': 399},
                        {'name': '浙江省', 'value': 1169},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 309},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 293},
                        {'name': '广东省', 'value': 1339},
                        {'name': '山东省', 'value': 750},
                        {'name': '吉林省', 'value': 91},
                        {'name': '山西省', 'value': 132},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 526},
                        {'name': '河南省', 'value': 1270},
                        {'name': '江西省', 'value': 934},
                        {'name': '安徽省', 'value': 989},
                        {'name': '湖南省', 'value': 1013},
                        {'name': '广西壮族自治区', 'value': 249},
                        {'name': '重庆市', 'value': 572},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-23疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 480},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 135},
                        {'name': '上海市', 'value': 335},
                        {'name': '湖北省', 'value': 64084},
                        {'name': '北京市', 'value': 399},
                        {'name': '浙江省', 'value': 1169},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 311},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 293},
                        {'name': '广东省', 'value': 1342},
                        {'name': '山东省', 'value': 754},
                        {'name': '吉林省', 'value': 91},
                        {'name': '山西省', 'value': 132},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 526},
                        {'name': '河南省', 'value': 1271},
                        {'name': '江西省', 'value': 934},
                        {'name': '安徽省', 'value': 989},
                        {'name': '湖南省', 'value': 1016},
                        {'name': '广西壮族自治区', 'value': 249},
                        {'name': '重庆市', 'value': 573},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 71},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 18},
                        {'name': '西藏自治区', 'value': 1},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-24疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 480},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 135},
                        {'name': '上海市', 'value': 335},
                        {'name': '湖北省', 'value': 64540},
                        {'name': '北京市', 'value': 399},
                        {'name': '浙江省', 'value': 1169},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 311},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 293},
                        {'name': '广东省', 'value': 1345},
                        {'name': '山东省', 'value': 755},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 132},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 527},
                        {'name': '河南省', 'value': 1271},
                        {'name': '江西省', 'value': 934},
                        {'name': '安徽省', 'value': 989},
                        {'name': '湖南省', 'value': 1016},
                        {'name': '广西壮族自治区', 'value': 251},
                        {'name': '重庆市', 'value': 575},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 71},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-25疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 480},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 135},
                        {'name': '上海市', 'value': 336},
                        {'name': '湖北省', 'value': 64786},
                        {'name': '北京市', 'value': 400},
                        {'name': '浙江省', 'value': 1169},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 311},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 294},
                        {'name': '广东省', 'value': 1347},
                        {'name': '山东省', 'value': 756},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 529},
                        {'name': '河南省', 'value': 1271},
                        {'name': '江西省', 'value': 934},
                        {'name': '安徽省', 'value': 989},
                        {'name': '湖南省', 'value': 1016},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 71},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-26疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 480},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 135},
                        {'name': '上海市', 'value': 336},
                        {'name': '湖北省', 'value': 65187},
                        {'name': '北京市', 'value': 400},
                        {'name': '浙江省', 'value': 1169},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 312},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 294},
                        {'name': '广东省', 'value': 1347},
                        {'name': '山东省', 'value': 756},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 531},
                        {'name': '河南省', 'value': 1271},
                        {'name': '江西省', 'value': 934},
                        {'name': '安徽省', 'value': 989},
                        {'name': '湖南省', 'value': 1016},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 71},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-27疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 480},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 135},
                        {'name': '上海市', 'value': 337},
                        {'name': '湖北省', 'value': 65596},
                        {'name': '北京市', 'value': 410},
                        {'name': '浙江省', 'value': 1169},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 317},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1347},
                        {'name': '山东省', 'value': 756},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 534},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 934},
                        {'name': '安徽省', 'value': 989},
                        {'name': '湖南省', 'value': 1017},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 72},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-28疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 480},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 136},
                        {'name': '上海市', 'value': 337},
                        {'name': '湖北省', 'value': 65914},
                        {'name': '北京市', 'value': 410},
                        {'name': '浙江省', 'value': 1169},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1348},
                        {'name': '山东省', 'value': 756},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 538},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 990},
                        {'name': '湖南省', 'value': 1017},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-02-29疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 480},
                        {'name': '辽宁省', 'value': 121},
                        {'name': '天津市', 'value': 136},
                        {'name': '上海市', 'value': 337},
                        {'name': '湖北省', 'value': 66337},
                        {'name': '北京市', 'value': 411},
                        {'name': '浙江省', 'value': 1169},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1349},
                        {'name': '山东省', 'value': 756},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 538},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 990},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 73},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-01疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 480},
                        {'name': '辽宁省', 'value': 122},
                        {'name': '天津市', 'value': 136},
                        {'name': '上海市', 'value': 337},
                        {'name': '湖北省', 'value': 66907},
                        {'name': '北京市', 'value': 411},
                        {'name': '浙江省', 'value': 1169},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1349},
                        {'name': '山东省', 'value': 758},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 538},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 990},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-02疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 480},
                        {'name': '辽宁省', 'value': 122},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 337},
                        {'name': '湖北省', 'value': 67103},
                        {'name': '北京市', 'value': 412},
                        {'name': '浙江省', 'value': 1169},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1350},
                        {'name': '山东省', 'value': 758},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 538},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 990},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 74},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-03疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 480},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 136},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67217},
                        {'name': '北京市', 'value': 412},
                        {'name': '浙江省', 'value': 1177},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1350},
                        {'name': '山东省', 'value': 758},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 538},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 990},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-04疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 480},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67332},
                        {'name': '北京市', 'value': 413},
                        {'name': '浙江省', 'value': 1177},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1350},
                        {'name': '山东省', 'value': 758},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 538},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 990},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 75},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-05疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 481},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 136},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67466},
                        {'name': '北京市', 'value': 414},
                        {'name': '浙江省', 'value': 1179},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1351},
                        {'name': '山东省', 'value': 758},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 539},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 990},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-06疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 481},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67592},
                        {'name': '北京市', 'value': 414},
                        {'name': '浙江省', 'value': 1179},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1352},
                        {'name': '山东省', 'value': 758},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 539},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 990},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 75},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-07疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 481},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67666},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1179},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1352},
                        {'name': '山东省', 'value': 758},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 539},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-08疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 481},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67707},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1179},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1352},
                        {'name': '山东省', 'value': 758},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 539},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 990},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 76},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-09疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 481},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 136},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67743},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1179},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1352},
                        {'name': '山东省', 'value': 758},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 539},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-10疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 481},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 136},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67760},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1179},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1353},
                        {'name': '山东省', 'value': 758},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 539},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-11疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67773},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1179},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1356},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 539},
                        {'name': '河南省', 'value': 1273},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 75},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-12疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 136},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67781},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1179},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1356},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 93},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 539},
                        {'name': '河南省', 'value': 1273},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-13疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67786},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 0},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1356},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 539},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-14疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67790},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1191},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1356},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 539},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 75},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-15疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 136},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67794},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1195},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1360},
                        {'name': '山东省', 'value': 0},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 539},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-16疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67798},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1195},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1361},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 0},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 75},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-17疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67799},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1196},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1364},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 540},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 147},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-18疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67800},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 0},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1370},
                        {'name': '山东省', 'value': 0},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 540},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 146},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-19疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 483},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67800},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1197},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1378},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 540},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-20疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 136},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67800},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1198},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1395},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 541},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-21疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 0},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67800},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1200},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1400},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 542},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-22疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67800},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1201},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 319},
                        {'name': '江苏省', 'value': 633},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1407},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 543},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 936},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-23疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 136},
                        {'name': '上海市', 'value': 338},
                        {'name': '湖北省', 'value': 67800},
                        {'name': '北京市', 'value': 415},
                        {'name': '浙江省', 'value': 1181},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1415},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 0},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-24疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 339},
                        {'name': '湖北省', 'value': 67801},
                        {'name': '北京市', 'value': 416},
                        {'name': '浙江省', 'value': 1181},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1428},
                        {'name': '山东省', 'value': 0},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 545},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 168},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-25疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 0},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67801},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1181},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1433},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 94},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 547},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-26疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67801},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1181},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1448},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 95},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 0},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-27疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 0},
                        {'name': '辽宁省', 'value': 128},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67801},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1456},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 548},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-28疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 0},
                        {'name': '辽宁省', 'value': 131},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67801},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1467},
                        {'name': '山东省', 'value': 0},
                        {'name': '吉林省', 'value': 97},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 0},
                        {'name': '河南省', 'value': 1272},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-29疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 0},
                        {'name': '辽宁省', 'value': 134},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67801},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1475},
                        {'name': '山东省', 'value': 0},
                        {'name': '吉林省', 'value': 98},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 92},
                        {'name': '四川省', 'value': 548},
                        {'name': '河南省', 'value': 1273},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 576},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-30疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 0},
                        {'name': '辽宁省', 'value': 134},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67801},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1484},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 550},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-03-31疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 0},
                        {'name': '辽宁省', 'value': 137},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67801},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1494},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 0},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-01疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 0},
                        {'name': '辽宁省', 'value': 137},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67802},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 0},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1501},
                        {'name': '山东省', 'value': 0},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 92},
                        {'name': '四川省', 'value': 552},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-02疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 141},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67802},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1507},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 554},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 1018},
                        {'name': '广西壮族自治区', 'value': 252},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-03疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67802},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1514},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 555},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-04疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 141},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1516},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 557},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-05疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 142},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1524},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 558},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-06疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 142},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1532},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 559},
                        {'name': '河南省', 'value': 1273},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-07疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 144},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1533},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 560},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-08疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 144},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1536},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 98},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 0},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-09疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 482},
                        {'name': '辽宁省', 'value': 144},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 1539},
                        {'name': '山东省', 'value': 759},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 0},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 991},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-10疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 483},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 0},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1544},
                        {'name': '山东省', 'value': 0},
                        {'name': '吉林省', 'value': 98},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 560},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 935},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-11疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 484},
                        {'name': '辽宁省', 'value': 145},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1548},
                        {'name': '山东省', 'value': 761},
                        {'name': '吉林省', 'value': 98},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 560},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-12疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 486},
                        {'name': '辽宁省', 'value': 145},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1552},
                        {'name': '山东省', 'value': 0},
                        {'name': '吉林省', 'value': 99},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 0},
                        {'name': '河南省', 'value': 1273},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-13疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 493},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1555},
                        {'name': '山东省', 'value': 761},
                        {'name': '吉林省', 'value': 100},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 560},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-14疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 493},
                        {'name': '辽宁省', 'value': 124},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1564},
                        {'name': '山东省', 'value': 761},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 0},
                        {'name': '河南省', 'value': 1273},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-15疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 501},
                        {'name': '辽宁省', 'value': 0},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 391},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1566},
                        {'name': '山东省', 'value': 761},
                        {'name': '吉林省', 'value': 102},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 560},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-16疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 505},
                        {'name': '辽宁省', 'value': 124},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 67803},
                        {'name': '北京市', 'value': 394},
                        {'name': '浙江省', 'value': 0},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1571},
                        {'name': '山东省', 'value': 0},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 91},
                        {'name': '四川省', 'value': 560},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-17疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 508},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 130},
                        {'name': '上海市', 'value': 228},
                        {'name': '湖北省', 'value': 68128},
                        {'name': '北京市', 'value': 394},
                        {'name': '浙江省', 'value': 1182},
                        {'name': '内蒙古自治区', 'value': 75},
                        {'name': '河北省', 'value': 318},
                        {'name': '江苏省', 'value': 631},
                        {'name': '陕西省', 'value': 245},
                        {'name': '福建省', 'value': 296},
                        {'name': '广东省', 'value': 1577},
                        {'name': '山东省', 'value': 763},
                        {'name': '吉林省', 'value': 102},
                        {'name': '山西省', 'value': 133},
                        {'name': '云南省', 'value': 174},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 0},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        },
        {
                title: {
                    text: '2022年中国新冠疫情实时数据地图\n2020-04-18疫情数据'
                },
                series: [{
                    data:
                    [
                        {'name': '黑龙江省', 'value': 515},
                        {'name': '辽宁省', 'value': 125},
                        {'name': '天津市', 'value': 0},
                        {'name': '上海市', 'value': 0},
                        {'name': '湖北省', 'value': 0},
                        {'name': '北京市', 'value': 0},
                        {'name': '浙江省', 'value': 0},
                        {'name': '内蒙古自治区', 'value': 0},
                        {'name': '河北省', 'value': 0},
                        {'name': '江苏省', 'value': 0},
                        {'name': '陕西省', 'value': 0},
                        {'name': '福建省', 'value': 0},
                        {'name': '广东省', 'value': 0},
                        {'name': '山东省', 'value': 0},
                        {'name': '吉林省', 'value': 0},
                        {'name': '山西省', 'value': 0},
                        {'name': '云南省', 'value': 0},
                        {'name': '甘肃省', 'value': 0},
                        {'name': '四川省', 'value': 0},
                        {'name': '河南省', 'value': 0},
                        {'name': '江西省', 'value': 0},
                        {'name': '安徽省', 'value': 0},
                        {'name': '湖南省', 'value': 0},
                        {'name': '广西壮族自治区', 'value': 0},
                        {'name': '重庆市', 'value': 0},
                        {'name': '海南省', 'value': 0},
                        {'name': '贵州省', 'value': 0},
                        {'name': '宁夏回族自治区', 'value': 0},
                        {'name': '新疆维吾尔自治区', 'value': 0},
                        {'name': '青海省', 'value': 0},
                        {'name': '西藏自治区', 'value': 0},
                ]
            }]
        }]
    }
    FlowMap.setOption(option);
  }, []);

  
  return (
    <div id="FlowMap" style={{ width: "100%", height: "100vh" }}></div>
  );
}