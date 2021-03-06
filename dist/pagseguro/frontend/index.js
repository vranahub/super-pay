"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* SuperPay General Modules */
let Utils = require("../../utils/utils");

/* Gateway Specific Modules */
let Config = require("./config");
let Session = require("./session");
let Card = require("./card");
let Payment = require("./payment");
let Subscription = require("./subscription");

let config = {};

let Frontend = module.exports = {
    /* Session Related Functions */
    session: Session,
    /* Card Related Functions */
    card: Card,
    /* Payment Related Functions */
    payment: Payment,
    /* Subscription Related Functions */
    subscription: Subscription,
    /* Initialization function */
    init: (() => {
        var _ref = _asyncToGenerator(function* (options) {
            return new Promise((() => {
                var _ref2 = _asyncToGenerator(function* (resolve, reject) {
                    try {
                        options = options || {};
                        config = Config.init(options);
                        yield Utils.loadLib(config.lib_url);
                        yield Session.init(options);
                        Card.init(options);
                        Payment.init(options);
                        Subscription.init(options);
                        resolve(Frontend);
                    } catch (e) {
                        reject(e);
                    }
                });

                return function (_x2, _x3) {
                    return _ref2.apply(this, arguments);
                };
            })());
        });

        return function init(_x) {
            return _ref.apply(this, arguments);
        };
    })()
};