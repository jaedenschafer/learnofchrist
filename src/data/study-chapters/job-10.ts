import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 10 — Job Speaks: Despair and the Memory of Creation
 *
 * Job now speaks "in the bitterness of my soul." He addresses God directly,
 * reminding Him of the act of creation: "Thou hast clothed me with skin and flesh,
 * and hast fenced me with bones and sinews." Job remembers the care with which God
 * made him, the tenderness of being knitted together in the womb. But now, that
 * same God who made him with such care seems bent on his destruction. "Thou hast
 * made me as the clay; and wilt thou bring me into dust again?" Job is not angry
 * at God so much as heartbroken. He accuses God not of evil, but of cruelty—of
 * creating something precious only to crush it. He begs for respite, for a moment
 * of peace before he dies.
 */
export const JOB_10: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 10,

  estimatedMinutes: { beginner: 2, intermediate: 7, deep: 9 },
  topicTags: ['suffering', 'hope', 'sovereignty', 'lament'],
  opener: {
    topical: true,
    caption: 'Job 10',
  },
  intros: [
    'Job turns away from his friends. He will speak to God directly, speaking "in the bitterness of my soul." This is not the reverent prayer of a man seeking to appease God. This is the raw cry of one who is wounded, who feels that he has been betrayed by his Creator. And Job&apos;s first move is not to accuse God of injustice, but to remind God of something God seems to have forgotten: Job is His creation. God made him. God shaped him.',
    'Job recalls the moment of his formation. "Thou hast clothed me with skin and flesh, and hast fenced me with bones and sinews. Thou hast granted me life and favour." This is a memory of tenderness, of divine care. God did not create Job carelessly. God made him with intention, with intimacy. And yet now that same Creator seems bent on Job&apos;s destruction. The bitterness that Job feels is not the bitterness of one who never believed in God&apos;s goodness. It is the bitterness of one who felt that goodness and now finds it withdrawn, seemingly for no reason.',
  ],

  bottomShare: {
    quote:
      '"Thou hast made me as the clay; and wilt thou bring me into dust again?" Job reminds God of His own work—the creation of Job, made with care and tenderness, now facing destruction.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 10 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-ludlul',
      kind: 'museum',
      source: 'British Museum',
      label: 'Ludlul Bel Nemeqi (I Will Praise the Lord)',
      url: 'https://www.britishmuseum.org/',
      description: 'Akkadian wisdom poem from Babylon: suffering, divine justice, vindication.',
    },
    {
      id: 'sefaria-job-10',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 10 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Job.10',
      description: 'The Hebrew text of Job 10 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-job-overview-10',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Job — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/job/',
      description: 'Open-access SBL essay on the historical and literary setting of Job.',
    },

  ],

  sections: [
    {
      ref: 'Job 10:1–7',
      title: 'The Bitterness of My Soul',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'My soul is weary of my life; I will leave my complaint upon myself; I will speak in the bitterness of my soul.'),
            plain(2, 'I will say unto God, Do not condemn me; shew me wherefore thou contendest with me.'),
            plain(3, 'Is it good unto thee that thou shouldest oppress me, that thou shouldest despise the work of thine own hands, and shine upon the counsel of the wicked?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job10-mid-dispute-god',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier? [res:british-museum-ludlul]',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(4, 'Hast thou eyes of flesh? or seest thou as man seeth?'),
            plain(5, 'Are thy days as the days of man? or thy years as man&apos;s days,'),
            plain(6, 'That thou inquirest after mine iniquity, and searchest after my sin?'),
            plain(7, 'Thou knowest that I am not wicked; and there is none that can deliver me out of thine hand.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-weary',
          html:
            '"My soul is weary of my life"—Job is expressing not just sadness but a profound exhaustion with existence itself. To be alive is to suffer. To go on living is to continue in torment. Job is reaching the edge of bearing[res:sefaria-job-10][res:bibleodyssey-job-overview-10].',
        },
        {
          kind: 'commentary',
          id: 'job-bitterness-soul',
          html:
            '"I will speak in the bitterness of my soul"—Job announces that he will no longer moderate his speech, will no longer try to sound pious or accepting. The truth is bitter, and he will speak it as he feels it. This is honesty before God, unfiltered by propriety.',
        },
        {
          kind: 'hebrew',
          id: 'job-mar',
          title: 'Mar — "Bitter"',
          script: 'מַר',
          translit: '<strong>Mar</strong> · bitter, painful, severe, anguished',
          description:
            'Bitterness in Hebrew is not merely a taste. It is a state of deep emotional pain, of feeling the harshness of life. To speak in bitterness is to speak from the depths of anguish.',
        },
        {
          kind: 'commentary',
          id: 'job-not-condemn',
          html:
            '"Do not condemn me"—Job addresses God directly with a plea. But immediately he shifts: "Shew me wherefore thou contendest with me." He moves from pleading not to be condemned to demanding that God show him the reason for this contention. Job insists on knowing why.',
        },
        {
          kind: 'commentary',
          id: 'job-oppress-work',
          html:
            '"Is it good unto thee that thou shouldest oppress me, that thou shouldest despise the work of thine own hands?" This is the heart of Job&apos;s complaint. He is God&apos;s work, made by God&apos;s hands. By oppressing Job, God is oppressing His own creation, despising the work He Himself has done.',
        },
        {
          kind: 'carry',
          html:
            'Job is not asking for explanations about justice in general. He is asking God specifically: Do you enjoy this? Does it bring you good to see me suffer? Is there some benefit to you in oppressing one of your own creations?',
        },
        {
          kind: 'reflection',
          id: 'job-why-contend',
          prompt:
            'When you suffer, do you find yourself asking God "Why are you contending with me?" What would it mean to demand an answer rather than to simply accept the silence?',
        },
      ],
    },

    {
      ref: 'Job 10:8–17',
      title: 'Thou Hast Made Me as the Clay',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(8, 'Thine hands have made me and fashioned me together round about; yet thou dost destroy me.'),
            plain(9, 'Remember, I beseech thee, that thou hast made me as the clay; and wilt thou bring me into dust again?'),
            plain(10, 'Hast thou not poured me out as milk, and curdled me like cheese?'),
            plain(11, 'Thou hast clothed me with skin and flesh, and hast fenced me with bones and sinews.'),
            plain(12, 'Thou hast granted me life and favour, and thy visitation hath preserved my spirit.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job10-maker-accuser',
          html:
            'Job shifts from thanking God for making him to accusing God of tormenting him. The same hand, two different acts.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(13, 'And these things hast thou hid in thine heart: I know that this is with thee.'),
            plain(14, 'If I sin, then thou markest me, and thou wilt not acquit me from mine iniquity.'),
            plain(15, 'If I be wicked, woe unto me; and if I be righteous, yet will I not lift up my head; I am full of confusion; and see thou mine affliction;'),
            plain(16, 'For it increaseth. Thou huntest me as a fierce lion: and again thou shewest thyself marvellous upon me.'),
            plain(17, 'Thou renewest thy witnesses against me, and increasest thine anger upon me; changes and war are against me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-hands-made',
          html:
            '"Thine hands have made me and fashioned me together round about"—Job is reminding God of God&apos;s own intimate work. This was not a casual act. God&apos;s hands shaped Job. God&apos;s care went into every part of his creation. And yet now those same hands seem bent on destruction.',
        },
        {
          kind: 'commentary',
          id: 'job-clay-dust',
          html:
            '"Thou hast made me as the clay; and wilt thou bring me into dust again?"—the cycle of creation and destruction. God took dust and shaped it into clay, shaped the clay into a living being. Now God is undoing the work, returning the clay to dust. Job is asking: why create only to destroy?',
        },
        {
          kind: 'commentary',
          id: 'job-milk-cheese',
          html:
            '"Hast thou not poured me out as milk, and curdled me like cheese?"—a vivid image of organic transformation. Job&apos;s creation is imagined as a process of liquid becoming solid, of transformation from one state to another. God is the one who poured, God is the one who caused the transformation that made Job what he is.',
        },
        {
          kind: 'hebrew',
          id: 'job-gazal',
          title: 'Gazal — "Pour Out" (also "Draw Out")',
          script: 'גָּזַל',
          translit: '<strong>Gazal</strong> · to pour out, to rob, to draw out',
          description:
            'The word Job uses for "poured me out" carries a sense of both nurturing action and potential violence. God poured Job out as milk is poured—with intention, with care. But the same word can mean to rob, to draw out forcefully. There is ambiguity in the act.',
        },
        {
          kind: 'commentary',
          id: 'job-skin-flesh-bones',
          html:
            '"Thou hast clothed me with skin and flesh, and hast fenced me with bones and sinews"—Job catalogs the care of creation. God did not merely make Job exist. God clothed him, built him, protected him with a frame of bone. "Fenced" suggests protection, enclosure, a structure designed to hold Job together.',
        },
        {
          kind: 'commentary',
          id: 'job-life-favor',
          html:
            '"Thou hast granted me life and favour, and thy visitation hath preserved my spirit"—Job is remembering his earlier life, before the catastrophes came. He had felt God&apos;s favor. He had felt God&apos;s presence preserving his spirit. But now that presence is no longer preserving. It is destroying.',
        },
        {
          kind: 'carry',
          html:
            'Job&apos;s meditation on his creation is not just a complaint. It is a prayer of memory, a way of reminding God—and himself—of what God has done. But Job&apos;s point is that creation matters. The care with which God made him should count for something. It should mean that God does not crush him carelessly.',
        },
        {
          kind: 'reflection',
          id: 'job-creation',
          prompt:
            'Do you believe that God&apos;s creation of you matters? That the care with which you were made should mean something about how you are treated?',
        },
      ],
    },

    {
      ref: 'Job 10:18–22',
      title: 'Would That I Had Not Been',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(18, 'Wherefore then hast thou brought me forth out of the womb? Oh that I had given up the ghost, and no eye had seen me!'),
            plain(19, 'I should have been as though I had not been; carried from the womb to the grave.'),
            plain(20, 'Are not my days few? cease then, and let me alone, that I may take comfort a little,'),
            plain(21, 'Before I go whence I shall not return, even to the land of darkness and the shadow of death;'),
            plain(22, 'A land of darkness, as darkness itself; and of the shadow of death, without any order, and where the light is as darkness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-wherefore-brought',
          html:
            '"Wherefore then hast thou brought me forth out of the womb?"—Job is expressing a kind of ultimate regret. Why was he born? What purpose did his creation serve, if it only leads to this suffering? This is not ingratitude for life itself. It is the cry of one who finds that life has become unbearable.',
        },
        {
          kind: 'commentary',
          id: 'job-not-been',
          html:
            '"I should have been as though I had not been; carried from the womb to the grave"—Job imagines a life in which he existed briefly, barely, and then returned to the dust without ever truly living. It would be better, he thinks, to have lived like that than to have lived fully only to have everything taken away.',
        },
        {
          kind: 'commentary',
          id: 'job-cease-let-alone',
          html:
            '"Are not my days few? cease then, and let me alone, that I may take comfort a little"—Job begs God to stop. He does not ask to be healed. He does not ask to be vindicated. He asks only for cessation, for a moment of peace before death. Just let me have a little comfort, he pleads.',
        },
        {
          kind: 'hebrew',
          id: 'job-shol',
          title: 'Sheol — "The Grave" (The Underworld)',
          script: 'שְׁאוֹל',
          translit: '<strong>Sheol</strong> · the grave, the underworld, the place of the dead',
          description:
            'Job speaks of Sheol as "a land of darkness, as darkness itself; and of the shadow of death." In this image, death is not peace or rest, but darkness. It is not an escape but another form of exile. Yet even this darkness seems preferable to Job than the continued torment of his present life.',
        },
        {
          kind: 'commentary',
          id: 'job-land-darkness',
          html:
            '"A land of darkness, as darkness itself; and of the shadow of death, without any order"—Job&apos;s final image is of a place without order, without light, without meaning. It is terrifying. And yet he has reached the point where that terror is preferable to the terror of living.',
        },
        {
          kind: 'christ',
          id: 'job-christ-potter',
          title: 'Christ Connection — The Potter Who Knows the Clay',
          html:
            'Job speaks of himself as clay, made by God&apos;s hands, now being destroyed. Paul writes: "Shall the thing formed say to him that formed it, Why hast thou made me thus? Hath not the potter power over the clay, of the same lump to make one vessel unto honour, and another unto dishonour?" (Romans 9:20–21). But Christ adds another dimension: "I am the potter, and thou art the clay." Christ is not a distant God, indifferent to the clay He has made. Christ comes, Himself taking on flesh and clay. He enters into the suffering He allows, experiences it, transforms it. Christ does not destroy the clay. He reshapes it, makes it new.',
        },
        {
          kind: 'carry',
          html:
            'Job&apos;s despair is complete. He wishes he had never been born. He begs for the grace of a little rest before death. He can no longer see any reason for his existence, any purpose for his suffering. He is a creature, made by God, now crushed by God, with no advocate to plead his case. This is the nadir of the book—the moment when faith seems to have utterly disappeared.',
        },
        {
          kind: 'reflection',
          id: 'job-wishes-not-born',
          prompt:
            'Have you ever reached a point where you wished you had never been born? What brought you back from that darkness? How did you find meaning again?',
        },
      ],
    },
  ],
};
