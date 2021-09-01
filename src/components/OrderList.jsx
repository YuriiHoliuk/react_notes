import React from 'react';
import PropTypes from 'prop-types';
import { Order } from './Order';
import { OrderType } from '../types/project.typedefs';

export const OrdersList = ({ orders }) => (
  <div className="container">
    {orders.map(order => (
      <Order order={order} />
    ))}
  </div>
);

OrdersList.propTypes = {
  orders: PropTypes.arrayOf(OrderType).isRequired,
};
