exports.dateWare = function (req, res, next) {
    const today = new Date();
    const date = '' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    req.body['createdOn'] = date;
    
    next();
}