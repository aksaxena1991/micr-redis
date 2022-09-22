const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { tokenService } = require('../services');

const createToken = catchAsync(async (req, res) => {
  const token = await tokenService.generateAuthTokens(req.body);
  res.status(httpStatus.CREATED).send(token);
});

const getCourses = catchAsync(async (req, res) => {
//   const filter = pick(req.query, ['name', 'role']);
//   const options = pick(req.query, ['sortBy', 'limit', 'page']);
//   const result = await tokenService.queryCourses(filter, options);
//   res.send(result);
});

const getCourse = catchAsync(async (req, res) => {
//   const course = await tokenService.getCourseById(req.params.courseId);
//   if (!course) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
//   }
//   res.send(course);
});

const getCourseBySlug = catchAsync(async (req, res) => {
//   const course = await tokenService.getCourseBySlug(req.params.slug);
//   if (!course) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
//   }
//   res.send(course);
});

const updateCourse = catchAsync(async (req, res) => {
//   const course = await tokenService.updateCourseById(req.params.courseId, req.body);
//   res.send(course);
});

const deleteCourse = catchAsync(async (req, res) => {
//   await tokenService.deleteCourseById(req.params.courseId);
//   res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
    createToken,
  getCourseBySlug,
  getCourse,
  getCourses,
  updateCourse,
  deleteCourse,
};
