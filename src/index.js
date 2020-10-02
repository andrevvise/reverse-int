module.exports = function reverse (n) {
    n = String(n);
    if (n[0] === "-") n = n.slice(1);
    let result ="";
    for (let i = 0; i < n.length; i++) {
        result = n[i] + result;
    }
  return Number(result);
}
