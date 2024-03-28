import React from 'react'
import { CardGroup } from 'reactstrap';
import ProductsCard from './ProductsCard';
const ProductsBanner = () => {
let data = [
    {
        "id":1,
        "src":"https://robu.in/wp-content/uploads/2021/03/Waveshare-Industrial-USB-to-RS485-Converter-1-314x252.jpg",
        "Title":"Waveshare Industrial USB to RS485 Converter",
        "discription":"SKU: 624757",
        "rate":"₹ 18,251.00"
    },{
        "id":1,
        "src":"https://robu.in/wp-content/uploads/2021/03/Waveshare-Industrial-USB-to-RS485-Converter-1-314x252.jpg",
        "Title":"Waveshare Industrial USB to RS485 Converter",
        "discription":"SKU: 624757",
        "rate":"₹ 18,251.00"
    },{
        "id":1,
        "src":"https://robu.in/wp-content/uploads/2021/03/Waveshare-Industrial-USB-to-RS485-Converter-1-314x252.jpg",
        "Title":"Waveshare Industrial USB to RS485 Converter",
        "discription":"SKU: 624757",
        "rate":"₹ 18,251.00"
    },{
        "id":1,
        "src":"https://robu.in/wp-content/uploads/2021/03/Waveshare-Industrial-USB-to-RS485-Converter-1-314x252.jpg",
        "Title":"Waveshare Industrial USB to RS485 Converter",
        "discription":"SKU: 624757",
        "rate":"₹ 18,251.00"
    },{
        "id":1,
        "src":"https://robu.in/wp-content/uploads/2021/03/Waveshare-Industrial-USB-to-RS485-Converter-1-314x252.jpg",
        "Title":"Waveshare Industrial USB to RS485 Converter",
        "discription":"SKU: 624757",
        "rate":"₹ 18,251.00"
    },{
        "id":1,
        "src":"https://robu.in/wp-content/uploads/2021/03/Waveshare-Industrial-USB-to-RS485-Converter-1-314x252.jpg",
        "Title":"Waveshare Industrial USB to RS485 Converter",
        "discription":"SKU: 624757",
        "rate":"₹ 18,251.00"
    },
]
  return (
    <div>
        <h3><u>Featured Products</u></h3>
      <CardGroup>
        {
            data.map((e)=><ProductsCard data={e}/>)
        }
      </CardGroup>
    </div>
  )
}

export default ProductsBanner;
