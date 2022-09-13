import express from "express"
import studentController from "../controllers/studentController.js"
const router=express.Router()



router.get("/user",studentController.getAllDoc)
router.post("/user/data",studentController.createDoc)
router.get("/edit/:id",studentController.editDoc)
router.post("/update/:id",studentController.updateDocById)
router.post("/delete/:id",studentController.deleteDocById)

export default router