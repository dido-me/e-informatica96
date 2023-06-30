export function removeHtmlTags (str: string) {
  return str.replace(/<[^>]*>/g, '')
}
