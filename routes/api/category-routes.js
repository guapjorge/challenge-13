const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({ 
      include: [Product]
    })
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const data = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category

  try {
    const data = await Category.create(req.body)
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const data = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const data = await Category.delete({
      where: {
        id: req.params.id
      }
    })
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
