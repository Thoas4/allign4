var a = "hello bozo"
var test = ["test"]
var board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]
var level = [0, 0, 0, 0, 0, 0, 0]
var turn = 1;

function turner()
{
    if(turn==2)
    {
        turn = 1
    }else
    {
        turn = 2
    }
}

function d1() 
{
    board[0,level[0]]=turn
    turner()
    level[0]++
}

function d2() 
{
    board[1,level[1]]=turn
    turner()
    level[1]++
}

function d3() 
{
    board[2,level[2]]=turn
    turner()
    level[2]++
}

function d4() 
{
    board[3,level[3]]=turn
    turner()
    level[3]++
}

function d5() 
{
    board[4,level[4]]=turn
    turner()
    level[4]++
}

function d6() 
{
    board[5,level[5]]=turn
    turner()
    level[5]++
}

function d7() 
{
    board[6,level[6]]=turn
    turner()
    level[6]++
}

function print()
{
var toAdd = document.createDocumentFragment();
for(var i=0; i<7;i++)
{
    console.log(a);
    var newDiv = document.createElement('div');
    newDiv.id='c'+i;
    newDiv.className="dot";
    toAdd.appendChild(newDiv);
}
document.appendChild(toAdd);
}