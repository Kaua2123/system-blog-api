import { Router } from 'express';

import multer from 'multer';
import multerConfig from '../multer/config';
const upload = multer(multerConfig);

import loginRequired from '../middlewares/login.required';
import ImagesController from '../controllers/images.controller';

const imagesRouter = Router();
// posts
imagesRouter.post(
  '/image/post/:id',
  upload.single('image'),
  loginRequired,
  ImagesController.storeOnPost,
);
// users
imagesRouter.post(
  '/image/user/:id',
  upload.single('image'),
  loginRequired,
  ImagesController.storeOnUser,
);

export default imagesRouter;
