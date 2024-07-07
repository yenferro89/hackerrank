// Maria plays college basketball and wants to go pro.
// Each season she maintains a record of her play.
// She tabulates the number of times she breaks her season record
// for most points and least points in a game.
// Points scored in the first game establish her record for the season,
// and she begins counting from there.

// Example
const scores: number[] = [12, 24, 10, 24];

// Prints
// [1, 1]

// Solution
// Initialize the counters for low and high
// Initialize the low and high records with the first match record
// Iterate over the array and compare the values

function breakingRecord(scores: number[]): number[] {
  const initial = {
    highScore: scores[0],
    lowScore: scores[0],
    highCounter: 0,
    lowCounter: 0
  }

  const counter = scores.slice(1).reduce((acc, score) => {
    if(score > acc.highScore){
        acc.highScore = score;
        acc.highCounter++;
    }
    else if(score < acc.lowScore){
        acc.lowScore = score;
        acc.lowCounter++;
    }
    return acc;
  }, initial)

  return [counter.highCounter, counter.lowCounter];
}

console.log(breakingRecord(scores));
