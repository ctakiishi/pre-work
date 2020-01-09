//Iteration 1 | The Rover Object
// Rover Object Goes Here
// ======================
const rover = { 
  x: 0,
  y: 0,
 direction: "N" //north
};

// ======================

function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

//Iteration 3 | Moving the Rover
function moveForward(rover){
  position = rover.direction;
  console.log("moveForward was called")
  switch(position){
    case "N":
      rover.y++;
      console.log(rover);
      break;
     case "E":
      rover.x++;
      console.log(rover);
      break;
     case "S":
      rover.y--;  
      console.log(rover);
      break;
     case "W":
      rover.x--;
      console.log(rover);
      break;
  }   
  console.log(rover)
}

//moveForward(rover);

//Bonus 2 | Move Backwards

function moveBackward(rover){
  position = rover.direction;
  console.log("moveBackward was called")
  switch(position){
    case "N":
      rover.y--;
      console.log(rover);
      break;
     case "E":
      rover.x--;
      console.log(rover);
      break;
     case "S":
      rover.y++;  
      console.log(rover);
      break;
     case "W":
      rover.x++;
      console.log(rover);
      break;
  }   
  console.log(rover)
}

//moveBackward(rover);

//Iteration 2 | Turning the Rover

function turnRover(therover, command){
    switch(command){
      case "l":
        turnLeft(therover);
        if(therover.direction == "N"){
          therover.direction="W"
        } else if(therover.direction == "W"){
          therover.direction="S"
        } else if(therover.direction == "S"){
          therover.direction="E"
        } else {
          therover.direction="N"
        };
        break;
      case "r": 
        turnRight(therover);
        if(therover.direction == "N"){
          therover.direction="E"
        } else if(therover.direction == "E"){
          therover.direction="S"
        } else if(therover.direction == "S"){
          therover.direction="W"
        } else {
          therover.direction="N"
        };  
    };
    console.log(therover);
}

//turnRover(rover, "l");

//Iteration 4 | Commands & Iteration 5 | Tracking & Bonus3 | Validate Inputs
function command(theRover, orders){
    for (let i = 0; i < orders.length; i++){ 
          let order = orders[i];
      if(order == "l" || order == "r" || order == "f"){
          switch(order){
            case "l": // left
              turnRover(theRover, order);
              break;
            case "r": // right
              turnRover(theRover, order);
              break;  
             case "f": // forward
             //Bonus 1 | Enforce Boundaries
              if(theRover.x<0 || theRover.y <0 || theRover.x>10 || theRover.y>10){ //duvida: Como sair antes de guardar a posição negativa?
                console.log("Rover can't go any further!");
                break;
              } else{
                moveForward(theRover, order);
                break; 
              }
            }
          } else{
            console.log("Unknown order!");
          }
        } 
  console.log(theRover);
}

