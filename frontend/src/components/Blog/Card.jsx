import React from 'react'
import { Link } from "react-router-dom";
const Card = ({ id, title, author, date, content }) => {
    return (
        <Link to={`/details/${id}`} className='blog-card'>

            <div className="blog-title"><h2>{title}</h2></div>
            <div className="blog-content">{content}</div>
            <div className="blog-info">
                <div className="author">{author}</div>
                <div className="date">{date}</div>
            </div>

        </Link>
    )
}

export default Card