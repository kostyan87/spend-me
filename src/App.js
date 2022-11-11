import c from './App.module.css';
import CurrentMonth from './components/current/CurrentMonth';
import Header from './components/Header';

function App() {
  return (
    <div className={c.container}>
      <Header />
      <CurrentMonth />
    </div>
  );
}

export default App;
