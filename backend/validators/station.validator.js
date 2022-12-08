const Joi = require("joi")

const {stationNameValidator, platformValidator
} = require('../validators/common.validator')

module.exports = {
    findAll: Joi.object({
        name: stationNameValidator.required(),
        platforms: platformValidator.required()
    }),
    newClientValidator: Joi.object({
        name: stationNameValidator.required(),
        platforms: platformValidator.required()
    }),
}
