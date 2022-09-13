import React from 'react';
import NavBar from './components/NabBar';
import Home from './components/Home';
import Order from './components/Order';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Company from './components/Company';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/company" exact component={Company} />
          <Route path="/Order" exact component={Order} />
          <Route path="/Faq" exact component={Faq}/>
          <Route path="/cart" exact component={Cart}/>
          <Footer />
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
