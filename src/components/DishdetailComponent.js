import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';


function RenderDish({ dish }) {

    if (dish != null) {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
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

function RenderComments({ comments }) {
    if (comments != null) {
        console.log("in renderComments")
        const commentListItems = comments.map((comment) => {
            return (
                <div className="constiner">
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                </div>
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
        return (<div>no comments</div>)
    }
}

const Dishdetail = (props) => {

    if (props.dish != null) {
        return (
            <div key={props.dish.id} className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={(props.dish.comments)} />

            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}




export default Dishdetail