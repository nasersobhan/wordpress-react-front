import React from 'react'

const Sidebar = () => {
    return (
        <div className="col-lg-4">
        <div className="blog_right_sidebar">
            <aside className="single_sidebar_widget search_widget">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Posts" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier"></i></button>
                    </span>
                </div>
                <div className="br"></div>
            </aside>
            <aside className="single_sidebar_widget author_widget">
                <img className="author_img rounded-circle" src="img/nasersobhan.jpeg" alt=""/>
                <h4>Naser Sobhan</h4>
                <p>Fullstack Developer</p>
                <div className="social_icon">
                    <a href="/"><i className="fa fa-facebook"></i></a>
                    <a href="/"><i className="fa fa-twitter"></i></a>
                    <a href="/"><i className="fa fa-github"></i></a>
                    <a href="/"><i className="fa fa-behance"></i></a>
                </div>
                <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                <div className="br"></div>
            </aside>
            <aside className="single_sidebar_widget popular_post_widget">
                <h3 className="widget_title">Popular Posts</h3>
                <div className="media post_item">
                    <img src="img/blog/popular-post/post1.jpg" alt="post"/>
                    <div className="media-body">
                        <a href="blog-details.html"><h3>Space The Final Frontier</h3></a>
                        <p>02 Hours ago</p>
                    </div>
                </div>
                <div className="media post_item">
                    <img src="img/blog/popular-post/post2.jpg" alt="post"/>
                    <div className="media-body">
                        <a href="blog-details.html"><h3>The Amazing Hubble</h3></a>
                        <p>02 Hours ago</p>
                    </div>
                </div>
                <div className="media post_item">
                    <img src="img/blog/popular-post/post3.jpg" alt="post"/>
                    <div className="media-body">
                        <a href="blog-details.html"><h3>Astronomy Or Astrology</h3></a>
                        <p>03 Hours ago</p>
                    </div>
                </div>
                <div className="media post_item">
                    <img src="img/blog/popular-post/post4.jpg" alt="post"/>
                    <div className="media-body">
                        <a href="blog-details.html"><h3>Asteroids telescope</h3></a>
                        <p>01 Hours ago</p>
                    </div>
                </div>
                <div className="br"></div>
            </aside>
   
           
           
            <aside className="single-sidebar-widget tag_cloud_widget">
                <h4 className="widget_title">Tag Clouds</h4>
                <ul className="list">
                    <li><a href="/">Technology</a></li>
                    <li><a href="/">Fashion</a></li>
                    <li><a href="/">Architecture</a></li>
                    <li><a href="/">Fashion</a></li>
                    <li><a href="/">Food</a></li>
                    <li><a href="/">Technology</a></li>
                    <li><a href="/">Lifestyle</a></li>
                    <li><a href="/">Art</a></li>
                    <li><a href="/">Adventure</a></li>
                    <li><a href="/">Food</a></li>
                    <li><a href="/">Lifestyle</a></li>
                    <li><a href="/">Adventure</a></li>
                </ul>
            </aside>
        </div>
    </div>
    )
}

export default Sidebar
