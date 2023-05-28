import * as views from '../views/projects-views.js';
import * as model from '../models/projects-model.js';

function projectHomePage(req, res) {
    let html = '<h1 class="text-center">Galería de Proyectos</h1>'

    html += '<nav class="d-flex justify-content-center my-2 gap-2"><a class="text-decoration-none text-black" href="/mobile">Mobile</a> | <a class="text-decoration-none text-black" href="/landing">Landing Page</a> | <a class="text-decoration-none text-black" href="/webapp">Web App</a> | <a class="text-decoration-none text-black" href="/ecommerce">E-Commerce</a> | <a class="text-decoration-none text-black" href="/game">Games</a></nav>'

    res.send(views.createPage('Bienvenido', html))
}

async function mobilePage(req, res) {
    const filter = {section: 'mobile'}
    const projects = await model.getProjects(filter);
    
    let html = '<h1 class="text-center">Proyectos Mobile</h1>'

    html += '<ul class="d-flex justify-content-around list-unstyled flex-wrap">'
    projects.forEach(project => {
        html += `<li class="col-5 w-40 mx-auto my-2">
        <div class="card">
          <img src="${project.img}" class="card-img-top" alt="${project.name}">
          <div class="card-body">
            <h3 class="card-title">${project.name}</h3>
            <p class="card-text">${project.description}</p>
            <p class="card-text">Tecnologías: ${project.technologies}</p>
            <a href="${project.link}" class="btn btn-primary">Ver Proyecto</a>
          </div>
        </div>
        </li>`
      })
    html += '</ul>'

    res.send(views.createPage('Mobile', html))
}

async function landingPage(req, res) {
    const filter = {section: 'landing page'}
    const projects = await model.getProjects(filter);
    
    let html = '<h1 class="text-center">Proyectos Landing Page</h1>'

    html += '<ul class="d-flex justify-content-around list-unstyled flex-wrap">'
    projects.forEach(project => {
        html += `<li class="col-5 w-40 mx-auto my-2">
        <div class="card">
          <img src="${project.img}" class="card-img-top" alt="${project.name}">
          <div class="card-body">
            <h3 class="card-title">${project.name}</h3>
            <p class="card-text">${project.description}</p>
            <p class="card-text">Tecnologías: ${project.technologies}</p>
            <a href="${project.link}" class="btn btn-primary">Ver Proyecto</a>
          </div>
        </div>
        </li>`
      })
    html += '</ul>'

    res.send(views.createPage('Landing Page', html))
}

async function webPage(req, res) {
    const filter = {section: 'webapp'}
    const projects = await model.getProjects(filter);
    
    let html = '<h1 class="text-center">Proyectos Web App</h1>'

    html += '<ul class="d-flex justify-content-around list-unstyled flex-wrap">'
    projects.forEach(project => {
        html += `<li class="col-5 w-40 mx-auto my-2">
        <div class="card">
          <img src="${project.img}" class="card-img-top" alt="${project.name}">
          <div class="card-body">
            <h3 class="card-title">${project.name}</h3>
            <p class="card-text">${project.description}</p>
            <p class="card-text">Tecnologías: ${project.technologies}</p>
            <a href="${project.link}" class="btn btn-primary">Ver Proyecto</a>
          </div>
        </div>
        </li>`
      })
    html += '</ul>'

    res.send(views.createPage('Web App', html))
}

async function ecommercePage(req, res) {
    const filter = {section: 'ecommerce'}
    const projects = await model.getProjects(filter);
    
    let html = '<h1 class="text-center">Proyectos E-Commerce</h1>'

    html += '<ul class="d-flex justify-content-around list-unstyled flex-wrap">'
    projects.forEach(project => {
        html += `<li class="col-5 w-40 mx-auto my-2">
        <div class="card">
          <img src="${project.img}" class="card-img-top" alt="${project.name}">
          <div class="card-body">
            <h3 class="card-title">${project.name}</h3>
            <p class="card-text">${project.description}</p>
            <p class="card-text">Tecnologías: ${project.technologies}</p>
            <a href="${project.link}" class="btn btn-primary">Ver Proyecto</a>
          </div>
        </div>
        </li>`
      })
    html += '</ul>'

    res.send(views.createPage('E-Commerce', html))
}

async function gamesPage(req, res) {
    const filter = {section: 'games'}
    const projects = await model.getProjects(filter);
    
    let html = '<h1 class="text-center">Proyectos Games</h1>'

    html += '<ul class="d-flex justify-content-around list-unstyled flex-wrap">'
    projects.forEach(project => {
        html += `<li class="col-5 w-40 mx-auto my-2">
        <div class="card">
          <img src="${project.img}" class="card-img-top" alt="${project.name}">
          <div class="card-body">
            <h3 class="card-title">${project.name}</h3>
            <p class="card-text">${project.description}</p>
            <p class="card-text">Tecnologías: ${project.technologies}</p>
            <a href="${project.link}" class="btn btn-primary">Ver Proyecto</a>
          </div>
        </div>
        </li>`
      })
    html += '</ul>'

    res.send(views.createPage('Games', html))
}

export {
    projectHomePage,
    mobilePage,
    landingPage,
    webPage,
    ecommercePage,
    gamesPage
}