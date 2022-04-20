let nameProduct = document.querySelector("#productName");
let selectview = document.querySelector("#category");
let addBtn = document.querySelector("#add");
let fruitsList = document.querySelector("#fruits");
let vegetablesLists = document.querySelector("#vegetables");
let melonproductList = document.querySelector("#melonproduct");
let fruitText = document.querySelector("#fruittext");
let vegetableText = document.querySelector("#vegetabletext");
let melonText = document.querySelector("#melontext");
let clearBtn = document.querySelector("#clear");
let clearBtnVegetables = document.querySelector(".clear")
let clearBtnMelon = document.querySelector(".melon__clear");
let fruitArray = [];
let vegetableArray = [];
let melonArray = [];

let selectCategories = ["Fruits", "Vegetables", "Melon products"];


for (let select of selectCategories) {
  let newOption = document.createElement("option");
  newOption.textContent = select;
  newOption.value = select;
  selectview.appendChild(newOption)
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault()
  let inputValue = nameProduct.value;
  let selectValue = selectview.value; 
  let fruitTextcontent = fruitText.textContent;
  let vegetableTextcontent = vegetableText.textContent;
  let melonTextcontent = melonText.textContent;
  if(!isNaN(inputValue)) {
    nameProduct.style.borderColor = "red"
  }
  if (selectValue == fruitTextcontent && inputValue.length > 3 &&  isNaN(inputValue)) {
    fruitArray.push(inputValue)
    for (let product of fruitArray){
      let newLi = document.createElement("li")
      newLi.textContent = product;
      fruitsList.appendChild(newLi)
      clearBtn.addEventListener('click', (e) => {
        newLi.textContent =""
      })
      fruitArray = []
    }
    console.log(fruitArray);
  }
  else if (selectValue == vegetableTextcontent && inputValue.length > 3 &&  isNaN(inputValue)) {
    vegetableArray.push(inputValue)
    for (let product of vegetableArray){
      let newLi = document.createElement("li")
      newLi.textContent = product;
      vegetablesLists.appendChild(newLi)
      clearBtnVegetables.addEventListener('click', (e) => {
        newLi.textContent = ""
      })
      vegetableArray = []
    }
  }
  else if (selectValue == melonTextcontent && inputValue.length > 3 &&  isNaN(inputValue)) {
    // let newLi = document.createElement("li")
    // newLi.textContent = inputValue;
    // melonproductList.appendChild(newLi);
    melonArray.push(inputValue)
    for (let product of melonArray){
      let newLi = document.createElement("li")
      newLi.textContent = product;
      melonproductList.appendChild(newLi)
      clearBtnMelon.addEventListener('click', (e) => {
        newLi.textContent = ""
      })
      melonArray = []
    }
  }
})
