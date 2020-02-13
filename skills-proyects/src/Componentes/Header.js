import React, {Component} from 'react';
import './header.css';
import Content from  './Content';

class Header extends React.Component{
constructor(){
    super()
}
render(){
return (  
        <ul className="nav">
        <li className="nav-item">
            {/* <h1>{props.tutulo}</h1>
             */}
                    <a className="nav-link" href="#"
    //             onClick ={saludo}
                ></a>
        </li>
    </ul>

    )}}

    
// export default ;
// function Header (props) {
//     console.log(props.tutulo);
//     return (  
//         <ul className="nav">
//         <li className="nav-item">
//             <h1>{props.tutulo}</h1>
            
//                     <a className="nav-link" href="#"
//     //             onClick ={saludo}
//                 ></a>
//         </li>
//     </ul>
//     );

export default Header
