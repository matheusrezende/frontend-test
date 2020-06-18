import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../Components/Header/Header';
import styles from './App.module.css';
import { HOME, ACTIVITY_DETAIL } from '../Constants/Urls';
import ActivityListContainer from '../Screens/ActivityList/ActivityList.container';
import ActivityDetailContainer from '../Screens/ActivityDetail/ActivityDetail.container';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Router>
          <Route path={HOME} exact component={ActivityListContainer} />
          <Route path={ACTIVITY_DETAIL} exact component={ActivityDetailContainer} />
        </Router>
      </div>
    </div>
  );
}
