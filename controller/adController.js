const { where } = require('sequelize');
const Ad = require('../model/Ad.model');
const Image = require('../model/Image.model');

exports.create = (req, res) => {
    const urlImages = req.body.image;

    Ad.create({ id_user: req.auth.userId, ...req.body })
        .then(ad => {
            for (let i = 0; i < urlImages.length; i++) {
                Image.create({
                    url: urlImages[i],
                    id_ad: ad.id
                }).then().catch(err => {
                    res.status(400).json({ err })
                });
            }

            res.status(201).json({
                status: res.statusCode,
                message: "Ad created"
            });
        })
        .catch(err => {
            res.status(400).json({ err })
        });
};

exports.find = (req, res) => {
    Ad.findAll().then(ads => {

        if (!ads) {
            return res.status(400).json({ message: "ads not found" });
        }

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
        if (!ad) {
            return res.status(400).json({ message: "ad not found" });
        }

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
            id: req.params.id,
            id_user: req.auth.userId
        }
    }).then(ad => {
        const adItem = ad;

        if (!ad) {
            return res.status(400).json({ message: "ad not found" });
        }

        Image.findAll({
            where: {
                id_ad: ad.id
            }
        }).then(images => {

            if (!images) {
                return res.status(400).json({ message: "image not found " });
            }

            Ad.update(req.body, {
                where: {
                    id: adItem.id,
                    id_user: req.auth.userId
                }
            }).then(() => {
                const urlImages = req.body.image;

                for (let i = 0; i < images.length; i++) {
                    if (images[i].url != urlImages[i]) {
                        Image.update({
                            url: urlImages[i]
                        }, {
                            where: {
                                url: images[i].url,
                                id_ad: adItem.id
                            }
                        }).then(() => console.log('update image')).catch(err => res.status(400).json({ err }));
                    }
                }

                res.json({ success: "ad updated" });

            }).catch(err => res.status(400).json({ err }));


        }).catch(err => res.status(400).json({ err }));


    }).catch(err => res.status(400).json({ err }));
};

exports.delete = (req, res) => {
    Ad.findOne({
        where: {
            id: req.params.id,
            id_user: req.auth.userId
        }
    }).then(ad => {

        if (!ad) {
            return res.status(400).json({ err: "ad not found " });
        }

        Ad.destroy({
            where: {
                id: ad.id
            }
        }).then(() => {
            res.json({ success: "ad deleted" })
        }).catch(err => res.status(400).json({ err }));

    }).catch(err => res.status(400).json({ err }));
};

exports.archive = () => { };
exports.report = () => { };