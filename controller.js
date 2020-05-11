const service = require('./service');

module.exports.home = (req, res) => {
    res.json({
        title: "welcome",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi vitae suscipit tellus mauris a. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Venenatis urna cursus eget nunc scelerisque viverra mauris. Pellentesque id nibh tortor id aliquet lectus proin. At volutpat diam ut venenatis tellus in metus. Massa vitae tortor condimentum lacinia quis vel eros donec. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Augue ut lectus arcu bibendum at varius vel pharetra vel. Ut tortor pretium viverra suspendisse potenti nullam. Feugiat in fermentum posuere urna nec tincidunt praesent.`
    });
}

module.exports.signup = async (req, res) => {
    const result = await service.addUser(req.body);
    res.json(result);
}

module.exports.login = async (req, res) => {
    const result = await service.authenticateLogin(req.body)
    res.json(result);
}