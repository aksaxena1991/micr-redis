const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
// const courseValidation = require('../../validations/course.validation');
const tokenController = require('../../controllers/token.controller');

const router = express.Router();

router.route('/get-token').get(  tokenController.createToken);
//   router.route('/getCourses').get( validate(courseValidation.getCourses), courseController.getCourses);

// router.route('/:courseId').get( validate(courseValidation.getCourse), courseController.getCourse);
// router.route('/slug/:slug').get( validate(courseValidation.getCourseBySlug), courseController.getCourseBySlug)
// router.route('/updateCourse/:courseId').put(validate(courseValidation.updateCourse), courseController.updateCourse)
// router.route('/deleteCourse/:courseId').delete( validate(courseValidation.deleteCourse), courseController.deleteCourse);

module.exports = router;

