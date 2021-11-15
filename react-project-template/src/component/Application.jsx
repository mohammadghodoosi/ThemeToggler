import '../Style.css'
import React from 'react';
import Part1 from './4pages/part1';
import Part2 from './4pages/part2';
import { ThemeContext } from './conrext/ThemeContext';


class Application extends React.Component {
   static contextType=ThemeContext
  render() { 
     const{toggleTheme}=this.context;
    return <div>
    <div className="container mt-5">
    <div className="row text-center">
      <div className="col-5 bg-dark border border-5 border-dark">
         <Part1/>
      </div>
      <button className="btn btn-block col-2 bg-success border" onClick={toggleTheme}>ThemeToggler</button>
      <div className="col-5 border border-5 border-dark bg-dark">
         <Part2/>
      </div>
     </div>
     </div>
     </div>
   ;
  }
}
export default Application;
