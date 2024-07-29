"use client"
import React from 'react'
import RouteComponent from '../RouteComponent/Route-Component'
import SingleBlogDetails from './Single-Blog-Details'
import { ARTICLES } from '../../../constants/constants'
const SingleBlog = ({id}) => {
  const blog = ARTICLES[id]
  return (
    <div className='w-ful my-4 flex flex-col items-start px-8'>
      <RouteComponent mainRoute={id} parentRoute={`Home > Blogs > `} />
      <SingleBlogDetails blog={blog}/>
    </div>
  )
}

export default SingleBlog