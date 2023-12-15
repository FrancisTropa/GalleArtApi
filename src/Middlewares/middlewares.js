
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dvofvdbpg', 
  api_key: '399993394834459', 
  api_secret: 'fkNrBRQ-a6NsEWwITNwGJO_Jkdo' 
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'some-folder-name',
        format: async (req, file) => 'png',
        public_id: (req, file) => 'computed-filename-using-request',
    },
});

const parser = multer({ storage: storage });

export default parser;