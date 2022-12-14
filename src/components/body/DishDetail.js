import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import LoadComments from "./LoadComments";
import CommentForm from './CommentForm';
import { baseUrl } from "../../redux/baseUrl";


const DishDetail = props =>{
    return(
        <div>
            <Card style={{ marginTop:"10px" }}>
                <CardImg top src={baseUrl + props.dish.image} alt = {props.dish.name}/>
                <CardBody style={{ textAlign:"left" }}>

                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price}</p>

                    </CardText>
                    <hr/>   
                    <LoadComments comments = {props.comments} commentIsLoading = {props.commentIsLoading}/>
                    <hr/>  

                    <CommentForm dishId = {props.dish.id} addComment = {props.addComment}/>
                    
                </CardBody>
                </Card>
        </div>
    );


}

export default DishDetail;