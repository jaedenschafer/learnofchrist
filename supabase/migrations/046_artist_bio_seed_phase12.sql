-- Artist hub bios — phase 12.
-- Twelve more anchor artists from the remaining tier of famous Christian
-- masters with artwork in DB but no bio_long. The pool of named famous
-- Christian artists in the catalogue is essentially exhausted with this
-- phase; further bios would require either ingestion of new artwork or
-- bios for "Anonymous, [region], [century]" workshop attributions.

-- ─── 152. Cosmè Tura ───────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Cosmè Tura (Cosimo di Domenico di Bonaventura) was the founder of the Ferrarese Renaissance painting school and the principal court painter of the Este dynasty in Ferrara across the third quarter of the fifteenth century. Born in Ferrara around 1430, trained almost certainly in his native city in the orbit of the late Padua-Ferrarese workshop tradition descending from Squarcione (whose Paduan studio also produced Andrea Mantegna), and active in Ferrara for his entire career, he served the Este ducal court as principal painter from about 1458 onward and held the post under successive dukes Borso and Ercole I until his death in Ferrara in 1495.

His Christian religious work is concentrated in altarpieces, fresco cycles, and small devotional panels in his characteristic combination of Paduan figural sharpness and the jewel-bright Ferrarese chromatic palette that would define the late-Quattrocento Ferrara school. The Roverella Altarpiece (1474, dispersed across the National Gallery in London, the Pinacoteca Nazionale of Ferrara, the Colonna collection in Rome, and the Louvre — the central Madonna and Child enthroned panel was Tura's masterpiece), the Madonna of the Zodiac (Galleria Colonna, Rome), the Pietà (Louvre, c. 1474 — a small oval panel of unusual emotional intensity), the polyptych for the church of San Domenico in Modena, and the great Allegory of Spring fresco for the Schifanoia Palace in Ferrara (one of the principal surviving Quattrocento Italian secular fresco cycles, painted in collaboration with Francesco del Cossa and Ercole de' Roberti) anchor the painted corpus.

His personal style — angular, nervous, jewel-bright, with figures of extreme proportional intensity and elaborate carved-and-gilded altarpiece structures — gave the late-Quattrocento Ferrara school its distinctive identity. The Ferrara school of painters who continued his manner — Francesco del Cossa, Ercole de' Roberti, Lorenzo Costa — formed the most distinctive regional pictorial tradition of the late Italian Quattrocento outside Florence, Venice, and Umbria.

He died in Ferrara in 1495 in considerable poverty (the Este court patronage had begun to shift toward the next generation of painters in his late years) and was buried in the Ferrara church of San Lorenzo.$BIO$,
  bio_sources = $JSON$[
    {"title":"Cosmè Tura — Wikipedia","url":"https://en.wikipedia.org/wiki/Cosm%C3%A8_Tura","type":"wikipedia"},
    {"title":"Cosmè Tura — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Cosme-Tura","type":"britannica"},
    {"title":"Cosmè Tura — National Gallery, London","url":"https://www.nationalgallery.org.uk/artists/cosme-tura","type":"museum"}
  ]$JSON$::jsonb
where slug = 'cosm-tura-cosimo-di-domenico-di-bonaventura';

-- ─── 153. Segna di Buonaventura ────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Segna di Buonaventura was a Sienese painter of the early fourteenth century and one of the principal direct pupils of Duccio di Buoninsegna in the workshop that produced the great Maestà altarpiece for Siena Cathedral in 1311. Born in Siena around 1280 (or perhaps slightly earlier), trained in Duccio's late workshop, and active in Siena and the smaller Sienese hill towns for the rest of his career, he died in Siena around 1331. He was the father of the painter Niccolò di Segna, who continued the Sienese workshop tradition into the next generation.

His Christian religious work is concentrated in altarpieces, polyptychs, and small devotional panels in the unmistakable late-Duccian Sienese manner — figures in elongated proportions, jewel-bright tempera color, tooled-gold backgrounds, and the calm devotional sweetness that defined the Sienese school under Duccio. The Madonna and Child Enthroned with Saints altarpiece for the Pieve of Castiglion Fiorentino (1317, now in the Pinacoteca Comunale of Castiglion Fiorentino), the Crucifixion panels in the Pinacoteca Nazionale of Siena, and the dispersed polyptych panels in the Met, the Frick Collection, the Berlin Gemäldegalerie, and the Walters Art Museum in Baltimore fill the painted corpus.

