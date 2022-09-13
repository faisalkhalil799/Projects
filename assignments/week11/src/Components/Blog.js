import React from 'react';
import './Blog.css';

const Blog = () => {

    const blogs = [
        {
            author: "Dheerendra",
            title: "corruption",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis illo, similique labore voluptate nulla animi dolorum eius laborum illum, nesciunt quod reprehenderit dicta autem vel nobis minima sit deleniti!",
            date: "25 january"
        },
        {
            author: "Dheerendra",
            title: "corruption",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis illo, similique labore voluptate nulla animi dolorum eius laborum illum, nesciunt quod reprehenderit dicta autem vel nobis minima sit deleniti!",
            date: "25 january"
        },
        {
            author: "Dheerendra",
            title: "corruption",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis illo, similique labore voluptate nulla animi dolorum eius laborum illum, nesciunt quod reprehenderit dicta autem vel nobis minima sit deleniti!",
            date: "25 january"
        },
        {
            author: "Dheerendra",
            title: "corruption",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis illo, similique labore voluptate nulla animi dolorum eius laborum illum, nesciunt quod reprehenderit dicta autem vel nobis minima sit deleniti!",
            date: "25 january"
        },
        {
            author: "Dheerendra",
            title: "corruption",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis illo, similique labore voluptate nulla animi dolorum eius laborum illum, nesciunt quod reprehenderit dicta autem vel nobis minima sit deleniti!",
            date: "25 january"
        },
        {
            author: "Dheerendra",
            title: "corruption",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis illo, similique labore voluptate nulla animi dolorum eius laborum illum, nesciunt quod reprehenderit dicta autem vel nobis minima sit deleniti!",
            date: "25 january"
        }
    ];

    return (
        <div>
            <div  className="blogs">Our Blogs</div>

            <div className="flex-div">
                {blogs.map((item, index) => (
                    <div key={index} className="main-div">
                        <div className="author-time my">
                            <h5>{item.author} , {item.date}</h5>
                        </div>
                        <h2 className="title my">{item.title}</h2>
                        <p className="content my">{item.content}</p>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Blog;