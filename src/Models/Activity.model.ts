export interface Activity {
  id: number;
  created_at: string;
  direction: string;
  from: string;
  to: string;
  via: string;
  duration: string;
  is_archived: boolean;
  call_type: string;
}
