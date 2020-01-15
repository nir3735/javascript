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
    var a = point1.x - point2.x
    var b = point1.y - point2.y
    return Math.sqrt(a*a + b*b)
}
getnearbypoints({x:10 , y: 10} , 10);



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