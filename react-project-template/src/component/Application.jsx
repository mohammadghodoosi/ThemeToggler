import '../Style.css'
import React from 'react';
import { ThemeContext } from '../conrext/ThemeContext';
import Part1 from './4pages/part1';
import Part2 from './4pages/part2';
import Part3 from './4pages/part3';
import Part4 from './4pages/part4';

class Application extends React.Component {
  static contextType=ThemeContext
  render() { 
    const {isLightTheme,light,dark} = this.context;
    const theme=isLightTheme?light:dark;
    return <div>
      <ThemeContext>
    <div className="container mt-5">
    <div className="row text-center gy-5 g-5">
      <div className="col-6 bg-primary p-3 border border-5 border-secondary">
         <Part1/>
      </div>
      <div className="col-6 bg-primary p-3 border border-5 border-secondary">
         <Part2/>
      </div>
      <div className="col-6 bg-primary p-3 border border-5 border-secondary">
         <Part3/>
      </div>
      <div className="col-6 bg-primary p-3 border border-5 border-secondary">
         <Part4/>
    </div>
    </div>
    </div>
    </ThemeContext>
    </div>
   ;
  }
}
export default Application;
