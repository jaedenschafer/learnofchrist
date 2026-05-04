import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const PSALMS_60: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 60,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 5 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 60',
  },
  intros: [
    'The superscription places this psalm after a military defeat[res:sefaria-psalms-60]. David had suffered a setback in battle. His forces had been scattered. God&apos;s apparent withdrawal of protection seemed complete. And David&apos;s prayer opens with raw honesty: "O God, thou hast cast us off, thou hast scattered us, thou art wroth; oh turn thyself to us again."',
    'Yet this is not a prayer of despair that continues to despair. Even in the pain of defeat, David looks beyond the immediate circumstance to God&apos;s essential nature and His promises. "God hath spoken in his holiness; I will rejoice...With God we shall do valiantly." The defeat is real, but it is not the final word. God&apos;s right hand—His hand of strength, of salvation, of victory—will yet deliver David and his people.',
  ],

  sections: [
    {
      ref: 'Psalm 60:1–5',
      title: 'After Defeat, God&apos;s Promise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 60,
          lines: [
            plain(1, 'O God, thou hast cast us off, thou hast scattered us, thou art wroth; oh turn thyself to us again.'),
            plain(2, 'Thou hast made the earth to tremble; thou hast broken it: heal the breaches thereof; for it shaketh.'),
            plain(3, 'Thou hast shewed thy people hard things: thou hast made us to drink the wine of astonishment.'),
            plain(4, 'But thou hast given a banner to them that fear thee, that it may be displayed because of the truth. Selah.'),
            plain(5, 'That thy beloved may be delivered; save with thy right hand, and hear me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms60-cast-off',
          html: '"O God, thou hast cast us off, thou hast scattered us, thou art wroth." David does not deny the reality of the defeat. God&apos;s apparent anger is real. The scattering of his forces is real. But David immediately moves to petition: "oh turn thyself to us again."',
        },
        {
          kind: 'hebrew',
          id: 'psalms60-naphatz',
          title: 'Naphatz — "Scattered"',
          script: 'נָפַץ',
          translit: '<strong>Naphatz</strong> · to scatter; to disperse; to break apart',
          description: 'The Hebrew naphatz means to scatter or disperse, as when a group of soldiers breaks apart under attack. It conveys the loss of cohesion, the breaking of unity.',
        },
        {
          kind: 'commentary',
          id: 'psalms60-hard-things',
          html: '"Thou hast shewed thy people hard things: thou hast made us to drink the wine of astonishment." God has permitted His people to experience hard things, suffering, defeat. The image is of drinking wine of astonishment—a bitter cup, a stunning blow. Yet David acknowledges that even this experience comes from God&apos;s hand[res:bibleodyssey-psalter-laments].',
        },
        {
          kind: 'commentary',
          id: 'psalms60-banner',
          html: '"But thou hast given a banner to them that fear thee, that it may be displayed because of the truth." Even in defeat, there is hope. A banner is given—a sign of rallying, of gathering, of continued purpose. Those who fear God can rally around this banner.',
        },
        {
          kind: 'christ',
          id: 'psalms60-christ-right-hand',
          title: 'Christ Connection — Seated at the Right Hand',
          html: 'After His resurrection, Christ "sat down on the right hand of the throne of God" (Hebrews 12:2). The right hand of God is the place of authority, of power, of salvation. Christ, seated there, intercedes for us. He is the banner around which God&apos;s people gather. Through Him, God saves with His right hand.',
        },
        {
          kind: 'carry',
          html: 'Psalm 60 teaches that defeat does not mean abandonment. Even when God permits us to experience hard things, even when we are scattered and seemingly abandoned, God has not cast us off forever. There is a banner to rally around, a God to call upon, a right hand that will yet deliver us.',
        },
        {
          kind: 'reflection',
          id: 'psalms60-after-defeat',
          prompt: 'Have you experienced defeat or failure? How does it help to remember that God&apos;s love is not dependent on your military or personal victories?',
        },
      ],
    },

    {
      ref: 'Psalm 60:6–12',
      title: 'God&apos;s Sovereignty Over Lands',
      blocks: [
        {
          kind: 'scripture',
          chapter: 60,
          lines: [
            plain(6, 'God hath spoken in his holiness; I will rejoice, I will divide Shechem, and mete out the valley of Succoth.'),
            plain(7, 'Gilead is mine, and Manasseh is mine; Ephraim also is the strength of mine head; Judah is my lawgiver;'),
            plain(8, 'Moab is my washpot; over Edom will I cast out my shoe; over Philistia will I triumph.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-60-78mid-1',
          html:
            'Lament over military defeat gives way to trust in God&apos;s help. Anguish becomes assurance; loss becomes victory.',
        },
        {
          kind: 'scripture',
          chapter: 60,
          lines: [
            plain(9, 'Who will bring me into the strong city? who will lead me into Edom?'),
            plain(10, 'Wilt not thou, O God, which hadst cast us off? and thou, O God, which didst not go out with our armies?'),
            plain(11, 'Give us help from trouble: for vain is the help of man.'),
            plain(12, 'Through God we shall do valiantly: for he it is that shall tread down our enemies.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms60-spoken-holiness',
          html: '"God hath spoken in his holiness; I will rejoice, I will divide Shechem, and mete out the valley of Succoth." This is a profound shift. David moves from the pain of present defeat to the assurance of God&apos;s ultimate purpose. God has spoken. What He speaks is holy, immutable, certain.',
        },
        {
          kind: 'commentary',
          id: 'psalms60-washpot',
          html: '"Moab is my washpot; over Edom will I cast out my shoe; over Philistia will I triumph." These are David&apos;s enemies—Moab, Edom, Philistia. And God declares them subject to Him. Moab becomes merely a vessel for washing. Edom receives a shoe cast upon it—a sign of subjection.',
        },
        {
          kind: 'commentary',
          id: 'psalms60-vain-help',
          html: '"Give us help from trouble: for vain is the help of man. Through God we shall do valiantly." David&apos;s final conclusion: human help is vain. Military might is insufficient. Strategic allies cannot save. Only God&apos;s help matters. And through God, not through human strength, will David and his people do valiantly.',
        },
        {
          kind: 'carry',
          html: 'Psalm 60 invites us to see beyond immediate defeat to God&apos;s ultimate sovereignty. The nations that oppress God&apos;s people are not ultimately in charge. They are subject to God. He rules over all the earth. And His purposes will be fulfilled.',
        },
        {
          kind: 'reflection',
          id: 'psalms60-god-valiantly',
          prompt: 'In what situation are you tempted to rely on human help instead of God&apos;s? How might you practice the stance of Psalm 60?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Give us help from trouble: for vain is the help of man. Through God we shall do valiantly.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 60 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-60',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 60 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.60',
      description: 'Lament over military defeat with Jewish commentary.',
    },

  ],

  hasHebrew: true,
};
