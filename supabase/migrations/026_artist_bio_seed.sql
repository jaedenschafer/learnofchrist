-- Artist hub bios — phase 2.
-- Seeds bio_long + bio_sources for the ten artists in our library with the
-- most approved Bible-themed work, so /art/artist/[slug] flips out of
-- noindex on those pages and starts ranking.
--
-- Every bio_long below is original prose written for Learn of Christ. The
-- bio_sources entries are pointers to widely-cited references for readers
-- who want to go deeper, not the textual basis of the prose.
--
-- We match by name patterns rather than exact slugs because slug formatting
-- has varied across the bulk-ingest commits (caravaggio vs.
-- michelangelo-merisi-da-caravaggio, etc.). UPDATE WHERE no row matches is
-- a safe no-op in Postgres.

-- ─── 1. Caravaggio ──────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Caravaggio brought the Bible into the streets. Trained in Milan and active mainly in Rome, then Naples, Malta, and Sicily during a turbulent fugitive period that ended in his death at thirty-eight, he painted sacred subjects with a kind of working-class immediacy that scandalized some patrons and exhilarated others. The technique that made his name is now called tenebrism: a deep, almost theatrical darkness out of which figures emerge under a single hard light. The effect was not just stylistic — it was theological. When a tax collector hears his name called from across a Roman counting-room, when Peter is hoisted upside-down on a rough wooden cross, when Thomas pushes his finger into the wound, Caravaggio painted these moments as if you were close enough to overhear breathing.

He took unusual care with bystanders. Critics who saw the first version of his Saint Matthew and the Angel complained that the apostle looked like an illiterate peasant. The painting was rejected; Caravaggio repainted it with a more dignified figure, but he never softened his core conviction that holiness shows up in real bodies, with dirty feet and tired eyes. The men he hired off Roman streets and the women he asked to model populate his Crucifixions and Suppers with a particularity that earlier altarpieces almost never carried.

Among the works our library holds: the Contarelli Chapel cycle in San Luigi dei Francesi (the Calling, Inspiration, and Martyrdom of Saint Matthew), the Crucifixion of Saint Peter and Conversion of Saint Paul in the Cerasi Chapel of Santa Maria del Popolo, the Supper at Emmaus in London''s National Gallery, the Doubting Thomas in Sanssouci, and the Judith Beheading Holofernes in Rome. His late Sicilian and Maltese commissions — the Burial of Saint Lucy, the Adoration of the Shepherds, the Beheading of Saint John the Baptist — show a darker, looser hand, painted on the run.

Caravaggio''s life was as turbulent as his canvases. He killed a man in a Roman duel in 1606, fled south, and spent his last four years moving between commissions and arrest warrants. He died in 1610 under disputed circumstances on the Tuscan coast. His direct influence on the next generation — the so-called Caravaggisti, including Artemisia Gentileschi, Orazio Gentileschi, Valentin de Boulogne, Hendrick ter Brugghen, and the young Velázquez — reshaped European religious painting for fifty years. When you encounter a sudden raking light cutting across a biblical scene anywhere in the seventeenth century, the source is usually him.

For readers of Scripture, what is most striking about Caravaggio is how often he chose the moment of recognition rather than the moment of glory: the instant just before an answer is given, the half-second of doubt, the silence after a question. The drama is internal, even when the brushwork is loud.$BIO$,
  bio_sources = $JSON$[
    {"title":"Caravaggio — Wikipedia","url":"https://en.wikipedia.org/wiki/Caravaggio","type":"wikipedia"},
    {"title":"Caravaggio — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Caravaggio","type":"britannica"},
    {"title":"Caravaggio — National Gallery (London)","url":"https://www.nationalgallery.org.uk/artists/michelangelo-merisi-da-caravaggio","type":"museum"},
    {"title":"Web Gallery of Art — Caravaggio","url":"https://www.wga.hu/html_m/c/caravagg/","type":"scholarly"}
  ]$JSON$::jsonb
where name ilike '%caravaggio%';

