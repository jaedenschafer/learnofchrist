import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 4 — Eliphaz Speaks: The Innocent Do Not Perish
 *
 * The first of Job&apos;s three friends to speak. Eliphaz is tentative at first —
 * "If we assay to commune with thee, wilt thou be grieved?" — but quickly moves
 * to his diagnosis: the innocent do not perish, but wickedness brings its own
 * reward. He recounts a vision in which a "spirit" passed before his face, and
 * hair stood up on his skin. In this vision, he heard the terrible question:
 * "Shall mortal man be more just than God?" Eliphaz believes he has insight into
 * God&apos;s justice. What he cannot see is that his insight is blindness, that his
 * comfort is a knife, and that Job does not fit his theology. The chapter shows us
 * how false comfort dressed as theology becomes the cruelest wound of all.
 */
export const JOB_4: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 4,

  estimatedMinutes: { beginner: 3, intermediate: 9, deep: 12 },
  intros: [
    'Now Eliphaz speaks. He begins gently, almost asking permission: "If we assay to commune with thee, wilt thou be grieved?" But then he launches into his argument. Remember, he says, how many innocent people have perished? How many righteous have been cut off? The answer, in Eliphaz&apos;s view, is none — or very few. The innocent are protected. The righteous are secure. Therefore, if Job is suffering, he must not be entirely innocent.',
    'Eliphaz then recounts a supernatural experience. In the night, a spirit passed before his face, and the hair of his flesh stood up. He heard a voice asking, "Shall mortal man be more just than God? shall a man be more pure than his maker?" This vision has convinced Eliphaz that God is supremely just, that God&apos;s justice is beyond question, and therefore that Job&apos;s suffering must be deserved. God does not punish the innocent.',
    'What Eliphaz cannot see is that his vision, his certainty, his theology may all be true and yet utterly inapplicable to Job&apos;s actual situation. He has not asked Job questions. He has rendered judgment. And judgment without understanding becomes cruelty masked as wisdom.',
  ],

  bottomShare: {
    label: 'Share Job 4',
    quote:
      'Eliphaz speaks with certainty: the innocent do not perish, so Job must have sinned. He is offering false comfort, theology applied without compassion. His words show us how doctrine becomes a weapon when wielded without understanding.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 4 · Study Guide',
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
      id: 'sefaria-job-4',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 4 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Job.4',
      description: 'The Hebrew text of Job 4 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-job-overview-4',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Job — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/job/',
      description: 'Open-access SBL essay on the historical and literary setting of Job.',
    },

  ],

  sections: [
    /* ─── Job 4:1–7 — Eliphaz Begins: "Remember, I Pray Thee" ──────────── */
    {
      ref: 'Job 4:1–7',
      title: 'Eliphaz Seeks Permission to Speak',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('Then Eliphaz the Temanite answered and said,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('If we assay to commune with thee, wilt thou be '),
                hg('grieved', 'assay-grieve'),
                t('? but who can withhold himself from speaking?'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Behold, thou hast instructed many, and thou hast '),
                hg('strengthened the weak hands', 'strengthen-weak'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job4-mid-eliphaz-vision',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier? [res:british-museum-ludlul]',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 4,
              spans: [
                t('Thy words have upholden him that was falling, and thou hast '),
                hg('strengthened the feeble knees', 'strengthen-knees'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('But now it is come upon thee, and thou '),
                hp('faintest', 'faintest-faint'),
                t('; it toucheth thee, and thou art troubled.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Is not this thy '),
                hg('fear of God thy confidence', 'fear-confidence'),
                t(', thy hope, and the uprightness of thy ways?'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Remember, I pray thee, who ever '),
                hp('perished, being innocent', 'innocent-perish'),
                t('? or where were the righteous cut off?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'assay-grieve',
          html:
            'Eliphaz begins with an almost apologetic tone. "If we assay to commune with thee, wilt thou be grieved?" He is asking permission. Yet the question contains its own presumption: he and the other friends have come to speak, and they will speak. The politeness masks a certainty. They believe they know what Job needs to hear[res:sefaria-job-4][res:bibleodyssey-job-overview-4].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yaga',
          title: 'Yaga — "To Toil" or "To Weary"',
          script: 'יָגַע',
          translit: '<strong>Yaga</strong> · to tire; to weary; to grow faint under burden',
          description:
            'The Hebrew yaga suggests not mere sadness but exhaustion — the weariness of one who has carried a burden beyond strength. Eliphaz uses this word to paint Job as one who is weary, implying that weariness might come from hidden guilt rather than from circumstance.',
        },
        {
          kind: 'commentary',
          id: 'strengthen-weak',
          html:
            'Eliphaz begins by affirming Job: "Thou hast instructed many, and thou hast strengthened the weak hands." He is reminding Job of his own wisdom, his own past comfort to others. This is clever. Eliphaz is saying: you know how to counsel the distressed. You know what they need to hear. Therefore, accept my counsel now.',
        },
        {
          kind: 'commentary',
          id: 'strengthen-knees',
          html:
            'Eliphaz builds his case through memory. Job has comforted others. Job has lifted up those who were falling. Job&apos;s words have sustained the weak. And then — the pivot: "But now it is come upon thee, and thou faintest." Now it is Job&apos;s turn. Now he must receive what he once gave.',
        },
        {
          kind: 'commentary',
          id: 'faintest-faint',
          html:
            'The word "faintest" is key. Eliphaz is noting not just Job&apos;s suffering, but his loss of faith. Job is troubled, shaken, no longer steady. And Eliphaz is implying: this troubles your faith because deep down you know something. Your faith is wavering because somewhere, you suspect you deserve this.',
        },
        {
          kind: 'commentary',
          id: 'fear-confidence',
          html:
            'Eliphaz asks: "Is not this thy fear of God thy confidence, thy hope, and the uprightness of thy ways?" He is asking Job to remember his own theology. Did Job not teach that the fear of God — reverence, obedience — brings confidence and hope? Therefore, if Job is now without confidence and hope, what has changed? The implication: Job\'s righteousness was not as solid as he believed.',
        },
        {
          kind: 'commentary',
          id: 'innocent-perish',
          html:
            'And finally, Eliphaz asks the foundational question: "Who ever perished, being innocent? or where were the righteous cut off?" This is the core of his theology. In Eliphaz\'s observation, the innocent do not perish. The righteous are not destroyed. Therefore, if Job is perishing, he cannot be entirely innocent. The logic is inexorable — and false.',
        },
        {
          kind: 'carry',
          html:
            'Eliphaz offers Job back his own teachings, reminding him that he once taught comfort to others. But he uses this not to inspire Job to find meaning in his past wisdom, but to suggest that Job\'s past righteousness must not have been as deep as Job thought. We do this sometimes to those in pain: we remind them of their former strength not to encourage them, but to suggest that they have somehow fallen. We use their own words as a weapon.',
        },
        {
          kind: 'reflection',
          id: 'used-against-us',
          prompt: 'Have you ever had your own words or teaching used against you as evidence that you somehow deserve your suffering? How did it feel to be counseled by the very wisdom you once gave?',
        },
      ],
    },

    /* ─── Job 4:8–11 — Eliphaz's Observation: They That Sow Trouble, Reap It */
    {
      ref: 'Job 4:8–11',
      title: 'What a Man Soweth, He Reapeth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 8,
              spans: [
                t('Even as I have seen, they that plow iniquity, and sow '),
                hg('wickedness, reap the same', 'sow-reap'),
                t(':'),
              ],
            },
            plain(9, 'By the blast of God they perish, and by the breath of his nostrils are they consumed.'),
            plain(10, 'The roaring of the lion, and the voice of the fierce lion, and the teeth of the young lions, are broken.'),
            plain(11, 'The old lion perisheth for lack of prey, and the stag of the lioness are scattered.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'sow-reap',
          html:
            'Eliphaz draws on his own observation and what he has "seen" — his reading of how the world works. "They that plow iniquity, and sow wickedness, reap the same." This is a natural law, in Eliphaz\'s view. Sin has consequences. Wickedness brings its own reward. The man who plants evil will harvest evil. This is not false — it is true. And that truth becomes a lie when applied to someone whose suffering does not fit this pattern.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chatul',
          title: 'Awen — "Iniquity" or "Vanity"',
          script: 'אָוֶן',
          translit: '<strong>Awen</strong> · iniquity; wickedness; futility; that which is devoid of substance',
          description:
            'The Hebrew awen speaks of wickedness not just as moral wrong but as emptiness, as that which has no true substance. It is wrong-doing that leads nowhere, that accomplishes nothing but destruction. When a man sows awen, he plants emptiness and reaps ruin.',
        },
        {
          kind: 'commentary',
          id: 'lions-destroyed',
          html:
            'Eliphaz uses the image of lions destroyed, their roar broken, their teeth shattered, the old lion perishing for lack of prey. It is a picture of power reversed, of the mighty brought low. The implication: so too shall the wicked be brought low. So too shall Job, if he is wicked, be destroyed. But the image also suggests that Eliphaz sees Job as a kind of lion — powerful, but in danger of being brought down by his own nature.',
        },
        {
          kind: 'carry',
          html:
            'We observe the world and draw patterns. We see that consequence follows choice. This observation is valuable. But it becomes dangerous when we apply it as diagnosis to someone whose actual situation we do not fully understand. Eliphaz has seen one pattern — the wicked suffer — and he assumes Job fits that pattern. He has not asked: might there be other patterns? Might Job be suffering for reasons other than personal wickedness?',
        },
        {
          kind: 'reflection',
          id: 'pattern-blindness',
          prompt: 'What patterns do you see in how the world works? When you see someone suffering, do you first assume they fit the pattern you have observed, or do you ask questions about their unique situation?',
        },
      ],
    },

    /* ─── Job 4:12–21 — Eliphaz's Vision: A Spirit Passed Before Me ───── */
    {
      ref: 'Job 4:12–21',
      title: 'A Vision in the Night',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 12,
              spans: [
                t('Now a thing was secretly brought to me, and mine ear received a '),
                hy('whisper thereof', 'whisper-ear'),
                t(':'),
              ],
            },
            {
              number: 13,
              spans: [
                t('In thoughts from the '),
                hg('visions of the night', 'visions-night'),
                t(', when deep sleep falleth on men,'),
              ],
            },
            plain(14, 'Fear came upon me, and trembling, which made all my bones to shake.'),
            plain(15, 'Then a spirit passed before my face; the hair of my flesh stood up:'),
            plain(16, 'It stood still, but I could not discern the form thereof: an image was before mine eyes, and I heard a still voice, saying,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job4-fear-pivot',
          html:
            'Eliphaz shifts from describing the awe of divine mystery to accusing Job of irreverence. The theological turn becomes personal.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 17,
              spans: [
                t('Shall mortal man be more '),
                hp('just than God', 'mortal-just'),
                t('? shall a man be more pure than his maker?'),
              ],
            },
            plain(18, 'Behold, he charged not his servants with folly: but his servants have folly.'),
            plain(19, 'How much less in them that dwell in houses of clay, whose foundation is in the dust, which are crushed before the moth?'),
            plain(20, 'They are destroyed from morning to evening: they perish for ever without any regarding it.'),
            plain(21, 'Doth not their excellency which is in them go away? they die, even without wisdom.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'whisper-ear',
          html:
            'Eliphaz recounts a supernatural experience. "A thing was secretly brought to me." This is not mere reasoning or observation. This is revelation, a word given in the night. "Mine ear received a whisper thereof." Eliphaz is claiming to have received divine instruction. This gives his subsequent words the weight of prophecy, or so he believes.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-lishon',
          title: 'Shemu\'ah — "Whisper" or "Report"',
          script: 'שׁמוּעָה',
          translit: '<strong>Shemu\'ah</strong> · whisper; report; that which is heard; rumor',
          description:
            'The Hebrew suggests something heard indirectly, a whisper rather than a shout. It is something barely audible, something one must strain to hear. This gives Eliphaz\'s vision an almost intimate quality — a secret knowledge shared only with him.',
        },
        {
          kind: 'commentary',
          id: 'visions-night',
          html:
            'In visions of the night, when deep sleep falls on men, Eliphaz had this experience. The setting is deliberately eerie, otherworldly. Fear came upon him, trembling shook all his bones. A spirit — not human, not entirely defined — passed before his face. The hair of his flesh stood up. This is the language of encounter with the divine, or the demonic.',
        },
        {
          kind: 'commentary',
          id: 'mortal-just',
          html:
            'And then the voice speaks the crucial question: "Shall mortal man be more just than God? shall a man be more pure than his maker?" This is the foundation of Eliphaz\'s entire argument. God is absolutely just. God is absolutely pure. Therefore, if God is punishing Job, the punishment is just. Job cannot claim injustice, because he cannot claim greater righteousness than God himself.',
        },
        {
          kind: 'commentary',
          id: 'servants-folly',
          html:
            'The voice continues: "He charged not his servants with folly." God does not charge His servants — those who serve Him — with folly or foolishness. But — and here is the catch — "his servants have folly." Even those who serve God are not pure. They are prone to error. They are fallible. How much more, then, are humans in general prone to sin?',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-bet-clay',
          title: 'Bet Chomer — "House of Clay"',
          script: 'בֵּית חוֹמֶר',
          translit: '<strong>Bet Chomer</strong> · a house of clay; the physical body; human flesh',
          description:
            'Humans are "houses of clay" — fragile, temporary, made of common earth. We are not eternal or incorruptible. We are mortal, finite, failing. The image emphasizes human frailty and weakness in the face of God\'s eternal nature.',
        },
        {
          kind: 'commentary',
          id: 'crushed-moth',
          html:
            'Eliphaz paints a picture of human frailty: "How much less in them that dwell in houses of clay, whose foundation is in the dust, which are crushed before the moth?" Humans are so fragile that even a moth can crush them. We are dust, and our foundations are in dust. We are destroyable, temporary, insignificant. Therefore, how can we claim to be righteous? How can we claim not to deserve suffering?',
        },
        {
          kind: 'christ',
          id: 'christ-just-than-god',
          title: 'Christ Connection — Mortal Man Made Just',
          html:
            'Eliphaz\'s vision asks: "Shall mortal man be more just than God?" The answer in Eliphaz\'s theology is no. No mortal can be more just than God. But Scripture will later offer a paradox: in Christ, mortal man is made just. Not through his own righteousness, but through the righteousness imputed by God. Paul writes, "For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him" (2 Corinthians 5:21). Christ is the mortal man who, by the grace of God, is made perfectly just. And through Him, mortals can be accounted righteous not because they have earned it, but because God has given it.',
        },
        {
          kind: 'carry',
          html:
            'Eliphaz\'s vision has convinced him of God\'s absolute justice and human absolute frailty. From this, he draws a conclusion: Job must be guilty. But what if there is another possibility? What if God\'s justice is not the same as the justice Eliphaz understands? What if God can allow suffering not as punishment but as a test, a mystery, a redemption hidden? Eliphaz has had a vision. But his interpretation of it is too narrow. He cannot imagine a suffering that is not deserved.',
        },
        {
          kind: 'reflection',
          id: 'vision-interpretation',
          prompt: 'When you have a strong conviction or experience that convinces you of something, how do you test that conviction? How do you make sure you are not interpreting it in a way that confirms what you already believed?',
        },
      ],
    },
  ],
};
