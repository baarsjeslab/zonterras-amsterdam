// Bewerk dit bestand om terrassen toe te voegen.
// Je hoeft meestal alleen address in te vullen.
// Als een plek verkeerd op de kaart komt, voeg dan handmatig lat en lng toe.
// rating = jouw reviewcijfer 1 t/m 10.
// tags voor filters: ochtend, middag, avond, water, west, oost, baarsjes.

const terraces = [
  {
    name: "Hendrix",
    area: "Oud-West",
    address: "De Clercqstraat 82, Amsterdam",
    sun: "middagzon / avondzon",
    vibe: "buurtbar, all-day hangout",
    rating: 8,
    notes: "Goede buurtplek.",
    tags: ["middag", "avond", "west"],
    googleMapsUrl: "https://maps.app.goo.gl/gxfqaeksWK1oQrDT6"
  },
  {
    name: "De Neef van Fred",
    area: "De Baarsjes",
    address: "Jan Evertsenstraat 41H, Amsterdam",
    sun: "middagzon / avondzon",
    vibe: "buurtbistro, gezellig terras",
    rating: 8,
    notes: "Baarsjes favoriet.",
    tags: ["middag", "avond", "west", "baarsjes"]
  },
  {
    name: "Bam Boa",
    area: "Oost / Weesperzijde",
    address: "Weesperzijde 135, Amsterdam",
    sun: "middagzon / avondzon",
    vibe: "aan de Amstel, zomers, cocktails",
    rating: 8,
    notes: "Aan de Amstel.",
    tags: ["middag", "avond", "water", "oost"]
  },
  {
    name: "Hesp",
    area: "Oost / Weesperzijde",
    address: "Weesperzijde 130, Amsterdam",
    sun: "middagzon / avondzon",
    vibe: "Amstelzicht, klassiek caféterras",
    rating: 8,
    notes: "Klassieker aan de Amstel.",
    tags: ["middag", "avond", "water", "oost"]
  },
  {
    name: "Hannekes Boom",
    area: "Centrum",
    address: "Dijksgracht 4, Amsterdam",
    sun: "middagzon / avondzon",
    vibe: "aan het water, levendig",
    rating: 8,
    notes: "Goed voor grote groep en zomergevoel.",
    tags: ["middag", "avond", "water"]
  },
  {
    name: "Waterkant",
    area: "West",
    address: "Marnixstraat 246, Amsterdam",
    sun: "middagzon",
    vibe: "aan het water, druk, gezellig",
    rating: 8,
    notes: "Vaak druk, wel veel zongevoel.",
    tags: ["middag", "water", "west"]
  },
  {
    name: "Noorderlicht",
    area: "Noord",
    address: "NDSM-Plein 102, Amsterdam",
    sun: "avondzon",
    vibe: "creatief, ruim, aan het IJ",
    rating: 8,
    notes: "Leuk als je naar Noord wilt.",
    tags: ["avond", "water"]
  }
];
