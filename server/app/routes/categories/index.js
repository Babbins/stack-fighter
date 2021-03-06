'use strict';

var router = require('express').Router(); // eslint-disable-line new-cap
module.exports = router;
var Category = require('../../../db/models/category');
var adminTest = require('../../configure/authorization').adminTest;
//Get all Categories with a given type. Eg: Every value (eg: SFII,SFIII,SIV) of a given type (eg: Game);
router.get('/', function(req, res, next){
    Category.findAll({ where: req.query })
    .then(gettingCategories => res.json(gettingCategories))
    .catch(next);
});

//Get single category.
router.get('/:id', function(req, res, next){
    Category.findById(req.params.id)
    .then(gettingCategory => res.json(gettingCategory))
    .catch(next);
});

//Creating a new category.
router.post('/', function(req, res, next){
    if (!adminTest(req)) return res.send(401);
    Category.create(req.body)
    .then(creatingCategory => res.status(201).json(creatingCategory))
    .catch(next);
});

//Updating a category.
router.put('/:id', function(req, res, next){
    if (!adminTest(req)) return res.send(401);
    Category.findById(req.params.id)
    .then(updatingCategory => updatingCategory.update(req.body))
    .then(updatedCategory => res.status(200).json(updatedCategory))
    .catch(next);
});

//Deleting a category.
router.delete('/:id', function(req, res, next){
    if (!adminTest(req)) return res.send(401);
    Category.findById(req.params.id)
    .then(deletingCategory => deletingCategory.destroy())
    .then(deletedCategory => res.status(204).end())
    .catch(next);
});

//Get all characters associated with given categories
router.get('/characters/', function(req, res, next){
    Category.findAll();
})
