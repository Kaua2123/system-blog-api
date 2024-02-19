import { Router } from 'express';

import multer from 'multer';
import multerConfig from '../multer/config';
const upload = multer(multerConfig);

import loginRequired from '../middlewares/login.required';
import ImagesController from '../controllers/images.controller';

const imagesRouter = Router();

imagesRouter.post(
  '/image/post/:id',
  upload.single('image'),
  loginRequired,
  ImagesController.store,
);

export default imagesRouter;
