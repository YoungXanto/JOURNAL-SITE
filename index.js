const mainMenu = document.querySelector('.main-menu')
const closeMenu = document.querySelector('.close-menu')
const openMenu = document.querySelector('.open-menu')
const menu_items = document.querySelectorAll('nav .main-menu li a')
const articleItems = document.querySelectorAll(".article-recent")
const hiddenArticles = document.querySelectorAll(".hidden")
const viewMoreBtn = document.querySelector(".view-more")
const viewMoreBtnContainer = document.querySelector(".button-container")


// HAMBURGER MENU

openMenu.addEventListener('click',show)
closeMenu.addEventListener('click',close)

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close()
    })
})

function show(){
    mainMenu.style.display = 'flex'
    mainMenu.style.top = '0'
}
function close(){
    mainMenu.style.top = '-100%'
}

// VIEW MORE

viewMoreBtn.addEventListener("click", function(){
    articleItems.forEach((blog) => {
        blog.classList.remove("hidden")
        viewMoreBtnContainer.style.display = "none"
      })
      
})