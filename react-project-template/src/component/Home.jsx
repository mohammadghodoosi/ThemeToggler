import Logo from '../img/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import '../Style.css';
import {useHistory} from 'react-router-dom'




const Home = () => {
  const history=useHistory()

  const clickH=()=>{
    history.push('/App')
  }
  return ( <>
   <div className="container mb-5 mt-0">
     <div className="row row-cols-1 row-cols-sm-2  mb-5  gx-5">
          {/* room for explanation about the app */}


          {/* column 1 */}
         <div className="col-sm-12 mt-0">
          <div className="row">
           {/* project name */}
            <div className="col-sm-6  order-2 order-sm-1  mt-0">
            <h2 className="lh-1 mb-3 mt-5 mt-sm-0">theme toggler</h2>
            <p className="lead">ThemeToggler is a simple react project to show my basic skills in react. There is a button in the app page which changes the theme of the page by being clicked.</p>
            </div>
          {/* project logo */}
           <div className="col-sm-6 order-1 order-sm-2 mt-0 h-50"> <img src={Logo}  height='150' width='300' className='d-flex justify-content-right img-fluid mx-auto ml-5'/></div>
           </div>
         </div>
    

     

        {/* column 2 */}
             <div className="col-sm-12">
              <div className="row gx-5 d-flex justify-content-between">
              {/* project skills */}
              <div className="col-sm-6 order-4 mb-5 mb-sm-5 d-flex flex-column">
                <h5 className='border-bottom border-3 text-center'>skills required</h5>
                 <ul className="fa-ul pt-2 checklist">
                       
                       <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>React Class Components</li>
                       <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>React Context</li>
                       <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>React Event Handlers</li>
                       <li><span className="fa-li"><FontAwesomeIcon icon={faCheckSquare} /></span>CSS and Bootstrap Responsive Layout</li>
                   </ul>
                      <button className="text-center mt-4 btn-outline-dark btn  px-2 me-md-2 py-2 " onClick={clickH}>Try the APP</button>
              </div>
             {/* project tech */}
               <div className="col-sm-4 order-3 mt-5">
               <h5 className='border-bottom border-3 text-center'>technologies</h5>
                 <h5 className="fw-bold mt-5">
                   <div className="d-flex justify-content-sm-center">
                    <div className="row gx-3">
                    <div className="col">
                     <li style={{color:' #61dbfb'}}className="fab fa-react fa-4x"></li></div>
                      <div className="col"><li style={{color:'#264de4'}}className="fab fa-css3-alt fa-4x"></li></div>
                       <div className="col"><li style={{color:'#e34c26'}}className="fab fa-html5 fa-4x"></li></div>
                       <div className="col"><li style={{color:'#563d7c'}}className="fab fa-bootstrap fa-4x"></li></div>
                    

                       </div>
                    </div>
                 </h5>
               </div>
             </div>
    
       </div>
 

     </div>
     </div>

</>);
}
 
export default Home;