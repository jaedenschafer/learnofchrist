import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 41 — Leviathan, the Ungovernable
 *
 * God concludes His speech with Leviathan—the most terrible creature. A dragon, a creature
 * of chaos itself. "Who then is able to stand before me?" God asks. If you cannot tame
 * Leviathan, how can you govern yourself? How can you judge God? This creature is beyond
 * human dominion. Yet it exists within God&apos;s creation, under God&apos;s hand.
 */
export const JOB_41: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 41,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'God&apos;s final revelation is of Leviathan—a creature of such terrible power and chaos that it stands as the boundary of human understanding. This is not a creature to be reasoned with, bargained with, or controlled. It breathes fire. It cannot be captured. It is ungovernable. Yet it is part of creation. And if humans cannot govern Leviathan, how can they presume to judge God?',
  ],

  bottomShare: {
    quote:
      '"Who then is able to stand before me?" God asks, having revealed the ungovernable dragon. The answer: only those who bow in awe before the One who rules even Leviathan.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 41 · Study Guide',
  },

  sections: [
    /* ─── Job 41:1–11 — The Creature That Cannot Be Tamed ────────────── */
    {
      ref: 'Job 41:1–11',
      title: 'Can You Draw Out Leviathan?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(1, 'Canst thou draw out leviathan with an hook? or his tongue with a cord which thou lettest down?'),
            plain(2, 'Canst thou put an hook into his nose? or bore his jaw through with a thorn?'),
            plain(3, 'Will he make many supplications unto thee? will he speak soft words unto thee?'),
            plain(4, 'Will he make a covenant with thee? wilt thou take him for a servant for ever?'),
            plain(5, 'Wilt thou play with him as with a bird? or wilt thou bind him for thy maidens?'),
            plain(6, 'Shall the companions make a banquet of him? shall they part him among the merchants?'),
            plain(7, 'Canst thou fill his skin with barbed irons? or his head with fish spears?'),
            plain(8, 'Lay thine hand upon him, remember the battle, do no more.'),
            plain(9, 'Behold, the hope of him is in vain: shall not one be cast down even at the sight of him?'),
            plain(10, 'None is so fierce that dare stir him up: who then is able to stand before me?'),
            plain(11, 'Who hath prevented me, that I should repay him? whatsoever is under the whole heaven is mine.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job41-no-taming',
          html:
            'God poses a series of questions about Leviathan. Can you capture him with a hook? Can you put a ring through his nose? Will he beg for mercy? Will he agree to serve you? Will you be able to use him as a toy? Can you divide his flesh among merchants? The answer to every question is no. Leviathan cannot be captured, cannot be tamed, cannot be made useful. He is beyond human dominion.',
        },
        {
          kind: 'commentary',
          id: 'job41-battle-memory',
          html:
            '"Lay thine hand upon him, remember the battle, do no more." God speaks as if Job might actually attempt to fight Leviathan. But look at one encounter with such a creature, and you will not want to try again. The battle is so terrible that the memory of it will discourage any future attempts. Leviathan represents what cannot be conquered.',
        },
        {
          kind: 'hebrew',
          id: 'job41-livyatan',
          title: 'Livyatan — Leviathan',
          script: 'לִוְיָתָן',
          translit: '<strong>Livyatan</strong> · Leviathan; the twisting one; the dragon of chaos',
          description:
            'Leviathan appears throughout Scripture as a symbol of chaos and power beyond human control. Yet here, Leviathan is presented as part of creation, as something that exists within God&apos;s ordering of the world. Even chaos itself is under God&apos;s dominion, even if it is not under human dominion.',
        },
        {
          kind: 'carry',
          html:
            'Leviathan represents the absolute limit of human power and understanding. Against this creature, you are helpless. You cannot trick it, catch it, tame it, or negotiate with it. It is simply more powerful than you. And if you are helpless before Leviathan, how can you presume to understand God or judge God&apos;s actions? If you cannot govern a creature, how can you govern a cosmos?',
        },
        {
          kind: 'reflection',
          id: 'job41-limit',
          prompt:
            'What represents "Leviathan" in your experience—something so powerful or chaotic that your only option is to step back and accept your limitation?',
        },
      ],
    },

    /* ─── Job 41:12–34 — The Terrible Beauty of Chaos ────────────────── */
    {
      ref: 'Job 41:12–34',
      title: 'The Glory of the Ungovernable',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(12, 'I will not conceal his parts, nor his power, nor his comely proportion.'),
            plain(13, 'Who can discover the face of his garment? or who can come to him with his double bridle?'),
            plain(14, 'Who can open the doors of his face? his teeth are terrible round about.'),
            plain(15, 'His scales are his pride, shut up together as with a close seal.'),
            plain(16, 'One is so near to another, that no air can come between them.'),
            plain(17, 'They are joined one to another, they stick together, that they cannot be sundered.'),
            plain(18, 'By his neesings a light doth shine, and his eyes are like the eyelids of the morning.'),
            plain(19, 'Out of his mouth go burning lamps, and sparks of fire leap out.'),
            plain(20, 'Out of his nostrils goeth smoke, as out of a seething pot or caldron.'),
            plain(21, 'His breath kindleth coals, and a flame goeth out of his mouth.'),
            plain(22, 'In his neck remaineth strength, and sorrow is turned into joy before him.'),
            plain(23, 'The flakes of his flesh are joined together: they are firm in themselves; they cannot be moved.'),
            plain(24, 'His heart is as firm as a stone; yea, as hard as a piece of the nether millstone.'),
            plain(25, 'When he raiseth up himself, the mighty are afraid: by reason of breakings they purify themselves.'),
            plain(26, 'The sword of him that layeth at him cannot hold: the spear, the dart, nor the habergeon.'),
            plain(27, 'He esteemeth iron as straw, and brass as rotten wood.'),
            plain(28, 'The arrow cannot make him flee: slingstones are turned with him into stubble.'),
            plain(29, 'Darts are counted as stubble: he laugheth at the shaking of a spear.'),
            plain(30, 'Sharp stones are under him: he spreadeth sharp pointed things upon the mire.'),
            plain(31, 'He maketh the deep to boil like a pot: he maketh the sea like a pot of ointment.'),
            plain(32, 'He maketh a path to shine after him; one would think the deep to be hoary.'),
            plain(33, 'Upon earth there is not his like, who is made without fear.'),
            plain(34, 'He beholdeth all high things: he is a king over all the children of pride.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job41-terrible-beauty',
          html:
            'God describes Leviathan with what amounts to admiration. His scales are beautiful. His teeth are terrible. He breathes fire. Weapons cannot pierce him. Iron he esteems as straw. He is utterly beyond harm. And he is presented not with horror but with a kind of wonder. God made this creature. God finds him glorious.',
        },
        {
          kind: 'commentary',
          id: 'job41-king-pride',
          html:
            '"He is a king over all the children of pride." Leviathan is the master of all proud things. He is not subject to the pride of humans. He is the embodiment of something that no human pride can govern. To see Leviathan is to understand the limits of human dominion.',
        },
        {
          kind: 'hebrew',
          id: 'job41-gaon',
          title: 'Gaon — Pride or Glory',
          script: 'גָּאוֹן',
          translit: '<strong>Gaon</strong> · pride; glory; exaltation; what stands high and cannot be humbled',
          description:
            'Leviathan rules over the gaon—the proud, the exalted, the high things that refuse to submit. Job has been expressing his own gaon—his pride in his righteousness, his refusal to submit to God&apos;s judgment. Leviathan is the king of this pride. And Job is being asked: can you submit where even Leviathan cannot be tamed?',
        },
        {
          kind: 'carry',
          html:
            'The portrait of Leviathan is almost celebratory. God seems to take joy in describing this terrible creature—its power, its invulnerability, its refusal to be conquered. This suggests that God&apos;s creation includes not only the orderly and beautiful, but also the chaotic and fierce. And God is at peace with this. God does not feel threatened by Leviathan. God made Leviathan. God rules over Leviathan.',
        },
        {
          kind: 'reflection',
          id: 'job41-fierce',
          prompt:
            'What does it mean to trust a God who creates and celebrates the fierce and the ungovernable? What becomes possible when you accept that you cannot control everything?',
        },
      ],
    },

    /* ─── The Final Revelation ────────────────────────────────────────── */
    {
      ref: 'Job 41:33–34',
      title: 'A King Over Pride',
      blocks: [
        {
          kind: 'commentary',
          id: 'job41-final-truth',
          html:
            'God concludes with a revelation about power and dominion. Leviathan is a king—but he is a king over pride, over that which is high and refuses to submit. And who rules Leviathan? God does. So therefore, who rules over all pride, including your own? God does. The message to Job is clear: your pride in your own righteousness, your refusal to submit to God&apos;s judgment—this too is under God&apos;s dominion. You can either submit willingly, or you can be like Leviathan, unconquerable but also ungovernable, fierce but ultimately serving God&apos;s purposes whether you will it or not.',
        },
        {
          kind: 'christ',
          id: 'job41-christ-dragon',
          title: 'Christ Connection — Christ Rules Even the Dragon',
          html:
            'In Revelation 20:2, John writes of the end times: "And he laid hold on the dragon, that old serpent, which is the Devil, and Satan, and bound him a thousand years." Leviathan is associated with Satan, with chaos, with the enemy of God. Yet Christ binds the dragon. Christ rules what cannot be ruled. In Christ&apos;s resurrection and ascension, the power of chaos itself is subdued—not destroyed, but brought under submission to Christ&apos;s reign. This is the ultimate answer to the question "Who then is able to stand before me?" Christ alone is able to stand before God—and to stand in God&apos;s power. Through Christ, we too are invited into that standing, that authority, that kingship over the chaos within us.',
        },
        {
          kind: 'carry',
          html:
            'The revelation of Leviathan is God&apos;s way of showing Job that power itself is under God&apos;s dominion. Chaos is under God&apos;s dominion. What appears to Job as meaningless suffering may actually be part of a cosmic drama in which God is subduing even the forces of chaos itself. Your suffering is not outside this drama. It is part of it.',
        },
        {
          kind: 'reflection',
          id: 'job41-submission',
          prompt:
            'What becomes possible in you when you stop trying to govern the chaos and instead trust the One who governs all things, even chaos itself?',
        },
      ],
    },
  ],
};
