import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rose-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
