import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 17 — Job Speaks: The Final Lament
 *
 * "My breath is corrupt, my days are extinct, the graves are ready for me." Job
 * faces the nearness of death. His spirit is broken. His days seem to be ending. And
 * yet, even here, at the very edge of the abyss, Job does not lose his faith entirely.
 * He speaks of the judgment that will come, of the vindication that awaits. "Where is
 * now my hope?" he asks—but the question itself implies that hope exists, that it
 * waits beyond the grave. Job moves toward the end of his long ordeal, moving from
 * complaint and lament toward a strange kind of trust, a faith that does not depend
 * on earthly comfort or vindication, but on the belief that God will ultimately
 * recognize his innocence.
 */
export const JOB_17: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 17,

  estimatedMinutes: { beginner: 2, intermediate: 6, deep: 7 },
  topicTags: ['suffering', 'hope', 'sovereignty', 'lament'],
  opener: {
    topical: true,
    caption: 'Job 17',
  },
  intros: [
    'Job is near the end. He can feel it. His body is failing. His spirit is breaking. And now he speaks not in anger, not in detailed complaint, but in the voice of one who is saying goodbye. "My breath is corrupt, my days are extinct, the graves are ready for me." The grave is waiting. Death is near. And in this moment of approaching extinction, what does Job do? Does he curse God? Does he surrender his faith? No. Instead, he affirms the reality of judgment to come, of a time when his innocence will be revealed.',
    'Job asks a question that will echo through the remainder of the book: "Where is now my hope?" It is a question that contains its own answer. For if Job asks about his hope, it is because he has one. He speaks of his hope in the resurrection, in the vindication that comes after death. Job does not have what he needs to survive in this world—comfort, vindication, the support of friends. But he has something deeper: a trust that transcends the grave, a faith that looks beyond death to a judgment where truth will be made known.',
  ],

  bottomShare: {
    quote:
      '"Where is now my hope?" Job faces death but affirms his belief in resurrection and final vindication, trusting in a judgment beyond the grave.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 17 · Study Guide',
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
      id: 'sefaria-job-17',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 17 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Job.17',
      description: 'The Hebrew text of Job 17 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-job-overview-17',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Job — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/job/',
      description: 'Open-access SBL essay on the historical and literary setting of Job.',
    },

  ],

  sections: [
    {
      ref: 'Job 17:1–9',
      title: 'My Days Are Extinct',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(1, 'My breath is corrupt, my days are extinct, the graves are ready for me.'),
            plain(2, 'Are there not mockers with me? and doth not mine eye continue in their provocation?'),
            plain(3, 'Give now a pledge, be surety for me with thyself; for who is he that will strike hands with me?'),
            plain(4, 'For thou hast hid their heart from understanding: therefore shalt thou not exalt them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job17-breath-darkness',
          html:
            'Job moves from his spirit breaking to his days extinguished. The metaphor becomes literal darkness. [res:british-museum-ludlul]',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(5, 'He that speaketh flattery to his friends, even the eyes of his children shall fail.'),
            plain(6, 'He hath made me also a byword of the people; and aforetime I was as a tabret in their mouth.'),
            plain(7, 'Mine eye also is dim by reason of sorrow, and all my members are as a shadow.'),
            plain(8, 'Upright men shall be astonied at this, and the innocent shall stir up himself against the hypocrite.'),
            plain(9, 'The righteous also shall hold on his way, and he that hath clean hands shall wax stronger and stronger.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-breath-corrupt',
          html:
            '"My breath is corrupt, my days are extinct, the graves are ready for me"—Job is not speaking metaphorically. He is describing the approach of death. His breathing is failing. His days are coming to an end. The grave is prepared for him. Death is imminent[res:sefaria-job-17][res:bibleodyssey-job-overview-17].',
        },
        {
          kind: 'commentary',
          id: 'job-mockers',
          html:
            '"Are there not mockers with me? and doth not mine eye continue in their provocation?"—even now, as Job faces death, the mockers are present. They continue to provoke him. His eye is still fixed on their provocations, still witnessing their scorn.',
        },
        {
          kind: 'hebrew',
          id: 'job-laag',
          title: 'La&apos;ag — "Mock" (Scorn, Deride)',
          script: 'לָעַג',
          translit: '<strong>La&apos;ag</strong> · to mock, to scorn, to deride, to make light of',
          description:
            'The mockers are those who scorn Job, who make light of his suffering. They continue their derision even as he faces death.',
        },
        {
          kind: 'commentary',
          id: 'job-pledge',
          html:
            '"Give now a pledge, be surety for me with thyself; for who is he that will strike hands with me?"—Job appeals to God to be his surety, his pledge, his advocate. No human will stand with Job and strike hands in covenant. So he appeals to God to do so.',
        },
        {
          kind: 'commentary',
          id: 'job-hid-heart',
          html:
            '"For thou hast hid their heart from understanding: therefore shalt thou not exalt them"—Job believes that God has prevented Job&apos;s friends from understanding the truth. Their hearts are hidden from understanding. And for this, God will not exalt them.',
        },
        {
          kind: 'commentary',
          id: 'job-flattery',
          html:
            '"He that speaketh flattery to his friends, even the eyes of his children shall fail"—Job predicts that those who speak flattery, who deceive their friends with false counsel (as the three friends have done), will suffer loss. Their children&apos;s eyes will fail, their descendants will not prosper.',
        },
        {
          kind: 'carry',
          html:
            'Job is at the edge of death, but he is still affirming that justice exists, that judgment will come, that his friends&apos; false words will ultimately be held against them. He is not despairing into passivity. He is affirming the moral order of the universe.',
        },
        {
          kind: 'reflection',
          id: 'job-near-death',
          prompt:
            'As you face your own mortality—not necessarily imminent death, but the awareness that your life is limited—what truths become most important to you?',
        },
      ],
    },

    {
      ref: 'Job 17:10–16',
      title: '"Where Is Now My Hope?"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(10, 'But as for you all, do ye return, and come now: for I cannot find one wise man among you.'),
            plain(11, 'My days are past, my purposes are broken off, even the thoughts of my heart.'),
            plain(12, 'They change the night into day: the light is short because of darkness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job17-mid-plea-grave',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(13, 'If I wait, the grave is mine house: I have made my bed in the darkness.'),
            plain(14, 'I have said to corruption, Thou art my father: to the worms, Ye are my mother and my sister.'),
            plain(15, 'Where is now my hope? and as for my hope, who shall see it?'),
            plain(16, 'They shall go down to the bars of the pit: and it shall be a rest together in the dust.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-return-come',
          html:
            '"Do ye return, and come now: for I cannot find one wise man among you"—Job has given up on his friends. They have proven themselves unwise. There is nothing more for them to offer him.',
        },
        {
          kind: 'commentary',
          id: 'job-days-past',
          html:
            '"My days are past, my purposes are broken off, even the thoughts of my heart"—Job acknowledges that his life is over. The plans he had, the thoughts he dwelt on—all of these are broken. They will not come to pass.',
        },
        {
          kind: 'commentary',
          id: 'job-night-into-day',
          html:
            '"They change the night into day: the light is short because of darkness"—this is a verse of profound disorientation. The natural order is inverted. Night becomes day. Light becomes short. Darkness dominates. Job&apos;s world has lost its order.',
        },
        {
          kind: 'hebrew',
          id: 'job-qever',
          title: 'Qever — "Grave" (The Burial Place)',
          script: 'קֶבֶר',
          translit: '<strong>Qever</strong> · grave, tomb, the place where the dead are buried',
          description:
            'Job speaks of the grave as his house, the place where he will dwell. It is not a place of fear, but a place of rest, a home that is waiting for him.',
        },
        {
          kind: 'commentary',
          id: 'job-grave-house',
          html:
            '"If I wait, the grave is mine house: I have made my bed in the darkness"—Job has accepted the reality of death. The grave will be his dwelling place. He has made his bed in the darkness. There is an almost peaceful resignation here.',
        },
        {
          kind: 'commentary',
          id: 'job-corruption-father',
          html:
            '"I have said to corruption, Thou art my father: to the worms, Ye are my mother and my sister"—Job speaks to the creatures of death and decay. Corruption is his father. The worms are his family. In death, he will belong to decay.',
        },
        {
          kind: 'commentary',
          id: 'job-where-hope',
          html:
            '"Where is now my hope? and as for my hope, who shall see it?"—this is the paradox of Job&apos;s faith. Even as he speaks of the grave as his house, even as he seems to accept death, he asks about his hope. The question implies that hope exists, even if no one on earth can see it yet.',
        },
        {
          kind: 'commentary',
          id: 'job-bars-pit',
          html:
            '"They shall go down to the bars of the pit: and it shall be a rest together in the dust"—Job speaks of those who will go down into the grave with him. All will rest together in the dust. But even in this leveling of all humanity in death, Job seems to find peace.',
        },
        {
          kind: 'christ',
          id: 'job-christ-hope',
          title: 'Christ Connection — Hope in Resurrection',
          html:
            'Job asks: "Where is now my hope?" And the answer comes not in his lifetime, but in the resurrection of Christ. Paul writes: "In hope was I saved: for hope that is seen is not hope" (Romans 8:24). Job had hope that was not yet seen, hope that could not be vindicated in this world. That hope pointed forward to Christ, to the resurrection, to a judgment beyond death where all will be made right. Job did not know the name of his hope. But his faith reached toward what Christians now know: that death is not the end, that the righteous shall rise, that vindication awaits.',
        },
        {
          kind: 'carry',
          html:
            'Job reaches the end of the dialogue with his friends, facing the end of his own life, and yet he does not surrender. He affirms that his hope exists, even if no one can see it yet. He trusts in a vindication that will come beyond the grave. This is faith at its most profound—not based on earthly evidence, not dependent on the approval of others, but rooted in a relationship with God that transcends death itself.',
        },
        {
          kind: 'reflection',
          id: 'job-hope-unseen',
          prompt:
            'What does it mean to have hope that no one around you can see, hope that cannot be vindicated in this lifetime? Can you hold onto such hope?',
        },
      ],
    },
  ],
};
