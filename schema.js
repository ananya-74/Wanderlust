const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        country: Joi.string().required(),
        location: Joi.string().min(0).required(),
        category: Joi.string().required(),
        image: Joi.object({
            filename: Joi.string().allow("", null),
            url: Joi.string().allow("", null),
        })
        .default({
            filename: "",
            url: "",
        })
        .optional(),
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        comment: Joi.string().required(),
    }).required(),
});