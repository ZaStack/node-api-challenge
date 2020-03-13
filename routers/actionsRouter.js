const router = require('express').Router();

const actionsDB = require('../data/helpers/actionModel');

router.get('/', (req, res) => {
    actionsDB
        .get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    actionsDB
        .get(id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` });
        });
});


router.post('/', (req, res) => {
    const newAction = req.body;
    actionsDB
        .insert(newAction)
        .then(newAction => {
            res.status(201).json(newAction);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updateAction = req.body;

    actionsDB
        .update(id, updateAction)
        .then(updateAction => {
            res.status(200).json(updateAction);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    actionsDB
        .remove(id)
        .then(deleteAction => {
            res.status(201).json(deleteAction);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` });
        });
});

module.exports = router;
