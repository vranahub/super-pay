/**
 * @author @vranahub.
 * @license MIT
 * @version 0.0.5
 */

const chalk = require("chalk");
const log = console.log;

const PagSeguro = require("./pagseguro");

const init = (gateway, settings, layer) => {
    try {
        let instance = gateway[layer];
        instance.init(settings);
        return instance;
    } catch (e) {
        log(chalk.redBright("Hi! This is SuperPay to Major Tom:"));
        log(chalk.redBright("ERROR: It seems that you've chosen an unsupported payment gateway."));
        /* log("Exception message for searching purposes:")*/
        log(chalk.redBright(`${e}`));
        log(chalk.greenBright("Please, use of the values below:"));
        for (var gateway in SuperPay.SUPPORTED_GATEWAYS) {
            log(chalk.greenBright(`- SuperPay.SUPPORTED_GATEWAYS.${gateway}`));
        }
    }
};

/**
 * @class SuperPay
 */
let SuperPay = {
    /** 
     * @property {Object} SUPPORTED_GATEWAYS Supported gateways list
     * @property {Object} SUPPORTED_GATEWAYS.PAG_SEGURO PagSeguro Gateway
     */
    SUPPORTED_GATEWAYS: {
        PAG_SEGURO: PagSeguro
        // PAY_U: "PAY_U"
    },
    /**
     * @function
     * @param {object} settings Gateway specific settings
     * @param {string} settings.gateway Gateway specific settings
     * @param {string} [settings.api_token] Gateway specific settings
     * @param {string} [settings.api_email] Gateway specific settings
     * @return {GatewayFrontend} Gateway service instance
     * @memberof SuperPay
     */
    Backend: settings => init(settings.gateway, settings, "Backend"),
    /**
     * @function
     * @param {object} settings Gateway specific settings
     * @param {string} settings.gateway Gateway specific settings
     * @param {string} [settings.server_url] Gateway specific settings
     * @return {GatewayBackend} Gateway service instance
     * @memberof SuperPay
     */
    Frontend: settings => init(settings.gateway, settings, "Frontend")
};

module.exports = {
    SuperPay: SuperPay
};