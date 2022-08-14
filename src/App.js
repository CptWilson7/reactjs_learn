// parent component
import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import MainLayouts from './components/layouts/main.layouts';
import Albums from './components/Albums/main.albums';
import {BrowserRouter as Router,  Routes, Route, BrowserRouter} from "react-router-dom"


const App = () => {
  // const [getLimit, setLimit] = useState(1);
  // const [getMyName, setMyName] = useState('Wilson');
  // const inputNameRef = useRef(getMyName)


  // useEffect(() => {
  //   setMyName(inputNameRef.current.value)
  // }, [getLimit])

    // <center>
    // {getMyName}
    // {getLimit}
    // <br/>
    // <input defaultValue={inputNameRef.current} ref={inputNameRef}/>
  //   <button onClick={() => setLimit((prev) => prev+1)}>naikan limit</button>
  //   <button onClick={() => setLimit((prev) => prev>1 ?prev-1:prev=0)}>turunkan limit</button>
  //  </center>  <Testing title="Hello bang" description = "test 123"/> 
  return (
  <>
  <MainLayouts>
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/posts" element={<h1>Posting</h1>}/>
        <Route path="/albums" element={<Albums/>}/>
        <Route path="*" element={<h1 className='text-center text-danger'>404 NOT FOUND</h1>}/>
      </Routes>
    </Router>
  </MainLayouts>
  </>
  )
}

export default App;
