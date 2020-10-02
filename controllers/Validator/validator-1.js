const Model = require('../../models/Validator/validator-1')

exports.createOne = async ( req, res, next ) => {
    try {
        const doc = await Model.create(req.body)
        res.status(201).json({
            status: 'success',
            length: doc.length,
            doc
        })
    } catch (error) {
        // console.log(error.errors.validator_seq.properties.max)
        console.log(error.name)
        res.status(404).json({
            status: 'Error',
            code: error.code,
            message: error.message
        })
    }
}

exports.getAll = async ( req, res, next ) => {
    try {
        const doc = await Model.find().limit(10)
        res.status(200).json({
            status: 'success',
            length: doc.length,
            doc
        })
    } catch (error) {
        res.json({
            status: 'Error',
            code: error.code,
            message: error.message
        })
    }
}