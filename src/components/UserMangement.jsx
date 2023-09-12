import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Create from './Create'
import Read from './Read'
import Edit from './Edit'

const UserMangement = () => {
  return (
    <div>
    <Header/>
         <BrowserRouter>
            <Routes>
            <Route path="/" element={<Create />}/>
            <Route path="/read" element={<Read />}/>
            <Route path="/edit" element={<Edit />}/>
            </Routes>
         </BrowserRouter>
    </div>
  )
}

export default UserMangement