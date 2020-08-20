import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';


class Dishdetail extends Component {


    renderDish(dish) {

        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>

                </div>
            )
        }
        else {
            return (
                <div className="row"></div>
            )
        }

    }

    renderComments(comments) {
        if (comments != null) {
            console.log("in renderComments")
            const commentListItems = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {comment.date}</p>
                    </li>
                )
            })
            console.log(commentListItems)
            return (
                <div className="col-12 col-md-5 m1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentListItems}
                    </ul>

                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}

                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }

    }

}

export default Dishdetail