-- Artist hub bios — phase 13.
-- This is the cleanup phase. Two categories:
--   (a) Named artists with substantial catalogues that earlier phases
--       skipped — manuscript masters, second-tier engravers, the
--       second-generation Tiepolo, etc.
--   (b) The largest "Anonymous, [region], [century]" workshop-attribution
--       buckets, given context paragraphs that explain what kind of
--       pictorial production these workshop attributions cover, so the
--       hub pages have meaningful prose rather than blank shells.

-- ─── 164. Master C. (Vivian Bible illuminator) ─────────────────────────
update public.artists
set
  bio_long = $BIO$Master C. is the conventional art-historical name for the principal anonymous illuminator of the Vivian Bible — the great mid-ninth-century Carolingian illuminated Bible now in the Bibliothèque Nationale de France in Paris (MS Lat. 1, also called the First Bible of Charles the Bald). The manuscript was produced at the Benedictine abbey of Saint-Martin in Tours under the abbacy of Count Vivian (845–851), presented by the Tours monks to the Frankish king Charles the Bald around 845–846, and is one of the principal surviving documents of the Carolingian Tours-school of manuscript illumination at the height of the Frankish renaissance.

The Vivian Bible contains eight full-page illuminations — Saint Jerome explaining his translation, Genesis, Exodus, David and his musicians, the Ascension of Christ, the Apocalyptic Lamb, the Presentation of the Bible to Charles the Bald, and a final colophon page — set inside a complete Vulgate Latin Bible text. Master C. is the Tours scriptorium scribe and illuminator who produced the principal narrative miniatures; the workshop also included Master B. (responsible for several of the framing decorations) and several anonymous scribes.

The Master C. pictorial style is the unmistakable Tours-Carolingian signature: small lively figures in jewel-bright tempera color and gold against patterned grounds; architectural settings combining late-Antique-Byzantine convention with Frankish-Carolingian narrative density; and a particular dramatic figural energy that distinguishes the Tours workshop from the more restrained contemporary Reims school (which produced the Utrecht Psalter in the same decades). The Vivian Bible's Presentation page — Charles the Bald enthroned receiving the Bible from the Tours monks — is one of the most reproduced single pages of the entire Carolingian manuscript tradition and a foundational document of medieval royal-iconographic pictorial convention.

The manuscript moved from Charles the Bald's library through the medieval royal French collection and into the Bibliothèque Nationale at the founding of the modern French national collection. It is widely held to be the supreme surviving Carolingian illuminated Bible alongside the Codex Aureus of Saint Emmeram and the Bible of San Paolo Fuori le Mura.$BIO$,
  bio_sources = $JSON$[
    {"title":"Vivian Bible — Wikipedia","url":"https://en.wikipedia.org/wiki/Vivian_Bible","type":"wikipedia"},
    {"title":"Vivian Bible — Bibliothèque Nationale de France","url":"https://gallica.bnf.fr/ark:/12148/btv1b8455903b","type":"museum"},
    {"title":"Tours School — Index of Medieval Art","url":"https://theindex.princeton.edu/","type":"scholarly"}
  ]$JSON$::jsonb
where slug = 'vivian-bible-master';

-- ─── 165. Master of the Codex Amiatinus ────────────────────────────────
update public.artists
set
  bio_long = $BIO$The Master of the Codex Amiatinus is the conventional art-historical name for the principal anonymous illuminator of the Codex Amiatinus — the great early-eighth-century Anglo-Saxon Northumbrian illuminated Bible now in the Biblioteca Medicea Laurenziana in Florence (MS Amiatinus 1) and the earliest surviving complete Latin Vulgate Bible. The manuscript was produced at the Anglo-Saxon Benedictine twin abbey of Wearmouth-Jarrow in Northumbria around 692–716 under the patronage of Abbot Ceolfrith.

The Codex Amiatinus is enormous — over a thousand parchment leaves, more than seventy-five pounds in weight, written in a careful insular uncial script — and was originally one of three pandects (one-volume Bibles) that Ceolfrith commissioned for the Wearmouth-Jarrow library. In 716 the aging Ceolfrith left the abbey on a final pilgrimage to Rome carrying the Codex Amiatinus as a gift for Pope Gregory II, but he died on the journey at Langres in Burgundy. The Bible was eventually delivered to the Lombard abbey of Monte Amiata in Tuscany (from which it takes its modern name) and remained there until the suppression of the Italian monastic houses in 1782, when it was transferred to the Laurentian Library in Florence.

