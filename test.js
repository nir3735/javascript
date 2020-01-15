function getRandomInt(min,max)
{
    var point = {
        x:0,
        y:0
    };
    point.x = Math.floor(Math.random() * (max - min+1)) + min;
    point.y = Math.floor(Math.random() * (max - min+1)) + min;
    return point;
}
    var array =[];
    for (var i=0;i<=100 ;i++) 
    {
    array.push(getRandomInt(0,1000));
    }


function compare(a, b) 
    {

    let comparison = 0;
        if (a.distance > b.distance)
        {
      comparison = 1;
        }   else if (a.distance < b.distance)
    {
      comparison = -1;
    }
    return comparison;
    }

function getnearbypoints( point , nearbypoint){

    for(var i = 0; i< array.length ; i++ ){

        var dis =  distance(point , array[i]);
        array[i]['distance'] = dis;
       
    }

    console.log(array);
    var sortedPoints = array.sort(compare);
    console.log(sortedPoints.slice(0,10));

    }
function distance(point1, point2)
{
    var p = point1.x - point2.x
    var q = point1.y - point2.y
    return Math.sqrt(p*p + q*q)
}
getnearbypoints({x:10 , y: 10} , 10);


/*
//var x = math.bignumber(500);
//const Big = require('big.js');
// var x = 1n;
function factorial(x) 
{ 
  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(500));


function factorial(n) {
    if (n === 0)
      return '1'
    if (!n)
      return ''
    var i, nextNumber, carret,result = n.toString().split('').reverse().map(Number)
    while (--n) {
      i = carret = 0
      while ((nextNumber = result[i++]) !== undefined || carret) {
        carret = (nextNumber || 0) * n + carret
        result[i - 1] = carret % 10
        carret = parseInt(carret / 10)
      }
    }
    return result.reverse().join('')
  }
  console.log(factorial(50));*/