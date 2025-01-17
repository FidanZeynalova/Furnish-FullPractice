import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, useNavigate, useParams } from 'react-router'
import { useGetDataByIdQuery } from '../app/Slices/furnishSlice'
import { AiFillLike } from 'react-icons/ai'
import { RiArrowGoBackFill } from "react-icons/ri";
import { FurnishContext } from '../context/FurnishContext'

function Detail() {
    let { id } = useParams()
    let { data, isLoading } = useGetDataByIdQuery(id)
    let { fav, setFav } = useContext(FurnishContext)

    function handleFav(data) {
        let find = fav.find((custom) => custom._id == data._id)
        if (find) {
            alert("daha once elave olunub")
        }
        else {
            setFav([...fav, data])
        }
    }
    
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="https://is.gd/LyZLJs" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Detail Pages</title>
            </Helmet>
            <div className="Detail">
            <h1>Detail</h1>
            {
                isLoading ? (
                    <h1>...isLoaging</h1>
                ) : (
                    <div className="card" key={data._id}>
                        <span>{data.desc}</span>
                        <div className="head">
                            <div className="text">
                                <img src={data.img} alt="" />
                            </div>
                            <div className="content">
                                <p>{data.name}</p>
                                <span>{data.work}</span>
                            </div>
                            <div className="btns" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <button onClick={() => handleFav(data)}><AiFillLike /></button>
                                <button><NavLink  style={{ color: "#042b41" }} to={"/"}><RiArrowGoBackFill /></NavLink></button>

                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </>
    )
}

export default Detail
