function revealSurprise() {
    const box = document.querySelector('.box')
    const quote = document.querySelector('.quote');
    const decorations = document.querySelector('.decorations');
    
    box.style.animation = 'none';
    box.style.textAlign = 'center';
    box.innerText = 'Happy birthday mum'
    
    quote.style.display = 'block';
    quote.innerText = 'Happy birthday to the most incredible Mum in the world! Having you in our lives has been a true blessing. Your unwavering support, boundless care, and wise advice mean the world to us. We are so grateful to have you by our side. Words can not express just how special you are, but we want you to know that you are loved, cherished, and appreciated more than words can say. Here is to another amazing year ahead! Happy birthday, Mum!';
    
    decorations.style.display = 'block';
    launchDecoration();
}

function launchDecoration() {
    for(let i = 0; i < 50; i++){
        let star = document.createElement('div');
        star.innerText = '❤';
        star.style.position = 'absolute';
        star.style.fontSize = `${Math.random() * 20 + 10}px`;
        star.style.color = 'red';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.opacity = 'Math.random()';
         document.querySelector('.decorations').appendChild(star);
    };
}