-- ─── 2. Michelangelo Buonarroti ────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Michelangelo''s contribution to biblical art begins and ends with one room: the Sistine Chapel in the Vatican. Between 1508 and 1512 he painted the chapel''s barrel-vaulted ceiling, weaving nine Genesis scenes — the Separation of Light from Darkness, the Creation of Sun and Moon, the Separation of the Earth from the Waters, the Creation of Adam, the Creation of Eve, the Fall and Expulsion, the Sacrifice of Noah, the Flood, and the Drunkenness of Noah — through a fictive architecture studded with prophets, sibyls, ignudi, and the bronze ancestors of Christ. Twenty-five years later, between 1536 and 1541, he returned to paint the Last Judgment on the chapel''s altar wall, a tumbling vortex of resurrected bodies and damned souls swirling around an unbearded, classical Christ.

He had been trained as a sculptor in Lorenzo de'' Medici''s Florence and never stopped thinking like one. The figures on the Sistine ceiling read as carved bodies that the architecture barely contains. The same impulse animates the Pietà in St. Peter''s, the David in Florence, and the Moses on the tomb of Pope Julius II. His architectural commissions — the Laurentian Library in Florence, the dome of St. Peter''s, the redesign of the Capitoline Hill — translate that bodily, monumental sense to civic and ecclesiastical scale.

His final pictorial project was the Cappella Paolina in the Vatican, frescoed between 1542 and 1550 with the Conversion of Saul and the Crucifixion of Saint Peter. The Saul knocked from his horse on the Damascus road and the upside-down Peter waiting for the cross to be raised — these are the late, weathered Michelangelo, working through the meaning of his own faith in old age.

He wrote sonnets all his life; the late religious poems are spare, plain, and sometimes anguished. He died at almost eighty-nine, still working, in Rome, and was buried in Santa Croce in Florence. The Pietà he carved as an old man for his own tomb — now in the Museo dell''Opera del Duomo, sometimes called the Bandini or Florentine Pietà — broke under his hammer; he never finished it. It is, like the Sistine altar wall, a work about being held by something larger than oneself at the end of a long life.$BIO$,
  bio_sources = $JSON$[
    {"title":"Michelangelo — Wikipedia","url":"https://en.wikipedia.org/wiki/Michelangelo","type":"wikipedia"},
    {"title":"Michelangelo — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Michelangelo","type":"britannica"},
    {"title":"Sistine Chapel — Vatican Museums","url":"https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/cappella-sistina.html","type":"museum"},
    {"title":"Web Gallery of Art — Michelangelo","url":"https://www.wga.hu/html_m/m/michelan/","type":"scholarly"}
  ]$JSON$::jsonb
where name ilike '%michelangelo%' and name not ilike '%caravaggio%';

-- ─── 3. Rembrandt van Rijn ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Rembrandt painted, drew, and etched biblical scenes more often and more inwardly than any other Dutch master. Trained in Leiden and active mainly in Amsterdam, he produced roughly three hundred paintings and three hundred etchings across a forty-year career, and biblical subjects fill perhaps a third of that output. He was Protestant in a Protestant city, working without church commissions; the Reformation had stripped Dutch interiors of altarpieces, so Rembrandt''s religious paintings are mostly easel-scaled, made for private patrons and his own study.

He turned the Old Testament''s Hebrew names back into people. The Sacrifice of Isaac in the Hermitage and the Alte Pinakothek, the Belshazzar''s Feast at the National Gallery in London, the Blinding of Samson in the Städel, the Jacob Wrestling with the Angel in Berlin, the Bathsheba at Her Bath at the Louvre — these are not polished allegories, they are human encounters with extraordinary moments. His Amsterdam neighborhood had a large Jewish community, and the men who modeled for his patriarchs and prophets were often Jewish merchants and rabbis from a few streets over. The result is a Bible that looks lived-in.

In the New Testament he kept returning to the same threshold scenes. The Hundred Guilder Print, formally titled Christ Healing the Sick, gathers the whole of Matthew 19 — the rich young ruler, the children, the Pharisees, the lame and blind, the disciples — into a single etched composition. The various Supper at Emmaus paintings (the small Jacquemart-André panel, the larger Louvre version) show the moment of recognition with a quietness that almost no other painter found. His final Return of the Prodigal Son in the Hermitage, painted in the last years of his life, is the masterwork of a man who had outlived a wife, a partner, his own son, and his own fame: it is just two figures and a few witnesses, and it does the whole Gospel.

