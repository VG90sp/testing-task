/* eslint-disable linebreak-style */
export default function validate(data) {
  const value = data.trim();
  const newvalue = value.slice(0, -1);
  const control = Number(value[value.length - 1]);
  // eslint-disable-next-line linebreak-style
  let sum = 0;
  let lunachek;
  let payment = '';
  const array = [...newvalue].map((name) => Number(name));
  for (let i = array.length - 1; i >= 0; i -= 2) {
    // eslint-disable-next-line operator-assignment
    array[i] = array[i] * 2;
    if (array[i] > 9) {
      array[i] = Math.trunc(array[i] / 10) + (array[i] % 10);
    }
  }
  array.forEach((elem) => {
    sum += elem;
  });
  sum *= 9;
  if ((sum % 10) === control) {
    lunachek = true;
    // eslint-disable-next-line default-case
    switch (Number(value[0])) {
      case 2:
        payment = 'mir';
        break;
      case 3:
        payment = 'amex';
        break;
      case 4:
        payment = 'visa';
        break;
      case 5:
        payment = 'master';
        break;
      case 6:
        payment = 'discover';
        break;
    }
  } else {
    lunachek = false;
  }
  return [lunachek, payment];
}
