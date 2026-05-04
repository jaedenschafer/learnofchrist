import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Lamentations 4 — The Siege's Toll
 *
 * "How is the gold become dim! how is the most fine gold changed!" Lamentations 4
 * speaks of the physical devastation of the siege: the hunger, the famine, the
 * children dying in the streets, the infants crying for milk that no mother can
 * provide. The city that was pure gold has been tarnished by sin. Yet Christ comes
 * to purify that tarnished gold, to restore what sin has corrupted.
 */
export const LAMENTATIONS_4: RichChapterContent = {
  bookSlug: 'lamentations',
  bookName: 'Lamentations',
  chapter: 4,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  topicTags: ['lament', 'suffering', 'hope', 'mercy'],
  opener: {
    topical: true,
    caption: 'Lamentations 4',
  },
  intros: [
    'Lamentations 4 turns from the depths of despair to the concrete devastation of the siege. The metaphor of gold and its tarnishing opens the chapter. Jerusalem, which was like fine gold, has become dim and tarnished. The preciousness has been lost. And the cause is sin. "The stones of the sanctuary are poured out in the top of every street."',
    'The chapter describes the horrors of siege: mothers eating their own children, the young children crying for bread that no one can provide, the warriors weakened by hunger. It is unflinching in its realism. Yet even in this horror, there is a note of purification: the gold is tarnished, but it can be refined. The impurities are burned away. And in that burning, what remains is purer than before.',
  ],

  sections: [
    /* ─── Lamentations 4:1–12 — The Tarnishing ──────────────────────── */
    {
      ref: 'Lamentations 4:1–12',
      title: 'Pure Gold Tarnished',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'How is the gold become dim! how is the most fine gold changed! the stones of the sanctuary are poured out in the top of every street.'),
            plain(4, 'The tongue of the sucking child cleaveth to the roof of his mouth for thirst: the young children ask bread, and no man breaketh it unto them.'),
            plain(10, 'The hands of the pitiful women have sodden their own children: they were their meat in the destruction of the daughter of my people.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'lam4-gold-dim',
          html: 'The opening lament is for loss of preciousness. Gold has become dim. Fine gold has changed. The sanctuary stones, stones that once held glory and beauty, are scattered in the streets. What was sacred is now desecrated. What was treasured is now worthless[res:bibleodyssey-lament].',
        },
        {
          kind: 'commentary',
          id: 'lam4-sucking-child',
          html: 'The suffering of the siege is described with particular attention to the young. Nursing children cry for milk, their tongues dry against the roof of their mouths. Young children ask for bread, and there is none to give. The slowness of starvation, the prolonged suffering of the innocent—these are the realities of siege warfare[res:jerusalem-destruction-archaeology].',
        },
        {
          kind: 'commentary',
          id: 'lam4-pitiful-women',
          html: 'Most horrifying: mothers have eaten their own children. The law of Leviticus 26 and Deuteronomy 28 warned that if Israel turned from God, they would be besieged and would eat their own children in desperation. This is the fulfillment of that curse. The violation of nature itself—mother eating child—signals the totality of the judgment[res:sumerian-lamentations].',
        },
        {
          kind: 'carry',
          html: 'This passage does not minimize the horror of judgment. It does not offer false comfort. It is unflinching in its realism. And it thereby acknowledges a truth: sometimes the consequences of sin are embodied and terrible. Sometimes innocents suffer alongside the guilty. The question is not whether suffering is real, but how we understand it and what we do in response.',
        },
        {
          kind: 'reflection',
          id: 'lam4-suffering-innocents',
          prompt: 'Have you experienced suffering that seemed to fall on the innocent—yourself or others? How do you hold both the reality of judgment and the injustice of innocent suffering?',
        },
      ],
    },

    /* ─── Lamentations 4:13–22 — Purification Through Fire ──────────── */
    {
      ref: 'Lamentations 4:13–22',
      title: 'The Fire That Purifies',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(13, 'For the sins of her prophets, and the iniquities of her priests, that have shed the blood of the just in the midst of her,'),
            plain(22, 'The punishment of thine iniquity is accomplished, O daughter of Zion; he will no more carry thee away into captivity: but he will visit thine iniquity, O daughter of Edom; and he will discover thy sins.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'lam4-sins-prophets',
          html: 'The suffering is traced to its source: the sins of prophets and priests. Those who should have led people to righteousness instead shed the blood of the just. The leaders bear special responsibility for the corruption that led to judgment. Yet even in naming these sins, there is a note of hope: the judgment is not endless.',
        },
        {
          kind: 'commentary',
          id: 'lam4-punishment-accomplished',
          html: '"The punishment of thine iniquity is accomplished, O daughter of Zion." The judgment, terrible as it has been, is not permanent. It is measured. It has limits. And it will end. More: the focus shifts. What about Edom, the enemy who rejoiced in Zion&apos;s destruction? God will visit Edom\'s iniquity. All nations stand under God\'s judgment. None escape. But for Zion, captivity will not be forever.',
        },
        {
          kind: 'hebrew',
          id: 'lam4-tippul',
          title: 'Tipul — "Accomplished" (Tipilet)',
          script: 'תִּפְלָה',
          translit: '<strong>Tipilet</strong> · accomplished; completed; finished; brought to an end',
          description:
            'The Hebrew word tipul means "accomplished" or "completed." The judgment has run its course. It is not suspended indefinitely. The measure of suffering has been filled. This gives hope: judgment, though real and terrible, is not eternal.',
        },
        {
          kind: 'christ',
          id: 'lam4-christ-purified',
          title: 'Christ Connection — Purified Gold',
          html:
            'The image of gold tarnished and refined speaks to the work of Christ. We are tarnished by sin. Our purity is lost. Like fine gold become dim, we have lost our luster. Yet Christ does not merely condemn the tarnishing. He comes as the refiner&apos;s fire. Through the crucifixion, the impurities are burned away. We are refined. We emerge purer, more precious, more beautiful than before. The suffering that seems like destruction is actually refinement. And the punishment is accomplished—not in an eternal hell, but in Christ&apos;s redemptive work.',
        },
        {
          kind: 'carry',
          html:
            'The promise of Lamentations 4 is that judgment is not eternal. The punishment is accomplished. And for those who are God\'s people, there is a future beyond judgment. The refining fire does its work, but the gold that emerges is purer, more valuable, more beautiful than before. Your current suffering—if you are truly God\'s—has an end. And beyond that end lies restoration.',
        },
        {
          kind: 'reflection',
          id: 'lam4-refined-gold',
          prompt: 'How might you be like tarnished gold? What impurities need to be burned away? Can you trust that the fire of purification, though painful, leads to something more beautiful?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'How is the gold become dim! how is the most fine gold changed! the stones of the sanctuary are poured out in the top of every street.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Lamentations 4 · Study Guide',
  },  resources: [
    {
      id: 'sumerian-lamentations',
      kind: 'museum',
      source: 'British Museum',
      label: 'Sumerian City Laments',
      url: 'https://www.britishmuseum.org/collection/object/Y_EA9319',
      description: 'ANE parallels to Lamentations: Sumerian lament poetry over destroyed cities.',
    }
  ],
};
