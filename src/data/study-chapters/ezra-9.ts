import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezra 9 — The Intermarriage Crisis and Ezra's Confession
 *
 * The people have returned to rebuild Jerusalem, but a crisis emerges: they have
 * intermarried with the surrounding nations — not merely mixing families, but
 * risking the spiritual separation that made them the holy seed. Ezra tears his
 * garments and pulls out his hair in anguish. He does not condemn his people in
 * anger; he falls to his knees in confession, identifying himself with their
 * transgression. In his prayer, he acknowledges that they "cannot stand before" God
 * because of their trespasses — yet he also invokes the image of a "nail in his
 * holy place," a fixed peg of mercy that holds even when all else crumbles.
 */
export const EZRA_9: RichChapterContent = {
  bookSlug: 'ezra',
  bookName: 'Ezra',
  chapter: 9,

  estimatedMinutes: { beginner: 8, intermediate: 18, deep: 23 },
  opener: {
    matchTitle: /Ezra Kneels in Prayer/i,
    caption: 'Ezra 9',
  },
  intros: [
    'Ezra 9 opens not with celebration, but with crisis. The exiles have returned. The temple foundation is laid. Worship is being restored. And then, in a devastating report, the princes come to Ezra with word that the people have done the very thing they were commanded not to do: they have intermarried with the surrounding nations — Canaanites, Hittites, Perizzites, Jebusites, Amorites, Egyptians. The problem is not biological. It is spiritual. To marry into these peoples is to invite their gods, their practices, their ways into the heart of the returning remnant.',
    'Ezra&apos;s response is extraordinary. He does not storm into the temple with condemnation. He tears his garments and pulls out his hair — he performs the outward signs of a man in a state of total anguish. Then he gathers all those who trembled at God&apos;s word and waits until the evening sacrifice. And when that moment comes, he does not speak for the people — he falls to his knees and speaks *with* them, confessing their sin as his own: "I am ashamed and blush to lift up my face to thee, my God." The intercessor does not stand apart. He stands with his people in their trespass. And in that prayer, which stretches across the rest of the chapter, he holds together two things: the absolute justice of God — "thou art righteous" — and the impossible mercy of God — the image of a nail fixed in the holy place, holding the remnant when everything else would scatter.',
  ],

  bottomShare: {
    label: 'Share Ezra 9',
    quote:
      'When we confess our sin not in isolation but in solidarity with those around us, we become intercessors. Ezra falls to his knees, pulls out his hair, and says: "We cannot stand before thee because of this." In that confession lies the beginning of restoration.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezra 9 · Study Guide',
  },

  resources: [
    {
      id: 'oriental-institute-artaxerxes',
      kind: 'archive',
      source: 'Oriental Institute',
      label: 'Artaxerxes I and Achaemenid Court',
      url: 'https://oi.uchicago.edu/',
      description: 'OI scholarly resources on 5th-century BCE Persian rule and administration.',
    },
    {
      id: 'sefaria-ezra-9',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezra 9 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Ezra.9',
      description: 'The Hebrew text of Ezra 9 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-ezra-overview-9',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Ezra — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/ezra/',
      description: 'Open-access SBL essay on the historical and literary setting of Ezra.',
    },

  ],

  sections: [
    /* ─── Ezra 9:1–2 — The Report of Intermarriage ────────────────────── */
    {
      ref: 'Ezra 9:1–2',
      title: 'The Holy Seed Mingled',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'Now when these things were done, the princes came to me, saying, The people of Israel, and the priests, and the Levites, have not separated themselves from the people of the lands, doing according to their abominations, even of the Canaanites, the Hittites, the Perizzites, the Jebusites, the Ammonites, the Moabites, the Egyptians, and the Amorites.'),
            {
              number: 2,
              spans: [
                t('For they have taken of their daughters for themselves, and for their sons: so that the '),
                t('holy seed'),
                t(' have mingled themselves with the people of those lands: yea, the hand of the princes and rulers hath been chief in this trespass.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra9-princes-report',
          html:
            'The princes come to Ezra not as accusers, but as witnesses to what has already happened. The issue is not that the people have strayed in worship alone — they have compromised the boundary that was meant to keep them separate. The list is long and deliberate: seven nations whose gods and practices the law explicitly forbade. To marry their daughters is to invite those gods into the home, into the family, into the heart of the remnant. [res:oriental-institute-artaxerxes]',
        },
        {
          kind: 'commentary',
          id: 'ezra9-separation',
          html:
            'Separation in Scripture is not about superiority or prejudice. It is about covenant. When God called Israel to separate themselves from the nations, He was not saying "you are better than them." He was saying "you belong to Me in a particular way, and that belonging requires that you not bind yourselves to practices and gods that would pull you away from covenant." The separation is unto God, not away from other peoples[res:sefaria-ezra-9][res:bibleodyssey-ezra-overview-9].',
        },
        {
          kind: 'hebrew',
          id: 'ezra9-zera-kodesh',
          title: 'Zera ha-Qodesh — "The Holy Seed"',
          script: 'זֶ֫רַע הַקֹּ֫דֶשׁ',
          translit: '<strong>Zera ha-qodesh</strong> · holy seed; the seed set apart for God',
          description:
            'The phrase "holy seed" refers not to a superior genetic lineage, but to a people set apart by covenant for God&apos;s purposes. They are holy because God has made them so — not because of who their parents are. Yet that holiness requires a response: they must not mingle themselves with those whose gods and practices would undermine the covenant. When they intermarry, they mingle the holy seed with those not bound by the same covenant.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-rulers-trespass',
          html:
            'Notably, the princes themselves have been chief in this trespass. This is not a failure of the common people alone — those who were meant to guard the boundary have crossed it first. The leadership, the ones who should have protected the people from compromise, have led them into it. This makes the crisis more acute.',
        },
        {
          kind: 'carry',
          html:
            'We are all part of a holy seed — called out, set apart, made sacred by covenant. That calling does not make us superior. It makes us accountable. The question is not "are we better than others," but "do we belong to God, and if so, what does that mean for the commitments we make, the relationships we form, the gods we are willing to bow to in those relationships?" Where are you mingling things that should remain separate?',
        },
        {
          kind: 'reflection',
          id: 'ezra9-mingling',
          prompt: 'When have you seen the boundaries of your faith compromised by ties that seemed good or innocent? What cost did that mingling eventually extract?',
        },
      ],
    },

    /* ─── Ezra 9:3–5 — Ezra's Astonishment and Anguish ──────────────────── */
    {
      ref: 'Ezra 9:3–5',
      title: 'The Rending of Garment and Soul',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 3,
              spans: [
                t('And when I heard this thing, I '),
                hg('rent my garment and my mantle', 'ezra9-rent-garments'),
                t(', and '),
                hy('plucked off the hair', 'ezra9-plucked-hair'),
                t(' of my head and of my beard, and sat down '),
                hg('astonied', 'ezra9-astonied'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Then were assembled unto me every one that '),
                hg('trembled at the words', 'ezra9-trembled'),
                t(' of the God of Israel, because of the transgression of those that had been carried away; and I sat astonied until the evening sacrifice.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And at the evening sacrifice I arose up from my heaviness; and having '),
                hg('rent my garment and my mantle', 'ezra9-rent-again'),
                t(', I '),
                hy('fell upon my knees', 'ezra9-knees'),
                t(', and '),
                hp('spread out my hands unto the Lord my God', 'ezra9-spread-hands'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra9-rent-garments',
          html:
            'Ezra does not respond to the news with bureaucratic efficiency. He tears his outer garments — visible, public signs of his distress. This is not an intellectual problem to be solved. It is a spiritual wound that he embodies, that he wears on his body. His response mirrors the response of Job, of Jacob, of those who encounter catastrophic loss.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-plucked-hair',
          html:
            'The plucking of hair from head and beard is one of the most extreme signs of distress in biblical culture. This is anguish given physical form. Ezra is not angry at his people — he is devastated. He is identifying with their shame, pulling out his hair as if to say: the whole of me is undone by this transgression.',
        },
        {
          kind: 'hebrew',
          id: 'ezra9-niklam',
          title: 'Niklam — "Ashamed" or "Bewildered"',
          script: 'נִכְלַם',
          translit: '<strong>Niklam</strong> · shamed; made ashamed; bewildered; confused',
          description:
            'The word translated "astonied" (niklam) carries both shame and bewilderment — a state where you are so overcome by the reality of what has happened that you cannot think clearly, cannot speak, cannot move. Ezra sits in this state until the evening sacrifice, held in silence by the weight of what his people have done.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-astonied',
          html:
            'Ezra "sat astonied" — a silence that lasted hours, stretching until evening worship. This is not dramatic posturing. This is a man genuinely undone, waiting in silence for the moment when, in the presence of the altar and the offering, he can finally speak to God. The structure of his response is itself a theology: first the body speaks (tearing clothes, pulling hair), then silence, then prayer at the place where heaven and earth meet.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-trembled',
          html:
            'Those who "trembled at the words of the God of Israel" gather to Ezra. These are the faithful remnant — the ones who understand that covenant with God is not negotiable. They are drawn to Ezra not in judgment of the transgression, but in solidarity with his grief. They sit with him in his silence.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-rent-again',
          html:
            'Notice that Ezra tears his garments a second time — once when he hears the news, and again when he rises to pray. His physical distress is not a one-time gesture. It frames his entire response, from hearing to confession.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-knees',
          html:
            'At the evening sacrifice — the moment when the people&apos;s worship meets God in the sanctuary — Ezra falls upon his knees. This is the position of the suppliant, the penitent, the one who has nothing to stand on except God&apos;s mercy. He does not stand to pronounce judgment. He kneels to intercede.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-spread-hands',
          html:
            'Spreading out the hands is the ancient posture of prayer — the whole body opened toward God, empty, asking. This is how Moses lifted his hands for Israel, how Solomon spread his hands at the dedication of the temple, how Jesus stretched His arms on the cross. Ezra adopts the posture of every intercessor.',
        },
        {
          kind: 'carry',
          html:
            'Ezra&apos;s grief is contagious. He doesn&apos;t announce a crisis; he embodies it. And in doing so, he gathers the faithful. When we grieve for the church, for our communities, for the places where God&apos;s name is profaned, we don&apos;t stand apart as judges. We fall to our knees as intercessors, and others join us in that kneeling. Grief, rightly offered, draws the covenant people together.',
        },
        {
          kind: 'reflection',
          id: 'ezra9-anguish',
          prompt: 'When have you felt called to share in the grief of a community or family — to carry sorrow that was not yours alone, but belonged to all? What did it cost you?',
        },
      ],
    },

    /* ─── Ezra 9:6–7 — "I Am Ashamed and Blush" ────────────────────────── */
    {
      ref: 'Ezra 9:6–7',
      title: 'Ashamed to Lift Up His Face',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 6,
              spans: [
                t('And said, O my God, I '),
                hp('am ashamed and blush to lift up my face to thee', 'ezra9-ashamed-face'),
                t(', my God: for our iniquities are increased over our head, and our trespass is grown up unto the heavens.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Since the days of our fathers have we been in a great trespass unto this day; and for our iniquities have we, our kings, and our priests, been delivered into the hand of the kings of the lands, to the sword, to captivity, and to a spoil, and to confusion of face, as it is this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra9-ashamed-face',
          html:
            'Ezra does not begin his prayer with petition. He begins with confession: "I am ashamed and blush to lift up my face to thee." This is the language of one who can no longer meet the eyes of the one he has offended. Yet precisely in that shame, uttered before God, lies the beginning of restoration. He confesses not as a voice crying in isolation, but as the representative of the people: "Our iniquities. Our trespass. We have been delivered."',
        },
        {
          kind: 'commentary',
          id: 'ezra9-iniquities-increased',
          html:
            'Ezra acknowledges that their transgressions are not small matters — they have "increased over our head" and grown "up unto the heavens." The image is one of weight, of a burden so great it towers above them. They are crushed under the accumulation of their own sin. Yet by naming it, by refusing to minimize it, Ezra opens the possibility of its being forgiven.',
        },
        {
          kind: 'hebrew',
          id: 'ezra9-avon-pesha',
          title: 'Avon and Pesha — Iniquity and Transgression',
          script: 'עָוֹן וָפֶשַׁע',
          translit: '<strong>Avon</strong> (iniquity) · perversity, guilt · <strong>Pesha</strong> (transgression) · deliberate rebellion',
          description:
            'Ezra uses two words for sin: avon (iniquity), the perversity of the human heart, and pesha (transgression), the deliberate breaking of covenant. Both words together paint a picture of willful disobedience — not mere accident, but a turning away from God&apos;s word.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-fathers-trespass',
          html:
            'Ezra traces the transgression back to the days of their fathers. This is not blame-shifting. It is acknowledging a pattern of covenant-breaking that extends across generations. They are not suddenly fallen from righteousness — they have been a trespassing people all along. Only now, at the moment of return and restoration, does the weight of this history become unbearable.',
        },
        {
          kind: 'carry',
          html:
            'True confession does not minimize our sin or hide behind others&apos; failings. It acknowledges the full weight of what we have done and what has been done through us. "I am ashamed and blush to lift up my face." That shame, named and offered before God, is the only ground on which forgiveness can stand.',
        },
        {
          kind: 'reflection',
          id: 'ezra9-shame',
          prompt: 'Ezra refuses to look away from the weight of transgression. Is there a sin — personal or communal — that you have been avoiding the full weight of? What would it mean to name it completely?',
        },
      ],
    },

    /* ─── Ezra 9:8–9 — "A Nail in His Holy Place" ────────────────────────── */
    {
      ref: 'Ezra 9:8–9',
      title: 'The Nail in the Holy Place',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 8,
              spans: [
                t('And now for a little space grace hath been shewed from the Lord our God, to leave us '),
                hp('a remnant to escape', 'ezra9-remnant-escape'),
                t(', and to give us a '),
                hy('nail in his holy place', 'ezra9-nail-holy'),
                t(', that our God may lighten our eyes, and give us a little reviving in our bondage.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('For we were bondmen; yet our God hath not forsaken us in our bondage, but hath extended mercy unto us in the sight of the kings of Persia, to give us a reviving, to set up the house of our God, to repair the desolations thereof, and to give us a wall in Judah and in Jerusalem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra9-remnant-escape',
          html:
            'Even in the midst of acknowledging the weight of transgression, Ezra glimpses mercy. God has left them "a remnant to escape." Not all are lost. Some remain. Some have been preserved. This is grace — unmerited favor falling like rain on a people who have no claim to it. The remnant is not a reward for righteousness. It is a gift in the midst of judgment.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-nail-holy',
          html:
            'The image of the "nail in his holy place" is one of the most beautiful and mysterious in Scripture. A nail, driven into rock, is fixed. It does not move. It does not waver. It holds. In the holy place — in the very sanctuary where the people meet God — there is a nail. What does it hold? The people themselves. The hope of restoration. The promise that even though they are unfaithful, God&apos;s steadfastness cannot be shaken. This image will echo forward in Isaiah 22:23, where the Messiah Himself is called "a nail in a sure place."',
        },
        {
          kind: 'hebrew',
          id: 'ezra9-yated-kodesh',
          title: 'Yated and Kodesh — A Peg Set Apart',
          script: 'יָתֵד קֹדֶשׁ',
          translit: '<strong>Yated</strong> · peg, nail, stake · <strong>Kodesh</strong> · holy, set apart',
          description:
            'A yated (peg or nail) was a practical object — tent pegs held the tabernacle in place. But in Ezra&apos;s prayer, it becomes theological. The peg that holds the holy place holds the people. It is not the people who must hold themselves up through righteousness. It is God&apos;s steadfastness — symbolized by a fixed peg — that holds them.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-little-reviving',
          html:
            'Ezra does not pray for complete restoration. He prays for "a little reviving." The return is partial. The revival is incomplete. Yet that little revival — the ability to rebuild the temple, to restore worship, to have a wall around Jerusalem — is itself a miracle. It is mercy measured in small graces, but graces nonetheless.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-bondage-mercy',
          html:
            'Though they were captives in Persia, God extended mercy in the sight of the Persian kings. The king himself commissioned the rebuilding. This is not freedom — they remain subjects. But within their bondage, God has provided the space to worship, to rebuild, to hope. Mercy is not always deliverance. Sometimes it is the gift of a little space, a little light, within circumstances we cannot escape.',
        },
        {
          kind: 'christ',
          id: 'ezra9-christ-nail',
          title: 'Christ Connection — The Nail in the Sure Place',
          html:
            'The image of the nail in the holy place finds its fulfillment in Christ. Isaiah 22:23 speaks of one who is "a nail in a sure place" — a foundation that cannot be shaken. Christ is that nail. He is driven into the holy place of creation and redemption. And He holds all things — holds the covenant, holds the promises, holds the people who have no strength of their own. As Hebrews 7:25 says, Christ "ever liveth to make intercession" — He is the eternal Nail, the fixed Peg, the one who holds even when all else crumbles. Moreover, Christ is the Intercessor. Like Ezra, He falls to His knees — or rather, spreads His hands on the cross — to make confession and intercession for a people not His own, identifying Himself so completely with their transgression that He becomes sin for them (2 Corinthians 5:21). He is the Remnant who escapes, the One through whom restoration becomes possible.',
        },
        {
          kind: 'carry',
          html:
            'You are held by a Nail in the holy place. Not by your own strength, not by your own righteousness, but by the fixed steadfastness of God in Christ. That Nail cannot be pulled out. That Peg does not move. When you are unfaithful, the Nail is faithful. When you transgress, the Nail holds. This is what mercy means — not the removal of consequences, but the offer of a steadiness you cannot earn or shake.',
        },
        {
          kind: 'reflection',
          id: 'ezra9-nail',
          prompt: 'What would it mean to trust that you are held by a Nail in the holy place — a steadiness that does not depend on your faithfulness? How does that change the way you relate to your own failures?',
        },
      ],
    },

    /* ─── Ezra 9:10–12 — The Broken Commandment ──────────────────────────── */
    {
      ref: 'Ezra 9:10–12',
      title: 'What Can We Say After This?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 10,
              spans: [
                t('And now, O our God, what shall we say after this? for we have forsaken thy commandments,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Which thou hast commanded by thy servants the prophets, saying, The land, unto which ye go to possess it, is an unclean land with the filthiness of the people of the lands, with their abominations, which have filled it from one end to another with their uncleanness.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Now therefore give not your daughters unto their sons, neither take their daughters unto your sons, nor seek their peace nor their prosperity for ever: that ye may be strong, and eat the good of the land, and leave it for an inheritance to your children for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra9-what-shall-say',
          html:
            'Ezra&apos;s rhetorical question — "What shall we say after this?" — is the cry of one who has no defense. There is no excuse. The commandment was clear. The boundary was explicit. They knew. They chose to cross it. And now Ezra stands before God with no words to offer except the recognition of his own wordlessness.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-forsaken',
          html:
            'The word "forsaken" (azab) means to abandon, to turn one&apos;s back on. Ezra is not saying they sinned accidentally. He is saying they willfully abandoned the covenant. They knew the commandment. They turned away from it. And in turning away, they turned toward the gods and practices of the nations.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-unclean-land',
          html:
            'Ezra quotes the prohibition: the land is unclean, filled with the uncleanness of the peoples who dwell there. Intermarrying with those peoples is not a social mixing — it is a spiritual danger. It is inviting uncleanness into the holy seed, into the family of God.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-inheritance-children',
          html:
            'The promise is not that intermarriage will bring blessing, but that separation for the Lord will. They will "eat the good of the land, and leave it for an inheritance to your children for ever." The preservation of a holy seed is tied to their capacity to remain separate from the surrounding nations.',
        },
        {
          kind: 'carry',
          html:
            'Ezra stands in the position of one who must say: we knew better, and we did it anyway. There is no excuse. There is only the naked acknowledgment of transgression. Sometimes the most honest prayer we can pray is the one that strips away all defense and says: I have no answer. I have no justification. I have only transgression.',
        },
        {
          kind: 'reflection',
          id: 'ezra9-forsaken-2',
          prompt: 'Where do you know the commandment clearly, yet continue in disobedience? What would it mean to face that, as Ezra does, without excuse or mitigation?',
        },
      ],
    },

    /* ─── Ezra 9:13–15 — "Thou Art Righteous" ─────────────────────────────── */
    {
      ref: 'Ezra 9:13–15',
      title: 'We Cannot Stand Before Thee',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 13,
              spans: [
                t('And after all that is come upon us for our evil deeds, and for our great trespass, seeing that thou our God hast punished us less than our iniquities deserve, and hast given us such deliverance as this;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Should we again break thy commandments, and join in affinity with the people of these abominations? wouldest not thou be angry with us till thou hadst consumed us, so that there should be no remnant nor escaping?'),
              ],
            },
            {
              number: 15,
              spans: [
                t('O Lord God of Israel, '),
                hp('thou art righteous', 'ezra9-righteous'),
                t(': for we '),
                hp('remain yet a people escaped', 'ezra9-escaped'),
                t(', as it is this day: behold, '),
                hp('we are before thee in our trespasses', 'ezra9-before-thee'),
                t(': '),
                hp('for we cannot stand before thee because of this', 'ezra9-cannot-stand'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra9-punished-less',
          html:
            'Ezra acknowledges the mercy that has already been extended — they were taken into captivity, yet were not destroyed. They were punished, but less than their iniquities deserved. This is the paradox of mercy: it is given not because we deserve it, but because God is merciful. And yet that very mercy makes the continuation in sin unthinkable.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-righteous',
          html:
            'At the heart of Ezra&apos;s prayer stands a single word: "Thou art righteous." This is not the complaint of one who thinks God has been unjust. It is the acknowledgment that God&apos;s character is unchanging, His justice absolute. And before the face of that righteous God, Ezra and his people have nothing to claim except their transgression. Yet in that very righteous character lies hope — for a righteous God is one who keeps covenant, who acts with integrity, who does what He has promised.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-escaped',
          html:
            'They remain "a people escaped." Not many. Not all. But some. The remnant is evidence that God has not completely cut off His people. There is still a future. There is still a possibility of restoration. And yet that deliverance only heightens their responsibility: to the mercy that has been shown to them, they owe a covenant response.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-before-thee',
          html:
            'Ezra says they are "before thee in our trespasses" — standing in God&apos;s presence, not hidden, not defended, but fully exposed in their transgression. This is the stance of the honest sinner: no hiding, no excuse, no attempt to justify. Simply: here we are, in our trespasses, before You.',
        },
        {
          kind: 'commentary',
          id: 'ezra9-cannot-stand',
          html:
            'The final confession is absolute: "We cannot stand before thee because of this." This is the recognition that guilt has a weight, that transgression separates, that there is no way to stand in the presence of holiness while clothed in unconfessed sin. Only confession, only the acknowledgment of that separation, can become the ground of reunion. Ezra does not stand. He kneels. He cannot stand. And in that kneeling lies the only path to restoration.',
        },
        {
          kind: 'hebrew',
          id: 'ezra9-tsaddiq',
          title: 'Tsaddiq — "Righteous" or "Just"',
          script: 'צַדִּיק',
          translit: '<strong>Tsaddiq</strong> · righteous; just; one who upholds the covenant; one whose character is fixed in justice',
          description:
            'When Ezra calls God "righteous," he is affirming not merely that God has not done wrong, but that God&apos;s character is eternally fixed in justice and covenant-keeping. God can be trusted not to abandon His people capriciously, but also not to overlook transgression. In righteous judgment and righteous mercy, God acts with integrity.',
        },
        {
          kind: 'christ',
          id: 'ezra9-christ-intercessor',
          title: 'Christ Connection — The Intercessor Who Intercedes',
          html:
            'Ezra stands before God saying "we cannot stand." He is the intercessor who identifies so completely with his people that he speaks not for them from a position of superiority, but with them, in their trespasses. This foreshadows the ultimate Intercessor, Christ. In 1 John 1:9, we read: "If we confess our sins, he is faithful and just to forgive us our sins." Christ is that faithful and just one — the righteous God who meets Ezra&apos;s confession with the promise of restoration. And in Hebrews 7:25, He is described as one who "ever liveth to make intercession" — eternally standing in the gap between humanity and holiness, not condemning, but holding open the possibility of reunion. Christ does not stand apart from our trespasses; He enters into them, bears them, and transforms the confession into reconciliation.',
        },
        {
          kind: 'carry',
          html:
            'Can you say with Ezra, "We cannot stand before thee because of this"? Can you stop defending yourself, stop making excuses, stop hiding behind others&apos; failings, and simply acknowledge the weight of your transgression? That confession is not despair. It is the beginning of restoration. For only when we truly recognize that we cannot stand do we become open to being held — held by the Nail in the holy place, held by the One who makes intercession, held by the righteous God who loves us not because we deserve it, but because His character is mercy as well as justice.',
        },
        {
          kind: 'reflection',
          id: 'ezra9-cannot-stand-2',
          prompt: 'Is there a transgression in your life that you have been trying to defend, justify, or minimize? What would it mean to stand before God and say simply: "We cannot stand because of this"?',
        },
      ],
    },
  ],
};
