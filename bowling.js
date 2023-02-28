const game = [
    [4, 2], // 1
    [5, 5], // 2
    [8, 1], // 3
    [3, 0], // 4
    [4, 5], // 5
    [2, 5], // 6
    [10, 0], // 7
    [7, 3], // 8
    [0, 0], // 9
    [5, 2], // 10

    // 2 Manches Bonus si strike à la 10ème manche et 11ème manche

    [,], // 11
    [,], // 12
];

function testScore(party) {
    for(let i = 0; i < party.length; i++) {
        let firstTry = party[i][0];
        let secondTry = party[i][1];
        
        if(firstTry+secondTry === 10) {
            console.log(`✔ OK ${firstTry} ${secondTry} = ${firstTry+secondTry}`);
        }
        else{
            console.log(`✖ Pas OK ${firstTry} ${secondTry} = ${firstTry+secondTry}`);
        }

        // console.log(firstTry + secondTry);
    }
    console.log('---------');
}
testScore(game);