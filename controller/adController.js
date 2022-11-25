const Ad = require('../model/Ad.model');
const Image = require('../model/Image.model');

exports.create = (req, res) => {
    const urlImage = req.body.image;

    Ad.create(req.body)
        .then(ad => {
            Image.create({
                url: urlImage,
                id_ad: ad.id
            }).then(() => {
                res.status(201).json({
                    status: res.statusCode,
                    message: "Ad created"
                });
            }).catch(err => {
                res.status(400).json({ err })
            });
        })
        .catch(err => {
            res.status(400).json({ err })
        });
};

exports.find = (req, res) => {
    Ad.findAll().then(ads => {
        res.json({ ads });
    }).catch(err => {
        res.status(400).json({
            status: res.statusCode,
            message: err
        });
    });
};

exports.findById = (req, res) => {
    Ad.findOne({
        where: {
            id: req.params.id
        }
    }).then(ad => {
        res.json({ ad });
    }).catch(err => {
        res.status(400).json({
            status: res.statusCode,
            message: err
        });
    });
};

exports.update = (req, res) => {
    Ad.findOne({
        where: {
            id: req.params.id
        }
    }).then(ad => {
        const urlImage = req.body.image;

        if (!ad) {
            return res.status(400).json({ message: "ad not found " });
        }

        Ad.update({
            where: {
                id: req.params.id
            }
        }, {
            title: req.body.title
        }).then(result => {
            res.json({ message: result });
        }).catch(err => res.status(400).json({ err }));

    }).catch(err => res.status(400).json({ err }));
};
exports.delete = () => { };
exports.archive = () => { };
exports.report = () => { };