import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class MenuDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const dish = this.props.selectedDish;
        const comments = dish.comments.map((comment) => {
            return (
                <li key={comment.id}>{comment.comment}></li>
            )
        });

        return (
            <Card style={{ width: '44rem' }} variant="top">
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
                <ul className="text-left">{comments}</ul>
            </Card>
        )
    }
}

export default MenuDetails;