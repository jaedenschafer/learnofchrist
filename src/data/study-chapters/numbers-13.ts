import { hp, hy, hg, t, verse as verse, plain, type RichChapterContent } from './types';

/**
 * Numbers 13 — the twelve spies sent into Canaan. A watershed moment:
 * the same grapes seen by all twelve, but ten saw a problem while two saw
 * a promise. Faith and sight in collision. Joshua and Caleb stand alone.
 *
 * This chapter is the hinge on which Israel&apos;s wilderness generation
 * turns away from the promised land. Hebrews 3:16–19 holds it up as the
 * great warning against unbelief. The minority report (two faithful men
 * against ten) foreshadows the remnant in every age who trust God against
 * the odds — and anticipates the Greater Joshua (Yeshua = Jesus) who would
 * face the true giants: death and the grave.
 */
export const NUMBERS_13: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 13,

  estimatedMinutes: { beginner: 5, intermediate: 9, deep: 12 },
  opener: {
    matchTitle: /The Spies of Canaan/i,
    caption: 'Numbers 13',
  },
  intros: [
    'Israel stands at the edge of Canaan, the land God has promised them for forty years. Moses sends one leader from each of the twelve tribes into the land to scout it. For forty days they walk the length and breadth of Canaan. They see fortified cities and giant men. They bring back proof — a cluster of grapes so enormous that two men must carry it on a pole between them, figs, and pomegranates. But when they return, ten of the twelve give a report that begins with fact and ends in despair: the land is good, yes, but "the land eateth up the inhabitants thereof." The cities are fortified. There are giants.',
    'Only two men, Caleb and Joshua, refuse the fear. Caleb stills the people: "Let us go up at once, and possess it; for we are well able to overcome it." The other ten contradict him: "We be not able to go up against the people; for they are stronger than we." But Caleb and Joshua see the same land. They taste the same grapes. They stood in the same cities. The difference is not in what they see with their eyes. It is in what they believe.',
    'For the faithful reader, this chapter is a master class in the war between faith and sight — and a reminder that God is looking for people who will trust Him against the report of ten thousand eyes.',
  ],

  sections: [
    /* ─── Numbers 13:1–3 — The Commission ──────────────────────────────── */
    {
      ref: 'Numbers 13:1–3',
      title: 'Sent to Scout',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'And the Lord spake unto Moses, saying,'),
            plain(2, 'Send thou men, that they may search the land of Canaan, which I give unto the children of Israel: of every tribe of their fathers shall ye send a man, every one a ruler among them.'),
            verse(3,
              t('And Moses by the commandment of the Lord sent them from the wilderness of '),
              hg('Paran', 'num13-paran'),
              t(': and all those men were '),
              hg('heads of the children of Israel', 'leaders-sent'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'num13-paran',
          html:
            'Paran is the wilderness south of Canaan where Israel has been camped since receiving the law at Mount Sinai. This is the staging ground. The promised land is at the edge of sight[res:sefaria-spies-canaan][res:bible-odyssey-promised-land].',
        },
        {
          kind: 'commentary',
          id: 'leaders-sent',
          html:
            'Twelve men, one from each tribe. These are not random scouts — they are rulers, leaders, the very men whose authority will shape the people&apos;s decision. What they believe will determine what the people believe. The stakes are already set high.',
        },
        {
          kind: 'carry',
          html:
            'The people we lead do not follow what we say alone. They follow what we show them we actually believe. If you carry any kind of influence — as a parent, a teacher, a friend, a voice — the people around you are watching to see if you truly trust God or if you only speak trust while acting in fear. What would change if they saw you actually believe?',
        },
        {
          kind: 'reflection',
          id: 'reflection-leaders',
          prompt: 'Who is watching to see if you truly believe in God? What might they see you actually do this week?',
        },
      ],
    },

    /* ─── Numbers 13:17–20 — The Task ─────────────────────────────────── */
    {
      ref: 'Numbers 13:17–20',
      title: 'What to Look For',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(17, 'And Moses sent them to spy out the land of Canaan, and said unto them, Get you up this way southward, and go up into the mountain:'),
            verse(18,
              t('And see the land, what it is; and the people that dwelleth therein, whether they be '),
              hy('strong or weak', 'strong-weak'),
              t(', few or many;')
            ),
            verse(19,
              t('And what the land is that they dwell in, whether it be good or bad; and what cities they be that they dwell in, whether in tents, or in strongholds;')
            ),
            plain(20, 'And what the land is, whether it be fat or lean, whether there be wood therein or not. And be ye of good courage, and bring of the fruit of the land. Now the time was the time of the firstripe grapes.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'strong-weak',
          html:
            'Moses&apos; instructions are clear: observe everything, gather data, but then — crucially — "be ye of good courage." Moses is telling them beforehand what the real test will be: not what they see, but how they respond to what they see. The assignment is not to measure the enemy. It is to maintain faith while gathering intelligence.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes God asks us to look directly at a hard truth. He does not ask us to pretend the problem away. But He does ask us to look at it while holding His character in mind. Real courage is not ignorance of the obstacle. It is confidence in God despite the obstacle.',
        },
      ],
    },

    /* ─── Numbers 13:21–25 — Forty Days in the Land ────────────────────── */
    {
      ref: 'Numbers 13:21–25',
      title: 'Forty Days',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(21,
              t('So they went up, and '),
              hg('searched the land from the wilderness of Zin unto Rehob', 'forty-days-route'),
              t(', as men come to Hamath.')
            ),
            plain(22, 'And they ascended by the south, and came unto Hebron; where Ahiman, Sheshai, and Talmai, the children of Anak, were. (Now Hebron was built seven years before Zoan in Egypt.)'),
            plain(23, 'And they came unto the brook of Eshcol, and cut down from thence a branch with one cluster of grapes, and they bare it between two upon a staff; and they brought of the pomegranates, and of the figs.'),
            verse(24,
              t('The place was called the brook '),
              hy('Eshcol', 'eshcol-cluster'),
              t(', because of the cluster which the children of Israel cut down from thence.')
            ),
            plain(25, 'And they returned from searching of the land after forty days.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'eshcol-cluster',
          title: 'Eshcol — "cluster"',
          script: 'אֶשְׁכּוֹל',
          translit: '<strong>eshkol</strong> · a cluster of grapes; abundance',
          description:
            'The grapes are so abundant and their proof so impossible to deny that the place itself is named after the cluster. The fruit is evidence of the land&apos;s promise. Yet in a few verses, ten men will look at this very cluster and see only reason to doubt.',
        },
        {
          kind: 'commentary',
          id: 'forty-days-route',
          html:
            'Forty days — the same number as Israel&apos;s forty years in the wilderness. The spies&apos; journey through the land is a microcosm of the judgment to come. They will return with evidence of bounty, yet their unbelief will condemn a whole generation to wander. Time enough to see everything, time enough to know the truth — yet time is not what changes hearts.',
        },
        {
          kind: 'reflection',
          id: 'reflection-grapes',
          prompt: 'Have you ever held proof of God&apos;s promise in your hands — a good report, a moment of grace, an answered prayer — yet still struggled to believe it meant what it said?',
        },
      ],
    },

    /* ─── Numbers 13:26–29 — The Bad Report ───────────────────────────── */
    {
      ref: 'Numbers 13:26–29',
      title: 'The Ten Speak First',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(26, 'And they went and came to Moses, and to Aaron, and to all the congregation of the children of Israel, unto the wilderness of Paran, to Kadesh; and brought back word unto them, and unto all the congregation, and shewed them the fruit of the land.'),
            verse(27,
              t('And they told him, and said, We came unto the land whither thou sentest us, and surely it '),
              hg('floweth with milk and honey', 'land-promise'),
              t('; and this is the fruit of it.')
            ),
            verse(28,
              t('Nevertheless the people be strong that dwell in the land, and the cities are '),
              hg('walled, and very great', 'wall-great'),
              t(': and moreover we saw the children of '),
              hy('Anak', 'anaqim-giants'),
              t(' there.')
            ),
            plain(29, 'The Amalekites dwell in the land of the south: and the Hittites, and the Jebusites, and the Amorites, dwell in the mountains: and the Canaanites dwell by the sea, and by the coast of Jordan.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'anaqim-giants',
          title: 'Anaqim — "giants"',
          script: 'עֲנָקִים',
          translit: '<strong>anaqim</strong> · tall ones; giants descended from Anak',
          description:
            'The Anaqim were infamous for their height and strength. Later, Goliath would be a Philistine of similar stock. For Israel, they represent the seemingly invincible obstacle. Yet David will fell Goliath with a stone. And the true power, the text implies, belongs to whoever trusts God.',
        },
        {
          kind: 'commentary',
          id: 'land-promise',
          html:
            'The ten spies acknowledge God&apos;s word. The land does flow with milk and honey. They saw it. They tasted it. The grapes are in their hands. But acknowledgment of God&apos;s promise is not the same as faith in God&apos;s ability to fulfill it.',
        },
        {
          kind: 'commentary',
          id: 'wall-great',
          html:
            'The ten spies begin with truth: the land flows with milk and honey. The fruit proves it. But then they pivot: the people are strong, the cities walled, the giants present. They are not lying about the obstacles. They are simply concluding that the obstacles are too large. The math, from their perspective, is impossible.',
        },
        {
          kind: 'carry',
          html:
            'When fear speaks, it usually begins with truth. The obstacle is real. The challenge is genuine. But then fear makes a second claim: given this obstacle, trust is foolish. The test of faith is not whether you see the obstacle. It is whether you see the obstacle and still choose to trust God.',
        },
      ],
    },

    /* ─── Numbers 13:30–33 — The Ten Continue ───────────────────────────── */
    {
      ref: 'Numbers 13:30–33',
      title: 'The Spiral of Doubt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(30,
              t('And Caleb stilled the people before Moses, and said, '),
              hp('Let us go up at once, and possess it', 'caleb-faith'),
              t('; for we are '),
              hg('well able to overcome it', 'able-god-power'),
              t('.')
            ),
            verse(31,
              t('But the men that went up with him said, '),
              hg('We be not able to go up against the people', 'unable-report'),
              t('; for they are stronger than we.')
            ),
            verse(32,
              t('And they brought up an evil report of the land which they had searched unto the children of Israel, saying, The land, through which we have gone to search it, is a land that '),
              hy('eateth up the inhabitants thereof', 'land-eaters'),
              t('; and all the people that we saw in it are men of a great stature.')
            ),
            verse(33,
              t('And there we saw the '),
              hy('giants, and we were in our own sight as grasshoppers', 'grasshopper-self'),
              t(', and so we were in their sight.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'caleb-faith',
          html:
            'Caleb alone first, then Joshua with him (verse 30 ends, verse 32 shows him alone at this moment), stands against the report. Caleb says they are "well able" — not that the enemy is weak, but that God is strong. It is a different kind of math entirely.',
        },
        {
          kind: 'commentary',
          id: 'unable-report',
          html:
            'The ten use the same kind of language as Caleb, but reach the opposite conclusion: "We be not able." The obstacle is not theoretical — they saw the cities, they saw the giants. The question is not whether the giants are real. It is whether God is more real.',
        },
        {
          kind: 'commentary',
          id: 'land-eaters',
          html:
            'The land "eateth up the inhabitants." This is hyperbole born of fear — a vivid, almost mythological way to say the land is hostile and death is likely. In verse 33, their fear reaches its peak: they saw themselves as grasshoppers. Their own self-image shrank.',
        },
        {
          kind: 'commentary',
          id: 'grasshopper-self',
          html:
            'They did not merely say the giants were tall. They said "we were in our own sight as grasshoppers, and so we were in their sight." This is the moment fear becomes a curse. They have shrunk themselves. And in doing so, they have told God He shrinks too.',
        },
        {
          kind: 'christ',
          id: 'christ-faith-sight',
          title: 'Christ Connection — Walking by Faith, Not Sight',
          html:
            'Paul would later write, "For we walk by faith, not by sight" (2 Cor. 5:7). The spies walked by sight — they measured the giants, counted the walls, assessed the odds. And their sight told them to despair. But faith is a different kind of seeing. Hebrews 11:1 defines it: "Now faith is the substance of things hoped for, the evidence of things not seen." Joshua and Caleb held the same evidence before their eyes that the ten did. The grapes were just as real. The giants were just as tall. But Joshua and Caleb possessed something else: the conviction that God&apos;s word was more real than any obstacle.',
        },
        {
          kind: 'reflection',
          id: 'reflection-sight',
          prompt: 'What are you walking by right now — faith in God, or the evidence of your eyes? Where do the two conflict?',
        },
      ],
    },

    /* ─── Numbers 13:30 (revisited) & Aftermath ────────────────────────── */
    {
      ref: 'Joshua and Caleb Stand Alone · Numbers 13:30',
      title: 'The Faithful Minority',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(30,
              t('And Caleb stilled the people before Moses, and said, '),
              hg('Let us go up at once', 'moment-caleb'),
              t(', and possess it; for '),
              hp('we are well able to overcome it', 'able-god-power'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'moment-caleb',
          html:
            'Caleb "stilled the people" — a moment of silence, a voice of reason in rising panic. This is the last time the people will listen to truth. Within verses, they will threaten to stone Joshua and Caleb, and the judgment of God will fall.',
        },
        {
          kind: 'commentary',
          id: 'able-god-power',
          html:
            'Caleb does not say the giants are weak. He says "we are well able." Not because of Israel&apos;s strength, but because Caleb believes God is with them. The grammar is deceptive: "we" includes God. The math changes entirely when you count Him.',
        },
        {
          kind: 'christ',
          id: 'christ-remnant',
          title: 'Christ Connection — The Faithful Remnant',
          html:
            'Joshua and Caleb are two among twelve — one-sixth, a tiny voice against overwhelming odds. Paul saw in them the pattern of every age: "Even so then at this present time also there is a remnant according to the election of grace" (Rom. 11:5). In every generation, a few hold faith while the many do not. Joshua would later lead Israel into the land. The parallel is unmistakable: the "Greater Joshua" — Yeshua, Jesus — would face the true giants: death, sin, the grave. And He would face them alone, with only a handful at His side, and He would overcome them completely. The book of Hebrews cites Numbers 13 directly as a warning to Christians: "Take heed, brethren, lest there be in any of you an evil heart of unbelief" (Heb. 3:12).',
        },
        {
          kind: 'carry',
          html:
            'Somewhere right now, you are being asked to believe God while ten voices — even ten credible voices, even ten voices from people you respect — insist that belief is foolish [res:sefaria-joshua-caleb-faith]. Caleb did not become more faithful because the majority agreed. He held his conviction alone. That is the invitation here: not agreement, but allegiance. Can you say "we are well able" even when no one is saying it with you?',
        },
        {
          kind: 'reflection',
          id: 'reflection-alone',
          prompt: 'When have you had to trust God against the report of people around you? What gave you the courage?',
        },
        {
          kind: 'artwork',
          matchTitle: /spies?|canaan|grapes|joshua|caleb/i,
          caption: 'Numbers 13 · The Twelve Spies',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Let us go up at once, and possess it; for we are well able to overcome it.',
    snippet:
      'The minority report of Joshua and Caleb against the ten — faith versus the evidence of fear. A study in how we walk by faith, not by sight.',
    ref: 'Numbers 13:30 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-spies-canaan',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 13 — The Twelve Spies and the Report of Canaan',
      url: 'https://www.sefaria.org/Numbers.13',
      description: 'Talmudic and rabbinic commentary on the spies&apos; mission, the contrast between Joshua and Caleb&apos;s faith-based report and the ten spies&apos; fear-based assessment, and the nature of unbelief.',
    },
    {
      id: 'bible-odyssey-promised-land',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Promised Land — Faith Versus Sight',
      url: 'https://www.bibleodyssey.org/dictionary/promised-land/',
      description: 'Overview of Canaan as the land of promise, the nature of obstacles, and the contrast between those who walk by faith and those who walk by sight.',
    },
    {
      id: 'sefaria-joshua-caleb-faith',
      kind: 'study',
      source: 'Sefaria',
      label: 'Joshua and Caleb — Faithful Scouts',
      url: 'https://www.sefaria.org/Numbers.13.30',
      description: 'Rabbinic commentary on the courage of Joshua and Caleb in standing against the majority, the theological significance of their faith, and their later reward of entering the land.',
    },
  ],

  hasHebrew: true,
};
