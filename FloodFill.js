
function filled(image, sr, sc, newColor, visited, oldColor) {
    if(visited.has([sr,sc])){
      return image; // already visited this spot
    }
    if(image[sr][sc] !== oldColor){
      return image // not the color we are filling
    }
    image[sr][sc] = newColor;
    visited.add([sr,sc]);

    //let image = image;

    if(sr-1 >= 0){ //Can I going up?
      image = filled(image, sr-1, sc, newColor, visited, oldColor) // Go Up
    }
    if(sc-1 >= 0){ //Can I going left?
      image = filled(image, sr, sc-1, newColor, visited, oldColor) // Go Left
    }
    if(sr+1 < image[sr].length){ //Can I going right?
      image = filled(image, sr, sc+1, newColor, visited, oldColor) // Go Right
    }
    if(sr+1 < image.length){ //Can I going down?
      image = filled(image, sr+1, sc, newColor, visited, oldColor) // Go Down
    }
    return image;
}

function floodFill(image, sr, sc, newColor) {
  let visited = new Set();
  let oldColor = image[sr][sc];

  let filledImg = filled(image, sr, sc, newColor, visited, oldColor);

  return filledImg;
};

let img = [
  [1,1,1,1,4,5,6],
  [1,1,0,1,1,1,1],
  [1,0,1,0,0,0,1]
];
let sr = 1;
let sc = 1;
let newColor = 2;

console.log(floodFill(img, sr, sc, newColor));
