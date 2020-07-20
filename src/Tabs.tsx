import React, { FC, } from 'react';
import {
  Route,
  NavLink,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';

interface Props {
  tabs: Tab[]
  currentTabId: string
}

export const Tabs:FC<Props> = ({ tabs, currentTabId }) => {
  const { params } = useRouteMatch<{tabId: string}>();

  if (!params.tabId) {
    return <Redirect to={`/tabs/${currentTabId}`} />;
  }

  const currentTab = tabs.find(
    tab => tab.id === params.tabId
  );

  return (
    <>
      <nav>
        {tabs.map(tab => (
          <NavLink to={`/tabs/${tab.id}`} key={tab.id}>
            {tab.title}
          </NavLink>
        ))}
      </nav>
      <Route path={`/tabs/:tabId`} >
        {currentTab && (
          <p>
            {currentTab.content}
          </p>
        )}
      </Route>
    </>
  );
}
