import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = ({ dish, onSelectDish }) => {
    return (
        // <div>{dish.name}</div>

        <div>
            <Card inverse style={{padding:10, margin:10, cursor:"grab"}} onClick={() => onSelectDish(dish)}>
                <CardImg
                    alt="Card image cap"
                    src={dish.image}
                    style={{
                        width: "100%",
                        opacity: 0.5,
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h5" style={{fontSize:25, fontWeight:'bolt', color:'#000'}}>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    )
}

export default MenuItem;