const Joi = require("joi");

const {TRAIN_NAME,STATION_NAME,ID, TIME, PLATFORM} = require("../constants/constants");

module.exports = {
    trainNameValidator: Joi.string().regex(TRAIN_NAME).min(2).max(100),
    stationNameValidator: Joi.string().regex(STATION_NAME).min(2).max(100),
    idValidator: Joi.string().regex(ID),
    kindValidator: Joi.string(),
    stopValidator: Joi.string(),
    timeValidator: Joi.string().regex(TIME),
    platformValidator: Joi.string().regex(PLATFORM)
}
