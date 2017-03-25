/**
 * Created by Carmen-Uni on 21/03/2017.
 */
module.exports.sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};
