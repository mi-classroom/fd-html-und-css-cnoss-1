const initBraggyNumbers = () => {
  const target = document.querySelector("[data-js-braggy-numbers]");
  if(!target) return;

  const dataUrl = "/assets/data/specs.json";

  fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
      const numbers = data.results.map((item, index) => {
        const rowspan = index === 0 ? 12 : 6;
        const niceNumber = item.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        return `
          <li class="masonry-item" data-colspan="4" data-rowspan="${rowspan}">
            <dl>
              <dt>
                <span class="icon">${item.icon}</span>
                <span class="text">${item.name}</span>
              </dt>
              <dd>${niceNumber}</dd>
            </dl>
          </li>`;
      }).join("");

      target.innerHTML = numbers;
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
};



/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', () => {
  initBraggyNumbers();
});