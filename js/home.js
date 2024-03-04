/* <img src="" alt="Roblox Gift Card" class="rounded-lg shadow-lg"></img> */

// gc: roblox, xbox, amazon, walmart, apple, ebay, facebook, starbucks, netflix, playstation, cashapp, paypal, itunes, steam, googleplay, fortnite

let giftcards=[ 'amazon', 'roblox', 'xbox', 'walmart', 'apple', 'ebay', 'facebook', 'starbucks', 'netflix', 'playstation', 'cashapp', 'paypal', 'itunes', 'steam', 'googleplay', 'fortnite'];
// console.log(giftcards);

const amazon = document.getElementById('amazon');
const roblox = document.getElementById('roblox');
const xbox = document.getElementById('xbox');
const walmart = document.getElementById('walmart');
const apple = document.getElementById('apple');
const ebay = document.getElementById('ebay');
const facebook = document.getElementById('facebook');
const starbucks = document.getElementById('starbucks');
const netflix = document.getElementById('netflix');
const playstation = document.getElementById('playstation');
const cashapp = document.getElementById('cashapp');
const paypal = document.getElementById('paypal');
const itunes = document.getElementById('itunes');
const steam = document.getElementById('steam');
const googleplay = document.getElementById('googleplay');
const fortnite = document.getElementById('fortnite');

const progressbar=document.getElementById('progress');

setTimeout(() => {
    roblox.classList.add('animate__fadeInUp');
}, 50);


setTimeout(() => {
    xbox.classList.add('animate__fadeInUp');
}, 100);


// Amazon
setTimeout(() => {
    amazon.classList.add('animate__fadeInUp');
}, 200);

// Walmart
setTimeout(() => {
    walmart.classList.add('animate__fadeInUp');
}, 300);

// Apple
setTimeout(() => {
    apple.classList.add('animate__fadeInUp');
}, 400);

// eBay
setTimeout(() => {
    ebay.classList.add('animate__fadeInUp');
}, 500);

// Facebook
setTimeout(() => {
    facebook.classList.add('animate__fadeInUp');
}, 600);

// Starbucks
setTimeout(() => {
    starbucks.classList.add('animate__fadeInUp');
}, 700);

// Netflix
setTimeout(() => {
    netflix.classList.add('animate__fadeInUp');
}, 800);

// PlayStation
setTimeout(() => {
    playstation.classList.add('animate__fadeInUp');
}, 900);

// Cash App
setTimeout(() => {
    cashapp.classList.add('animate__fadeInUp');
}, 1000);

// PayPal
setTimeout(() => {
    paypal.classList.add('animate__fadeInUp');
}, 1100);

// iTunes
setTimeout(() => {
    itunes.classList.add('animate__fadeInUp');
}, 1200);

// Steam
setTimeout(() => {
    steam.classList.add('animate__fadeInUp');
}, 1300);

// Google Play
setTimeout(() => {
    googleplay.classList.add('animate__fadeInUp');
}, 1400);

// Fortnite
setTimeout(() => {
    fortnite.classList.add('animate__fadeInUp');
}, 1500);



// <img src="./img/fortniteposter.png" alt="fortnite Gift Card" class="rounded-lg shadow-lg"></img>


amazon.addEventListener('click', () => {
    amazon.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'amazon.html';
    }, 500);
    let amazon50=document.getElementById('amazon50');
    
});


roblox.addEventListener('click', ()=>{
    roblox.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(()=>{
        window.location.href='roblox.html';
    },500);
});


xbox.addEventListener('click', () => {
    xbox.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(()=>{
        window.location.href='xbox.html';
    },500);
});

walmart.addEventListener('click', () => {
    walmart.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'walmart.html';
    }, 500);
});

apple.addEventListener('click', () => {
    apple.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'apple.html';
    }, 500);
});

ebay.addEventListener('click', () => {
    ebay.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'ebay.html';
    }, 500);
});

facebook.addEventListener('click', () => {
    facebook.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'facebook.html';
    }, 500);
});

starbucks.addEventListener('click', () => {
    starbucks.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'starbucks.html';
    }, 500);
});

netflix.addEventListener('click', () => {
    netflix.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'netflix.html';
    }, 500);
});

playstation.addEventListener('click', () => {
    playstation.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'playstation.html';
    }, 500);
});

cashapp.addEventListener('click', () => {
    cashapp.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'cashapp.html';
    }, 500);
});

paypal.addEventListener('click', () => {
    paypal.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'paypal.html';
    }, 500);
});

itunes.addEventListener('click', () => {
    itunes.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'itunes.html';
    }, 500);
});

steam.addEventListener('click', () => {
    steam.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'steam.html';
    }, 500);
});

googleplay.addEventListener('click', () => {
    googleplay.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'googleplay.html';
    }, 500);
});

fortnite.addEventListener('click', () => {
    fortnite.classList.replace('animate__fadeInUp', 'animate__fadeOutLeft');
    setTimeout(() => {
        window.location.href = 'fortnite.html';
    }, 500);
});
