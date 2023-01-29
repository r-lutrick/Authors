import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Main = () => {
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get()
    })
    
    return (
        <div>

        </div>
    )
}

export default Main