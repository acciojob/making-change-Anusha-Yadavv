const makeChange = (c) => {
  // your name here
	const quarterValue = 25;
  const dimeValue = 10;
  const nickelValue = 5;

  // Calculate the number of quarters
  const q = Math.floor(cents / quarterValue);
  cents %= quarterValue;

  // Calculate the number of dimes
  const d = Math.floor(cents / dimeValue);
  cents %= dimeValue;

  // Calculate the number of nickels
  const n = Math.floor(cents / nickelValue);
  cents %= nickelValue;

  // The remaining cents are the number of pennies
  const p = cents;

  return { q, d, n, p };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
