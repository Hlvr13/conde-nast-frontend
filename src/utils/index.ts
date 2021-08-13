export const convertObjToFilterStr = (obj: { [key: string]: string }): string =>
  JSON.stringify(obj)
    .replace(/[{}]|/gm, '')
    .split(',')
    .map((query) => query.replace(/^(")(.*?)(")(:)/gm, '$2$4'))
    .join(',');
