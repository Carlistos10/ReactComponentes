//Primero debemos importar todos los componentes en el archivo principal, con su css correspondiente
import './App.css';
import Widget1 from './componentes/Widget1';
import Widget2 from './componentes/Widget2';
import Widget3 from './componentes/Widget3';
import Widget4 from './componentes/Widget4';
import Widget5 from './componentes/Widget5';
import Widget6 from './componentes/Widget6';
import Widget7 from './componentes/Widget7';
import Widget8 from './componentes/Widget8';


function App() {
  return (
    <div className="App">
      {/* Aqui indicamos el header con su imagen de la herramienta correspondiente */}
      <div className='rowhead header'>
        <p className='titulo'>Tienda de Widgets en React</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
      </div>
      <hr />
      {/* Procedemos a colocar los widget de la forma más optima posible */}
      <div className='row'>
        <Widget2 />
        <Widget1 />
        <Widget3 />
      </div>
      <div className='row'>
        <Widget7 />
        <Widget4 />
        <Widget5 />
      </div>
      <div className='row'>
        <Widget6 />
        <Widget8 />
      </div>
      <div className='row header'>
        <p className='abajo'>Carlos Maranhas Gómez-Choco S2DAW</p>
      </div>
    </div>
  );
}

export default App;
