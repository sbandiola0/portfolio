const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

document.addEventListener('DOMContentLoaded', () => {
  const homeContainer = document.getElementById('home');
  const containers = document.querySelectorAll('.navigation ul li');

  // Hide all sections by default
  document.querySelectorAll('div[id]').forEach(section => {
      section.classList.add('hidden');
      section.classList.remove('block');
  });

  // Show the Home container by default
  homeContainer.classList.add('block');
  homeContainer.classList.remove('hidden');

  // Add event listeners to navigation items
  containers.forEach((item, index) => {
      item.addEventListener('click', () => {
          containers.forEach(li => li.classList.remove('active'));
          item.classList.add('active');

          // Hide all sections
          document.querySelectorAll('div[id]').forEach(section => {
              section.classList.add('hidden');
              section.classList.remove('block');
          });

          // Show the selected section with a slide transition
          const targetId = item.querySelector('a').getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          
          targetSection.classList.remove('hidden');
          targetSection.classList.add('block');
          targetSection.classList.add('transition');
          targetSection.classList.add('slide-in');
      });
  });
});
