import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 102 — The Prayer of the Afflicted
 *
 * "Hear my prayer, O Lord, and let my cry come unto thee." The psalmist is
 * broken—his days consumed like smoke, his bones burned, his heart smitten and
 * withered like grass. Yet in the midst of his anguish, he shifts his vision.
 * "Of old hast thou laid the foundation of the earth; and the heavens are the
 * work of thy hands." In Hebrews 1:10–12, Paul quotes these very words to reveal
 * that they speak of Christ—the eternal Creator who alone endures while all else
 * passes away.
 */
export const PSALMS_102: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 102,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Psalm 102 opens in desolation. The psalmist is in such pain that he barely eats, his bones ache, his heart is broken. His days are disappearing like smoke. He feels as worthless as a scattered shadow. Yet this is not a psalm of despair that ends in despair. The psalmist turns his gaze upward. He remembers that God has laid the foundation of the earth. He recalls that the heavens are the work of God&apos;s hands. And in that turning—from his own smallness to God&apos;s vastness—the psalm finds its resolution. The afflicted man discovers that his weakness is not the final word because God&apos;s strength is eternal.',
    'The apostle Paul saw in this psalm a revelation of Christ. He quoted verses 25–27—"Of old hast thou laid the foundation of the earth"—and attributed them to Jesus Himself. This is stunning: the psalmist&apos;s cry from the depths becomes, in the New Testament, a window onto Christ&apos;s eternity. The one who suffers is also the one through whom all things exist. The prayer of the afflicted is answered by the eternal Creator.',
  ],

  sections: [
    {
      ref: 'Psalm 102:1–11',
      title: 'The Cry of the Broken',
      blocks: [
        {
          kind: 'scripture',
          chapter: 102,
          lines: [
            plain(1, 'Hear my prayer, O Lord, and let my cry come unto thee.'),
            plain(2, 'Hide not thy face from me in the day when I am in trouble; incline thine ear unto me: in the day when I call answer me speedily.'),
            plain(3, 'For my days are consumed like smoke: and my bones are burned as an hearth.'),
            plain(4, 'My heart is smitten, and withered like grass; so that I forget to eat my bread.'),
            plain(5, 'By reason of the voice of my groaning my bones cleave to my skin.'),
            plain(6, 'I am like a pelican of the wilderness: I am like an owl of the desert.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps102-mid',
          html:
            'The catalog of suffering shifts from internal wasting to external isolation. The psalmist is consumed from within and then abandoned without. Each image deepens the portrait of one brought to the edge of death. [res:sefaria-psalm-102]',
        },
        {
          kind: 'scripture',
          chapter: 102,
          lines: [
            plain(7, 'I watch, and am as a sparrow alone upon the house top.'),
            plain(8, 'Mine enemies reproach me all the day; and they that are mad against me are sworn against me.'),
            plain(9, 'For I have eaten ashes like bread, and mingled my drink with weeping.'),
            plain(10, 'Because of thine indignation and thy wrath: for thou hast lifted me up, and cast me down.'),
            plain(11, 'My days are like a shadow that declineth; and I am withered like grass.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps102-hear-prayer',
          html:
            'The psalm begins with an urgent plea: "Hear my prayer, O Lord, and let my cry come unto thee." There is no doubt here that God exists or that He listens. There is only the desperate need for Him to hear. The psalmist has been praying, but feels unheard. He asks God not to hide His face. This is not prayer requesting information but prayer begging for presence, for acknowledgment, for mercy.',
        },
        {
          kind: 'commentary',
          id: 'ps102-consumed-smoke',
          html:
            'What follows is a catalog of suffering. His days vanish like smoke. His bones are burned as though he were a hearth itself—the fire is inside him, consuming him from within. His heart is broken and his appetite is gone. His weight has fallen away—his bones cling to his skin. He is a shadow of himself, a lonely bird in the wilderness, watching from a rooftop like a sparrow isolated and defenseless. The imagery is relentless: each line deepens the picture of a man broken.',
        },
        {
          kind: 'hebrew',
          id: 'ps102-kalah',
          title: 'Kalah — "Consumed" (Exhaustion)',
          script: 'כָּלָה',
          translit: '<strong>Kalah</strong> · consumed; consumed completely; exhausted; terminated',
          description:
            'The Hebrew word kalah means to be completely consumed, to reach the end, to be exhausted. It suggests not just loss but depletion—the kind of wasting away that leaves nothing. The psalmist is not merely sad. He is being worn away by his suffering, as if life itself is being consumed from him.',
        },
        {
          kind: 'carry',
          html:
            'The psalm gives voice to a kind of suffering that is often unspoken: the internal breaking that comes from prolonged grief or illness or oppression. The psalmist feels as though he is being destroyed from within. His body reflects his inner devastation. And he brings this devastation to God without explanation or excuse. He does not claim to deserve better. He simply lays the raw truth before his Father: "I am being consumed. Please hear me."',
        },
        {
          kind: 'reflection',
          id: 'ps102-what-consumes',
          prompt: 'When you have felt the kind of deep, body-level weariness the psalmist describes, did you bring it to God? What made it difficult or possible for you to cry out? [res:intertextual-psalm-102-hebrews-1-messianic]',
        },
      ],
    },

    {
      ref: 'Psalm 102:12–28',
      title: 'The Eternal One',
      blocks: [
        {
          kind: 'scripture',
          chapter: 102,
          lines: [
            plain(12, 'But thou, O Lord, shalt endure for ever; and thy remembrance unto all generations.'),
            plain(13, 'Thou shalt arise, and have mercy upon Zion: for the time to favour her, yea, the set time, is come.'),
            plain(15, 'So the heathen shall fear the Lord, and all the kings of the earth thy glory.'),
            plain(18, 'This shall be written for the generation to come: and the people which shall be created shall praise the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-102-78mid-1',
          html:
            'The psalmist&apos;s desolation and prayer shift to confidence in God&apos;s enduring mercy and covenant. Personal sorrow becomes cosmic assurance.',
        },
        {
          kind: 'scripture',
          chapter: 102,
          lines: [
            plain(25, 'Of old hast thou laid the foundation of the earth: and the heavens are the work of thy hands.'),
            plain(26, 'They shall perish, but thou shalt endure: yea, all of them shall wax old like a garment; as a vesture shalt thou change them, and they shall be changed:'),
            plain(27, 'But thou art the same, and thy years shall have no end.'),
            plain(28, 'The children of thy servants shall continue, and their seed shall be established before thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps102-endure-forever',
          html:
            'Then the psalmist&apos;s vision shifts. He stops speaking of his own dissolution and begins to speak of God&apos;s permanence. "But thou, O Lord, shalt endure for ever." The contrast is absolute. His days are like smoke; God&apos;s days have no end. He will rise and show mercy to Zion. The time of grace will come. And when it does, all nations and all kings will fear the Lord and see His glory.',
        },
        {
          kind: 'commentary',
          id: 'ps102-old-foundation',
          html:
            'Then comes the cosmic vision: "Of old hast thou laid the foundation of the earth: and the heavens are the work of thy hands." Creation itself—the earth, the sky, the fixed frame of all things—came from God&apos;s hands. And the psalmist recognizes something staggering: what seems eternal and unchanging to us is actually temporary. The heavens shall perish. They shall grow old like a garment. But God? God remains. God is the same. God&apos;s years have no end. In Hebrews 1:10–12, Paul quotes these words as a direct address to Jesus Christ. The psalmist&apos;s description of God is Paul&apos;s description of the Son.',
        },
        {
          kind: 'christ',
          id: 'ps102-christ-eternal',
          title: 'Christ Connection — The Eternal Creator',
          html:
            'Hebrews 1:10–12 quotes Psalm 102:25–27 and directly applies them to Jesus: "Thou, Lord, in the beginning hast laid the foundation of the earth; and the heavens are the works of thine hands: they shall perish; but thou remainest." Christ is not created. He is the Creator. Not merely sent by God, but equal with God, sharing His eternality. The psalm that opens in a cry of desolation ends in a revelation of Christ&apos;s infinite power and faithfulness. [res:bible-odyssey-psalm-102]',
        },
        {
          kind: 'carry',
          html:
            'When we are in our lowest moment—when our days feel like smoke and our bones are burned—we have access to the same vision the psalmist found: we are not the measure of reality. Suffering is real, but it is temporary. God is real, and He is eternal. And we are invited to establish our faith not on what we feel but on what is ultimately true about God. Our children, the psalmist concludes, shall continue. The faithful shall be established before God. The afflicted does not have the last word. The eternal God does.',
        },
        {
          kind: 'reflection',
          id: 'ps102-glimpse-eternal',
          prompt: 'When you shift your focus from your own pain to God&apos;s eternality, how does that change the weight you carry? What becomes possible when you rest in the fact that God endures?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But thou, O Lord, shalt endure for ever...Of old hast thou laid the foundation of the earth: and the heavens are the work of thy hands.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 102 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-102',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 102 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.102',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-102',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 102 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+102',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
    {
      id: 'intertextual-psalm-102-hebrews-1-messianic',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 102 in Hebrews 1:10–12',
      url: 'https://intertextual.bible/text/psalm-102/hebrews-1.10',
      description: 'New Testament connection showing how this Psalm is quoted or referenced.',
    },
  ],

  hasHebrew: true,
};
