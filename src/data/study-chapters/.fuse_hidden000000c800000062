import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 2 — Hannah's Song of reversal, Eli's wicked sons, Samuel growing,
 * the faithful priest promised. The Magnificat's source material; Mary echoes Hannah.
 */
export const SAMUEL_1_2: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 2,

  estimatedMinutes: { beginner: 9, intermediate: 16, deep: 18 },
  intros: [
    'Hannah has given birth to Samuel after years of barrenness and prayer. Her joy overflows in a song of divine reversal — the hungry filled, the weak strong, the lowly lifted up. But amid this rejoicing, the chapter shows the priesthood itself corrupting from within. Eli&apos;s sons treat the offering as a theft opportunity, and Eli, though he speaks against them, fails to act decisively. Into this gap where leadership crumbles, the child Samuel grows, favored by God and by the people. And the promise comes: though one priestly house falls, a faithful priest will arise, one who will act as God&apos;s heart intends.',
  ],

  opener: {
    matchArtist: /tissot|delacroix/i,
    matchTitle: /hannah|prayer|song/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 2',
    quote:
      'Hannah sang of how the Lord lifts the humble and brings down the mighty. As she rejoiced, Samuel grew before Him, while Eli&apos;s wicked sons abused the priesthood. The Lord promised a faithful priest who would do according to His heart.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 2 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hannah-prayer',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hannah&apos;s Prayer',
      url: 'https://www.sefaria.org/1_Samuel.1',
      description: 'Complete text and commentary on Hannah&apos;s prayer and Samuel&apos;s birth.',
    },
    {
      id: 'bible-odyssey-eli',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Eli and the Priesthood',
      url: 'https://www.bibleodyssey.org/dictionary/eli/',
      description: 'Overview of Eli&apos;s role as high priest and the corruption of his sons.',
    },
    {
      id: 'iaa-shiloh',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Shiloh Excavation',
      url: 'https://www.antiquities.org.il/',
      description: 'Archaeological evidence of the Shiloh temple site where Hannah and Eli worshipped.',
    },
  ],

  sections: [
    /* ─── Hannah's Song of Reversal (1 Sam 2:1–10) ────────────────────── */
    {
      ref: '1 Samuel 2:1–10',
      title: 'The Song of Reversal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('And Hannah '),
                hp('prayed', 'c-hannah-prayer'),
                t(', and said, My heart rejoiceth in the Lord, '),
                hy('mine horn is exalted', 'hebrew-qeren'),
                t(' in the Lord: my mouth is enlarged over mine enemies; because I rejoice in thy '),
                hg('salvation', 'c-reversal'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hannah-prayer',
          html:
            'Hannah&apos;s prayer is not a confession or a plea — it is a victory song. She sings it after Samuel is born, after years of waiting, after the Lord has visited her. Her joy is not tentative. It is the song of someone who has seen God move.[res:sefaria-hannah-prayer][res:bible-odyssey-eli][res:iaa-shiloh]',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-qeren',
          title: 'Qeren — &ldquo;horn&rdquo;',
          script: 'קֶ֫רֶן',
          translit: '<strong>qeren</strong> · horn, strength, honor, might',
          description:
            'A horn in Scripture is a symbol of power and dignity. Hannah&apos;s horn is &ldquo;exalted&rdquo; — her strength, her dignity, her very identity as a woman who bears fruit is restored. The barren woman becomes strong.',
        },
        {
          kind: 'commentary',
          id: 'c-reversal',
          html:
            'Salvation here is not yet cosmic redemption — it is personal deliverance. The Lord has saved Hannah from the shame of barrenness, from the taunts of rivals, from the weight of unfulfilled longing. Her song announces it to the world.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 2,
              spans: [
                t('There is none holy as the Lord: for there is none beside thee: neither is there any rock like our God. Talk no more so exceeding proudly; let not arrogancy come out of your mouth: '),
                hy('for the Lord is a God of knowledge', 'c-knowledge'),
                t(', and by him actions are weighed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-knowledge',
          html:
            'Hannah&apos;s warning is sharp: do not boast. God knows everything, and He weighs all deeds. There is an implicit message here to Peninnah, the rival wife who mocked her — and an implicit warning that reaches across centuries to Eli&apos;s sons, who will not heed it.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('The bows of the mighty men are broken, and they that stumbled are girded with strength. They that were full have hired out themselves for bread; and they that were hungry '),
                hg('ceased', 'c-ceased-hunger'),
                t(': so that the barren hath born seven; and she that hath many children is waxed feeble.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ceased-hunger',
          html:
            'The reversal motif runs throughout: mighty made weak, weak made strong, hungry fed, full made hungry. It is the theology of God&apos;s justice. Hannah is singing her own story as if it were the story of the whole world.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('The Lord killeth, and maketh alive: he bringeth down to the grave, and bringeth up. The Lord maketh poor, and maketh rich: he bringeth low, and lifteth up. '),
                hg('He raiseth up the poor out of the dust', 'c-exaltation'),
                t(', and lifteth up the beggar from the dunghill, to set them among princes, and to make them inherit the throne of glory: for the pillars of the earth are the Lord&apos;s, and he hath set the world upon them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-exaltation',
          html:
            'This is not metaphor — it is the song of someone who has lived it. The barren woman, despised in her culture, has been raised from the dunghill and seated among the honored. Hannah sees in her own transformation the pattern of God&apos;s kingdom.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 5,
              spans: [
                t('He will keep the feet of his saints, and the wicked shall be silent in darkness; for by strength shall no man prevail. The adversaries of the Lord shall be broken to pieces; out of heaven shall he thunder upon them: '),
                hy('the Lord shall judge', 'c-judge'),
                t(' the ends of the earth; and he shall give strength unto his king, and exalt the horn of his '),
                hg('anointed', 'hebrew-mashiach'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judge',
          html:
            'The song closes not with Hannah&apos;s private joy but with cosmic judgment and the exaltation of a king. It is a prayer, a song, and a prophecy all at once. The barren woman sings of divine justice that reaches to the ends of the earth.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mashiach',
          title: 'Mashiach — &ldquo;anointed&rdquo;',
          script: 'מָשִׁיחַ',
          translit: '<strong>mashiach</strong> · the anointed one, Messiah',
          description:
            'This is the first occurrence of the word in Scripture. Hannah sings of an anointed king — partly of David, the king who will come, but ultimately of the One who fulfills all kingly rule.',
        },
        {
          kind: 'christ',
          id: 'christ-magnificat',
          title: 'Christ Connection — The Magnificat Echoes Hannah',
          html:
            'Luke 1:46–55: Mary sings the same song. &ldquo;My soul doth magnify the Lord… He hath put down the mighty from their seats, and exalted them of low degree. He hath filled the hungry with good things; and the rich he hath sent empty away.&rdquo; Mary learned Hannah&apos;s song. The barren woman and the virgin both sing of how God overturns the world — not through human strength but through His sovereign choice. The pattern of reversal that begins with Hannah is still being played out in Mary, and in every promise yet to be fulfilled.',
        },
        {
          kind: 'carry',
          html:
            'Hannah&apos;s song announces a truth that can feel dangerous to speak aloud: that God sides with the lowly, that strength comes to the weak, that the hungry will be filled, and that the proud will be brought down. If you are standing in a place where the world has told you that you don&apos;t matter — that your body is wrong, your voice is too quiet, your gifts are too small — Hannah is singing directly at you. She has been there. And she is telling you: God is watching. He knows. And His justice moves toward the weak.',
        },
        {
          kind: 'reflection',
          id: 'hannah-song',
          prompt: 'Where in your life have you experienced a reversal — weakness becoming strength, waiting becoming joy? What did that teach you about God&apos;s justice?',
        },
      ],
    },

    /* ─── Elkanah and Samuel (1 Sam 2:11) ──────────────────────────────── */
    {
      ref: '1 Samuel 2:11',
      title: 'A Child Devoted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 11,
              spans: [
                t('And '),
                hp('Elkanah went to Ramah', 'c-home'),
                t(' to his house. And '),
                hg('the child Samuel ministered unto the Lord', 'c-samuel-minister'),
                t(' before Eli the priest.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-home',
          html:
            'Elkanah returns home to Ramah with his household — Hannah, the other wives, the rest of his life. But Samuel stays at Shiloh. Hannah has kept her vow. She will see him once a year, but he belongs to God now.',
        },
        {
          kind: 'commentary',
          id: 'c-samuel-minister',
          html:
            'The child ministers — he serves in the tabernacle, does the work of priests, learns the law and the altar. He is being formed by proximity to God&apos;s presence before he even understands what he is becoming.',
        },
      ],
    },

    /* ─── Eli's Sons and the Corruption of Offering (1 Sam 2:12–17) ──── */
    {
      ref: '1 Samuel 2:12–17',
      title: 'The Corruption of the Priesthood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 12,
              spans: [
                t('Now the sons of Eli were '),
                hy('sons of Belial', 'hebrew-belial'),
                t('; they knew not the Lord. And the custom of the priests with the people was, that, when any man offered sacrifice, the priest&apos;s servant came '),
                hg('with a fleshhook', 'c-theft'),
                t(' of three teeth, struck it into the pan or kettle, all that the fleshhook brought up the priest took for himself. Even so they did in Shiloh unto all the Israelites that came thither.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-belial',
          title: 'Belial — &ldquo;worthless&rdquo;',
          script: 'בְלִיַּעַל',
          translit: '<strong>belial</strong> · worthless, wicked, without value or restraint',
          description:
            'A son of Belial is someone who has severed himself from God&apos;s order. He knows the rituals but not the God behind them. Later, "Belial" becomes almost a title for spiritual opposition.',
        },
        {
          kind: 'commentary',
          id: 'c-theft',
          html:
            'The offense runs deep. The priest&apos;s portion was meant to be prescribed and honorable. Instead, Hophni and Phinehas are taking what they wish, before the fat is even burnt as the Lord&apos;s portion. They are stealing from God and from the people at the same time. They know the mechanics of sacrifice but not its meaning — they have separated the ritual from obedience.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 13,
              spans: [
                t('Also before they burnt the fat, the priest&apos;s servant came, and said to the man that sacrificed, Give flesh to roast for the priest; for he will not have sodden flesh of thee, but raw. And if any man said unto him, Let them not fail to burn the fat '),
                hg('presently', 'c-presently'),
                t(', then take as much as thy soul desireth; he answered him, Nay; but thou shalt give it me now: and if not, I will take it by force.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-presently',
          html:
            'The protocol allowed the fat to be burnt first — that was God&apos;s portion, the most aromatic, the sign of honor to the Lord. Hophni and Phinehas will not wait. They demand the meat raw and immediately, using intimidation. The text shows the mechanics of corruption: a small departure from protocol becomes a brazenly sinful act.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 14,
              spans: [
                t('Wherefore the sin of the young men was very great before the Lord: for men abhorred the '),
                hy('offering of the Lord', 'c-abhorring'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abhorring',
          html:
            'The damage is not just to the priests — it is to the entire faith community. When leaders corrupt the sacred, the people&apos;s ability to approach God with integrity crumbles. The offering becomes something to dread instead of something that draws you closer to the Lord.',
        },
        {
          kind: 'carry',
          html:
            'The corruption of Eli&apos;s sons is not hidden or mysterious — the text says plainly that the people abhorred the offering. Everyone knew. But nobody stopped it. The damage of letting wickedness in high places stand is not only to the institution — it is to the faith of ordinary people trying to worship. When the sacred is stolen for personal gain, it teaches the world that God does not matter.',
        },
      ],
    },

    /* ─── Samuel Growing; Hannah's Faithfulness (1 Sam 2:18–21) ───────── */
    {
      ref: '1 Samuel 2:18–21',
      title: 'The Child Who Grows in Favor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 18,
              spans: [
                t('But '),
                hp('Samuel ministered', 'c-samuel-contrast'),
                t(' before the Lord, being a child, girded with a linen ephod. And his mother made him a little coat, and brought it to him from year to year, when she came up with her husband to offer the yearly sacrifice.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-samuel-contrast',
          html:
            'The contrast is stark: Hophni and Phinehas steal and despise the offering. Samuel serves. Hophni and Phinehas are the sons of the high priest but unknown to God. Samuel is a child, a nobody, but he is drawing near to the Lord. The priesthood belongs to those who draw near, not to those who hold the title.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 19,
              spans: [
                t('And Eli blessed Elkanah and his wife, and said, The Lord give thee seed of this woman for the loan which is lent to the Lord. And they went to their own home.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eli-blessing',
          html:
            'Eli speaks a blessing, and it is answered. The text shows Eli at his best here — he is honoring Hannah&apos;s dedication, recognizing her sacrifice, praying for her fruitfulness. He can be just and righteous in small moments. It is the larger justice he fails to enforce.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 20,
              spans: [
                t('And the Lord visited Hannah, and she conceived, and bare three sons and two daughters. And the child Samuel grew before the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hannah-fruitful',
          html:
            'The blessing is fulfilled. Hannah bore one son in faith and gave him to God. Now the Lord gives her more — five children more. Her faithfulness is not punished. The woman who gave away her firstborn is filled with abundance. This is mercy.',
        },
        {
          kind: 'christ',
          id: 'christ-grew-favor',
          title: 'Christ Connection — Growing in Favor',
          html:
            'Luke 2:52: &ldquo;Jesus increased in wisdom and stature, and in favour with God and man.&rdquo; Samuel&apos;s growth is the pattern that Jesus fulfills. A child, wholly devoted, growing in the favor of both God and man. The same Spirit that dwelt with Samuel in the tabernacle is the Spirit of the One born in Bethlehem.',
        },
        {
          kind: 'carry',
          html:
            'Hannah visits her son once a year. The little coat she makes for him, the yearly trip to see him — it is the fiber of parental love threaded through obedience. She keeps her vow. She raises her other children. And she watches Samuel grow into what God is making him. The hardest part of faith is sometimes not the sacrifice itself but the faithfulness that continues after the sacrifice is made.',
        },
        {
          kind: 'reflection',
          id: 'samuel-grows',
          prompt: 'What has God asked you to give away, and how has He continued to bless you beyond that gift? What does faithfulness look like in the waiting?',
        },
      ],
    },

    /* ─── Eli's Weak Rebuke (1 Sam 2:22–25) ────────────────────────────── */
    {
      ref: '1 Samuel 2:22–25',
      title: 'The Failure of a Weak Leader',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 22,
              spans: [
                t('Now Eli was very old; heard all his sons did to all Israel; and how they '),
                hy('lay with the women', 'c-sexual-sin'),
                t(' that assembled at the door of the tabernacle.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sexual-sin',
          html:
            'The corruption has escalated. What began as theft from the offering has become sexual sin. Women came to the tabernacle, perhaps with their own prayers and sacrifices, and they were exploited. The priesthood, which should have been a place of protection, became a place of predation.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 23,
              spans: [
                t('And he said unto them, Why do ye such things? for I hear of your evil dealings by all this people. Nay, my sons; for it is no good report that I hear: ye make the Lord&apos;s people to transgress. If one man sin against another, God shall judge him: but '),
                hg('if a man sin against the Lord', 'c-eli-words'),
                t(', who shall intreat for him? Notwithstanding they hearkened not to the voice of their father, because '),
                hy('the Lord would slay them', 'c-judgment-certain'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eli-words',
          html:
            'Eli knows the right words. He knows the weight of sin against the Lord. His theology is sound. But his action is none. He rebukes, but he does not remove them from office. He speaks truth but enforces nothing.',
        },
        {
          kind: 'commentary',
          id: 'c-judgment-certain',
          html:
            'The reason they did not listen is given plainly: the Lord had already decided to judge them. They were past repentance. Their fate was sealed, not because their sin was too great for God to forgive, but because they were determined to continue in it, and God&apos;s judgment was already moving toward them. Eli&apos;s words, though correct, could not turn them because they were already lost.',
        },

        {
          kind: 'carry',
          html:
            'There is a particular pain in Eli&apos;s position — he sees the truth, he speaks the truth, he understands the stakes, and he is completely unable to stop what is happening. His sons do not listen to him because they are set on their course. Some of the hardest moments of leadership are watching people you are responsible for walk toward judgment you cannot prevent. But the failure here is not only powerlessness — it is that Eli did not exercise the authority he had. He could have removed them. He chose to speak instead.',
        },
      ],
    },

    /* ─── The Prophet&apos;s Judgment (1 Sam 2:26–36) ──────────────────── */
    {
      ref: '1 Samuel 2:26–36',
      title: 'The Faithful Priest Promised',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 26,
              spans: [
                t('And the child Samuel '),
                hg('grew on', 'c-samuel-favor'),
                t(', and was in favour both with the Lord, and also with men.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-samuel-favor',
          html:
            'The text places Samuel&apos;s growth directly after the account of his father in the faith&apos;s failure. While the priesthood crumbles, the boy grows. God is already providing what Eli cannot.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 27,
              spans: [
                t('And there came a man of God unto Eli, and said unto him, Thus saith the Lord, Did I plainly appear unto the house of thy father, when they were in Egypt in Pharaoh&apos;s house? And did I choose him out of all the tribes of Israel to be my priest, to offer upon mine altar, to burn incense, to wear an ephod before me? and did I give unto the house of thy father all the offerings made by fire of the children of Israel? Wherefore kick ye at my sacrifice and at mine offering, which I have commanded in my habitation; and honourest thy sons above me, to make yourselves fat with the chiefest of all the offerings of Israel my people?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mercy-betrayed',
          html:
            'God&apos;s indictment is comprehensive. He did not have to choose the house of Eli at all — He chose them freely, and gave them the prerogatives and honor of the priesthood. In return, they have treated His sacrifice as plunder. Worse, Eli has honored his sons above God. The priesthood was meant to be a trust, and he has broken it.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 28,
              spans: [
                t('Wherefore the Lord God of Israel saith, I said indeed that thy house, and the house of thy father, should walk before me for ever: but now the Lord saith, Be it far from me; for '),
                hy('them that honour me I will honour', 'c-honor-principle'),
                t(', and they that despise me shall be lightly esteemed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-honor-principle',
          html:
            'This is a central principle of Scripture: honor flows toward those who honor God. Dishonor flows toward those who despise Him. The promise that Eli&apos;s house would walk before the Lord forever is now revoked. The covenant has been broken.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 29,
              spans: [
                t('Behold, the days come, that I will cut off thine arm, and the arm of thy father&apos;s house, that there shall not be an old man in thine house. And thou shalt see an enemy in my habitation, in all the wealth which God shall give Israel: and there shall not be an old man in thine house for ever. And the man of thine, whom I shall not cut off from mine altar, shall be to consume thine eyes, and to grieve thine heart: and all the increase of thine house shall die in the flower of their age.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judgment-details',
          html:
            'The judgment is detailed and merciless. No one from Eli&apos;s house will grow old. They will live to see the house brought low. One descendant will survive, but only to witness the suffering he cannot prevent — a survivor cursed to watch.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 30,
              spans: [
                t('And this shall be a sign unto thee, that shall come upon thy two sons, Hophni and Phinehas; in one day they shall die both of them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sign-immediate',
          html:
            'The sign is swift and undeniable. Both sons will die on the same day — a death so sudden and synchronized that no one can mistake it for chance. God Himself is keeping score.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 31,
              spans: [
                t('And I will raise me up a '),
                hg('faithful priest', 'c-faithful-priest'),
                t(', that shall do according to that which is in mine heart and in my mind: and I will build him a sure house; and he shall '),
                hg('walk before my anointed', 'c-anointed-walk'),
                t(' for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-faithful-priest',
          html:
            'But judgment is not the last word. God will raise up a faithful priest. In the immediate history, this is Samuel — and later, Zadok, who will be the priest of David. But the promise reaches beyond any single priest. It reaches for one who will do perfectly what the priesthood is meant to do: act as God&apos;s heart intends.',
        },
        {
          kind: 'commentary',
          id: 'c-anointed-walk',
          html:
            'The faithful priest will walk before God&apos;s anointed — before the king. The priesthood and kingship will work together, the priestly heart and the royal power aligned. This is the vision of a redeemed institution.',
        },
        {
          kind: 'christ',
          id: 'christ-faithful-priest',
          title: 'Christ Connection — The Faithful Priest',
          html:
            'Hebrews 4:14–16 and 5–7: Jesus is &ldquo;a great high priest that is passed into the heavens.&rdquo; He is the faithful priest. He does not steal from the offering or exploit the sacred. He offers Himself. His priesthood is eternal, unchanging, full of mercy and truth. Where Eli failed, where all the sons of Levi finally fell short, Christ is the perfect priest — the one who acts according to God&apos;s heart entirely. The promise to raise up a faithful priest finds its fullness in Him.',
        },
        {
          kind: 'carry',
          html:
            'The news that a faithful priest will come does not erase what Eli&apos;s sons have done. The people they hurt are still hurt. The damage to trust is still real. But it means this: corruption in high places does not get the last word. God can and will replace it with faithfulness. You do not have to wait for broken institutions to fix themselves. You can wait for God to move.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'faithful-priest',
          prompt: 'Where have you seen trust broken by leaders? What has it cost you? How does the promise of a faithful priest who acts according to God&apos;s heart change that?',
        },
      ],
    },
  ],
};
