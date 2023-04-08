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

//
previewBtn.style.opacity = "0";
previewBtn.style.scale = "0";

////////////////////////////////////////////////////////////////////////////
// HELPER FUNCTIONS
////////////////////////////////////////////////////////////////////////////

// clear function
const clear = () => {
  list.forEach((el) => {
    return (el.style.display = "none");
  });
};

// render result function
const renderResult = (page) => {
  // calculate page for slice
  let pageSplice01 = (page - 1) * resultPerPage; //
  let pageSplice02 = page * resultPerPage; //

  // create array from the li nobelist and lice
  let result = Array.from(list).slice(pageSplice01, pageSplice02);

  // loop thru the slice() result and render
  result.forEach((el) => {
    el.style.display = "flex";
  });
};

// next button display function
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

// previous button display function
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

////////////////////////////////////////////////////////////////////////////
// BTN EVENT LISTENERS
////////////////////////////////////////////////////////////////////////////

// NEXT BTN LISTENER
nextBtn.addEventListener("click", function () {
  // if page is at max, done execute any further
  if (page === Math.ceil(listLength / resultPerPage)) return;

  // clear all result
  clear();

  // add 1 to the page
  page += 1;

  // render results
  renderResult(page);

  // update and render the page number
  pageNum.textContent = page;

  // next and previous button display check
  nextBtnDisplay();
});

// PREVIOUS BTN LISTENER
previewBtn.addEventListener("click", function () {
  // if the page is at 1 don't execute any further
  if (page === 1) return;

  // clear all result
  clear();

  // subtract 1 from the page
  page -= 1;

  // render results
  renderResult(page);

  // update and render the page number
  pageNum.textContent = page;

  // next and previous button display check
  previewBtnDisplay();
});
