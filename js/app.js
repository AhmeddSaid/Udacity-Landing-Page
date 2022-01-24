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
const navBarList = document.getElementById("navbar__list");
const pageSections = document.querySelectorAll("section");
const navBarLinks = document.querySelectorAll(".navbar__menu a");
const MenuClass = document.querySelectorAll(".menu__link");
const listPageSections = [...document.querySelectorAll("section")];
let navBarListItems = listPageSections.length;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
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
        navBarItem = document.createElement("li");
        navBarSectionId = listPageSection.getAttribute("id");
        navBarItemName = listPageSection.getAttribute("data-nav");
        navBarItemLink = document.createElement("a");
        navBarItemLink.className = "menu__link";
        let itemName = `${navBarItemName}`;
        let itemLink = `#${navBarSectionId}`;
        navBarItemLink.append(itemName);
        navBarItemLink.href = itemLink;
        navBarItem.append(navBarItemLink);
        navBarList.append(navBarItem);
    });
};

// Add class 'active' to section when near top of viewport
const activeSection = () => {
    listPageSections.forEach((listPageSection) => {
        if (view(listPageSection)) {
            listPageSection.classList.add("your-active-class");
        } else {
            listPageSection.classList.remove("your-active-class");
        }
    });
};

const addActiveClass = document.addEventListener("scroll", activeSection);

// Scroll to anchor ID using scrollTO event
const scroll = () => {
    const menuClass = document.querySelectorAll(".menu__link");
    menuClass.forEach((id) => {
        id.addEventListener("click", (scroll) => {
            scroll.preventDefault();
            const anchorId = document.querySelector(id.getAttribute("href"));
            anchorId.scrollIntoView({ behavior: "smooth" });
        });
    });
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNavBar();

// Scroll to section on link click
scroll();

// Set sections as active
addActiveClass;
