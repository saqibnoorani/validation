export function isString(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object String]';
}
