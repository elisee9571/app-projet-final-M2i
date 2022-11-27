const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const session = require("express-session");

const User = require('../model/User.model');

exports.register = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            bcrypt.hash(req.body.password, 10).then(hash => {
                req.body.password = hash;
                User.create(req.body).then(user => {
                    res.status(201).json({
                        status: res.statusCode,
                        message: "Success: User created"
                    });
                }).catch(err => {
                    res.status(400).json({
                        status: res.statusCode,
                        message: err
                    });
                });
            });
        } else {
            res.status(400).json({
                status: res.statusCode,
                message: "Error: Email already use"
            });
        }
    }).catch(err => {
        res.status(500).json({
            status: res.statusCode,
            message: err
        });
    });
};

exports.login = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                status: res.statusCode,
                message: "Error: identifiant/password incorrect"
            });
        }
        bcrypt.compare(req.body.password, user.password)
            .then(isValid => {
                if (!isValid) {
                    return res.status(401).json({
                        status: res.statusCode,
                        message: "Error: identifiant/password incorrect"
                    });
                }

                req.session.regenerate(function (err) {
                    if (err) next(err)

                    req.session.token = jwt.sign({
                        userId: user.id
                    }, "SECRET_TOKEN_KEY", {
                        expiresIn: "24h"
                    });

                    req.session.save(function (err) {
                        if (err) return next(err);

                        res.status(200).json({
                            status: res.statusCode,
                            token: req.session.token
                        });

                    });
                });

            }).catch(err => {
                res.status(500).json({
                    status: res.statusCode,
                    message: err
                });
            })
    }).catch(err => {
        res.status(500).json({
            status: res.statusCode,
            message: err
        });
    });
};

exports.find = (req, res) => {
    User.findAll().then(users => {
        res.json({ users });
        // res.render('index', { users });
    }).catch(err => {
        res.status(400).json({
            status: res.statusCode,
            message: err
        });
    });
};

exports.findById = (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        // res.render('user', { user });
        res.json({ user });
    }).catch(err => {
        res.status(400).json({
            status: res.statusCode,
            message: err
        });
    });
};

exports.logout = (req, res) => {
    if (!req.session.token) {
        res.status(400).json({
            status: res.statusCode,
            message: "Error: session not found"
        });
    } else {
        req.session.token = null;
        req.session.save(function (err) {
            if (err) next(err);

            req.session.regenerate(function (err) {
                if (err) next(err);
                res.status(200).json({
                    status: res.statusCode,
                    message: "Success: logout"
                });
            });
        });
    }
};

exports.update = (req, res) => { };

exports.delete = (req, res) => { };

exports.report = (req, res) => { };

exports.banned = (req, res) => { };