export default function cleanStr(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "");
}
