import React, { useEffect, useState } from 'react';
import { useRequest } from '../../Hooks/useRequest/useRequest';
import ActivityList from './ActivityList';
import { ENDPOINTS } from '../../Constants/Endpoints';
import { Activity } from '../../Models/Activity.model';

export default function ActivityListContainer() {
  const {
    isLoading, request, response, error,
  } = useRequest<Activity[]>({url: ENDPOINTS.ACTIVITIES_LIST});

  const [currentTab, setTab] = useState<number>(0);
  useEffect(() => {
    request();
    //eslint-disable-next-line
  }, []);

  return <ActivityList isLoading={isLoading} activities={response} error={error} currentTab={currentTab} setTab={setTab} />;
}
