import About from './components/About';
import Home from './components/Home'
import Services from './components/Services';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import State from './components/State';
const App = () => {

    return(
        <>
                <NavbarComp/>

                <Routes>

                    <Route path='/' element={<Home/>} />
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/state" element={<State/>}/>

                </Routes>

        </>
    );

}

export default App;

