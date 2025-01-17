import React from 'react'
import { Helmet } from 'react-helmet'
import Home from '../companents/Home'
import Customers from '../companents/Customers'
import Feature from '../companents/Feature'
import Quality from '../companents/Quality'
import Blog from '../companents/Blog'

function Main() {
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="https://is.gd/2tMrLZ" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Furnish Pages</title>
            </Helmet>
            <Home />
            <Feature />
            <Quality />
            <Customers />
            <Blog />
        </>
    )
}

export default Main
