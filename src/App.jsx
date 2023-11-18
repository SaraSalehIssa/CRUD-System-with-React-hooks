import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './components/Users/Index.jsx'
import Details from './components/Users/Details.jsx'
import Edit from './components/Users/Edit.jsx'
import PageNotFound from './components/PageNotFound/PageNotFound.jsx'
import Create from './components/Users/Create.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />}></Route>
      <Route path='/user/index' element={<Index />}></Route>
      <Route path='/user/create' element={<Create />}></Route>
      <Route path='/user/:id' element={<Details />}></Route>
      <Route path='/user/edit/:id' element={<Edit />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  )
}

export default App