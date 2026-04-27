import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 7 — Godly Sorrow
 *
 * Paul expresses joy at the Corinthians&apos; repentance. His severe letter caused
 * sorrow, but it was &quot;godly sorrow&quot;—sorrow that leads to repentance and life,
 * not worldly sorrow that leads to death. The Corinthians&apos; response to Paul&apos;s
 * letter shows their genuine faith.
 */
export const SECOND_CORINTHIANS_7: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 7,

  intros: [
    'Paul has spoken of the comfort God gives. Now he describes comfort that comes through repentance. His severe letter caused the Corinthians pain, but the pain produced fruit. They repented. Their sorrow—though painful—was &quot;godly sorrow,&quot; the kind that moves toward God, not away from Him.',
    'This chapter distinguishes two types of sorrow: worldly sorrow, which produces death and despair; and godly sorrow, which produces diligence, eagerness, vindication, and joy. The difference is not the emotion itself, but its object and its fruit.',
  ],

  sections: [
    {
      ref: '2 Corinthians 7:1–13',
      title: 'Godly Sorrow Produces Repentance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(8, 'For though I made you sorry with a letter, I do not repent, though I did repent: for I perceive that the same epistle hath made you sorry, though it were but for a season.'),
            plain(9, 'Now I rejoice, not that ye were made sorry, but that ye sorrowed to repentance: for ye were made sorry after a godly manner, that ye might receive damage by us in nothing.'),
            plain(10, 'For godly sorrow worketh repentance to salvation not to be repented of: but the sorrow of the world worketh death.'),
            plain(11, 'For behold this selfsame thing, that ye sorrowed after a godly sort, what carefulness it wrought in you, yea, what clearing of yourselves, yea, what indignation, yea, what fear, yea, what vehement desire, yea, what zeal, yea, what revenge! In all things ye have approved yourselves to be clear in this matter.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-7-godly-sorrow',
          html:
            'Paul rejoices that the Corinthians &quot;sorrowed to repentance.&quot; The sorrow itself was good because it led them away from sin and toward God. &quot;Godly sorrow worketh repentance to salvation not to be repented of: but the sorrow of the world worketh death.&quot;',
        },
        {
          kind: 'greek',
          id: 'cor2-7-metanoia',
          title: 'Metanoia — Repentance; Change of Mind',
          script: 'μετανοεία',
          translit: '<strong>Metanoia</strong> · repentance; a change of mind; transformation of the will',
          description:
            'Metanoia is not mere sorrow or regret. It is a turning around—a reversal of direction. Godly sorrow produces metanoia; worldly sorrow produces only despair.',
        },
        {
          kind: 'commentary',
          id: 'cor2-7-fruits',
          html:
            'Paul catalogs the fruits of the Corinthians&apos; godly sorrow: carefulness, clearing of themselves, indignation at the sin, fear of God, desire to make things right, zeal. The sorrow bore fruit in action.',
        },
        {
          kind: 'christ',
          id: 'cor2-7-christ-sorrow',
          title: 'Christ Connection — Christ&apos;s Sorrow for Our Sin',
          html:
            'Christ experienced the ultimate godly sorrow—grief at sin and its cost. His sorrow led to sacrifice. He gave His life so that our sorrow might lead to repentance, not death.',
        },
        {
          kind: 'carry',
          html:
            'When you encounter your own sin, how do you respond? Is it worldly sorrow—shame, despair, self-condemnation? Or is it godly sorrow—grief that turns you toward God, that issues in repentance and renewal? The difference determines the outcome.',
        },
        {
          kind: 'reflection',
          id: 'cor2-7-sorrow-repent',
          prompt: 'When have you experienced godly sorrow? How did it lead you to repentance? What is the difference between that and worldly sorrow?',
        },
      ],
    },

    {
      ref: '2 Corinthians 7:14–16',
      title: 'Confidence Restored',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(14, 'For if I have boasted any thing to him of you, I am not ashamed; but as we spake all things to you in truth, even so our boasting, which I made before Titus, is found a truth.'),
            plain(15, 'And his inward affection is more abundant toward you, whilst he remembereth the obedience of you all, how with fear and trembling ye received him.'),
            plain(16, 'I rejoice therefore that I have confidence in you in all things.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-7-boasting',
          html:
            'Paul had boasted to Titus about the Corinthians. His boasting was confirmed. The Corinthians received Titus &quot;with fear and trembling,&quot; showing their genuine concern for the matter. Their repentance is authentic.',
        },
        {
          kind: 'greek',
          id: 'cor2-7-parresia',
          title: 'Parresia — Confidence; Boldness; Openness',
          script: 'παρρησία',
          translit: '<strong>Parresia</strong> · confidence; boldness; freedom of speech; openness',
          description:
            'Paul has parresia—confidence—in the Corinthians. This is not arrogance. It is trust that grows from evidence of their faith working through repentance.',
        },
        {
          kind: 'commentary',
          id: 'cor2-7-affection',
          html:
            'Titus&apos;s &quot;inward affection is more abundant toward you.&quot; The Corinthians&apos; repentance has moved him. The church&apos;s response has vindicated Paul&apos;s hopes and Titus&apos;s love.',
        },
        {
          kind: 'christ',
          id: 'cor2-7-christ-restore',
          title: 'Christ Connection — Restoration Through Christ',
          html:
            'The Corinthians have been restored through repentance. This is the power of Christ at work—to break the power of sin and restore the sinner to fellowship.',
        },
        {
          kind: 'carry',
          html:
            'If you have repented and turned from sin, know that you are restored. Others may have doubted you, but your genuine repentance vindicates you. Trust that your change is real and that it will be recognized.',
        },
        {
          kind: 'reflection',
          id: 'cor2-7-confidence',
          prompt: 'What would it take for you to have &quot;confidence in all things&quot; in your relationships? How does genuine repentance build trust?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For godly sorrow worketh repentance to salvation not to be repented of: but the sorrow of the world worketh death.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 7 · Study Guide',
  },

  hasHebrew: false,
};
