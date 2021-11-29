import React, {Fragment} from 'react'
import Header from './template/Header'
import TopHome from './template/TopHome';
import TopCategory from './template/TopCategory';
import Footer from './template/Footer'
import Sidebar from './template/Sidebar'
import PostTags from './PostTags';
import Loading from './template/Loading'
import useGetData from '../useGetData'

const Home = () => {

    const {data: Posts, isLoaded, error } = useGetData(`/wp-json/wp/v2/posts`);


    console.log(Posts)
    if(isLoaded) {
        console.log(Posts)
        return (
            <Fragment>
                <Header />
                <TopHome />
                <TopCategory/>
                <section className="blog_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <PostTags Posts={Posts} />
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </section>
                <Footer/>
            </Fragment>
        )
    }
    return (<Loading/>)
}

export default Home
