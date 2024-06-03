import React from 'react'
import './Blog.css'

const Blog = () => {
  return (
    <div id="blog-container">
        <div id="blog-header">
            <h1 id="blog-title">Recent News</h1>
            <p id="blog-subtitle">Explore our Blogs</p>
        </div>
        <div id="blogs">
            <div id="blog-1">
                <p>Blog Post 1</p>
            </div>
            <div id="blog-2">
                <p>Blog Post 2</p>
            </div>
            <div id="blog-3">
                <p>Blog Post 3</p>
            </div> 
        </div>            
    </div>
  )
}

export default Blog