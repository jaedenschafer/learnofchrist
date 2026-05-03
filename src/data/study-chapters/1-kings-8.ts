import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 8 — The Dedication of the Temple
 *
 * Solomon, the wisest of Israel's kings, completes the Temple his father
 * dreamed of building. Now the moment arrives when the ark of the covenant
 * is brought up into its sanctuary. As the priests withdraw from the holy of
 * holies, the cloud of God's presence (the Shekinah) fills the entire house.
 * In that moment, God moves into the structure built for Him. Then Solomon
 * blesses the people and offers a prayer of dedication that spans the whole
 * range of human need: drought, defeat, exile, the foreigner who comes
 * seeking God's name. In this chapter, we see the Temple at its moment of
 * fullest glory, and in Solomon's prayer, we encounter a vision of how God
 * longs to be found.
 */
export const KINGS_1_8: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 8,

  estimatedMinutes: { beginner: 9, intermediate: 19, deep: 23 },
  intros: [
    'Solomon has spent seven years building the Temple. The materials are gathered, the craftsmen have labored, the stone and gold and cedar have been shaped into a house more magnificent than any on earth. And now, at last, the dedication. All Israel assembles—the elders, the heads of the tribes, the chiefs of the fathers. They have come to witness the moment when the dwelling place of God is consecrated.',
    'But the true moment of dedication is not what Solomon orchestrates. It is what God does. As the priests bear the ark into the holy of holies and withdraw, the cloud of the Lord&apos;s presence—the same glory that filled the tabernacle in the wilderness—descends and fills the entire house. The priests cannot stand to minister. The Temple is no longer a building made by human hands; it has become the manifest house of God.',
  ],

  bottomShare: {
    label: 'Share 1 Kings 8',
    quote: 'When the priests withdrew from the holy place, the cloud filled the house of the Lord, so that the priests could not stand to minister because of the cloud: for the glory of the Lord had filled the house of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 8 · Study Guide',
  },

  sections: [
    /* ─── 1 Kings 8:1–11 — The Ark Brought into the Temple ──────────────── */
    {
      ref: '1 Kings 8:1–11',
      title: 'The Ark Brought Into the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              1,
              'Then Solomon assembled the elders of Israel, and all the heads of the tribes, the chief of the fathers of the children of Israel, unto Jerusalem, to bring up the ark of the covenant of the Lord out of the city of David, which is Zion.'
            ),
            plain(
              2,
              'And all the men of Israel assembled themselves unto king Solomon at the feast in the month Ethanim, which is the seventh month.'
            ),
            plain(
              3,
              'And all the elders of Israel came, and the priests took up the ark.'
            ),
            {
              number: 4,
              spans: [
                t('And they brought up the ark of the Lord, and the tabernacle of the congregation, and all the holy vessels that were in the tabernacle, even those did the priests and the Levites bring up.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And king Solomon, and all the congregation of Israel, that were assembled unto him, were with him before the ark, '),
                hg('sacrificing sheep and oxen', '1k8-sacrifice-multitude'),
                t(', that could not be told nor numbered for multitude.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-assembly',
          html:
            'All Israel gathers—not scattered, not divided, but unified. The elders, the heads of the tribes, the chiefs of the fathers. This is a moment of national assembly. The feast is in the seventh month, Ethanim, the month of ingathering. The entire people has come together to witness what Solomon is about to do.',
        },
        {
          kind: 'commentary',
          id: '1k8-sacrifice-multitude',
          html:
            'The sacrifices are beyond counting. So many sheep and oxen that the scribes cannot keep track. The sheer abundance of the offering reflects the magnitude of the moment. This is not a private ceremony. This is the whole people, through their king, offering sacrifice on a scale that overwhelms the ability to measure.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 6,
              spans: [
                t('And the priests brought in the ark of the covenant of the Lord unto his place, into the oracle of the house, to the most holy place, even under the wings of the '),
                hg('cherubims', '1k8-cherubims'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('For the cherubims spread forth their two wings over the place of the ark, and the cherubims covered the ark and the staves thereof above.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the staves were so long that the ends of the staves were seen out in the holy place before the oracle, and they were not seen without: and there they are unto this day.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('There was nothing in the ark save the two tables of stone, which Moses put there at Horeb, when the Lord made a covenant with the children of Israel, when they came out of the land of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-cherubims',
          html:
            'The cherubims spread their wings over the ark—the same posture as in the tabernacle of old. These are not merely decorative. In Jewish tradition, the space between the wings of the cherubims is understood as the mercy seat, the place where God&apos;s presence dwelt in a unique and concentrated way. The ark itself contains only the two tablets of stone: the covenant. Everything else has passed away. What remains is the word of God.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 10,
              spans: [
                t('And it came to pass, when the priests were come out of the holy place, that the '),
                hp('cloud filled the house', '1k8-cloud-fills'),
                t(' of the Lord,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('So that the priests could not stand to minister because of the cloud: for the '),
                t('glory of the Lord'),
                t(' had filled the house of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-cloud-fills',
          html:
            'The cloud descends. This is the same cloud that filled the tabernacle at Mount Sinai (Exodus 40:34–35), the same shekinah that hovered over the wilderness camp, the visible sign of God&apos;s presence. The priests—whose role is to serve—find they cannot stand. The glory is too great. The presence of God is so overwhelming, so manifest, that the very function of priesthood becomes impossible. Not because they have failed, but because what they are witnessing transcends the work they were meant to do.',
        },
        {
          kind: 'hebrew',
          id: '1k8-kavod-shekinah',
          title: 'Kavod — "Glory" and "Weight"',
          script: 'כָּבוֹד',
          translit: '<strong>Kavod</strong> · glory; weight; heaviness; the weighty presence of God',
          description:
            'The word "kavod" means both "glory" and "weight"—the dense, substantial presence of God. When Moses asks to see God&apos;s glory (Exodus 33:18), he is asking to see the "weight" of God&apos;s being, the fullness of His presence made visible. Here, the kavod is so heavy, so substantial, that the priests cannot stand. The glory is not metaphorical; it is a real, physical weight—the presence of God made manifest.',
        },
        {
          kind: 'carry',
          html:
            'There are moments in our lives when the presence of God becomes so real, so overwhelming, that we cannot continue with ordinary business. We cannot stand and do what we planned to do. The cloud has filled the house. In that moment, all we can do is stop and witness. Have you ever felt the weight of God&apos;s presence so strongly that you could not go forward with your usual tasks?',
        },
        {
          kind: 'reflection',
          id: '1k8-cloud-reflection',
          prompt:
            'The priests had to stop their work because God&apos;s presence was too overwhelming. When have you felt stopped by the weight of God&apos;s presence in your life? What happened?',
        },
      ],
    },

    /* ─── 1 Kings 8:12–21 — Solomon's Blessing ────────────────────────── */
    {
      ref: '1 Kings 8:12–21',
      title: 'Solomon&apos;s Blessing and Testament',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 12,
              spans: [
                t('Then spake Solomon, The Lord said that he would dwell in the thick darkness.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('I have surely built thee an house to dwell in, a settled place for thee to abide in for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-thick-darkness',
          html:
            'Solomon begins with a theology of God&apos;s transcendence. The Lord dwells in thick darkness—not in light that is easy to see, not in a place that is comfortable or ordinary, but in darkness. This echoes the revelation at Sinai, where God spoke from the cloud and the mountain was wrapped in smoke. God is not transparent. God is not reducible to human understanding. Yet this God of inaccessible darkness has chosen to dwell in a house—a settled place, an abode.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 14,
              spans: [
                t('And the king turned his face about, and blessed all the congregation of Israel: (and all the congregation of Israel stood;)'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he said, Blessed be the Lord God of Israel, which spake with his mouth unto David my father, and hath with his hand fulfilled it, saying,'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Since the day that I brought forth my people Israel out of Egypt, I chose no city out of all the tribes of Israel to build an house, that my name might be therein; but I chose David to be over my people Israel.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And it was in the heart of David my father to build an house for the name of the Lord God of Israel.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the Lord said unto David my father, Whereas it was in thine heart to build an house unto my name, thou didst well that it was in thine heart:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Nevertheless thou shalt not build the house; but thy son that shall come forth out of thy loins, he shall build the house unto my name.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the Lord hath performed his word that he spake, and I am risen up in the room of David my father, and sit on the throne of Israel, as the Lord promised, and have built an house for the name of the Lord God of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-blessing-testament',
          html:
            'Solomon turns to bless the people. He recounts the covenant promise: that God spoke to David, that David longed to build a house, that God said no—not you, but your son. And now that son stands before them, and the promise is fulfilled. Every word the Lord spoke has come true. This is Solomon&apos;s moment of witness: the promise made to David is now embodied in stone and gold and cedar.',
        },
        {
          kind: 'carry',
          html:
            'God often says "not now, but later" to our deepest desires. David longed to build the Temple but could not. His son did it for him. Sometimes our greatest prayers are answered not by us, but by those who come after us. What longings have you released, trusting that God will fulfill them through others?',
        },
        {
          kind: 'reflection',
          id: '1k8-blessing-reflection',
          prompt:
            'David wanted to build the Temple but God said no. Solomon, his son, built it instead. Have you ever had to release a longing and trust that God would fulfill it through someone else?',
        },
      ],
    },

    /* ─── 1 Kings 8:22–30 — "Will God Indeed Dwell on Earth?" ────────────── */
    {
      ref: '1 Kings 8:22–30',
      title: 'The Theology of God&apos;s Transcendence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 22,
              spans: [
                t('And Solomon stood before the altar of the Lord in the presence of all the congregation of Israel, and spread forth his hands toward heaven:'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And he said, Lord God of Israel, there is no God like thee, in heaven above, or on earth beneath, who keepest covenant and mercy with thy servants that walk before thee with all their heart:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-no-god-like-thee',
          html:
            'Solomon stands before the altar, hands spread toward heaven. This is the posture of intercession. He opens with a confession: there is no God like you. Not just greater, not just more powerful—but utterly unique. This God keeps covenant. This God shows mercy to those who walk before Him with all their hearts. The prayer begins not with petition, but with adoration.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 24,
              spans: [
                t('Who hast kept with thy servant David my father that thou promisedst him: thou spakest also with thy mouth, and hast fulfilled it with thine hand, as it is this day.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Therefore now, Lord God of Israel, keep with thy servant David my father that thou promisedst him, saying, There shall not fail thee a man in my sight to sit on the throne of Israel; so that thy children take heed to their way, that they walk before me as thou hast walked before me.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And now, O God of Israel, let thy word be verified, which thou spakest unto thy servant David my father.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-covenant-continuity',
          html:
            'Solomon moves from adoration to petition. He asks God to keep the covenant promises made to David—that there shall never fail a man on the throne of Israel. But he adds a condition: "so that thy children take heed to their way, that they walk before me as thou hast walked before me." The covenant is conditional. The dynasty will endure if the people obey God.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 27,
              spans: [
                t('But will God indeed dwell on the earth? behold, the heaven and heaven of heavens cannot contain thee; how much less this house that I have builded?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-heaven-of-heavens',
          html:
            'Here is Solomon&apos;s greatest theological insight. He has just built the most magnificent Temple on earth. But in this moment of dedication, he asks a question that relativizes all he has built: "Will God indeed dwell on the earth? Behold, the heaven and heaven of heavens cannot contain thee; how much less this house that I have builded?" The vastness of the universe cannot contain God. The highest heaven cannot hold Him. And yet—He chooses to dwell in this house. Not because the house is adequate to contain Him, but because He chooses to make His presence manifest here. The house does not contain God; God chooses to be found in the house.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 28,
              spans: [
                t('Yet have thou respect unto the prayer of thy servant, and to his supplication, O Lord my God, to hearken unto the cry and to the prayer, which thy servant prayeth before thee this day:'),
              ],
            },
            {
              number: 29,
              spans: [
                t('That thine eyes may be open toward this house night and day, even toward the place of which thou hast said, My name shall be there: that thou mayest hearken unto the prayer which thy servant shall make toward this place.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And hearken thou to the supplication of thy servant, and of thy people Israel, when they shall pray toward this place: and hear thou in heaven thy dwelling place: and when thou hearest, forgive.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-eyes-open',
          html:
            'Solomon asks God to keep His eyes open toward the Temple "night and day." He asks God to hear the prayers made toward this place. And he adds the key understanding: "hear thou in heaven thy dwelling place"—God&apos;s true dwelling place is heaven. The Temple is a place where prayers are made, a place where God has said His name shall be. But God dwells in heaven. This house is where the people turn when they cry out. This is where God has chosen to be found.',
        },
        {
          kind: 'christ',
          id: '1k8-christ-temple',
          title: 'Christ Connection — The True Temple',
          html:
            'Solomon stands in a Temple built by human hands, magnificent but temporary. Yet Jesus teaches that He Himself is the True Temple. When the religious authorities demand a sign, Jesus says, "Destroy this temple, and in three days I will raise it up" (John 2:19). He is speaking of His own body. God does not dwell in temples made with hands. God dwells in Christ. And Solomon&apos;s profound question—"Will God indeed dwell on the earth?"—finds its ultimate answer in the Incarnation. In Jesus, God does dwell on the earth. In His body, the fullness of divinity dwells (Colossians 2:9). The cloud that filled the Temple in Solomon&apos;s day descended, took flesh, and walked among us.',
        },
        {
          kind: 'carry',
          html:
            'Solomon&apos;s question echoes in every age: Will God indeed dwell here? In this church? In this home? In this heart? The answer is always the same: not because the place is grand enough or worthy enough, but because God chooses to be found here. Wherever two or three are gathered in His name, wherever a heart cries out to Him, there He is. You are a temple of the Holy Spirit (1 Corinthians 6:19). Will God dwell in you? Yes—if you open the door.',
        },
        {
          kind: 'reflection',
          id: '1k8-temple-reflection',
          prompt:
            'Solomon wondered whether God would truly dwell in a house made by human hands. In what ways have you experienced God dwelling in unexpected places—in your heart, in a moment of need, in a community of believers?',
        },
      ],
    },

    /* ─── 1 Kings 8:31–53 — The Prayer of Dedication ────────────────────── */
    {
      ref: '1 Kings 8:31–53',
      title: 'The Prayer of Dedication',
      blocks: [
        {
          kind: 'commentary',
          id: '1k8-prayer-intro',
          html:
            'Solomon&apos;s prayer spans the full range of human need. It covers drought and famine, defeat in battle, plague and pestilence, the exile of the people and their return. This is not a prayer of triumph. This is a prayer that anticipates every way a people might fail, every way they might be brought low, every way they might need to call upon God. Solomon prays as if he is already seeing the future—a future in which Israel will sin, will be defeated, will be taken into captivity. And his prayer asks God to hear them even then.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(31, 'If any man trespass against his neighbour, and an oath be laid upon him to cause him to swear, and the oath come before thine altar in this house:'),
            plain(
              32,
              'Then hear thou in heaven, and do, and judge thy servants, condemning the wicked, to bring his way upon his head; and justifying the righteous, to give him according to his righteousness.'
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              33,
              'When thy people Israel be smitten down before the enemy, because they have sinned against thee, and shall turn again to thee, and confess thy name, and pray, and make supplication unto thee in this house:'
            ),
            plain(34, 'Then hear thou in heaven, and forgive the sin of thy people Israel, and bring them again unto the land which thou gavest unto their fathers.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-when-smitten',
          html:
            'Solomon prays for the moment when Israel will be defeated in battle—not if, but when. He knows that sin brings judgment. But he also knows something crucial: "If they shall turn again to thee, and confess thy name, and pray...then hear thou in heaven, and forgive." Repentance opens the door to forgiveness. This is not a prayer that assumes Israel will never fail. It is a prayer that assumes failure and points to the way back: turning, confessing, praying.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              35,
              'When heaven is shut up, and there is no rain, because they have sinned against thee; if they pray toward this place, and confess thy name, and turn from their sin, when thou afflictest them:'
            ),
            plain(
              36,
              'Then hear thou in heaven, and forgive the sin of thy servants, and of thy people Israel, that thou teachest them the good way wherein they should walk, and give rain upon thy land, which thou hast given to thy people for an inheritance.'
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              37,
              'If there be in the land famine, if there be pestilence, blasting, mildew, locust, or if there be caterpillers; if their enemies besiege them in the land of their cities; whatsoever plague, whatsoever sickness there be;'
            ),
            plain(
              38,
              'What prayer and supplication soever be made by any man, or by all thy people Israel, which shall know every man the plague of his own heart, and spread forth his hands toward this house:'
            ),
            plain(39, 'Then hear thou in heaven thy dwelling place, and forgive, and do, and give to every man according to his ways, whose heart thou knowest; (for thou, even thou only, knowest the hearts of all the children of men;)'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-all-plagues',
          html:
            'Solomon names all the griefs a nation can suffer: famine, pestilence, blight, mildew, locusts, siege, every plague and sickness. And to each, he adds the same response: if they pray toward this place, confess their sin, and turn from it, then God will hear and forgive. The Temple becomes a house of mercy for every kind of human suffering. The prayers made here are not the prayers of the righteous alone, but the prayers of those who "know every man the plague of his own heart." Those who come are those who have felt the weight of their own failure and cry out for forgiveness.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              41,
              'Moreover concerning a stranger, that is not of thy people Israel, but cometh out of a far country for thy name&apos;s sake;'
            ),
            plain(42, '(For they shall hear of thy great name, and of thy strong hand, and of thy stretched out arm;) when he shall come and pray toward this house;'),
            plain(
              43,
              'Hear thou in heaven thy dwelling place, and do according to all that the stranger calleth to thee for: that all people of the earth may know thy name, to fear thee, as do thy people Israel; and that they may know that this house, which I have built, is called by thy name.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-stranger-prayer',
          html:
            'Here is one of the most extraordinary moments in Solomon&apos;s prayer. He prays not only for Israel, but for "the stranger that is not of thy people Israel, but cometh out of a far country for thy name&apos;s sake." The Temple, he says, is not only for the chosen people. A foreigner, who has heard of God&apos;s great name and come seeking, shall also be heard. "That all people of the earth may know thy name, to fear thee." The Temple is not a fortress of exclusivity. It is a house where all nations may come and find God. This is a vision of universal mission embedded in the very moment of the Temple&apos;s dedication.',
        },
        {
          kind: 'christ',
          id: '1k8-christ-stranger-pentecost',
          title: 'Christ Connection — The Stranger at Pentecost',
          html:
            'Solomon prays that the stranger from a far country will come and be heard. That prayer is answered at Pentecost. Jews and foreigners gathered from "every nation under heaven" (Acts 2:5). They heard the mighty works of God, each in their own language. Peter proclaimed the gospel, and they asked, "What shall we do?" and were baptized. The barriers between Israel and the nations were broken. The stranger&apos;s prayer, prayed at the Temple in Jerusalem, is answered in the outpouring of the Spirit. What the physical Temple foreshadowed, the risen Christ accomplishes: He becomes the place where all nations may come and find God (John 4:21–24).',
        },
        {
          kind: 'carry',
          html:
            'Solomon&apos;s prayer reminds us that God&apos;s desire to be found is universal. He longs for the prayers of the foreigner as much as the prayers of the chosen. He hears the cry of the stranger. In your own faith, how do you hold both the conviction that God called you and the truth that His love extends to all people? How does the universality of God&apos;s mercy transform the way you think about your own belonging?',
        },
        {
          kind: 'reflection',
          id: '1k8-prayer-reflection',
          prompt:
            'Solomon prayed that strangers from far countries would come to the Temple and be heard. In what ways have you felt like the outsider seeking God? How has God answered that seeking?',
        },
      ],
    },

    /* ─── 1 Kings 8:54–66 — The Blessing and the Feast ─────────────────── */
    {
      ref: '1 Kings 8:54–66',
      title: 'The Blessing and the Feast',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              54,
              'And it was so, that when Solomon had made an end of praying all this prayer and supplication unto the Lord, he arose from before the altar of the Lord, from kneeling on his knees with his hands spread up to heaven.'
            ),
            plain(
              55,
              'And he stood, and blessed all the congregation of Israel with a loud voice, saying,'
            ),
            plain(
              56,
              'Blessed be the Lord, that hath given rest unto his people Israel, according to all that he promised: there hath not failed one word of all his good promise, which he promised by the hand of Moses his servant.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-not-failed',
          html:
            'Solomon rises from his knees and blesses the people. His blessing is a confession: "There hath not failed one word of all his good promise." Every word spoken by God through Moses has been fulfilled. The people have been brought into the land. The Temple has been built. Rest has been given. This blessing is not wishful thinking. It is testimony to what God has already done.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(57, 'The Lord our God be with us, as he was with our fathers: let him not leave us, nor forsake us:'),
            plain(
              58,
              'That he may incline our hearts unto him, to walk in all his ways, and to keep his commandments, and his statutes, and his judgments:'
            ),
            plain(59, 'And let these words of my supplication, wherewith I have made supplication before the Lord, be nigh unto the Lord our God day and night, that he maintain the cause of his servant, and the cause of his people Israel at all times, as the matter shall require:'),
            plain(
              60,
              'That all the people of the earth may know that the Lord is God, and that there is none else.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-final-blessing',
          html:
            'Solomon&apos;s final words draw the blessing inward, to the hearts of the people. He asks God to "incline our hearts unto him"—to turn the people&apos;s affection toward God, to make them walk in His ways. The blessing is not only that God will be with them, but that they will be inclined to want His presence, to keep His commandments, to walk in His statutes. And he prays that "all the people of the earth may know that the Lord is God, and that there is none else." The dedication of the Temple becomes a witness to all nations.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(62, 'And the king and all Israel with him offered sacrifice before the Lord.'),
            plain(
              63,
              'And Solomon offered a sacrifice of peace offerings, which he offered unto the Lord, two and twenty thousand oxen, and an hundred and twenty thousand sheep. So the king and all the people of Israel dedicated the house of the Lord.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-massive-sacrifice',
          html:
            'The sacrifices offered are staggering: 22,000 oxen and 120,000 sheep. The sheer scale suggests that Solomon has made the Temple&apos;s dedication a national event of unprecedented magnitude. Every person brings something. Every family has a part in the offering. The dedication is not only a royal ceremony; it is a corporate act of the whole people.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              64,
              'The same day did the king hallow the middle of the court that was before the house of the Lord: for there he offered burnt offerings, and meat offerings, and the fat of the peace offerings: because the brasen altar that was before the Lord was too little to contain the burnt offerings, and meat offerings, and the fat of the peace offerings.'
            ),
            plain(
              65,
              'And at that time Solomon held a feast, and all Israel with him, a great congregation, from the entering in of Hamath unto the river of Egypt, before the Lord our God, seven days and seven days, even fourteen days.'
            ),
            plain(
              66,
              'On the eighth day he sent the people away: and they blessed the king, and went unto their tents joyful and glad of heart for all the goodness that the Lord had done for David his servant, and for Israel his people.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1k8-fourteen-days-feast',
          html:
            'The feast lasts fourteen days—seven days for the dedication of the altar, and seven more days. The number fourteen is significant: seven is the number of completion, of rest. Fourteen is completion doubled. The celebration is not hurried. It is sustained, expansive, overflowing with joy. And on the eighth day, a new beginning, Solomon sends the people away. They depart "joyful and glad of heart for all the goodness that the Lord had done for David his servant, and for Israel his people." The goodness is both past and present, personal and national.',
        },
        {
          kind: 'hebrew',
          id: '1k8-aron',
          title: 'Aron — "Ark" or "Covenant Box"',
          script: 'אָרוֹן',
          translit: '<strong>Aron</strong> · ark; chest; receptacle; covenantal container',
          description:
            'The word "aron" means a box or chest. But the aron of the covenant is not merely a box. It is the container of God&apos;s word—the two tablets. It is the place over which the cherubims spread their wings. It is the focus of the Temple&apos;s holiest space. What seems like a simple wooden box, covered with gold, becomes the place where heaven and earth intersect.',
        },
        {
          kind: 'carry',
          html:
            'Fourteen days. Two weeks of unbroken celebration. This is what surplus joy looks like. This is what happens when a people has reason to believe that God is with them, that His promises are true, that the future is secure. The Temple feast is not a moment of tension or fear. It is rest, abundance, gladness. In your own spiritual life, when have you known that kind of sustained joy? What was required for you to enter into it?',
        },
        {
          kind: 'reflection',
          id: '1k8-feast-reflection',
          prompt:
            'Solomon and all Israel celebrated for fourteen days. What does extended, sustained celebration suggest about their relationship with God? When have you felt that kind of deep, lasting joy?',
        },
      ],
    },

    /* ─── 1 Kings 8:1–66 — Synthesis ──────────────────────────────────── */
    {
      ref: '1 Kings 8 Overview',
      title: 'The Temple Dedicated',
      blocks: [
        {
          kind: 'commentary',
          id: '1k8-synthesis',
          html:
            'The dedication of the Temple marks the apex of Israel&apos;s glory under Solomon. The ark is brought up. The cloud fills the house. Solomon, the wisest king, stands before the people and speaks a theology of both transcendence and immanence: God dwells in thick darkness, so great that the heaven of heavens cannot contain Him. Yet He chooses to dwell in the Temple. He chooses to hear the prayers of the righteous and the repentant, the native-born and the stranger. And He asks for one thing: that the people walk before Him with all their hearts. The dedication is not the end of a story but the threshold of another story—the story of whether Israel will keep the covenant or break it, of whether the Temple will remain a place of God&apos;s presence or become a place of hollow ritual. Solomon prays as if he already knows this story will unfold in heartbreak and exile. But he also prays with the confidence that even in exile, even in the darkest hour, God will hear the prayer of a repentant people and bring them home.',
        },
        {
          kind: 'christ',
          id: '1k8-christ-full',
          title: 'Christ Connection — The Fulfillment of the Temple',
          html:
            'The Temple was the place where God dwelt. The cloud filled it. The priests could not stand to minister. The sacrifices were without number. But it was always a shadow of what was to come. Jesus teaches that He is the Temple (John 2:19–21). His body is the dwelling place of God. When He rises from the dead, He ushers in a new kind of presence—no longer localized to one building in one city, but available everywhere His Spirit is poured out. On Pentecost, the Shekinah that filled the Temple descends as the Holy Spirit, filling the believers, making them all a "holy temple in the Lord" (Ephesians 2:21). What Solomon prayed for—that God would hear the prayers of a repentant people, that the stranger would be heard, that God would dwell in the midst of His people—is fulfilled not in a building but in the Body of Christ.',
        },
        {
          kind: 'carry',
          html:
            'You are the temple. The Spirit of God dwells in you. Not because you are magnificent or worthy, but because God has chosen to make His presence manifest in you, just as He chose to fill Solomon&apos;s Temple with His cloud. The question Solomon asked—"Will God indeed dwell on the earth?"—is answered in your body. He will not leave you. He will not forsake you. But as Solomon prayed, the question remains: Will your heart be inclined toward Him? Will you walk before Him with all your heart?',
        },
        {
          kind: 'reflection',
          id: '1k8-you-are-temple',
          prompt:
            'Paul writes, "Know ye not that ye are the temple of the Holy Ghost?" (1 Corinthians 6:19). What does it mean to you that God dwells in you, not in a building made of stone?',
        },
      ],
    },
  ],
};
