import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 14 — The cleansing of the healed leper.
 *
 * After seven days of isolation following healing, the leper brought to the priest
 * two birds: one was slain over running water; the other was dipped in the first
 * bird&apos;s blood and released alive. Cedar, scarlet, and hyssop. The cleansed person
 * bathed, shaved, and re-entered camp. On the eighth day, offerings with blood
 * applied to ear, thumb, and toe. The law also addresses mold and mildew in houses
 * with similar ritual. This chapter shows God&apos;s kindness: healing is not enough —
 * restoration to community requires ritual, grace, and witness.
 */
export const LEVITICUS_14: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 14,

  estimatedMinutes: { 5: 12, 10: 16, 15: 19 },
  intros: [
    'Leviticus 14 answers a question: what happens after someone is healed? Not what happens during the illness — chapter 13 handles diagnosis and quarantine. This chapter is about the road back. The ritual of re-entry.',
    'The leper has been healed by God. But healing is not the same as restoration. The community has lost them for weeks, maybe months. They have no way to know the person is safe. They have no ritual to mark the boundary between "contagious" and "clean," between exile and belonging. Leviticus 14 provides exactly that — a clear, public, graceful way home.',
    'The chapter works by pairs: two birds, two ceremonial moments (day seven and day eight), two offerings. And it speaks to both kinds of impurity — the impurity of a healed person, and the strange impurity of mold in a house. What both need is the same thing: a public act that says, "This is clean now. This can be touched. This belongs among us again."',
  ],

  sections: [
    /* ─── Leviticus 14:1–7 — The Two Birds ────────────────────────────── */
    {
      ref: 'Leviticus 14:1–7',
      title: 'The Two Birds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('This shall be the law of the leper in the day of his '),
                hy('cleansing', 'tahor-cleansed'),
                t(': He shall be brought unto the priest:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the priest shall go forth out of the camp; and the priest shall look, and, behold, if the plague of leprosy be healed in the leper;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Then shall the priest command to take for him that is to be cleansed two birds alive and clean, and '),
                hy('cedar wood', 'cedar-scarlet'),
                t(', and '),
                hy('scarlet', 'cedar-scarlet'),
                t(', and '),
                hy('hyssop', 'hyssop-word'),
                t(':'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the priest shall command that one of the birds be killed in an earthen vessel over '),
                hp('running water', 'christ-blood-water'),
                t(':'),
              ],
            },
            {
              number: 6,
              spans: [
                t('As for the living bird, he shall take it, and the '),
                hp('cedar wood, and the scarlet, and the hyssop', 'christ-blood-water'),
                t(', and shall dip them and '),
                hp('the living bird', 'christ-blood-water'),
                t(' in the '),
                hp('blood', 'christ-blood-water'),
                t(' of the bird that was killed over the '),
                hp('running water', 'christ-blood-water'),
                t(':'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And he shall sprinkle upon him that is to be cleansed from the leprosy seven times, and shall pronounce him clean, and shall let the '),
                hp('living bird', 'christ-blood-water'),
                t(' loose into the open field.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tahor-cleansed',
          html:
            'The Hebrew is <em>tahor</em>, the same word used for ceremonial cleanness in chapter 13. But now it has changed its meaning entirely. The person hasn&apos;t become a different person; they have simply been healed, and the ritual makes that healing visible and shareable. Cleansing is not isolation — it is re-entry.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tahor',
          title: 'Tahor — &ldquo;cleansed&rdquo;',
          script: 'טָהוֹר',
          translit: '<strong>tahor</strong> · ceremonially clean, fit to be among the people',
          description:
            'The word appears seven times in this chapter, marking a person&apos;s return to community. Ritual cleanness is God&apos;s way of saying publicly: <em>you are safe to touch again.</em>',
        },
        {
          kind: 'commentary',
          id: 'cedar-scarlet',
          html:
            'Cedar, scarlet, and hyssop. All three appear together nowhere else in Scripture except at the crucifixion (John 19:29 — hyssop), at the leprous house ritual (verse 49–52), and in a few purification rites. They are the grammar of a boundary being crossed. Cedar: strength and endurance (it doesn&apos;t rot). Scarlet: visibility and witness. Hyssop: a plant used to mark doorways at the Passover. The materials themselves say: <em>something permanent is happening here; everyone can see it.</em>',
        },
        {
          kind: 'christ',
          id: 'christ-blood-water',
          title: 'Christ Connection — One Dies, One Flies Free Dipped in Blood',
          html:
            'One bird is slain over running water — blood poured into the stream. The living bird is dipped in that blood and released. It flies away, carrying the blood. The two birds mirror the two goats of the Day of Atonement (Leviticus 16:7–10): one slain as a sin offering, one sent alive into the wilderness bearing the sins of the people. Here, the healed leper is re-entering community not on their own merit, but because one bird has died and shed its blood, and another bird has carried that blood away — bearing the ritual cleansing the person could never accomplish alone. Jesus is both birds: <em>He is slain, He rises, He ascends.</em> The new life of the believer is only possible because the dying and rising happened first. And like the bird released, we are sent alive and free, dipped in the blood that purchased us (1 Peter 1:18–19 — "redeemed… with the precious blood of Christ").',
        },
        {
          kind: 'reflection',
          id: 'two-birds',
          prompt:
            'The leper couldn&apos;t wash themselves clean or earn their way back. The priest had to provide the ritual, the blood, the public act of restoration. What part of your own "coming home to God" could you never have done alone?',
        },
      ],
    },

    /* ─── Leviticus 14:8–20 — The Cleansed Person and the Eighth Day ──── */
    {
      ref: 'Leviticus 14:8–20',
      title: 'The Cleansed Person: Seven Days and the Eighth Day',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 8,
              spans: [
                t('And he that is to be cleansed shall '),
                hg('wash his clothes', 'washing-clothes'),
                t(', and shave off all his hair, and wash himself in water, that he may be clean: and after that he shall come into the camp, and shall tarry abroad out of his tent '),
                hg('seven days', 'seven-days'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('But it shall be on the seventh day, that he shall shave all the hair off his head and his beard and his eyebrows, even all his hair he shall shave off: and he shall wash his clothes, also he shall wash his flesh in water, and he shall be clean.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And on the '),
                hp('eighth day', 'eighth-day-pattern'),
                t(' he shall take two he lambs without blemish, and one ewe lamb of the first year without blemish, and three tenth deals of fine flour for a meat offering, mingled with oil, and one log of oil.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'washing-clothes',
          html:
            'The person doesn&apos;t simply wash once and return. They wash their clothes, shave completely — a removal of every surface that might have carried disease. The ritual is bodily and public. The camp can see the change. On the seventh day, the ritual is repeated. On the eighth day, they bring offerings.',
        },
        {
          kind: 'commentary',
          id: 'seven-days',
          html:
            'Seven days is the number of completion in Scripture. The healed leper is waiting — outside the tent, yes, but already back in camp. The first boundary has been crossed. What remains is the final mark, the eighth-day offering that seals the re-entry.',
        },
        {
          kind: 'commentary',
          id: 'eighth-day-pattern',
          html:
            'The eighth day is the day of resurrection, the day the world turns new. In the Levitical system, circumcision happened on the eighth day (Genesis 17:12), and here, the re-entry into the community of the holy happens on the eighth day. Jesus rose on the eighth day (first day of the week, the day after the Sabbath). The eighth day is always the day of new beginning.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 11,
              spans: [
                t('And the priest that maketh him clean shall present the man that is to be made clean, and those things, before the LORD, at the door of the tabernacle of the congregation:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the priest shall take one he lamb, and offer him for a trespass offering, and the log of oil, and wave them for a wave offering before the LORD:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And he shall slay the lamb in the place where he shall kill the sin offering and the burnt offering, in the holy place: for as the sin offering is the priest&apos;s, so is the trespass offering: it is most holy:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the priest shall take some of the blood of the trespass offering, and the priest shall put it upon the '),
                hy('tip of the right ear', 'ear-thumb-toe'),
                t(' of him that is to be cleansed, and upon the '),
                hy('thumb of his right hand', 'ear-thumb-toe'),
                t(', and upon the '),
                hy('great toe of his right foot', 'ear-thumb-toe'),
                t(':'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the priest shall take some of the log of oil, and pour it into the palm of his own left hand:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the priest shall dip his right finger in the oil that is in his left palm, and shall sprinkle of the oil with his finger seven times before the LORD:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And of the rest of the oil that is in his palm the priest shall put upon the '),
                hy('tip of the right ear', 'ear-thumb-toe'),
                t(' of him that is to be cleansed, and upon the '),
                hy('thumb of his right hand', 'ear-thumb-toe'),
                t(', and upon the '),
                hy('great toe of his right foot', 'ear-thumb-toe'),
                t(', upon the blood of the trespass offering:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the remnant of the oil that is in the priest&apos;s palm he shall pour upon the head of him that is to be cleansed: and the priest shall make an atonement for him before the LORD.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the priest shall offer the sin offering, and make an atonement for him that is to be cleansed from his uncleanness; and afterward he shall kill the burnt offering:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the priest shall offer the burnt offering and the meat offering upon the altar: and the priest shall make an atonement for him, and he shall be clean.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ear-thumb-toe',
          html:
            'Blood on the ear: you hear God&apos;s word now. Blood on the thumb: what you make with your hands is offered to Him. Blood on the toe: where you walk is set apart. The same three places are anointed with oil. The leper receives the very same anointing a priest receives (Exodus 29:20). To be healed and restored is to become, in their own life, a person set apart for God&apos;s use. The cleansed leper is made a priest in their own house.',
        },
        {
          kind: 'carry',
          html:
            'Restoration to God isn&apos;t a private matter. There is a public moment, a ritual witnessed by the priest and the community, where your healing is marked. There are offerings made on your behalf. There is blood applied to ear and thumb and toe. The message: <em>you are brought back not as a burden, but as someone set apart for God&apos;s work in the world.</em> Your return is not a personal achievement. It is a gift the whole community receives — because you are restored to be useful again, to make things with your hands, to hear with your ears, to walk where you&apos;re sent.',
        },
        {
          kind: 'reflection',
          id: 'eighth-day',
          prompt:
            'What part of you — what you hear, what you make, where you walk — do you sense God wanting to mark as His own right now?',
        },
      ],
    },

    /* ─── Leviticus 14:21–32 — The Poor Who Cannot Afford the Offering ── */
    {
      ref: 'Leviticus 14:21–32',
      title: 'The Poor: When You Can&apos;t Afford the Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 21,
              spans: [
                t('But if he be poor, and cannot get so much; then he shall take one lamb for a trespass offering to be waved, to make an atonement for him, and one tenth deal of fine flour mingled with oil for a meat offering, and a log of oil;'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And two turtledoves, or two young pigeons, such as he is able to get; and the one shall be a sin offering, and the other a burnt offering.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And he shall bring them on the eighth day for his cleansing unto the priest, unto the door of the tabernacle of the congregation, before the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'poor-offering',
          html:
            'The ritual doesn&apos;t cost one price. If you cannot afford the lambs, you bring birds — turtledoves or pigeons. The offering changes, but <em>the ritual doesn&apos;t.</em> The cleansed leper is restored to community on the eighth day whether they are rich or poor. The kindness is absolute.',
        },
        {
          kind: 'carry',
          html:
            'In a culture where worth is often determined by what you can afford, God insists that restoration is not for sale. The poorest person returning from sickness receives the same eighth-day ritual, the same re-entry into community, the same priestly mark on ear and thumb and toe. Your way back to God is never blocked because you don&apos;t have enough. What you have is enough, because God is the one providing the cleansing, not you.',
        },
      ],
    },

    /* ─── Leviticus 14:33–53 — Leprosy in the House ────────────────────── */
    {
      ref: 'Leviticus 14:33–53',
      title: 'Leprosy in the House: Mold and Renewal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 33,
              spans: [
                t('And the LORD spake unto Moses and unto Aaron, saying,'),
              ],
            },
            {
              number: 34,
              spans: [
                t('When ye be come into the land of Canaan, which I give to you for a possession, and I put the plague of leprosy in a house of the land of your possession;'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And he that owneth the house shall come and tell the priest, saying, It seemeth to me there is as it were a plague in the house:'),
              ],
            },
            {
              number: 36,
              spans: [
                t('Then the priest shall command that they empty the house, before the priest go into it to see the plague, that all that is in the house be not made unclean: and afterward the priest shall go in to see the house:'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And he shall look on the plague, and, behold, if the plague be in the walls of the house with hollow strakes, greenish or reddish, which in appearance are lower than the wall;'),
              ],
            },
            {
              number: 38,
              spans: [
                t('Then the priest shall go out of the house to the door of the house, and shut up the house seven days:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'house-plague',
          html:
            'Leprosy in a house is a strange concept to modern ears, but in the ancient world, mold and mildew were persistent plagues — places where moisture collected, wood rotted, and the structure weakened. The Law treats the house itself as needing the same ritual cleansing as a person. A home is a living thing, a space where the community gathers. It too can become unclean. And like a person, it can be healed and restored.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 39,
              spans: [
                t('And the priest shall come again the seventh day, and shall look: and, behold, if the plague be spread in the walls of the house;'),
              ],
            },
            {
              number: 40,
              spans: [
                t('Then the priest shall command that they take away the stones in which the plague is, and they shall cast them into an unclean place without the city:'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And he shall cause the house to be scraped within round about, and they shall pour out the dust that they scrape off without the city into an unclean place:'),
              ],
            },
            {
              number: 42,
              spans: [
                t('And they shall take other stones, and put them in the place of those stones; and he shall take other morter, and shall plaister the house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'house-repair',
          html:
            'The healing of the house requires removal — infected stones taken out, the house scraped bare. Only then does rebuilding begin. New stones, new plaster. The house is not just cleaned; it is rebuilt. Like the person, the home is made new through a ritual of separation and restoration.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 43,
              spans: [
                t('And if the plague come again, and break out in the house, after that he hath taken away the stones, and after he hath scraped the house, and after it is plastered;'),
              ],
            },
            {
              number: 44,
              spans: [
                t('Then the priest shall come and look: and, behold, if the plague be spread in the house, it is a fretting leprosy in the house: it is unclean.'),
              ],
            },
            {
              number: 45,
              spans: [
                t('And he shall break down the house, the stones of it, and the timber thereof, and all the morter of the house; and he shall carry them forth out of the city into an unclean place.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'house-torn-down',
          html:
            'Sometimes the mold returns. The rot is deeper than it appeared. When that happens, the house cannot be salvaged. It must be torn down completely. Even in that destruction, there is mercy: the people are told clearly, unambiguously. They are not left guessing. They are not held in a house that cannot be healed.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 46,
              spans: [
                t('Moreover he that goeth into the house all the while that it is shut up shall be unclean until the even.'),
              ],
            },
            {
              number: 47,
              spans: [
                t('And he that lieth in the house shall wash his clothes; and he that eateth in the house shall wash his clothes.'),
              ],
            },
            {
              number: 48,
              spans: [
                t('And if the priest shall come in, and look upon it, and, behold, the plague hath not spread in the house, after the house was plastered: then the priest shall pronounce the house clean, because the plague is healed.'),
              ],
            },
            {
              number: 49,
              spans: [
                t('And he shall take to cleanse the house '),
                hg('two birds', 'house-birds'),
                t(', and '),
                hg('cedar wood', 'house-cedar'),
                t(', and '),
                hg('scarlet', 'house-cedar'),
                t(', and '),
                hg('hyssop', 'house-cedar'),
                t(':'),
              ],
            },
            {
              number: 50,
              spans: [
                t('And he shall kill one of the birds in an earthen vessel over running water:'),
              ],
            },
            {
              number: 51,
              spans: [
                t('And he shall take the cedar wood, and the hyssop, and the scarlet, and the living bird, and dip them in the blood of the slain bird, and in the running water, and sprinkle the house seven times:'),
              ],
            },
            {
              number: 52,
              spans: [
                t('And he shall cleanse the house with the blood of the bird, and with the running water, and with the living bird, and with the cedar wood, and with the hyssop, and with the scarlet:'),
              ],
            },
            {
              number: 53,
              spans: [
                t('But he shall let go the living bird out of the house into the open field: and so shall he make an atonement for the house, and it shall be clean.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'house-birds',
          html:
            'The cleansing of the house mirrors the cleansing of the person — two birds, one slain over running water, one released alive dipped in blood. Cedar, scarlet, hyssop. The ritual is the same. The house, after it is healed and rebuilt, is brought back into the community with the exact grace extended to the healed leper. A home is holy. The places where we gather, where families live, matter to God.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes a relationship, a habit, a way of life in your house becomes infected. Small at first — a word spoken in anger, a silence that shouldn&apos;t be there, something you let take root. If you don&apos;t address it, the rot spreads. God&apos;s law is clear: sometimes you need to break something down and rebuild it. Sometimes you need help to see how deep the damage is. But the message of this chapter is that even a house in ruins can be made holy again. The same ritual of two birds and blood and new stones. God does not abandon homes or families beyond healing. The eighth day comes for houses too.',
        },
        {
          kind: 'reflection',
          id: 'house-heal',
          prompt:
            'Is there a relationship, a habit, a space in your life where rot has been quietly spreading? What would it look like to let God begin to cleanse and rebuild it?',
        },
      ],
    },

    /* ─── Leviticus 14:54–57 — Summary ────────────────────────────────── */
    {
      ref: 'Leviticus 14:54–57',
      title: 'The Law and the Kindness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 54,
              spans: [
                t('This is the law for all manner of plague of leprosy, and scall,'),
              ],
            },
            {
              number: 55,
              spans: [
                t('And for the leprosy of a garment, and of a house,'),
              ],
            },
            {
              number: 56,
              spans: [
                t('And for a rising, and for a scab, and for a bright spot:'),
              ],
            },
            {
              number: 57,
              spans: [
                t('To teach when it is unclean, and when it is clean: this is the law of leprosy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'closing-law',
          html:
            'The chapter ends not with a warning or a threat, but with a summary: <em>this is the law of leprosy.</em> In other words: <em>here is how you come home. Here is how you are restored.</em> The Law is not meant to be a prison. It is meant to be a pathway. God has shown His people exactly how the sick can heal, how the isolated can re-enter, how a house can be made clean, how an eighth day can come. The path is marked. All that remains is to walk it.',
        },
        {
          kind: 'christ',
          id: 'christ-kindness',
          title: 'Christ Connection — The Way Home Is Shown',
          html:
            'James 5:14–16 picks up the thread: "Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord... Confess your faults one to another, and pray one for another, that ye may be healed." The cleansing ritual of Leviticus is not abolished in the New Testament — it is localized and simplified, but the principle remains. <em>Healing is not a solitary thing. Restoration happens among witnesses. The community brings you home.</em> Jesus moves through His ministry making things clean — touching the leper (Matthew 8:3), who then can return to the priest. The eighth day and the resurrection day are the same day. New life. Re-entry. The pathway home made visible.',
        },
        {
          kind: 'carry',
          html:
            'If you are returning from exile — from shame, from sickness, from a season when you could not be touched — take heart. God has always known this return would be necessary. He has always had a ritual for it. There will be a priest, witnesses, an offering made on your behalf, and blood applied to mark you as set apart. You will be numbered again among the clean. You will be brought back not because you earned it, but because someone else bled for you, and the living bird was released to carry that blood away. Your eighth day is coming.',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'God prescribed a clear, public ritual for the leper&apos;s return: two birds, blood, witnesses, and the eighth-day re-entry into community. Healing was not enough. Restoration required grace made visible.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 14 · Study Guide',
  },

  hasHebrew: true,
};
