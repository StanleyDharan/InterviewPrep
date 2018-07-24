let stringA = 'abbba';
let stringB = 'bbbra';

function isPermutation(a, b){
	let dict = {};
  if(a.length !== b.length){
  	return false;
  }else{
  	//building dictionary
  	for(let letter in a){
    	if(dict[a.charAt(letter)] === undefined){
        dict[a.charAt(letter)] = 1;
      } else {
      	dict[a.charAt(letter)] = dict[a.charAt(letter)] + 1;
      }
    }
    //testing string B to dictionary
    for(let letter in b){
    	if(dict[b.charAt(letter)] === undefined){
      	return false;
      } else {
      	if(dict[b.charAt(letter) === 0]){
        	return false;
        } else {
        	dict[b.charAt(letter)] = dict[b.charAt(letter)] - 1;
        }
      }
    }
    
    for(let key in dict){
    	if(dict[key] !== 0){
      	return false;
      }
    }
    
    return true;
  }
}

if(isPermutation(stringA, stringB)){
	console.log('returned true!');
} else {
	console.log('returned false');
}
