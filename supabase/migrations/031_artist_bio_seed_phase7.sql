-- Artist hub bios — phase 7.
-- Eight more anchor artists. Same conventions as 026 / 027 / 030:
-- original prose written for Learn of Christ, ILIKE name-pattern matches
-- that no-op on rows that do not exist, bio_sources as Wikipedia /
-- Britannica / museum citation pointers rather than the textual basis of
-- the prose. Friberg and Anderson are twentieth-century figures, so the
-- claims here stay close to widely-documented facts (training, named
-- commissions, exhibition history) and keep clear of any extended
-- quotation from interviews or copyrighted writing about them.

-- ─── 24. Jan van Eyck ──────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Jan van Eyck is the founding figure of Northern Renaissance painting and one of the very few painters in any tradition whose technical innovations changed what oil paint could do for everyone after him. Born around 1390, possibly in Maaseik in the Prince-Bishopric of Liège, he served as court painter and trusted diplomatic agent to Philip the Good, Duke of Burgundy, from 1425 onward, was sent on a 1428 embassy to Lisbon to paint the portrait of Philip''s prospective bride Isabella of Portugal, and settled in Bruges by 1430, where he spent the rest of his life.

The work that fixed his reputation in his own century and ours is the Ghent Altarpiece — twelve panels arranged in two registers, opened on feast days to reveal the Adoration of the Mystic Lamb on the lower interior. He completed it in 1432 in collaboration with his older brother Hubert, who had begun the commission and died before its completion. The lower central panel — saints, prophets, virgins, and martyrs gathered in a meadow around an altar where the Lamb stands bleeding into a chalice, the Holy Spirit hovering above as a dove — gives Revelation 5 its most enduring single image. The work has been stolen, hidden, recovered, and restored more times than almost any other panel painting in the West; the long-running technical study of its layered glaze structure has shaped our understanding of fifteenth-century oil painting.

His independent religious panels are smaller in scale and exact in finish. The Madonna of Chancellor Rolin (Louvre, c. 1435), the Virgin and Child with Canon van der Paele (Bruges, 1436), the Lucca Madonna (Frankfurt), the Annunciation now in the National Gallery of Art in Washington, and the small diptychs of the Crucifixion and Last Judgment in the Metropolitan Museum carry the same impossibly precise brushwork — every brocade, jewel, hair, and reflection painted with magnifying-glass attention.

He also painted the great civilian Arnolfini Portrait (1434, National Gallery, London), and a small body of court portraits including the so-called Man in a Red Turban (1433, possibly a self-portrait). He died in Bruges in 1441 and was buried in the Church of Saint Donatian.$BIO$,
  bio_sources = $JSON$[
    {"title":"Jan van Eyck — Wikipedia","url":"https://en.wikipedia.org/wiki/Jan_van_Eyck","type":"wikipedia"},
    {"title":"Jan van Eyck — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Jan-van-Eyck","type":"britannica"},
    {"title":"Closer to van Eyck — Ghent Altarpiece project","url":"https://closertovaneyck.kikirpa.be/","type":"scholarly"}
  ]$JSON$::jsonb
where name ilike '%van eyck%';

-- ─── 25. Rogier van der Weyden ─────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Rogier van der Weyden is the great early-Netherlandish painter of the Passion. Born around 1399 in Tournai (then part of the County of Hainaut), he probably trained in the workshop of Robert Campin, qualified as a master painter in Tournai in 1432, and within a few years moved to Brussels, where he was named city painter and remained for the rest of his life. He died in Brussels in 1464 and was buried in the cathedral of Saint Michael and Saint Gudula.

His most influential work is the Descent from the Cross (Prado, c. 1435), painted as the central panel of an altarpiece for the Chapel of Our Lady Outside the Walls of Leuven. Within a shallow gilded niche the size of a stage box, ten figures fold around the lifeless body of Christ as it is lowered from the cross; the Virgin collapses below in a near-mirroring of his pose, and the whole composition reads like a freeze-frame from a Passion play in which every body is twisted into the same line of grief. No other early Northern panel reshaped European Passion iconography to the same degree; copies, derivations, and pastiches turn up across Flanders, France, Germany, and Spain into the seventeenth century.

