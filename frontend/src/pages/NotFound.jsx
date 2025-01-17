import React from 'react'
import { Helmet } from 'react-helmet'

function NotFound() {
  return (
    <>
    <Helmet>
    <link rel="icon" type="image/svg+xml" href="https://is.gd/RY6Q1X" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Error Pages</title>
    </Helmet>
   <h1 style={{fontSize:"100px",display:"flex",alignItems:"center",justifyContent:"center",margin:"300px auto"}}>Error :(</h1> 
  </>
  )
}

export default NotFound
