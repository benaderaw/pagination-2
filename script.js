"use strict";
const nextBtn = document.querySelector(".next");
const previewBtn = document.querySelector(".preview");
const pageNum = document.querySelector(".pageNum");
const list = document.querySelectorAll("li");

const listLength = list.length;

let page = 1;
let resultPerPage = 5;

// initial 5 results
list.forEach((el, i) => {
  if (i >= resultPerPage) {
    el.style.display = "none";
  }
});

// clear function
const clear = () => {
  list.forEach((el) => {
    return (el.style.display = "none");
  });
};

//
previewBtn.style.opacity = "0";
previewBtn.style.scale = "0";

//
const nextBtnDisplay = () => {
  if (page === Math.ceil(listLength / resultPerPage)) {
    nextBtn.style.opacity = "0";
    nextBtn.style.scale = "0";
  }

  if (page > 1) {
    previewBtn.style.opacity = "1";
    previewBtn.style.scale = "1";
  }
};

//
const previewBtnDisplay = () => {
  if (page === 1) {
    previewBtn.style.opacity = "0";
    previewBtn.style.scale = "0";
  }
  if (page < Math.ceil(listLength / resultPerPage)) {
    nextBtn.style.opacity = "1";
    nextBtn.style.scale = "1";
  }
};

// next btn
nextBtn.addEventListener("click", function () {
  if (page === Math.ceil(listLength / resultPerPage)) {
    nextBtn.style.opacity = "0";
    return;
  }

  // clear page
  clear();

  page += 1;

  // calculate page for splice
  let pageSplice01 = (page - 1) * resultPerPage; // 0 5
  let pageSplice02 = page * resultPerPage; // 5 10

  // slice and render
  let result = Array.from(list).slice(pageSplice01, pageSplice02);

  result.forEach((el) => {
    el.style.display = "flex";
  });

  //

  //
  pageNum.textContent = page;

  //
  nextBtnDisplay();
});

//
previewBtn.addEventListener("click", function () {
  if (page === 1) return;

  // clear page
  clear();

  // change page
  page -= 1;

  // calculate page for splice
  let pageSplice01 = (page - 1) * resultPerPage; //
  let pageSplice02 = page * resultPerPage; //

  // slice and render
  let result = Array.from(list).slice(pageSplice01, pageSplice02);

  result.forEach((el) => {
    el.style.display = "flex";
  });

  // update page number
  pageNum.textContent = page;

  //
  previewBtnDisplay();
});
