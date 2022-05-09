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
}

lastName.addEventListener('mouseout', mouseOut);
firstName.addEventListener('mouseout', mouseOut);

function spin() {
    const wolf = document.getElementById('wolf');
    wolf.addEventListener('click', spin);
};