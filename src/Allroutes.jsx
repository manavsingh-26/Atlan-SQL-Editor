import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Editor from './Pages/Editor'
import Landing from './Pages/Landing'

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/editor' element={<Editor />} />
        </Routes>
    )
}

export default Allroutes