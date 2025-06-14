import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';

function App() {

  let [ name, setName ] =  useState("zin myo latt");
  //  updating our data using state 
  const changeName = () => {
    setName("aung aung");
  }

  return (
    <>
      <Navbar />

      <div>
        <h3> my name is {name} </h3>
        <button onClick={changeName}> change name </button>
      </div>
    </>
  );
}

export default App;
