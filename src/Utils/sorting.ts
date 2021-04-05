import { SortingMode, SortingType } from "../Store/types.d";

export const Sort = (
  array: any[],
  property: SortingType,
  sortingMode: SortingMode
) => {
  const mode =
    sortingMode === SortingMode.ASC
      ? property === SortingType.TITLE
        ? ASC
        : DATE_ASC
      : property === SortingType.TITLE
      ? DESC
      : DATE_DESC;
  return array.sort((a, b) => mode(a, b, property));
};

//For strings, numbers...
function DESC(i: any, ii: any, key: any) {
  return i[key] > ii[key] ? -1 : i[key] < ii[key] ? 1 : 0;
}

function ASC(i: any, ii: any, key: any) {
  return i[key] > ii[key] ? 1 : i[key] < ii[key] ? -1 : 0;
}

//Just for dates
function DATE_DESC(i: any, ii: any, key: any) {
  return ii[key] - i[key];
}

function DATE_ASC(i: any, ii: any, key: any) {
  return i[key] - ii[key];
}
