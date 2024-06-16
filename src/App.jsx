import './App.css';
import LeadForm from './components/LeadForm';
import Products from './components/Products';
import Footer from './components/Footer';
import logoSvg from '/logo.svg';

function App() {
  return (
    <div id='layout'>
      <header>
        <img id='logo' src={logoSvg} />
      </header>
      <main id='main_container'>
        <LeadForm />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
