import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundElements from './components/BackgroundElements';
import './App.css'; // Your global styles remain here

const App = () => {
  return (
    <div className="landing-wrapper">
      <BackgroundElements />
      <div className="container">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default App;