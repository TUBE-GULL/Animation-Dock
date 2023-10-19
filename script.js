const cards = document.querySelectorAll('.window');
const blockAnimation = document.querySelectorAll('.block-animation');

const animationCardsEnter = (card) => {
   card.style.width = '90px';
   card.style.height = '90px';
   card.style.transform = 'translateZ(200px) translateY(-25px) ';
};

const animationCardsEnterOne = (card) => {
   card.style.width = '80px';
   card.style.height = '80px';
   card.style.transform = 'translateZ(150px) translateY(-18px)';
};

const animationCardsEnterTwo = (card) => {
   card.style.width = '70px';
   card.style.height = '70px';
   card.style.transform = 'translateZ(200px) translateY(-8px)';
};

const animationCardsLeave = (card) => {
   card.style.width = '60px';
   card.style.height = '60px';
   card.style.transform = 'translateZ(0px) translateY(0px)';
};

cards.forEach((card, index) => {

   card.addEventListener('mouseenter', () => {
      animationCardsEnter(card)
      if (cards[index + 2]) {
         animationCardsEnterTwo(cards[index + 2])
      }
      if (cards[index + 1]) {
         animationCardsEnterOne(cards[index + 1])
      }
      if (cards[index - 1]) {
         animationCardsEnterOne(cards[index - 1])
      }
      if (cards[index - 2]) {
         animationCardsEnterTwo(cards[index - 2])
      }
   })

   card.addEventListener('mouseleave', () => {
      animationCardsLeave(card)
      if (cards[index + 2]) {
         animationCardsLeave(cards[index + 2])
      }
      if (cards[index + 1]) {
         animationCardsLeave(cards[index + 1])
      }
      if (cards[index - 1]) {
         animationCardsLeave(cards[index - 1])
      }
      if (cards[index - 2]) {
         animationCardsLeave(cards[index - 2])
      }
   })

   card.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const cardX = card.getBoundingClientRect().left;
      const cardWidth = card.offsetWidth;
      const center = cardX + cardWidth / 2;

      if (mouseX < center - 5) {
         card.style.transform = `translateZ(200px) translateY(-25px) translateX(-2.5px)`;
         card.style.marginRight = '4px';
         card.style.marginLeft = '4px';
      } else if (mouseX > center + 5) {
         card.style.transform = `translateZ(200px) translateY(-25px) translateX(2.5px)`;
         card.style.marginRight = '4px';
         card.style.marginLeft = '4px';
      } else {
         card.style.transform = `translateZ(200px) translateY(-30px) translateX(0)`;
      }
   })

   card.addEventListener('click', () => {
      card.style.animation = 'bounce 1s infinite';
      card.style.animation = 'bounce 1.7s infinite ease-in-out';

      setTimeout(() => {
         card.style.animation = '';
      }, 3200);
   })
});


// card.addEventListener('click', () => {
//    card.style.transform = 'translateZ(200px) translateY(-55px)';

//    setTimeout(() => card.style.transform = 'translateZ(0px) translateY(-0px)', 100)
//    setTimeout(() => card.style.transform = 'translateZ(200px) translateY(-60px)', 200)
// })


// const mouseX = e.clientX;


// if (prevMouseX > mouseX) {
//    card.style.transform = 'translateZ(200px) translateY(-25px) translateX(+2.5px)';
// } else {
//    card.style.transform = 'translateZ(200px) translateY(-25px) translateX(-2.5px)';
// }

// prevMouseX = mouseX;

// let prevMouseX = 0; // Создайте переменную для хранения предыдущего положения мыши

// card.addEventListener('mousemove', (e) => {
//    const mouseX = e.clientX;

//    if (prevMouseX > mouseX) {
//       // Мышка двигается влево
//       card.style.transform = 'translateX(-10px)';
//    } else {
//       // Мышка двигается вправо
//       card.style.transform = 'translateX(10px)';
//    }

//    prevMouseX = mouseX; // Сохраняем текущее положение мыши для следующего события
// });

// const mouseX = e.clientX;
// const offsetX = mouseX - startX; // Вычисляем разницу

// // Перемещаем карточку в обратную сторону от мыши
// card.style.transform = `translateZ(200px) translateY(-25px) translate(${-offsetX}px, -1px)`;



// const mouseX = e.clientX;
// const mouseY = e.clientY;
// const containerX = blockAnimation[0].offsetWidth;
// const containerY = blockAnimation[0].offsetHeight;
// const iconX = mouseX - containerX;
// const iconY = mouseY - containerY;

// // card.style.left = `${iconX}+2 px`;
// // card.style.top = `${iconY}+2 px`;
// card.style.transform = `translateZ(200px) translateY(-25px) translate(${iconX}px, ${iconY}px)`;

// const mouseX1 = e.clientX;
// const cardX = card.getBoundingClientRect().left;
// // const offsetX = mouseX1 - cardX - card.offsetWidth;
// const offsetX = Math.abs(mouseX1 - cardX - card.offsetWidth);

// if (offsetX < 0) {
//    card.style.transform = `translateZ(200px) translateY(-25px)  translate(${-offsetX / 10}px)`;
// } else {
//    card.style.transform = `translateZ(200px) translateY(-25px)  translate(${offsetX / 10}px)`;
// }
