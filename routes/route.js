let express = require("express");
let router = express.Router();
let mysql = require("mysql");
const mongoose = require("mongoose");
const { signup, signin, getSignup, logout,getSingleUser,updateUserRole,deleteUser } = require("../controller/user");
const { form,getForm } = require("../controller/form");
const { countryRoute,countryGet } = require("../controller/countryContro");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/signup").post(signup);

router.route("/signin").post(signin);
router.route("/form").post(form);
router.route("/country").post(countryRoute);
router.route("/countryGet").get(countryGet);
router.route("/logout").get(logout);

//Admin route*************
//get all users form***********
// router
//   .route("/admin/getAllForm")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getForm);
router
  .route("/admin/getAllForm")
  .get(getForm);

//get all users***********
router
  .route("/admin/getUsers")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSignup);

//get single user and update,delete single user************
  router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
module.exports = router;
