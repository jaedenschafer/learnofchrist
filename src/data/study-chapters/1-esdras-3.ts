import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Esdras 3 — The Contest of the Three Bodyguards
 *
 * Unique to 1 Esdras (no parallel in canonical Ezra), this chapter presents
 * a wisdom-contest at King Darius's court. Three bodyguards propose riddles
 * about what is strongest: wine, the king, women — or truth above all.
 * Their arguments, submitted and then defended in person, explore power,
 * desire, and finally, the unshakeable strength of truth itself.
 */
export const FIRST_ESDRAS_3: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 3,

  estimatedMinutes: { 5: 9, 10: 13, 15: 16 },
  intros: [
    'In 1 Esdras 3, King Darius holds a great feast for all his officials. After dinner, the mood turns to riddles: the king asks his three young bodyguards a question that will consume the whole chapter — What is strongest in all the world? One answers wine. One answers the king. One answers women. But the third adds a fourth answer that changes everything: truth.',
    'This story is unique to 1 Esdras. You will find no version of it in the canonical book of Ezra. Yet it is filled with the questions the Bible keeps asking: What is real power? What is worth building your life on? The bodyguards argue with passion, wit, and finally, conviction. And by the end, the strongest thing in all the world turns out to be the one thing that sets you free.',
  ],

  opener: {
    matchArtist: /rubens|van dyck|baroque/i,
    matchTitle: /feast|banquet|king|court/i,
    caption: 'The Court of King Darius',
  },

  bottomShare: {
    label: 'Share 1 Esdras 3',
    quote:
      'Three young bodyguards argue before the king about what is strongest in the world. Wine, kingship, and women each have their champions — until one argues for truth, and declares: "Truth is great and stronger than all things." Great is truth, and it prevails.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 3 · Study Guide',
  },

  sections: [
    /* ─── The Great Feast ───────────────────────────────────────────────── */
    {
      ref: '1 Esdras 3:1–7',
      title: 'King Darius and His Feast',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              1,
              t('And King Darius made a great feast unto all that were under him, and unto all that were born in his house, and all the princes of the '),
              hy('Media and Persia', 'esdras-media'),
              t(',')
            ),
            verse(2, t('And all the chief captains and judges and governors that were under him from India unto Ethiopia, of an hundred and twenty and seven provinces.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras-media',
          html:
            'The Medo-Persian Empire was vast — one of the ancient world&apos;s largest. King Darius sits at the center of an enormous network of power, officials, and provinces. Yet even a king with all this authority will soon learn that he does not hold the strongest thing.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              3,
              t('And when they had eaten and drunken, and being satisfied with wine, they returned to their own homes. Then Darius went into his bedchamber, and slept, and soon after awaked.')
            ),
          ],
        },
        {
          kind: 'carry',
          html:
            'Notice the rhythm here: a great feast, wine flowing, everyone satisfied and returning home. Then the king, full and drowsy, goes to his bedchamber. Feasts are temporary. Wine&apos;s effects pass. The pleasures that crowd a palace one moment disperse the next. After all the noise, Darius is alone again. And it is in that solitude that the real question begins.',
        },
        {
          kind: 'reflection',
          id: 'feast-reflection',
          prompt:
            'When you are alone after the noise and pleasure of the day settle down, what question rises in you? What are you really seeking?',
        },
      ],
    },

    /* ─── Three Bodyguards, Three Riddles ──────────────────────────────── */
    {
      ref: '1 Esdras 3:4–8',
      title: 'The Three Bodyguards Propose Their Riddles',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              4,
              t('Then the three young men that were the '),
              hy('king&apos;s guard', 'esdras-guard'),
              t(' that kept the king&apos;s person spake one to another; Let us speak every one a '),
              hg('sentence', 'esdras-sentence'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras-guard',
          html:
            'The three are the king&apos;s closest attendants — they sleep outside his door, stand watch over his body, are entrusted with his life. Their closeness to power gives them license to speak freely. But there is also irony here: the men closest to ultimate earthly authority are about to argue about what truly holds power.',
        },
        {
          kind: 'commentary',
          id: 'esdras-sentence',
          html:
            'They agree to speak &ldquo;sentences&rdquo; — statements, answers, thesis-statements about reality. Not casual speculation, but each man offering a conviction about what he believes is strongest.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              5,
              t('And let every one of us speak his '),
              hg('sentence', 'esdras-sentence-again'),
              t(', and lay it under the king&apos;s pillow;')
            ),
            verse(
              6,
              t('And let the king judge which sentence is the wisest, and to him will the king give great gifts and rewards for his sentence. For I will speak of the '),
              hp('strength of wine', 'wine-strength'),
              t('; and the second shall say that the '),
              hp('king is strong', 'king-strong'),
              t('; and the third shall say that '),
              hp('women are strong', 'c-women-strong'),
              t('; but above all things '),
              hp('Truth beareth away the victory', 'truth-victory'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras-sentence-again',
          html:
            'Each man will write his argument and place it under the king&apos;s pillow. There is something poignant about this — a king cannot simply command truth. Truth must be argued for, defended, laid where it will be discovered. The king must read it as he wakes, must encounter it in solitude, must choose to hear it.',
        },
        {
          kind: 'christ',
          id: 'wine-strength',
          title: 'Christ Connection — Wine as Power',
          html:
            'Wine in the Bible is desire and pleasure unmoored from wisdom. The bodyguard who chooses wine as strongest is arguing for appetite. Later, Paul tells the Ephesians not to be &ldquo;drunk with wine, wherein is excess; but be filled with the Spirit&rdquo; (Eph. 5:18). The Spirit does not compete with wine because the Spirit offers what wine only imitates — true joy. Jesus, at a wedding feast, turned water into wine — but wine that points beyond itself to His presence. The strongest thing was never the wine; it was always the One at the feast.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever reached for something to feel better — a drink, a scroll, a distraction — you know the argument: this is strength. This will make me feel capable, at ease, in control. But the bodyguard&apos;s argument about wine is about to lose. And it will lose to something that actually sets you free.',
        },
      ],
    },

    /* ─── The Wager: Three Arguments Submitted ──────────────────────────── */
    {
      ref: '1 Esdras 3:7–12',
      title: 'Three Arguments Under the Pillow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              7,
              t('So every one wrote his own sentence, and sealed it, and laid it under King Darius his pillow; and said unto the king, Pray thee, sit and eat and drink, and all thy business shall be performed unto thee: for we will give it to the king, when thou risest in the morning.')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The bodyguards frame their riddle as a gift to the king — an entertainment, a pleasant surprise when he wakes. They are not challenging him; they are honoring him with a puzzle. And they promise that all the king&apos;s business will be performed: the feast will continue, the empire will run smoothly. There is no threat here, only curiosity. And yet the simplest questions often shake the strongest walls.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(8, t('Now when the king was risen in the morning, they came unto him, and took their oaths before him, and went in, and sat down.')),
            verse(
              9,
              t('Then said the king unto them, Declare your sentences. So the first, who had spoken of the strength of wine, began to say,')
            ),
          ],
        },
        {
          kind: 'carry',
          html:
            'The king rises, finds the written answers under his pillow, and summons the bodyguards. They take oaths — they are bound to defend what they have written. This is not philosophy. This is conviction. Each man is now answerable for his claim before the king and his court. The next voices you hear are voices willing to be wrong, to be judged, to stake their reputation on their answer. That is the voice of someone who has actually thought.',
        },
      ],
    },

    /* ─── First: The Strength of Wine ──────────────────────────────────── */
    {
      ref: '1 Esdras 3:12–19',
      title: 'Wine — The Master of All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              12,
              t('Then said the first, who had spoken of the strength of wine, '),
              hy('O ye men', 'esdras-ye-men'),
              t(', how exceeding strong is wine! it causeth all men to err that drink it.')
            ),
            verse(13, t('It maketh the mind of the king and of the fatherless child to be all one; of the bond man and of the free.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras-ye-men',
          html:
            'The first bodyguard appeals to universal experience. Wine does something real: it levels hierarchy, erases difference, dissolves the careful boundaries we maintain. In wine, king and slave, father and orphan, become equal. This is not an argument against wine in itself — it is an argument for its power to remake reality in the moment.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              14,
              t('It turneth also every thought into jollity and mirth; and so men forget their sorrow and every debt.')
            ),
            verse(15, t('It maketh every one rich; so that a man forgetteth kings and princes; and it turneth all things into forgetfulness.')),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Wine is presented here as the ultimate escape. It makes the poor feel rich. It makes subjects forget their king. It erases memory of debt and obligation. It is the power to forget, to step outside yourself, to become someone other than who you are. The argument is almost seductive: if wine can do all this, if it can truly remake the world in the drinker&apos;s mind, is it not stronger than anything?',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              16,
              t('When they drink, they remember not friendship nor brotherhood, and shortly after draw out swords: But when they are from the wine, they remember not what they have done.')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'But here the argument turns darker. Wine does not just make us forget our sorrows; it makes us forget ourselves. It turns friends into enemies. It causes violence. And then, when wine wears off, we are left bewildered, unable even to remember what we&apos;ve done. Wine&apos;s power, the first bodyguard is admitting even as he argues for it, is the power to unmake us.',
        },
        {
          kind: 'carry',
          html:
            'The first argument against wine is given by wine&apos;s own champion. He cannot defend what he loves without revealing its cost. If anything in your life has that shape — if you find yourself defending something by naming all the ways it hurts you — that is the moment to pause and listen to what you are actually saying.',
        },
        {
          kind: 'reflection',
          id: 'wine-reflection',
          prompt:
            'What would you be forced to remember about yourself if you gave up the one escape or distraction you reach for most often?',
        },
      ],
    },

    /* ─── Second: The Strength of the King ─────────────────────────────── */
    {
      ref: '1 Esdras 3:19–24',
      title: 'The King — Commander of All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              19,
              t('Then the second, that had spoken of the king, began to say, O ye men, is not the king exceeding strong? for so are all things subject unto him, and whatsoever he commandeth they do.')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The second bodyguard appeals to authority, to the visible hierarchy of power. The king commands, and all things obey. This is strength as dominion. It is the power to make others move. It is the argument of empire.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              20,
              t('If he say, Kill; they kill. If he say, Smite; they smite. If he say, Destroy; they destroy. If he say, Build; they build.')
            ),
            verse(
              21,
              t('So that all his subjects and soldiers are obedient unto him. Moreover if he sit at the meat, or in another time, and his officers sit also beside him,')
            ),
            verse(
              22,
              t('Yet if he bid them depart, none of them may depart from him: or if he command ought to be done, they do it. He is therefore exceeding strong: for they all obey him.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-basileus',
          title: 'Basileus — &ldquo;king&rdquo;',
          script: 'βασιλεύς',
          translit: '<strong>basileus</strong> · one who holds command over many; a ruler',
          description:
            'The Greek word carries the weight of empire. A king is not a wise man or a good man; he is simply one whose word becomes action in others. His strength is measured by obedience.',
        },
        {
          kind: 'christ',
          id: 'king-strong',
          title: 'Christ Connection — The True King',
          html:
            'Jesus was called King, but not in this way. When Pilate asked, &ldquo;Art thou the King of the Jews?&rdquo; Jesus answered, &ldquo;My kingdom is not of this world&rdquo; (John 18:33, 36). A king who rules by command, by force, by obedience extracted — that is how the world measures kingship. But Jesus&apos; kingdom rests on something this bodyguard has not yet named. His rule over your life is not because He forces you, but because He has won your heart. That is a stronger kind of kingship — one that rules by love rather than by command.',
        },
        {
          kind: 'carry',
          html:
            'If someone&apos;s power over you rests only on command and fear, what happens the moment they cannot enforce their will? Real strength is not the power to make others obey; it is the power to make others want to follow. The king in his palace has might. But the one who has your allegiance, your trust, your love — that is a king who needs no guards.',
        },
      ],
    },

    /* ─── Third: The Strength of Women ────────────────────────────────── */
    {
      ref: '1 Esdras 3:24–31',
      title: 'Women — The Hidden Masters',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              24,
              t('Then the third, who had spoken of women, began to say, O ye men, it is not the king, nor the wine, that beareth the rule; but women: for they have borne the king and all the people that bear rule by the sea and land.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-women-strong',
          html:
            'The third bodyguard makes a radical claim: women are the real power because they are the source of all authority. Kings are born of women. Every ruler, every soldier, every person with power emerged from a woman&apos;s body. By this logic, the ultimate source of strength is not force or command, but the capacity to create and nurture life itself.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              25,
              t('Of women came the king and all the princes: and of women came they which planted all the world, and formed all the kingdoms of the earth, and brought all the ornaments into the world.')
            ),
            verse(26, t('And whatsoever they have wrought, that they have done it for the king and for his father.')),
          ],
        },
        {
          kind: 'commentary',
          html:
            'This is an argument about priority: women came first. They bear children, including kings. Every glory that a king achieves is built on the foundation of life given by a woman. The argument is not that women are kinder or gentler (though the bodyguard does not dispute this). It is that women possess a power that cannot be argued with or commanded away — the power to bring forth life.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(27, t('And certainly they labour and toil, and bring up the king.'))
          ],
        },
        {
          kind: 'carry',
          html:
            'This bodyguard is arguing, without quite saying it, that power rooted in dominion (the king) or escape (wine) both depend on something more fundamental: the continuity of life itself. A king does not establish himself; a mother establishes him. Wine does not create culture; mothers do, raising the next generation within families and communities. The argument is profound: perhaps the strongest thing is not what commands or what deceives, but what creates.',
        },
        {
          kind: 'reflection',
          id: 'women-reflection',
          prompt:
            'Who in your life has shaped you in ways no amount of authority or escape ever could — ways that required their presence, their sacrifice, their unrelenting care over time?',
        },
      ],
    },

    /* ─── Fourth: The Strength of Truth ────────────────────────────────── */
    {
      ref: '1 Esdras 3:31–34',
      title: 'Truth — Greater Than All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              31,
              t('So that if women wax old, yet are they strong, if they have borne children and be made mothers of men.')
            ),
            verse(
              32,
              t('But truth endureth, and is always strong; she liveth and conquereth for evermore. With her there is no '),
              hg('accepting of persons', 'esdras-persons'),
              t('; but she doeth that which is just, and refraineth from all unjust and wicked things; and all men do well like of her works.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras-persons',
          html:
            'To &ldquo;accept the person&rdquo; is to show favoritism, to judge based on status rather than substance. Truth does not ask who you are, what power you hold, what you have inherited. Truth is indifferent to rank. This is why truth can never be conquered or ruled — it answers to no earthly king.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              33,
              t('Neither in her sentence is any unrighteousness; and she is the strength, kingdom, power, and majesty, of all ages. Blessed be the God of truth.')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The bodyguard has just said something staggering: truth is where strength, kingdom, power, and majesty truly reside. Not in wine (which dissolves), not in the king (who must die), not even in the continuation of life through women — but in truth itself, which endures forever.',
        },
        {
          kind: 'greek',
          id: 'greek-aletheia',
          title: 'Aletheia — &ldquo;truth&rdquo;',
          script: 'ἀλήθεια',
          translit: '<strong>aletheia</strong> · that which is unconcealed, unhidden; the real state of things',
          description:
            'Truth is not opinion or rhetoric. Aletheia means to unveil what is truly there, to say what actually is. In a world of deception and performance, truth stands alone as what remains when all pretense falls away.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              34,
              t('And when he had thus spoken, all the people and the king said, Great is truth, and mighty above all things.')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The court does not debate the third bodyguard&apos;s answer. The words land with the force of recognition — yes, this is true. Great is truth. Mighty above all things. In a moment, the king and his entire court acknowledge that they have just heard the deepest thing that can be said.',
        },
        {
          kind: 'christ',
          id: 'truth-victory',
          title: 'Christ Connection — Truth Sets Free',
          html:
            'Jesus said, &ldquo;I am the way, the truth, and the life&rdquo; (John 14:6). Not a truth-teller, but truth itself, embodied. And He promised His followers, &ldquo;Ye shall know the truth, and the truth shall make you free&rdquo; (John 8:32). Wine offers the illusion of freedom — escape. The king offers the security of obedience — servitude. But truth offers something neither can: alignment with what actually is. To know truth is to see yourself and your world as God sees it. And that sight — that is what sets you free. It is not freedom from reality, but freedom through reality. &ldquo;Great is truth, and mighty above all things&rdquo; — because it is the only thing that cannot betray you.',
        },
        {
          kind: 'carry',
          html:
            'You have been offered escapes and commands. But what if the real strength you are looking for is much simpler — the courage to see what is actually true, about yourself, your world, your God, and to live in that truth rather than the thousand smaller lies? That strength never breaks. That strength endures. That is the strength that wins.',
        },
        {
          kind: 'reflection',
          id: 'truth-reflection',
          prompt:
            'What truth about yourself, your life, or your God have you been avoiding? What might it mean to live as if that truth is actually stronger than every fear telling you to hide from it?',
        },
      ],
    },
  ],
};
