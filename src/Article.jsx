import React from 'react'

const Article = ({ blogInfo }) => {
    return (
        <div className="col-lg-3 col-md-6 ">
            <div className="card mt-4 border-1 position-relative" style={{ width: "auto", Height: "auto" }}>
                <a href={blogInfo.referenceURL} target='_blank'>
                    <img src={blogInfo.imageURL} className="card-img-top" alt={blogInfo.domain} />
                </a>
                <div className="card-body">
                    <p className="card-title" >{blogInfo.title}</p>
                    <div className=' position-absolute' style={{ bottom: "5px" }}>
                        <p className='card-text mb-2 ms-2' style={{ color: "#707070" }}><span style={{ color: "#aaa" }}>By</span> {blogInfo.postedBy}</p>
                        <div className='d-flex justify-content-between' style={{ color: "#707070" }}>
                            <p className='ms-2 me-3'>{blogInfo.postedOn}</p>
                            <p className=' ms-5'>{blogInfo.readTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article