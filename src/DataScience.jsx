import React from 'react'
import Article from './Article'

const DataScience = ({blogInfo}) => {
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    {
                        blogInfo.filter((blog) => {
                            return blog.domain == "Data Science"
                        }).map((blog) => {
                            return <Article blogInfo={blog} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DataScience