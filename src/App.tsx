import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import { Tabs } from './Tabs';

const tabs:Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <>
    <nav>
      <NavLink to='/' exact>Home</NavLink>
      <NavLink to='/tabs'>Tabs</NavLink>
    </nav>
    <Route path='/' exact >
      <p>Home Page</p>
    </Route>
    <Route path='/tabs/:tabId?' >
      <Tabs tabs={tabs} currentTabId="tab-2"/>
    </Route>
  </>
);

export default App;
