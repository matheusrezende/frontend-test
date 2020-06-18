import { getURLS } from '../Helpers/UrlHelpers';
import { Environment } from '../Config/Environment.config';

const endpoints = {
  ACTIVITIES_LIST: '/activities',
  ACTIVITIES_DETAIL: '/activities/:id',
};

type Endpoints = typeof endpoints;

export const ENDPOINTS = getURLS<Endpoints>(Environment.API_URL as string, endpoints);
