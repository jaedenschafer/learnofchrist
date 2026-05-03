import { hp, hy, hg, t, type RichChapterContent } from './types';

export const LEVITICUS_8: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 8,

  estimatedMinutes: { beginner: 9, intermediate: 13, deep: 17 },
  intros: [
    'Leviticus 8 is the enactment of Exodus 29. Where Exodus commanded the priesthood, Leviticus shows it happening. Aaron and his sons are brought to the door of the tabernacle, washed, dressed, anointed, and marked with blood — on the right ear to hear God&apos;s word, on the right thumb to work His will, on the right big toe to walk His path. The chapter is ritual made visible, each movement a sign of what it means to be set apart.',
    'For seven days they remain at the door of the tent, not yet stepping fully inside. They are consecrated but not yet commissioned. The waiting itself is part of the work. Every animal offered — the bull for sin, the ram of burnt offering, the second ram of consecration with its blood on ear and thumb and toe — carries forward the logic of substitution: this life, poured out on your behalf, marks you as belonging to God. For the Christian reader, every line points to the high priest who needed no such ritual because He IS the anointing, the unblemished offering, the one whose blood marks us clean.',
  ],

  sections: [
    /* ─── Leviticus 8:1–4 — The Summons ──────────────────────────────────── */
    {
      ref: 'Leviticus 8:1–4',
      title: 'The Summons',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Take Aaron and his sons with him, and the garments, and the anointing oil, and a bullock for the sin offering, and two rams, and a basket of unleavened bread;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And gather thou all the congregation together unto the '),
                hg('door of the tabernacle of the congregation', 'lev8-door'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And Moses did as the Lord commanded him; and the assembly was gathered together unto the door of the tabernacle of the congregation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev8-door',
          html:
            'The door of the tabernacle is the threshold between the ordinary and the holy. Nothing sacred in Israel&apos;s life happens in secret or in shadow. The people gather to <em>see</em> Aaron and his sons being set apart. The priesthood is not a hidden office bestowed in darkness; it is a public marking, witnessed by the whole assembly.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s work of setting you apart is not meant to be hidden either. The people around you should be able to see, in your hearing and your work and your walking, that you belong to God. That doesn&apos;t mean performing for an audience. It means living in the open, letting your life speak what your consecration means.',
        },
        {
          kind: 'reflection',
          id: 'lev8-summons',
          prompt: 'Who in your life can see that you belong to God? What would it look like to let your consecration be more visible?',
        },
      ],
    },

    /* ─── Leviticus 8:5–9 — Washed and Clothed ───────────────────────────── */
    {
      ref: 'Leviticus 8:5–9',
      title: 'Washed and Clothed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 5,
              spans: [
                t('And Moses said unto the congregation, This is the thing which the Lord commanded to be done.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Moses brought Aaron and his sons, and '),
                hg('washed them with water', 'lev8-wash'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And he put upon him '),
                hy('the coat, and girded him with the girdle', 'lev8-coat'),
                t(', and clothed him with the robe, and put the ephod upon him, and he girded him with the curious girdle of the ephod, and bound it unto him therewith.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he put the breastplate upon him: also he put in the breastplate the Urim and the Thummim.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And he put the mitre upon his head; also upon the mitre, even upon his forefront, did he put the golden plate, the holy crown; as the Lord commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev8-wash',
          html:
            'Water in Scripture is always a sign of separation — the Red Sea dividing, the Jordan crossing, baptism. Aaron and his sons are washed at the threshold, their ordinary life rinsed away. They cross from the assembly into a new vocation. The water is not for their own cleansing; it is for their setting-apart.',
        },
        {
          kind: 'hebrew',
          id: 'lev8-coat',
          title: 'Ketonet — &ldquo;coat&rdquo;',
          script: 'כְתֹנֶת',
          translit: '<strong>ketonet</strong> · a long tunic worn close to the body',
          description:
            'The priestly garments were specified in Exodus 28. Each layer signified a different aspect of the priest&apos;s office. Nothing about the priesthood was left to chance or decoration; everything was commanded, everything was symbolic.',
        },
        {
          kind: 'carry',
          html:
            'Your own consecration may not come with formal robes, but it comes with substance. God clothes His people — in righteousness, in authority, in purpose. The garments of a priest are never meant to be decorative ego. They are meant to be visible signs that say, "This person belongs to God, and stands before Him for others."',
        },
        {
          kind: 'reflection',
          id: 'lev8-dressed',
          prompt: 'What would it look like to step into your calling as deliberately and completely as Aaron stepped into these garments?',
        },
      ],
    },

    /* ─── Leviticus 8:10–13 — Anointed with Oil ──────────────────────────── */
    {
      ref: 'Leviticus 8:10–13',
      title: 'Anointed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 10,
              spans: [
                t('And Moses took the anointing oil, and '),
                hp('anointed the tabernacle and all that was therein', 'lev8-christ-oil'),
                t(', and sanctified them.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And he sprinkled thereof upon the altar seven times, and anointed the altar and all his vessels, both the laver and his foot, to sanctify them.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he poured of the anointing oil upon Aaron&apos;s head, and '),
                hy('anointed him', 'lev8-mashach'),
                t(', to sanctify him.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Moses brought Aaron&apos;s sons, and put coats upon them, and girded them with girdles, and put bonnets upon them; as the Lord commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev8-comm-oil',
          html:
            'The anointing oil is poured first on the tabernacle and its furniture, then on Aaron. The priest does not sanctify the place; the place sanctifies the priest. Aaron steps into a holiness already established. He joins a priesthood not of his own making, but of God&apos;s ordering. The oil on the altar seven times is the number of completion — the place where God meets His people is fully marked as His.',
        },
        {
          kind: 'greek',
          id: 'lev8-mashach',
          title: 'Mashach — &ldquo;anoint&rdquo;',
          script: 'מָשַׁח',
          translit: '<strong>mashach</strong> · to rub with oil, to set apart by anointing',
          description:
            '[res:sefaria-mashach-anointing] "Anointed one" in Hebrew is <em>mashiach</em> — the Messiah. Every king, every priest in Israel was anointed. It was the visible sign of God&apos;s choice. The anointing oil could not be mixed or poured on the common person; to do so was death (Ex. 30:31-33). This is why "Christ" (Greek for Messiah) means "the Anointed One."',
        },
        {
          kind: 'christ',
          id: 'lev8-christ-oil',
          title: 'Christ Connection — The Anointed One',
          html:
            '[res:intertextual-acts-10] Acts 10:38 says of Jesus: "God anointed him with the Holy Ghost and with power." Jesus is the Messiah — literally, the Anointed One. But unlike Aaron, who needed the oil poured on his head to signify his calling, Jesus <em>is</em> the anointing. He does not need an external mark to set Him apart; He is the oil itself. Hebrews 7:26-28 says He is "holy, harmless, undefiled, separate from sinners," made priest not by ritual but by "the word of the oath." Every anointing in Leviticus is a shadow of the one Anointed who would never need such shadows again. [res:sbl-priestly-anointing]',
        },
        {
          kind: 'carry',
          html:
            'You are not anointed by oil poured once. You are anointed by the indwelling Spirit of God, daily, constantly. That anointing is not limited to a priesthood that stands in a tent; it rests on every ordinary Christian who has put on Christ. Your calling is not sealed once and forgotten. It is renewed with every morning, every time you ask to be filled again.',
        },
        {
          kind: 'reflection',
          id: 'lev8-oil',
          prompt: 'What would change if you lived today as though the anointing that set you apart in God is being renewed in you right now?',
        },
        {
          kind: 'artwork',
          matchTitle: /consecration.*aaron.*sons/i,
          matchArtist: /holman.*hunt/i,
          caption: 'Leviticus 8:10–13 · Anointed with Oil',
        },
      ],
    },

    /* ─── Leviticus 8:14–21 — The Offerings ──────────────────────────────── */
    {
      ref: 'Leviticus 8:14–21',
      title: 'The Bull and the Rams',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 14,
              spans: [
                t('And he brought the bullock for the sin offering: and Aaron and his sons laid their hands upon the head of the bullock for the sin offering.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he slew it; and Moses took the blood, and put it upon the horns of the altar round about with his finger, and purged the altar: and poured the blood at the bottom of the altar, and sanctified it, to make reconciliation upon it.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he took all the fat that was upon the inwards, and the caul above the liver, and the two kidneys, and their fat, and Moses burned it upon the altar.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('But the bullock, and his hide, and his flesh, and his dung, he burnt with fire without the camp; as the Lord commanded Moses.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And he brought the ram for the burnt offering: and Aaron and his sons laid their hands upon the head of the ram.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And he slew it; and Moses sprinkled the blood upon the altar round about.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And he cut the ram into pieces; and Moses burnt the head, and the pieces, and the fat.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And he washed the inwards and the legs in water; and Moses burnt the whole ram upon the altar: it was a burnt sacrifice for a sweet savour, and an offering made by fire unto the Lord; as the Lord commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev8-bull-comm',
          html:
            'The bull carries the priests&apos; sin. They lay their hands on its head — a gesture of transfer, of laying their failure on the animal. The blood is applied to the horns of the altar, the place of God&apos;s power and judgment. The fat and inwards are burned; the rest is burned outside the camp, away from the holy place. Sin must be disposed of completely, outside the community. Nothing of the sin offering is eaten; the entire animal is destroyed.',
        },
        {
          kind: 'commentary',
          id: 'lev8-ram-comm',
          html:
            'The first ram is a burnt offering — wholly given to God, a sweet savor. Every part goes up in smoke. It is the priests&apos; gift, their whole life rising to God. The inwards and legs are washed, a detail that appears nowhere else. The priests will handle bloody work; the washing speaks of cleanness and care even in that work.',
        },
        {
          kind: 'carry',
          html:
            'When you lay hands on Christ in faith, you are transferring your sin. You are saying, "This life, poured out, stands in my place." And then, in response, you are meant to become a burnt offering yourself — not dying literally, but Romans 12 calls it your "living sacrifice," your whole self rising as fragrant worship to God. That is the rhythm: receive the mercy that comes through sacrifice, then offer yourself in response.',
        },
        {
          kind: 'reflection',
          id: 'lev8-offerings',
          prompt: 'What part of your life are you still holding back from God? What would it mean to present it as a burnt offering — entirely His?',
        },
      ],
    },

    /* ─── Leviticus 8:22–30 — The Ram of Consecration ─────────────────────── */
    {
      ref: 'Leviticus 8:22–30',
      title: 'The Ram of Consecration — Ear, Thumb, Toe',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 22,
              spans: [
                t('And he brought the other ram, the ram of consecration: and Aaron and his sons laid their hands upon the head of the ram.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And he slew it; and Moses took of the blood thereof, and put it upon the '),
                hy('tip of Aaron&apos;s right ear', 'lev8-ear'),
                t(', and upon the thumb of his right hand, and upon the great toe of his right foot.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And he brought Aaron&apos;s sons, and Moses put of the blood upon the tip of their right ears, and upon the thumbs of their right hands, and upon the great toes of their right feet: and Moses sprinkled the blood upon the altar round about.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And he took the fat, and the rump, and all the fat that was upon the inwards, and the caul above the liver, and the two kidneys, and their fat, and the right shoulder:'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And out of the basket of unleavened bread, that was before the Lord, he took one unleavened cake, and one cake of oiled bread, and one wafer, and put them on the fat, and upon the right shoulder:'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And he put all upon Aaron&apos;s hands, and upon his sons&apos; hands, and waved them for a wave offering before the Lord.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Moses took them from off their hands, and burnt them on the altar upon the burnt offering: they were consecrations for a sweet savour: it is an offering made by fire unto the Lord.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And Moses took the breast, and waved it for a wave offering before the Lord: for of the ram of consecration it was Moses&apos; part; as the Lord commanded Moses.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Moses took of the anointing oil, and of the blood which was upon the altar, and sprinkled it upon Aaron, and upon his garments, and upon his sons, and upon his sons&apos; garments with him; and sanctified Aaron, and his garments, and his sons, and his sons&apos; garments with him.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'lev8-ear',
          title: 'Ozen — &ldquo;ear&rdquo;',
          script: 'אֹזֶן',
          translit: '<strong>ozen</strong> · the ear, organ of hearing; by extension, the faculty of obedience',
          description:
            'Blood on the right ear marks the priest to <em>hear</em> God&apos;s word. Psalm 40:6 uses this image: "Mine ears hast thou opened" — when God gives you obedience, He gives you ears to hear His instruction. For a priest, the ear is the first instrument of his office.',
        },
        {
          kind: 'commentary',
          id: 'lev8-members',
          html:
            'Blood on the right ear, right thumb, right big toe. Three members, three capacities. The ear hears. The thumb works — it is the strongest digit, what grips and wields. The big toe walks — what grounds and carries you forward. The whole person — what you hear, what you do, where you go — is marked as belonging to God. And every mark is on the <em>right</em> side, the side of strength and blessing in biblical imagery.',
        },
        {
          kind: 'christ',
          id: 'lev8-christ-marks',
          title: 'Christ Connection — Marked in Hearing, Work, and Walking',
          html:
            'Romans 12:1-2 echoes the logic: "Present your bodies a living sacrifice… and be not conformed to this world." The priests&apos; bodies are marked — ear, thumb, toe — so that every movement belongs to God. Jesus says in John 10:27, "My sheep hear my voice" — marked in the ear. In Luke 1:35, the Spirit overshadows Mary, and she becomes the vessel of His work — marked in the thumb. And in Revelation 3:4, those who walk with Christ in white garments are those whose walk itself is consecrated. We are not marked by blood once; we are remade continually in hearing, working, and walking with Him.',
        },
        {
          kind: 'carry',
          html:
            'Your ears are for hearing the voice that calls you. Your hands are for work that serves Him. Your feet are for walking the path He has shown you. Not every step is dramatic or visible. Not every work feels significant. But every one of them — the small listening, the steady labor, the quiet faithfulness in motion — is marked as priestly. You are set apart not for someday or for an hour of worship. You are set apart for the ordinary movements of your actual day.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'lev8-marks',
          prompt: 'Where do you need to let God mark your hearing (what you listen to), your work (what you do with your hands), and your walking (where your feet are taking you)? Start with one.',
        },
        {
          kind: 'artwork',
          matchTitle: /fire.*atonement.*inaugural/i,
          matchArtist: /tissot/i,
          caption: 'Leviticus 8:22–30 · The Priestly Marks',
        },
      ],
    },

    /* ─── Leviticus 8:31–36 — Seven Days at the Door ──────────────────────── */
    {
      ref: 'Leviticus 8:31–36',
      title: 'Waiting at the Door',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 31,
              spans: [
                t('And Moses said unto Aaron and to his sons, Boil the flesh at the door of the tabernacle of the congregation: and there eat it with the bread that is in the basket of consecrations, as I commanded, saying, Aaron and his sons shall eat it.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And that which remaineth of the flesh and of the bread shall ye burn with fire.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And ye shall not go out of the door of the tabernacle of the congregation in seven days, '),
                hg('until the days of your consecration be at an end', 'lev8-seven'),
                t(': for seven days shall he consecrate you.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('As he hath done in this day, so the Lord hath commanded to do, to make an atonement for you.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('Therefore shall ye abide at the door of the tabernacle of the congregation day and night seven days, and keep the charge of the Lord, that ye die not: for so I am commanded.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('So Aaron and his sons did all things which the Lord commanded by the hand of Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev8-seven',
          html:
            'The priests do not step into the Holy Place on the first day. They wait seven days at the threshold. Seven is the number of completion in Scripture; the seventh day is rest, the day God stopped working. By making Aaron and his sons wait seven full days before fully entering their office, God is saying: your consecration is complete, but you must wait. The waiting itself is part of the work. They remain at the door, tending the fire, keeping watch, eating the meal of the offering, until the time is fully finished.',
        },
        {
          kind: 'commentary',
          id: 'lev8-keep-charge',
          html:
            '"Keep the charge of the Lord, that ye die not." The language is stark. To step beyond what God has commanded, or before the appointed time, is death. The priesthood is not play. It is not casual. Every boundary exists because something alive and true is at stake. Aaron and his sons obey. They do not try to enter early. They do not negotiate with the waiting.',
        },
        {
          kind: 'carry',
          html:
            'Your calling may require waiting too. Not every calling begins the moment you feel called. God often asks His people to wait — to finish your preparation, to learn patience, to watch others work before you step in. That waiting is not wasted time. It is the furnace in which you are actually being made fit. The burning at the door is refining you for the work inside.',
        },
        {
          kind: 'reflection',
          id: 'lev8-waiting',
          prompt: 'Is God asking you to wait before stepping into something He has called you to? What does it mean to "keep watch" while you wait?',
        },
        {
          kind: 'artwork',
          matchTitle: /destroyed.*nadab.*abihu/i,
          matchArtist: /tissot/i,
          caption: 'Leviticus 8:31–36 · Seven Days at the Door',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Aaron and his sons are washed, clothed, anointed with oil, and marked with blood on ear, thumb, and toe — set apart as priests for God. All consecration flows from this day, from the God who calls, the water that separates, the oil that anoints, and the blood that marks.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 8 · Study Guide',
  },

  resources: [
    {
      id: 'sbl-priestly-anointing',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Priestly Consecration and the Anointing with Oil',
      url: 'https://www.bibleodyssey.org/en/passages/article/priests-and-consecration',
      description: 'Study of the mashach (anointing) ceremony, the role of oil in priesthood, and the symbolism of separation for holy service.',
    },
    {
      id: 'sefaria-mashach-anointing',
      kind: 'archive',
      source: 'Sefaria',
      label: 'Mashach and the Anointed Priest in Tradition',
      url: 'https://www.sefaria.org/Leviticus.8',
      description: 'Rabbinic commentary on the priestly anointing and the etymology of Messiah from the anointing oil.',
    },
    {
      id: 'intertextual-acts-10',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Acts 10:38 — Jesus Anointed with the Holy Spirit',
      url: 'https://intertextual.logos.com/',
      description: 'Connection between Old Testament priestly anointing and the anointing of Jesus with the Holy Spirit.',
    },
  ],

  hasHebrew: true,
};
