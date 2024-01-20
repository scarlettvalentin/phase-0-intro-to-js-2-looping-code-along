const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}



function writeCards(name, event) {
    const thankYouCards = [];
    for (let i = 0; i < name.length; i++) {
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

function countDown(num) {
    while(num >= 0) {
        console.log(num);
        num--;
    }
}

countDown(10);