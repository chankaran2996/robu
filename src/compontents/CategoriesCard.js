import React from 'react';
import { Card,CardBody,CardTitle } from 'reactstrap';
import "./CategoriesBabber.css"

const CategoriesCard = ({data}) => {
  return (
      <Card className='cards'>
        <img src={data.img}/>
        <CardBody>
            <CardTitle>
                <p>{data.titile}</p>
            </CardTitle>
        </CardBody>
      </Card>
  )
}

export default CategoriesCard;
