import React, { Component } from 'react';
import Header from 'components/Header';
import Gallery from 'components/Gallery';
import Form from 'components/Form';
import movieList from 'fakeDatabase';
import "./App.css"



class App extends Component {  
  
  render() {    
    return  (
      <div>
        < Header />
        <div className="wrapper">
            < Gallery items = {movieList}/>
            < Form /> 
        </div> 
      </div>
    );
      
  };
}
export default App;