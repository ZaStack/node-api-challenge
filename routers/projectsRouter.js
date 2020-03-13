const router = require('express').Router();

const projectsDB = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    projectsDB
        .get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    projectsDB
        .get(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` });
        });
});

router.get('/:id/actions', (req, res) => {
    const { id } = req.params;

    projectsDB
        .getProjectActions(id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            res.status(500).json({errorMessage: `${err}`})
        });
});

router.post('/', (req, res) => {
    const newProject = req.body;
    projectsDB
        .insert(newProject)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updateProject = req.body;

    projectsDB
        .update(id, updateProject)
        .then(updateProject => {
            res.status(200).json(updateProject);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    projectsDB
        .remove(id)
        .then(deleteProject => {
            res.status(201).json(deleteProject);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` });
        });
});

module.exports = router;
