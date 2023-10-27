import React, { Component} from 'react';
import ThreeDBar from '../ThreeDBar/ThreeDBar';
import SpiralCurve from '../SpiralCurve/SpiralCurve';
import NormalSurface from '../NormalSurface/NormalSurface';
import Sphere from '../Sphere/Sphere';
import MapGraph from '../MapGraph/MapGraph';
import FlowMap from '../FlowMap/FlowMap';
import "./index.module.css"


class Home extends Component {
    render () {
        return (
            <div>
                <div className='App'><FlowMap /></div>
                <div className='App'><MapGraph /></div>
                <div className='App'><Sphere /></div>
                <div className='App'><NormalSurface /></div>
                <div className='App'><SpiralCurve /></div>
                <div className='App'><ThreeDBar /></div>
            </div>
        );
    }
}

export default Home;