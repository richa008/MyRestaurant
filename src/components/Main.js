import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu';
import MenuDetails from "./MenuDetails"
import { Dishes } from '../shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes: Dishes,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <MenuDetails dish={this.state.dishes.filter(dish => { return dish.id === this.state.selectedDish })[0]}></MenuDetails>
      </div>
    );
  }
}

export default Main;