His personal style is closely modeled on his teacher Duccio's — close enough that individual surviving panels were for centuries attributed to Duccio himself before twentieth-century connoisseurship distinguished Segna's slightly weightier figural drawing and slightly cooler chromatic palette from Duccio's own. The Sienese workshop continuation that ran from Segna through his son Niccolò di Segna and into the Lippo Memmi and Simone Martini generation made him one of the principal carriers of the Duccian pictorial tradition through the first generation after Duccio's death in 1319.

He worked principally in the small Sienese hill towns of the contado rather than in the Sienese cathedral or the Palazzo Pubblico, where the more famous Duccian disciples Simone Martini and Lippo Memmi held the major civic commissions. His provincial workshop output was nonetheless substantial and was the principal channel through which the Duccian style reached the smaller Sienese churches in the first half of the fourteenth century.$BIO$,
  bio_sources = $JSON$[
    {"title":"Segna di Buonaventura — Wikipedia","url":"https://en.wikipedia.org/wiki/Segna_di_Buonaventura","type":"wikipedia"},
    {"title":"Segna di Buonaventura — Pinacoteca Nazionale di Siena","url":"https://pinacotecanazionale.siena.it/","type":"museum"},
    {"title":"Segna di Buonaventura — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Segna","type":"museum"}
  ]$JSON$::jsonb
where slug = 'segna-di-buonaventura';

-- ─── 154. Ventura Salimbeni ────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Ventura Salimbeni was a leading Sienese painter and printmaker of the late sixteenth and early seventeenth centuries — the principal Sienese exponent of the late-Mannerist style that the Tuscan school carried into the post-Tridentine Catholic Counter-Reformation period. Born in Siena in 1568 to the painter Arcangelo Salimbeni (whose workshop he trained in alongside his half-brother Francesco Vanni — who became, with Ventura, the leading Sienese late-Mannerist painter), and active in Siena, Rome, and the smaller central-Italian hill towns for his entire career, he died in Siena in 1613.

