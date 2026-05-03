import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Job 1 — The Perfect Man, and His Loss
 *
 * There was a man in the land of Uz, perfect and upright, who feared God
 * and eschewed evil. His wealth was immense: thousands of flocks, great
 * herds, a household of many servants, and ten children—the greatest of all
 * men of the East. But in a single day, in a clash between the heavens and
 * the earth, he loses everything: his animals slaughtered, his servants
 * killed, his children crushed beneath a falling house. And yet, in his
 * devastation, Job arises, tears his clothes, shaves his head, falls to the
 * ground, and worships, crying out: "The Lord gave, and the Lord hath taken
 * away; blessed be the name of the Lord." This is the opening of Scripture's
 * deepest meditation on suffering and faith—the moment when a righteous man
 * is tested, and his faith does not break.
 */
export const JOB_1: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 1,

  estimatedMinutes: { beginner: 7, intermediate: 15, deep: 20 },
  intros: [
    'The book of Job begins not in heaven, but on earth—in the land of Uz, a place both real and symbolic, where a man named Job dwells. He is described in terms that seem almost superhuman: perfect, upright, fearing God, eschewing evil. He is blessed beyond measure—thousands of sheep and camels, great herds of oxen and asses, a household of servants, and ten children who feast and celebrate. By every measure of the ancient world, Job is the greatest of all the men of the East. He is, it seems, a man who has earned God&apos;s favor.',
    'But then the scene shifts. What follows is the most mysterious moment in Job&apos;s story—a day in heaven when the sons of God present themselves before the Lord, and Satan comes among them. The Lord asks Satan where he has come from, and Satan answers with a cynical question: Does Job fear God for nothing? Has not God made a hedge about him, blessed him abundantly, increased his substance? Take away his possessions, Satan suggests, and Job will curse God to His face. The Lord consents to a wager. Everything Job has will be taken from him—but not his life. In a single day, through a cascade of catastrophes, Job loses his flocks to raiders, his servants to the sword, his sheep to fire from heaven, his camels to thieves, and his ten children to a mighty wind. All that he owned is gone. And in that moment, as Job rises from the dust, tears his clothes, shaves his head, and falls in worship, he speaks words that will echo through all of Scripture: "The Lord gave, and the Lord hath taken away; blessed be the name of the Lord."',
  ],

  bottomShare: {
    quote:
      'In a single day, Job loses everything—his wealth, his servants, his children—and yet he worships, saying: "The Lord gave, and the Lord hath taken away; blessed be the name of the Lord." This is where suffering begins in Scripture.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 1 · Study Guide',
  },

  sections: [
    /* ─── Job 1:1–3 — The Perfect Man ────────────────────────────────── */
    {
      ref: 'Job 1:1–3',
      title: 'The Perfect Man, Blessed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('There was a man in the land of Uz, whose name was Job; and that man was '),
                hg('perfect and upright', 'job1-perfect'),
                t(', and one that '),
                hg('feared God, and eschewed evil', 'job1-fear-eschew'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And there were born unto him seven sons and three daughters.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('His substance also was seven thousand sheep, and three thousand camels, and five hundred yoke of oxen, and five hundred she asses, and a very great household; so that this man was the greatest of all the men of the east.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job1-perfect',
          html:
            'Job is introduced with language usually reserved for God Himself—"perfect and upright." In Hebrew, these words suggest completeness, integrity, absence of hidden corruption. Job is not presented as merely good, but as one whose character is entirely aligned with righteousness. He is not hiding another self beneath the surface. What you see is what you get: a man of wholeness.',
        },
        {
          kind: 'commentary',
          id: 'job1-fear-eschew',
          html:
            'To fear God is not to cower in terror, but to stand in reverent awe before the holy. To eschew evil is to turn away from it deliberately, to make a practice of rightness. Job is not someone who stumbles into righteousness. He actively, habitually avoids evil and pursues the fear of the Lord. This is a chosen way of life, sustained by discipline and love.',
        },
        {
          kind: 'hebrew',
          id: 'job1-iyov',
          title: 'Iyov — "Job"',
          script: 'אִיּוֹב',
          translit: '<strong>Iyov</strong> · Job; possibly from a root meaning "where is the father?"',
          description:
            'The name Job—Iyov in Hebrew—carries mysterious weight. Some scholars suggest it may derive from a word meaning "where is the father?" or "adversary," which creates a profound irony: the story begins by asking the fundamental question that suffering raises: Where is the father? Where is God? And yet the man bearing this name will become the very one who tests and proves this very question. His name contains the deepest human cry.',
        },
        {
          kind: 'carry',
          html:
            'Job&apos;s life appears to be a perfect testimony to the principle that righteousness brings blessing. He is perfect. He fears God. He avoids evil. And he is wealthy, honored, respected. His life seems to answer a quiet assumption we all make: if you are good, God will bless you. If you are faithful, you will flourish. But the book of Job is about to challenge this assumption in the most direct way possible.',
        },
        {
          kind: 'reflection',
          id: 'job1-blessing-assumption',
          prompt: 'When have you felt that your goodness should be rewarded? What happens to your faith when righteousness does not bring the blessings you expected?',
        },
      ],
    },

    /* ─── Job 1:4–5 — The Feasting Household ─────────────────────────── */
    {
      ref: 'Job 1:4–5',
      title: 'A Household in Celebration',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 4,
              spans: [
                t('And his sons went and feasted in their houses, every one his day; and sent and called for their three sisters to eat and to drink with them.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And it was so, when the days of their feasting were gone about, that Job sent and sanctified them, and rose up early in the morning, and offered burnt offerings according to the number of them all: for Job said, It may be that my sons have sinned, and cursed God in their hearts. Thus did Job continually.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job1-feasting',
          html:
            'Job&apos;s children are not merely alive—they are feasting, celebrating, rotating through houses of celebration. This is abundance, security, joy. Yet notice the subtle note: each child feasts in his or her own house, one day at a time. There is wealth here, but also separation. And into this scene of celebration comes a father&apos;s vigilance.',
        },
        {
          kind: 'commentary',
          id: 'job1-sanctified',
          html:
            'After the feasting ends, Job rises early and offers burnt offerings for each of his children. Not because he knows they have sinned, but because the possibility troubles him. "It may be that my sons have sinned, and cursed God in their hearts"—the heart, the hidden place. Job&apos;s concern is not for outward propriety but for the secret thoughts of his children. He is a man of such deep piety that he stands guard even over the internal lives of those he loves, offering intercession on their behalf. This is not legalism. This is love.',
        },
        {
          kind: 'hebrew',
          id: 'job1-barak',
          title: 'Barak — "Bless" (and the Darker Meaning)',
          script: 'בָּרַךְ',
          translit: '<strong>Barak</strong> · to bless; also used as a euphemism for curse',
          description:
            'The Hebrew verb barak means to bless, but it carries a shadow meaning: to curse. In fact, in the story of Job, the word will be used as a euphemism for cursing God—a way of naming something so transgressive that direct language seems impossible. Job fears his children might secretly curse God in their hearts, might even make a false blessing—a curse disguised. This duality in the word suggests something profound: blessings and curses are not always as different as they seem. Both are forms of addressing ultimate reality.',
        },
        {
          kind: 'carry',
          html:
            'Job&apos;s protection of his children shows us what parental prayer looks like in the biblical world. He does not wait for evidence of sin to intercede. He acts in advance, standing guard over their souls, offering himself as an intermediary between them and God. In our modern age, we might call this micromanagement. But the text calls it faithfulness. Job&apos;s intercession for his children is continuous—"thus did Job continually."',
        },
        {
          kind: 'reflection',
          id: 'job1-intercession',
          prompt: 'Do you stand watch over the souls of those you love, or do you assume they will find their own way to God? What would it mean to offer intercession "continually" for someone?',
        },
      ],
    },

    /* ─── Job 1:6–11 — The Heavenly Council and the Wager ─────────────── */
    {
      ref: 'Job 1:6–11',
      title: 'The Accuser in Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 6,
              spans: [
                t('Now there was a day when the '),
                hy('sons of God', 'job1-sons-of-god'),
                t(' came to present themselves before the Lord, and '),
                hy('Satan', 'job1-satan'),
                t(' came also among them.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the Lord said unto Satan, Whence comest thou? Then Satan answered the Lord, and said, From going to and fro in the earth, and from walking up and down in it.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the Lord said unto Satan, Hast thou considered my servant Job, that there is '),
                hg('none like him in the earth', 'job1-none-like'),
                t(', a '),
                hg('perfect and an upright man', 'job1-perfect-2'),
                t(', one that feareth God, and escheweth evil?'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then Satan answered the Lord, and said, Doth Job '),
                hy('fear God for nought', 'job1-fear-nought'),
                t('?'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Hast not thou made an hedge about him, and about his house, and about all that he hath on every side? thou hast blessed the work of his hands, and his substance is increased in the land.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('But '),
                hy('put forth thine hand now, and touch all that he hath', 'job1-touch'),
                t(', and he will '),
                t('curse thee to thy face'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job1-sons-of-god',
          html:
            'The "sons of God" are mysterious figures—angelic beings, members of the heavenly court, the witnesses to God&apos;s throne. In this moment, they gather to present themselves before the Lord, as if for a divine assembly or judgment day. This is not private. This is cosmic, witnessed by the heavenly order.',
        },
        {
          kind: 'hebrew',
          id: 'job1-satan',
          title: 'Ha-Satan — "The Accuser"',
          script: 'הַשָּׂטָן',
          translit: '<strong>Ha-satan</strong> · the accuser; the adversary; one who opposes',
          description:
            'The word "satan" (from the Hebrew root meaning "to oppose" or "to accuse") does not here mean the cosmic devil of later theology. In the book of Job, Satan is the Accuser—a prosecuting attorney in God&apos;s court, one whose role is to test the righteous and to raise hard questions about human motives. He moves through the earth, watching, examining, looking for cracks in human piety. This is a different figure than the Satan of medieval Christianity, though the name is the same.',
        },
        {
          kind: 'commentary',
          id: 'job1-none-like',
          html:
            'The Lord Himself praises Job: "There is none like him in the earth." This is not flattery. This is the assessment of one who sees all hearts. The Lord is putting Job forward as an exemplar of righteousness, as proof that there exists at least one human being whose faith is not mercenary, whose love of God is not conditional on reward.',
        },
        {
          kind: 'commentary',
          id: 'job1-perfect-2',
          html:
            'Again the same language: perfect and upright. The Lord echoes the narrator&apos;s description of Job, affirming it. But now we see that God Himself knows Job, takes notice of him, speaks of him with pride. Job is not merely righteous in his own estimation. He is righteous in the sight of the Most High.',
        },
        {
          kind: 'commentary',
          id: 'job1-fear-nought',
          html:
            'Satan&apos;s question cuts to the heart of all religious doubt: "Doth Job fear God for nought?" Does he worship out of love, or out of calculation? Is his faith rooted in genuine devotion, or merely in the wages he has received? This is the fundamental question of religion: why do we believe? What sustains faith when belief no longer brings benefit?',
        },
        {
          kind: 'commentary',
          id: 'job1-touch',
          html:
            'Satan proposes an experiment: take away everything Job has—his flocks, his lands, his wealth—and his faith will evaporate. "Touch all that he hath"—let there be loss, dispossession, the stripping away of everything that makes life secure. Then, Satan suggests, Job will curse God to His face. The wager is this: will Job&apos;s faith survive deprivation?',
        },
        {
          kind: 'christ',
          id: 'job1-christ-tested',
          title: 'Christ Connection — Testing in the Wilderness',
          html:
            'Job is tested in the place of blessing, in the midst of abundance, being asked to surrender it all. Christ is tested in a different way—in the wilderness, stripped of all comfort, asked to turn stones to bread (Matthew 4:1–4). But the principle is the same: the testing of faith not through easy circumstances, but through deprivation and hunger. Like Job, Christ refuses to use His power for self-preservation. Like Job, He submits to the Father&apos;s will, saying not "my will" but "thy will be done." Both the perfect Job and the perfect Christ face the deepest test: will you love God when love brings no earthly reward?',
        },
        {
          kind: 'carry',
          html:
            'The wager in heaven raises a question that haunts faith itself: Why do you believe? Are you faithful because God has blessed you, because your life is comfortable and your family is safe? Or would your faith survive loss? Would you love God even if everything were taken away? Job is about to answer this question with his whole life.',
        },
        {
          kind: 'reflection',
          id: 'job1-wager',
          prompt: 'If God allowed everything you have to be taken away—your security, your health, your loved ones—would your faith survive? What does your answer tell you about the foundation of your belief?',
        },
      ],
    },

    /* ─── Job 1:12–19 — The Four Messengers ────────────────────────────── */
    {
      ref: 'Job 1:12–19',
      title: 'All in a Single Day',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 12,
              spans: [
                t('And the Lord said unto Satan, Behold, '),
                hy('all that he hath is in thy power', 'job1-power'),
                t('; only upon himself put not forth thine hand. So Satan went forth from the presence of the Lord.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And there was a day when his sons and his daughters were eating and drinking wine in their eldest brother&apos;s house:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And there came a messenger unto Job, and said, The oxen were plowing, and the asses feeding beside them:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the '),
                hg('Sabeans fell upon them', 'job1-sabeans'),
                t(', and took them away; yea, they have slain the servants with the edge of the sword; and I only am escaped alone to tell thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job1-mid-calamity-faith',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 16,
              spans: [
                t('While he was yet speaking, there came another, and said, The fire of God is fallen from heaven, and hath burned up the sheep, and the servants, and consumed them; and I only am escaped alone to tell thee.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('While he was yet speaking, there came another, and said, The Chaldeans made out three bands, and fell upon the camels, and have carried them away, yea, and slain the servants with the edge of the sword; and I only am escaped alone to tell thee.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('While he was yet speaking, there came another, and said, Thy sons and thy daughters were eating and drinking wine in their eldest brother&apos;s house:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And, behold, there came a great wind from the wilderness, and smote the four corners of the house, and it fell upon the young men, and they are dead; and I only am escaped alone to tell thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job1-power',
          html:
            'The Lord consents to the wager. Everything Job possesses will be placed into Satan&apos;s hands—his flocks, his herds, his servants, his land. Only Job himself is off limits. "Put not forth thine hand upon him"—Job&apos;s life is protected, but everything that makes life worth living is at stake. The experiment is set in motion.',
        },
        {
          kind: 'commentary',
          id: 'job1-sabeans',
          html:
            'The first messenger brings news of the first catastrophe. Raiders—the Sabeans, a known people of Arabia—have attacked Job&apos;s oxen and asses while they were in the field. The servants have been slaughtered. All the livestock taken. And the messenger, the sole survivor, arrives to tell Job what has been lost.',
        },
        {
          kind: 'commentary',
          id: 'job1-messengers-pattern',
          html:
            'Notice the rhythm. While the first messenger is still speaking, a second arrives. Then a third. Then a fourth. The catastrophes do not arrive separately, allowing time for grief or recovery. They arrive in rapid succession, piling upon one another, overwhelming the mind. This is how total devastation works—not as a single blow that might be absorbed, but as an avalanche, each wave carrying another loss, another death, another shock. The pattern itself is part of the torture: one messenger has not even finished before the next arrives.',
        },
        {
          kind: 'carry',
          html:
            'The four messengers—four waves of loss—strip Job of everything he owns. His flocks are taken by thieves. His sheep are consumed by divine fire. His camels are stolen by the Chaldeans. And finally, the news arrives that his ten children, all of them, are dead, crushed beneath the falling house where they feast. In the span of minutes, Job has gone from the wealthiest and most blessed of men to a man with nothing—no possessions, no children, no future. And yet he is alive. The wager has not yet asked the final question: will he curse God?',
        },
        {
          kind: 'reflection',
          id: 'job1-loss-piling',
          prompt: 'When losses come suddenly and in succession, without time to grieve or recover, what keeps faith alive? In your own times of overwhelming loss, where did you find God?',
        },
      ],
    },

    /* ─── Job 1:20–22 — The Response ──────────────────────────────────── */
    {
      ref: 'Job 1:20–22',
      title: '"The Lord Gave, and the Lord Hath Taken Away"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 20,
              spans: [
                t('Then Job arose, and '),
                hg('rent his mantle, and shaved his head', 'job1-tore'),
                t(', and '),
                hg('fell down upon the ground, and worshipped', 'job1-worshipped'),
                t(','),
              ],
            },
            {
              number: 21,
              spans: [
                t('And said, '),
                hp('Naked came I out of my mother&apos;s womb,', 'job1-naked'),
                t('\n'),
                hp('And naked shall I return thither:', 'job1-return'),
                t('\n'),
                hp('The Lord gave, and the Lord hath taken away;', 'job1-lord-gave'),
                t('\n'),
                hp('Blessed be the name of the Lord.', 'job1-blessed-name'),
                t('\n'),
              ],
            },
            {
              number: 22,
              spans: [
                t('In all this Job sinned not, nor '),
                hg('charged God foolishly', 'job1-foolishly'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job1-tore',
          html:
            'Job&apos;s first response to the news is not to bargain, not to rage, not to flee. He tears his mantle—the sign of mourning in the ancient world—and shaves his head. These are the physical expressions of grief, the body&apos;s way of crying out what words cannot say. Job is undone. He does not hide his sorrow. But he also does not curse.',
        },
        {
          kind: 'commentary',
          id: 'job1-worshipped',
          html:
            'And then comes the astonishing word: he worshipped. While still on the ground, stripped of everything, Job falls down before God. The very posture of his body—prostrate, vulnerable, empty—becomes an act of faith. He does not stand to accuse. He does not rise in anger. He falls in worship. This is the answer to Satan&apos;s wager: Yes, Job fears God for nought. Not because of profit, but because of piety.',
        },
        {
          kind: 'commentary',
          id: 'job1-naked',
          html:
            'Job&apos;s meditation moves backward and forward in time. He remembers the moment of his birth—naked, defenseless, owned by nothing, carrying nothing into life. Birth is a dispossession. We come into the world with nothing in our hands.',
        },
        {
          kind: 'commentary',
          id: 'job1-return',
          html:
            'And death will mirror birth. Job will return "thither"—to that same nakedness, that same state of empty-handedness. Between the two nakedness—birth and death—lies the brief season of life, where we gather things, accumulate, possess. But it is all temporary. We return to earth with nothing, exactly as we came.',
        },
        {
          kind: 'hebrew',
          id: 'job1-adom',
          title: 'Adom — "Earth" (and Adam)',
          script: 'אֲדָמָה',
          translit: '<strong>Adom</strong> or <strong>Adamah</strong> · earth; the ground; also, humanity (from the same root as Adam)',
          description:
            'Job says he came naked from his mother&apos;s womb and will return "thither"—to the earth. The Hebrew word is adamah, the same root as the name Adam, the first human. We are earth-creatures, made from dust, and to dust we return. This is not despair. This is realism. This is the acknowledgment that we are not our possessions. We are not even our lives. We are creatures, temporary and dependent.',
        },
        {
          kind: 'commentary',
          id: 'job1-lord-gave',
          html:
            '"The Lord gave, and the Lord hath taken away." This is the bedrock theology of stewardship. Job does not say "I had" or "I owned." He says "The Lord gave." Everything he possessed was, in the deepest sense, a gift. It belonged to God. And if God has chosen to withdraw the gift, that is God&apos;s prerogative. Job is expressing a profound truth: the only thing that is finally ours is our relationship with God. Everything else—property, children, health, life itself—is on loan.',
        },
        {
          kind: 'commentary',
          id: 'job1-blessed-name',
          html:
            '"Blessed be the name of the Lord." Even in loss, Job blesses God. He does not curse. He does not demand explanation. He does not rage at the unfairness. Instead, he speaks a blessing over the name of the one who has allowed this suffering. This is faith stretched to its absolute limit. This is the human soul saying to God: You are holy. Your name is worthy of blessing. Even this—even this loss—does not change that truth.',
        },
        {
          kind: 'commentary',
          id: 'job1-foolishly',
          html:
            'The narrator adds a crucial word: "In all this Job sinned not, nor charged God foolishly." Job has not accused God of injustice. He has not demanded an explanation. He has not questioned God&apos;s goodness. This is what fidelity looks like when all evidence is stripped away. Job has answered Satan&apos;s wager. He fears God—not for profit, not for blessing, but because God is God.',
        },
        {
          kind: 'christ',
          id: 'job1-christ-cup',
          title: 'Christ Connection — "Yet Not My Will, But Thine"',
          html:
            'In the Garden of Gethsemane, Jesus faces his own form of the wager (Luke 22:42). He knows what is coming—suffering, death, the cup of God&apos;s wrath. And he prays: "Father, if thou be willing, remove this cup from me: nevertheless not my will, but thine, be done." Like Job, Christ does not demand that God justify Himself. Like Job, Christ submits to the Father&apos;s will even when that will brings unbearable pain. And like Job, Christ is sustained by faith in the goodness of God, even when that goodness is expressed through suffering. Both men are tested. Both men, in their testing, worship. And both men, through their faithfulness unto loss, become mediators between heaven and earth, their suffering bearing meaning for the redemption of others.',
        },
        {
          kind: 'carry',
          html:
            'Job teaches us that blessing God in the midst of loss is not denial. He acknowledges his grief. He tears his clothes. He shaves his head. But he does not let grief become bitterness, does not let loss become accusation. He remembers that all things come from God&apos;s hand and return to God&apos;s hand. What we hold lightly, we can release without destroying ourselves. The only possession that cannot be taken is the one we offer freely to God—our loyalty, our trust, our blessing of His holy name.',
        },
        {
          kind: 'reflection',
          id: 'job1-blessing',
          prompt: 'Can you imagine yourself, in a moment of devastating loss, blessing God? What would it take for your faith to remain intact when everything tangible had been stripped away?',
        },
      ],
    },
  ],
};
