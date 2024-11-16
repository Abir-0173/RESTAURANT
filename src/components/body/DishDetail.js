import React from 'react'
import LoadComments from './LoadComments';
import { Card, CardImg, CardBody, CardTitle, CardText } from'reactstrap';

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
                <LoadComments comments={props.comments} />
            </CardBody>
        </Card>
    )
}

export default DishDetail;