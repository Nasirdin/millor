import React from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Catalog from './components/catalog';
import Blog from './components/blog';
import CardProduct from './components/cardProduct';
import Contacts from './components/contacts';
import Personal from './components/personal';


const App = () => {
    return (
      <BrowserRouter>
          <Header/>
          <Switch>
              <Route exact path='/' component={() => <Home/>}/>
              <Route exact path='/catalog' component={() => <Catalog/>}/>
              <Route exact path='/blog' component={() => <Blog/>}/>
              <Route exact path='/card-product' component={() => <CardProduct/>}/>
              <Route exact path='/contacts' component={() => <Contacts/>}/>
              <Route exact path='/personal-area' component={() => <Personal/>}/>
          </Switch>
          <Footer/>
      </BrowserRouter>
    )
}

export default App;