import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Restaurents from './components/Restaurents/Restaurents';
import OrderCuisines from './components/OrderCuisines/OrderCuisines';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Restaurents} />
            <Route path="/order" component={OrderCuisines} />
            <Route path="/checkout" component={PlaceOrder} />
          </Switch>

        </Layout>
      </div>
      );
  }
}

export default App;
