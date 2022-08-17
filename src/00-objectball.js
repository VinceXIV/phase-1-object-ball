function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1 
                },

                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7 
                },
                
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15 
                },

                "Masno Pumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5 
                },

                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1 
                }
            }
        },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2 
                },

                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },

                "Desagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5 
                },


                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0 
                },


                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12 
                }
            }
        }
    }
}


function homeTeamName(){
    let game = gameObject();

    return game['home']['teamName']
}

function numPointsScored(playerName){
    const awayTeamPlayers = Object.keys(gameObject().away.players);
    const homeTeamPlayers = Object.keys(gameObject().home.players);

    if(awayTeamPlayers.indexOf(playerName) >= 0){
        return gameObject().away.players[playerName].points;
    }else if(homeTeamPlayers.indexOf(playerName) >= 0){
        return gameObject().home.players[playerName].points;
    }else{
        return "player doesn't exist"
    }
}

function shoeSize(playerName){
    const awayTeamPlayers = Object.keys(gameObject().away.players);
    const homeTeamPlayers = Object.keys(gameObject().home.players);

    console.log(playerName)
    if(awayTeamPlayers.indexOf(playerName) >= 0){
        return gameObject().away.players[playerName].shoe;
    }else if(homeTeamPlayers.indexOf(playerName) >= 0){
        return gameObject().home.players[playerName].shoe;
    }else{
        return "player doesn't exist"
    }
}


function teamColors(teamName){
    if(gameObject().home.teamName === teamName){
        return gameObject().home.colors;
    }else if (gameObject().away.teamName === teamName){
        return gameObject().away.colors;
    }else{
        return "team doesn't exist"
    }
}


function teamNames(){
    const gameObjectKeys = Object.keys(gameObject())

    let teams = []
    gameObjectKeys.forEach(key =>{
        teams.push(gameObject()[key].teamName);
    })

    return teams;
}


function playerNumbers(teamName){

    let playerJerseyNumbers = [];

    for(key in gameObject()){
        if(gameObject()[key].teamName === teamName){
            for(player in gameObject()[key].players){
                playerJerseyNumbers.push(gameObject()[key].players[player].number);
            }
        }
    }

    return playerJerseyNumbers;
}


function playerStats(playerName){
    for(homeOrAway in gameObject()){
        console.log(homeOrAway)
        if(Object.keys(gameObject()[homeOrAway].players).includes(playerName)){
            console.log(Object.keys(gameObject()[homeOrAway].players))
            console.log(playerName)
            return gameObject()[homeOrAway].players[playerName]
        }
    }
}


function bigShoeRebounds(){
    const allPlayerDetails = {...gameObject().home.players, ...gameObject().away.players}

    let largestShoeSize = 0;
    let playerWithLargestShoeSize = "";
    let reboundsByPlayerWithLargestShoeSize = 0;

    for(playerName in allPlayerDetails){

        if(allPlayerDetails[playerName].shoe > largestShoeSize){
            largestShoeSize = allPlayerDetails[playerName].shoe;
            playerWithLargestShoeSize = playerName;
            reboundsByPlayerWithLargestShoeSize = allPlayerDetails[playerName].rebounds;
        }
    }
    return reboundsByPlayerWithLargestShoeSize;
}


function mostPointsScored(){
    const allPlayerDetails = {...gameObject().home.players, ...gameObject().away.players}

    let mostPoints = 0;
    let playerWithMostPoints = "";

    for(playerName in allPlayerDetails){
        if(allPlayerDetails[playerName].points > mostPoints){
            playerWithMostPoints = playerName;
            mostPoints = allPlayerDetails[playerName].points;
        }
    }

    return playerWithMostPoints;
}


function winningTeam(){
    const homePlayerDetails = {...gameObject().home.players}
    const awayPlayerDetails = {...gameObject().away.players}

    let homeTeamPoints = 0;
    let awayTeamPoints = 0;

    for(playerName in homePlayerDetails){
        homeTeamPoints += homePlayerDetails[playerName].points;
    }

    for(playerName in awayPlayerDetails){
        awayTeamPoints += awayPlayerDetails[playerName].points;
    }

    if(homeTeamPoints > awayTeamPoints){
        return gameObject().home.teamName;
    }else if(awayTeamPoints > homeTeamPoints){
        return gameObject().away.teamName;
    }else{
        return "The game ended in a draw"
    }
}


function playerWithLongestName(){
    const allPlayerNames = [...Object.keys(gameObject().home.players), ...Object.keys(gameObject().away.players)]

    let longestName = "";
    for(playerName of allPlayerNames){
        if(playerName.length > longestName.length){
            longestName = playerName;
        }
    }

    return longestName;
}


function doesLongNameStealATon(){
    const longestName = playerWithLongestName()
    const allPlayerDetails = {...gameObject().home.players, ...gameObject().away.players}

    for(playerName in allPlayerDetails){
        if(playerName !== longestName){
            if(allPlayerDetails[playerName].steals > allPlayerDetails[longestName].steals){
                return false;
            }
        }
    }

    return true;
}