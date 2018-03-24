function avgArray(arr) {
  var resarr = [];
  var arrayLength2 = arr[0].length;
  for (var j = 0; j < arrayLength2; j++) {
    var arrayLength = arr.length;
    var sum = 0;
    for (var i = 0; i < arrayLength; i++) {    
      sum += arr[i][j]/arrayLength;
    }
    resarr.push(sum);
  }
  return resarr;
}