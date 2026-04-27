-- Artist hub bios — phase 11.
-- Twenty-one more anchor artists from the next tier of famous Christian
-- masters who already have approved artwork in the catalogue but no
-- bio_long. Same conventions as the earlier bio phases: original prose,
-- dollar-quoted, with bio_sources as Wikipedia / Britannica / museum
-- citation pointers. Exact slug matching only.

-- ─── 131. Johannes Vermeer ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Johannes Vermeer was a leading Dutch Golden Age painter and the supreme master of the small intimate domestic interior. Born in Delft in 1632 to an art-dealer and tavern-keeper, baptized into the Dutch Reformed Church before his marriage in 1653 into the Catholic Bolnes family (he probably converted to Catholicism around the time of his marriage), and active in Delft for his entire career, he ran a small workshop and modest art-dealing business until his death in Delft in 1675 at age forty-three. He produced fewer than fifty paintings across his short career; the surviving catalogue runs to about thirty-four panels.

His Christian religious work consists of just two paintings, both from the very early years of his career before he settled into the small-format domestic interior subjects that would define his mature reputation. Christ in the House of Martha and Mary (Scottish National Gallery, Edinburgh, c. 1654–1655 — a large early canvas, almost two meters tall, depicting the moment from Luke 10 in which Christ visits the home of the two sisters and gently corrects the busy Martha by commending the listening Mary; one of his earliest dated works and his only major biblical painting) and the Saint Praxedis (private collection, attribution somewhat contested, c. 1655) constitute the entire known religious painted output. Both reflect his early experiment with the Italianate biblical-history-painting tradition that the slightly older Utrecht Caravaggesques (Honthorst, Baburen, ter Brugghen) had brought back to the Netherlands a generation earlier; Vermeer abandoned this tradition almost immediately in favor of the small intimate genre interiors for which he became famous.

The supreme Vermeer paintings — the Girl with a Pearl Earring (Mauritshuis), the View of Delft (Mauritshuis), the Milkmaid (Rijksmuseum), the Allegory of Painting (Vienna), the Music Lesson (Royal Collection) — are not religious in subject, though several of them include subtly placed biblical or devotional references in the small wall-paintings, books, and household objects of their carefully observed Dutch interiors.

