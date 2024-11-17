import { CardColumns, Modal, ModalFooter, Button } from "reactstrap";
import DishDetail from "./DishDetail";
import MenuItem from "./MenuItem"
import React, {Component} from "react" //{useState}
import { connect } from "react-redux";

const mapStateToProps = state =>{
    return{
        dishes: state.dishes,
        comments: state.comments
    }
}
console.log(mapStateToProps);

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false,
    };
    // can not user hook into
    // const [dishes] = useState(DISHES);
    // const [SelectedDish, setSelectedDish] = useState(null); 
    // console.log(SelectedDish);
    onSelectDish= (dish) =>{
        this.setState({
            selectedDish:dish,
            modalOpen: true,
        });
    };
    toggleModal = () => {
        this.setState({
            modalOpen:!this.state.modalOpen,
        });
    };

    

    render() {
        document.title = "Menu";
        const menu = this.props.dishes.map((dish) => {
            return <MenuItem dish={dish} onSelectDish={this.onSelectDish} key={dish.id}/>;
        });
        
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter((comment) => {
                return comment.dishId === this.state.selectedDish.id;
            })
            dishDetail = <DishDetail 
            dish={this.state.selectedDish}
            comments={comments} />;
        }
    
        // const dishDetail = this.state.selectedDish ? <DishDetail dish={this.state.selectedDish}  />: null ;

        return (
            <div className="container">
                <div className="row">
                    <CardColumns>{menu}</CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        {dishDetail}
                        <ModalFooter> 
                            <Button color='primary' onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }

    
}

export default connect(mapStateToProps) (Menu);