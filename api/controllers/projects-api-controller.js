import * as model from '../../models/projects-model.js'

function getProjects (req, res) {

    const filter = req.query

    model.getProjects(filter)
        .then(projects => {
            if(projects.length === 0) {
                res.status(404).json({ error: 'No se encontraron proyectos' })
            } else {
                res.status(200).json(projects)
            }
        })
}

function getProjectsByCliente (req, res) {

    const clientId = req.params.clientId

    model.getProjects({ clientId: clientId })
        .then(projects => {
            if(projects.length === 0) {
                res.status(404).json({ error: 'No se encontraron proyectos de ese cliente' })
            } else {
                res.status(200).json(projects)
            }
        })
}

function createProject (req, res) {
    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section,
        clientId: req.body.clientId
    }

    model.createProject(project)
        .then(project => {
            res.status(201).json(project)
        })
}

const deleteProject = (req, res) => {
    const id = req.params._id

    model.deleteProject(id)
        .then((project) => {
            if(project){
                res.status(200).json(project)
            } else {
                res.status(404).json({
                    error: {message: 'Proyecto no encontrado'}
                    })
            }
        })
}

function updateProject(req, res) {
    const id = req.params._id
    const project = {}

    if(req.body.name) project.name = req.body.name
    if(req.body.description) project.description = req.body.description
    if(req.body.link) project.link = req.body.link
    if(req.body.img) project.img = req.body.img
    if(req.body.technologies) project.technologies = req.body.technologies
    if(req.body.section) project.section = req.body.section
    if(req.body.clientId) project.clientId = req.body.clientId
    project.deleted === true ? delete project.deleted : null;

    model.editProject(id, project)
        .then((project) => {
            if(project){
                res.status(200).json(project)
            } else {
                res.status(404).json({
                    error: {message: 'Proyecto no encontrado'}
                    })
            }
        })
}


export {
    getProjects,
    getProjectsByCliente,
    createProject,
    deleteProject,
    updateProject
}