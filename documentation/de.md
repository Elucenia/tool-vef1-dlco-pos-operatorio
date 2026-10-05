<!-- ELUCENIA technical documentation · vef1-dlco-pos-operatorio · de · no clinical/professional/rights approval -->

# Vorhergesagte postoperative FEV₁ und DLCO

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/vef1-dlco-pos-operatorio)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Schätzmethode

`mode`

optional

- `segmental` — Zählung funktionsfähiger Segmente
- `perfusion` — Gemessene Lungenperfusion

### Präoperative FEV₁ (nach Bronchodilatation)

`vef1`

% des Sollwerts · Bereich: 10–150

### Präoperative DLCO

`dlco`

% des Sollwerts · optional · Bereich: 10–150

### Zu resezierende funktionsfähige Segmente

`seg`

optional · Bereich: 1–19

### Obstruierte (nicht funktionsfähige) Segmente in der gesamten Lunge

`obs`

optional · Bereich: 0–18

### Perfusion der zu resezierenden Lunge

`perfusao`

% der Gesamtperfusion · optional · Bereich: 0–100

## Fassung der Methode

ERS/ESTS 2009, Seite 22: erste Schätzung anhand funktionsfähiger Segmente und Formel vor Pneumonektomie mit gemessenem Perfusionsanteil; Grenzwerte aus dem Abstract der ACCP 2013: beide \>60%, einer zwischen 30–60% und einer \<30%; keine vollständige klinische Konformität

## Dokumentierte Formel

Segmentaler Modus: PPO = präoperativer Wert × (1 − y/z), wobei y die Zahl der zu resezierenden funktionsfähigen Segmente und z = 19 abzüglich der Zahl obstruierter Segmente ist. Segmente werden als ganze Zahlen gezählt, und y darf z nicht überschreiten.

Perfusionsmodus: PPO = präoperativer Wert × (1 − P/100), wobei P der gemessene prozentuale Anteil der Gesamtperfusion ist, der auf die zu resezierende Lunge entfällt. Dieser Anteil wird nicht aus der Segmentzahl abgeleitet.

Die Gleichung wird getrennt auf FEV₁ und DLCO angewendet. Ohne DLCO liegt nur eine Teilberechnung des FEV₁ vor; die Beurteilung bleibt unvollständig. Die klinische Wahl des Eingriffs und der Beurteilungsstrategie erfordert eine fachliche Prüfung.

## Grenzen und Population

Schätzung zur funktionellen Beurteilung von Kandidaten für eine Lungenresektion; präoperative Werte werden als Prozent des Sollwerts angegeben. Wählen Sie die zum Eingriff passende Methode: Segmentzählung als erste Schätzung; bei Pneumonektomie geben Sie die gemessene Perfusion der zu resezierenden Lunge an. Die Perfusion wird nicht aus 19 Segmenten abgeleitet. Geben Sie Segmente als ganze Zahlen an; die zu resezierende Anzahl darf 19 abzüglich der obstruierten Segmente nicht überschreiten. Eine Perfusion von 0–100% ist der mathematische Definitionsbereich der Implementierung; 0% und 100% belegen keine operative Eignung. Ohne DLCO liegen nur eine Teilberechnung des FEV₁ und eine unvollständige Beurteilung vor. Kardiovaskuläre Algorithmen, Belastungstests, die Korrektur von 2014 und der vollständige ACCP-Artikel wurden in diesem Paket nicht geprüft. Die Quelle ERS/ESTS 2009 wurde auf dieser konkreten Seite gelesen, die Quelle ACCP 2013 im Abstract. Eine klinische Prüfung und professionelle Übersetzung wurden nicht durchgeführt.

## Referenzen

- [Brunelli A et al. Physiologic evaluation of the patient with lung cancer being considered for resectional surgery: diagnosis and management of lung cancer, 3rd ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2013.](https://doi.org/10.1378/chest.12-2395)

- [Brunelli A et al. ERS/ESTS clinical guidelines on fitness for radical therapy in lung cancer patients (surgery and chemo-radiotherapy). Eur Respir J, 2009.](https://doi.org/10.1183/09031936.00184308)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
