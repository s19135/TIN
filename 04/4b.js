const fibonacci = nth => (
  nth <= 0
    ? "Incorrect nth" : nth === 1
      ? 0 : nth === 2
        ? 1 : fibonacci(nth - 1) + fibonacci(nth - 2)
)

console.log(fibonacci(2));