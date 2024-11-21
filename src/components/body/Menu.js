import { CardColumns, Modal, ModalFooter, Button } from "reactstrap";
import DishDetail from "./DishDetail";
import MenuItem from "./MenuItem"
import React, { Component } from "react" //{useState}
import { connect } from "react-redux";
import { addComment, fetchDishes } from "../../redux/actionCreators";
import Loading from './Loading';

// CONVERT STATE TO PROPS
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}
// console.log(mapStateToProps.dishes);

// DISPATCH FUNCTION (CONVERT DISPATCH TO PROPS)
const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes())
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false,
    };
    // can not user hook into
    // const [dishes] = useState(DISHES);
    // const [SelectedDish, setSelectedDish] = useState(null); 
    // console.log(SelectedDish);
    onSelectDish = (dish) => {
        this.setState({
            selectedDish: dish,
            modalOpen: true,
        });
    };
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
        });
    };

    componentDidMount() {
        this.props.fetchDishes();
    }




    render() {
        // console.log("Dishes:", this.props.dishes);
        document.title = "Menu";
        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const menu = this.props.dishes.dishes.map((dish) => {
                return <MenuItem dish={dish} onSelectDish={this.onSelectDish} key={dish.id} />;
            });

            let dishDetail = null;
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.filter((comment) => {
                    return comment.dishId === this.state.selectedDish.id;
                })
                dishDetail = <DishDetail
                    dish={this.state.selectedDish}
                    comments={comments}
                    addComment={this.props.addComment} />;
            }

            // const dishDetail = this.state.selectedDish ? <DishDetail dish={this.state.selectedDish}  />: null ;

            return (
                <div className="container">
                    <div className="row">
                        <CardColumns>{menu}</CardColumns>
                        <Modal isOpen={this.state.modalOpen} >
                            {dishDetail}
                            <ModalFooter>
                                <Button color='primary' onClick={this.toggleModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            );
        }

    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);