/* .search-form,  .cart-items-container ve .navbar classlarına ulaşmak için */

const searchForm =  document.querySelector(".search-form");
const cartItems = document.querySelector(".cart-items-container");
const navBar = document.querySelector(".navbar");

/* search-form classına Ulaştığımızı teyit için ekrana yazdırdık */
console.log(searchForm);
console.log(cartItems);
console.log(navBar);

/* #search-btn , #cart-btn  ve #menu-btn id'lerine ulaşmak için */

const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

/* #search-btn ve cart-btn id'lerine Ulaştığımızı teyit için ekrana yazdırdık */
console.log(searchBtn);
console.log(cartBtn);
console.log(menuBtn);

/* searchBtn'a tıklandığında searchForm'a active classı eklemek gerekiyor.  ikinci tıklamada active classı kaldırmak gerekiyor. Active class ilk tıklamada ekleniyor ve search forma açılıyor, ikinci tıklamada active class kaldırılıyor ve search form kayboluyor. .toggle kullandığımız için */



searchBtn.addEventListener("click", function (){
    searchForm.classList.toggle("active")
    /* sadece search icona ikinci tıklayışda değil, search form açıkken ekranın herhangi bir yerine tıklayınca da search form kapansın istiyorum. composedPath() tıkladığımızı bulamamıza yarıyor.  */
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(searchBtn) && 
            !e.composedPath().includes(searchForm)
        ) 
        {
            searchForm.classList.remove("active");
            
        }

    })
});

/*!Cart items görüntülemek ve kapatmak için */

cartBtn.addEventListener("click", function (){
    cartItems.classList.toggle("active")
    /* sadece cart icona ikinci tıklayışda değil, search form açıkken ekranın herhangi bir yerine tıklayınca da cart items kapansın istiyorum. composedPath() tıkladığımızı bulamamıza yarıyor.  */
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(cartBtn) && 
            !e.composedPath().includes(cartItems)
        ) 
        {
            cartItems.classList.remove("active");
            
        }

    })
});


/*!Menu görüntülemek ve kapatmak için */

menuBtn.addEventListener("click", function (){
    navBar.classList.toggle("active");
    /* sadece menu icona ikinci tıklayışda değil, menu açıkken ekranın herhangi bir yerine tıklayınca da menu kapansın istiyorum. composedPath() tıkladığımızı bulamamıza yarıyor.  */
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(menuBtn) && 
            !e.composedPath().includes(navBar)
        ) 
        {
            navBar.classList.remove("active");
            
        }

    })
});

/* Navbar Home aktif olursa */

const navbarHome = document.querySelector(".navbar-home");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarProducts = document.querySelector(".navbar-products");
const navbarAbout = document.querySelector(".navbar-about");
const navbarReview = document.querySelector(".navbar-review");
const navbarContact = document.querySelector(".navbar-contact");
const navbarBlogs = document.querySelector(".navbar-blogs");

const linkHome = document.querySelector(".link-home");
const linkMenu = document.querySelector(".link-menu");
const linkProducts = document.querySelector(".link-products");
const linkAbout = document.querySelector(".link-about");
const linkReviews = document.querySelector(".link-reviews");
const linkContact = document.querySelector(".link-contact");
const linkBlogs = document.querySelector(".link-blogs");

// console.log(navbarHome);
// console.log(navbarMenu);
// console.log(navbarProducts);
// console.log(navbarAbout);
// console.log(navbarReview);
// console.log(navbarContact);
// console.log(navbarBlogs);
// console.log(linkHome);
// console.log(linkMenu);
// console.log(linkProducts);
// console.log(linkAbout);
// console.log(linkReviews);
// console.log(linkContact);
// console.log(linkBlogs);




