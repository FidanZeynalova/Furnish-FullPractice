import React from 'react'

function Blog() {
    return (
        <div className='Blog'>
            <div className="container">
                <span style={{opacity:".6"}}>Our Blog</span>
                <h1>Recent From Blog</h1>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="left">
                            <img src="https://preview.colorlib.com/theme/furnish/images/image_6.jpg.webp" alt="" />
                        </div>
                        <div className="right">
                            <span style={{color:"#d57624",opacity:"1"}}>Comments</span>
                            <p>Shop the Look Cottage Country Living Room</p>
                            <span>A small river named Duden flows by their place.</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="left">
                            <img src="https://preview.colorlib.com/theme/furnish/images/image_2.jpg.webp" alt="" />
                        </div>
                        <div className="right">
                        <span style={{color:"#d57624",opacity:"1"}}>Comments</span>
                            <p>Shop the Look Cottage Country Living Room</p>
                            <span>A small river named Duden flows by their place.</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="left">
                            <img src="https://preview.colorlib.com/theme/furnish/images/image_4.jpg.webp" alt="" />
                        </div>
                        <div className="right">
                        <span style={{color:"#d57624",opacity:"1"}}>Comments</span>
                            <p>Shop the Look Cottage Country Living Room</p>
                            <span>A small river named Duden flows by their place.</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="left">
                            <img src="https://preview.colorlib.com/theme/furnish/images/image_5.jpg.webp" alt="" />
                        </div>
                        <div className="right">
                        <span style={{color:"#d57624",opacity:"1"}}>Comments</span>
                            <p>Shop the Look Cottage Country Living Room</p>
                            <span>A small river named Duden flows by their place.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
