# Umsetzlogik Website

Statische, responsive Website auf Basis des gelieferten Corporate Designs.

## Seiten
- `index.html` – Startseite
- `leistungen.html` – Leistungsübersicht
- `digitalisierung.html` – Detailseite Digitalisierung
- `prozesse.html` – Detailseite Prozesse
- `business-cases.html` – Detailseite Business Cases
- `arbeitsweise.html` – Vorgehensmodell
- `ueber.html` – Über Umsetzlogik
- `kontakt.html` – Kontakt
- `impressum.html` – Impressum
- `datenschutz.html` – Datenschutz
- `404.html` – Fehlerseite

## Technisch
- reines HTML/CSS/JavaScript, keine Framework-Abhängigkeiten
- responsive Navigation
- barrierearme Semantik und Focus States
- `prefers-reduced-motion` berücksichtigt
- keine Analyse- oder Tracking-Skripte
- SVG-Logo und grafische Elemente im Projekt enthalten

## Vor dem Livegang noch zu ergänzen
1. Ladungsfähige Anschrift im Impressum und Datenschutz.
2. Echte LinkedIn-Profil-URL (aktuell Platzhalter `#`).
3. Hosting-Anbieter in der Datenschutzerklärung.
4. Optional: produktiver Formular-Endpunkt. Aktuell öffnet das Kontaktformular eine vorbereitete E-Mail im lokalen Mailclient.
5. Optional: Inter als selbst gehostete Webfont, falls die exakte Typografie auf allen Geräten garantiert werden soll. Das CSS nutzt derzeit `Inter` mit System-Fallbacks.

## Lokal ansehen
Im Projektordner z. B.:

```bash
python -m http.server 8080
```

Dann `http://localhost:8080` öffnen.

## Grafiken und Piktogramme
Alle Logos, Portraits, Hero-Grafiken und Piktogramme sind bewusst als Platzhalter angelegt. Die finalen visuellen Assets werden vom Auftraggeber ausgewählt und anschließend eingesetzt.

## Aktueller Asset-Stand

- Portrait: final eingebunden (`assets/sergej-mueller.webp`)
- Logo: Primärlogo eingebunden (`assets/logo-primary.png`)
- Hero-/Markengrafiken: Platzhalter
- Piktogramme/Icons: Platzhalter; finale Auswahl folgt
- GitHub Pages Custom Domain: `umsetzlogik.de` über `CNAME`

- Cache-Busting für CSS/Assets aktiviert, um Darstellungsfehler nach Deployments zu vermeiden.

- Logo-Variante A: enger Zuschnitt, höhere Lesbarkeit des Claims, 290 px Desktop-Header


## Finaler Launch-Check

- Die Website verwendet Inter, sofern die Schrift lokal auf dem Endgerät vorhanden ist. Für eine garantiert identische Darstellung sollte Inter später datenschutzfreundlich selbst gehostet werden. In diesem Paket werden bewusst keine externen Font-CDNs eingebunden.
- Impressum und Datenschutz enthalten weiterhin markierte Platzhalter für die ladungsfähige Anschrift bzw. hostingbezogene Angaben. Diese Daten wurden nicht bereitgestellt und wurden daher nicht erfunden.
- HTTPS/DNS wird außerhalb des Website-Pakets in GitHub Pages bzw. beim DNS-Provider konfiguriert.
- Das Kontaktformular ist funktional und öffnet das lokale E-Mail-Programm mit den ausgefüllten Angaben; es überträgt keine Formulardaten an einen Webserver.


## Visuelle Typen – verbindliche Einordnung

Die Website unterscheidet bewusst zwischen **Grafiken** und **Piktogrammen**. Grafiken sind markenspezifische, erklärende Visuals und werden individuell in der Formensprache von Umsetzlogik erstellt. Piktogramme dienen der funktionalen Orientierung und können aus einem konsistenten Icon-System stammen.

- **Landing Page:** Herausforderung = Grafiken; Arbeitsweise = Grafiken; Leistungen = Piktogramme.
- **Leistungen:** Hero/Leistungen = Grafik aus dem Bereich „Herausforderung“; Leistungen im Detail = Piktogramme.
- **Arbeitsweise:** Hero/Arbeitsweise = Grafik; fünf Schritte = Grafiken; Prinzipien = Piktogramme.
- **Über Umsetzlogik:** Über = Grafik; Kompetenzprofil = Piktogramme.
- **Kontakt:** E-Mail = Piktogramm; LinkedIn = Piktogramm, alternativ Standardlogo; „Was Sie erwartet“ = Piktogramme.

Die Platzhalter im HTML sind entsprechend semantisch getrennt. Finale Grafiken und Piktogramme werden später als SVG-Assets eingesetzt.
