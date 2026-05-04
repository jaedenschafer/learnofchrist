// Raffaello Sanzio da Urbino — biblical paintings, 1502–1520.
//
// Raphael's biblical corpus has four centers of gravity:
//   1. The Stanze frescoes in the Vatican Palace (1509–1514), of which the
//      Disputation, the Liberation of Peter, the Expulsion of Heliodorus,
//      and the Mass at Bolsena are explicitly scriptural.
//   2. The Sistine tapestry cartoons (1515–1516) — seven large narrative
//      compositions of Acts and the Gospels, now in the V&A.
//   3. The great altarpieces — the Transfiguration, the Entombment, the
//      Sposalizio, Saint Michael, the Oddi Coronation.
//   4. The Florentine and Roman Madonnas (Meadow, Sistine, Seggiola,
//      Foligno, Goldfinch, Alba, Belle Jardinière).
//
// All plates verified on Wikimedia Commons.

import type { TopicSlug } from './topics';

export type RaphaelPlate = {
  externalId: string;
  title: string;
  wikimediaFile: string;
  year: number;
  medium: string;
  bookSlug: string;
  chapter: number;
  verseStart?: number;
  verseEnd?: number;
  sceneSlug?: string;
  description?: string;
  /** Optional thematic topics. Used by the artwork resolver to fall
   *  back from chapter-specific matches to topic-overlap matches. */
  topicTags?: TopicSlug[];
};

