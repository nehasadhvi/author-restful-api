var should = require('should'),
	sinon = require('sinon')

describe('Book Controller Tests:', () => {
	describe('Post:', () => {
		it('Should not allow empty title', () => {
			var Book = function(book){this.save = () => {}}; 

			var req = {
				body: {
					author: 'Nehhaa'
				}
			}

			var res = {
				status: sinon.spy(),
				send: sinon.spy()
			}

			var bookController = require('../Controllers/bookController')(Book);

			bookController.post(req, res);

			res.status.calledWith(400).should.equal(true, 'Bad Status'+res.status.args[0][0]);
			res.send.calledWith('Title is required').should.equal(true);
		})
	})
})