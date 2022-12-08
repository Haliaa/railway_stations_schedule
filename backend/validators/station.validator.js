const Joi = require("joi")

const {stationNameValidator, platformValidator
} = require('../validators/common.validator')

module.exports = {
    findAll: Joi.object({
        name: stationNameValidator,
        platforms: platformValidator
    }),
    newStation: Joi.object({
        name: stationNameValidator.required(),
        platforms: platformValidator.required()
    }),
    updateStation: Joi.object({
        name: stationNameValidator,
        platforms: platformValidator
    })
}
