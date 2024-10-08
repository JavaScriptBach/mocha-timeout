"use strict";

beforeEach(function () {
  this.timeout(1234);
});

it("Test", async function () {
  console.log("test started");
  await sleep(5000);
});

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


