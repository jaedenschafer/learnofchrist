import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Lamentations 5 — A Prayer for Restoration
 *
 * The final chapter of Lamentations is a prayer. "Remember, O Lord, what is come
 * upon us: consider, and behold our reproach." The people are captive, oppressed,
 * hungry, humiliated. Yet they cry out for God to remember them, to restore them,
 * to renew them. "Turn thou us unto thee, O Lord, and we shall be turned; renew our
 * days as of old." Only God can turn them back. Only God can make them new.
 */
export const LAMENTATIONS_5: RichChapterContent = {
  bookSlug: 'lamentations',
  bookName: 'Lamentations',
  chapter: 5,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  topicTags: ['lament', 'suffering', 'hope', 'mercy'],
  opener: {
    topical: true,
    caption: 'Lamentations 5',
  },
  intros: [
    'Lamentations 5 is the prayer that closes the book. It is not an acrostic like the previous chapters, but a dirge—a plea for God to remember. The exiles are in captivity, their inheritance given to strangers, their mothers and fathers dead. They are mocked and despised. Yet instead of bitterness or accusation, the prayer is framed as a reminder: "Remember, O Lord, what is come upon us." God has not forgotten. But the exiles cry out for Him to remember, to consider, to acknowledge their suffering.',
    'Most powerfully, the prayer ends with the only request that truly matters: "Turn thou us unto thee, O Lord, and we shall be turned; renew our days as of old." The exiles understand that they cannot turn themselves around. They cannot pull themselves out of exile. Only God can do it. Only God can renew them. The final verse reads: "But thou hast utterly rejected us; thou art very wroth against us." It seems like despair—until we understand that even this cry of rejection is a cry of faith. The one who feels rejected still addresses God. The one who feels God\'s wrath still calls upon God. This is the deepest faith.',
  ],

  sections: [
    /* ─── Lamentations 5:1–18 — The Lament Summarized ──────────────── */
    {
      ref: 'Lamentations 5:1–18',
      title: 'The Cry for Remembrance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Remember, O Lord, what is come upon us: consider, and behold our reproach.'),
            plain(2, 'Our inheritance is turned to strangers, our houses to aliens.'),
            plain(8, 'Servants have ruled over us: there is none that doth deliver us out of their hand.'),
            plain(15, 'The joy of our heart is ceased; our dance is turned into mourning.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'lam5-remember',
          html: 'The prayer opens with a simple plea: "Remember." God has not forgotten, but the people cry out for remembrance anyway. They want to be seen, to be acknowledged, to have their suffering witnessed by God. They ask God to consider their reproach—the shame and humiliation they have endured[res:bibleodyssey-lament][res:sefaria-lamentations-5].',
        },
        {
          kind: 'commentary',
          id: 'lam5-inheritance',
          html: 'The specificity of the lament is important: their inheritance is turned to strangers. The land that was promised to them, that was passed down through generations, is now held by foreigners. Houses that belonged to families are occupied by aliens. The fundamental dispossession of exile is named[res:jerusalem-destruction-archaeology].',
        },
        {
          kind: 'commentary',
          id: 'lam5-servants-rule',
          html: '"Servants have ruled over us." Those they considered beneath them now rule them. The inversion of the social order is part of the shame. There is no one to deliver them. They are utterly powerless.',
        },
        {
          kind: 'commentary',
          id: 'lam5-joy-ceased',
          html: 'Most poignantly: "The joy of our heart is ceased; our dance is turned into mourning." The capacity for joy is gone. What was celebratory is now mournful. The totality of the loss includes not just physical deprivation but the loss of the capacity to rejoice.',
        },
        {
          kind: 'carry',
          html:
            'Lamentations 5 teaches that it is appropriate to bring our complete suffering to God—the physical loss, the social humiliation, the loss of joy. These are real losses and they deserve to be mourned. The prayer does not minimize them or spiritualize them away. It names them with specificity.',
        },
        {
          kind: 'reflection',
          id: 'lam5-reproach',
          prompt: 'What reproach or humiliation do you carry? What inheritance or joy have you lost? Can you name these losses without shame, bringing them before God as the exiles did?',
        },
      ],
    },

    /* ─── Lamentations 5:19–22 — The Prayer for Restoration ────────── */
    {
      ref: 'Lamentations 5:19–22',
      title: 'Turn Us Back to You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(19, 'Thou, O Lord, remainest for ever; thy throne is from generation to generation.'),
            plain(21, 'Turn thou us unto thee, O Lord, and we shall be turned; renew our days as of old.'),
            plain(22, 'But thou hast utterly rejected us; thou art very wroth against us.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'lam5-thou-remainest',
          html:
            'In the midst of the lament, the prayer shifts ground. "Thou, O Lord, remainest for ever; thy throne is from generation to generation." While everything earthly—Jerusalem, the temple, the kingship—has fallen, God endures. God\'s throne is eternal. This is not cold comfort. This is the rock on which faith stands. When all else fails, God remains.',
        },
        {
          kind: 'commentary',
          id: 'lam5-turn-us',
          html:
            'The central prayer of Lamentations 5—perhaps of the entire book—is: "Turn thou us unto thee, O Lord, and we shall be turned." This recognizes the deep truth: the exiles cannot turn themselves. They cannot generate repentance by their own power. They cannot produce the change that is needed. Only God can turn them. And when God turns them, they will be turned. When God renews them, they will be renewed. The initiative and the power belong to God.',
        },
        {
          kind: 'commentary',
          id: 'lam5-renew-days',
          html:
            '"Renew our days as of old." The prayer is not merely for forgiveness or for return to the land. It is for renewal. Not a return to how things were—that is impossible—but a renewal of the capacity to live, to rejoice, to be restored. The days will be new, not old, but they will be renewed.',
        },
        {
          kind: 'commentary',
          id: 'lam5-rejected',
          html:
            'The final verse is enigmatic: "But thou hast utterly rejected us; thou art very wroth against us." Is this despair? Or is it the most profound faith? The text ends without resolution. But the fact that the prayer ends with this—with an acknowledgment of God\'s rejection and wrath—suggests that even rejection, even wrath, is not the final word. The prayer that acknowledges rejection is itself an act of faith, a reaching out to the one who seems to have rejected, a refusal to be silent.',
        },
        {
          kind: 'hebrew',
          id: 'lam5-shuv',
          title: 'Shuv — "Turn" (Shuv)',
          script: 'שׁוּב',
          translit: '<strong>Shuv</strong> · turn; return; repent; be converted; come back',
          description:
            'The Hebrew word shuv means "to turn" or "to return." It is the word for repentance—literally, turning around, facing a different direction. The prayer is for God to cause Israel to shuv—to turn from exile back to God, to turn from their ways back to righteousness. And when God turns them, they will be turned.',
        },
        {
          kind: 'christ',
          id: 'lam5-christ-turn',
          title: 'Christ Connection — Only God Can Turn Us Back',
          html:
            'The prayer "Turn thou us unto thee, O Lord, and we shall be turned" finds its answer in Christ. We are bent toward sin, turned away from God, unable to turn ourselves around. But Christ comes as the one who turns us back. He calls us to repentance not through condemnation but through love. He beckons us to turn around and follow Him. And His resurrection declares that the turning is possible—that what seemed dead can be made alive, what seemed hopeless can be renewed. In Christ, our days are renewed. The old has passed away. All things become new.',
        },
        {
          kind: 'carry',
          html:
            'The final lesson of Lamentations is that we cannot save ourselves. We cannot turn ourselves around. We cannot generate the repentance or renewal we need. This is not despair. This is liberation. We are invited to stop trying to fix ourselves and instead to cry out for God to turn us back. The turning is God\'s work. Our work is to call out for it.',
        },
        {
          kind: 'reflection',
          id: 'lam5-be-turned',
          prompt: 'In what way do you need God to turn you? What aspect of your life have you been trying unsuccessfully to change? What would it mean to release your effort and ask God to do the turning?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Turn thou us unto thee, O Lord, and we shall be turned; renew our days as of old.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Lamentations 5 · Study Guide',
  },  resources: [
    {
      id: 'sefaria-lamentations-5',
      kind: 'study',
      source: 'Sefaria',
      label: 'Lamentations 5 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Lamentations.5',
      description: 'The Hebrew text of Lamentations 5 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],
};
