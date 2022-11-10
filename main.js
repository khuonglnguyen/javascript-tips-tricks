function request(type) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      type === "a" ? reslove("resolve") : reject("reject");
    }, 2000);
  });
}

async function getData() {
  let err, result;
  [err, result] = await handleRequest(request("a"));
  if (err) {
    console.error("Error: ", err);
  }
}

const handleRequest = (promise) => {
  return promise
    .then((data) => {
      [undefined, data];
    })
    .catch((err) => {
      [err, undefined];
    });
};

getData();
