-- Artist hub bios — phase 3.
-- Five more anchor artists from the migration-024 ingest batch:
-- Bloch, Hofmann, Plockhorst, Rublev, and Theophanes the Greek. Together
-- with the ten artists seeded in 026 these cover the bulk of approved
-- biblical-art surface area in our library.
--
-- All bio_long values are original prose written for Learn of Christ.
-- bio_sources entries are pointers for readers who want to go deeper, not
-- the textual basis for the prose.

-- ─── 11. Carl Heinrich Bloch ───────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Carl Heinrich Bloch was born in Copenhagen in 1834, trained at the Royal Danish Academy of Fine Arts, and spent six formative years working in Italy before returning to Denmark to take up the commission that would define his career. Between 1865 and 1879 he painted twenty-three large oils on the Life of Christ for the chapel at Frederiksborg Castle, where they still hang today. The series — among them Christ Healing at the Pool of Bethesda, the Sermon on the Mount, the Last Supper, the Doubting Thomas, the Resurrection, and the Christ Consolator — became one of the most widely reproduced cycles of Gospel paintings of the nineteenth century.

His style is luminous Danish academic realism: stately compositions, controlled handling of cloth and skin, a single soft shaft of light entering most rooms from a high side window. Where Caravaggio''s light is forensic and shocking, Bloch''s is patient, almost domestic. The Christ figure across the cycle is gentle and approachable; the disciples and bystanders read as ordinary nineteenth-century Northern European faces. Bloch was painting for a Lutheran chapel in a small kingdom, not for a Roman court, and the cycle reflects that — a quiet, devotional pace rather than spectacle.

The reach of those twenty-three paintings, however, has been anything but local. Reproduction prints circulated widely across Lutheran Europe in the late nineteenth century, and in the early twentieth the images were taken up by The Church of Jesus Christ of Latter-day Saints in the United States, which has reproduced Bloch''s Christ paintings in instructional manuals, missionary materials, chapel art, and digital scripture editions ever since. For a great many readers in the English-speaking world, the face Bloch painted is the face they picture when they read the Gospels.

