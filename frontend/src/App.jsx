import './App.css' 
import tazon from "./assets/tazon.jpeg";
import bufanda from "./assets/bufanda.jpeg";
function App() {
  
  return (
    <div className="marketplace-container">
      
      <header className="main-header">
        <h1>Manos Libres: Mercado Artesanal</h1>
        <nav className="nav-menu">
          <a href="#">Catálogo</a>
          <a href="#">Artesanos</a>
          <a href="#">Contacto</a>
          <a href="#" className="cart-link">Carrito (0)</a>
        </nav>
      </header>

      
      <main className="product-grid">
        <h2>Últimas Creaciones</h2>
         
    
        <div className="product-card">
          <img src= {tazon} alt="tazon" className="product-image"/> 
          <p className="product-type">Cerámica</p>
          <h3>Tazón de Barro Bruñido</h3>
          <p>Pieza única con esmalte natural y textura rústica.</p>
          <div className="price">$35 USD</div>
        </div>
        
        
        <div className="product-card">
          <img src= {bufanda} alt="bufanda" className="product-image"/>
          <p className="product-type">Textil</p>
          <h3>Bufanda de Alpaca Teñida a Mano</h3>
          <p>Lana suave con diseño geométrico andino.</p>
          <div className="price">$65 USD</div>
        </div>
        
      </main>

      <footer className="main-footer">
        <p>© {new Date().getFullYear()} Manos Libres. Creaciones con alma.</p>
      </footer>
      
    </div>
  );
}

export default App;
