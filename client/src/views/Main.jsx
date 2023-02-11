import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import DisplayAll from '../components/DisplayAll';

const Main = () => {
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/all')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data);
                setLoaded(!loaded);
            })
            .catch(err => console.log(err))
    })

    return (
        <div>
            <Routes>
                {/* adding a feature based on likes on homes */}
                <Route path='/' element={<DisplayAll authors={authors} />} />
            </Routes>
        </div>
    )
}

export default Main