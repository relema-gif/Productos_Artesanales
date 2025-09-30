
// import { useEffect, useState } from 'react';
// import API from './services/api'; 
import './App.css' 

function App() {
  // Eliminamos o comentamos la lógica de conexión
  
  // AÑADIMOS LA ESTRUCTURA JSX DEL MARKETPLACE
  return (
    <div className="marketplace-container">
      
      {/* ENCABEZADO */}
      <header className="main-header">
        <h1>Manos Libres: Mercado Artesanal</h1>
        <nav className="nav-menu">
          <a href="#">Catálogo</a>
          <a href="#">Artesanos</a>
          <a href="#">Contacto</a>
          <a href="#" className="cart-link">Carrito (0)</a>
        </nav>
      </header>

      {/* PRODUCTOS DESTACADOS */}
      <main className="product-grid">
        <h2>Últimas Creaciones</h2>
         
        {/* TARJETA DE PRODUCTO 1 */}
        <div className="product-card">
          <img src="/tazon.jpeg" alt="Tazón de barro bruñido" className="product-image"/> {/* ¡AGREGADO! */}
          <p className="product-type">Cerámica</p>
          <h3>Tazón de Barro Bruñido</h3>
          <p>Pieza única con esmalte natural y textura rústica.</p>
          <span className="price">$35 USD</span>
        </div>
        
        {/* TARJETA DE PRODUCTO 2 */}
        <div className="product-card">
          <img src="/bufanda.jpeg" alt="Bufanda de alpaca tejida" className="product-image"/> {/* ¡AGREGADO! */}
          <p className="product-type">Textil</p>
          <p className="product-type">Textil</p>
          <h3>Bufanda de Alpaca Teñida a Mano</h3>
          <p>Lana suave con diseño geométrico andino.</p>
          <span className="price">$65 USD</span>
        </div>
        
        {/* Puedes añadir más tarjetas product-card */}

      </main>

      {/* PIE DE PÁGINA */}
      <footer className="main-footer">
        <p>© {new Date().getFullYear()} Manos Libres. Creaciones con alma.</p>
      </footer>
      
    </div>
  );
}

export default App;
