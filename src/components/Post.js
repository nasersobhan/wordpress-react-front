import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'

export class Post extends Component {
    state = {
        ImageURL: '',
        Categories: [],
        isLoaded: false
    }
    static propTypes = {
        post: propTypes.object.isRequired
    }

    componentDidMount() {
        const {featured_media, categories} = this.props.post;
        const ImageURL = axios.get(`/wp-json/wp/v2/media/${featured_media}`);
        //.then(result => {}).catch((err) => console.error(err))

        Promise.all([ImageURL]).then(result => {
            this.setState({
                ImageURL: result[0].data.media_details.sizes.medium_large.source_url,
                categories: categories,
                isLoaded: true
            });
        }).catch((err) => console.error(err))
        
    }

    render() {
        const {title, excerpt, modified, slug} = this.props.post
        const {ImageURL, isLoaded} = this.state
        if(isLoaded) {
            return (
                <article className="row blog_item">
              
                 <div className="col-md-12">
                     <div className="blog_post">
                         <img src={ImageURL} alt=""/>
                         <div className="blog_details">
                             <a href="/"><h2>{title.rendered}</h2></a>
                             <p dangerouslySetInnerHTML={{__html: excerpt.rendered}}></p>


                             <small>
                                 Categories: 
                                 | Modified: {modified}
                             </small>
                             <br/>
                             <Link key={slug} to={`/${slug}`} >View More</Link>



                         </div>
                     </div>
                 </div>
             </article>
            )
        }
       return 'loading...';
    }
}

export default Post



