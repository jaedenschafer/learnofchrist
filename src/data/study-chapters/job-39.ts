import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 39 — The Beauty of the Wild
 *
 * God continues His speech, now focusing on wild animals: the goats giving birth, the donkey,
 * the war horse with his strength and courage, the hawk, the eagle. Each creature is perfect
 * in its own way, beautiful in its wildness. God finds delight in what cannot be tamed or
 * controlled. This speaks to a God whose purposes extend far beyond human utility.
 */
export const JOB_39: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 39,

  estimatedMinutes: { 5: 2, 10: 4, 15: 7 },
  intros: [
    'God expands His vision of creation, inviting Job to consider the wild creatures. The doe giving birth. The wild donkey. The war horse with his terrible might. The hawk soaring with perfect instinct. The eagle nesting in the cliffs. These creatures are not made for human service or understanding. They are made according to their own nature, for their own kind. God delights in this wildness. It reveals a Creator whose purposes are far grander than human concerns.',
  ],

  bottomShare: {
    quote:
      '"Knowest thou the time when the wild goats of the rock bring forth?" Job is confronted with the beauty of creation apart from human control.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 39 · Study Guide',
  },

  sections: [
    /* ─── Job 39:1–12 — The Wild Birth and Freedom ─────────────────── */
    {
      ref: 'Job 39:1–12',
      title: 'The Creatures That Cannot Be Tamed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            plain(1, 'Knowest thou the time when the wild goats of the rock bring forth? or canst thou mark when the hinds do calve?'),
            plain(2, 'Canst thou number the months that they fulfil? or knowest thou the time when they bring forth?'),
            plain(3, 'They bow themselves, they bring forth their young ones, they cast out their sorrows.'),
            plain(4, 'Their young ones are in good liking, they grow up with corn; they go forth, and return not unto them.'),
            plain(5, 'Who hath sent out the wild ass free? or who hath loosed the bands of the wild ass?'),
            plain(6, 'Whose house I have made the wilderness, and the barren land his dwellings.'),
            plain(7, 'He scorneth the multitude of the city, neither regardeth he the crying of the driver.'),
            plain(8, 'The range of the mountains is his pasture, and he searcheth after every green thing.'),
            plain(9, 'Will the unicorn be willing to serve thee, or abide by thy crib?'),
            plain(10, 'Canst thou bind the unicorn with his band in the furrow? or will he harrow the valleys after thee?'),
            plain(11, 'Wilt thou trust him, because his strength is great? or wilt thou leave thy labour to him?'),
            plain(12, 'Wilt thou believe him, that he will bring home thy seed, and gather it into thy barn?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job39-wild-goats',
          html:
            'God asks about the wild goats giving birth in the rocks. This is knowledge Job does not have. He does not know when they are born, how long the pregnancy lasts, what pain they endure. Yet God knows all these hidden things. The creatures of the wilderness are fully known to God, fully cared for by God, even though they are beyond human knowledge or control.',
        },
        {
          kind: 'commentary',
          id: 'job39-wild-ass',
          html:
            '"Who hath sent out the wild ass free? or who hath loosed the bands of the wild ass?" The wild ass scorns the city. He does not respond to the driver&apos;s whip. He cannot be domesticated. God has made him this way—free, wild, unable to be controlled by human will. And God finds this good.',
        },
        {
          kind: 'hebrew',
          id: 'job39-pere',
          title: 'Pere — Wild Ass',
          script: 'פֶּרֶה',
          translit: '<strong>Pere</strong> · wild ass; the untamed donkey',
          description:
            'The pere represents wildness, freedom, the refusal to be domesticated. God celebrates this. God has made creatures that will not serve humanity, that will not be tamed. This speaks to a Creator whose purposes are not exclusively human-centered. Not everything exists to serve us.',
        },
        {
          kind: 'carry',
          html:
            'Job has assumed that creation exists primarily for human benefit and understanding. But God shows him creatures whose entire existence is independent of human utility. The wild doe gives birth in the rocks, her birth and motherhood known only to God. The wild ass runs free, scorning human attempts to control it. Creation is far richer and stranger than human purposes.',
        },
        {
          kind: 'reflection',
          id: 'job39-wildness',
          prompt:
            'What do you find beautiful in nature that you cannot control or fully understand? How does that beauty challenge your need for order and utility?',
        },
      ],
    },

    /* ─── Job 39:13–25 — The War Horse and the Eagle ─────────────────── */
    {
      ref: 'Job 39:13–25',
      title: 'The Strength and Glory of Creatures',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            plain(13, 'Gavest thou the goodly wings unto the peacocks? or wings and feathers unto the ostrich?'),
            plain(14, 'Which leaveth her eggs in the earth, and warmeth them in dust,'),
            plain(15, 'And forgetteth that the foot may crush them, or that the wild beast may break them.'),
            plain(16, 'She is hardened against her young ones, as though they were not hers: her labour is in vain without fear;'),
            plain(17, 'Because God hath deprived her of wisdom, and hath not imparted to her understanding.'),
            plain(18, 'What time she lifteth up herself on high, she scorneth the horse and his rider.'),
            plain(19, 'Hast thou given the horse strength? hast thou clothed his neck with thunder?'),
            plain(20, 'Canst thou make him afraid as a grasshopper? the glory of his nostrils is terrible.'),
            plain(21, 'He paweth in the valley, and rejoiceth in his strength: he goeth on to meet the armed men.'),
            plain(22, 'He mocketh at fear, and is not affrighted; neither turneth he back from the sword.'),
            plain(23, 'The quiver rattleth against him, the glittering spear and the shield.'),
            plain(24, 'He swalloweth the ground with fierceness and rage: neither believeth he that it is the sound of the trumpet.'),
            plain(25, 'He saith among the trumpets, Ha, ha; and he smelleth the battle afar off, by the smell of the war captains, and the shouting.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job39-war-horse',
          html:
            'God speaks with evident delight about the war horse. "Hast thou given the horse strength? hast thou clothed his neck with thunder?" The horse is not made to serve human purposes—he revels in his own strength and courage. He laughs at fear. He runs into battle not because he is commanded, but because his nature glorifies in strength and noise. He is terrible and beautiful in his own right.',
        },
        {
          kind: 'commentary',
          id: 'job39-ostrich',
          html:
            'The ostrich is presented differently—a creature whose wings are beautiful but useless for flight, who leaves her eggs in the dust without protection, who lacks understanding. Yet God made her this way too. Not every creature is perfectly designed. Not everything has been optimized. Creation contains imperfection, strangeness, creatures that seem to be made wrong. And yet they are part of God&apos;s creation, part of God&apos;s delight.',
        },
        {
          kind: 'hebrew',
          id: 'job39-oz',
          title: 'Oz — Strength',
          script: 'עוֹז',
          translit: '<strong>Oz</strong> · strength; power; glory',
          description:
            'God speaks of oz with joy. The horse has oz. His strength glorifies in its own expression. This is not strength used for human purpose, but strength celebrated for its own sake. God delights in the powerful creature even when that power cannot be controlled or harnessed for human benefit.',
        },
        {
          kind: 'carry',
          html:
            'Through the war horse, God invites Job to see that power and courage and glory exist apart from utility. The horse does not go to battle because he will be rewarded. He goes because his nature rejoices in strength. God finds this beautiful. This suggests that human suffering, too, may need to be understood apart from utility—not as a means to an end, but as part of a larger creation whose purposes exceed human calculation.',
        },
        {
          kind: 'reflection',
          id: 'job39-courage',
          prompt:
            'What kind of courage or strength do you admire in others that seems almost reckless, that serves no purpose beyond itself? What does that reveal about what humans can become?',
        },
      ],
    },

    /* ─── Job 39:26–30 — The Eagle&apos;s Flight ──────────────────────────── */
    {
      ref: 'Job 39:26–30',
      title: 'By Your Understanding Does the Eagle Soar?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            plain(26, 'Doth the hawk fly by thy wisdom, and stretch her wings toward the south?'),
            plain(27, 'Doth the eagle mount up at thy command, and make her nest on high?'),
            plain(28, 'She dwelleth and abideth on the rock, upon the crag of the rock, and the strong place.'),
            plain(29, 'From thence she seeketh the prey, and her eyes behold afar off.'),
            plain(30, 'Her young ones also suck up blood; and where the slain are, there is she.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job39-eagle-height',
          html:
            'The final image: the eagle. Does she fly by your command? Does she nest where you direct her? No. She dwells on the high rocks, beyond your reach. From there, she watches with eyes that see what you cannot see. She hunts with a predator&apos;s instinct that you do not direct. She is free. She is perfect in her freedom. And God delights in her.',
        },
        {
          kind: 'commentary',
          id: 'job39-far-seeing',
          html:
            '"Her eyes behold afar off"—the eagle&apos;s vision is superior to the human. She sees from heights you cannot reach. She sees at distances you cannot perceive. So also God&apos;s vision exceeds yours. God sees what you cannot see, understands what you cannot understand, perceives purposes that lie beyond your scope.',
        },
        {
          kind: 'hebrew',
          id: 'job39-nesharim',
          title: 'Nesharim — Eagles',
          script: 'נְשָׁרִים',
          translit: '<strong>Nesharim</strong> · eagles; noble birds of prey',
          description:
            'The eagle is often a symbol of God&apos;s protection and care in Scripture (Exodus 19:4). Yet here, God presents the eagle not as a symbol but as a creature—free, wild, perfect in its own nature. The eagle represents the beauty of what exists apart from human utility, what thrives beyond human understanding.',
        },
        {
          kind: 'christ',
          id: 'job39-christ-lord-creation',
          title: 'Christ Connection — Lord Over All Creatures',
          html:
            'Jesus says in Matthew 6:26: "Behold the fowls of the air: for they sow not, neither do they reap, nor gather into barns; yet your heavenly Father feedeth them. Are ye not much better than they?" Christ points to the birds as evidence of God&apos;s care—not because they are useful, but because they matter. God knows them. God feeds them. Yet Christ uses them to comfort his disciples: if God cares for the birds, how much more will God care for you? The wild creatures that exist beyond human control are proof of God&apos;s love and attention. In Christ, this love becomes incarnate—the Creator who knows each bird now becomes human, takes on human vulnerability, teaches us that we are loved not for our usefulness but simply because we are.',
        },
        {
          kind: 'carry',
          html:
            'By the end of Job 39, the cumulative effect is clear: the world is far stranger, far richer, far more beautiful than Job&apos;s suffering-centered vision. God delights in creatures beyond human understanding. God finds joy in wild things that refuse to be tamed or controlled. And if this is true of the natural world, might it not be true of the moral world as well? Might there be purposes in suffering that you cannot see, that lie beyond your comprehension, but that serve a larger beauty?',
        },
        {
          kind: 'reflection',
          id: 'job39-heights',
          prompt:
            'When you consider the vastness of the universe and the countless creatures you will never know, how does it change your sense of what you need to understand about your own suffering?',
        },
      ],
    },
  ],
};
