import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useRequest } from '../../Hooks/useRequest/useRequest';
import { ENDPOINTS } from '../../Constants/Endpoints';
import { Activity } from '../../Models/Activity.model';
import Button from '../Button/Button';

interface MatchParams {
  id: string;
}
interface ArchiveButtonContainerProps {
  activity: Activity;
  onArchiveSuccess: () => void;
}
export default function ArchiveButtonContainer({activity, onArchiveSuccess}: ArchiveButtonContainerProps) {
  const match = useRouteMatch<MatchParams>();
  
  const {
    isLoading, request, error, response,
  } = useRequest<Activity>({url: ENDPOINTS.ACTIVITIES_DETAIL, method: 'POST', params: {id: match.params.id}});

  useEffect(() => {
    if (error) {
      // eslint-disable-next-line no-alert
      alert(error);
    }
  }, [error]);

  useEffect(() => {
    if (response) {
      onArchiveSuccess();
    }
  }, [onArchiveSuccess, response]);

  return <Button onClick={() => request({is_archived: true})} disabled={isLoading || activity.is_archived}>ARCHIVE CALL</Button>;
}
