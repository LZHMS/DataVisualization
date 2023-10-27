import * as echarts from 'echarts' 
import {useEffect} from 'react'
import 'echarts-gl';


export default function SpiralCurve() {
  useEffect(() => {
    var SpiralCurve;
    if (SpiralCurve !== null && SpiralCurve !== undefined && SpiralCurve !== ''){
      SpiralCurve.dispose();
    }
    

    var dom = document.getElementById('SpiralCurve');
    SpiralCurve = echarts.init(dom);
    

    var data = [];
    // Parametric curve
    for (var t = 0; t < 5; t += 0.01) {
      var x = 5 * Math.sin(2*Math.PI * t);
      var y = 5 * Math.cos(2*Math.PI * t);
      var z = t;
      data.push([x, y, z]);
    }
    console.log(data.length);
    var option = null;
    SpiralCurve.setOption(option = {
      backgroundColor: '#358791',
      tooltip: {},
      title: {
        text: '三维螺旋曲线',
        left: 'center',
        textStyle: {
          color: "#96169f" // 主标题文字的颜色
        }
      },
      visualMap: {
        show: false,
        dimension: 2,
        min: 0,
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
      xAxis3D: {
        type: 'value'
      },
      yAxis3D: {
        type: 'value'
      },
      zAxis3D: {
        type: 'value'
      },
      grid3D: {
        viewControl: {
          projection: 'orthographic',
          autoRotate: true
        }
      },
      series: [
        {
          type: 'line3D',
          data: data,
          lineStyle: {
            width: 4
          }
        }
      ]
    });

    if (option && typeof option === "object") {
      SpiralCurve.setOption(option, true);
    }
  }, []);

  
  return (
    <div id="SpiralCurve" style={{ width: "100%", height: "100vh" }}></div>
  );
}