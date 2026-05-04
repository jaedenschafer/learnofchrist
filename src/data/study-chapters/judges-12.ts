import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges[res:intertextual-judges-succession] 12 — Shibboleth[res:sefaria-shibboleth-identity]: The Cost of Careless Words and Civil Bloodshed
 *
 * Ephraim[res:bibleodyssey-ephraim-tribal-war] comes demanding credit after a battle they did not fight. Jephthah,
 * unlike Gideon before him, answers harshly. Civil war erupts. A dialect test
 * becomes a death sentence. Forty-two thousand Israelites kill each other over
 * a mispronounced word. Then come three minor judges, wealthy and peaceful,
 * before the narrative wheels turn toward the kingship that Israel has craved
 * all along.
 */
export const JUDGES_12: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 12,

  estimatedMinutes: { beginner: 5, intermediate: 9, deep: 11 },
  topicTags: ['deliverance', 'sin', 'leadership', 'mercy'],
  opener: {
    topical: true,
    caption: 'Judges 12',
  },
  intros: [
    'Judges 12 opens with the familiar complaint: Ephraim is offended. They were not called to join Jephthah&apos;s war against Ammon, and they believe they are owed. Yet the chapter that follows is not a repeat of the gentle answer Gideon gave in chapter 8. Jephthah is angrier, more proud, less diplomatic. His response will cost 42,000 Israelite lives.',
    'But Judges 12 also contains something else — a linguistic artifact so powerful it became a word in every language on earth. The test of "Shibboleth" — a simple mispronunciation — marks insiders from outsiders with lethal precision. And then the narrative shifts into the so-called "minor judges," men of wealth and many children, who brought peace but, to the narrator&apos;s eye, brought little spiritual depth. The judges era is winding down. Kings are coming.',
  ],

  bottomShare: {
    label: 'Share Judges 12',
    quote:
      'The conflicts between brothers are the cruelest. Jephthah&apos;s harsh words became a bloodshed that killed thousands — a warning that a small offense, left to grow and fester, can split a family in two.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 12 · Study Guide',
  },

  sections: [
    /* ─── Judges 12:1–3 — Ephraim Offended; Jephthah Answers Harshly ────────────────────────────────── */
    {
      ref: 'Judges 12:1–3',
      title: 'Ephraim Offended; Jephthah Answers in Anger',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 1,
              spans: [
                t('And the men of Ephraim gathered themselves together, and went northward, and said unto Jephthah, Wherefore '),
                hg('passedst thou over to fight', 'judges12-passed'),
                t(' against the children of Ammon, and didst not call us to go with thee? we will '),
                t('burn thine house upon thee with fire'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges12-passed',
          html:
            'Again, Ephraim. This is their pattern in Judges. Gideon dealt with the same complaint in chapter 8:1. The offense is the same: Jephthah crossed the Jordan and fought without summoning them. They want to be included, acknowledged, given a share in the glory.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 2,
              spans: [
                t('And Jephthah said unto them, I and my people were at great strife with the children of Ammon; and when I called you, ye '),
                hg('delivered me not out of their hands', 'judges12-delivered'),
                t('. And when I saw that ye delivered me not, I put my life in my hands, and passed over against the children of Ammon, and the Lord delivered them into my hand: wherefore then are ye come up unto me this day, '),
                t('to fight against me'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges12-delivered',
          html:
            'Jephthah does not soft-pedal his answer as Gideon did. He states facts: he called them, and they did not come. He saw that they would not help him, so he went. The Lord gave him the victory. But compare this response to Gideon&apos;s in chapter 8:2. Gideon honored Ephraim; Jephthah confronts them. The first heals a wound. The second opens one.',
        },
        {
          kind: 'carry',
          html:
            'There are moments when you are right to speak a hard truth. Jephthah was right: he called, they did not come, he went without them. But being right does not always make the outcome right. Sometimes a soft answer, even when you have every cause to be angry, is the wiser path. Where are you tempted this week to defend your position fiercely instead of building a bridge?',
        },
        {
          kind: 'reflection',
          id: 'judges12-ephraim',
          prompt:
            'When have you been right but your righteous tone made things worse? What would have happened if you had answered gently?',
        },
      ],
    },

    /* ─── Judges 12:4–6 — Shibboleth: Dialect as Death Sentence ────────────────────────────────── */
    {
      ref: 'Judges 12:4–6',
      title: '"Shibboleth": A Word Becomes a Weapon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 4,
              spans: [
                t('Then Jephthah gathered all the men of Gilead, and fought with Ephraim: and the men of Gilead smote Ephraim, because they said, Ye Gileadites are '),
                hg('fugitives of Ephraim', 'judges12-fugitives'),
                t(' among the Ephraimites, and among the Manassites.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges12-fugitives',
          html:
            'War breaks out immediately. Jephthah gathers the men of Gilead. The insult is that Gileadites are refugees from Ephraim — lesser, displaced, not truly of Ephraim. It is a taunt designed to wound. And Jephthah takes the bait. The war that follows is not against Ammon or any foreign enemy. It is Israel against herself.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 5,
              spans: [
                t('And the Gileadites took the passages of Jordan before the Ephraimites: and it was so, that when those Ephraimites which were escaped said, Let me go over; the men of Gilead said unto them, Art thou an Ephraimite? If he said, Nay;'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 6,
              spans: [
                t('Then said they unto him, Say now '),
                hy('Shibboleth', 'judges12-shibboleth'),
                t(': and he said Sibboleth: for he could not '),
                hg('frame to pronounce it right', 'judges12-pronounce'),
                t('. Then they took him, and slew him at the passages of Jordan: and there fell at that time of the Ephraimites '),
                hg('forty and two thousand', 'judges12-forty-two'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'judges12-hebrew-shibboleth',
          title: 'Shibboleth — "ear of grain or stream"',
          script: 'שִׁבֹּלֶת',
          translit: '<strong>shibbolet</strong> · an ear of grain or a stream; same letters, different pronunciation by dialect',
          description:
            'The word itself is innocent — it means either an ear of grain or a stream. But the Ephraimite dialect could not make the "sh" sound, pronouncing it instead as "s" — Sibboleth. What was once just a word became a test. Pass it, live. Fail it, die. The word "shibboleth" has entered every language on earth to mean any password or identifying marker that separates insiders from outsiders.',
        },
        {
          kind: 'commentary',
          id: 'judges12-pronounce',
          html:
            'One small sound. One mispronunciation. The Ephraimites could not form the "sh" sound in their dialect. It is a linguistic fact, not a moral failing. Yet for this small difference, they were identified and slain. This is the horror of tribalism: you mark what is different about someone and use it as an excuse to destroy them.',
        },
        {
          kind: 'commentary',
          id: 'judges12-forty-two',
          html:
            'Forty-two thousand. Not 42. Not 420. Four-two-thousand Israelites died at the Jordan passages. Killed by other Israelites. This is the cost of Jephthah&apos;s harsh answer and his pride. A small offense became an open wound. An open wound became a civil war. A civil war became a massacre.',
        },
        {
          kind: 'carry',
          html:
            'Be careful what you mark as different in another person or group. The mark you place — whether it&apos;s a way they speak, the family they come from, the place they live, or the beliefs they hold — can become the very thing that justifies cruelty. When you hear yourself or others using language that marks someone as an outsider or "other," ask: would I use my words as a weapon? Because that is what Shibboleth became. Not a greeting. A death sentence.',
        },
        {
          kind: 'reflection',
          id: 'judges12-shibboleth',
          prompt:
            'What "Shibboleth" do you use, consciously or not, to tell yourself who is in and who is out? What small difference have you let become the excuse for dismissing someone?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Judges 12:7–15 — The Minor Judges: Ibzan, Elon, Abdon ────────────────────────────────── */
    {
      ref: 'Judges 12:7–15',
      title: 'Three Minor Judges: The Trajectory Toward Kingship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 7,
              spans: [
                t('And Jephthah judged Israel '),
                hg('six years', 'judges12-six'),
                t('. Then died Jephthah the Gileadite, and was buried in one of the cities of Gilead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges12-six',
          html:
            'Jephthah&apos;s judgeship lasted six years. Not long. Not heroic. The narrator does not celebrate him as he did Gideon. Jephthah is remembered as a man who made a rash vow, sacrificed his daughter, won a war, and then answered an offense with bloodshed. His legacy is mixed at best.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 8,
              spans: [
                t('And after him Ibzan of Bethlehem judged Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 9,
              spans: [
                t('And he had '),
                hg('thirty sons and thirty daughters', 'judges12-ibzan'),
                t('; and he sent his daughters abroad, and took in thirty daughters from abroad for his sons. And he judged Israel '),
                t('seven years'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges12-ibzan',
          html:
            'Ibzan is called a "minor judge" — the text gives us genealogy instead of deeds. Thirty sons. Thirty daughters. He married them off strategically, bringing in thirty more daughters from abroad for his sons. This is wealth management and family alliance-building, not the account of a warrior or a spiritual leader. The narrator is subtly showing us a different kind of judge: one who rules through economic power and family connections rather than charisma or God&apos;s call.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 10,
              spans: [
                t('Then died Ibzan, and was buried at Bethlehem.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 11,
              spans: [
                t('And after him Elon, a Zebulonite, judged Israel; and he judged Israel '),
                hg('ten years', 'judges12-elon'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges12-elon',
          html:
            'Elon. Ten years. A Zebulonite. One verse. No sons listed, no deeds recorded, no spiritual movement noted. Just a name, a time, a place. The narrative is becoming sparse. The judges are becoming bureaucrats.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 12,
              spans: [
                t('And Elon the Zebulonite died, and was buried in Aijalon in the country of Zebulun.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 13,
              spans: [
                t('And after him Abdon the son of Hillel, a Pirathonite, judged Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 14,
              spans: [
                t('And he had '),
                hg('forty sons and thirty nephews', 'judges12-abdon'),
                t(', that '),
                hg('rode on seventy ass colts', 'judges12-colts'),
                t(': and he judged Israel '),
                t('eight years'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges12-abdon',
          html:
            'Abdon is the wealthiest judge yet. Forty sons. Thirty nephews. Seventy ass colts for them to ride. Not for war. For show. For status. This is a patriarch living as a king in all but name. Gideon had seventy sons and also lived like a king; now we see the pattern multiplying. The judges are becoming dynasts.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 15,
              spans: [
                t('And Abdon the son of Hillel the Pirathonite died, and was buried in Pirathon in the land of Ephraim, in the mount of the Amalekites.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges12-colts',
          html:
            'Seventy ass colts. Consider the image: a man of power, surrounded by seventy young men (sons and nephews) riding donkeys. It is a display of wealth, fertility, and authority. But think back to the Christ Connection hidden here: when the true King came, He rode one donkey — and rode it in humility, not conquest (Matthew 21:5).',
        },
        {
          kind: 'carry',
          html:
            'The minor judges brought peace to Israel. Ibzan, Elon, and Abdon judged without being called by God, without defeating enemies, without the dramatic interventions we saw with Gideon or Jephthah. They simply settled into power, married their children strategically, accumulated wealth, and ruled. It is a kind of stability. But the narrative seems to ask a question: is this what Israel wanted? Is a peaceful, wealthy, inherited authority the kind of judge they were truly seeking? The answer comes in the next chapter — they will demand a king. These three men show us what a king looks like: dynastic, prosperous, administratively competent, and spiritually thin.',
        },
        {
          kind: 'reflection',
          id: 'judges12-minor',
          prompt:
            'What kinds of authority have you chosen because they were stable and comfortable instead of because they were true or just? What compromise have you made with comfort?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Judges 12 — Christ Connection ────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'christ',
          id: 'judges12-christ-unity',
          title: 'Christ Connection — Unity Across Difference',
          html:
            'Shibboleth marks people as different and worth destroying for that difference. But Christ broke down the barrier between us, not by making us identical, but by making us family. &ldquo;There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus&rdquo; (Galatians 3:28). The differences remain — of culture, language, background — but they no longer define who is in and who is out. The death that came through a mispronounced word is answered by the life that comes through His name. He does not ask you to speak differently to belong. He asks you to belong, and then invites you to learn to speak together.',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Final Theme: The Warning of Internal Strife ────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'commentary',
          html:
            'James 4:1 asks the question that echoes across Judges 12: &ldquo;From whence come wars and fightings among you? come they not hence, even of your lusts that war in your members?&rdquo; (James 4:1). Jephthah&apos;s war was not with an external enemy. It was with a brother tribe over pride and offense. And the toll was staggering. Civil war is the cruelest kind. It wounds not just the body politic but the soul of a people. The judges era is marked by an increasing cycle: deliverance, forgetting, apostasy, return to danger, a new judge arises. By Judges 12, the judges are no longer deliverers from foreign oppression. They are managing internal conflict and dynastic succession. The kingdom is coming. And Israel is about to learn that a king who rules by human power alone cannot heal what only covenant with God can heal.',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'bibleodyssey-ephraim-tribal-war',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Ephraim&apos;s Civil Conflict',
      url: 'https://www.bibleodyssey.org/passages/main-stories/judges',
      description: 'Tribal warfare and the breakdown of unity among Israel&apos;s tribes.',
    },
    {
      id: 'sefaria-shibboleth-identity',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Shibboleth Test',
      url: 'https://www.sefaria.org/Judges.12',
      description: 'Language, identity, and the markers of tribal belonging in ancient Israel.',
    },
    {
      id: 'intertextual-judges-succession',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Continuing Judges: Ibzan, Elon, Abdon',
      url: 'https://intertextual.org/Judges/12',
      description: 'Brief accounts of judges and the framework of Israel&apos;s governance.',
    },
  ]
};