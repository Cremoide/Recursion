function fibs(n) {
  console.log(`Fibonacci array of (${n})`);
  
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log(fibs(8));

function fibsRec(n) {
  console.log("This was printed recursively");

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);
  // return prev.concat([prev[prev.length - 1] + prev[prev.length - 2]]);
  return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}

console.log(fibsRec(8));
