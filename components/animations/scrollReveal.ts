export const scrollReveal = (delay = 0, amount = 0.3) => ({
  initial: { y: 10, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.5, delay },
  viewport: { once: true, amount },
});
