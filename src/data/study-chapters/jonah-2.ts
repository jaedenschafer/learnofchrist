import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jonah 2 — Prayer from the Depths
 *
 * From inside the great fish, Jonah cries out to the Lord in prayer. He
 * acknowledges his distress and his deliverance from death. He proclaims
 * "Salvation is of the Lord." The fish vomits Jonah onto dry land.
 */
export const JONAH_2: RichChapterContent = {
  bookSlug: 'jonah',
  bookName: 'Jonah',
  chapter: 2,

  intros: [
    'In the darkness of the fish&apos;s belly, Jonah prays. Not a prayer of complaint or despair, but a prayer of thanksgiving and recognition. He has been cast down into the depths, and there, surrounded by death, he finds himself turned back toward God. The prayer itself is the turning point. Jonah has ceased running. He has begun to understand.',
    'What emerges from this prayer is not a defeated prophet but one who has glimpsed a truth: that deliverance comes not from human strength or cleverness, but from God alone. "Salvation is of the Lord" becomes the confession of a man who has lost everything else and found that it is enough.',
  ],

  sections: [
    {
      ref: 'Jonah 2:1–6',
      title: 'Prayer in the Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Then Jonah prayed unto the Lord his God out of the fish&apos;s belly,'),
            plain(2, 'And said, I cried by reason of mine affliction unto the Lord, and he heard me; out of the belly of hell cried I, and thou heardest my voice.'),
            plain(3, 'For thou hadst cast me into the deep, in the midst of the seas; and the floods compassed me about: all thy billows and thy waves passed over me.'),
            plain(4, 'Then I said, I am cast out of thy sight; yet I will look again toward thy holy temple.'),
            plain(5, 'The waters compassed me about, even to the soul: the depth closed me round about, the weeds were wrapped about my head.'),
            plain(6, 'I went down to the bottoms of the mountains; the earth with her bars was about me for ever: yet hast thou brought up my life from corruption, O Lord my God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jonah2-prayer',
          html:
            'Jonah&apos;s prayer is remarkable for what it contains and what it does not. He does not cry out "Why?" He does not accuse God of cruelty. Instead, he acknowledges the reality: "Thou hadst cast me into the deep." God did this. God allowed it. And God heard. In the belly of the fish, in the midst of waters, Jonah has discovered that God&apos;s ear is closer in affliction than in comfort.',
        },
        {
          kind: 'hebrew',
          id: 'jonah2-sheol',
          title: 'Sheol — The Place of Death',
          script: 'שְׁאוֹל',
          translit: '<strong>Sheol</strong> · the grave; the place of the dead; the depths',
          description:
            'Jonah cries from "the belly of Sheol"—from a place that is a shadow of death itself. Yet even from there, his cry reaches God. In the deepest darkness, where all human aid ends, God&apos;s ear is still open.',
        },
        {
          kind: 'christ',
          id: 'jonah2-christ-resurrection',
          title: 'Christ Connection — Three Days and Rising',
          html:
            'Matthew 12:40 makes the connection explicit: "As Jonas was three days and three nights in the whale&apos;s belly; so shall the Son of man be three days and three nights in the heart of the earth." The pattern is resurrection. Jonah emerges from the fish alive. Christ emerges from death alive. Both declare that God&apos;s power extends even into the grave.',
        },
        {
          kind: 'carry',
          html:
            'When we find ourselves in circumstances we brought upon ourselves through disobedience, the turn toward prayer is the turn toward life. Jonah could have remained silent in the fish&apos;s belly, accepting death as his due. Instead, he prayed. The prayer itself is the first moment of transformation.',
        },
        {
          kind: 'reflection',
          id: 'jonah2-deep-cry',
          prompt:
            'Have you ever cried out to God from a place of your own making—a consequence of your own disobedience? What happened when you did?',
        },
      ],
    },

    {
      ref: 'Jonah 2:7–10',
      title: 'Salvation Belongs to the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(7, 'When my soul fainted within me I remembered the Lord: and my prayer came in unto thee, into thine holy temple.'),
            plain(8, 'They that observe lying vanities forsake their own mercy.'),
            plain(9, 'But I will sacrifice unto thee with the voice of thanksgiving; and that that I have vowed I will pay. Salvation is of the Lord.'),
            plain(10, 'And the Lord spake unto the fish; and it vomited out Jonah upon the dry land.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jonah2-remember',
          html:
            'In the moment when Jonah&apos;s soul faints—when all strength fails—he remembers the Lord. This is not memory as mere recollection. This is memory as a return to truth. When everything else falls away, God remains. When all human aid ceases, His mercy continues. Jonah&apos;s prayer rises like incense to the holy temple, and the God he called to answers.',
        },
        {
          kind: 'commentary',
          id: 'jonah2-lying-vanities',
          html:
            '"They that observe lying vanities forsake their own mercy." Jonah speaks of those who trust in idols, in false gods, in all the things that cannot save. In running to Tarshish, Jonah had nearly become such a one. He had nearly forsaken the mercy of the true God by clinging to his own will. The revelation is simple: salvation comes not from us, but from God. Not from our schemes or our strength, but from His grace.',
        },
        {
          kind: 'christ',
          id: 'jonah2-christ-thanksgiving',
          title: 'Christ Connection — Sacrifice and Gratitude',
          html:
            'Jonah vows to bring sacrifice and thanksgiving. Christ is the Lamb of God, the final sacrifice, offered for the sins of the world. His sacrifice is the completion of every vow, the fulfillment of every thanksgiving. Through His death and resurrection, He makes our gratitude possible—not because we are saved from circumstance, but because we are saved from death itself.',
        },
        {
          kind: 'carry',
          html:
            'The lesson of Jonah in the fish is this: God will go to extraordinary lengths to bring His purpose to pass and His children back to Him. The fish is not punishment; it is mercy. It is the means by which a runaway prophet is kept alive and brought back to shore.',
        },
        {
          kind: 'reflection',
          id: 'jonah2-salvation',
          prompt:
            'What does it mean to you that "Salvation is of the Lord"? What are you tempted to trust in instead—your own cleverness, your own strength, your own plans?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'When my soul fainted within me I remembered the Lord...Salvation is of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jonah 2 · Study Guide',
  },

  hasHebrew: true,
};
