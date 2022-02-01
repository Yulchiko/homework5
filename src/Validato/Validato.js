import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZA-яёЁіІїЇ]{1, 20}$')).required().messages({
        'string.empty':'"model" Не может быть пустым',
        'string.pattern.base':'Только буквы мах 20'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.base':'Цена может быть только от 1-1000000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base':'Год может быть от 1900 до 2022'
    })
})