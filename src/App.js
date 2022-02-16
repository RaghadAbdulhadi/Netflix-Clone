import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header'



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/trending" element={<Home/>} />
      {/* <Route path="/addMovie" element={<ModalMovie/>} /> */}
      <Route/>
    </Routes>
    </>
  );
}

export default App;
