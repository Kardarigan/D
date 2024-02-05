import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}></Route>
          <Route path='About' element={<About />}></Route>
          <Route path='Skills' element={<Skills />}></Route>
          <Route path='Contact' element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
