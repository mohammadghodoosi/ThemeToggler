import React,{Component, createContext} from 'react';
export const ThemeContext=createContext();
class ThemeContextProvider extends Component{
  state={
    isLightTheme:false,
    light:{bg:"yellow"},
    dark:{bg:"black"}
  }
  render(){
    return( 
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }

}
export default ThemeContextProvider;
