import React from 'react'
import Article from './Article'

const FSD = ({ blogInfo }) => {
  return (
    <>
      <div className="container p-3">
        <div className="row">
          {
            blogInfo.filter((blog) => {
              return blog.domain == "Full Stack Development"
            }).map((blog) => {
              return <Article blogInfo={blog} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default FSD