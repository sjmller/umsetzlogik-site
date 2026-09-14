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
