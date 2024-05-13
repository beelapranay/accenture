function show_value(x){
    document.getElementById("demo").innerHTML=x;
}

function  costCalculation(){
    // fill javascript code here - do not use let keyword for variable intialization; instead use var. 
    var ticketType = document.getElementById("ticketType").value;
    var couponCheck = document.getElementById("couponCode");
    var refreshmentCheck = document.getElementById("refreshment");
    var totalCost = 0;
    var discount = 0;
    var basePrice = 0;
    var numOfTickets = parseInt(document.getElementById("noOfTickets").value);
    
    if(ticketType === 'Floor') {
        basePrice = 400;
    } else {
        basePrice = 500;
    }
    
    totalCost = numOfTickets * basePrice;
    
    if(numOfTickets > 20) {
        discount += 0.10;
    }
    
    if(couponCheck.checked) {
        discount += 0.20;
    }
    
    totalCost -= totalCost * discount;
    
    if(refreshmentCheck.checked) {
        totalCost += 100;
    }
    
    totalCost = Math.round(totalCost);
    
    document.getElementById("result").innerHTML = totalCost;
}