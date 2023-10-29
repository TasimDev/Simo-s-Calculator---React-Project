
import { Card } from '../../components'
import React from 'react';
import { blogData } from '../../data/blogData';

const Blog = () => {
    const posts = blogData;


    return (

        <div className='blog-page'>
            <div className="blog-page-header container">
                <h1>Welcome to Simo's <span>Blog Page</span></h1>
            </div>

            <div className="card-section">

                {
                    posts.map((post) => {
                        return <Card
                            id={post.id}
                            title={post.title}
                            author={post.author}
                            date={post.date}
                            content={post.content}
                        />
                    })
                }

            </div>
        </div>

    )
}

export default Blog