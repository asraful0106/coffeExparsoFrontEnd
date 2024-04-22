import React from 'react';
import Header from './componentes/Headers/Header';
import { Outlet } from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
const App = () => {
    return (
        <div className='flex flex-col min-h-[100vh]'>
           <Header/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default App;