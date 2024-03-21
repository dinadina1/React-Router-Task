import React from 'react'
import Article from './Article'

const CyberSecurity = ({ blogInfo }) => {
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    {
                        blogInfo.filter((blog) => {
                            return blog.domain == "Cyber Security"
                        }).map((blog) => {
                            return <Article blogInfo={blog} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CyberSecurity