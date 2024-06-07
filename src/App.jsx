import About from './components/About';
import Home from './components/Home'
import Services from './components/Services';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import State from './components/State';
import API from './components/API';
import Products from './components/Products';
import Demo from './components/Demo';
const App = () => {

    return(
        <>
                <NavbarComp/>

                <Routes>

                    <Route path='/' element={<Home/>} />
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/state" element={<State/>}/>
                    <Route path="/api" element={<API/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/demo" element={<Demo name="felix"/>}/>

                </Routes>

        </>
    );

}

export default App;