document.addEventListener("click", function(e){
    if (
        e.composedPath().includes(navbarHome) || 
        e.composedPath().includes(linkHome)
    ) 
    {        
        navbarHome.classList.add("active");
        navbarMenu.classList.remove("active");
        navbarProducts.classList.remove("active");
        navbarAbout.classList.remove("active");
        navbarReview.classList.remove("active");
        navbarContact.classList.remove("active");
        navbarBlogs.classList.remove("active");

        linkHome.classList.add("active");
        linkMenu.classList.remove("active");
        linkProducts.classList.remove("active");
        linkAbout.classList.remove("active");
        linkReviews.classList.remove("active");
        linkContact.classList.remove("active");
        linkBlogs.classList.remove("active");
        
    }
    if (
        e.composedPath().includes(navbarMenu) || 
        e.composedPath().includes(linkMenu)
    ) 
    {        
        navbarHome.classList.remove("active");
        navbarMenu.classList.add("active");
        navbarProducts.classList.remove("active");
        navbarAbout.classList.remove("active");
        navbarReview.classList.remove("active");
        navbarContact.classList.remove("active");
        navbarBlogs.classList.remove("active");

        linkHome.classList.remove("active");
        linkMenu.classList.add("active");
        linkProducts.classList.remove("active");
        linkAbout.classList.remove("active");
        linkReviews.classList.remove("active");
        linkContact.classList.remove("active");
        linkBlogs.classList.remove("active");
        
    }
    if (
        e.composedPath().includes(navbarProducts) || 
        e.composedPath().includes(linkProducts) 
    ) 
    {        
        navbarHome.classList.remove("active");
        navbarMenu.classList.remove("active");
        navbarProducts.classList.add("active");
        navbarAbout.classList.remove("active");
        navbarReview.classList.remove("active");
        navbarContact.classList.remove("active");
        navbarBlogs.classList.remove("active");

        linkHome.classList.remove("active");
        linkMenu.classList.remove("active");
        linkProducts.classList.add("active");
        linkAbout.classList.remove("active");
        linkReviews.classList.remove("active");
        linkContact.classList.remove("active");
        linkBlogs.classList.remove("active");
        
    }
    if (
        e.composedPath().includes(navbarAbout) || 
        e.composedPath().includes(linkAbout)
    ) 
    {        
        navbarHome.classList.remove("active");
        navbarMenu.classList.remove("active");
        navbarProducts.classList.remove("active");
        navbarAbout.classList.add("active");
        navbarReview.classList.remove("active");
        navbarContact.classList.remove("active");
        navbarBlogs.classList.remove("active");

        linkHome.classList.remove("active");
        linkMenu.classList.remove("active");
        linkProducts.classList.remove("active");
        linkAbout.classList.add("active");
        linkReviews.classList.remove("active");
        linkContact.classList.remove("active");
        linkBlogs.classList.remove("active");
        
    }
    if (
        e.composedPath().includes(navbarReview) || 
        e.composedPath().includes(linkReviews)
    ) 
    {        
        navbarHome.classList.remove("active");
        navbarMenu.classList.remove("active");
        navbarProducts.classList.remove("active");
        navbarAbout.classList.remove("active");
        navbarReview.classList.add("active");
        navbarContact.classList.remove("active");
        navbarBlogs.classList.remove("active");

        linkHome.classList.remove("active");
        linkMenu.classList.remove("active");
        linkProducts.classList.remove("active");
        linkAbout.classList.remove("active");
        linkReviews.classList.add("active");
        linkContact.classList.remove("active");
        linkBlogs.classList.remove("active");
        
    }
    if (
        e.composedPath().includes(navbarContact) || 
        e.composedPath().includes(linkContact) 
    ) 
    {        
        navbarHome.classList.remove("active");
        navbarMenu.classList.remove("active");
        navbarProducts.classList.remove("active");
        navbarAbout.classList.remove("active");
        navbarReview.classList.remove("active");
        navbarContact.classList.add("active");
        navbarBlogs.classList.remove("active");

        linkHome.classList.remove("active");
        linkMenu.classList.remove("active");
        linkProducts.classList.remove("active");
        linkAbout.classList.remove("active");
        linkReviews.classList.remove("active");
        linkContact.classList.add("active");
        linkBlogs.classList.remove("active");
        
    }
    if (
        e.composedPath().includes(navbarBlogs) || 
        e.composedPath().includes(linkBlogs)
    ) 
    {        
        navbarHome.classList.remove("active");
        navbarMenu.classList.remove("active");
        navbarProducts.classList.remove("active");
        navbarAbout.classList.remove("active");
        navbarReview.classList.remove("active");
        navbarContact.classList.remove("active");
        navbarBlogs.classList.add("active");

        linkHome.classList.remove("active");
        linkMenu.classList.remove("active");
        linkProducts.classList.remove("active");
        linkAbout.classList.remove("active");
        linkReviews.classList.remove("active");
        linkContact.classList.remove("active");
        linkBlogs.classList.add("active");
        
    }
       
        
});


