import React from 'react';
import { FiPhoneIncoming, FiPhoneOutgoing } from 'react-icons/fi';
import { format } from 'date-fns';
import { Activity } from '../../Models/Activity.model';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import styles from './ActivityDetail.module.css';
import ArchiveButtonContainer from '../../Components/ArchiveButton/ArchiveButton.container';

interface ActivityListProps {
  isLoading: boolean;
  activity: Activity | null;
  error: any
  currentTab: number;
  setTab: (x: number) => void
  onArchiveSuccess: () => void;
}

export default function ActivityDetail({
  isLoading, activity, error, onArchiveSuccess,
}: ActivityListProps) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>something went wrong</div>;
  }

  if (!activity) {
    return null;
  }

  return (
    <div className={styles.activityDetailWrapper}>
      <p>
        {activity.direction === 'inbound' ? <FiPhoneIncoming size={20} /> : <FiPhoneOutgoing size={20} />}
        <span>
          {' '}
          {activity.direction}
        </span>
      </p>
      <p>
        From:
        {' '}
        <span>{activity.from}</span>
      </p>
      <p>
        To:
        {' '}
        <span>{activity.to}</span>
      </p>
      <p>
        Via:
        {' '}
        <span>{activity.via}</span>
      </p>
      <p>
        Duration:
        <span>
          {activity.duration}
          {' '}
          seconds
        </span>
      </p>
      <p>
        Date and Time:
        {' '}
        <span>{format(new Date(activity.created_at || ''), 'MMM, d - HH:mm')}</span>
      </p>
      <ArchiveButtonContainer activity={activity} onArchiveSuccess={onArchiveSuccess} />
    </div>
  );
}
