import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({currentValue, setOptionValue}) => {
  return (
    <div>
      <input 
        type="text" 
        className={styles.input} 
        value={currentValue} 
        onChange={event => setOptionValue(event.target.value)}/>
    </div>
  );
};

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  name: PropTypes.string,
};

export default OrderOptionText;