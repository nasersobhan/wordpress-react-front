import { Fragment } from 'react'
import useGetData from '../../useGetData';

import Header from '../template/Header'

import Footer from '../template/Footer'
import Sidebar from '../template/Sidebar'
import Loading from '../template/Loading'


const ContactMe=() =>{
    const {data: Post, isLoaded, error } = useGetData(`wp-json/wp/v2/pages?slug=contact-me-for-hiring&_embed=1`);
    

   
        if(isLoaded) {
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
								<a href="/about-me">{Post[0].title.rendered}</a>
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
                          
                          
                            <div className="col-lg-12 col-md-12 blog_details">
                                <h2>{Post[0].title.rendered}</h2>
                                <p dangerouslySetInnerHTML={{__html: Post[0].content.rendered}}></p>

                             
                            </div>
                            
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

export default ContactMe
