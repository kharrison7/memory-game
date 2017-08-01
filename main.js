
// A lot of this code is based on this tutorial
// https://www.youtube.com/watch?v=c_ohDPWmsM0


// This holds all the possible images on the memory tiles.
let memory_Options = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i'];

// Holds tile IDs for a given game.
let memory_Values = [];
let memory_TileIDs = [];

// Keeps track of the number of tiles flipped.
let tiles_Flipped = 0;



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
    let liText = document.createTextNode( memory_Options[ i ] );

// This moves the text to the H2.
    liH2.appendChild( liText );
// This adds the H2 to the li tile.
    li.appendChild( liH2 );
// This adds the li to the itemList.
    itemList.appendChild( li );
}




// This generates a random order of memory_Options Array.
