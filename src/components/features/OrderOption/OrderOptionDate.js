import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
require('react-datepicker/dist/react-datepicker.css');

const OrderOptionDate = ({currentValue, setOptionValue}) => {
  return (
    <div>
      <DatePicker selected={currentValue} onChange={(date) => setOptionValue(date)}/>
    </div>
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  name: PropTypes.string,
};

export default OrderOptionDate;