
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container mt-5" >
        {/* <Textform heading ="Enter the text below"/> */}
        <Textform heading ="Enter the text below"/>
      </div>
    </>
  );
}

export default App;
