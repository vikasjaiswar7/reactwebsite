import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import { Switch,Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
const App=()=> {
  return (
    <>
    <NavBar/>
    <Switch>
      
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/service" component={Service}/>
      <Redirect to="/"/>
    </Switch>
    <Footer/>
    
    {/* <Home/>
    <About/>
    <Contact/>
    <Service/> */}
  
    </>
  );
}

export default App;
