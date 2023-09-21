export default function updateSearchParams(
  type: string,
  value: string
): string {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  if (!value) {
    searchParams.delete(type);
  }

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
}
