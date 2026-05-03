import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 70 — Make Haste, O God
 *
 * "Make haste, O God, to deliver me; make haste to help[res:sefaria-psalms-70] me, O Lord." This is
 * the shortest and most urgent of the psalms. It is almost a prayer distilled
 * to its essence: a desperate cry for God to act quickly. Yet in that urgency
 * is profound faith—the conviction that God will come, that help is not
 * permanent, that relief will come.
 */
export const PSALMS_70: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 70,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 70 is remarkably brief—only five verses. Yet in its brevity lies tremendous power. It is the prayer of one in acute distress, so pressed that elaborate language is impossible. All that can be said is: Make haste. Help me. The prayer is almost childlike in its simplicity—a cry from someone too overwhelmed for eloquence, too desperate for anything but the most direct plea.',
    'Yet this brief prayer reveals the deepest conviction of faith: that God will make haste. That the one who calls out will not be left without help. That those who love God and seek His name will rejoice and be glad. The psalm moves from urgent pleading to absolute confidence—from "Make haste" to the assurance that God&apos;s salvation will be magnified.',
  ],

  sections: [
    {
      ref: 'Psalm 70:1–3',
      title: 'Urgent Deliverance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 70,
          lines: [
            plain(1, 'Make haste, O God, to deliver me; make haste to help me, O Lord.'),
            plain(2, 'Let them be ashamed and confounded that seek after my soul: let them be turned backward, and put to confusion, that desire my hurt.'),
            plain(3, 'Let them be turned back for a reward of their shame that say, Aha, aha.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms70-haste',
          html: 'The psalm begins with an imperative repeated twice: "Make haste, make haste." This is not a polite petition[res:bible-odyssey-urgent-prayer]. This is urgency pressed to its limit. The psalmist cannot articulate a long prayer. He can only cry out: Do not delay. Come quickly.',
        },
        {
          kind: 'hebrew',
          id: 'psalms70-chush',
          title: 'Chush — "Make Haste" (Hasten)',
          script: 'חוּשׁ',
          translit: '<strong>Chush</strong> · make haste, hasten, hurry',
          description: 'The Hebrew word chush conveys urgency and speed. It is the word used when one rushes to prevent a disaster, when seconds matter, when delay is impossible. In using this word, the psalmist is implying that his situation is critical.',
        },
        {
          kind: 'commentary',
          id: 'psalms70-shame',
          html: 'Then the prayer turns to enemies. The psalmist prays that those who seek his hurt would be turned back, confounded, ashamed. This is not malicious. It is the prayer that opposition would dissolve, that the enemy would be frustrated.',
        },
        {
          kind: 'christ',
          id: 'psalms70-christ-urgent',
          title: 'Christ Connection — The Urgent Savior',
          html: 'Christ knows urgency. He moves with purpose to save. He does not delay. "Come quickly" is the prayer of every soul in distress, and Christ answers that prayer. He came into the world not slowly, reluctantly, but with urgent purpose to redeem.',
        },
        {
          kind: 'carry',
          html: 'In times of acute distress, you need not fashion elaborate prayers. You need only cry out: Make haste, O God. The directness of your plea does not diminish its power. God hears the urgent cry as surely as He hears the eloquent prayer.',
        },
        {
          kind: 'reflection',
          id: 'psalms70-acute',
          prompt: 'What situation in your life feels urgent enough that you can only cry "Make haste, O God"? What does it mean to trust that God will answer quickly?',
        },
      ],
    },

    {
      ref: 'Psalm 70:4–5',
      title: 'Joy in Salvation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 70,
          lines: [
            plain(4, 'Let all those that seek thee rejoice and be glad in thee: and let such as love thy salvation say continually, Let God be magnified.'),
            plain(5, 'But I am poor and needy: make haste unto me, O God: thou art my help and my deliverer; O Lord, make no tarrying.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms70-rejoice',
          html: 'The psalm moves from the plea to the vision of its answer. Those who seek God will rejoice. Those who love God&apos;s salvation will magnify God&apos;s name. This is not a future speculation. It is the certainty that God&apos;s salvation brings joy.',
        },
        {
          kind: 'commentary',
          id: 'psalms70-poor',
          html: 'Yet the psalmist returns to his own condition: "I am poor and needy." He does not position himself above his circumstances. He names them. And then he repeats the urgent prayer: "Make haste unto me, O God."',
        },
        {
          kind: 'commentary',
          id: 'psalms70-tarrying',
          html: 'The final word: "Make no tarrying." Do not delay. Come now. This is faith—not confidence that good will eventually come, but the conviction that it is coming now, that God is already in motion to save.',
        },
        {
          kind: 'christ',
          id: 'psalms70-christ-magnified',
          title: 'Christ Connection — God Magnified',
          html: 'When God acts to save through Christ, His name is magnified. Those who seek Him rejoice. They see what God is truly like—merciful, powerful, devoted to the salvation of His people. Christ is the magnification of God&apos;s character.',
        },
        {
          kind: 'carry',
          html: 'Whether your need is acute and demands urgent prayer, or whether you are one of those who loves God&apos;s salvation and can rejoice, remember this psalm&apos;s central truth: God comes. He does not tarry. He is your help and your deliverer. The prayer of the desperate and the song of the redeemed both testify to the same God—the one who makes haste to save.',
        },
        {
          kind: 'reflection',
          id: 'psalms70-magnified',
          prompt: 'How does God&apos;s salvation magnify His name in your life? What would it mean to continually say, "Let God be magnified"?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Make haste, O God, to deliver me...Let all those that seek thee rejoice and be glad in thee...thou art my help and my deliverer.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 70 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-70',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 70 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.70',
      description: 'Short urgent prayer (variant of 40), Jewish commentary.',
    },
    {
      id: 'bible-odyssey-urgent-prayer',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Urgent & Hasty Prayer',
      url: 'https://www.bibleodyssey.org/dictionary/psalms/',
      description: 'Short psalms of urgent petition in crisis.',
    },
  ],

  hasHebrew: true,
};
