-- Artist hub bios — phase 9.
-- Thirty-two more anchor artists, all famous Christian / biblical-art
-- masters who already have approved artwork in the catalogue but no
-- bio_long. Same conventions as 026 / 027 / 030 / 031 / 033: original
-- prose written for Learn of Christ, plain-text paragraphs, dollar-quoted
-- to keep the apostrophes readable, with bio_sources as Wikipedia /
-- Britannica / museum citation pointers.
--
-- Like 033, every update matches by EXACT slug list rather than name
-- ILIKE. This prevents the cross-attribution problem that 032 cleaned up.

-- ─── 65. Paolo Veronese ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Paolo Veronese — born Paolo Caliari in Verona in 1528, taking his professional name from his birthplace — was one of the three giants of late-sixteenth-century Venetian painting, alongside Titian and Tintoretto. Trained first by his father, a stone-cutter, and then in the workshop of the painter Antonio Badile (whose daughter Veronese later married), he moved to Venice in his early twenties and worked there for the rest of his career, dying in Venice in 1588.

His Christian religious work is concentrated in vast festive banquet pictures whose biblical narratives — the wedding of Cana, the supper at Emmaus, the supper in the house of Levi, the supper in the house of Simon — provided the pretext for enormous painted feasts of Venetian patricians, livery, dogs, dwarves, columns, and architecture. The Wedding at Cana (Louvre, 1563), painted for the Benedictine refectory of San Giorgio Maggiore in Venice and looted by Napoleon's troops in 1797, is the largest painting in the Louvre's collection — almost ten meters wide — and the canonical statement of his late-Mannerist Venetian banquet style. The Feast in the House of Levi (Accademia, Venice, 1573) was originally painted as a Last Supper for the Dominican refectory of Santi Giovanni e Paolo; called before the Inquisition to defend its inclusion of Germans, dogs, and a man with a bloody nose, Veronese famously refused to repaint the canvas and instead simply renamed it.

His ceiling paintings for the Doge's Palace (the Triumph of Venice in the Sala del Maggior Consiglio, the Apotheosis of Venice in the Sala del Senato), the great cycle for the church of San Sebastiano in Venice (where he is buried), the frescoes for Palladio's Villa Barbaro at Maser, and the late Crucifixions and Pietàs round out the painted output. He worked at enormous speed with a large workshop that included his brother Benedetto and his sons Carlo and Gabriele Caliari, and the workshop continued issuing paintings under the Caliari name into the seventeenth century.

His color is the great inheritance to later painters — Rubens, Tiepolo, Delacroix, and Cézanne all looked to Veronese for the lessons in luminous flesh, silver-gray drapery, and the weighing of warm and cool that defined the Venetian school at its height.$BIO$,
  bio_sources = $JSON$[
    {"title":"Paolo Veronese — Wikipedia","url":"https://en.wikipedia.org/wiki/Paolo_Veronese","type":"wikipedia"},
    {"title":"Paolo Veronese — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Paolo-Veronese","type":"britannica"},
    {"title":"Paolo Veronese — Musée du Louvre","url":"https://collections.louvre.fr/en/recherche?q=Veronese","type":"museum"}
  ]$JSON$::jsonb
where slug = 'paolo-veronese-paolo-caliari';

-- ─── 66. Tintoretto ────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Jacopo Tintoretto — born Jacopo Robusti in Venice in 1518 or 1519, nicknamed Tintoretto (the little dyer) for his father's trade — was one of the three pillars of late-sixteenth-century Venetian painting and the principal religious painter of the city in the generation after Titian. Reportedly briefly apprenticed to Titian in his teens (Titian, the story goes, dismissed him after a few days, jealous of the boy's talent), he set up on his own and worked in Venice for the rest of his life, dying in Venice in 1594.

His central project — and the largest single religious cycle by any painter of the Italian Renaissance — was the decoration of the Scuola Grande di San Rocco in Venice, which Tintoretto worked on from 1564 until 1587. He painted the entire upper hall, the lower hall, and the Sala dell'Albergo with cycles of the Old Testament, the Life of the Virgin, and the Life of Christ — over fifty enormous canvases including the Crucifixion (the Sala dell'Albergo, 1565), the Brazen Serpent, the Manna, the Adoration of the Shepherds, and the Last Supper of San Rocco, all of them characterized by the dramatic foreshortening, sudden light, and theatrical staging that defined his mature manner. The Scuola di San Rocco is widely considered the supreme Venetian religious cycle of the sixteenth century.

His work for other Venetian institutions includes the great series for the church of the Madonna dell'Orto (where he is buried), the Last Supper for San Giorgio Maggiore (1592–1594, his last major work and a transformation of the Last Supper subject — the table set diagonally, the figures in agitated motion, the room broken open to a swirl of angels), the Saint Mark cycle for the Scuola di San Marco (now in the Accademia and the Brera), and dozens of smaller commissions for parish churches, scuole, and private patrons.

He worked at extraordinary speed with a large family workshop — his daughter Marietta (the Tintoretta), his sons Domenico and Marco, and a stream of assistants — and produced more square footage of religious painting than any other Venetian master. His motto, painted on his studio wall, was "the drawing of Michelangelo and the color of Titian" — and the late, sometimes almost monochromatic Tintoretto canvases, with their roiling skies and electric chiaroscuro, anticipate by sixty years the coming of Caravaggio and the seventeenth-century Roman Baroque.$BIO$,
  bio_sources = $JSON$[
    {"title":"Tintoretto — Wikipedia","url":"https://en.wikipedia.org/wiki/Tintoretto","type":"wikipedia"},
    {"title":"Tintoretto — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Tintoretto","type":"britannica"},
    {"title":"Scuola Grande di San Rocco","url":"https://www.scuolagrandesanrocco.org/en/","type":"museum"}
  ]$JSON$::jsonb
where slug in ('jacopo-tintoretto', 'jacopo-tintoretto-jacopo-robusti');

-- ─── 67. Correggio ─────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Correggio — born Antonio Allegri in the small Emilian town of Correggio around 1489, taking his professional name from his birthplace — was the leading painter of the Parma school in the early sixteenth century and the principal Italian master of the soft, light-filled, sweetly proportioned manner that the seventeenth-century Bolognese Baroque painters (Annibale Carracci, Reni, Lanfranco) would treat as their direct ancestor. Trained in Modena and possibly briefly in Mantua under Andrea Mantegna's late workshop, he settled in Parma by 1520 and worked there for almost the rest of his life. He died in Correggio in 1534, in his mid-forties.

His three great Parma fresco cycles are the principal monuments of his religious career. The cupola of the church of San Giovanni Evangelista (1520–1524) shows the Vision of Saint John on Patmos, with the apostles around the rim looking up into a circular sky in which Christ ascends into glory through clouds and angels — the first great illusionistic dome of the Italian Renaissance, two generations before Pietro da Cortona and Andrea Pozzo would make di sotto in sù ceiling painting the Baroque norm. The cupola of Parma Cathedral (1526–1530) shows the Assumption of the Virgin in a similar swirling vortex of bodies and clouds. The fresco vault of the Camera di San Paolo in the convent of San Paolo (1518–1519) — a private cell for the abbess Giovanna da Piacenza — uses a trompe l'oeil pergola structure to frame allegorical and mythological figures in a private religious-humanist program of unusual sophistication.

His paintings outside Parma include the great Madonnas — the Madonna of Saint Jerome (Day, Parma, c. 1527–1528), the Madonna of Saint Sebastian (Dresden), the Madonna of Saint George (Dresden), the Madonna of the Basket (London), the Madonna and Child with Saint Jerome (Parma) — and a sequence of religious mythologies including the Loves of Jupiter cycle for Federico Gonzaga of Mantua (Io, Danaë, Leda, Ganymede), now divided between Vienna, Berlin, the Borghese, and the Wadsworth Atheneum.

