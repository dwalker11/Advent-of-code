function captcha(input) {
  var i, j, k, sum = 0;
  var len = input.length;

  j = 0;
  k = j + 1;

  for (i = 0; i < len; i++) {
    if (input[j] == input[k]) {
      sum += input[j];
    }

    j = (j + 1) % len;
    k = (k + 1) % len;
  }

  return sum;
}

module.exports = captcha;
