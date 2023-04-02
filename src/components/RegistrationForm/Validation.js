export function handleValidation(e, setBgc, setWidth) {
  const password = e.target.value;
  let strength = 0;

  const validations = [
    password.length > 5,
    password.length < 13,
    password.search(/\d+/) > -1,
    password.search(/[a-z]+/) > -1,
    password.search(/[A-Z]+/) > -1,
  ];
  strength = validations.reduce((acc, cur) => acc + cur);

  if (password.search(/^[a-zA-Z0-9_-]+$/) !== 0) {
    strength = strength - 1;
  }
  if (password === '') {
    strength = 0;
  }

  switch (strength) {
    case 0:
      setWidth('10');
      setBgc('#ff1b00');
      break;
    case 1:
      setWidth('20');
      setBgc('#ff1b00');
      break;
    case 2:
      setWidth('40');
      setBgc('#ff1b00');
      break;
    case 3:
      setWidth('75');
      setBgc('#ff1b00');
      break;
    case 4:
      setWidth('100');
      setBgc('#ff1b00');
      break;

    case 5:
      setWidth('125');
      setBgc('transparent');
      break;
    default:
      return;
  }
}
