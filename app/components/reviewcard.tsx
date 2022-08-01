import { ReviewCards } from "~/types";
import { FaRegSnowflake } from 'react-icons/fa';

export function ReviewCard({ id, title, firstName, lastName, stars, comment, timestamp }: ReviewCards) {
    const listStars = [...Array(stars)].map((star) => {
        return<h5><FaRegSnowflake /></h5>})
    return (
        <div className ="cardwrapper">
        <div className="cardtextwrapper">
            <h2 className="cardtexttitle">{title}</h2>
            <p>{firstName} {lastName}</p>
            <p className="cardtextbody">
                {comment}
            </p>
            <h5>Rating: {stars}</h5>
            <p>{timestamp}</p>
        </div>
    </div>
    );
};