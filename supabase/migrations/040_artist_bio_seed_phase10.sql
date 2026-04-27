-- Artist hub bios — phase 10.
-- Thirty more anchor artists from the next tier of famous Christian
-- masters who already have approved artwork in the catalogue but no
-- bio_long. Same conventions as 026 / 027 / 030 / 031 / 033 / 034:
-- original prose, dollar-quoted, with bio_sources as Wikipedia /
-- Britannica / museum citation pointers. Exact slug matching only.

-- ─── 97. Anthony van Dyck ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Sir Anthony van Dyck was the leading Flemish painter of the seventeenth century after Rubens and the principal portraitist of the early Stuart court of Charles I in England. Born in Antwerp in 1599 to a wealthy silk merchant, apprenticed at age ten to Hendrick van Balen and registered as a master in the Antwerp painters' guild by 1618, he entered Rubens's workshop in his late teens and became his most important assistant for several years before traveling to Italy in 1621. He spent six years in Italy — principally in Genoa, where he painted aristocratic portraits, and in Rome, Venice, and Sicily — and returned to Antwerp in 1627. His final relocation to England in 1632 made him principal painter to Charles I; he died in London in 1641, just forty-two years old.

His Christian religious work is concentrated in altarpieces produced during the Antwerp years (both the early pre-Italian and the post-Italian phases) and in the Genoese commissions of his Italian sojourn. The Crucifixion altarpieces in Mechelen and Antwerp Cathedral, the Lamentation of Christ (Munich, c. 1635), the Crowning with Thorns (Madrid), the Saint Augustine in Ecstasy (Antwerp), the Mocking of Christ (Madrid), and the late Pietà compositions for English Catholic patrons in the 1630s anchor his religious output. The early altarpieces show the muscular, deeply saturated chromatic Rubens manner that Van Dyck absorbed during his apprentice years; the later altarpieces have the slimmer figural proportions and softer chromatic palette that mark his independent mature manner.

His portrait practice — the great series of Charles I, Henrietta Maria, the royal children, the leading English aristocracy, and his own self-portraits — defined the iconographic conventions of European court portraiture for the next two hundred years. Gainsborough, Reynolds, and the entire eighteenth-century English portrait tradition descend directly from his work. He was knighted by Charles I in 1632, granted a yearly pension, and given the official title Principalle Paynter in Ordinarie to their Majesties.$BIO$,
  bio_sources = $JSON$[
    {"title":"Anthony van Dyck — Wikipedia","url":"https://en.wikipedia.org/wiki/Anthony_van_Dyck","type":"wikipedia"},
    {"title":"Anthony van Dyck — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Anthony-Van-Dyck","type":"britannica"},
    {"title":"Anthony van Dyck — National Portrait Gallery","url":"https://www.npg.org.uk/collections/search/person/mp01302/sir-anthony-van-dyck","type":"museum"}
  ]$JSON$::jsonb
where slug = 'anthony-van-dyck';

-- ─── 98. Giovanni Battista Tiepolo ─────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giovanni Battista Tiepolo (also called Giambattista Tiepolo) was the supreme Italian fresco painter of the eighteenth century and the principal late voice of the Venetian school of color and luminous atmosphere that descended from Veronese and Tintoretto. Born in Venice in 1696, trained briefly in the workshop of Gregorio Lazzarini before establishing himself independently in his late teens, he ran the leading Venetian decorative-painting workshop for almost half a century. He worked across northern Italy and Germany — the great Würzburg Residenz frescoes of 1750–1753 are his masterpiece — and ended his career in Madrid at the Spanish royal court, where he died in 1770.

His Christian religious work is concentrated in altarpieces, oratory ceiling cycles, and church decoration commissions across the Veneto and northern Italy. The ceiling fresco of the Carmelite church Santa Maria del Carmelo in Venice (1740–1743), the Stations of the Cross at the Oratorio del Crocifisso in San Polo (1747–1749), the great altarpieces in the Gesuati church on the Zattere, the Saints Maximus and Oswald (Padua, c. 1740), the Madonna of Mount Carmel altarpieces produced in multiple workshop variants, and the late altarpieces for the Spanish royal court fill the religious painted corpus. The chromatic palette of luminous chalk-pinks, electric blues, and silvery cool whites against the bright sunlight of his Venetian skies became the canonical late-Baroque Italian altarpiece signature.

His Würzburg ceiling — the Apollo and the Four Continents in the Treppenhaus and the great Imperial Hall frescoes painted for the Prince-Bishop of Würzburg between 1750 and 1753 — is widely held to be the supreme Italian fresco achievement of the eighteenth century. He was assisted in the project by his sons Giandomenico and Lorenzo, who continued the workshop after his death.

