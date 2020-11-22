module.exports = (app) => {
    const user = require('../controller/controller.js');

    // Create a new user
    app.post('/user', user.create);

    // Create a new product for a user
    app.post('/user/:userId/product', user.createProduct);

    // Create a new category for a user
    app.post('/user/:userId/category', user.createCategory);

    // Retrieve all users
    app.get('/user', user.findAll);

    // Retrieve all products from a single user
    app.get('/user/:userId/product', user.findAllProducts);

    // Retrieve a single user with userId
    app.get('/user/:userId', user.findOne);

    // Update a user with userId
    app.put('/user/:userId', user.update);

    // Delete a user with userId
    app.delete('/user/:userId', user.delete);
}