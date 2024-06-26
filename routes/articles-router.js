const articlesRouter = require('express').Router();

const {
    getArticles,
    getArticleById,
    getCommentsByArticleId,
    postComment,
    patchArticleVotes,
    postArticle
  } = require("../controllers/articles-controllers");

  articlesRouter
  .route('/')
  .get(getArticles)
  .post(postArticle);

  articlesRouter
  .route('/:article_id')
  .get(getArticleById)
  .patch(patchArticleVotes);

  articlesRouter
  .route('/:article_id/comments')
  .get(getCommentsByArticleId)
  .post(postComment);

  module.exports = articlesRouter;

  