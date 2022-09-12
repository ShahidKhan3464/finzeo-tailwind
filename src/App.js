import Header from './components/header/Header'
import Hero from './components/hero/Hero';
import Partners from './components/partners/Partners';
import Payment from './components/payment-platform/Payment';
import Toolkit from './components/toolkit/Toolkit';
import Transaction from './components/transaction/Transaction';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Partners />
      <Payment />
      <Toolkit />
      <Transaction />
      <Footer />
    </div>
  );
}

export default App;