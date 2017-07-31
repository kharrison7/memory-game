
// A lot of this code is based on this tutorial
// https://www.youtube.com/watch?v=c_ohDPWmsM0


// This holds all the possible images on the memory tiles.
let memory_Options = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i'];

// Holds tile IDs for a given game.
let memory_Values = [];
let memory_TileIDs = [];

// Keeps track of the number of tiles flipped.
let tiles_Flipped = 0;

// This creates a shuffle method for Array Objects:
Array.protoype.memory_tile_shuffle = function(){
let i = item.length, b, holdValue;
while(--i > 0){
  b = Math.floor(Math.random() * (i+1));
  holdValue = item[b];
  item[b] = item[i];
  item[i] = holdValue;
 }
}

function generateBoard(){
tiles_Flipped = 0;
let output = '';
memory_Options.memory_tile_shuffle();
for(let i = 0; i < memory_Options.length; i++){
  //  output += '<div id="title_'+i+''"onclick= "memoryFlipTile(item,\''+memory_Options[i]+'/')" ></div>';

  document.getElementById('total_board').innerHTML = output;

 }
}
