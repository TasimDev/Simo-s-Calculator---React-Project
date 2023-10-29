import React, { useEffect, useState } from 'react'
import { blogData } from '../../data/blogData';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [blogList, setBlogList] = useState(null);
    useEffect(() => {
        let blog = blogData.find(blog => blog.id === parseInt(id));

        if (blog) {
            setBlogList(blog);
        }

    }, [id])
    return (
        <div>
            {blogList ? (
                <>
                    <div className="header-details">
                        <div className="title-details">
                            <h1>{blogList.title}</h1>
                            <div className="info-details">
                                <div className="author">
                                    {blogList.author}
                                </div>
                                <div className="date">
                                    {blogList.date}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="body-details">
                        <div className="param">
                            {blogList.content}
                        </div>

                    </div>
                </>) : null}
        </div>
    )
}

export default Details