<!-- ELUCENIA technical documentation · vef1-dlco-pos-operatorio · es · no clinical/professional/rights approval -->

# FEV₁ y DLCO previstos posoperatorios

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/vef1-dlco-pos-operatorio)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Método de estimación

`mode`

opcional

- `segmental` — Recuento de segmentos funcionantes
- `perfusion` — Perfusión pulmonar medida

### FEV₁ preoperatorio (tras broncodilatador)

`vef1`

% del valor previsto · intervalo: 10–150

### DLCO preoperatoria

`dlco`

% del valor previsto · opcional · intervalo: 10–150

### Segmentos funcionantes que se resecarán

`seg`

opcional · intervalo: 1–19

### Segmentos obstruidos (no funcionantes) en todo el pulmón

`obs`

opcional · intervalo: 0–18

### Perfusión del pulmón que se va a resecar

`perfusao`

% de la perfusión total · opcional · intervalo: 0–100

## Edición del método

ERS/ESTS 2009, página 22: estimación inicial mediante segmentos funcionantes y fórmula previa a la neumonectomía basada en la fracción de perfusión medida; puntos de corte del resumen ACCP 2013: ambos \>60%, alguno entre 30–60% y alguno \<30%; sin conformidad clínica integral

## Fórmula documentada

Modo segmentario: PPO = valor preoperatorio × (1 − y/z), donde y es el número de segmentos funcionantes que se van a resecar y z = 19 menos el número de segmentos obstruidos. Los segmentos son recuentos enteros e y no puede superar z.

Modo por perfusión: PPO = valor preoperatorio × (1 − P/100), donde P es el porcentaje medido de la perfusión total atribuible al pulmón que se va a resecar. Esta fracción no se infiere del recuento de segmentos.

La ecuación se aplica por separado al VEF₁ y a la DLCO. Sin DLCO, el resultado es un VEF₁ parcial y la evaluación permanece incompleta. La elección clínica de la intervención y de la estrategia de evaluación exige una revisión profesional.

## Límites y población

Estimación para la evaluación funcional de candidatos a resección pulmonar, con valores preoperatorios expresados como porcentaje del valor previsto. Elija el método compatible con la intervención: recuento segmentario como estimación inicial; para la neumonectomía, indique la perfusión medida del pulmón que se va a resecar. No se deduce la perfusión a partir de 19 segmentos. Introduzca los segmentos como recuentos enteros; el número que se va a resecar no puede superar 19 menos los obstruidos. La perfusión de 0–100% es el dominio matemático de la implementación; el 0% y el 100% no demuestran elegibilidad quirúrgica. Sin DLCO, solo hay un VEF₁ parcial y una evaluación incompleta. No se comprobaron en este lote los algoritmos cardiovasculares, las pruebas de ejercicio, la corrección de 2014 ni el artículo ACCP completo. La fuente ERS/ESTS 2009 se leyó en esta página concreta; la fuente ACCP 2013, en su resumen. No se realizaron una revisión clínica ni una traducción profesional.

## Referencias

- [Brunelli A et al. Physiologic evaluation of the patient with lung cancer being considered for resectional surgery: diagnosis and management of lung cancer, 3rd ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2013.](https://doi.org/10.1378/chest.12-2395)

- [Brunelli A et al. ERS/ESTS clinical guidelines on fitness for radical therapy in lung cancer patients (surgery and chemo-radiotherapy). Eur Respir J, 2009.](https://doi.org/10.1183/09031936.00184308)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
