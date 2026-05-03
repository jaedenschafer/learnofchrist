import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 4 — The Path of the Just is Light
 *
 * "Get wisdom, get understanding: forget it not." Here is an imperative that
 * echoes through the ages. Wisdom is not a luxury but an urgent necessity. The
 * chapter calls for complete devotion to the pursuit of understanding, promising
 * that the path of the just shines brighter and brighter, like the light
 * approaching high noon. Above all, "Keep thy heart with all diligence; for out
 * of it are the issues of life." The heart is the wellspring of all that matters.
 */
export const PROVERBS_4: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 4,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'The fourth chapter of Proverbs takes the form of a father passing his wisdom to his son—not information about external rules, but living insight drawn from experience. "Hear, O my sons, the instruction of a father." This is the voice of one who has lived, who has seen the consequences of both wisdom and folly, and who speaks from a place of deep care. The father does not command obedience to arbitrary rules, but invites his sons to the way that leads to life.',
    'The centerpiece of the chapter is a vision of two paths: the path of the righteous, which grows ever brighter, and the way of the wicked, which leads into darkness. The choice between them is absolute. And at the heart of all is the keeping of the heart itself, the guarding of the inner life from which all choices flow.',
  ],

  sections: [
    {
      ref: 'Proverbs 4:1–13',
      title: 'The Exaltation of Wisdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'Hear, O my sons, the instruction of a father; and attend to know understanding.'),
            plain(2, 'For I give you good doctrine, forsake ye not my law.'),
            plain(3, 'For I was my father&apos;s son, tender and only beloved in the sight of my mother.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov4-mid-excel-wisdom',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.[res:british-museum-amenemope]',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(4, 'He taught me also, and said unto me, Let thine heart retain my words: keep my commandments, and live.'),
            plain(5, 'Get wisdom, get understanding: forget it not; neither decline from the words of my mouth.'),
            plain(6, 'Forsake her not, and she shall preserve thee: love her, and she shall keep thee.'),
            plain(7, 'Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov4-principal-wisdom',
          html:
            'The heart of this passage is the bold declaration: "Wisdom is the principal thing." Not merely important or valuable—principal. Everything else comes second to the pursuit of understanding. The father speaks not as a theorist, but as one who has lived, who knows the consequences of wise and foolish choices.[res:sefaria-proverbs-4]',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(8, 'Exalt her, and she shall promote thee: she shall bring thee to honour, when thou dost embrace her.'),
            plain(9, 'She shall give to thine head an ornament of grace: a crown of glory shall she deliver to thee.'),
            plain(10, 'Hear, O my son, and receive my sayings; and the length of thy days shall be multiplied.'),
            plain(11, 'I have taught thee in the way of wisdom; I have led thee in right paths.'),
            plain(12, 'When thou goest, thy steps shall not be straitened; and when thou runnest, thou shalt not stumble.'),
            plain(13, 'Take fast hold of instruction; let her not go: keep her; for she is thy life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov4-get-wisdom',
          html: 'The father makes an extraordinary claim: "Wisdom is the principal thing." Not money, not health, not status, but wisdom. And the call is urgent: "get wisdom...forget it not." This is the kind of language we use for things that are non-negotiable, essential. The father is saying: Make wisdom your first priority. Before everything else, seek understanding. Nothing else will matter if you miss this.[res:cambridge-up-proverbs-wisdom]',
        },
        {
          kind: 'hebrew',
          id: 'prov4-qinah',
          title: 'Qinah — "Get" (Acquire)',
          script: 'קְנֵה',
          translit: '<strong>Qinah</strong> · to get; to acquire; to purchase; to possess',
          description: 'The word suggests an active acquisition, something you go out and obtain. You do not inherit wisdom passively. You do not stumble upon it. You pursue it, you purchase it at the cost of your own time and focus and energy.',
        },
        {
          kind: 'commentary',
          id: 'prov4-exalt-promote',
          html: 'The reward for this relentless pursuit is striking. Wisdom will exalt you. She will promote you. She will bring you honor and adornment—not the hollow glory that the world gives, but something deeper: genuine respect, the kind that comes from being truly wise. The crown of glory she delivers is not a crown given by humans, but the recognition of your own growth into wisdom.',
        },
        {
          kind: 'christ',
          id: 'prov4-christ-way',
          title: 'Christ Connection — Christ the Way',
          html: 'In John 14:6, Jesus declares, "I am the way, the truth, and the life." The way of wisdom that Proverbs calls us to seek is ultimately the way of Christ. He is the one in whom all wisdom is found, and He is the path itself—the way that leads to life.',
        },
        {
          kind: 'carry',
          html: 'What is the principal thing you are pursuing? What consumes your time and focus and energy? The father of Proverbs makes a startling claim: everything else depends on getting wisdom. Not because wisdom will automatically make you rich or famous, but because without it, nothing else that you gain will satisfy or endure.',
        },
        {
          kind: 'reflection',
          id: 'prov4-principal-thing',
          prompt: 'If wisdom is the principal thing, what would have to change in your life for that to be true in your actual choices? What stands in the way of making that shift?',
        },
      ],
    },

    {
      ref: 'Proverbs 4:14–27',
      title: 'Two Paths, One Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(14, 'Enter not into the path of the wicked, and go not in the way of evil men.'),
            plain(15, 'Avoid it, pass not by it: turn from it, and pass away.'),
            plain(16, 'For they sleep not, except they have done mischief; and their sleep is taken away, unless they cause some to fall.'),
            plain(17, 'For they eat the bread of wickedness, and drink the wine of violence.'),
            plain(18, 'But the path of the just is as the shining light, that shineth more and more unto the perfect day.'),
            plain(19, 'The way of the wicked is as darkness: they know not at what they stumble.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov4-two-paths-contrast',
          html: 'The contrast between the two paths is absolute. The wicked labor at evil, finding no rest, unable to sleep except after causing harm. They consume "bread of wickedness" and "wine of violence"—their very sustenance is evil. By contrast, the path of the just "shineth more and more unto the perfect day"—an image of progressive illumination, of growing clarity, of increasing brightness. The just live toward the light. The wicked stumble in darkness. The choice defines the destiny.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(20, 'My son, attend to my words; incline thine ear unto my sayings.'),
            plain(21, 'Let them not depart from thine eyes; keep them in the midst of thine heart.'),
            plain(22, 'For they are life unto those that find them, and health to all their flesh.'),
            plain(23, 'Keep thy heart with all diligence; for out of it are the issues of life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov4b-mid-heart-life',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(24, 'Put away from thee a froward mouth, and perverse lips put far from thee.'),
            plain(25, 'Let thine eyes look right on, and let thine eyelids look straight before thee.'),
            plain(26, 'Ponder the path of thy feet, and let all thy ways be established.'),
            plain(27, 'Turn not to the right hand nor to the left: remove thy foot from evil.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov4-two-paths',
          html: 'The contrast between the two paths is absolute. The wicked labor at evil, finding no rest, unable to sleep except after causing harm. They consume "bread of wickedness" and "wine of violence"—their very sustenance is evil. By contrast, the path of the just "shineth more and more unto the perfect day"—an image of progressive illumination, of growing clarity, of increasing brightness. The just live toward the light.',
        },
        {
          kind: 'commentary',
          id: 'prov4-darkness-stumble',
          html: 'The wicked walk in darkness, not knowing what they stumble over. This captures something true to experience: those who have abandoned the light progressively lose the ability to see. Their blindness is not merely physical but spiritual. They cannot discern good from evil because they have turned away from the source of light.',
        },
        {
          kind: 'hebrew',
          id: 'prov4-natsar',
          title: 'Natsar — "Keep" (Guard)',
          script: 'נָצַר',
          translit: '<strong>Natsar</strong> · to keep; to guard; to watch over; to preserve',
          description: 'The same word used for guarding a gate or a treasure. Your heart is not something to be left carelessly. It must be guarded, watched over, protected with vigilance. What you allow into your heart, what you meditate on, what you give your attention to—all of this shapes who you are.',
        },
        {
          kind: 'commentary',
          id: 'prov4-heart-issues',
          html: 'Perhaps the most famous verse: "Keep thy heart with all diligence; for out of it are the issues of life." Everything that matters—your choices, your character, your destiny—flows from the heart. A guarded heart is not a closed or fearful heart. It is a heart that knows what it loves, what it trusts, what it welcomes. It is a heart that actively turns away from what corrupts and turns toward what sanctifies.',
        },
        {
          kind: 'carry',
          html: 'The path of wisdom is not a wandering path. It is a path that goes straight, with eyes fixed ahead, not looking to the right or left. It is a path walked with full awareness of where the foot is being placed. This requires vigilance, requires constant choice, requires that you keep your heart with all diligence. But the promise is that this path grows ever brighter.',
        },
        {
          kind: 'reflection',
          id: 'prov4-which-path',
          prompt: 'In what areas of your life are you walking in growing light, and in what areas are you stumbling in darkness? What would it mean to guard your heart with all diligence in those areas?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Get wisdom, get understanding: forget it not...Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 4 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-proverbs-4',
      kind: 'study',
      source: 'Sefaria',
      label: 'Proverbs 4',
      url: 'https://www.sefaria.org/Proverbs.4',
      description: 'Sefaria open-access source text and translations for Proverbs 4.',
    },
    {
      id: 'british-museum-amenemope',
      kind: 'museum',
      source: 'British Museum',
      label: 'Egyptian Instruction of Amenemope',
      url: 'https://www.britishmuseum.org/',
      description: 'ANE parallel to Proverbs 22:17–23:11 — Egypt&apos;s wisdom literature parallel to biblical instruction.',
    },
    {
      id: 'cambridge-up-proverbs-wisdom',
      kind: 'study',
      source: 'Cambridge UP',
      label: 'Proverbs and Ancient Near Eastern Wisdom',
      url: 'https://www.cambridge.org/',
      description: 'Scholarly analysis of Proverbs within ANE wisdom tradition.',
    },
  ],

  hasHebrew: true,
};
