import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Lamentations 3 — Hope in Affliction
 *
 * The pivotal chapter of Lamentations. "I am the man that hath seen affliction."
 * A voice—perhaps the prophet, perhaps the personified city—speaks from the depths
 * of suffering. Yet in verses 21–24, the tone shifts: "Yet this I recall to my mind,
 * therefore have I hope. It is of the Lord's mercies that we are not consumed, because
 * his compassions fail not. They are NEW EVERY MORNING: great is thy faithfulness."
 * From the abyss of despair, hope emerges—not because circumstances change, but because
 * the nature of God's mercy becomes clear.
 */
export const LAMENTATIONS_3: RichChapterContent = {
  bookSlug: 'lamentations',
  bookName: 'Lamentations',
  chapter: 3,

  intros: [
    'Lamentations 3 is the great turning point of the book. It is the longest chapter, employing a triple acrostic structure (three verses for each letter of the Hebrew alphabet). The voice that speaks is singular and personal: "I am the man that hath seen affliction by the rod of his wrath." This is not Jerusalem speaking in the abstract. This is an individual who has experienced the deepest darkness—a man beaten down, imprisoned, deprived of peace, robbed of hope.',
    'The first half of the chapter is a descent into despair. The speaker catalogs his suffering in meticulous detail. He is worn down, he says. He is like a stone thrown into a pit. His cries are unheeded. He is surrounded by darkness. He has forgotten what prosperity is. And then, at the very bottom of the abyss, something shifts. The speaker begins to remember. "Yet this I recall to my mind, therefore have I hope." From the depths, hope emerges—not from a change in circumstances, but from a remembrance of God&apos;s mercies that are "new every morning." This is the heart of faith: in the darkness, to remember that God is faithful.',
  ],

  sections: [
    /* ─── Lamentations 3:1–20 — Affliction Described ──────────────────── */
    {
      ref: 'Lamentations 3:1–20',
      title: 'The Depths of Suffering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'I am the man that hath seen affliction by the rod of his wrath.'),
            plain(2, 'He hath led me, and brought me into darkness, but not into light.'),
            plain(4, 'My flesh and my skin hath he made old; he hath broken my bones.'),
            plain(7, 'He hath hedged me about, that I cannot get out: he hath made my chain heavy.'),
            plain(17, 'And thou hast removed my soul far off from peace: I forgat prosperity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'lam3-man-affliction',
          html:
            'The opening is starkly personal: "I am the man." Not an abstract report of suffering, but the testimony of one who has endured it. He has been struck by the rod of God&apos;s wrath. He is led into darkness, not light. His body is worn and broken. His bones are shattered. The physical dimension of his suffering is emphasized—he is not merely sad or discouraged, he is bodily broken.',
        },
        {
          kind: 'commentary',
          id: 'lam3-hedged',
          html:
            'God has hedged him about. The image is of a prison, a wall, an enclosure from which there is no escape. His chain is heavy. He is imprisoned not only in place but in his own inability to escape. This is the experience of total bondage. There is no way out.',
        },
        {
          kind: 'commentary',
          id: 'lam3-peace-far',
          html:
            'Most devastatingly: "thou hast removed my soul far off from peace." Peace is not merely absent; it is removed. It is distant. The speaker has forgotten what prosperity and peace feel like. All memory of them has been erased by the weight of present suffering.',
        },
        {
          kind: 'carry',
          html:
            'This passage gives language to depression, despair, and the experience of being trapped. It does not minimize suffering or offer false comfort. It names the reality: the weight is real, the chains are real, the darkness is real. And in that naming, those who suffer find companionship. They are not alone in their despair. Even in scripture, such suffering is acknowledged as real.',
        },
        {
          kind: 'reflection',
          id: 'lam3-dark-places',
          prompt: 'Have you been led into darkness as the speaker describes? What chains feel heavy to you? Can you name the suffering without yet knowing how it will resolve?',
        },
      ],
    },

    /* ─── Lamentations 3:21–33 — The Turning Point ──────────────────── */
    {
      ref: 'Lamentations 3:21–33',
      title: 'Mercy New Every Morning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(21, 'This I recall to my mind, therefore have I hope.'),
            plain(22, 'It is of the Lord\'s mercies that we are not consumed, because his compassions fail not.'),
            plain(23, 'They are new every morning: great is thy faithfulness.'),
            plain(24, 'The Lord is my portion, saith my soul; therefore will I hope in him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'lam3-recall',
          html:
            'At the very bottom of despair, the speaker pauses. "This I recall to my mind." What does he recall? Not that his circumstances are better. Not that relief has come. But that there is something to remember. And in the act of remembering, hope enters. This is the mechanism of faith: when circumstances are darkest, to remember who God is.',
        },
        {
          kind: 'commentary',
          id: 'lam3-mercies',
          html:
            'What does he remember? "It is of the Lord\'s mercies that we are not consumed." The entire weight of the passage rests on this: that the speaker still exists, that he has not been destroyed, that he is still capable of speaking—this is mercy. Not rescue (at least, not yet), not restoration (at least, not yet), but the mercy of not being annihilated. And this mercy comes not from the speaker\'s worthiness or the correction of circumstances, but from "his compassions"—God\'s compassions that "fail not."',
        },
        {
          kind: 'commentary',
          id: 'lam3-new-morning',
          html:
            'And most remarkably: "They are new every morning." God\'s mercies do not run out. Each day brings fresh mercies. Each morning, the compassion is renewed. "Great is thy faithfulness." God is faithful—not fair, not explaining, but faithful. Day after day, He returns with mercy. This is the basis of hope.',
        },
        {
          kind: 'hebrew',
          id: 'lam3-rechamim',
          title: 'Rechamim — "Mercies" (Rachamim)',
          script: 'רַחֲמִים',
          translit: '<strong>Rachamim</strong> · mercies; compassions; tender mercies; the feeling of compassion',
          description:
            'The Hebrew word rachamim (plural of racham) refers to mercies, but more deeply to the womb—the place of life and nurture. God&apos;s mercies are described with an image of womb-compassion. This is not abstract justice. This is the intimate care of one who has created life.',
        },
        {
          kind: 'commentary',
          id: 'lam3-portion',
          html:
            'The speaker makes a declaration: "The Lord is my portion." Everything else—freedom, health, peace, prosperity—is gone. But God remains. God is his inheritance, his allotment, his portion. And this is enough. "Therefore will I hope in him."',
        },
        {
          kind: 'christ',
          id: 'lam3-christ-renewed',
          title: 'Christ Connection — Mercies Renewed in Christ',
          html:
            'The promise of new mercies each morning finds its ultimate fulfillment in Christ. In the resurrection of Christ, God\'s mercies are renewed completely. Death itself is reversed. The new creation begins. In Christ, we taste the mercies that are "new every morning"—each day is a gift, each breath is mercy, each moment of consciousness is grace. And these mercies are not earned. They are given. They are the expression of God\'s compassion, which fails not because it is rooted in God\'s nature, not in our performance.',
        },
        {
          kind: 'carry',
          html:
            'The great gift of Lamentations 3 is permission to remember in the darkness. When you are broken, imprisoned, far from peace, you can still recall to mind that God is merciful. God\'s mercies are not suspended during your suffering. They are renewed. Each morning, they begin again. This is not false comfort. This is faith that looks through the present darkness to the faithfulness of God.',
        },
        {
          kind: 'reflection',
          id: 'lam3-mercies-remember',
          prompt: 'What mercies of God can you recall, even in your current suffering? What would change if you remembered that His compassions are new every morning? What is the difference between waiting for rescue and trusting that God is enough?',
        },
      ],
    },

    /* ─── Lamentations 3:34–66 — Hope Endures ────────────────────────── */
    {
      ref: 'Lamentations 3:34–66',
      title: 'Vindication and Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(40, 'Let us search and try our ways, and turn again to the Lord.'),
            plain(55, 'I called upon thy name, O Lord, out of the low dungeon.'),
            plain(56, 'Thou hast heard my voice: hide not thine ear at my breathing, at my cry.'),
            plain(57, 'Thou drewest near in the day that I called upon thee: thou saidst, Fear not.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'lam3-search-ways',
          html:
            'As the speaker emerges from the pit, he calls for examination: "Let us search and try our ways, and turn again to the Lord." The affliction has opened the possibility of transformation. The speaker is ready to look at his own ways, to acknowledge sin, and to turn. This is not despair masquerading as repentance, but a genuine turning.',
        },
        {
          kind: 'commentary',
          id: 'lam3-dungeon-call',
          html:
            'From "the low dungeon," the speaker calls upon God\'s name. And God hears. "Thou hast heard my voice: hide not thine ear at my breathing." The word "breathing" is interesting—even the mere gasping of one who is nearly suffocated is heard by God. No cry is too small. No whisper goes unheard. And God draws near: "Thou drewest near in the day that I called upon thee: thou saidst, Fear not."',
        },
        {
          kind: 'carry',
          html:
            'The final lesson of Lamentations 3 is that hope is not passive. The speaker does not wait to feel better before he prays. He prays from the dungeon. He calls out in his breathing. And God hears and draws near. Your prayer, your cry, your outreach to God even in the depths—this is heard. You do not have to wait until you feel hopeful to turn to Him. The turning itself is the beginning of hope.',
        },
        {
          kind: 'reflection',
          id: 'lam3-call-out',
          prompt: 'What would it mean for you to call out to God from your current "dungeon"? What fear is keeping you from reaching out? What would it mean to hear God say, "Fear not"?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'It is of the Lord\'s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Lamentations 3 · Study Guide',
  },
};
