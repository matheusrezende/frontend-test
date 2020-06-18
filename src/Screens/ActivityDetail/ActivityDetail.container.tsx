import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useRequest } from '../../Hooks/useRequest/useRequest';
import { ENDPOINTS } from '../../Constants/Endpoints';
import { Activity } from '../../Models/Activity.model';
import ActivityDetail from './ActivityDetail';

interface MatchParams {
  id: string;
}
export default function ActivityDetailContainer() {
  const match = useRouteMatch<MatchParams>();
  
  const {
    isLoading, request, response, error,
  } = useRequest<Activity>({url: ENDPOINTS.ACTIVITIES_DETAIL, params: {id: match.params.id}});

  const [currentTab, setTab] = useState<number>(0);
  useEffect(() => {
    request();
    //eslint-disable-next-line
  }, []);

  return <ActivityDetail isLoading={isLoading} activity={response} error={error} currentTab={currentTab} setTab={setTab} onArchiveSuccess={request} />;
}
