const STATIC_URL = process.env.NEXT_PUBLIC_STATIC_URL;

export function getImageUrl(uuid: string, fileName?: string) {
  if (fileName) {
    return `${STATIC_URL}${uuid}/${fileName}`;
  }
  return `${STATIC_URL}${uuid}`;
}