The manuscript contains eight surviving full-page illuminations — the Tabernacle of the Old Covenant, the Ezra page (Ezra writing the books of the Bible, traditionally identified with the manuscript's principal patron Ceolfrith himself), the Maiestas Domini at the front of the New Testament, and several decorative cross-and-symbol pages. The Master of the Codex Amiatinus pictorial style is the unmistakable Anglo-Saxon insular signature combined with strong late-Antique Mediterranean pictorial conventions absorbed from imported Byzantine and Italian manuscripts that the Wearmouth-Jarrow library held in considerable numbers.

The manuscript was, until the end of the twentieth century, the principal scholarly text-witness for the modern critical reconstruction of the Latin Vulgate. Its pictorial program shaped the entire Anglo-Saxon and subsequent insular illuminated tradition.$BIO$,
  bio_sources = $JSON$[
    {"title":"Codex Amiatinus — Wikipedia","url":"https://en.wikipedia.org/wiki/Codex_Amiatinus","type":"wikipedia"},
    {"title":"Codex Amiatinus — Biblioteca Medicea Laurenziana","url":"https://www.bmlonline.it/","type":"museum"},
    {"title":"Codex Amiatinus — Index of Medieval Art","url":"https://theindex.princeton.edu/","type":"scholarly"}
  ]$JSON$::jsonb
where slug = 'codex-amiatinus-master';

-- ─── 166. Giovanni Domenico Tiepolo ────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giovanni Domenico Tiepolo (also called Giandomenico Tiepolo) was the eldest son and principal heir of the supreme Italian fresco painter Giovanni Battista Tiepolo, and was himself one of the leading Italian decorative painters of the second half of the eighteenth century. Born in Venice in 1727, trained from his youth in his father's workshop, and active in close partnership with his father across the great fresco campaigns at the Würzburg Residenz (1750–1753), the Villa Valmarana ai Nani in Vicenza (1757), the Madrid Royal Palace (1762–1770), and other major commissions, he succeeded to direction of the Tiepolo workshop after his father's death in Madrid in 1770. He died in Venice in 1804.

His Christian religious work is concentrated in altarpieces and small devotional canvases produced both in collaboration with his father (where Giandomenico typically supplied the secondary figures, the architectural settings, and the small predella narratives) and in his independent late career across Venice and the Veneto. The Stations of the Cross fresco cycle in San Polo in Venice (1747–1749 — Giandomenico's first major independent commission, painted while still a teenage assistant in his father's workshop), the great series of Punchinello drawings and frescoes (which sit somewhat outside conventional religious painting but include several biblical-subject parodies), the Madonna and Saints altarpieces produced after his father's death, and the late biblical narrative drawings produced in his last Venetian decade fill the painted-and-drawn corpus.

His personal style is closely modeled on his father's — the same luminous chalk-pink and electric blue chromatic palette, the same compositional vocabulary of vortex-like ceiling compositions and panoramic landscapes, the same rapid confident pen-and-wash drawing technique — but with a slightly cooler emotional register and a more idiosyncratic interest in scenes from everyday Venetian life. The Punchinello drawings of the late 1790s and early 1800s — comic-grotesque scenes of the masked Venetian carnival figure performing every conceivable secular and (parodically) religious action — are the principal idiosyncratic Giandomenico contribution to late-Tiepolo workshop output.

He was a member of the Venetian Accademia di Belle Arti and served as its first president from 1756.$BIO$,
  bio_sources = $JSON$[
    {"title":"Giovanni Domenico Tiepolo — Wikipedia","url":"https://en.wikipedia.org/wiki/Giovanni_Domenico_Tiepolo","type":"wikipedia"},
    {"title":"Giovanni Domenico Tiepolo — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Giovanni-Domenico-Tiepolo","type":"britannica"},
    {"title":"Giandomenico Tiepolo — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Giandomenico+Tiepolo","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giovanni-domenico-tiepolo';

-- ─── 167. Andrea Schiavone ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Andrea Schiavone — born Andrea Meldola in Zara (modern Zadar in Croatia) around 1510 and called Schiavone (the Slav) by his Italian contemporaries from his Dalmatian birthplace — was a leading Venetian Mannerist painter and printmaker of the middle of the sixteenth century. Born in Dalmatia in the Venetian-controlled coastal region, trained in Venice in the orbit of Tintoretto and the late Titian, and active in Venice for almost his entire career, he died in Venice in 1563.

His Christian religious work is concentrated in altarpieces, small devotional panels, and (above all) a substantial body of etchings produced for the Venetian print market. The Saint Mark Altarpiece in the Doge's Palace in Venice, the Madonna and Saints altarpieces in workshop variants for Venetian and Veneto parish churches, the Adoration of the Magi compositions, the late Annunciation altarpieces, and several dozen etched compositions — the Adoration of the Shepherds, the Beheading of John the Baptist, the Nativity, the Holy Family, the various Old Testament narratives — fill the painted-and-printed corpus.

His personal style — combining Venetian late-Renaissance color and atmospheric handling with the dense Mannerist compositional energy that he absorbed from Tintoretto and from the engraved compositions of Parmigianino (whose etching technique Schiavone studied closely and helped popularize in Venice) — gave him a distinctive position in the mid-Cinquecento Venetian school. His etchings in particular were widely admired in his lifetime; Vasari mentions him with approval in the second edition of the Lives, and the next generation of Venetian etchers — including Annibale Carracci's Bolognese followers and the early Antwerp printers — directly studied Schiavone's prints.

He worked in close stylistic dialogue with the young Tintoretto across the 1540s and 1550s; some surviving panels are stylistically close enough to both painters that scholarly attribution remains contested. He died in Venice in poverty (the early biographers report that he was buried in a pauper's grave) and the eighteenth century mostly forgot him; the modern recovery of his reputation dates from the late nineteenth century with the Italian connoisseur Adolfo Venturi's reattribution work.$BIO$,
  bio_sources = $JSON$[
    {"title":"Andrea Schiavone — Wikipedia","url":"https://en.wikipedia.org/wiki/Andrea_Schiavone","type":"wikipedia"},
    {"title":"Andrea Schiavone — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Andrea-Schiavone","type":"britannica"},
    {"title":"Andrea Schiavone — Gallerie dell'Accademia Venezia","url":"https://www.gallerieaccademia.it/en","type":"museum"}
  ]$JSON$::jsonb
where slug = 'andrea-schiavone-andrea-meldola';

-- ─── 168. Simone Cantarini ─────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Simone Cantarini — sometimes called Il Pesarese after his birthplace at Pesaro on the Adriatic — was a leading Bolognese Baroque painter and etcher of the second quarter of the seventeenth century and the principal pupil of Guido Reni. Born in Pesaro in 1612, trained in his native Marche city before moving to Bologna around 1632 to study under Reni in the principal Bolognese workshop of the period, and active in Bologna and Mantua for his short career, he died in Verona in 1648 — only thirty-six years old.

His Christian religious work is concentrated in altarpieces, small devotional canvases, and a substantial body of etched compositions in his characteristic combination of Reni-Bolognese classicizing figural discipline and a particularly delicate handling of the etched line. The Resting Madonna and Child compositions, the Saint John the Baptist as a Boy paintings (multiple workshop variants), the Adoration of the Shepherds, the Madonna of the Rosary altarpiece in the Bolognese church of San Giovanni Battista dei Celestini, the Saint Anthony of Padua compositions, and his approximately seventy surviving etched plates — including the great series of Holy Family compositions, the Madonnas, and the small biblical-narrative subjects — fill the painted-and-printed corpus.

His personal style closely models on his teacher Reni's mature Bolognese manner — soft sfumato modeling, calm classicizing compositional discipline, deep saturated chromatic palette of crimson, ultramarine, and pale silver-grey — and individual paintings have sometimes been attributed to Reni rather than to Cantarini in older scholarship. The etchings in particular show a delicate painterly handling of the etched line that the late seventeenth-century French and Italian printmakers studied carefully.

He had a famously difficult personality (Malvasia's Felsina Pittrice, the principal seventeenth-century Bolognese artist-biography, devotes considerable attention to his quarrels with Reni and his eventual self-exile from Bologna in 1639), and his early death cut short what would almost certainly have been a major Bolognese career. He is buried in the Bolognese church of Santa Maria delle Grazie.$BIO$,
  bio_sources = $JSON$[
    {"title":"Simone Cantarini — Wikipedia","url":"https://en.wikipedia.org/wiki/Simone_Cantarini","type":"wikipedia"},
    {"title":"Simone Cantarini — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Simone-Cantarini","type":"britannica"},
    {"title":"Simone Cantarini — Pinacoteca Nazionale di Bologna","url":"https://www.pinacotecabologna.beniculturali.it/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'simone-cantarini';

-- ─── 169. Stefano della Bella ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Stefano della Bella was a Florentine etcher and printmaker, the principal Italian rival of Jacques Callot in the technical refinement of the etched line and one of the most prolific Italian printmakers of the seventeenth century. Born in Florence in 1610 to the sculptor Francesco della Bella, trained in his father's workshop and then in a goldsmith's bottega before turning decisively to printmaking under the influence of the recently published Callot etchings, and active in Florence, Rome, Paris (1639–1650, where he worked under the patronage of Cardinal Mazarin and the French royal court), and Florence again, he died in Florence in 1664.

His Christian religious work is a small but significant component of his enormous etched output (more than 1,050 surviving plates across his career). The Massacre of the Innocents, the Crucifixion compositions, the Madonna and Child small devotional plates, the Saint Anthony of Padua subjects, and a long sequence of small biblical-narrative etchings circulated as both single-leaf devotional prints and as components of illustrated devotional books across his career. The Stoning of Saint Stephen, the Sacrifice of Isaac, and several Crucifixion plates are among the most reproduced of his religious etchings.

His secular output is more famous: the great series of military encampments, sieges, and battle pieces (including the Siege of Arras of 1640 and the Siege of La Rochelle drawings); the comprehensive series of skeletons-and-deaths (the Five Deaths of 1648 — including the famous skeleton on horseback that anticipates by two centuries the Romantic interest in the macabre); the Polish ambassadors and the various ceremonial entries he etched for Cardinal Mazarin's Paris court; and the great late series of childhood games, fairground scenes, and rural Italian landscapes that filled his Florentine late career.

He combined an unusually delicate technical handling of the etched line with an enormous range of subject matter; the modern catalogue raisonné by Alexandre de Vesme runs to nearly fourteen hundred entries. He was buried in the Florentine church of Santa Maria del Fiore.$BIO$,
  bio_sources = $JSON$[
    {"title":"Stefano della Bella — Wikipedia","url":"https://en.wikipedia.org/wiki/Stefano_della_Bella","type":"wikipedia"},
    {"title":"Stefano della Bella — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Stefano-della-Bella","type":"britannica"},
    {"title":"Stefano della Bella — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Stefano+della+Bella","type":"museum"}
  ]$JSON$::jsonb
where slug = 'stefano-della-bella';

-- ─── 170. Crispijn van de Passe (the Elder) ────────────────────────────
update public.artists
set
  bio_long = $BIO$Crispijn van de Passe the Elder was a Dutch-born printmaker and the founder of the Van de Passe family workshop — one of the leading Northern European engraving firms of the late sixteenth and early seventeenth centuries. Born in Arnemuiden in Zeeland around 1564, trained almost certainly in Antwerp in the orbit of the great printmaker Hieronymus Cock at the publishing firm Aux Quatre Vents, and (after the Spanish-Catholic suppression of Antwerp Protestant printmakers) settled in Cologne in 1589 and then in Utrecht in 1611, he ran the Van de Passe workshop in close partnership with his sons Crispijn the Younger, Simon, Willem, and his daughter Magdalena across his career. He died in Utrecht in 1637.

His Christian religious work is concentrated in engraved compositions for the Protestant publishing market — Van de Passe was a confessing Mennonite, and his workshop's output is shaped by the late-sixteenth-century Northern Mennonite preoccupation with biblical narrative subjects, with the apostolic-and-martyrological iconographic types that the Anabaptist communities valued, and with allegorical-emblematic compositions on Old Testament moral themes. The Liber Genesis (Cologne, 1612 — a complete illustrated Genesis cycle in fifty-eight engraved plates), the great series of Beatitudes and Apostles, the Old Testament Patriarchs and Matriarchs, and dozens of small devotional engravings of Marian and Christological subjects circulated through the broader European Protestant publishing market for decades.

His secular output was extensive — emblem books, costume books, ceremonial entries, and the great series of court portraits and royal-family compositions for English, French, and German aristocratic patrons — but the religious work was the constant of his career and the principal channel through which the Van de Passe workshop's pictorial vocabulary shaped seventeenth-century European Protestant devotional publishing.

His son Crispijn the Younger continued the workshop after his death; the Van de Passe family workshop ran more or less continuously through the middle of the seventeenth century before being absorbed into the broader Northern European engraving tradition.$BIO$,
  bio_sources = $JSON$[
    {"title":"Crispijn van de Passe — Wikipedia","url":"https://en.wikipedia.org/wiki/Crispijn_van_de_Passe_(I)","type":"wikipedia"},
    {"title":"Van de Passe family — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Van-de-Passe-family","type":"britannica"},
    {"title":"Crispijn van de Passe — Rijksmuseum","url":"https://www.rijksmuseum.nl/en/rijksstudio/artists/crispijn-van-de-passe-i","type":"museum"}
  ]$JSON$::jsonb
where slug = 'crispijn-van-de-passe';

-- ─── 171. Claude Mellan ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Claude Mellan was a leading French engraver of the seventeenth century and the principal innovator of the technique of engraving in single unbroken parallel lines — a virtuoso pictorial signature that distinguished his prints from every other European engraving tradition of the period. Born in Abbeville in Picardy in 1598, trained briefly in Paris before traveling to Italy in 1624 (where he spent twelve years in Rome working under Francesco Villamena, Simon Vouet, and the Roman Caravaggesque circle), he returned to Paris in 1636 and worked there for the rest of his life. He died in Paris in 1688 at the unusually advanced age of ninety.

His Christian religious work is concentrated in engraved compositions for the French Catholic publishing market and in the great single-plate religious portraits that became his signature. The Sudarium of Saint Veronica (1649 — Mellan's most famous single plate, an extraordinary technical demonstration in which the entire image of the Holy Face on the cloth of Veronica is engraved as a single continuous spiral line beginning at the tip of the nose and unwinding outward to the edges of the cloth, with the variation in the line's thickness producing the entire chiaroscuro modeling of the face), the great series of Apostles and Evangelists, the Madonnas in workshop variants, the Visitation, and dozens of other religious-portrait engravings circulated through the French Catholic publishing market for over a century.

His secular output is equally substantial — court portraits of Louis XIII, Louis XIV, Cardinal Richelieu, Cardinal Mazarin, and the principal seventeenth-century French aristocratic clientele; the great series of Roman antiquities he engraved during his Italian sojourn; the architectural plates for the Paris royal building projects.

The Sudarium of Saint Veronica became the canonical demonstration of his single-line technique and was widely admired in his lifetime as a virtuoso curiosity; the eighteenth-century French academic tradition treated it as one of the supreme technical demonstrations in the history of European engraving.$BIO$,
  bio_sources = $JSON$[
    {"title":"Claude Mellan — Wikipedia","url":"https://en.wikipedia.org/wiki/Claude_Mellan","type":"wikipedia"},
    {"title":"Claude Mellan — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Claude-Mellan","type":"britannica"},
    {"title":"Claude Mellan — Bibliothèque Nationale de France","url":"https://gallica.bnf.fr/","type":"museum"}
  ]$JSON$::jsonb
where slug = 'claude-mellan';

-- ─── 172. Georg Pencz ──────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Georg Pencz was a German engraver and painter of the second quarter of the sixteenth century and one of the principal members of the Nuremberg Little Masters — Albrecht Dürer's heirs in Nuremberg who specialized in tiny, technically virtuoso engravings on biblical, mythological, and allegorical subjects. Born in or near Nuremberg around 1500, trained in Dürer's workshop in the early 1520s alongside Sebald and Barthel Beham, and tried in 1525 with the Beham brothers for radical Anabaptist beliefs (the three were briefly banished from Nuremberg before being permitted to return on signed promises of conformity to the Lutheran orthodoxy that the Nuremberg city council had adopted), he was active in Nuremberg for most of his career with significant working trips to Italy. He died in 1550 in Leipzig en route to a court appointment at the Königsberg court of Duke Albrecht of Prussia.

His Christian religious work is concentrated in small-format engravings, woodcuts, and book illustration in the standard Nuremberg Little Master format that Pencz, the Beham brothers, and Heinrich Aldegrever made into the dominant German Reformation devotional print genre of the second quarter of the sixteenth century. The Old Testament series — including the Story of Joseph in twelve plates, the Story of Tobias, the Patriarchs, the Story of David, the Liberation of Susanna — and the New Testament cycles — the Apostles in twelve plates, the Beatitudes, the Lord's Prayer, the Twelve Articles of the Apostles' Creed, scenes from the Passion of Christ — circulated through the German Reformation publishing market in editions for several decades.

His painted output is smaller but includes a substantial body of portrait painting for the Nuremberg patrician clientele in the post-1525 decades when Pencz, having reconciled with the Nuremberg Lutheran council, served as official Stadtmaler (city painter) of Nuremberg. The portraits combine the Nuremberg portrait tradition descending from Dürer with the Italian-portrait conventions Pencz absorbed during his trips to Italy in the 1530s and 1540s.

He was a Lutheran his entire adult life after his 1525 trial. The Pencz workshop produced both confessionally Lutheran prints (with explicit theological content) and broader devotional and allegorical compositions distributed through the Nuremberg printing houses.$BIO$,
  bio_sources = $JSON$[
    {"title":"Georg Pencz — Wikipedia","url":"https://en.wikipedia.org/wiki/Georg_Pencz","type":"wikipedia"},
    {"title":"Georg Pencz — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Georg+Pencz","type":"museum"},
    {"title":"Georg Pencz — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG56275","type":"museum"}
  ]$JSON$::jsonb
where slug = 'georg-pencz';

-- ─── 173. Giulio Bonasone ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giulio Bonasone was a Bolognese engraver and reproductive printmaker of the middle of the sixteenth century — one of the principal Italian engravers who continued the Roman reproductive-engraving tradition that Marcantonio Raimondi had founded in the previous generation, with a particular specialty in engraved reproductions of Michelangelo's compositions. Born in Bologna around 1510, trained in Bologna in his early career before moving to Rome around 1540 to work in the orbit of the Marcantonio workshop's surviving members, and active in Rome and Bologna for his career, he died around 1576.

His Christian religious work is concentrated in engraved reproductions of paintings by Michelangelo, Raphael, Parmigianino, Polidoro da Caravaggio, and other major Italian Cinquecento masters. The reproductive engravings of Michelangelo's Sistine Chapel ceiling and Last Judgment panels (Bonasone's plates of the Pietà, the Conversion of Saul, and several Last Judgment fragments are among the principal mid-sixteenth-century reproductions of those frescoes), the Raphael Madonnas in workshop variants, the Parmigianino Annunciations and Holy Families, and a long sequence of Old and New Testament narrative compositions reproduced after various Italian Cinquecento sources fill the painted corpus.

His personal contribution beyond reproduction was a substantial body of etched and engraved emblem compositions — the Symbolicarum Quaestionum Libri Quinque (Bologna, 1555), an emblem book whose 151 plates Bonasone designed and engraved himself, with a Latin allegorical-and-philosophical text by the Bolognese humanist Achille Bocchi — which remained one of the principal printed emblem books of mid-sixteenth-century Italy and was reprinted into the seventeenth century. The Bocchi-Bonasone emblems combined classical philosophical themes with Christian theological-allegorical content and circulated through the Italian and broader European emblem-book publishing market for over a century.

He worked in close professional dialogue with Cherubino Alberti, Cornelis Cort, and the other mid-Cinquecento Roman engravers who carried the Marcantonio reproductive-engraving tradition through the post-Sack-of-Rome generation.$BIO$,
  bio_sources = $JSON$[
    {"title":"Giulio Bonasone — Wikipedia","url":"https://en.wikipedia.org/wiki/Giulio_Bonasone","type":"wikipedia"},
    {"title":"Giulio Bonasone — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Bonasone","type":"museum"},
    {"title":"Giulio Bonasone — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG44555","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giulio-bonasone';

-- ─── 174. Giorgio Ghisi ────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Giorgio Ghisi was a Mantuan-born engraver of the second quarter of the sixteenth century and one of the principal Italian reproductive printmakers who carried the Marcantonio engraving tradition through the middle decades of the Cinquecento. Born in Mantua around 1520, trained in Mantua in the orbit of Giulio Romano (Raphael's principal Roman pupil who had moved to Mantua in 1524 to serve the Gonzaga ducal court), and active in Mantua, Rome, Antwerp (where he worked under Hieronymus Cock at Aux Quatre Vents in the 1550s), and finally Mantua again, he died in Mantua in 1582.

His Christian religious work is concentrated in engraved reproductions of paintings by Raphael, Michelangelo, Giulio Romano, and the great Italian Cinquecento masters whose compositions Ghisi's plates carried into the European print market. The reproductive engraving of Raphael's School of Athens (Antwerp, 1550 — Ghisi's most famous single plate, a vast architectural composition of the philosophers of antiquity gathered around Plato and Aristotle that became the canonical visual reference for Raphael's Vatican fresco), the great Last Judgment of Michelangelo (Antwerp, 1543 — actually engraved by the slightly older Mantuan engraver Niccolò della Casa, but completed and published with Ghisi's contribution), the Raphael Madonnas, the Allegory of Life (Ghisi's own original composition of 1561, an enigmatic allegorical scene of an old man on a barren island consulting an oracle), and the great series of Stanza della Segnatura plates fill the painted corpus.

His personal style — careful, patient, with finely worked engraved lines and a particular ability to render the Italian Cinquecento Mannerist figural elongation and complex foreshortening in the engraved medium — distinguished his work from his Roman contemporaries Bonasone and Cherubino Alberti. The Antwerp years in particular gave Ghisi an international reach: Cock's distribution network carried Ghisi's plates throughout the European print market and shaped the Northern European reception of the Italian High Renaissance for at least a generation.

He worked in close professional dialogue with the broader mid-Cinquecento Italian reproductive-engraving tradition. The eighteenth-century French and English connoisseurs collected Ghisi's plates as touchstones of mid-sixteenth-century Italian printmaking technique.$BIO$,
  bio_sources = $JSON$[
    {"title":"Giorgio Ghisi — Wikipedia","url":"https://en.wikipedia.org/wiki/Giorgio_Ghisi","type":"wikipedia"},
    {"title":"Giorgio Ghisi — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Giorgio+Ghisi","type":"museum"},
    {"title":"Giorgio Ghisi — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG40010","type":"museum"}
  ]$JSON$::jsonb
where slug = 'giorgio-ghisi';

-- ─── 175. Cherubino Alberti ────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Cherubino Alberti (Zaccaria Mattia) was a Tuscan-born engraver and painter of the late sixteenth century and one of the principal Italian reproductive printmakers who carried the Marcantonio Roman engraving tradition through the post-Council-of-Trent generation into the early years of the seventeenth century. Born in Borgo San Sepolcro in 1553 to the painter Alberto Alberti (the family was a productive late-Mannerist Borgo workshop that produced several painters), trained in his father's workshop and then in Rome under his older brother Giovanni Alberti, and active principally in Rome under successive papal patrons (Sixtus V, Clement VIII, Paul V), he died in Rome in 1615.

His Christian religious work is concentrated in engraved reproductions of paintings by his Italian Cinquecento and late-Cinquecento contemporaries — Polidoro da Caravaggio, Federico Zuccaro, Cesare Nebbia, and the broader late-Mannerist Roman papal-court generation — and in his own decorative ceiling paintings for the Roman papal commissions. The reproductive engravings of Polidoro da Caravaggio's lost facade frescoes (Polidoro's Roman painted facades had largely deteriorated by the late sixteenth century, and Cherubino Alberti's engravings became the principal surviving record of his compositions), the Federico Zuccaro Vatican fresco programs reproduced in plates, the great series of Old and New Testament narrative compositions reproduced from various Italian Cinquecento sources, and Cherubino's own emblematic and allegorical compositions fill the engraved corpus.

His painted output is smaller. The frescoes in the Sala Clementina of the Vatican Apostolic Palace (1597–1602, painted in collaboration with his older brother Giovanni Alberti and the Roman late-Mannerist workshop tradition), the small altarpieces in Roman parish churches, and the late ceiling decorations for the Borghese Palace under Pope Paul V's nephew Cardinal Scipione Borghese fill the painted corpus.

He served as principe (head) of the Roman Accademia di San Luca in 1599–1600 — the same Roman painters' academy that Federico Zuccaro had founded a decade earlier — and was a prominent figure in the late-Cinquecento Roman pictorial-political establishment. He worked in close professional dialogue with the Roman engravers Aliprando Caprioli, Antonio Tempesta, and the broader late-Mannerist papal-court generation.$BIO$,
  bio_sources = $JSON$[
    {"title":"Cherubino Alberti — Wikipedia","url":"https://en.wikipedia.org/wiki/Cherubino_Alberti","type":"wikipedia"},
    {"title":"Cherubino Alberti — Metropolitan Museum of Art","url":"https://www.metmuseum.org/art/collection/search#!?q=Cherubino+Alberti","type":"museum"},
    {"title":"Cherubino Alberti — British Museum","url":"https://www.britishmuseum.org/collection/term/BIOG37950","type":"museum"}
  ]$JSON$::jsonb
where slug = 'cherubino-alberti-zaccaria-mattia';

-- ─── 176. Anonymous (catchall) ─────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$The "Anonymous" attribution covers approximately 890 artworks in the Learn of Christ catalogue whose original makers are unknown — prints, drawings, paintings, and small devotional sculptures from across the European Catholic and Protestant traditions of the sixteenth, seventeenth, eighteenth, and nineteenth centuries that were not signed at production, that have lost their attributions through subsequent history, or that come from workshop-collective production traditions in which individual artistic authorship was never the principal organizing category.

The bulk of the Anonymous catalogue is small-format devotional printmaking — single-leaf engravings, etchings, and woodcuts produced for Catholic and Protestant devotional markets across Europe between roughly 1450 and 1850. These prints circulated as components of bound illustrated Bibles, as pasted-in components of personal prayer books, as devotional cards distributed at confraternity meetings, as small framed images for household altars, and as the principal channel through which the iconographic vocabulary of European Christian art reached ordinary lay viewers across four centuries. A typical Anonymous attribution is a small religious print produced in a workshop where the master signed (or had a recognizable monogram) but where this particular plate or this particular impression has been separated from its original context and the attribution has been lost.

The catalogue also includes anonymous small panel paintings from the late-medieval and early-Renaissance Italian workshops (where individual artistic authorship was less of an organizing category than in subsequent periods), anonymous Russian and Byzantine icons (which were almost always produced in icon-painting workshops in which the individual painter was deliberately effaced as an act of devotional humility), anonymous Mexican-colonial religious paintings (where the workshop tradition was Spanish-derived but the named-artist tradition was less developed), and anonymous nineteenth-century engraved Bible illustrations (where the workshop production was often credited only to the publisher rather than to the engraver).

Where regional or chronological information has survived for an Anonymous attribution, the catalogue records it as a more specific anonymous bucket (Anonymous, Italian, 16th century; Anonymous, German, 15th century; Anonymous, Russian icon tradition; etc.). The general "Anonymous" catchall represents the residual cases where even regional or period information has been lost.$BIO$,
  bio_sources = $JSON$[
    {"title":"Anonymous (artist) — Wikipedia","url":"https://en.wikipedia.org/wiki/Anonymous_master","type":"wikipedia"},
    {"title":"Notname — Wikipedia (the conventional naming of anonymous masters)","url":"https://en.wikipedia.org/wiki/Notname","type":"wikipedia"},
    {"title":"Print collections — Index of Medieval Art","url":"https://theindex.princeton.edu/","type":"scholarly"}
  ]$JSON$::jsonb
where slug = 'anonymous';

-- ─── 177. Anonymous, Italian, Roman-Bolognese, 17th century ────────────
update public.artists
set
  bio_long = $BIO$The Anonymous, Italian, Roman-Bolognese, 17th-century attribution covers approximately 61 artworks in the catalogue whose original makers — almost certainly painters and printmakers active in Rome and Bologna in the seventeenth century — cannot be definitively identified. The seventeenth century was the supreme productive period of the Roman and Bolognese pictorial schools, with the Carracci reform in Bologna at the turn of the seventeenth century and the Caravaggio revolution in Rome at the same moment producing the dominant Italian Baroque pictorial tradition that ran through Annibale, Domenichino, Reni, Lanfranco, and Pietro da Cortona in Rome and Ludovico, Albani, Guercino, and Cantarini in Bologna.

The bulk of the Anonymous Roman-Bolognese 17th-century artworks in the catalogue are small drawings and prints — preparatory studies for altarpieces, single-figure saint compositions, biblical-narrative scenes, and ornament designs — produced by the dense network of workshops that supplied the principal Italian Baroque centers. A typical Anonymous Roman-Bolognese drawing is a small pen-and-wash study on paper or a small red-chalk figure study, often bearing distant stylistic relationship to one of the major Bolognese or Roman masters of the period without enough specificity to support a confident attribution. The post-Carracci Bolognese workshop tradition in particular produced an enormous body of preparatory drawings whose attribution to specific Carracci pupils (Domenichino, Reni, Albani, or the broader Bolognese workshop) is often disputed even by specialist Italian seventeenth-century connoisseurs.

The catalogue's Roman-Bolognese 17th-century anonymous group is a useful catchall for the surviving products of this dense workshop ecosystem; over time, scholarly attribution may identify some of these works with named seventeenth-century Italian Baroque artists, but for now they preserve their anonymous status as documentary evidence of the workshop tradition that produced the principal Italian Baroque pictorial accomplishment.$BIO$,
  bio_sources = $JSON$[
    {"title":"Italian Baroque — Wikipedia","url":"https://en.wikipedia.org/wiki/Italian_Baroque","type":"wikipedia"},
    {"title":"Bolognese School — Encyclopædia Britannica","url":"https://www.britannica.com/art/Bolognese-school","type":"britannica"},
    {"title":"Italian drawings 17th c. — Metropolitan Museum","url":"https://www.metmuseum.org/art/collection/search#!?q=Italian+17th-century+drawing","type":"museum"}
  ]$JSON$::jsonb
where slug = 'anonymous-italian-roman-bolognese-17th-century';

-- ─── 178. Anonymous, 17th century ──────────────────────────────────────
update public.artists
set
  bio_long = $BIO$The Anonymous, 17th-century attribution covers approximately 59 artworks in the catalogue from the broader European Baroque period whose original regional or workshop attributions have been lost. The seventeenth century in Europe was the supreme period of competing Catholic and Protestant pictorial traditions — the post-Tridentine Italian Catholic Counter-Reformation, the Spanish Baroque under the Habsburg viceroyalties, the Antwerp Catholic Baroque under Spanish-Habsburg rule, the Dutch Calvinist Republic's domestic-genre and biblical-history painting, the French Atticist and Baroque Catholic schools — each producing distinct pictorial conventions, but all sharing certain underlying compositional, chromatic, and iconographic preferences that are recognizably "seventeenth-century European."

The Anonymous 17th-century catalogue group includes works that share these broader seventeenth-century characteristics — strong Caravaggesque chiaroscuro, deep saturated chromatic palettes, dramatic compositional intensity, and the iconographic vocabulary of the post-Council-of-Trent Catholic tradition modified by the contemporary Protestant alternatives — without enough specific stylistic or workshop-tradition evidence to support a regional attribution.

A typical Anonymous 17th-century work in the catalogue is a small religious print or drawing — a single-figure saint, a Crucifixion fragment, a Madonna composition, an Old Testament narrative — that the catalogue can date by paper, ink, technique, and pictorial convention to the broad mid-seventeenth-century European period without specifying whether it is Italian, French, Flemish, Dutch, or Spanish. Continued scholarly attribution work over time may move some of these into specific regional buckets, but for now they preserve their broad anonymous status as documents of the shared pictorial culture of the European Baroque period.$BIO$,
  bio_sources = $JSON$[
    {"title":"Baroque painting — Wikipedia","url":"https://en.wikipedia.org/wiki/Baroque_painting","type":"wikipedia"},
    {"title":"Baroque art — Encyclopædia Britannica","url":"https://www.britannica.com/art/Baroque-art-and-architecture","type":"britannica"},
    {"title":"17th-century European drawings — Met Museum","url":"https://www.metmuseum.org/art/collection/search#!?q=17th-century+European","type":"museum"}
  ]$JSON$::jsonb
where slug = 'anonymous-17th-century';

-- ─── 179. Anonymous, German, 15th century ─────────────────────────────
update public.artists
set
  bio_long = $BIO$The Anonymous, German, 15th-century attribution covers approximately 54 artworks in the catalogue from the German-speaking lands of the late Middle Ages and early Renaissance whose original makers cannot be identified. The fifteenth century in Germany was the founding period of European engraving and the supreme period of late-medieval German devotional pictorial production — the generation between Conrad Witz at mid-century and Martin Schongauer and the early Albrecht Dürer at the end of the century, with the Master E. S., the Housebook Master, the Master of the Playing Cards, and dozens of named-by-monogram-only engravers active across the Rhineland, Franconia, Bavaria, and Swabia.

The bulk of the Anonymous German 15th-century works in the catalogue are small engravings, woodcuts, and printed broadsides on Christian devotional subjects — Crucifixions, Madonnas, Passion-cycle plates, single-figure apostles and saints, scenes from the Old Testament — produced for the German-speaking devotional market that was rapidly expanding with the new printing technology. Many of these prints survive in only a handful of impressions and represent a workshop tradition in which the individual master was less the organizing category than the workshop, the printing house, or the regional school. A typical Anonymous German 15th-century print is a small late-Gothic Madonna or Crucifixion produced in a Rhineland or Franconian workshop in the second half of the century.

The catalogue's German 15th-century anonymous group is a useful catchall for the surviving products of this dense regional workshop ecosystem. Where the workshop tradition has been more confidently identified (Master E. S., the Housebook Master, the Master of the Playing Cards, and the various named-by-monogram-only engravers), the catalogue records the works under those specific Notnamen attributions; the remaining "Anonymous, German, 15th century" works are the residual cases where the regional school is clear but the specific workshop attribution is not.$BIO$,
  bio_sources = $JSON$[
    {"title":"German Renaissance — Wikipedia","url":"https://en.wikipedia.org/wiki/German_Renaissance","type":"wikipedia"},
    {"title":"Notname — Wikipedia","url":"https://en.wikipedia.org/wiki/Notname","type":"wikipedia"},
    {"title":"Early German prints — Metropolitan Museum","url":"https://www.metmuseum.org/art/collection/search#!?q=early+German+15th-century","type":"museum"}
  ]$JSON$::jsonb
where slug = 'anonymous-german-15th-century';

-- ─── 180. Anonymous, Italian, 16th century ─────────────────────────────
update public.artists
set
  bio_long = $BIO$The Anonymous, Italian, 16th-century attribution covers approximately 44 artworks in the catalogue from the Italian Renaissance and Mannerist period whose original makers cannot be definitively identified. The sixteenth century in Italy is the canonical period of the Italian High Renaissance and the subsequent Mannerist generation — the great Florentine, Roman, Venetian, Lombard, Sienese, and Emilian-Bolognese schools — with named masters whose works have been carefully studied for centuries. The "Anonymous, Italian, 16th century" group represents the residual cases where the broad Italian sixteenth-century origin is clear but the specific workshop or master attribution is not.

The bulk of the Anonymous Italian 16th-century works in the catalogue are small drawings — preparatory studies, figure exercises, and compositional sketches in pen-and-ink, red and black chalk, and brush-and-wash — that the catalogue can date by paper, technique, and stylistic convention to the broad Italian Cinquecento period without specifying the regional school. Drawings of this kind survive in considerable numbers across the major print-and-drawing collections; many were originally part of bound sketchbooks or workshop pattern books that have been disbound and dispersed across the antiquarian market over the past four centuries, and their original attributions have often been lost in the dispersal.

A typical Anonymous Italian 16th-century drawing is a small figural study or a small Madonna-and-Child composition that bears distant stylistic kinship with one or another of the named masters of the period (Andrea del Sarto, Pontormo, Salviati, Bronzino in Florence; Raphael's late workshop, Polidoro da Caravaggio, Cherubino Alberti in Rome; Veronese, Tintoretto, the late Titian in Venice; Parmigianino in Parma; the Cremonese, Mantuan, and Sienese late-Mannerist workshops) without enough specificity to support a confident attribution. Continued scholarly attribution work moves some of these into specific master attributions over time; the remaining group preserves its anonymous status.$BIO$,
  bio_sources = $JSON$[
    {"title":"Italian Renaissance painting — Wikipedia","url":"https://en.wikipedia.org/wiki/Italian_Renaissance_painting","type":"wikipedia"},
    {"title":"Mannerism — Encyclopædia Britannica","url":"https://www.britannica.com/art/Mannerism","type":"britannica"},
    {"title":"Italian 16th-century drawings — Metropolitan Museum","url":"https://www.metmuseum.org/art/collection/search#!?q=Italian+16th-century+drawing","type":"museum"}
  ]$JSON$::jsonb
where slug = 'anonymous-italian-16th-century';
