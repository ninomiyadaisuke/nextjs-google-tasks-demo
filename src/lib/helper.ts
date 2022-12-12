//next/routerで取得したpathを整形
export const getAsString = (value: string | string[] | undefined): string => {
  if (!value) return '';
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
};
