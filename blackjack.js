
const generateDeck = () => {

const deck = []; 
const suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
const cards = [ 
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King", 
    "Ace"
]; 

// {card: "King", suit: "Hearts"}

for (const card of cards){ 
    for (const suit of suits){ 
       // console.log(card, suit)
        deck.push({card: card, suit: suit}); 
    }
}
return deck;
};


const drawCard = (deck) => { 
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];
    deck.splice(randomIndex, 1); // starting index and a deleting count
    return card;
}
const checkScore = (hand) => { 
    let total = 0; 

    for (const cardObeject of hand){ 
        // check if it's j, q, k 
        if(cardObeject.card === "King"){  // check if its a king (+10)
            total +=10;
        } else if(cardObeject.card === "Queen"){ // check if its a queen (+10)
            total +=10;
        } else if(cardObeject.card === "Jack"){ // check if its a jack (+10)
            total +=10;
        } else if (cardObeject.card === "Ace"){   // check if its a ace (+1)
            total += 1;
        }
        // other wisde it's 2-10
        else { 
            total += Number(cardObeject.card);
        }
    }
    
    // console.log(total);
    return total;
};

const myDeck = generateDeck();
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck)); // Calling the function twice to pull 2 cards for player/dealer
playerHand.push(drawCard(myDeck));

dealerHand.push(drawCard(myDeck)); 
dealerHand.push(drawCard(myDeck)); 

console.log("Starting Player Hand", playerHand);
console.log("Starting Player Score", checkScore(playerHand));
console.log("Starting Dealer Hand", dealerHand);
console.log("Starting Dealer Score", checkScore(dealerHand));



console.log(playerHand);
checkScore(playerHand);

while (true) { 
    // deal player card 
    playerHand.push(drawCard(myDeck));
    // check if player bust (over 21) 
    const playerScore = checkScore(playerHand);
    let dealerScore = checkScore(dealerHand);
    if (playerScore > 21){ 
        console.log(`You Lose! Your final score was: ${playerScore},
            while the dealer had ${dealerScore}`); 
            break;
    };
    
    // check if player hits 21 
    if (playerScore === 21){ 
        console.log(`YOU WIN CONGRATS! YOUR FINAL SCORE WAS: ${playerScore}, while the dealer had
            ${dealerScore}; `)
            break;
    }

    // deal dealer card 
    dealerHand.push(drawCard(myDeck)); 
    // check if player bust (over 21)
    dealerScore = checkScore(dealerHand);
    
    if (dealerScore > 21){ 
        console.log(`You win! Your final score was: ${playerScore},
            while the dealer had ${dealerScore}`)
            break;
    }
    // check if player hits 21 
    if (dealerScore === 21){ 
        console.log(`YOU LOSE! YOUR FINAL SCORE WAS: ${playerScore}, while the dealer had
            ${dealerScore}; `)
            break;
    }
}


console.log("Ending Player Hand", playerHand);
console.log("Ending Player Score", checkScore(playerHand));
console.log("Ending Dealer Hand", dealerHand);
console.log("Ending Dealer Score", checkScore(dealerHand));



