export default function filterBySection(array: Array<any>, propertyName: any) {
  var obj: any = {};
  return array.filter(function(item: any) {
    var property = item[propertyName];
    if (obj[property]) {
      return false;
    }
    obj[property] = true;
    return true;
  });
}

export function filterCatalog(array: Array<any>, propertyName: any) {
  var obj: any = {};
  return array.filter(function(item: any) {
    var property = item.section[`${propertyName}`];
    if (obj[property]) {
      return false;
    }
    obj[property] = true;
    return true;
  });
}
