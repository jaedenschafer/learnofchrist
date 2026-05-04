import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Job 24 — Job: Why Does God Delay?
 *
 * Job poses the aching question: "Why, seeing times are not hidden from the
 * Almighty, do they that know him not see his days?" If God is all-knowing,
 * if He sees all things, why does He not act? Why does He allow the wicked to
 * prosper unchecked? Job describes the crimes of the wicked—murder, theft,
 * oppression, adultery—committed openly, with apparent impunity. The poor cry
 * out, but God does not answer. Widows are stripped of their land. The hungry
 * are robbed of grain. And God is silent. But Job does not lose faith. He
 * trusts that God&apos;s appointed day will come, when all will be judged, when
 * the darkness will be exposed to light, when divine justice will finally be
 * made manifest.',
 */
export const JOB_24: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 24,

  estimatedMinutes: { beginner: 3, intermediate: 5, deep: 7 },
  topicTags: ['suffering', 'hope', 'sovereignty', 'lament'],
  opener: {
    topical: true,
    caption: 'Job 24',
  },
  intros: [
    'Job has affirmed that God knows his way and is testing him like gold in fire. But now his mind turns to a larger question: why does God not act against the wicked? Why is there such apparent delay in God&apos;s justice? "Why, seeing times are not hidden from the Almighty, do they that know him not see his days?" God is all-knowing. God sees all things. But God seems paralyzed. God allows the wicked to flourish. God permits crime and injustice to continue unchecked. If God is truly just, if God truly cares, why this silence? Why this delay?',
    'Job catalogs the crimes he sees: robbers strip the naked of clothing, steal the poor man&apos;s ox as collateral, drive the wicked from the city, murder the lonely traveler in the night, commit adultery, steal grain from the widow, rob the orphan. These are real crimes. They happen. They are witnessed. And God does not strike down the perpetrators. There is no visible judgment, no immediate consequence. But Job does not conclude that God does not care. Rather, he trusts that there is an appointed day—a day when God will act, when the wicked will be judged, when darkness will be exposed to light. The delay is not indifference. It is patience. It is the patience of a God who will ultimately bring all things to account.',
  ],

  bottomShare: {
    quote:
      '"Why, seeing times are not hidden from the Almighty, do they that know him not see his days?" Job questions the apparent delay of God&apos;s justice—but holds to faith in a coming judgment.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 24 · Study Guide',
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
      id: 'sefaria-job-24',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 24 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Job.24',
      description: 'The Hebrew text of Job 24 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-job-overview-24',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Job — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/job/',
      description: 'Open-access SBL essay on the historical and literary setting of Job.',
    },

  ],

  sections: [
    /* ─── Job 24:1–12 — The Crimes the Wicked Commit ────────────────── */
    {
      ref: 'Job 24:1–12',
      title: 'Why Does God Seem Silent?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 1,
              spans: [
                t('Why, seeing times are not hidden from the Almighty, do '),
                hg('they that know him not see his days?', 'job24-days'),
                t(' '),
              ],
            },
            plain(2, 'Some remove the landmarks; they violently take away flocks, and feed thereon.'),
            plain(3, 'They drive away the ass of the fatherless, they take the widow&apos;s ox for a pledge.'),
            plain(4, 'They turn the needy out of the way: the poor of the earth hide themselves together.'),
            {
              number: 5,
              spans: [
                t('Behold, as wild asses in the desert, go they forth to their work; '),
                hg('rising betimes for a prey', 'job24-prey'),
                t(': the wilderness yieldeth food for them and for their children.'),
              ],
            },
            plain(6, 'They reap every one his corn in the field: and they gather the vintage of the wicked.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job24-crimes-catalog',
          html:
            'Job catalogs the crimes of the wicked: they seize landmarks, steal flocks, drive away the orphan&apos;s donkey, turn the needy from their way. These are specific, documented crimes. They are committed openly. Everyone sees them. But no judgment falls. No divine hand intervenes. God sees all things, yet does nothing. [res:british-museum-ludlul]',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(7, 'They cause the naked to lodge without clothing, and they take away the sheaf from the hungry;'),
            plain(8, 'Which hide themselves under the thick trees, and they dwell in the rocks for a refuge.'),
            {
              number: 9,
              spans: [
                t('(They pluck the fatherless from the breast, and take a pledge of the poor.) '),
              ],
            },
            plain(10, 'Cause the naked to go without clothing, and they take away the sheaf from the hungry;'),
            plain(11, 'Which make oil within their walls, and tread their winepresses, and suffer thirst.'),
            plain(12, 'Men groan from out of the city, and the soul of the wounded crieth out: yet God layeth it not to his charge.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job24-days',
          html:
            '"Why, seeing times are not hidden from the Almighty, do they that know him not see his days?" Job is asking: God knows all times. God sees all days. Why does God not act? Why does He permit wickedness to flourish unchecked? If God knows what is happening, why does God not intervene?',
        },
        {
          kind: 'hebrew',
          id: 'job24-nasaleg',
          title: 'Nasag — "To Grasp" (Seizing What Is Not One&apos;s Own)',
          script: 'נָשַׂג',
          translit: '<strong>Nasag</strong> · to seize, grasp, take; to take what belongs to another',
          description:
            'The wicked "grasp" the ox, the land, the grain—things that belong to others. The word carries the sense of violent taking, of forceful appropriation. It is not trade or negotiation. It is theft.',
        },
        {
          kind: 'commentary',
          id: 'job24-prey',
          html:
            'The wicked "go forth to their work, rising betimes for a prey." They wake early, like hunters, seeking what they can seize. And they find it. The poor are defenseless. The fatherless have no protector. The widows have no one to stand with them. So the wicked prey upon them, and no one stops them. No judgment falls. No divine hand intervenes[res:sefaria-job-24][res:bibleodyssey-job-overview-24].',
        },
        {
          kind: 'carry',
          html:
            'Job observes a world where justice is absent, where crime is profitable, where the defenseless are victimized without consequence. And he asks: How can God, knowing all things, permit this? But Job does not conclude that God is unjust or uncaring. He trusts that there is a reckoning still to come.',
        },
        {
          kind: 'reflection',
          id: 'job24-silence',
          prompt: 'Have you witnessed injustice that went unpunished? How do you reconcile God&apos;s knowledge and power with the apparent triumph of the wicked?',
        },
      ],
    },

    /* ─── Job 24:13–25 — The Night of Wickedness ────────────────────────── */
    {
      ref: 'Job 24:13–25',
      title: 'The Darkness Will Be Exposed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 13,
              spans: [
                t('They are of those that '),
                hg('rebel against the light', 'job24-rebel'),
                t('; they know not the ways thereof, nor abide in the paths thereof. '),
              ],
            },
            plain(14, 'The murderer rising with the light killeth the poor and needy, and in the night is as a thief.'),
            plain(15, 'The eye also of the adulterer waiteth for the twilight, saying, No eye shall see me: and disguiseth his face.'),
            plain(16, 'In the dark they dig through houses, which they had marked for themselves in the daytime: they know not the light.'),
            {
              number: 17,
              spans: [
                t('For the morning is to them even as the shadow of death: if one know them, they are in the terrors of the shadow of death. '),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job24-mid1',
          html:
            'The wicked live in dread. Morning itself is death to them. They dwell in darkness, not just physically but spiritually. They know that their deeds will be exposed. And yet—Job pauses here. The focus shifts from the visible crimes to the invisible judgment: the wicked shall perish, their memory erased, their schemes dissolved.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(18, 'He is swift as the waters; their portion is cursed in the earth: he beholdeth not the way of the vineyards.'),
            plain(19, 'Drought and heat consume the snow waters: so doth the grave those which have sinned.'),
            plain(20, 'The womb shall forget him; the worm shall feed sweetly on him; he shall be no more remembered; and wickedness shall be broken as a tree.'),
            plain(21, 'For he hath evil entreated the barren that beareth not: and doeth not good to the widow.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job24-mid-darkness-night',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(22, 'He draweth also the mighty with his power: he riseth up, and no man is sure of life.'),
            {
              number: 23,
              spans: [
                t('Though it be given him to be in safety, whereon he resteth; yet his eyes are upon their ways. '),
              ],
            },
            plain(24, 'They are exalted for a little while, but are gone and brought low; they are taken out of the way as all other, and cut off as the tops of the corn.'),
            {
              number: 25,
              spans: [
                t('And if it be not so now, '),
                hp('who will make me a liar, and make my speech nothing worth?', 'job24-final'),
                t(' '),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job24-rebel',
          html:
            '"They are of those that rebel against the light." The wicked do not openly defy God. They hide. They work in darkness. They commit their crimes at night, when no eye can see them. They know that their deeds are shameful, so they conceal them. This is the nature of wickedness: it hides from light.',
        },
        {
          kind: 'hebrew',
          id: 'job24-or',
          title: 'Or — "Light" (Truth and Goodness)',
          script: 'אוֹר',
          translit: '<strong>Or</strong> · light, brightness, illumination; truth and goodness',
          description:
            'Light is not merely physical illumination. It is truth, goodness, the manifestation of what is real and right. To rebel against the light is to reject truth, to embrace darkness, to hide what is real beneath a veil of deception.',
        },
        {
          kind: 'commentary',
          id: 'job24-final',
          html:
            'Job ends with a challenge: "Who will make me a liar, and make my speech nothing worth?" Job is saying: these things are true. I speak what I have seen. If this is not so, let someone prove me wrong. But no one can. The reality is as Job describes: the wicked hide, the righteous are oppressed, and God is silent. But Job trusts that God will not remain silent forever.',
        },
        {
          kind: 'christ',
          id: 'job24-christ',
          title: 'Christ Connection — The Day of Judgment',
          html:
            'Christ teaches that a day of judgment is coming when all hidden things will be revealed: "There is nothing covered, that shall not be revealed; and hid, that shall not be known" (Matthew 10:26). The wicked who hide their deeds in darkness will face the light. "For the Son of man shall come in the glory of his Father with his angels; and then he shall reward every man according to his works" (Matthew 16:27). What Job longs for—a day when God will act, when wickedness will be exposed, when the wicked will be judged—this is the promise of Christ&apos;s return. On that day, all will be made manifest. All will be judged. Justice will be complete.',
        },
        {
          kind: 'carry',
          html:
            'Job speaks to those who suffer under injustice, who watch the wicked prosper, who long for God to act. The word is: wait. God sees. God knows. God will act. Not today, perhaps. But at the appointed day, when all things are revealed and all deeds are judged, justice will be done. The silence of God is not the absence of God. It is the patience of God, allowing time for repentance, waiting for the appointed hour.',
        },
        {
          kind: 'reflection',
          id: 'job24-judgment-day',
          prompt: 'Do you trust that God will ultimately judge all wickedness? Can you wait for God&apos;s justice, even when injustice seems to triumph now?',
        },
      ],
    },
  ],
};
