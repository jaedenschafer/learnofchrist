import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 5 — The Way of Covenant Faithfulness
 *
 * Here begins a sustained warning against the "strange woman" and the way of
 * unfaithfulness. "Drink waters out of thine own cistern." The image is of
 * covenant faithfulness—you are called to find satisfaction and joy within
 * your covenant bonds, not to search for it elsewhere. The chapter speaks not
 * of prohibition but of belonging, of the sweetness of faithful love, of the
 * tragedy of those who abandon the covenant way.
 */
export const PROVERBS_5: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 5,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'The fifth chapter of Proverbs shifts focus to speak directly about unfaithfulness and covenant breaking. The "strange woman" who is warned against is not merely a figure of sexual temptation, though she may be that. She represents any enticement that calls a person away from the bonds of covenant—away from the place where they have promised to give their wholeness. The chapter does not shame bodies or desire, but rather insists that desire, rightly ordered, belongs within covenant.',
    'What makes the chapter powerful is that it does not speak primarily about consequences or judgment. It speaks about loss. It speaks about the sweetness of what is abandoned when one breaks faith. It speaks about the bitterness that lies at the end of the path of unfaithfulness. The invitation is not fearful but redemptive: return to your own springs, drink from your own cistern, find there the joy you seek.',
  ],

  sections: [
    {
      ref: 'Proverbs 5:1–14',
      title: 'The Warning Against the Strange Woman',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'My son, attend unto my wisdom, and bow thine ear to my understanding:'),
            plain(2, 'That thou mayest regard discretion, and that thy lips may keep knowledge.'),
            plain(3, 'For the lips of a strange woman drop as an honeycomb, and her mouth is smoother than oil:'),
            plain(4, 'But her end is bitter as wormwood, sharp as a twoedged sword.'),
            plain(5, 'Her feet go down to death; her steps take hold on hell.'),
            plain(6, 'Lest thou shouldest ponder the path of life, her ways are moveable, that thou canst not know them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov5-allure-danger',
          html: 'The strange woman is beautiful and terrible at once. Her words taste of honey, her mouth is smooth as oil—she has genuine appeal. But this sweetness masks bitter truth. She leads toward death, toward hell, into ways so unstable you cannot discern where they are going until you are caught. The first half of the warning is about understanding the deception: what looks good is actually dangerous. What attracts is actually destructive.[res:british-museum-amenemope]',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(7, 'Therefore hear me now, my children, and depart not from the words of my mouth.'),
            plain(8, 'Remove thy way far from her, and come not nigh the door of her house:'),
            plain(9, 'Lest thou give thine honour unto others, and thy years unto the cruel:'),
            plain(10, 'Lest strangers be filled with thy wealth; and thy labours be in the house of a stranger;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov5-mid-strength-evil',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.[res:sefaria-proverbs-5]',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(11, 'And thou mourn at the last, when thy flesh and thy body are consumed,'),
            plain(12, 'And say, How have I hated instruction, and my heart despised reproof;'),
            plain(13, 'And have not obeyed the voice of my teachers, nor inclined mine ear to them that instructed me!'),
            plain(14, 'I was almost in all evil in the midst of the congregation and assembly.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov5-smooth-words',
          html: 'The strange woman speaks smoothly. Her words are like honey, her mouth softer than oil. But smoothness is not truth. Sweetness does not equal nourishment. She uses her words not to lead toward life but to draw toward destruction. The contrast is stark: what tastes like honey ends in bitterness, sharp as a two-edged sword. What seems smooth becomes cutting and painful.[res:cambridge-up-proverbs-wisdom]',
        },
        {
          kind: 'commentary',
          id: 'prov5-moveable-ways',
          html: 'Her ways are "moveable"—unstable, shifting, not fixed. You cannot know where they lead because she is constantly shifting, redefining, moving the goal. This is the nature of seduction: it never stays still, never reveals its end until you are caught. By the time you see where you are going, it is too late.',
        },
        {
          kind: 'commentary',
          id: 'prov5-mourn-last',
          html: 'The lament at the end of the section—"How have I hated instruction"—is the voice of someone who has gone far down the path of unfaithfulness and is now seeing clearly for the first time. He sees that he has given his honor to strangers, his years to the cruel, his wealth to those who do not care for him. And he grieves that he did not listen when he could have been saved.',
        },
        {
          kind: 'carry',
          html: 'The chapter does not minimize the appeal of the strange woman. Her words are genuinely smooth, genuinely attractive. But it insists on seeing to the end: What does this path truly lead to? Where do these ways actually go? It calls for preventive wisdom—not waiting until you are ensnared, but choosing to remove yourself, to keep far from the door.',
        },
        {
          kind: 'reflection',
          id: 'prov5-seductions',
          prompt: 'What in your own life plays the role of the "strange woman"—what attracts you with smooth words but leads away from your covenant commitments? What would it take to remove yourself from that path?',
        },
      ],
    },

    {
      ref: 'Proverbs 5:15–23',
      title: 'Drink From Your Own Cistern',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(15, 'Drink waters out of thine own cistern, and running waters out of thine own well.'),
            plain(16, 'Let thy fountains be dispersed abroad, and rivers of waters in the streets.'),
            plain(17, 'Let them be only thine own, and not strangers&apos; with thee.'),
            plain(18, 'Let thy fountain be blessed: and rejoice with the wife of thy youth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov-5-bitter-sweet',
          html:
            'Her lips drip honey. Her mouth is smoother than oil. But her end? Bitter as wormwood. Her feet slip. She does not ponder the path. What tastes sweet masks what destroys. Wisdom discerns the end in the beginning.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(19, 'Let her be as the loving hind and pleasant roe; let her breasts satisfy thee at all times; and be thou ravished always with her love.'),
            plain(20, 'And why wilt thou, my son, be ravished with a strange woman, and embrace the bosom of a stranger?'),
            plain(21, 'For the ways of man are before the eyes of the Lord: and he pondereth all his goings.'),
            plain(22, 'His own iniquities shall take the wicked, and he shall be holden with the cords of his own sin.'),
            plain(23, 'He shall die without instruction; and in the greatness of his folly he shall go astray.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov5-own-cistern',
          html: 'The image of drinking from your own cistern is profound. You have a source. You have a place to belong, a covenant where intimacy and satisfaction are meant to be found. This is not deprivation but fullness. This is not limitation but the proper ordering of desire. The strange woman does not offer something the covenant cannot give. She offers the illusion of something more while actually delivering emptiness.',
        },
        {
          kind: 'hebrew',
          id: 'prov5-shtah',
          title: 'Shtah — "Drink" (Receive Satisfaction)',
          script: 'שָׁתָה',
          translit: '<strong>Shtah</strong> · to drink; to receive; to be satisfied',
          description: 'To drink is not merely to consume but to take in what sustains. The image of drinking from your own cistern suggests finding your deepest satisfaction within your covenant bonds, not outside them.',
        },
        {
          kind: 'commentary',
          id: 'prov5-beloved-wife',
          html: 'The passage celebrates joy in the wife of youth, in covenant love. The language is not cold or dutiful but passionate: "Let her be as the loving hind...let her breasts satisfy thee...be thou ravished always with her love." This is Proverbs insisting that the deepest joy and satisfaction are found not in seduction or transgression but in faithful love. The covenant way is not the boring way. It is the way of genuine passion, rooted in covenant trust.',
        },
        {
          kind: 'christ',
          id: 'prov5-christ-bridegroom',
          title: 'Christ Connection — Christ the Bridegroom',
          html: 'The image of drinking from one&apos;s own cistern, of faithful love between bride and groom, echoes throughout Scripture until it finds its fulfillment in Christ, the Bridegroom who comes for the Church, His Bride. The joy of covenant faithfulness is a foreshadowing of the joy of perfect union with Christ. All lesser loves are meant to prepare us to understand what it means to be beloved and chosen.',
        },
        {
          kind: 'carry',
          html: 'The promise of Proverbs 5 is that genuine satisfaction—not the hollow thrill of transgression but deep, abiding joy—is found in covenant faithfulness. But only if you stop looking elsewhere. Only if you drink from your own cistern. Only if you let yourself be satisfied with what God has given.',
        },
        {
          kind: 'reflection',
          id: 'prov5-satisfaction',
          prompt: 'Where in your own life are you being drawn away from the covenant bonds that are meant to sustain you? What false promise is the "strange woman" making that keeps you from finding satisfaction in your own cistern?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Drink waters out of thine own cistern, and running waters out of thine own well...Rejoice with the wife of thy youth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 5 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-proverbs-5',
      kind: 'study',
      source: 'Sefaria',
      label: 'Proverbs 5',
      url: 'https://www.sefaria.org/Proverbs.5',
      description: 'Sefaria open-access source text and translations for Proverbs 5.',
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
