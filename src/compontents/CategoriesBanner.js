import React from 'react';
import { CardGroup } from 'reactstrap';
import CategoriesCard from './CategoriesCard';
import "./CategoriesBabber.css"

const CategoriesBanner = () => {
    let data =[
        {
            "id":1,
            "img":"https://robu.in/wp-content/uploads/2022/11/Development-boards-5.jpg",
            "titile":"Development Boards"
        },
        {
            "id":2,
            "img":"https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
            "titile":"Drone Parts"
        },
        {
            "id":1,
            "img":"https://robu.in/wp-content/uploads/2022/11/Development-boards-5.jpg",
            "titile":"Development Boards"
        },
        {
            "id":2,
            "img":"https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
            "titile":"Drone Parts"
        },
        {
            "id":1,
            "img":"https://robu.in/wp-content/uploads/2022/11/Development-boards-5.jpg",
            "titile":"Development Boards"
        },
        {
            "id":2,
            "img":"https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
            "titile":"Drone Parts"
        },
        {
            "id":1,
            "img":"https://robu.in/wp-content/uploads/2022/11/Development-boards-5.jpg",
            "titile":"Development Boards"
        },
        {
            "id":2,
            "img":"https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
            "titile":"Drone Parts"
        },
        {
            "id":1,
            "img":"https://robu.in/wp-content/uploads/2022/11/Development-boards-5.jpg",
            "titile":"Development Boards"
        },
        {
            "id":2,
            "img":"https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
            "titile":"Drone Parts"
        },
        {
            "id":1,
            "img":"https://robu.in/wp-content/uploads/2022/11/Development-boards-5.jpg",
            "titile":"Development Boards"
        },
        {
            "id":2,
            "img":"https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
            "titile":"Drone Parts"
        },
        {
            "id":1,
            "img":"https://robu.in/wp-content/uploads/2022/11/Development-boards-5.jpg",
            "titile":"Development Boards"
        },
        {
            "id":2,
            "img":"https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
            "titile":"Drone Parts"
        },
        {
            "id":1,
            "img":"https://robu.in/wp-content/uploads/2022/11/Development-boards-5.jpg",
            "titile":"Development Boards"
        },
        {
            "id":2,
            "img":"https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
            "titile":"Drone Parts"
        }
    ]
  return (
    <div>
        <h3><u>Categories</u></h3>
    <div className='Categories'>
    {
        data.map((e) => <CategoriesCard data={e} />)
    }

    </div>
    </div>
  )
}

export default CategoriesBanner;
