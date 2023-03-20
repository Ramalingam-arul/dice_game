function changedice(n)
    {
        var r = Math.ceil(Math.random()*6);
        var s="images/dice"+String(r)+".png"
        document.querySelector((".dice .img"+n)).src=s;    
        return r;  
    }

function checkWinner(p1,p2)
{
    if(p1>p2)
    {
        document.querySelector(".container h1").textContent="🏆 Player1 Wins!";    
    }
    else if(p2>p1)
    {
        document.querySelector(".container h1").textContent="Player2 Wins! 🏆";
    }
    else if(p2==p1)
    {
        document.querySelector(".container h1").textContent="Draw! 😑";
    }
}

checkWinner(changedice("1"),changedice("2"));