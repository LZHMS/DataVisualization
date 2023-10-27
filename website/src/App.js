
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ThreeDBar from './views/ThreeDBar/ThreeDBar';
import SpiralCurve from './views/SpiralCurve/SpiralCurve';
import NormalSurface from './views/NormalSurface/NormalSurface';
import Sphere from './views/Sphere/Sphere';
import MapGraph from './views/MapGraph/MapGraph';
import FlowMap from './views/FlowMap/FlowMap';
import Home from './views/Home/Home';
import Navbar from './compoments/Navbar';
import React, { Component } from 'react'


class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ThreeDBar" element={<ThreeDBar />} />
          <Route path="/SpiralCurve" element={<SpiralCurve />} />
          <Route path="/NormalSurface" element={<NormalSurface />} />
          <Route path="/Sphere" element={<Sphere />} />
          <Route path="/MapGraph" element={<MapGraph />} />
          <Route path="/FlowMap" element={<FlowMap />} />
        </Routes>
    </BrowserRouter>
    );
  };
}
export default App;