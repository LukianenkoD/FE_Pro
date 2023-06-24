const weight = [3,4,5,8,9];
const prices = [1,6,4,7,6];
let newArrayWeight =[];
let newArrayPrice =[];
let maxPrice = 0;
let maxWeight = 0;
for(let i=0; i<weight.length; i++){

    for(let j=weight.length-1; j>i; j--){
       
    
    maxWeight = weight[j]+weight[i];
    maxPrice = prices[j]+prices[i];
   
   
  if(maxWeight<=13){
    newArrayWeight.push(maxWeight);
    newArrayPrice.push(maxPrice);
  }
        
}

 }
 console.log(newArrayWeight);
 console.log(newArrayPrice);
 console.log(newArrayPrice.sort((a,b)=>a-b))
 console.log(newArrayPrice[newArrayPrice.length-1]);

//  const weight = [3,4,5,8,9];
//  const prices = [1,6,4,7,6];
//  const maxWeight = 13;

//  let maxPrice = 0;
//  let optimalItems = [];

//  function findCombination(currentIndex, currentWeight, currentPrice, selectedItems){
//   if(currentIndex===weight.lenth){
//     if(currentWeight<=maxWeight && currentPrice>maxPrice){
//       maxPrice=currentPrice;
//       optimalItems=selectedItems.slice();
//     }
//     return;
//   }

//   if(currentWeight+weight[currentIndex]<=maxWeight){
//     selectedItems.push(currentIndex);
//     findCombination(currentIndex+1, currentWeight+weight[currentIndex], currentPrice, selectedItems);

//   }
//  }

