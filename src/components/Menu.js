import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className="col-12 col-md-3">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;