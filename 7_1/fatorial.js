let fatorial = x => (x == 0 || x == 1) ? 1 : x * fatorial(x-1);

console.log(fatorial(10));