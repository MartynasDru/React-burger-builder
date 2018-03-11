import React, { Component } from 'react';

import Auxilary from '../../../hoc/Auxilary/Auxilary';
import Button from '../../UI/Button/Button';

import classes from './OrderSummary.css';

class OrderSummary extends Component {

  componentWillUpdate() {
    console.log('[OrderSummary] WillUpdate');
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
          .map(igKey => {
            return (
              <li key={igKey}>
                <span className={classes.Ingredient}> {igKey} </span> : {this.props.ingredients[igKey]}
              </li>)
          });
    return (
      <Auxilary>
        <h3></h3>
        <p> A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>{this.props.totalPrice.toFixed(2)} Eur</p>
        <p>Continue to checkout?</p>
        <Button clicked={this.props.modalClosed} btnType="Danger">CANCEL</Button>
        <Button clicked={this.props.continue} btnType="Success">CONTINUE</Button>
      </Auxilary>
    );
  }
}

export default OrderSummary;
