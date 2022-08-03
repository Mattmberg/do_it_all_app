import { ItemCards } from "~/types";
import { FaRegSnowflake } from 'react-icons/fa';

export function ItemCard({ id, name, image, description, department, subDepartment, brand, ageRange, material, yearOfRelease, price, rating, sale }: ItemCards) {
    const listRatings = [...Array(rating)].map((rating) => {
        return<h5><FaRegSnowflake /></h5>})
    return (
        <div className ="cardwrapper">
        <div className="cardtextwrapper">
            <h2 className="cardtexttitle">{name}</h2>
            <p className="cardtextbody">
                About this item: {description}
            </p>
            <h5>Rating: {rating}</h5>
            <p>Price: {price}</p>
        </div>
    </div>
    );
};