Bloch also painted altarpieces for parish churches across Denmark and a parallel cycle on the parables. He died in Copenhagen in 1890.$BIO$,
  bio_sources = $JSON$[
    {"title":"Carl Heinrich Bloch — Wikipedia","url":"https://en.wikipedia.org/wiki/Carl_Bloch","type":"wikipedia"},
    {"title":"Frederiksborg Slotskirke — paintings by Carl Bloch","url":"https://dnm.dk/en/frederiksborg-castle/","type":"museum"},
    {"title":"BYU Museum of Art — The Master''s Hand exhibition","url":"https://moa.byu.edu/exhibits/the-masters-hand/","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%bloch%';

-- ─── 12. Heinrich Hofmann ──────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Heinrich Hofmann was a German academic painter born in Darmstadt in 1824. He trained at the Düsseldorf Academy under Karl Sohn and Theodor Hildebrandt, then studied in Antwerp, Munich, and Italy through his twenties. By the 1860s he had settled in Dresden, where he taught at the Royal Academy and ran an active studio for the rest of his long career.

His religious paintings — Christ in Gethsemane (1890), Christ and the Rich Young Ruler (1889), Christ in the Temple (1882), and a long sequence of bust-length Christ heads — became some of the most reproduced Christian images of the late nineteenth and early twentieth centuries. The Gethsemane and Rich Young Ruler now hang at Riverside Church in New York, gifted by John D. Rockefeller Jr.; printed reproductions of both, and especially of the Gethsemane head, became standard fixtures in Protestant Sunday-school rooms, devotional bookplates, and parlor walls across Europe and North America for two generations.

His style is gentle, controlled, and photographic in a quiet way — academic finish without academic bombast, closer to Pre-Raphaelite restraint than to Düsseldorf''s history-painting tradition. The Christ figure across his work is solitary, contemplative, often half-lit, never combative. That visual register did not survive the modernist revolt — Hofmann fell out of museum hangs by mid-century — but it persisted in popular Christian piety, especially in the same Latter-day Saint visual culture that adopted Bloch. As with Bloch, many readers picture his Gethsemane Christ as the Gethsemane Christ.

Hofmann published memoirs in 1907 and continued painting almost until his death in Dresden in 1911. His daughter Lisa Hofmann was also a painter.$BIO$,
  bio_sources = $JSON$[
    {"title":"Heinrich Hofmann — Wikipedia","url":"https://en.wikipedia.org/wiki/Heinrich_Hofmann_(painter)","type":"wikipedia"},
    {"title":"Riverside Church — collection","url":"https://www.trcnyc.org/our-history/","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%hofmann%' and name ilike '%heinrich%';

-- ─── 13. Bernhard Plockhorst ───────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Bernhard Plockhorst was a German academic painter and illustrator born in Braunschweig in 1825. He trained in Munich, then in Paris under Thomas Couture, and settled in Berlin and Weimar after returning to Germany in the late 1850s. He taught at the Weimar Saxon-Grand Ducal Art School in the 1860s before moving permanently to Berlin.

His professional reputation was built on a small handful of devotional images that became, in chromolithographic reproduction, ubiquitous in late-nineteenth and early-twentieth-century Christian homes across Europe and North America. The Good Shepherd — a young Christ figure walking through a sunlit landscape carrying a lamb, with a flock following — and The Guardian Angel — a tall winged angel guiding two small children across a fragile wooden footbridge over a chasm — were sold by mail order, hung in nurseries and parlors, distributed as Sunday-school prizes, and pasted into family Bibles for decades. He also painted Christ Blessing the Children, the Resurrection, and a body of historical and mythological subjects, and decorated altarpieces for churches in Berlin and Marienburg.

The academic establishment of his day considered his work middlebrow even as his prints colonized the bourgeois Christian home. Critics complained about the sweetness; the public bought him anyway. The reassessment that lifted Bouguereau and other late-nineteenth-century academic painters back into the museum has touched Plockhorst less, but his images persist in popular Christian culture exactly as they did in 1900 — copied, reproduced, hung above the cribs of children whose parents have no idea who the painter was.

He died in Berlin in 1907.$BIO$,
  bio_sources = $JSON$[
    {"title":"Bernhard Plockhorst — Wikipedia","url":"https://en.wikipedia.org/wiki/Bernhard_Plockhorst","type":"wikipedia"}
  ]$JSON$::jsonb
where name ilike '%plockhorst%';

-- ─── 14. Andrei Rublev ─────────────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Andrei Rublev is the most celebrated icon painter of the Russian Orthodox tradition. He was a monk — almost certainly at the Trinity Lavra of Sergiev Posad and later at the Andronikov Monastery in Moscow — and almost everything we know about his life comes from terse chronicle entries and inscriptions on a handful of works. The chronicles place him alongside Theophanes the Greek and Daniil Cherny on the Annunciation Cathedral inside the Moscow Kremlin in 1405, on the Cathedral of the Dormition in Vladimir in 1408, and at work on the iconostasis of the Trinity Cathedral at Sergiev Posad in the early 1420s. The Vladimir frescoes, partially preserved, give the clearest view we have of his hand at scale.

His most famous surviving panel is the icon known in art history both as The Hospitality of Abraham and, in Russian Orthodox usage, as The Trinity. Painted around 1411 (or, by an alternative dating that many scholars now favor, around 1425–27) for the Trinity Cathedral at Sergiev Posad and now held by the State Tretyakov Gallery in Moscow, it depicts the three angelic visitors who come to Abraham''s table at the Oak of Mamre — the encounter described in Genesis 18. Three slender, golden-winged figures sit in tender stillness around a chalice on a small table; each is haloed, each turns slightly toward the others; behind them rise a tree, a small house, and a mountain. The composition has been copied and re-copied for six centuries and is the canonical Russian icon.

The Stoglav Council of 1551 declared Rublev''s icons the model for all subsequent Russian icon painting. He was canonized by the Russian Orthodox Church in 1988 on the millennium of the Baptism of Rus. He died around 1430 and is venerated at the Andronikov Monastery, which now houses the Andrei Rublev Museum of Ancient Russian Culture and Art. The 1966 Andrei Tarkovsky film named for him takes its title from his life but is largely a meditation on the conditions under which sacred art can be made.$BIO$,
  bio_sources = $JSON$[
    {"title":"Andrei Rublev — Wikipedia","url":"https://en.wikipedia.org/wiki/Andrei_Rublev","type":"wikipedia"},
    {"title":"Andrei Rublev — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Andrey-Rublyov","type":"britannica"},
    {"title":"State Tretyakov Gallery — Old Russian Art","url":"https://www.tretyakovgallery.ru/en/collection/old-russian-art/","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%rublev%';

-- ─── 15. Theophanes the Greek ──────────────────────────────────────────
update public.artists
set
  bio_long = $BIO$Theophanes the Greek (Greek: Theophanes; Russian: Feofan Grek) was an icon painter and fresco artist who emigrated from Constantinople to the Slavic world in the 1370s. He worked first in Galician Rus and Novgorod, then in Moscow, where the chronicles place him at the head of the workshop that decorated the Annunciation Cathedral inside the Kremlin in 1405 alongside Andrei Rublev and Prokhor of Gorodets. He is the bridge figure between the late Palaeologan Renaissance of Constantinople and the flowering of Russian icon painting in the fifteenth century.

The only securely attributed monumental cycle from his hand is the surviving fragment of frescoes in the Church of the Transfiguration on Ilyin Street in Novgorod, dated by inscription to 1378. They are extraordinary: a Pantocrator in the dome, a frieze of standing patriarchs and ascetic saints, and a series of stylite-pillar hermits in the upper register. The figures are gaunt, severe, deeply lined, painted in deep ochre and umber and broken open at the highlights with sudden white streaks. The technique is gestural and confident; the figures look as if they have been weathered by something other than time.

Some panel icons in Russian collections — the Don Mother of God in the Tretyakov, the deesis tier in the iconostasis of the Annunciation Cathedral — are traditionally attributed to him, though most attributions are debated. The chronicler Epiphanius the Wise, writing to a fellow monk in the early fifteenth century, left a remarkable letter describing his visits to Theophanes''s workshop and the painter''s habit of working without preparatory drawings, holding a conversation while his hand moved.

Theophanes died around 1410. His influence on Rublev and on the Moscow school that followed is large, indirect, and very difficult to disentangle from Rublev''s own; the two of them, working in the same Kremlin cathedral within a few years of each other, set the visual register of Russian Orthodox sacred art for the next several centuries.$BIO$,
  bio_sources = $JSON$[
    {"title":"Theophanes the Greek — Wikipedia","url":"https://en.wikipedia.org/wiki/Theophanes_the_Greek","type":"wikipedia"},
    {"title":"Theophanes the Greek — Encyclopædia Britannica","url":"https://www.britannica.com/biography/Theophanes-the-Greek","type":"britannica"},
    {"title":"State Tretyakov Gallery — Old Russian Art","url":"https://www.tretyakovgallery.ru/en/collection/old-russian-art/","type":"museum"}
  ]$JSON$::jsonb
where name ilike '%theophanes%';
