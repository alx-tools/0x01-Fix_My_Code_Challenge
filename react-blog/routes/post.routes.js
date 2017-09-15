var express = require('express'),
    router = express.Router(),
    PostController = require('../controllers/post.controller');

router.route('/').get(PostController.showAllPosts);
router.route('/page/:pageNum').get(PostController.showAllPosts);
router.route('/ajax/posts').get(PostController.loadPostsViaAjax);
router.route('/ajax/postListContent').get(PostController.loadPostListContent);
router.route('/ajax/postsByPage/:start/:end').get(PostController.loadPostsByPage);
router.route('/ajax/getNumberOfPosts').get(PostController.getNumberOfPosts);
router.route('/post/:id/:slug').get(PostController.showSinglePost);
router.route('/ajax/post/:id').get(PostController.loadSinglePostViaAjax);

module.exports = router;