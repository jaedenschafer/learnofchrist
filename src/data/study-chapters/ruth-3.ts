import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ruth 3 — The Threshing Floor
 *
 * A foreign woman, a faithful man, and the courage to ask for covering.
 * The whole scene is risky — and the text trusts the dignity of all parties,
 * and the providence of God to honor risk taken in obedience and faith.
 * Boaz will move toward marriage while honoring the law precisely.
 * Christ emerges as the nearer kinsman, drawing near in the night,
 * covering us with His robe.
 */
export const RUTH_3: RichChapterContent = {
  bookSlug: 'ruth',
  bookName: 'Ruth',
  chapter: 3,

  estimatedMinutes: { 5: 3, 10: 7, 15: 10 },
  intros: [
    'Ruth 3 moves the story from the barley fields into intimate territory. Naomi has a plan: send Ruth to the threshing floor at night with a simple but dangerous request. By ancient law and custom, a kinsman-redeemer could marry a widow and restore her family line. But the asking itself is Ruth\'s move. She will approach Boaz under cover of darkness, uncover his feet — a sign of intimacy — and ask for his covering. The whole scene is risky. The text trusts the virtue of both.',
    'But beneath the risk is something deeper: the echo of Boaz\'s earlier promise that God\'s wings would cover her (Ruth 2:12), now asked as a personal request. The threshing floor becomes a place where faith and human initiative meet, where a redeemer\'s commitment is sealed in the night, and where the providence of God moves through obedience and courage.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /ruth|threshing/i,
    caption: 'Ruth at the Threshing Floor',
  },

  bottomShare: {
    label: 'Share Ruth 3',
    quote:
      'Ruth asks Boaz to cover her as a kinsman-redeemer. Boaz honors her virtue, follows the law faithfully, and moves toward redemption. God\'s commitment to His people works through human courage and faithfulness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ruth 3 · Study Guide',
  },

  sections: [
    /* ─── Ruth 3:1–5 — Naomi\'s Plan ──────────────────────────────────── */
    {
      ref: 'Ruth 3:1–5',
      title: 'Naomi\'s Plan',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              1,
              'Then Naomi her mother in law said unto her, My daughter, shall I not seek rest for thee, that it may be well with thee?'
            ),
            plain(2, 'And now is not Boaz of our kindred, with whose maidens thou wast? Behold, he winnoweth barley to night in the threshingfloor.'),
            plain(3, 'Wash thyself therefore, and anoint thee, and put thy raiment upon thee, and get thee down to the floor: but make not thyself known unto the man, until he shall have done eating and drinking.'),
            plain(4, 'And it shall be, when he lieth down, that thou shalt mark the place where he shall lie, and thou shalt go in, and uncover his feet, and lay thee down; and he will tell thee what thou shalt do.'),
            plain(5, 'And she said unto her, All that thou sayest unto me I will do.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seek-rest',
          html:
            'Naomi\'s opening word is <em>rest</em> — the same word God offered Israel after the wilderness, after the plagues. A good rest is not passivity; it is stability, security, a place where you can finally settle. Naomi wants Ruth to have a husband and a household, not wandering work. She is thinking like a mother.',
        },
        {
          kind: 'commentary',
          id: 'c-kindred',
          html:
            'Boaz is described as a <em>near kinsman</em> — one of the family circle, yet still a stranger in some sense. In the culture of ancient Israel, a kinsman-redeemer had legal standing to restore a family line by marrying a widow. Naomi\'s plan is not seduction; it is a formal, lawful proposal inside the custom of the time.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-goel',
          title: 'Goel — "kinsman-redeemer"',
          script: 'גֹאֵל',
          translit: '<strong>goel</strong> · the one who redeems, a kinsman with legal power',
          description:
            'A goel restores what was lost — land, freedom, family line. The word carries the weight of covenant obligation. To be a goel is to take on another\'s debt as your own. Christ will be called by this very name.',
        },
        {
          kind: 'commentary',
          id: 'c-uncover-feet',
          html:
            'To &ldquo;uncover his feet&rdquo; was a gesture of intimacy and a formal proposal. Ruth will be asking, through this action, for Boaz to take her as wife. The text does not hide the boldness of it. In a world where women had no power to initiate, Ruth is about to speak first.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the women and men in Scripture whom God uses most are the ones who break the expected silence. Ruth is about to risk everything on a request. Naomi has seen something in Boaz that makes the risk worth it — his virtue, his justice, his care. Sometimes obedience asks us to speak up, to make ourselves known, to ask for what we need. The God of Ruth does not ask us to disappear.',
        },
        {
          kind: 'reflection',
          id: 'naomi-plan',
          prompt:
            'Where might God be calling you to ask for something you need — not to manipulate, but to make yourself known? What makes the asking feel risky?',
        },
      ],
    },

    /* ─── Ruth 3:6–11 — The Threshing Floor at Midnight ──────────────────── */
    {
      ref: 'Ruth 3:6–11',
      title: 'The Threshing Floor at Midnight',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              6,
              'And she went down unto the floor, and did according to all that her mother in law bade her.'
            ),
            plain(
              7,
              'And when Boaz had eaten and drunk, and his heart was merry, he went to lie down at the end of the heap of corn: and she came softly, and uncovered his feet, and laid her down.'
            ),
            plain(8, 'And it came to pass at midnight, that the man was afraid, and turned himself: and, behold, a woman lay at his feet.'),
            plain(9, 'And he said, Who art thou? And she said, I am Ruth thine handmaid: spread therefore thy skirt over thine handmaid; for thou art a near kinsman.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-obedience',
          html:
            'Ruth does exactly what Naomi instructed — no more, no less. She does not improvise or exceed the plan. There is a humble obedience running through her that is visible in every action: she gleans quietly, she asks permission, she follows instructions. The text builds toward something: what happens when such obedience meets a man of such integrity?',
        },
        {
          kind: 'commentary',
          id: 'c-midnight',
          html:
            'Midnight brings fear. Boaz wakes startled by a stranger at his feet. But he does not rage or shame her. He asks a simple question: <em>Who art thou?</em> There is dignity in his response, even in the dark, even in surprise. The night is the place where truth comes out.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kanaph',
          title: 'Kanaph — "skirt" (wing)',
          script: 'כָּנָף',
          translit: '<strong>kanaph</strong> · the edge of a garment; a wing; protection',
          description:
            'This is the same word Boaz used in Ruth 2:12: "the Lord, under whose wings thou art come to trust." Ruth now asks Boaz to be the human instrument of that covering. The whole story echoes through one Hebrew word — from divine protection to a human proposal.',
        },
        {
          kind: 'christ',
          id: 'christ-covering',
          title: 'Christ Connection — Covered by His Robe',
          html:
            'Ruth asks to be covered with Boaz\'s skirt — his robe, his protection, his name. Paul uses the same image for salvation: &ldquo;For as many of you as have been baptized into Christ have put on Christ&rdquo; (Gal. 3:27). We are clothed in His righteousness, covered by His robe. In Romans 13:14, Paul writes, &ldquo;put ye on the Lord Jesus Christ, and make no provision for the flesh.&rdquo; Ruth asks for what the whole gospel offers — to be clothed and known and redeemed.',
        },
        {
          kind: 'carry',
          html:
            'There is courage in asking for what you need. Ruth does not hide, does not whisper apologetically, does not shrink herself. She makes herself known and makes the request. And Boaz, awakening in the dark to find her there, does not shame her. He sees her virtue. Sometimes the deepest parts of following Jesus ask us to lay ourselves down before Him, uncovered and known, and ask: will you cover me? Will you make me clean? Will you give me a name?',
        },
        {
          kind: 'reflection',
          id: 'threshing-floor',
          prompt:
            'What would it feel like to be truly known and covered in your most vulnerable place? Where do you hold back from asking God for the help you need?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Ruth 3:11–13 — The Promise of Redemption ────────────────────────── */
    {
      ref: 'Ruth 3:11–13',
      title: 'The Promise of Redemption',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              10,
              'And he said, Blessed be thou of the Lord, my daughter: for thou hast shewed more kindness in the latter end than at the beginning, inasmuch as thou followedst not young men, whether poor or rich.'
            ),
            plain(
              11,
              'And now, my daughter, fear not; I will do to thee all that thou requirest: for all the city of my people doth know that thou art a virtuous woman.'
            ),
            plain(
              12,
              'And now it is true that I am thy near kinsman: howbeit there is a kinsman nearer than I. Tarry this night, and it shall be in the morning, that if he will perform unto thee the part of a kinsman, well; let him do the kinsman\'s part: but if he will not do the part of a kinsman to thee, then will I do the part of a kinsman to thee, as the Lord liveth: lie down until the morning.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-virtue',
          html:
            'Boaz calls Ruth a <em>virtuous woman</em> — the same phrase used for the ideal woman in Proverbs 31. Her virtue is not abstract; it is known throughout the city. She has earned respect through her work and her fidelity. And Boaz himself is a man of such honor that his first response to her proposal is not to take advantage, but to honor her character.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chayil',
          title: 'Chayil — "virtue" (strength, excellence)',
          script: 'חַ֫יִל',
          translit: '<strong>chayil</strong> · strength, vigor, capability; excellence of character',
          description:
            'The word carries weight — not fragile goodness, but a strength that earns respect. Ruth is described with the same word used for mighty warriors. Her virtue is not submissiveness; it is a strength that moves through the world with integrity.',
        },
        {
          kind: 'commentary',
          id: 'c-nearer-kinsman',
          html:
            'Here the story complicates. There is a kinsman nearer than Boaz. Law required the nearer kinsman to be given first right. Boaz will not steal Ruth\'s redemption; he will follow the law precisely, even though it risks losing her to another man. This is justice, held in the dark, in the night, while Ruth lies at his feet. Boaz could take what he wants. Instead, he honors the covenant way.',
        },
        {
          kind: 'commentary',
          id: 'c-as-the-lord-liveth',
          html:
            'Boaz swears by the name of the Lord — <em>as the Lord liveth</em>. His promise is not personal appetite; it is a covenant sworn before God. He is saying: I will redeem you, even if I have to move through the law, even if it costs me, as certainly as the Lord is living. This is a promise that carries the weight of heaven.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the answer to our prayer comes wrapped in a delay. Boaz does not immediately claim Ruth, though he could. He honors the law, the nearer kinsman\'s right, the proper process. And in doing so, he shows us something about God: that His redemption is not reckless or unjust. It moves with integrity. Sometimes His answer is yes, but a yes that comes the right way, through the right door, on the right grounds. The waiting is not a no. It is a promise being prepared.',
        },
        {
          kind: 'reflection',
          id: 'promise',
          prompt:
            'Where are you waiting for something God has promised, but the path to it is more complicated than you hoped? What would it mean to trust His justice while you wait?',
        },
      ],
    },

    /* ─── Ruth 3:14–18 — Six Measures of Barley ──────────────────────────── */
    {
      ref: 'Ruth 3:14–18',
      title: 'The Six Measures and the Promise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(14, 'And she lay at his feet until the morning: and she rose up before one could know another. For he said, Let it not be known that a woman came into the floor.'),
            plain(15, 'Also he said, Bring the vail that thou hast upon thee, and hold it. And when she held it, he measured six measures of barley, and laid it on her; and she went into the city.'),
            plain(16, 'And when she came to her mother in law, she said, Who art thou, my daughter? And she told her all that the man had done to her.'),
            plain(17, 'And she said, These six measures of barley gave he me; for he said to me, Go not empty unto thy mother in law.'),
            plain(18, 'Then said she, Sit still, my daughter, until thou know how the matter will fall: for the man will not be in rest, until he have finished the thing this day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-discretion',
          html:
            'Boaz is careful about Ruth\'s reputation. He sends her away before dawn, before she can be seen. In a culture where a woman\'s honor was everything, his discretion protects her virtue even in the dark. This is not shame — it is care. He will not let gossip undo what he has promised.',
        },
        {
          kind: 'commentary',
          id: 'c-six-measures',
          html:
            'Six measures of barley is not starvation food; it is a substantial gift. And Boaz gives it with a purpose: <em>Go not empty unto thy mother in law.</em> He is thinking of Naomi too. He knows that Ruth has been gleaning not for herself but to care for her mother-in-law. His redemption will extend to both of them.',
        },
        {
          kind: 'commentary',
          id: 'c-sit-still',
          html:
            'Naomi tells Ruth: <em>Sit still, my daughter, until thou know how the matter will fall: for the man will not be in rest, until he have finished the thing this day.</em> This is perhaps the deepest word in the book. While Ruth rests, while Naomi waits, the redeemer is already moving. The redemption is not Ruth\'s work anymore. It belongs to him now. She is invited to stop working and trust.',
        },
        {
          kind: 'christ',
          id: 'christ-redeemer-works',
          title: 'Christ Connection — We Rest While He Works',
          html:
            'The echo runs through Scripture: <em>Sit still</em> (Ruth 3:18); <em>Rest in the Lord</em> (Psalm 37:7); <em>Come unto me, all ye that labour and are heavy laden, and I will give you rest</em> (Matthew 11:28); <em>We which have believed do enter into rest</em> (Hebrews 4:3). The pattern is always the same: the redeemer\'s work is done. Our part is to receive it, to sit still, to let Him finish what He has begun. &ldquo;It is finished,&rdquo; Jesus said on the cross. The redemption was not incomplete. We enter a rest that is already prepared.',
        },
        {
          kind: 'carry',
          html:
            'If something in your life feels unfinished right now — a healing you\'re waiting for, a situation you\'ve been trying to manage, a wound you\'ve been working to repair — there is a word in Ruth for you: <em>Sit still.</em> Not passivity, not giving up. But the kind of resting that says: I have done what I could. I have made my request known. Now the redeemer is moving. He is not at rest until the thing is finished. And I can rest while He works.',
        },
        {
          kind: 'reflection',
          id: 'sit-still',
          prompt:
            'Where has God asked you to stop striving and let Him finish the work? What does it feel like to hand something over to His redemption?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
