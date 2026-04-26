# Zonterras Amsterdam — adresversie

Deze versie gebruikt:

- `index.html` = de app
- `terraces.js` = de lijst met terrassen

## Nieuwe plek toevoegen

Open `terraces.js` en voeg onderaan vóór `];` een blok toe:

```js
{
  name: "Naam terras",
  area: "De Baarsjes",
  address: "Straatnaam 12, Amsterdam",
  sun: "middagzon / avondzon",
  vibe: "rustig, lokaal",
  rating: 8,
  notes: "Jouw korte opmerking.",
  tags: ["middag", "avond", "west", "baarsjes"],
  googleMapsUrl: "https://maps.app.goo.gl/..."
}
```

Let op de komma tussen blokken.

## Als adres niet goed werkt

Voeg dan handmatig coördinaten toe:

```js
lat: 52.37075695108969,
lng: 4.868689457674308,
```

Als `lat` en `lng` aanwezig zijn, gebruikt de app die in plaats van het adres.
