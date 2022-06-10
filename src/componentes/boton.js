
import  '../styles/boton.css'
function Boton({texto, bClick, manejarClick}) {
    return(
        <button 
            className={ bClick ?  'boton-click' : 'boton-reiniciar' }
            onClick={manejarClick}>
            {texto}
        </button>
    );

}

export default Boton;