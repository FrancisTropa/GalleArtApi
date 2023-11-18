import { Router } from 'express';
import { listUsers, editProfile } from '../controllers/user.controller.js';
import { listArtWorks, createArtWork, deleteArtWork } from '../controllers/artWork.controller.js';

const router = Router();

router.get("/artWorks", listArtWorks);
router.get("/users", listUsers);

router.post("/artWorks", createArtWork);

router.delete("/artWorks/:id", deleteArtWork);

router.put("/users/:id/edit", editProfile);

export default router;