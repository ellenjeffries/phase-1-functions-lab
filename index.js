const hq = 42
const manhattanBlock = 264

function distanceFromHqInBlocks(block){
   
    return Math.abs(block-hq);
}
function distanceFromHqInFeet(block){
  
    return distanceFromHqInBlocks(block) * manhattanBlock
}
function distanceTravelledInFeet (start, destination){
    const distanceInBlocks = Math.abs(start-destination)
    return distanceInBlocks * manhattanBlock
}
function calculatesFarePrice(start, destination) {
    const distanceTravelledInFeetValue = distanceTravelledInFeet(start, destination);
    
    if (distanceTravelledInFeetValue <= 400) {
      return 0;
    } else if (distanceTravelledInFeetValue > 400 && distanceTravelledInFeetValue <= 2000) {
      return (distanceTravelledInFeetValue - 400) * 0.02;
    } else if (distanceTravelledInFeetValue > 2000 && distanceTravelledInFeetValue <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }