export function useSearchParam(key: string) {
  const { searchParams } = new URL(window.location.toString());
  return searchParams.get(key) ?? undefined;
}
