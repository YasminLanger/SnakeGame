//importierte Funktionen
import { expandSnake, onSnake } from "./snake.js";

//Variablen
const gridSize = 21;
let food = randomFoodPosition ();
const expansionRate = 1;

/*Funktion, die die Schlange verlängert, wenn sie auf einen Apfel trifft und
einen neuen Apfel an einer zufälligen Stelle auf dem Spielbrett erscheinen lässt*/
export function update ()
{
    if (onSnake (food))
    {
        expandSnake (expansionRate);
        food = randomFoodPosition ();
    }
}

//Funktion, durch die die Klasse "food" an eine Zelle des Spielbretts vergeben wird
export function draw (gameBoard)
{
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add ("food");
    gameBoard.appendChild(foodElement);
}

/*Funktionen, die eine zufällige Position auf dem Spielbrett auswählt und diese zu einem Food-Element ändert,
wenn kein anderes Food-Element vorhanden ist. Zudem kann kein Food-Element auf der Schlange erscheinen. */
function randomFoodPosition ()
{
    let newFood;
    while (newFood == null || onSnake(newFood))
    {
        newFood = randomGridPosition ();
    }
    return newFood;
}

function randomGridPosition ()
{
    return (
    {
        x: Math.floor(Math.random() * gridSize) + 1,
        y: Math.floor(Math.random() * gridSize) + 1
    })
}

//Funktion, durch die das Spielbrett begrenzt wird, sodass weder die Äpfel noch die Schlange sich außerhalb befinden können.
export function outsideGrid (position)
{
    return (
    position.x < 1 || position.x > gridSize ||
    position.y < 1 || position.y > gridSize
    )
}

