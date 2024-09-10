const express = require('express');
const { saveUserQuotes, getAllUserQuotes } = require('../controllers/users.controller');
const { saveProposals, getJobApplications } = require('../controllers/jobApplication.controller');
const upload = require('../middlewares/uploadFile');

const routes = express.Router();

routes.post('/saveUserQuotes',saveUserQuotes);
routes.get('/getAllUserQuotes',getAllUserQuotes);

// Job Applications

routes.post('/saveProposals',upload.single('resume'),saveProposals);
routes.get('/getJobApplications',getJobApplications);

module.exports = routes;