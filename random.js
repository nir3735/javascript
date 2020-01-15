const firstname = ["Ajay" , "Amit" , "Kapil" , "Ankit" , "Ballu" , "Danny" , "Shubham" , "Nirbhav" , "Tulip" , "Johnny" , "Praveen" , "Alex" , "Rohan" , "Mayank" , "Manoj" , "Michael" , "Rahul" , "Deepak" , "Akash" , "Kunal"];
const lastname = ["Varshney" , "Singh" , "Sharma" , "Gupta" , "Chaudhary" , "Agarwal" , "Kumar"];

const getrandomname = () => `${firstname[Math.floor(Math.random() * firstname.length)]} ${lastname[Math.floor(Math.random() * lastname.length)]} ${age[Math.floor(Math.random() * age.length)]}`
var array =[];
for (var i=0;i<=20 ;i++)
{
array.push({
    firstName: firstname[Math.floor(Math.random() * firstname.length)],
    lastName: lastname[Math.floor(Math.random() * lastname.length)],
    age : generateRandomNumber(20,30)
});
}

function generateRandomNumber(min,max){
return Math.floor(Math.random() * (max - min+1)) + min;
}
console.log(array);

/*
    function result(arrayToCheck, key, comparator) {
      var desired = [];
      for (var i = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i][key] == comparator) {
          desired.push(arrayToCheck[i]);
        }
      }
      return desired;
    }
    var out = result(array, "age", 25)
    console.log(out);*/

    var results = array.filter(val => {
      return val.age > 25} );
    console.log(results);

    function compare(a, b)
    {
    let comparison = 0;
        if (a.age > b.age)
        {
      comparison = 1;
        }   else if (a.age < b.age)
    {
      comparison = -1;
    }
    return comparison;
    }
    var sortedPoints = results.sort(compare);
    console.log(sortedPoints);
