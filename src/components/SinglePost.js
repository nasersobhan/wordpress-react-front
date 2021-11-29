import { Fragment } from 'react'
import { Link , useParams } from 'react-router-dom';
import useGetData from '../useGetData';

import Header from './template/Header'

import Footer from './template/Footer'
import Sidebar from './template/Sidebar'
import Loading from './template/Loading'
import PostCategoryList from './template/PostCategoryList'

const SinglePost=() =>{
    //const [categories, setCategories] = useState(null);
    // const [Loaded, setLoaded] = useState(false);
    const { slug } = useParams();

    const {data: Post, isLoaded, error } = useGetData(`wp-json/wp/v2/posts?slug=${slug}&_embed=1`);
    

   
        if(isLoaded) {
           // setCategories(Post._embedded['wp:term'][0]);
            console.log('loadedii', Post[0]._embedded['wp:term'][0]);
        return (
            <Fragment>
                <Header />
            

                <section className="banner_area">
            <div className="box_1620">
				<div className="banner_inner d-flex align-items-center">
					<div className="container">
						<div className="banner_content text-center">
							<h2>{Post[0].title.rendered}</h2>
							<div className="page_link">
								<a href="/">Home</a>
								<a href="blog.html">Blog</a>
								<a href="/">{Post[0].title.rendered}</a>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>



        <section className="blog_area single-post-area p_120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 Posts-list">
                    <div className="single-post row">
                            <div className="col-lg-12">
                                <div className="feature-img">
                                    <img className="img-fluid" src={Post[0]._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url} alt=""/>
                                </div>									
                            </div>
                          
                            <div className="col-lg-12 col-md-12 blog_details">
                                <h2>{Post[0].title.rendered}</h2>
                                <p dangerouslySetInnerHTML={{__html: Post[0].content.rendered}}></p>

                                <hr/>
                                <PostCategoryList categories={Post[0]._embedded['wp:term'][0]} />
                              
                            </div>
                            
                        </div>
                        <div className="navigation-area">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                    <div className="thumb">
                                        <a href="/"><img className="img-fluid" src="img/blog/prev.jpg" alt=""/></a>
                                    </div>
                                    <div className="arrow">
                                        <a href="/"><span className="lnr text-white lnr-arrow-left"></span></a>
                                    </div>
                                    <div className="detials">
                                        <p>Prev Post</p>
                                        <a href="/"><h4>Space The Final Frontier</h4></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                    <div className="detials">
                                        <p>Next Post</p>
                                        <a href="/"><h4>Telescopes 101</h4></a>
                                    </div>
                                    <div className="arrow">
                                        <a href="/"><span className="lnr text-white lnr-arrow-right"></span></a>
                                    </div>
                                    <div className="thumb">
                                        <a href="/"><img className="img-fluid" src="img/blog/next.jpg" alt=""/></a>
                                    </div>										
                                </div>									
                            </div>
                        </div>
                        <div className="comments-area">
                            <h4>05 Comments</h4>
                            <div className="comment-list">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <img src="img/blog/c1.jpg" alt=""/>
                                        </div>
                                        <div className="desc">
                                            <h5><a href="/">Emilly Blunt</a></h5>
                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                            <p className="comment">
                                                Never say goodbye till the end comes!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="reply-btn">
                                           <a href="" className="btn-reply text-uppercase">reply</a> 
                                    </div>
                                </div>
                            </div>	
                            <div className="comment-list left-padding">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <img src="img/blog/c2.jpg" alt=""/>
                                        </div>
                                        <div className="desc">
                                            <h5><a href="/">Elsie Cunningham</a></h5>
                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                            <p className="comment">
                                                Never say goodbye till the end comes!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="reply-btn">
                                           <a href="" className="btn-reply text-uppercase">reply</a> 
                                    </div>
                                </div>
                            </div>	
                            <div className="comment-list left-padding">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <img src="img/blog/c3.jpg" alt=""/>
                                        </div>
                                        <div className="desc">
                                            <h5><a href="/">Annie Stephens</a></h5>
                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                            <p className="comment">
                                                Never say goodbye till the end comes!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="reply-btn">
                                           <a href="" className="btn-reply text-uppercase">reply</a> 
                                    </div>
                                </div>
                            </div>	
                            <div className="comment-list">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <img src="img/blog/c4.jpg" alt=""/>
                                        </div>
                                        <div className="desc">
                                            <h5><a href="/">Maria Luna</a></h5>
                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                            <p className="comment">
                                                Never say goodbye till the end comes!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="reply-btn">
                                           <a href="" className="btn-reply text-uppercase">reply</a> 
                                    </div>
                                </div>
                            </div>	
                            <div className="comment-list">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                            <img src="img/blog/c5.jpg" alt=""/>
                                        </div>
                                        <div className="desc">
                                            <h5><a href="/">Ina Hayes</a></h5>
                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                            <p className="comment">
                                                Never say goodbye till the end comes!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="reply-btn">
                                           <a href="" className="btn-reply text-uppercase">reply</a> 
                                    </div>
                                </div>
                            </div>	                                             				
                        </div>
                        <div className="comment-form">
                            <h4>Leave a Reply</h4>
                            <form>
                                <div className="form-group form-inline">
                                  <div className="form-group col-lg-6 col-md-6 name">
                                    <input type="text" className="form-control" id="name" placeholder="Enter Name"  />
                                  </div>
                                  <div className="form-group col-lg-6 col-md-6 email">
                                    <input type="email" className="form-control" id="email" placeholder="Enter email address"  />
                                  </div>										
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control mb-10" rows="5" name="message" placeholder="Messege" required=""></textarea>
                                </div>
                                <a href="/" className="primary-btn submit_btn">Post Comment</a>	
                            </form>
                        </div>
                    </div>
                    <Sidebar />
                </div>
            </div>
        </section>
            <Footer/>
            </Fragment>
        )

        }

        if(error) {
            return (<div>Error: {error}</div>)
        }

        return <Loading/>;
    }

export default SinglePost
