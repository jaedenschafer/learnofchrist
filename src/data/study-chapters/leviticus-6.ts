import { hp, hy, hg, t, type RichChapterContent } from './types';

export const LEVITICUS_6: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 6,

  estimatedMinutes: { beginner: 9, intermediate: 13, deep: 16 },
  intros: [
    'Leviticus 6 opens with the trespass offering — what happens when you sin against another person. You did not sin against God abstractly; you lied to your neighbor, stole from him, or deceived him. And the text says clearly: you must first return what you took, plus one-fifth more. Only then do you bring your offering to God. The pattern is horizontal before vertical — reconciliation with the wronged person must come before reconciliation with God.',
    'The chapter then shifts to priestly instructions: how to tend the fire on the altar (it never goes out), how to handle the grain offering (it is wholly burned as a memorial), and how the priest offers his own daily sacrifice — split in half, morning and evening. None of this is theoretical. Every ritual touches the priest&apos;s hands, shapes his day, reminds him that certain things are holy. And for the reader on this side of the cross, the perpetual fire points to One whose intercession never stops, and the complete burning of the grain points to a self-offering that holds nothing back.',
  ],

  sections: [
    /* ─── Leviticus 6:1–5 — The Trespass Offering ────────────────────── */
    {
      ref: 'Leviticus 6:1–5',
      title: 'Sins Against People First',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [t('And the LORD spake unto Moses, saying,')],
            },
            {
              number: 2,
              spans: [
                t('If a soul sin, and commit a trespass against the LORD, and '),
                hy('lie unto his neighbour', 'lev6-lie'),
                t(' in that which was delivered him to keep, or in fellowship, or in a thing taken away by violence, or hath deceived his neighbour;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-lie',
          html:
            'The law names five concrete wrongs: lying to a neighbor about something entrusted to you, theft, violence, deception. These are not ceremonial errors — they are relational breaches. And the text frames them as trespasses &ldquo;against the LORD,&rdquo; even though they were committed against people. God takes personally what we do to each other.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 3,
              spans: [
                t('Or all that about which he hath sworn falsely; he shall even '),
                hg('restore it in the principal, and shall add the fifth part more thereto', 'lev6-restore'),
                t(', and give it unto him to whom it appertaineth, in the day of his trespass offering.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-restore',
          html:
            'The law is not symbolic. You return what you stole, plus twenty percent. You do it <em>before</em> the trespass offering. The law understands: making a ritual gesture toward God means nothing if the person you wronged still lacks what you took. Repentance has a material face.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 4,
              spans: [
                t('And he shall bring his trespass offering unto the LORD, a ram without blemish out of the flock, with thy estimation, for a trespass offering, unto the priest:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the priest shall make an atonement for him before the LORD: and '),
                hp('it shall be forgiven him', 'christ-both-ways'),
                t(' for any thing of all that he hath done in his trespass.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-atonement',
          html:
            'Forgiveness arrives, but only after the debt is paid. The structure of Leviticus 6 is rigorous: restitution to the person, then the offering to God. Both are required. Both matter.',
        },

        {
          kind: 'christ',
          id: 'christ-both-ways',
          title: 'Christ Connection — Reconciliation Both Ways',
          html:
            'Matthew 5:23–24: &ldquo;Therefore if thou bring thy gift to the altar, and there rememberest that thy brother hath ought against thee; Leave there thy gift before the altar, and go thy way; first be reconciled to thy brother, and then come and offer thy gift.&rdquo; Jesus is echoing Leviticus 6. The vertical is not a substitute for the horizontal. The pattern set in the trespass offering runs all the way through to the Sermon on the Mount — and to the cross, where Christ&apos;s intercession covers both our broken relationships and our broken covenant with God.',
        },

        {
          kind: 'carry',
          html:
            'If you are carrying an unresolved wrong — a debt unpaid, a truth withheld, a theft of credit or time — today&apos;s the day the law presses on you: you cannot clean this up with prayer alone. Call the person. Return what you took, plus interest. Say the thing you&apos;ve been hiding. The altar will still be there. But God&apos;s forgiveness will not feel clean until the human one does.',
        },

        {
          kind: 'reflection',
          id: 'lev6-restitution',
          prompt: 'Who is still waiting for you to return something — money, honesty, credit, peace? What would restitution look like?',
        },
      ],
    },

    /* ─── Leviticus 6:8–11 — The Perpetual Fire ────────────────────── */
    {
      ref: 'Leviticus 6:8–11',
      title: 'The Fire That Never Goes Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 8,
              spans: [
                t('And the priest shall put on his linen garment, and his linen breeches shall he put upon his flesh, and take up the ashes which the fire hath consumed with the burnt offering on the altar, and he shall put them beside the altar.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And he shall put off his garments, and put on other garments, and carry forth the ashes without the camp unto a clean place.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-ashes',
          html:
            'Even the ashes have a protocol. The priest removes them in linen, changes his clothes, carries them outside the camp. Nothing is careless in the sanctuary. Even waste is treated with reverence.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 10,
              spans: [
                t('And the fire upon the altar shall be kept burning upon it; it shall not be put out: and the priest shall burn wood on it every morning, and lay the burnt offering in order upon it; and he shall burn thereon the fat of the peace offerings.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And '),
                hy('the fire shall ever be burning upon the altar', 'aish-tamid'),
                t('; it shall never go out.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'aish-tamid',
          title: 'Aish Tamid — &ldquo;perpetual fire&rdquo;',
          script: 'אֵשׁ תָּמִיד',
          translit: '<strong>aish tamid</strong> · a fire that is always burning, never quenched',
          description:
            '[res:sefaria-aish-tamid] This is not a practical instruction alone; it is a theological claim. The altar is never dark. The work of atonement is never finished. Someone is always praying, always tending, always making a way for the people to draw near to God.',
        },

        {
          kind: 'commentary',
          id: 'lev6-perpetual',
          html:
            'The fire never goes out. Every morning, fresh wood. Every offering, the flames rise again. No day passes without the altar burning. This is what it cost to make a people holy — constant, perpetual tending. Someone had to be awake. Someone had to feed the flame.',
        },

        {
          kind: 'christ',
          id: 'christ-perpetual',
          title: 'Christ Connection — Intercession That Never Sleeps',
          html:
            '[res:intertextual-hebrews-7] Hebrews 7:25: &ldquo;Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for us.&rdquo; The fire points to Jesus. He is the high priest tending the altar of heaven right now, in this moment, always making a way. [res:sbl-perpetual-fire-priesthood] The perpetual flame of the Old Testament tabernacle pointed to the unceasing intercession of Christ — always awake, always praying, never taking His eyes off you.',
        },

        {
          kind: 'carry',
          html:
            'Whatever you are carrying today — a fear, a wound, a sin, a name you are praying for — is being held before God right now by Someone who never sleeps. The fire is already burning. You are already being prayed for. You do not have to make yourself clean enough first; you only have to come close and let the fire do what fire does.',
        },

        {
          kind: 'reflection',
          id: 'lev6-fire',
          prompt: 'What would change in you if you truly believed that someone — Jesus — is interceding for you right now, this very moment, without ceasing?',
        },

        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Leviticus 6:12–16 — The Grain Offering ────────────────────── */
    {
      ref: 'Leviticus 6:12–16',
      title: 'The Meal That Is Wholly Burned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 12,
              spans: [
                t('And this is the law of the meat offering: the sons of Aaron shall offer it before the LORD, before the altar.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And he shall take therefrom his handful of the flour of the meat offering, and of the oil thereof, and all the frankincense which is upon the meat offering, and shall '),
                hg('burn it upon the altar for a sweet savour', 'lev6-memorial'),
                t(', even the memorial of it, unto the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-memorial',
          html:
            'A handful — not all of it. The priest takes a small portion and burns it. The memorial rises as smoke. But notice: only that handful is burned; the rest (verse 14) is eaten by the priests. The offering is split: some for God, some for the priests. Some for the vertical covenant, some for the horizontal sustenance of the priesthood.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 14,
              spans: [
                t('And the remainder thereof shall Aaron and his sons eat: with unleavened bread shall it be eaten in the holy place; in the court of the tabernacle they shall eat it.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('It shall not be baken with leaven. I have given it unto them for their portion of my offerings made by fire; it is most holy, as is the sin offering, and as the trespass offering.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-eaten',
          html:
            'Even the portion the priests eat is kept holy. It is eaten in the sanctuary court, not carried home. No leaven — no corruption, no rising that puffs up. The grain offering is the poorest man&apos;s sacrifice, yet it carries the same weight as the costlier ones. God counts the small act as holy as the grand one.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 16,
              spans: [
                t('All the males among the children of Aaron shall eat of it. It shall be a statute for ever in your generations concerning the offerings of the LORD made by fire: every one that toucheth them shall be holy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-holiness-contagious',
          html:
            'Holiness is contagious in Leviticus. If you touch the offering, you are holy. Not by virtue of your own worthiness, but by contact with what belongs to God. A person can become holy just by handling holy things.',
        },

        {
          kind: 'christ',
          id: 'christ-wholly-given',
          title: 'Christ Connection — Complete Self-Offering',
          html:
            'The grain offering is voluntary, given by the poor who could not afford an animal sacrifice. It is flour, oil, and incense — ingredients that cost little but still require the giver to break and pour. And that handful that is burned rises as a sweet smell to God, while the rest sustains the priesthood. Jesus offered Himself wholly — not a handful held back for Himself, not a portion kept safe. Everything poured out. The disciples said, &ldquo;He hath poured out his soul unto death&rdquo; (Isaiah 53:12). The grain offering was always pointing to that.',
        },

        {
          kind: 'carry',
          html:
            'The grain offering is the widow&apos;s mite raised to the level of the bull and the ram. Your simple giving — your time, your attention, your ordinary work poured out — is holy as you offer it. You do not need to be impressive. You need to be whole. Pour it out, the whole of it, and let God decide what part to remember and what part to use to sustain His people.',
        },

        {
          kind: 'reflection',
          id: 'lev6-grain',
          prompt: 'What small, costly thing do you have — time, attention, presence — that you are holding back instead of pouring wholly into what God is asking?',
        },
      ],
    },

    /* ─── Leviticus 6:17–21 — The Priest&apos;s Daily Offering ──────────── */
    {
      ref: 'Leviticus 6:17–21',
      title: 'Morning and Evening, Split in Two',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 17,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('This is the offering of Aaron and of his sons, which they shall offer unto the LORD in the day when he is anointed; The tenth part of an ephah of fine flour for a meat offering perpetual, '),
                hy('half of it in the morning, and half thereof at night', 'lev6-half-half'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'lev6-half-half',
          title: 'Minchah — &ldquo;grain offering, tribute&rdquo;',
          script: 'מִנְחָה',
          translit: '<strong>minchah</strong> · an offering, a gift of flour and oil',
          description:
            'The priest&apos;s anointing day gives him a permanent sacrifice: the same grain offering, split into two parts, one at sunrise and one at sunset. Every day of his priesthood, he makes this split offering. His own work of atonement never stops.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 19,
              spans: [
                t('In a pan it shall be made with oil; and when it is baken, thou shalt bring it: and the baken pieces of the meat offering shalt thou offer for a sweet savour unto the LORD.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the priest of his sons that is anointed in his stead shall offer it: it is a statute for ever unto the LORD; it shall be wholly burnt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-wholly-burnt',
          html:
            'Notice: the priest&apos;s offering is <em>wholly burnt</em> (verse 20), while the common grain offering gives the priests a portion to eat (verses 14–16). The priest cannot eat his own daily offering. It is entirely for God. His sustenance comes through other people&apos;s sacrifices, not his own. He stands between the people and God, and his own offering is a pure gift upward.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 21,
              spans: [
                t('For every meat offering for the priest shall be wholly burnt: it shall not be eaten.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-no-eating',
          html:
            'A priest cannot feed himself from his own ministry. He stands before God in perpetual self-surrender. The law is trying to form a kind of man: one who gives without holding back, who stands in the gap without counting the cost to himself.',
        },

        {
          kind: 'christ',
          id: 'christ-morning-evening',
          title: 'Christ Connection — Offering Split Between the Eternities',
          html:
            'The priest&apos;s offering is split in half — morning and evening, beginning and end of every day. Jesus sits at the right hand of God and makes intercession, and that intercession spans every moment. He is always offering Himself — to the Father in the morning light of His exaltation, and in the evening of every day we live. The whole of His work is a perpetual self-giving. Like the priest, He does not eat from His own offering; every part of it is for us and for the Father.',
        },

        {
          kind: 'carry',
          html:
            'If you have ever stood before God empty-handed, knowing you had nothing to give except yourself, you have felt the shape of the priest&apos;s offering. The law asks a priest to give his grain twice a day and eat none of it. That is not the shape of your life — but it is the shape of Someone&apos;s. Jesus&apos; priesthood means every moment of His intercession is a gift that does not return to Himself. He is always offering. And because He is, you are fed.',
        },

        {
          kind: 'reflection',
          id: 'lev6-morning-evening',
          prompt: 'What would change in your prayer life if you prayed like the priest&apos;s offering — split gift to God at the start of the day and end of the day, holding nothing back?',
        },
      ],
    },

    /* ─── Leviticus 6:22–28 — The Sin Offering ────────────────────────── */
    {
      ref: 'Leviticus 6:22–28',
      title: 'Holiness That Spreads Through Contact',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 22,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Speak unto Aaron and to his sons, saying, This is the law of the sin offering: In the place where the burnt offering is killed shall the sin offering be killed before the LORD: '),
                hg('it is most holy', 'lev6-most-holy'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-most-holy',
          html:
            'The sin offering is the most holy. It is slaughtered in the same place as the burnt offering, marking it as serious and sacred. You do not handle sin lightly in Leviticus. Its remedy is surrounded by ritual weight.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 24,
              spans: [
                t('The priest that offereth it for sin shall eat it: in the holy place shall it be eaten, in the court of the tabernacle.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Whatsoever shall touch the flesh thereof shall be holy: and when there is sprinkled of the blood thereof upon any garment, thou shalt wash that whereon it was sprinkled in the holy place.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-touch-holy',
          html:
            'Everything that touches the sin offering becomes holy. Even the vessels used to cook it must be scoured and rinsed. Holiness is transferable — it spreads through contact. You cannot handle reconciliation casually. You become what you touch.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 26,
              spans: [
                t('But the earthen vessel wherein it is sodden shall be broken: and if it be sodden in a brasen pot, it shall be both scoured, and rinsed with water.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('All the males among the priests shall eat thereof: it is most holy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-earthen-vessel',
          html:
            'An earthen pot cannot be made clean again — it must be broken. A bronze pot can be scoured. The text distinguishes between vessels: some things, once they have touched holiness, must be destroyed; others can be cleansed and reused. Not every vessel is strong enough to hold what holy work requires.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 28,
              spans: [
                t('And the sin offering, whereof any of the blood is brought into the tabernacle of the congregation to make reconciliation in the holy place, shall not be eaten: it shall be burnt in the fire.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev6-burnt-not-eaten',
          html:
            'Some sin offerings are eaten by the priests (verse 24), but when the blood enters the holy place itself, the entire offering is burned. When the weight of sin reaches that far, there is no partial measure. The whole must be given over to fire.',
        },

        {
          kind: 'christ',
          id: 'christ-sin-holiness',
          title: 'Christ Connection — The Holy One Who Became Sin',
          html:
            '2 Corinthians 5:21: &ldquo;For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.&rdquo; Jesus entered the most holy place not to be cleansed by the ritual, but to <em>be</em> the ritual. He took on the weight of sin and let the fire of God&apos;s judgment fall on Him wholly. And in His becoming sin, He made us holy — everyone who touches Him by faith becomes what He is.',
        },

        {
          kind: 'carry',
          html:
            'Holiness spreads through contact in Leviticus, and it still does. You cannot handle Christ — truly turn toward Him, truly ask His forgiveness, truly let Him reshape you — without becoming holy yourself. You touch Him, and you change. Not because you earned it, not because you cleaned yourself first, but because you have come into contact with the One who is holy.',
        },

        {
          kind: 'reflection',
          id: 'lev6-sin-offering',
          prompt: 'What part of your shame or your sin have you been hiding from God because you thought it was too heavy, too dark, for Him to handle? What if He has already made provision for exactly that?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'If you have wronged another, restore what you took and add a fifth more. Then bring your offering. The fire on the altar never goes out. Someone is always praying for you.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 6 · Study Guide',
  },

  resources: [
    {
      id: 'sbl-perpetual-fire-priesthood',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Perpetual Fire and Priestly Intercession',
      url: 'https://www.bibleodyssey.org/en/passages/article/priesthood-and-intercession',
      description: 'Study of the continuously burning altar fire as symbol of ceaseless priestly intercession and God\'s unending presence.',
    },
    {
      id: 'sefaria-aish-tamid',
      kind: 'archive',
      source: 'Sefaria',
      label: 'Aish Tamid (Perpetual Fire) in Jewish Tradition',
      url: 'https://www.sefaria.org/Leviticus.6',
      description: 'Rabbinic commentary on the perpetual fire on the altar and its spiritual significance for the ongoing covenant.',
    },
    {
      id: 'intertextual-hebrews-7',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Hebrews 7:25 — Jesus\' Unceasing Intercession',
      url: 'https://intertextual.logos.com/',
      description: 'Connection between the perpetual priestly fire and Christ\'s eternal intercession for the saints.',
    },
  ],

  hasHebrew: true,
};
