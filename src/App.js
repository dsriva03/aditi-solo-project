//import statements involving new routing
    //BrowserRouter: wraps up app to enable routing
    //routes: contains all the route definitions and makes sure that the correct route gets rendered
    //route: defines a single route and what component should render to it
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Homepage from './components/Homepage/Homepage.js'
import AnalysisPage from './components/AnalysisPage/AnalysisPage.js'

function App() {

    return (
  <Router>

    <Routes>
        {/*Each route defines:
            1. path: the url the route matches
            2. "/": the root of the website (homepage)
            3. "/xyz" the other pages we wanna go to */}
    
     <Route path='/' element={<Homepage/>} />
     <Route path='/fire' element={<AnalysisPage/>}/>
     {/*<Route path='/about' element={<AboutPage/>} /> in case we wanna add an about page later*/}


    </Routes> 

    
  </Router>  /*wraps up entire app and provides routing functionality, keeps track of URL data and rendes components based off of the defined routes  */ 
    );
}

export default App;