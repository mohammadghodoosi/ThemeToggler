import '../prism.css'
import '../Style.css'
import Highlight, { defaultProps } from "prism-react-renderer";
import demo from 'prism-react-renderer/themes/okaidia'
import styled from "styled-components";



const Code = () => {
  // insert your code here
  const exampleCode = `
  import React,{Component, createContext} from 'react';
export const ThemeContext=createContext();
class ThemeContextProvider extends Component{
  state={
    isLightTheme:true,
    light:{bg:"white",color:"green",font:"'PT Sans', sans-serif"},
    dark:{bg:"black",color:"yellow",font:"'Philosopher', sans-serif"}
  }
  toggleTheme=()=>{
   this.setState((prevState)=>
   {return {isLightTheme:!prevState.isLightTheme}});
  }
  render(){
    return( 
      <ThemeContext.Provider 
      value={{...this.state,toggleTheme:this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }

}
export default ThemeContextProvider;

     `.trim();
     const exampleCode2 = `
     <Route path='/App'>
     <ThemeContextProvider>
       <Application/>
     </ThemeContextProvider>
   </Route>
        `.trim();
const exampleCode3 = `
import React from 'react';
import { ThemeContext } from '../conrext/ThemeContext';
class Part1 extends React.Component {
    static contextType=ThemeContext;
    render() { 
        const {isLightTheme,light,dark}=this.context;
        const Theme=isLightTheme?light:dark;
        return <div 
        className="text"
        style={{background:Theme.bg,
          color:Theme.color,fontFamily:Theme.font}}>
               one ring to rull them all.<br/>
               <br/><br/>one ring to find them.
               </div>;
          }
        }
        
        export default Part1;
           `.trim();
const exampleCode4 = `
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
                 <button className="btn btn-block col-2 bg-success border" 
                 onClick={toggleTheme}>ThemeToggler</button>
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
              `.trim();

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
  color:white
`;

const LineContent = styled.span`
  display: table-cell;
`;
  return ( <>
   <div className="container py-5 px-5">
     <h3 className="border-1 border-bottom border-dark pb-3 text-end">code of T<span>ac</span>O<span>ca</span>T</h3>
     <div className="row  row-cols-1 row-cols-sm-2">
       <div className="col-sm-8">
          
        <Highlight 
        {...defaultProps}  
        code={exampleCode} 

        theme={demo}
        language="js">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
             <Pre className={className} style={style}>
              {tokens.map((line, i) => (
               <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
               <LineContent>
               {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
               ))}
               </LineContent>
               </Line>
        ))}
      </Pre>
    )}
  </Highlight>
  
  <Highlight 
        {...defaultProps}  
        code={exampleCode2} 

        theme={demo}
        language="js">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
             <Pre className={className} style={style}>
              {tokens.map((line, i) => (
               <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
               <LineContent>
               {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
               ))}
               </LineContent>
               </Line>
        ))}
      </Pre>
    )}
  </Highlight>
  <Highlight 
        {...defaultProps}  
        code={exampleCode4} 

        theme={demo}
        language="js">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
             <Pre className={className} style={style}>
              {tokens.map((line, i) => (
               <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
               <LineContent>
               {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
               ))}
               </LineContent>
               </Line>
        ))}
      </Pre>
    )}
  </Highlight>
  <Highlight 
        {...defaultProps}  
        code={exampleCode3} 

        theme={demo}
        language="js">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
             <Pre className={className} style={style}>
              {tokens.map((line, i) => (
               <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
               <LineContent>
               {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
               ))}
               </LineContent>
               </Line>
        ))}
      </Pre>
    )}
  </Highlight>
  
       </div>
       <div className="col-sm-4 order-sm-last order-first">
          <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
              in this component we create a context which passes three value and a function which change one of those values.
            </p>
          </div>
          <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
            </p>
          </div>  <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
            </p>
          </div>  <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
            </p>
          </div>  <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
            </p>
          </div>
     
          <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
            we pass our context to application component

            </p>
          </div>
          <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
            </p>
          </div>
          <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
            in this component we create the application component. 
             we lay our two child component.
             we deconstruct the function which change the isLightTheme property.
             we make a button and put an eventHandler inorder to use the function.
            </p>
          </div>
          <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
            </p>
          </div>  <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
            </p>
          </div>  <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
            </p>
          </div>  <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
            </p>
          </div>  
          <div className="row mb-sm-5 mt-sm-5">
            <p className="lead  mb-sm-5">
            in this component we create one of two part of our text.
              we deconstruct elements which was passed from context.
              and use ternary operator to see if it should have dark theme our light theme. 
            </p>
          </div>
          
          
  
       </div>
     </div>
   </div>
  </> );
}
 
export default Code;



 