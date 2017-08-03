
// This holds all the possible images on the memory tiles.
let memory_Options = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i'];

// Holds tile IDs for a given game.
let memory_Values = [];
let memory_TileIDs = [];
// Keeps track of the number of tiles flipped.
let tiles_Flipped = 0;






// This generates a random order of memory_Options Array.
let hold_Array = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i'];

let random_Set = [];

function shuffle(){
 for( let i = 0; i < memory_Options.length; i++ ){
    // This gives a random integer within the memory_Options.length values.
    // console.log("trying to pop");
    let r = Math.floor((Math.random() * hold_Array.length));
    // console.log("Iteration:",i,"of",memory_Options.length,"possibilities");
    // console.log("memory options:",memory_Options);
    // console.log("r:",r,"of",hold_Array.length,"possibilities");
    random_Set[i] = hold_Array[r];
    hold_Array.splice(r,1);
    // random_Set[i] = hold_Array.pop(r);
    // console.log("pop!");
    // console.log("Random array:",random_Set);
    // console.log("Hold array:",hold_Array);

 console.log(i + " index value is " + hold_Array[r]);
    //  hold_Array.map((item, index, arr) => {
    //   console.log (item, index, arr);
    //  });
 }
console.log(random_Set);
return random_Set;
}



// This controls the actions of the cards when flipped.
function clickToFlip() {
console.log("Clicked a tile");
console.log(this.id);
// This makes the card change class and flip.
this.setAttribute("class", "show");
// This gives the letter on the tile.
let letterOnCard = this.id.slice(-1);
console.log("The letter on the card is " +letterOnCard);

// This gives the tile number as a string
let num1 = this.id.charAt(4);
let numBoth = this.id.charAt(4) + this.id.charAt(5);
let unknown = this.id.charAt(5);

     if (num1 === '1' && unknown >= 0){
          console.log("The card number is " + numBoth);
     }
     else{
       console.log("The card number is " + num1);
     }
}







// Code to make tiles appear.

function placeTiles(){
// runs the shuffle function.
  shuffle();
// This makes the itemList node attach to the total_board element on the HTML page.
let itemList = document.querySelector( "#total_board" );
// This makes a loop to go through the memor_Options array.
  for( let i = 0; i < memory_Options.length; i++ ){

// This creates an li value to act as a tile.
    let li       = document.createElement( "li" );

// This creates an H2 element.
    let liH2     = document.createElement( "h2" );

// This places the random_Set text into the liText.
    let liText = document.createTextNode( random_Set[ i ] );

// This makes the tile respond to being clicked.
  li.addEventListener('click', clickToFlip);

// This creates a class for the tile and set it to hide.
   li.setAttribute("class", "hide");
// This sets each tile with an id based on position on the game board AND the card value.
   li.setAttribute("id", "card" + i + random_Set[ i ]);
// This moves the text to the H2.
    liH2.appendChild( liText );
// This adds the H2 to the li tile.
    li.appendChild( liH2 );
// This adds the li to the itemList.
    itemList.appendChild( li );
  }
}

// This places the header and the clock.
function placeHeader(){
  let itemList = document.querySelector( "#header" );
// This creates a div to hold the header.
  let li       = document.createElement( "div" );
// This creates an H2 element.
  let liH2     = document.createElement( "h2" );
// This places the memor_Options text into the liText.
  let liText = document.createTextNode( "Memory Matching" );
// This moves the text to the H2.
  liH2.appendChild( liText );
// This adds the H2 to the li tile.
  li.appendChild( liH2 );
// This adds the li to the itemList.
  itemList.appendChild( li );
}




// This makes the clock tick.
var counter = 0;//set this to what ever you want the start # to be
function tickTock(){
		counter++;//increment the counter by 1
		setTimeout ( "tickTock()", 1000 );//runs itsself after 1000 miliseconds
		//console.log(counter);uncomment to can see it in action, only with firebug
		// console.log(counter + "seconds.")

   let min = Math.floor(counter/60);
   let sec = counter%60;
   let liText;
   if( min === 0 ){
   liText = sec + "sec";
   }
   else if( min >= 10 ){
     liText = "Time Expired."
   }
   else{
    liText = min + "min " + sec + "sec";
   }

// This moves the text to the H2.
    liH2.innerHTML = liText ;
// This adds the H2 to the li tile.
    clock.appendChild( liH2 );
// This adds the li to the itemList.
    clockSpot.appendChild( clock );
}
let clockSpot = document.querySelector( "#clockGoesHere" );
let clock       = document.createElement( "div" );
let liH2     = document.createElement( "h2" );
tickTock();




// These functions make the game appear.
placeHeader();
placeTiles();
