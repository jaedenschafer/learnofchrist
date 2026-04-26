-- Artist hub bios — phase 6.
-- Eight more anchor artists. Same conventions as 026 / 027:
-- original prose written for Learn of Christ, ILIKE name-pattern matches
-- that no-op on rows that do not exist, bio_sources as Wikipedia /
-- Britannica / museum citation pointers rather than the textual basis of
-- the prose.

-- ─── 16. Pieter Bruegel the Elder ──────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Pieter Bruegel the Elder painted the Bible into the Low Countries. Trained in Antwerp under Pieter Coecke van Aelst, traveled across Italy and the Alps in the early 1550s, and active mainly in Antwerp and then Brussels for the rest of his short life, he produced a body of work that married a fierce devotion to peasant life with a steady stream of large-scale biblical compositions. He is the only painter of his stature to set scriptural events in the snow and mud of Northern European villages.

His Tower of Babel paintings — the great panel in the Kunsthistorisches Museum in Vienna and the smaller version in the Boijmans Van Beuningen in Rotterdam — are the canonical visualizations of Genesis 11. Cylindrical, half-built, carved into a Flemish coastline, they read as both political allegory and structural drawing. The Procession to Calvary (1564, Vienna) places Christ on the road to Golgotha as a small, almost-lost figure inside a swarming Flemish crowd. The Massacre of the Innocents puts Herod''s soldiers in sixteenth-century armor in a snowed-in village square; the Census at Bethlehem sets Joseph and Mary in a slow line outside a tax-collector''s house. The Conversion of Paul (1567, Vienna) carries Saul and his retinue up an Alpine pass; the Suicide of Saul (1562, Vienna) ends in a panoramic battlefield.

He worked in oil, drew tirelessly, and produced print designs that the Antwerp publisher Hieronymus Cock turned out in editions across Europe. His style stands at the edge of the Northern Renaissance and what we now call genre painting; you can read in him both the late-medieval moralizing pictorialism of Hieronymus Bosch (whom he openly admired) and the beginnings of the secular landscape tradition that would flower in the Dutch Golden Age a century later.

