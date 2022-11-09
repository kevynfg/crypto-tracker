export function makeQueryClient() {
  const fetchMap = new Map<string, Promise<any>>();
  return function QueryClient<QueryResult>(name: string, query: () => Promise<QueryResult>): Promise<QueryResult> {
    if (!fetchMap.has(name)) {
      fetchMap.set(name, query());
    }
    return fetchMap.get(name)!;
  };
}
