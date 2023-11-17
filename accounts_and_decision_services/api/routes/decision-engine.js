const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) throw error.details[0].message;
    if (req.body.preAssessment === 100)
      return res.status(200).send({ isEligible: true, approvedPercent: 100 });

    if (req.body.preAssessment >= 60)
      return res
        .status(200)
        .send({ isEligible: true, approvedPercent: req.body.preAssessment });

    if (req.body.preAssessment < 60)
      return res.status(200).send({ isEligible: false, approvedPercent: 0 });
  } catch (e) {
    return res.status(400).send(e);
  }
});

function validate(req) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(150).required(),
    establishedYear: Joi.number().min(1500).max(2023).required(),
    profitOrLoss: Joi.number().min(100).max(100_000_000_00).required(),
    preAssessment: Joi.number().min(1).max(100).required(),
  });

  return schema.validate(req);
}
module.exports = router;
