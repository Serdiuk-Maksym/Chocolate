// Створення елементу <script> для підключення зовнішнього скрипту
var externalScript = document.createElement('script');
externalScript.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
document.head.appendChild(externalScript);

// Підключення скрипту 1
var script1 = document.createElement('script');
script1.src = './slick.min.js';
document.head.appendChild(script1);

// Підключення скрипту 2
var script2 = document.createElement('script');
script2.src = './slider.js';
document.head.appendChild(script2);

// тут можна продовжити підключати інші скрипти, якщо вони є
