import React, { useEffect } from 'react'
import Cinema from './Cinema/Cinema'
import HomeCarousel from './HomeCarousel/HomeCarousel'
import HomeMenu from './HomeMenu/HomeMenu'

export default function Home(props) {
    return (
        <div>
            <HomeCarousel />
            <HomeMenu />
            <Cinema/>
        </div>
    )
}
