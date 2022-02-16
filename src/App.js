import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import { useEffect , useState} from 'react';



function App() {
const [favoriteList, setFavoriteList] = useState();

const fetchData = async () => {
  try{
    const response = await fetch(`${process.env.REACT_APP_SERVER}/addMovie`);

    const data = await response.json();
    setFavoriteList(data)
  } catch(err) {
    console.log("err", err);
  }
}


useEffect(()=>{
  fetchData();
},[])





return (
  <>
  <Header/>
  <Routes>
    <Route path="/trending" element={<Home />} />
    {/* <Route path="/addMovie" element={<ModalMovie/>} /> */}
    <Route/>
  </Routes>
  </>
);
}



export default App;
