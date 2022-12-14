export function countProps({ prop, withValue, data }) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (withValue === undefined || data[i][prop] === withValue) {
      count++;
    }
  }
  return count;
}

export function sumProps({ prop, withValue, data }) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (withValue === undefined || data[i][prop] === withValue) {
      sum = sum + data[i][prop];
    }
  }
  return sum;
}