export const RAPHAEL_PLATES: RaphaelPlate[] = [
  // ===== Early altarpieces =====
  {
    externalId: 'raphael-marriage-of-the-virgin',
    title: 'Marriage of the Virgin (Lo Sposalizio)',
    wikimediaFile: 'Raphael Marriage of the Virgin.jpg',
    year: 1504,
    medium: 'Oil on panel',
    bookSlug: 'luke',
    chapter: 1,
    verseStart: 27,
    sceneSlug: 'nativity', topicTags: ['incarnation', 'humility', 'hope'],
    description: "Joseph places the ring on Mary's finger before the Temple, his miraculously flowering rod in the other hand. Pinacoteca di Brera, Milan.",
  },
  {
    externalId: 'raphael-oddi-coronation-of-the-virgin',
    title: 'Coronation of the Virgin (Oddi Altarpiece)',
    wikimediaFile: 'Raffaello Sanzio - The Crowning of the Virgin (Oddi Altarpiece) - WGA18609.jpg',
    year: 1503,
    medium: 'Oil on panel transferred to canvas',
    bookSlug: 'luke',
    chapter: 1,
    verseStart: 46,
    verseEnd: 55,
    sceneSlug: 'redemption', topicTags: ['mercy', 'forgiveness', 'cross'],
    description: "Apostles around the empty tomb below; Christ crowning his mother in glory above. Pinacoteca Vaticana.",
  },

  // ===== Florentine Madonnas (c.1504–1508) =====
  {
    externalId: 'raphael-madonna-of-the-meadow',
    title: 'Madonna of the Meadow',
    wikimediaFile: 'Raphael - Madonna in the Meadow - Google Art Project.jpg',
    year: 1506,
    medium: 'Oil on panel',
    bookSlug: 'luke',
    chapter: 2,
    verseStart: 7,
    sceneSlug: 'nativity', topicTags: ['incarnation', 'humility', 'hope'],
    description: "Mary steadies the Christ child as he reaches for a small cross held by the young John the Baptist. Kunsthistorisches Museum, Vienna.",
  },
  {
    externalId: 'raphael-madonna-of-the-goldfinch',
    title: 'Madonna of the Goldfinch',
    wikimediaFile: 'Raffaello Sanzio - Madonna del Cardellino - Google Art Project.jpg',
    year: 1506,
    medium: 'Oil on panel',
    bookSlug: 'luke',
    chapter: 2,
    verseStart: 7,
    sceneSlug: 'nativity', topicTags: ['incarnation', 'humility', 'hope'],
    description: "John the Baptist offers the small goldfinch — a traditional emblem of the Passion — to the Christ child. Uffizi, Florence.",
  },
  {
    externalId: 'raphael-belle-jardiniere',
    title: 'La Belle Jardinière',
    wikimediaFile: "La Vierge à l'Enfant avec le petit saint Jean Baptiste - Raphaël - Musée du Louvre Peintures INV 602 ; MR 433.jpg",
    year: 1507,
    medium: 'Oil on panel',
    bookSlug: 'luke',
    chapter: 2,
    verseStart: 7,
    sceneSlug: 'nativity', topicTags: ['incarnation', 'humility', 'hope'],
    description: "The third of Raphael's pyramidal Florentine Madonnas: Mary in a meadow with the infant Christ and the young Baptist. Musée du Louvre.",
  },
  {
    externalId: 'raphael-entombment-pala-baglioni',
    title: 'The Entombment (Pala Baglioni)',
    wikimediaFile: 'Raffaello, deposizione borghese, 1507.jpg',
    year: 1507,
    medium: 'Oil on panel',
    bookSlug: 'john',
    chapter: 19,
    verseStart: 40,
    verseEnd: 42,
    sceneSlug: 'passion', topicTags: ['suffering', 'cross', 'sacrifice'],
    description: "The body of Christ is carried to the tomb; Mary faints into the arms of the women behind. Commissioned by Atalanta Baglioni in memory of her murdered son. Galleria Borghese, Rome.",
  },

  // ===== Stanze (Vatican Palace, 1509–1514) =====
  {
    externalId: 'raphael-disputation-of-the-holy-sacrament',
    title: 'Disputation of the Holy Sacrament',
    wikimediaFile: 'Raphaels Disputation of the Holy Sacrament.jpg',
    year: 1510,
    medium: 'Fresco',
    bookSlug: '1-kings',
    chapter: 8,
    verseStart: 10,
    verseEnd: 11,
    sceneSlug: 'teaching', topicTags: ['wisdom', 'witness'],
    description: "Stanza della Segnatura. The Eucharist on the altar is flanked by theologians on earth and the saints and patriarchs of heaven — a vision of the Church ordered around the sacrament.",
  },
  {
    externalId: 'raphael-expulsion-of-heliodorus',
    title: 'The Expulsion of Heliodorus from the Temple',
    wikimediaFile: 'Raphael - The Expulsion of Heliodorus from the Temple.jpg',
    year: 1512,
    medium: 'Fresco',
    bookSlug: '2-maccabees',
    chapter: 3,
    verseStart: 24,
    verseEnd: 30,
    sceneSlug: 'deliverance', topicTags: ['deliverance', 'protection'],
    description: "Stanza di Eliodoro. The Seleucid Heliodorus is struck down by a heavenly rider and two angels as he attempts to loot the Temple treasury in Jerusalem.",
  },
  {
    externalId: 'raphael-mass-at-bolsena',
    title: 'The Mass at Bolsena',
    wikimediaFile: 'Raphael - The Mass at Bolsena.jpg',
    year: 1512,
    medium: 'Fresco',
    bookSlug: '1-kings',
    chapter: 8,
    verseStart: 10,
    verseEnd: 11,
    sceneSlug: 'teaching', topicTags: ['wisdom', 'witness'],
    description: "Stanza di Eliodoro. Blood drips from the consecrated host into the corporal as the doubting priest of Bolsena celebrates Mass before Pope Julius II.",
  },
  {
    externalId: 'raphael-liberation-of-saint-peter',
    title: 'The Liberation of Saint Peter',
    wikimediaFile: 'Raphael - Deliverance of Saint Peter.jpg',
    year: 1514,
    medium: 'Fresco',
    bookSlug: 'acts',
    chapter: 12,
    verseStart: 6,
    verseEnd: 11,
    sceneSlug: 'apostles', topicTags: ['witness', 'mission', 'unity'],
    description: "Stanza di Eliodoro. Three scenes in one lunette: the angel wakes Peter in the cell; they walk out past the sleeping soldiers; the guards rouse on the stairs. A breakthrough image of nocturnal light.",
  },

  // ===== Prophets and Sibyls (smaller Roman frescoes) =====
  {
    externalId: 'raphael-prophet-isaiah-santagostino',
    title: 'The Prophet Isaiah',
    wikimediaFile: 'Raffael - The Prophet Isaiah - 1511-1512.jpg',
    year: 1512,
    medium: 'Fresco',
    bookSlug: 'isaiah',
    chapter: 7,
    verseStart: 14,
    sceneSlug: 'prophets', topicTags: ['calling', 'witness', 'judgment', 'messianic-prophecy'],
    description: "Basilica of Sant'Agostino, Rome. A monumental seated Isaiah flanked by two putti, directly inspired by the Sistine ceiling prophets he had watched Michelangelo paint.",
  },
  {
    externalId: 'raphael-sibyls-santa-maria-della-pace',
    title: 'Sibyls and Prophets',
    wikimediaFile: 'Raffaello Sanzio - Sibyls and Prophets - WGA18807.jpg',
    year: 1514,
    medium: 'Fresco',
    bookSlug: 'isaiah',
    chapter: 11,
    verseStart: 1,
    verseEnd: 2,
    sceneSlug: 'prophets', topicTags: ['calling', 'witness', 'judgment', 'messianic-prophecy'],
    description: "Chigi Chapel, Santa Maria della Pace, Rome. Four gentile sibyls receive their prophecies from angels, paired with prophets in the spandrels above.",
  },

  // ===== Vision of Ezekiel =====
  {
    externalId: 'raphael-vision-of-ezekiel',
    title: 'The Vision of Ezekiel',
    wikimediaFile: 'Raffaello Sanzio - The Vision of Ezekiel - WGA18874.jpg',
    year: 1518,
    medium: 'Oil on panel',
    bookSlug: 'ezekiel',
    chapter: 1,
    verseStart: 4,
    verseEnd: 14,
    sceneSlug: 'visions', topicTags: ['glory', 'second-coming', 'judgment'],
    description: "God the Father borne on a chariot of the four living creatures — the lion, ox, eagle, and man of the opening vision. Palazzo Pitti, Florence.",
  },

  // ===== Sistine tapestry cartoons (V&A, 1515–1516) =====
  {
    externalId: 'raphael-cartoon-miraculous-draught-of-fishes',
    title: 'The Miraculous Draught of Fishes',
    wikimediaFile: 'Raphael - The Miraculous Draft of Fishes - Google Art Project.jpg',
    year: 1515,
    medium: 'Bodycolor on paper mounted on canvas',
    bookSlug: 'luke',
    chapter: 5,
    verseStart: 4,
    verseEnd: 11,
    sceneSlug: 'miracles', topicTags: ['compassion', 'glory', 'sovereignty'],
    description: "Sistine tapestry cartoon. Peter falls to his knees before Christ as the nets break with the catch and James and John haul in the second boat. Victoria and Albert Museum, London.",
  },
  {
    externalId: 'raphael-cartoon-christs-charge-to-peter',
    title: "Christ's Charge to Peter",
    wikimediaFile: "V&A - Raphael, Christ's Charge to Peter (1515).jpg",
    year: 1515,
    medium: 'Bodycolor on paper mounted on canvas',
    bookSlug: 'john',
    chapter: 21,
    verseStart: 15,
    verseEnd: 17,
    sceneSlug: 'resurrection', topicTags: ['resurrection', 'hope', 'new-creation'],
    description: "Sistine tapestry cartoon. The risen Christ hands Peter the keys and charges him, 'Feed my sheep.' Victoria and Albert Museum, London.",
  },
  {
    externalId: 'raphael-cartoon-healing-of-the-lame-man',
    title: 'The Healing of the Lame Man',
    wikimediaFile: 'V&A - Raphael, The Healing of the Lame Man (1515).jpg',
    year: 1515,
    medium: 'Bodycolor on paper mounted on canvas',
    bookSlug: 'acts',
    chapter: 3,
    verseStart: 1,
    verseEnd: 10,
    sceneSlug: 'apostles', topicTags: ['witness', 'mission', 'unity'],
    description: "Sistine tapestry cartoon. Peter and John heal the beggar at the Beautiful Gate of the Temple, set in Raphael's imagined Solomonic colonnade. Victoria and Albert Museum, London.",
  },
  {
    externalId: 'raphael-cartoon-death-of-ananias',
    title: 'The Death of Ananias',
    wikimediaFile: 'V&A - Raphael, The Death of Ananias (1515).jpg',
    year: 1515,
    medium: 'Bodycolor on paper mounted on canvas',
    bookSlug: 'acts',
    chapter: 5,
    verseStart: 1,
    verseEnd: 10,
    sceneSlug: 'apostles', topicTags: ['witness', 'mission', 'unity'],
    description: "Sistine tapestry cartoon. Ananias falls dead at the feet of the apostles for lying about the price of his field. Victoria and Albert Museum, London.",
  },
  {
    externalId: 'raphael-cartoon-conversion-of-the-proconsul',
    title: 'The Conversion of the Proconsul (Blinding of Elymas)',
    wikimediaFile: 'V&A - Raphael, The Conversion of the Proconsul (1515).jpg',
    year: 1515,
    medium: 'Bodycolor on paper mounted on canvas',
    bookSlug: 'acts',
    chapter: 13,
    verseStart: 9,
    verseEnd: 12,
    sceneSlug: 'apostles', topicTags: ['witness', 'mission', 'unity'],
    description: "Sistine tapestry cartoon. Paul strikes the sorcerer Elymas blind before the proconsul Sergius Paulus at Paphos. Victoria and Albert Museum, London.",
  },
  {
    externalId: 'raphael-cartoon-sacrifice-at-lystra',
    title: 'The Sacrifice at Lystra',
    wikimediaFile: 'V&A - Raphael, The Sacrifice at Lystra (1515).jpg',
    year: 1515,
    medium: 'Bodycolor on paper mounted on canvas',
    bookSlug: 'acts',
    chapter: 14,
    verseStart: 11,
    verseEnd: 18,
    sceneSlug: 'apostles', topicTags: ['witness', 'mission', 'unity'],
    description: "Sistine tapestry cartoon. The people of Lystra prepare a bull for sacrifice to Paul and Barnabas, whom they mistake for Hermes and Zeus, while the apostles tear their tunics in horror. Victoria and Albert Museum, London.",
  },
  {
    externalId: 'raphael-cartoon-paul-preaching-at-athens',
    title: 'Paul Preaching at Athens',
    wikimediaFile: 'V&A - Raphael, St Paul Preaching in Athens (1515).jpg',
    year: 1515,
    medium: 'Bodycolor on paper mounted on canvas',
    bookSlug: 'acts',
    chapter: 17,
    verseStart: 22,
    verseEnd: 34,
    sceneSlug: 'apostles', topicTags: ['witness', 'mission', 'unity'],
    description: "Sistine tapestry cartoon. Paul on the Areopagus proclaims the 'unknown God' to the Athenians, Dionysius and Damaris turning toward him in belief. Victoria and Albert Museum, London.",
  },

  // ===== Vatican Loggia — one representative panel =====
  {
    externalId: 'raphael-loggia-sacrifice-of-noah',
    title: 'The Sacrifice of Noah (Vatican Loggia)',
    wikimediaFile: 'Raffaello Sacrifico Noè Logge.png',
    year: 1519,
    medium: 'Fresco',
    bookSlug: 'genesis',
    chapter: 8,
    verseStart: 20,
    sceneSlug: 'flood', topicTags: ['judgment', 'wrath', 'covenant', 'deliverance'],
    description: "One of 48 small narrative panels from 'Raphael's Bible' in the Vatican Palace loggia — designed by Raphael and executed by his workshop. Noah offers the first burnt offerings on dry ground.",
  },

  // ===== Roman Madonnas (1511–1515) =====
  {
    externalId: 'raphael-alba-madonna',
    title: 'The Alba Madonna',
    wikimediaFile: 'Raphael - The Alba Madonna - Google Art Project.jpg',
    year: 1510,
    medium: 'Oil on panel transferred to canvas',
    bookSlug: 'luke',
    chapter: 2,
    verseStart: 7,
    sceneSlug: 'nativity', topicTags: ['incarnation', 'humility', 'hope'],
    description: "A tondo: Mary seated on the ground in a landscape, Christ and John sharing the reed cross between them. National Gallery of Art, Washington.",
  },
  {
    externalId: 'raphael-madonna-di-foligno',
    title: 'Madonna of Foligno',
    wikimediaFile: 'Madonna di Foligno (Raphael) September 2015-1a.jpg',
    year: 1512,
    medium: 'Oil on panel transferred to canvas',
    bookSlug: 'luke',
    chapter: 1,
    verseStart: 48,
    sceneSlug: 'nativity', topicTags: ['incarnation', 'humility', 'hope'],
    description: "Mary and Child enthroned on clouds above a landscape with a meteor — commissioned by Sigismondo de' Conti in gratitude for surviving a lightning strike on his house at Foligno. Pinacoteca Vaticana.",
  },
  {
    externalId: 'raphael-sistine-madonna',
    title: 'The Sistine Madonna',
    wikimediaFile: 'Raphael - The Sistine Madonna - Google Arts & Culture.jpg',
    year: 1513,
    medium: 'Oil on canvas',
    bookSlug: 'luke',
    chapter: 2,
    verseStart: 7,
    sceneSlug: 'nativity', topicTags: ['incarnation', 'humility', 'hope'],
    description: "Mary, barefoot on the clouds, steps toward the viewer carrying the Christ child, flanked by Saint Sixtus and Saint Barbara and the two famous cherubs at the parapet. Gemäldegalerie Alte Meister, Dresden.",
  },
  {
    externalId: 'raphael-madonna-della-seggiola',
    title: 'Madonna della Seggiola',
    wikimediaFile: 'Raphael Madonna della seggiola.jpg',
    year: 1514,
    medium: 'Oil on panel',
    bookSlug: 'luke',
    chapter: 2,
    verseStart: 7,
    sceneSlug: 'nativity', topicTags: ['incarnation', 'humility', 'hope'],
    description: "A tondo: Mary presses her cheek against the Christ child in her lap as the young John the Baptist looks on, hands folded in prayer. Palazzo Pitti, Florence.",
  },

  // ===== Late altarpieces (1518–1520) =====
  {
    externalId: 'raphael-saint-michael-vanquishing-satan',
    title: 'Saint Michael Vanquishing Satan',
    wikimediaFile: 'Raphael - St. Michael Vanquishing Satan.jpg',
    year: 1518,
    medium: 'Oil on canvas',
    bookSlug: 'revelation',
    chapter: 12,
    verseStart: 7,
    verseEnd: 9,
    sceneSlug: 'apocalypse', topicTags: ['second-coming', 'new-creation', 'judgment'],
    description: "The archangel plants his foot on the dragon's back, sword raised — painted for François I of France as a diplomatic gift. Musée du Louvre.",
  },
  {
    externalId: 'raphael-transfiguration',
    title: 'The Transfiguration',
    wikimediaFile: 'Transfiguration Raphael.jpg',
    year: 1520,
    medium: 'Tempera on panel',
    bookSlug: 'matthew',
    chapter: 17,
    verseStart: 1,
    verseEnd: 9,
    sceneSlug: 'ministry', topicTags: ['compassion', 'mission', 'witness'],
    description: "Raphael's last painting, finished posthumously by his pupils. Christ transfigured above with Moses and Elijah; the disciples below struggling to heal the demoniac boy. Pinacoteca Vaticana.",
  },
];
