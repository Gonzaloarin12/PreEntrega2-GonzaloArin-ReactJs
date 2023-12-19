
import './App.css'
import ContenedorDeProductos from './componets/ContedorDeProdcutos/ContenedorDeProductos'
import DetalleDeProducto from './componets/detallesDeProductos/detalleDeProductos'
import Navbar from './componets/NavBar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (  
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path='/' element={<ContenedorDeProductos />} />
        <Route path='/productos/:categoriaId' element={<ContenedorDeProductos />} />
        <Route path='/producto/:itemID' element={<DetalleDeProducto />} /> {/* Cambiado de itemsID a itemID */}
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
