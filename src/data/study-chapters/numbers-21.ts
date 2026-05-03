import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * Numbers 21 — Israel's grumbling about manna, God's judgment by fiery serpents,
 * and the miraculous cure through the brass serpent lifted on a pole. They defeat
 * Sihon and Og. 35 verses. The Hebrew nachash nechoshet (brass/bronze serpent)
 * later becomes Nehushtan, an idol that Hezekiah destroys (2 Kings 18:4).
 *
 * CHRIST: John 3:14-15 — "As Moses lifted up the serpent in the wilderness,
 * even so must the Son of man be lifted up: that whosoever believeth in him
 * should not perish, but have eternal life." Jesus Himself cites this chapter
 * as the type of His crucifixion. The serpent on a pole is the lifeless image
 * of sin lifted up — Christ was "made... sin for us" (2 Corinthians 5:21).
 * Looking is faith at its simplest. This is one of the Old Testament's most
 * directly Christological moments.
 */
export const NUMBERS_21: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 21,

  estimatedMinutes: { beginner: 6, intermediate: 11, deep: 14 },
  intros: [
    'Numbers 21 opens with a battle: King Arad attacks Israel from the south, and Israel vows a vow to the Lord. If He will deliver these people into their hand, they will utterly destroy their cities. God delivers. Israel keeps the vow and destroys the Canaanite cities (and names the place Hormah, "destruction").',
    'Then the people grumble. They are tired of the wilderness. They are tired of the manna. "Wherefore have ye brought us up out of Egypt to die in the wilderness? for there is no bread, neither is there any water; and our soul loatheth this light bread." This light bread — this is manna, the very miracle God has given them every day for forty years. But when you take miracles for granted long enough, gratitude curdles into contempt.',
    'God sends fiery serpents among the people. Many die. Now the people come to Moses and confess: "We have sinned, for we have spoken against the Lord, and against thee; pray unto the Lord, that he take away the serpents from us." God tells Moses to make a brass serpent and set it on a pole. Whoever looks at it lives. And they sing to the well at Beer — a moment of peace and provision. Then they defeat Sihon, king of the Amorites, and Og, king of Bashan.',
    'This is one of the Bible\'s most directly Christological moments. Jesus cites it by name in John 3:14-15: the serpent lifted on a pole is the type of His own lifting up on the cross. The people do not earn the cure; they simply look. Faith at its simplest is sight.',
  ],

  opener: {
    matchArtist: /tissot|rembrandt/i,
    matchTitle: /serpent|fiery|nehushtan|pole/i,
    caption: 'The Brass Serpent Lifted On A Pole',
  },

  bottomShare: {
    label: 'Share Numbers 21',
    quote:
      'When Israel grumbled against God and spoke against the manna, God sent fiery serpents to judge them. Moses made a brass serpent and lifted it on a pole; whoever looked upon it lived. Israel defeated Sihon and Og and sang songs of victory.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 21 · Study Guide',
  },

  sections: [
    /* ─── Numbers 21:1–3 — King Arad Attacks; Israel Vows and Wins ───────── */
    {
      ref: 'Numbers 21:1–3',
      title: 'King Arad Attacks; Israel\'s Vow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(1,
              t('And when king Arad the Canaanite, which dwelt in the south, heard tell that Israel came by the way of the spies; then he fought against Israel, and took some of them prisoners.')
            ),
            verse(2,
              t('And Israel '),
              hg('vowed a vow unto the Lord', 'vow-israel'),
              t(', and said, If thou wilt indeed deliver this people into my hand, then I will utterly '),
              hy('destroy their cities', 'herem-destroy'),
              t('.')
            ),
            verse(3,
              t('And the Lord '),
              hp('hearkened to the voice of Israel', 'god-hears'),
              t(', and delivered up the Canaanites; and they utterly destroyed them and their cities: and he called the name of the place '),
              hy('Hormah', 'hormah-destruction'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vow-israel',
          html:
            'Israel vows — not in presumption, but in faith. They ask God to do what only He can do, and they promise to follow through with obedience. This is how vows work in Scripture: you ask for God\'s help, and you bind yourself to Him in return. God responds to this covenant language.',
        },
        {
          kind: 'hebrew',
          id: 'herem-destroy',
          title: 'Herem — complete destruction',
          script: 'חרם',
          translit: '<strong>herem</strong> · devoted to destruction (the "ban")',
          description:
            'Herem is the devoted destruction reserved for the nations occupying Canaan. Everything — people, animals, property — was to be put under the "ban," the total destruction that removed a place from human use and returned it entirely to God. It was an act of covenant judgment, not mere conquest.',
        },
        {
          kind: 'commentary',
          id: 'god-hears',
          html:
            'God hears Israel\'s prayer. He does not shame them for asking, nor does He make them wait. This is the language of covenant: when Israel asks in faith, God acts. The Lord hearkens — He inclines His ear.',
        },
        {
          kind: 'hebrew',
          id: 'hormah-destruction',
          title: 'Hormah — destruction',
          script: 'חרמה',
          translit: '<strong>Hormah</strong> · meaning "destruction" or "devoted to destruction"',
          description:
            'The name Hormah comes from the same root as herem. It is named for the act of covenant judgment Israel carried out. The place itself becomes a memorial to God\'s faithfulness and Israel\'s obedience.',
        },
        {
          kind: 'carry',
          html:
            'When you come to God with a request, you are not meant to come empty-handed or as a mercenary. You come as a covenant partner. You ask God to act, and you bind yourself to obey what He commands. This is the language of faith, not a transaction. Notice that Israel didn\'t ask, "Help us, and we\'ll give you gold." They asked, "Deliver us, and we\'ll do as You command." God responds to that kind of prayer.',
        },
      ],
    },

    /* ─── Numbers 21:4–5 — Israel Grumbles About the Manna ────────────────── */
    {
      ref: 'Numbers 21:4–5',
      title: 'The People Grumble Against God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(4,
              t('And they journeyed from mount Hor by the way of the Red sea, to compass the land of Edom: and the soul of the people was much discouraged because of the way.')
            ),
            verse(5,
              t('And the people '),
              hg('spake against God', 'speak-against-god'),
              t(', and against Moses, '),
              hy('Wherefore have ye brought us up out of Egypt to die in the wilderness', 'death-wish-again'),
              t('? for there is '),
              hg('no bread, neither is there any water', 'complaint-provision'),
              t('; and our soul '),
              hy('loatheth this light bread', 'loathe-manna'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'speak-against-god',
          html:
            'The people do not merely complain. They speak against God Himself. This is not a private complaint; it is rebellion. To speak against God is to question His character, His provision, His care. It moves from circumstance into theology.',
        },
        {
          kind: 'commentary',
          id: 'death-wish-again',
          html:
            'This is the same refrain from Numbers 14: "Would that we had died in the wilderness." Repetition in Scripture signals a hardened heart. The people have heard the judgment on that complaint before, and yet they repeat it. They have learned nothing.',
        },
        {
          kind: 'commentary',
          id: 'complaint-provision',
          html:
            'They complain of no bread and no water — yet Exodus 16–17 shows that God has provided both manna and water throughout the wilderness journey. The complaint is not born of genuine need. It is born of impatience and contempt. They have been in the wilderness for forty years, and their patience has run out.',
        },
        {
          kind: 'hebrew',
          id: 'loathe-manna',
          title: 'Quts — to loathe, abhor',
          script: 'קוץ',
          translit: '<strong>quts</strong> · to feel disgust, to loathe, to abhor',
          description:
            'This verb marks a turning point. They don\'t merely reject the manna; they loathe it. The very thing that has sustained their lives for forty years now nauseates them. Gratitude has died. Familiarity has bred contempt.',
        },
        {
          kind: 'reflection',
          id: 'reflection-loathe',
          prompt: 'Have you ever felt contempt for something that was once a genuine blessing? What changed?',
        },
      ],
    },

    /* ─── Numbers 21:6–9 — Fiery Serpents; Moses Lifts the Brass Serpent ──── */
    {
      ref: 'Numbers 21:6–9',
      title: 'The Fiery Serpents; The Brass Serpent on a Pole',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(6,
              t('Wherefore the Lord sent among them '),
              hy('fiery serpents', 'serpents-fiery'),
              t(', which '),
              hg('slew much people of Israel', 'death-serpents'),
              t('.')
            ),
            verse(7,
              t('Therefore the people came to Moses, and said, '),
              hg('We have sinned', 'repent-finally'),
              t(', '),
              hg('for we have spoken against the Lord, and against thee', 'confession-speech'),
              t('; '),
              hg('pray unto the Lord, that he take away the serpents from us', 'pray-deliverance'),
              t('. And Moses prayed for the people.')
            ),
            verse(8,
              t('And the Lord said unto Moses, '),
              hp('Make thee a fiery serpent, and set it upon a pole', 'brass-serpent-command'),
              t(': and it shall come to pass, that every one that is bitten, when he looketh upon it, shall '),
              hp('live', 'life-through-looking'),
              t('.')
            ),
            verse(9,
              t('And Moses made a '),
              hy('serpent of brass', 'nachash-nechoshet'),
              t(', and put it upon a pole, and it came to pass, that if a serpent had bitten any man, when he '),
              hp('beheld the serpent of brass', 'look-live-action'),
              t(', he '),
              hp('lived', 'life-received'),
              t('.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'serpents-fiery',
          title: 'Saraph — fiery, serpent',
          script: 'שרף',
          translit: '<strong>saraph</strong> · burning, fiery; also a serpent (seraphim = burning ones)',
          description:
            'The serpents are not merely poisonous; they are described as fiery — burning. They carry fire in them. In Isaiah 6, the seraphim are the burning creatures around the throne of God. Here, burning creatures are used as judgment. The parallel is stark: what attends holiness in heaven becomes the instrument of wrath on earth.',
        },
        {
          kind: 'commentary',
          id: 'death-serpents',
          html:
            'Many people die. This is real judgment, not a threat. God does not merely warn; He acts. The serpents are His instrument, and their venom is His voice saying, "The wages of sin is death."',
        },
        {
          kind: 'commentary',
          id: 'repent-finally',
          html:
            'Now the people repent. Not in the abstract, but under the weight of real death. Repentance often comes only when the alternative becomes unbearable. They have grieved God by their complaining, and now they feel the weight of that rebellion.',
        },
        {
          kind: 'commentary',
          id: 'confession-speech',
          html:
            'They confess their specific sin: they have spoken against the Lord and against Moses. This is a true confession — they name what they have done, they own it, and they ask for intercession. Moses prays for them.',
        },
        {
          kind: 'commentary',
          id: 'pray-deliverance',
          html:
            'The people ask Moses to pray. They do not ask for the serpents to be removed entirely — only for deliverance from the bite. They accept the judgment but ask for a way through it.',
        },
        {
          kind: 'christ',
          id: 'brass-serpent-command',
          title: 'Christ Connection — The Brass Serpent as Type of the Cross',
          html:
            'John 3:14-15 records Jesus Himself explaining this passage: "As Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up: that whosoever believeth in him should not perish, but have eternal life." The parallel is exact. The serpent on a pole is the image of sin lifted up — not in shame, but in deliverance. 2 Corinthians 5:21 explains: "For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him." Christ becomes the serpent — the embodied form of the poison that kills us — so that by looking upon Him, we live. The cure is not an abstract concept. It is not a law or a rule. It is a Person lifted up. And the action required is not heroic effort; it is sight. "Look and live."',
        },
        {
          kind: 'hebrew',
          id: 'nachash-nechoshet',
          title: 'Nachash nechoshet — the brass (bronze) serpent',
          script: 'נחש נחשת',
          translit: '<strong>nachash nechoshet</strong> · serpent of brass/bronze',
          description:
            'In 2 Kings 18:4, Hezekiah destroys this serpent when it becomes an idol, calling it "Nehushtan" — "a thing of brass." The people have begun to worship the instrument of deliverance instead of the God who commanded it. Even the most powerful type of Christ can become an idol if the heart turns away from the living God.',
        },
        {
          kind: 'commentary',
          id: 'life-through-looking',
          html:
            'The cure is looking. Not doing, not earning, not understanding — looking. Faith in its simplest form is sight directed toward Christ. The Israelites who were bitten did not have to understand the mechanism of healing. They did not have to earn it or deserve it. They only had to look.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(14,
              t('And as Moses '),
              hp('lifted up the serpent in the wilderness', 'type-fulfilled'),
              t(', even so must the Son of man be '),
              hp('lifted up', 'type-fulfilled'),
              t(':')
            ),
            verse(15,
              t('That whosoever '),
              hp('believeth in him should not perish', 'faith-life'),
              t(', but have '),
              hp('eternal life', 'faith-life'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'type-fulfilled',
          html:
            'Jesus cites this moment from Numbers 21 as the precise type of His crucifixion. The serpent lifted on a pole prefigures Christ lifted on the cross. In both cases, the cure comes through the lifting up of what killed us.',
        },
        {
          kind: 'commentary',
          id: 'faith-life',
          html:
            'Whosoever believeth. Not whosoever understands, not whosoever earns, not whosoever deserves. Believing means looking toward Christ — directing your sight, your trust, your hope toward Him. And the result is eternal life. The cure in Numbers 21 was temporary and local. The cure in Christ is eternal.',
        },
        {
          kind: 'carry',
          html:
            'When you are dying from a bite — when you know your own sin has poisoned you — there is only one cure: look up. The cure is not found in your own effort to be good. It is not found in your shame or your regret. It is found in the Person lifted up. Christ on the cross is sin borne, judgment taken, death swallowed. To believe is to look. And to look is to live.',
        },
        {
          kind: 'reflection',
          id: 'reflection-look-live',
          prompt: 'What does it mean for you to "look" at Christ when you feel the bite of your own sin?',
        },
      ],
    },

    /* ─── Numbers 21:10–18 — The Journey Continues ───────────────────────── */
    {
      ref: 'Numbers 21:10–18',
      title: 'The Song at the Well',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(10,
              t('And the children of Israel set forward, and pitched in Oboth.')
            ),
            verse(16,
              t('And from thence they went to Beer: that is the well whereof the Lord spake unto Moses, Gather the people together, and I will give them water.')
            ),
            verse(17,
              t('Then Israel sang this song, '),
              hg('Spring up, O well', 'beer-song'),
              t('; sing ye unto it:')
            ),
            verse(18,
              t('The well which the princes digged, which the nobles of the people digged, by the direction of the lawgiver, with their staves. And from the wilderness they went to Mattanah:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'beer-song',
          html:
            'After judgment comes provision and song. The people have passed through death (the fiery serpents, the judgment on their complaint) and now they come to Beer, the well. They break into song — not a lament, but a celebration. "Spring up, O well." The Hebrew is imperative, almost commanding the well to bring forth its water. This is a moment of peace, of provision, of the people at rest in the wilderness. It is a foretaste of the rest that remains for the people of God.',
        },
        {
          kind: 'carry',
          html:
            'Judgment and healing are not the end of the story. After the serpent, after the cure, comes provision and rest. The wilderness remains hard, but now the people have learned their lesson. They move forward in faith, and God meets them at the well. Provision follows repentance.',
        },
      ],
    },

    /* ─── Numbers 21:21–35 — Defeat of Sihon and Og ─────────────────────── */
    {
      ref: 'Numbers 21:21–35',
      title: 'Victory Over Sihon and Og',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(21,
              t('And Israel sent messengers unto Sihon king of the Amorites, saying,')
            ),
            verse(22,
              t('Let me pass through thy land: we will not turn into the fields, nor into the vineyards; we will not drink of the waters of the well: but we will go along by the king\'s high way, until we have passed thy borders.')
            ),
            verse(23,
              t('And Sihon would not suffer Israel to pass through his border: but Sihon gathered all his people together, and went out against Israel into the wilderness: and he came to Jahaz, and fought against Israel.')
            ),
            verse(24,
              t('And Israel '),
              hg('smote him with the edge of the sword', 'smite-sihon'),
              t(', and possessed his land from Arnon unto Jabbok, even unto the children of Ammon: for the border of the children of Ammon was strong.')
            ),
            verse(33,
              t('And they turned and went up by the way of Bashan: and Og the king of Bashan went out against them, he, and all his people, to the battle at Edrei.')
            ),
            verse(34,
              t('And the Lord said unto Moses, Fear him not: for I have delivered him into thy hand, and all his people, and his land; and thou shalt do to him as thou didst unto Sihon king of the Amorites, which dwelt at Heshbon.')
            ),
            verse(35,
              t('So they '),
              hg('smote him, and his sons, and all his people', 'smite-og'),
              t(', until there was none left him alive: and they possessed his land.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'smite-sihon',
          html:
            'Sihon refuses passage — he chooses conquest instead. His refusal becomes his undoing. Israel moves in the strength the Lord has given, and Sihon falls. This is the pattern: the nations east of Jordan oppose Israel and are destroyed. All of Transjordan opens before the people.',
        },
        {
          kind: 'commentary',
          id: 'smite-og',
          html:
            'Og of Bashan is presented as a final giant to overcome. But God tells Moses, "Fear him not; I have delivered him into thy hand." The outcome is assured before the battle. Trust removes the fear of warfare.',
        },
        {
          kind: 'carry',
          html:
            'As Israel moves through the wilderness, they encounter resistance — from the Canaanites, from Sihon, from Og. But the pattern is always the same: God assures victory, and they move forward in faith. By the end of Numbers 21, the generation that refused to enter Canaan in chapter 14 is nearly gone. The new generation is poised at the edge of the promised land, and the kings of Transjordan have fallen before them.',
        },
      ],
    },
  ],
};
