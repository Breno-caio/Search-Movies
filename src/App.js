import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = " http://www.omdbapi.com/?apikey=c66b7a56";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <div className="header--logo">
          <a href="/">
              <img src="https://ik.imagekit.io/brenorocha/logo_ZcRa0DtL3s6O.png" alt="Logo"/>                
          </a>
        </div>
        <main>
          <Search handleInput={handleInput} search={search} />
        </main>
      </header>    
      
      <Results results={state.results} openPopup={openPopup} />  

      {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}  
    </div>
  );
}

export default App;
