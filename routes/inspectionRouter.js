const router = require("express").Router();
const {getAllInspections, createInspection} = require("../controllers/inspectionController");

router.route("/inspection").get(getAllInspections).post(createInspection);

module.exports = router;