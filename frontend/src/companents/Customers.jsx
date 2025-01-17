import React, { useContext, useEffect, useState } from 'react'
import { useGetDataQuery } from '../app/Slices/furnishSlice'
import { AiFillLike } from "react-icons/ai";
import { FurnishContext } from '../context/FurnishContext';
import { FaInfoCircle } from 'react-icons/fa';
import { NavLink } from 'react-router';

function Customers() {
    let { data, isLoading } = useGetDataQuery()
    let { fav, setFav } = useContext(FurnishContext)
    let [allData, setAllData] = useState([])


    function handleFav(item) {
        let find = fav.find((custom) => custom._id == item._id)
        if (find) {
            alert("daha once elave olunub")
        }
        else {
            setFav([...fav, item])
        }
    }
    useEffect(() => {
        if (!isLoading) {
            setAllData(data)
        }
    }, [data])
    function handleSearch(inpValue) {

        console.log(allData);
        if (inpValue.trim().toLowerCase() == '') {
            setAllData(data)
        } else {
            let find = data.filter((value) => value.name.toLowerCase().includes(inpValue.trim().toLowerCase()))
            setAllData(find)
        }
    }
    function handleSort(sortValue) {
        let sortedValue =[...allData]
        switch (sortValue) {
            case "default":
                sortedValue = [...data]
                break;
            case "az":
                sortedValue.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case "za":
                sortedValue.sort((a, b) => b.name.localeCompare(a.name))
                break;
            default:
                break;
        }
        setAllData(sortedValue)
    }

    return (
        <div className='Customers'>
            <div className="container">
                <div className="info">
                    <span>Testimonial</span>
                    <h1>Happy Customers</h1>
                </div>
                <div className="sort-search">
                    <div className="search" >
                        <input type="text" placeholder='Search ...' onChange={(e) => handleSearch(e.target.value)} />
                    </div>
                    <div className="sort" onChange={(e) => handleSort(e.target.value)}>
                        <select>
                            <option value="default">Default</option>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                        </select>
                    </div>
                </div>
                <div className="card-wrapper">
                    {
                        isLoading ? (
                            <h1>...isLoading</h1>
                        ) : (
                            allData.map((item) => (
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
                                        <div className="btns" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <button onClick={() => handleFav(item)}><AiFillLike /></button>
                                            <button><NavLink to={`/${item._id}`} style={{ color: "#042b41" }}><FaInfoCircle /></NavLink></button>

                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Customers
