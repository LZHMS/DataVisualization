import * as echarts from 'echarts' 
import {useEffect} from 'react'
import 'echarts-gl';


export default function Sphere() {
  useEffect(() => {
    var Sphere;
    
    if (Sphere !== null && Sphere !== undefined && Sphere !== ''){
      Sphere.dispose();
    }

    var dom = document.getElementById('Sphere');
    Sphere = echarts.init(dom);

    var option = null;
    Sphere.setOption(option = {
      backgroundColor: '#358791',
      title: {
        text: '三维球面',
        left: 'center',
        textStyle: {
          color: "#96169f" // 主标题文字的颜色
        }
      },
      tooltip: {},
      visualMap: {
        show: false,
        dimension: 2,
        min: -5,
        max: 5,
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
      xAxis3D: {},
      yAxis3D: {},
      zAxis3D: {},
      grid3D: {
        viewControl: {
          autoRotate: true
        }
      },
      series: [
        {
          type: 'surface',
          parametric: true,
          // shading: 'albedo',
          parametricEquation: {
            u: {
              min: -Math.PI,
              max: Math.PI,
              step: Math.PI / 20
            },
            v: {
              min: 0,
              max: Math.PI,
              step: Math.PI / 20
            },
            x: function (u, v) {
              return 5*Math.sin(v) * Math.cos(u);
            },
            y: function (u, v) {
              return 5*Math.sin(v) * Math.sin(u);
            },
            z: function (u, v) {
              return 5*Math.cos(v);
            }
          }
        }
      ]
    });

    if (option && typeof option === "object") {
      Sphere.setOption(option, true);
    }
  }, []);

  
  return (
    <div id="Sphere" style={{ width: "100%", height: "100vh" }}></div>
  );
}