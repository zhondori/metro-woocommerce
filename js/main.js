// Query Selector fucntion short;
const q = href => document.querySelector(href);

let a = document.querySelectorAll(".nav_list__item:not(:last-child)");
let list = document.querySelectorAll(".nav_list__item_ul");

// Lits mouseleve event;
list.forEach(el => {
    el.addEventListener("mouseleave", () => {
        el.classList.add("d-none");
    })
});

// Link click event;
a.forEach((anchor, id) => {
    anchor.addEventListener("mouseenter", () => {
        list[id].classList.remove("d-none");
    })
    anchor.addEventListener("mouseleave", () => {
        list[id].classList.add("d-none");
    });
    anchor.addEventListener("click", () => {
        q(".colMdSix").classList.remove("navbar-showing");
    });
})

// Sticky Navbar and To Top button;
let navbar = document.getElementById("navigation");
let toTop = q(".to-top");

window.addEventListener("scroll", () => {
    // Navbar;
    if (window.scrollY > 200) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }

    // To top;
    if (window.scrollY > 400) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

// Categories show function 
let element = q(".element"),
    categoriesList = q(".categories"),
    image = q(".categories_img"),
    bool = false,
    firstSource = "imgs/menubar.png",
    lastSource = "imgs/crossbar.png";

const reSource = () => {
    bool = !bool;
    image.src = bool ? lastSource : firstSource;
    categoriesList.classList.toggle("show");
}

element.addEventListener("click", reSource);


// Main Header animation event here
const listItems = document.querySelectorAll(".main_ul__li"),
    indicators = document.querySelectorAll(".indicator__child");
let count = 0;
function ReClassing() {
    count++;
    if (count > indicators.length - 1) {
        count = 0;
        listItems.forEach(li => li.classList.remove("active-content"));
        indicators.forEach(li => li.classList.remove("active_indicator"));
        listItems[count].classList.add("active-content");
        indicators[count].classList.add("active_indicator");
    } else {
        listItems.forEach(li => li.classList.remove("active-content"));
        indicators.forEach(li => li.classList.remove("active_indicator"));
        listItems[count].classList.add("active-content");
        indicators[count].classList.add("active_indicator");
    }

}

indicators.forEach((i, id) => {
    i.addEventListener("click", () => {
        count = id;
        listItems.forEach(li => li.classList.remove("active-content"));
        indicators.forEach(li => li.classList.remove("active_indicator"));
        listItems[id].classList.add("active-content");
        indicators[id].classList.add("active_indicator");
    })
})

setInterval(ReClassing, 6000);

// Add to cart button box
let addToCartBtn = document.querySelectorAll(".btn-box"),
    productCard = document.querySelectorAll(".main-col__child"),
    productImages = document.querySelectorAll(".main-col__child > img");

productCard.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
        addToCartBtn[index].classList.add("hovered");
        productImages[index].classList.add("small");
    })

    card.addEventListener("mouseleave", () => {
        addToCartBtn[index].classList.remove("hovered");
        productImages[index].classList.remove("small");
    })
})

// Submit form function for not reloading;

const form = q(".submit-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

// bar click function

let bar = q(".bar > i"),
    colMdSix = q(".colMdSix"),
    showNavBar = false;
const stickyBar = () => {
    showNavBar = !showNavBar;
    if (showNavBar) {
        colMdSix.classList.add("navbar-showing");
        console.log(showNavBar);
    } else {
        colMdSix.classList.remove("navbar-showing");
        console.log(showNavBar);
    }
}
bar.addEventListener("click", stickyBar);

// Add to cart button effect
let addCart = document.querySelectorAll(".add-to-cart-btn"),
    documentCount = q(".count"),
    counter = 0,
    btnBool = false;
addCart.forEach(button => {
    button.addEventListener("click", () => {
        counter++;
        console.log(btnBool);
        documentCount.innerHTML = counter;
    });
});