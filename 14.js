//JavaScriptのasync/await

//Promiseで書いた例文
//Promiseで書いた場合
function time(val) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        console.log(val++);
        resolve(val);
      }, 1000);
    });
  }
  
  time(0)
    .then(function (val) {
      return time(val);
    })
    .then(function (val) {
      return time(val);
    })
    .then(function (val) {
      return time(val);
    });

    //async/awaitで書いた例文
    // Async/Await
function time(val) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        console.log(val++);
        resolve(val);
      }, 1000);
    });
  }
  async function init() {
   let val = await time(0);
   val = await time(val);
   val = await time(val);
   val = await time(val);
  }
  init();