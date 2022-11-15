// This is the Game Of War
// Deal 26 cards to each player from a deck of 52 cards
// The player who has the higher card wins the round
// A round that is tied will be zero points
// After all cards have been played, displayed the score and declare the winner
// Write a Unit Test using Mocha and Chai for at least one function 

// Declared suits, values, ranks
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Code below we have here is an empty array 
var deck = [];


// Created a Class named Cards with suit, value, rank as the parameters
class Card {
    constructor(suit, value, rank) {
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
}

// This is a function that generates a brand new deck of 52 cards
function newDeck() {
    let deck = new Array();

    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            deck.push(new Card(suits[i], values[x], ranks[x]));

        }
    }

    return deck;
}

// Test is newDeck() will generate all 52 cards... Success!
console.log(newDeck());
console.log('You now have 52 cards that are in order!');
console.log('');

// This function below shuffles the deck of 52 cards
function shuffle(deck) {
    for (let i = 0; i < 1000; i++) {
        let cardOne = Math.floor((Math.random() * deck.length));
        let cardTwo = Math.floor((Math.random() * deck.length));

        let t = deck[cardOne];

        deck[cardOne] = deck[cardTwo];
        deck[cardTwo] = t;
    }
}

// Test if the shuffle function shuffles all 52 cards in a random order... Success!
const deckOne = newDeck();
shuffle(deckOne);
console.log(deckOne);
console.log('Deck of cards are shuffled :)')
console.log('');

// Now we will deal deck of cards to two players
const splitDeck = Math.ceil(deckOne.length / 2);
playerOneDeck = (deckOne.slice(0, splitDeck));
playerTwoDeck = (deckOne.slice(splitDeck));

// Test to see if both players have 26 cards that are shuffled... Success!
console.log(playerOneDeck);
console.log(playerTwoDeck);
console.log('Both players now have 26 shuffled cards!');

var playerOneScore = 0;
var playerTwoScore = 0;


// Lets play the game!
function playGame() {
    for (i = 0; i < 26; i++) {
        console.log('');

        console.log(`Round ${i}!`);
        console.log('----------------------------------------------');
     
        console.log(playerOneDeck[i]);
        console.log(playerTwoDeck[i]);

        console.log('');

        if(playerOneDeck[i].rank > playerTwoDeck[i].rank) {
            playerOneScore += 1;
            console.log('Player One Score', playerOneScore);
            console.log('Player One wins!');
        } else if (playerTwoDeck[i].rank > playerOneDeck[i].rank) {
            playerTwoScore += 1;
            console.log('Player Two Score', playerTwoScore);
            console.log('Player Two wins!')
        } else {
            console.log('Tied! No points for both players :(')
        }

       
    }
}

let firstGame = playGame();
