import React from 'react';
import {FiPhoneOutgoing, FiPhoneIncoming} from 'react-icons/fi';
import format from 'date-fns/format';
import { useHistory } from 'react-router-dom';
import { Activity } from '../../Models/Activity.model';
import styles from './ActivityItem.module.css';
import { routeReplacer } from '../../Helpers/UrlHelpers';
import { ACTIVITY_DETAIL } from '../../Constants/Urls';

interface ActivityItemProps extends Activity {}

export default function ActivityItem({
  from, to, direction, created_at, id,
}: ActivityItemProps) {
  const history = useHistory();
  return (
    <li className={styles.listItem} onClick={() => history.push(routeReplacer(ACTIVITY_DETAIL, {id}))}>
      {direction === 'inbound' ? <FiPhoneIncoming /> : <FiPhoneOutgoing />}
      <div className={styles.callDetailsWrapper}>
        <div className={styles.callDetails}>
          <p>{from}</p>
          <p>{to}</p>
        </div>
        <span>{format(new Date(created_at), 'MMM, d - HH:mm')}</span>
      </div>
    </li>
  );
}
