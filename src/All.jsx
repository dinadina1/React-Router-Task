import React from 'react'
import Article from './Article'

const All = ({blogInfo}) => {
  return (
  <>
  <div className="container p-3">
    <div className="row">
    {
        blogInfo.map((blogInfo)=> <Article blogInfo={blogInfo}/>)
    }
    </div>
  </div>
  </>
  )
}

export default All