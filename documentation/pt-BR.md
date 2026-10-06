<!-- ELUCENIA technical documentation · vef1-dlco-pos-operatorio · pt-BR · no clinical/professional/rights approval -->

# VEF₁ e DLCO previstos pós-operatórios

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/vef1-dlco-pos-operatorio)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Método de estimativa

`mode`

opcional

- `segmental` — Contagem de segmentos funcionantes
- `perfusion` — Perfusão pulmonar medida

### VEF₁ pré-operatório (pós-broncodilatador)

`vef1`

% do previsto · intervalo: 10–150

### DLCO pré-operatória

`dlco`

% do previsto · opcional · intervalo: 10–150

### Segmentos funcionantes que serão ressecados

`seg`

opcional · intervalo: 1–19

### Segmentos obstruídos (não funcionantes) no pulmão todo

`obs`

opcional · intervalo: 0–18

### Perfusão do pulmão a ressecar

`perfusao`

% da perfusão total · opcional · intervalo: 0–100

## Edição do método

ERS/ESTS 2009, página 22: estimativa inicial por segmentos funcionantes e fórmula pré-pneumonectomia por fração de perfusão medida; cortes do resumo ACCP 2013: ambos \>60%, algum entre 30–60% e algum \<30%; sem conformidade clínica integral

## Fórmula documentada

Modo segmentar: PPO = valor pré-operatório × (1 − y/z), em que y é a contagem de segmentos funcionantes a ressecar e z = 19 menos a contagem de segmentos obstruídos. Os segmentos são contagens inteiras e y não pode superar z.

Modo por perfusão: PPO = valor pré-operatório × (1 − P/100), em que P é a percentagem medida da perfusão total atribuída ao pulmão a ressecar. Esta fração não é inferida da contagem de segmentos.

A equação é aplicada separadamente ao VEF₁ e à DLCO. Sem DLCO, o resultado é um VEF₁ parcial e a avaliação permanece incompleta. A escolha clínica da intervenção e da estratégia de avaliação exige revisão profissional.

## Limites e população

Estimativa para avaliação funcional de candidatos a ressecção pulmonar, com valores pré-operatórios em percentagem do previsto. Escolha o método compatível com a intervenção: contagem segmentar como estimativa inicial; na pneumonectomia, informe a perfusão medida do pulmão a ressecar. Não se deduz perfusão a partir de 19 segmentos. Informe segmentos como contagens inteiras; a contagem a ressecar não pode superar 19 menos os obstruídos. Perfusão de 0–100% é o domínio matemático da implementação; 0% e 100% não demonstram elegibilidade cirúrgica. Sem DLCO, apenas VEF₁ parcial e avaliação incompleta. Algoritmos cardiovasculares, testes de exercício, correção de 2014 e artigo ACCP integral não foram conferidos neste lote. A fonte ERS/ESTS 2009 foi lida nesta página específica; a fonte ACCP 2013, no resumo. Revisão clínica e tradução profissional não realizadas.

## Referências

- [Brunelli A et al. Physiologic evaluation of the patient with lung cancer being considered for resectional surgery: diagnosis and management of lung cancer, 3rd ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2013.](https://doi.org/10.1378/chest.12-2395)

- [Brunelli A et al. ERS/ESTS clinical guidelines on fitness for radical therapy in lung cancer patients (surgery and chemo-radiotherapy). Eur Respir J, 2009.](https://doi.org/10.1183/09031936.00184308)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Baixo risco: cirurgia sem testes adicionais (VEF₁ppo e DLCOppo > 60%)

| Detalhes do resultado | |
| --- | --- |
| VEF₁ppo | 80,5% |
| DLCOppo | 76,1% |
| Fração de função preservada | 89,5% (17 de 19 segmentos) |


### 2

Risco aumentado: fazer teste de exercício simples (escada ou shuttle walk)

| Detalhes do resultado | |
| --- | --- |
| VEF₁ppo | 58,9% |
| DLCOppo | 55,3% |
| Fração de função preservada | 73,7% (14 de 19 segmentos) |


### 3

Alto risco: fazer teste cardiopulmonar de exercício (VO₂ máx.)

| Detalhes do resultado | |
| --- | --- |
| VEF₁ppo | 26,3% |
| DLCOppo | 28,9% |
| Fração de função preservada | 52,6% (10 de 19 segmentos) |


### 4

Avaliação incompleta: DLCO não informada. O VEF₁ppo isolado não estabelece baixo risco. Se VEF₁ppo <30%, o resumo ACCP 2013 já indica avaliação cardiopulmonar de exercício; a avaliação global permanece incompleta.

| Detalhes do resultado | |
| --- | --- |
| VEF₁ppo | 49,4% |
| DLCOppo | não informado |
| Fração de função preservada | 70,6% (12 de 17 segmentos) |

A ACCP recomenda medir a DLCO em todos os candidatos a ressecção, mesmo com VEF₁ normal.

