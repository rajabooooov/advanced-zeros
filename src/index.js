module.exports = function getZerosCounter(number, base) {

  let a = [];
  let b = [];


  let zr = 0;
  let counter = 0;
  let ind = 0;

  for (let i = 2; i <= base;) {
    if (base % i === 0) {
      ind = 1;
      ++counter;
      base /= i;
    } else {
      if (ind === 1) {
        a[zr] = i;
        b[zr] = counter;
        ++zr;
      }
      ind = 0;
      counter = 0;
      ++i;
    }
    b[zr] = counter;
    a[zr] = i;
  }
  function getAnsw (a, b) {
    let c = [];
    let j;
    let answer;

    for (let i = 0; i < a.length; i++) {
      j = 1;
      c[i] = 0;

      for (; j <= number;) {
        j *= a[i];
        c[i] += Math.floor(number / j);
      }
    }

    answer = c[0] / b[0];
    for (let i = 0; i < b.length; i++) {
      answer = Math.min(answer, Math.floor(c[i] / b[i]));
    }
    return answer;
  }
  return getAnsw(a, b);
}