import * as echarts from 'echarts' 
import {useEffect} from 'react'
import 'echarts-gl';
import ChinaMap from "./china.json";

export default function MapGraph() {
  useEffect(() => {
    var MapGraph;
    
    if (MapGraph !== null && MapGraph !== undefined && MapGraph !== ''){
      MapGraph.dispose();
    }

    echarts.registerMap('China', {geoJSON: ChinaMap});

    var dom = document.getElementById('MapGraph');
    MapGraph = echarts.init(dom);

    var option = null;
    MapGraph.setOption(option = {
      backgroundColor: '#358791',
      title: {
        text: '截止2022年4月1日中国新冠疫情累计确诊数据地图',
        left: 'center',
        textStyle: {
          color: "#96169f" // 主标题文字的颜色
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['中国新冠疫情实时数据地图']
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
          'china': true
        }
      },
      series: [
        {
          name: '确诊数',
          map: "China",
          type: 'map',
          roam: true,
          label: {
            show: true,
            color: 'rgb(249, 249, 249)'
          },
          data: [
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
            {'name': '西藏自治区', 'value': 0}          
          ],
          itemStyle: {
            areaColor: '#fff',
          }
        }
      ]
    });

    if (option && typeof option === "object") {
      MapGraph.setOption(option, true);
    }
  }, []);

  
  return (
    <div id="MapGraph" style={{ width: "100%", height: "100vh" }}></div>
  );
}