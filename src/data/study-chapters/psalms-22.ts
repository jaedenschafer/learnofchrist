import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 22 — The Passion Psalm
 *
 * "My God, my God, why hast thou forsaken me?" These opening words haunt the
 * reader with their raw anguish. Yet as the psalm unfolds, it becomes one of
 * the most detailed prophecies of Christ's crucifixion[res:intertextual-psalms-22-nt]. "They pierced my hands
 * and my feet." "They part my garments among them, and cast lots upon my
 * vesture." What begins in the deepest darkness of abandonment ends in a vision
 * of worldwide redemption and praise. This psalm is the prayer of the suffering[res:bible-odyssey-passion-psalms]
 * righteous, culminating in the victory of the Cross.
 */
export const PSALMS_22: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 22,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /David the Psalmist Petition/i,
    caption: 'Psalms 22',
  },
  intros: [
    'Psalm 22 begins where human speech can barely go. A cry of abandonment. A prayer prayed in the depths. Yet embedded within this lament are some of the Bible&apos;s most explicit prophecies concerning Christ&apos;s passion and death. The piercing of His hands and feet, the division of His garments by lot, the mocking of those who pass by—all are foretold here with precision that could not be invented. What makes this psalm extraordinary is that it does not end in darkness. It ends in light, in the proclamation of redemption to the nations, in praise.',
  ],

  sections: [
    {
      ref: 'Psalm 22:1–18',
      title: 'The Cry of Anguish and the Pierced One',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(1, 'My God, my God, why hast thou forsaken me? why art thou so far from helping me, and from the words of my roaring?'),
            plain(2, 'O my God, I cry in the day time, but thou hearest not; and in the night season, and am not silent.'),
            plain(8, 'He trusted on the Lord that he would deliver him: let him deliver him, seeing he delighted in him.'),
            plain(12, 'Many bulls have compassed me: strong bulls of Bashan have beset me round.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps22-pivot-trust',
          html:
            'The psalm turns from cry to confession of trust — from <em>why hast thou forsaken me</em> to <em>thou art he that took me out of the womb</em>. The grief does not vanish; it finds an old anchor.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(14, 'I am poured out like water, and all my bones are out of joint: my heart is like wax; it is melted in the midst of my bowels.'),
            plain(15, 'My strength is dried up like a potsherd; and my tongue cleaveth to my jaws; and thou hast brought me into the dust of death.'),
            plain(16, 'For dogs have compassed me: the assembly of the wicked have inclosed me: they pierced my hands and my feet.'),
            plain(17, 'I may tell all my bones: they look and stare upon me.'),
            plain(18, 'They part my garments among them, and cast lots upon my vesture.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms22-forsaken',
          html: 'No psalm opens with greater anguish than this. "My God, my God, why hast thou forsaken me?" The question echoes across centuries. It is the prayer of one stripped of all comfort, all sense of God&apos;s presence. Jesus Himself prayed these words on the Cross (Matthew 27:46), and in doing so, He sanctified every moment of human abandonment, every prayer prayed in darkness, every soul who has felt utterly alone before God.',
        },
        {
          kind: 'hebrew',
          id: 'psalms22-azab',
          title: 'Azab — "Forsaken" (Left Behind)',
          script: 'עָזַב',
          translit: '<strong>Azab</strong> · to abandon; to leave behind; to cease to help',
          description: 'The Hebrew word azab carries the sense of active abandonment, not merely distance but deliberate departure. Yet in the deepest theological sense, God does not truly abandon His people. What Psalm 22 expresses is the felt experience of abandonment—the condition of suffering without comfort, of darkness without light. The psalmist is not stating metaphysical truth; he is expressing the reality of his pain.',
        },
        {
          kind: 'christ',
          id: 'psalms22-christ-passion',
          title: 'Christ Connection — The Passion Foretold',
          html: 'Matthew 27:35 records the fulfillment: "And they crucified him, and parted his garments, casting lots: that it might be fulfilled which was spoken by the prophet, They parted my garments among them, and upon my vesture did they cast lots." John 19:37 confirms another detail: "Again another scripture saith, They shall look on him whom they pierced." The evangelists themselves understood Psalm 22 as the prayer of Christ on the Cross. In His suffering, Jesus enters into the deepest place of human anguish and transforms it through redemption.',
        },
        {
          kind: 'commentary',
          id: 'psalms22-pierced',
          html: 'The prophecy is explicit and literal: "They pierced my hands and my feet." In the time when Psalm 22 was written, crucifixion[res:intertextual-psalms-22-nt] was not a Jewish form of execution. It was a Roman torture reserved for slaves and the worst criminals. Yet here, centuries before Rome came to power, the psalmist describes with anatomical precision the sufferings of one hanged and pierced. This is not allegory. This is prophecy.',
        },
        {
          kind: 'carry',
          html: 'When we read Psalm 22, we are invited into the experience of Christ&apos;s passion and into the mystery of redemptive suffering. If you have ever felt abandoned, if you have ever prayed in darkness and received no answer, you are not alone. The God who hung on the Cross felt those things too. And in feeling them, He transformed them. Your suffering, united to His, becomes redemptive.',
        },
        {
          kind: 'reflection',
          id: 'psalms22-darkness',
          prompt: 'Have you ever felt abandoned by God, even if only for a season? How does knowing that Christ Himself prayed "Why hast thou[res:sefaria-psalms-22] forsaken me?" change how you hold that experience?',
        },
      ],
    },

    {
      ref: 'Psalm 22:19–31',
      title: 'From Suffering to Salvation and Worldwide Praise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(19, 'But be not thou far from me, O Lord: O my strength, haste thee to help me.'),
            plain(20, 'Deliver my soul from the sword; my darling from the power of the dog.'),
            plain(22, 'I will declare thy name unto my brethren: in the midst of the congregation will I praise thee.'),
            plain(26, 'The meek shall eat and be satisfied: they shall praise the Lord that seek him: your heart shall live for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps22-deliverance-gathering',
          html:
            'Deliverance comes. The poor eat and are satisfied. Now the promise spreads—all the ends of the earth will turn to the Lord.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(27, 'All the ends of the world shall remember and turn unto the Lord: and all the kindreds of the nations shall worship before thee.'),
            plain(28, 'For the kingdom is the Lord&apos;s: and he is the governor among the nations.'),
            plain(29, 'All they that be fat upon earth shall eat and worship: all they that go down to the dust shall bow before him: and none can keep alive his own soul.'),
            plain(30, 'A seed shall serve him; it shall be accounted to the Lord for a generation.'),
            plain(31, 'They shall come, and shall declare his righteousness unto a people that shall be born, that he hath done this.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms22-deliverance',
          html: 'After the darkness comes the turning point. "But be not thou far from me, O Lord." The prayer shifts from anguish to petition, from abandonment to plea. And God answers. The psalmist is delivered not merely from physical death, but into a new life of praise and proclamation. This is the arc of redemption: through suffering to salvation, through death to life.',
        },
        {
          kind: 'commentary',
          id: 'psalms22-declare-name',
          html: 'A striking promise follows: "I will declare thy name unto my brethren: in the midst of the congregation will I praise thee." The One who suffered will proclaim God&apos;s name. He will not hide His suffering or His deliverance. He will make it known that God is faithful, that redemption is real. And in declaring God&apos;s name, He draws others into praise.',
        },
        {
          kind: 'commentary',
          id: 'psalms22-all-ends',
          html: 'Then comes a vision of worldwide redemption: "All the ends of the world shall remember and turn unto the Lord: and all the kindreds of the nations shall worship before thee." From one man&apos;s suffering springs salvation for the world. From one pierced body flows redemption for all peoples. This is the gospel announced in the Psalms.',
        },
        {
          kind: 'carry',
          html: 'Psalm 22 teaches that suffering is not meaningless. When we join our suffering to Christ&apos;s, when we allow pain to deepen our compassion and anguish to deepen our faith, we are participating in redemption. And we are invited to declare His name, to proclaim in our own broken way that God is faithful, that darkness does not have the last word.',
        },
        {
          kind: 'reflection',
          id: 'psalms22-declare-redemption',
          prompt: 'What would it mean for you to declare God&apos;s name and redemptive work to your own circle, your own congregation? How can your experience of God&apos;s faithfulness become a testimony to others?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'My God, my God, why hast thou forsaken me? ...yet thou hast brought me into the dust of death. ...All the ends of the world shall remember and turn unto the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 22 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-22',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 22 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.22',
      description: 'Suffering lament with Jewish commentary on vindication.',
    },
    {
      id: 'intertextual-psalms-22-nt',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 22 in Matthew 27 & Mark 15',
      url: 'https://intertextual.bible/text/psalm-22',
      description: 'Gospel narrative weaves Psalm 22 into the crucifixion account.',
    },
    {
      id: 'bible-odyssey-passion-psalms',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalms of Abandonment & Vindication',
      url: 'https://www.bibleodyssey.org/dictionary/lament-psalms/',
      description: 'Psalms on suffering, death, and faith in resurrection.',
    },
  ],

  hasHebrew: true,
};
