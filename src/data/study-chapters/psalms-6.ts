import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 6 — Deliver Me from My Anguish
 *
 * David cries out from deep distress: "O Lord[res:bible-odyssey-illness-psalms], rebuke me not in thine anger."
 * His body is tormented, his soul is vexed. "I am weary with my groaning; all
 * the night make I my bed to swim; I water my couch with my tears." Yet in
 * the midst of this darkness, faith rises. "The Lord hath heard my supplication;
 * the Lord will receive my prayer." From agony to assurance in a single psalm,
 * from the deepest valley to the firm ground of trust.
 */
export const PSALMS_6: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 6,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 6 },
  intros: [
    'Psalm 6 opens in a place of profound suffering. David does not simply state his pain. He performs it. "O Lord, rebuke me not in thine anger, neither chasten me in thy hot displeasure." The repetition of "rebuke" and "chasten" suggests an intensity of feeling—David fears that God has turned against him, that his suffering is divine punishment. His body is breaking down. His bones are troubled. His soul is "very much vexed." Sleep brings no relief. Night becomes a mirror of his inner torment.',
    'But then—a turn. "Depart from me, all ye workers of iniquity." Where anger and anguish fill the first half of the psalm, clarity and faith fill the second. David addresses his enemies not with the rage of a man who thinks he is alone, but with the calm of a man who knows God hears. "The Lord hath heard my supplication; the Lord will receive my prayer." The shift is startling. Not because the pain has vanished, but because David has placed his suffering into the hands of the one he trusts above all.',
  ],

  sections: [
    {
      ref: 'Psalm 6:1–3',
      title: 'Crying Out in Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'O Lord, rebuke me not in thine anger, neither chasten me in thy hot displeasure.'),
            plain(2, 'Have mercy upon me, O Lord; for I am weak: O Lord, heal me; for my bones are vexed.'),
            plain(3, 'My soul is also sore vexed: but thou, O Lord, how long?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps6-rebuke',
          html:
            'David does not begin by describing his enemies or his external troubles. He begins by pleading with God not to rebuke him in anger. He fears not his suffering itself, but the silence of God behind it—the sense that God has turned away, that this pain is punishment. The doubled language—"rebuke...chasten"—shows a man who is not merely in trouble, but in a crisis of faith. He needs mercy, not judgment.',
        },
        {
          kind: 'commentary',
          id: 'ps6-weak',
          html:
            'David names his condition plainly: "I am weak." Not strong. Not valiant. Weak. And he calls for healing in a body-centered way: "my bones are vexed." Not merely his circumstances, but his physical frame is being shaken. This is the language of someone whose suffering has soaked into the marrow of who he is. Yet in the same breath he cries for healing, he cries "but thou, O Lord"—insisting on God&apos;s presence even in the moment of accusing His absence.',
        },
        {
          kind: 'hebrew',
          id: 'ps6-hagigah',
          title: 'Hagigah — "Meditation" / Groaning',
          script: 'הְגִיגַת',
          translit: '<strong>Hagigah</strong> · groaning; meditation; murmuring',
          description:
            'The Hebrew word here is close to the word for meditation (hagah), suggesting that David&apos;s groaning is almost a constant inner murmuring. He grooms all night long—not isolated cries but a worn, habitual outpouring. This is what exhaustion sounds like.',
        },
        {
          kind: 'carry',
          html:
            'There are times when faith does not feel like faith. When the weight of suffering makes every breath feel like a burden, and darkness settles so thickly that you cannot see any edge to it. In these moments, raw honesty before God is not weakness. It is the beginning of trust. To say, "I am broken" and in the same breath to address God—to insist on His presence even while you feel His distance—is to hold onto the truth that even in darkness, He is there.',
        },
        {
          kind: 'reflection',
          id: 'ps6-how-long',
          prompt: 'When have you felt God&apos;s distance most acutely? What would it take for you to cry out honestly to Him rather than pretending to feel what you don&apos;t?',
        },
      ],
    },

    {
      ref: 'Psalm 6:4–10',
      title: 'From Groaning to Confidence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(4, 'Return, O Lord, deliver my soul: oh save me for thy mercies&apos; sake.'),
            plain(5, 'For in death there is no remembrance of thee: in the grave who shall give thee thanks?'),
            plain(6, 'I am weary with my groaning; all the night make I my bed to swim; I water my couch with my tears.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-6-78mid-1',
          html:
            'The plea for God&apos;s return and rescue gives way to confidence that He has heard. Despair becomes declaration.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(7, 'Mine eye is consumed with grief; it waxeth old because of all mine enemies.'),
            plain(8, 'Depart from me, all ye workers of iniquity; for the Lord hath heard the voice of my weeping.'),
            plain(9, 'The Lord hath heard my supplication; the Lord will receive my prayer.'),
            plain(10, 'Let all mine enemies be ashamed and sore vexed: let them return and be ashamed suddenly.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps6-return',
          html:
            'David pleads: "Return, O Lord." He speaks as though God has departed, has turned away from him. This is not literal theology—David knows God is omnipresent. It is the language of abandonment, of a soul that cannot feel God&apos;s presence. He asks God to come back, to deliver him, to save him "for thy mercies&apos; sake"—not because David has earned it, but because mercy is God&apos;s nature.',
        },
        {
          kind: 'commentary',
          id: 'ps6-death',
          html:
            'David gives a reason for his urgent plea: "In death there is no remembrance of thee." He is not afraid of death for its own sake. He is afraid of ceasing to praise God. In the grave, he says, "who shall give thee thanks?" This is not a promise of an afterlife of worship. It is a statement about the finitude of human existence—the living praise; the dead do not. So David&apos;s urgency is not for his own sake but for God&apos;s: Who will glorify You if I die?',
        },
        {
          kind: 'commentary',
          id: 'ps6-weary',
          html:
            'Then comes the image of a man exhausted by his own grief. He has groaned all night. His bed swims with tears. His eye is consumed—worn away—by grief. The repetition and escalation show a man at the end of his strength. Yet he does not stop praying. His exhaustion itself becomes prayer.',
        },
        {
          kind: 'christ',
          id: 'ps6-christ-gethsemane',
          title: 'Christ Connection — Gethsemane Agony',
          html:
            'In Gethsemane, the night before His crucifixion, Jesus prayed with "strong crying and tears" (Hebrews 5:7). Like David, He faced a cup of suffering that shook Him to His core. Like David, He prayed with such intensity that He sweat as it were great drops of blood. And like David, in prayer He found the strength to surrender, to say, "Not my will, but thine, be done." Christ in Gethsemane knows what it is to weep before God—and to be heard.',
        },
        {
          kind: 'commentary',
          id: 'ps6-depart',
          html:
            'With no explanation, the psalm shifts. David, who moments ago seemed on the brink of despair, now speaks with authority: "Depart from me, all ye workers of iniquity." This is not a new strength in David. It is a new clarity that comes from prayer itself. He has cried out. He has been heard. And from that assurance flows the confidence to turn away from those who would draw him toward evil.',
        },
        {
          kind: 'commentary',
          id: 'ps6-heard',
          html:
            'David states the fact three times in three verses: The Lord has heard the voice of his weeping. The Lord has heard his supplication. The Lord will receive his prayer. There is no ambiguity here. The prayer itself—the act of pouring out his soul before God—has become the answer. Not because his circumstances have changed, but because he has changed. He has moved from a place where he feared God&apos;s anger to a place where he rests in God&apos;s grace.',
        },
        {
          kind: 'reflection',
          id: 'ps6-turned',
          prompt: 'What shifts in you when you truly pour out your suffering to God rather than holding it back? How have you seen prayer transform your perspective when circumstances haven&apos;t changed?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The Lord hath heard my supplication; the Lord will receive my prayer. Let all mine enemies be ashamed and sore vexed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 6 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-6',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 6 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.6',
      description: 'Lament in illness[res:sefaria-psalms-6] with Jewish medieval commentaries.',
    },
    {
      id: 'bible-odyssey-illness-psalms',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalms of Sickness & Healing',
      url: 'https://www.bibleodyssey.org/dictionary/psalms/',
      description: 'Prayers from beds of illness and times of bodily weakness.',
    },
  ],

  hasHebrew: true,
};
