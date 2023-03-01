const game = [
    [4, 2], // 1 === 8
    [5, 5], // 2 === 10
    [10, 5], // 3 === 15 => doit valoir 30
    [3, 0], // 4 === 3 => doit valoir 6
    [4, 5], // 5 === 9 
    [2, 5], // 6 === 7
    [0, 10], // 7 === 10
    [7, 3], // 8 === 10 => doit valoir 20
    [0, 0], // 9 === 0
    [5, 2], // 10 === 7

    // 2 Manches Bonus si strike à la 10ème manche et 11ème manche

    [,], // 11
    [,], // 12
];

function testScore(party) {
    for (let i = 0; i < party.length; i++) { // ==> Boucle qui parcourt les différents tableaux
        let firstTry = party[i][0]; // Premier tire d'une manche
        let secondTry = party[i][1]; // Second tire d'une manche 

        if (firstTry >= 1 && secondTry >= 1) { // Systeme de calcul de score du Spare ==> Permet de vérifier qu'il s'agisse bien d'un spare et non d'un strike
            if (firstTry + secondTry === 10) {
                party[i + 1][0] = party[i + 1][0] * 2; // ==> Permet de x2 le la première valeur du tableau suivant
            }
        }
        console.log(party[i])

    }

}
testScore(game);