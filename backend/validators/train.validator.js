const Joi = require("joi")

const {trainNameValidator,kindValidator} = require('../validators/common.validator')

module.exports = {
    findAll: Joi.object({
        name: trainNameValidator,
        kind: kindValidator
    }),
    newTrain: Joi.object({
        name: trainNameValidator.required(),
        kind: kindValidator
    }),
    updateTrain: Joi.object({
        name: trainNameValidator,
        kind: kindValidator
    })
}
