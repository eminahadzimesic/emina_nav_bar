import React, { Component } from 'react';
import html from 'index.html';
import css from 'styles.css';

var s = document.getElementById('select').value;
var n = document.getElementById('nav__link').value;
var drop = document.getElementById('deopdown_menu').value;



class App extends Component {
  render() {
  
    if (s='Engleski')
    {
      switch  n {
        case 1: Beauty and You;
        case 2: Healthy Cooking;
        case 3: Outdoor Camping;
        case 4: Activate;
        case 5: Meditation;
       case 7: Cinephiles and Booklovers Corner; 
       case 8: Yesterday Today Tomorrow;



      }
      default break;
      switch drop{
        case 1: Beauty and You;
        case 2: Healthy Cooking;
        case 3: Outdoor Camping;
        case 4: Activate;
        case 5: Meditation;

      }
      
    }
    

    return (nav,drop);
      
  }
}

export default App;