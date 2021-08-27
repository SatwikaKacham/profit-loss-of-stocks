const initialPrice = document.querySelector(".initial-price");
const currentPrice = document.querySelector(".current-price");
const quantity = document.querySelector(".quantity");
const submitBtn = document.querySelector(".submit-btn");
const outPut = document.querySelector(".output");
const rightSide = document.querySelector(".right-side");
const emoji = document.querySelector(".emoji");

function showOut(msg,index)
{
    switch (index) {
         case 0:
             {
            outPut.innerHTML=msg;
        
            outPut.style.fontSize= "3.5rem";
            rightSide.style.backgroundColor="green";
            
             emoji.innerHTML="<img src =\'https://media.giphy.com/media/xT0xex6lga2LBrjhHq/giphy.gif\'  width=\'250px\' height=\'200px\'>"
            
           
            break;
             }
         case 1:
            outPut.innerHTML=msg;
        
            outPut.style.fontSize= "3.5rem";
            rightSide.style.backgroundColor="rgb(230, 69, 69)";
            emoji.innerHTML="<img src ='https://media.giphy.com/media/zvBuF2oYRErVS/giphy.gif\'  width=\'250px\' height=\'200px\'>"
            break;
            case 2:
                    outPut.innerHTML=msg;
                    // outPut.style.color="rgb(229, 246, 248)";
                    rightSide.style.backgroundColor="blue";
                    outPut.style.fontSize= "3.5rem";
                    emoji.innerHTML="<img src ='https://media.giphy.com/media/1iTnzFRFQwDpv3C8/giphy.gif\'  width=\'250px\' height=\'200px\'>"
                    break;
                    
         default:
            {
            outPut.innerText=" Arey bhai input values nahi hai tho profit aur loss kaisa nikalega! ";
            rightSide.style.backgroundColor="rgb(230, 69, 69)";
            outPut.style.fontSize= "3.5rem";
        
            emoji.innerHTML='<img src="https://media.giphy.com/media/U72OPYcmYDadBeRYaZ/giphy.gif\" width=\"250px\" height=\'200px\' > '
            
            break;
            }
    }
}




function profitLossFinder(initialPrice,quantity,currentPrice){

    if(initialPrice>0&&currentPrice>0&&quantity>0)
    { console.log("all positive right");
    if(initialPrice<currentPrice)
    { 

        profit = (currentPrice - initialPrice)*quantity;
        profitPercent = Math.trunc((profit/initialPrice)*100);
          showOut(`hurray! you made a profit of ${profit} and the profit percent is ${profitPercent}%`,0);
    }
    else if(initialPrice>currentPrice)
    {
        loss = (initialPrice-currentPrice)*quantity;
        lossPercent = Math.trunc((loss/initialPrice)*100);
        showOut(`oh oh! you made a loss of ${loss} and the loss percent is ${lossPercent}%`,1);
        console.log("out");
    }
    else{
        showOut("Be happy you dont have a loss u are neutral no loss no gain!",2) ;
    }
}
else{
    showOut("",3);
}

}


function clickEvent(){
    console.log("yes");
    var initial= Number(initialPrice.value);
    var current= Number(currentPrice.value);
    var quant = Number(quantity.value);
    console.log(initial,current,quant);
    profitLossFinder(initial,quant,current);

}


submitBtn.addEventListener('click',clickEvent)