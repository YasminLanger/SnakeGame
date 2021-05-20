//Variablen
const leftKey = "ArrowLeft";
const rightKey = "ArrowRight";
const upKey = "ArrowUp";
const downKey = "ArrowDown";

let inputDirection = {x: 0, y:0};
const leftDirection = {x: -1, y: 0};
const rightDirection = {x: 1, y: 0};
const upDirection = {x: 0, y: -1};
const downDirection = {x: 0, y: 1};

let ld = false;
let rd = false;
let ud = false;
let dd = false;

/*Ändert die Richtung, in die sich die Schlange bewegt entsprechend der Pfeiltaste, die gedrückt wurde; verhindert, dass die 
Schlange sich in die Richtung bewegen kann, aus der sie vorher kam*/
window.addEventListener ("keydown" , function (e)
{
    var key = e.key

    if ((key == leftKey) && (!rd)) 
    {  
        inputDirection = leftDirection;
        ld = true;
        ud = false;
        dd = false;

    }

    if ((key == rightKey) && (!ld)) 
    {
        inputDirection = rightDirection;
        rd = true;
        ud = false;
        dd = false;
        
    }

    if ((key == upKey) && (!dd)) 
    {
        inputDirection = upDirection;
        ud = true;
        rd = false;
        ld = false;
        
    }

    if ((key == downKey) && (!ud)) 
    { 
        inputDirection = downDirection;
        dd = true;
        rd = false;
        ld = false;
        
    }
})      


export function getInputDirection ()
{
    return inputDirection;
}
