import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 140 — Deliver from Evil Men
 *
 * "Deliver me, O Lord, from the evil man; preserve me from the violent man."
 * The psalmist faces concrete danger: men who devise mischief, who speak lies
 * and slander, who have laid snares and traps. This is not abstract evil. It is
 * personal, intentional, physical. Yet the psalmist&apos;s response is not
 * retaliation. It is prayer. He cries out to the Lord, confident that the Lord
 * will hear, will deliver, will protect the righteous while the wicked fall into
 * their own devices.
 */
export const PSALMS_140: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 140,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 4 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 140',
  },
  intros: [
    'Psalm 140 is a psalm of David, offered in the face of active persecution. Evil men plot against him. They speak lies. They have hidden snares and traps in his path. This is not theoretical danger. This is a person under siege, facing organized opposition. Yet the psalmist does not despair. He prays. He brings his case before God. He trusts that the Lord sees the wicked, will judge them, and will preserve the righteous. The psalm offers not vengeance, but vindication—the confidence that God will ultimately defend those who call upon Him.',
  ],

  sections: [
    {
      ref: 'Psalm 140:1–5',
      title: 'Deliver from Evil Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 140,
          lines: [
            plain(1, 'Deliver me, O Lord, from the evil man: preserve me from the violent man;'),
            plain(2, 'Which imagine mischiefs in their heart; continually are they gathered together for war.'),
            plain(3, 'They have sharpened their tongues like a serpent: adders&apos; poison is under their lips. Selah.'),
            plain(4, 'Keep me, O Lord, from the hands of the wicked; preserve me from the violent man; who have purposed to overthrow my goings.'),
            plain(5, 'The proud have hid a snare for me, and cords; they have spread a net by the wayside; they have set gins for me. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm140-evil-men',
          html:
            'The opening appeal is direct: "Deliver me, O Lord, from the evil man." The psalmist is not facing abstract, theoretical evil. He is facing specific, malicious people. Men who imagine mischiefs in their heart, who gather together for war. The language is military—this is organized opposition, not random hostility. [res:sefaria-psalm-140]',
        },
        {
          kind: 'hebrew',
          id: 'psalm140-zamam',
          title: 'Zamam — "Imagine" (Devise)',
          script: 'זָמַם',
          translit: '<strong>Zamam</strong> · to devise, plan, scheme, intend (with negative connotation)',
          description:
            'The verb zamam means to devise or scheme, often used of plots and conspiracies. The psalmist&apos;s enemies are not acting on impulse. They are planning, organizing, strategizing against him.',
        },
        {
          kind: 'commentary',
          id: 'psalm140-serpent',
          html:
            '"They have sharpened their tongues like a serpent: adders&apos; poison is under their lips." The tongue is their weapon. They speak lies, slander, accusations. The language is vivid: their words are sharp like serpents, their speech is poisoned. The reference to serpents recalls the serpent in Genesis, the original deceiver. These men are agents of deception[res:bibleodyssey-psalter-laments].',
        },
        {
          kind: 'commentary',
          id: 'psalm140-snare',
          html:
            '"The proud have hid a snare for me, and cords; they have spread a net by the wayside; they have set gins for me." The enemies do not rely on words alone. They lay traps—physical snares meant to catch the psalmist unaware. The image is of a hunter setting snares in the path of his prey. The psalmist feels hunted.',
        },
      ],
    },

    {
      ref: 'Psalm 140:6–13',
      title: 'The Lord Will Defend',
      blocks: [
        {
          kind: 'scripture',
          chapter: 140,
          lines: [
            plain(6, 'I said unto the Lord, Thou art my God: hear the voice of my supplications, O Lord.'),
            plain(7, 'O God the Lord, the strength of my salvation, thou hast covered my head in the day of battle.'),
            plain(8, 'Grant not, O Lord, the desires of the wicked: further not his wicked device; lest they exalt themselves. Selah.'),
            plain(9, 'As for the head of those that compass me about, let the mischief of their own lips cover them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-140-78mid-1',
          html:
            'Prayer for rescue from violent enemies opens into confidence in the Lord&apos;s help and assurance of the righteous dwelling before Him. Plea becomes promise.',
        },
        {
          kind: 'scripture',
          chapter: 140,
          lines: [
            plain(10, 'Let burning coals fall upon them: let them be cast into the fire; into deep pits, that they rise not up again.'),
            plain(11, 'Let not an evil speaker be established in the earth: evil shall hunt the violent man to overthrow him.'),
            plain(12, 'I know that the Lord will maintain the cause of the afflicted, and the justice of the poor.'),
            plain(13, 'Surely the righteous shall give thanks unto thy name: the upright shall dwell in thy presence.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm140-my-god',
          html:
            '"I said unto the Lord, Thou art my God: hear the voice of my supplications, O Lord." The psalmist turns from describing the threat to addressing God. He identifies himself by his relationship to God: Thou art my God. This is not a distant, theological statement. It is a claim of intimacy and covenant. And he asks to be heard. His voice matters. His cry is not lost in the cosmos.',
        },
        {
          kind: 'commentary',
          id: 'psalm140-head',
          html:
            '"O God the Lord, the strength of my salvation, thou hast covered my head in the day of battle." The head is vulnerable in battle—the place where a decisive blow can be struck. God has covered it. Protected it. The psalmist has already experienced deliverance. He appeals to this history of protection.',
        },
        {
          kind: 'commentary',
          id: 'psalm140-imprecation',
          html:
            'The psalm then turns fierce with imprecation. "Let the mischief of their own lips cover them." The enemies&apos; own words will return on them. "Let burning coals fall upon them." The language of judgment and fire invokes divine justice. "Let not an evil speaker be established in the earth: evil shall hunt the violent man to overthrow him." The psalmist is asking God to ensure that those who plot evil do not prosper, but instead are hunted down by their own evil.',
        },
        {
          kind: 'commentary',
          id: 'psalm140-justice',
          html:
            'But the psalm concludes not with vengeance, but with confidence: "I know that the Lord will maintain the cause of the afflicted, and the justice of the poor." The psalmist knows—not hopes, but knows—that God will vindicate the afflicted. He will ensure that justice is served. And the righteous will give thanks, the upright will dwell in God&apos;s presence.',
        },
        {
          kind: 'christ',
          id: 'psalm140-christ-deliver',
          title: 'Christ Connection — Delivers from Evil',
          html:
            'In 2 Timothy 4:17–18, Paul writes of Christ: "The Lord...will deliver me from every evil deed, and will bring me safely to His heavenly kingdom." Christ is our deliverer. He faces the real evil and deception of the world, confronts it, and in His resurrection overcomes it. Those who call upon Him are protected. [res:bible-odyssey-psalm-140]',
        },
        {
          kind: 'carry',
          html:
            'Someone&apos;s words have wounded you. Or are wounding you still. The temptation is to stay in the fight, to sharpen your own tongue like a serpent, to build your own case. Don&apos;t. The carry is simpler and quieter: I know that the Lord will maintain the cause of the afflicted. Bring that one person, that one wound, to God. Pray for His vindication, not yours. Ask Him to maintain your cause and let it go. Your job is to let Him be your advocate. He is better at it than you are.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Deliver me, O Lord, from the evil man: preserve me from the violent man.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 140 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-140',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 140 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.140',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-140',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 140 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+140',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },

  ],

  hasHebrew: true,
};
