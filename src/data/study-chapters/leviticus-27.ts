import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 27 — The closing chapter of Leviticus. Rules for vows, dedications,
 * and the tithe. How to redeem a person, animal, house, or field dedicated to the LORD.
 * Every tenth animal and grain belongs to God. The redemption-by-substitute principle
 * finds its fulfillment in Christ paying the price for us (2 Cor 8:5, Rom 12:1).
 */
export const LEVITICUS_27: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 27,

  intros: [
    'After the intensity of Leviticus 26 — with its blessings and curses written in fire — Leviticus closes with a practical, almost mundane chapter: what happens when you make a vow? How much does it cost to keep one? Can you buy your way out of a promise you made to God? It feels like a legal appendix after all that drama, but it&apos;s beautiful. God provides a way to fulfill rash or impossible vows through redemption. There is always a substitute price.',
    'The chapter returns three times to one principle: if you dedicate something to the Lord and then change your mind, you can redeem it — buy it back — by paying a set price. A person, an animal, a house, a field. Each has its value. And then the chapter closes with the tithe: every tenth animal, every tenth grain belongs to God by right. Not an offer. Not a suggestion. One out of ten, always, for the Lord.',
    'For the reader who has followed Israel through Leviticus — through the sacrifices, the clean and unclean, the Day of Atonement, the festivals — this closing word is both sobering and gracious. Your vows matter. They cost something. But God has already named the price. And the tithe principle, carried forward into the New Testament, reminds us that the first and the best belong not to us, but to Him.',
  ],

  sections: [
    /* ─── Leviticus 27:1–8 — Vows of Persons ─────────────────────────────── */
    {
      ref: 'Leviticus 27:1–8',
      title: 'Vows of Persons',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Speak unto the children of Israel, and say unto them, When a man shall '),
                hp('make a singular vow', 'lev27-vow'),
                t(', the '),
                hy('persons shall be for the Lord', 'lev27-neder'),
                t(' by thy estimation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev27-vow',
          html:
            'A vow is a solemn promise made to God — usually in a moment of crisis or devotion. If you made a vow to dedicate yourself or your family member to the Lord&apos;s service, you could later redeem (buy back) that person at a set price. The vow was taken seriously, but God provided an escape route for those who made promises beyond their ability to keep.',
        },
        {
          kind: 'hebrew',
          id: 'lev27-neder',
          title: 'Neder — "vow"',
          script: 'נֶדֶר',
          translit: '<strong>neder</strong> · a solemn vow or promise to God',
          description:
            'A neder is not casual. It is a binding promise made before the Lord, often invoking His name. Breaking a neder brings judgment. But the law also permits redemption — paying a price to reclaim what was vowed.',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 3,
              spans: [
                t('And thy estimation shall be of the male from twenty years old even unto sixty years old, even thy estimation shall be fifty shekels of silver, after the shekel of the sanctuary.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And if it be a female, then thy estimation shall be thirty shekels.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And if it be from five years old even unto twenty years old, then thy estimation shall be of the male twenty shekels, and for the female ten shekels.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And if it be from a month old even unto five years old, then thy estimation shall be of the male five shekels of silver, and for the female thy estimation shall be three shekels of silver.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And if it be from sixty years old and above; if it be a male, then thy estimation shall be fifteen shekels, and for the female ten shekels.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But if he be poorer than thy estimation, then he shall present himself before the priest, and the priest shall value him; according to his ability that vowed shall the priest value him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev27-pricing',
          html:
            'The prices vary by age and gender. A man in his prime — twenty to sixty — is worth fifty shekels. A woman, thirty. A child, less. An elderly person, less still. The pattern is practical: value is measured by productive years. But notice verse 8: if a person cannot afford the price, the priest lowers it. The door is never slammed. God does not demand a redemption price beyond what a person can pay.',
        },
        {
          kind: 'carry',
          html:
            'Every vow we make — to God, to ourselves, to others — has a cost. Sometimes that cost is our time, sometimes our comfort, sometimes our pride. But the principle here is that God does not ask for more than we can give. When a vow becomes impossible, His law provides a way forward. In your own life, are there promises you have made that now feel unbearable? The pattern of Scripture is that there is always a redemption path — not an escape from responsibility, but a way to make things right.',
        },
        {
          kind: 'reflection',
          id: 'lev27-vows',
          prompt:
            'What vow or commitment have you made to God that now feels heavy? What would it mean to either keep it faithfully or, with integrity, to accept the cost of redeeming yourself from it?',
        },
      ],
    },

    /* ─── Leviticus 27:9–13 — Vows of Animals ──────────────────────────────── */
    {
      ref: 'Leviticus 27:9–13',
      title: 'Vows of Animals',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 9,
              spans: [
                t('And if it be a beast, whereof men bring an offering unto the Lord, all that any man giveth of such unto the Lord shall be '),
                hy('holy', 'lev27-holy'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('He shall not alter it, nor change it, a good for a bad, or a bad for a good: and if he shall at all change beast for beast, then it and the exchange thereof shall be holy.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('But if any unclean beast, of which they do not offer a sacrifice unto the Lord, then he shall cause the beast to stand before the priest:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the priest shall value it, whether it be good or bad: as thou valuest it, who art the priest, so shall it be.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('But if he will at all '),
                hp('redeem it', 'lev27-redeem'),
                t(', then he shall add a fifth part thereof above thy estimation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev27-holy',
          html:
            'Once an animal is dedicated to the Lord, it becomes holy — set apart. You cannot swap a good animal for a bad one and keep them both; the whole gift belongs to God. The principle is absolute: what you give to God cannot be divided or taken back lightly.',
        },
        {
          kind: 'commentary',
          id: 'lev27-redeem',
          html:
            'To redeem means to buy back. If you vowed an animal but later cannot let it go, you can recover it by paying the priest&apos;s valuation plus one-fifth. It costs more to get out of the vow than the animal itself is worth. This is the weight of a broken promise — redemption is possible, but it is expensive.',
        },
        {
          kind: 'carry',
          html:
            'The principle of redemption runs through all of Scripture: if you have bound yourself by a vow, the bond can be broken, but never cheaply. God honors the seriousness of a promise. The New Testament echoes this when Paul writes that the early church members "first gave their own selves to the Lord" (2 Cor 8:5). True giving always costs something. When we come to God with empty hands or half-hearted promises, we are not offering Him much. The point is not to shame us, but to invite us to give what actually matters: ourselves, fully, and at cost.',
        },
        {
          kind: 'reflection',
          id: 'lev27-animals',
          prompt:
            'What have you dedicated to God in word but not fully in deed? What would change if you either committed to it fully or owned the cost of stepping back?',
        },
      ],
    },

    /* ─── Leviticus 27:14–15 — Vows of Houses ────────────────────────────── */
    {
      ref: 'Leviticus 27:14–15',
      title: 'Vows of Houses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 14,
              spans: [
                t('And when a man shall sanctify his house to be holy unto the Lord, then the priest shall estimate it, whether it be good or bad: as the priest shall estimate it, so shall it stand.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And if he that sanctified it will redeem his house, then he shall add the fifth part of the money of thy estimation unto it, and it shall be his.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev27-house',
          html:
            'A house — a home, a shelter — could be dedicated to the Lord. Perhaps in a moment of thanksgiving or desperation, someone vowed their house. The law allows redemption, but again, it costs more to take it back than it was initially worth. A house is not a small thing to release and reclaim.',
        },
        {
          kind: 'carry',
          html:
            'Our homes, our families, our security — these are among the hardest things to surrender. Yet Israel is invited to do exactly that: to sanctify a house, meaning to place it under the Lord&apos;s claim. Even in the ancient context, the law recognizes that such a vow might become impossible to keep; redemption is available. But the cost is a reminder that nothing — not our homes, not our possessions, not our comfort — ultimately belongs to us. We hold everything in trust.',
        },
      ],
    },

    /* ─── Leviticus 27:16–25 — Vows of Fields ────────────────────────────── */
    {
      ref: 'Leviticus 27:16–25',
      title: 'Vows of Fields',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 16,
              spans: [
                t('And if a man shall sanctify unto the Lord some part of a field of his possession, then thy estimation shall be according to the seed thereof: an homer of barley seed shall be valued at fifty shekels of silver.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('If he sanctify his field from the year of jubile, according to thy estimation it shall stand.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('But if he sanctify his field after the jubile, then the priest shall reckon unto him the money according to the years that remain, even unto the year of the jubile of jubilees, and an abatement shall be made from thy estimation.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And if he that sanctified the field will in any wise redeem it, then he shall add the fifth part of the money of thy estimation unto it, and it shall be assured to him.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And if he will not redeem the field, or if he have sold the field to another man, it shall not be redeemed any more.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('But the field, when it goeth out in the jubile, shall be holy unto the Lord, as a field devoted; the possession thereof shall be the priest&apos;s.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And if a man sanctify unto the Lord a field which he hath bought, which is not of the fields of his possession;'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Then the priest shall reckon unto him the worth of thy estimation, even unto the year of the jubile: and he shall give thine estimation in that day, as a holy thing unto the Lord.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('In the year of the jubile the field shall return unto him of whom it was bought, even to him to whom the possession of the land did belong.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And all thy estimations shall be according to the shekel of the sanctuary: twenty gerahs shall be a shekel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev27-field',
          html:
            'A field is tied to livelihood and inheritance. Vowing a field was a serious matter — it meant releasing your livelihood to the Lord. The law accounts for the Jubilee year, when all land reverts anyway. If a man vows a field at the start of a Jubilee cycle, the price is high. If he vows it near the end, the price is lower — because the land will return to him in just a few years anyway. The law is precise and fair.',
        },
        {
          kind: 'commentary',
          id: 'lev27-jubilee-return',
          html:
            'If a field is vowed and never redeemed, it becomes the priest&apos;s possession permanently — even if it was sold to someone else later. The Jubilee principle is woven throughout: no land sale is truly permanent in Israel. Every fifty years, the land resets. God owns the land; Israel only holds it in trust.',
        },
        {
          kind: 'carry',
          html:
            'Our livelihoods feel permanent until we recognize they are not. A job, a business, the work of our hands — all are held on loan. Israel&apos;s law invited her to regularly remember this by Jubilee, and more often by the principle of vows and redemption. In your own life, what livelihood, what security, have you held too tightly? What would change if you genuinely understood that you are stewarding, not owning?',
        },
        {
          kind: 'reflection',
          id: 'lev27-fields',
          prompt:
            'What do you depend on for security that you have never truly surrendered to God? What would it feel like to name it as His, even while you work it?',
        },
      ],
    },

    /* ─── Leviticus 27:26–34 — The Tithe ─────────────────────────────────── */
    {
      ref: 'Leviticus 27:26–34',
      title: 'The Tithe — The Lord&apos;s Portion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 26,
              spans: [
                t('Only the '),
                hy('firstlings', 'lev27-firstborn'),
                t(' of the beasts, which should be the Lord&apos;s firstling, no man shall sanctify; whether it be ox, or sheep: it is the Lord&apos;s.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And if it be of an unclean beast, then he shall redeem it according to thine estimation, and shall add a fifth part of it thereto: or if it be not redeemed, then it shall be sold according to thy estimation.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Notwithstanding, no devoted thing, that a man shall devote unto the Lord of all that he hath, both man and beast, and of the field of his possession, shall be sold or redeemed: every devoted thing is '),
                hp('most holy unto the Lord', 'lev27-cherem'),
                t('.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('None devoted, which shall be devoted of men, shall be redeemed; but shall surely be put to death.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And all the '),
                hg('tithe of the land', 'lev27-tithe-land'),
                t(', whether of the '),
                hg('seed of the land', 'lev27-tithe-land'),
                t(', or of '),
                hg('the fruit of the tree', 'lev27-tithe-land'),
                t(', is the Lord&apos;s: it is '),
                hg('holy unto the Lord', 'lev27-tithe-land'),
                t('.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And if a man will at all redeem ought of his tithes, he shall add thereto the fifth part thereof.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And concerning the tithe of the herd, or of the flock, even of whatsoever passeth under the rod, the tenth shall be holy unto the Lord.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('He shall not search whether it be good or bad, neither shall he change it: and if he change it at all, then both it and the change thereof shall be holy; it shall not be redeemed.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('These are the commandments, which the Lord commanded Moses for the children of Israel in mount Sinai.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'lev27-firstborn',
          title: 'Bichrah — "firstborn" or "firstling"',
          script: 'בְכִירָה',
          translit: '<strong>bichrah</strong> · firstborn, the first and best of offspring',
          description:
            'The firstborn animal already belongs to God by right — you cannot vow it, because it was never yours to give. Everything that comes first to you already bears God&apos;s claim.',
        },
        {
          kind: 'hebrew',
          id: 'lev27-cherem',
          title: 'Cherem — "devoted thing"',
          script: 'חֵרֶם',
          translit: '<strong>cherem</strong> · that which is devoted or consecrated irrevocably',
          description:
            'A cherem is not just dedicated; it is irrevocably set apart. Unlike a regular vow, which can be redeemed, a cherem is permanent. It belongs entirely to God and can never be reclaimed or sold.',
        },
        {
          kind: 'commentary',
          id: 'lev27-tithe-land',
          html:
            'And now, in the final stroke of the chapter, comes the tithe. One out of every ten — one out of every ten animals born in the flock, one out of every ten sheaves of grain, one out of every ten fruits on the tree. This is not a donation. This is not an option. This is a law. Every tenth belongs to the Lord. Not your seventh or your fifth — your tenth. One for you, nine for God, then start counting again.',
        },
        {
          kind: 'christ',
          id: 'christ-tithe',
          title: 'Christ Connection — Total Surrender',
          html:
            'In the New Testament, Paul writes of the Macedonian churches: "they first gave their own selves to the Lord" (2 Cor 8:5). Not their tenth. Not their surplus. Themselves. And Romans 12:1 invites us to "present your bodies a living sacrifice, holy, acceptable unto God." The tithe principle continues, but it finds its deepest meaning in total surrender. Christ, who paid the price of redemption for us, invites us to pay the price of gratitude by offering not one-tenth, but ourselves.',
        },
        {
          kind: 'carry',
          html:
            'The tithe is the bottom line. Not the peak of generosity, but the floor. One out of ten, every time, no exceptions. In a culture where we are taught to count our blessings and keep our advantages, the tithe is a radical act: a statement that the first and the best belong to God, and I will honor that even when it costs me. If you have never given the tithe, not as a tax, but as a love letter to God — as a way of saying, "You come first, and I mean it" — this might be the moment.',
        },
        {
          kind: 'reflection',
          id: 'lev27-tithe',
          prompt:
            'What would it mean for you to tithe — not out of obligation, but out of the conviction that God comes first in your life, and you want your giving to prove it?',
        },
      ],
    },

    /* ─── Closing: The Pattern ────────────────────────────────────────────── */
    {
      ref: 'Leviticus 27:34',
      title: 'The Closing Word',
      blocks: [
        {
          kind: 'commentary',
          id: 'lev27-close',
          html:
            'Leviticus ends not with a bang, but with a housekeeping note: "These are the commandments, which the Lord commanded Moses for the children of Israel in mount Sinai." After chapters of ritual detail, animal blood, atonement, and festival calendars, the book closes on a simple fact: these are the rules. Not grievous, not impossible, but clear. A framework for a people to live clean before their God, always knowing that if they stumble, redemption is available — at a cost, but always available. The book of Leviticus is about access. How do ordinary people draw near to a holy God? The answer: by following the path He has marked out. And when you fall off the path, there is always a way back.',
        },
        {
          kind: 'carry',
          html:
            'Leviticus is finished. Exodus built a sanctuary. Leviticus fills it with worship. The reader has moved through sacrifices, atonement days, the Jubilee, and finally the logic of vows and redemption. If you have read this far, you have a framework now for understanding how Israel lived her covenant with God. You also have, if you know where to look, the shadow of a greater covenant to come — one where the sacrifice is perfect, where the priest is forever, where redemption is not fifty shekels but a life given freely. The patterns are all here.',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Leviticus 27',
    quote:
      'When someone makes a vow to the Lord or dedicates something to Him, the vow can be redeemed by paying its value. Every tenth animal and grain belongs to God by right. The tithe is holy unto the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 27 · Study Guide',
  },

  hasHebrew: true,
};
