setTimeout(() => {
    console.log('Timeout.');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('Hi, again!')
}, 1000);
