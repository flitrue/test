function Promise(executor) {
  this.status = "pending";
  this.value = '';
  this.reason = '';
  this.failCallBack = [];
  this.successCallBack = [];
  executor(this.resolve.bind(this), this.reject.bind(this));
}

Promise.prototype.resolve = function(value) {
  console.log(this)
  if (this.status === "pending") {
    this.status = "full";
    this.value = value;
    this.successCallBack.forEach((fn) => fn(value));
  }
}

Promise.prototype.reject = function(reason) {
  if (this.status === "pending") {
    this.status = "fail";
    this.reason = reason;
    this.failCallBack.forEach((fn) => fn(reason));
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  if (this.status === 'full') {
    typeof onFulfilled === "function" && onFulfilled(this.value);
  }
  if (this.status === 'fail') {
    typeof onRejected === "function" && onRejected(this.reason);
  }
  if (this.status === 'pending') {
    typeof onFulfilled === "function" && this.successCallBack.push(onFulfilled);
    typeof onRejected === "function" && this.failCallBack.push(onRejected);
  }
  let newPromise = new Promise((resolve, reject) => {});
  return newPromise;
};

Promise.deferred = function () {
  let defer = {};
  defer.promise = new Promise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });
  return defer;
};

// module.exports = Promise;
