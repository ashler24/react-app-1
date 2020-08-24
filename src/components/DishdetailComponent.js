import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

function RenderDish({ dish }) {

    if (dish != null) {
        return (
            <div key={dish.id} >
                <Card >
                    <CardImg top src={dish.image} alt={dish.name} />
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

                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </li>

            )
        })
        console.log(commentListItems)
        return (
            <div>
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
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Menu
                    </BreadcrumbItem>

                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">

                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={(props.comments)} />
                    </div>
                </div>
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