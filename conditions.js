const a = true;
// if else
if (a) {
  console.log("Hao");
} else {
  console.log("Nao");
}

//for
const names = ["DJ", "Bhagu", "NMIMS"];
console.log(names.filter(name => name.length === 2)) //Function just like lambda function. Creates new array while running can see in output.
console.log(names.map(names => names.length === 2)) //Give new array based on condition. Something like frequency array
console.log(names)
for (index in names) {
  console.log(names[index])
}


// try catch (Error handling) Handles erros not exceptions ie 17/0 is infity which is an exception
try
{
    hao = 'Bhavin'
}
catch(err)
{
    console.log(err)
}

try
{
    throw("dj")
}
catch (err)
{
    console.log(err)
}