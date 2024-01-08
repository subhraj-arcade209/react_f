
import './App.css';
import Header from'./Header.js';
import Products from'./Products.js';
import { useState } from 'react';


function App() {


  let[name,setName] = useState("Subhra");
  let[name2,setName2] = useState("dummy");

  let countries =[{name:"India",capital:"New Delhi"},{name:"South Africa",capital:"Cape town"},{name:"New Zeland",capital:"Wellington"}]

  function changeData(){
    setName("Thor")
  }

  function doSomething(data){
    console.log("hello i am clicked "+data)
  }
  function doAthing(){
    console.log("hello i am hurt ")
  }
  return (

    <div className="App">

      <header className="App-header">


        <Header></Header>
        <h3>{name2}</h3>
        <input type='text' placeholder='Enter Name' onChange={(event)=>{setName2(event.target.value);}}/>
        <Products></Products>
        <h3>{name}</h3>


        <button className='btn' onClick={()=>{
          doSomething("subhra")}}>Click</button>

          <button className='btn' onClick={doAthing}>Click Me</button>

          <button className='btn' onClick={changeData}>Tap</button>

      </header>


      <div className='data'>
        <h3>{countries[0].name}</h3>
        <p>{countries[0].capital}</p>
      </div>
      <div className='data'>
        <h3>{countries[1].name}</h3>
        <p>{countries[1].capital}</p>
      </div>
      <div className='data'>
        <h3>{countries[2].name}</h3>
        <p>{countries[2].capital}</p>
      </div>



      {
        countries.map((country,index) => {
          return (
            <div className='data' key={index}>
              <h3>{country.name}</h3>
              <p>{country.capital}</p>
            </div>

          )
        })
      }


    </div>
  );
}

export default App;