His etching technique — biting copper plates with acid, working in fine drypoint, reusing and reworking impressions — let him publish biblical illustrations across northern Europe at a time when most religious art was confined to a single building. He died in 1669, in modest circumstances, and was buried in Amsterdam''s Westerkerk. The studio of Aert de Gelder kept his manner alive into the early eighteenth century, after which he was rediscovered, century by century, until the body of biblical work most people now associate with Protestant Christian art quietly turned out to be his.$BIO$,
  bio_sources = $JSON$[
    {"title":"Rembrandt — Wikipedia","url":"https://en.wikipedia.org/wiki/Rembrandt","type":"wikipedia"},
    {"title":"Rembrandt van Rijn — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Rembrandt-van-Rijn","type":"britannica"},
    {"title":"Rembrandt — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/rembrandt-van-rijn","type":"museum"},
    {"title":"The Rembrandt Database","url":"https://rembrandtdatabase.org/","type":"scholarly"}
  ]$JSON$::jsonb
where name ilike '%rembrandt%';

-- ─── 4. James Tissot ────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$James Tissot — born Jacques Joseph Tissot in Nantes — spent his first decades as a stylish society painter, capturing the fashionable French and English bourgeoisie in glossy, bright canvases. The mid-1880s broke him open. After a period of personal grief and a religious experience he described as a vision in the Église Saint-Sulpice in Paris, he abandoned modern-life subjects and devoted the rest of his career to illustrating the Bible.

He traveled to the Holy Land twice — in 1886 and 1889 — sketching landscapes, plants, costumes, and crowds in Jerusalem, Galilee, Bethlehem, and Jericho. The result was The Life of Our Lord Jesus Christ, a sequence of more than 350 watercolor and gouache illustrations covering the four Gospels in narrative order. Brooklyn Museum has held the series since 1900, when it was purchased by public subscription. Tissot continued the project with a still-larger Old Testament cycle, left unfinished at his death; many of those drawings are now at the Jewish Museum in New York.

His method was archaeological. Where earlier biblical painters had dressed apostles in toga-like fantasies and set the Sermon on the Mount in Tuscan landscapes, Tissot drew from the actual hills around the Sea of Galilee, from the dress and architecture of the late Ottoman Levant, from the synagogue interiors he observed in person. The reception of the series in late-nineteenth-century Europe was enormous; printed editions popularized his compositions in homes that had never owned an altarpiece. For better and for worse — the late-Victorian European gaze is everywhere in these pictures — he taught a generation of Bible readers what they thought first-century Palestine looked like.

