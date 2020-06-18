export const getURLS = <T>(baseUrl: string, endpoints: { [x: string]: string }): T => Object.keys(endpoints)
  .reduce((acc: {
    [x: string]: string;
  }, item: string) => ({
    ...acc,
    [item]: baseUrl + (endpoints[item]),
  }), {}) as unknown as T;

export type RouteReplacer = (url: string, data: Record<string, string | number>) => string

export const routeReplacer: RouteReplacer = (string, data) => Object.keys(data).reduce((str, item) => str.replace(`:${item}`, data[item].toString()), string);
