import './App.css';
import Widget1 from './componentes/Widget1';
import Widget2 from './componentes/Widget2';
import Widget3 from './componentes/Widget3';
import Widget4 from './componentes/Widget4';
import Widget5 from './componentes/Widget5';
import Widget6 from './componentes/Widget6';
import Widget7 from './componentes/Widget7';


function App() {
  return (
    <div className="App">
      <h1>Tienda de Widgets en React</h1>
      <div className='row'>
        <Widget1 />
        <Widget2 />
        <Widget3 />
        <Widget4 />
      </div>
      <div className='row'>
        <Widget5 />
        <Widget6 />
        <Widget7 />
        <Widget4 />
      </div>

    </div>
  );
}

export default App;
