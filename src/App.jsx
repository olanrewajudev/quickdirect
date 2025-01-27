import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GeneralRoutes } from './Components/Routes'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {GeneralRoutes.map((route, index) => (
            <Route key={index} path={`/${route.path}`} element={<route.element />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
