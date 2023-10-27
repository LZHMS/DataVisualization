import * as echarts from 'echarts' 
import {useEffect} from 'react'
import 'echarts-gl';


export default function NormalSurface() {
  useEffect(() => {
    var NormalSurface;
    if (NormalSurface !== null && NormalSurface !== undefined && NormalSurface !== ''){
      NormalSurface.dispose();
    }

    var dom = document.getElementById('NormalSurface');
    NormalSurface = echarts.init(dom);

    var option = null;
    NormalSurface.setOption(option = {
      backgroundColor: '#358791',
      title: {
        text: '二维标准正态分布曲面',
        left: 'center',
        textStyle: {
          color: "#96169f" // 主标题文字的颜色
        }
      },
      tooltip: {},
      visualMap: {
        show: false,
        dimension: 2,
        min: 0,
        max: 0.18,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026'
          ]
        }
      },
      xAxis3D: {
        type: 'value',
        max: 3,
        min: -3
      },
      yAxis3D: {
        type: 'value',
        max: 3,
        min:-3
      },
      zAxis3D: {
        type: 'value'
      },
      grid3D: {
        viewControl: {
          // projection: 'orthographic',
          autoRotate: true
        }
      },
      series: [
        {
          type: 'surface',
          wireframe: {
            // show: false
          },
          equation: {
            x: {
              max: 3,
              min: -3,
              step: 0.05
            },
            y: {
              max: 3,
              min: -3,
              step: 0.05
            },
            z: function (x, y) {
              return (1/(2* Math.PI))*Math.exp(-((x ** 2) + (y ** 2)) / 2);
            }
          }
        }
      ]
    });

    if (option && typeof option === "object") {
      NormalSurface.setOption(option, true);
    }
  }, []);

  
  return (
    <div id="NormalSurface" style={{ width: "100%", height: "100vh" }}></div>
  );
}