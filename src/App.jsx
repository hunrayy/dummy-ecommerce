
import Head from './components/Head'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from './components/Product'

function App() {

  return (

    <BrowserRouter>
      <Head />
        <Routes>
          <Route path='/' element={<Product />} />
        </Routes>
    </BrowserRouter>      

  )
}

export default App
