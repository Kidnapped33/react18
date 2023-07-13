// 10 行代码

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const minDelay = async (promise, ms) => {
  const [p] = await Promise.all([promise, sleep(ms)]);
  return p;
};

const fetchDataMock = () => {
  return new Promise((resolve, reject) => setTimeout(resolve, 5000));
};
// // use
// await minDelay(fetchDataMock(), 1000);

// ////
// const minDelay1 = async () => {
//   const [p] = await Promise.all([
//     new Promise((resolve) => setTimeout(resolve, 5000)),//fetchDataMock
//     new Promise((resolve) => setTimeout(resolve, 1000)),//sleep
//   ]);
//   return p;
// };

// const sleep = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

// const xxx = sleep(0)
// console.log('xxx---',xxx);

// const pp = new Promise((resolve) => setTimeout(resolve, ms))

// 复习 promise

new Promise((resolve, reject) => {
  console.log("Promise");
  resolve(10000);
}).then(
  (data) => {
    console.log("success"), console.log(data + 1);
  },
  (data) => {
    console.log("fail"), console.log(data + 2);
  }
);


try {
  console.log("Promise");
  const data = Promise.resolve(10000);
  console.log("success");
  console.log(data + 1);
} catch (error) {
  console.log("fail");
  console.log(error + 2);
}
