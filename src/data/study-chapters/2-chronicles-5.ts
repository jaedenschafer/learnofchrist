import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 5 — The Ark Brought Into the Temple
 *
 * The work is finished. All that Solomon was commissioned to build stands
 * complete. Now comes the moment that gives it meaning: the ark of the covenant,
 * the throne of God's presence, is carried into the Holy of Holies. The 120 priests
 * sound their trumpets in unison with the singers of Asaph, Heman, and Jeduthun.
 * And then the cloud descends — the shekinah glory fills the house, and the priests
 * cannot stand to minister. In this chapter, we see what happens when human work
 * aligns with God's purpose, when worship becomes unified, and when heaven touches earth.
 */
export const CHRONICLES_2_5: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 5,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 14 },
  intros: [
    'The temple is finished. Year after year, the sound of hammers and chisels has filled Jerusalem. The silver and gold that David accumulated for this purpose have been melted down and shaped into vessels of worship. The walls stand complete. The furnishings are in place. And now, in the seventh month, when the feast of Tabernacles is being celebrated, Solomon calls all Israel to gather for a ceremony that will transform this building of stone and wood into something far greater: a dwelling place for the divine presence.',
    'The ark of the covenant is about to be brought from Zion, from the tent where it has rested since David&apos;s time. This is no ordinary transaction. This is the object around which all of Israel&apos;s covenant history revolves — the box that contains the two tablets of the law given at Sinai, the thing that has been carried through the wilderness, that has marched before Israel in battle, that has stood as the visible sign of God&apos;s faithfulness. As the priests lift it and begin to move it toward the temple, something extraordinary happens. The music rises. The unified voice of worship fills the space. And God responds.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 5',
    quote:
      'When the trumpeters and singers became as one, making one sound to praise the Lord, the glory of God filled His house. Unity in worship invites the presence of heaven.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 5 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 5:1 — All the Work Finished ──────────────────────── */
    {
      ref: '2 Chronicles 5:1',
      title: 'All the Work That Solomon Made',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Thus all the work that Solomon made for the house of the Lord was finished: and Solomon brought in all the things that David his father had dedicated; and the silver, and the gold, and all the instruments, put he among the treasures of the house of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'work-finished',
          html:
            'The opening word "thus" marks a transition. What follows is not construction, but consecration. All the structural work is complete. Now the focus shifts to what transforms a building into a temple: the presence of God, made tangible through the sacred objects that will dwell within it. Solomon brings in the treasures that David had set aside — the accumulated wealth of a kingdom devoted to honoring the God who gave the kingdom. This is what it looks like when a father\'s vision passes to a son\'s completion.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes our work feels incomplete until we understand its true purpose. Solomon inherited a vision from his father — not just to build a building, but to create a place where heaven and earth would meet. What work has been handed to you that is meant to be more than it appears? What treasure is waiting to be placed in the center of it?',
        },
        {
          kind: 'reflection',
          id: 'work-finished-reflect',
          prompt: 'What legacy or vision have you inherited from someone you respect? How are you bringing that vision to completion in your own time?',
        },
      ],
    },

    /* ─── 2 Chronicles 5:2–6 — The Ark Brought Up ───────────────────────── */
    {
      ref: '2 Chronicles 5:2–6',
      title: 'Assembled: Elders, Levites, and All Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(2, 'Then Solomon assembled the elders of Israel, and all the heads of the tribes, the chief of the fathers of the children of Israel, unto Jerusalem, to bring up the ark of the covenant of the Lord out of the city of David, which is Zion.'),
            plain(3, 'Wherefore all the men of Israel assembled themselves unto the king in the feast which was in the seventh month.'),
            plain(4, 'And all the elders of Israel came; and the Levites took up the ark.'),
            {
              number: 5,
              spans: [
                t('And they brought up the ark, and the '),
                hg('tabernacle of the congregation', 'c5-tabernacle'),
                t(', and all the holy vessels that were in the tabernacle, these did the priests and the Levites bring up.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Also king Solomon, and all the congregation of Israel that were assembled unto him before the ark, '),
                hy('sacrificed sheep and oxen', 'c5-sacrificed'),
                t(', which could not be told nor numbered for multitude.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c5-tabernacle',
          html:
            'The tabernacle that had housed the ark in the wilderness, the tent where it had rested since the time of David, is now being brought into permanent form. This is a historical threshold: the portable sanctuary becomes a stationary one. The holy vessels — all the implements of worship that had traveled with Israel — are being brought in as well. Nothing that has been sacred is left behind. Everything that represents Israel\'s covenant with God is being gathered into one place.',
        },
        {
          kind: 'commentary',
          id: 'c5-sacrificed',
          html:
            'The number of sacrifices is so vast it cannot be counted. This is not a normal dedication ceremony. This is a moment of such rejoicing, such gratitude, such awareness that something cosmic is happening, that the offerings pile higher than any tally can record. The king and people together are making a statement: we understand what is about to occur. We recognize that heaven is about to meet earth.',
        },
        {
          kind: 'hebrew',
          id: 'c5-kavod',
          title: 'Kavod — "Glory" or "Weightiness"',
          script: 'כָּבוֹד',
          translit: '<strong>Kavod</strong> · glory; the weighty presence of God; honor; majesty',
          description:
            'The word "kavod" carries a literal sense of weight or substance. God\'s glory is not an abstract notion — it is a presence so real, so tangible, that it will soon fill the entire temple and prevent the priests from standing. The glory of God is His manifest presence, His character made visible, His majesty made palpable.',
        },
        {
          kind: 'carry',
          html:
            'Gathering together for worship is not incidental. The entire congregation assembles. The king stands among them. The priests and Levites work in concert. When we gather to worship, we are participating in something larger than ourselves, something that has been prepared across generations — just as this temple was prepared across reigns. The gathering itself is part of the sacred act.',
        },
        {
          kind: 'reflection',
          id: 'assembly-reflect',
          prompt: 'When have you felt the power of corporate worship — the sense that something larger than you is happening when many gather to honor God? What made that moment significant?',
        },
      ],
    },

    /* ─── 2 Chronicles 5:7–10 — The Ark to Its Place ───────────────────── */
    {
      ref: '2 Chronicles 5:7–10',
      title: 'The Ark Under the Wings of the Cherubim',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 7,
              spans: [
                t('And the priests brought in the ark of the covenant of the Lord unto his place, to the oracle of the house, '),
                hp('into the most holy place', 'c5-oracle'),
                t(', even under the wings of the cherubims:'),
              ],
            },
            plain(8, 'The cherubims spread forth their wings over the place of the ark; and the cherubims covered the ark and the staves thereof above.'),
            plain(9, 'And they drew out the staves of the ark; that the ends of the staves were seen from the ark before the oracle; but they were not seen without. And there it is unto this day.'),
            {
              number: 10,
              spans: [
                t('There was nothing in the ark '),
                hg('save the two tables', 'c5-two-tables'),
                t(' which Moses put therein at Horeb, when the Lord made a covenant with the children of Israel, when they came out of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c5-oracle',
          html:
            'The oracle is the inner sanctuary, the Holy of Holies, the place where heaven and earth were understood to meet. It is here, and only here, that the priest could enter once a year to sprinkle blood on the mercy seat. Now the ark — the tangible sign of God\'s covenant — is being placed beneath the wings of the golden cherubim, the celestial guardians who protect and honor the divine presence. The ark is hidden from sight, covered by these wings, held in the deepest sanctuary of the house.',
        },
        {
          kind: 'commentary',
          id: 'c5-two-tables',
          html:
            'The text pauses to clarify what is actually in the ark: the two tablets of stone on which God\'s finger inscribed the Ten Commandments at Sinai. This is important. The ark does not contain relics or memorials. It contains the law itself — the terms of the covenant, the Word of God written in stone, indestructible. When the priests place the ark in the Holy of Holies, they are placing the foundation of Israel\'s relationship with God in the most sacred space. The law is not something distant or forgotten. It is the center of the temple, the core of worship.',
        },
        {
          kind: 'carry',
          html:
            'The law is not meant to be hidden away or forgotten. It is to be at the center, covered with honor, guarded by the wings of heaven itself. In our own lives, God\'s word — His law, His commands, His character — should not be something we keep at a distance. It should be at the center of everything, honored, protected, the foundation of our choices.',
        },
        {
          kind: 'reflection',
          id: 'ark-reflect',
          prompt: 'What does it mean to you that the ark — the physical symbol of God\'s law — is placed at the very center of the temple, hidden from casual view but absolutely sacred? What parts of God\'s word do you keep at the center of your life?',
        },
      ],
    },

    /* ─── 2 Chronicles 5:11–13 — The Trumpeters and Singers as One ────────── */
    {
      ref: '2 Chronicles 5:11–13',
      title: 'One Sound: Trumpet, Song, and Unified Praise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 11,
              spans: [
                t('And it came to pass, when the priests were come out of the '),
                hg('holy place', 'c5-holy-place-exit'),
                t(': (for all the priests that were present were sanctified, and did not then wait by course;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Also the Levites which were the singers, all of them of Asaph, Heman, Jeduthun, with their sons and brethren, being arrayed in '),
                hy('white linen', 'c5-white-linen'),
                t(', having cymbals and psalteries and harps, stood at the east end of the altar, and with them '),
                hg('an hundred and twenty priests', 'c5-priests-trumpet'),
                t(' sounding with trumpets;)'),
              ],
            },
            {
              number: 13,
              spans: [
                t('It came even to pass, as the trumpeters and singers were as one, to make one sound to be heard in praising and thanking the Lord; and when they lifted up their voice with the trumpets and cymbals and instruments of musick, and praised the Lord, saying, '),
                hp('"For he is good; for his mercy endureth for ever"', 'c5-mercy-endures'),
                t(': that then the house was filled with a cloud, even the house of the Lord;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c5-holy-place-exit',
          html:
            'The priests emerge from the Holy of Holies after placing the ark. Normally, the service would proceed in careful order — this priest after that one, each in his appointed time. But in this moment, the normal order breaks. All the priests who are present abandon the usual schedule. They are so overwhelmed by what they have just witnessed, so moved by the enormity of the moment, that they drop the formality and join in unified worship.',
        },
        {
          kind: 'commentary',
          id: 'c5-white-linen',
          html:
            'The singers are dressed in white linen — the garment of holiness and consecration. They stand at the east end of the altar, in full sight of the congregation. These are the descendants of Asaph, Heman, and Jeduthun, the great musicians of David\'s court, appointed generations before to lead worship in the tabernacle. Their lineage reaches back to David himself. They are ready.',
        },
        {
          kind: 'commentary',
          id: 'c5-priests-trumpet',
          html:
            'One hundred and twenty priests sound their trumpets. This is a specific number, and it echoes the Pentecost account in the New Testament, where 120 believers gather and the Holy Spirit falls. The trumpet was the instrument of covenant, of proclamation, of heralding the acts of God. Sixty priestly families, two representatives from each, stand with their instruments raised.',
        },
        {
          kind: 'hebrew',
          id: 'c5-echad',
          title: 'Echad — "One" or "Unity"',
          script: 'אֶחָד',
          translit: '<strong>Echad</strong> · one; unity; singular; the number one',
          description:
            '"They were as one, to make one sound." The Hebrew word "echad" appears twice in verse 13 — it is not accidental. The unity is structural, deliberate. Many instruments, many voices, many musicians — but they become one sound. This is not uniformity imposed by force. This is harmony achieved through shared purpose.',
        },
        {
          kind: 'commentary',
          id: 'c5-mercy-endures',
          html:
            'The antiphon they sing is from the Psalms: "For he is good; for his mercy endureth for ever." These words will become the refrain of Psalm 136, each verse followed by the eternal response "for his mercy endureth for ever." The singers are reminding Israel of God\'s nature — not His power to destroy, but His faithfulness to love, His covenant loyalty that survives every failure and setback.',
        },
        {
          kind: 'carry',
          html:
            'Unity in worship is not about erasing differences. The trumpets do not sound like harps. The singers do not sound like cymbals. But when they are unified in purpose — to praise God and give thanks — their different voices create something greater than any single instrument could produce. What might happen if your life, with all its different roles and responsibilities, became unified around a single purpose: to praise God?',
        },
        {
          kind: 'reflection',
          id: 'one-sound-reflect',
          prompt: 'When have you experienced the power of unified worship — many voices, many instruments, but one purpose? What does it feel like when a congregation becomes "as one"?',
        },
      ],
    },

    /* ─── 2 Chronicles 5:13–14 — The Glory Fills the House ──────────────── */
    {
      ref: '2 Chronicles 5:13–14',
      title: 'The Cloud of Glory Fills the House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(13, 'It came even to pass, as the trumpeters and singers were as one, to make one sound to be heard in praising and thanking the Lord; and when they lifted up their voice with the trumpets and cymbals and instruments of musick, and praised the Lord, saying, "For he is good; for his mercy endureth for ever": that then the house was filled with a cloud, even the house of the Lord;'),
            {
              number: 14,
              spans: [
                t('So that the priests could not stand to minister by reason of the cloud: '),
                hp('for the glory of the Lord had filled the house of God', 'c5-glory-filled-house'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c5-glory-filled-house',
          html:
            'The connection is explicit and immediate: as the unified voice rises, the cloud descends. This is not coincidence. This is the pattern of Scripture — God responds to worship. The cloud is the shekinah, the visible manifestation of God\'s presence. In Exodus 40, when Moses completed the tabernacle, "a cloud covered the tent of the congregation, and the glory of the Lord filled the tabernacle" (Exodus 40:34). Now, seven centuries later, that same cloud descends upon Solomon\'s temple. The promise is fulfilled: God will dwell with His people.',
        },
        {
          kind: 'commentary',
          id: 'c5-priests-cannot-stand',
          html:
            'The priests cannot stand. The weight of God\'s presence is so tangible, so overwhelming, that they cannot maintain their posture. This is not weakness. This is the only appropriate response to the overwhelming nearness of the divine. When heaven breaks through into earth, the normal categories of human strength and ability are rendered irrelevant. The priests collapse before the weight of God\'s glory.',
        },
        {
          kind: 'christ',
          id: 'c5-christ-glory',
          title: 'Christ Connection — The Glory Bodily',
          html:
            'In the New Testament, Paul writes of Christ: "For in him dwelleth all the fulness of the Godhead bodily" (Colossians 2:9). The glory that fills the temple — the cloud, the shekinah presence — is now manifest in the body of Jesus. Where priests could not stand before the glory of God in the temple, so also did the disciples fall before the transfigured Christ on the mountain (Matthew 17:6). But Christ does not crush us with His glory. He draws near in mercy. He became incarnate precisely so that we could bear to be in His presence, so that we could touch Him, speak with Him, be loved by Him. And in John 17:21, Jesus prays that His followers "may be one; as thou, Father, art in me, and I in thee, that they also may be one in us." The unity of worship in the temple points to the unity of believers in Christ.',
        },
        {
          kind: 'carry',
          html:
            'We do not have a temple made with hands. We are the temple. The glory of God — that same shekinah presence that once filled the building of stone — now fills the body of Christ, the church. When believers gather in unified worship, when many voices become one sound praising God, that same cloud descends. God\'s presence is not locked in a sanctuary at a distance. It dwells in the hearts of His people. What would it mean to encounter God\'s glory with the same awe and recognition that the priests felt?',
        },
        {
          kind: 'reflection',
          id: 'glory-reflect',
          prompt: 'The priests could not stand in the presence of God\'s glory. How do you encounter God\'s presence in your own life? What would it mean to be so aware of His nearness that it changed your entire way of standing, speaking, and being?',
        },
      ],
    },
  ],
};
