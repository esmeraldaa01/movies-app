import React, { useState, useEffect } from 'react';
import { Pagination } from './components/Pagination';
import './App.css';
import  "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './components/Navbar';
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import ListePage from './pages/Liste'
import ProductDetails from './pages/ProductDetail'
 import  Search from './pages/SearchPage'
import {Login } from './pages/Login'
import { SignUp } from './pages/SignUp'

function App() { 
  return (
    <div>
      <Switch>
        <Route exact path="/liste" component={ListePage} />
        <Route exact path="/search" component={Search} />
        <Route path="/liste/:idd" component={ProductDetails} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect to="/liste" /> 
      </Switch>
    </div>
    
  );
}

export default App;
