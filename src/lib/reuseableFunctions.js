export const shuffleDays = () => {
  let arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let today = new Date().toString().slice(0, 3);
  switch (today) {
      case 'Sun':
          arr = arr;
          break;
      case 'Mon':
          arr = ['Tonight', 'Tomorrow', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          break;
      case 'Tue':
          arr = ['Tonight', 'Tomorrow', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];
          break;
      case 'Wed':
          arr = ['Tonight', 'Tomorrow', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'];
          break;
      case 'Thu':
          arr = ['Tonight', 'Tomorrow', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
          break;
      case 'Fri':
          arr = ['Tonight', 'Tomorrow', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
          break;
      case 'Sat':
          arr = ['Tonight', 'Tomorrow', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  }
  return arr;
}

export const getDayTitle = () => {
    let d = new Date().toString();
    let e = d.slice(0, 3);
    return e;
}
