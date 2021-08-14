var buy = document.getElementById("buy")
var quantity = document.getElementById("quantity")
var current = document.getElementById("current")

var btn = document.getElementById("mybtn")

btn.addEventListener("click", calculateprofit)

var output = document.querySelector(".output")

function calculateprofit(){
  var total = Number(buy.value) * Number(quantity.value)

  var curr = Number(current.value) * Number(quantity.value)

  var profit = curr - total

  var percentage = (profit/total)*100

  if(profit>=0){
      output.innerText=`The profit earned is Rs. ${profit} at returns of ${percentage}%`
  }else{
    output.innerText=`The loss earned is Rs. ${-profit} at returns of ${percentage}%`
  }

  output.classList.remove("hide");
}
