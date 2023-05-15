const express = require("express");
const toolsControllers = require("../../controllers/tools.controllers");
const viewCount = require("../../middleware/viewCount");
const { limiter } = require("../../middleware/expressratelimiter");


const router = express.Router();

// router.get("/:id", (req, res) =>{
// res.send("tools found id");

// });

// router.post("/", (req, res) =>{
// res.send("tools added");

// });


/**
 * @api (get) /tools All tools
 * @apiDescription  Get all tools
 * @apiPermission Admin
 * 
 * @apiHeader {string} Authorization User's access token
 * 
 * @apiParam {Number{1-}}   [page=1] List page
 * @apiParam {Number{1-100}} [limit=10] user per page
 * 
 * @apiSuccess {Object[]} All the tools
 * 
 * @apiError (UnAuthorized 401) Unauthorized Only authenticated users can access the data 
 * @apiError (Forbidden) Forbidden Only admin can access the data
 */
 



router
.route("/")
.get(toolsControllers.getAllTools)
/**
 * @api (post) /tools save a tool 
 * @apiDescription  post  all tools
 * @apiPermission Admin
 * 
 * @apiHeader {string} Authorization User's access token
 * 
 * @apiParam {Number{1-}}   [page=1] List page
 * @apiParam {Number{1-100}} [limit=10] user per page
 * 
 * @apiSuccess {Object[]} All the tools
 * 
 * @apiError (UnAuthorized 401) Unauthorized Only authenticated users can access the data 
 * @apiError (Forbidden) Forbidden Only admin can access the data
 */
 
.post(toolsControllers.saveATool);

// router
// .route("/:id")
// .get(viewCount,limiter, toolsControllers.getAllTools);

// router
// .route("/:id/:test")
// .get(viewCount,limiter, toolsControllers.getToolDetail);
router
.route("/:id")
.get(viewCount,limiter, toolsControllers.getToolDetail)
.patch(toolsControllers.updateTool)
.delete(toolsControllers.deleteTool)

module.exports = router;