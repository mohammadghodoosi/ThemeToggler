import '../prism.css'
import '../Style.css'
import Highlight, { defaultProps } from "prism-react-renderer";
import demo from 'prism-react-renderer/themes/okaidia'
import styled from "styled-components";



const Code = () => {
  // insert your code here
  const exampleCode = `
  enter your code buddy
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
          
       </div>
       <div className="col-sm-4 order-sm-last order-first">
          <div className="row mb-sm-5 mt-sm-5">
            <h5 className="col border-bottom border-2 text-center mt-sm-5">
              step 1
            </h5>
            <p className="lead  mb-sm-5">
              using react useState to create changable variables
            </p>
          </div><div className="row mb-sm-5 mt-sm-5">
            <h5 className="col border-bottom border-2 text-center mt-sm-5">
              step 2
            </h5>
            <p className="lead mb-sm-5">
              using RegEx to remove special characters like 'space','?','!' and etc
            </p>
          </div><div className="row mb-sm-5 mt-sm-5">
            <h5 className="col border-bottom border-2 text-center mt-sm-5">
              step 3
            </h5>
            <p className="lead  mb-sm-5">
              reversing the phrase and using if statement to see if it is a palindrom or not . data were passed to an object and it was moved to the state
            </p>
          </div>
          <div className="row mb-sm-5 mt-sm-5">
            <div className="col-12 mt-sm-5 mb-sm-5">
              
          </div>
          <div className="col-12 mt-sm-5 mb-sm-5">
              
          </div><div className="col-12 mt-sm-5 mb-sm-5">
              
              </div>
          </div>
          <div className="row mb-sm-5 mt-sm-5">
            <h5 className="col border-bottom border-2 text-center mt-sm-5">
              step 4
            </h5>
            <p className="lead  mb-sm-5">
              using ternary operator to make the massage invisible at first and passing the state into a functional component
            </p>
          </div><div className="row mb-sm-5 mt-sm-5">
            <h5 className="col border-bottom border-2 text-center mt-sm-5">
              step 5
            </h5>
            <p className="lead">
             building the massage and displaying it in the UI
            </p>
          </div>
       </div>
     </div>
   </div>
  </> );
}
 
export default Code;



 