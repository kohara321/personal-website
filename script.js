const lastName = document.getElementById('lastName');
const firstName = document.querySelector('h1');

function colorChange() {
  lastName.style.color = '#f71924';
  firstName.style.color = '#f3ff4a';
}

firstName.addEventListener('mouseover', colorChange);
lastName.addEventListener('mouseover', colorChange);

function mouseOut () {
    lastName.style.color = '#9e9e9b';
    firstName.style.color = '#9e9e9b';
    h3.style.color = '#9e9e9b';
}

lastName.addEventListener('mouseout', mouseOut);
firstName.addEventListener('mouseout', mouseOut);

const h3 = document.createElement('h3');
h3.textContent = "Hey, I'm";
document.querySelector("body").appendChild(h3);