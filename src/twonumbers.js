

export function numberAdder(n1,n2) {
  return(n1+n2);
}

export function numberCompare(n1,n2, k) {
  if (numberAdder(n1,n2) === k) {
    return true;
  } else {
    return false;
  }
}


export function arraySum(array, k) {
  for (let i = 0; i < array.length; i++){

    for (let x = 0; x < array.length; x++){

      if ( numberCompare(array[i], array[x], k) === true ) {
          return true;
      }
    }
  }
  return false;
}
