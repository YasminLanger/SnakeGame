//importierte Funktionen
import { getInputDirection } from "./input.js";

//Variablen
export const snakeSpeed = 2; 
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

/*Funktion, durch die ein Segment der Schlange an die Position 
des vorherigen Segments gerückt wird*/
export function update ()
{
    addSegments()
    getInputDirection ();

    const inputDirection = getInputDirection ();
    for (let i = snakeBody.length - 2; i >= 0; i--)
    {
        snakeBody[i + 1] = { ...snakeBody [i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

}


//Funktion, durch die die Schlange auf dem Gameboard erscheint
export function draw (gameBoard)
{
    snakeBody.forEach (segment =>
        {
            const snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = segment.y;
            snakeElement.style.gridColumnStart = segment.x;
            snakeElement.classList.add("snake");
            gameBoard.appendChild(snakeElement);
        })
}

//Funktionen, die überprüfen, ob die Position der Schlange mit der Position eines Apfels übereinstimmt
export function onSnake (position, { ignoreHead = false } = {})
{
    return snakeBody.some((segment, index) =>
    {
        if (ignoreHead && index === 0) return false;
        return equalPositions (segment, position);
    })
}

function equalPositions (pos1, pos2)
{
    return pos1.x === pos2.x && pos1.y === pos2.y
}

//Funktion, die bestimmt um wie viele Segmente die Schlange wächst
export function expandSnake (amount)
{
    newSegments += amount
}

//Funktion, durch die die Position des Kopfes der Schlange bestimmt wird
export function getSnakeHead ()
{
    return snakeBody[0];
}

//Funktion, die überprüft, ob die Schlange sich selbst trifft
export function snakeIntersection ()
{
    return onSnake (snakeBody[0], {ignoreHead : true})
}

//Funktion, durch die die Schlange wächst
function addSegments () {
    for (let i = 0; i < newSegments; i++) {
      snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
  
    newSegments = 0
  }