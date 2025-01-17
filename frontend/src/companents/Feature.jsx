import React from 'react'
import { SlSupport } from "react-icons/sl";
import { FaKitchenSet } from "react-icons/fa6";
import { GiModernCity } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";

function Feature() {
    return (
        <div className='Feature'>
            <div className="container">
                <div className="card-wrapper">
                    <div className="card" style={{ backgroundColor: "#f6ebeb" }}>
                        <div className="icon" style={{ backgroundColor: "#d09697", color: "white" }}>
                            <span><SlSupport /></span>
                        </div>
                        <h2>Amazing Deals</h2>
                        <span>Far far away, behind the word mountains, far from the countries Vokalia.</span>
                    </div>
                    <div className="card" style={{ backgroundColor: "#d9ecde" }}>
                        <div className="icon" style={{ backgroundColor: "#7ebf92", color: "white" }}>
                            <span>
                                <FaKitchenSet />
                            </span>
                        </div>
                        <h2>Quality Furniture</h2>
                        <span>Far far away, behind the word mountains, far from the countries Vokalia.</span>
                    </div>
                    <div className="card" style={{ backgroundColor: "#f4f0da" }}>
                        <div className="icon" style={{ backgroundColor: "#cfb859", color: "white" }}>
                            <span> <GiModernCity /></span>
                        </div>
                        <h2>Modern Design</h2>
                        <span>Far far away, behind the word mountains, far from the countries Vokalia.</span>
                    </div>
                    <div className="card" style={{ backgroundColor: "#f5e6d9" }}>
                        <div className="icon" style={{ backgroundColor: "#d59b68", color: "white" }}>
                            <span>
                                <MdOutlineSupportAgent />
                            </span>
                        </div>
                        <h2>Best Support</h2>
                        <span>Far far away, behind the word mountains, far from the countries Vokalia.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
