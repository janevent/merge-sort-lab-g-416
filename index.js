function findMinAndRemoveSorted(array){
<<<<<<< HEAD
  //return array.splice(0,1)
  return array.shift();
=======
  return array.splice(0,1)
>>>>>>> 65fc0fd814cc28f45f0e9a3f4490b43382849679
}

function merge(firstSubArray, secondSubArray){
  let sorted = [];
<<<<<<< HEAD
  while(firstSubArray.length !== 0 && secondSubArray.length !== 0){
    if(firstSubArray[0] < secondSubArray[0]){
      sorted.push(findMinAndRemoveSorted(firstSubArray));
      //merge(firstSubArray, secondSubArray)
    } else if(secondSubArray[0] < firstSubArray[0]){
      sorted.push(findMinAndRemoveSorted(secondSubArray));
      //merge(firstSubArray, secondSubArray)
    }
  }
  return sorted.concat(firstSubArray).concat(secondSubArray)
}

function mergeSort(array){
    let firstHalf = array.slice( 0, array.length/2);
    let secondHalf = array.slice(array.length/2);
    if(array.length > 1){
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }else{
      return array
    }
=======
  while(firstSubArray !== 0 && secondSubArray !== 0){
    if(firstSubArray[0] < secondSubArray[0]){
      sorted.push(findMinAndRemoveSorted(firstSubArray));
      merge(firstSubArray, secondSubArray)
    } else if(secondSubArray[0] < firstSubArray[0]){
      sorted.push(findMinAndRemoveSorted(secondSubArray));
      merge(firstSubArray, secondSubArray)
    }
  }
  return sorted.concat(firstSubArray).concat(secondSubArray)
>>>>>>> 65fc0fd814cc28f45f0e9a3f4490b43382849679
}