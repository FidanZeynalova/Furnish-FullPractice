import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useGetDataQuery } from '../app/Slices/furnishSlice'
import { FurnishContext } from '../context/FurnishContext'
import { AiFillDislike } from 'react-icons/ai'
import { NavLink } from 'react-router'

function Wishlist() {
    let { isLoading } = useGetDataQuery()
    let { fav, setFav } = useContext(FurnishContext)


    function handleDelete(item) {
        let del = fav.filter((element) => element._id != item._id)
        setFav(del)
    }
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="https://is.gd/d38DbB" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Wishlist Pages</title>
            </Helmet>
            <div className="Wishlist">
                <div className="container">
                    <div className="info">
                        <span>Testimonial</span>
                        <h1>Wishlist Customers</h1>
                    </div>
                    <div className="card-wrapper">
                        {
                            isLoading ? (
                                <h1>...isLoading</h1>
                            ) : (
                                fav.length == 0 ? (
                                    <button style={{
                                        cursor: "pointer", backgroundColor: "#d57624", color: "white", padding: "10px", fontSize: "20px", borderRadius
                                            : "10px"
                                    }}> <NavLink style={{ color: "white" }} to={"/"} >Go Back</NavLink> </button>
                                ) : (
                                    fav.map((item) => (
                                        <div className="card" key={item._id}>
                                            <span>{item.desc}</span>
                                            <div className="head">
                                                <div className="text">
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="content">
                                                    <p>{item.name}</p>
                                                    <span>{item.work}</span>
                                                </div>
                                                <button onClick={() => handleDelete(item)}><AiFillDislike /></button>

                                            </div>
                                        </div>
                                    ))
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist
