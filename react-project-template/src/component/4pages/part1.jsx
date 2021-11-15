import React from 'react';
import { ThemeContext } from '../conrext/ThemeContext';
class Part1 extends React.Component {
  static contextType=ThemeContext;
  render() { 
    const {isLightTheme,light,dark}=this.context;
    const Theme=isLightTheme?light:dark;
    return <div 
    className="text"
     style={{background:Theme.bg,color:Theme.color,fontFamily:Theme.font}}>
       one ring to rull them all.<br/><br/><br/>one ring to find them.</div>;
  }
}

export default Part1;