He died in Delft in 1675 in considerable financial distress, leaving his widow Catharina with eleven young children and a workshop full of unsold paintings. His reputation faded almost immediately and was substantially recovered only in the second half of the nineteenth century through the writing of the French critic Théophile Thoré-Bürger.$BIO$,
  bio_sources = $JSON$[
    {"title":"Johannes Vermeer — Wikipedia","url":"https://en.wikipedia.org/wiki/Johannes_Vermeer","type":"wikipedia"},
    {"title":"Johannes Vermeer — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Johannes-Vermeer","type":"britannica"},
    {"title":"Johannes Vermeer — Mauritshuis, The Hague","url":"https://www.mauritshuis.nl/en/our-collection/artists/v/johannes-vermeer/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'johannes-vermeer';

-- ─── 132. Donatello ────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Donatello — born Donato di Niccolò di Betto Bardi in Florence around 1386 — was the supreme Italian sculptor of the Quattrocento and one of the founding figures of the Florentine Renaissance alongside the architect Filippo Brunelleschi and the painter Masaccio. Trained in Florence in the workshop of the late Gothic sculptor Lorenzo Ghiberti (where he assisted on the second set of bronze doors for the Florence Baptistery), and active across Florence, Padua, Siena, and Rome for almost seventy years, he died in Florence in 1466 in his eighties.

His Christian religious work is concentrated in monumental sculpture — bronze, marble, and polychrome wood — for the Florentine churches and for the cathedral and ducal patrons of the Quattrocento. The bronze David (Bargello, Florence, c. 1440 — the first freestanding nude bronze sculpture cast in Europe since classical antiquity, and one of the founding works of the Renaissance interest in the recovered classical figural language), the marble David of about 1408 for the Florence Cathedral, the prophet figures for the Florence Cathedral campanile (Beardless Prophet, Bearded Prophet, Pensieroso, Habakkuk — known as Lo Zuccone), the great equestrian Gattamelata bronze in the Piazza del Santo in Padua (1453, the first equestrian monument cast in Europe since classical antiquity), the high altar sculptural program for the Basilica del Santo in Padua (1446–1450), the great Cantoria reliefs for Florence Cathedral, and the late polychrome wood Penitent Magdalene (Museo dell'Opera del Duomo, Florence, c. 1455) anchor the sculptural corpus.

His painted output (a small group of designs for stained-glass windows, predella panels for altarpiece structures, and small painted bronze reliefs) is overshadowed by the supreme sculpture but documents his close personal and professional friendship with the Florentine painter Brunelleschi and (through that friendship) his role in the founding intellectual circle of the Florentine Renaissance. Donatello's stylistic influence on the entire subsequent Italian Renaissance — through Michelangelo's direct study of his Florentine works, through Andrea del Verrocchio's late-Quattrocento workshop continuation, and through the bronze-casting tradition that ran through Pollaiuolo and Bertoldo into the High Renaissance — was foundational.$BIO$,
  bio_sources = $JSON$[
    {"title":"Donatello — Wikipedia","url":"https://en.wikipedia.org/wiki/Donatello","type":"wikipedia"},
    {"title":"Donatello — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Donatello","type":"britannica"},
    {"title":"Donatello — Museo Nazionale del Bargello","url":"https://bargellomusei.beniculturali.it/musei/4/bargello","type":"museum"}
  ]$JSON$::jsonb
where slug = 'donatello';

-- ─── 133. Andrea della Robbia ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Andrea della Robbia was a Florentine sculptor and the principal continuer of the Della Robbia ceramic-sculpture workshop founded by his uncle and master Luca della Robbia. Born in Florence in 1435, trained in his uncle Luca's workshop (which he inherited around 1481 on Luca's death), and active in Florence for almost his entire career with major commissions across Tuscany, he died in Florence in 1525 at age ninety. The Della Robbia workshop operated almost continuously from the 1440s through the late sixteenth century, with Luca, Andrea, and Andrea's son Giovanni della Robbia successively heading the firm.

The Della Robbia signature contribution to Italian Renaissance art was the invention of glazed terracotta as a major sculptural medium. The technique — modeling figures in clay, glazing them with a white tin-oxide enamel for the flesh and with deep colored glazes (cobalt blue, manganese purple, copper green) for the drapery and ornament, and firing the result at high temperatures to produce a permanent, weather-resistant, brilliantly colored sculptural surface — was effectively invented by Luca della Robbia in the early 1440s and refined into the standard Della Robbia workshop product across the next century.

Andrea's Christian religious work is enormous and is concentrated in altarpieces, devotional roundels, and architectural sculpture for the Florentine and broader Tuscan ecclesiastical commissions. The great series of glazed-terracotta tondi of the Foundlings (the swaddled-infant medallions on the facade of the Ospedale degli Innocenti in Florence, 1487 — the orphanage designed by Brunelleschi a generation earlier; the medallions remain in their original location and are among the most reproduced Florentine Renaissance sculptural images), the high altarpiece glazed-terracotta cycles for the Franciscan sanctuary at La Verna in the Casentino (1480–1499 — the entire Madonna della Cintola, Crucifixion, Annunciation, and Saint Anthony Abbot altar group), the Madonnas at Prato Cathedral, and dozens of small Madonna and Child roundels and altarpieces in churches across Tuscany anchor the painted-and-glazed corpus.

His son Giovanni della Robbia continued the workshop after his death; the Della Robbia ceramic-sculpture tradition continued in workshop variants through the late sixteenth century, when the technique was largely abandoned in favor of more conventional polychrome wood sculpture.$BIO$,
  bio_sources = $JSON$[
    {"title":"Andrea della Robbia — Wikipedia","url":"https://en.wikipedia.org/wiki/Andrea_della_Robbia","type":"wikipedia"},
    {"title":"Della Robbia family — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Della-Robbia-family","type":"britannica"},
    {"title":"Andrea della Robbia — Museo Nazionale del Bargello","url":"https://bargellomusei.beniculturali.it/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'andrea-della-robbia';

-- ─── 134. Luca della Robbia ────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Luca della Robbia was a leading Florentine sculptor of the early Quattrocento and the inventor of glazed terracotta as a major sculptural medium — the technique that gave the Della Robbia family workshop its century-long international reputation. Born in Florence around 1399 to a wool-comber, trained as a marble carver in the workshop of the late Gothic Florentine sculptor Nanni di Banco (and possibly with Lorenzo Ghiberti), he was active in Florence for his entire career and died in the city in 1482.

His Christian religious work is concentrated in marble sculpture and (from about 1440 onward) in his innovative glazed-terracotta technique. The Cantoria — the great marble singing-gallery relief for Florence Cathedral, carved between 1431 and 1438 with ten panels of dancing children illustrating Psalm 150's call to praise the Lord with all musical instruments — is the principal early-marble masterpiece, paired in the cathedral with Donatello's contemporary cantoria on the opposite wall. The marble panels are now in the Museo dell'Opera del Duomo of Florence.

His invention of glazed terracotta around 1440 came at a moment when sculpture in marble had become prohibitively expensive and bronze was increasingly used for civic monuments. The technique — modeling in clay, glazing with white tin-oxide enamel for the flesh and with deep colored glazes for the drapery, then firing — produced a sculptural medium that was dramatically less expensive than marble or bronze, weather-resistant, and brilliantly colored. The Resurrection lunette over the Sacristy door of Florence Cathedral (1442–1445), the Visitation in the church of San Giovanni Fuorcivitas in Pistoia (c. 1445), the Madonna of the Apple (Bargello), the polychrome ceiling roundels in the Cardinal of Portugal Chapel in San Miniato al Monte (1461–1466 — the Five Virtues), and the dozens of small Madonna and Child compositions Luca produced in workshop variants for the Florentine devotional market established the Della Robbia signature.

His nephew Andrea della Robbia continued the workshop after his death; the Della Robbia ceramic-sculpture tradition continued through Andrea's son Giovanni and into the late sixteenth century before being absorbed into the broader Italian Renaissance sculpture tradition.$BIO$,
  bio_sources = $JSON$[
    {"title":"Luca della Robbia — Wikipedia","url":"https://en.wikipedia.org/wiki/Luca_della_Robbia","type":"wikipedia"},
    {"title":"Luca della Robbia — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Luca-della-Robbia","type":"britannica"},
    {"title":"Luca della Robbia — Museo Nazionale del Bargello","url":"https://bargellomusei.beniculturali.it/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'luca-della-robbia';

-- ─── 135. Giovanni della Robbia ────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giovanni della Robbia was a Florentine sculptor and the principal continuer of the Della Robbia glazed-terracotta workshop after the death of his father Andrea della Robbia. Born in Florence in 1469, trained in his father's workshop from his youth, and active in Florence for his entire career, he ran the family workshop in close partnership with his brothers Luca the Younger and Marco della Robbia until his own death in Florence in 1529.

His Christian religious work is concentrated in glazed-terracotta altarpieces, devotional roundels, lunettes, and architectural sculpture for the Florentine and broader Tuscan churches and confraternities. The Pietà altarpieces in San Lorenzo and Santa Maria Novella in Florence, the great Resurrection altarpiece in the Anchorite church near Siena, the Last Supper roundel for the refectory of San Domenico in Pistoia (1521 — the supreme late-Della Robbia narrative composition with the apostles arranged at the long horizontal table), the Crucifixion altarpieces for the Franciscan sanctuary at La Verna (continuing the cycle his father had begun), and dozens of small Madonna and Child roundels for the Florentine domestic devotional market anchor the painted-and-glazed corpus.

His personal style continued the Della Robbia workshop signature — figures glazed in white tin-oxide for the flesh, drapery in deep saturated cobalt blue, manganese purple, and copper green against the deep ultramarine grounds and the swag-of-fruit garlands that became the unmistakable Della Robbia decorative trademark — but with a slight loosening of the careful Quattrocento figural discipline that his father Andrea had maintained, in the direction of the early Cinquecento Italian Renaissance softening of compositional structure.

The Della Robbia workshop began to decline commercially in the second quarter of the sixteenth century as the High Renaissance taste for marble and bronze sculpture displaced the older glazed-terracotta tradition. Giovanni's sons continued the workshop briefly after his death; the family firm wound down by the 1560s, and the Della Robbia technique was effectively abandoned by the end of the sixteenth century.$BIO$,
  bio_sources = $JSON$[
    {"title":"Giovanni della Robbia — Wikipedia","url":"https://en.wikipedia.org/wiki/Giovanni_della_Robbia","type":"wikipedia"},
    {"title":"Della Robbia family — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Della-Robbia-family","type":"britannica"},
    {"title":"Giovanni della Robbia — Museo Nazionale del Bargello","url":"https://bargellomusei.beniculturali.it/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giovanni-della-robbia';

-- ─── 136. Paolo Uccello ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Paolo Uccello — born Paolo di Dono in Florence in 1397 — was a leading Florentine painter of the early Quattrocento and one of the principal Florentine experimenters with the new Renaissance science of linear perspective. Trained in his youth in the workshop of Lorenzo Ghiberti (alongside Donatello and others of the founding Florentine Renaissance generation), and active in Florence and Venice for his entire career, he died in Florence in 1475 at age seventy-eight. The nickname Uccello (bird) was attached to him by his contemporaries — the early biographies attribute it variously to his fondness for painting birds and to his fondness for keeping them as pets in his Florentine studio.

His Christian religious work is concentrated in fresco cycles and altarpieces in his characteristic combination of late-Gothic decorative refinement and the new Quattrocento interest in linear perspective. The Genesis frescoes in the Green Cloister of Santa Maria Novella in Florence (the Creation of Adam, the Creation of Eve, the Drunkenness of Noah, the Sacrifice of Noah — painted in monochrome green-ochre across the cloister walls between 1440 and 1450, the cycle that gave the cloister its modern name), the Crucifixion in the Tornabuoni Chapel of Santa Maria Maggiore in Florence, the Saint George and the Dragon paintings (London and Paris versions), and the small predella panels of the Miracle of the Profaned Host (Urbino) anchor the painted corpus.

His most ambitious surviving works are the three great Battle of San Romano paintings (Uffizi, Louvre, and London — originally a connected three-canvas program commissioned by the Florentine wealthy patron Lionardo Bartolini Salimbeni for his palace in the late 1430s, depicting a 1432 Florentine military victory over the Sienese), which combine the new Renaissance interest in linear perspective with a particularly Uccellian decorative pattern of broken lances, fallen horses, and brilliantly colored Quattrocento heraldic costume. The paintings are widely held to be the supreme Florentine Quattrocento secular battle pieces and were directly studied by every subsequent Florentine Renaissance painter who absorbed Uccello's perspective experiments.

He worked obsessively at perspective construction; the early biographer Vasari tells the story of Uccello staying up all night to work out the correct foreshortening of a particular polyhedron, and his wife calling out to ask him to come to bed. He was buried in the church of Santo Spirito in Florence.$BIO$,
  bio_sources = $JSON$[
    {"title":"Paolo Uccello — Wikipedia","url":"https://en.wikipedia.org/wiki/Paolo_Uccello","type":"wikipedia"},
    {"title":"Paolo Uccello — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Paolo-Uccello","type":"britannica"},
    {"title":"Paolo Uccello — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks/the-battle-of-san-romano","type":"museum"}
  ]$JSON$::jsonb
where slug = 'paolo-uccello-paolo-di-dono';

-- ─── 137. Artemisia Gentileschi ────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Artemisia Gentileschi was the leading female painter of the Italian Baroque and the most accomplished follower of Caravaggio in the generation immediately after his death. Born in Rome in 1593 to the painter Orazio Gentileschi (a close friend and collaborator of Caravaggio in the early Roman years), trained in her father's workshop from her early childhood, and traumatized at age seventeen by her rape by the painter Agostino Tassi (her father's collaborator on the Casino delle Muse fresco project at the Roman Quirinal — the trial that followed Tassi's prosecution by Orazio in 1612 produced one of the most studied surviving early-modern Italian rape-trial transcripts), she moved to Florence in 1613 where she became the first woman admitted to the Accademia delle Arti del Disegno. She was active subsequently in Florence, Venice, Rome, and Naples, and died in Naples around 1656.

Her Christian religious work is concentrated in dramatic biblical and martyrological subjects in her characteristic combination of Caravaggesque chiaroscuro with a distinctly female-centered narrative perspective on Old Testament heroines and women of the Gospels. The Judith Beheading Holofernes paintings (Naples Capodimonte, c. 1612–1613, and the more famous Uffizi version, c. 1620 — both depicting the climactic moment of the deuterocanonical Book of Judith with characteristic Caravaggesque dramatic intensity, but with a visceral physical realism — the spurting blood, the muscular grip of the female arms, the pressed-down body of Holofernes — that distinguishes Artemisia's treatments from her male contemporaries' versions of the subject), the Susanna and the Elders (Pommersfelden, 1610 — Artemisia's earliest dated work, painted at age seventeen and one of the supreme early Caravaggesque treatments of the Daniel 13 narrative), the Self-Portrait as Saint Catherine of Alexandria (London, c. 1615), the Mary Magdalene (Pitti, c. 1620), and the late Naples altarpieces fill the painted corpus.

She worked at the English court of Charles I in 1638–1641 in collaboration with her father Orazio (who had been court painter at Whitehall since 1626), and produced ceiling decorations for the Queen's House at Greenwich. The Civil War interrupted the English commission, and Artemisia returned to Naples where she worked for the rest of her life.

Modern criticism — particularly the feminist art-historical scholarship of the late twentieth century, beginning with Mary Garrard's foundational 1989 monograph — has restored her reputation to its current first-rank position in the Italian Baroque canon, alongside Caravaggio, Bernini, and the Carracci.$BIO$,
  bio_sources = $JSON$[
    {"title":"Artemisia Gentileschi — Wikipedia","url":"https://en.wikipedia.org/wiki/Artemisia_Gentileschi","type":"wikipedia"},
    {"title":"Artemisia Gentileschi — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Artemisia-Gentileschi","type":"britannica"},
    {"title":"Artemisia Gentileschi — Galleria degli Uffizi","url":"https://www.uffizi.it/en/artworks/judith-beheading-holofernes","type":"museum"}
  ]$JSON$::jsonb
where slug = 'artemisia-gentileschi';

-- ─── 138. Bramantino ──────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Bramantino — born Bartolomeo Suardi in Milan around 1465, called Bramantino (little Bramante) for his close artistic association with the architect Donato Bramante, who was his teacher in the Milanese painting tradition before Bramante's later turn to architecture — was a leading Lombard painter of the late fifteenth and early sixteenth centuries. Trained in Milan in the workshop of Donato Bramante (during Bramante's Milanese painter-architect years before his 1499 move to Rome), and active in Milan for his entire career, he was appointed pictor et ingeniarius (painter and engineer) at the Sforza ducal court in 1525 and held the post under successive ducal patrons until his death in Milan around 1530.

His Christian religious work is concentrated in altarpieces, fresco cycles, and small devotional panels in his characteristic combination of Bramantesque architectural perspective and the Lombard pictorial tradition descending from Vincenzo Foppa. The Adoration of the Magi (London, c. 1500 — a small altarpiece set in an elaborate Renaissance architectural setting that demonstrates Bramantino's signature interest in legible perspectival space), the Crucifixion altarpiece (Brera, Milan, c. 1505), the Madonna of the Apple (Pinacoteca Ambrosiana, Milan), the Madonna delle Torri (Pinacoteca Ambrosiana, c. 1520 — set against a backdrop of carefully drawn Renaissance towers), the great series of Trivulzio tapestries cartoons (1503–1509 — twelve large cartoons illustrating the months of the year and biblical narrative scenes, woven into tapestries for the Trivulzio family of Milan), and the late frescoes for the Trivulzio Chapel in San Nazaro Maggiore in Milan anchor the painted corpus.

His personal style — combining the careful Bramantesque architectural perspective and figural elongation with the soft Lombard chromatic warmth that he absorbed from his early-career exposure to Vincenzo Foppa's late workshop — gave him a distinctive position in the Lombard pictorial tradition. The early Cinquecento Lombard-Leonardesque school of Boltraffio, Solario, and the early Andrea Solario absorbed his combination of architectural setting and Lombard color directly.

He worked closely with the architect Bramante on several Milanese projects in the 1490s before Bramante's 1499 move to the Roman court of Pope Alexander VI; the close personal and professional partnership of the two artists shaped the entire Milanese late-Quattrocento pictorial-architectural tradition.$BIO$,
  bio_sources = $JSON$[
    {"title":"Bramantino — Wikipedia","url":"https://en.wikipedia.org/wiki/Bramantino","type":"wikipedia"},
    {"title":"Bramantino — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Bramantino","type":"britannica"},
    {"title":"Bramantino — Pinacoteca di Brera","url":"https://pinacotecabrera.org/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'bramantino-bartolomeo-suardi';

-- ─── 139. Gaudenzio Ferrari ────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Gaudenzio Ferrari was the leading painter and sculptor of Lombardy and Piedmont in the first half of the sixteenth century and the principal artist of the great Sacro Monte sanctuary of Varallo in the foothills of the Alps north of Milan. Born in Valduggia in the Piedmont in 1471 (or perhaps a few years later), trained in Vercelli and Milan in the orbit of Bramantino and the late-Quattrocento Lombard-Leonardesque school, and active in Vercelli, Varallo, Saronno, and Milan for his entire career, he died in Milan in 1546.

His Christian religious work is concentrated in fresco cycles, altarpieces, and polychrome polygonal sculpture for the Lombard and Piedmontese churches and (above all) the Sacro Monte sanctuary of Varallo. The Sacro Monte — a great mountain-top religious complex begun in 1486 by the Franciscan friar Bernardino Caimi as a Holy Land pilgrimage substitute for those unable to travel to Jerusalem, with thirty-five small chapels representing the principal scenes of the Life of Christ in painted-and-sculpted tableaux — became Gaudenzio Ferrari's principal life work. He worked at Varallo intermittently across his entire career, producing the principal frescoes and the monumental polychrome terracotta sculptures for the Adoration of the Magi chapel (1515–1530), the Crucifixion chapel (1517–1525, with its dense crowd of more than thirty life-sized polychrome figures gathered around the cross), the Last Supper chapel, and several other chapels of the sanctuary.

Beyond Varallo, his major commissions include the great fresco cycle of the Life of Christ in the Madonna delle Grazie in Varallo (1513), the Saronno Cathedral cupola fresco of the Choir of Angels (1534–1536 — a vast assembly of small angels playing every imaginable musical instrument, painted across the entire cupola surface), the polyptych altarpieces in Vercelli, and the late Milanese commissions of the 1540s.

His personal style — combining the soft chromatic warmth of the Lombard tradition with a particularly Piedmontese-Northern emotional intensity in the religious narrative subjects — gave him a uniquely regional position in the Italian Renaissance. The combination of his painted frescoes and his polychrome polygonal sculptures across the Sacro Monte chapels created an immersive total-art-environment that anticipated by a century the seventeenth-century Italian Baroque interest in immersive sacred theater. He was buried in Milan.$BIO$,
  bio_sources = $JSON$[
    {"title":"Gaudenzio Ferrari — Wikipedia","url":"https://en.wikipedia.org/wiki/Gaudenzio_Ferrari","type":"wikipedia"},
    {"title":"Gaudenzio Ferrari — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Gaudenzio-Ferrari","type":"britannica"},
    {"title":"Sacro Monte di Varallo","url":"https://www.sacromontedivarallo.org/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'gaudenzio-ferrari';

-- ─── 140. Frans Floris I ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Frans Floris (Frans de Vriendt, called Floris) was the leading Antwerp painter of the middle of the sixteenth century and the principal Antwerp Romanist of his generation — the painter who, after a long Italian sojourn, brought the Roman Mannerist figural vocabulary descending from Michelangelo and Raphael into the Antwerp painting tradition. Born in Antwerp in 1517 (or perhaps slightly earlier) to a stonemason family (his brothers Cornelis and Jacob Floris were also working artists), trained in Liège in the workshop of Lambert Lombard before traveling to Italy around 1541 (where he spent four years studying the Roman Mannerist altarpieces and the recent Sistine Chapel Last Judgment of Michelangelo), and active in Antwerp on his return until his death there in 1570.

His Christian religious work is concentrated in altarpieces produced for the Antwerp Catholic churches and confraternities of the 1540s, 1550s, and 1560s — the productive Antwerp decades immediately before the iconoclastic destruction of 1566 swept away most of the surviving Catholic religious imagery in the Low Countries. The Fall of the Rebel Angels (Antwerp Cathedral, 1554 — a large altarpiece commissioned by the Antwerp Confraternity of Fencers and depicting the cosmic battle in heaven with the rebellious angels tumbling from grace into hell, with characteristic Roman Mannerist muscular figural drawing and dramatic foreshortening), the Last Judgment altarpiece (Brussels, 1565), the Resurrection of Christ (Antwerp), and the Adoration of the Shepherds (multiple workshop variants) anchor the painted corpus.

His personal style — the Roman Mannerist muscular nude figural drawing absorbed from Michelangelo's Sistine ceiling and the late Roman commissions, combined with the post-Italian Antwerp colorist tradition descending from Quentin Matsys — defined the mid-sixteenth-century Antwerp Mannerist painting school and shaped the next generation of Antwerp painters who would absorb his Romanist vocabulary at one further remove. His pupil Maerten de Vos in particular carried the Floris workshop tradition into the second half of the sixteenth century.

He ran the largest and most prolific Antwerp workshop of his generation; his workshop is recorded as having had as many as 120 apprentices and assistants across his career, an unusually large operation by the Antwerp standards of the time. The 1566 iconoclastic destruction wrecked many of his altarpieces and the commercial collapse that followed substantially reduced his late-career output.$BIO$,
  bio_sources = $JSON$[
    {"title":"Frans Floris — Wikipedia","url":"https://en.wikipedia.org/wiki/Frans_Floris","type":"wikipedia"},
    {"title":"Frans Floris — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Frans-Floris","type":"britannica"},
    {"title":"Frans Floris — Royal Museums of Fine Arts of Belgium","url":"https://www.fine-arts-museum.be/en","type":"museum"}
  ]$JSON$::jsonb
where slug = 'frans-floris-i';

-- ─── 141. Carlo Saraceni ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Carlo Saraceni was a Venetian-born painter who spent most of his career in Rome and was, alongside Orazio Gentileschi and Bartolomeo Manfredi, one of the principal Italian followers of Caravaggio in the generation immediately after the master's death. Born in Venice in 1579, trained in Venice in the workshop of an unidentified late-Cinquecento Venetian painter before moving to Rome around 1598, and active in Rome for almost his entire career (with intermittent returns to Venice), he absorbed Caravaggio's chiaroscuro directly during the Roman years that overlapped with the master's principal activity. He returned to Venice in 1620 and died there in the same year, only forty-one years old.

His Christian religious work is concentrated in altarpieces and small devotional canvases in his characteristic combination of Caravaggesque chiaroscuro with a particularly Venetian-northern chromatic warmth that distinguished his manner from the more austere Roman Caravaggesque painters of the same generation. The Saint Cecilia and the Angel altarpieces (multiple versions in workshop variants in the Galleria Nazionale d'Arte Antica in Rome and other Italian collections), the Death of the Virgin (Santa Maria della Scala, Rome, 1610 — the altarpiece commissioned to replace Caravaggio's earlier rejected Death of the Virgin, which the Carmelites of the Trastevere church had dismissed as too coarse for their high altar), the Saint Charles Borromeo Carrying the Holy Nail in Procession (multiple versions), and the late Venetian altarpieces of his final year fill the painted corpus.

The Death of the Virgin commission for Santa Maria della Scala in particular gave Saraceni a peculiar place in Caravaggio's posthumous reputation. Caravaggio's earlier altarpiece (now in the Louvre, having been bought immediately by Rubens for the Mantuan ducal collection) had used a real corpse as the model for the dead Virgin and the Carmelites had refused to install it; Saraceni's replacement painting, less radical in its naturalism but unmistakably Caravaggesque in its chiaroscuro, was accepted and remains in continuous liturgical use in the church.

His Roman workshop was small but influential. He worked closely with the Venetian painter Jean Le Clerc (who was his principal pupil and assistant in the late Roman years) and shaped the development of the Caravaggesque manner in the Venetian-influenced direction that would distinguish the Saraceni followers from the more austere Roman Caravaggesque painters.$BIO$,
  bio_sources = $JSON$[
    {"title":"Carlo Saraceni — Wikipedia","url":"https://en.wikipedia.org/wiki/Carlo_Saraceni","type":"wikipedia"},
    {"title":"Carlo Saraceni — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Carlo-Saraceni","type":"britannica"},
    {"title":"Carlo Saraceni — Galleria Nazionale d'Arte Antica, Rome","url":"https://www.barberinicorsini.org/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'carlo-saraceni';

-- ─── 142. Battistello Caracciolo ───────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giovanni Battista Caracciolo — universally called Battistello — was the leading Neapolitan painter of the first generation after Caravaggio's brief but transformative Neapolitan visit of 1606–1607 and the principal early-seventeenth-century Caravaggesque master in the city. Born in Naples in 1578, trained in Naples in the late-Cinquecento workshop tradition before Caravaggio's arrival in 1606 transformed the Neapolitan pictorial scene, he became the principal early Neapolitan Caravaggesque painter and worked in Naples for the rest of his life. He died in Naples in 1635.

His Christian religious work is concentrated in altarpieces and large-format biblical narrative canvases produced for the Neapolitan Counter-Reformation Catholic churches across the first three decades of the seventeenth century. The Liberation of Saint Peter altarpiece (Pio Monte della Misericordia, Naples — the same Naples confraternity for which Caravaggio had painted the Seven Works of Mercy in 1607), the Lamentation altarpiece (San Martino, Naples), the Christ Washing the Disciples' Feet (Pio Monte della Misericordia), the Saint John the Baptist (Capodimonte), the Madonna with Saints (Naples), and dozens of half-length devotional saints and biblical narrative paintings anchor the painted corpus.

His personal style is the unmistakable early Neapolitan Caravaggesque signature — strong chiaroscuro derived directly from Caravaggio's Naples altarpieces of 1606–1610 (the Seven Works of Mercy and the Flagellation), with a particular preference for the dramatic single-figure half-length saint and the small-format biblical narrative subject. The Caracciolo workshop trained the next generation of Neapolitan painters who would absorb the Caravaggesque vocabulary at one further remove, including the young Jusepe de Ribera in his early Naples years.

He was a personal friend of the Spanish viceroy of Naples, the Duke of Osuna, and produced a substantial body of court portraits alongside the religious commissions across his career. He was buried in Naples in the church of Santa Maria della Stella, his Neapolitan parish.$BIO$,
  bio_sources = $JSON$[
    {"title":"Battistello Caracciolo — Wikipedia","url":"https://en.wikipedia.org/wiki/Giovanni_Battista_Caracciolo","type":"wikipedia"},
    {"title":"Battistello Caracciolo — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Giovanni-Battista-Caracciolo","type":"britannica"},
    {"title":"Battistello — Pio Monte della Misericordia, Naples","url":"https://www.piomontedellamisericordia.it/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giovanni-battista-caracciolo';

-- ─── 143. Philippe de Champaigne ───────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Philippe de Champaigne was a Brussels-born French Baroque painter and the principal Jansenist religious painter of seventeenth-century France. Born in Brussels in 1602 to a Flemish family, trained in Brussels in the workshop of the landscape painter Jacques Fouquière before moving to Paris in 1621, and active in Paris for the rest of his life, he became the favorite painter of Cardinal Richelieu in the 1630s and served as principal painter to Anne of Austria's Regency in the 1640s. He died in Paris in 1674.

His Christian religious work falls in two distinct phases. The early Paris career produced large-format Baroque altarpieces in the warm Flemish colorist tradition descending from Rubens — the Vow of Louis XIII (Caen, 1638), the great series of religious paintings for the Carmelite church and the Val-de-Grâce in Paris, the portrait series of Cardinal Richelieu in his official roles. The later career, after his daughter Catherine became a nun at the Jansenist convent of Port-Royal in 1648, turned increasingly toward the austere, restrained, almost monochromatic religious manner that defined the Jansenist visual aesthetic. The famous Ex-Voto (Louvre, 1662 — the painting Philippe presented to the Port-Royal convent in thanksgiving for the miraculous recovery of his daughter Sister Catherine of Saint Suzanne from a paralyzing illness, with Catherine kneeling at the right and the Mother Superior Agnès Arnauld kneeling at the left in austere black-and-white Cistercian habits against a deeply restrained chromatic palette) is the canonical Jansenist religious painting and one of the most reproduced single religious images of the entire seventeenth-century French school.

The Jansenist religious sensibility — austere, devotionally inward, suspicious of the Italian Baroque ceiling-fresco theatricality and the Counter-Reformation cult of the saints — gave Philippe's late religious paintings a quietness and emotional restraint that distinguished them sharply from the contemporary Italian and Flemish Baroque. The portraits of the Port-Royal community, the Mother and the Daughter (Louvre versions of his daughter Catherine), and the late Crucifixions and Pietàs of the 1660s and early 1670s constitute the supreme statement of the seventeenth-century French Jansenist religious art.

He was a founding member of the French Royal Academy of Painting and Sculpture in 1648 and held the post of professor at the Academy until his death.$BIO$,
  bio_sources = $JSON$[
    {"title":"Philippe de Champaigne — Wikipedia","url":"https://en.wikipedia.org/wiki/Philippe_de_Champaigne","type":"wikipedia"},
    {"title":"Philippe de Champaigne — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Philippe-de-Champaigne","type":"britannica"},
    {"title":"Philippe de Champaigne — Musée du Louvre","url":"https://collections.louvre.fr/en/recherche?q=Champaigne","type":"museum"}
  ]$JSON$::jsonb
where slug = 'philippe-de-champaigne';

-- ─── 144. Charles Le Brun ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Charles Le Brun was the principal painter of the court of Louis XIV and the dominant figure in seventeenth-century French painting and decorative art. Born in Paris in 1619 to a sculptor father, trained in Paris in the workshop of Simon Vouet (the leading early-seventeenth-century Paris-based painter and the principal channel through which the Italian Baroque manner reached the French court), and traveling to Italy in 1642 in the company of Nicolas Poussin (where Le Brun absorbed the Roman classicizing tradition descending from the Carracci and Domenichino), he returned to Paris in 1646 and worked there for the rest of his career under successive royal patrons. He died in Paris in 1690.

His Christian religious work is concentrated in altarpieces produced for the Paris churches and the royal devotional spaces in his characteristic combination of Roman classicizing figural discipline and the warm chromatic palette of his Vouet-Italian background. The Crucifixion altarpieces, the Pietà compositions in workshop variants, the Christ on the Cross with the Virgin and Saint John for the Paris royal chapels, and the late Saint John the Baptist altarpieces fill the religious painted corpus. His major secular monuments — the great fresco cycles of the Galerie des Glaces and the Salon de la Guerre at Versailles (the Apotheosis of Hercules and the Triumph of the King), the Battles of Alexander cycle (1665–1670, a four-painting series at the Louvre depicting the major military victories of Alexander the Great as veiled allegory of Louis XIV's own military glory), and the great vault decorations at the Hôtel Lambert in Paris — established his career as the supreme decorative-painting director of seventeenth-century France.

He served as Premier Peintre du Roi (First Painter to the King) from 1664 until his death and as Director of the Gobelins royal tapestry manufactory and of the French Royal Academy of Painting and Sculpture (which he largely re-organized in the 1660s). His treatise Conférences sur l'expression des passions (Conferences on the Expression of the Passions, delivered to the French Academy in 1668 and published posthumously in 1698) became one of the foundational seventeenth-century French academic texts on the painting of facial expression and remained in use as an art-academy textbook through the eighteenth and nineteenth centuries.

His position as the principal arbiter of French royal taste under Louis XIV gave him an unusually centralized control over French painting, sculpture, and decorative art for nearly three decades. After his death the rising taste for the lighter Rococo manner of Antoine Watteau and his successors displaced the Le Brun grand-manner.$BIO$,
  bio_sources = $JSON$[
    {"title":"Charles Le Brun — Wikipedia","url":"https://en.wikipedia.org/wiki/Charles_Le_Brun","type":"wikipedia"},
    {"title":"Charles Le Brun — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Charles-Le-Brun","type":"britannica"},
    {"title":"Charles Le Brun — Château de Versailles","url":"https://en.chateauversailles.fr/discover/history","type":"museum"}
  ]$JSON$::jsonb
where slug = 'charles-le-brun';

-- ─── 145. Laurent de La Hyre ───────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Laurent de La Hyre was a leading French painter of the second quarter of the seventeenth century and a principal exponent of the Parisian Atticist school — the small group of Paris-based painters who, in the years between the death of Simon Vouet and the rise of Charles Le Brun, developed a distinctive cool classicizing manner that combined Roman Baroque compositional discipline with a particularly French restraint of color and sentiment. Born in Paris in 1606 to the painter Étienne de La Hyre, trained in his father's workshop and then briefly in the orbit of Georges Lallemant, and active in Paris for his entire career (he never traveled to Italy, an unusual choice for a French painter of his generation), he died in Paris in 1656.

His Christian religious work is concentrated in altarpieces, devotional cabinet pictures, and decorative cycles for the Paris churches and the wealthy Parisian aristocratic patrons of the May commissions of the Notre-Dame Cathedral chapter (the annual May altarpiece commissions made by the Confraternity of the Goldsmiths of Paris from 1630 onward, intended as votive offerings hung in the chapels of Notre-Dame). La Hyre produced the great May of 1635 (Saint Peter Healing the Sick with His Shadow, Louvre), the May of 1637 (the Conversion of Saint Paul, Louvre), and the May of 1639 (the Liberation of Saint Peter, Louvre); the May commissions made him one of the most-watched Parisian painters of his generation.

His personal style — combining the Roman classicizing figural discipline he absorbed from prints and from his Paris colleagues with a particularly cool French chromatic palette of grey-blue, pale ivory, and soft umber against luminous classical landscapes — gave him a distinctive position in the Parisian school. He was particularly admired in his lifetime for his small-format cabinet pictures of allegorical and mythological subjects (the Allegory of Music, the Liberal Arts series, the Months of the Year compositions) that French aristocratic collectors hung in their private galleries.

He was a founding member of the French Royal Academy of Painting and Sculpture in 1648, alongside Philippe de Champaigne, Le Brun, and other leading Paris painters. He was buried in the Paris church of Saint-Roch.$BIO$,
  bio_sources = $JSON$[
    {"title":"Laurent de La Hyre — Wikipedia","url":"https://en.wikipedia.org/wiki/Laurent_de_La_Hyre","type":"wikipedia"},
    {"title":"Laurent de La Hyre — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Laurent-de-La-Hyre","type":"britannica"},
    {"title":"Laurent de La Hyre — Musée du Louvre","url":"https://collections.louvre.fr/en/recherche?q=La+Hyre","type":"museum"}
  ]$JSON$::jsonb
where slug = 'laurent-de-la-hyre';

-- ─── 146. Vittore Crivelli ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Vittore Crivelli was a Venetian-born painter who, like his older brother Carlo Crivelli, spent his entire mature career in the small towns of the Marche on the Adriatic coast of central Italy producing altarpieces in the late-Gothic-into-Renaissance manner that the Crivelli family workshop made into the regional Marche pictorial signature. Born in Venice around 1440 to the painter Jacopo Crivelli (the founding patriarch of the Crivelli workshop), trained in Venice in his father's workshop alongside his older brother Carlo, and exiled from Venice (probably in connection with the same family difficulties that drove Carlo into Adriatic exile in 1457), he settled in Zara (modern Zadar) in Dalmatia for nearly two decades before joining his brother in the Marche around 1481. He worked in Fermo and the smaller hill towns of the southern Marche for the rest of his life and died in Fermo around 1502.

His Christian religious work is concentrated in altarpieces and polyptychs in his characteristic combination of late-Gothic Venetian decorative refinement and the deliberately archaizing pictorial vocabulary that the Crivelli workshop maintained against the contemporary Italian Renaissance Florentine and Roman pictorial currents. The polyptych altarpieces in the Pinacoteca Civica of Fermo, the great Madonna and Child with Saints panels in the Marche regional churches and museums, the Madonna of Humility (multiple workshop variants), and the small devotional Madonnas now scattered across the European and American collections fill the painted corpus.

His personal style is closely modeled on his older brother Carlo's manner — figures in elongated late-Gothic proportions modeled with intense jewel-bright color, against tooled-gold backgrounds, framed by elaborate carved-and-gilded architectural altarpiece structures, and decorated with the unmistakable Crivelli touches of swag-and-fruit garlands, embroidered silks, and minute observation of botanical specimens. The two brothers' workshops produced altarpieces in close stylistic dialogue across the Marche through the 1480s and 1490s, and individual surviving panels are sometimes hard to attribute decisively to one Crivelli brother rather than the other.

He proudly signed himself in the late altarpieces with the parallel formula his brother had used: VICTOR CRIVELLUS VENETUS (Vittore Crivelli the Venetian) — both brothers continued to identify with their native Venice across their decades of Marche-regional residence.$BIO$,
  bio_sources = $JSON$[
    {"title":"Vittore Crivelli — Wikipedia","url":"https://en.wikipedia.org/wiki/Vittore_Crivelli","type":"wikipedia"},
    {"title":"Vittore Crivelli — Pinacoteca Civica di Fermo","url":"https://www.museodifermo.it/","type":"museum"},
    {"title":"Vittore Crivelli — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Vittore+Crivelli","type":"museum"}
  ]$JSON$::jsonb
where slug = 'vittore-crivelli';

-- ─── 147. Daniele Crespi ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Daniele Crespi was a leading Lombard painter of the first third of the seventeenth century and one of the principal Milanese exponents of the early Italian Baroque manner that combined the late-Mannerist Lombard tradition with the new Caravaggesque-Carracci pictorial vocabulary descending from Rome and Bologna. Born in or near Milan around 1597 (or perhaps slightly later), trained in Milan in the workshop of Giovanni Battista Crespi (called Cerano — the leading Milanese painter of the previous generation, no relation to Daniele despite the shared surname), he became the principal Milanese painter of his generation in the late 1620s and was active in Milan for his entire short career. He died of the plague in Milan in 1630, only thirty-three years old, in the same epidemic that swept much of northern Italy in 1629–1631.

His Christian religious work is concentrated in altarpieces and fresco cycles for the Lombard Counter-Reformation Catholic churches. The great fresco cycle of the Life of Saint Bruno in the Certosa di Garegnano in Milan (1629 — twenty-eight scenes from the life of the founder of the Carthusian order, painted in the cloister of the Milanese charterhouse and widely held to be Crespi's masterpiece and one of the supreme early-Baroque fresco cycles outside Rome), the Last Supper of Saint Charles Borromeo (Milan, c. 1628 — depicting the saint at his ascetic fast supper), the Pietà altarpieces in workshop variants, and the great altarpieces for the Milanese churches of San Giovanni in Conca, San Vittore al Corpo, and the Cathedral fill the painted corpus.

His personal style — combining the late-Mannerist Lombard chromatic warmth that he absorbed from his teacher Cerano with a strong Caravaggesque chiaroscuro and a particularly austere Counter-Reformation devotional sensibility — gave him a distinctive position in the early-seventeenth-century Lombard pictorial tradition. The Last Supper of Saint Charles Borromeo in particular — a single-figure half-length composition of the saint at his ascetic fast supper, painted with intense Caravaggesque single-source candlelight against a darkened ground — is among the supreme statements of Milanese Counter-Reformation devotional painting and was widely reproduced in the seventeenth and eighteenth-century Catholic devotional engraving market.

His early death in the 1630 Milan plague cut short what would almost certainly have been a major career. The Certosa di Garegnano frescoes survive substantially intact and remain in continuous use as the principal monument of his short brilliant career.$BIO$,
  bio_sources = $JSON$[
    {"title":"Daniele Crespi — Wikipedia","url":"https://en.wikipedia.org/wiki/Daniele_Crespi","type":"wikipedia"},
    {"title":"Daniele Crespi — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Daniele-Crespi","type":"britannica"},
    {"title":"Daniele Crespi — Pinacoteca di Brera","url":"https://pinacotecabrera.org/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'daniele-crespi';

-- ─── 148. Pierre Mignard ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Pierre Mignard was a leading French Baroque painter of the second half of the seventeenth century and the principal rival of Charles Le Brun for the title of premier painter to Louis XIV. Born in Troyes in 1612 to a hat-maker, trained in Paris in the workshop of Simon Vouet (the same Paris workshop that trained Le Brun), and traveling to Italy in 1635 (where he spent twenty-two years in Rome, working under successive papal patrons and producing portraits of the principal Roman ecclesiastical and aristocratic clientele), he returned to Paris in 1657 at the urgent recall of King Louis XIV. He served the French royal court for the rest of his career and died in Paris in 1695.

His Christian religious work is concentrated in altarpieces and large-format devotional canvases for the Paris royal chapels and the principal French churches. The great cupola fresco of the Val-de-Grâce in Paris (1663 — the Glory of the Blessed in Heaven, painted across the cupola of Anne of Austria's votive church and one of the supreme French Baroque ceiling decorations), the Crucifixion altarpieces in workshop variants, the Madonnas of the Virgin in dozens of small devotional panels (the Mignard Madonna type — a soft-faced Virgin holding the Christ Child against a luminous ground, reproduced in workshop variants for French aristocratic patrons across his entire career), and the late great altarpieces for the Paris churches of Saint-Eustache and Saint-Sulpice fill the religious painted corpus.

His Roman portraits — of seven successive popes (Urban VIII, Innocent X, Alexander VII, Clement IX, Clement X, Innocent XI, Alexander VIII), of the Roman aristocratic clientele, and of the French ambassadors and visitors to Rome — established his Roman reputation and provided him with the international clientele network that he carried into his Paris royal years. He was particularly admired in his lifetime for his portrait painting and continued to produce major royal and aristocratic portraits in Paris through the 1660s, 1670s, and 1680s.

His long professional rivalry with Charles Le Brun for control of the French royal patronage was one of the defining battles of seventeenth-century French art-political life. After Le Brun's death in 1690, Mignard succeeded him as Premier Peintre du Roi and as Director of the French Royal Academy of Painting and Sculpture, finally winning the rivalry that had defined his entire career. He held the posts until his own death five years later.$BIO$,
  bio_sources = $JSON$[
    {"title":"Pierre Mignard — Wikipedia","url":"https://en.wikipedia.org/wiki/Pierre_Mignard","type":"wikipedia"},
    {"title":"Pierre Mignard — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Pierre-Mignard","type":"britannica"},
    {"title":"Pierre Mignard — Musée du Louvre","url":"https://collections.louvre.fr/en/recherche?q=Mignard","type":"museum"}
  ]$JSON$::jsonb
where slug in ('pierre-mignard', 'nicolas-mignard');

-- ─── 149. Aurelio Luini ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Aurelio Luini was a Lombard painter and the principal heir to the workshop tradition of his father Bernardino Luini, the great Milanese-Leonardesque painter of the early Cinquecento. Born in Luino on Lake Maggiore around 1530 to Bernardino Luini and his second wife Margherita Lomazzo, trained in his father's workshop until Bernardino's death in 1532 (when Aurelio was only about two years old) and subsequently in the workshop of his older brother Pietro Luini and the broader Milanese late-Cinquecento workshop tradition, he was active in Milan and the surrounding Lombard towns for his entire career. He died in Milan around 1593.

His Christian religious work is concentrated in altarpieces and fresco cycles for the Milanese and Lombard churches, painted in his characteristic combination of late-Cinquecento Mannerist figural drawing and the soft chromatic warmth descending from his father's earlier Leonardesque workshop manner. The frescoes for the Sacro Monte di Varallo (in continuation of the great Sacro Monte sanctuary that Gaudenzio Ferrari had decorated in the previous generation), the great Last Judgment fresco for the church of San Barnaba in Milan, the Adoration of the Magi altarpieces in workshop variants for Lombard parish churches, and the Annunciation compositions in the standard Lombard format fill the painted corpus.

His personal style continued the Luini family workshop signature — soft sfumato modeling, warm flesh against deep saturated drapery color, and a particularly Lombard chromatic restraint — but in the slightly more elongated late-Mannerist proportions that defined the second half of the sixteenth-century Lombard pictorial tradition. He absorbed his father's Leonardesque vocabulary at one further remove (through workshop continuation rather than through direct apprenticeship) and inflected it toward the late-Mannerist current that ran through Milan in the 1560s, 1570s, and 1580s.

He was a contemporary of the great Counter-Reformation reformer Saint Charles Borromeo, the Cardinal-Archbishop of Milan from 1564 to 1584, and produced several altarpieces for the Borromean churches that the cardinal was building and renovating across his Milanese ministry. The Luini family workshop continued under Aurelio's direction through the 1570s and 1580s before being absorbed into the broader Lombard late-Cinquecento workshop tradition.$BIO$,
  bio_sources = $JSON$[
    {"title":"Aurelio Luini — Wikipedia","url":"https://en.wikipedia.org/wiki/Aurelio_Luini","type":"wikipedia"},
    {"title":"Luini family — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Bernardino-Luini","type":"britannica"},
    {"title":"Aurelio Luini — Pinacoteca di Brera","url":"https://pinacotecabrera.org/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'aurelio-luini';

-- ─── 150. Cesare da Sesto ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Cesare da Sesto was one of the leading Lombard-Leonardesque painters of the early sixteenth century and one of the principal direct pupils of Leonardo da Vinci in his Milanese workshop years. Born in Sesto Calende on Lake Maggiore around 1477, trained in Milan in the workshop of Leonardo da Vinci during Leonardo's first Milanese sojourn at the court of Lodovico Sforza (1482–1499), and active subsequently in Milan, Naples, Rome, and Sicily, he died in Milan in 1523.

His Christian religious work is concentrated in altarpieces, devotional Madonnas, and small panel paintings in his characteristic combination of Leonardesque sfumato modeling, the warm Lombard chromatic palette descending from Vincenzo Foppa, and the Roman classicizing figural vocabulary that Cesare absorbed during his Roman sojourn of around 1508–1513 in the orbit of Raphael. The Salome with the Head of Saint John the Baptist (Vienna), the Madonna and Child with the Lamb (multiple versions in workshop variants in the Brera, the Hermitage, and other major collections — a Leonardesque composition derived directly from Leonardo's earlier prototype), the Adoration of the Magi (Capodimonte, Naples — painted during Cesare's Sicilian-Neapolitan years), the Polyptych of Saint Rocco (Messina), and the Baptism of Christ in the Pinacoteca Ambrosiana of Milan anchor the painted corpus.

His personal style — combining Leonardo's soft sfumato modeling and atmospheric depth with the warm chromatic palette of the Lombard tradition and the Roman classicizing figural drawing he absorbed from Raphael — gave him a distinctive position in the Italian early-Cinquecento pictorial scene as the painter who most successfully synthesized the Leonardesque and the Raphaelesque manners. The Madonna and Child with the Lamb compositions in particular became one of the most-copied Italian Renaissance Marian devotional types and circulated in workshop variants and copies through the European Catholic devotional market for the next century.

His Sicilian-Neapolitan years (around 1513–1517) introduced the Leonardesque manner into the southern Italian pictorial tradition; the Polyptych of Saint Rocco in Messina remained the principal Leonardesque work in southern Italy until Antonello da Messina's earlier Leonardesque-anticipating panels were rediscovered and properly attributed in the late nineteenth century. He returned to Milan in his late years and died in the city in 1523.$BIO$,
  bio_sources = $JSON$[
    {"title":"Cesare da Sesto — Wikipedia","url":"https://en.wikipedia.org/wiki/Cesare_da_Sesto","type":"wikipedia"},
    {"title":"Cesare da Sesto — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Cesare-da-Sesto","type":"britannica"},
    {"title":"Cesare da Sesto — Pinacoteca di Brera","url":"https://pinacotecabrera.org/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'cesare-da-sesto';

-- ─── 151. Barent Fabritius ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Barent Fabritius was a Dutch Golden Age painter and the younger brother of the more famous Carel Fabritius (the gifted Rembrandt pupil whose career was cut short by his death at age thirty-two in the catastrophic 1654 Delft gunpowder explosion). Born in Midden-Beemster in North Holland in 1624 to a schoolteacher (the surname Fabritius — Latin for craftsman — was an academic Latinization of the family's Dutch surname), trained briefly in his older brother Carel's Amsterdam workshop and then in the workshop of Rembrandt van Rijn alongside his brother, and active in Leiden, Amsterdam, and the small Dutch towns of the Zuiderzee region for his entire career, he died in Amsterdam in 1673.

His Christian religious work is concentrated in altarpieces and biblical narrative paintings in his characteristic combination of the late-Rembrandt workshop manner and a distinctively brighter chromatic palette than his brother Carel had used. The Hagar and Ishmael in the Wilderness (multiple versions), the Naming of Saint John the Baptist (multiple versions), the Peter in the House of Cornelius (multiple versions), the great series of seven biblical-narrative paintings for the Lutheran church of Leiden (1660), and the small-format devotional half-length figures of Old Testament patriarchs and prophets that the Rembrandt workshop generation specialized in fill the painted corpus.

His personal style — combining the dense atmospheric chiaroscuro of the late-Rembrandt manner with a particular Dutch interior-architectural compositional sensibility — gave him a position in the second-generation Rembrandt school slightly removed from the more Rembrandt-faithful manner of contemporaries like Govaert Flinck and Ferdinand Bol. He worked extensively for the Dutch Lutheran congregations (his family was Lutheran by background, an unusual confessional position in the predominantly Calvinist seventeenth-century Dutch Republic) and produced altarpiece commissions for several of the small Lutheran churches of the Zuiderzee region.

The Leiden Lutheran church series of 1660 — seven canvases of biblical narrative including the Naming of Saint John the Baptist, the Adoration of the Shepherds, and the Calling of Peter — remained in the Lutheran congregation through the eighteenth and early nineteenth centuries before being dispersed across various Dutch and German museum collections in the late nineteenth century. He was buried in Amsterdam in 1673.$BIO$,
  bio_sources = $JSON$[
    {"title":"Barent Fabritius — Wikipedia","url":"https://en.wikipedia.org/wiki/Barent_Fabritius","type":"wikipedia"},
    {"title":"Barent Fabritius — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/barent-fabritius","type":"museum"},
    {"title":"Barent Fabritius — Mauritshuis, The Hague","url":"https://www.mauritshuis.nl/en/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'barent-fabritius';
