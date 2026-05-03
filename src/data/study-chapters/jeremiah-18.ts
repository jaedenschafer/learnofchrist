import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 18 — The Potter's House
 *
 * Jeremiah is sent to the potter's house, where he observes clay being shaped
 * in the potter's hand. As the clay is in the potter's hand, so are the people
 * in God's hand. God can reshape the vessel, can choose what to do with the clay
 * based on its response to His work. The image speaks to divine sovereignty and
 * human responsibility.
 */
export const JEREMIAH_18: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 18,

  estimatedMinutes: { beginner: 6, intermediate: 8, deep: 11 },
  intros: [
    'The Lord sends Jeremiah to the house of the potter. There, watching clay being shaped and reshaped in the hands of a craftsman, Jeremiah receives a parable about the nature of God&apos;s work with His people. The clay is not passive; the potter is not merely imposing an arbitrary shape. Rather, the potter shapes the clay according to what the clay will bear, and the clay, in turn, yields or resists the shaping. This is the relationship between God and His people — divine sovereignty and human cooperation, craft and response.',
    'Jeremiah learns that the same God who can make a vessel for honor can remake that vessel for dishonor, depending on how the people respond to His word. Yet even this doctrine of divine judgment carries an implicit hope: a vessel can be reshaped. As long as the clay remains in the potter&apos;s hand, transformation is possible.',
  ],

  bottomShare: {
    label: 'Share Jeremiah 18',
    quote:
      '"As the clay is in the potter&apos;s hand, so are ye in mine hand." God shapes His people according to their willingness to yield to His work.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 18 · Study Guide',
  },

  sections: [
    /* ─── Jeremiah 18:1–6 — The Parable at the Potter's House ─────────────── */
    {
      ref: 'Jeremiah 18:1–6',
      title: 'The Potter and the Clay',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 1,
              spans: [t('The word which came to Jeremiah from the Lord, saying,')],
            },
            {
              number: 2,
              spans: [
                t('Arise, and go down to the potter&apos;s house, and there I will cause thee to hear my words.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Then I went down to the potter&apos;s house, and, behold, he wrought a work on the wheels.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the vessel that he made of clay was marred in the hand of the potter: so he made it again another vessel, as seemed good to the potter to make it.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Then the word of the Lord came to me, saying,'),
              ],
            },
            {
              number: 6,
              spans: [
                t('O house of Israel, '),
                hg('cannot I do with you as this potter', 'jer18-potter'),
                t('? saith the Lord. Behold, as the clay is in the potter&apos;s hand, so are ye in mine hand, O house of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer18-potter',
          html: 'The vessel is marred in the potter&apos;s hand, and rather than discarding the clay, the potter reshapes it into a new vessel. This is the image God uses to speak of His work with Israel. The people are the clay; God is the potter. Marring is not final; reshaping is always possible as long as the people remain in the potter&apos;s hand[res:jer31-hebrews-intertextual].',
        },
        {
          kind: 'hebrew',
          id: 'jer18-yatsar',
          title: 'Yatsar — "Formed" or "Fashioned"',
          script: 'יָצַר',
          translit: '<strong>Yatsar</strong> · to form; to fashion; to create by shaping',
          description:
            'The verb "yatsar" carries both the sense of intentional creation and active shaping. It is used of God forming humanity from dust (Genesis 2:7) and here of God&apos;s ongoing work with His people. The word suggests that God does not merely plan or command; He actively shapes, works with, remakes His people.',
        },
        {
          kind: 'carry',
          html: 'The potter does not discard the marred vessel; he remakes it. Your life may feel ruined, your path may seem interrupted, your plans destroyed. But in the hand of God, marring is not final. As long as you remain in His hand, you can be reshaped, remade into something new. The question is: will you yield to His work, or will you resist?',
        },
        {
          kind: 'reflection',
          id: 'jer18-marred-remade',
          prompt: 'The potter remakes the marred vessel. When have you felt marred by circumstances? How has God remade you into something new?',
        },
      ],
    },

    /* ─── Jeremiah 18:7–12 — The Work of Shaping ──────────────────────────── */
    {
      ref: 'Jeremiah 18:7–12',
      title: 'Repentance and Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 7,
              spans: [
                t('At what instant I shall speak concerning a nation, and concerning a kingdom, to pluck up, and to pull down, and to destroy it;'),
              ],
            },
            {
              number: 8,
              spans: [
                t('If that nation, against whom I have pronounced, turn from their evil, I will repent of the evil that I thought to do unto them.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And at what instant I shall speak concerning a nation, and concerning a kingdom, to build and to plant it;'),
              ],
            },
            {
              number: 10,
              spans: [
                t('If it do evil in my sight, that it obey not my voice, then I will repent of the good wherewith I said I would benefit them.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Now therefore go to, speak to the men of Judah, and to the inhabitants of Jerusalem, saying, Thus saith the Lord; Behold, I frame evil against you, and devise a device against you: return ye now every one from his evil way, and make your ways and your doings good.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And they said, There is no hope: but we will walk after our own devices, and we will every one do the imagination of his evil heart.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer18-repent',
          html: 'The principle is clear: God&apos;s judgment is not arbitrary or fixed. When He announces judgment, repentance can change the outcome. Conversely, when He announces blessing, disobedience can change the outcome. This is the meaning of God&apos;s "repenting" — not changing His character, but responding to the changing character and response of His people[res:lachish-letters].',
        },
        {
          kind: 'commentary',
          id: 'jer18-no-hope',
          html: 'But Judah refuses. They say, "There is no hope." They have given up. Rather than turning from their evil ways, they declare their intention to walk after their own devices. They reject the invitation to be reshaped. They prefer to remain marred clay, hardened and resistant to the potter&apos;s hand.',
        },
        {
          kind: 'carry',
          html:
            'The refusal is not ignorance but defiance. The people know what God offers — a way to escape judgment, a chance to be remade. And they refuse it. They choose instead to follow their own devices, their own evil hearts. This is the deepest sin: not ignorance but willful rejection of God&apos;s offer of restoration.',
        },
        {
          kind: 'reflection',
          id: 'jer18-devices',
          prompt: 'When have you told yourself "there is no hope" and chosen to follow your own devices? What would it mean to return to God even when it seems too late?',
        },
      ],
    },

    /* ─── Jeremiah 18:13–17 — The Unnatural Unfaithfulness ────────────────── */
    {
      ref: 'Jeremiah 18:13–17',
      title: 'Against Nature',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 13,
              spans: [
                t('Therefore thus saith the Lord; Ask ye now among the heathen, who hath heard such things: the virgin of Israel hath done a very horrible thing.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Will a man leave the snow of Lebanon which cometh from the rock of the field? or shall the cold flowing waters that come from another place be forsaken?'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Because my people have forgotten me, they have burned incense to vanity, and they have caused them to stumble in their ways from the ancient paths, to walk in paths, in a way not cast.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('To make their land desolate, and a perpetual hissing; every one that passeth thereby shall be astonied, and wag his head.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('I will scatter them as with an east wind before the enemy; I will shew them the back, and not the face, in the day of their calamity.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer18-horrible',
          html:
            'Israel&apos;s apostasy is called "a very horrible thing." Even the heathen have not heard of such an unnatural rejection. Just as a man would not abandon reliable springs of living water, so no nation would normally abandon their God. Yet Israel has done exactly that.',
        },
        {
          kind: 'commentary',
          id: 'jer18-forgotten',
          html:
            'The people have forgotten God. They have turned to vanity, to false gods that provide nothing. They have left "the ancient paths" — the way of their fathers, the way of covenant — for paths "not cast," paths that lead nowhere.',
        },
        {
          kind: 'carry',
          html:
            'When we turn away from God, we turn away from something as natural and necessary as water. We act against our own nature. The consequence is that God shows us "the back, and not the face" — the withdrawal of His presence. This is not arbitrary punishment; it is the natural result of rejecting the source of life.',
        },
        {
          kind: 'reflection',
          id: 'jer18-forgotten-god',
          prompt: 'Israel has forgotten God as though He were not their natural and necessary source of life. What have you forgotten about God? What would it mean to remember?',
        },
      ],
    },

    /* ─── Jeremiah 18:18–23 — Jeremiah's Complaint and Intercession ────────── */
    {
      ref: 'Jeremiah 18:18–23',
      title: 'The Prophet Persecuted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 18,
              spans: [
                t('Then said they, Come, and let us devise devices against Jeremiah; for the law shall not perish from the priest, nor counsel from the wise, nor the word from the prophet. Come, and let us smite him with the tongue, and let us not give heed to any of his words.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Give heed to me, O Lord, and hearken to the voice of them that contend with me.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Shall evil be recompensed for good? for they have digged a pit for my soul. Remember that I stood before thee to speak good for them, and to turn away thy wrath from them.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Therefore deliver up their children to the famine, and pour out their blood by the force of the sword; and let their wives be bereaved of their children, and be widows; and let their men be smitten by death; let their young men be smitten by the sword in battle.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Let a cry be heard from their houses, when thou shalt bring a troop suddenly upon them: for they have digged a pit to take me, and hid snares for my feet.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Yet, Lord, thou knowest all their counsel against me to put me to death: forgive them not, neither blot out their sin from thy sight, but let them be overthrown before thee; deal thus with them in the time of thine anger.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer18-devices-2',
          html:
            'Jeremiah&apos;s enemies conspire. They say his words should be ignored; they will smite him with the tongue. And Jeremiah cries out: "Shall evil be recompensed for good?" He stood before God interceding for these very people, and they repay him with plots and pits.',
        },
        {
          kind: 'commentary',
          id: 'jer18-judgment',
          html:
            'Jeremiah asks God to judge his persecutors. This is not gentle intercession; it is the cry of one wronged, asking God for vindication. He asks that the sword come to their young men, that famine strike their children. This is the language of holy anger, of one who has been faithful and is being destroyed for it.',
        },
        {
          kind: 'carry',
          html:
            'Jeremiah is shaped by the clay he works with. He learns at the potter&apos;s house about God&apos;s work, only to find himself persecuted. Yet he does not abandon his trust. He brings his complaint to God, asking not for his own vindication but for God&apos;s justice to prevail. The prophet who speaks judgment learns to live under judgment as well.',
        },
        {
          kind: 'reflection',
          id: 'jer18-betrayed',
          prompt: 'Jeremiah is persecuted by those he tried to help. When have you been treated unfairly for doing what is right? How did you respond?',
        },
      ],
    },

    /* ─── Jeremiah 18 · The Work of Transformation ───────────────────────── */
    {
      ref: 'Jeremiah 18 · All',
      title: "In the Potter&apos;s Hand",
      blocks: [
        {
          kind: 'commentary',
          id: 'jer18-sovereignty-response',
          html:
            'The chapter holds together divine sovereignty and human response. God is the potter; the people are the clay. Yet the clay can refuse to yield, can harden itself against the shaping hand. The vessel can be remade, or it can be broken. This is not a mechanical process but a relationship — God working, the people responding or refusing.',
        },
        {
          kind: 'christ',
          id: 'jer18-christ-potter',
          title: 'Christ Connection — The Vessel Broken and Remade',
          html:
            'Jesus speaks of Himself as a vessel — "This cup is my blood of the covenant" (1 Corinthians 11:25). And in Gethsemane, He asks the Father, as though the cup might pass — showing that even Christ&apos;s obedience is a yielding to God&apos;s work. But He yields: "Not my will, but thine be done." He allows Himself to be broken so that we might be remade. In His resurrection, He is the vessel reshaped — broken and reconstituted, no longer subject to death.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],  resources: [
    {
      id: 'jer31-hebrews-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jeremiah 31 ↔ Hebrews 8:8–12',
      url: 'https://intertextual.bible/text/jeremiah-31/hebrews-8',
      description: 'Side-by-side comparison of the new covenant promise in Jeremiah quoted in Hebrews.',
    },
    {
      id: 'lachish-letters',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Lachish Letters',
      url: 'https://www.imj.org.il/en/collections/lachish-letters',
      description: 'Ancient inscribed potsherds from the Judean siege of Lachish (587 BCE), contemporary with Jeremiah.',
    }
  ],
};