His Christian religious work is concentrated in altarpieces, fresco cycles, and small devotional panels for the Sienese churches and confraternities and (during his Roman sojourn under Pope Sixtus V in the late 1580s and 1590s) for the Roman ecclesiastical commissions of the late-Mannerist papal-court generation. The frescoes in the Vatican Library (1588–1589, painted alongside several of the leading late-Mannerist Roman painters under the direction of Cesare Nebbia for Pope Sixtus V's library decoration), the great Crucifixion altarpiece in San Giovanni Battista in Pisa, the Madonna and Saints altarpieces for the Sienese parish churches, and the small etchings of biblical and devotional subjects he produced for the Sienese print market fill the painted-and-printed corpus.

His personal style — late-Mannerist, with elongated figures in jewel-bright color, careful Tuscan compositional discipline, and a particular preference for the small intimate devotional subject over the large public altarpiece — defined the Sienese late-Mannerist tradition alongside his half-brother Francesco Vanni. The Sienese late-Mannerist school the two brothers led continued the older Sienese workshop tradition into the Counter-Reformation period.

He is sometimes confused in older scholarship with the more famous Roman early-Baroque painter Ventura Salimbeni's near-contemporary Cavaliere d'Arpino, but the two are distinct figures. He was buried in Siena in his parish church of Santo Spirito.$BIO$,
  bio_sources = $JSON$[
    {"title":"Ventura Salimbeni — Wikipedia","url":"https://en.wikipedia.org/wiki/Ventura_Salimbeni","type":"wikipedia"},
    {"title":"Ventura Salimbeni — Pinacoteca Nazionale di Siena","url":"https://pinacotecanazionale.siena.it/","type":"museum"},
    {"title":"Ventura Salimbeni — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Salimbeni","type":"museum"}
  ]$JSON$::jsonb
where slug = 'ventura-salimbeni';

-- ─── 155. Francesco Salviati ───────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Francesco Salviati (Francesco de' Rossi) was a leading Florentine Mannerist painter of the second quarter of the sixteenth century and one of the principal Florentine-Roman painters who carried the Mannerist style across central Italy in the generation between Pontormo and the late-Mannerist Cavaliere d'Arpino. Born in Florence in 1510, trained in Florence in the workshop of Andrea del Sarto (the same Florentine workshop that trained Pontormo and Rosso Fiorentino), he was active across Florence, Rome, Bologna, Venice, and France for his entire career — he took the professional name Salviati from his patronage by the Roman Cardinal Giovanni Salviati, who employed him in Rome from 1531 onward — and died in Rome in 1563.

His Christian religious work is concentrated in altarpieces and fresco cycles in his characteristic combination of Florentine Mannerist figural drawing and the new Roman Mannerist compositional density that he absorbed during his long Roman period under Cardinal Salviati's patronage. The fresco cycle in the Cappella del Pallio of the Cancelleria Palace in Rome (the principal central Roman ecclesiastical office, where Salviati painted the Stories of Saint Lawrence and other Christian subjects in the early 1550s), the great Visitation fresco in the Oratorio di San Giovanni Decollato in Rome (1538 — one of the supreme Roman Mannerist fresco compositions, painted in the Florentine confraternity church of the Beheaded Saint John), the altarpieces in the Florence Palazzo Vecchio and the Sala Regia of the Vatican, and the late Roman commissions for the Cardinal Farnese fill the painted corpus.

His personal style — figures in extreme elongation and complex foreshortening, jewel-bright color, dense decorative pattern, and a particular preference for crowded multi-figure narrative compositions — defined the mid-sixteenth-century Florentine-Roman Mannerist tradition. He was a personal friend and frequent rival of Giorgio Vasari (the two had been close in their Florentine apprentice years under Andrea del Sarto), and their parallel careers across Florence and Rome shaped the entire mid-Cinquecento Italian Mannerist scene.

He worked briefly in France in 1554–1555 at the invitation of the Cardinal of Lorraine, but returned to Italy and spent his last years in Rome under Farnese patronage. He was buried in the church of San Girolamo della Carità in Rome.$BIO$,
  bio_sources = $JSON$[
    {"title":"Francesco Salviati — Wikipedia","url":"https://en.wikipedia.org/wiki/Francesco_Salviati","type":"wikipedia"},
    {"title":"Francesco Salviati — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Francesco-Salviati","type":"britannica"},
    {"title":"Francesco Salviati — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=Salviati","type":"museum"}
  ]$JSON$::jsonb
where slug = 'francesco-salviati-francesco-de-rossi';

-- ─── 156. Alessandro Allori ────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Alessandro Allori was a leading Florentine painter of the second half of the sixteenth century and the principal continuer of the late-Mannerist Florentine tradition that descended from his guardian and master Bronzino (Agnolo di Cosimo, called Il Bronzino — the Florentine Mannerist court painter who raised Allori from age five after the death of his father). Born in Florence in 1535 to the painter Cristofano Allori (no relation to the Bronzino-Allori chronological line, despite the surname coincidence — Alessandro took the name Allori from his guardian Bronzino's affectionate adoption), trained in Bronzino's Florentine workshop from his early childhood, and active in Florence for his entire career, he served the Medici grand-ducal court for more than four decades and died in Florence in 1607.

His Christian religious work is concentrated in altarpieces, fresco cycles, and small devotional panels for the Florentine Counter-Reformation churches and the Medici grand-ducal commissions. The fresco cycle in the Studiolo of Francesco I in the Palazzo Vecchio in Florence (1570s, painted as part of the Vasari-directed decorative program for the Medici grand-ducal cabinet of curiosities), the Saint Fiacre altarpiece (Pitti, 1596), the Madonna and Saints altarpieces for the Florentine parish churches, the great Last Judgment fresco for Santa Maria Novella, and the late Counter-Reformation altarpieces for the Medici-patronized monastic houses fill the painted corpus.

His personal style — late-Mannerist figural elongation derived from his teacher Bronzino, careful Florentine compositional discipline, jewel-bright chromatic palette, and a particular preference for the small intimate Marian devotional subject — gave him the principal position in the second half of the sixteenth-century Florentine pictorial tradition. He was a personal friend of Vasari (whose Lives of the Most Excellent Painters had appeared in its first edition in 1550 and would appear in expanded form in 1568), and his career runs in close parallel with Vasari's during the long Medici grand-ducal years.

His son Cristofano Allori (1577–1621) became a major late-Mannerist Florentine painter in his own right; the Allori workshop continued under Cristofano's direction through the early seventeenth century. Alessandro was buried in the Florentine church of Santi Annunziata, where he had spent four decades producing devotional altarpieces.$BIO$,
  bio_sources = $JSON$[
    {"title":"Alessandro Allori — Wikipedia","url":"https://en.wikipedia.org/wiki/Alessandro_Allori","type":"wikipedia"},
    {"title":"Alessandro Allori — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Alessandro-Allori","type":"britannica"},
    {"title":"Alessandro Allori — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks?search=Alessandro+Allori","type":"museum"}
  ]$JSON$::jsonb
where slug = 'alessandro-allori';

-- ─── 157. Alessandro Magnasco ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Alessandro Magnasco — called Il Lissandrino (Little Alexander) by his Genoese contemporaries — was a Genoese-born painter who spent most of his career in Milan and was one of the most distinctive late-Baroque-into-Rococo Italian painters of the early eighteenth century. Born in Genoa in 1667 to the painter Stefano Magnasco (who died in 1672 leaving the young Alessandro orphaned), apprenticed to the Milanese painter Filippo Abbiati after his father's death, and active in Milan, Florence, and Genoa for his entire career, he died in Genoa in 1749.

His Christian religious work is concentrated in small-format paintings of monks, hermits, friars, and ecstatic mystics in dramatic mountain landscapes — a particular Magnasco specialty that combined the Salvator Rosa wild-landscape tradition with a peculiarly Genoese-Lombard taste for the dramatic asceticism of the Counter-Reformation monastic religious imagination. The Friars at Prayer and the Quaker Meeting (Detroit Institute of Arts), the Bandits in a Wood (numerous workshop variants), the Trappist Refectory (Pitti, c. 1700), the Synagogue (Cleveland, c. 1725), the Capuchin Convent compositions, and dozens of small monastic-and-eremitic narrative panels fill the painted corpus.

His personal style is unmistakable: small flickering figures painted with broad rapid brushwork in a deeply restricted chromatic palette of grey, ochre, brown, and accents of crimson, set against vast dramatic landscapes of mountain peaks, ruined arches, blasted trees, and roiling stormy skies. The technique — closer to a quick painted sketch than to a finished early-eighteenth-century altarpiece — was unusually loose for its period and anticipated by a century the Romantic interest in the dramatic-asceticism subject and the painterly handling of pigment.

He was a personal friend of the Florentine art collector and great Magnasco patron Niccolò Gabburri (whose collection contained over thirty Magnasco paintings) and worked under Medici grand-ducal patronage during his Florentine years. The eighteenth-century neoclassical reaction pushed his late-Baroque manner out of fashion almost immediately after his death; the modern rediscovery of Magnasco as a major figure dates from the early twentieth century, when his combination of dramatic asceticism and loose painterly technique attracted comparison with the Romantics and the modernists.$BIO$,
  bio_sources = $JSON$[
    {"title":"Alessandro Magnasco — Wikipedia","url":"https://en.wikipedia.org/wiki/Alessandro_Magnasco","type":"wikipedia"},
    {"title":"Alessandro Magnasco — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Alessandro-Magnasco","type":"britannica"},
    {"title":"Alessandro Magnasco — Pitti Palace, Florence","url":"https://www.uffizi.it/en/pitti-palace","type":"museum"}
  ]$JSON$::jsonb
where slug = 'alessandro-magnasco';

-- ─── 158. Alessandro Algardi ───────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Alessandro Algardi was the principal Italian Baroque sculptor of his generation alongside (and in close stylistic rivalry with) Gian Lorenzo Bernini, whose monumental ascendancy in Roman papal sculpture defined the seventeenth-century Italian sculptural tradition. Born in Bologna in 1598, trained in his native city in the workshop of Ludovico Carracci before moving to Rome around 1625, he became the principal Roman alternative to Bernini under Pope Innocent X (Giovanni Battista Pamphilj, who pointedly turned away from his predecessor Urban VIII Barberini's enthusiasm for Bernini and built Algardi's career as a Roman alternative). He died in Rome in 1654.

His Christian religious sculpture is concentrated in major papal commissions and altarpiece relief sculpture for the Roman churches and the Vatican. The great altar relief of Pope Leo I Repulsing Attila in the Cappella della Madonna della Colonna of Saint Peter's Basilica (1646–1653 — a vast marble high relief depicting the legendary 452 meeting in which Pope Leo the Great turned back Attila and his Hunnic invasion of Italy through divine intervention, with Saints Peter and Paul appearing in the sky above the meeting) is widely held to be Algardi's masterpiece and one of the supreme statements of seventeenth-century Roman Baroque relief sculpture. The funerary monument of Pope Leo XI in Saint Peter's (the Della Rovere Pope of just twenty-seven days in 1605, whose monument Algardi completed in 1644 in a particularly restrained classicizing manner that distinguished his approach from Bernini's more dramatic papal monuments), the standing portrait sculpture of Pope Innocent X (multiple versions in marble and bronze), and the great seated Saint Philip Neri marble in the Roman Filippini house anchor the major sculptural commissions.

His personal sculptural style — combining Bolognese classicizing figural discipline with the warm narrative emotional intensity of the early Roman Baroque — gave him a distinctive position as the principal Roman sculptural alternative to Bernini's more dramatic Baroque manner. The two sculptors maintained a genuinely cordial professional relationship despite the inevitable rivalry produced by the alternating papal patronage of their respective styles.

He was also a major designer of small bronze devotional sculpture for the Roman aristocratic and ecclesiastical collectors — the small Christ on the Cross compositions, the small Madonna and Child sculptures, and the small bronze portrait busts produced in workshop variants for the Roman seventeenth-century clientele. He was buried in San Giovanni dei Bolognesi, the Bolognese national church in Rome.$BIO$,
  bio_sources = $JSON$[
    {"title":"Alessandro Algardi — Wikipedia","url":"https://en.wikipedia.org/wiki/Alessandro_Algardi","type":"wikipedia"},
    {"title":"Alessandro Algardi — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Alessandro-Algardi","type":"britannica"},
    {"title":"Algardi — Saint Peter's Basilica, Vatican","url":"https://www.vatican.va/various/basiliche/san_pietro/index.html","type":"museum"}
  ]$JSON$::jsonb
where slug = 'alessandro-algardi';

-- ─── 159. Alessandro Casolani ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Alessandro Casolani — sometimes called Casolani della Torre after his birthplace at Casole d'Elsa near Siena — was a leading Sienese late-Mannerist painter of the second half of the sixteenth century. Born in Casole d'Elsa in 1552, trained in Siena in the workshop of Cristoforo Roncalli (Pomarancio) before establishing his independent career in the city, and active in Siena, Rome, and the smaller Tuscan and central Italian hill towns for his entire career, he died in Siena in 1607.

His Christian religious work is concentrated in altarpieces and fresco cycles for the Sienese Counter-Reformation Catholic churches and confraternities and (during his Roman sojourns under Pope Clement VIII in the 1590s) for the Roman ecclesiastical commissions of the late-Mannerist papal-court generation. The Adoration of the Shepherds altarpiece in the Sienese church of Santa Maria della Scala, the Holy Family altarpieces in workshop variants for Tuscan parish churches, the Crucifixion altarpieces in the Sienese hospital church and the Sienese cathedral, and the small devotional Madonnas and Pietà compositions in the standard late-Sienese-Mannerist format fill the painted corpus.

His personal style — late-Mannerist figural elongation, jewel-bright Sienese chromatic palette, careful narrative composition, and a particular preference for the small intimate Marian devotional subject — places him in the broader Sienese late-Cinquecento tradition alongside Francesco Vanni and Ventura Salimbeni (the two Salimbeni half-brothers who, with Casolani, constituted the leading Sienese late-Mannerist generation). The three painters worked in close stylistic dialogue across the Sienese pictorial scene through the 1580s, 1590s, and early 1600s.

He worked principally for the Sienese ecclesiastical patrons and confraternities rather than for the Medici grand-ducal court (Siena was not formally annexed to the Medici Tuscan grand duchy until 1559, just before Casolani's birth, and the Sienese pictorial culture maintained considerable regional independence from Florentine grand-ducal patronage well into the seventeenth century). His son Ilario Casolani continued the workshop briefly after his death; the major Sienese late-Mannerist tradition was carried forward by Ventura Salimbeni and Francesco Vanni more than by the Casolani family workshop.$BIO$,
  bio_sources = $JSON$[
    {"title":"Alessandro Casolani — Wikipedia","url":"https://en.wikipedia.org/wiki/Alessandro_Casolani","type":"wikipedia"},
    {"title":"Alessandro Casolani — Pinacoteca Nazionale di Siena","url":"https://pinacotecanazionale.siena.it/","type":"museum"},
    {"title":"Alessandro Casolani — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Casolani","type":"museum"}
  ]$JSON$::jsonb
where slug = 'alessandro-casolani';

-- ─── 160. Alessandro Tiarini ───────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Alessandro Tiarini was a leading Bolognese Baroque painter of the first third of the seventeenth century and one of the principal continuers of the Carracci reform of Italian painting in the generation immediately after Annibale, Agostino, and Ludovico Carracci. Born in Bologna in 1577, trained in his native city in the late-Carracci academy under Ludovico Carracci and the broader Bolognese Quattrocento workshop tradition, he was active in Bologna, Florence, Modena, and Mantua across his career and died in Bologna in 1668 at age ninety-one — an unusually long life that gave him an exceptionally productive workshop output across more than five decades.

His Christian religious work is concentrated in altarpieces, fresco cycles, and small devotional panels for the Bolognese, Florentine, and Emilian Catholic churches and confraternities. The Saint Dominic Resurrecting Napoleone Orsini (Pinacoteca Nazionale, Bologna), the great Madonna and Saints altarpieces for the Bolognese parish churches, the Saint Bernardo Tolomei altarpiece (Florence), the Stations of the Cross cycle for the Bolognese church of the Madonna della Pioggia, the Crucifixion altarpieces in workshop variants, and the Pietà compositions in the Pinacoteca Nazionale of Bologna fill the painted corpus.

His personal style — combining the Carracci Bolognese classicizing figural discipline with the soft chromatic warmth and the dramatic emotional intensity of the early Italian Baroque — gave him a distinctive position in the second-generation Bolognese workshop tradition alongside Guido Reni, Domenichino, Albani, and Lanfranco. He was particularly admired in his lifetime for his ability to compose multi-figure narrative scenes with the calm pictorial restraint that the Bolognese Carracci reform had established as the right pictorial vocabulary for Counter-Reformation Catholic religious painting.

He worked briefly in Florence in the 1610s under Medici grand-ducal patronage before returning to Bologna where he spent the rest of his career. His unusually long life (he outlived Reni, Domenichino, Lanfranco, and almost every other major Bolognese contemporary by at least two decades) gave the Tiarini workshop an exceptional commercial reach across the seventeenth century, and his late-career altarpieces remained in production into the 1660s. He was buried in Bologna in his parish church of San Michele dei Leprosetti.$BIO$,
  bio_sources = $JSON$[
    {"title":"Alessandro Tiarini — Wikipedia","url":"https://en.wikipedia.org/wiki/Alessandro_Tiarini","type":"wikipedia"},
    {"title":"Alessandro Tiarini — Pinacoteca Nazionale di Bologna","url":"https://www.pinacotecabologna.beniculturali.it/","type":"museum"},
    {"title":"Alessandro Tiarini — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Tiarini","type":"museum"}
  ]$JSON$::jsonb
where slug = 'alessandro-tiarini';

-- ─── 161. Master of the Stuttgart Psalter ──────────────────────────────
update public.artists
set
  bio_long = $BIO$The Master of the Stuttgart Psalter is the conventional art-historical name for the anonymous illuminator (or, more probably, the small workshop of illuminators) responsible for the illustrations of the Stuttgart Psalter — the early-ninth-century Carolingian illuminated manuscript now in the Württembergische Landesbibliothek in Stuttgart (Cod.bibl.fol.23) and one of the most extensively illustrated of all surviving early-medieval illustrated psalters.

The Stuttgart Psalter was produced in the Frankish Carolingian Empire, almost certainly in or near Saint-Germain-des-Prés in Paris, around 820–830 during the reign of the Emperor Louis the Pious (the son and successor of Charlemagne, ruling 814–840). The manuscript contains 316 illustrations in tempera and gold on parchment — extraordinary in number for the early Carolingian period, when most illuminated manuscripts contained only a handful of historiated initials and few full-scene narrative illustrations. The illustrations cover almost the entire text of the 150 Psalms, with one or more pictures for each psalm, depicting narrative scenes from the psalm text, allegorical interpretations of the psalm's theological content, and typological connections to events in the Gospels and the larger biblical narrative.

The Stuttgart Psalter Master's pictorial style is the unmistakable early-Carolingian signature: small lively figures in jewel-bright tempera color (deep ultramarine, vermilion, soft ochre, and gold-leaf accents) drawn with rapid confident outlines on the white parchment ground; architectural settings and landscape elements rendered in the late-Antique-Byzantine convention of low rocky terraces and small classical arches; and a particular fondness for the dramatic narrative moment over the formal ceremonial composition.

The manuscript is one of three surviving substantially-illustrated early-ninth-century Carolingian psalters (with the Utrecht Psalter and the Khludov Psalter — though the Khludov is Byzantine rather than Carolingian), and the three together constitute the principal corpus of surviving early-medieval European illustrated psalter manuscripts. The Stuttgart Psalter is widely held to be the most extensively illustrated of the three and one of the supreme surviving documents of early-Carolingian Frankish religious manuscript illumination.$BIO$,
  bio_sources = $JSON$[
    {"title":"Stuttgart Psalter — Wikipedia","url":"https://en.wikipedia.org/wiki/Stuttgart_Psalter","type":"wikipedia"},
    {"title":"Stuttgart Psalter — Württembergische Landesbibliothek","url":"https://www.wlb-stuttgart.de/en/","type":"museum"},
    {"title":"Stuttgart Psalter — Index of Medieval Art","url":"https://theindex.princeton.edu/","type":"scholarly"}
  ]$JSON$::jsonb
where slug = 'stuttgart-psalter-master';

-- ─── 162. Master of the Khludov Psalter ────────────────────────────────
update public.artists
set
  bio_long = $BIO$The Master of the Khludov Psalter is the conventional art-historical name for the anonymous illuminator (or small workshop) responsible for the illustrations of the Khludov Psalter — the mid-ninth-century Byzantine illuminated manuscript now in the State Historical Museum in Moscow (Cod. 129d) and one of the principal surviving documents of the Byzantine Iconoclast and post-Iconoclast pictorial tradition.

The Khludov Psalter was produced in Constantinople around 850–875, in the decades immediately after the second restoration of icons in 843 (the Triumph of Orthodoxy, the Byzantine ecclesiastical-political settlement that ended the second Iconoclast period and formally restored the veneration of religious images in the Eastern Empire). The manuscript is one of the so-called marginal psalters — a Byzantine pictorial tradition in which the narrative and allegorical illustrations of the psalm text were placed in the margins of the manuscript rather than in full-page miniatures inserted into the text — and contains some 208 marginal illustrations across the entire 150-psalm text.

The Khludov Master's pictorial style is the unmistakable post-Iconoclast Byzantine signature: small lively figures in tempera color drawn rapidly on the parchment ground; architectural and landscape elements rendered in the late-Antique-Byzantine compositional vocabulary; and a particularly distinctive series of polemical illustrations that depict the iconoclasts (the recent enemies of religious images) in unfavorable comparison with the persecutors of Christ in the Gospel narratives — in several places the Khludov illustrations directly equate the iconoclasts who whitewashed the icons with the Roman soldiers who scourged Christ at the Praetorium. The polemical illustrations are among the principal surviving early-medieval Byzantine documents of the Iconoclast controversy and its post-Iconoclast settlement.

The manuscript was acquired in the nineteenth century by the Russian Old Believer collector Aleksey Khludov (1818–1882) — from whom it takes its modern name — and entered the Moscow State Historical Museum after the Russian Revolution. It is one of three surviving substantially-illustrated marginal psalters of the same Byzantine post-Iconoclast tradition (with the Theodore Psalter in the British Library and the Barberini Psalter in the Vatican Library) and is widely held to be the earliest and most pictorially intense of the three.$BIO$,
  bio_sources = $JSON$[
    {"title":"Khludov Psalter — Wikipedia","url":"https://en.wikipedia.org/wiki/Chludov_Psalter","type":"wikipedia"},
    {"title":"Khludov Psalter — State Historical Museum, Moscow","url":"https://en.shm.ru/","type":"museum"},
    {"title":"Khludov Psalter — Index of Medieval Art","url":"https://theindex.princeton.edu/","type":"scholarly"}
  ]$JSON$::jsonb
where slug = 'khludov-master';

-- ─── 163. Master of the Utrecht Psalter ────────────────────────────────
update public.artists
set
  bio_long = $BIO$The Master of the Utrecht Psalter is the conventional art-historical name for the anonymous illuminator (or, more probably, the small workshop of illuminators) responsible for the illustrations of the Utrecht Psalter — the early-ninth-century Carolingian illuminated manuscript now in the Utrecht University Library (Hs. 32) and one of the most influential of all surviving early-medieval illustrated psalters.

The Utrecht Psalter was produced in the Frankish Carolingian Empire, almost certainly at the Carolingian abbey of Hautvillers near Reims, around 820–830 during the archiepiscopate of Ebbo of Reims under the Emperor Louis the Pious. The manuscript is unusual in its pictorial format: each of the 150 psalms is preceded by a horizontal pen-and-ink drawing depicting the principal images and metaphors of the psalm text in a continuous panoramic landscape composition — figures, architectural settings, and landscape elements rendered in rapid expressive pen lines on the white parchment ground without any color or gold-leaf decoration. The result is a manuscript of extraordinary visual liveliness, with lively rapid figural drawings of unusual quality across more than 1,150 individual figures distributed across the 166 illustrated pages.

The Utrecht Master's pictorial style — the rapid expressive pen line, the small lively figures, the panoramic landscape settings combining late-Antique-Byzantine architectural conventions with carefully observed Carolingian-Frankish detail — became the canonical Northern European pictorial style for psalter illustration and was directly imitated and copied for several centuries after the manuscript's production. Three later medieval English psalters — the Harley Psalter (c. 1000–1050, British Library Harley MS 603), the Eadwine Psalter (c. 1155–1160, Trinity College Cambridge MS R.17.1), and the Paris Psalter (c. 1200, Bibliothèque Nationale MS Lat. 8846) — were all produced as direct visual copies of the Utrecht Psalter, each adapted to its particular medieval English cultural context.

The manuscript moved through several monastic and royal libraries across the Middle Ages and the early modern period before entering the Utrecht University Library in 1716. It is widely held to be the supreme surviving document of early-Carolingian Frankish-Reims illuminated manuscript drawing.$BIO$,
  bio_sources = $JSON$[
    {"title":"Utrecht Psalter — Wikipedia","url":"https://en.wikipedia.org/wiki/Utrecht_Psalter","type":"wikipedia"},
    {"title":"Utrecht Psalter — Utrecht University Library","url":"https://psalter.library.uu.nl/","type":"museum"},
    {"title":"Utrecht Psalter — Index of Medieval Art","url":"https://theindex.princeton.edu/","type":"scholarly"}
  ]$JSON$::jsonb
where slug = 'utrecht-psalter-master';
