import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Pay from './screens/Pay.js'
import Main from './screens/Main.js'
import TransactionsPage from './screens/TransactionsPage.js'
import ProductPage from './screens/ProductPage.js'
import FaucetPage from './screens/FaucetPage.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/pay" component={Pay} />
        <Route path="/faucet" component={FaucetPage} />
        <Route path="/transactions" component={TransactionsPage} />
        <Route path="/products/:id" component={ProductPage} />
        <Route exact path="/" component={Main} />
      </div>
    </BrowserRouter>
  );
}

export default App;