He painted Crucifixion triptychs and panels through his career — the great Crucifixion Diptych in the Escorial, the Crucifixion Triptych in the Kunsthistorisches Museum in Vienna, the Abegg Triptych in Riggisberg — and a body of independent Madonnas and donor portraits commissioned by Burgundian, Italian, and Spanish patrons. The Seven Sacraments Altarpiece (Royal Museum of Fine Arts, Antwerp, c. 1448) sets the seven sacraments inside a single Gothic church interior, with the Crucifixion towering over the central nave. The Last Judgment polyptych at the Hôtel-Dieu in Beaune, painted for Nicolas Rolin between 1443 and 1452, is one of the largest Northern panel paintings of the fifteenth century and still hangs in the chapel of the hospital it was made for.

Almost no original drawings or signed paintings survive, and the chronology of his work is reconstructed from documentary records, contemporary copies, and stylistic comparison. His workshop trained or influenced almost every major Netherlandish painter of the next generation, and he is the documented teacher (or formative example) of Hans Memling.$BIO$,
  bio_sources = $JSON$[
    {"title":"Rogier van der Weyden — Wikipedia","url":"https://en.wikipedia.org/wiki/Rogier_van_der_Weyden","type":"wikipedia"},
    {"title":"Rogier van der Weyden — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Rogier-van-der-Weyden","type":"britannica"},
    {"title":"Rogier van der Weyden — Museo del Prado","url":"https://www.museodelprado.es/en/the-collection/artist/weyden-rogier-van-der/","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%weyden%' or name ilike '%rogier%';

-- ─── 26. Hans Memling ──────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Hans Memling was the most successful Bruges painter of the second half of the fifteenth century. Born around 1430 in Seligenstadt am Main in the Rhineland, he probably trained in Cologne in his teens before moving to Brussels, where he is generally believed to have worked in Rogier van der Weyden''s workshop in the late 1450s and early 1460s. He arrived in Bruges by 1465, became a citizen there in 1465, and ran a large workshop in the city until his death in 1494. By the end of his life he was one of the wealthiest taxpayers in Bruges.

The work that defined his early career was the Last Judgment Triptych in the National Museum in Gdańsk, painted around 1467–71 for the Florentine banker Angelo Tani and seized by a privateer en route to Italy — one of the most famous early-Netherlandish panels never to reach its intended chapel. The central panel sets Christ in glory above Saint Michael weighing souls; the wings open to Paradise on the left and a glassy, terraced Hell on the right. The Passion of Christ panel in the Galleria Sabauda in Turin, painted in the early 1470s, compresses eight separate Gospel scenes — entry into Jerusalem, Last Supper, Garden of Gethsemane, betrayal, trial, scourging, road to Calvary, and Crucifixion — into a single panoramic Jerusalem cityscape, like a Passion play laid out in a model city.

For the Hospital of Saint John in Bruges, where his largest single body of work still hangs, he painted the Triptych of the Mystic Marriage of Saint Catherine (1479), the Triptych of the Adoration of the Magi, the Diptych of Maarten van Nieuwenhove (1487), and the Saint Ursula Shrine (1489), a small painted reliquary box covering the legendary martyrdom of Saint Ursula and the eleven thousand virgins in eight Bruges-eye-view scenes. The Memling Museum in the former hospital remains one of the most concentrated single-painter installations in any European city.

His Madonnas — the Donne Triptych (London), the Diptych of Martin van Nieuwenhove (Bruges), and a long sequence of smaller devotional panels — set the Burgundian quiet domestic Madonna type that Quentin Massys, Gerard David, and the early sixteenth century would carry forward.$BIO$,
  bio_sources = $JSON$[
    {"title":"Hans Memling — Wikipedia","url":"https://en.wikipedia.org/wiki/Hans_Memling","type":"wikipedia"},
    {"title":"Hans Memling — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Hans-Memling","type":"britannica"},
    {"title":"Memling Museum — Bruges (Sint-Janshospitaal)","url":"https://www.museabrugge.be/en/discover/sint-janshospitaal","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%memling%';

-- ─── 27. Hugo van der Goes ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Hugo van der Goes painted the masterpiece that introduced Northern realism to Italy. Born around 1440, probably in Ghent, he was admitted to the Ghent painters'' guild as a master in 1467 and elected dean of the guild in 1473–75. In the late 1470s he withdrew from public life into the Roode Klooster, an Augustinian monastery in the Sonian Forest east of Brussels, where he continued to paint for outside commissions while living as a lay brother. Contemporaries describe a final crisis in which he attempted self-harm under the conviction that he could not be saved. He died at the monastery in 1482.

The work that secured his European reputation, before and after his death, was the Portinari Altarpiece (1475–76), an enormous triptych commissioned by Tommaso Portinari, the Medici bank''s representative in Bruges, for the family church of Sant''Egidio in Florence. The central panel — an Adoration of the Shepherds set in a wintry, twilight Northern landscape — was crated overland and across the Alps to Florence in 1483, where its exacting realism, the haunted faces of the shepherds, and the dense iconographic still-life of flowers in the foreground reset the visual standard for Florentine painters who saw it. Domenico Ghirlandaio''s Adoration of the Shepherds and Filippino Lippi''s and Botticelli''s late Madonnas all carry traces of its impact. The triptych now hangs in the Uffizi.

His other surviving panels include the Death of the Virgin (Groeningemuseum, Bruges), the Monforte Altarpiece showing the Adoration of the Magi (Gemäldegalerie, Berlin), the small Trinity Altarpiece (National Gallery of Scotland), and a few isolated devotional Madonnas. His pre-monastic civic identity in Ghent is largely documented by guild records; almost no preparatory drawings survive, and the chronology of his work is built from infrared imaging, dendrochronology, and a small set of contemporary accounts of his final illness — most notably the chronicle of Gaspar Ofhuys, the prior of the Roode Klooster while van der Goes was in residence.$BIO$,
  bio_sources = $JSON$[
    {"title":"Hugo van der Goes — Wikipedia","url":"https://en.wikipedia.org/wiki/Hugo_van_der_Goes","type":"wikipedia"},
    {"title":"Hugo van der Goes — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Hugo-van-der-Goes","type":"britannica"},
    {"title":"Portinari Altarpiece — Uffizi Gallery","url":"https://www.uffizi.it/en/artworks/the-portinari-triptych","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%van der goes%' or name ilike '%hugo van%';

-- ─── 28. Hans Holbein the Younger ──────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Hans Holbein the Younger is best known as the great court portraitist of Tudor England, but his religious work — and especially his Reformation-era illustrated Bible — is large and consequential. Born in Augsburg in 1497 to the painter Hans Holbein the Elder, trained in his father''s workshop, he settled in Basel by his early twenties, married there in 1519, and joined the city''s painters'' guild the following year. Switzerland in those years was the printing capital of Northern Europe, and Holbein''s most important early projects were collaborations with the Basel publishers — designs for the title pages of Erasmus''s Greek New Testament (1516 and later editions), portraits of Erasmus himself, and a sequence of woodcut series cut from his drawings by professional formschneiders.

Two of those series shape the European visual imagination of Scripture and mortality. The Icones Veteris Testamenti, published in Lyon in 1538, contained ninety-four small woodcuts illustrating the Old Testament from the Creation to the prophetic books — distributed across European Bibles in dozens of editions for the rest of the sixteenth century. The Dance of Death, also published in Lyon in 1538, set forty-one woodcut scenes of Death visiting people of every estate, from the pope to the ploughman; it remains the canonical visual treatment of the medieval danse macabre theme.

His painted religious work is small in number but very high in finish: the Solothurn Madonna (1522, Solothurn), the Darmstadt Madonna (also called the Madonna of Burgomaster Meyer, 1526–28, Würth Collection), the Body of the Dead Christ in the Tomb (1521, Kunstmuseum Basel) — a horizontal coffin-perspective view of the body of Christ that Dostoevsky, four centuries later, said could "make a man lose his faith."

He moved to England permanently in 1532 and became court painter to Henry VIII by 1535, producing the great series of Tudor portraits — Thomas More, Erasmus, Henry VIII, Jane Seymour, Anne of Cleves, Christina of Denmark — for which he is now most remembered. He died in London in 1543, probably of plague.$BIO$,
  bio_sources = $JSON$[
    {"title":"Hans Holbein the Younger — Wikipedia","url":"https://en.wikipedia.org/wiki/Hans_Holbein_the_Younger","type":"wikipedia"},
    {"title":"Hans Holbein the Younger — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Hans-Holbein-the-Younger","type":"britannica"},
    {"title":"Holbein — Kunstmuseum Basel","url":"https://kunstmuseumbasel.ch/en/collection","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%holbein%' and name not ilike '%elder%';

-- ─── 29. Joachim Patinir ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Joachim Patinir is the painter who turned Northern landscape into a subject in its own right while keeping a biblical figure tucked inside it. Born around 1480 in Bouvignes-sur-Meuse (or possibly in nearby Dinant) in the Prince-Bishopric of Liège, he registered as a master painter in the Antwerp guild in 1515 and lived and worked in Antwerp until his death in 1524. Albrecht Dürer, who passed through Antwerp on his Netherlandish journey of 1520–21 and met Patinir in person — drawing his portrait, attending his second marriage, and praising him in the diary as the great "good landscape painter" — left the earliest documentary appraisal of his importance.

His paintings are recognizable on sight. A small religious scene — the Rest on the Flight into Egypt, the Baptism of Christ, Saint Jerome in the wilderness, Charon Crossing the Styx — sits at the foot of a vast, sweeping panoramic landscape: bluish jagged outcroppings, distant rivers, scattered villages, an impossibly high horizon, and a soft grayed-blue atmospheric perspective that he was probably the first Northern painter to handle systematically. The figures, often by Patinir''s collaborators (Quentin Massys signed at least one joint panel with him), are dwarfed by the world they walk through.

His most-cited works — the Rest on the Flight into Egypt and Saint Jerome in the Desert in the Prado, the Baptism of Christ in the Kunsthistorisches Museum in Vienna, the Penitent Saint Mary Magdalene in the National Museum of Art of Catalonia, and the Charon Crossing the Styx in the Prado — all use the same compositional formula: small foreground devotional drama, vast Patinir-blue middle ground.

His direct influence is enormous. The "world landscape" tradition he established was carried forward by Pieter Bruegel the Elder''s mid-century paintings of biblical and seasonal subjects, by Herri met de Bles in the second generation, and indirectly by every later Flemish landscape painter from Jan Brueghel the Elder to Paul Bril. The marriage of small biblical figure to vast natural drama that we now associate with Romantic painting begins, in the West, with Patinir''s Antwerp panels.$BIO$,
  bio_sources = $JSON$[
    {"title":"Joachim Patinir — Wikipedia","url":"https://en.wikipedia.org/wiki/Joachim_Patinir","type":"wikipedia"},
    {"title":"Joachim Patinir — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Joachim-Patinir","type":"britannica"},
    {"title":"Joachim Patinir — Museo del Prado","url":"https://www.museodelprado.es/en/the-collection/artist/patinir-joachim/","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%patinir%';

-- ─── 30. Arnold Friberg ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Arnold Friberg was an American narrative illustrator whose biblical and historical paintings shaped American religious visual culture in the second half of the twentieth century. Born in Winnetka, Illinois, in 1913 to Swedish immigrant parents, he trained at the Art Institute of Chicago and the Grand Central School of Art in New York, then worked through the 1930s and 1940s as a commercial illustrator for advertising and pulp magazines.

Two commissions defined his later career. In 1950 the LDS Church commissioned him to paint a sequence of large narrative illustrations of scenes from the Book of Mormon. Friberg completed twelve major paintings between 1950 and 1953 — including The Brother of Jared Sees the Finger of the Lord, Abinadi Before King Noah, Samuel the Lamanite Prophesying, and Christ Appearing to the Nephites — that ran inside Latter-day Saint editions of the Book of Mormon for decades and remain the most widely reproduced visual treatments of those passages. Several years later, Cecil B. DeMille hired him as the principal concept artist and costume designer for the 1956 film The Ten Commandments, work that earned him an Academy Award nomination for costume design.

His third long-running commission was outside religious subject matter: between 1953 and 1981 he painted twenty-eight annual calendar paintings for the Royal Canadian Mounted Police, depicting the Mounties in scenes of Canadian history; the calendar program reproduced his work in millions of homes across North America.

Among his other religious paintings, the most reproduced is The Prayer at Valley Forge (1976), painted for the United States Bicentennial: George Washington kneeling beside his horse in the snow during the winter of 1777–78. Whatever one makes of the Valley Forge legend on which the image draws, the painting itself was widely licensed and entered devotional and patriotic visual culture in the same way his Book of Mormon plates had a generation earlier.

He continued painting into his nineties and died in Salt Lake City in 2010, age ninety-six. The Springville Museum of Art in Utah and the LDS Church History Museum in Salt Lake hold concentrations of his religious paintings; the Royal Canadian Mounted Police owns the original calendar series.$BIO$,
  bio_sources = $JSON$[
    {"title":"Arnold Friberg — Wikipedia","url":"https://en.wikipedia.org/wiki/Arnold_Friberg","type":"wikipedia"},
    {"title":"Springville Museum of Art","url":"https://www.smofa.org/","type":"museum"},
    {"title":"Church History Museum (Salt Lake City)","url":"https://history.churchofjesuschrist.org/museum","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%friberg%';

-- ─── 31. Harry Anderson ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Harry Anderson was an American commercial illustrator whose Christ paintings became the visual canon of mid-twentieth-century North American Protestant devotion. Born in Chicago in 1906, trained at Syracuse University, he worked through the 1930s as a commercial illustrator for major American magazines including the Saturday Evening Post, Reader''s Digest, and McCall''s. In the late 1940s, after his own conversion to Seventh-day Adventism, he began producing religious paintings on commission, first for the Adventist Church and later, by license, for many other Protestant and Latter-day Saint publishing programs.

His most reproduced images — Christ Ordaining the Twelve Apostles, The Sermon on the Mount, Christ Healing the Sick, the various Resurrection-appearance compositions, the family-altar scene Prince of Peace, and What Happened to Your Hand — all share a Norman-Rockwell-of-Christianity sensibility: warm tonality, narrative action, eyes that meet the viewer''s, costumes and faces drawn from the Mediterranean world rather than from European court painting. The Christ figure across his work is a tall, brown-haired, calmly framed presence; the disciples are recognisably ordinary working men.

The reach of his work outside Adventism came primarily through licensing. His Sermon on the Mount, his Christ at Heart''s Door, and his Walk to Emmaus appear in The Church of Jesus Christ of Latter-day Saints'' Gospel Art Book and in countless Sunday-school and missionary tracts; other Protestant denominations have used the same images for almost as long. The visual register of his Christ — friendly, accessible, recognisably human — is the register most American Christians of his generation pictured when they read the Gospels.

He continued painting devotional commissions through the 1980s and died in Connecticut in 1996. Loma Linda University and the Ellen G. White Estate hold archives of his correspondence and original sketches; the Adventist Pacific Press editions of his complete published religious paintings are the closest thing to a catalogue raisonné.$BIO$,
  bio_sources = $JSON$[
    {"title":"Harry Anderson — Wikipedia","url":"https://en.wikipedia.org/wiki/Harry_Anderson_(illustrator)","type":"wikipedia"},
    {"title":"Ellen G. White Estate","url":"https://whiteestate.org/","type":"scholarly"}
  ]$JSON$::jsonb
where name ilike '%anderson%' and name ilike '%harry%';
