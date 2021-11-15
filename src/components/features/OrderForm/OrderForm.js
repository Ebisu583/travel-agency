import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import { Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

const OrderForm = ({tripCost, options}) => {
  return (
    <Row>
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options}/>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;