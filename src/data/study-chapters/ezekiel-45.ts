import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 45 — Land Allotment
 *
 * The vision turns to the distribution of land in the restored Israel. A sacred
 * portion is set apart for the temple and the priests. The prince receives a
 * portion. The remaining land is divided among the people. Order and justice
 * govern the distribution. Each family receives what they need. None is left
 * without inheritance.
 */
export const EZEKIEL_45: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 45,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'After the vision of the restored temple, Ezekiel now describes how the land of Israel will be allocated among the people. The distribution is not random or based on power and wealth. Instead, it is carefully ordered: a sacred portion for the temple and the priests, a portion for the prince, and then the land divided equally among the tribes. This is a vision of justice—every family has a place, every tribe has an inheritance, and the sacred is honored first.',
    'The standards for measurement are reformed. No more false weights and dishonest scales. The ephah (measure of grain) and the bath (measure of liquid) are standardized. Justice in commerce begins with honest measures. The economic order itself reflects the moral renewal that God is bringing about.',
  ],

  sections: [
    {
      ref: 'Ezekiel 45:1–9',
      title: 'The Sacred Portion and the Prince&apos;s Portion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 45,
          lines: [
            plain(1, 'Moreover, when ye shall divide by lot the land for inheritance, ye shall offer an oblation unto the Lord, an holy portion of the land: the length shall be the length of five and twenty thousand reeds, and the breadth shall be ten thousand. This shall be holy in all the borders thereof round about.'),
            plain(3, 'And of this measure shalt thou measure the length of five and twenty thousand, and the breadth of ten thousand: and in it shall be the sanctuary and the most holy place.'),
            plain(5, 'And the five and twenty thousand of length, and the ten thousand of breadth, shall also the Levites, the ministers of the house, have for themselves, for a possession for twenty chambers.'),
            plain(8, 'In the land shall be his possession in Israel: and my princes shall no more oppress my people; and the rest of the land shall they give to the house of Israel according to their tribes.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel45-sacred',
          html:
            'The sacred portion is listed first. Before the prince&apos;s land, before the people&apos;s inheritance, God&apos;s sanctuary and the priests&apos; dwellings are allocated. This is the proper order of priorities: God first, then His servants, then the people.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel45-prince',
          html:
            'The prince is given a portion, but not arbitrary power over all the land. He receives what is designated for him. And the critical statement: "my princes shall no more oppress my people." The renewal includes reform of leadership. Princes are appointed to serve, not to plunder.',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel45-nasi',
          title: 'Nasi — "Prince" ',
          script: 'נָשִׂיא',
          translit: '<strong>Nasi</strong> · prince; leader; one lifted up to serve',
          description:
            'The word nasi literally means "lifted up," suggesting one raised to a position of service and responsibility. A true nasi uses power to protect, not to oppress.',
        },
        {
          kind: 'christ',
          id: 'ezekiel45-christ-inheritance',
          title: 'Christ Connection — Christ the Inheritance',
          html:
            'In Ephesians 1:11, Paul writes that believers "have obtained an inheritance." Christ is our portion. The land, the provision, the security—all are found in union with Him. He is both the prince who serves and the inheritance that sustains.',
        },
        {
          kind: 'carry',
          html:
            'In a just society, the sacred is honored, leaders serve without oppression, and all people are given their rightful portion. These are not ideals that have been fully realized in any earthly kingdom. But they remain God&apos;s vision of what His order looks like.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel45-just-society',
          prompt: 'In your own community, do you see justice in the distribution of resources and opportunity? What would it take to move toward the kind of order Ezekiel describes?',
        },
      ],
    },

    {
      ref: 'Ezekiel 45:10–25',
      title: 'Just Weights and Measures',
      blocks: [
        {
          kind: 'scripture',
          chapter: 45,
          lines: [
            plain(10, 'Ye shall have just balances, and a just ephah, and a just bath.'),
            plain(11, 'The ephah and the bath shall be of one measure, that the bath may contain the tenth part of an homer: and the ephah the tenth part of an homer: the measure thereof shall be after the homer.'),
            plain(12, 'And the shekel shall be twenty gerahs: twenty shekels, five and twenty shekels, fifteen shekels, shall be your maneh.'),
            plain(15, 'And one lamb out of the flock, out of two hundred, of the fat pastures of Israel; for a meat offering, and for a burnt offering, and for peace offerings, to make reconciliation for them, saith the Lord God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel45-justice',
          html:
            'Three times the word "just" is repeated: just balances, just ephah, just bath. Honesty in commerce is essential to justice. When merchants use false weights, they steal from the poor and enrich the wealthy through deception. God commands transparency and honesty in all dealings.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel45-offerings',
          html:
            'The sacrifices prescribed are proportional and regular. They are not burdensome but sustainable. The prince is to provide them, and in providing them, acknowledge his dependence on God and his responsibility to the people.',
        },
        {
          kind: 'carry',
          html:
            'Economic justice flows from moral integrity. You cannot build a just society on dishonest foundations. The weights and measures matter because they are the vehicle of honesty or deceit in every transaction.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel45-honest',
          prompt: 'In your own dealings—whether in business, friendship, or family—do you practice "just balances"? Where might you be tempted to cheat or mislead?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'My princes shall no more oppress my people; and the rest of the land shall they give to the house of Israel.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 45 · Study Guide',
  },

  hasHebrew: true,
};
