let nameProduct = document.querySelector("#productName");
let selectview = document.querySelector("#category");
let addBtn = document.querySelector("#add");
let fruitsList = document.querySelector(".listfruit");
let vegetablesLists = document.querySelector(".listveget");
let melonproductList = document.querySelector(".listmelon");
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
  if(!isNaN(inputValue) || !inputValue.length > 3) {
    nameProduct.style.borderColor = "red"
  }
  if (selectview.value == "Fruits") {
   if(fruitArray.includes(inputValue))return
   check.checked ? fruitArray.unshift(inputValue) : fruitArray.push(inputValue)
      fruitsList.innerHTML = ""
      nameProduct.value = null
      render(fruitArray)
     }
  if (selectview.value == "Vegetables") {
    if(vegetableArray.includes(inputValue))return
      check.checked?vegetableArray.unshift(inputValue):vegetableArray.push(inputValue)
      vegetablesLists.innerHTML = ""
      nameProduct.value = null
      render(vegetableArray)
     }
  if (selectview.value == "Melon products") {
    if(melonArray.includes(inputValue))return
      check.checked ?melonArray.unshift(inputValue):melonArray.push(inputValue)
      melonproductList.innerHTML = ""
      nameProduct.value = null
      render(melonArray)
     }
})
        
clearBtn.addEventListener('click', (e) => {
      check.checked ?fruitArray.shift():fruitArray.pop()
      fruitsList.innerHTML = ""
      render(fruitArray)
})
clearBtnVegetables.addEventListener('click', (e) => {
      check.checked ?vegetableArray.shift(): vegetableArray.pop()
      vegetablesLists.innerHTML = ""
      render(vegetableArray)
})
clearBtnMelon.addEventListener('click', (e) => {
      check.checked ? melonArray.shift(): melonArray.pop()
      melonproductList.innerHTML = ""
      render(melonArray)
})
  
function render(arr){
    for (let product of arr){
      let newLi = document.createElement("li")
      newLi.textContent = product;
      if (selectview.value == "Fruits") {
          fruitsList.appendChild(newLi)
      }
      if (selectview.value == "Vegetables") {
        vegetablesLists.appendChild(newLi)
      }
      if (selectview.value == "Melon products") {
        melonproductList.appendChild(newLi)
      }
    }
}
