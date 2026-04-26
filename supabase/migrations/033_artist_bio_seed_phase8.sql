-- Artist hub bios — phase 8.
-- Thirty-three more anchor artists, all famous Christian / biblical-art
-- masters who already have approved artwork in the catalogue but no
-- bio_long. Same conventions as 026 / 027 / 030 / 031: original prose
-- written for Learn of Christ, plain-text paragraphs, dollar-quoted to
-- keep the apostrophes readable, with bio_sources as Wikipedia /
-- Britannica / museum citation pointers rather than the textual basis of
-- the prose.
--
-- Unlike the earlier phases, this migration matches by EXACT slug rather
-- than `name ILIKE '%X%'`. The ILIKE pattern caused cross-attribution
-- in phase 7 (e.g. "Antonio Bosch" picked up Hieronymus Bosch's bio,
-- "Theodore of Caesarea" picked up Géricault's). Migration 032 cleaned
-- those up; the explicit slug list below prevents the same class of bug.

-- ─── 32. Albrecht Dürer ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Albrecht Dürer is the towering Christian artist of the Northern Renaissance. Born in Nuremberg in 1471 to a Hungarian-born goldsmith, apprenticed to the painter and printmaker Michael Wolgemut, and twice traveled to Italy in his twenties and again in his fifties, he absorbed the proportional theory of Leon Battista Alberti and the figure science of his own anatomical studies and brought both home to a German workshop that produced more devotional imagery, in greater editions, than any other in Europe. He died in Nuremberg in 1528, a citizen of standing in a city in the middle of the Reformation.

The Apocalypse, his fifteen woodcut series of 1498, is the founding work of the modern illustrated Bible. The Four Horsemen of Revelation 6, the Whore of Babylon, the angels staying the four winds — the cycle made him famous across Europe at twenty-seven and remained the standard visualization of John's Revelation for a hundred years. The Large Passion (twelve woodcuts, 1497–1510), the Small Passion (thirty-seven woodcuts, 1509–1511), and the Engraved Passion (sixteen plates, 1507–1512) extended that achievement across the entire arc of the Gospels' final chapters. Adam and Eve (engraving, 1504) crystallized the Northern Renaissance ideal of human proportion in a Garden-of-Eden composition that has been copied and quoted ever since.

His paintings are fewer but no less ambitious. The Paumgartner Altarpiece (Munich) and the Adoration of the Magi (Florence) sit among the great altarpieces of his generation; the Heller Altarpiece (lost in a fire, known from copies) and the Four Apostles (Munich, 1526) carry his late, increasingly Lutheran-leaning religious sensibility. The Praying Hands study, drawn for the Heller Altarpiece, has become — detached from its original context — one of the most reproduced devotional images in the world.

Dürer combined an inventor's mind with a scholar's habit. He published the first Northern treatise on geometry (1525), a treatise on fortification (1527), and the Four Books on Human Proportion (posthumous, 1528). He was an early reader of Luther, corresponded with Melanchthon, and was buried in Nuremberg's St. Johannis cemetery, where his grave still draws pilgrims of art.$BIO$,
  bio_sources = $JSON$[
    {"title":"Albrecht Dürer — Wikipedia","url":"https://en.wikipedia.org/wiki/Albrecht_D%C3%BCrer","type":"wikipedia"},
    {"title":"Albrecht Dürer — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Albrecht-Durer","type":"britannica"},
    {"title":"Albrecht Dürer — National Gallery of Art","url":"https://www.nga.gov/collection/artist-info.1369.html","type":"museum"}
  ]$JSON$::jsonb
where slug in ('albrecht-durer', 'albrecht-d-rer');

-- ─── 33. Giotto di Bondone ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giotto di Bondone is the painter who broke the Byzantine spell over Western religious art. Born around 1266 in the village of Vespignano in the hills above Florence, apprenticed (according to the long tradition first written down by Vasari) to the older Florentine master Cimabue, and active across central and northern Italy for the next half-century, he replaced the gold-ground hieratic figures of medieval mosaics and panel paintings with weighty, three-dimensional bodies in legible architectural and landscape settings. The whole subsequent history of European painting — from Masaccio to Raphael to Caravaggio — passes through his innovations.

The Scrovegni Chapel in Padua, painted in fresco between roughly 1303 and 1305 for the wealthy banker Enrico Scrovegni, is the supreme surviving expression of his mature style. Across thirty-eight scenes on the chapel walls, he tells the joined stories of the lives of Joachim, Anna, the Virgin Mary, and Christ, ringed by allegorical figures of the Virtues and Vices and crowned by a vast Last Judgment on the entrance wall. The Lamentation, the Kiss of Judas, the Raising of Lazarus, and the Entry into Jerusalem are among the most-reproduced images in the history of Christian art and remain the textbook examples of psychological portraiture in the religious image.

Beyond Padua, Giotto's hand is documented or persuasively attributed in the Upper Church of San Francesco in Assisi (the Saint Francis cycle of the late thirteenth century), the Bardi and Peruzzi Chapels in Santa Croce in Florence, the Stefaneschi Triptych for old Saint Peter's in Rome (now in the Vatican Pinacoteca), and the Ognissanti Madonna (Uffizi). He served as capomaestro of the Florence Cathedral works from 1334 and designed the lower courses of its bell tower — still called Giotto's Campanile — before his death in Florence in 1337.

His patrons were Franciscans, Dominicans, civic commissions, and individual lay donors of new wealth, and his subject matter was almost entirely the Christian narrative. He turned the saints of the late medieval world into recognizable people moving in plausible space, and the Bible into a sequence of stories the viewer could enter.$BIO$,
  bio_sources = $JSON$[
    {"title":"Giotto di Bondone — Wikipedia","url":"https://en.wikipedia.org/wiki/Giotto","type":"wikipedia"},
    {"title":"Giotto — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Giotto-di-Bondone","type":"britannica"},
    {"title":"Scrovegni Chapel — Comune di Padova","url":"http://www.cappelladegliscrovegni.it/index.php/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giotto-di-bondone';

-- ─── 34. Duccio di Buoninsegna ─────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Duccio di Buoninsegna stands at the head of the Sienese school and at the threshold between the Italo-Byzantine tradition and the new pictorial language that Giotto was developing in Florence at the same moment. Born around 1255 in Siena and active there until his death around 1319, he ran the leading workshop of his city for thirty years and trained the generation — Simone Martini, the Lorenzetti brothers — that carried Sienese painting into its golden age. His surviving documented work is small, but every panel matters.

The Maestà, completed in June 1311 for the high altar of Siena Cathedral, is the central monument of medieval Italian painting. A double-sided altarpiece roughly seven meters wide, its main face shows the Virgin Mary enthroned in majesty among angels and saints; the back face contained twenty-six Passion scenes from the Entry into Jerusalem to the appearances of the risen Christ. The cathedral chapter received it on June 9 with a citywide procession that, according to the contemporary chronicler, closed the shops, rang every bell, and ended with a Mass attended by the bishop and the Nine. The altarpiece was sawn apart and dispersed in the eighteenth century; most of the panels are now in the Museo dell'Opera del Duomo in Siena, with Passion fragments in the National Gallery in London, the Frick Collection in New York, and the National Gallery of Art in Washington.

Earlier in his career he produced the Rucellai Madonna for the Dominicans of Santa Maria Novella in Florence (1285, now in the Uffizi), an enormous gabled panel that demonstrates how a Sienese painter could work for a Florentine commission and still produce something unmistakably Sienese — long, elegant outlines, a gold ground stamped and tooled into the Virgin's mantle, and tender attendant angels.

Duccio's color is jewel-like, his line patient, and his Madonnas — solemn, tender, gently weighted — set the template that Sienese masters would inflect for the next century. He is the painter who made gold sing.$BIO$,
  bio_sources = $JSON$[
    {"title":"Duccio di Buoninsegna — Wikipedia","url":"https://en.wikipedia.org/wiki/Duccio","type":"wikipedia"},
    {"title":"Duccio — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Duccio-di-Buoninsegna","type":"britannica"},
    {"title":"Duccio — National Gallery, London","url":"https://www.nationalgallery.org.uk/artists/duccio","type":"museum"}
  ]$JSON$::jsonb
where slug = 'duccio-di-buoninsegna';

-- ─── 35. Guido Reni ────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Guido Reni was the most celebrated Bolognese painter of the seventeenth century and one of the principal voices of the Italian Baroque. Born in Bologna in 1575, trained in the workshop of the Flemish painter Denis Calvaert before moving in his late teens to the Carracci academy founded by Ludovico, Annibale, and Agostino Carracci, he absorbed both Northern technical care and the Carracci program of restoring grand-manner figure painting on classical and biblical subjects. He worked extensively in Rome between 1601 and 1614, and then returned to Bologna where he ran the leading workshop in northern Italy until his death in 1642.

His Aurora ceiling fresco in the Casino dell'Aurora at the Palazzo Pallavicini-Rospigliosi in Rome (1614) made him famous across Europe. In Christian art his reputation rests on a long sequence of devotional and biblical pictures: the Crucifixion of Saint Peter (Vatican Pinacoteca, 1604–1605), the Massacre of the Innocents (Pinacoteca Nazionale di Bologna, 1611), the Atalanta and Hippomenes for a Neapolitan client and the related Saint Sebastian images now in Genoa, Madrid, and the Capitoline, and an entire corpus of Madonnas, Ecce Homos, Mater Dolorosas, and penitent Magdalenes that became, by repetition and engraving, the standard visual vocabulary of Italian Counter-Reformation devotion.

His late style — grayer, more spectral, the paint thinned almost to the gesso — was once treated as a sign of decline; today it is understood as a deliberate move toward an inward, almost spectral pictorial register that influenced eighteenth-century devotional painting from Naples to Vienna. His Saint Michael Archangel (Santa Maria della Concezione, Rome, 1635) is among the most engraved religious images of the entire seventeenth century.

He never married, lived modestly despite enormous earnings, and gave away most of his money — to gambling and to charity in roughly equal measure. He was buried in the church of San Domenico in Bologna.$BIO$,
  bio_sources = $JSON$[
    {"title":"Guido Reni — Wikipedia","url":"https://en.wikipedia.org/wiki/Guido_Reni","type":"wikipedia"},
    {"title":"Guido Reni — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Guido-Reni","type":"britannica"},
    {"title":"Guido Reni — Pinacoteca Nazionale di Bologna","url":"https://www.pinacotecabologna.beniculturali.it/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'guido-reni';

-- ─── 36. Martin Schongauer ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Martin Schongauer was the greatest Northern engraver of the generation immediately before Albrecht Dürer, and the artist who made copperplate engraving a fully expressive medium for Christian narrative and devotional imagery. Born in Colmar in Alsace around 1435 to a goldsmith family — the metalworking trade that taught him the burin in his father's shop — and trained in painting with a circle that absorbed Rogier van der Weyden's Netherlandish refinement, he was a professional painter and engraver in Colmar and later Breisach for the rest of his life. He died in Breisach in 1491, almost certainly of plague, while at work on a Last Judgment fresco for the Saint Stephen Minster.

His surviving engraved oeuvre runs to about 116 plates, almost all on Christian subjects: a complete Passion of Christ, a wide series of Virgin and Child compositions, scenes from the lives of the Virgin and the saints, an enormous Temptation of Saint Anthony (the print Vasari said the young Michelangelo had copied as a teenage exercise), Censers and Tabernacles, and the great Death of the Virgin (c. 1470–1475). The work is technically immaculate — closely cross-hatched, plastically modeled, with fine atmospheric grays — and emotionally restrained, the Northern late-Gothic sensibility raised to its highest finish.

His painted altarpiece of the Madonna of the Rose Garden, completed in 1473 for the Dominican church of Saint Martin in Colmar (now in the Église des Dominicains), is one of the great surviving German panels of the late fifteenth century — a red-mantled Virgin enthroned in a flower garden under crowning angels — and the principal anchor for his small surviving painted corpus.

Schongauer's prints traveled across Europe in editions and copies throughout his lifetime and after his death; the young Dürer made the journey to Colmar in 1492 hoping to meet him, only to find him just dead. Dürer's own engraved Passion bears Schongauer's fingerprints on every plate.$BIO$,
  bio_sources = $JSON$[
    {"title":"Martin Schongauer — Wikipedia","url":"https://en.wikipedia.org/wiki/Martin_Schongauer","type":"wikipedia"},
    {"title":"Martin Schongauer — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Martin-Schongauer","type":"britannica"},
    {"title":"Martin Schongauer — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Martin+Schongauer","type":"museum"}
  ]$JSON$::jsonb
where slug = 'martin-schongauer';

-- ─── 37. William Blake ─────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$William Blake was an English poet, printmaker, and visionary religious artist whose body of biblical illustration is unlike anything else in the Western canon. Born in London in 1757, apprenticed at fourteen to the engraver James Basire (whose work copying medieval tomb sculpture in Westminster Abbey gave Blake his lifelong taste for slim Gothic figures), and trained briefly at the Royal Academy under Joshua Reynolds — whose academic neoclassicism Blake spent the rest of his life arguing against — he made his living as a journeyman engraver while producing, in his own publications and in commissions for a small circle of patrons, an entirely original body of religious art. He died in London in 1827.

Blake's central religious works are the great series of biblical watercolors, mostly executed for his patron Thomas Butts between roughly 1799 and 1809: scenes of the Creation, the Fall, the Plagues of Egypt, the lives of the Patriarchs and the Prophets, the Gospels and Revelation, painted in a small, jewel-like format with translucent washes laid over fine ink outlines. The Job series — twenty-one engraved plates published in 1826, the year before his death, illustrating the Book of Job — is the most concentrated and complete project of his biblical career and is widely held to be his masterpiece in the print medium. The Dante illustrations he was working on at the same moment were left unfinished.

His own prophetic books — printed by his idiosyncratic relief-etching process and hand-colored, often in tiny editions of a few copies — interleave Blake's own mythological cycles (Urizen, Los, Albion) with scriptural and apocalyptic imagery. The Marriage of Heaven and Hell, Jerusalem, and Milton are not Christian art in the conventional sense, but they read the Bible obsessively and rewrite it for an English Romantic age.

Blake worked outside the academy, was largely ignored in his own lifetime by the London art world, and lived poor. The Pre-Raphaelites, the Symbolists, W. B. Yeats, and the twentieth-century rediscovery of his prophetic books eventually made him a major modern figure. His grave in Bunhill Fields was relocated and memorialized in 2018.$BIO$,
  bio_sources = $JSON$[
    {"title":"William Blake — Wikipedia","url":"https://en.wikipedia.org/wiki/William_Blake","type":"wikipedia"},
    {"title":"William Blake — Encyclopædia Britannica","url":"https://www.britannica.com/biography/William-Blake","type":"britannica"},
    {"title":"William Blake — Tate","url":"https://www.tate.org.uk/art/artists/william-blake-39","type":"museum"}
  ]$JSON$::jsonb
where slug = 'william-blake';

-- ─── 38. Hans Baldung Grien ────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Hans Baldung, called Grien from his fondness for the color green, was the most independent of Albrecht Dürer's pupils. Born in Schwäbisch Gmünd in 1484 or 1485 into a family of jurists and clergy — an unusually learned background for a craftsman — and trained in Strasbourg before joining Dürer's Nuremberg workshop around 1503, he stayed with Dürer for about four years, then moved south to Strasbourg and Freiburg im Breisgau, where he ran his own workshop until his death in Strasbourg in 1545.

His central religious work is the Freiburg Cathedral high altarpiece, a great folding polyptych painted between 1512 and 1516. Its central panel shows the Coronation of the Virgin against a starry sky; the wings hold scenes of the Annunciation, Visitation, Nativity, and Flight into Egypt, with twelve apostles below; the closed exterior shows the Crucifixion. It is one of the most ambitious surviving German altarpieces of its generation and the principal anchor of Baldung's painted reputation. Earlier altarpieces in Halle and Stuttgart, Madonnas now in Nuremberg and Basel, and the late Mass of Saint Gregory (Cleveland, c. 1511) round out his religious output.

Alongside the conventional altarpiece work, Baldung produced an entirely separate body of woodcuts and drawings on subjects rare in his contemporaries: witches' Sabbaths, dances of Death, allegories of the Three Ages, and erotic mythological scenes. His Bewitched Stable Boy (woodcut, 1544) and Three Ages of Woman and Death (Vienna, c. 1510) are landmarks of the Northern Renaissance interest in mortality, sin, and the supernatural; they sit oddly beside, and have nothing in common with, his straight devotional commissions.

He served on Strasbourg's city council in his later years and outlived his teacher Dürer by seventeen years. By the time of his death the city was Lutheran, the new altarpiece market had collapsed, and Baldung's late religious work — relatively few canvases — already shows him moving toward the Protestant compositional preferences (Christ on the Cross, the supper scenes, isolated apostles) that would define German religious painting for the next century.$BIO$,
  bio_sources = $JSON$[
    {"title":"Hans Baldung — Wikipedia","url":"https://en.wikipedia.org/wiki/Hans_Baldung","type":"wikipedia"},
    {"title":"Hans Baldung Grien — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Hans-Baldung-Grien","type":"britannica"},
    {"title":"Hans Baldung — Staatliche Kunsthalle Karlsruhe","url":"https://www.kunsthalle-karlsruhe.de/en/","type":"museum"}
  ]$JSON$::jsonb
where slug in ('hans-baldung', 'hans-baldung-called-hans-baldung-grien');

-- ─── 39. Lucas van Leyden ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Lucas van Leyden was the most precocious printmaker of the Northern Renaissance and the leading Dutch painter of his generation. Born in Leiden in 1494, trained first by his father Huygh Jacobsz and then by the painter Cornelis Engebrechtsz — and reportedly producing engravings of professional quality before he was fifteen — he ran his own workshop in Leiden for the rest of his short life. He died in Leiden in 1533, in his late thirties.

His engraved Passion series, his individual Old Testament prints (Ecce Homo, the Conversion of Saul, the Adoration of the Magi, the Susanna and the Elders, David Playing the Harp Before Saul), and the great Calvary engravings of his maturity are among the technical landmarks of early sixteenth-century European printmaking. He pioneered the use of progressive lightening of the burin to suggest atmospheric distance — landscapes that recede in plate-tone alone — at the same moment Albrecht Dürer was working out the same problem on the other side of the Rhine. The two met at Antwerp in 1521; Dürer's diary records the visit and a small portrait drawing he made of his Dutch counterpart.

His paintings, fewer in number, include the Last Judgment triptych (Stedelijk Museum De Lakenhal, Leiden, 1526–1527), commissioned for the Pieterskerk; the Healing of the Blind Man of Jericho triptych (Hermitage, 1531); and the Moses Striking Water from the Rock (also Hermitage). The Last Judgment, recovered intact and conserved in the twentieth century, is the principal painted monument of the Northern Renaissance in the Netherlands and the largest surviving altarpiece by his hand.

His subject matter was almost entirely biblical — Old Testament narratives in a Northern key, Gospel scenes set against panoramic Dutch coastal landscapes, and a long line of single-figure devotional engravings of the Virgin and the saints. He was a key bridge between the late-medieval painting of Geertgen tot Sint Jans and the new generation of Antwerp Mannerists who would dominate Dutch and Flemish religious art at mid-century.$BIO$,
  bio_sources = $JSON$[
    {"title":"Lucas van Leyden — Wikipedia","url":"https://en.wikipedia.org/wiki/Lucas_van_Leyden","type":"wikipedia"},
    {"title":"Lucas van Leyden — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Lucas-van-Leyden","type":"britannica"},
    {"title":"Lucas van Leyden — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/lucas-van-leyden","type":"museum"}
  ]$JSON$::jsonb
where slug = 'lucas-van-leyden';

-- ─── 40. Albrecht Altdorfer ────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Albrecht Altdorfer was the leading painter of the Danube School and one of the great early landscape inventors of the Northern Renaissance. Born around 1480, almost certainly in Regensburg, where he is documented as a citizen from 1505 and where he held civic office (city architect, member of the Outer and then Inner Council) for the rest of his life, he died in Regensburg in 1538. He turned down the city's offer of the mayoralty in 1528 in order to finish a major painting commission.

His central religious works combine the new Northern interest in panoramic landscape with old-style narrative density. The Battle of Alexander at Issus (Alte Pinakothek, Munich, 1529) — though strictly a classical-history painting — frames its battle inside a sky and a panorama that read directly into his Christian compositions. The Saint Sebastian Altarpiece for the abbey of St. Florian near Linz (1509–1518), his largest surviving project, is a folding polyptych whose interior shows the Passion of Christ in eight panels, the Way of Sorrows on the wings, and a Resurrection on the back of the central section: a complete Passion cycle of the highest sixteenth-century Northern accomplishment. The Susanna and the Elders (Munich, 1526) and his Crucifixion miniatures round out his painted output.

Altdorfer also produced about 120 engravings and woodcuts, mostly on biblical and devotional subjects, including a famous Beautiful Mary of Regensburg (1519–1520) related to a contemporary local pilgrimage cult, and a sequence of small Passion plates that circulated widely. He was an early experimenter in pure landscape — small panels with no human figure at all, painted decades before the Dutch Golden Age made that genre commercial.

His religious work shows the late Gothic German imagination opening into Renaissance perspective without losing its medieval relish for ornament, jewel-color, and narrative crowding. He was Lutheran by the time of his death — Regensburg adopted the Reformation in 1542, four years after his passing — and his late altarpieces already show the move toward the more austere Protestant compositional sense.$BIO$,
  bio_sources = $JSON$[
    {"title":"Albrecht Altdorfer — Wikipedia","url":"https://en.wikipedia.org/wiki/Albrecht_Altdorfer","type":"wikipedia"},
    {"title":"Albrecht Altdorfer — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Albrecht-Altdorfer","type":"britannica"},
    {"title":"Albrecht Altdorfer — Alte Pinakothek, Munich","url":"https://www.pinakothek.de/en","type":"museum"}
  ]$JSON$::jsonb
where slug = 'albrecht-altdorfer';

-- ─── 41. Hans Schäufelein ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Hans Schäufelein was a German Renaissance painter and prolific woodcut designer, best known today as one of Albrecht Dürer's most productive collaborators and as the principal illustrator of several of the great printed books of the early sixteenth century. Born around 1480, probably in Nuremberg, trained in Dürer's workshop in the first decade of the 1500s, and active subsequently in Augsburg under Hans Holbein the Elder before settling in Nördlingen in 1515 — where he served as town painter for the rest of his career — he died in Nördlingen around 1540.

His religious work falls into three groups. First, his contributions to Dürer's projects in the Nuremberg years: the Speculum passionis Christi (Nuremberg, 1507), to which Schäufelein supplied most of the woodcut illustrations under Dürer's general direction, is the principal surviving monument of his apprenticeship. Second, his independent painted altarpieces — the Christ Carrying the Cross, the Heroldsberg Altarpiece (1521), and panel paintings of the Crucifixion now scattered across German museums — show a sober, late-Gothic-into-Renaissance manner with elongated figures and clear narrative organization. Third, and most extensively, his woodcut book illustration of the 1510s and 1520s: Hieronymus Schaufelin's small Passion (1507), the Theuerdank chivalric romance commissioned by the Emperor Maximilian I (Nuremberg, 1517), and dozens of single-leaf devotional woodcuts.

Schäufelein's woodcuts circulated throughout the German-speaking lands and made him, alongside Hans Burgkmair and Hans Baldung, one of the standard visual voices of pre-Reformation Lutheran Germany. His characteristic monogram — H S with a small shovel ("schäufelein" means "little shovel" in southern German) — appears on most of his prints.

He weathered the Reformation in Nördlingen, which adopted Lutheranism in 1525, and his late religious work reflects the move away from the great traditional altarpiece toward smaller, more intimate Lutheran-friendly devotional images. The town still preserves a number of his murals.$BIO$,
  bio_sources = $JSON$[
    {"title":"Hans Schäufelein — Wikipedia","url":"https://en.wikipedia.org/wiki/Hans_Sch%C3%A4ufelein","type":"wikipedia"},
    {"title":"Hans Schäufelein — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Sch%C3%A4ufelein","type":"museum"},
    {"title":"Hans Schäufelein — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG7395","type":"museum"}
  ]$JSON$::jsonb
where slug = 'hans-sch-ufelein';

-- ─── 42. Jacques Callot ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Jacques Callot was the great French printmaker of the early seventeenth century — a Lorraine-born etcher and engraver whose technical innovations and prolific output made him the most reproduced single-leaf print artist in Europe between Dürer and Rembrandt. Born in Nancy in 1592 to a herald at the ducal court, sent to Italy as a teenager (against his father's wishes, the early biographies say) and trained first in Rome and then in Florence in the workshop of the Medici court engraver Antonio Tempesta, he returned to Lorraine in 1621 and worked there for the rest of his life, dying in Nancy in 1635.

His Christian religious output is large. The Lives of the Holy Hermits (1629) is a series of small etchings of the desert fathers in idealized Italianate landscapes. The Great Passion (Lyon, 1623) is a horizontal series tracing the Passion of Christ from the Last Supper to the Resurrection. Saint John the Evangelist on Patmos, the Saint Sebastian, the Annunciation, the various Madonna prints, and a long sequence of saints' lives — including the Apostles, the Martyrdom of Saint Sebastian, and the Saint Peter Walking on the Water — appear and reappear across his catalogue.

His secular masterpiece, the Miseries and Misfortunes of War (Paris, 1633), eighteen small etchings of the suffering of civilians in the Thirty Years' War, has become one of the most-cited series of antiwar imagery in the history of art. It draws directly on the New Testament moral imagination — judgment, sin, the destruction of the wicked — even when its subject is the contemporary armies of Catholic and Protestant Europe.

Callot perfected the use of the échoppe, a hardened oval-pointed etching needle that allowed him to draw lines of variable width directly into the wax ground, mimicking the swell and taper of the engraver's burin without the engraver's labor. The technique, combined with multiple bath-stoppings, gave him etchings of unprecedented atmospheric range and crowd density. He produced over fourteen hundred etchings in his thirty-year career, and his influence on Rembrandt, Goya, and the entire later printmaking tradition is direct.$BIO$,
  bio_sources = $JSON$[
    {"title":"Jacques Callot — Wikipedia","url":"https://en.wikipedia.org/wiki/Jacques_Callot","type":"wikipedia"},
    {"title":"Jacques Callot — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Jacques-Callot","type":"britannica"},
    {"title":"Jacques Callot — National Gallery of Art","url":"https://www.nga.gov/collection/artist-info.973.html","type":"museum"}
  ]$JSON$::jsonb
where slug = 'jacques-callot';

-- ─── 43. Hendrick Goltzius ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Hendrick Goltzius was the dominant Dutch printmaker of the late sixteenth century and the founding figure of the Haarlem school. Born in Bracht-am-Niederrhein in 1558, raised in Duisburg where his father painted glass, and trained first by his father and then by the engraver Dirck Volckertszoon Coornhert (a humanist polymath who became Goltzius's intellectual as well as professional mentor), he settled in Haarlem in 1577 and ran the most influential printmaking workshop in the Netherlands for the next thirty years. He died in Haarlem in 1617.

His religious output is enormous. The Life of the Virgin (1593–1594), six engraved plates each executed in deliberate imitation of a different earlier master — Dürer, Raphael, Lucas van Leyden, and others — is a virtuoso demonstration of his technical mastery and his ability to read and reproduce the styles of his predecessors. The Passion of Christ in twelve plates, the great Crucifixion, the Annunciation, the Adoration of the Shepherds, the engravings after his own designs of the Apostles and the Evangelists, and a long sequence of Old Testament narratives circulated throughout the Catholic and Protestant Netherlands and across the Rhine into Germany.

A right-hand burn injury sustained in a childhood fire never healed properly and gave Goltzius a permanently constricted grip; the engraving lines that this disability forced him to develop — long, swelling, parallel strokes laid down with a sweeping movement of the entire forearm — became the signature Goltzius mark, copied by his pupils and circulated as the model for late-Mannerist Dutch engraving for two generations.

A trip to Italy in 1590–1591 transformed his style from late-Mannerist exuberance toward a calmer, more classical, Caravaggio-inflected manner, and on his return he turned increasingly to painting; the late paintings of Lot and his Daughters (Rijksmuseum, 1616), the Venus and Adonis, and the Vertumnus and Pomona are evidence of a major painter who arrived only at the end of his life. He took on Jacob Matham, his stepson, as his successor in the print shop, and the Goltzius workshop continued his designs into the 1620s.$BIO$,
  bio_sources = $JSON$[
    {"title":"Hendrick Goltzius — Wikipedia","url":"https://en.wikipedia.org/wiki/Hendrick_Goltzius","type":"wikipedia"},
    {"title":"Hendrick Goltzius — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Hendrik-Goltzius","type":"britannica"},
    {"title":"Hendrick Goltzius — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/hendrick-goltzius","type":"museum"}
  ]$JSON$::jsonb
where slug = 'hendrick-goltzius';

-- ─── 44. Hieronymus (Jerome) Wierix ────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Hieronymus Wierix was the most prolific of the three Wierix brothers — Antwerp engravers whose output, taken together, dominated Catholic devotional printmaking in the Spanish Netherlands across the late sixteenth and early seventeenth centuries. Born in Antwerp in 1553 to the painter Antoon Wierix, trained alongside his brothers Jan and Antonius II in their father's workshop and then under the great printmaker Hieronymus Cock at the publishing firm Aux Quatre Vents, he produced more than two thousand identifiable engravings during his life. He died in Antwerp in 1619.

His central project was the systematic visual program of the post-Tridentine Catholic Counter-Reformation as it took shape in Antwerp under Spanish rule. He worked for years on commissions from the Society of Jesus — the Jesuits, founded in 1534 and based in Rome — including the great Evangelicae Historiae Imagines of Jerónimo Nadal (Antwerp, 1593–1594), one of the most influential illustrated devotional books of the entire early modern period: 153 plates illustrating the Gospel readings for every Sunday and feast day, with extensive accompanying meditations. Hieronymus engraved a substantial portion of the plates personally, and the volume was reprinted, copied, and circulated by Jesuit missions from Mexico to China for the next two hundred years.

He produced complete cycles of the Passion of Christ, the Life of the Virgin, the Apostles, the Litany of the Virgin, the Cor Iesu, and almost every Catholic devotional theme — small-format engravings designed to be cut out and pasted into prayer books, larger sheets for distribution at confraternity meetings, and book illustrations for the Antwerp publishers Plantin-Moretus and the Jesuit press.

His personal style is unmistakable: meticulously crosshatched, restrained in expression, with a soft tonal range and an unusually intimate treatment of devotional subjects. His prints are among the most reproduced and copied religious images of the early modern period and shaped the visual vocabulary of Counter-Reformation Catholicism from Spain to the Philippines.$BIO$,
  bio_sources = $JSON$[
    {"title":"Hieronymus Wierix — Wikipedia","url":"https://en.wikipedia.org/wiki/Hieronymus_Wierix","type":"wikipedia"},
    {"title":"Wierix family — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Wierix-family","type":"britannica"},
    {"title":"Hieronymus Wierix — Royal Library of Belgium","url":"https://www.kbr.be/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'hieronymus-jerome-wierix';

-- ─── 45. Marcantonio Raimondi ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Marcantonio Raimondi was the most important Italian engraver of the High Renaissance and the artist who, by translating Raphael's compositions into circulating prints, made the visual idiom of the Roman papal court the common currency of European art for the next two centuries. Born around 1475 in Argini, near Bologna, trained in the workshop of the Bolognese goldsmith and engraver Francesco Francia, and active in Rome from about 1510 in close partnership with Raphael until that painter's death in 1520, he ran the workshop that engraved Raphael's drawings and unrealized compositions. He continued working in Rome through the Sack of 1527, after which he disappears from the documentary record; he probably died in Bologna around 1534.

His religious work falls almost entirely in his Roman period and consists of engravings made directly from Raphael's drawings, often from drawings the painter made specifically for engraving rather than from finished frescoes or panels. The Massacre of the Innocents (1511, after a Raphael drawing) is one of the most copied compositions of its century. The Lo Spasimo (Christ Falling on the Way to Calvary), the Judgment of Paris (whose central river-gods reappear, transformed, in Manet's Déjeuner sur l'herbe four hundred years later), the Adam and Eve, the Saint Cecilia after Raphael's Bologna altarpiece, and the entire engraved program of the Sistine Chapel ceiling and the Vatican Stanze — these prints carried Raphael's vocabulary and Michelangelo's anatomy across Europe in editions that any artist could afford.

A side-project — sixteen erotic engravings (the so-called I Modi) made in 1524 after drawings by Giulio Romano, Raphael's chief assistant — landed Marcantonio briefly in a Roman prison; his release was secured by Cardinal Giulio de' Medici, the future Pope Clement VII.

The Sack of Rome in 1527 wrecked his workshop, his collected drawings, and his commercial network. He returned to Bologna and disappears. By the time he stopped working, however, the conventions of European reproductive engraving — print after design, distribution by editions, copyright as we now know it (his disputes with Albrecht Dürer about copying Dürer's woodcuts are the foundational case in print copyright history) — were established. He shaped what came next more thoroughly than any contemporary painter except Raphael himself.$BIO$,
  bio_sources = $JSON$[
    {"title":"Marcantonio Raimondi — Wikipedia","url":"https://en.wikipedia.org/wiki/Marcantonio_Raimondi","type":"wikipedia"},
    {"title":"Marcantonio Raimondi — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Marcantonio-Raimondi","type":"britannica"},
    {"title":"Marcantonio Raimondi — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG44552","type":"museum"}
  ]$JSON$::jsonb
where slug = 'marcantonio-raimondi';

-- ─── 46. Hans Burgkmair the Elder ──────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Hans Burgkmair the Elder was, alongside Albrecht Dürer and Hans Holbein the Elder, one of the three principal artists of the Augsburg circle that brought the Italian Renaissance into German painting. Born in Augsburg in 1473 to the painter Thoman Burgkmair, trained in his father's workshop and possibly briefly with Martin Schongauer in Colmar, and active in Augsburg for almost his entire career, he died in Augsburg in 1531. He was the principal court painter of the city's leading patron, the merchant-banker Jakob Fugger, and one of the favored designers used by the Emperor Maximilian I.

His Christian religious work is concentrated in altarpieces and devotional woodcuts. The Saint John Altarpiece (Alte Pinakothek, Munich, 1518), the Crucifixion now in Augsburg, the Esther triptych for the Dominican church, and the Madonna and Saints of 1509 (Nuremberg) are the principal painted survivals. He produced the great series of Lebensgeschichte des Kaisers Maximilian (Life of the Emperor Maximilian, 1514–1518), the Triumphzug Maximilians (Triumphal Procession of Maximilian, 1516–1518), and the Genealogy of Maximilian for the imperial publishing project — secular cycles, but they educated his hand for the religious commissions that ran in parallel.

He was an early and skilled experimenter with the chiaroscuro woodcut: the addition of one or two tone-blocks printed in flat color over a black-line block, producing what we now call a tone-print. His Saint George on Horseback (1508), one of the first chiaroscuro woodcuts produced in Germany, remains a landmark of the technique. The chiaroscuro Lovers Surprised by Death (1510) and the religious chiaroscuros of the Madonna and Crucifixion that followed shaped the development of the technique for the next half-century.

His personal style — sweetly proportioned, smoothly modeled, jewel-colored, with the bright chromatic Italian Renaissance palette translated into Augsburg's wood-panel tradition — gives his religious paintings a tenderness that distinguishes them from Dürer's grand-manner austerity. Augsburg adopted the Reformation in 1534, three years after Burgkmair's death; his late altarpieces are the last great Augsburg pre-Reformation religious commissions.$BIO$,
  bio_sources = $JSON$[
    {"title":"Hans Burgkmair — Wikipedia","url":"https://en.wikipedia.org/wiki/Hans_Burgkmair","type":"wikipedia"},
    {"title":"Hans Burgkmair the Elder — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Hans-Burgkmair-the-Elder","type":"britannica"},
    {"title":"Hans Burgkmair — Alte Pinakothek, Munich","url":"https://www.pinakothek.de/en","type":"museum"}
  ]$JSON$::jsonb
where slug = 'hans-burgkmair';

-- ─── 47. Parmigianino ──────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Parmigianino — born Girolamo Francesco Maria Mazzola in Parma in 1503 — was the most refined of the High Renaissance Mannerists and the painter who carried Correggio's soft, light-filled manner toward the elongated, hyper-elegant figural style that defined Italian painting in the second quarter of the sixteenth century. Trained first by his uncles, the painters Pier Ilario and Michele Mazzola, after his father's early death, and then in the orbit of Correggio in Parma, he traveled to Rome around 1524 with samples of his work — the Self-Portrait in a Convex Mirror among them — and was almost immediately taken up by Pope Clement VII and the Roman intellectual circle that surrounded him. The Sack of Rome in 1527 forced him to flee; he died in Casalmaggiore in 1540, just thirty-seven years old.

His Madonna with the Long Neck (Uffizi, Florence, c. 1535–1540), commissioned for the funerary chapel of Elena Baiardi in Parma, is the iconic statement of the Mannerist religious image: an impossibly attenuated Virgin holds a serpentine Christ Child, surrounded by attendant angels of the same etiolated grace, with a single tiny prophet and an isolated marble column receding into a dreamlike background. Left unfinished at the painter's death, it was installed in Parma's Santa Maria dei Servi and remained there until the eighteenth century.

His other religious masterworks include the Vision of Saint Jerome (National Gallery, London, 1526–1527), painted in Rome and one of the great altarpieces of the Sack-era city; the great frescoes in the church of Santa Maria della Steccata in Parma (1531–1539), whose endless delays — Parmigianino was distracted by his obsession with alchemy in his last years — eventually landed him in court for breach of contract; the Madonna of the Rose (Dresden, c. 1530); and a long sequence of intimate panel paintings of the Holy Family and the Virgin and Child.

He was also a prolific etcher and the introducer of etching as a serious artist's medium in Italy. His prints — soft, almost drawn-in-the-air lines achieved through a technique he developed himself — survived the eclipse of his painted reputation in the seventeenth century and influenced Federico Barocci, the Carracci, and the early Italian Baroque generation.$BIO$,
  bio_sources = $JSON$[
    {"title":"Parmigianino — Wikipedia","url":"https://en.wikipedia.org/wiki/Parmigianino","type":"wikipedia"},
    {"title":"Parmigianino — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Parmigianino","type":"britannica"},
    {"title":"Parmigianino — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks/madonna-with-the-long-neck","type":"museum"}
  ]$JSON$::jsonb
where slug = 'parmigianino-girolamo-francesco-maria-mazzola';

-- ─── 48. Maarten van Heemskerck ────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Maarten van Heemskerck was the leading Dutch Romanist of the sixteenth century — a Northern painter whose long Roman sojourn (1532–1536/37) immersed him in Michelangelo's late Sistine Chapel and the recovered antiquities of the city, and whose subsequent four-decade career in Haarlem made him the principal channel through which Roman High Renaissance vocabulary entered Netherlandish religious art. Born in Heemskerk near Haarlem in 1498, trained in Haarlem first by Cornelis Willemsz and then in Jan van Scorel's circle, and active in Haarlem after his return until his death there in 1574, he produced both ambitious painted altarpieces and an enormous body of designs for engraving.

The Saint Lawrence Altarpiece (Linköping Cathedral, Sweden, 1538–1540) — commissioned by a Dutch patron, completed after his return from Rome, dispersed in the seventeenth century, and partly reassembled in Sweden — remains his largest documented Christian narrative project. The Crucifixion altarpiece in the Frans Hals Museum (Haarlem) and the Saint Luke Painting the Virgin (Haarlem, c. 1532, painted as a guild gift before his Italian trip and showing the painter's own self-portrait as Saint Luke) are among the principal anchors of his painted reputation.

His engraved output is vast and entirely religious in subject. The Triumph of Christ (1559) is a great twelve-plate Old- and New-Testament cycle. The Story of Eliezer and Rebecca, the Passion in eight prints, the great Acts of the Apostles series engraved by Philip Galle and others after Heemskerck's designs, the Old Testament patriarchs, the Triumphs of Patience, and dozens of other devotional series circulated through the Antwerp publishing houses of Hieronymus Cock and his successors. By volume, Heemskerck was the most-engraved Northern designer of his generation; the prints carried his Romanist vocabulary into every Protestant and Catholic household that could afford them.

He survived the Iconoclastic Fury of 1566 — when Calvinist mobs destroyed Catholic religious imagery across the Low Countries, including some of his own altarpieces — and the early years of the Dutch Revolt; his late Haarlem work shows the move toward the smaller, intimate, Old Testament-leaning religious painting that the new Protestant patrons preferred.$BIO$,
  bio_sources = $JSON$[
    {"title":"Maarten van Heemskerck — Wikipedia","url":"https://en.wikipedia.org/wiki/Maarten_van_Heemskerck","type":"wikipedia"},
    {"title":"Maarten van Heemskerck — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Maerten-van-Heemskerck","type":"britannica"},
    {"title":"Maarten van Heemskerck — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/maarten-van-heemskerck","type":"museum"}
  ]$JSON$::jsonb
where slug = 'maarten-van-heemskerck';

-- ─── 49. Gerard David ──────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Gerard David was the last great painter of the Bruges school, the artist who carried the Early Netherlandish tradition of Jan van Eyck and Rogier van der Weyden across the threshold of the sixteenth century with all of its devotional gravity intact. Born around 1455 in Oudewater, in what is now the Netherlands, registered in the Bruges painters' guild in 1484, and active in the city for the rest of his career, he became dean of the guild in 1501 and held wide standing in the Bruges market until his death there in 1523.

His Christian religious work is concentrated in altarpieces of unusual compositional discipline and chromatic restraint. The Justice of Cambyses diptych (Groeningemuseum, Bruges, 1498), commissioned for the courtroom of the Bruges aldermen and depicting the trial and flaying of the corrupt judge Sisamnes from Herodotus, frames a civic moral lesson in the visual conventions of biblical narrative. His Marriage at Cana (Louvre, c. 1500), the Virgin and Child with Saints (London, c. 1505), the Annunciation (Metropolitan Museum, c. 1506), and the great Baptism of Christ triptych (Bruges, c. 1502–1508) round out the painted corpus.

His Madonnas with the Soup Bowl variants — small intimate panels of the Virgin nursing the Child or feeding him with a spoon, with apples, books, and household objects laid on the windowsill behind them — became one of the most-copied compositions in the Bruges export market. Several were sent through the Hanseatic League trade to as far as Norway and northern Germany.

David never traveled to Italy. His style — patient, jewel-colored, technically immaculate, with the deliberate observation of textiles, skin, and landscape that defined the Early Netherlandish school — runs against the contemporary Italianizing tendencies of his Antwerp neighbors. By the time of his death the Bruges market had collapsed under the rise of Antwerp as the new Northern commercial center, and the painted manner he had defended for forty years was already historic. His pupil Adrian Isenbrandt continued the workshop in Bruges into the next generation.$BIO$,
  bio_sources = $JSON$[
    {"title":"Gerard David — Wikipedia","url":"https://en.wikipedia.org/wiki/Gerard_David","type":"wikipedia"},
    {"title":"Gerard David — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Gerard-David","type":"britannica"},
    {"title":"Gerard David — Groeningemuseum, Bruges","url":"https://www.museabrugge.be/en/groeningemuseum","type":"museum"}
  ]$JSON$::jsonb
where slug = 'gerard-david';

-- ─── 50. Giovanni di Paolo ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giovanni di Paolo di Grazia was the leading Sienese painter of the fifteenth century and the most idiosyncratic interpreter of the Sienese tradition that Duccio had founded a hundred years earlier. Born in Siena around 1398, registered in the Sienese painters' guild from 1417, and active in the city for the rest of his sixty-year career, he painted altarpieces, predella panels, devotional images, and illuminated manuscripts on commission from Sienese churches, monastic houses, and private patrons. He died in Siena in 1482.

His Christian religious work is unmistakable: small-scale, jewel-colored, with elongated figures moving through landscapes that bend, twist, and flame with an almost visionary intensity. The Last Judgment (Pinacoteca Nazionale, Siena, c. 1465), the Paradise (Metropolitan Museum, c. 1445) — a panel of the blessed in heaven embracing in pastel-colored robes — the Creation and Expulsion (Metropolitan Museum, c. 1445), the great Pizzicaiolo Altarpiece (now dispersed), and the long sequence of small predella panels and personal devotional images he produced throughout his life are scattered across Siena, the Vatican, the Louvre, the National Gallery in London, the Metropolitan Museum, and the Walters Art Museum in Baltimore.

He illuminated, late in life, the manuscript of Dante's Paradiso for the great fifteenth-century Sienese codex now in the British Library — a sequence of small framed panels around the text whose visionary landscapes are among the most original surviving illuminations of any Italian Quattrocento manuscript.

His style ran against the prevailing Florentine current. Where Masaccio and his successors were rebuilding pictorial space around linear perspective, weighty bodies, and rational scale, Giovanni went the other way — exaggerating proportion, simplifying space, intensifying color, and cultivating an emotional register closer to the late-medieval Sienese mystics (Catherine of Siena, his older contemporary) than to the Florentine humanists. The nineteenth century rediscovered him through the Pre-Raphaelites, and he is now read as one of the most original visual imaginations of the entire Italian fifteenth century.$BIO$,
  bio_sources = $JSON$[
    {"title":"Giovanni di Paolo — Wikipedia","url":"https://en.wikipedia.org/wiki/Giovanni_di_Paolo","type":"wikipedia"},
    {"title":"Giovanni di Paolo — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Giovanni-di-Paolo","type":"britannica"},
    {"title":"Giovanni di Paolo — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Giovanni+di+Paolo","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giovanni-di-paolo-giovanni-di-paolo-di-grazia';

-- ─── 51. Jusepe de Ribera ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Jusepe de Ribera, called Lo Spagnoletto (the Little Spaniard) by his Italian contemporaries, was the leading Spanish painter working in Italy in the first half of the seventeenth century and one of the great Caravaggesque masters. Born in Játiva, near Valencia, in 1591, trained in Spain — almost certainly in the Valencian workshop of the painter Francisco Ribalta — and in Italy by his early twenties, he settled in Naples around 1616 and worked there under successive Spanish viceroys until his death in 1652. Naples was Spanish-ruled at the time, and Ribera's combination of Spanish patronage and Neapolitan production gave him a uniquely double national identity.

His Christian religious work runs to several hundred surviving canvases. The Martyrdom of Saint Philip (Prado, 1639) — for years catalogued as a Saint Bartholomew, then re-identified — shows the apostle bound to a cross, his weight pulling at the ropes, in the dark-light contrasts that came directly from Caravaggio's Roman period. The Bearded Woman (Hospital de Tavera, Toledo, 1631), the Drunken Silenus (Capodimonte, Naples), the Boy with a Clubfoot (Louvre, 1642), and a long sequence of penitent saints, ascetic apostles, and martyrdom scenes — Saint Sebastian, Saint Andrew, Saint Bartholomew, the Magdalene, the Holy Family — fill the great collections of Spain, Naples, and the Vatican.

He was equally a major etcher. His suite of religious and mythological etchings of the 1620s and 1630s — the Drunken Silenus, the Saint Jerome, the Crucifixion, the Saint Bartholomew Drawn Up by Two Henchmen — circulated across Europe and brought him commissions and pupils from Madrid to Rome. The strong Caravaggesque chiaroscuro of his etched line was directly studied by Rembrandt in the Netherlands a generation later.

Ribera's late style — broadly brushed, almost monochromatic, with the surface of the paint visibly worked over by the brush — anticipated by a century the painterly freedom that the eighteenth-century Spanish school would develop in Goya's hands. He never returned to Spain. His Spanish viceroyal patrons sent his paintings home in large numbers, and the Spanish royal collection now holds the largest single body of his work, in the Prado.$BIO$,
  bio_sources = $JSON$[
    {"title":"Jusepe de Ribera — Wikipedia","url":"https://en.wikipedia.org/wiki/Jusepe_de_Ribera","type":"wikipedia"},
    {"title":"Jusepe de Ribera — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Jusepe-de-Ribera","type":"britannica"},
    {"title":"Jusepe de Ribera — Museo del Prado","url":"https://www.museodelprado.es/en/the-collection/artist/ribera-jose-de/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'jusepe-de-ribera-called-lo-spagnoletto';

-- ─── 52. Antonio Tempesta ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Antonio Tempesta was a Florentine-born painter and one of the most prolific etchers of the Italian late Renaissance, the artist whose printed compositions of biblical history, hunting scenes, and battles circulated throughout Catholic Europe in editions of thousands. Born in Florence in 1555, trained in the workshop of Santi di Tito and then with the Flemish Mannerist Joannes Stradanus (Jan van der Straet) — whose influence on Tempesta's animal anatomy and battle compositions is direct — he moved to Rome in his late twenties and worked there as both painter and printmaker for the rest of his life. He died in Rome in 1630.

His painted output included frescoes for the Vatican (the Galleria delle Carte Geografiche, where he supplied the populated landscape views around Egnazio Danti's maps, 1580s) and ceiling and wall decorations for Roman palaces, but his lasting reputation rests on his etchings. The Old and New Testament series — most importantly the great suite of 220 small etchings of biblical scenes published in 1613 as Sacrae Historiae Acta and Sacrae Historiae Tabulae — provided artists, copyists, and embroiderers across Europe with a complete visual concordance of biblical narrative. The Acts of the Apostles in twelve plates, the Passion of Christ, the Apocalypse, and dozens of single-leaf devotional etchings circulated through publishers in Rome, Antwerp, Paris, and Augsburg.

He was also the master of the printed battle scene. The Battles of Alexander, the Triumphs of Caesar, and the Hunts series — large multi-plate compositions of cavalry, weapons, and animals in motion — taught generations of European artists how to draw a charging horse. The young Jacques Callot was his pupil in the Florentine workshop years and learned from him both the etching technique and the dense, multi-figure composition that Callot would later perfect in Lorraine.

Tempesta's combination of inexhaustible invention, fluent etched line, and reliable distribution through publishers made him, at his peak, the most widely seen Italian print artist of his generation. The Sacrae Historiae plates were copied directly by craftsmen of every kind — embroiderers, silversmiths, ivory carvers, manuscript illuminators — and shaped the visual habits of religious art in the Catholic world from Spain to the Spanish New World.$BIO$,
  bio_sources = $JSON$[
    {"title":"Antonio Tempesta — Wikipedia","url":"https://en.wikipedia.org/wiki/Antonio_Tempesta","type":"wikipedia"},
    {"title":"Antonio Tempesta — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Antonio+Tempesta","type":"museum"},
    {"title":"Antonio Tempesta — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG62317","type":"museum"}
  ]$JSON$::jsonb
where slug = 'antonio-tempesta';

-- ─── 53. Adriaen Collaert ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Adriaen Collaert was a leading engraver and print publisher of the late sixteenth and early seventeenth centuries in Antwerp — the city that, after the recovery from the religious wars and the consolidation of Spanish-Catholic rule, became the printing capital of Counter-Reformation devotional imagery. Born in Antwerp around 1560 to the engraver Hans Collaert the Elder, trained in his father's workshop and married into the Galle family of printmakers (his wife Catharina was a daughter of Philip Galle), and active in the city for his entire career, he died in Antwerp in 1618.

His religious output was prolific and entirely shaped by the post-Tridentine Catholic visual program. He engraved after designs by Jan van der Straet (Stradanus), Maarten de Vos, Hans Bol, Frans Floris, Crispijn van den Broeck, Ambrosius Francken, Crispin de Passe, and many of the Flemish painters whose religious commissions filled the Antwerp churches and Jesuit schools after the late-1580s reconciliation. His engraved series of the Passion of Christ, the Life of the Virgin, the Lives of the Saints, the Acts of the Apostles, and the Old Testament patriarchs and matriarchs circulated as both single-leaf prints and bound illustrated books from Antwerp through the Hispano-Flemish trading network to Spain, Italy, the German-speaking lands, and the Spanish overseas missions.

His Vita, Passio et Resurrectio Iesu Christi (a great life-of-Christ cycle, 1591) and his contributions to the Jesuit-commissioned Evangelicae Historiae Imagines of Jerónimo Nadal (Antwerp, 1593, on which he worked alongside Hieronymus Wierix and several other engravers) anchor his religious reputation. Beyond strict biblical narrative, his Florilegium of plant studies (1592), his bird-life prints, and his fish series demonstrate the late sixteenth-century interest in natural history that Antwerp printers cultivated for both scientific and devotional purposes — the Christian doctrine of creation made visible in plant-by-plant detail.

His son, Adriaen Collaert the Younger, continued the workshop after his death; his brother-in-law Theodoor Galle and the wider Collaert-Galle family network kept the firm productive into the middle of the seventeenth century.$BIO$,
  bio_sources = $JSON$[
    {"title":"Adriaen Collaert — Wikipedia","url":"https://en.wikipedia.org/wiki/Adriaen_Collaert","type":"wikipedia"},
    {"title":"Adriaen Collaert — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/adriaen-collaert","type":"museum"},
    {"title":"Adriaen Collaert — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG6037","type":"museum"}
  ]$JSON$::jsonb
where slug = 'adriaen-collaert';

-- ─── 54. Israhel van Meckenem ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Israhel van Meckenem was the most prolific German engraver of the fifteenth century and the artist who, by sheer volume and circulation, made the engraved religious image a household object in late-medieval Northern Europe. Born around 1435 in Meckenem (near Bocholt in the Lower Rhine region), trained almost certainly in his father's goldsmith workshop and probably also in the orbit of the Master E. S. (the great anonymous engraver of the mid-fifteenth century, with whom Israhel apprenticed and from whom he eventually inherited the workshop's plates), he settled in Bocholt by the 1470s and worked there for the rest of his life. He died in Bocholt in 1503.

His engraved output runs to about 620 surviving plates — by far the largest individual print catalogue of the fifteenth century. The vast majority are religious: a complete Passion of Christ in twelve plates (which exists in multiple editions, repeatedly reworked), a Life of the Virgin, the Marriage of the Virgin, the Apostles, dozens of single-figure devotional saints, the Mass of Saint Gregory, the Twelve Sibyls, the Wise and Foolish Virgins, and a long sequence of Madonna-and-Child compositions. He also produced about thirty plates of secular subjects — peasants dancing, courtly scenes, the Gymkhana of the Pomegranates — that count among the earliest engravings of contemporary genre subjects in European art.

He was a relentless copyist and republisher. Most of his plates after Schongauer, the Master E. S., the Master of the Banderoles, and various Netherlandish and Italian sources were direct copies — sometimes with the original master's monogram replaced by his own (the famous "i.m." that appears on the plates), sometimes signed alongside the original. The practice was standard fifteenth-century commercial behavior; the modern category of copyright did not exist; and Israhel's copies are themselves often the only surviving record of compositions whose original plates have been lost.

His prints traveled the late-medieval Catholic world in editions of thousands, were pasted into prayer books, distributed at confraternity meetings, copied onto the walls of small parish churches, and used by metalworkers, embroiderers, and stained-glass painters as ready-made compositions. He shaped the visual catechesis of late-fifteenth-century Northern Europe more than almost any other single artist of his generation.$BIO$,
  bio_sources = $JSON$[
    {"title":"Israhel van Meckenem — Wikipedia","url":"https://en.wikipedia.org/wiki/Israhel_van_Meckenem","type":"wikipedia"},
    {"title":"Israhel van Meckenem — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Meckenem","type":"museum"},
    {"title":"Israhel van Meckenem — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG39655","type":"museum"}
  ]$JSON$::jsonb
where slug = 'israhel-van-meckenem';

-- ─── 55. Sebald Beham ──────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Sebald Beham was one of the leading German engravers of the second quarter of the sixteenth century and a member of the loose group known as the Little Masters — Albrecht Dürer's heirs in Nuremberg who specialized in tiny, technically virtuoso engravings on biblical, mythological, and allegorical subjects. Born in Nuremberg in 1500, trained in Dürer's circle (along with his older brother Barthel and the engraver Georg Pencz, all of whom were tried in 1525 for radical Protestant beliefs and briefly banished from the city), he eventually settled in Frankfurt in 1532 and worked there until his death in 1550.

His religious output is concentrated in small-format engravings, woodcuts, and book illustration. The Old Testament series — including the Story of David, the Story of Joseph, the Patriarchs, the Prophets, and the Old Testament Heroes — and the New Testament cycles — the Apostles, the Beatitudes, the Eight Beatitudes, scenes from the Passion of Christ — circulated as both single-leaf prints and as components of devotional and emblematic books. He produced the woodcut illustrations for the Biblische Historien (Frankfurt, 1533, in editions through the next twenty years) and for several other vernacular biblical publications of the early Reformation period.

His Frankfurt years were prolific in the production of secular subjects as well — peasant dances, allegories of the months, mythological cycles, illustrations to Lucian and Aesop — but the religious work continued without break alongside the secular. He developed the Little Master format to its highest finish: prints small enough to fit in the palm of the hand, executed with engraved lines so close-set that they read at first glance as continuous tone, with biblical or allegorical narratives compressed into the densest possible visual statement.

He was a Protestant his entire adult life. His banishment from Nuremberg in 1525 was for radical Anabaptist sympathies; he later moderated to Lutheran orthodoxy and held citizenship in Frankfurt with no further conflict. The Little Master prints of the 1530s and 1540s, his and his brother's together, count among the most-collected German Renaissance prints of any period and shaped the engraved devotional image throughout the German-speaking lands.$BIO$,
  bio_sources = $JSON$[
    {"title":"Sebald Beham — Wikipedia","url":"https://en.wikipedia.org/wiki/Sebald_Beham","type":"wikipedia"},
    {"title":"Sebald Beham — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Sebald+Beham","type":"museum"},
    {"title":"Sebald Beham — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG7387","type":"museum"}
  ]$JSON$::jsonb
where slug = 'sebald-beham';

-- ─── 56. Heinrich Aldegrever ───────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Heinrich Aldegrever was a German engraver and goldsmith of the second generation after Albrecht Dürer, one of the principal members of the Little Masters whose tiny, finely worked plates carried Reformation-era German biblical and allegorical subjects through the print markets of the mid-sixteenth century. Born in Paderborn in 1502, trained in his father's goldsmith shop and in the broader Westphalian metalworking tradition, and settled in Soest in northwestern Germany from about 1525 onward, he ran his own workshop in that city and produced engravings, ornament designs, and goldsmith work until his death around 1561.

His engraved output runs to about 290 plates, almost evenly split between biblical narrative, mythological allegory, ornament, and portraiture. The biblical series include the great Story of Joseph in twelve plates, the Story of Susanna, the Apostles in fifteen plates, the Parable of the Good Samaritan, the Wise and Foolish Virgins, the four Evangelists, the Children of Israel under Moses, and individual plates of the Annunciation, the Crucifixion, the Resurrection, and many other Christian subjects. His Old Testament cycles in particular, with their delicately crowded compositions and his characteristic small monogram, are the typical late-1530s and 1540s Aldegrever religious print.

He was an early adherent of the Reformation. Soest had adopted Lutheranism by the 1530s, and Aldegrever's religious imagery — Old Testament-leaning, sober in tone, with subjects (the patient Joseph, the chaste Susanna, the suffering Job) that had clear Lutheran moral resonance — fit the new evangelical visual culture as smoothly as any of his contemporaries' work. He produced portrait engravings of Luther's wife Katharina von Bora's brother Hans, of the Anabaptist leaders of Münster (whose 1534–1535 takeover and suppression took place not far from Soest), and of various Westphalian patrons.

His ornament designs — strapwork, foliate scrolls, candelabra panels — were collected and copied by goldsmiths, joiners, and cabinetmakers throughout the German lands and the Low Countries. The combination of the religious plates and the ornament suites made him, at his peak, one of the most thoroughly distributed Northern engravers of the mid-sixteenth century.$BIO$,
  bio_sources = $JSON$[
    {"title":"Heinrich Aldegrever — Wikipedia","url":"https://en.wikipedia.org/wiki/Heinrich_Aldegrever","type":"wikipedia"},
    {"title":"Heinrich Aldegrever — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Aldegrever","type":"museum"},
    {"title":"Heinrich Aldegrever — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG37958","type":"museum"}
  ]$JSON$::jsonb
where slug = 'heinrich-aldegrever';

-- ─── 57. Carlo Maratti ─────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Carlo Maratti — sometimes spelled Maratta — was the leading Roman painter of the late seventeenth century and the artist whose late-Baroque-into-classicizing manner defined Roman religious painting in the decades immediately before the rise of the eighteenth-century Roman school. Born in Camerano in the Marche in 1625, sent to Rome as a young apprentice to the painter Andrea Sacchi (the principal exponent of the Roman classicizing tradition that descended from Annibale Carracci through Domenichino), and active in Rome for the rest of his career, he became the city's principal religious painter from the 1660s onward and was eventually appointed Restorer of the Vatican paintings under Pope Clement XI. He died in Rome in 1713.

His Christian religious work is concentrated in altarpieces of the great Roman churches and in private devotional paintings for the Roman aristocratic and ecclesiastical patrons of the Barberini, Chigi, and Rospigliosi-Pallavicini families. The Adoration of the Shepherds, the Madonna and Child with Saints, the Death of Saint Joseph, the Vision of Saint John the Evangelist, the Birth of the Virgin (Santa Maria della Pace, Rome, 1689), and the great altarpieces in San Marco al Campidoglio, San Carlo al Corso, and Santa Maria del Popolo all show his characteristic combination of monumental High Renaissance composition with the warm color and soft handling of late-Baroque practice.

His Madonnas — soft-eyed, placid, dressed in deep cobalt blue and rose, with the Christ Child in graceful proportional contrast — became the standard Roman devotional image of the late seventeenth century and were copied, reproduced in engraving, and circulated as small devotional pictures throughout Catholic Europe and the Americas. His engraved reputation, supported by the prolific Carlo Cesi and other Roman printmakers who reproduced his compositions, carried the Maratta type into eighteenth-century devotional practice from Naples to Lima.

He was also a major draftsman and a lifelong teacher; the Maratta school produced most of the leading Roman religious painters of the next generation, including Niccolò Berrettoni, Giuseppe Chiari, and Pier Leone Ghezzi. He was buried in Santa Maria degli Angeli in Rome.$BIO$,
  bio_sources = $JSON$[
    {"title":"Carlo Maratti — Wikipedia","url":"https://en.wikipedia.org/wiki/Carlo_Maratta","type":"wikipedia"},
    {"title":"Carlo Maratta — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Carlo-Maratta","type":"britannica"},
    {"title":"Carlo Maratta — National Gallery, London","url":"https://www.nationalgallery.org.uk/artists/carlo-maratta","type":"museum"}
  ]$JSON$::jsonb
where slug = 'carlo-maratti';

-- ─── 58. Cornelis Cort ─────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Cornelis Cort was the leading Netherlandish reproductive engraver of the late sixteenth century and the artist whose Italian period transformed the technical possibilities of European engraving for two generations. Born in Hoorn in the northern Netherlands around 1533, trained in Antwerp in the workshop of the great printmaker Hieronymus Cock at the publishing firm Aux Quatre Vents, he traveled to Venice around 1565 — invited there by Titian to engrave the painter's compositions — and after a brief return to the Netherlands settled permanently in Rome by 1571. He died in Rome in 1578, in his mid-forties.

His engraving technique developed in two distinct phases. In the Netherlandish years he worked in the dense, parallel-hatched manner standard in the Antwerp engravers around Cock; in Italy, working with Titian and then with Federico Zuccaro and other Roman painters, he developed a long, swelling, sweeping line — laid down with a curved-handle burin in long parallel sequences — that gave his engravings a tonal richness and a sense of atmospheric distance the Antwerp tradition had never achieved. The Goltzius generation in the Netherlands directly studied and copied Cort's Roman line.

His religious engraved output is large. After Titian he engraved the Magdalene, the Saint Peter Martyr (whose original painting was destroyed by fire in the nineteenth century — Cort's plate is now the principal record), the great Gloria for Charles V, and several Madonnas. After Federico Zuccaro he engraved the Adoration of the Shepherds, the Conversion of Saul, the Baptism of Christ, the Crucifixion, and a long sequence of altarpieces. His independent religious plates — the Saint Jerome, the Penitent Magdalene, the Saint Catherine — circulated through Roman publishers and supplied the Counter-Reformation devotional market with high-quality reproductive imagery from the most authoritative Italian sources.

He worked closely with the Roman publisher Antonio Lafreri (whose great compendium volumes of Roman antiquities and contemporary religious art carried Cort's plates across Europe), and his Italian engravings remain the principal record of many High Renaissance and post-Tridentine paintings whose originals are lost or damaged. He died in Rome and was buried at Santa Maria dell'Anima.$BIO$,
  bio_sources = $JSON$[
    {"title":"Cornelis Cort — Wikipedia","url":"https://en.wikipedia.org/wiki/Cornelis_Cort","type":"wikipedia"},
    {"title":"Cornelis Cort — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Cornelis+Cort","type":"museum"},
    {"title":"Cornelis Cort — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/cornelis-cort","type":"museum"}
  ]$JSON$::jsonb
where slug = 'cornelis-cort';

-- ─── 59. Pietro Testa ──────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Pietro Testa, called Il Lucchesino from his birthplace, was a Lucchese-born painter, draftsman, and etcher who worked in Rome through the 1630s and 1640s as a member of the circle of Pietro da Cortona and Nicolas Poussin. Born in Lucca in 1612, sent to Rome as a young man and trained first in the orbit of the Caravaggesque painter Domenichino and then with Pietro da Cortona, he made his living from a combination of small painted commissions and his prolific output as an etcher. He died young in Rome in 1650, drowned in the Tiber under unclear circumstances.

His painted output is small and is concentrated in altarpieces and easel paintings of biblical and mythological subjects. The Massacre of the Innocents (Galleria Spada, Rome) and the Joseph Sold by His Brothers (Pinacoteca Capitolina) are characteristic. His drawings, in pen and ink with brown wash, are widely admired for their elegance and rapid invention.

His etched output is the basis of his lasting reputation. The Massacre of the Innocents (1632), the Liberation of Saint Peter, the Adoration of the Shepherds, the Allegory of Spring, the Triumph of Painting, the Symposium, the Garden of Venus, and the late multi-plate Allegory of the Liberal Arts — all show his characteristic combination of dense, tightly cross-hatched figural groups with airy, classicizing landscape settings. His religious etchings circulated through the Roman publishing houses and were collected by connoisseurs across Catholic Europe.

His intellectual ambitions were considerable: he wrote treatises on painting (now lost, but reflected in his etched allegories of the arts) and was a member of the circle around Cassiano dal Pozzo, the great Roman antiquarian and patron whose Museo Cartaceo (Paper Museum) collected drawings and engravings of Roman antiquities for systematic study. Testa contributed drawings to the project.

The seventeenth-century biographers describe him as melancholic, contentious, and chronically poor; the eighteenth and nineteenth centuries half-forgot him. The twentieth century, particularly through the work of the Italian critic Anna Forlani Tempesti and the great 1988 Philadelphia Museum exhibition of his etchings, restored him to his place as one of the most original draftsmen and etchers of the Roman Baroque generation.$BIO$,
  bio_sources = $JSON$[
    {"title":"Pietro Testa — Wikipedia","url":"https://en.wikipedia.org/wiki/Pietro_Testa","type":"wikipedia"},
    {"title":"Pietro Testa — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Pietro+Testa","type":"museum"},
    {"title":"Pietro Testa — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG62321","type":"museum"}
  ]$JSON$::jsonb
where slug = 'pietro-testa';

-- ─── 60. Federico Zuccaro ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Federico Zuccaro — sometimes spelled Zuccari — was an Italian Late Mannerist painter and theorist of art whose career carried him from his native Marche through the major artistic centers of Italy and abroad to England, France, and Spain. Born in Sant'Angelo in Vado in the Marche in 1540 or 1541, trained alongside his older brother Taddeo Zuccaro (whose Roman workshop Federico inherited at Taddeo's early death in 1566), and active across Italy and Europe for the next forty years, he died in Ancona in 1609.

In Rome he and Taddeo together produced the great fresco cycles in the Villa Farnese at Caprarola for the Farnese family — biblical, classical, and dynastic narratives spread across multiple rooms — which remain the principal monument of mid-sixteenth-century Italian decorative painting. After Taddeo's death Federico continued the program and added his own commissions: the cupola frescoes of the Cathedral of Florence (the Last Judgment, completed 1579 after Vasari's earlier work), altarpieces for the Roman Gesù and the Trinità dei Monti, and major religious cycles in the chapels of Santa Maria del Popolo and Santa Caterina dei Funari.

He traveled north and west repeatedly. In England in 1574–1575 he produced portraits of Queen Elizabeth I and Mary, Queen of Scots that were widely engraved and shaped the iconography of the English late-Tudor court. In Spain in the 1580s he worked at the Escorial under Philip II's patronage, contributing altarpieces and ceiling decorations to the great Habsburg monastic-palace project. His religious altarpieces from the Spanish years — the Adoration of the Shepherds, the Annunciation, the Nativity — entered the royal Spanish collection and remain in the Prado and the Escorial.

He was equally significant as a theorist of art. His L'Idea de' Pittori, Scultori et Architetti (Turin, 1607) is one of the principal late-sixteenth-century Italian treatises on the philosophical foundations of artistic practice and remained in print and influential through the seventeenth century. He founded and was the first principe (head) of the Accademia di San Luca in Rome — the painters' academy that became the model for the European academy system that would dominate art education for the next two hundred years.$BIO$,
  bio_sources = $JSON$[
    {"title":"Federico Zuccari — Wikipedia","url":"https://en.wikipedia.org/wiki/Federico_Zuccari","type":"wikipedia"},
    {"title":"Federico Zuccari — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Federico-Zuccaro","type":"britannica"},
    {"title":"Federico Zuccaro — Galleria degli Uffizi","url":"https://www.uffizi.it/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'federico-zuccaro-zuccari';

-- ─── 61. Jan Luyken ────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Jan Luyken was a Dutch poet and etcher whose late-seventeenth-century religious illustration provided the visual program of one of the most influential Protestant devotional books in Western history. Born in Amsterdam in 1649 to a Mennonite schoolmaster, trained in his late teens as a glass-painter and then as an etcher, and active in Amsterdam for the rest of his life, he died there in 1712.

His early years produced secular work — love poetry, illustrated emblem books — but a religious conversion around 1675, under the influence of the German Pietist mystic Jakob Böhme, redirected his entire output toward Christian devotional and didactic publications. From the late 1670s onward Luyken produced almost exclusively religious illustration, often in close collaboration with the Amsterdam Mennonite publisher Jacobus van der Deyster and with his son Caspar Luyken (1672–1708), who shared the workshop in his short lifetime.

His central religious project is the Martyrs Mirror — Tieleman Jansz van Braght's Het Bloedig Tooneel of Martelaers Spiegel der Doopsgesinde of Weereloose Christenen (Amsterdam, 1685, second edition with Luyken's plates, the first being the textual 1660 edition). The book chronicles the martyrdom of Anabaptist Christians from the New Testament through the European Reformation persecutions; Luyken's 104 etched plates illustrate beheadings, burnings, drownings, and other forms of martyrdom in the restrained, observational manner that has made the volume an enduring document for Mennonite, Amish, and other Anabaptist communities. The plates have been reprinted continuously for over three hundred years and remain in active devotional use.

He produced extensive series of biblical illustration: the Het Leerzaam Huisraad (Domestic Furnishings as Moral Teaching), the Beschouwing der Wereld (Contemplation of the World), the Schouwtoneel des Menselyken Levens (Theater of Human Life), and the great Mosaize Historie der Hebreeuwse Kerke (Mosaic History of the Hebrew Church) of 1700, with hundreds of Old Testament plates. The combined output runs to several thousand etchings.

His personal life was marked by mystical Pietism, voluntary poverty in his later years, and a sustained literary output of poetry that situated him among the major Dutch devotional poets of the seventeenth century. His grave in Amsterdam's Noorderkerk churchyard is unmarked.$BIO$,
  bio_sources = $JSON$[
    {"title":"Jan Luyken — Wikipedia","url":"https://en.wikipedia.org/wiki/Jan_Luyken","type":"wikipedia"},
    {"title":"Jan Luyken — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/jan-luyken","type":"museum"},
    {"title":"Martyrs Mirror — Global Anabaptist Mennonite Encyclopedia","url":"https://gameo.org/index.php?title=Martyrs%27_Mirror","type":"scholarly"}
  ]$JSON$::jsonb
where slug = 'jan-luyken';

-- ─── 62. Wenceslaus Hollar ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Wenceslaus Hollar — Václav Hollar in his native Czech, also signed Wenzel Hollar in his Continental years — was a Bohemian-born etcher who became one of the great topographical and religious printmakers of seventeenth-century Northern Europe. Born in Prague in 1607 to a minor official of the Bohemian Royal Chamber, displaced by the destruction of his family's circumstances in the Thirty Years' War, and trained in Frankfurt and Strasbourg with the printmaker Matthäus Merian the Elder, he was eventually taken into the household of the English collector Thomas Howard, Earl of Arundel, and brought to England in 1636. He worked in London for the rest of his life with brief returns to Antwerp during the English Civil War, and died in poverty in London in 1677.

His religious etched output is large and varied. The complete illustrated edition of the Aedes Walpolianae and the Histriomastix included his plates of Christian iconography. The Quarles' Emblems (London, 1635, with later editions) — Francis Quarles's Protestant emblem book — used Hollar's etched plates of the Anima (the Soul) in dialogue with allegorical figures; the volume was the most-reprinted English Protestant devotional emblem book of the seventeenth century. His series of the Apostles, the Saints, the Christ Carrying the Cross, the Crucifixion, and the great Resurrection plates after Italian and Flemish painters circulated through the English print market and shaped Anglican visual devotion in the decades around the Restoration.

He was the supreme topographer of his generation. The Long View of London (1647), engraved during his exile in Antwerp, remains the principal visual record of pre-Great-Fire London. The Theatre of Women, the Costumes of Several Nations, the Views of English Cathedrals (the great series of pre-Restoration views of Lincoln, York, Salisbury, Worcester, and others, several of which were destroyed or altered in the Civil War) — all show his characteristic combination of patient observation, fine etched line, and gentle atmospheric tone.

He produced about 2,700 etchings in his career, on every conceivable subject; the modern catalogue raisonné by Richard Pennington (1982) is the standard reference. He was buried in St. Margaret's churchyard in Westminster, the parish church of the House of Commons.$BIO$,
  bio_sources = $JSON$[
    {"title":"Wenceslaus Hollar — Wikipedia","url":"https://en.wikipedia.org/wiki/Wenceslaus_Hollar","type":"wikipedia"},
    {"title":"Wenceslaus Hollar — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Wenceslaus-Hollar","type":"britannica"},
    {"title":"Wenceslaus Hollar — Royal Collection Trust","url":"https://www.rct.uk/collection/search#/search/Wenceslaus%20Hollar","type":"museum"}
  ]$JSON$::jsonb
where slug = 'wenceslaus-hollar';

-- ─── 63. Giovanni Benedetto Castiglione ────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giovanni Benedetto Castiglione, called Il Grechetto for his early Greek-themed work, was the leading Genoese painter of the seventeenth century and a major innovator in printmaking and oil-on-paper technique. Born in Genoa in 1609, trained in his home city in the workshops of Giovanni Andrea de Ferrari and Sinibaldo Scorza (whose specialty in the painting of animals shaped Castiglione's lifelong devotion to the genre), he traveled extensively — to Rome (where he absorbed Poussin and the Bamboccianti), to Naples, to Mantua, and finally to the Gonzaga court at Mantua, where he settled in 1651 and worked as court painter until his death in Mantua in 1664.

His Christian religious work is concentrated in pastoral biblical narratives — subjects in which a procession or a journey through landscape allowed him to combine his fascination with animal painting and his interest in the patriarchal Old Testament. The Journey of Abraham (Royal Collection, Windsor), the Journey of Jacob (multiple versions, the most famous in the Genoa Galleria di Palazzo Bianco), the Adoration of the Shepherds, the Crossing of the Red Sea, the Sacrifice of Noah, and the great Genesis cycles — sheep, cattle, camels, dogs, and household goods winding through Italianate landscapes — became his signature compositions and were reproduced in painting, drawing, and etching across Europe.

His drawings on prepared blue or buff paper, often in oil with the brush rather than in chalk or ink, are among the earliest sustained uses of brushed oil on paper as a finished autonomous medium — a technique he largely invented and that the eighteenth century would develop further. The drawings of pagan sacrifices, biblical patriarchs, and the late Allegory of Vanitas count among the most-collected Italian seventeenth-century sheets.

He invented the monotype around 1640 — a single-impression printmaking technique in which the artist paints directly onto the metal plate before pulling a single print from the wet ink — and was its principal seventeenth-century practitioner. The Genius of Castiglione (etching, 1648), his self-portrait as a winged figure surrounded by the instruments of art, summarizes his ambitious self-conception.

His son Francesco Castiglione continued the workshop after his death; his style was a major influence on the eighteenth-century Venetian school of Tiepolo and on the Romantic painters of the early nineteenth century who rediscovered him as a forerunner.$BIO$,
  bio_sources = $JSON$[
    {"title":"Giovanni Benedetto Castiglione — Wikipedia","url":"https://en.wikipedia.org/wiki/Giovanni_Benedetto_Castiglione","type":"wikipedia"},
    {"title":"Giovanni Benedetto Castiglione — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Giovanni-Benedetto-Castiglione","type":"britannica"},
    {"title":"Giovanni Benedetto Castiglione — Royal Collection Trust","url":"https://www.rct.uk/collection/search#/search/Castiglione","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giovanni-benedetto-castiglione-il-grechetto';

-- ─── 64. Del Parson ────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Del Parson is an American religious painter whose images of Jesus Christ are among the most widely reproduced devotional pictures of the late twentieth and early twenty-first centuries. Born in 1948 in Rexburg, Idaho, raised in a Latter-day Saint family, and trained at Brigham Young University and at Utah State University (where he completed an MFA in 1972), he taught at Dixie State University in St. George, Utah, for more than three decades while building a parallel career as a professional religious portraitist. He continues to paint from his St. George studio.

His best-known image, Christ in a Red Robe (sometimes called Portrait of Christ), painted in the early 1980s, has been reproduced in millions of copies — distributed by the Church of Jesus Christ of Latter-day Saints, hung in Latter-day Saint meetinghouses and homes worldwide, reproduced in Sunday-school manuals, Christmas cards, and missionary materials, and recognized far beyond Latter-day Saint circles as one of the most familiar twentieth-century portraits of Jesus. The closely related portraits of the head of Christ, of Christ knocking at the door, of Christ in Gethsemane, and the children-with-Christ images that he produced through the 1990s and 2000s have entered the same widely-distributed devotional category.

His broader body of work covers Latter-day Saint historical subjects (the Restoration narratives, scenes from the lives of Joseph Smith and the early Latter-day Saint apostles), Western American landscapes and frontier subjects, and figure painting in a representational, lightly idealized academic manner descended from late-nineteenth-century European devotional realism. His paintings have been commissioned for the Church History Museum in Salt Lake City, for several Latter-day Saint temples, and for private patrons across the western United States.

His significance for SEO and modern Christian art research lies in the unusual scale of his reach: among contemporary American devotional painters working in a representational manner, his portraits of Christ are visible in more homes and meetinghouses than almost any other living artist's. His work is generally categorized as devotional rather than academic — produced for religious use rather than for the gallery system — and is collected and discussed in that context.$BIO$,
  bio_sources = $JSON$[
    {"title":"Del Parson — Wikipedia","url":"https://en.wikipedia.org/wiki/Del_Parson","type":"wikipedia"},
    {"title":"Del Parson — official artist site","url":"https://www.delparson.com/","type":"other"},
    {"title":"Church History Museum — The Church of Jesus Christ of Latter-day Saints","url":"https://history.churchofjesuschrist.org/museum","type":"museum"}
  ]$JSON$::jsonb
where slug = 'del-parson';
