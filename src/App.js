// import logo from './logo.svg';
import './App.css';

import DesktopHeader from './Components/DesktopHeader/DesktopHeader';
import Footer from './Components/Footer/Footer';
import Pages from './Pages';

function App() {
  return (
    <div className="App">
      <DesktopHeader/>
      <Pages/>
      <Footer/>
      
    </div>
  );
}

export default App;
