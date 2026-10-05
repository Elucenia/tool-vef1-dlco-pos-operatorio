<!-- ELUCENIA technical documentation · vef1-dlco-pos-operatorio · en · no clinical/professional/rights approval -->

# Predicted postoperative FEV₁ and DLCO

[conditions, sources and permissions](https://elucenia.org/en/tools/vef1-dlco-pos-operatorio)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Estimation method

`mode`

optional

- `segmental` — Functioning segment count
- `perfusion` — Measured pulmonary perfusion

### Preoperative FEV₁ (postbronchodilator)

`vef1`

% of predicted · range: 10–150

### Preoperative DLCO

`dlco`

% of predicted · optional · range: 10–150

### Functioning segments to be resected

`seg`

optional · range: 1–19

### Obstructed (nonfunctioning) segments in the whole lung

`obs`

optional · range: 0–18

### Perfusion of the lung to be resected

`perfusao`

% of total perfusion · optional · range: 0–100

## Method edition

ERS/ESTS 2009, page 22: initial estimate from functioning segments and pre-pneumonectomy formula using the measured perfusion fraction; thresholds from the ACCP 2013 abstract: both \>60%, either between 30–60%, and either \<30%; no complete clinical conformance

## Documented formula

Segmental mode: PPO = preoperative value × (1 − y/z), where y is the number of functioning segments to be resected and z = 19 minus the number of obstructed segments. Segments are integer counts, and y cannot exceed z.

Perfusion mode: PPO = preoperative value × (1 − P/100), where P is the measured percentage of total perfusion attributable to the lung to be resected. This fraction is not inferred from the segment count.

The equation is applied separately to FEV₁ and DLCO. Without DLCO, the result is a partial FEV₁ result and the assessment remains incomplete. Clinical selection of the intervention and assessment strategy requires professional review.

## Limits and population

An estimate for functional assessment of lung resection candidates, with preoperative values expressed as percentages of predicted values. Select the method appropriate to the intervention: segment counting for an initial estimate; for pneumonectomy, enter the measured perfusion of the lung to be resected. Perfusion is not deduced from 19 segments. Enter segments as integer counts; the number to be resected cannot exceed 19 minus the obstructed segments. Perfusion of 0–100% is the implementation's mathematical domain; 0% and 100% do not establish surgical eligibility. Without DLCO, only a partial FEV₁ result and an incomplete assessment are available. Cardiovascular algorithms, exercise tests, the 2014 correction, and the full ACCP article were not checked in this batch. The ERS/ESTS 2009 source was read on this specific page; the ACCP 2013 source was read in abstract form. Clinical review and professional translation were not performed.

## References

- [Brunelli A et al. Physiologic evaluation of the patient with lung cancer being considered for resectional surgery: diagnosis and management of lung cancer, 3rd ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2013.](https://doi.org/10.1378/chest.12-2395)

- [Brunelli A et al. ERS/ESTS clinical guidelines on fitness for radical therapy in lung cancer patients (surgery and chemo-radiotherapy). Eur Respir J, 2009.](https://doi.org/10.1183/09031936.00184308)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
