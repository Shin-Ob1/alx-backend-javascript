function calculateNumber(type, a, b) {
    const na = Math.round(a);
    const bn = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	c = na + bn;
	break;
    case 'SUBTRACT':
	c = na - bn;
	break;
    case 'DIVIDE':
      if (bn === 0) {
            c = "Error";
      } else {
            c = na / bn;
      }
      break;
    }
    return c;
}

module.exports = calculateNumber;
