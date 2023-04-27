const hands = ['rock', 'paper', 'scissors'];
function getHand(): string{

    return hands[(Math.random() * 10) % 3]
};
interface Player {
    name: string,
    getHand: string,
    wins: number,
}

let player1: Player= {
    name: 'Player 1',
    getHand: getHand(),
    wins: 0,
};

let player2: Player = {
    name: 'Player 2',
    getHand: getHand(),
    wins: 0,
};

let player3: Player= {
    name: 'Player 3',
    getHand: getHand(),
    wins: 0,
};

let player4: Player = {
    name: 'Player 4',
    getHand: getHand(),
    wins: 0,
};

function playRound(player1:Player, player2:Player) {
    player1.getHand = getHand();
    player2.getHand = getHand();

    if (player1.getHand == player2.getHand) {
        console.log(`${player1.name}:${player1.wins} played ${player1.getHand}`)
        console.log(`${player2.name}:${player2.wins} played ${player2.getHand}`)
        console.log("It's a tie!\n")
        return null
    }
    else if ((player1.getHand == 'rock' && player2.getHand == 'scissors') || (player1.getHand == 'paper' && player2.getHand == 'rock') || (player1.getHand == 'scissors' && player2.getHand == 'paper')) {
        player1.wins++
        console.log(`${player1.name}:${player1.wins} played ${player1.getHand}`)
        console.log(`${player2.name}:${player2.wins} played ${player2.getHand}`)
        console.log(`${player1.name} wins!\n`)
        return player1
    }
    else {
        player2.wins++
        console.log(`${player1.name}:${player1.wins} played ${player1.getHand}`)
        console.log(`${player2.name}:${player2.wins} played ${player2.getHand}`)
        console.log(`${player2.name} wins!\n`)
        return player2
    }
}


function playGame(player1:Player, player2:Player, playUntil: number) {
    player1.wins = 0;
    player2.wins = 0;
    while (player1.wins < playUntil && player2.wins < playUntil) {
        playRound(player1, player2);
    }
    if (player1.wins > player2.wins) {
        return player1;
    }
    else {
        return player2;
    }
}

function playTournament(player1:Player, player2:Player, player3:Player, player4:Player, playUntil:number) {
    let finalist1 = playGame(player1, player2, playUntil);
    let finalist2 = playGame(player3, player4, playUntil);
    let champion = playGame(finalist1, finalist2, playUntil);
    console.log(`${champion.name} is the world champion!`)

    let scoreP1:HTMLElement | null  = document.getElementById('scoreP1');
    let scoreP2:HTMLElement | null  = document.getElementById('scoreP2');
    let scoreP3:HTMLElement | null  = document.getElementById('scoreP3');
    let scoreP4:HTMLElement | null  = document.getElementById('scoreP4');
    if(scoreP1){
    scoreP1.innerHTML = (`Games won:${player1.wins}`);
    }
    if(scoreP2){
    scoreP2.innerHTML = (`Games won:${player2.wins}`);
}
    if(scoreP3){
    scoreP3.innerHTML = (`Games won:${player3.wins}`);
}
    if(scoreP4){
    scoreP4.innerHTML = (`Games won:${player4.wins}`);
}
    let worldChamp:HTMLElement | null = document.getElementById('worldChamp');
    if(worldChamp){
    worldChamp.innerHTML = (`${champion.name} is the world champion!`);
    }
    return champion;
}

player1.name = 'Hampter Bampter';
player2.name = 'Glam Sally';
player3.name = 'Sweeaboo';
player4.name = 'Monito';

let buttonPlay:HTMLElement | null = document.getElementById('buttonPlay');
if(buttonPlay){
buttonPlay.style.height = '35px';
buttonPlay.style.width = '125px';
buttonPlay.addEventListener('click', function () {
    playTournament(player1, player2, player3, player4, 5)
})};