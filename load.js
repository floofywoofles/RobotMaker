let loadmap = (map)=>{
  function dToStr(m){
    this.r = "";

    for(let y in m){
      for(let x in m[y]){
        this.r += m[y][x];
      }
      this.r += "\n";
    }

    return this.r
  }

  if(dToStr(map)){
    console.log(dToStr(map));
  } else {
    console.log('Failed to load map');
  }
}


let genMap = (height,width) => {
  function genArr(y,x){
    let hold = [];
    for(let p = 0; p <= y-1; p++){
      hold[p] = []
      for(let l = 0; l <= x-1; l++){
        hold[p][l] = "#";
      }
    }
    return hold;
  }

  return genArr(height,width) ?? undefined;
}

let mapMap = (map) => {
  
}

module.exports = {
  genMap: genMap,
  loadmap: loadmap
}
