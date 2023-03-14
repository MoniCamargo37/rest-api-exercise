const express = require('express');
const router = express.Router();
const Show = require('../models/Show');

// @desc GET ALL shows
// @route GET / shows
// @access Public
router.get('/', async (req, res) => {
    try {
      const shows = await Show.find();
      res.status(200).json(shows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// @desc GET One shows
// @route GET /show/:id
// @access Public
  router.get('/:id', async (req, res) => {
    try {
      const show = await Show.findById(req.params.id);
      if (!show) return res.status(404).json({ error: 'Show not found' });
      res.status(200).json(show);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });  

  // @desc POST Create one  show
  // @route POST /show
  // @access Public
  router.post('/', async (req, res, next) => {
    try {
      const newShow = await Show.create(req.body);
      res.status(201).json(newShow);
    } catch (err) {
     next(err)
    }
  });

  // @desc PUT Edit one  show
  // @route PUT /show/:showid
  // @access Public
  router.put('/:showId', async (req, res) => {
    const { showId } = req.params;
    try {
      const updatedShow = await Show.findByIdAndUpdate(showId, req.body, { new: true });
     console.log(updatedShow);
     res.redirect(`/show/${showId}`)
      // res.status(200).json(updatedShow);
    } catch (err) {
     next(err)
    }
  });

  // @desc DELETE one  show
  // @route  DELETE /show/:id
  // @access Public
  router.delete('/:id', async (req, res, next) => {
    try {
      const showDeleted = await Show.findByIdAndDelete(req.params.id);
      res.status(201).json(showDeleted);
    } catch (err) {
     next(err)
    }
  });

  module.exports = router;