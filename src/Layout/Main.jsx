import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import Body from '../component/Body/Body';
import Home from '../component/Home/Home';
import Saju from '../component/Saju/Saju';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Body></Body>
            <Home></Home>
            <Saju></Saju>
        </div>
    );
};

export default Main;