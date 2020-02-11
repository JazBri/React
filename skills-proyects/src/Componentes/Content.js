import React, {useState} from 'react';
import Inputs from './Inputs';
// import Header from './Header';



const Content = () => {
    //Definir el state
    // const [select, guardarSelect] = useState('');
    const [tech, setTech] = useState('');
    // const [mostrar, guardarMostrar] = useState(false);
    const [mostrarC1, guardarMostrarC1] = useState(false);
    const [mostrarC2, guardarMostrarC2] = useState(false);
    const [mostrarC3, guardarMostrarC3] = useState(false);
    const [mostrarC4, guardarMostrarC4] = useState(false);
    const [mostrarC5, guardarMostrarC5] = useState(false);


    const inicio = ( e ) => {
        const select = e.target.value
        //guardarSelect(e.target.value)
        
        guardarMostrarC1(false);     
        guardarMostrarC2(false);     
        guardarMostrarC3(false);     
        guardarMostrarC4(false);     
        guardarMostrarC5(false); 

        if(select === "CARD1"){
            guardarMostrarC1(true);
        }else if(select === "CARD2"){
            guardarMostrarC2(true);
        }else if(select === "CARD3"){
            guardarMostrarC3(true);
        }else if(select === "CARD4"){
            guardarMostrarC4(true);
        }else if(select === "CARD5"){
            guardarMostrarC5(true);
        }   
        console.log(select);
        setTech( select )
    }

    const mostrarCards = () =>{
        guardarMostrarC1(true);     
        guardarMostrarC2(true);     
        guardarMostrarC3(true);     
        guardarMostrarC4(true);     
        guardarMostrarC5(true); 

    }

    return ( 
            <>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#"
                            onClick ={mostrarCards}
                        ></a>
                    </li>
                </ul>

        
{/* COLUMNA */}
            <h2 className="titulo">LANGUAGES & TECHNOLOGIES</h2>
            <div className="columna">
                <div className = "infoPersonal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className = "infoPersonal">{tech}</div>
            
{/* SEARCH */}
            <form>
                <div className="form-group">      
                    <select className="form-control" id="exampleFormControlSelect1"
                        onClick ={inicio}  
                        // onClick ={ e=> guardarSelect(e.target.value)}
                    >           
                        <option>CARD1</option>
                        <option>CARD2</option>
                        <option>CARD3</option>
                        <option>CARD4</option>
                        <option>CARD5</option>
                    </select>
                </div>
            
            <div className="container">
            <Inputs
                //guardarSelect = {guardarSelect}
                // select = {select}  
            />
                </div>
                
            </form>


{/* BOTONES */}

            <div className="btn-group btn-group-toggle" data-toggle="buttons"/>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="option1" /> Frontend
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="option2"/> Backend
                </label>
            </div>




{/* // CARDS */}

            <div className="card-group">
                {(mostrarC1) ? 
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="#" className="card-title">CARD 1 (al llamarme cambia la página)</a>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        
                    </div>
                : null}


                {(mostrarC2) ? 
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="#" className="card-title">CARD 2</a>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                : null}
                
                
                {(mostrarC3) ? 
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="#" className="card-title">CARD 3</a>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                : null}


                {(mostrarC4) ? 
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="#" className="card-title">CARD 4</a>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                : null}


                {(mostrarC5) ?
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <a href="#" className="card-title">CARD 5</a>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                : null}
            </div>
        </>
    );
}

export default Content;