import homePage from './pages/home.js'
import AboutPage from './pages/about.js'

const routes = {
  '/': homePage,
  '/about': "ABOUT",
  '/contact': "CONTACT"
}

function name(){
  return (`
  <h2>${name}</h2>`)
}

function homePage(){
  return (
    `<section>
      <h1>HOME PACE</h1>
    </section>
    `)
}

function routeChange(event){
  const path = window.location.hash.split("#")[1] || '/'
  const page = routes[path]
  main.innerHTML = page()
}

window.addEventListener('hashchange', routeChange)