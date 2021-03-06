import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import { Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';

const OrderForm = ({tripCost, options, setOrderOption}) => {
  return (
    <Row>
      {pricing.map(option => <Col md={4} key={option.id}><OrderOption currentValue={options[option.id]} setOrderOption={setOrderOption} {...option}/></Col>)}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options}/>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;