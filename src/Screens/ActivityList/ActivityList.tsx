import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import { Activity } from '../../Models/Activity.model';
import ActivityItem from '../../Components/ActivityItem/ActivityItem';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import styles from './ActivityList.module.css';

interface ActivityListProps {
  isLoading: boolean;
  activities: Activity[] | null;
  error: any
  currentTab: number;
  setTab: (x: number) => void
}

export default function ActivityList({isLoading, activities, error}: ActivityListProps) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>something went wrong</div>;
  }

  const filteredCalls = activities?.filter((item) => !item.is_archived);

  return (
    <>
      <Tabs>
        <TabList className={styles.tabList}>
          <Tab className={styles.tabItem} selectedClassName={styles.tabItemSelected}>Inbox</Tab>
          <Tab className={styles.tabItem} selectedClassName={styles.tabItemSelected}>Outgoing</Tab>
          <Tab className={styles.tabItem} selectedClassName={styles.tabItemSelected}>Incoming</Tab>
        </TabList>
        <TabPanel>
          <ul>
            {filteredCalls?.map((item, index) => <ActivityItem key={index} {...item} />)}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul>
            {filteredCalls?.filter((item) => item.direction === 'inbound').map((item, index) => <ActivityItem key={index} {...item} />)}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul>
            {filteredCalls?.filter((item) => item.direction === 'outbound').map((item, index) => <ActivityItem key={index} {...item} />)}
          </ul>
        </TabPanel>
      </Tabs>
    </>
  );
}
