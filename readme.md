# MAKERFAIRE 2022 WEBSITE

## WIE MAN DIE WEBSEITE BEARBEITET

1. repo local clonen `git clone` etc.

2. npm oder nodejs muss installiert sein https://nodejs.org/en/download/

3. in den gerade geclonten Ordner navigieren mit dem Terminal

4. `npm i` im terminal ausführen

5. `npm watchcss` in einem Terminal ausführen

6. ein weiteres Terminal öffnen und dort `npm watch` ausführen -> beide Prozesse müssen dauerhaft laufen

7. die Webseite im Browser öffnen -> am besten einen Live-server benutzen -> es müssen die HTML Dateien aus dem Docs Ordner geöffnet werden

8. danach können die Templates in den src Ordner geändert werden, einfach an der richtigen Stelle in der HTML Datei den Text einfügen -> die Dateien aus dem Docs-Ordner werden dynamisch generiert

9. wenn man die Hintergrundbilder verändern möchte, muss man in die input.css datei wechseln und dort bei den jeweiligen Klassen z.B. header-allgemein, das Hintergrundbild ändern

10. Logo hinzufügen -> ich hatte nichts passendes -> in die _navbar.html gehen und Zeile 39 und 40 mit einem passenden Bild oder auch svg ersetzen
