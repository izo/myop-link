const themeToggleBtn = document.getElementById('toggle-theme');
const links = document.querySelectorAll('.website-links li, .links li');

function toggleDarkTheme() {
  document.body.classList.toggle('dark');
}

function addAnimationClass() {
  this.classList.add('animate');
}

function removeAnimationClass() {
  this.classList.remove('animate');
}

function handleColorSchemeChange(e) {
  if (e.matches) {
	document.body.classList.add('dark');
  } else {
	document.body.classList.remove('dark');
  }
}

themeToggleBtn.addEventListener('click', toggleDarkTheme);

links.forEach(link => {
  link.addEventListener('mouseenter', addAnimationClass);
  link.addEventListener('mouseleave', removeAnimationClass);
});

// Check for system color scheme preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
}

// Listen for changes in system color scheme preference
window.matchMedia('(prefers-color-scheme: dark)').addListener(handleColorSchemeChange);
