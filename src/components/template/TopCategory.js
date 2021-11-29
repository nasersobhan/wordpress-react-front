import React from 'react'

const TopCategory = () => {
    return (
        <section className="blog_categorie_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="categories_post">
                            <img src="img/blog/cat-post/cat-post-3.jpg" alt="post" />
                            <div className="categories_details">
                                <div className="categories_text">
                                    <a href="blog-details.html"><h5>Technology</h5></a>
                                    <div className="border_line"></div>
                                    <p>Enjoy your social life together</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="categories_post">
                            <img src="img/blog/cat-post/cat-post-2.jpg" alt="post"/>
                            <div className="categories_details">
                                <div className="categories_text">
                                    <a href="blog-details.html"><h5>Life Journey</h5></a>
                                    <div className="border_line"></div>
                                    <p>Be a part of politics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="categories_post">
                            <img src="img/blog/cat-post/cat-post-1.jpg" alt="post" />
                            <div className="categories_details">
                                <div className="categories_text">
                                    <a href="blog-details.html"><h5>Life Lessons</h5></a>
                                    <div className="border_line"></div>
                                    <p>Let the food be finished</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopCategory
