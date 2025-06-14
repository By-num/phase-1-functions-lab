// Code your solution in this file!
// Function 1: Distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
  const hqStreet = 42;
  return Math.abs(someValue - hqStreet);
}

// Function 2: Distance from HQ in feet
function distanceFromHqInFeet(someValue) {
  const blockLength = 264;
  return distanceFromHqInBlocks(someValue) * blockLength;
}

// Function 3: Distance travelled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
  const blockLength = 264;
  return Math.abs(destination - start) * blockLength;
}

// Function 4: Fare price based on distance
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}


