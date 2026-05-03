import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 38 — Bezalel constructs the bronze altar and courtyard.
 * The mirror detail in v.8 offers a rich moment: women give their personal
 * mirrors to be melted into the laver for priestly cleansing.
 * The chapter ends with a careful accounting of all the metals used.
 */
export const EXODUS_38: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 38,

  estimatedMinutes: { beginner: 7, intermediate: 10, deep: 12 },
  intros: [
    'Exodus 38 records Bezalel and the craftsmen completing the bronze altar where sacrifices will be made, and the laver where priests will wash before approaching God. Every detail matters, and one detail stands out: the laver is made from the bronze mirrors of women who served at the door of the tabernacle. Vanity yields to cleansing. The chapter closes with an exact accounting of the gold, silver, and bronze used — not a random ledger, but a sign that every gift given to God is seen, known, and cherished.',
    'The material world has been transformed into a sanctuary. And the book-keeping matters too. God is building a house where the books are kept openly, where nothing given in faith is forgotten.',
  ],

  sections: [
    /* ─── Exodus 38:1–7 — The Bronze Altar ─────────────────────────────── */
    {
      ref: 'Exodus 38:1–7',
      title: 'The Altar of Burnt Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hg('Bezalel made', 'exo38-bezalel'),
                t(' the altar of burnt offering of shittim wood: five cubits was the length thereof, and five cubits the breadth thereof; it was foursquare; and three cubits the height thereof.'),
              ],
            },
            {
              number: 2,
              spans: [t('And he made the horns thereof on the four corners of it; the horns thereof were of the same: and he overlaid it with brass.')],
            },
            {
              number: 3,
              spans: [t('And he made all the vessels of the altar, the pots, and the shovels, and the basons, and the fleshhooks, and the firepans: all the vessels thereof made he of brass.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_38_v1-7',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 4,
              spans: [t('And he made for the altar a brasen grate of network under the compass thereof beneath it unto the midst of it.')],
            },
            {
              number: 5,
              spans: [t('And he cast four rings for the four ends of the grate of brass, to be places for the staves.')],
            },
            {
              number: 6,
              spans: [t('And he made the staves of shittim wood, and overlaid them with brass.')],
            },
            {
              number: 7,
              spans: [t('And he put the staves into the rings on the sides of the altar, to bear it withal; he made it hollow with boards.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exo38-bezalel',
          html:
            'Bezalel was the chief craftsman, the man God filled with wisdom and skill to lead all the work on the tabernacle. He is named because his name matters — God names the ones who build His house. Every part here is intentional: the foursquare base, the four horns, the rings on the sides. The altar where a man&apos;s offering goes up to God is not made carelessly[res:altar-court][res:sefaria-exodus-38].',
        },
        {
          kind: 'carry',
          html:
            'God sees the people who work with their hands to build spaces where others can meet Him. The craftsman, the musician, the parent who makes a home, the teacher who prepares a space for learning — all of it is the work of Bezalel. Do you know someone building something, even small, with that kind of care? See them. Name what they&apos;re doing. It matters.',
        },
        {
          kind: 'reflection',
          id: 'exo38-altar',
          prompt: 'What space in your life has been made holy by someone&apos;s careful work? A sanctuary, a home, a classroom?',
        },
      ],
    },

    /* ─── Exodus 38:8 — The Laver of Mirrors ──────────────────────────── */
    {
      ref: 'Exodus 38:8',
      title: 'The Laver Made from Mirrors',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 8,
              spans: [
                t('And he made the laver of '),
                hp('brass', 'exo38-mirrors'),
                t(', and the foot of it of brass, of the '),
                hy('looking glasses', 'hebrew-mariah'),
                t(' of the women which '),
                hg('assembled at the door of the tabernacle', 'exo38-women'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exo38-mirrors',
          html:
            'The laver is where the priests wash their hands and feet before entering God&apos;s presence. Cleansing comes before worship. And this laver is made from an unexpected material: the bronze mirrors of women who served at the tabernacle door. Their personal mirrors — instruments for looking at themselves — were given up and melted down to become something that serves others[res:measurements].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mariah',
          title: 'Mariah — &ldquo;looking glasses&rdquo;',
          script: 'מַרְאָה',
          translit: '<strong>mariah</strong> · that which is seen; a mirror',
          description:
            'Related to the verb &ldquo;to see,&rdquo; mariah is what lets you see yourself. The women gave their mirrors — the only way they had to see their own reflection — to cleanse the priests. What you look at becomes what you become.',
        },
        {
          kind: 'commentary',
          id: 'exo38-women',
          html:
            'Who were these women? The text calls them those who <em>assembled at the door</em> — they served, they gathered, they were present. They are named only by what they gave. No names, no story, just the fact that they offered. And their offering is woven into every priest who ever washed there, into the very structure of worship itself.',
        },
        {
          kind: 'christ',
          id: 'exo38-mirror-christ',
          title: 'Christ Connection — Beholding His Glory',
          html:
            'The women gave their mirrors to make a laver for cleansing. Paul takes the image and turns it: &ldquo;But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory&rdquo; (2 Cor. 3:18). The mirror was vanity; now it becomes transformation. When you look into Christ, you are changed. The laver in Exodus was the place priests became clean; the mirror in Paul is the place believers are remade.',
        },
        {
          kind: 'carry',
          html:
            'The women gave up their mirrors. And the mirror they gave became the place where men were made clean. There is something there about sacrifice and service that doesn&apos;t announce itself. The work that helps others see God is not the work that makes you visible. This week, if you find yourself doing something good that no one will remember, you are walking in the spirit of these women. Their offering was forgotten — but it cleaned every priest who ever approached God.',
        },
        {
          kind: 'reflection',
          id: 'exo38-mirrors-2',
          prompt: 'What mirror in your life — what tool of self-regard — have you or could you offer to God for others&apos; cleansing? What would it look like to give it up?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Exodus 38:9–20 — The Courtyard ─────────────────────────────── */
    {
      ref: 'Exodus 38:9–20',
      title: 'The Courtyard',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 9,
              spans: [
                t('And he made the court: on the south side southward the hangings of the court were of '),
                hg('fine twined linen', 'exo38-linen'),
                t(', an hundred cubits:'),
              ],
            },
            {
              number: 10,
              spans: [t('Their pillars were twenty, and their brasen sockets twenty; the hooks of the pillars and their fillets were of silver.')],
            },
            {
              number: 11,
              spans: [t('And on the north side the hangings were an hundred cubits, their pillars were twenty, and their sockets of brass twenty; the hooks of the pillars and their fillets of silver.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_38_v9-15',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 12,
              spans: [
                t('And on the west side were hangings of fifty cubits, their pillars ten, and their sockets ten; the hooks of the pillars and their fillets of '),
                hg('silver', 'exo38-silver'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [t('And the east side eastward fifty cubits.')],
            },
            {
              number: 14,
              spans: [t('The hangings of one side of the gate were fifteen cubits; their pillars three, and their sockets three.')],
            },
            {
              number: 15,
              spans: [t('And on the other side of the court gate, on this hand and that hand, were hangings of fifteen cubits; their pillars three, and their sockets three.')],
            },
          ],
        },
        { kind: 'commentary', id: 'ex38-mid', html: 'The boundary is established. Four sides measure and square the courtyard. And now the entry—the gate where people pass from the profane into the sacred. The gate is not a weak point; it has its own pillars and hangings. Approach to God is ordered and real.' },
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 16,
              spans: [t('All the hangings of the court round about were of fine twined linen.')],
            },
            {
              number: 17,
              spans: [t('And the sockets for the pillars were of brass; the hooks of the pillars and their fillets of silver; and the overlaying of their chapiters of silver; and all the pillars of the court were filleted with silver.')],
            },
            {
              number: 18,
              spans: [t('And the hanging for the gate of the court was needlework, of blue, and purple, and scarlet, and fine twined linen: and twenty cubits was the length thereof, and the height in the breadth was five cubits, answerable to the hangings of the court.')],
            },
            {
              number: 19,
              spans: [t('And their pillars were four, and their sockets of brass four; their hooks of silver, and the overlaying of their chapiters and their fillets of silver.')],
            },
            {
              number: 20,
              spans: [t('And all the pins of the tabernacle, and of the court round about, were of brass.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exo38-linen',
          html:
            'The courtyard is enclosed in fine linen — a boundary between the holy and the profane. There is a gate. You do not wander into God&apos;s presence; you enter through a way He has appointed. The courtyard holds the altar and the laver; it is the place where people draw near. And it is orderly: measured, symmetrical, exact. Holiness is not chaotic.',
        },
        {
          kind: 'commentary',
          id: 'exo38-silver',
          html:
            'Silver appears throughout — the sockets, the hooks, the fillets. In the Bible, silver often speaks of redemption. The courtyard where the people draw near is built on redemption. The very structure invites them toward grace.',
        },
        {
          kind: 'carry',
          html:
            'There is a boundary between everyday life and the holy. That boundary is not to keep you out; it is to say: this way is appointed, this entrance is marked, this is where you meet God. Is there a threshold in your day — a space set apart, a moment marked, a practice that says <em>now I am present to Him</em>? A morning prayer, a dinner table, a sanctuary, a Sabbath? Build that boundary. Mark the gate.',
        },
        {
          kind: 'reflection',
          id: 'exo38-court',
          prompt: 'What boundary or gate do you need to mark in your day to say to God: <em>Here I draw near</em>?',
        },
      ],
    },

    /* ─── Exodus 38:21–31 — The Accounting ─────────────────────────────── */
    {
      ref: 'Exodus 38:21–31',
      title: 'The Tally of Gifts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 21,
              spans: [
                t('This is the sum of the tabernacle, even of the tabernacle of '),
                hg('testimony', 'exo38-testimony'),
                t(', as it was counted, according to the commandment of Moses, for the service of the Levites, by the hand of Ithamar, son of Aaron the priest.'),
              ],
            },
            {
              number: 22,
              spans: [t('And Bezalel the son of Uri, the son of Hur, of the tribe of Judah, made all that the Lord commanded Moses.')],
            },
            {
              number: 23,
              spans: [t('And with him was Aholiab, son of Ahisamach, of the tribe of Dan, an engraver, and a cunning workman, and a weaver of blue, and purple, and scarlet, and fine linen.')],
            },
            {
              number: 24,
              spans: [t('All the gold that was occupied for the work in all the work of the holy place, even the gold of the offering, was twenty and nine talents, and seven hundred and thirty shekels, after the shekel of the sanctuary.')],
            },
            {
              number: 25,
              spans: [t('And the silver of them that were numbered of the congregation was an hundred talents, and a thousand seven hundred and threescore and fifteen shekels, after the shekel of the sanctuary:')],
            },
            {
              number: 26,
              spans: [t('A bekah for every man, that is, half a shekel, after the shekel of the sanctuary, for every one that went to be numbered, from twenty years old and upward, for six hundred thousand and three thousand and five hundred and fifty men.')],
            },
          ],
        },
        { kind: 'commentary', id: 'ex38-mid2', html: 'Each man counted. Each man gave the same amount—not by wealth but by head, a tax of redemption. Six hundred thousand men, all named, all counted, all contributing equally. Now the ledger shifts from people to materials—what they gave is being accounted, transformed, used for the holy work.' },
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 27,
              spans: [t('And of the hundred talents of silver were cast the sockets of the sanctuary, and the sockets of the vail; an hundred sockets of the hundred talents, a talent for a socket.')],
            },
            {
              number: 28,
              spans: [t('And of the thousand seven hundred seventy and five shekels he made hooks for the pillars, and overlaid their chapiters, and filleted them.')],
            },
            {
              number: 29,
              spans: [
                t('And the brass of the offering was '),
                hy('seventy talents', 'exo38-brass'),
                t(', and two thousand and four hundred shekels.'),
              ],
            },
            {
              number: 30,
              spans: [t('Of which he made the sockets to the door of the tabernacle of the congregation, and the brasen altar, and the brasen grate for it, and all the vessels of the altar,')],
            },
            {
              number: 31,
              spans: [t('And the sockets of the court round about, and the sockets of the court gate, and all the pins of the tabernacle, and all the pins of the court round about.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exo38-testimony',
          html:
            'The tabernacle is called <em>the tabernacle of testimony</em> — the place where God&apos;s covenant is witnessed, where the Ark holds the two tables of stone, where God makes Himself known. This is not a building project; it is the very house where heaven and earth touch.',
        },
        {
          kind: 'commentary',
          id: 'exo38-brass',
          html:
            'Seventy talents of bronze — about 5,250 pounds. Not approximate. The books are kept. Every pound of metal given by the people is named, counted, used. In a world where corruption often hides in the details, where no one is watching the accounting, God&apos;s house is built with the books open. The auditor can see everything. Nothing is missing. Nothing is skimmed.',
        },
        {
          kind: 'christ',
          id: 'exo38-accounting',
          title: 'Christ Connection — The Books Kept Open',
          html:
            'Paul, collecting money for the church in Jerusalem, makes a point of transparency: &ldquo;For we take thought for things honourable, not only before the Lord, but also before men&rdquo; (2 Cor. 8:21). And earlier: &ldquo;we have sent with them our brother, whom we have often proved diligent in many things, but now much more diligent, by reason of the great confidence which I have in you&rdquo; (2 Cor. 8:22). God&apos;s people are to handle what belongs to God with such care that the books themselves testify to His character. The bronze talented in Exodus 38 and the money accounted for in 2 Corinthians both point to a God who delights in transparency, in honesty, in the sacred trust of what His people give.',
        },
        {
          kind: 'carry',
          html:
            'The people gave to God — gold and silver and bronze. And someone wrote it down. That is the final image of Exodus 38: the books. Not a ledger you&apos;d expect to find holy, but holiness includes this: that when God&apos;s house is being built, the accounting is trustworthy, the gifts are seen, nothing is lost to carelessness or theft. If you handle money — anyone&apos;s money, for any cause — this chapter is speaking to you: keep the books as if God is watching. He is. And your integrity is not a small thing.',
        },
        {
          kind: 'reflection',
          id: 'exo38-account',
          prompt: 'Where do you handle others&apos; trust or resources? What would it look like to keep those books as holy as the tabernacle&apos;s bronze?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The women gave their mirrors to make the laver for washing; seventy talents of bronze were counted and used; every detail of God&apos;s house was named and seen.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 38 · Study Guide',
  },


  resources: [
    {
      id: 'altar-court',
      kind: 'study',
      source: 'Sefaria',
      label: 'Bronze Altar & Court',
      url: 'https://www.sefaria.org/Exodus.38',
      description: 'Hebrew text on altar and courtyard.',
    },
    {
      id: 'measurements',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Tabernacle Measurements',
      url: 'https://www.bibleodyssey.org/dictionary/tabernacle/',
      description: 'Dimensions and sanctuary orientation.',
    },
    {
      id: 'sefaria-exodus-38',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 38 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Exodus.38',
      description: 'The Hebrew text of Exodus 38 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
