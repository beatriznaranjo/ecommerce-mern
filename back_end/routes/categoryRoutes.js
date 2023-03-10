const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getAllCategories);
router.post("/", categoryController.createCategory);
//router.get('/:id', categoryControllet.getCategoryById);

module.exports = router;
