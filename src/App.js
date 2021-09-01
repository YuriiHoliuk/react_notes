import React from 'react';
import { OrdersList } from './components/OrderList';

import './App.scss';

import usersFromServer from './api/users.json';
import productsFromServer from './api/products.json';
import ordersFromServer from './api/orders.json';

const preperedOrders = ordersFromServer.map(order => ({
  ...order,
  user: usersFromServer.find(user => user.id === order.userId),
  products: productsFromServer.filter(product => product.orderId === order.id),
}));

function App() {
  return (
    <OrdersList orders={preperedOrders} />
  );
}

export default App;
