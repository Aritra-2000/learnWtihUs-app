import express from "express";
import { addLecture, createCourse, deleteCourse, getAllCourses, getCourseLectures, deleteLecture } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeSubscribers, authorizedAdmin, isAuthenticatd } from "../middlewares/Auth.js";

const router = express.Router();

// get All Courses without lectures
router.route("/courses").get(getAllCourses);

// create course - admin
router.route("/createcourse").post(isAuthenticatd ,authorizedAdmin ,singleUpload ,createCourse);

// Add lecture
router.route("/course/:id").get(isAuthenticatd, authorizeSubscribers ,getCourseLectures).post(isAuthenticatd ,authorizedAdmin ,singleUpload, addLecture).delete(isAuthenticatd, authorizedAdmin, deleteCourse);

// Delete course
router.route("/lecture").delete(isAuthenticatd, authorizedAdmin, deleteLecture)

// get course Details

// Delete Lecture 


export default router;