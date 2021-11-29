import React from 'react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'


const PostCategoryList = ({categories}) => {
   
    // const {category, setCategory} = useState([])
    // console.log('unnn:',categories[1])
    // setCategory(categories);


    return (
        <Fragment>

           {categories.map((category, i, categories) =>(
                <Link to={`/category/${category.slug}`}>{category.name} </Link>
           ))}
              
          
        </Fragment>
    )
}

export default PostCategoryList
