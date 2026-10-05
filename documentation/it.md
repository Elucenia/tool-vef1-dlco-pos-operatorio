<!-- ELUCENIA technical documentation · vef1-dlco-pos-operatorio · it · no clinical/professional/rights approval -->

# FEV₁ e DLCO previsti postoperatori

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/vef1-dlco-pos-operatorio)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Metodo di stima

`mode`

facoltativo

- `segmental` — Conteggio dei segmenti funzionanti
- `perfusion` — Perfusione polmonare misurata

### FEV₁ preoperatorio (dopo broncodilatatore)

`vef1`

% del valore previsto · intervallo: 10–150

### DLCO preoperatoria

`dlco`

% del valore previsto · facoltativo · intervallo: 10–150

### Segmenti funzionanti da resecare

`seg`

facoltativo · intervallo: 1–19

### Segmenti ostruiti (non funzionanti) dell’intero polmone

`obs`

facoltativo · intervallo: 0–18

### Perfusione del polmone da resecare

`perfusao`

% della perfusione totale · facoltativo · intervallo: 0–100

## Edizione del metodo

ERS/ESTS 2009, pagina 22: stima iniziale mediante segmenti funzionanti e formula prima della pneumonectomia basata sulla frazione di perfusione misurata; soglie del riassunto ACCP 2013: entrambi \>60%, uno tra 30–60% e uno \<30%; nessuna conformità clinica integrale

## Formula documentata

Modalità segmentaria: PPO = valore preoperatorio × (1 − y/z), dove y è il numero di segmenti funzionanti da resecare e z = 19 meno il numero di segmenti ostruiti. I segmenti sono conteggi interi e y non può superare z.

Modalità mediante perfusione: PPO = valore preoperatorio × (1 − P/100), dove P è la percentuale misurata della perfusione totale attribuibile al polmone da resecare. Questa frazione non viene dedotta dal conteggio dei segmenti.

L’equazione viene applicata separatamente al VEMS e alla DLCO. Senza DLCO, il risultato è un VEMS parziale e la valutazione rimane incompleta. La scelta clinica dell’intervento e della strategia di valutazione richiede una revisione professionale.

## Limiti e popolazione

Stima per la valutazione funzionale dei candidati a resezione polmonare, con valori preoperatori espressi come percentuale del previsto. Scegliere il metodo compatibile con l’intervento: conteggio segmentario come stima iniziale; nella pneumonectomia, inserire la perfusione misurata del polmone da resecare. La perfusione non viene dedotta da 19 segmenti. Inserire i segmenti come conteggi interi; il numero da resecare non può superare 19 meno quelli ostruiti. La perfusione di 0–100% è il dominio matematico dell’implementazione; 0% e 100% non dimostrano l’idoneità chirurgica. Senza DLCO, sono disponibili solo un VEMS parziale e una valutazione incompleta. Gli algoritmi cardiovascolari, i test da sforzo, la correzione del 2014 e l’articolo ACCP integrale non sono stati verificati in questo lotto. La fonte ERS/ESTS 2009 è stata letta in questa pagina specifica; la fonte ACCP 2013, nel riassunto. Non sono state eseguite una revisione clinica né una traduzione professionale.

## Riferimenti

- [Brunelli A et al. Physiologic evaluation of the patient with lung cancer being considered for resectional surgery: diagnosis and management of lung cancer, 3rd ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2013.](https://doi.org/10.1378/chest.12-2395)

- [Brunelli A et al. ERS/ESTS clinical guidelines on fitness for radical therapy in lung cancer patients (surgery and chemo-radiotherapy). Eur Respir J, 2009.](https://doi.org/10.1183/09031936.00184308)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
