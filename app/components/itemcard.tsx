import { ItemCards } from "~/types";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from "remix";
import { useState } from "react";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

export function ItemCard({ id, name, image, description, department, subDepartment, brand, ageRange, material, yearOfRelease, price, rating, sale }: ItemCards) {
    const [itemQuantity, setItemQuantity] = useState();

    const formatToMoney = amount => {
        return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }

    const listRatings = [...Array(rating)].map((rating) => {
        return<span><AiFillStar /></span>})
    
        return (
        <div className ="cardwrapper">
        <img className="cardimage" src={image}/>
        <div className="cardtextwrapper">
            <Link to={name} className="cardtexttitle" style={{textAlign: "center", display: "block", textDecoration: "none", color: "black"}}>{name}</Link>
            <p className="cardtextbody" style={{textAlign: "center"}}>
                About this item: {description}
            </p>
            <Link to={name} style={{textAlign: "center", display: "block", textDecoration: "none", color: "black"}}>Rating: {listRatings}</Link>
            <p style={{textAlign: "center"}}>Price: {formatToMoney(price)}</p>
            <span style={{display:"block"}}>
            <button onClick={() => {
          setItemQuantity(Math.max(itemQuantity - 1, 0));
        }}>{ " " }<FaMinus /></button>
        <button onClick={() => {
          setItemQuantity(itemQuantity + 1);
    }}>{ " " }<FaPlus /></button>
        </span>
        </div>
    </div>
    );
};