His soft modeling — the famous fumato, the sweet feathered handling of skin and hair against rich crimson and dark green — was the principal Italian Renaissance achievement that the Carracci would resurrect a half-century later, and his illusionistic ceilings were the technical prelude to the entire Italian Baroque dome tradition.$BIO$,
  bio_sources = $JSON$[
    {"title":"Correggio — Wikipedia","url":"https://en.wikipedia.org/wiki/Antonio_da_Correggio","type":"wikipedia"},
    {"title":"Correggio — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Correggio-Italian-painter","type":"britannica"},
    {"title":"Correggio — Galleria Nazionale di Parma","url":"https://complessopilotta.it/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'correggio-antonio-allegri';

-- ─── 68. Sandro Botticelli ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Sandro Botticelli — born Alessandro di Mariano Filipepi in Florence in 1445, called Botticelli (little barrel) probably from the nickname of an older brother — was one of the most accomplished and most identifiable painters of the Florentine Quattrocento. Trained in the goldsmith trade in his youth and then in painting under Fra Filippo Lippi (whose son Filippino Lippi later became Botticelli's own pupil), he ran one of the leading Florentine workshops through the 1470s and 1480s and worked under the patronage of the Medici and their circle until the political upheavals of the 1490s. He died in Florence in 1510.

His mythological masterpieces — the Primavera (c. 1482), the Birth of Venus (c. 1486), the Pallas and the Centaur, the Venus and Mars — have made him a popular emblem of the Italian Renaissance, but the bulk of his output was Christian religious painting. The Madonna del Magnificat (Uffizi, c. 1483), the Madonna of the Pomegranate (Uffizi, c. 1487), the Madonna of the Book (Milan, c. 1480), the Bardi Altarpiece (Berlin), the San Marco altarpiece, the great Coronation of the Virgin (Uffizi, 1490), the Adoration of the Magi panels in the Uffizi and Washington, the late Mystic Nativity (London, 1500), and the smaller predella panels of the Lives of Saint Zenobius and the Stories of the Virgin fill museums in Florence, Berlin, Madrid, London, and New York.

In 1481–1482 he worked in Rome on the wall frescoes of the Sistine Chapel — Old Testament scenes from the lives of Moses and Christ, painted before Michelangelo's ceiling and Last Judgment redirected attention to the higher walls. Botticelli's Sistine contributions include the Trials of Moses and the Temptations of Christ, both still on the chapel walls.

In the 1490s, deeply influenced by the apocalyptic preaching of the Dominican friar Girolamo Savonarola — who briefly held political power in Florence between 1494 and his execution in 1498 — Botticelli's late religious work turned harsher and more austere. The Mystic Nativity in London bears a hand-written Greek inscription identifying the painting as a vision of "the troubles of Italy in the year 1500." His drawings for an illustrated Dante's Divine Comedy (Berlin and the Vatican Library), commissioned by Lorenzo di Pierfrancesco de' Medici and left unfinished, are among the supreme drawn cycles of the Italian Renaissance.$BIO$,
  bio_sources = $JSON$[
    {"title":"Sandro Botticelli — Wikipedia","url":"https://en.wikipedia.org/wiki/Sandro_Botticelli","type":"wikipedia"},
    {"title":"Sandro Botticelli — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Sandro-Botticelli","type":"britannica"},
    {"title":"Sandro Botticelli — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=botticelli","type":"museum"}
  ]$JSON$::jsonb
where slug in ('botticelli', 'botticelli-alessandro-di-mariano-filipepi', 'sandro-botticelli');

-- ─── 69. Andrea Mantegna ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Andrea Mantegna was the leading painter of the Paduan school in the second half of the fifteenth century and the artist who, more than any other Italian master of his generation, brought the recovered language of classical antiquity into Italian Christian painting. Born around 1431 near Padua, apprenticed to the painter Francesco Squarcione (whose archaeological enthusiasm for Roman fragments in the Padua workshop shaped Mantegna's lifelong love of carved reliefs and stone surfaces), and married into the Bellini family of Venice — Jacopo Bellini's daughter Nicolosia became his wife in 1453, making Giovanni and Gentile Bellini his brothers-in-law — he served as court painter at the Gonzaga court in Mantua from 1460 until his death in Mantua in 1506.

His Christian religious work is concentrated in altarpieces and devotional panels of unusual sculptural intensity. The San Zeno Altarpiece (1457–1459) for the church of San Zeno in Verona — Madonna and saints in a Renaissance loggia, with predella panels of the Crucifixion, the Resurrection, and the Agony in the Garden (the predella now in the Louvre and Tours) — is the central monument of his early style. The Lamentation of Christ (Brera, Milan, c. 1480), with its famously foreshortened body of Christ on a marble slab seen from the soles of the feet, is one of the most reproduced single religious images of the Italian Renaissance. The Saint Sebastian paintings in Vienna, the Louvre, and the Ca' d'Oro in Venice, the Presentation in the Temple (Berlin), and the Madonna della Vittoria (Louvre, 1496) round out his religious output.

His most famous secular project, the Camera degli Sposi (Bridal Chamber) in the Ducal Palace of Mantua, painted between 1465 and 1474, includes the great trompe l'oeil oculus on the ceiling — putti, women, and a peacock looking down through a balustrade open to the sky — that is the founding work of Italian illusionistic ceiling painting and the direct technical ancestor of Correggio's Parma cupolas a generation later.

He was equally a major engraver. The seven or so plates plausibly attributed to his own hand — the Battle of the Sea Gods, the Bacchanal with the Wine Vat, the Risen Christ between Saints Andrew and Longinus — are among the technical landmarks of late-fifteenth-century Italian printmaking and were copied throughout Europe. Albrecht Dürer, on his second Italian trip in 1505, traveled to Mantua specifically to meet him and arrived just after Mantegna's death.$BIO$,
  bio_sources = $JSON$[
    {"title":"Andrea Mantegna — Wikipedia","url":"https://en.wikipedia.org/wiki/Andrea_Mantegna","type":"wikipedia"},
    {"title":"Andrea Mantegna — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Andrea-Mantegna","type":"britannica"},
    {"title":"Andrea Mantegna — Pinacoteca di Brera","url":"https://pinacotecabrera.org/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'andrea-mantegna';

-- ─── 70. Domenichino ───────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Domenichino — born Domenico Zampieri in Bologna in 1581 — was the principal pupil of Annibale Carracci in Rome and one of the leading classicizing painters of the Italian Baroque generation. Trained first in his native Bologna in the Carracci academy founded by Ludovico, Annibale, and Agostino, then summoned to Rome by Annibale around 1602 to assist on the Farnese Gallery and the various Roman commissions of the early Carracci circle, he settled in Rome and made his career there until his late move to Naples in 1631. He died in Naples in 1641 under suspicious circumstances — eighteenth-century biographers suspected poisoning by Neapolitan rivals, though the documentary evidence is inconclusive.

His Christian religious work is concentrated in altarpieces, fresco cycles, and chapel decorations of strict classical composition and quiet emotional restraint. The Last Communion of Saint Jerome (Vatican Pinacoteca, 1614) — one of the most-copied altarpieces of the seventeenth century, taken by Napoleon's troops to Paris in 1797 and returned in 1815 — is widely held to be his masterpiece. The fresco cycle in the Polet Chapel of San Luigi dei Francesi (Stories of Saint Cecilia, 1612–1615) sits in the church whose Caravaggio Saint Matthew altarpiece had been installed a decade earlier, and the contrast between Domenichino's classicizing decorum and Caravaggio's chiaroscuro drama defines the central debate of early-seventeenth-century Roman religious painting.

His major Roman cycles include the pendentives of Sant'Andrea della Valle (the Four Evangelists, 1622–1627), the lunettes for the Abbey of Grottaferrata (the life of Saint Nilus, 1610), and the choir of San Carlo ai Catinari. The late Naples years produced the Treasury Chapel frescoes in the Cathedral of Naples (the life of San Gennaro, left incomplete at his death) and a series of altarpieces in Neapolitan churches.

He was an unusually gifted draftsman; the great collection of his preparatory drawings at Windsor Castle, acquired by Pope Clement XI from the artist's heirs and given by the pope to King George III, remains the principal record of his working method. His landscape painting — pure landscape with biblical or mythological figures, painted partly outdoors, with attention to specific Roman countryside topography — was a direct technical and conceptual influence on Claude Lorrain and Nicolas Poussin a generation later.$BIO$,
  bio_sources = $JSON$[
    {"title":"Domenichino — Wikipedia","url":"https://en.wikipedia.org/wiki/Domenichino","type":"wikipedia"},
    {"title":"Domenichino — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Domenichino","type":"britannica"},
    {"title":"Domenichino — Royal Collection Trust","url":"https://www.rct.uk/collection/search#/search/Domenichino","type":"museum"}
  ]$JSON$::jsonb
where slug = 'domenichino-domenico-zampieri';

-- ─── 71. Annibale Carracci ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Annibale Carracci was, with his brother Agostino and his cousin Ludovico, the founder of the Bolognese reform of Italian painting at the end of the sixteenth century — the move away from late-Mannerist artifice toward direct observation, classical figural construction, and a renewed engagement with the High Renaissance examples of Raphael, Correggio, and the Venetian school. Born in Bologna in 1560 to a tailor's family, trained in Bologna with his cousin Ludovico, and active there in the academy the three Carracci founded together (the Accademia degli Incamminati, "of those embarked on the right path") through the 1580s and into the early 1590s, he was summoned to Rome by Cardinal Odoardo Farnese around 1595 and worked there for the rest of his career. He died in Rome in 1609.

His central monument is the great gallery ceiling of the Farnese Palace in Rome — the Loves of the Gods cycle, painted between roughly 1597 and 1608 — a sustained classical-mythological program that takes Michelangelo's Sistine Chapel ceiling as its compositional starting point and absorbs the Venetian color of Titian and Veronese into a freshly Roman synthesis. The ceiling defined the Italian Baroque grand-manner and was studied by every major painter who came to Rome over the next century and a half, from Bernini and Pietro da Cortona to Mengs and David.

His Christian religious work runs in parallel with the secular ceiling. The Bolognese altarpieces of the 1580s and early 1590s — the Saint Roch Distributing Alms (Dresden, 1588), the Pietà (Capodimonte, 1599), the Almsgiving of Saint Roch — show the Carracci reform program applied to religious narrative. The Roman religious commissions include the Madonna with Saint John the Evangelist and Saint Catherine (Bologna), the Pietà (Capodimonte), the Quo Vadis (London), the Lamentation (London), and the great Cerasi Chapel altarpiece (Santa Maria del Popolo, 1601) — the Assumption of the Virgin painted directly across from Caravaggio's Crucifixion of Saint Peter and Conversion of Saint Paul, the most famous direct juxtaposition of the two opposing tendencies of early Baroque Roman religious painting.

A late depression — variously attributed to overwork, dissatisfaction with his Farnese pay, and possibly a small stroke — limited his output in his last years. He was buried, at his own request, in the Pantheon, beside Raphael.$BIO$,
  bio_sources = $JSON$[
    {"title":"Annibale Carracci — Wikipedia","url":"https://en.wikipedia.org/wiki/Annibale_Carracci","type":"wikipedia"},
    {"title":"Annibale Carracci — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Annibale-Carracci","type":"britannica"},
    {"title":"Galleria Farnese — Embassy of France in Rome","url":"https://it.ambafrance.org/-Palais-Farnese-","type":"museum"}
  ]$JSON$::jsonb
where slug = 'annibale-carracci';

-- ─── 72. Agostino Carracci ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Agostino Carracci was the older brother of Annibale and one of the three founders of the Bolognese Carracci reform — the late-sixteenth-century turn against Mannerist artifice toward classical figural construction, direct observation, and a renewed dialogue with the High Renaissance. Born in Bologna in 1557, trained in his father's tailor shop and then in painting and engraving (Agostino was the most technically accomplished of the three Carracci as an engraver), he was a co-founder with Annibale and his cousin Ludovico of the Accademia degli Incamminati in Bologna in the late 1580s. He died in Parma in 1602, only forty-five years old.

His Christian religious work falls in two distinct categories. As a painter he produced a smaller corpus than his brother — the Last Communion of Saint Jerome (Pinacoteca Nazionale, Bologna, c. 1591–1592, a composition that his pupil Domenichino later borrowed for his own famous Vatican version), the Assumption of the Virgin in the Bolognese Pinacoteca, and various Madonnas and altarpieces in churches in Bologna and Parma. As an engraver he produced about 250 plates, including reproductive engravings after Veronese, Tintoretto, Correggio, Parmigianino, Federico Barocci, and his own brother Annibale, that circulated through European print collections and made the Carracci reform program visible far beyond Bologna.

His most ambitious painted project, the cycle for the Camerino at the Palazzo del Giardino in Parma — commissioned by Duke Ranuccio Farnese in 1598 and left incomplete at his death — used mythological subjects of the Loves of the Gods to demonstrate the Carracci synthesis of color and design at a princely scale. The room remains substantially as he left it.

He was reputed by his early biographers to be the more learned of the brothers — a published author of poetry and treatises, fluent in Latin, with a serious interest in mathematics and music. The 1602 Parma move and his early death cut short what would likely have been a major late career; the Carracci synthesis as it became influential across the rest of the seventeenth century was carried more by Annibale and by their pupils (Domenichino, Reni, Albani, Lanfranco) than by Agostino's own continuing output.$BIO$,
  bio_sources = $JSON$[
    {"title":"Agostino Carracci — Wikipedia","url":"https://en.wikipedia.org/wiki/Agostino_Carracci","type":"wikipedia"},
    {"title":"Agostino Carracci — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Agostino-Carracci","type":"britannica"},
    {"title":"Agostino Carracci — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG23260","type":"museum"}
  ]$JSON$::jsonb
where slug = 'agostino-carracci';

-- ─── 73. Ludovico Carracci ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Ludovico Carracci was the eldest of the three Carracci — the cousin and senior partner to the brothers Annibale and Agostino — and the principal teacher and director of the Bolognese academy that the three founded together at the end of the sixteenth century. Born in Bologna in 1555, trained in the workshop of Prospero Fontana and (for a year) in Venice in the orbit of Tintoretto, he stayed in Bologna for his entire career while his cousins moved to Rome and Parma. He died in Bologna in 1619.

His Christian religious work is concentrated in altarpieces and chapel commissions for Bolognese churches, painted in a deliberately devout, emotionally direct manner that drew on Correggio's soft modeling, Tintoretto's chiaroscuro, and the Counter-Reformation taste for clear, accessible religious imagery. The Madonna of the Bargellini (Pinacoteca Nazionale, Bologna, 1588), the Holy Family with Saint Francis (Cento, 1591), the Conversion of Saint Paul (Pinacoteca Nazionale, Bologna), the Vision of Saint Anthony (Vatican Pinacoteca), the great Annunciation (Pinacoteca Nazionale, Bologna, 1605), and the long sequence of Madonnas, Pietàs, and altarpieces fill the principal Bolognese churches. The frescoes of the lives of San Benedetto and Santa Cecilia in the cloister of San Michele in Bosco (1604–1605, in collaboration with his pupils) form a substantial cycle that survived restoration into the modern period.

His teaching at the Accademia degli Incamminati was the principal channel through which the Carracci reform reached the next generation of Bolognese painters. The list of his pupils — Guido Reni, Domenichino, Albani, Guercino, Lanfranco, and through them the entire seventeenth-century Bolognese school — makes him, more than either of his cousins, the founder of the Bolognese painting tradition that would dominate Italian religious painting through the middle of the seventeenth century.

He never married, lived simply, gave his name to the academy he ran, and was buried in the church of San Giovanni in Monte in Bologna. His personal style — soft, deeply shadowed, often with a single dramatic illuminated figure picked out against a dark ground — is sometimes described as the Bolognese answer to Caravaggio's Roman tenebrism, although Ludovico arrived at his own version of the device independently and earlier.$BIO$,
  bio_sources = $JSON$[
    {"title":"Ludovico Carracci — Wikipedia","url":"https://en.wikipedia.org/wiki/Ludovico_Carracci","type":"wikipedia"},
    {"title":"Ludovico Carracci — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Ludovico-Carracci","type":"britannica"},
    {"title":"Ludovico Carracci — Pinacoteca Nazionale di Bologna","url":"https://www.pinacotecabologna.beniculturali.it/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'ludovico-carracci';

-- ─── 74. Bartolomé Esteban Murillo ─────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Bartolomé Esteban Murillo was the leading painter of seventeenth-century Seville and the principal Spanish religious painter of the Baroque generation after Velázquez. Born in Seville in 1617, the youngest of fourteen children of a barber-surgeon, orphaned at ten and raised by an older sister, he was apprenticed to the local painter Juan del Castillo and then absorbed the Spanish Caravaggesque manner of Francisco de Zurbarán in the 1640s. He worked in Seville for almost his entire career, with one documented trip to Madrid in the late 1650s where he studied the royal collection. He died in Seville in 1682.

His Christian religious work runs to several hundred surviving canvases. The series of eleven canvases for the Capuchin church in Seville (1665–1666, now in the Museo de Bellas Artes de Sevilla), the Hospital de la Caridad cycle of the Acts of Mercy (1670–1674, painted for Miguel de Mañara's reformist confraternity, including the great Moses Striking the Rock and the Multiplication of the Loaves and Fishes), and the eight canvases for Santa María la Blanca (1665, dispersed) anchor his Sevillian altarpiece corpus. The Two Trinities — sometimes called the Earthly and the Heavenly Family, with the Christ Child standing between Mary and Joseph and the Father and Spirit appearing above — fills the National Gallery in London with one of the most-reproduced Spanish Baroque devotional images of any period.

His Madonna of the Immaculate Conception became, by repetition, the canonical visualization of that doctrine in Spanish Catholic art. The dozens of versions he painted across his career — the Walpole Conception (now Hermitage), the Soult Conception (Prado, c. 1678), the Aranjuez Conception, and many smaller variants — established the visual conventions (the Virgin standing on a crescent moon, surrounded by cherubs, in white robes and a blue mantle, gaze upturned) that Spanish and Spanish-American religious art would follow for the next two centuries.

He also painted a substantial body of genre scenes — beggar children, flower girls, street boys eating melons — that the nineteenth-century French Romantic painters and the Spanish Costumbrista tradition treated as a foundational precedent. He died from a fall while painting the Marriage of Saint Catherine for the Capuchin church in Cádiz; the painting was completed by his pupil Francisco Meneses Osorio. He was buried in the Sevillian church of Santa Cruz, since destroyed.$BIO$,
  bio_sources = $JSON$[
    {"title":"Bartolomé Esteban Murillo — Wikipedia","url":"https://en.wikipedia.org/wiki/Bartolom%C3%A9_Esteban_Murillo","type":"wikipedia"},
    {"title":"Bartolomé Esteban Murillo — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Bartolome-Esteban-Murillo","type":"britannica"},
    {"title":"Bartolomé Esteban Murillo — Museo del Prado","url":"https://www.museodelprado.es/en/the-collection/artist/murillo-bartolome-esteban/","type":"museum"}
  ]$JSON$::jsonb
where slug in ('bartolome-esteban-murillo', 'bartolom-esteb-n-murillo');

-- ─── 75. Francisco de Zurbarán ─────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Francisco de Zurbarán was the leading Spanish religious painter of the first half of the seventeenth century — the painter whose Caravaggesque chiaroscuro and obsessive observation of monastic life made him the principal visualizer of the Spanish Counter-Reformation in its severest, most ascetic register. Born in Fuente de Cantos in Extremadura in 1598 to a haberdasher's family, apprenticed in Seville to a minor painter named Pedro Díaz de Villanueva, and active in Llerena and then in Seville from the 1620s onward, he was the principal painter to the Sevillian monastic orders for two decades. He died in Madrid in 1664.

His Christian religious work is concentrated in monastic cycles painted on commission for Carthusians, Mercedarians, Hieronymites, Jeronymites, and Franciscans. The Jerez Carthusian cycle (1638–1639), the Mercedarian cycle in the Real Convento in Seville (now dispersed across the Prado, the Akademie in Vienna, and various American collections), the Saint Hugo in the Carthusian Refectory (Seville, c. 1633, with its famously austere assembly of monks at table), the Apotheosis of Saint Thomas Aquinas (Seville, 1631), and the great Crucifixion (Art Institute of Chicago, 1627, painted for the Dominican church of San Pablo in Seville) anchor the painted corpus.

His individual saint portraits — the Saint Francis in Meditation (London), the Saint Casilda (Prado), the Saint Margaret (London), the great series of female martyr saints holding the instruments of their martyrdom — became one of his most-collected categories in his lifetime and after. The Sevillian convents of the Carmelites and the Discalced Carmelites commissioned dozens of these standing saint figures for refectory and chapel installation; many made the Atlantic crossing to Spanish Mexico and Peru, and some are still in their original sites in Lima and Mexico City.

He also painted a small but exquisite body of still lifes — the great Still Life with Lemons, Oranges and a Rose (Norton Simon Museum, 1633), the Cup of Water and a Rose on a Silver Plate (London) — whose meditative attention to a few objects on a dark ground reads as a continuation of his religious painting by other means.

His late career was overshadowed by the rise of Murillo as the new Sevillian favorite. He moved to Madrid around 1658, hoping for court patronage, but the Madrid years were lean and he died there in modest circumstances. The Prado holds the largest single body of his work today.$BIO$,
  bio_sources = $JSON$[
    {"title":"Francisco de Zurbarán — Wikipedia","url":"https://en.wikipedia.org/wiki/Francisco_de_Zurbar%C3%A1n","type":"wikipedia"},
    {"title":"Francisco de Zurbarán — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Francisco-de-Zurbaran","type":"britannica"},
    {"title":"Francisco de Zurbarán — Museo del Prado","url":"https://www.museodelprado.es/en/the-collection/artist/zurbaran-francisco-de/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'francisco-de-zurbar-n';

-- ─── 76. Diego Velázquez ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Diego Rodríguez de Silva y Velázquez was the leading Spanish painter of the seventeenth century and one of the supreme portraitists in the history of Western art. Born in Seville in 1599 to a family of minor Portuguese-descended hidalgos, apprenticed to the Sevillian painter Francisco Pacheco (whose daughter Juana Velázquez later married, in 1618), and called to Madrid in 1623 by the Conde-Duque de Olivares to enter the service of the young King Philip IV, he served the Spanish royal house as court painter for the rest of his career and was eventually given the title Aposentador Mayor del Palacio (chief chamberlain of the royal palace). He died in Madrid in 1660.

His Christian religious work, while a smaller part of his output than his royal portraiture, includes some of the most concentrated Spanish Baroque images of the Passion and the Gospels. The Christ on the Cross (Prado, c. 1632), painted for the convent of San Plácido in Madrid, is one of the most reproduced Spanish religious images of any period — a single figure on a dark ground, the head fallen forward, the body almost monochrome against the black sky. The Coronation of the Virgin (Prado, c. 1645) for the oratory of Queen Elisabeth of France in the Alcázar, the Adoration of the Magi (Prado, 1619, painted in his Sevillian years), the Saint John the Evangelist on Patmos (London), the Immaculate Conception (London), and the late Christ in the House of Martha and Mary (London) round out the religious painted corpus.

His Sevillian early style was Caravaggesque-tenebrist, with thickly painted grayish flesh and dramatic single-source lighting. The two trips to Italy (1629–1631 and 1649–1651) transformed his manner toward the lighter Venetian color and the looser brushwork of Titian and Veronese — a transformation visible in the late royal portraits, in Las Meninas (Prado, 1656), in the Rokeby Venus (London, c. 1650), and in the religious commissions of his last decade.

He painted relatively few altarpieces — the demands of his court duties left little time for religious commissions — but his religious work, by its sheer compositional and chromatic authority, shaped the visual sensibility of Spanish religious art well into the eighteenth century. He was made a knight of the Order of Santiago in 1659 (a long-fought-for honor that required a special papal dispensation given his profession as painter), and was buried in the Madrid church of San Juan Bautista, since destroyed.$BIO$,
  bio_sources = $JSON$[
    {"title":"Diego Velázquez — Wikipedia","url":"https://en.wikipedia.org/wiki/Diego_Vel%C3%A1zquez","type":"wikipedia"},
    {"title":"Diego Velázquez — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Diego-Velazquez","type":"britannica"},
    {"title":"Diego Velázquez — Museo del Prado","url":"https://www.museodelprado.es/en/the-collection/artist/velazquez-diego-rodriguez-de-silva-y/","type":"museum"}
  ]$JSON$::jsonb
where slug in ('diego-velazquez', 'vel-zquez-diego-rodr-guez-de-silva-y-vel-zquez');

-- ─── 77. Fra Filippo Lippi ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Fra Filippo Lippi was a Florentine Carmelite friar and painter, one of the leading Florentine masters of the generation after Masaccio and the principal teacher of Sandro Botticelli. Born in Florence around 1406, orphaned young and placed in the Carmelite convent of Santa Maria del Carmine in 1421, he professed religious vows there and was ordained but lived his life in tension with monastic discipline — eventually leaving the order in the 1450s to marry Lucrezia Buti, a young nun who became the model for many of his Madonnas and the mother of his son Filippino Lippi (himself an important painter of the next generation). He died in Spoleto in 1469 while at work on the cathedral fresco cycle.

His Christian religious work is concentrated in altarpieces, predella panels, and fresco cycles for Florentine and Tuscan patrons. The Barbadori Altarpiece (Louvre, 1437), the Annunciation (Munich), the Coronation of the Virgin (Uffizi, 1441), the Madonna and Child with Two Angels (Uffizi, c. 1465 — the famous "Filippo Lippi Madonna," with Lucrezia Buti's face and the Christ Child held up by laughing winged boys), and the Madonna with Saint Anthony Abbot (Cleveland) anchor his painted reputation in museum collections. His Adoration of the Magi tondi for Cosimo de' Medici, his small predella scenes of the Apostles and the Virgin, and his deathbed Madonna and Child compositions circulated widely through the Florentine art market.

His most ambitious surviving project is the fresco cycle in the apse of Prato Cathedral (1452–1465), with scenes from the lives of Saint Stephen and Saint John the Baptist on opposing walls — the Banquet of Herod with the dancing Salome remains one of the canonical images of fifteenth-century Florentine fresco. The Spoleto Cathedral cycle (1467–1469), with the Coronation of the Virgin in the apse and a sequence of life-of-the-Virgin scenes around it, was completed after his death by his workshop including the young Filippino Lippi.

His personal style — sweet-faced Madonnas, soft pastel color, transparent veils, the half-Renaissance rebuilding of pictorial space alongside a still-medieval love of decorative pattern — defined the look of mid-fifteenth-century Florentine devotional painting and was the immediate stylistic ancestor of Botticelli, who entered his workshop as a teenage apprentice and absorbed Lippi's manner directly.$BIO$,
  bio_sources = $JSON$[
    {"title":"Fra Filippo Lippi — Wikipedia","url":"https://en.wikipedia.org/wiki/Filippo_Lippi","type":"wikipedia"},
    {"title":"Filippo Lippi — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Fra-Filippo-Lippi","type":"britannica"},
    {"title":"Filippo Lippi — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=lippi","type":"museum"}
  ]$JSON$::jsonb
where slug = 'fra-filippo-lippi';

-- ─── 78. Pontormo ──────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Jacopo da Pontormo — born Jacopo Carucci in the Tuscan village of Pontormo in 1494, taking his professional name from his birthplace — was the leading Florentine painter of the early Mannerist generation and one of the most idiosyncratic religious imaginations of the Italian sixteenth century. Trained successively in the workshops of Leonardo da Vinci, Mariotto Albertinelli, Piero di Cosimo, and finally Andrea del Sarto (whose influence on him was the most lasting), he was active in Florence for almost his entire career. He died in Florence in 1557.

His Christian religious work begins with the early frescoes for the Annunziata (the Visitation, 1514–1516), the Certosa di Galluzzo Passion cycle (1523–1525, painted as a refuge during the plague years and showing the influence of Albrecht Dürer's recently engraved Passion plates), and the great Capponi Chapel altarpiece in Santa Felicita in Florence (1525–1528), with its central Deposition: a packed, almost weightless cluster of pastel-colored bodies — pink, blue, lavender, mint-green — assembled around the body of Christ in a composition that ignores conventional High Renaissance perspectival space and reads as a vision rather than a scene. The Capponi Deposition is the central monument of Florentine Mannerism and one of the most-reproduced single religious images of the entire sixteenth century.

His other religious works include the Visitation in the parish church of Carmignano (c. 1528–1530), the Halberdier (Getty Museum, c. 1530, traditionally identified as Cosimo I de' Medici but now usually given to Francesco Guardi as a portrait), and the long sequence of altar panels and devotional paintings he produced through the 1530s and 1540s.

His most ambitious project, the fresco cycle for the choir of San Lorenzo in Florence — painted between 1546 and his death and depicting the Creation, the Flood, and the Last Judgment — was destroyed in 1738 during the eighteenth-century renovation of the church. Surviving preparatory drawings and copies in the Uffizi suggest a culminating expression of the late Pontormo style: elongated, almost serpentine bodies in airless dreamlike space.

His diary of his last three years (1554–1556), one of the few surviving artist's diaries from the Italian Renaissance, records food, weather, work, and bodily complaints in a spare, almost monastic register that has fascinated readers since its publication in the eighteenth century. He was buried in the Annunziata in Florence.$BIO$,
  bio_sources = $JSON$[
    {"title":"Pontormo — Wikipedia","url":"https://en.wikipedia.org/wiki/Pontormo","type":"wikipedia"},
    {"title":"Jacopo Pontormo — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Pontormo","type":"britannica"},
    {"title":"Pontormo — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=pontormo","type":"museum"}
  ]$JSON$::jsonb
where slug = 'jacopo-da-pontormo-jacopo-carucci';

-- ─── 79. Andrea del Sarto ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Andrea del Sarto — born Andrea d'Agnolo di Francesco di Luca di Paolo del Migliore in Florence in 1486, called del Sarto from his father's tailoring trade — was the leading Florentine painter of the High Renaissance generation between Raphael's departure for Rome and the rise of Bronzino, Pontormo, and the Florentine Mannerists. Trained in the workshop of Piero di Cosimo and possibly briefly with Raffaellino del Garbo, he established his own workshop in Florence by 1508 and worked there for almost his entire career. He died in Florence in 1530, of plague during the siege of the city.

His Christian religious work is concentrated in fresco cycles, altarpieces, and devotional panels for Florentine churches and confraternities. The fresco cycle in the cloister of the Annunziata in Florence — the Stories of San Filippo Benizzi (1509–1510), the Birth of the Virgin (1514), the Procession of the Magi (1511) — anchors his early style. The Madonna of the Harpies (Uffizi, 1517) — Mary standing on a stone pedestal carved with harpy figures, holding the Christ Child between two saints — is widely held to be his masterpiece. The Last Supper in the refectory of San Salvi in Florence (c. 1520–1525) is one of the major surviving Italian Renaissance treatments of the subject. The Pietà of Luco (Florence, c. 1523–1524) and the Madonna del Sacco (Annunziata, 1525) round out his major religious commissions.

He worked briefly in France in 1518–1519 at the invitation of King Francis I, but returned to Florence within two years, allegedly because his wife Lucrezia del Fede missed him too acutely (the early biographers, especially his pupil Vasari, treat the marriage as a humiliating distraction from his art — modern scholarship has been more skeptical of that judgment). The Caritas (Louvre, 1518) is the principal surviving result of the French sojourn.

His personal style — soft contours, warm Florentine flesh against silvery cool drapery, a calm humanist organization of space — is sometimes described as senza errori (without errors), a Vasari phrase that has stuck. The phrase undersells his subtle daring; the late religious work, especially the Madonna del Sacco and the Last Supper, anticipates the Mannerist directions that his pupils Pontormo and Rosso Fiorentino would push much further in the next generation.$BIO$,
  bio_sources = $JSON$[
    {"title":"Andrea del Sarto — Wikipedia","url":"https://en.wikipedia.org/wiki/Andrea_del_Sarto","type":"wikipedia"},
    {"title":"Andrea del Sarto — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Andrea-del-Sarto","type":"britannica"},
    {"title":"Andrea del Sarto — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=del+sarto","type":"museum"}
  ]$JSON$::jsonb
where slug = 'andrea-del-sarto-andrea-d-agnolo';

-- ─── 80. Guercino ──────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Guercino — born Giovanni Francesco Barbieri in Cento, near Bologna, in 1591, called Guercino (the squinter) from a childhood eye injury — was one of the leading Bolognese painters of the seventeenth century and a major successor to the Carracci reform. Trained in his native Cento and then in the orbit of Ludovico Carracci in Bologna, he was summoned to Rome in 1621 by the newly elected Pope Gregory XV (Alessandro Ludovisi, a Bolognese) and worked there during Gregory's brief two-year pontificate before returning to Bologna and Cento. He died in Bologna in 1666.

His Christian religious work is concentrated in altarpieces, ceiling frescoes, and devotional panels for Bolognese, Roman, and central-Italian patrons. The Aurora ceiling fresco in the Casino Ludovisi in Rome (1621–1623), painted as the response to the Aurora ceiling Guido Reni had completed at the nearby Palazzo Pallavicini-Rospigliosi a few years earlier, is the supreme statement of his early Roman style — a horse-drawn chariot of dawn rushing through illusionistic clouds. The Burial of Saint Petronilla (Capitoline Museums, Rome, 1623) — painted for old Saint Peter's and once installed there before being removed during the eighteenth-century renovations — is the principal Roman altarpiece survival.

The Bolognese religious commissions of his later career run for forty years and include the Madonnas of the Rosary, the Vision of Saint Jerome (Pinacoteca Nazionale, Bologna), the Miracle of Saint Peter (Vatican Pinacoteca), the Saint Bruno in the Charterhouse, the Et in Arcadia Ego (Galleria Nazionale d'Arte Antica, Rome) and a long sequence of single-figure devotional saints painted for Cento, Bolognese, and Mantuan patrons. The 1620s Roman style — dramatic chiaroscuro, deep saturated color, and a Caravaggesque emotional intensity — gave way after his return to Bologna to a more classicizing, lighter manner influenced by Reni's late style.

He kept careful business records — the famous Libro dei Conti, partially preserved, lists his commissions, prices, and the patrons who paid him — making him one of the better-documented artists of the Italian Baroque. Late in life he refused to leave Cento and Bologna for the major foreign courts that tried to recruit him; the Spanish king, the French queen mother, and Charles I of England all sent inquiries. He never married, lived modestly, and was buried in San Salvatore in Bologna.$BIO$,
  bio_sources = $JSON$[
    {"title":"Guercino — Wikipedia","url":"https://en.wikipedia.org/wiki/Guercino","type":"wikipedia"},
    {"title":"Guercino — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Guercino","type":"britannica"},
    {"title":"Guercino — Pinacoteca Nazionale di Bologna","url":"https://www.pinacotecabologna.beniculturali.it/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'guercino-giovanni-francesco-barbieri';

-- ─── 81. Sodoma ────────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Il Sodoma — born Giovanni Antonio Bazzi in Vercelli in northern Italy in 1477 — was a Lombard-born painter who made his career in Siena and is the principal painter of the Sienese High Renaissance. The nickname "Sodoma" was attached to him by his contemporaries; the early biographers (especially Vasari) speculated about its origin in lurid terms that have since been substantially walked back by modern scholars, who treat the nickname as one of the obscure and often unreliable color-words attached to artists in the period. He worked in Siena for almost his entire career, with significant commissions in Rome and at the Carthusian abbey of Monte Oliveto Maggiore outside Siena. He died in Siena in 1549.

His central early commission is the great fresco cycle of the Life of Saint Benedict at Monte Oliveto Maggiore (1505–1508), in the Great Cloister of the abbey south of Siena. Sodoma completed twenty-five scenes — taking over the project after the Umbrian painter Luca Signorelli had finished only nine — in a Lombard-into-Tuscan style of unusual narrative density and considerable charm. The cycle remains substantially as he left it.

His Roman commissions of 1508–1510 included frescoes in the Vatican Stanza della Segnatura, painted just before Raphael was given that room — Raphael preserved a few of Sodoma's ceiling tondi when the project was reassigned. He returned to Siena and painted the great Saint Catherine of Siena cycle in San Domenico (1526), the frescoes in the Oratorio di San Bernardino (1518), the Pietà and the Christ at the Column in the Pinacoteca Nazionale of Siena, and the Saint Sebastian (Uffizi, c. 1525) that Vasari treated, with characteristic exaggeration, as the most beautiful figure in Italian painting.

His commissions for the Sienese banker Agostino Chigi included the great Wedding of Alexander and Roxana fresco in the Villa Farnesina in Rome (1517) — a secular subject, but executed with the festive narrative warmth that defined Sodoma's mature manner.

His personal style — soft modeling, warm color, a particular skill at painting horses and crowded narrative compositions, and a liking for grouped attendant figures with intricate gestures — combined Lombard color with Sienese narrative habit and made him, in the absence of any major Sienese-born High Renaissance painter, the principal voice of his city in his generation.$BIO$,
  bio_sources = $JSON$[
    {"title":"Il Sodoma — Wikipedia","url":"https://en.wikipedia.org/wiki/Il_Sodoma","type":"wikipedia"},
    {"title":"Il Sodoma — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Sodoma","type":"britannica"},
    {"title":"Monte Oliveto Maggiore — Olivetan Abbey","url":"https://www.monteolivetomaggiore.it/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'sodoma-giovanni-antonio-bazzi';

-- ─── 82. Filippino Lippi ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Filippino Lippi was a leading Florentine painter of the late Quattrocento and the principal heir to the workshop tradition that ran from Masaccio through Fra Filippo Lippi (his father) through Sandro Botticelli (Filippino's master after his father's death). Born in Prato around 1457, the son of Fra Filippo Lippi and the former nun Lucrezia Buti, brought to Spoleto as a child during his father's final fresco campaign and inherited as an apprentice into Botticelli's Florentine workshop after his father's death in 1469, he was active in Florence — with major commissions in Rome and other Tuscan cities — for the rest of his life. He died in Florence in 1504.

His Christian religious work falls in three principal groupings. First, the early Tornabuoni Chapel work (Santa Maria del Carmine, Florence, c. 1481–1485) — completing Masaccio's unfinished Brancacci Chapel cycle of the lives of Saint Peter and Saint Paul, which had stood half-painted for half a century after Masaccio's death in 1428. Filippino's contribution included the Resurrection of the Son of Theophilus, the Saint Peter Visited in Prison, and the Crucifixion of Saint Peter, all painted in a deliberate stylistic blend of his own late-Quattrocento manner with as much of Masaccio's earlier monumentality as he could recover. Second, the Strozzi Chapel frescoes in Santa Maria Novella (1487–1502) — the Stories of Saint Philip and Saint John the Evangelist, with their famously elaborate Mannerist-foretelling architectural fantasies and crowded narrative incident. Third, the Carafa Chapel in Santa Maria sopra Minerva in Rome (1488–1493), painted for Cardinal Oliviero Carafa with scenes of the life of Saint Thomas Aquinas and the Annunciation.

His altarpieces — the Vision of Saint Bernard (Badia Fiorentina, 1485, one of the most reproduced fifteenth-century Florentine altarpieces), the Madonna della Visitazione (Uffizi), the Adoration of the Magi (Uffizi, 1496), the Christ on the Cross with Saints (Berlin) — fill museums in Florence, Berlin, the Vatican, and Bologna.

His personal style is recognizable for its fluttering linear drapery, restless figural torsion, abundant antique-Roman ornament, and a kind of nervous late-Quattrocento intensity that points forward to the early Mannerists of the next generation. He was widely respected in his lifetime — at his death in 1504 the workshops of Florence reportedly closed for a day — and was buried in the church of San Michele Visdomini in Florence.$BIO$,
  bio_sources = $JSON$[
    {"title":"Filippino Lippi — Wikipedia","url":"https://en.wikipedia.org/wiki/Filippino_Lippi","type":"wikipedia"},
    {"title":"Filippino Lippi — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Filippino-Lippi","type":"britannica"},
    {"title":"Filippino Lippi — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=filippino+lippi","type":"museum"}
  ]$JSON$::jsonb
where slug = 'filippino-lippi';

-- ─── 83. Perugino ──────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Pietro Perugino — born Pietro Vannucci in Città della Pieve in Umbria around 1446, taking his professional name from his long association with Perugia — was the leading Umbrian painter of the late Quattrocento, the principal teacher of Raphael, and one of the most influential designers of altarpiece composition in the entire Italian Renaissance. Trained in his native Umbria and then almost certainly in Florence in the workshop of Andrea del Verrocchio (where his fellow apprentices included Leonardo da Vinci and Lorenzo di Credi), he established his own workshop by the early 1480s and worked across Umbria, Tuscany, and Rome for the next forty years. He died of plague in Fontignano in 1523.

His Christian religious work is concentrated in altarpieces, fresco cycles, and devotional panels for Umbrian and Tuscan religious commissions. The Sistine Chapel walls (1481–1482) carry his Donation of the Keys to Saint Peter, the Baptism of Christ, and the Circumcision of the Sons of Moses — three of the eight original wall scenes commissioned by Pope Sixtus IV from a team of Florentine and Umbrian painters and the principal monument of his early Roman period. The Crucifixion fresco in the Albizzi Chapel of Santa Maria Maddalena dei Pazzi in Florence (1493–1496), the Polyptych of San Pietro in Perugia (1495–1500, partly dispersed), the Vision of Saint Bernard (Munich), the Pietà (Uffizi, 1494–1495), the Madonna and Saints in San Pietro in Perugia, and the great Combat of Love and Chastity for Isabella d'Este's studiolo at Mantua (Louvre, 1503–1505) anchor his painted reputation.

His most far-reaching contribution to Italian Renaissance art was the development of the calm, balanced, symmetrical composition — a serene central group of figures, a horizon line low across the panel, slim trees and distant Umbrian hills — that became the standard pose-and-stance vocabulary of devotional altarpiece painting throughout central Italy. The young Raphael, who entered Perugino's workshop around 1500 as a teenage apprentice, absorbed this compositional repertoire wholesale and developed it into the High Renaissance synthesis that would dominate European religious painting for the next century.

He was the most commercially successful Italian painter of his generation; his workshop turned out altarpieces in editions, with autograph and assisted versions distributed through Umbria and Tuscany. By the time of his death — long after his Sistine Chapel fame — his style had been overtaken by his own pupil Raphael's High Renaissance manner, and Perugino's late commissions read as a quiet defense of the Quattrocento sweetness against the new Roman grand-manner.$BIO$,
  bio_sources = $JSON$[
    {"title":"Pietro Perugino — Wikipedia","url":"https://en.wikipedia.org/wiki/Pietro_Perugino","type":"wikipedia"},
    {"title":"Perugino — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Perugino","type":"britannica"},
    {"title":"Perugino — Galleria Nazionale dell'Umbria","url":"https://gallerianazionaledellumbria.it/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'perugino-pietro-di-cristoforo-vannucci';

-- ─── 84. Domenico Ghirlandaio ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Domenico Ghirlandaio — born Domenico di Tommaso di Currado di Doffo Bigordi in Florence in 1448 — was one of the leading Florentine painters of the late Quattrocento and the principal teacher of Michelangelo, who entered Ghirlandaio's workshop as a teenage apprentice in 1487. Born to a goldsmith family — the nickname "Ghirlandaio" derives from his father's specialty in producing the metalwork ghirlande (garlands) worn by Florentine women in their hair — and trained in painting and mosaic, he ran the leading Florentine fresco workshop of his generation, with his brothers Davide and Benedetto Ghirlandaio and his brother-in-law Sebastiano Mainardi as principal collaborators. He died in Florence in 1494.

His Christian religious work is concentrated in fresco cycles for Florentine churches and confraternities. The Sassetti Chapel in Santa Trinita (1483–1486), commissioned by the Medici banker Francesco Sassetti, includes the Stories of Saint Francis on the chapel walls and the famous Adoration of the Shepherds altarpiece (Uffizi, 1485) — a Christ Child laid on the ground in a Roman sarcophagus inscribed with a prophecy of his coming, attended by shepherds whose faces are recognizable contemporary Florentines. The Tornabuoni Chapel in Santa Maria Novella (1485–1490), commissioned by the wealthy Florentine banker Giovanni Tornabuoni, is the masterpiece — a four-wall cycle of the Lives of the Virgin and Saint John the Baptist, populated with portraits of the contemporary Florentine elite (Lorenzo de' Medici and his circle, the Tornabuoni family, the workshop assistants — including the young Michelangelo, who is reportedly visible as a small figure in one of the group scenes).

His Sistine Chapel contribution (1481–1482), painted alongside Botticelli, Perugino, and Cosimo Rosselli, includes the Vocation of the Apostles (still on the Sistine wall, depicting Christ calling Peter and Andrew at the Sea of Galilee) and the Resurrection (later destroyed and repainted in the seventeenth century). His altarpieces — the Adoration of the Magi (Uffizi, 1488), the Madonna and Saints (Munich), the Visitation (Louvre) — round out his religious painted corpus.

He was the leading Florentine portraitist of his generation; his sitter-portraits embedded in religious narrative made the Tornabuoni and Sassetti chapels both devotional cycles and group portraits of the Florentine ruling class. His Old Man and His Grandson (Louvre, c. 1490) — a tender informal portrait of an aging man with a large red nose and his fresh-faced grandson — is one of the most affecting Quattrocento portraits in any collection.$BIO$,
  bio_sources = $JSON$[
    {"title":"Domenico Ghirlandaio — Wikipedia","url":"https://en.wikipedia.org/wiki/Domenico_Ghirlandaio","type":"wikipedia"},
    {"title":"Domenico Ghirlandaio — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Domenico-Ghirlandaio","type":"britannica"},
    {"title":"Domenico Ghirlandaio — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=ghirlandaio","type":"museum"}
  ]$JSON$::jsonb
where slug in ('domenico-ghirlandaio', 'domenico-ghirlandaio-domenico-bigordi');

-- ─── 85. Bernardo Daddi ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Bernardo Daddi was the leading Florentine painter of the generation immediately after Giotto and the principal supplier of small-format devotional altarpieces and panel paintings to the city's wealthy lay confraternities and private patrons in the second quarter of the fourteenth century. Born in Florence around 1290, trained almost certainly in Giotto's late workshop (his earliest documented works show direct dependence on Giotto's Bardi Chapel manner), and active in Florence from the 1320s until his death in the city around 1348 — possibly in the Black Death epidemic that killed most of his generation — he ran a productive workshop that turned out Madonnas, polyptychs, and small portable diptychs for both ecclesiastical and domestic use.

His central religious works include the great altarpiece for the Confraternity of Orsanmichele in Florence (1346–1347, the Madonna and Child with Angels enshrined in Andrea Orcagna's marble tabernacle still in the church); the polyptych of San Pancrazio (now in the Uffizi, c. 1336–1340), with its central Madonna and Child flanked by a register of saints and a predella of biblical scenes; the Triptych of the Crucifixion (Bigallo, Florence); the small Madonna of the Magnificat (Uffizi); and a long sequence of small portable diptychs and triptychs of the Madonna with Saints, the Crucifixion, and scenes from the lives of the saints, scattered across museums in Florence, Berlin, London, the Vatican, and the great American collections (the Cloisters, the Frick, the Museum of Fine Arts in Boston).

His personal style is an unmistakable softening of Giotto's monumental Trecento manner: smaller-scale figures, sweeter facial types, jewel-bright color (rose, mint-green, deep ultramarine), elaborately tooled gold-ground decoration, and an unusual feeling for the small intimate panel intended for private prayer rather than for the high altar. The portable diptychs in particular — closed they look like jeweled boxes, opened they reveal a Madonna and a Crucifixion or a Nativity facing each other across a small hinge — became, through Daddi's workshop, one of the standard Florentine devotional formats for the wealthy lay patron of the mid-fourteenth century.

He led one of the most prolific Florentine workshops of the second quarter of the Trecento and trained or influenced the next Florentine generation — Andrea Orcagna, Nardo di Cione, the Master of the Fogg Pietà — that carried Florentine painting through the disruption of the Black Death and into the late Trecento.$BIO$,
  bio_sources = $JSON$[
    {"title":"Bernardo Daddi — Wikipedia","url":"https://en.wikipedia.org/wiki/Bernardo_Daddi","type":"wikipedia"},
    {"title":"Bernardo Daddi — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Bernardo-Daddi","type":"britannica"},
    {"title":"Bernardo Daddi — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=Daddi","type":"museum"}
  ]$JSON$::jsonb
where slug = 'bernardo-daddi';

-- ─── 86. Andrea del Verrocchio ─────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Andrea del Verrocchio — born Andrea di Michele di Francesco di Cione in Florence around 1435, called Verrocchio (true eye) probably from a teacher's workshop nickname — was one of the leading Florentine sculptors and painters of the late Quattrocento and the principal teacher of Leonardo da Vinci, who entered his workshop as a teenage apprentice around 1466. Trained as a goldsmith and then as a sculptor and painter, he ran the largest and most prolific Florentine workshop of the 1470s and 1480s, with commissions in painting, bronze sculpture, marble carving, and design for civic monuments. He died in Venice in 1488 while at work on the great equestrian monument to the condottiere Bartolomeo Colleoni.

His Christian religious work in painting is small but pivotal. The Baptism of Christ (Uffizi, c. 1472–1475), painted in collaboration with the young Leonardo (whose contribution — the kneeling angel on the left and the misty distant landscape — Vasari described as so superior to the rest of the panel that Verrocchio gave up painting in shame; modern scholarship has been more measured), is the foundational document of Leonardo's artistic apprenticeship. The Madonna and Child with Two Angels (London) and several other Madonnas of the 1470s round out the painted output.

His sculptural output is larger and includes some of the supreme religious bronzes of the Italian Quattrocento. The Christ and Saint Thomas group in the Orsanmichele tabernacle in Florence (1467–1483), commissioned by the Mercanzia (the Florentine merchants' guild) for one of the niches around the church-warehouse-confraternity building, shows the resurrected Christ pulling open his robe to reveal the wound in his side as Thomas reaches to touch it — a sustained meditation on John 20 in cast bronze and one of the most monumental sculptural treatments of the subject in Western art. The Putto with Dolphin fountain (Palazzo Vecchio), the bronze David (Bargello, c. 1475), and the great equestrian Colleoni (left unfinished at his death, completed and cast by Alessandro Leopardi for the Campo SS. Giovanni e Paolo in Venice) are the principal sculptural survivals.

His workshop was extraordinary: alongside Leonardo, his pupils and assistants included Pietro Perugino, Lorenzo di Credi, Domenico Ghirlandaio (briefly), and probably Sandro Botticelli for a time. The combined alumni list makes Verrocchio's bottega the single most consequential training ground in late-Quattrocento Florentine art.$BIO$,
  bio_sources = $JSON$[
    {"title":"Andrea del Verrocchio — Wikipedia","url":"https://en.wikipedia.org/wiki/Andrea_del_Verrocchio","type":"wikipedia"},
    {"title":"Andrea del Verrocchio — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Andrea-del-Verrocchio","type":"britannica"},
    {"title":"Verrocchio — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=Verrocchio","type":"museum"}
  ]$JSON$::jsonb
where slug = 'andrea-del-verrocchio';

-- ─── 87. Sassoferrato ──────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giovanni Battista Salvi — universally called Sassoferrato from his birthplace in the Marche, the town of Sassoferrato — was an Italian Baroque painter who specialized in deeply traditionalist devotional images of the Virgin Mary in a manner that consciously archaized back to Raphael and Perugino. Born in Sassoferrato in 1609, trained in his father's workshop and probably also briefly with Domenichino in Rome, he was active in Rome, the Marche, and Naples for his entire career. He died in Rome in 1685.

His Christian religious work is concentrated almost entirely in Madonnas and devotional panels of the Virgin in prayer — perhaps the most narrowly specialized output of any major Italian Baroque painter. Versions of the Madonna at Prayer, the Madonna with the Hands Crossed, the Madonna with the Veil, the Madonna of the Annunciation, and the various Madonna and Child compositions exist in the National Gallery in London, the Borghese in Rome, the Pinacoteca Capitolina, the Palatine Gallery in Florence, the Hermitage, the Louvre, and most of the major German and American collections — typically several versions in each. He produced these in painted, partly autograph and partly studio versions, in editions over decades. His characteristic Madonna — head bowed, eyes closed, blue mantle drawn over a white veil, hands crossed at the breast in a gesture of pure prayer — became, by repetition and reproduction in engraving, one of the most recognizable Italian Baroque devotional images.

His one major altarpiece, the Madonna of the Rosary in Santa Sabina in Rome (1643), is a deliberate exercise in fifteenth-century revival — composed in the manner of a Perugino or early Raphael altarpiece, with a careful symmetry and a pastel-colored sweetness that consciously turned away from the Caravaggesque chiaroscuro and the late-Baroque pictorial drama of his contemporaries.

His art is sometimes described as "the last fifteenth-century painter" — a deliberate seventeenth-century retreat into the calm, prayer-centered pictorial mode that the High Baroque had largely abandoned. The Madonnas were collected directly by aristocratic and ecclesiastical patrons across Europe in his lifetime, and through the eighteenth and nineteenth centuries his Madonna at Prayer became one of the most-reproduced devotional engravings in Catholic Europe — a fixture in chapels, prayer books, and homes from Naples to Quebec. The market for his Madonnas continued essentially unbroken into the early twentieth century.$BIO$,
  bio_sources = $JSON$[
    {"title":"Giovanni Battista Salvi da Sassoferrato — Wikipedia","url":"https://en.wikipedia.org/wiki/Giovanni_Battista_Salvi_da_Sassoferrato","type":"wikipedia"},
    {"title":"Sassoferrato — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Giovanni-Battista-Salvi","type":"britannica"},
    {"title":"Sassoferrato — National Gallery, London","url":"https://www.nationalgallery.org.uk/artists/sassoferrato","type":"museum"}
  ]$JSON$::jsonb
where slug = 'sassoferrato-giovanni-battista-salvi';

-- ─── 88. Andrea Solario ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Andrea Solario was a Lombard painter active in Milan, Venice, and France in the late Quattrocento and early Cinquecento — one of the principal Italian painters whose work bridged the Northern Italian tradition of soft sfumato modeling and warm color with the new Florentine and Venetian High Renaissance vocabulary. Born in Milan around 1465 to a family of stonecutters and sculptors (his older brother Cristoforo Solario was an important Lombard sculptor), trained in Milan and almost certainly with significant exposure to the work of Antonello da Messina during a Venetian sojourn in the early 1490s, he was active across northern Italy and made a documented working trip to France in 1507–1509 in the service of Cardinal Georges d'Amboise at the Château of Gaillon. He died in Milan around 1524.

His Christian religious work is concentrated in altarpieces and small devotional panels of unusual technical refinement. The Crucifixion (Louvre, 1503), the Madonna with the Green Cushion (Louvre, c. 1507–1510), the Christ Carrying the Cross (Borghese), the Virgin and Child (Brera, c. 1510), the Salome with the Head of John the Baptist (Metropolitan Museum, c. 1507), the Saint Catherine of Alexandria (Brera), and a sequence of small Madonna-and-Child panels and Ecce Homo half-figures circulated through the Lombard, French, and Venetian markets and ended up scattered across the great European and American collections.

The Salome compositions in particular — small, intimate panels of a young woman holding a platter on which the head of John the Baptist sits, often against a soft hilly Lombard landscape — became one of the most-reproduced and most-copied Italian Renaissance treatments of the subject and were imitated by his pupils and by other Lombard painters for a generation.

His French sojourn left frescoes at the Château of Gaillon (the chapel decoration commissioned by Cardinal d'Amboise, since destroyed) and a small group of paintings now in French collections. His personal style — soft modeling, warm flesh, deep saturated drapery color, and a Northern Italian feeling for atmospheric landscape — combined the Lombard inheritance of Leonardo's Milanese workshop years (Solario was not a direct pupil but worked in close stylistic dialogue with Leonardo's Milanese followers) with the older Northern Italian tradition descending from Antonello da Messina and the Vivarini.

He never quite became a major name in his own century outside Lombardy, but the small panels — the Madonnas, the Salomes, the Ecce Homos — have a quiet jewel-like authority that has secured him a place in every serious survey of early Cinquecento Italian religious painting.$BIO$,
  bio_sources = $JSON$[
    {"title":"Andrea Solario — Wikipedia","url":"https://en.wikipedia.org/wiki/Andrea_Solario","type":"wikipedia"},
    {"title":"Andrea Solario — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Andrea-Solario","type":"britannica"},
    {"title":"Andrea Solario — Pinacoteca di Brera","url":"https://pinacotecabrera.org/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'andrea-solario';

-- ─── 89. Jacopo Bassano ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Jacopo Bassano — born Jacopo dal Ponte in Bassano del Grappa around 1510, taking his professional name from his hometown — was a Venetian Renaissance painter who worked outside Venice in the Veneto countryside and developed an unmistakable rural-pastoral religious manner that filled the late-sixteenth-century Venetian market and shaped the entire Bassano family workshop, which his sons Francesco, Leandro, Giambattista, and Gerolamo carried into the seventeenth century. Trained in his father Francesco the Elder's workshop and then briefly with the Venetian painter Bonifacio de' Pitati in Venice, he returned to Bassano del Grappa in his twenties and worked there for almost his entire career. He died in Bassano in 1592.

His Christian religious work is concentrated in altarpieces and devotional panels that translate biblical narrative into the rural-domestic register of the Venetian terra ferma countryside. The Way to Calvary (London, c. 1545), the Adoration of the Shepherds (Hampton Court, c. 1546), the Last Supper (Borghese, c. 1546), the Saints Peter and Paul (Modena), the Annunciation to the Shepherds (Washington), the Two Hunting Dogs (Uffizi — a freestanding fragment from a larger biblical painting), and a long sequence of Old Testament narratives (the Animals Entering the Ark, the Forge of Vulcan transposed as Cain and Abel, the Shepherds in the Fields) anchor the painted reputation.

His characteristic compositional move — a biblical scene set in the foreground of a Veneto rural landscape, with peasants, animals, baskets of vegetables, and household tools accumulated around the central narrative — became the Bassano signature and was repeated, in painted versions, by his sons and the workshop for two generations. The combination of biblical narrative with carefully observed rural genre detail directly anticipated and influenced the seventeenth-century Bolognese genre painting (the Carracci's early peasant scenes) and the Dutch Golden Age combination of religious narrative with everyday domestic observation.

He worked in close collaboration with his sons; many surviving canvases are catalogued under the family name "Bassano" rather than under any single member, and the workshop kept replicating his standard biblical compositions — the Adoration of the Shepherds, the Animals Entering the Ark, the Crossing of the Red Sea — through the 1620s. His personal style — warm earth-tone palette, a particular skill at painting livestock and dogs, and the distinctive Veneto evening light — gave him a place in the late Cinquecento Venetian school as the principal voice of the painted countryside.$BIO$,
  bio_sources = $JSON$[
    {"title":"Jacopo Bassano — Wikipedia","url":"https://en.wikipedia.org/wiki/Jacopo_Bassano","type":"wikipedia"},
    {"title":"Jacopo Bassano — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Jacopo-Bassano","type":"britannica"},
    {"title":"Jacopo Bassano — Museo Civico di Bassano del Grappa","url":"https://www.museibassano.it/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'jacopo-bassano-jacopo-da-ponte';

-- ─── 90. Pordenone ─────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giovanni Antonio de' Sacchis, called Pordenone from his birthplace, was the leading Friulian painter of the early sixteenth century and one of the principal northern-Italian rivals to the dominance of Titian in Venice. Born in Pordenone in Friuli (now northeastern Italy) around 1483 or 1484, trained in the local Friulian workshop tradition and then increasingly under the influence of Giorgione and the early Titian during repeated working trips to Venice, he was active across Friuli, the Veneto, Lombardy, and Emilia for his entire career. He died in Ferrara in 1539, possibly from poisoning — his Venetian rivals (the early biographers, especially Vasari, hint at jealousy from the Titian camp), though the documentary evidence is inconclusive.

His central religious commissions are the great fresco cycles of the Cathedral of Cremona (1520–1521 — the dramatic Crucifixion on the entrance wall is among the great Italian Renaissance treatments of the subject), the choir of the Cathedral of Spilimbergo (1524–1526), the dome and lunettes of the Madonna di Campagna in Piacenza (1530–1535), and the great Conversion of Saul fresco for the cloister of San Salvatore in Venice. The Cremona Crucifixion in particular — with its packed crowd of figures, dramatic foreshortening, and compositional invention rivaling anything Titian was producing in the same decade — is widely held to be his masterpiece and the principal monument of his mature style.

His altarpieces include the Madonna and Saints in San Lorenzo in Verona, the Stories of Saint Catherine in Treviso Cathedral, the Annunciation (Treviso, c. 1525), and the Polyptych of the Annunciation in Pordenone Cathedral. He worked extensively in fresco — large-scale, decorative, public — and the bulk of his surviving work is in situ in the churches of the Friulian and Lombard provinces.

His personal style combined the local Friulian and Northern Italian inheritance with a vigorous response to Michelangelo's Sistine Chapel ceiling (which he saw on a Roman trip around 1517) and to Giulio Romano's Mantua frescoes. The result was a Northern Italian dramatic-figural manner that anticipated, by a decade or more, the late-Mannerist intensity that would define the Bassanos, the Tintoretto generation, and the early seventeenth-century Bolognese reform painters. He was Titian's principal living rival in northern Italy in the 1530s, and his death in Ferrara cut short what was likely to have been an extended late period of major commissions.$BIO$,
  bio_sources = $JSON$[
    {"title":"Pordenone — Wikipedia","url":"https://en.wikipedia.org/wiki/Il_Pordenone","type":"wikipedia"},
    {"title":"Pordenone — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Il-Pordenone","type":"britannica"},
    {"title":"Pordenone — Museo Diocesano di Pordenone","url":"https://www.museodiocesanopordenone.it/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giovanni-antonio-da-pordenone-giovanni-antonio-de-sacchis';

-- ─── 91. Giorgio Vasari ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giorgio Vasari was the principal painter, architect, and art-historian of the late-Mannerist Tuscan-Roman generation — the artist whose Lives of the Most Excellent Painters, Sculptors, and Architects (Florence, 1550, expanded edition 1568) founded the modern discipline of art history and remains, almost five hundred years later, the indispensable primary source for the lives and works of every Italian Renaissance master from Cimabue to his own contemporaries. Born in Arezzo in 1511, trained as a teenager in the workshop of Andrea del Sarto and then with the Florentine portraitist Baccio Bandinelli, and active across Florence, Rome, Naples, Bologna, and his native Arezzo for his entire career, he served the Medici grand-ducal court in Florence from 1554 until his death in Florence in 1574.

His Christian religious work is concentrated in altarpieces, ceiling decorations, and large public-religious commissions for the Medici and the Counter-Reformation Florentine church. The cupola frescoes of Florence Cathedral — the Last Judgment program he began in 1572 and left unfinished at his death (completed by Federico Zuccaro in 1579) — fill the inside of Brunelleschi's great dome with a vast Mannerist composition of the resurrected dead, the Apostles, and the choirs of angels. The frescoes of the Sala Regia in the Vatican (1572–1573, completed for Pope Gregory XIII) show the Battle of Lepanto and the Massacre of Saint Bartholomew — the latter, painted in celebration of the 1572 French Catholic killings of Protestants, is one of the more uncomfortable historical commissions of the late-Renaissance papacy. The decoration of the Palazzo Vecchio in Florence — the Salone dei Cinquecento and the Studiolo of Francesco I — combines mythological and religious subjects in dense allegorical program for the Medici grand-ducal court.

His altarpieces — the Allegory of the Immaculate Conception (Santi Apostoli, Florence, 1541), the Adoration of the Shepherds (Galleria Palatina, Florence), the Saint Sigismund (Camaldoli), and dozens of provincial commissions in Tuscan churches — are competent rather than innovative; modern criticism has been more interested in his Lives than in his paintings.

His designed architecture — the Uffizi in Florence (1560–1581), the corridor connecting the Palazzo Vecchio to the Pitti Palace across the Ponte Vecchio (the Vasari Corridor), the Loggia in Arezzo, the church of the Cavalieri di Santo Stefano in Pisa — survived in better repute than his painting and remains in active civic and museum use today. He was buried in his own family chapel in Arezzo, in the church he had designed for it.$BIO$,
  bio_sources = $JSON$[
    {"title":"Giorgio Vasari — Wikipedia","url":"https://en.wikipedia.org/wiki/Giorgio_Vasari","type":"wikipedia"},
    {"title":"Giorgio Vasari — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Giorgio-Vasari","type":"britannica"},
    {"title":"Giorgio Vasari — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=Vasari","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giorgio-vasari';

-- ─── 92. Jacopo Bellini ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Jacopo Bellini was the founding patriarch of the Bellini dynasty — the family workshop that ran Venetian painting for three generations and shaped the late-Quattrocento turn of Venice into the principal Italian center of pictorial color and atmospheric landscape. Born in Venice around 1400, trained in the workshop of Gentile da Fabriano (the great International Gothic painter, with whom Jacopo traveled to Florence in 1423–1425 for the Florentine Linen Drapers' Confraternity altarpiece), and active in Venice, Padua, and Verona for his entire career, he was the father of the painters Gentile and Giovanni Bellini and the father-in-law of Andrea Mantegna (whose marriage to Jacopo's daughter Nicolosia in 1453 made the Bellini and Mantegna families a single Italian Renaissance dynasty). He died in Venice around 1471.

His Christian religious painted output is small in surviving numbers — most of his finished paintings have been lost or destroyed — but the surviving altarpieces include the Madonna and Child with a Donor (Louvre), the Christ in Limbo (Museo Padovano), the Crucifixion (Verona Cathedral, c. 1436), and a small number of Madonnas in Italian and American collections.

His enduring importance lies in the two surviving sketchbooks — one in the Louvre and one in the British Museum, totaling more than three hundred sheets of detailed pen-and-ink and silverpoint drawings of biblical narratives, classical antiquities, animals, and architectural studies. The sketchbooks are among the most important surviving Italian Renaissance drawn cycles and document the encyclopedic ambitions of his late workshop. His Crucifixion drawings, his Adoration of the Magi sheets, his architectural fantasies, and his studies for the Stations of the Cross fill page after page in a continuous chronological program.

His sons inherited and transformed the workshop. Gentile Bellini became the leading Venetian state portraitist and the chronicler of Venetian state-religious processions (his great Procession in Saint Mark's Square in the Accademia is the supreme document of fifteenth-century Venice). Giovanni Bellini became the towering Venetian religious painter of the next generation and the master of Giorgione and Titian. Jacopo's career — modest in surviving paintings, monumental in surviving drawings — is the foundation of all of it.$BIO$,
  bio_sources = $JSON$[
    {"title":"Jacopo Bellini — Wikipedia","url":"https://en.wikipedia.org/wiki/Jacopo_Bellini","type":"wikipedia"},
    {"title":"Jacopo Bellini — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Jacopo-Bellini","type":"britannica"},
    {"title":"Jacopo Bellini sketchbooks — Musée du Louvre","url":"https://collections.louvre.fr/en/recherche?q=Jacopo+Bellini","type":"museum"}
  ]$JSON$::jsonb
where slug = 'jacopo-bellini';

-- ─── 93. Giovanni Bellini ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giovanni Bellini was the towering Venetian religious painter of the fifteenth and early sixteenth centuries and the principal architect of the Venetian school of color and atmospheric light. Born in Venice around 1430, trained in his father Jacopo Bellini's workshop alongside his older brother Gentile, and shaped through his early career by the example of his brother-in-law Andrea Mantegna (whose marriage to Giovanni's sister Nicolosia in 1453 brought the two artists into close stylistic dialogue), he ran the leading Venetian workshop for almost half a century. He was the master of Giorgione and Titian and the principal stylistic ancestor of every major Venetian painter of the next century. He died in Venice in 1516, well into his eighties.

His Christian religious work is enormous and is concentrated in altarpieces and devotional Madonnas of unrivalled tenderness and color. The San Giobbe Altarpiece (Accademia, Venice, c. 1487), the San Zaccaria Altarpiece (San Zaccaria, Venice, 1505) — both still in the city — set the standard for the new Venetian sacra conversazione: the Madonna and Child enthroned in a painted apse that visually completes the architecture of the church, attended by saints in patient symmetrical groups. The Madonna of the Meadow (London, c. 1505), the Madonna of the Trees (Accademia, c. 1487), the Madonna with the Greek Inscription (Brera), the Sacred Allegory (Uffizi), the Pietà (Brera), the Resurrection (Berlin), and dozens of other Madonnas and saints in museums across Europe and America anchor the painted reputation.

His landscape painting — the soft Veneto countryside under silvery evening light, with distant hills and slow rivers winding behind the principal religious scene — was the technical and conceptual foundation of the entire Venetian colorist tradition. His use of oil paint, learned from his father's late workshop and refined through long observation of Antonello da Messina (who visited Venice in 1475–1476 and brought the new Northern oil technique with him), gave his paintings an atmospheric depth and color saturation that egg-tempera could not produce.

His late style — the Feast of the Gods (Washington, 1514, painted for Alfonso d'Este of Ferrara and later partly repainted by Titian), the Drunkenness of Noah (Besançon, c. 1515), and the late altarpieces — shows the eighty-year-old master continuing to learn from his own pupils Giorgione and Titian, absorbing their newer manner without losing his own distinctive stillness and tenderness. He was buried in the church of Santi Giovanni e Paolo in Venice, beside his brother Gentile.$BIO$,
  bio_sources = $JSON$[
    {"title":"Giovanni Bellini — Wikipedia","url":"https://en.wikipedia.org/wiki/Giovanni_Bellini","type":"wikipedia"},
    {"title":"Giovanni Bellini — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Giovanni-Bellini","type":"britannica"},
    {"title":"Giovanni Bellini — Gallerie dell'Accademia Venezia","url":"https://www.gallerieaccademia.it/en","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giovanni-bellini';

-- ─── 94. Pieter Lastman ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Pieter Lastman was a Dutch history painter of the early seventeenth century and the principal teacher of Rembrandt van Rijn — the artist whose careful, narrative-driven Catholic-Italianate manner shaped the young Rembrandt's lifelong commitment to biblical history painting. Born in Amsterdam around 1583, trained in his native city in the workshop of the painter Gerrit Pietersz, and traveling to Italy around 1604–1607 (where he absorbed the example of Caravaggio and his Roman followers and the work of the German Caravaggesque painter Adam Elsheimer), he settled in Amsterdam on his return and worked there for the rest of his life. He died in Amsterdam in 1633.

His Christian religious work is concentrated in small-format history paintings of biblical narrative — Old Testament patriarch scenes, Gospel episodes, and the Acts of the Apostles — painted in the Italian-Caravaggesque manner with carefully studied figures, brilliant local color, and a particular skill at staging crowded narrative incident in compact pictorial space. The Sacrifice of Manoah (Dresden, c. 1617), the Resurrection of Lazarus (Hamburg, c. 1622), the Saints Peter and Paul (Hermitage), the Susanna and the Elders (Berlin), the Joseph Receiving His Father in Egypt (Berlin), the Adoration of the Magi (Amsterdam), the Tobit and Anna (Boymans, Rotterdam), and the great Stoning of Saint Stephen (Lyon, 1625) anchor the painted reputation.

The Stoning of Saint Stephen in particular — Lastman's most ambitious surviving canvas — directly informed Rembrandt's own first dated painting, the Stoning of Saint Stephen (Lyon, 1625), which the seventeen-year-old apprentice produced as a competitive response to his master's almost contemporary version. The compositional kinship is unmistakable. Several other Rembrandt early works — the Balaam and the Ass (Paris, 1626), the Tobit and Anna (Amsterdam, 1626), the Anna and the Blind Tobit — are direct responses to Lastman compositions.

Rembrandt entered Lastman's Amsterdam workshop in 1624 at the age of eighteen, after a six-year period of more conventional Latin schooling and an unsuccessful brief university enrollment. The Lastman apprenticeship lasted only six months — short by Dutch standards — but the formative effect on Rembrandt's lifelong commitment to dramatic biblical history painting in the Italianate manner was decisive. Lastman never married, lived modestly in Amsterdam, and was buried in the Old Church there.$BIO$,
  bio_sources = $JSON$[
    {"title":"Pieter Lastman — Wikipedia","url":"https://en.wikipedia.org/wiki/Pieter_Lastman","type":"wikipedia"},
    {"title":"Pieter Lastman — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Pieter-Lastman","type":"britannica"},
    {"title":"Pieter Lastman — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/pieter-lastman","type":"museum"}
  ]$JSON$::jsonb
where slug = 'pieter-lastman';

-- ─── 95. Sebastiano del Piombo ─────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Sebastiano del Piombo — born Sebastiano Luciani in Venice around 1485, called del Piombo from his late appointment as Keeper of the Papal Seal (the piombo, the lead bull) in Rome — was a Venetian-born painter who worked in Rome during the High Renaissance and was, alongside Raphael, the principal collaborator and friend of Michelangelo. Trained in Venice in the workshop of Giovanni Bellini and then in close stylistic dialogue with Giorgione (whose unfinished panels Sebastiano completed at his early death), he moved to Rome in 1511 in the company of the wealthy Sienese banker Agostino Chigi and worked there for the rest of his life. He died in Rome in 1547.

His Christian religious work is concentrated in altarpieces and devotional panels of unusual gravity and chromatic density — Venetian color organized around Michelangelo-influenced figural drawing. The Pietà (Viterbo, 1512–1513), the Raising of Lazarus (London, 1517–1519, painted for Cardinal Giulio de' Medici as the rival commission to Raphael's Transfiguration for the same patron, and now hanging in the National Gallery in London where it once hung as the founding picture of the museum's Italian collection), the Flagellation of Christ (San Pietro in Montorio, Rome, 1518–1525), the Christ Carrying the Cross (Hermitage, c. 1535–1540), and a long sequence of Madonnas and saints in the Borghese, the Capodimonte, the Prado, and the Louvre fill the painted corpus.

Michelangelo supplied Sebastiano with figure drawings — sometimes whole compositions — for several major commissions; the Pietà of Viterbo and the Flagellation of Christ both depend directly on Michelangelo cartoons. The collaboration was exceptional in the Roman art world of the time and produced a small body of paintings that combine the figural authority of Michelangelo with the chromatic warmth of the Venetian school in a way no other artist in Rome achieved.

His appointment as Keeper of the Papal Seal in 1531 — a sinecure that paid handsomely and required only the production and verification of papal documents — slowed his painted output considerably; his last fifteen years produced relatively few finished pictures. He was a friend and correspondent of Michelangelo to the end and outlived Raphael by twenty-seven years. He was buried in the church of Santa Maria del Popolo in Rome.$BIO$,
  bio_sources = $JSON$[
    {"title":"Sebastiano del Piombo — Wikipedia","url":"https://en.wikipedia.org/wiki/Sebastiano_del_Piombo","type":"wikipedia"},
    {"title":"Sebastiano del Piombo — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Sebastiano-del-Piombo","type":"britannica"},
    {"title":"Sebastiano del Piombo — National Gallery, London","url":"https://www.nationalgallery.org.uk/artists/sebastiano-del-piombo","type":"museum"}
  ]$JSON$::jsonb
where slug = 'sebastiano-del-piombo';

-- ─── 96. Luca Signorelli ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Luca Signorelli — born Luca d'Egidio di Luca di Ventura in Cortona in southern Tuscany around 1450 — was an Umbrian-Tuscan painter of the late Quattrocento and the principal Italian master, before Michelangelo's Sistine ceiling, of the muscular nude in motion. Trained almost certainly in the Arezzo workshop of Piero della Francesca (whose careful figural geometry shaped Signorelli's whole approach to anatomy and composition), and active across Cortona, Florence, Siena, Orvieto, and Rome for his long career, he died in Cortona in 1523.

His central monument is the great fresco cycle in the San Brizio Chapel of Orvieto Cathedral (1499–1504), the chapel originally begun by Fra Angelico fifty years earlier. Signorelli completed the program with scenes of the End of the World, the Sermon and Acts of the Antichrist, the Resurrection of the Flesh, the Damned in Hell, the Blessed in Heaven, and the Last Judgment — a sustained meditation on the End Times across four walls and a vault, with hundreds of nude or semi-nude figures in extreme physical motion. The cycle is widely held to be the principal precedent for Michelangelo's Sistine Chapel Last Judgment of forty years later; Michelangelo himself is reported by Vasari to have studied Signorelli's Orvieto figures during his trips back to central Italy in the 1530s.

His earlier work includes the panel of the Education of Pan (Berlin, c. 1490, destroyed in the 1945 fire that burned much of the Berlin painting collection but known from photographs), the Madonna and Child (Uffizi, c. 1490), the Communion of the Apostles (Cortona Diocesan Museum, 1512), the Crucifixion with Saint Mary Magdalene (Uffizi), the Lamentation of Christ (Cortona, c. 1502), and the great altarpieces in the church of Sant'Agostino in Siena and the cathedral of Volterra. His Sistine Chapel contribution of 1481–1482 — the Testament and Death of Moses, painted alongside Botticelli, Perugino, and Ghirlandaio — is one of the original Sixtus IV wall scenes.

His personal style — densely muscled bodies in dramatic foreshortening, a particular skill at the writhing nude figure, and a characteristic willingness to crowd figural narrative to the edges of the picture frame — defined a Tuscan-Umbrian alternative to the calmer Florentine and Venetian High Renaissance manner. He worked into his seventies, produced a substantial late workshop output in Cortona, and was buried in his native city.$BIO$,
  bio_sources = $JSON$[
    {"title":"Luca Signorelli — Wikipedia","url":"https://en.wikipedia.org/wiki/Luca_Signorelli","type":"wikipedia"},
    {"title":"Luca Signorelli — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Luca-Signorelli","type":"britannica"},
    {"title":"Luca Signorelli — Cattedrale di Orvieto","url":"https://www.opsm.it/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'luca-signorelli-luca-d-egidio-di-luca-di-ventura';
