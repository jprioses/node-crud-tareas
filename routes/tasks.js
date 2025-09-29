const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/tasks");

router.post("/create", Controllers.createTasks);
router.get("/read/:id",  Controllers.readTasksById);
router.get("/read-many{/:page}{/:limit}",  Controllers.readTasks);
router.put("/update/:id", Controllers.updateTasks);
router.delete("/delete/:id", Controllers.deleteTasks);

module.exports = router;