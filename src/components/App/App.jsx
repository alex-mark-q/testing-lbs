import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import List from '../List';
import Search from '../Search';

const data = [
  'HTML',
  'CSS',
  'JS',
  'TS',
  'React',
  'Angular',
  'NodeJS',
  'C#'
];

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <div className = "App">
        <div className = "App-header">
          <Search value = {search} onChange = {(e) => setSearch(e.target.value)}>
            Find course:
          </Search>
          <List items = {data} />
          {/*<List items = {data} >
            {
              data.map(el => {
                <li key = {el}>{el}</li>
              })
            }
          </List>*/}
        </div>
      </div>
    </>
  )
}

export default App;
