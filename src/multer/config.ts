import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename(req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}.jpeg`);
    },
  }),
};
