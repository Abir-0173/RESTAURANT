import React from 'react'
import LoadComments from './LoadComments';
import { Card, CardImg, CardBody, CardTitle, CardText } from'reactstrap';
import CommentForm from './CommentForm'; 

const DishDetail = (props) => {
    return (
        <Card className="my-2">
            <CardImg
                alt="Card image cap"
                src={props.dish.image}
                style={{
                    height: 300,
                }}
                top
                width="100%"
            />
            <CardBody style={{textAlign:'left',}}>
                <CardTitle tag="h5">{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
                <CardText>{props.dish.price}/-</CardText>

                <h3>Comments:</h3>
                <hr/>
                <LoadComments comments={props.comments}></LoadComments>
                <hr />
                <CommentForm dishId={props.dish.id} addComment={props.addComment} />
            </CardBody>
        </Card>
    )
}

export default DishDetail;