import React, {useState} from 'react';
import Inputs from './Inputs';
import Header from './Header';
import { render } from '@testing-library/react';



const Content = () => {
    //Definir el state
    //const [select, guardarSelect] = useState('');
    const [tech, setTech] = useState('');
    // const [mostrar, guardarMostrar] = useState(false);
    const [mostrarC1, guardarMostrarC1] = useState(true);
    const [mostrarC2, guardarMostrarC2] = useState(true);
    const [mostrarC3, guardarMostrarC3] = useState(true);
    const [mostrarC4, guardarMostrarC4] = useState(true);
    const [mostrarC5, guardarMostrarC5] = useState(true);


    const inicio = ( e ) => {
        const select = e.target.value
        //guardarSelect(e.target.value)
        
        //this.setState({mostrarC1: false})
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



    function Cards (id, text, textMuted){
        this.id = id;
        this.text = text;
        this.textMuted = textMuted;
    }
    
    let card1 = new Cards('Card1', 'Hi 1!', 'Its working 1!!');
    let card2 = new Cards('Card2', 'Hi 2!', 'Its working 2!!');
    let card3 = new Cards('Card3', 'Hi 3!', 'Its working 3!!');
    let card4 = new Cards('Card4', 'Hi 4!', 'Its working 4!!');
    let card5 = new Cards('Card5', 'Hi 5!', 'Its working 5!!');

    const cards = [card1, card2, card3, card4, card5];
    const listItems = cards.map((div) => 
        <div className="card">
            <a src="..." className="card-img-top" alt="..."></a>
            <div className="card-body">
                <a href="#" className="card-title">{div.id}</a>
                <p className="card-text">{div.text}</p>
                <p className="card-text"><small className="text-muted">{div.textMuted}</small></p>
            </div>
        </div>
    );


//render(){
    return ( 
            <>
            <Header
                titulo = 'HOLA'
            />
        

        
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
                    <>{listItems[0]}</>
                : null}


                {(mostrarC2) ? 
                <>{listItems[1]}</>
                : null}
                
                
                {(mostrarC3) ? 
                <>{listItems[2]}</>
                : null}


                {(mostrarC4) ? 
                <>{listItems[3]}</>
                : null}


                {(mostrarC5) ?
                <>{listItems[4]}</>
                : null} 
            </div>
        </>
    );
}

export default Content;