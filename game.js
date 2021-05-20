//importierte Funktionen
import {snakeSpeed, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection} from "./snake.js";
import {outsideGrid, update as updateFood, draw as drawFood} from "./food.js";

//Variablen
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById ("game_board");


//Game Loop -> Funktion, die in einem bestimmten Zeitabstand wiederholt wird; unter anderem Position der Schlange und der Äpfel werden hier regelmäßig überprüft und ggf. erneuert
function main (currentTime)
{

    if (gameOver)
    {
        if (confirm("Du hast verloren. Klicke auf 'Ok' um neu zu starten."));
        {
            window.location = "/Snake.html";
        }
        return;
    }

    window.requestAnimationFrame (main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) return;
    lastRenderTime = currentTime;
    
    update ();
    draw ();
}
window.requestAnimationFrame (main);


//Funktion, die die Positionen der Äpfel und der Schlange bestimmt und zudem das Bewegen der Schlange ermöglicht
function update ()
{
    updateSnake ();
    updateFood ();
    checkDeath ();
}

//Funktion, die die Schlange und die Äpfel auf dem Spielbrett erscheinen lässt
function draw()
{
    gameBoard.innerHTML = "";
    drawSnake (gameBoard);
    drawFood (gameBoard);
}


//Funktion, die überprüft, ob das Spiel verloren wurde (wenn die Schlange das Spielbrett verlässt oder sich selbst kreuzt)
function checkDeath()
{
    gameOver = outsideGrid (getSnakeHead ()) || snakeIntersection ();
}
