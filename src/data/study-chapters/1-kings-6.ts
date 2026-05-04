import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 6 — Solomon Builds the Temple
 *
 * In the 480th year after the exodus, Solomon begins the construction of the
 * house of the Lord. For seven years, the work unfolds in sacred silence — no
 * hammer, no axe, no tool of iron heard in the temple itself, for the stones
 * were shaped and fitted in the quarries before being brought to Jerusalem.
 * The dimensions reveal a pattern: 60 cubits long, 20 wide, 30 high. The most
 * holy place — the oracle — is a perfect cube, 20 by 20 by 20. Two cherubim
 * of olive wood, their wings touching wall to wall, their wing-tips meeting in
 * the midst. And throughout, gold — pure gold — covering the altar, the floors,
 * the walls. In this chapter, a king builds not just a structure, but a throne
 * for God's presence among His people. The work speaks a wordless language:
 * holiness built in stone, completeness embodied in geometry, divine presence
 * made manifest in matter.
 */
export const KINGS_1_6: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 6,

  estimatedMinutes: { beginner: 7, intermediate: 16, deep: 21 },
  opener: {
    matchTitle: /Solomon Builds the Temple/i,
    caption: '1 Kings 6',
  },
  intros: [
    'In the 480th year after the children of Israel came out of Egypt, in the fourth year of Solomon&apos;s reign, the work began. The chronological marker is precise — a way of saying that this moment stands at the center of Israel&apos;s story, a pivot-point between deliverance and dwelling. The exodus freed them from slavery; now, in the fourth century of their freedom, they build a place where God Himself will dwell.',
    'Solomon had inherited from David not just a throne, but a command: "He shall build an house for my name" (2 Samuel 7:13). For seven years, the temple rose in Jerusalem. But this was not ordinary construction. The stones were shaped beforehand in the quarries, so that when they came to the temple site, they could be fitted without a sound — no hammer, no axe, no iron tool heard in the holy place. The work of building was itself an act of worship, a quiet offering.',
    'What emerges is more than a building. It is a geometry of holiness. The most holy place — the oracle, the inner sanctuary — was a perfect cube: 20 cubits by 20 cubits by 20 cubits. Two cherubim of olive wood, each 10 cubits high, stood within, their wings stretched across the room, touching wall to wall, their inner wings meeting in the middle. And everything was overlaid with gold — the altar, the walls, the floor. In the midst of a stone city, in the heart of a nation, the house of the Lord became a threshold between heaven and earth, a place where God promised to dwell "among the children of Israel."',
  ],

  bottomShare: {
    label: 'Share 1 Kings 6',
    quote:
      'For seven years, in sacred silence, the temple rose. No tool was heard in the holy place — the work of building was itself worship. And God said: "I will dwell among my people Israel."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 6 · Study Guide',
  },

  resources: [
    {
      id: 'israel-museum-temple-model',
      kind: 'museum',
      source: 'Israel Museum',
      label: 'The First Temple: Scale Model',
      url: 'https://www.imj.org.il/',
      description: 'Museum model and archaeological finds illuminating the architecture of Solomon&apos;s temple.',
    },
    {
      id: 'sefaria-temple-construction',
      kind: 'study',
      source: 'Sefaria',
      label: 'Building the Temple',
      url: 'https://www.sefaria.org/1_Kings.6',
      description: 'Detailed description of the temple&apos;s construction, dimensions, and interior decoration.',
    },
    {
      id: 'bible-odyssey-temple',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'The Temple: Israel&apos;s Holy House',
      url: 'https://www.bibleodyssey.org/dictionary/temple/',
      description: 'Overview of the temple&apos;s religious and political significance in Israel&apos;s monarchy.',
    },
  ],

  sections: [
    /* ─── 1 Kings 6:1–10 — The Dimensions and Silent Building ─────────── */
    {
      ref: '1 Kings 6:1–10',
      title: 'The House Takes Shape',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass in the '),
                hg('four hundred and eightieth year', 's6-480'),
                t(' after the children of Israel were come out of the land of Egypt, in the fourth year of Solomon&apos;s reign over Israel, in the month Zif, which is the second month, that he began to build the house of the Lord.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the house which king Solomon built for the Lord, the length thereof was threescore cubits, and the breadth thereof twenty cubits, and the height thereof thirty cubits.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the porch before the temple of the house, twenty cubits was the length thereof, according to the breadth of the house; and ten cubits was the breadth thereof before the house.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And for the house he made '),
                hy('windows of narrow lights', 's6-windows'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And against the wall of the house he built '),
                hg('chambers round about', 's6-chambers'),
                t(', against the walls of the house round about, both of the temple and of the oracle: and he made sides round about.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k6-building-begins',
          html:
            'The Lord&apos;s house is commanded; now the building begins—stone and cedar rise where wood once stood[res:israel-museum-temple-model][res:sefaria-temple-construction][res:bible-odyssey-temple].',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 6,
              spans: [
                t('The nethermost chamber was five cubits broad, and the middle was six cubits broad, and the third was seven cubits broad: for without the house he made narrowed rests round about, that the beams should not be fastened in the walls of the house.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the house, when it was in building, was built of stone made ready before it was brought thither: so that there was neither '),
                hp('hammer nor axe nor any tool of iron', 's6-silent-build'),
                t(' heard in the house, while it was in building.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('The door for the middle chamber was in the right side of the house: and they went up with winding stairs into the middle chamber, and out of the middle into the third.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('So he built the house, and finished it; and covered the house within with boards of cedar.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And then he built chambers against all the house, five cubits high: and they rested on the house with timber of cedar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's6-480',
          html:
            'The 480th year after the exodus is a precise chronological marker — though scholars debate its historical calculation, the text places the temple&apos;s foundation in a moment of measured time, as though to say: this is not myth, but history; this happens at a known moment, in a known reign, in a known month. Some scholars date this to approximately 967 BCE. The point is not the calendar but the covenant: in the fourth year of Solomon&apos;s reign, the promise made to David is beginning to be fulfilled.',
        },
        {
          kind: 'commentary',
          id: 's6-windows',
          html:
            '"Windows of narrow lights" — the phrase suggests windows that allow light to enter but do not open to the outside. The temple admits light from heaven but is closed to the world. It is a place set apart, holy, where the divine light enters but human noise and traffic do not penetrate.',
        },
        {
          kind: 'commentary',
          id: 's6-chambers',
          html:
            'The chambers built against the temple walls served practical purposes — storage, preparation, the housing of priestly activities. But they also created a graduated entry into holiness. The outer chambers, broader and lower, gave way to the inner ones, narrower and more elevated, finally opening into the most holy place. The structure itself taught the hierarchy of sacred space.',
        },
        {
          kind: 'hebrew',
          id: 's6-bayit-word',
          title: 'Bayit — "House" or "Temple"',
          script: 'בַּ֫יִת',
          translit: '<strong>Bayit</strong> · house; dwelling; temple; household',
          description:
            'The word "bayit" encompasses both the physical building and its spiritual meaning. A "bayit" is a dwelling — the place where a family lives, where they gather, where they are safe. When Solomon builds "a house for the name of the Lord," he is creating a dwelling for God Himself in the midst of the people, a place where they can gather in His presence.',
        },
        {
          kind: 'commentary',
          id: 's6-silent-build',
          html:
            'This is perhaps the most remarkable detail in the passage: there was neither hammer nor axe nor any tool of iron heard in the house while it was being built. The stones were quarried, shaped, and fitted in the silence of the quarries before being brought to Jerusalem. Here at the site, they were assembled without noise, without discord. The work of holiness is work done in peace, in order, in reverence. It speaks to something deep in the biblical imagination: that true building, true creation, is a kind of silence — not the silence of absence, but the silence of perfect purpose.',
        },
        {
          kind: 'carry',
          html:
            'What work of yours needs to be done in silence? Not hidden, but done with a kind of reverent care, without haste, without clamor. The temple was built over seven years, stone fitted to stone, without a sound. What in your own life — a relationship, a skill, a work of art, a spiritual practice — requires the patience of this kind of building?',
        },
        {
          kind: 'reflection',
          id: 'silent-build',
          prompt: 'Solomon&apos;s workers prepared the stones in silence before bringing them to the temple. What preparations — quiet, unseen — have gone into your own most important work? What happens when you try to rush or make noise in a task that needs silence?',
        },
      ],
    },

    /* ─── 1 Kings 6:11–14 — The Conditional Promise ───────────────────── */
    {
      ref: '1 Kings 6:11–14',
      title: 'The Covenant Condition',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 11,
              spans: [
                t('And the word of the Lord came to Solomon, saying,'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Concerning this house which thou art in building, if thou wilt '),
                hg('walk in my statutes', 's6-walk'),
                t(', and execute my judgments, and keep all my commandments to walk in them; then will I '),
                hp('perform my word with thee', 's6-perform'),
                t(', which I spake unto David thy father:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And I will '),
                hp('dwell among the children of Israel', 's6-dwell'),
                t(', and will not forsake my people Israel.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('So Solomon built the house, and finished it; and overlaid the house within with boards of cedar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's6-walk',
          html:
            'Even as the temple is being built — even as the stones are being fitted, the walls rising, the gold being overlaid — God speaks a condition. "If thou wilt walk in my statutes." The house itself is not the guarantee. The presence of God depends on the obedience of the king. This is the fundamental truth of covenant: God&apos;s promises are not passive gifts, but active covenants. They require response. They require faithfulness.',
        },
        {
          kind: 'commentary',
          id: 's6-perform',
          html:
            '"I will perform my word with thee" — the promise God made to David (in 2 Samuel 7) that his son would build the temple. Now that promise is being fulfilled. But it is conditional. God will perform His word only if Solomon walks in His statutes and keeps His commandments. Blessing flows from obedience. The temple is the sign, but covenant is the substance.',
        },
        {
          kind: 'commentary',
          id: 's6-dwell',
          html:
            '"I will dwell among the children of Israel, and will not forsake my people Israel." This is the deepest promise. Not merely that God will bless from a distance, but that He will dwell — will tabernacle, will pitch His tent — in the midst of His people. This promise echoes backward through the wilderness wanderings, through the tabernacle, and will echo forward in the New Testament when John writes that the Word "became flesh, and dwelt among us" (John 1:14). God&apos;s habitation among His people is the central promise of Scripture.',
        },
        {
          kind: 'hebrew',
          id: 's6-shakan',
          title: 'Shakan — "Dwell" or "Tabernacle"',
          script: 'שָׁכַן',
          translit: '<strong>Shakan</strong> · to dwell; to tent; to tabernacle',
          description:
            'The verb "shakan" means more than simply "to live" or "to reside." It carries the sense of pitching a tent, of settling down with intention, of a sustained presence. When God says "I will shakan among the children of Israel," He is saying He will make His home among them, that He will stay, that His presence will be constant and intentional.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s promise to dwell among His people is not unconditional; it is covenantal. He promises presence, but He also requires faithfulness. In your own spiritual life, what does it mean to "walk in God&apos;s statutes"? What obedience does His dwelling in your heart require of you?',
        },
        {
          kind: 'reflection',
          id: 'covenant-condition',
          prompt: 'God promised to dwell among Israel, but only if they kept His commandments. What does it mean to invite God&apos;s presence into your life conditionally — that is, to know that some of your choices welcome Him and others push Him away?',
        },
      ],
    },

    /* ─── 1 Kings 6:15–30 — The Inner Sanctuary and the Cherubim ──────── */
    {
      ref: '1 Kings 6:15–30',
      title: 'The Most Holy Place',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 15,
              spans: [
                t('And he built the walls of the house within with boards of cedar, both the floor of the house, and the walls thereof, and the ceiling: and so he built them within with boards of cedar.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he built twenty cubits on the sides of the house, both the floor and the walls with boards of cedar: he even built them for it within, even for the oracle, even for the most holy place.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the house, that is, the temple before it, was '),
                hg('forty cubits long', 's6-forty'),
                t('.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the cedar of the house within was carved with knops and open flowers: all was cedar; there was no stone seen.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the oracle he prepared in the house within, to set there the ark of the covenant of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k6-split-1',
          html:
            'The walls, floor, and ceiling are paneled with cedar — a wood of fragrance and durability. The cedar boards are carved with knops (decorative buds) and open flowers. The entire inner surface speaks: there is no stone seen, only wood, only beauty, only the scent of the sanctuary. And in the midst of this ornate chamber, Solomon prepares a space — the oracle, the most holy place — where the ark of the covenant will rest.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 20,
              spans: [
                t('And the oracle in the forepart was twenty cubits in length, and twenty cubits in breadth, and twenty cubits in the height thereof: and he overlaid it with '),
                hg('pure gold', 's6-pure-gold'),
                t('; and so covered the altar which was of cedar.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('So Solomon overlaid the house within with pure gold: and he made a partition by the chains of gold before the oracle; and he overlaid it with gold.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the whole house he overlaid with gold, until he had finished all the house: also the whole altar that was by the oracle he overlaid with gold.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k6-split-2',
          html:
            'The oracle is a perfect cube: twenty cubits in length, breadth, and height. And it is covered — completely covered — with pure gold. The altar, the walls, the partition separating the oracle from the outer chamber, even the chains that hold the doors — all overlaid with gold. This is not decoration; this is theological statement. Gold is eternal, incorruptible, precious beyond measure. The sanctuary is the place where the earthly meets the eternal, and its covering proclaims: here, heaven touches earth.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 23,
              spans: [
                t('And within the oracle he made two cherubims of olive tree, each ten cubits high.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And five cubits was the one wing of the cherub, and five cubits the other wing of the cherub: from the uttermost part of the one wing unto the uttermost part of the other wing were ten cubits.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And the other cherub was ten cubits: both the cherubims were of one measure and one size.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('The height of the one cherub was ten cubits, and so was it of the other cherub.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And he set the cherubims within the inner house: and the wings of the cherubims were stretched forth, so that the wing of the one touched the one wall, and the wing of the other cherub touched the other wall; and their wings touched one another in the midst of the house.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And he overlaid the cherubims with gold.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k6-split-3',
          html:
            'Two cherubim of olive wood stand within the oracle. Each is ten cubits high — as tall as the sanctuary itself. Their wingspans are precise: five cubits per wing, ten cubits from tip to tip. And they are positioned so that one wing of each touches the wall — the east wall, the west wall. Their inner wings meet in the very center of the room, above the ark of the covenant. The cherubim do not sit upon the ark; they form a throne above it, their wings creating a sacred space where heaven and earth meet. And they, too, are overlaid with gold.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 29,
              spans: [
                t('And he carved all the walls of the house round about with carved figures of cherubims and palm trees and open flowers, within and without.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And the floor of the house he overlaid with gold, within and without.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k6-split-4',
          html:
            'The carvings cover every wall — cherubim standing guard, palm trees speaking of paradise, open flowers blooming in perpetual spring. The entire sanctuary is carved and covered: walls, floor, cherubim, all speaking the same language: holiness, beauty, the presence of the divine made visible in matter. And the floor itself is gold — the very ground upon which one walks in the holy place is precious, is eternal, is set apart. There is no corner of this space that is ordinary. Everything has been consecrated.',
        },
        {
          kind: 'commentary',
          id: 's6-forty',
          html:
            'The outer temple was forty cubits long (the other dimension being twenty), while the oracle — the inner sanctuary, the most holy place — was a perfect cube: twenty by twenty by twenty. The oracle takes up the back half of the temple. It is the holy of holies, the inner chamber, the place where God Himself will dwell above the ark of the covenant.',
        },
        {
          kind: 'hebrew',
          id: 's6-debir',
          title: 'Debir — "Oracle" or "Holy of Holies"',
          script: 'דְּבִיר',
          translit: '<strong>Debir</strong> · oracle; holy of holies; inner sanctuary',
          description:
            'The word "debir" comes from the root meaning "word" or "speak." The oracle is literally "the place where the word is spoken" — where God speaks to His people through the high priest, where the sacred conversation between heaven and earth takes place. It is the innermost sanctum, the threshold of divine presence.',
        },
        {
          kind: 'commentary',
          id: 's6-pure-gold',
          html:
            'Gold. Gold everywhere. The altar overlaid with pure gold. The walls overlaid with gold. The floor overlaid with gold. The cherubim overlaid with gold. In the ancient world, gold was not merely valuable; it was sacred. It did not tarnish, did not corrupt. It represented eternity, incorruptibility, the divine. By covering the inner sanctuary with gold, Solomon was saying something wordless but profound: this place is eternal, this place is divine, this is where heaven touches earth.',
        },
        {
          kind: 'hebrew',
          id: 's6-keruv',
          title: 'Keruv — "Cherub" or "Cherubim"',
          script: 'כְּרוּב',
          translit: '<strong>Keruv</strong> (plural: <strong>Keruvim</strong>) · cherub; angelic guardian',
          description:
            'The cherubim are angelic guardians, celestial beings who stand at the boundary between the human and the divine. They first appear in Genesis 3, guarding the way to the tree of life with a flaming sword after the Fall. Here, in the most holy place, they guard the presence of God Himself. Their wings stretch across the sanctuary, their inner wings meeting in the middle — a gesture of completeness, of encompassing the divine presence within their protection.',
        },
        {
          kind: 'commentary',
          id: 's6-cherubim-wings',
          html:
            'The geometry of the cherubim is precise and meaningful. Each cherub has a wingspan of five cubits from tip to tip. Each stands ten cubits high. Their wings stretch across the sanctuary — one wing touches the east wall, the other wing touches the west wall. Their inner wings meet in the middle of the room. It is as though they are creating a protective space around the invisible presence of God. The point where their wings meet is the center of the holy of holies, the exact spot where the ark of the covenant rests. The cherubim form a throne for the invisible God.',
        },
        {
          kind: 'christ',
          id: 's6-christ-temple',
          title: 'Christ Connection — The True Temple',
          html:
            'Jesus said of His own body: "Destroy this temple, and in three days I will raise it up" (John 2:19). The stone temple Solomon built was a shadow, a pointer, a preparation. Christ Himself is the true temple — the place where God tabernacles among humanity, where the divine and human meet completely. In the incarnation, God does not merely rest above the ark in an inner sanctuary; He becomes flesh, walks among us, touches the sick, speaks to the outcast. The perfect geometry of Solomon&apos;s oracle gives way to the perfect humanity of Christ. And when the temple was destroyed in 70 CE, it was not a tragedy but a transition — the eternal temple had already come. "In him dwelleth all the fullness of the Godhead bodily" (Colossians 2:9).',
        },
        {
          kind: 'carry',
          html:
            'The cherubim in the holy of holies guard and frame God&apos;s presence. In your own spiritual life, what guards and frames your awareness of the divine? What practices, relationships, or disciplines create a space where God&apos;s presence becomes real to you?',
        },
        {
          kind: 'reflection',
          id: 'holy-place',
          prompt: 'The oracle was a sealed inner chamber, separated from the outside world by walls and gold. What in your spiritual life needs to be protected, sealed off from distraction, made into a holy place?',
        },
      ],
    },

    /* ─── 1 Kings 6:31–38 — The Doors, the Carving, and Completion ────── */
    {
      ref: '1 Kings 6:31–38',
      title: 'Seven Years Complete',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 31,
              spans: [
                t('And for the entering of the oracle he made doors of olive tree: the lintel and side posts were a '),
                hg('fifth part of the wall', 's6-fifth'),
                t('.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('The two doors also were of olive tree; and he carved upon them carvings of cherubims and palm trees and open flowers, and overlaid them with gold, and spread gold upon the cherubims, and upon the palm trees.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('So also made he for the door of the temple posts of olive tree, a fourth part of the wall.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And the two doors were of fir tree: the two leaves of the one door were folding, and the two leaves of the other door were folding.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1-kings-6-mid-34',
          html:
            '<p>A royal shift: the narrative moves from succession planning to operational rule.</p>',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 35,
              spans: [
                t('And he carved thereon cherubims and palm trees and open flowers: and covered them with gold fitted upon the carved work.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And he built the inner court with three rows of hewed stone, and a row of cedar beams.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('In the fourth year was the foundation of the house of the Lord laid, in the month Zif:'),
              ],
            },
            {
              number: 38,
              spans: [
                t('And in the eleventh year, in the month Bul, which is the eighth month, was the house finished throughout all the parts thereof, and according to all the fashion of it. So was he seven years in building it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's6-fifth',
          html:
            'Even the measurements of the doors are governed by sacred geometry. The lintel and side posts are a fifth part of the wall — a proportion that echoes throughout the temple. Nothing is arbitrary. Every measurement speaks of order, of purpose, of a cosmos brought into being by divine intention.',
        },
        {
          kind: 'commentary',
          id: 's6-carvings',
          html:
            'The walls are carved with cherubim and palm trees and open flowers — a repetitive motif that covers the inner and outer surfaces of the temple. The imagery speaks of the garden (palm trees, flowers) guarded by angels (cherubim). It is as though the temple recreates Eden, but now with its guardians present, the divine presence protected and framed.',
        },
        {
          kind: 'hebrew',
          id: 's6-zahav',
          title: 'Zahav — "Gold"',
          script: 'זָהָב',
          translit: '<strong>Zahav</strong> · gold; precious metal',
          description:
            'Gold appears more than forty times in this chapter. It is not mere decoration but a theological statement. Gold is eternal, incorruptible, precious beyond measure. It represents the value of the sacred, the permanence of God&apos;s promise, the beauty of His dwelling place.',
        },
        {
          kind: 'commentary',
          id: 's6-seven-years',
          html:
            'Seven years. The number itself speaks. Seven is the number of completion in biblical numerology, the number of rest, of Sabbath. For seven years the hammer fell in the quarries, the craftsmen shaped stone and timber, the gold was beaten and applied. Seven years to build the throne of God in the midst of Israel. Not rushed, not hurried. Accomplished in the rhythm of creation itself.',
        },
        {
          kind: 'carry',
          html:
            'The temple took seven years to build — 2,555 days of patient, coordinated labor. What work in your own life requires this kind of sustained attention, this kind of patience? What are you building that cannot be rushed, that requires the rhythm of seven?',
        },
        {
          kind: 'reflection',
          id: 'seven-years',
          prompt: 'Solomon spent seven years building the temple. What would it mean for you to commit to a spiritual practice or relationship not for a season, but for the long arc of years? What in your faith would deepen with this kind of sustained devotion?',
        },
      ],
    },
  ],
};
