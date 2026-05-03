import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 25 — The Sabbath Year and the Jubilee.
 *
 * Every seventh year, the land rests. Every fiftieth year, something more:
 * the Jubilee. Slaves are freed. Debts are cancelled. Ancestral land returns
 * to its original families. It is a radical, counter-intuitive vision of
 * justice and mercy. And it never fully happened in Israel's history—because
 * the Jubilee was meant to point forward to someone who embodies it. In Luke 4,
 * Jesus stands in the synagogue, reads from Isaiah 61 ("the acceptable year of
 * the LORD"), and announces: "This day is this scripture fulfilled in your ears."
 * He is declaring Himself the Jubilee. He is the kinsman-redeemer. He is the
 * one who can truly free the enslaved and restore what was lost.
 */
export const LEVITICUS_25: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 25,

  estimatedMinutes: { beginner: 13, intermediate: 19, deep: 23 },
  intros: [
    'Leviticus 25 is the Jubilee chapter—the vision of a nation built on periodic release. Every seventh year the land rests, fields go fallow, vineyards are not pruned, and no one harvests. Every fiftieth year, the Jubilee arrives: enslaved Israelites go free, debts are forgiven, and ancestral land is returned to its original families. It is a countercultural law that privileges mercy over accumulation, freedom over perpetual servitude, and restoration over the consolidation of wealth. It asks Israel: What kind of people do you want to be?',
    'The chapter is full of Hebrew words that point toward Christ. Shemittah (release) and yobel (jubilee) speak of liberation. Go&apos;el (the kinsman-redeemer) is the person with power and obligation to restore what another has lost—the pattern of a true redeemer. And yet the Jubilee was never fully observed in Israel&apos;s history. It remained an ideal that whispered forward to someone who would embody it completely. When Jesus opens His ministry in Luke 4:18–19, He quotes Isaiah 61 and announces: "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised, to preach the acceptable year of the LORD." He is declaring Himself the Jubilee.',
    'In Leviticus 25, we see a pattern—the year of release, the freedom of slaves, the restoration of property, the cancellation of debts. And we see the kinsman-redeemer, the go&apos;el, who has the right and the obligation to buy back what another could not retain. Jesus is our Go&apos;el. He is the Jubilee in person. He has bought us back.',
  ],

  opener: {
    matchTitle: /jubilee|freedom|release|liberty/i,
    caption: 'Jubilee: A Year of Release and Restoration',
  },

  sections: [
    /* ─── Leviticus 25:1–7 — The Sabbath Year ──────────────────────────── */
    {
      ref: 'Leviticus 25:1–7',
      title: 'The Sabbath Year',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD spake unto Moses in mount Sinai, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Speak unto the children of Israel, and say unto them, When ye come into the land which I give you, then shall the land '),
                hy('keep a sabbath unto the LORD', 'shemittah-rest'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Six years thou shalt sow thy field, and six years thou shalt prune thy vineyard, and gather in the fruit thereof;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('But in the seventh year shall be a sabbath of rest unto the land, a sabbath for the LORD: thou shalt neither sow thy field, nor prune thy vineyard.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('That which groweth of its own accord of thy harvest thou shalt not reap, neither gather the grapes of thy vine undressed: for it is a year of rest unto the land.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the sabbath of the land shall be meat for you; for thee, and for thy servant, and for thy maid, and for thy hired servant, and for thy stranger that sojourneth with thee,'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And for thy cattle, and for the beast that are in thy land, shall all the increase thereof be meat.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'shemittah-rest',
          html: 'The word is <em>shemittah</em>—literally "release" or "letting fall." The land itself is given a sabbath, a complete rest from human labor. No sowing, no pruning, no harvest by decree. What grows wild becomes common property, available to servants, foreigners, cattle. It is not poverty or loss. It is a reversal of control. The land rests. The poor eat freely. The system resets.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shemittah',
          title: 'Shemittah — &ldquo;release, sabbath year&rdquo;',
          script: 'שְׁמִטָּה',
          translit: '<strong>shemittah</strong> · release; the seventh year when the land rests and debts are forgiven',
          description: 'From the root <strong>shamat</strong>, "to let fall, to release." Every seven years, control is released. Debts fall away. The land lies fallow. It is a law that teaches Israel: You do not ultimately own what you think you own. God does.',
        },
        {
          kind: 'carry',
          html: 'One year in seven, the land was given permission to stop. One year in seven, the poor could eat from the fields without paying. One year in seven, the accumulation paused. What does it mean that God built into the law a rhythm of release? What in your life is meant to rest? What are you holding so tightly that you cannot let it fall?',
        },
        {
          kind: 'reflection',
          id: 'reflect-shemittah',
          prompt: 'If your life were meant to follow a rhythm of six years of effort and one year of release, what would that look like? What would you have to trust?',
        },
      ],
    },

    /* ─── Leviticus 25:8–17 — The Jubilee ──────────────────────────────── */
    {
      ref: 'Leviticus 25:8–17',
      title: 'The Jubilee: Fifty Years, Freedom, and Restoration',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 8,
              spans: [
                t('And thou shalt number seven sabbaths of years unto thee, seven times seven years; and the space of the seven sabbaths of years shall be unto thee forty and nine years.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then shalt thou cause the trumpet of the '),
                hg('jubile', 'yobel-trumpet'),
                t(' to sound on the tenth day of the seventh month, in the day of atonement shall ye make the trumpet sound throughout all your land.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And ye shall '),
                hp('hallow the fiftieth year', 'jubilee-freedom'),
                t(', and proclaim liberty throughout all the land unto all the inhabitants thereof: it shall be a jubile unto you; and ye shall return every man unto his possession, and ye shall return every man unto his family.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('A jubile shall that fiftieth year be unto you: ye shall not sow, neither reap that which groweth of itself in it, nor gather the grapes in it of thy vine undressed.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('For it is the jubile; it shall be holy unto you: ye shall eat the increase thereof out of the field.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('In the year of this jubile ye shall return every man unto his possession.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And if thou sell ought unto thy neighbour, or buyest ought of thy neighbour&apos;s hand, ye shall not wrong one another:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('According to the number of years after the jubile thou shalt buy of thy neighbour, and according unto the number of years of the fruits he shall sell unto thee:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('According to the multitude of years thou shalt increase the price thereof, and according to the fewness of years thou shalt diminish the price of it: for according to the number of the years of the fruits doth he sell unto thee.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Ye shall not therefore oppress one another; but thou shalt fear thy God: for I am the LORD your God.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yobel',
          title: 'Yobel — &ldquo;jubilee&rdquo;',
          script: 'יוֹבֵל',
          translit: '<strong>yobel</strong> · a ram&apos;s horn; the jubilee (every 50 years)',
          description: 'The word first meant a ram&apos;s horn, the instrument used to announce the jubilee year. On the Day of Atonement of the fiftieth year, the shofar sounds across the land—a blast declaring freedom, forgiveness of debts, and the restoration of ancestral lands. It is the sound of a reset. The sound of hope.',
        },
        {
          kind: 'commentary',
          id: 'yobel-trumpet',
          html: 'The trumpet blast marks the jubilee. It sounds on the Day of Atonement—the day when the high priest enters the holy of holies to make atonement for the sins of Israel. The timing is no accident. Forgiveness of debt flows from forgiveness of sin. Freedom for the enslaved flows from the cleansing of the nation. The trumpet announces what atonement has made possible.',
        },
        {
          kind: 'commentary',
          id: 'jubilee-freedom',
          html: 'The proclamation is radically simple: "Proclaim liberty throughout all the land unto all the inhabitants thereof." Every person who was enslaved goes free. Every debt is cancelled. Every ancestral property returns to the family it was taken from. It is not gradual. It is not means-tested. It is universal. Everyone. Every debt. Everything. The jubilee demands a complete reset of the social order every fifty years.',
        },
        {
          kind: 'christ',
          id: 'christ-jubilee',
          title: 'Christ Connection — The Jubilee in Person',
          html: 'When Jesus stands in the synagogue in Nazareth and reads from Isaiah 61, He chooses these words: "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives... to preach the acceptable year of the LORD" (Luke 4:18–19). The "acceptable year of the LORD" is jubilee language. Jesus is announcing that He Himself is the Jubilee. He is the one who proclaims liberty, who breaks chains, who restores what was lost. He is not promising that society will one day get its economics right. He is saying: I am the year of release. I am the restoration. Believe in me.',
        },
        {
          kind: 'carry',
          html: 'You live in the jubilee. Not in the shadow of it or the promise of it—in it. The trumpet has sounded. The chains have broken. What you thought was lost forever has been given back to you. Your debts have been paid. Your freedom has been proclaimed. You are not returning to the old order. You are living in the year of release.',
        },
        {
          kind: 'reflection',
          id: 'reflect-jubilee-freedom',
          prompt: 'What chains or debts in your life need to hear the trumpet of jubilee? What would it mean to actually believe that they are already broken?',
        },
        {
          kind: 'artwork',
          matchTitle: /jubilee|trumpet|freedom|liberty|release/i,
          caption: 'The Jubilee Proclaimed, Leviticus 25:10',
        },
      ],
    },

    /* ─── Leviticus 25:18–22 — God&apos;s Provision ────────────────────── */
    {
      ref: 'Leviticus 25:18–22',
      title: 'God&apos;s Promise: Provision Through the Rest Years',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 18,
              spans: [
                t('Wherefore ye shall do my statutes, and keep my judgments, and do them; and ye shall dwell in the land in safety.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the land shall yield her fruit, and ye shall eat your fill, and dwell therein in safety.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And if ye shall say, What shall we eat the seventh year? behold, we shall not sow, nor gather in our increase:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Then I will command my blessing upon you in the sixth year, and it shall bring forth fruit for three years.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And ye shall sow the eighth year, and eat yet of old fruit until the ninth year; until her fruits come in ye shall eat of the old store.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'god-provision',
          html: 'The concern is real: How will families survive if they do not sow in the seventh year? How will they eat? God&apos;s answer is simple. He will make the sixth year so abundant that it yields enough for three years. In the sixth year alone, the land will produce enough grain, wine, and oil to sustain the people through the seventh year of rest and into the eighth year until the new harvest comes. God is not asking Israel to trust in their own hustle or cleverness. He is asking them to trust Him. The promise is not theoretical—it is quantified. Three years of increase from one year of work. And it requires faith.',
        },
        {
          kind: 'carry',
          html: 'There is a year in your life when you cannot do what you normally do. There is a season when rest is not optional—it is commanded. And the voice that commands it promises: I will provide. I will give you more than enough. You do not have to live in fear of the lean year. Your trust is not in your effort. It is in my word. What would change if you believed that?',
        },
        {
          kind: 'reflection',
          id: 'reflect-provision',
          prompt: 'What "seventh year" fears do you carry? What would God have to prove to you to make you trust that His blessing is enough?',
        },
      ],
    },

    /* ─── Leviticus 25:23–34 — Redemption of Land and Property ───────────── */
    {
      ref: 'Leviticus 25:23–34',
      title: 'Redemption of Land and the Kinsman-Redeemer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 23,
              spans: [
                t('The land shall not be sold for ever: for the land is mine; for ye are strangers and sojourners with me.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And in all the land of your possession ye shall grant a redemption for the land.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('If thy brother be waxen poor, and hath sold away some of his possession, and if any of his kin come to redeem it, then shall he redeem that which his brother sold.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And if the man have none to redeem it, and himself be able to redeem it;'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Then let him count the years of the sale thereof, and restore the overplus unto the man to whom he sold it; that he may return unto his possession.'),
              ],
            },
          ],
        },
        { kind: 'commentary', id: 'lev25-mid', html: 'The right to redeem is established. A man can buy back what he sold. But he must account for the years passed—the new buyer gets paid back fairly, and the seller returns to his land. The math is clean. Justice is proportional. Now comes the reality: what if he cannot afford to buy it back? Then the jubilee does it for him.' },
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 28,
              spans: [
                t('But if he be not able to restore it to him, then that which is sold shall remain in the hand of him that hath bought it until the year of jubile: and in the jubile it shall go out, and he shall return unto his possession.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And if a man sell a dwelling house in a walled city, then he may redeem it within a whole year after it is sold; within a full year may he redeem it.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And if it be not redeemed within the space of a full year, then the house that is in the walled city shall be established for ever to him that bought it throughout his generations: it shall not go out in the jubile.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('But the houses of the villages which have no wall round about them shall be counted as the fields of the country: they may be redeemed, and they shall go out in the jubile.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Notwithstanding the cities of the Levites, and the houses of the cities of their possession, may the Levites redeem at any time.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And if a man purchase of the Levites, then the house that was sold, and the city of his possession, shall go out in the year of jubile: for the houses of the cities of the Levites are their possession among the children of Israel.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('But the field of the suburbs of their cities may not be sold; for it is their perpetual possession.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-goel',
          title: 'Go&apos;el — &ldquo;kinsman-redeemer&rdquo;',
          script: 'גֹּאֵל',
          translit: '<strong>go&apos;el</strong> · redeemer; a male relative obligated to restore family property and standing',
          description: 'The go&apos;el is the nearest male relative who has both the right and the obligation to restore what another in the family has lost. He buys back the sold land. He pays the debt. He restores the heir to his inheritance. It is not charity—it is kinship. It is the duty that comes with being family. Jesus is our Go&apos;el.',
        },
        {
          kind: 'commentary',
          id: 'land-never-sold',
          html: 'The fundamental premise: "The land shall not be sold for ever: for the land is mine." The land belongs to God, not ultimately to the Israelite families who live on it. They are "strangers and sojourners" in God&apos;s land. This shapes everything that follows. You cannot sell what is not yours to keep. You can lease your use-rights, but the land itself must return. The jubilee is built on this truth: Nothing is ultimately yours to keep forever.',
        },
        {
          kind: 'commentary',
          id: 'kinsman-redemption',
          html: 'If a brother falls into poverty and sells his ancestral land, the nearest kinsman has the right and duty to redeem it—to buy it back and restore it to the family. If the man himself later becomes prosperous, he can redeem his own land at a reduced price (calculated from the years remaining until jubilee). The mechanism assumes and creates familial obligation. Your poverty is not your shame alone. It is the family&apos;s obligation to restore you.',
        },
        {
          kind: 'christ',
          id: 'christ-redeemer',
          title: 'Christ Connection — The Kinsman-Redeemer',
          html: 'In the book of Ruth, Boaz is the go&apos;el—the kinsman-redeemer who has both the obligation and power to restore Ruth and her mother-in-law to their rightful place and inheritance. He pays the price. He assumes the obligation. The whole story hinges on one word: redeemer. Paul extends the image to Christ: "I know that my redeemer liveth, and that he shall stand at the latter day upon the earth" (Job 19:25). Jesus is the kinsman-redeemer who has the power to restore what we have lost. He is family. He has bought us back at a price. He restores us to our inheritance in God.',
        },
        {
          kind: 'carry',
          html: 'You do not have to redeem yourself. The kinsman-redeemer stands ready to do it for you. He has the obligation because He is family. He has the power because He is God. What you sold in poverty, He has bought back. What you lost in shame, He has restored. You are not an orphan trying to pull yourself up by your bootstraps. You have a go&apos;el. And He is faithful.',
        },
        {
          kind: 'reflection',
          id: 'reflect-redeemer',
          prompt: 'What in your life do you feel like you "sold" in desperation? What would it feel like to have a kinsman-redeemer who has both the power and the obligation to buy it back?',
        },
      ],
    },

    /* ─── Leviticus 25:35–43 — No Perpetual Slavery for Israelites ────────── */
    {
      ref: 'Leviticus 25:35–43',
      title: 'Debt, Slavery, and the Limit of Control',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 35,
              spans: [
                t('And if thy brother be waxen poor, and fallen in decay with thee; then thou shalt relieve him: yea, though he be a stranger, or a sojourner; that he may live with thee.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('Take thou no usury of him, or increase: but fear thy God; that thy brother may live with thee.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('Thou shalt not give him thy money upon usury, nor lend him thy victuals for increase.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('I am the LORD your God, which brought you forth out of the land of Egypt, to give you the land of Canaan, and to be your God.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('And if thy brother that dwelleth by thee be waxen poor, and be sold unto thee; thou shalt not compel him to serve as a bondservant:'),
              ],
            },
            {
              number: 40,
              spans: [
                t('But as an hired servant, and as a sojourner, he shall be with thee, and shall serve thee unto the year of jubile:'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And then shall he depart from thee, both he and his children with him, and shall return unto his own family, and unto the possession of his fathers shall he return.'),
              ],
            },
            {
              number: 42,
              spans: [
                t('For they are my servants, which I brought forth out of the land of Egypt: they shall not be sold as bondmen.'),
              ],
            },
            {
              number: 43,
              spans: [
                t('Thou shalt not rule over him with rigour; but shalt fear thy God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'no-usury',
          html: 'If a brother falls into poverty, he may enter into service to pay his debt. But he cannot be lent money at interest or have food lent to him "for increase." Usury is forbidden. You cannot prosper on another&apos;s misery. And if he becomes your servant, he is not your property to treat with rigour. He is hired help—hired only until the jubilee. Then he goes free. You cannot accumulate people as permanent servants. You cannot turn debt into perpetual servitude.',
        },
        {
          kind: 'commentary',
          id: 'remembrance-egypt',
          html: 'God grounds the law in memory: "I am the LORD your God, which brought you forth out of the land of Egypt." You know what slavery is. You lived it. Your fathers lived it. You should know better than to make another human perpetually enslaved. The law against perpetual slavery is built on moral memory. Do not do to others what was done to you.',
        },
        {
          kind: 'carry',
          html: 'There is a limit to how long you can hold another person in debt. There is a year when the trumpet sounds and it all ends. You cannot build a life on the permanent servitude of another. And if you are the one in debt, if you are the one serving—there is a year when it ends. You will not be a servant forever. The jubilee comes.',
        },
        {
          kind: 'reflection',
          id: 'reflect-debt-freedom',
          prompt: 'What does it mean that God forbids perpetual slavery—that there is always, always a release date? How does that change what you think about your own "debts"?',
        },
      ],
    },

    /* ─── Leviticus 25:44–46 — Foreign Slaves ────────────────────────────── */
    {
      ref: 'Leviticus 25:44–46',
      title: 'The Exception: Foreign Slaves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 44,
              spans: [
                t('Both thy bondmen, and thy bondmaids, which thou shalt have, shall be of the heathen that are round about you; of them shall ye buy bondmen and bondmaids.'),
              ],
            },
            {
              number: 45,
              spans: [
                t('Moreover of the children of the strangers that do sojourn among you, of them shall ye buy, and of their families that are with you, which they begat in your land: and they shall be your possession.'),
              ],
            },
            {
              number: 46,
              spans: [
                t('And ye shall take them as an inheritance for your children after you, to inherit them for ever: but over your brethren the children of Israel, ye shall not rule one over another with rigour.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'foreign-slavery',
          html: 'This is the passage many find troubling. Foreign slaves are permitted—purchased from neighboring nations or held permanently within Israel. They may become hereditary property. But the law carefully distinguishes between foreign slaves and Israelite servants. An Israelite cannot be held in perpetuity. A foreigner can. The text does not hide this distinction. It names it. The reading here is not to endorse perpetual slavery of foreigners, but to acknowledge what the text actually says. The law of jubilee is more merciful than what surrounded it—but it still contains a hierarchy. This is a moment where the text does not align with the fuller revelation of Christ, who calls all people His own, ransomed at equal cost.',
        },
        {
          kind: 'carry',
          html: 'The law permits what grace ultimately abolishes. The jubilee is merciful in the context of its time—but Christ will go further. He will declare that all are one in Him. That the foreign and the stranger are family. That no one is perpetually less than another. The jubilee of Leviticus is a step toward that fuller freedom. But it is not the end of the story.',
        },
      ],
    },

    /* ─── Leviticus 25:47–55 — Redemption of Israelites Sold to Foreigners ─── */
    {
      ref: 'Leviticus 25:47–55',
      title: 'The Redeemer&apos;s Obligation: Restoring the Sold Brother',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 47,
              spans: [
                t('And if a sojourner or stranger wax rich by thee, and thy brother that dwelleth by him wax poor, and sell himself unto the stranger or sojourner by thee, or to the stock of the stranger&apos;s family:'),
              ],
            },
            {
              number: 48,
              spans: [
                t('After that he is sold he may be redeemed again; one of his brethren may redeem him:'),
              ],
            },
            {
              number: 49,
              spans: [
                t('Either his uncle, or his uncle&apos;s son, may redeem him, or any that is nigh of kin unto him of his family may redeem him: or if he be able, he may redeem himself.'),
              ],
            },
            {
              number: 50,
              spans: [
                t('And he shall reckon with him that bought him from the year that he was sold to him unto the year of jubile: and the price of his sale shall be according unto the number of years, as the days of an hired servant shall it be with him.'),
              ],
            },
            {
              number: 51,
              spans: [
                t('If there be yet many years behind, according unto them he shall give again the price of his redemption out of the money that he was bought for.'),
              ],
            },
            {
              number: 52,
              spans: [
                t('And if there remain but few years unto the year of jubile, then he shall count with him, and according unto his years shall he give him again the price of his redemption.'),
              ],
            },
            {
              number: 53,
              spans: [
                t('And as a yearly hired servant shall he be with him: and thou shalt not suffer him to rule over him with rigour in thy sight.'),
              ],
            },
            {
              number: 54,
              spans: [
                t('And if he be not redeemed in these years, then he shall go out in the year of jubile, both he, and his children with him.'),
              ],
            },
            {
              number: 55,
              spans: [
                t('For unto me the children of Israel are servants; they are my servants whom I brought forth out of the land of Egypt: I am the LORD your God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sold-to-foreigner',
          html: 'Even if an Israelite becomes so poor that he sells himself to a foreigner, he is not lost forever. Any kinsman can redeem him. The closer the kinsman, the more obligated. An uncle, an uncle&apos;s son, or anyone of the family can buy him back. The price is calculated from the years of service remaining until jubilee. If few years remain, the redemption price is lower. The law treats the enslaved Israelite not as lost property, but as family that can be restored. And if no kinsman redeems him, the jubilee does. He goes out free with his children in the year of jubilee.',
        },
        {
          kind: 'commentary',
          id: 'servants-god',
          html: 'The chapter ends with the fundamental truth: "Unto me the children of Israel are servants; they are my servants whom I brought forth out of the land of Egypt." Israel belongs to God alone. Even if they are sold into human slavery, that slavery is temporary because they are God&apos;s servants. No human master can own them permanently. God&apos;s claim is prior. God&apos;s ownership supersedes all others.',
        },
        {
          kind: 'christ',
          id: 'christ-slave-freedom',
          title: 'Christ Connection — The Price of Redemption',
          html: 'When you are enslaved to what you cannot free yourself from—sin, shame, addiction, fear—you need someone with both the power and the kinship to redeem you. Christ is that kinsman. He is family. He has the power. And He has paid the price. "Ye were not redeemed with corruptible things, as silver and gold... but with the precious blood of Christ, as of a lamb without blemish and without spot" (1 Pet. 1:18–19). You were sold. But you have been redeemed. The price has been paid. The kinsman-redeemer has set you free.',
        },
        {
          kind: 'carry',
          html: 'You are not the property of the one who bought you. You belong to God. Your Redeemer has claimed you. The price has been paid—not in silver, not in gold, but in blood. You are not a perpetual slave. You are not lost forever. You are redeemed. And if no one else had power to restore you, God does. The jubilee has come.',
        },
        {
          kind: 'reflection',
          id: 'reflect-redeemed',
          prompt: 'What have you been "sold" into that you thought was permanent? What does it mean that your Redeemer has already paid the price to set you free?',
        },
        {
          kind: 'artwork',
          matchTitle: /redemption|redeemer|freedom|slave.*free|liberation/i,
          caption: 'The Redeemer Restores the Sold Brother, Leviticus 25:47–55',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Leviticus 25',
    quote: 'Every fiftieth year, proclaim liberty throughout the land: release the enslaved, forgive the debts, restore the land to its families. The jubilee is the year of the redeemer—the kinsman with the power and obligation to restore what was lost. Christ is our jubilee, our redeemer, our go&apos;el.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 25 · Study Guide',
  },

  hasHebrew: true,
};
