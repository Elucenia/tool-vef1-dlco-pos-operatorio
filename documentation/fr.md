<!-- ELUCENIA technical documentation · vef1-dlco-pos-operatorio · fr · no clinical/professional/rights approval -->

# VEMS et DLCO prédits postopératoires

[conditions, sources et autorisations](https://elucenia.org/fr/outils/vef1-dlco-pos-operatorio)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Méthode d’estimation

`mode`

facultatif

- `segmental` — Décompte des segments fonctionnels
- `perfusion` — Perfusion pulmonaire mesurée

### VEMS préopératoire (après bronchodilatateur)

`vef1`

% de la valeur théorique · intervalle: 10–150

### DLCO préopératoire

`dlco`

% de la valeur théorique · facultatif · intervalle: 10–150

### Segments fonctionnels à réséquer

`seg`

facultatif · intervalle: 1–19

### Segments obstrués (non fonctionnels) dans l’ensemble du poumon

`obs`

facultatif · intervalle: 0–18

### Perfusion du poumon à réséquer

`perfusao`

% de la perfusion totale · facultatif · intervalle: 0–100

## Édition de la méthode

ERS/ESTS 2009, page 22 : estimation initiale à partir des segments fonctionnels et formule avant pneumonectomie utilisant la fraction de perfusion mesurée ; seuils du résumé ACCP 2013 : les deux \>60%, l’un entre 30–60% et l’un \<30% ; aucune conformité clinique intégrale

## Formule documentée

Mode segmentaire : PPO = valeur préopératoire × (1 − y/z), où y est le nombre de segments fonctionnels à réséquer et z = 19 moins le nombre de segments obstrués. Les segments sont des nombres entiers et y ne peut pas dépasser z.

Mode par perfusion : PPO = valeur préopératoire × (1 − P/100), où P est le pourcentage mesuré de la perfusion totale attribuable au poumon à réséquer. Cette fraction n’est pas déduite du décompte des segments.

L’équation s’applique séparément au VEMS et à la DLCO. Sans DLCO, le résultat est un VEMS partiel et l’évaluation reste incomplète. Le choix clinique de l’intervention et de la stratégie d’évaluation nécessite une revue professionnelle.

## Limites et population

Estimation pour l’évaluation fonctionnelle des candidats à une résection pulmonaire, avec des valeurs préopératoires exprimées en pourcentage de la valeur prédite. Choisissez la méthode adaptée à l’intervention : décompte segmentaire pour une estimation initiale ; pour une pneumonectomie, renseignez la perfusion mesurée du poumon à réséquer. La perfusion n’est pas déduite de 19 segments. Saisissez les segments sous forme de nombres entiers ; le nombre à réséquer ne peut pas dépasser 19 moins les segments obstrués. Une perfusion de 0–100% correspond au domaine mathématique de l’implémentation ; 0% et 100% ne démontrent pas l’éligibilité à une intervention chirurgicale. Sans DLCO, seuls un VEMS partiel et une évaluation incomplète sont disponibles. Les algorithmes cardiovasculaires, les tests d’exercice, le correctif de 2014 et l’article ACCP intégral n’ont pas été vérifiés dans ce lot. La source ERS/ESTS 2009 a été lue sur cette page précise ; la source ACCP 2013, dans son résumé. Aucune revue clinique ni traduction professionnelle n’a été réalisée.

## Références

- [Brunelli A et al. Physiologic evaluation of the patient with lung cancer being considered for resectional surgery: diagnosis and management of lung cancer, 3rd ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2013.](https://doi.org/10.1378/chest.12-2395)

- [Brunelli A et al. ERS/ESTS clinical guidelines on fitness for radical therapy in lung cancer patients (surgery and chemo-radiotherapy). Eur Respir J, 2009.](https://doi.org/10.1183/09031936.00184308)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
