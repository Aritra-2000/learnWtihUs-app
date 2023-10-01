import express from 'express'
import { register , login , logout, getMyProfile, changePassword, updateProfile, updateProfilePicture, forgetPassword, resetPassword, addtoplaylist, removeFromPlaylist, getAllUsers, updateUserRole, deleteUser, deleteMyProfile} from '../controllers/userController.js';
import { authorizedAdmin, isAuthenticatd } from '../middlewares/Auth.js';
import singleUpload from '../middlewares/multer.js';

const router = express.Router();

// to Sign up
router.route("/register").post(singleUpload, register);

// to Sign in
router.route("/login").post(login);

// to logout
router.route("/logout").get(logout);

// Get my profile
router.route("/me").get(isAuthenticatd, getMyProfile).delete(isAuthenticatd, deleteMyProfile);

// Change Password
router.route("/changepassword").put(isAuthenticatd, changePassword);

// Update Profile
router.route("/updateprofile").put(isAuthenticatd, updateProfile);

// Update Profile Picture
router.route("/updateprofilepicture").put(isAuthenticatd, singleUpload, updateProfilePicture);

// Forget Password
router.route("/forgetpassword").post(forgetPassword);

// Reset Password
router.route("/resetpassword/:token").put(resetPassword);

// Add to playlist
router.route("/addtoplaylist").post(isAuthenticatd,addtoplaylist);

// remove from playlist 
router.route("/removefromplaylist").delete(isAuthenticatd,removeFromPlaylist);

// Admin Route- get All users
router.route("/admin/users").get(isAuthenticatd, authorizedAdmin, getAllUsers);

// Admin Route - user Role
router.route("/admin/user/:id").put(isAuthenticatd, authorizedAdmin, updateUserRole).delete(isAuthenticatd, authorizedAdmin,deleteUser);

export default router;