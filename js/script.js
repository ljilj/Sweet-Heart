// toggle menu
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);

    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});


// Display cake items
const menu = [
    {
        id: 1,
        title: "Cream cake",
        category: "cakes",
        price: 89.99,
        img: "./images/wedding-cake-img2.png"
    },
    {
        id: 2,
        title: "Chocolates",
        category: "sweets",
        price: 15.99,
        img: "./images/sweets-img1.png"
    },
    {
        id: 3,
        title: "4Cupcakes",
        category: "cakes",
        price: 12.99,
        img: "./images/cupcakes-img2.png"
    },
    {
        id: 4,
        title: "Candy",
        category: "sweets",
        price: 10.99,
        img: "./images/sweets-img4.png"
    },
    {
        id: 5,
        title: "Cream cupcakes",
        category: "cakes",
        price: 14.99,
        img: "./images/cupcakes-img3.png"
    },
    {
        id: 6,
        title: "Lollipops",
        category: "sweets",
        price: 6.99,
        img: "./images/sweets-img3.png"
    },
    {
        id: 7,
        title: "Mockaroon",
        category: "sweets",
        price: 15.99,
        img: "./images/sweets-img2.png"
    },
    {
        id: 8,
        title: "Brown cake",
        category: "cakes",
        price: 13.99,
        img: "./images/cupcakes-img1.png"
    },
    {
        id: 9,
        title: "Fruit cake",
        category: "cakes",
        price: 109.99,
        img: "./images/wedding-cake-img1.png"
    }
];

const sectionCenter = document.querySelector('.cakes .section-center');
const container = document.querySelector('.btn-container');

// display all item when page loads
// load items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    displayMenuButtons();
  });
  
  
  function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
      // console.log(item);
      return `<article class="item">
                <img src=${item.img} alt=${item.title} class="photo" />
                <div class="item-info">
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </div>
            </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
  }
  
  
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if(!values.includes(item.category)){
          values.push(item.category);
        }
        return values;
    }, ['all']);
    // console.log(categories);
    const categoryBtns = categories.
      map(function(category){
        return ` <button class="filter-btn" type="button"
        data-id=${category}>${category}</button>`
      })
      .join("");
      container.innerHTML = categoryBtns;
      const filterBtns = document.querySelectorAll('.filter-btn');
      // console.log(categoryBtn);
  
    // filter items
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function(e){
        // console.log(e.currentTarget.dataset.id);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if(menuItem.category === category) {
            return menuItem;
          }
        });
        // console.log(menuCategory);
        if(category === 'all'){
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
}