
// A lot of this code is based on this tutorial
// https://www.youtube.com/watch?v=c_ohDPWmsM0


// This holds all the possible images on the memory tiles.
let memory_Options = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i'];

// Holds tile IDs for a given game.
let memory_Values = [];
let memory_TileIDs = [];
// Keeps track of the number of tiles flipped.
let tiles_Flipped = 0;


// let hold_Array = [];
// for (i=0;i<memory_Options.length;i++){
//   hold_Array.push(memory_Options[i]);
// }


// This generates a random order of memory_Options Array.

let hold_Array = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i'];

let random_Set = [];
for( let i = 0; i < memory_Options.length; i++ ){
  // This gives a random integer within the memory_Options.length values.
    // console.log("trying to pop");
    let r = Math.floor((Math.random() * hold_Array.length));
    console.log("Iteration:",i,"of",memory_Options.length,"possibilities");
    console.log("memory options:",memory_Options);
    console.log("r:",r,"of",hold_Array.length,"possibilities");
    random_Set[i] = hold_Array[r];
    hold_Array.splice(r,1);
    // random_Set[i] = hold_Array.pop(r);
    // console.log("pop!");
    // console.log("Random array:",random_Set);
    // console.log("Hold array:",hold_Array);

}
console.log(random_Set);



// Code to make tiles appear.
// This makes the itemList node attach to the total_board element on the HTML page.
let itemList = document.querySelector( "#total_board" );



// This makes a loop to go through the memor_Options array.
for( let i = 0; i < memory_Options.length; i++ ){

// This creates an li value to act as a tile.
    let li       = document.createElement( "li" );

// This creates an H2 element.
    let liH2     = document.createElement( "h2" );

// This places the memor_Options text into the liText.
    let liText = document.createTextNode( random_Set[ i ] );

// This moves the text to the H2.
    liH2.appendChild( liText );
// This adds the H2 to the li tile.
    li.appendChild( liH2 );
// This adds the li to the itemList.
    itemList.appendChild( li );
}
