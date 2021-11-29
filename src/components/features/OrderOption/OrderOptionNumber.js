import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => {
  return (
    <div className={styles.number}>
      <p>{formatPrice(price)}</p>
      <input 
        type="number" 
        className={styles.inputSmall} 
        value={currentValue} 
        min={limits.min} 
        max={limits.max}
        onChange={event => setOptionValue(event.target.value)}/>
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionNumber;