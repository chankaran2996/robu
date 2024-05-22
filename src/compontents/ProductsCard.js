import React from 'react';
import { Card,CardBody,CardTitle,CardImg,CardSubtitle,CardText } from 'reactstrap';
const ProductsCard = ({data}) => {
    console.log(data)
  return (
    <Card
    sx={{'&:hover': { boxShadow: "5px 5px 5px 5px" , borderColor: 'neutral.outlinedHoverBorder' },}}
    >
        <CardImg src={data.src}/>
        <CardBody>
            <CardTitle>
                <h4>{data.Title}</h4>
            </CardTitle>
            <CardSubtitle>
                <h5>{data.discription}</h5>
            </CardSubtitle>
            <CardText>
                <h5>{data.rate}</h5>
            </CardText>
        </CardBody>
    </Card>
  )
}

export default ProductsCard;
