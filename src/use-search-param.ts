export function useSearchParam(key: string){
    const { searchParams } = new URL(location.toString());
    return searchParams.get(key) ?? undefined;
}