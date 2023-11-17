const Joi = require("joi");
const debug = require("debug")("express");
const balanceSheet = require("../data/balanceSheet");
const monthDetails = require("../data/months");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const queryObj = req.query;
    const { error } = validate(queryObj);
    let yearRecords = [];
    if (error) throw error.details[0].message;

    yearRecords = balanceSheet[queryObj.year];

    if (yearRecords) {
      let result = queryObj.month
        ? yearRecords.filter((m) => m.month == queryObj.month)
        : yearRecords;

      if (result.length === 0)
        return res
          .status(404)
          .send(
            `Balance sheet not found for this: ${monthDetails.getFullMonth(
              queryObj.month
            )} month.`
          );

      return res.status(200).send(result);
    } else {
      return res
        .status(404)
        .send(
          `Sorry!!! Balance sheet is not available for requested year: ${queryObj.year}`
        );
    }
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.get("/:year", (req, res) => {
  try {
    debug(req);
    const year = req.params.year;
    const { error } = validate(req.params);
    if (error) throw error.details[0].message;
    if (balanceSheet[year]) return res.status(200).send(balanceSheet[year]);
    else
      return res
        .status(404)
        .send(
          `Sorry!!! Balance sheet not available for the requested year: ${year}`
        );
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.get("/:year/:month", (req, res) => {
  try {
    const month = req.params.month;
    const year = req.params.year;
    debug(req);

    const { error } = validate(req.params);
    if (error) throw error.details[0].message;

    let yearRecord = balanceSheet[year];
    if (!yearRecord)
      return res
        .status(404)
        .send("The requested balance sheet not available for this year.");

    let monthRecord = yearRecord.filter((r) => r.month == month);
    if (monthRecord.length === 0) {
      return res
        .status(404)
        .send(
          `Sorry!!! Record not found for this: ${monthDetails.getFullMonth(
            month
          )} month`
        );
    }
    return res.status(200).send(monthRecord);
  } catch (e) {
    return res.status(400).send(e);
  }
});

function validate(req) {
  const schema = Joi.object({
    year: Joi.number().min(2010).max(2023).required(),
    month: Joi.number().min(1).max(12),
  });
  return schema.validate(req);
}
module.exports = router;
