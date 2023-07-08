import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LeftBox from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

      <Header />
      <LeftBox />
      <Content />
      <Footer />

    </div>
  );
}



export default App;
