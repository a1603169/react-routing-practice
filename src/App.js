
import './App.css';
import TodoList from './components/TodoList'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/contact">Contact</Link>{' '}
          <Link to="/about">Todolist</Link>{' '}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={TodoList} />
            <Route path="/contact" component={Contact} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