He died in Brussels in 1569, leaving two young sons who became painters in their own right: Pieter Brueghel the Younger, who copied his father''s compositions for a Catholic Antwerp clientele, and Jan Brueghel the Elder, the great floral and Edenic painter who sometimes collaborated with Rubens. The "h" in Brueghel — added by his sons — distinguishes their generations from his own. He himself signed simply "Bruegel."$BIO$,
  bio_sources = $JSON$[
    {"title":"Pieter Bruegel the Elder — Wikipedia","url":"https://en.wikipedia.org/wiki/Pieter_Bruegel_the_Elder","type":"wikipedia"},
    {"title":"Pieter Bruegel the Elder — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Pieter-Bruegel-the-Elder","type":"britannica"},
    {"title":"Bruegel — Kunsthistorisches Museum Vienna","url":"https://www.khm.at/en/visit/collections/picture-gallery/","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%bruegel%' and name not ilike '%younger%' and name not ilike '%jan%';

-- ─── 17. Hieronymus Bosch ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Hieronymus Bosch — born Jheronimus van Aken in the Dutch town of ''s-Hertogenbosch, from which he took his painter''s name — is the most singular religious imagination in European painting before the Reformation. Almost nothing reliable is known about his life; he never traveled, was a member of the conservative Confraternity of Our Lady in his hometown, painted for both local commissions and high-status patrons including King Philip the Fair, and died around 1516. The dating of his roughly twenty-five surviving panels is mostly approximate, and the chronology of his style is still debated.

What he left is a Bible drawn from the inside of a fevered medieval imagination. The Garden of Earthly Delights, his most famous triptych, now hangs in the Prado in Madrid; on its three panels Adam meets Eve in Eden, humanity disports itself in a dreamlike middle landscape, and the damned suffer in a black-and-fire Hell crawling with hybrid creatures, infernal architecture, and grotesque musical instruments. The Last Judgment triptychs in Vienna, Bruges, and Munich extend that infernal vocabulary across additional commissions. The Christ Carrying the Cross panels — particularly the version in Ghent — press a tormented Christ into a press of distorted faces. The Adoration of the Magi (Prado), the Crowning with Thorns (London), and the Temptation of Saint Anthony (Lisbon) round out his late style.

His monsters are catechetical. They illustrate sins, vices, demonic temptations, and the bodily consequences of sin in a vocabulary that draws on illuminated manuscripts, medieval bestiaries, popular sermons, and his own profound visual invention. Where Italian Renaissance artists gave the Bible idealized human bodies, Bosch gave it a teeming bestial chorus. The Counter-Reformation and the seventeenth century mostly looked away; the Surrealists in the twentieth century rediscovered him; the conservation work and exhibitions of the 2010s, especially the Bosch Research and Conservation Project in advance of the 2016 quincentenary, have steadied his catalogue and made his sequence of paintings clearer than at any time since his death.

He was buried in the Church of Saint John in ''s-Hertogenbosch, the same building whose late-Gothic carvings — gargoyles, demons, and fantastic creatures climbing the buttresses — almost certainly fed his imagination from the start.$BIO$,
  bio_sources = $JSON$[
    {"title":"Hieronymus Bosch — Wikipedia","url":"https://en.wikipedia.org/wiki/Hieronymus_Bosch","type":"wikipedia"},
    {"title":"Hieronymus Bosch — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Hieronymus-Bosch","type":"britannica"},
    {"title":"Hieronymus Bosch — Museo del Prado","url":"https://www.museodelprado.es/en/the-collection/artist/bosch-hieronymus/","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%bosch%' or name ilike '%jheronimus%';

-- ─── 18. Lucas Cranach the Elder ───────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Lucas Cranach the Elder was the visual partner of the Protestant Reformation. Born in Kronach in Upper Franconia, he settled in Wittenberg in 1505 as court painter to Frederick the Wise, Elector of Saxony, and held that post under three successive electors for almost half a century. His workshop was vast and his civic standing in Wittenberg unusual — he served terms as town councilor and mayor — but the work that secured his place in the history of biblical art was his decades of close collaboration with Martin Luther.

Cranach was Luther''s neighbor, his close friend, godfather to one of his children, and the painter of nearly every authoritative portrait we have of Luther and his wife Katharina von Bora. He printed broadsides for the Reformation, illustrated the title page of the Luther Bible, and shaped the iconography of the new evangelical churches. His Wittenberg Altarpiece (1547, Stadtkirche St. Marien) places the Last Supper in the predella with Luther and the other Wittenberg reformers seated at the table; the Crucifixion above is flanked on the right wing by Luther himself preaching from the pulpit, pointing his congregation at Christ on the cross. The painted theology of the altarpiece is the painted theology of the Reformation: Word and sacrament, no mediator but Christ, no spectacle but Scripture.

His allegory Law and Gospel — surviving in multiple panel versions across European collections — set out a two-part diagram of Old Covenant judgment and New Covenant grace that became the defining didactic image of Lutheran preaching. His Adam and Eve panels, painted across his career, are the standard Northern depiction of the Fall. Among his independent biblical paintings: Christ Blessing the Children, the Sermon of Saint John the Baptist, the Crucifixion with the Converted Centurion, and a long sequence of devotional Madonnas painted for both Catholic and Lutheran patrons (Cranach worked for both sides of the confessional divide all his life).

He died in Weimar in 1553. His son Lucas Cranach the Younger ran the workshop after him and is responsible for many of the post-1550 panels traditionally attributed to the Cranach name. Father and son together set the visual language of German Protestantism from Wittenberg outward.$BIO$,
  bio_sources = $JSON$[
    {"title":"Lucas Cranach the Elder — Wikipedia","url":"https://en.wikipedia.org/wiki/Lucas_Cranach_the_Elder","type":"wikipedia"},
    {"title":"Lucas Cranach the Elder — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Lucas-Cranach-the-Elder","type":"britannica"},
    {"title":"Cranach Digital Archive","url":"https://lucascranach.org/","type":"scholarly"}
  ]$JSON$::jsonb
where name ilike '%cranach%' and name not ilike '%younger%';

-- ─── 19. Albrecht Dürer ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Albrecht Dürer was the great Northern Renaissance printmaker, and his prints carried the Bible into more European homes in his own lifetime than any painter''s panels ever could. Born in Nuremberg in 1471 to a goldsmith from Hungary, apprenticed first to his father and then to the painter Michael Wolgemut, married to Agnes Frey at twenty-two, he traveled twice to Italy (in 1494–95 and 1505–07) and made one extended trip through the Netherlands in 1520–21. Between those journeys he ran a Nuremberg printmaking workshop that turned out woodcuts and engravings of unprecedented technical refinement.

His Apocalypse, published as a fifteen-print woodcut series in 1498, is the founding work of European biblical illustration on a popular scale. The Four Horsemen, the Whore of Babylon, the Opening of the Fifth and Sixth Seals, the angel showing Saint John the New Jerusalem — these compositions defined how Revelation looked in print for the next century, and their imagery still shapes mass-market depictions of the apocalyptic. He followed the Apocalypse with the Large Passion (twelve large woodcuts, completed 1511), the Small Passion (thirty-six smaller woodcuts plus a frontispiece, 1511), the Engraved Passion (sixteen engravings, 1507–13), and the Life of the Virgin (twenty woodcuts, 1511).

His three so-called Master Engravings of 1513–14 — Knight, Death and the Devil; Saint Jerome in His Study; Melencolia I — sit alongside this biblical output and have generated more iconographic literature than almost any other engravings in Western art. His Adam and Eve engraving (1504) reset the Northern depiction of the Fall in the Italian-Renaissance proportional canon he had brought back from Venice.

In painting he produced the Paumgartner Altarpiece, the Adoration of the Magi, the Heller Altarpiece (now lost in original; copies survive), the Adoration of the Trinity (also called the Landauer Altarpiece, in the Kunsthistorisches Museum, Vienna), and the late panel commonly known as the Four Apostles (1526, Munich) — figures of John, Peter, Mark, and Paul whose Reformation-era sympathies are inscribed below the panels in Luther''s German.

He died in Nuremberg in 1528. The diary of his Netherlandish journey survives, as do hundreds of letters and his printed treatises on perspective, proportion, and fortification. He is buried at Sankt Johannis cemetery in Nuremberg.$BIO$,
  bio_sources = $JSON$[
    {"title":"Albrecht Dürer — Wikipedia","url":"https://en.wikipedia.org/wiki/Albrecht_D%C3%BCrer","type":"wikipedia"},
    {"title":"Albrecht Dürer — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Albrecht-Durer","type":"britannica"},
    {"title":"Dürer — Kunsthistorisches Museum Vienna","url":"https://www.khm.at/en/visit/collections/picture-gallery/","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%dürer%' or name ilike '%durer%';

-- ─── 20. El Greco ──────────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$El Greco — Domenikos Theotokopoulos, born in 1541 in Candia (Heraklion) on Venetian-ruled Crete, trained in the late Byzantine icon tradition before he ever picked up a Western brush — moved through Venice, Rome, and Madrid, and spent the second half of his life in Toledo, where he died in 1614. He took his nickname (the Greek) from the Spaniards he never quite became, and across forty years of work he produced a body of religious painting that no school can claim and almost no follower could continue.

In Venice in the late 1560s he absorbed the color of Titian and the energy of Tintoretto. In Rome in the 1570s he saw Michelangelo''s Last Judgment and apparently dismissed it (a remark that did him no favors). He failed to win a court commission from Philip II at the Escorial in 1580 and turned permanently to Toledo, the old Castilian Spanish capital, where local clergy and noble patrons absorbed his largest output.

The Burial of the Count of Orgaz, painted in 1586–88 for the small church of Santo Tomé in Toledo and still hanging there, is the most concentrated single statement of his religious vision. Below the cloth-of-gold horizon line, fifteen Toledan dignitaries gather in mourning around the body of a fourteenth-century knight; above the line, a heavenly court receives his soul through angels, the Virgin, and Christ. The combination of dense, observed earthly portrait with a column of weightless, elongated celestial figures is unrepeatable.

His Christ paintings — the Disrobing of Christ (Toledo Cathedral, 1577–79), the Driving the Money-Changers from the Temple (multiple versions), the Christ Healing the Blind, the Pentecost, the Resurrection, and his many Crucifixions — share the same elongation, the same icy ultramarine and lake-red palette, the same turbulent sky. He painted apostle cycles for the Hospital de Tavera and the Hospital de la Caridad in Illescas, and toward the end of his life the Vision of Saint John (Met) and the Opening of the Fifth Seal — works that left a measurable mark on Picasso''s Blue Period and Demoiselles d''Avignon three centuries later.

He was forgotten by the European mainstream for nearly two centuries; the Romantic and modern revival of his reputation, beginning with German critics in the 1850s and consolidating with Cézanne and Picasso in the 1900s, restored him as one of the great religious painters of any tradition.$BIO$,
  bio_sources = $JSON$[
    {"title":"El Greco — Wikipedia","url":"https://en.wikipedia.org/wiki/El_Greco","type":"wikipedia"},
    {"title":"El Greco — Encyclopædia Britannica","url":"https://www.britannica.com/biography/El-Greco","type":"britannica"},
    {"title":"El Greco — Museo del Prado","url":"https://www.museodelprado.es/en/the-collection/artist/el-greco/","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%greco%' or name ilike '%theotokopoulos%';

-- ─── 21. Nicolas Poussin ───────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Nicolas Poussin spent forty of his sixty-six years in Rome and produced there the founding body of French Classicism. Born in Normandy in 1594, trained in Paris, settled in Rome from 1624 — apart from a difficult eighteen-month return to Paris on a royal commission from Cardinal Richelieu in 1640–42 — he painted easel pictures, mostly for a small circle of erudite Roman and Parisian patrons, until his death in 1665. His most important early supporter was Cassiano dal Pozzo, the Roman antiquarian and amateur archaeologist whose paper museum of ancient monuments shaped Poussin''s habits of historical accuracy.

His biblical work is methodical, restrained, and saturated with references. He painted the Seven Sacraments twice — first for dal Pozzo in the late 1630s, then again for Paul Fréart de Chantelou in 1644–48 — laying out Eucharist, Penance, Baptism, Confirmation, Ordination, Marriage, and Extreme Unction as discrete tableau-vivants in archaeologically reconstructed early-Christian settings. The second set, which left France with the Earl of Rutland in the eighteenth century, now hangs in the Scottish National Gallery in Edinburgh.

His Old Testament cycles include the Crossing of the Red Sea (Melbourne, with the pendant Adoration of the Golden Calf in London), the Israelites Gathering Manna (Louvre), the Plague at Ashdod (Louvre), the Finding of Moses (multiple versions), and the four-painting Seasons (Louvre, 1660–64), each of which folds an Old or New Testament narrative — Adam and Eve in Spring, Ruth and Boaz in Summer, the Spies returning from Canaan in Autumn, the Flood in Winter — into a meditative landscape.

He wrote no treatise, but his letters to Chantelou contain his theory of the painter''s "modes" — Dorian, Phrygian, Lydian, Hypolydian, Ionic — borrowed loosely from Greek music theory and applied to picture composition. The doctrine influenced French academic teaching for two centuries.

By the late nineteenth century Poussin was the painter Cézanne quoted as wanting "to do over from nature." He is buried in the Roman church of San Lorenzo in Lucina, where Chantelou''s circle erected his monument.$BIO$,
  bio_sources = $JSON$[
    {"title":"Nicolas Poussin — Wikipedia","url":"https://en.wikipedia.org/wiki/Nicolas_Poussin","type":"wikipedia"},
    {"title":"Nicolas Poussin — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Nicolas-Poussin","type":"britannica"},
    {"title":"Poussin — Musée du Louvre","url":"https://collections.louvre.fr/en/recherche?author%5B0%5D=Poussin","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%poussin%';

-- ─── 22. Eugène Delacroix ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Eugène Delacroix is the great Romantic painter of nineteenth-century France, and the religious commission that crowned his career was a chapel mural cycle finished in his last decade. Born in 1798 near Paris and trained in the studio of Pierre-Narcisse Guérin, he made his name in his twenties with the Massacre at Chios and the Death of Sardanapalus, traveled in Morocco and Algeria in 1832, and developed across forty years a body of history, mythological, and religious painting whose color and gestural brushwork would become the direct inheritance of the Impressionists.

His religious paintings are dispersed across his career and across French churches. He painted Christ on the Cross repeatedly, in versions ranging from the modest Vannes panel to the great altarpiece in the church of Saint-Paul-Saint-Louis in the Marais. His Christ on the Sea of Galilee — the disciples in their pitching boat, Christ asleep in the stern, painted in at least six versions between 1841 and 1854 — is one of the defining Romantic biblical images. The Pietà of the Saint-Denys-du-Saint-Sacrement (Paris, 1844) and the Entombment for the same church set monumental Counter-Reformation compositions in the rough, layered handling of his late style.

Between 1853 and 1861 he frescoed the Chapel of the Holy Angels at Saint-Sulpice in Paris with two enormous wall paintings and a ceiling: Jacob Wrestling with the Angel (the angel pinning Jacob in a tangled forest of acanthus and oak), Heliodorus Driven from the Temple (an Old Testament Maccabees scene exploding into a vault of horsemen and angels), and Saint Michael Defeating the Devil overhead. The chapel had been badly fitted out, the lighting was wrong, his health failed multiple times during the work, and the public reception of the finished cycle was uneven. The chapel itself, however, has steadily climbed in critical estimation since his death; a generation of twentieth-century painters from Cézanne to Matisse made it a pilgrimage site.

He died in Paris in 1863 and is buried in Père Lachaise. The Journal he kept from 1822 onward, published posthumously, is one of the great working diaries of any nineteenth-century artist; passages on his struggles in the Saint-Sulpice chapel are among its most-quoted entries.$BIO$,
  bio_sources = $JSON$[
    {"title":"Eugène Delacroix — Wikipedia","url":"https://en.wikipedia.org/wiki/Eug%C3%A8ne_Delacroix","type":"wikipedia"},
    {"title":"Eugène Delacroix — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Eugene-Delacroix","type":"britannica"},
    {"title":"Chapel of the Holy Angels — Saint-Sulpice (Paris)","url":"https://www.paroissesaintsulpice.paris/saint-sulpice-en-images/","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%delacroix%';

-- ─── 23. Minerva Teichert ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Minerva Teichert was an American narrative painter who set most of the Bible and the Book of Mormon onto the Western light of a Wyoming ranch. Born Minerva Kohlhepp in 1888 in Idaho, she trained at the Art Institute of Chicago in 1909–10 and then at the Art Students League in New York under Robert Henri, the leader of the Ashcan School. She returned to the Mountain West after marriage to Herman Teichert in 1917 and spent the next six decades painting in a small studio attached to a working ranch in Cokeville, Wyoming.

Her output is enormous — she produced more than four hundred and fifty oil paintings while running a household, raising five children, and working alongside her husband on the ranch — and almost all of it is narrative scriptural painting. She covered the major Old Testament cycles (Sarah, Rebekah, Rachel, Moses, Ruth, Esther, Deborah, Hannah), the Gospels (Annunciation, Nativity, Christ Healing, the Last Supper, the Crucifixion, the Resurrection appearances), and the entire Book of Mormon, returning to several subjects multiple times across her career.

Her style is monumental and compositional. Bodies are large and frontal, lit in the high clear light of an alpine summer; backgrounds are simplified into broad bands of color so the figural drama dominates. She painted with great speed — letters describe her completing major canvases in days — and the looseness of the brushwork is part of the work''s frankness. She was particularly determined to bring the women of the scriptural narratives forward; her depictions of Rebekah at the well, of Hannah at the temple, of the women returning to the empty tomb, and of Mary at the foot of the cross emphasize action and witness over passive devotion.

The largest single collection of her paintings is held by the Brigham Young University Museum of Art in Provo, Utah, which mounted a large retrospective in 2007 and continues to rotate her work through the permanent installation. Many additional pieces hang in Latter-day Saint meetinghouses, temples, and visitors'' centers across the United States. She died in 1976 in Provo.$BIO$,
  bio_sources = $JSON$[
    {"title":"Minerva Teichert — Wikipedia","url":"https://en.wikipedia.org/wiki/Minerva_Teichert","type":"wikipedia"},
    {"title":"Teichert — BYU Museum of Art","url":"https://moa.byu.edu/","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%teichert%';
