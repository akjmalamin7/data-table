const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/assets/uploads/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type! Only image files are allowed'), false);
    }
};

const upload = multer({ storage, fileFilter });

exports.UploadImage = async (req, res) => {
    upload.single('image')(req, res, (err) => {
        if (err) {
            return res.status(400).json({
                status: 'fail',
                message: err.message
            });
        }

        if (!req.file) {
            return res.status(400).json({
                status: 'fail',
                message: 'No file uploaded!'
            });
        }
        return res.status(200).json({
            status: 'success',
            data: {
                imgUrl: req.file.filename,
            }
        });
    });
};
