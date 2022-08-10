// Code your solution in this file!

  function distanceFromhqInBlocks(pickupBlock){
  return Math.abs(42 - pickupBlock)
  }


function distanceFromHqInFeet(pickUpBlock){
  return distanceFromhqInBlocks (pickUpBlock) * 264
}


function distanceTravelledInFeet(start,end){
   return Math.abs(start - end)* 264
}

function calculatesFarePrice(start,destination){
 const distance = distanceTravelledInFeet(start,destination)
 if (distance <= 4000){
   return 0
 } else if (distnace <= 2000){
   return distance *0.02
 }
}