import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 17 — Micah's Idolatry. The first chapter to mark the book's descent
 * into chaos. No king in Israel; every man does what is right in his own eyes.
 * A mother's stolen silver, a son's false shrine, a Levite for hire — religion
 * as commodity, not grace.
 */
export const JUDGES_17: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 17,

  estimatedMinutes: { beginner: 6, intermediate: 11, deep: 14 },
  topicTags: ['deliverance', 'sin', 'leadership', 'mercy'],
  opener: {
    topical: true,
    caption: 'Judges 17',
  },
  intros: [
    'Judges 17 marks a turning point. The era of the judges ends; the refrain that echoes through the rest of the book makes its first appearance: "In those days there was no king in Israel, but every man did that which was right in his own eyes." What we are about to read is what happens when each person becomes his own god.',
    'Micah&apos;s story opens with stolen silver and a mother&apos;s curse. A son confesses the theft, the mother blesses it anyway, and together they build a shrine out of money that was never theirs to sanctify. They hire a young Levite to be their priest—not because he is called, but because he works for wages. Micah&apos;s confidence swells: "Now I know the Lord will do me good, seeing I have a Levite to my priest." He mistakes the arrangement for the Presence. The whole chapter is a masterclass in how religion can become something we engineer for ourselves.',
    'For believers in any age, this is urgent: the easiest way to lose God is to surround yourself with religious things while losing sight of the God they are meant to point to.',
  ],

  sections: [
    /* ─── Judges 17:1–6 — Stolen Silver and a Shrine ───────────────────── */
    {
      ref: 'Judges 17:1–6',
      title: 'Stolen Silver Sanctified',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 1,
              spans: [
                t('And there was a man of mount Ephraim, whose name was Micah.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he said unto his mother, The '),
                hy('1100 shekels of silver', 'jdg17-silver'),
                t(' that were taken from thee, about which thou '),
                hg('cursedst', 'jdg17-curse'),
                t(', and spakest of also in mine ears, behold, the silver is with me; I took it: therefore '),
                t('his mother said'),
                t(', Blessed be thou of the Lord, my son.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jdg17-silver',
          html:
            'Micah had stolen a fortune. 1,100 shekels of silver was enough to buy land, keep a household for a year, or commission a idol-maker. The theft was not small; neither was the confession. But notice the mother&apos;s response. She does not say, "Take it back." She says, "Blessed be thou of the Lord."',
        },
        {
          kind: 'commentary',
          id: 'jdg17-curse',
          html:
            'The mother had cursed—a serious thing in Israel. A curse released into the air hangs there; the family feels its weight. When Micah confesses, he is trying to lift it. But the mother, instead of forgiving directly, will redirect the stolen money toward God. As if sanctification can erase theft[res:sefaria-judges-17][res:bibleodyssey-judges-epilogue].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-pesil',
          title: 'Pesel — "graven image"',
          script: 'פֶּסֶל',
          translit: '<strong>pesel</strong> · an object carved or hewn in stone or wood',
          description:
            'Pesel appears frequently in the law—always in the prohibition: "Thou shalt not make thee any graven image." Yet here Micah&apos;s mother uses stolen money to commission one anyway, declaring it dedicated to God.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 3,
              spans: [
                t('And when he had restored the 1100 shekels of silver to his mother, his mother said, I had wholly '),
                hp('dedicated the silver', 'jdg17-dedication'),
                t(' unto the Lord from my hand for my son, to make a '),
                hy('graven image and a molten image', 'hebrew-pesil'),
                t(': now therefore I will restore it unto thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jdg17-dedication',
          html:
            'The mother claims she had already dedicated the silver to the Lord—as if that were always her intention. But Micah took it. Now she takes his confession as permission to proceed with what she says she planned all along. The stolen silver, blessed and dedicated, becomes the material for a graven image. Bad inputs yield bad outputs, no matter how many religious words we layer on top[res:sefaria-judges-17-v1].',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 4,
              spans: [
                t('Yet he restored the money unto his mother; and his mother took '),
                hg('two hundred shekels of silver', 'jdg17-portion'),
                t(', and gave them to the founder, who made thereof '),
                hy('a graven image and a molten image', 'hebrew-molten'),
                t(': and they were in the house of Micah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jdg17-portion',
          html:
            'Of 1,100 shekels, she gives 200 to the craftsman. The rest she keeps—profit from the blessing of stolen goods. The shrine is not complete yet, but the pattern is clear: theft + blessing = religious merit.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-molten',
          title: 'Masekah — "molten image"',
          script: 'מַסֵּכָה',
          translit: '<strong>masekah</strong> · an image cast in metal; poured and cooled in a mold',
          description:
            'Two images: one carved (pesel), one cast (masekah). The mother commissions both, as if doubling the work guarantees the presence. It does not.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 5,
              spans: [
                t('And the man Micah had an '),
                hg('house of gods', 'jdg17-house'),
                t(', and made an '),
                hy('ephod', 'hebrew-ephod'),
                t(' and '),
                hy('teraphim', 'hebrew-teraphim'),
                t(', and consecrated one of his sons, who became his priest.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jdg17-house',
          html:
            'Micah builds a "house of gods"—a private shrine, complete with priestly gear (ephod), household idols (teraphim), and a consecrated priest: his own son. This is not modest; it is an entire alternate priesthood, assembled in his home, answerable only to him.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ephod',
          title: 'Ephod — "priestly garment"',
          script: 'אֵפוֹד',
          translit: '<strong>ephod</strong> · a sleeveless garment worn by the high priest; vehicle for the priestly lot',
          description:
            'The ephod was the high priest&apos;s alone—the garment he wore when seeking God&apos;s will. Micah&apos;s son has no authority to wear it, yet Micah drapes it on him anyway. Religion without warrant.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-teraphim',
          title: 'Teraphim — "household idols"',
          script: 'תְּרָפִים',
          translit: '<strong>teraphim</strong> · small idols kept in a house for divination or luck',
          description:
            'Teraphim appear again in Judges 18. They are portable, domestic gods—the kind you keep on a shelf and consult for small matters. Comfort religion, not costly obedience.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 6,
              spans: [
                t('In those days there was '),
                hp('no king in Israel', 'jdg17-refrain'),
                t(', but '),
                t('every man did that which was right in his own eyes'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jdg17-refrain',
          html:
            'This refrain—"no king in Israel"—will repeat in Judges 18:1, 19:1, and 21:25, like a funeral bell tolling through the book. It is both description and diagnosis. Without a king (without centralized authority and unified worship), every family becomes its own kingdom.',
        },
        {
          kind: 'christ',
          id: 'jdg17-christ-true-priest',
          title: 'Christ Connection — The True Priest Who Cannot Be Hired',
          html:
            'Israel was meant to have one priesthood, centered at the tabernacle, accountable to God and to the people. Micah&apos;s shrine is a parody: a private priest, purchased and consecrated by a man, answerable to no one. Jesus is called "a priest for ever after the order of Melchisedec" (Heb. 5:6)—not hired, not commodified, not serving for wages. His priesthood cannot be assembled in anyone&apos;s home or purchased with anyone&apos;s silver. "For such an high priest became us, who is holy, harmless, undefiled, separate from sinners, and made higher than the heavens" (Heb. 7:26).',
        },
        {
          kind: 'carry',
          html:
            'Religion that you can engineer—a shrine you design, a priest you hire, a system that serves your peace—is not worship. It is management. The temptation is not always to abandon God, but to make Him small enough to fit inside your preferences. Micah did not want to destroy the Lord; he wanted a Lord who would say yes to what Micah had already decided. That is what every corner-shrine, private spirituality, and self-directed faith amounts to. Real worship asks what God wants. Religious management asks what makes us comfortable.',
        },
        {
          kind: 'reflection',
          id: 'jdg17-r1',
          prompt:
            'Where might you be building a shrine to your own preferences instead of encountering the God who doesn&apos;t fit inside your design? What would submission look like?',
        },
      ],
    },

    /* ─── Judges 17:7–10 — A Levite for Sale ──────────────────────────── */
    {
      ref: 'Judges 17:7–10',
      title: 'A Priest for Hire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 7,
              spans: [
                t('And there was a young man out of Bethlehem-judah of the family of Judah, who was a '),
                t('Levite'),
                t(', and he sojourned there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jdg17-levite-desc',
          html:
            'A Levite was born to the tribe of Levi—set apart for sanctuary service, for teaching the Law, for standing between God and the people. This Levite is from Bethlehem in Judah, and he is "sojourning"—traveling, looking for a place to settle, looking for work. He is displaced and vulnerable.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-levite',
          title: 'Levite — "tribe of the sanctuary"',
          script: 'לֵוִי',
          translit: '<strong>Levi</strong> · one of the twelve tribes; set apart for priestly and temple service',
          description:
            'The Levites were the only tribe without a territorial inheritance. Instead, they received cities and the tithes of Israel. In exchange, they were to teach the Law and serve the sanctuary. This Levite has neither city nor calling—only his status as a member of the priestly tribe.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 8,
              spans: [
                t('And the man departed out of the city from Bethlehem-judah, to sojourn where he could find a place: and he came to mount Ephraim to the house of Micah, as he journeyed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jdg17-journey',
          html:
            'He is searching for a place—a home, a role, a means of survival. This is how he finds himself at Micah&apos;s door. Not called by the Lord, not sent by the priesthood, but wandering and needy. Micah&apos;s offer will come at exactly the right moment of vulnerability.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 9,
              spans: [
                t('And Micah said unto him, Whence comest thou? And he said unto him, I am a Levite of Bethlehem-judah, and I go to sojourn where I may find a place.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 10,
              spans: [
                t('And Micah said unto him, '),
                hg('Dwell with me', 'jdg17-offer'),
                t(', and be unto me a father and a priest, and I will give thee '),
                hy('ten shekels of silver by the year', 'jdg17-wages'),
                t(', and a suit of apparel, and thy victuals. So the Levite went in.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jdg17-offer',
          html:
            'Micah&apos;s offer is economically generous and spiritually disastrous. The Levite gets room, board, clothes, and wages. What he does not get is calling, accountability, or the knowledge that he stands in God&apos;s lineage. He gets employment.',
        },
        {
          kind: 'commentary',
          id: 'jdg17-wages',
          html:
            'Ten shekels per year was decent wages—enough for a laborer to live on. The price is exactly what makes the deal sellable. A wandering Levite with no home and no prospects can hardly refuse. Micah has bought himself a priest, and the Levite has bought himself security. Both are satisfied. Both are wrong.',
        },
        {
          kind: 'carry',
          html:
            'When work and calling collapse into each other—when you serve only for a paycheck, when you lead only because you were hired, when you teach only because it is a job—you have become a hireling. Jesus distinguished sharply between a hired hand and a shepherd: "The hireling fleeth, because he is an hireling, and careth not for the sheep" (John 10:12). It is possible to do religious work while being untethered from the God you are supposed to represent. The Levite&apos;s faith is not the issue. His arrangement is. He serves no one but Micah, and Micah serves no one but himself.',
        },
        {
          kind: 'reflection',
          id: 'jdg17-r2',
          prompt:
            'Are there areas where you are serving—in church, in family, in work—primarily because you are being paid or praised? What would it mean to reconnect that work to a calling instead of a contract?',
        },
      ],
    },

    /* ─── Judges 17:11–13 — Confidence Without Foundation ───────────────── */
    {
      ref: 'Judges 17:11–13',
      title: 'False Confidence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 11,
              spans: [
                t('And Micah '),
                hg('consecrated the Levite', 'jdg17-consecrate'),
                t('; and the young man became his priest, and was in the house of Micah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jdg17-consecrate',
          html:
            'Micah performs the consecration himself. He has no authority to do this—only the high priest at the tabernacle does. But in his shrine, in his house, there is no one to stop him. He consecrates the Levite as if blessing were within his power. The Levite accepts it as if it were real.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 12,
              spans: [
                t('Then said Micah, '),
                hp('Now know I that the Lord will do me good', 'jdg17-confidence'),
                t(', seeing I have a Levite to my priest.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jdg17-confidence',
          html:
            'This is the tragedy of the chapter: Micah&apos;s certainty. He is confident—not because he has repented, not because he has aligned himself with God&apos;s Law, not because he has consulted the true priesthood, but because he has acquired a Levite. His faith is in the arrangement, not in God. He has mistaken the symbol for the reality. A Levite in his house feels like proximity to God, so he concludes: "Now the Lord will do me good." His confidence is exactly backwards. The Lord does good to those who trust Him. Micah trusts a hired priest.',
        },
        {
          kind: 'christ',
          id: 'jdg17-christ-mediator',
          title: 'Christ Connection — The Priest Who Intercedes',
          html:
            'For Israel, a true priest meant access—someone who stood between you and God, who could offer sacrifice, who could intercede. Jesus is "the one mediator between God and men" (1 Tim. 2:5) and He "ever liveth to make intercession for us" (Heb. 7:25). But His intercession is not transactional. You do not buy access to Jesus. You do not hire Him. You come to Him as He comes to you: freely, fully, without cost. "Come unto me, all ye that labour and are heavy laden, and I will give you rest" (Matt. 11:28). There is no shortage of access, no waiting list, no fee.',
        },
        {
          kind: 'carry',
          html:
            'Religious confidence built on religious acquisition is not faith. Micah felt secure because he had the right objects and the right personnel. But he had not changed. The silver was still stolen. The images still violated the Law. His son was still unqualified. And the Levite was still a stranger to his own God. You cannot buy your way to assurance. You cannot staff your way to holiness. The only confidence that holds is the kind that rests on actual trust in an actual God—not on the things you have gathered around yourself.',
        },
        {
          kind: 'reflection',
          id: 'jdg17-r3',
          prompt:
            'What spiritual things are you relying on for confidence—a church, a pastor, a practice, a community? Is your trust in the thing itself, or in the God it points to? How could you tell the difference?',
        },
        { kind: 'divider' },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 13,
              spans: [
                t('And Micah said, Now know I that the Lord will do me good, seeing I have a Levite to my priest.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jdg17-repetition',
          html:
            'The verse repeats: "Now know I that the Lord will do me good, seeing I have a Levite to my priest." The repetition underscores Micah&apos;s certainty and also his delusion. He does not see what he has built. In the next chapter, his shrine will be plundered, his Levite will be stolen, and his confidence will crumble. The story is not over.',
        },
      ],
    },

    /* ─── Doctrinal Anchors — The Refrain and Its Meaning ────────────────── */
    {
      ref: 'The Thesis Statement of Judges',
      title: 'No King: Every Man His Own God',
      blocks: [
        {
          kind: 'commentary',
          id: 'jdg17-thesis',
          html:
            'The refrain "In those days there was no king in Israel, but every man did that which was right in his own eyes" appears four times in Judges (17:6, 18:1, 19:1, 21:25), always framing a story of private religion or private morality. It is not a statement of fact—Israel did not need a king for the law to be binding—but a diagnosis: the absence of unified leadership allows every person to become his own authority. Micah is not unique; he is simply the first example. What follows in chapters 18, 19, and 20 grows progressively darker.',
        },
        {
          kind: 'carry',
          html:
            'The same refrain applies wherever God&apos;s Word is not the shared authority. When there is no agreed standard—no communal Bible, no shared theology, no accountability—every person builds his own shrine and calls it worship. The antidote to Micah&apos;s era is not a political king, but a return to God&apos;s kingship, God&apos;s law, God&apos;s priesthood. For believers now, that means living under the Word, in community, under leadership that itself is accountable to Scripture.',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Judges 17',
    quote:
      'Without a king in Israel, every man did what was right in his own eyes. Religious activity can flourish even as true worship fails. Outward obedience does not replace inward alignment with God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 17 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-judges-17',
      kind: 'study',
      source: 'Sefaria',
      label: 'Judges 17 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Judges.17',
      description: 'The Hebrew text of Micah&apos;s shrine, hired Levite, and the spiritual chaos of "no king in Israel."',
    },
    {
      id: 'sefaria-judges-17-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Judges 17 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Judges.17',
      description: 'The Hebrew text of Judges 17 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],


  hasHebrew: true,
};
