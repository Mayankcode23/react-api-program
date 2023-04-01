// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Update from './component/Update';
import AddData from './component/AddData';
import Edit from './component/Edit';
// import Home from './component/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<Update/>}/>
        <Route path='/adddata' element={<AddData/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
