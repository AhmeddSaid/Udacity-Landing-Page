/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navBarList = document.getElementById("navbar__list"); //empty list
const pageSections = document.querySelectorAll("section"); //sections
const navBarLinks = document.querySelectorAll(".navbar__menu a"); //navbar links
const listPageSections = [...document.querySelectorAll("section")]; // sections array
let navBarListItems = listPageSections.length;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// using getBoundingClientRect to help determining if secion is in view or not
const view = (pos) => {
    let sectionPos = pos.getBoundingClientRect();
    return sectionPos.top <= 150 && sectionPos.bottom >= 150;
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the nav
const buildNavBar = () => {
    listPageSections.forEach((listPageSection) => {
        // loop through all sections
        navBarItem = document.createElement("li"); // creates list item
        navBarSectionId = listPageSection.getAttribute("id"); // gives section id attribute
        navBarItemName = listPageSection.getAttribute("data-nav"); // gives section data-nav attribute
        navBarItemLink = document.createElement("a"); // creates link
        navBarItemLink.className = "menu__link"; // sets teh class name for each link to 'menu__link'
        let itemName = `${navBarItemName}`; // select each section data-nav value
        let itemLink = `#${navBarSectionId}`; // select each section id
        navBarItemLink.append(itemName); // sets the name of link to the data-nav of the section
        navBarItemLink.href = itemLink; // sets href attribute value to section id
        navBarItem.append(navBarItemLink); // adds link element to list item
        navBarList.append(navBarItem); // adds list item to the empty unordered list
    });
};
buildNavBar();

// Add class 'active' to section when near top of viewport
const activeSection = () => {
    listPageSections.forEach((listPageSection) => {
        // loop through all sections
        if (view(listPageSection)) {
            listPageSection.classList.add("your-active-class"); // if the section in viewport it will get active class
        } else {
            listPageSection.classList.remove("your-active-class");
        }
    });
};

document.addEventListener("scroll", activeSection);

// Scroll to anchor ID using scrollTO event
const scroll = () => {
    const menuClass = document.querySelectorAll(".menu__link"); // selects class 'menu__link'
    menuClass.forEach((id) => {
        // loop through each element with class'.menu__link'
        id.addEventListener("click", (scroll) => {
            scroll.preventDefault(); // prevent links from scrolling to target
            const anchorId = document.querySelector(id.getAttribute("href"));
            anchorId.scrollIntoView({ behavior: "smooth" }); // when link clicked scrolls into target with smooth behavior
        });
    });
};
scroll();
/* End of Code */
