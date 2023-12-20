import { makeStyles } from '@material-ui/core';
import Homepage from './Pages/HomePage';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinPage from './Pages/CoinPage';
import Header from './components/Header';
import Footer from './components/Footer';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh',
  },
}));

function App() {
  const isLoggedIn = localStorage.getItem('logged-in');
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        {isLoggedIn && <Header />}
        <Route path='/' component={Homepage} exact />
        <Route path='/coins/:id' component={CoinPage} exact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
