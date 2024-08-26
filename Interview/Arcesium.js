
let library = [
    {	'title' : "Song Name1",
        'Category' : ["Holly","Dance"],
        'PlayFreq' : 6},
    {'title' : "Song Name2",
        'Category' : ["Bolly"],
        'PlayFreq' : 8},
      {'title' : "Song Name3",
        'Category' : ["Bolly"],
        'PlayFreq' : 18},
    {'title' : "Song Name4",
        'Category' : ["Bolly","Holly"],
        'PlayFreq' : 19}
    ]
let lib2 = []


//code to find song title with highest freq for each category

//iterate through each obj inside library 
let obj={}
let max = 0


function countFreq(library){
	if(library.length==0) return "Null values"
try{
	for(let i=0; i<library.length;i++){
	if(library[i].Category.length==0) throw "Null Categories"
	if(typeof(library[i].PlayFreq)!=="number") throw "Invalid Frequency"
	let j=0
  while(j<library[i].Category.length){
    if(obj[library[i].Category[j]]){
  	max = Math.max(parseInt(library[i].PlayFreq),max)
    }
    obj[library[i].Category[j]] = max
  if(!obj[library[i].Category[j]]){
    obj[library[i].Category[j]] = parseInt(library[i].PlayFreq)
  }
	j++
  }
}
    return obj
}
catch(err){
	console.log("Error is " + err)
}
}

console.log(countFreq(library))
console.log(countFreq(lib2))



