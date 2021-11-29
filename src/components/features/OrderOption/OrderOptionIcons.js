import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';
import PropTypes from 'prop-types';

const OrderOptionIcons = ({values, required, setOptionValue}) => {
  return (
    <div>
      {required ? '' : (
        <div className={`${styles.icon} ${styles.iconActive}`} id={''} onClick= {(event) => setOptionValue(event.target.id)}>
          <Icon name={'times-circle'}/>
          none
        </div>
      )}
    
      {values.map(value => (
        <div className={`${styles.icon} ${styles.iconActive}`} id={value.id} key={value.id} onClick= {(event) => setOptionValue(event.target.id)}>
          <Icon name={value.icon}/>
          {value.name}
          {formatPrice(value.price)}
        </div>
      ))}
    </div>
  );
};

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;