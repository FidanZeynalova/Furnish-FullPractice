import React from 'react'
import { RiPlayReverseLargeFill } from "react-icons/ri";

function Quality() {
  return (
    <div className='Quality'>
      <div className="image">
        <img src="https://preview.colorlib.com/theme/furnish/images/bg_4.jpg.webp" alt="" />
        </div>
        <div className="context">
          <p>About Furnish</p>
          <h1>Quality Makes the Belief for Customers</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <div className="watch">
            <span style={{color:"white",backgroundColor:"#d57624",width:"70px",height:"70px",borderRadius:"50%",padding:"20px",fontSize:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}><RiPlayReverseLargeFill /></span> <span style={{color:"#d57624",fontSize:"20px"}}>Watch Video</span>
          </div>
        </div>

    </div>
  )
}

export default Quality
