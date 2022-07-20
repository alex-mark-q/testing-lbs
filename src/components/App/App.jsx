import logo from './logo.svg';
import './App.css';
import List from '../List';

const data = [
  'HTML',
  'CSS',
  'JS',
  'TS',
  'React',
  'Angular',
  'NodeJS'
];

function App() {
  return (
    <div className = "App">
      <div className = "App-header">
        <List items = {data} />
      </div>
    </div>
  )
}

export default App;
