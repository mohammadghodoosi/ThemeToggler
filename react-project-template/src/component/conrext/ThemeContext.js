import React,{Component, createContext} from 'react';
export const ThemeContext=createContext();
class ThemeContextProvider extends Component{
  state={
    isLightTheme:true,
    light:{bg:"white",color:"green",font:"'PT Sans', sans-serif"},
    dark:{bg:"black",color:"yellow",font:"'Philosopher', sans-serif"}
  }
  toggleTheme=()=>{
   this.setState((prevState)=>{return {isLightTheme:!prevState.isLightTheme}});
  }
  render(){
    return( 
      <ThemeContext.Provider value={{...this.state,toggleTheme:this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }

}
export default ThemeContextProvider;
