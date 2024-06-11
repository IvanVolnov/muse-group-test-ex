import './App.css';
import LeadForm from './components/LeadForm';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>Logo</header>
      <main>
        <LeadForm />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
