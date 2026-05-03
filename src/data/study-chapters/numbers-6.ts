import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 6 — The Nazarite Vow and the Aaronic Blessing.
 *
 * Two major themes:
 * (1) The Nazarite vow — a person set apart to the LORD by abstaining from
 *     wine, leaving hair uncut, and avoiding contact with the dead.
 * (2) The Aaronic Blessing — the priestly benediction (vv. 24–26) that Israel
 *     and the church have spoken for 3500 years. The threefold name (LORD, LORD, LORD)
 *     and threefold action (bless/keep, shine/gracious, lift/peace) anticipates
 *     Christ and the structure of God&apos;s blessing.
 */
export const NUMBERS_6: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 6,

  estimatedMinutes: { 5: 7, 10: 14, 15: 17 },
  intros: [
    'Numbers 6 describes two practices that will mark Israel&apos;s religious life: the Nazarite vow, a temporary or lifelong consecration to the LORD, and the Aaronic Blessing, the priestly benediction that still carries God&apos;s name into worship rooms and family tables today. The Nazarite is set apart by three visible signs — no wine, unshorn hair, and separation from the dead. These are not commands for everyone; they are an invitation to a deeper allegiance, a way to say publicly and privately, "I belong to the LORD alone."',
    'The Aaronic Blessing is one of the oldest liturgical texts in human civilization — over 3500 years old, spoken in temples, synagogues, and churches without pause. It captures in six short clauses what God&apos;s blessing actually looks like: protection and peace, favor and grace, presence and prosperity. The blessing is not generic goodwill; it is the LORD Himself lowering His face toward us, His name placed upon our heads.',
    'Christ fulfills the Nazarite picture — set apart to the Father, without wine (the symbol of worldly pleasure and false rest), bearing a head uncovered in sacrifice. And the Aaronic Blessing finds its deepest meaning in the God who became flesh and dwelt among us, bringing light, grace, and peace in a human face.',
  ],

  sections: [
    /* ─── Numbers 6:1–8 — The Nazarite Vow ─────────────────────────────── */
    {
      ref: 'Numbers 6:1–8',
      title: 'The Nazarite Set Apart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [t('And the LORD spake unto Moses, saying,')],
            },
            {
              number: 2,
              spans: [
                t('Speak unto the children of Israel, and say unto them, When either man or woman shall '),
                hy('separate themselves', 'nazir-vow'),
                t(' to vow a vow of a '),
                hy('Nazarite', 'hebrew-nazir'),
                t(', to separate themselves unto the LORD:'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nazir',
          title: 'Nazir — &ldquo;separated, consecrated&rdquo;',
          script: 'נָזִיר',
          translit: '<strong>naz&apos;ir</strong> · one separated, set apart, consecrated',
          description:
            'The root means to be separated or distinguished. A Nazarite is someone who marks themselves as belonging to the LORD alone, set apart by vow for a time or for life. John the Baptist and Samson were Nazarites; Jesus is called a Nazarene.',
        },
        {
          kind: 'commentary',
          id: 'nazir-vow',
          html:
            'The Nazarite vow is entirely voluntary. Unlike the priesthood, which was born into the tribe of Levi, any man or woman could make this vow — for 30 days, a year, or a lifetime. It was a way to say, in visible terms, "My allegiance belongs to God alone." The vow was not condemning the ordinary life of wine and family; it was simply choosing to live a season (or a lifetime) visibly marked for the LORD.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 3,
              spans: [
                t('He shall separate himself from wine and strong drink, he shall drink no vinegar of wine, nor vinegar of strong drink, neither shall he drink any '),
                hg('liquor of grapes', 'abstain-wine'),
                t(', nor eat '),
                hg('moist grapes, or dried', 'abstain-wine'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'abstain-wine',
          html:
            'The prohibition covers not just wine, but every product of the grape — juice, vinegar, raisins. Wine was the symbol of worldly rest and pleasure. By abstaining, the Nazarite was saying: "My comfort and celebration do not come from earthly comforts; they come from the LORD." This was not asceticism for its own sake, but a public witness to where allegiance lay.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 4,
              spans: [
                t('All the days of his separation shall there '),
                hg('no razor come upon his head', 'uncut-hair'),
                t(': until the days be fulfilled, in the which he separateth himself unto the LORD, he shall be holy, and shall let the locks of the hair of his head grow.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'uncut-hair',
          html:
            'The uncut hair was a crown of separation. Every morning the Nazarite would look in a mirror and be reminded that they had set themselves apart. Long hair on a man in Israelite culture was itself unusual — it was a visible sign that you belonged to God, not to the ordinary structures of Israelite life. The hair was left to God&apos;s work, untouched by human tools.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 5,
              spans: [
                t('All the days of the vow of his separation he shall '),
                hg('come at no dead body', 'avoid-death'),
                t('. He shall not make himself unclean for his father, or for his mother, for his brother, or for his sister, when they die: because the consecration of his God is upon his head.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'avoid-death',
          html:
            'In Israel, contact with a dead body required a seven-day purification ritual. The Nazarite was called to avoid this entirely — not for squeamishness, but because death represented separation from God. By refusing to touch the dead, even their own family, the Nazarite was saying: "I will not be pulled into the ordinary orbit of death and decay. My separation unto the LORD is complete." This was the hardest vow to keep. A son could not bury his own father without breaking his Nazarite vow.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 6,
              spans: [
                t('All the days that he separateth himself unto the LORD he shall come at no dead person.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('He may not make himself unclean even for his father, or for his mother, for his brother, or for his sister, when they die: because his separation unto God is consecrated upon his head.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('All the days of his separation he is '),
                hp('holy unto the LORD', 'christ-nazir-holy'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-nazir-holy',
          title: 'Christ Connection — The Separated One',
          html:
            'Jesus is called a "Nazarene" (Matt. 2:23), though the text is a Christological puzzle — no Old Testament text makes that exact connection. Yet the image captures Him: set apart wholly for the Father&apos;s will, refusing the world&apos;s comforts, moving toward the death that others avoided, yet never defiled by it. He abstained from wine at the Last Supper (Mark 14:25) and bore a head marked for sacrifice. The Nazarite vow is a faint portrait of a life wholly consecrated to God — and that is Christ&apos;s life precisely.',
        },
        {
          kind: 'carry',
          html:
            'The Nazarite vow asks a hard question: What would it look like if your separation unto the LORD were actually visible? Not forever, perhaps — but for a season, what would you give up, what would you let grow, what would you refuse to touch? The vow was not for everyone, but the question it raised was for everyone: Do I belong to the LORD, or do the world&apos;s comforts own me?',
        },
        {
          kind: 'reflection',
          id: 'nazir-reflection',
          prompt:
            'If you were to mark yourself as set apart to the LORD for one month, what grape-wine or comfort would you put down? What would that cost you?',
        },
      ],
    },

    /* ─── Numbers 6:9–21 — The Ritual of Completion ─────────────────────── */
    {
      ref: 'Numbers 6:9–21',
      title: 'The Offering of Completion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 9,
              spans: [
                t('And if any man die very suddenly by him, and he hath defiled the head of his consecration; then he shall shave his head in the day of his cleansing, on the seventh day shall he shave it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'defilement-sudden',
          html:
            'Even the Nazarite could be defiled. An accidental encounter with a corpse (not sought, but unavoidable) required a restart: shave the head (undoing the sign of separation), begin a new purification period, and restart the vow. The Nazarite vow was fragile, dependent on the keeper&apos;s vigilance — a portrait of how hard it is to live wholly set apart.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 10,
              spans: [
                t('And on the eighth day he shall bring two turtles, or two young pigeons, to the priest, to the door of the tabernacle of the congregation:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the priest shall offer the one for a sin offering, and the other for a burnt offering, and make an atonement for him, for that he sinned by the dead: and shall hallow his head that same day.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he shall consecrate unto the LORD the days of his separation, and bring a lamb of the first year for a trespass offering: but the former days shall be lost, because his separation was defiled.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'restoration-sacrifice',
          html:
            'If defiled, the Nazarite had to begin again. The narrative of Numbers 6 assumes that Nazarites will complete their vows — and when they do, they come to the priest with offerings: a lamb for a trespass offering, a ram for a peace offering, loaves of bread, a grain offering. All of this was a public declaration before the community that the vow had been kept and the separation fulfilled.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 13,
              spans: [
                t('And this is the law of the Nazarite: When the days of his separation are fulfilled: he shall be brought unto the door of the tabernacle of the congregation:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And he shall offer his offering unto the LORD, one he lamb of the first year without blemish for a burnt offering, and one ewe lamb of the first year without blemish for a sin offering, and one ram without blemish for peace offerings,'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And a basket of unleavened bread, cakes of fine flour mingled with oil, and wafers of unleavened bread anointed with oil, and their meat offering, and their drink offering.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 16,
              spans: [
                t('And the priest shall bring them before the LORD, and shall offer his sin offering, and his burnt offering:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And he shall offer the ram for a sacrifice of peace offerings unto the LORD, with the basket of unleavened bread: the priest shall offer also his meat offering, and his drink offering.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the Nazarite shall shave the head of his separation at the door of the tabernacle of the congregation, and shall take the hair of the head of his separation, and put it in the fire which is under the sacrifice of the peace offerings.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'shave-completion',
          html:
            'When the vow was complete, the Nazarite shaved their head and placed that unshorn hair in the fire of the peace offering. The visible sign of separation was consumed before the LORD — a way of saying that the time of separation had ended, that the vow had been fulfilled and witnessed. The hair that had marked them as set apart now returned to God in fire.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 19,
              spans: [
                t('And the priest shall take the sodden shoulder of the ram, and one unleavened cake out of the basket, and one unleavened wafer, and shall put them upon the hands of the Nazarite, after the head of his separation is shaven:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the priest shall wave them for a wave offering before the LORD: this is holy for the priest, with the breast of the wave offering and thigh of the heave offering: and after that the Nazarite may drink wine.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'return-wine',
          html:
            'Once the vow was complete and the offerings made, the Nazarite was released from the restrictions. They could drink wine again, eat grapes again, live in the ordinary world again. The separation had been witnessed, completed, and honored. The Nazarite was holy no longer by the vow, but by the memory of it — and by the way it had changed them.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 21,
              spans: [
                t('This is the law of the Nazarite who hath vowed, and of his offering unto the LORD for his separation, beside that that his means permit: according to the vow which he vowed, so he must do after the law of his separation.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'Not every season of your life will be lived at peak spiritual intensity. The Nazarite vow teaches that some seasons are set apart — times when you lean harder into prayer, say no to comforts, mark yourself publicly as belonging to God. Then the season ends, and you return to ordinary life, changed but not marked. Both are good. The question is: Will you listen when the LORD invites you into a season of separation? And will you complete what you vow?',
        },
        {
          kind: 'reflection',
          id: 'completion-reflection',
          prompt:
            'What would it mean for you to "complete the vow"? Is there a season of separation the LORD has invited you into that you haven&apos;t yet finished?',
        },
      ],
    },

    /* ─── Numbers 6:22–23 — The Transition ──────────────────────────────── */
    {
      ref: 'Numbers 6:22–23',
      title: 'The Priestly Benediction',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 22,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Speak unto Aaron and unto his sons, Saying, On this wise ye shall '),
                hp('bless the children of Israel', 'aaronic-bless-intro'),
                t(', saying unto them,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'aaronic-bless-intro',
          html:
            'Here the narrative shifts from the vow of individual Nazarites to the blessing that will be spoken over the entire people. The word "bless" here is the Hebrew <em>barak</em> — to kneel, to bend the knee, to confer a benefit by lowering oneself toward another. God is about to teach Aaron and his sons the exact words they are to speak — not spontaneous prayers, but a formulaic blessing that will be used for millennia. These words are so sacred that in Jewish tradition, the priestly blessing is still spoken in Hebrew, never translated. Over 3500 years, the same six clauses have brought God&apos;s name into countless rooms, countless families, countless lives.',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Numbers 6:24–26 — The Aaronic Blessing ──────────────────────────── */
    {
      ref: 'Numbers 6:24–26',
      title: 'The Aaronic Blessing — God&apos;s Sevenfold Gift',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 24,
              spans: [
                hp('The LORD bless thee, and keep thee:', 'aaronic-bless-one'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'aaronic-bless-one',
          html:
            'The blessing opens with the first of three invocations of "the LORD" — the Hebrew name <em>Yahweh</em>, God&apos;s covenant name, the name by which He made Himself known to Moses and Israel. <em>Bless</em> means to confer good, to make prosperous, to pour out favor. <em>Keep</em is to guard, to watch over, to hold safe. The blessing is not the priest blessing the people — it is the LORD blessing them through the priest&apos;s words. The priest is simply the conduit, and his mouth the channel through which God lowers Himself toward His people.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 25,
              spans: [
                hp('The LORD make his face to shine upon thee, and be gracious unto thee:', 'aaronic-bless-two'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'aaronic-bless-two',
          html:
            'The blessing continues with the second name of the LORD and a second twofold action: shine His face upon you, and be gracious. The image of God&apos;s face shining is the light of His presence — favor, approval, the warmth of being seen and welcomed. <em>Gracious</em> means to show favor where it is not owed, to give freely what cannot be earned. The image is of God turning toward you, His face bright with welcome, giving you a gift you did not deserve. Paul echoes this directly in 2 Corinthians 4:6: "God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ." The light of creation itself, now bent toward you.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 26,
              spans: [
                hp('The LORD lift up his countenance upon thee, and give thee peace.', 'aaronic-bless-three'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'aaronic-bless-three',
          html:
            'The blessing concludes with the third name of the LORD and the final twofold action: lift up His countenance, and give peace. <em>Lift up His countenance</em> means to turn your face toward someone with favor, to regard them kindly. It is the opposite of having your face hidden, your prayer unheard, your presence ignored. To have the LORD&apos;s face lifted toward you is to know you are seen, regarded, and loved. <em>Peace</em> — <em>shalom</em> in Hebrew — is not mere absence of conflict. It is wholeness, completeness, nothing lacking. It is the integration of all your scattered pieces, the end of striving, the rest of being fully known and fully accepted.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shalom',
          title: 'Shalom — &ldquo;peace&rdquo;',
          script: 'שָׁלוֹם',
          translit: '<strong>shalom</strong> · peace, wholeness, completeness, nothing lacking',
          description:
            'Shalom is the goal-word of Hebrew blessing. It means far more than the absence of war; it means the presence of everything good — health, prosperity, harmony, justice, and the peace of knowing you belong to God. The priestly blessing ends not with a wish for comfort, but with the promise of <em>shalom</em> — the fullness of God&apos;s favor.',
        },
        {
          kind: 'christ',
          id: 'christ-aaronic',
          title: 'Christ Connection — God&apos;s Face Made Flesh',
          html:
            'The Aaronic Blessing speaks of God&apos;s face shining upon us — but the Gospels tell us that God&apos;s face walked into the world in the person of Jesus. "The light of the knowledge of the glory of God" is "in the face of Jesus Christ" (2 Cor. 4:6). When Christ stood before His disciples, His face was the exact image of the Father&apos;s countenance lifted toward them. His grace was not theoretical — it was a hand on a leper, a gentle word to a woman caught in sin, the radical welcome of the kingdom to the outcast. And His peace — "My peace I give unto you" (John 14:27) — is the <em>shalom</em> the blessing promises. In Christ, God does not merely speak the blessing from afar; He becomes the blessing, lowering Himself toward us with a human face.',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Numbers 6:27 — The Promise ────────────────────────────────────── */
    {
      ref: 'Numbers 6:27',
      title: 'God&apos;s Name Upon You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 27,
              spans: [
                t('And they shall '),
                hy('put my name upon the children of Israel', 'hebrew-shem'),
                t('; and I will bless them.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shem',
          title: 'Shem — &ldquo;name&rdquo;',
          script: 'שֵׁם',
          translit: '<strong>shem</strong> · name, reputation, identity, the sum of who you are',
          description:
            'To have God&apos;s name placed upon you is to be marked as His possession, to carry His reputation and His identity. The priest does not merely wish you well — he declares that the name of the LORD is on your head, your heart, your household. You are claimed by God.',
        },
        {
          kind: 'commentary',
          id: 'name-upon',
          html:
            'The blessing concludes not with a prayer or a wish, but with a declaration and a promise: "They shall put My name upon the children of Israel" — and then, as if sealing it, "and I will bless them." The two are inseparable. To carry God&apos;s name is to receive God&apos;s blessing. You are marked as His. Your identity is wrapped up in His. You belong to the LORD, and the LORD has turned toward you, His face bright with welcome, His hand open with grace, His presence offering peace.',
        },
        {
          kind: 'carry',
          html:
            'The Aaronic Blessing is not a prayer request; it is a declaration of what God is doing right now. As you read these six clauses, the priests are speaking them over you across 3500 years. The LORD is blessing you — not because you deserve it, but because His nature is to bend toward His people with favor. His face is shining on you. His grace is being poured out. His peace is being given. The only question is: Do you believe it? Will you let your scattered pieces be gathered into <em>shalom</em>? Will you live as one whose name belongs to the LORD?',
        },
        {
          kind: 'reflection',
          id: 'blessing-reflection',
          prompt:
            'Which clause of the Aaronic Blessing speaks most directly to what your soul needs right now — to be kept safe, to see God&apos;s face shining, or to receive His peace? Sit with that one clause for a moment. What would it mean to actually believe it?',
        },
        {
          kind: 'artwork',
          matchTitle: /aaronic|blessing|priest/i,
          caption: 'Numbers 6:24–26 · The Priestly Benediction',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Numbers 6',
    quote:
      'The LORD bless thee, and keep thee: The LORD make his face to shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 6:24–26 · The Aaronic Blessing',
  },

  hasHebrew: true,
};
