import { useState } from 'react';
import './App.css';
import './tailwind.css'
import Navbar from './components/Navbar/navbar';
import About from './components/About/about';
import Product from './components/Product/product';
import Contact from './components/Contact/contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar /> {/* Utilizar el componente Navbar */}
      <About />{/* Utilizar el componente Navbar */}
      <Product />{/* Utilizar el componente Navbar */}
      <Contact />{/* Utilizar el componente Navbar */}
    </>
  );
}

export default App;
