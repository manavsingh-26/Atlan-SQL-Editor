import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Allroutes from './Allroutes';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Allroutes />
    </BrowserRouter>




  );
}

export default App;
