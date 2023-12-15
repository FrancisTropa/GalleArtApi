import { Router } from 'express';
import { register, login, getUser, listUsers, editProfile } from '../controllers/user.controller.js';
import { listArtWorks, createArtWork, deleteArtWork } from '../controllers/artWork.controller.js';
import { rateArtWork, getRatings } from '../controllers/rating.controller.js';
import { postComment, listComments } from '../controllers/comment.controller.js';

const router = Router();

router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/auth/user', getUser);

router.get("/artWorks", listArtWorks);
router.get("/users", listUsers);

router.post("/artWorks", createArtWork);

router.delete("/artWorks/:id", deleteArtWork);

router.put("/users/:id/edit", editProfile);

router.post('/artWorks/:id/rating', rateArtWork);
router.post('/artWorks/:artWorkId/comments', postComment);

router.get('/artWorks/:id/rating', getRatings);
router.get('/artWorks/:id/comments', listComments);

export default router;