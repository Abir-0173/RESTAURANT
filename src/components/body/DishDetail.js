import React from 'react'
import LoadComments from './LoadComments';
import { Card, CardImg, CardBody, CardTitle, CardText } from'reactstrap';

const DishDetail = ({dish}) => {
    return (
        <Card className="my-2">
            <CardImg
                alt="Card image cap"
                src={dish.image}
                style={{
                    height: 300,
                }}
                top
                width="100%"
            />
            <CardBody style={{textAlign:'left',}}>
                <CardTitle tag="h5">{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                <CardText>{dish.price}/-</CardText>

                <h3>Comments:</h3>
                <hr/>
                <LoadComments comments={dish.comments} />
            </CardBody>
        </Card>
    )
}

export default DishDetail;