For our purposes the Tissot watercolors are useful precisely because they are sequential. Where most biblical art picks the dramatic moments and skips the connective tissue, Tissot drew the disciples walking, the women preparing, the crowds listening, the courtyards filling. He died in 1902 at his château at Buillon in eastern France and is buried in the village cemetery there.$BIO$,
  bio_sources = $JSON$[
    {"title":"James Tissot — Wikipedia","url":"https://en.wikipedia.org/wiki/James_Tissot","type":"wikipedia"},
    {"title":"James Tissot — Encyclopædia Britannica","url":"https://www.britannica.com/biography/James-Tissot","type":"britannica"},
    {"title":"The Life of Our Lord Jesus Christ — Brooklyn Museum","url":"https://www.brooklynmuseum.org/opencollection/collections/153","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%tissot%';

-- ─── 5. Gustave Doré ────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Gustave Doré was a French illustrator who, in a career of barely thirty years, produced more than ten thousand published images. He is the visual conscience of the nineteenth-century Bible. His 1866 illustrated Bible, published in Tours, contained 241 wood engravings covering Genesis through Revelation, and within a generation those engravings had appeared in nearly every Protestant English-speaking household with a Bible in it.

He drew on whitened wood blocks and handed them to a workshop of skilled engravers who cut his lines for the press; the result was a body of work simultaneously theatrical and mass-producible. His sensibility was Romantic: scale, shadow, sublime weather, vast crowds. The Deluge, the Tower of Babel, the Crossing of the Red Sea, the Walls of Jericho, the Brazen Serpent, Jonah and the great fish, the Annunciation, the Massacre of the Innocents, the Crucifixion, and the Last Judgment — these are the images that hung as engravings in late-Victorian parlors and that still come to mind, for many readers, when someone names the scene aloud.

Outside the Bible, Doré illustrated Dante''s Inferno (1861), Don Quixote (1863), Paradise Lost (1866), Coleridge''s Rime of the Ancient Mariner, and the fairy tales of Perrault. He also painted in oil and worked in sculpture toward the end of his life — the standing Père Lachaise cemetery monument to Alexandre Dumas is by him. Critics in his own time accused him of melodrama; the accusation was true, but it has worn well. Doré''s compositions endure because they take the Bible at its own scale: a flood is the size of a continent, a city falling is the size of a city.

He died in Paris in 1883 and is buried in Père Lachaise.$BIO$,
  bio_sources = $JSON$[
    {"title":"Gustave Doré — Wikipedia","url":"https://en.wikipedia.org/wiki/Gustave_Dor%C3%A9","type":"wikipedia"},
    {"title":"Gustave Doré — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Gustave-Dore","type":"britannica"},
    {"title":"Doré Bible illustrations — Wikipedia","url":"https://en.wikipedia.org/wiki/Dor%C3%A9_Bible","type":"wikipedia"}
  ]$JSON$::jsonb
where name ilike '%dor%' and (name ilike '%gustave%' or name ilike '%doré%' or name ilike '%dore%');

-- ─── 6. Peter Paul Rubens ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Rubens was the great Catholic painter of the Counter-Reformation north. Born in Westphalia to Flemish exiles, raised in Antwerp, trained in the Italianate workshops of his city and then in Italy itself between 1600 and 1608, he returned to Antwerp at thirty-one and turned the city''s churches back into picture galleries. The Antwerp Cathedral — its Elevation of the Cross (1610–11) and Descent from the Cross (1612–14) triptychs — and the Jesuit Saint Carolus Borromeus Church set the visual program for Counter-Reformation Flanders: dynamic, fleshy, light-flooded, theatrical, unmistakably Catholic.

His workshop was the largest in Europe. He took commissions across the courts of Spain, France, England, and the Italian states; he painted the Marie de'' Medici cycle for the Luxembourg Palace in Paris (now in the Louvre), the ceiling of the Banqueting House in Whitehall, the Decius Mus tapestry cartoons, dozens of altarpieces for Antwerp, Brussels, Mechelen, and the Spanish Netherlands. Hundreds of paintings left his shop with his name on them; collaborators completed many. His own hand is unmistakable in the modelling of flesh and the energy of large-scale composition.

He was also a diplomat. Knighted by both Philip IV of Spain and Charles I of England, he negotiated peace between Spain and England in 1630. He spoke six languages and corresponded with humanists across Europe. He outlived two wives, married a third when he was fifty-three (Helena Fourment, his model for many late paintings), and ended his life on a country estate outside Antwerp, painting for himself.

His biblical subjects are large in every sense. The Massacre of the Innocents (Alte Pinakothek and J. Paul Getty Museum), the Samson and Delilah (National Gallery, London), the Daniel in the Lions'' Den (National Gallery of Art, Washington), the Adoration of the Magi (Prado), the Crucifixion altarpieces and Resurrection panels of Antwerp — these are paintings that ask churches to be cathedrals and cathedrals to be theaters. He died in 1640 and is buried in St. Jacob''s Church in Antwerp, in a side chapel he designed.$BIO$,
  bio_sources = $JSON$[
    {"title":"Peter Paul Rubens — Wikipedia","url":"https://en.wikipedia.org/wiki/Peter_Paul_Rubens","type":"wikipedia"},
    {"title":"Peter Paul Rubens — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Peter-Paul-Rubens","type":"britannica"},
    {"title":"Rubens — Royal Museum of Fine Arts, Antwerp","url":"https://kmska.be/en/master/peter-paul-rubens","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%rubens%';

-- ─── 7. Raphael (Raffaello Sanzio) ─────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Raphael — born in Urbino, trained under his father and then in Pietro Perugino''s Umbrian workshop, established in Florence by 1504 and in Rome by 1508 — produced in less than two decades a body of work that became the European standard for what religious painting was supposed to look like. He died at thirty-seven; what he made before that has shaped the visual imagination of the Western Church ever since.

In Rome he frescoed the four papal apartments now called the Stanze of Raphael — the Stanza della Segnatura with its School of Athens and Disputation of the Holy Sacrament, the Stanza di Eliodoro, the Stanza dell''Incendio, and the Stanza di Costantino — in collaboration with a workshop that included Giulio Romano, Giovan Francesco Penni, and others. He designed ten tapestries for the Sistine Chapel: the cartoons (now in the Victoria and Albert Museum) include the Miraculous Draught of Fishes, Christ''s Charge to Peter, the Healing of the Lame Man, the Death of Ananias, Saint Paul Preaching at Athens, and the Conversion of the Proconsul.

His Madonnas, scattered now across European and American collections — the Sistine Madonna in Dresden, the Madonna del Cardellino in the Uffizi, the Madonna of the Meadow in Vienna, the Alba Madonna and the Small Cowper Madonna in Washington, the Madonna della Seggiola in the Pitti — fixed the visual type of the Virgin and Child for four centuries. His final painting, the Transfiguration, was carried to his funeral and now hangs in the Vatican Museums.

He died on Good Friday 1520 and was buried, by his own request, in the Pantheon in Rome, where his tomb is still visited.$BIO$,
  bio_sources = $JSON$[
    {"title":"Raphael — Wikipedia","url":"https://en.wikipedia.org/wiki/Raphael","type":"wikipedia"},
    {"title":"Raphael — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Raphael-Italian-painter-and-architect","type":"britannica"},
    {"title":"Raphael Cartoons — Victoria and Albert Museum","url":"https://www.vam.ac.uk/articles/the-raphael-cartoons","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%raphael%' or name ilike '%raffaello%';

-- ─── 8. Julius Schnorr von Carolsfeld ──────────────────────────────────
update public.artists
set
  bio_long = $BIO$Julius Schnorr von Carolsfeld was a German painter and printmaker associated with the Nazarene movement — a group of early-nineteenth-century German artists who set out, in conscious reaction to academic Neoclassicism, to recover what they took to be the spiritual seriousness of late-medieval and early-Renaissance Christian art. Trained in Vienna, then Rome (1818–27), and finally settled in Munich and Dresden, Schnorr produced frescoes, paintings, and book illustrations across his long career. For our purposes his most important project was the last.

The Bilder-Bibel, or Picture Bible, was published in installments by the Cotta firm in Stuttgart between 1851 and 1860. It contained 240 wood engravings illustrating the Old and New Testaments, drawn by Schnorr and cut by a team of engravers under his supervision. The compositions are clear, narrative, and devotional in tone — closer in feeling to a stained-glass window than to a Caravaggio. They were translated and pirated across Europe and North America within a decade; a generation of Sunday-school illustrations and family Bibles took their cues from Schnorr''s plates.

Earlier in his career he had frescoed the Casino Massimo in Rome with scenes from Ariosto''s Orlando Furioso (alongside Friedrich Overbeck and Peter von Cornelius working on Tasso and Dante), and the Munich Residenz with scenes from the Nibelungenlied. He served as director of the Dresden Gemäldegalerie from 1846 until his death in 1872.$BIO$,
  bio_sources = $JSON$[
    {"title":"Julius Schnorr von Carolsfeld — Wikipedia","url":"https://en.wikipedia.org/wiki/Julius_Schnorr_von_Carolsfeld","type":"wikipedia"},
    {"title":"Die Bibel in Bildern — full plates online","url":"https://archive.org/details/diebibelinbilder00schn","type":"scholarly"}
  ]$JSON$::jsonb
where name ilike '%schnorr%';

-- ─── 9. Fra Angelico ───────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Fra Angelico — born Guido di Pietro in the Mugello north of Florence, sometime in the 1390s, professed as a Dominican friar around 1420 and renamed Fra Giovanni — was beatified by Pope John Paul II in 1982. The papal letter named him Patron of Catholic Artists. The works he left behind, made entirely within and for his religious order, justify both the title and the cause.

His life as a painter and his life as a friar were the same life. He began as a manuscript illuminator in Cortona and Fiesole, painted altarpieces for Dominican churches across Tuscany and Umbria, and in 1438 was given an entire convent to fresco. The cells, corridors, chapter house, cloister, and church of San Marco in Florence — rebuilt that decade by Cosimo de'' Medici as a Dominican house under Antoninus, the future archbishop and saint — were decorated by Angelico and his workshop over roughly the next decade. Each cell received one fresco, sized to the bed and the window, designed for the friar who would say his hours in front of it. The Annunciation at the head of the dormitory stairs is the most famous; the Mocking of Christ in cell 7, the Transfiguration in cell 6, and the Coronation of the Virgin in cell 9 are not far behind.

Earlier works include the Linaioli Tabernacle (1433, painted for the Florentine flax-workers'' guild and now in the Museo di San Marco), the Coronation of the Virgin altarpieces in the Louvre and the Uffizi, the Deposition for Santa Trinita in Florence, and the Armadio degli Argenti panels for the silver chest of Santissima Annunziata. In 1447 Pope Nicholas V called Angelico to Rome to fresco a small chapel in the Vatican Palace; the Cappella Niccolina, with its scenes from the lives of Saints Stephen and Lawrence, is the most polished work of his late career.

He died in Rome in 1455 and is buried in Santa Maria sopra Minerva, the Dominican basilica, where his tomb slab and effigy survive. Vasari, writing a century later, said simply that he had been good and never made a painting in anger.$BIO$,
  bio_sources = $JSON$[
    {"title":"Fra Angelico — Wikipedia","url":"https://en.wikipedia.org/wiki/Fra_Angelico","type":"wikipedia"},
    {"title":"Fra Angelico — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Fra-Angelico","type":"britannica"},
    {"title":"Museo di San Marco — Florence","url":"https://www.polomusealetoscana.beniculturali.it/index.php?it/188/museo-di-san-marco","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%angelico%' or name ilike '%fra giovanni%';

-- ─── 10. William-Adolphe Bouguereau ────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Bouguereau was a French academic painter from La Rochelle who trained in Paris under François-Édouard Picot, won the Prix de Rome in 1850, and spent four formative years at the Villa Medici. He returned to a long Paris career in which he became the most successful religious and mythological painter of the Third Republic — exhibited annually at the Salon, decorated by the state, taught at the Académie Julian and the École des Beaux-Arts, and collected aggressively by American railroad and oil fortunes whose pictures still anchor the European galleries of museums in Boston, Chicago, New York, and Cleveland.

His biblical paintings are large, polished, and devotional. The Compassion of Christ (1897) shows the crucified Christ embracing a small figure of a kneeling sinner from the cross. The Pietà (1876) at the Getty is one of the most monumental treatments of the subject in nineteenth-century painting. He painted the Holy Family, the Madonna and Child enthroned, the Madonna of the Lilies, the Virgin of Consolation, the Flagellation in the Cathedral of La Rochelle, and a private chapel for the Vincentian fathers in Paris. He decorated three Parisian churches — Saint-Augustin, Saint-Vincent-de-Paul, and Sainte-Clotilde — with mural cycles in the 1860s and 1870s.

His critical fortunes collapsed almost the moment he died. The early-twentieth-century revolt against academic painting threw him out of museum hangs for decades, and his name became a byword for kitsch. The reassessment that began in the 1980s has been steady: catalogue raisonné, retrospective exhibitions, museum reinstallations. For our purposes he is one of the few late-nineteenth-century academic painters who took the central New Testament subjects seriously enough to give them his largest canvases. He died at his atelier in Paris in 1905 and is buried in the Cimetière de Montparnasse.$BIO$,
  bio_sources = $JSON$[
    {"title":"William-Adolphe Bouguereau — Wikipedia","url":"https://en.wikipedia.org/wiki/William-Adolphe_Bouguereau","type":"wikipedia"},
    {"title":"William-Adolphe Bouguereau — Encyclopædia Britannica","url":"https://www.britannica.com/biography/William-Adolphe-Bouguereau","type":"britannica"},
    {"title":"Bouguereau — J. Paul Getty Museum","url":"https://www.getty.edu/art/collection/person/103J5R","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%bouguereau%';
