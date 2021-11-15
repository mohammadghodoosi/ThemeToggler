import React from 'react';
import { ThemeContext } from '../conrext/ThemeContext';
class Part2 extends React.Component {
  static contextType=ThemeContext;
  render() { 
    const {isLightTheme,light,dark}=this.context;
    const Theme=isLightTheme?dark:light;
    return <div className="text" 
    style={{background:Theme.bg,color:Theme.color,fontFamily:Theme.font}}>
      one ring to bring them all.<br/><br/>and bind them in the darkness.</div>;
  }
}
 
export default Part2;