He died in Madrid in 1770, having spent his last eight years working at the Spanish royal court under Charles III. The neoclassical reaction of the late eighteenth century pushed his late-Baroque manner out of fashion almost immediately; the modern rediscovery of Tiepolo as a major figure dates from the early twentieth century.$BIO$,
  bio_sources = $JSON$[
    {"title":"Giovanni Battista Tiepolo — Wikipedia","url":"https://en.wikipedia.org/wiki/Giovanni_Battista_Tiepolo","type":"wikipedia"},
    {"title":"Giambattista Tiepolo — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Giambattista-Tiepolo","type":"britannica"},
    {"title":"Tiepolo — Würzburg Residenz","url":"https://www.residenz-wuerzburg.de/englisch/index.htm","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giovanni-battista-tiepolo';

-- ─── 99. Antonello da Messina ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Antonello da Messina was a Sicilian painter who, in a brief but transformative career, brought the Northern oil-painting technique into Italian Renaissance practice and shaped the development of Venetian and southern Italian painting in the second half of the fifteenth century. Born in Messina in Sicily around 1430, trained in Naples in the orbit of the Spanish-Neapolitan painter Colantonio (whose workshop had absorbed the Early Netherlandish technique through Aragonese-court contact with Burgundy), and active in Sicily, Naples, and Venice across his career, he died in Messina in 1479.

His Christian religious work is concentrated in altarpieces, devotional Madonnas, and the famous half-length penitent saints. The Crucifixion (London, c. 1475), the Salvator Mundi (London, 1465), the Saint Jerome in His Study (London, c. 1475 — a small panel of the early Church Father in his Renaissance Italian study, with extraordinary depth of architectural perspective and minute observation of the books and instruments around him), the Polyptych of San Gregorio (Messina, 1473), the Pietà (Madrid), and the Madonna and Child (Washington) anchor the painted reputation. The Salvator Mundi in particular — the half-length figure of Christ raising his right hand in benediction against a dark neutral ground — became one of the canonical iconographic types of Italian Renaissance devotional painting and was widely copied throughout the Italian peninsula.

His Venetian sojourn of 1475–1476 was particularly transformative. The polyptych he painted for the church of San Cassiano in Venice (now dispersed, with the central fragment in Vienna and other panels lost) introduced the new oil-painting technique and the calm, jewel-bright Northern devotional sensibility into the Venetian workshop tradition; Giovanni Bellini, who was Antonello's exact contemporary, absorbed the lessons directly. The supreme Venetian color-and-atmosphere tradition that ran from Bellini through Giorgione and Titian and into Veronese and Tintoretto was substantially shaped by this brief Antonello visit.

He returned to Messina in 1476 and died there three years later. His son Jacobello continued the workshop briefly after his death, but the major Antonello tradition was carried forward not by his son but by the Venetian painters who had learned from him.$BIO$,
  bio_sources = $JSON$[
    {"title":"Antonello da Messina — Wikipedia","url":"https://en.wikipedia.org/wiki/Antonello_da_Messina","type":"wikipedia"},
    {"title":"Antonello da Messina — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Antonello-da-Messina","type":"britannica"},
    {"title":"Antonello da Messina — National Gallery, London","url":"https://www.nationalgallery.org.uk/artists/antonello-da-messina","type":"museum"}
  ]$JSON$::jsonb
where slug = 'antonello-da-messina-antonello-di-giovanni-d-antonio';

-- ─── 100. Carlo Crivelli ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Carlo Crivelli was a Venetian-born painter who spent his entire mature career in the small towns of the Marche on the Adriatic coast of central Italy, producing altarpieces in a deliberately archaizing late-Gothic-into-Renaissance manner of unmistakable jewel-bright intensity. Born in Venice around 1430 to a family of painters (his brother Vittore Crivelli also became an active painter in the Marche), trained in Venice in the workshop of his father Jacopo Crivelli, and exiled from Venice in 1457 after a conviction for adultery, he settled in the Marche by the 1460s and produced altarpieces for Ascoli Piceno, Camerino, Massa Fermana, and the smaller hill towns of the region for the next thirty years. He died in Ascoli Piceno around 1495, having signed himself in the late altarpieces with the proud title CAROLUS CRIVELLUS VENETUS — Carlo Crivelli the Venetian.

His Christian religious work is concentrated in large polyptych altarpieces, Madonnas, and devotional panels in his characteristic style — figures in elongated late-Gothic proportions modeled with intense jewel-bright color, against tooled-gold backgrounds, framed by elaborate carved-and-gilded architectural altarpiece structures, and decorated with the unmistakable Crivelli touches of swag-and-fruit garlands, embroidered silks, and minute observation of botanical specimens. The Annunciation with Saint Emidius (London, 1486 — the supreme Crivelli altarpiece, painted for the church of Santi Annunziata in Ascoli Piceno to commemorate the granting of the city's charter of self-government), the Demidoff Altarpiece (London), the Madonna della Candeletta (Brera, c. 1490), and the great polyptychs in the Brera, the Vatican Pinacoteca, the Frick, and the Metropolitan fill museums across Europe and America.

His personal style — at once deeply traditional and slightly perverse, with figures whose proportions and chromatic intensity push the late-Gothic Italian tradition further than any of his contemporaries — was rediscovered in the nineteenth century by the Pre-Raphaelites and again in the twentieth century by Surrealist painters, who treated his combination of jewel-bright color with the small unsettling botanical and architectural details as a kind of proto-Surrealism. The 2022 National Gallery London exhibition of his work consolidated his modern reputation.$BIO$,
  bio_sources = $JSON$[
    {"title":"Carlo Crivelli — Wikipedia","url":"https://en.wikipedia.org/wiki/Carlo_Crivelli","type":"wikipedia"},
    {"title":"Carlo Crivelli — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Carlo-Crivelli","type":"britannica"},
    {"title":"Carlo Crivelli — National Gallery, London","url":"https://www.nationalgallery.org.uk/artists/carlo-crivelli","type":"museum"}
  ]$JSON$::jsonb
where slug = 'carlo-crivelli';

-- ─── 101. Federico Barocci ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Federico Barocci was the leading Italian Counter-Reformation painter of the late sixteenth century — the artist who, working from the small Marche town of Urbino almost his entire life, produced the most reproduced and most influential Italian altarpieces of his generation outside Rome. Born in Urbino around 1535 to a family of artists (his father Ambrogio Barocci was a sculptor; his uncle Francesco Menzocchi was a painter), trained in his father's workshop and in Rome under the painter Taddeo Zuccaro, he returned to Urbino in 1563 after a near-fatal poisoning incident in Rome and worked there for the rest of his life. He died in Urbino in 1612.

His Christian religious work is concentrated in large altarpieces produced for the principal Counter-Reformation Italian commissions — Roman, Bolognese, Florentine, and Marche-regional. The Madonna del Popolo (Uffizi, 1575–1579), the Deposition (Perugia Cathedral, 1567–1569), the Last Supper (Urbino Cathedral, c. 1592–1599), the Calling of Saint Andrew (Brussels), the Visitation (Santa Maria in Vallicella, Rome), the Aeneas Fleeing Troy (Borghese, 1598), the Madonna of Saint Simon (Urbino), and dozens of smaller devotional Madonnas of the Loreto type and the Holy Family with the Cat (Madonna del Gatto) anchor the painted corpus. His Madonnas with the Cat were particularly widely reproduced through the engraving market of his lifetime and after.

His personal style is unmistakable: soft pastel-colored sfumato modeling derived from Correggio, an emotional immediacy that combines tenderness with theatrical pictorial drama, an unusual chromatic palette of pinks, oranges, lavenders, and silvery whites, and a luminous handling of light that anticipated by a generation the Bolognese reform of the Carracci. He was Saint Filippo Neri's favorite painter (the saint named him in his correspondence as the artist whose works most reliably moved him to prayer), and the Counter-Reformation Catholic patrons treated him as the supreme model of devotionally effective religious painting.

He was famously slow — his altarpieces sometimes took six or seven years to complete — and worked from extraordinary preparatory drawing campaigns in red and black chalk. The drawings, scattered across the Uffizi, the Louvre, the Berlin Kupferstichkabinett, and the British Museum, are widely held to be among the supreme Italian Renaissance preparatory drawings.$BIO$,
  bio_sources = $JSON$[
    {"title":"Federico Barocci — Wikipedia","url":"https://en.wikipedia.org/wiki/Federico_Barocci","type":"wikipedia"},
    {"title":"Federico Barocci — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Federico-Barocci","type":"britannica"},
    {"title":"Federico Barocci — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=Barocci","type":"museum"}
  ]$JSON$::jsonb
where slug = 'federico-barocci';

-- ─── 102. Joos van Cleve ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Joos van Cleve was a leading Antwerp painter of the early sixteenth century and one of the principal members of the loose group called the Antwerp Mannerists — the generation that combined the late Early Netherlandish painting tradition descending from Jan van Eyck and Hans Memling with the new Italianizing Renaissance vocabulary that arrived through prints and travelers in the years between roughly 1500 and 1540. Born in Cleves around 1485, trained almost certainly in the workshop of Jan Joest of Kalkar before settling in Antwerp by 1511, he became a master of the Antwerp painters' guild and ran a productive workshop in the city for the rest of his life. He died in Antwerp around 1540.

His Christian religious work is concentrated in altarpieces, devotional Madonnas, and the Holy Family compositions in his characteristic combination of late Northern Renaissance technique and Italianate Renaissance figural drawing. The Death of the Virgin altarpiece (Cologne, c. 1515 — the central panel showing the Virgin on her deathbed surrounded by the apostles, painted in the standard Antwerp Mannerist horizontal triptych format), the Adoration of the Magi (multiple versions in workshop variants in Madrid, Naples, Detroit, and Dresden), the Madonna of the Cherries (multiple versions, including the famous Cleveland and Brussels variants), the Holy Family (multiple versions in workshop variants), and the Saint Reinhold Altarpiece (Warsaw National Museum) anchor the painted corpus.

His Madonna and Child compositions — the Virgin in three-quarter view holding the Christ Child against her breast, often with a small bunch of cherries or grapes that the Child reaches for, set in a Northern interior with leaded windows opening onto a panoramic landscape — became one of the most-copied Antwerp Mannerist devotional types and were produced in dozens of workshop variants distributed across the European Catholic devotional market.

He worked briefly in France in the early 1530s at the invitation of King Francis I and produced portraits of the king, his mother Louise of Savoy, and the royal children that established his international reputation. The Antwerp workshop continued under his son Cornelis van Cleve and produced workshop variants of his standard altarpiece compositions for several decades after his death.$BIO$,
  bio_sources = $JSON$[
    {"title":"Joos van Cleve — Wikipedia","url":"https://en.wikipedia.org/wiki/Joos_van_Cleve","type":"wikipedia"},
    {"title":"Joos van Cleve — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Joos-van-Cleve","type":"britannica"},
    {"title":"Joos van Cleve — Royal Museums of Fine Arts of Belgium","url":"https://www.fine-arts-museum.be/en","type":"museum"}
  ]$JSON$::jsonb
where slug = 'joos-van-cleve';

-- ─── 103. Salvator Rosa ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Salvator Rosa was a Neapolitan-born painter, etcher, poet, satirist, and actor whose flamboyant personal reputation and his subjects of wild mountainous landscapes and dramatic biblical and historical narratives made him one of the most distinctive Italian Baroque artists of the seventeenth century and a particular favorite of the eighteenth and nineteenth-century European Romantic taste for wild scenery. Born in Arenella near Naples in 1615, trained in Naples in the orbit of his uncle Paolo Greco and the painter Aniello Falcone before moving to Rome in his early twenties, he was active in Rome and Florence (where he served the Medici grand-ducal court between 1640 and 1649) for the rest of his life. He died in Rome in 1673.

His Christian religious work falls in two distinct categories. First, the wild-landscape biblical narratives — Saint John the Baptist Preaching, Saint Anthony in the Wilderness, the Witch of Endor (1668, Louvre), the Tobias and the Angel — in which the small biblical figures are dwarfed by enormous craggy mountain landscapes, dark woodland glens, and stormy skies. Second, the philosopher-saint compositions — solitary hermits, ascetic monks, and the early Church Fathers in their desert retreats — in which he combined the Catholic monastic devotional tradition with his own taste for melancholic solitary contemplation. The Saint Jerome in the Wilderness compositions, in particular, were widely reproduced throughout the eighteenth century.

He was equally a major etcher. His suite of etched figures — soldiers, peasants, beggars, gypsies, and small religious-narrative compositions — circulated widely through European print collections in his lifetime and shaped the Romantic-era taste for the picturesque outsider figure as a subject for serious artistic attention. His landscape etchings of wild mountainous scenes were particularly influential on the eighteenth-century English picturesque movement.

He was also a published satirical poet, an actor in the Roman commedia dell'arte, and a chronic public controversialist whose feuds with the leading Roman painters of his generation (especially Pietro da Cortona and Carlo Maratti) provided material for two centuries of subsequent biographical writing about the seventeenth-century Roman art world.$BIO$,
  bio_sources = $JSON$[
    {"title":"Salvator Rosa — Wikipedia","url":"https://en.wikipedia.org/wiki/Salvator_Rosa","type":"wikipedia"},
    {"title":"Salvator Rosa — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Salvator-Rosa","type":"britannica"},
    {"title":"Salvator Rosa — National Gallery, London","url":"https://www.nationalgallery.org.uk/artists/salvator-rosa","type":"museum"}
  ]$JSON$::jsonb
where slug = 'salvator-rosa';

-- ─── 104. Bernardo Strozzi ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Bernardo Strozzi was the leading Genoese painter of the first half of the seventeenth century and one of the principal Italian Baroque masters whose mature career was spent largely in Venice, where he combined the Genoese-Flemish painterly tradition with the late Venetian color school of Veronese and Titian into a distinctive late-Baroque manner. Born in Genoa in 1581 (or 1582), trained in his native city in the workshops of the Sienese painter Cesare Corte and the Genoese Pietro Sorri, he entered the Capuchin Franciscan order in 1597 (the strict reformed branch of the Franciscans, from which he took the additional nickname Il Cappuccino — the little Capuchin), and remained a friar for some twenty years before being forced to leave the order around 1630. He moved to Venice in 1631 and worked there for the rest of his life, dying in Venice in 1644.

His Christian religious work is concentrated in altarpieces, devotional half-length figures, and small-format private devotional paintings. The Pietà (Strada Nuova, Genoa), the Saint Lawrence Distributing the Treasures of the Church (San Niccolò di Tolentino, Venice), the Saint Cecilia (Kansas City), the Madonna and Child compositions in workshop variants, the Penitent Magdalene (multiple versions in Venetian and English collections), and the late Saint John the Baptist altarpieces fill the principal late-Baroque Italian collections. His religious half-length saints, in particular — bearded Church Fathers, penitent Magdalenes, and meditative apostles painted with deep saturated chromatic palette and broad confident brushwork — became the standard mid-seventeenth-century Venetian devotional type and were collected in editions across Catholic Europe.

His personal style — combining the dense Caravaggesque chiaroscuro of his Genoese training with the warm chromatic palette and broad painterly brushwork of the Venetian late-Renaissance tradition — anticipated by a generation the loose painterly handling that would define the early Italian eighteenth century. He was particularly admired in his lifetime for his portrait painting; his portraits of Venetian patricians and ecclesiastical patrons gave him a wide international clientele in the 1630s and early 1640s.

He left a productive Venetian workshop that continued issuing his characteristic compositions for several decades after his death.$BIO$,
  bio_sources = $JSON$[
    {"title":"Bernardo Strozzi — Wikipedia","url":"https://en.wikipedia.org/wiki/Bernardo_Strozzi","type":"wikipedia"},
    {"title":"Bernardo Strozzi — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Bernardo-Strozzi","type":"britannica"},
    {"title":"Bernardo Strozzi — Galleria di Palazzo Bianco, Genoa","url":"https://www.museidigenova.it/it/musei-di-strada-nuova-palazzo-bianco","type":"museum"}
  ]$JSON$::jsonb
where slug = 'bernardo-strozzi';

-- ─── 105. Jacob Jordaens ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Jacob Jordaens was the third member, alongside Rubens and Anthony van Dyck, of the great triumvirate of seventeenth-century Antwerp Baroque painters and, after Rubens's death in 1640, the principal Flemish religious painter of his generation. Born in Antwerp in 1593 to a wealthy linen-draper, trained in the workshop of the Antwerp painter Adam van Noort (whose daughter Catharina van Noort he later married), and never traveling to Italy or France, he ran his Antwerp workshop almost continuously from his late teens until his death in Antwerp in 1678 at the age of eighty-five.

His Christian religious work is concentrated in altarpieces and large-format Old and New Testament narrative paintings produced for both Catholic and Protestant patrons across the Spanish Netherlands and the Dutch Republic. The Adoration of the Shepherds (multiple versions in Antwerp, Brussels, and the Hermitage), the Last Supper (Antwerp Cathedral, c. 1655), the Christ Driving the Money Changers from the Temple (Louvre, c. 1650), the Triumph of the Eucharist (multiple altarpieces in Antwerp churches), and the great series of Old Testament patriarchal subjects (Susanna and the Elders, Moses Striking the Rock, Abraham Sacrificing Isaac) anchor the painted corpus.

His personal style — large heavy figures painted with broad confident brushwork in a deeply saturated chromatic palette, with a particular fondness for crowded multi-figure compositions filled with peasants, animals, fruits, and household objects — combined the muscular Rubensian Antwerp Baroque manner with a distinctive Flemish-domestic sensibility. He was a Lutheran convert (around 1650) but continued to accept Catholic altarpiece commissions throughout his life, producing both for the Catholic churches of Antwerp and for the Calvinist Dutch patrons who collected his secular and Old Testament work.

His extensive workshop continued issuing his characteristic compositions for several decades after his death. The Antwerp painters' guild registered him as the youngest of the three great post-Rubens Antwerp masters; the modern critical assessment treats him as a slightly less inventive but more emotionally direct alternative to van Dyck's aristocratic refinement.$BIO$,
  bio_sources = $JSON$[
    {"title":"Jacob Jordaens — Wikipedia","url":"https://en.wikipedia.org/wiki/Jacob_Jordaens","type":"wikipedia"},
    {"title":"Jacob Jordaens — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Jacob-Jordaens","type":"britannica"},
    {"title":"Jacob Jordaens — Royal Museums of Fine Arts of Belgium","url":"https://www.fine-arts-museum.be/en","type":"museum"}
  ]$JSON$::jsonb
where slug = 'jacob-jordaens';

-- ─── 106. Luca Giordano ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Luca Giordano — called Luca Fa-Presto (Luke Works-Quickly) by his Neapolitan contemporaries for his extraordinary speed of execution — was the leading Neapolitan painter of the second half of the seventeenth century and one of the most prolific Italian Baroque masters. Born in Naples in 1634 to a poor painter named Antonio Giordano, trained briefly in his father's workshop and then under Jusepe de Ribera and Pietro da Cortona, he became the principal painter of Naples in his late twenties and continued producing altarpieces, ceiling frescoes, and easel paintings at staggering volume across northern and southern Italy and Spain. He served the Spanish Habsburg court at Madrid from 1692 to 1702, painting the great fresco programs of the Escorial monastery, before returning to Naples where he died in 1705.

His Christian religious work is enormous and is concentrated in altarpieces, ceiling frescoes, and large-format devotional canvases. The Saint Michael Archangel (Berlin), the Christ Driving the Money Changers from the Temple (multiple versions), the Massacre of the Innocents (Naples), the Cure of the Possessed (Capodimonte), the Adoration of the Shepherds (Capodimonte), the Crucifixion altarpieces in San Filippo Neri in Naples and the Madonna del Carmine cycle, the great Treasury Chapel ceiling frescoes in the Cathedral of Naples (1704–1705), and the Escorial monastery frescoes (1692–1702) fill the principal Italian and Spanish Baroque collections.

His personal style — built on Pietro da Cortona's Roman ceiling-fresco vocabulary and Ribera's dramatic Caravaggesque chiaroscuro, with a particular Neapolitan brilliance of color and a virtuoso painterly speed — defined the late Italian Baroque grand-manner. The Escorial frescoes in particular are widely held to be among the supreme Spanish Baroque ceiling decorations and are still the largest single collection of his frescoed work.

He worked at extraordinary commercial speed — his late biographer Bernardo De Dominici records him completing major altarpieces in days rather than weeks — and his prolific output gave him an international reach matched by few of his Italian contemporaries. He died in Naples having painted, by his own count, over five thousand finished works.$BIO$,
  bio_sources = $JSON$[
    {"title":"Luca Giordano — Wikipedia","url":"https://en.wikipedia.org/wiki/Luca_Giordano","type":"wikipedia"},
    {"title":"Luca Giordano — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Luca-Giordano","type":"britannica"},
    {"title":"Luca Giordano — Museo del Prado","url":"https://www.museodelprado.es/en/the-collection/artist/giordano-luca/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'luca-giordano';

-- ─── 107. Mattia Preti ─────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Mattia Preti — called Il Cavalier Calabrese (the Calabrian Knight) for his birthplace and his appointment as a knight of the Order of Malta in 1661 — was a leading Italian Baroque painter who worked across Rome, Naples, and Malta in the middle and late seventeenth century. Born in the small Calabrian town of Taverna in 1613, trained in Rome from his late teens in the orbit of his older brother Gregorio Preti and the Caravaggesque-Neapolitan painter Battistello Caracciolo, he was active in Rome (where he produced major fresco programs at Sant'Andrea della Valle and the Quirinal Palace), Naples (where he was forced to flee briefly during the 1656 plague), and finally Malta from 1661 onward. He was made a Knight of Magistral Grace of the Sovereign Military Order of Malta and worked in Valletta for the rest of his life, dying there in 1699.

His Christian religious work is concentrated in altarpieces and large-format devotional canvases for the Maltese churches and for export back to the Italian peninsula. The great vault frescoes of the Co-Cathedral of Saint John in Valletta (1661–1666) — the Stories of Saint John the Baptist painted across the entire ceiling and apse of the Maltese Knights' principal church, with the Baptist's beheading filling the central scene — are widely held to be his masterpiece and one of the supreme Italian Baroque ceiling cycles outside Rome. The earlier Roman commissions — the Sant'Andrea della Valle frescoes and the Quirinal Palace work — and the Neapolitan altarpieces of the 1650s round out the principal painted corpus.

His personal style — combining the Caravaggesque chiaroscuro of his Roman and Neapolitan training with a particularly Calabrian-Neapolitan dramatic emotional intensity and a deep saturated chromatic palette of crimson, ochre, and silver — made him one of the most identifiable Italian Baroque masters. The Maltese altarpieces of his late career, painted across nearly four decades of residence on the island, gave him a uniquely insular late-career trajectory; the Knights of Malta were his primary patrons and the Maltese church commissions his principal output.

He left a substantial Maltese workshop that continued issuing his characteristic compositions for some decades after his death; the dispersal of these workshop variants across the European Mediterranean church market in the eighteenth century carried the Mattia Preti compositional vocabulary into the broader late-Baroque Catholic devotional tradition.$BIO$,
  bio_sources = $JSON$[
    {"title":"Mattia Preti — Wikipedia","url":"https://en.wikipedia.org/wiki/Mattia_Preti","type":"wikipedia"},
    {"title":"Mattia Preti — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Mattia-Preti","type":"britannica"},
    {"title":"Mattia Preti — St John's Co-Cathedral, Valletta","url":"https://www.stjohnscocathedral.com/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'mattia-preti-il-cavalier-calabrese';

-- ─── 108. Lippo Memmi ──────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Lippo Memmi (Filippo di Memmo) was the leading Sienese painter of the generation immediately after Duccio di Buoninsegna and the principal collaborator of his brother-in-law Simone Martini, with whom he produced the most reproduced single Sienese Trecento altarpiece — the Annunciation now in the Uffizi. Born in Siena around 1290 to the painter Memmo di Filippuccio (whose workshop he initially trained in), and active in Siena, San Gimignano, and Avignon (where he followed Simone Martini to the papal court in the 1330s) for the rest of his career, he died in Siena around 1356, possibly in the Black Death epidemic that killed a substantial portion of his generation.

His Christian religious work is concentrated in altarpieces, fresco cycles, and devotional Madonnas in the unmistakable Sienese Trecento manner — figures in elongated proportions, jewel-bright color, tooled-gold backgrounds, and the calm devotional sweetness that defined the Sienese school after Duccio. The Annunciation altarpiece (Uffizi, 1333 — painted in collaboration with his brother-in-law Simone Martini for the Cathedral of Siena, with Lippo Memmi traditionally credited as the painter of the side panels of Saints Ansanus and Margaret of Antioch), the Maestà fresco in the Palazzo Comunale of San Gimignano (1317 — directly influenced by Simone Martini's slightly earlier Maestà in the Palazzo Pubblico of Siena), the polyptych panels for the Servite church in Siena, and the small devotional Madonnas now in the Pinacoteca Nazionale of Siena, the Berlin Gemäldegalerie, and various American collections, fill the painted corpus.

His collaboration with Simone Martini was particularly close and (in the case of the Uffizi Annunciation) so intertwined that scholars still debate the exact division of labor between the two painters on the surviving panels. After Simone's death in Avignon in 1344 Lippo Memmi returned to Siena and continued to produce altarpieces in the standard Sienese workshop format until his own death in the city around 1356.

His son Federico Memmi continued the workshop briefly after his death, but the major Memmi tradition was carried forward not by his immediate family but by the next Sienese generation of the Lorenzetti brothers, Bartolo di Fredi, and Sano di Pietro who absorbed the Sienese late-medieval-into-Renaissance vocabulary directly from his and Simone Martini's example.$BIO$,
  bio_sources = $JSON$[
    {"title":"Lippo Memmi — Wikipedia","url":"https://en.wikipedia.org/wiki/Lippo_Memmi","type":"wikipedia"},
    {"title":"Lippo Memmi — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Lippo-Memmi","type":"britannica"},
    {"title":"Lippo Memmi — Galleria degli Uffizi","url":"https://www.uffizi.it/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'lippo-memmi-filippo-di-memmo';

-- ─── 109. Sano di Pietro ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Sano di Pietro (Ansano di Pietro di Mencio) was one of the most prolific Sienese painters of the fifteenth century, the supplier of altarpieces, devotional Madonnas, and predella panels to the Sienese churches and confraternities for almost half a century. Born in Siena in 1405, trained in the workshop of the Sienese painter Sassetta (Stefano di Giovanni), and active in Siena for almost his entire career, he ran the leading Sienese workshop of his generation and produced an enormous body of religious paintings for the Sienese ecclesiastical and lay markets. He died in Siena in 1481.

His Christian religious work is concentrated in altarpieces, polyptych panels, and small Madonnas in the unmistakable Sienese Quattrocento manner descending directly from Duccio, Simone Martini, and the Lorenzetti brothers. Saint Bernardino Preaching in the Campo of Siena (Pinacoteca Nazionale, Siena, c. 1448) — a small panel showing the great fifteenth-century Sienese Franciscan reformer preaching in the great public square of his native city — is among the most reproduced of Sano's small narrative panels and a defining document of mid-fifteenth-century Sienese civic-religious culture. The polyptych altarpieces in the Sienese Pinacoteca, in numerous Sienese parish churches still in their original locations, and in the Berlin and Met collections in dispersed fragments, fill the workshop's painted output.

His personal style is the unmistakable Sienese late-medieval-into-Renaissance signature: jewel-bright tempera color, tooled-gold backgrounds, slightly elongated figural proportions, calm sweet faces, and a certain deliberate refusal to follow the Florentine Quattrocento move toward weighted figures in legible perspectival space. The Sienese school under Sano's leadership maintained the older devotional pictorial vocabulary against the Florentine new manner; Sano's workshop was its principal carrier through the middle and late fifteenth century.

His workshop produced hundreds of small Madonnas and devotional panels for the Sienese household and confraternal devotional market; many survive in the Sienese Pinacoteca and in regional Tuscan collections, and the standard Sano di Pietro Madonna composition — the Virgin in three-quarter view holding the standing Christ Child against tooled gold — became one of the most-reproduced fifteenth-century Sienese devotional images.$BIO$,
  bio_sources = $JSON$[
    {"title":"Sano di Pietro — Wikipedia","url":"https://en.wikipedia.org/wiki/Sano_di_Pietro","type":"wikipedia"},
    {"title":"Sano di Pietro — Pinacoteca Nazionale di Siena","url":"https://pinacotecanazionale.siena.it/","type":"museum"},
    {"title":"Sano di Pietro — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Sano+di+Pietro","type":"museum"}
  ]$JSON$::jsonb
where slug = 'sano-di-pietro-ansano-di-pietro-di-mencio';

-- ─── 110. Sassetta ─────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Sassetta — born Stefano di Giovanni di Consolo in or near Siena around 1392 — was the leading Sienese painter of the early fifteenth century and the principal stylistic bridge between the late Sienese Trecento tradition descending from Duccio, Simone Martini, and the Lorenzetti brothers and the new Quattrocento International Gothic and early Renaissance vocabulary that arrived in Siena through traveling Northern artists, the Florentine workshops of Lorenzo Monaco and Gentile da Fabriano, and the new Sienese-Florentine artistic exchange of the 1420s. Trained in Siena in the late Trecento workshop tradition, and active in Siena, Cortona, and the smaller Sienese hill towns for his entire career, he died in Siena in 1450 — possibly from a chill caught while frescoing the Porta Romana of Siena.

His Christian religious work is concentrated in altarpieces, polyptych panels, and small predella narratives in his characteristic combination of Sienese Trecento decorative refinement and the new Quattrocento interest in narrative incident and legible figural drawing. The Borgo San Sepolcro Altarpiece (1437–1444 — a vast double-sided polyptych originally painted for the church of San Francesco in Borgo San Sepolcro, now dispersed across the Louvre, the Berlin Gemäldegalerie, the National Gallery in London, the Boston Gardner Museum, and the Vatican Pinacoteca, with several individual predella panels still in private collections), the Madonna of the Snow (Florence, Contini Bonacossi collection), the Cortona Polyptych, and the small predella narratives of the lives of Saint Anthony Abbot and Saint Francis fill the painted corpus.

His personal style is the unmistakable late-Sienese late-medieval-into-Renaissance signature: jewel-bright color, tooled gold, slightly elongated figural proportions, calm sweet faces, and an unusual narrative tenderness in the small predella scenes that the Sienese Trecento tradition had largely passed to him through Simone Martini's example. His workshop trained the next generation of Sienese painters — Sano di Pietro above all — and shaped the Sienese mid-fifteenth-century pictorial vocabulary directly.

He was a contemporary of Masaccio and Filippo Lippi in Florence — exact contemporary in age and active across the same years — but represented the deliberately conservative Sienese alternative to the new Florentine pictorial revolution. The twentieth century rediscovered Sassetta as one of the supreme Sienese Quattrocento masters; the modern critical assessment treats him as a quietly major painter whose work was overshadowed in his own lifetime by the louder Florentine generation.$BIO$,
  bio_sources = $JSON$[
    {"title":"Sassetta — Wikipedia","url":"https://en.wikipedia.org/wiki/Sassetta","type":"wikipedia"},
    {"title":"Sassetta — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Sassetta","type":"britannica"},
    {"title":"Sassetta — National Gallery, London","url":"https://www.nationalgallery.org.uk/artists/sassetta","type":"museum"}
  ]$JSON$::jsonb
where slug = 'sassetta-stefano-di-giovanni';

-- ─── 111. Pietro Lorenzetti ────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Pietro Lorenzetti was, with his younger brother Ambrogio Lorenzetti, one of the two leading Sienese painters of the second quarter of the fourteenth century — the generation that came of age between Duccio's death in 1319 and the Black Death of 1348 (in which both brothers may have died). Born in Siena around 1280 (or perhaps a few years later), trained almost certainly in Duccio's late workshop and influenced by the more weighty figural drawing of his Florentine contemporary Giotto, he was active in Siena, Assisi (where he painted the great Passion fresco cycle in the lower church of San Francesco), and the smaller Sienese hill towns for the rest of his career. He died around 1348, almost certainly in the Black Death.

His Christian religious work is concentrated in altarpieces and fresco cycles in his characteristic combination of Sienese decorative refinement and Giottesque figural weight. The Passion cycle in the lower church of the Basilica of San Francesco in Assisi (c. 1320–1330) — frescoes covering the entire south transept of the lower church with scenes from the entry into Jerusalem through the Resurrection, including the famous Deposition with its long diagonal of Christ's body — is widely held to be his masterpiece and one of the supreme Italian Trecento fresco cycles outside Padua. The Birth of the Virgin altarpiece (Siena Cathedral, 1342 — now in the Museo dell'Opera del Duomo of Siena, his last documented work) and the polyptych panels in the Pinacoteca Nazionale of Siena round out the painted corpus.

His personal style is unmistakable: weighted figures derived from Giotto's Florentine example, but rendered in the jewel-bright Sienese chromatic palette with the Sienese workshop's careful attention to narrative tenderness and decorative pattern. The Assisi Deposition in particular — with the body of Christ supported in a long diagonal across the foreground while the Virgin and the Magdalene clutch the head and feet, and John the Evangelist gestures in grief — became one of the most reproduced and most-quoted compositions in subsequent Italian Trecento and Quattrocento religious painting.

His brother Ambrogio Lorenzetti — slightly younger, slightly more theoretically ambitious — produced the great Allegories of Good and Bad Government in the Palazzo Pubblico of Siena (1338–1339) almost certainly in close consultation with Pietro. The two brothers together represent the supreme Sienese pictorial achievement of the generation between Duccio and the catastrophe of 1348.$BIO$,
  bio_sources = $JSON$[
    {"title":"Pietro Lorenzetti — Wikipedia","url":"https://en.wikipedia.org/wiki/Pietro_Lorenzetti","type":"wikipedia"},
    {"title":"Pietro Lorenzetti — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Pietro-Lorenzetti","type":"britannica"},
    {"title":"Pietro Lorenzetti — Pinacoteca Nazionale di Siena","url":"https://pinacotecanazionale.siena.it/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'pietro-lorenzetti';

-- ─── 112. Ambrogio Lorenzetti ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Ambrogio Lorenzetti was, with his older brother Pietro Lorenzetti, one of the two leading Sienese painters of the second quarter of the fourteenth century. Born in Siena around 1290, trained almost certainly in his older brother's workshop and possibly briefly in Florence (where he is documented working in the early 1320s), and active in Siena and the smaller Sienese hill towns for the rest of his career, he died in Siena in 1348 in the Black Death epidemic that killed both brothers along with much of their generation.

His central monument is the great fresco cycle of the Allegories of Good and Bad Government in the Sala dei Nove of the Palazzo Pubblico in Siena, painted between 1338 and 1339 for the Council of Nine that governed the Sienese republic. The cycle covers three walls of the council chamber: the Allegory of Good Government on the central wall (with the personification of the Common Good enthroned and surrounded by the personified Virtues), the Effects of Good Government in the City and the Country on the right wall (a panoramic view of fourteenth-century Siena and its contado at peace and prosperity), and the Allegory and Effects of Bad Government on the left wall (with the personification of Tyranny enthroned over a city in ruins). The cycle is widely held to be the supreme example of late-medieval Italian secular fresco painting and one of the most studied documents of fourteenth-century European political theory in painted form.

His Christian religious work is concentrated in altarpieces and fresco cycles for the Sienese churches. The Maestà altarpiece for the church of Sant'Agostino in Siena (now in the Pinacoteca Nazionale), the Annunciation altarpiece for the Sienese state office of the Biccherna (1344, Pinacoteca Nazionale), the Madonna del Latte (Pinacoteca Nazionale), and the small Madonnas and devotional panels in workshop variants fill the religious painted corpus.

His personal style is the unmistakable late-Sienese-Trecento signature inflected by his particular interest in legible architectural and landscape space — the panoramic view of Siena in the Effects of Good Government is one of the earliest sustained European treatments of urban portraiture as a serious painted subject. He died in Siena in 1348 along with his brother Pietro and most of their workshop in the catastrophic plague that ended the great Sienese Trecento school.$BIO$,
  bio_sources = $JSON$[
    {"title":"Ambrogio Lorenzetti — Wikipedia","url":"https://en.wikipedia.org/wiki/Ambrogio_Lorenzetti","type":"wikipedia"},
    {"title":"Ambrogio Lorenzetti — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Ambrogio-Lorenzetti","type":"britannica"},
    {"title":"Palazzo Pubblico — Comune di Siena","url":"https://www.comune.siena.it/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'ambrogio-lorenzetti';

-- ─── 113. Simone Martini ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Simone Martini was the leading Sienese painter of the generation immediately after Duccio di Buoninsegna and the supreme stylist of the Sienese late-medieval-into-Renaissance tradition. Born in Siena around 1284, almost certainly trained in Duccio's late workshop, and active in Siena, Naples, Pisa, Orvieto, Assisi, and finally Avignon (where he followed the Avignon papal court from 1336 onward), he produced altarpieces and fresco cycles across central and southern Italy and Provence for almost forty years. He died in Avignon in 1344, having become the favorite painter of the great Italian humanist poet Petrarch (who lived in Avignon during the same years).

His Christian religious work is concentrated in altarpieces and fresco cycles in his characteristic combination of Sienese decorative refinement and an unusually elegant figural elongation that anticipated the International Gothic style of the next generation. The Maestà fresco in the Palazzo Pubblico of Siena (1315 — Simone's first major commission, the Virgin enthroned in glory among angels and saints painted on the wall of the Council chamber facing the door), the Annunciation altarpiece (Uffizi, 1333 — painted in collaboration with his brother-in-law Lippo Memmi for the Cathedral of Siena, perhaps the supreme Sienese altarpiece of the entire fourteenth century), the Saint Martin Chapel frescoes in the lower church of the Basilica of San Francesco in Assisi (c. 1322–1326), the Robert of Anjou Crowned by Saint Louis altarpiece (Capodimonte, 1317), and the late Avignon work for Cardinal Stefaneschi anchor the painted reputation.

His personal style is unmistakable — figures of exceptional elegance and proportion, exquisite jewel-bright color, careful attention to embroidered textiles and intricate decorative pattern, and a particular tenderness in the Marian and devotional subjects that defined the Sienese pictorial tradition. The Uffizi Annunciation in particular — Mary recoiling slightly from Gabriel's greeting, the Latin words of the angel's salutation rendered in tooled gold across the empty space between the two figures, the slim attendant saints in the side panels — is one of the supreme statements of Sienese Trecento painting and one of the most reproduced images in the entire history of Italian medieval art.

He died in Avignon in 1344 having become a major figure of the early Italian humanist circle around Petrarch, who wrote two sonnets in his honor in the Canzoniere.$BIO$,
  bio_sources = $JSON$[
    {"title":"Simone Martini — Wikipedia","url":"https://en.wikipedia.org/wiki/Simone_Martini","type":"wikipedia"},
    {"title":"Simone Martini — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Simone-Martini","type":"britannica"},
    {"title":"Simone Martini — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=Simone+Martini","type":"museum"}
  ]$JSON$::jsonb
where slug = 'simone-martini';

-- ─── 114. Lorenzo Monaco ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Lorenzo Monaco — born Piero di Giovanni in Siena around 1370 and renamed Lorenzo when he took monastic vows in the Camaldolese order around 1391 — was a leading Florentine painter of the early fifteenth century and the principal Florentine illuminator of his generation. Trained almost certainly in the late Florentine workshop of Agnolo Gaddi (and possibly briefly in his native Siena before moving to Florence), he became a Camaldolese friar at the convent of Santa Maria degli Angeli in Florence, where he ran the convent's painting and manuscript-illumination workshop for the rest of his life. He died in Florence around 1424.

His Christian religious work is concentrated in altarpieces, predella panels, and illuminated manuscripts in his characteristic combination of late-Trecento Florentine narrative density and the new International Gothic figural elegance and chromatic refinement. The Coronation of the Virgin altarpiece (Uffizi, 1414 — painted for the high altar of his own Camaldolese convent of Santa Maria degli Angeli), the Adoration of the Magi altarpiece (Uffizi, c. 1422 — completed by Fra Angelico after Lorenzo Monaco's death), the Annunciation altarpiece in the Bartolini Chapel of Santa Trinita in Florence (c. 1422 — the chapel for which Fra Angelico would later complete the cycle), the Pietà altarpiece in the Pinacoteca Vaticana, and dozens of small predella panels and individual saints across the major museums anchor the painted corpus.

His illuminated manuscripts — choir books and antiphonals produced for the Camaldolese convent and for other Florentine ecclesiastical patrons — are widely held to be among the supreme Florentine Quattrocento illuminations. The vast antiphonal volumes still in the Laurentian Library and the Bargello in Florence, with their large historiated initials and elaborate decorative borders, are the principal record of his manuscript work.

His personal style — slim elongated figures in jewel-bright color, careful decorative pattern, tooled-gold backgrounds, and a delicate emotional restraint — combined the late Florentine Trecento tradition descending from Agnolo Gaddi with the new International Gothic refinement that defined European pictorial fashion in the years around 1400. He was the principal teacher of Fra Angelico, who entered the Camaldolese workshop as a young friar around 1420 and absorbed Lorenzo Monaco's manner directly.$BIO$,
  bio_sources = $JSON$[
    {"title":"Lorenzo Monaco — Wikipedia","url":"https://en.wikipedia.org/wiki/Lorenzo_Monaco","type":"wikipedia"},
    {"title":"Lorenzo Monaco — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Lorenzo-Monaco","type":"britannica"},
    {"title":"Lorenzo Monaco — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=Lorenzo+Monaco","type":"museum"}
  ]$JSON$::jsonb
where slug = 'lorenzo-monaco-piero-di-giovanni';

-- ─── 115. Fra Bartolomeo ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Fra Bartolomeo — born Bartolomeo di Paolo del Fattorino in Florence in 1472 — was a leading Florentine painter of the High Renaissance and the principal Dominican-friar painter of his generation. Trained in Florence in the workshop of Cosimo Rosselli alongside his lifelong friend and frequent collaborator Mariotto Albertinelli, he was deeply influenced by the apocalyptic preaching of the Dominican friar Girolamo Savonarola in the 1490s and entered the Dominican order at the convent of San Marco in 1500, two years after Savonarola's execution by hanging and burning in the Piazza della Signoria. He spent the rest of his life as Fra Bartolomeo at San Marco and died in Florence in 1517.

His Christian religious work is concentrated in altarpieces and devotional panels in his characteristic combination of Florentine High Renaissance compositional discipline and a deep Dominican-Savonarolan emotional gravity. The Vision of Saint Bernard altarpiece (Galleria dell'Accademia, Florence, c. 1504), the Madonna and Child with Saints (Pitti, 1512), the Madonna della Misericordia (Lucca, 1515), the Risen Christ with the Four Evangelists (Pitti, 1516), the Pietà (Pitti, 1515 — left unfinished at his death and completed by Fra Paolino), and the Marriage of Saint Catherine altarpieces (Louvre and Pitti) anchor the painted corpus.

His personal style — calm, deliberate, with carefully balanced compositional symmetry and a soft sfumato modeling derived in part from Leonardo da Vinci (whom he met during Leonardo's second Florentine residence) and in part from Raphael (with whom he formed a close personal and stylistic friendship during Raphael's Florentine years of 1504–1508) — combined the Florentine High Renaissance figural discipline with the Dominican-Savonarolan preference for clear, devotionally accessible religious imagery.

He visited Venice in 1508, where he absorbed the warm Venetian color of Giovanni Bellini and the early Titian; the late Florentine altarpieces of his last decade show the Venetian chromatic influence on his characteristically calm Florentine compositions. He was buried in his Dominican convent of San Marco — the same convent in which Fra Angelico had lived and worked seventy years earlier and in which Savonarola had been confined before his execution.$BIO$,
  bio_sources = $JSON$[
    {"title":"Fra Bartolomeo — Wikipedia","url":"https://en.wikipedia.org/wiki/Fra_Bartolomeo","type":"wikipedia"},
    {"title":"Fra Bartolomeo — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Fra-Bartolomeo","type":"britannica"},
    {"title":"Fra Bartolomeo — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=Fra+Bartolomeo","type":"museum"}
  ]$JSON$::jsonb
where slug = 'fra-bartolomeo-bartolomeo-di-paolo-del-fattorino';

-- ─── 116. Antonio Vivarini ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Antonio Vivarini was the founding patriarch of the Vivarini dynasty — the second great Venetian painting family of the fifteenth century after the Bellinis — and the leading Venetian painter of the generation immediately before Giovanni Bellini transformed the city's pictorial tradition. Born in Murano (the small island in the Venetian lagoon famous for its glass production) around 1418, trained in his native Murano workshop, and active in Venice and Padua for his entire career, he ran the leading Venetian workshop of his early-to-mid career in close partnership with his German-born brother-in-law Giovanni d'Alemagna and later with his younger brother Bartolomeo Vivarini. He died in Venice around 1480.

His Christian religious work is concentrated in altarpieces and large polyptychs in the characteristic Venetian late-Gothic-into-Renaissance manner — figures in elongated proportions, tooled gold backgrounds, jewel-bright color, and the carved-and-gilded architectural altarpiece structures typical of the Venetian Quattrocento ecclesiastical commission. The polyptych for the church of Santa Sabina in Venice (1443–1445, now in the Cini Foundation), the Coronation of the Virgin altarpiece (San Pantalon in Venice), the Madonna of Humility with Saints (multiple workshop variants in the Pinacoteca Nazionale of Bologna and other Italian collections), the Saint Anthony Abbot Polyptych (Vatican), and the great altarpieces produced in collaboration with Giovanni d'Alemagna for the Eremitani Church in Padua (1448 — the chapel where the young Andrea Mantegna would shortly afterward begin his own work) anchor the painted corpus.

His personal style is the unmistakable mid-fifteenth-century Venetian late-Gothic signature, slightly slower to absorb the new Renaissance vocabulary than the contemporary Florentine workshops but with a particular jewel-bright chromatic warmth and a careful narrative restraint that defined the Murano-Venetian painting tradition. The collaboration with his brother-in-law Giovanni d'Alemagna gave the workshop its distinctive Italo-German character; the partnership ended when Giovanni d'Alemagna died in 1450.

His son Alvise Vivarini and his younger brother Bartolomeo Vivarini continued the workshop into the next generation; the family workshop ran more or less continuously through the second half of the fifteenth century before being eclipsed by the supreme rise of the Bellini workshop and its Giorgione-and-Titian succession in the early sixteenth century.$BIO$,
  bio_sources = $JSON$[
    {"title":"Antonio Vivarini — Wikipedia","url":"https://en.wikipedia.org/wiki/Antonio_Vivarini","type":"wikipedia"},
    {"title":"Vivarini family — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Vivarini-family","type":"britannica"},
    {"title":"Vivarini — Gallerie dell'Accademia Venezia","url":"https://www.gallerieaccademia.it/en","type":"museum"}
  ]$JSON$::jsonb
where slug = 'antonio-vivarini';

-- ─── 117. Bartolomeo Vivarini ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Bartolomeo Vivarini was the younger brother of Antonio Vivarini and the principal continuer of the Vivarini Murano-Venetian workshop after Antonio's death and after the dissolution of Antonio's earlier partnership with their German brother-in-law Giovanni d'Alemagna. Born in Murano around 1432, trained in his older brother's workshop alongside the brief partnership with Giovanni d'Alemagna, and active in Venice for his entire career, he ran the Vivarini workshop in close partnership with his nephew Alvise Vivarini in the later decades of his career. He died in Venice around 1499.

His Christian religious work is concentrated in altarpieces and large polyptychs that combined the late-Gothic Venetian decorative tradition with a slightly more legible figural drawing absorbed from his early exposure to Andrea Mantegna's Paduan workshop in the 1450s (the Eremitani frescoes in Padua, where Bartolomeo briefly worked alongside Mantegna and Antonio Vivarini, were the principal channel for Mantegna's transformative influence on the Vivarini workshop). The polyptych for the church of San Giovanni in Bragora in Venice (1478), the Madonna and Saints altarpieces in the Frari church and in San Giovanni e Paolo in Venice, the Saint Mark Polyptych (1474), and the polyptych for the church of Santa Maria Formosa anchor the painted corpus.

His personal style — combining the mid-fifteenth-century Venetian late-Gothic chromatic warmth with the more weighty Mantegnesque figural drawing he had absorbed in Padua — gave him a transitional position in the Venetian Quattrocento tradition between the older Vivarini-Murano workshop manner and the new Renaissance pictorial vocabulary that Giovanni Bellini was developing in close stylistic dialogue with the Vivarini workshop in the same Venetian decades. The two workshops — Bellini and Vivarini — were the two leading Venetian painting establishments of the second half of the fifteenth century, and the comparison between their respective polyptychs is the principal documentary record of mid-Quattrocento Venetian pictorial practice.

His nephew Alvise Vivarini continued the workshop after Bartolomeo's death; the Vivarini tradition was eventually absorbed into the broader Venetian sixteenth-century school as the Bellini workshop and its Giorgione-and-Titian succession came to dominate the city's pictorial production.$BIO$,
  bio_sources = $JSON$[
    {"title":"Bartolomeo Vivarini — Wikipedia","url":"https://en.wikipedia.org/wiki/Bartolomeo_Vivarini","type":"wikipedia"},
    {"title":"Bartolomeo Vivarini — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Bartolomeo+Vivarini","type":"museum"},
    {"title":"Bartolomeo Vivarini — Gallerie dell'Accademia Venezia","url":"https://www.gallerieaccademia.it/en","type":"museum"}
  ]$JSON$::jsonb
where slug = 'bartolomeo-vivarini';

-- ─── 118. Maerten de Vos ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Maerten de Vos was the leading Antwerp painter and designer of religious print compositions in the second half of the sixteenth century — the central figure of the recovery of Antwerp Catholic painting after the Iconoclastic Fury of 1566 and the consolidation of Spanish-Catholic rule under the late Habsburg Counter-Reformation. Born in Antwerp around 1532 to the painter Pieter de Vos the Elder, trained in his father's workshop and then in Italy in the workshop of Tintoretto in Venice during a five-year sojourn between 1552 and 1558, and active in Antwerp for the rest of his life, he ran the leading Antwerp Catholic painting workshop in the 1570s, 1580s, and 1590s. He died in Antwerp in 1603.

His Christian religious work is concentrated in altarpieces for the Antwerp Catholic churches restored after the iconoclastic destruction of 1566, in the Antwerp confraternal commissions, and (above all) in the enormous body of designs he produced for engraving and circulation through the Antwerp publishing houses of Hieronymus Cock and his successors. Hundreds of his Old and New Testament narrative compositions — engraved by the Wierix brothers, the Sadeler family, the Collaert workshop, and the broader Antwerp engraving establishment — circulated as small-format devotional prints and as plates in illustrated Bibles throughout the Catholic European publishing market for over a century.

His painted altarpieces include the Saint Luke Painting the Virgin (Antwerp, 1602), the Crucifixion altarpieces in several Antwerp parish churches, the Marriage at Cana, the Last Supper compositions, and the Saint Paul on Malta (Antwerp Cathedral). The chromatic palette and the late-Mannerist figural elongation reflect his Venetian study trip in the 1550s; the dense narrative composition and careful attention to biblical-historical detail reflect the post-Tridentine Antwerp Counter-Reformation visual program that he and his Antwerp contemporaries (Crispijn van den Broeck, Ambrosius Francken, Jan Snellinck) developed in close partnership with the Jesuits and the recently reformed Antwerp parish clergy.

The combined production — painted altarpieces in Antwerp churches and engraved compositions distributed across the Catholic publishing world — made de Vos one of the most consequential late-sixteenth-century Northern European Catholic religious image-makers. The Antwerp Mannerist style that culminated in his work was shortly afterward transformed by the return of Rubens from Italy in 1608.$BIO$,
  bio_sources = $JSON$[
    {"title":"Maerten de Vos — Wikipedia","url":"https://en.wikipedia.org/wiki/Maerten_de_Vos","type":"wikipedia"},
    {"title":"Maerten de Vos — Royal Museums of Fine Arts of Belgium","url":"https://www.fine-arts-museum.be/en","type":"museum"},
    {"title":"Maerten de Vos — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/maerten-de-vos","type":"museum"}
  ]$JSON$::jsonb
where slug = 'maerten-de-vos';

-- ─── 119. Jan Brueghel the Elder ───────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Jan Brueghel the Elder was the second son of Pieter Bruegel the Elder and one of the leading Antwerp painters of the early seventeenth century. Born in Brussels in 1568, only a year before his father's death, raised by his maternal grandmother the Antwerp painter Mayken Verhulst, and trained first in Antwerp and then in Italy (where he traveled across the peninsula in 1589–1596 and worked at the Roman court of Cardinal Federico Borromeo, who became his lifelong patron and friend), he settled in Antwerp on his return and worked there for the rest of his life. He died in Antwerp in 1625, in the cholera epidemic that swept the city.

His specialty was small-format paintings of unprecedented detail — flowers, fruit, birds, paradisal landscapes filled with animals, allegories of the senses, and Garden of Eden scenes — that earned him the nicknames Velvet Brueghel (for the soft sheen of his paint surface) and Flower Brueghel (for his floral specialties). His Christian religious work is concentrated in the Edenic landscapes — Adam and Eve in the Garden of Eden, the Animals Entering the Ark, the Earthly Paradise — in which the small biblical figures are dwarfed by panoramic landscapes filled with extraordinarily detailed observation of dozens of plant and animal species. The Adam and Eve in Paradise (Mauritshuis, The Hague, c. 1615 — painted in close collaboration with Peter Paul Rubens, who supplied the Adam and Eve figures while Brueghel painted the Edenic animal-and-plant landscape) is the supreme statement of this collaborative Antwerp paradisal genre and one of the most reproduced single religious paintings of the early seventeenth century.

He worked in close partnership with Peter Paul Rubens — the two were intimate personal friends as well as frequent collaborators — and their joint paintings (in which Rubens supplied the figures and Brueghel supplied the landscape, animals, and floral detail) form one of the most distinctive collaborative bodies of work in the entire history of European painting. The Garden of Eden compositions, the Cimon and Iphigenia, the Sense of Smell, and several smaller religious-allegorical pieces in the Prado and the Mauritshuis are the principal surviving collaborative paintings.

His sons Jan Brueghel the Younger and Ambrosius Brueghel continued the workshop after his death; the Brueghel-name workshop continued issuing detailed botanical-and-paradisal compositions for several generations.$BIO$,
  bio_sources = $JSON$[
    {"title":"Jan Brueghel the Elder — Wikipedia","url":"https://en.wikipedia.org/wiki/Jan_Brueghel_the_Elder","type":"wikipedia"},
    {"title":"Jan Brueghel the Elder — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Jan-Brueghel-the-Elder","type":"britannica"},
    {"title":"Jan Brueghel the Elder — Mauritshuis, The Hague","url":"https://www.mauritshuis.nl/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'jan-brueghel-the-elder';

-- ─── 120. Lucas Cranach the Younger ────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Lucas Cranach the Younger was the son and principal heir of Lucas Cranach the Elder, the great Wittenberg court painter and visual partner of the Lutheran Reformation. Born in Wittenberg in 1515 to Lucas the Elder and Barbara Brengbier, trained in his father's vast workshop from his youth, and serving as principal workshop assistant to his father from his late teens, he inherited the workshop on his father's death in 1553 and continued it almost without break until his own death in Wittenberg in 1586.

His Christian religious work is concentrated in altarpieces and devotional panels produced in the standard Wittenberg-Cranach workshop format inherited from his father. The Last Supper altarpiece in the Town Church of Wittenberg (1565 — the predella shows Luther preaching from a pulpit to a Lutheran congregation, with the supper scene above and the central panel showing the institution of the Lord's Supper), the Crucifixion altarpieces in numerous Saxon and Thuringian Lutheran churches, the Adam and Eve compositions in workshop variants of his father's earlier types, the Christ Blessing the Children compositions (a particular Lutheran devotional preference for the small intimate Gospel-narrative subject), and the great series of Lutheran electoral and theological portraits (Luther, Melanchthon, the Saxon electors, the Wittenberg University faculty) anchor the painted corpus.

His personal style is closely modeled on his father's late workshop manner — figures in slim elongated proportions, careful chromatic discipline, soft sfumato modeling, and a deliberate visual emphasis on Lutheran theological clarity — and the workshop hand of father and son is often hard to distinguish on individual surviving panels. The supreme Cranach Lutheran iconographic types — the Adam and Eve, the Crucifixion with the Lutheran reformer at the foot of the cross, the Law and Grace allegories — were created by the elder Cranach but largely propagated through the European Reformation publishing market by the younger.

He served as mayor of Wittenberg in his late years and was a wealthy and respected citizen of the city through the consolidation of Lutheran political and religious authority across Saxony in the second half of the sixteenth century. He is buried in the Wittenberg Town Church beside his father.$BIO$,
  bio_sources = $JSON$[
    {"title":"Lucas Cranach the Younger — Wikipedia","url":"https://en.wikipedia.org/wiki/Lucas_Cranach_the_Younger","type":"wikipedia"},
    {"title":"Lucas Cranach the Younger — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Lucas-Cranach-the-Younger","type":"britannica"},
    {"title":"Cranach — Stadtkirche Wittenberg","url":"https://www.stadtkirchengemeinde-wittenberg.de/","type":"museum"}
  ]$JSON$::jsonb
where slug in ('lucas-cranach-the-younger', 'lucas-cranach-the-younger-and-workshop');

-- ─── 121. Vincenzo Foppa ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Vincenzo Foppa was the leading Lombard painter of the late fifteenth century and the principal stylistic ancestor of the Lombard pictorial tradition that ran through Bergognone and Bramantino into the early sixteenth-century Lombard-Leonardesque school of Boltraffio, Solario, and the early Andrea Solario. Born in Brescia around 1430, trained almost certainly in Padua in the orbit of Squarcione (the same Paduan workshop that produced Andrea Mantegna), and active in Brescia, Pavia, and Milan for his entire career, he was the principal painter at the Sforza ducal court in Milan in the 1460s and 1470s. He died in Brescia in 1515.

His Christian religious work is concentrated in altarpieces and fresco cycles in his characteristic combination of Paduan figural discipline (descending from Squarcione and through Mantegna) and the soft chromatic warmth that defined the Lombard pictorial tradition. The Virgin and Child with Two Angels (Brera, 1480), the Polyptych of San Cristoforo in Vigevano, the Saint Sebastian altarpiece (Brera), the Adoration of the Magi (London), and the great series of frescoes in the Portinari Chapel of Sant'Eustorgio in Milan (1468 — depicting the life of the Dominican Saint Peter Martyr, the cycle that secured Foppa's mature reputation in the Sforza ducal capital) anchor the painted corpus.

His personal style — combining sculptural figural drawing with the soft warm Lombard chromatic palette and an unusual atmospheric handling of cool grey-green light — was the principal late-Quattrocento Lombard pictorial signature and shaped the entire next generation of Lombard painters who would absorb Leonardo da Vinci's Milanese workshop manner in the early sixteenth century. Leonardo arrived in Milan in 1482 — when Foppa was at the height of his Sforza-court career — and the two painters certainly knew of each other, though no documented direct contact between them survives.

He returned to Brescia in his late years and produced his final altarpieces for the Brescian churches and confraternities. His son Stefano Foppa briefly continued the workshop after his death; the major Lombard pictorial inheritance, however, passed not through his immediate family but through the next Milanese generation of Leonardesques.$BIO$,
  bio_sources = $JSON$[
    {"title":"Vincenzo Foppa — Wikipedia","url":"https://en.wikipedia.org/wiki/Vincenzo_Foppa","type":"wikipedia"},
    {"title":"Vincenzo Foppa — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Vincenzo-Foppa","type":"britannica"},
    {"title":"Vincenzo Foppa — Pinacoteca di Brera","url":"https://pinacotecabrera.org/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'vincenzo-foppa';

-- ─── 122. Gentile da Fabriano ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Gentile da Fabriano (Gentile di Niccolò di Giovanni di Massio) was the supreme Italian master of the International Gothic style that defined European pictorial fashion in the first quarter of the fifteenth century. Born in Fabriano in the Marche around 1370, trained almost certainly in his native Marche, and active across Italy for the next thirty years — Venice (where he painted in the Doge's Palace and where Jacopo Bellini studied with him), Brescia, Florence, Siena, and finally Rome — he died in Rome in 1427.

His Christian religious work is concentrated in altarpieces and devotional panels in the unmistakable late-Gothic-into-Renaissance manner — figures of unusual elegance and elaborate Burgundian-style courtly costume rendered in jewel-bright color and tooled gold, set in pictorial spaces that combine the new Renaissance interest in legible perspective with the older medieval love of decorative pattern and elaborate detail. The Adoration of the Magi altarpiece (Uffizi, 1423 — painted for the Florentine merchant Palla Strozzi for the family chapel in the church of Santa Trinita in Florence, and widely held to be Gentile's masterpiece and one of the supreme statements of Italian International Gothic painting) is the canonical Gentile work. The composition shows the three Magi and their elaborate retinue arriving at the small dwelling at Bethlehem in a long horizontal procession of horses, exotic animals, attendants, and gifts; the predella below shows the Nativity, the Flight into Egypt, and the Presentation in the Temple in three small narrative panels of great refinement.

His other major works include the Quaratesi Polyptych (1425, dispersed across the Vatican Pinacoteca, the Uffizi, the National Gallery of Art in Washington, and the Royal Collection at Hampton Court), the Madonna of the Diamond (Berlin), the late Roman frescoes in San Giovanni in Laterano (1427, lost), and the Madonna and Child compositions in workshop variants now in the Frick Collection and other major American museums.

His Florentine sojourn of 1422–1425 was particularly transformative. The young Florentine painters of the new Renaissance generation — Masaccio, Fra Angelico, Filippo Lippi — encountered the Gentile manner directly at the moment of the Strozzi Adoration's installation in Santa Trinita; Gentile's combination of careful observation with elaborate decorative refinement gave the next Florentine generation a model that they would refine, simplify, and redirect into the new pictorial language of the Florentine Renaissance.$BIO$,
  bio_sources = $JSON$[
    {"title":"Gentile da Fabriano — Wikipedia","url":"https://en.wikipedia.org/wiki/Gentile_da_Fabriano","type":"wikipedia"},
    {"title":"Gentile da Fabriano — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Gentile-da-Fabriano","type":"britannica"},
    {"title":"Gentile da Fabriano — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks/adoration-of-the-magi","type":"museum"}
  ]$JSON$::jsonb
where slug = 'gentile-da-fabriano-gentile-di-niccol-di-giovanni-di-massio';

-- ─── 123. Daniele da Volterra ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Daniele da Volterra (Daniele Ricciarelli) was a Tuscan-born painter and sculptor and the principal pupil and confidant of Michelangelo in the master's late Roman years. Born in Volterra in 1509, trained in Siena in the workshops of Sodoma and Baldassare Peruzzi before moving to Rome around 1535, he became one of Michelangelo's closest assistants and collaborators in the late 1540s and 1550s and continued working in Rome until his death there in 1566.

His Christian religious work is concentrated in altarpieces, fresco cycles, and small devotional panels in his characteristic combination of Sienese Mannerist figural drawing and the late-Michelangelesque sculptural figural drama he absorbed during his close association with the master. The Deposition fresco in the Trinità dei Monti in Rome (1541 — painted for the Orsini Chapel and widely held to be his masterpiece, with the body of Christ being lowered from the cross in a complex multi-figure composition derived directly from Michelangelo's preparatory drawings), the David and Goliath panel (Louvre and Bargello — a double-sided panel with David on the front and Goliath on the back, painted around 1555), the Massacre of the Innocents (Uffizi), and the late altarpieces and devotional panels for Roman patrons fill the painted corpus.

He earned a place in art history beyond his own painted output through a single piece of pictorial editing: in 1564, immediately after Michelangelo's death, he was commissioned by Pope Pius IV to paint loincloths and drapery over the most exposed nude figures in Michelangelo's Last Judgment in the Sistine Chapel, in response to the post-Council-of-Trent objections to the fresco's nudity. The campaign earned Daniele the nickname Il Braghettone (the breeches-maker), a label that has somewhat unfairly overshadowed his own significant painted accomplishment in subsequent art-historical writing.

He was also a major sculptor — the bronze portrait bust of Michelangelo (1564, Bargello and Louvre versions), commissioned and made shortly after the master's death — is one of the supreme High Renaissance Italian portrait sculptures. He died in Rome in 1566 and was buried in the church of Santi Apostoli.$BIO$,
  bio_sources = $JSON$[
    {"title":"Daniele da Volterra — Wikipedia","url":"https://en.wikipedia.org/wiki/Daniele_da_Volterra","type":"wikipedia"},
    {"title":"Daniele da Volterra — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Daniele-da-Volterra","type":"britannica"},
    {"title":"Daniele da Volterra — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=Daniele","type":"museum"}
  ]$JSON$::jsonb
where slug = 'daniele-da-volterra-daniele-ricciarelli';

-- ─── 124. Gerrit van Honthorst ─────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Gerrit van Honthorst — called Gherardo delle Notti (Gerard of the Nights) by his Italian patrons for his specialty in candlelit nocturnal scenes — was a leading Dutch painter of the seventeenth century and the principal Utrecht-based exponent of the Caravaggesque manner that a small group of Utrecht painters had absorbed during their study trips to Rome in the 1610s. Born in Utrecht in 1592, trained in his native city in the workshop of Abraham Bloemaert, and traveling to Italy around 1615 (where he worked for some years in Rome under the patronage of Vincenzo Giustiniani — Caravaggio's principal Roman patron — and absorbed the Caravaggesque chiaroscuro at the source), he returned to Utrecht around 1620 and worked there for the rest of his life with intermittent court appointments in England (1628 under Charles I), Denmark (1635–1638), and the Hague (1637 onward). He died in Utrecht in 1656.

His Christian religious work is concentrated in candlelit nocturnal scenes — the Adoration of the Shepherds, the Adoration of the Christ Child, the Christ before the High Priest, the Liberation of Saint Peter — in which the dramatic single-source candlelight defines the entire pictorial composition. The Adoration of the Shepherds (Wallraf-Richartz Museum, Cologne, c. 1622), the Christ before the High Priest (London, c. 1617), the Beheading of Saint John the Baptist (Santa Maria della Scala, Rome, 1618), and the Christ Crowned with Thorns (Madrid) anchor the religious painted corpus.

His Italian-period altarpieces in particular — produced for Roman churches and aristocratic patrons during his Italian residence between roughly 1615 and 1620 — are among the supreme Northern Caravaggesque achievements and were widely admired by his Roman contemporaries. The Christ before the High Priest in London is widely held to be one of the finest Caravaggesque candlelit scenes by any Northern artist.

After his return to the Netherlands he turned increasingly toward portraiture for the Dutch and English courts, producing a long sequence of state portraits that established his reputation as the leading Northern Caravaggesque-into-court-portraiture transitional figure. His Utrecht workshop trained the next generation of Dutch painters who would absorb the Caravaggesque manner — including, briefly, the young Rembrandt's older Leiden contemporary Jan Lievens.$BIO$,
  bio_sources = $JSON$[
    {"title":"Gerard van Honthorst — Wikipedia","url":"https://en.wikipedia.org/wiki/Gerard_van_Honthorst","type":"wikipedia"},
    {"title":"Gerard van Honthorst — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Gerard-van-Honthorst","type":"britannica"},
    {"title":"Gerrit van Honthorst — Centraal Museum Utrecht","url":"https://www.centraalmuseum.nl/en","type":"museum"}
  ]$JSON$::jsonb
where slug = 'gerrit-van-honthorst';

-- ─── 125. Hendrick ter Brugghen ────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Hendrick ter Brugghen was, alongside Gerrit van Honthorst and Dirck van Baburen, one of the three principal members of the small Utrecht school of Dutch Caravaggesque painters who had absorbed the Caravaggesque manner during their study trips to Rome in the 1610s. Born in The Hague in 1588, raised and trained in Utrecht in the workshop of Abraham Bloemaert (the same Utrecht teacher who trained Honthorst and Baburen), and traveling to Italy around 1607 (where he worked in Rome and southern Italy for nearly a decade and absorbed the Caravaggesque chiaroscuro directly from the surviving Caravaggio altarpieces and from the second-generation Roman Caravaggesques), he returned to Utrecht in 1614 and worked there for the rest of his life. He died of plague in Utrecht in 1629, only forty-one years old.

His Christian religious work is concentrated in dramatic single-figure half-length saints and apostles, biblical narrative scenes, and small-format devotional canvases in his characteristic combination of Caravaggesque tenebrism with a particularly Dutch chromatic restraint and a strong emotional realism. The Calling of Saint Matthew (Centraal Museum, Utrecht, 1621 — a deliberately competitive Dutch response to Caravaggio's earlier Roman version of the same subject in San Luigi dei Francesi), the Doubting Thomas (Rijksmuseum, c. 1622), the Crucifixion (Metropolitan Museum, c. 1625), the Liberation of Saint Peter (Schwerin), the Saint Sebastian (Allen Memorial Art Museum, Oberlin), and the Crowning with Thorns (Copenhagen) anchor the painted corpus.

His personal style — Caravaggesque chiaroscuro inflected by a softer, more silvery chromatic palette than his Italian sources, with a particular preference for cool grey-blue and pale rose against the dark neutral grounds of his Utrecht workshop — distinguished his work from the warmer Caravaggesque manner of Honthorst and the more dramatic compositions of Baburen. Modern criticism treats him as the most artistically interesting of the three Utrecht Caravaggesques and the most influential on the next generation of Dutch painters who absorbed the Caravaggesque vocabulary at one further remove.

His Utrecht workshop ended at his early death in 1629; the Caravaggesque vocabulary continued through Honthorst and Baburen but lost its principal voice with ter Brugghen's departure.$BIO$,
  bio_sources = $JSON$[
    {"title":"Hendrick ter Brugghen — Wikipedia","url":"https://en.wikipedia.org/wiki/Hendrick_ter_Brugghen","type":"wikipedia"},
    {"title":"Hendrick ter Brugghen — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Hendrick-ter-Brugghen","type":"britannica"},
    {"title":"Hendrick ter Brugghen — Centraal Museum Utrecht","url":"https://www.centraalmuseum.nl/en","type":"museum"}
  ]$JSON$::jsonb
where slug = 'hendrick-ter-brugghen';

-- ─── 126. Jan Lievens ──────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Jan Lievens was a Dutch Golden Age painter and printmaker who shared a studio in Leiden with the young Rembrandt van Rijn from roughly 1626 to 1631 — the formative years for both painters — and went on to a substantial international career across the Netherlands, England, and the Spanish Netherlands. Born in Leiden in 1607 (a year older than Rembrandt), trained briefly in Leiden under Joris van Schooten and then in Amsterdam in the workshop of Pieter Lastman (the same Amsterdam workshop in which Rembrandt also briefly trained around 1624), he returned to Leiden in 1625 and shared his early Leiden studio with Rembrandt for several years before traveling to England in 1632 (where he worked at the court of Charles I) and then to Antwerp from 1635 to 1644 (where he absorbed the loose painterly Antwerp manner of Rubens and van Dyck). He returned to the Netherlands in 1644 and worked in Amsterdam, The Hague, and Leiden for the rest of his life, dying in Amsterdam in 1674.

His Christian religious work is concentrated in altarpieces and small biblical narrative paintings produced across his entire career. The Pilate Washing His Hands (Bredius Museum), the Christ on the Cross compositions, the Resurrection of Lazarus (Brighton, c. 1630, painted in close stylistic dialogue with Rembrandt's almost-contemporary Lazarus etching), the Job on the Dunghill (Ottawa, 1631), the Esther preparing to Approach Ahasuerus (Madrid), and the late Antwerp altarpieces fill the painted corpus.

The early Leiden years are the most consequential for the history of Dutch painting. Lievens and the young Rembrandt produced biblical-history paintings in close stylistic competition — sometimes painting the same subject within months of each other, sometimes seemingly correcting each other's compositions — and the small body of paintings produced in their shared Leiden studio in the late 1620s constitutes one of the most studied workshop dialogues in the entire history of Dutch art. Several paintings traditionally attributed to Rembrandt have been reattributed to Lievens, and vice versa; the careful Rijksmuseum and Mauritshuis exhibition in 2008–2009 sorted out much of the confusion.

His later international career was substantial but never quite caught the supreme reputation Rembrandt achieved in the same years; modern criticism increasingly treats Lievens as a major painter whose career was overshadowed by his early studio mate's later supremacy.$BIO$,
  bio_sources = $JSON$[
    {"title":"Jan Lievens — Wikipedia","url":"https://en.wikipedia.org/wiki/Jan_Lievens","type":"wikipedia"},
    {"title":"Jan Lievens — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Jan-Lievens","type":"britannica"},
    {"title":"Jan Lievens — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/jan-lievens","type":"museum"}
  ]$JSON$::jsonb
where slug = 'jan-lievens';

-- ─── 127. Alonso Cano ──────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Alonso Cano was a Spanish Baroque painter, sculptor, and architect — the principal Spanish polymath artist of the seventeenth century, who worked across all three disciplines at the highest level and is widely held to be one of the supreme Spanish religious painters of his generation. Born in Granada in 1601, trained in Seville in the workshops of Francisco Pacheco (the same Sevillian workshop that trained Diego Velázquez, Cano's near-contemporary and lifelong friend) and the sculptor Juan Martínez Montañés, and active in Seville, Madrid (where he worked at the royal court under the patronage of the Conde-Duque de Olivares), and finally Granada (where he was made a canon of the cathedral in 1652 and worked on the great west facade and the apsidal frescoes), he died in Granada in 1667.

His Christian religious work is concentrated in altarpieces, sculpted polychrome statues, and architectural projects for the Spanish Catholic Counter-Reformation churches. The Conception altarpiece in the Sacristy of Granada Cathedral, the Six Mysteries of the Virgin frescoes in the apse of Granada Cathedral (his late masterpiece, painted between 1652 and his death in 1667 and depicting the principal Marian feasts in a sequence of large lunette frescoes), the Christ in Limbo (Los Angeles County Museum of Art), the Saint Joseph with the Christ Child (multiple workshop variants), and the polychrome wood sculpture of the Immaculate Conception in Granada Cathedral (his sculptural masterpiece, painted in his characteristic combination of carved wood and oil-on-wood polychrome) anchor the religious output.

His personal style — combining the dramatic Caravaggesque chiaroscuro of his Sevillian training with the soft chromatic warmth and the careful figural elegance of the late Spanish Baroque — gave him a distinctive position in the Spanish seventeenth-century pictorial tradition. The Granada apse frescoes in particular are widely held to be among the supreme Spanish Baroque ceiling decorations and remain in continuous liturgical use in the cathedral.

He was famously volatile in temperament — accused (probably falsely) of murdering his second wife in 1644, fleeing to Valencia and then returning to Madrid under royal protection, and quarreling repeatedly with the Granada cathedral chapter throughout the 1650s and 1660s. He died in Granada in 1667 and was buried in the cathedral he had spent his last fifteen years decorating.$BIO$,
  bio_sources = $JSON$[
    {"title":"Alonso Cano — Wikipedia","url":"https://en.wikipedia.org/wiki/Alonso_Cano","type":"wikipedia"},
    {"title":"Alonso Cano — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Alonso-Cano","type":"britannica"},
    {"title":"Alonso Cano — Museo del Prado","url":"https://www.museodelprado.es/en/the-collection/artist/cano-alonso/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'alonso-cano';

-- ─── 128. Pier Francesco Mola ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Pier Francesco Mola was a Lombard-born Roman Baroque painter who combined the Bolognese classicizing tradition descending from the Carracci with the Venetian color school of Veronese and Tintoretto into a distinctive mid-seventeenth-century Roman manner. Born in Coldrerio in the Italian-Swiss border region of Ticino in 1612 (the same year as the Roman painter Pietro Testa), brought to Rome as a child by his architect father, and trained in Rome in the workshop of the late Cavaliere d'Arpino and then in Venice and Bologna in the orbit of the late Venetian colorists and the Bolognese school of Albani and Guercino, he was active in Rome for the rest of his career. He died in Rome in 1666.

His Christian religious work is concentrated in altarpieces, fresco cycles, and small-format devotional canvases. The Vision of Saint Bruno (multiple versions in workshop variants in the Pinacoteca Capitolina and other Italian collections), the Hagar and Ishmael in the Wilderness (Berlin), the Saint Peter Liberated by an Angel (Rome), the great frescoes for the Quirinal Palace (the Joseph Cycle, painted under Pope Alexander VII in the 1650s), and the Penitent Magdalene compositions in workshop variants anchor the painted corpus.

His personal style — combining Bolognese classicizing figural discipline with Venetian warmth of color and a particular fondness for solitary saint-and-hermit subjects in dramatic Italian landscape settings — gave him a distinctive mid-seventeenth-century Roman position between the strict Bolognese classicism of Sacchi and the more theatrical Roman Baroque of Pietro da Cortona. He was particularly admired in his lifetime for his small-format private devotional paintings, which were collected by Roman aristocratic and ecclesiastical patrons across his career.

The 1665–1666 court intrigues that surrounded his late commission to fresco the Costaguti Palace in Rome — disputes with the patron, the artist's accusations of unfair treatment, and the unresolved litigation that followed — provided material for several seventeenth and eighteenth-century artist-biographies as a documented case study of the difficulties of working as a painter under Roman patronage in the high Baroque period. He was buried in Santa Maria del Popolo in Rome.$BIO$,
  bio_sources = $JSON$[
    {"title":"Pier Francesco Mola — Wikipedia","url":"https://en.wikipedia.org/wiki/Pier_Francesco_Mola","type":"wikipedia"},
    {"title":"Pier Francesco Mola — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Pier-Francesco-Mola","type":"britannica"},
    {"title":"Pier Francesco Mola — Pinacoteca Capitolina, Rome","url":"https://www.museicapitolini.org/en","type":"museum"}
  ]$JSON$::jsonb
where slug = 'pier-francesco-mola';

-- ─── 129. Giovanni Lanfranco ───────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giovanni Lanfranco was a leading Italian Baroque painter and the principal innovator of the illusionistic ceiling-fresco vocabulary that would define late-Baroque Roman ceiling decoration through Pietro da Cortona, Andrea Pozzo, and the eighteenth-century Tiepolo generation. Born in Parma in 1582, trained in his native Parma under Agostino Carracci and then in Bologna and Rome under Annibale Carracci (whom he assisted on the great Farnese Gallery ceiling between 1602 and 1608), he was active in Rome through the 1620s before moving to Naples in 1633, where he worked for thirteen years at the Spanish viceregal court producing the principal Neapolitan ceiling cycles of the seventeenth century. He returned to Rome in 1646 and died there in 1647.

His Christian religious work is concentrated in altarpieces and ceiling frescoes for the major Roman and Neapolitan churches. The cupola fresco of Sant'Andrea della Valle in Rome (1625–1627 — the great Assumption of the Virgin painted in the cupola of the largest dome in Rome after Saint Peter's, with the soaring vortex of figures spiraling up into the open sky in the di sotto in sù manner Lanfranco was effectively inventing as the new Baroque ceiling vocabulary), the Treasury Chapel cupola in the Cathedral of Naples (1641–1643 — depicting the Apotheosis of San Gennaro in a similar vortex composition), the great altarpieces for the Roman Sant'Agostino, the Quirinal, and several Neapolitan churches anchor the painted corpus.

The Sant'Andrea della Valle cupola in particular is the central monument of his career and one of the foundational documents of the Baroque illusionistic ceiling. Pietro da Cortona, who was Lanfranco's principal Roman rival and frequent collaborator, would extend the di sotto in sù vocabulary in the slightly later Barberini ceiling; Andrea Pozzo would push it further in the Sant'Ignazio nave fresco a generation later; and the eighteenth-century Tiepolo and the Würzburg Residenz frescoes would refine it to its supreme statement. Lanfranco's contribution was the founding step.

He was Correggio's principal seventeenth-century interpreter — the soft sfumato modeling, the upward-spiraling figural composition, and the saturated chromatic palette of his ceilings descend directly from Correggio's earlier Parma cupolas of 1520–1530, which Lanfranco had studied closely as a young painter in his native Parma.$BIO$,
  bio_sources = $JSON$[
    {"title":"Giovanni Lanfranco — Wikipedia","url":"https://en.wikipedia.org/wiki/Giovanni_Lanfranco","type":"wikipedia"},
    {"title":"Giovanni Lanfranco — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Giovanni-Lanfranco","type":"britannica"},
    {"title":"Sant'Andrea della Valle — Diocese of Rome","url":"https://www.santandrea.teatinos.org/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giovanni-lanfranco';

-- ─── 130. Pieter Aertsen ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Pieter Aertsen — called Lange Pier (Long Peter) for his unusually tall stature — was a leading Antwerp painter of the middle of the sixteenth century and one of the principal inventors of the genre of biblical-narrative-set-against-monumental-still-life that combined the Northern Renaissance interest in domestic and market scenes with the older late-medieval tradition of biblical history painting. Born in Amsterdam around 1508, trained almost certainly in his native city before moving to Antwerp around 1535, and registered as a master in the Antwerp painters' guild in 1535, he was active in Antwerp through the late 1550s before returning to Amsterdam around 1557 and working there for the rest of his life. He died in Amsterdam in 1575.

His central pictorial invention was the inverted still-life-with-religious-scene composition: large painted canvases dominated by a foreground heaped with butchered meat, fish, vegetables, kitchen ware, or market goods, with a small biblical-narrative scene visible in a doorway or distant landscape behind. The Meat Stall with the Holy Family Distributing Alms (Uppsala, 1551 — a vast horizontal panel showing a butcher's stall heaped with cuts of meat, sausages, fish, and dairy products in the foreground, with the small Holy Family visible in the background distributing alms to the poor of Bethlehem), the Christ in the House of Martha and Mary (Vienna and Rotterdam versions), the Cook in Front of the Stove (Brussels), and the great series of Market Scenes anchor the painted corpus.

The compositional structure — large still-life or genre foreground, small biblical scene in the deeper background — was an entirely new invention in European painting and shaped the development of Dutch and Flemish still life as an autonomous genre over the next century. Aertsen's nephew and pupil Joachim Beuckelaer continued the workshop and refined the inverted-still-life-with-narrative format; the great seventeenth-century Dutch still-life tradition (Pieter Claesz, Willem Heda, Jan Davidsz. de Heem) descends from this Aertsen invention.

His altarpieces — the more conventional religious paintings he produced for Antwerp churches before the iconoclastic destruction of 1566 — are largely lost or fragmentarily preserved, the victims of the Calvinist mob action that destroyed most of the older Catholic religious imagery in the Low Countries in the years immediately after his Amsterdam return.$BIO$,
  bio_sources = $JSON$[
    {"title":"Pieter Aertsen — Wikipedia","url":"https://en.wikipedia.org/wiki/Pieter_Aertsen","type":"wikipedia"},
    {"title":"Pieter Aertsen — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Pieter-Aertsen","type":"britannica"},
    {"title":"Pieter Aertsen — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/pieter-aertsen","type":"museum"}
  ]$JSON$::jsonb
where slug = 'pieter-aertsen';
