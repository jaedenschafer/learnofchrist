import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 6 — Solomon's Dedication Prayer
 *
 * The Chronicler's account of Solomon's Temple dedication is nearly identical
 * to 1 Kings 8, but with a crucial addition: a bronze platform on which
 * Solomon stands, kneels, and spreads his hands toward heaven. From this
 * platform — like a pulpit — he blesses Israel and offers a prayer that
 * spans every human need: drought, defeat in battle, famine, plague, exile,
 * and the stranger from a far country. In the great theological moment,
 * Solomon asks the question that haunts all religion: "Will God in very deed
 * dwell with men on the earth?" His answer, embedded in centuries of
 * anticipation, finds its fulfillment in Christ: God does dwell with men,
 * in flesh, in the Incarnate Word. And His prayer for the stranger is
 * answered at Pentecost, when the Spirit fills believers from every nation.
 */
export const CHRONICLES_2_6: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 6,

  intros: [
    'Solomon has completed what David could not: the Temple of the Lord stands finished, more magnificent than any building on earth. The ark has been brought into its holy place. The cloud of God&apos;s presence fills the house. And now Solomon turns to bless the entire congregation of Israel. But before he offers the prayers that will shape a nation&apos;s faith for centuries, the Chronicler adds a detail that changes how we see this moment. Solomon climbs onto a bronze platform, spreads his hands toward heaven, kneels before all the people, and lifts his prayer. He stands at the threshold between heaven and earth, between God and God&apos;s people.',
    'What follows is not a prayer of triumph or certainty. It is a prayer that already envisions Israel&apos;s failure, exile, and longing. Solomon prays as if he can see the future — a future in which his people will turn from God, be scattered, and from exile, turn back and cry out. And he prays with absolute confidence that God will hear them. In this prayer, every human need becomes sacred. Drought becomes a door to repentance. Defeat becomes a summons to confession. Even the stranger from a far country, unknown to Israel, is included in the scope of God&apos;s mercy. This is a prayer that makes the Temple not a fortress of the chosen, but a house of prayer for all peoples.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 6',
    quote:
      'Will God in very deed dwell with men on the earth? Behold, heaven and the heaven of heavens cannot contain thee; how much less this house which I have built! Yet have thou respect unto the prayer of thy servant.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 6 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 6:1–11 — Solomon's Blessing of God ──────────────── */
    {
      ref: '2 Chronicles 6:1–11',
      title: 'Solomon\'s Blessing of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'Then said Solomon, The Lord hath said that he would dwell in the thick darkness.'),
            plain(2, 'But I have built an house of habitation for thee, and a place for thy dwelling for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2c6-thick-darkness',
          html:
            'Solomon opens with a theology of divine transcendence. The Lord dwells in thick darkness — not in accessible light, not in comfort, but in the density and mystery of His own being. This echoes the revelation at Sinai, where God spoke from the cloud. Yet into this darkness, into the mystery of the divine, Solomon has built a house. Not to contain God, but as a place where God has chosen to make His presence known.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(3, 'And the king turned his face about, and blessed all the congregation of Israel: and all the congregation of Israel stood.'),
            {
              number: 4,
              spans: [
                t('And he said, Blessed be the Lord God of Israel, who hath with his hands fulfilled that which he spake with his mouth to my father David, saying,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Since the day that I brought forth my people out of the land of Egypt I chose no city among all the tribes of Israel to build an house in, that my name might be there; neither chose I any man to be a ruler over my people Israel:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('But I have chosen Jerusalem, that my name might be there; and have chosen David to be over my people Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2c6-blessing-fulfilled',
          html:
            'Solomon turns and blesses the people. He recounts the covenant promise: that God spoke to David, and that David longed to build a house, but that God chose Solomon, his son, to build it. Every word God spoke has been fulfilled. The promise made in secret, in the anointing of a shepherd boy, now stands visible before all Israel in stone and gold and cedar.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 7,
              spans: [
                t('Now it was in the heart of David my father to build an house for the name of the Lord God of Israel.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But the Lord said to David my father, Forasmuch as it was in thine heart to build an house for my name, thou didst well in that it was in thine heart:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Notwithstanding thou shalt not build the house; but thy son which shall come forth out of thy loins, he shall build the house for my name.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('The Lord therefore hath performed his word that he hath spoken: for I am risen up in the room of David my father, and am set on the throne of Israel, as the Lord promised, and have built the house for the name of the Lord God of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2c6-risen-up',
          html:
            'The phrase "I am risen up in the room of David my father" is stunning. Solomon does not say "I am better than my father" or "I have surpassed him." He says he has taken up his father&apos;s place, inherited his calling. Solomon is the one fulfilling what David could not do. This is how succession works in God&apos;s kingdom: not through the ambition of the son, but through the completion of the father&apos;s unfinished longing. What David could not build, his son builds. What David could not accomplish, Solomon accomplishes — standing in the room David vacated.',
        },
        {
          kind: 'carry',
          html:
            'God often says "not now, but later" to our deepest desires. David longed to build the Temple but could not. His son did it. Sometimes our greatest prayers are answered not by us, but by those who come after us. Sometimes we are called to plant seeds we will not see bear fruit. Can you release a longing, trusting that God will fulfill it through others?',
        },
        {
          kind: 'reflection',
          id: '2c6-blessing-reflection',
          prompt:
            'David wanted to build the Temple but God said no. Solomon, his son, built it instead. Have you ever had to release a longing and trust that God would fulfill it through someone else? What was that like?',
        },
      ],
    },

    /* ─── 2 Chronicles 6:12–18 — The Bronze Platform and the Great Question */
    {
      ref: '2 Chronicles 6:12–18',
      title: 'The Bronze Platform and the Great Question',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 12,
              spans: [
                t('And he stood before the altar of the Lord in the presence of all the congregation of Israel, and spread forth his hands toward heaven:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('For Solomon had made a brasen scaffold, of five cubits long, and five cubits broad, and three cubits high, and had set it in the midst of the court: and upon it he stood, and kneeled down upon his knees before all the congregation of Israel, and spread forth his hands toward heaven,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2c6-bronze-platform',
          html:
            'The Chronicler adds this detail that 1 Kings does not give us: Solomon stands on a bronze platform — a raised pulpit, visible to all Israel. It is five cubits in all dimensions, a perfect square (roughly 7.5 feet on each side, 4.5 feet high). Bronze, the metal of judgment and covenant, holds him as he stands. And from this place, Solomon does something extraordinary — he kneels. The king, the wisest of all men, kneels before the people and before God. His hands are spread toward heaven. This is the posture of the intercessor, the priest, the one who stands between God and the people.',
        },
        {
          kind: 'hebrew',
          id: '2c6-shakan',
          title: 'Shakan — "To Dwell" or "To Tabernacle"',
          script: 'שָׁכַן',
          translit: '<strong>Shakan</strong> · to dwell; to tabernacle; to settle; to become a neighbor',
          description:
            'The word "shakan" means to dwell, to pitch a tent, to become a neighbor. From this root comes "shekinah" — the very presence of God. When Solomon asks if God will dwell (shakan) in a house made with hands, he is using the language of presence, of God becoming neighbor to His people. God does not merely oversee from a distance; He comes near. He pitches His tent among us.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 14,
              spans: [
                t('And said, O Lord God of Israel, there is no God like thee in the heaven, nor in the earth; which keepest covenant, and shewest mercy unto thy servants, that walk before thee with all their hearts:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Thou which hast kept with thy servant David my father that thou hast promised him; and spakest with thy mouth, and hast fulfilled it with thine hand, as it is this day.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Now therefore, O Lord God of Israel, keep with thy servant David my father that thou promisedst him, saying, There shall not fail thee a man in my sight to sit upon the throne of Israel; yet so that thy children take heed to their way to walk in my law, as thou hast walked before me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2c6-no-god-like-thee',
          html:
            'Solomon opens his prayer with adoration. There is no God like the God of Israel. Not just more powerful, but utterly unique in covenant-keeping and mercy. He has kept His word to David. Everything He spoke, He fulfilled. And now Solomon asks God to keep the covenant — to ensure that David&apos;s descendants will sit upon the throne, on one condition: "if thy children take heed to their way to walk in my law." The covenant is conditional. Blessing flows from obedience.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 17,
              spans: [
                t('Now then, O Lord God of Israel, let thy word be verified, which thou spakest unto David my father.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('But will God in very deed dwell with men on the earth? behold, heaven and the heaven of heavens cannot contain thee; how much less this house which I have built!'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2c6-heaven-of-heavens',
          html:
            'Here is the theological heart of the moment. Solomon has just built the most magnificent Temple on earth. The cloud of God&apos;s presence fills it. Yet he asks a question that relativizes all of it: "Will God in very deed dwell with men on the earth? Behold, heaven and the heaven of heavens cannot contain thee; how much less this house which I have built!" The heights of all heights cannot hold the infinite God. The universe itself is too small. Yet—He chooses to dwell here. Not because this house is adequate to contain Him, but because He chooses to make His presence manifest in it. The house does not contain God; God chooses to be found in the house.',
        },
        {
          kind: 'christ',
          id: '2c6-christ-incarnation',
          title: 'Christ Connection — "The Word Made Flesh"',
          html:
            'Solomon asks the great question of every age: Will God dwell with men on the earth? The answer comes in the Incarnation. "In the beginning was the Word, and the Word was with God, and the Word was God... And the Word was made flesh, and dwelt among us" (John 1:1, 14). The Greek word for "dwelt" is "eskenosen" — He pitched His tent among us, He tabernacled with us. The same divine presence that filled Solomon&apos;s Temple, the Shekinah, took human flesh and walked among us. Jesus is the answer to Solomon&apos;s question. In Him, God does indeed dwell with men on the earth.',
        },
        {
          kind: 'carry',
          html:
            'Solomon&apos;s question echoes in every age: Will God indeed dwell in this place? In this church? In this home? In this heart? The answer is always the same: not because the place is grand enough or worthy enough, but because God chooses to be found here. When you gather with others in His name, there He is. In the stillness of your own heart when you cry out to Him, there He is. Not because you are magnificent, but because He loves to dwell where He is welcomed.',
        },
        {
          kind: 'reflection',
          id: '2c6-dwell-reflection',
          prompt:
            'Solomon wondered whether God would truly dwell in a house made by human hands. In what ways have you experienced God dwelling in unexpected places — in your heart, in a moment of need, in a community of believers?',
        },
      ],
    },

    /* ─── 2 Chronicles 6:19–30 — Hear from Heaven, Thy Dwelling Place ────── */
    {
      ref: '2 Chronicles 6:19–30',
      title: 'Hear from Heaven, Thy Dwelling Place',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              19,
              'Have respect therefore to the prayer of thy servant, and to his supplication, O Lord my God, to hearken unto the cry and the prayer which thy servant prayeth before thee:'
            ),
            plain(
              20,
              'That thine eyes may be open upon this house day and night, upon the place of which thou hast said, My name shall be there; to hearken unto the prayer which thy servant shall make toward this place.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2c6-eyes-open',
          html:
            'Solomon asks God to keep His eyes open toward the Temple "night and day." This is the language of constant watchfulness, of attentiveness. When the people pray toward this place, Solomon asks, God will hear. But then Solomon adds something crucial: "hear thou in heaven thy dwelling place." God&apos;s true and ultimate dwelling place is heaven. The Temple is where the people turn when they cry out. This house is where God has said His name shall be. But God dwells in heaven. And from His heavenly throne, He hears the prayers that rise from earth.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              21,
              'Hearken therefore unto the supplications of thy servant, and of thy people Israel, which they shall make toward this place: hear thou from thy dwelling place, even from heaven; and when thou hearest, forgive.'
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              22,
              'If a man sin against his neighbour, and an oath be laid upon him to cause him to swear, and the oath come before thine altar in this house;'
            ),
            plain(
              23,
              'Then hear thou from heaven, and do, and judge thy servants, by requiting the wicked, by recompensing his way upon his own head; and by justifying the righteous, by giving him according to his righteousness.'
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              24,
              'And if thy people Israel be put to the worse before the enemy, because they have sinned against thee, and shall return and confess thy name, and pray, and make supplication before thee in this house;'
            ),
            plain(
              25,
              'Then hear thou from the heavens, and forgive the sin of thy people Israel, and bring them again unto the land which thou gavest to them and to their fathers.'
            ),
          ],
        },
        {
          kind: 'carry',
          html:
            'Solomon prays as if he already knows what will happen: Israel will sin. They will be defeated. They will be exiled. But from exile, if they return and pray toward the Temple, God will hear them and bring them home. Solomon prays with eyes wide open to failure, yet with unshaken confidence in God&apos;s mercy. This is the prayer of one who understands that the future holds both judgment and redemption, and that God&apos;s ear is always open to the repentant cry.',
        },
        {
          kind: 'reflection',
          id: '2c6-defeat-reflection',
          prompt:
            'Solomon prayed for Israel even when they would turn from God and face defeat. Do you have people in your life for whom you pray, trusting that God will still reach them in exile, loss, or wandering?',
        },
      ],
    },

    /* ─── 2 Chronicles 6:26–39 — Every Plague, Every Need ────────────────── */
    {
      ref: '2 Chronicles 6:26–39',
      title: 'Every Plague, Every Human Need',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              26,
              'When the heaven is shut up, and there is no rain, because they have sinned against thee; yet if they pray toward this place, and confess thy name, and turn from their sin, when thou dost afflict them;'
            ),
            plain(
              27,
              'Then hear thou from heaven, and forgive the sin of thy servants, and of thy people Israel, that thou teach them the good way wherein they should walk, and send rain upon thy land, which thou hast given to thy people for an inheritance.'
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              28,
              'If there be dearth in the land, if there be pestilence, if there be blasting, or mildew, locusts, or caterpillars; if their enemies besiege them in the cities of their land; whatsoever sore or whatsoever sickness there be;'
            ),
            plain(
              29,
              'Then what prayer or what supplication soever shall be made of any man, or of all thy people Israel, when every one shall know his own sore and his own grief, and shall spread forth his hands in this house;'
            ),
            plain(
              30,
              'Then hear thou from heaven thy dwelling place, and forgive, and render unto every man according unto all his ways, whose heart thou knowest; (for thou only knowest the hearts of the children of men;)'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2c6-all-sorrows',
          html:
            'Solomon names every grief a nation can suffer: drought and famine, pestilence and plague, blight and mildew, locusts and caterpillars, siege and war, sickness of every kind. The catalogue is exhaustive. And to each, Solomon adds the same response: if the people pray toward this place, confess their name, and turn from their sin, then God will hear and forgive. The Temple becomes a house of mercy for every kind of human suffering. And notice the condition: "when every one shall know his own sore" — when a person has encountered their own failure, their own grief, their own limitation. The prayers that rise from this house are the prayers of those who have felt the weight of their own need.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              31,
              'If a man sin against his neighbour, and an oath be laid upon him to cause him to swear, and the oath come before thine altar in this house;'
            ),
            plain(
              32,
              'Then hear thou from heaven, and do, and judge thy servants, by requiting the wicked, by recompensing his way upon his own head; and by justifying the righteous, by giving him according to his righteousness.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2c6-between-men',
          html:
            'Solomon even prays for disputes between neighbors — when one man has sworn an oath against another, and the dispute comes to the Temple altar. The scope of the prayer is comprehensive. No human conflict is too small for God&apos;s attention. The Temple is not only a sanctuary for the nation; it is a place where personal grievance, neighborhood conflict, individual failure — all find an audience with heaven.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s mercy is not reserved for the grand gestures or the public moments. It reaches into every corner of human suffering. Your private grief. Your secret failure. Your neighbor conflict. Your drought. Your siege. All of it is known to God. All of it is welcome in prayer. The question Solomon asks is not "Will God care about the small sorrows?" but rather, "Where is the place where small sorrows are heard and healed?" The answer then was the Temple. The answer now is the throne of grace, always open, always listening.',
        },
        {
          kind: 'reflection',
          id: '2c6-sorrows-reflection',
          prompt:
            'Solomon prayed that God would hear every kind of human need — from national defeat to personal dispute, from drought to plague. What sorrow in your life feels too small or too shameful to bring to prayer? How might Solomon&apos;s prayer invite you to bring it?',
        },
      ],
    },

    /* ─── 2 Chronicles 6:32–39 — The Stranger from a Far Country ────────── */
    {
      ref: '2 Chronicles 6:32–39',
      title: 'The Stranger from a Far Country',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              32,
              'Moreover concerning a stranger, that is not of thy people Israel, but is come from a far country for thy name&apos;s sake; (for they shall hear of thy great name, and of thy strong hand, and of thy stretched out arm;) when he shall come and pray toward this house;'
            ),
            plain(
              33,
              'Hear thou from the heavens, even from thy dwelling place, and do according to all that the stranger calleth to thee for: that all people of the earth may know thy name, and fear thee, as do thy people Israel, and that they may know that this house which I have built is called by thy name.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2c6-stranger-prayer',
          html:
            'Here is one of the most extraordinary moments in Solomon&apos;s prayer. He prays not only for Israel, but for the stranger — "not of thy people Israel, but is come from a far country for thy name&apos;s sake." This foreigner has heard of God&apos;s great name and strong hand. He comes seeking. And Solomon prays: Hear him. Do according to all that he calls for. "That all people of the earth may know thy name, to fear thee, as do thy people Israel." The Temple, in this moment of its dedication, is unveiled as not a fortress of exclusivity, but a house where all nations may come and find God. This is mission embedded in prayer.',
        },
        {
          kind: 'hebrew',
          id: '2c6-nokhri',
          title: 'Nokhri — "The Stranger" or "The Foreigner"',
          script: 'נָכְרִי',
          translit: '<strong>Nokhri</strong> · stranger; foreigner; one from another land',
          description:
            'The word "nokhri" means a foreigner, someone from another land, someone not of the covenant people. Yet Solomon, standing in the Temple of Israel&apos;s God, prays specifically that this outsider will be heard. This is radical hospitality embedded in theology. The prayer says: God&apos;s ears are open even to those who do not belong to Israel by birth. Belonging is defined not by ethnicity but by seeking, by calling, by the willingness to turn toward God&apos;s name.',
        },
        {
          kind: 'christ',
          id: '2c6-christ-pentecost',
          title: 'Christ Connection — The Stranger at Pentecost',
          html:
            'Solomon prays that the stranger from a far country will come and be heard. That prayer is answered at Pentecost. "And there were dwelling at Jerusalem Jews, devout men, out of every nation under heaven... And when this sound was heard, the multitude came together, and were confounded, because that every man heard them speak in his own language. And they were all amazed and marvelled, saying one to another, Behold, are not all these which speak Galilaeans? And how hear we every man in our own tongue, wherein we were born?... And how hear we... the wonderful works of God?... And Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins: and ye shall receive the gift of the Holy Ghost" (Acts 2:5–8, 11, 38). The barriers between Israel and the nations were broken. The stranger&apos;s prayer, prayed at the Temple in Jerusalem centuries before, was answered when God poured out His Spirit on all flesh.',
        },
        {
          kind: 'carry',
          html:
            'Solomon&apos;s prayer reminds us that God&apos;s desire to be found is universal. He longs for the prayers of the foreigner as much as the prayers of the chosen. He hears the cry of the stranger. In your own faith, how do you hold both the conviction that God called you and the truth that His love extends to all people? Where is the place in your life where the outsider is welcomed? How does the universality of God&apos;s mercy transform the way you think about your own belonging?',
        },
        {
          kind: 'reflection',
          id: '2c6-stranger-reflection',
          prompt:
            'Solomon prayed that strangers from far countries would come to the Temple and be heard. In what ways have you felt like the outsider seeking God? How has God answered that seeking?',
        },
      ],
    },

    /* ─── 2 Chronicles 6:40–42 — "Remember the Mercies of David" ─────────── */
    {
      ref: '2 Chronicles 6:40–42',
      title: '"Remember the Mercies of David Thy Servant"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              40,
              'Now, my God, let, I beseech thee, thine eyes be open, and let thine ears be attent unto the prayer that is made in this place.'
            ),
            plain(
              41,
              'Now therefore arise, O Lord God, into thy resting place, thou, and the ark of thy strength: let thy priests, O Lord God, be clothed with salvation, and let thy saints rejoice in goodness.'
            ),
            plain(
              42,
              'O Lord God, turn not away the face of thine anointed: remember the mercies of David thy servant.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2c6-anointed',
          html:
            'Solomon closes his prayer with a final petition: God, turn not away the face of thine anointed. Remember the mercies of David thy servant. He is asking God to remember David — not David&apos;s greatness, but the mercies shown to him. God showed David mercy in exile, mercy in failure, mercy in his longing to build what he could not build. And Solomon asks: Show that same mercy to me. Show it to my descendants. The final prayer points to a future anointed one — David&apos;s ultimate heir — in whom all these prayers would be answered and transcended.',
        },
        {
          kind: 'hebrew',
          id: '2c6-chesed',
          title: 'Chesed — "Mercy" or "Covenant Loyalty"',
          script: 'חֶסֶד',
          translit: '<strong>Chesed</strong> · mercy; loving-kindness; covenant loyalty; steadfast love',
          description:
            'The word "chesed" is perhaps the most important word in the Hebrew Bible for understanding God&apos;s character. It is not merely mercy in the sense of "not getting what you deserve." It is covenant loyalty — God&apos;s promise to stick with His people even when they fail, even when they turn away, even in exile. Solomon closes by asking God to remember this divine chesed — the mercies that kept David alive, that brought him to the throne, that sustained him through everything. And implicitly, Solomon is asking that this chesed be extended to David&apos;s line forever.',
        },
        {
          kind: 'christ',
          id: '2c6-christ-anointed',
          title: 'Christ Connection — The Ultimate Anointed One',
          html:
            'Solomon closes by praying for "thine anointed" — a prayer that echoes beyond Solomon himself, beyond his dynasty, to the ultimate Anointed One, the Messiah, the Christ. "Remember the mercies of David thy servant." This prayer points toward Jesus, "the Son of David," the ultimate heir to David&apos;s throne. All of Solomon&apos;s prayer — for the people to turn from sin and be forgiven, for the stranger to be heard, for God to dwell with men — finds its deepest answer in Christ. He is the mercy remembered. He is the anointed. He is the place where every prayer finds its answer. In Him, the Temple is both fully realized and finally transcended. He becomes the mercy seat, the place where God and man are reconciled.',
        },
        {
          kind: 'carry',
          html:
            'Solomon&apos;s prayer ends not with certainty, but with a petition: Remember. This word "remember" is not about God forgetting and needing to be reminded. It is the language of covenant invocation. It is saying: Let what You promised be active again. Let Your mercy be at work. When life feels far from God, when the Temple seems silent, when hope is exile, the prayer is still open: Remember thy mercies. Remember thy covenant. Remember thy anointed. And in remembering, God meets us again.',
        },
        {
          kind: 'reflection',
          id: '2c6-remember-reflection',
          prompt:
            'Solomon&apos;s prayer ends with "Remember the mercies of David thy servant." When have you needed to ask God to remember His mercies — to His people, to a lineage, to you? What does it mean to call on God to remember?',
        },
      ],
    },

    /* ─── 2 Chronicles 6:1–42 — Synthesis ──────────────────────────────── */
    {
      ref: '2 Chronicles 6 Overview',
      title: 'The Prayer That Shapes a Nation',
      blocks: [
        {
          kind: 'commentary',
          id: '2c6-synthesis',
          html:
            'The dedication of the Temple marks the apex of Israel&apos;s glory under Solomon. The ark is brought up. The cloud fills the house. Solomon, standing on a bronze platform like a priest-king, spreads his hands toward heaven and speaks a theology that will echo through the centuries. God dwells in thick darkness, so transcendent that even heaven of heavens cannot contain Him. Yet He chooses to dwell in the Temple. He chooses to hear the prayers of the righteous and the repentant, the native-born and the stranger. And He asks for one thing: that the people walk before Him with all their hearts. The dedication is not the end of a story but the threshold of another story — the story of whether Israel will keep the covenant or break it, of whether the Temple will remain a place of God&apos;s presence or become a place of hollow ritual. Solomon prays as if he already knows this story will unfold in heartbreak and exile. But he also prays with absolute confidence that even in exile, even in the darkest hour, God will hear the prayer of a repentant people and bring them home. The prayer is not a hymn of triumph; it is a prayer for a people whose future will be tested, broken, and restored. And in that restoration lies the deepest truth of Solomon&apos;s vision: God&apos;s covenant is not based on human perfection, but on divine mercy. And that mercy is extended even to the stranger, even to the one who comes from a far country seeking God&apos;s name.',
        },
        {
          kind: 'christ',
          id: '2c6-christ-full',
          title: 'Christ Connection — God Dwells With Men',
          html:
            'The Temple was the place where God dwelt. The cloud filled it. The priests could not stand to minister. The sacrifices were without number. But it was always a shadow of what was to come. Solomon asked: "Will God in very deed dwell with men on the earth?" Jesus answers that question in the Incarnation. "And the Word was made flesh, and dwelt among us" (John 1:14). God does dwell on earth — in human flesh, in Christ. And when He rises from the dead, He ushers in a new kind of presence — no longer localized to one building in one city, but available everywhere His Spirit is poured out. On Pentecost, the Shekinah that filled the Temple descends as the Holy Spirit, filling the believers from every nation, making them all "a holy temple in the Lord" (Ephesians 2:21). What Solomon prayed for — that God would hear the prayers of a repentant people, that the stranger would be welcomed, that the anointed one would reign forever — is fulfilled not in a building but in the Body of Christ, the Church, the communion of saints from every nation under heaven.',
        },
        {
          kind: 'carry',
          html:
            'You are the temple. The Spirit of God dwells in you. Not because you are magnificent or worthy, but because God has chosen to make His presence manifest in you, just as He chose to fill Solomon&apos;s Temple with His cloud. The question Solomon asked — "Will God indeed dwell on the earth?" — is answered in your body. He will not leave you. He will not forsake you. But as Solomon prayed, the question remains: Will your heart be inclined toward Him? Will you walk before Him with all your heart? That is the question the dedication of your life answers every day.',
        },
        {
          kind: 'reflection',
          id: '2c6-you-are-temple',
          prompt:
            'Solomon asked whether God would dwell in a house made by human hands. Paul writes, "Know ye not that ye are the temple of the Holy Ghost?" (1 Corinthians 6:19). What does it mean to you that God chooses to dwell in you?',
        },
      ],
    },
  ],
};
