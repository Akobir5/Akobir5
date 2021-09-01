let text = document.querySelector('.textBig'),
  name  = document.querySelector('.name'),
  whoYou = document.getElementsByName('who')[0],
  massageText = document.getElementsByName('massage')[0];



text.addEventListener('mouseenter', function () {
  text.textContent = 'I am Web Development',
  text.style.cursor = 'pointer'
});

text.addEventListener('mouseleave', function () {
  text.textContent = 'Hello World'
});

whoYou.addEventListener('input', function () {
  massageText.value = 'Mening ismim ${whoYou.value} . Men'
})

