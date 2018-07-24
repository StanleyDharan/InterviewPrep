function cmprs(string){
	let cmpr = [];
  let indx = -2;
  
  for(let char in string){
  	if(cmpr[indx] !== string.charAt(char)){
    	indx = indx + 2;
      cmpr[indx] = string.charAt(char);
      cmpr[indx + 1] = 1;
    } else {
    	let curCount = cmpr[indx + 1];
      cmpr[indx + 1] = curCount + 1;
    }
  }
  let result = "";
  
  for(let ele in cmpr){
  	result += (cmpr[ele]);
  }
  return result;
}

let name = 'aaaaabbeeeettg';
console.log(cmprs(name));
