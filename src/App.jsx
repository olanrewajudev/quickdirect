import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GeneralRoutes } from './Components/Routes'
import Loader from './Components/Loader'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {GeneralRoutes.map((route, index) => (
            <Route key={index} path={`/${route.path}`} element={ <Loader><route.element /></Loader> } />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
