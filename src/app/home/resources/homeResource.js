export const sayHello = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World');
    }, 0);
  });
};

export default {
  sayHello
};