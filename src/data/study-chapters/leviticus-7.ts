import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 7 — Additional sacrifice regulations. Trespass offering details,
 * peace offering subdivisions (thanksgiving, vow, freewill), eating protocols,
 * fat and blood prohibitions, wave/heave portions to priests.
 */
export const LEVITICUS_7: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 7,

  estimatedMinutes: { beginner: 10, intermediate: 16, deep: 19 },
  topicTags: ['holiness', 'sacrifice', 'priest', 'worship'],
  opener: {
    topical: true,
    caption: 'Leviticus 7',
  },
  intros: [
    'Leviticus 7 continues the manual for priests and worshippers, laying out the fine points of the trespass offering and the peace offering. The peace offering is the most intimate sacrifice in Israel&apos;s system — not just given to God, but eaten by the one who brought it, eaten at the Lord&apos;s table. The chapter subdivides this meal into three kinds: thanksgiving (*todah*), vow, and freewill. Each has different timing rules. Some meat is eaten the same day; some may wait two days; anything past that burns. God establishes hard boundaries around what is touched and who touches it. The priests receive specific portions — the wave breast and the heave shoulder. Nothing wasteful, nothing casual. In the end, the trespass offering, like every other offering, teaches the cost of covering sin.',
    'For the reader on this side of the cross, the peace offering of thanksgiving anticipates the Eucharist. Jesus took bread and wine and said "this is my body" — Greek *eucharistia*, thanksgiving. The urgency of eating the meat the same day mirrors the immediacy of grace: communion with God is not something to postpone. And the priests&apos; portions in every offering whisper forward to what Paul says of the New Testament ministry: "they which wait at the altar are partakers with the altar" (1 Cor. 9:13).',
  ],

  showKjvNote: true,

  sections: [
    /* ─── Leviticus 7:1–10 — The Trespass Offering ──────────────────────── */
    {
      ref: 'Leviticus 7:1–10',
      title: 'The Trespass Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('Likewise this is the law of the '),
                hy('trespass offering', 'heb-asham'),
                t(': it is '),
                hp('most holy', 'christ-asham'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('In the place where they kill the burnt offering shall they kill the trespass offering: and the blood thereof shall he sprinkle round about upon the altar.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he shall offer of it all the fat thereof; the rump, and the fat that covereth the inwards,'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the two kidneys, and the fat that is on them, which is by the flanks, and the caul that is above the liver, with the kidneys, it shall he take away:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the priest shall burn them upon the altar for an offering made by fire unto the Lord: it is a trespass offering.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-asham-setup',
          html:
            '[res:sefaria-todah-thanksgiving] The trespass offering (*asham*) works like the sin offering in some ways — the blood is sprinkled, the fat burns — but it addresses a different wrong. While the sin offering covers unintentional sin, the trespass offering covers sins of restitution: false swearing, theft, fraud. The debtor brings the offering, then makes the victim whole by paying the actual damage plus one-fifth. God sees the whole arc of repair.',
        },
        {
          kind: 'hebrew',
          id: 'heb-asham',
          title: 'Asham — &ldquo;trespass offering&rdquo;',
          script: 'אָשָׁם',
          translit: '<strong>asham</strong> · guilt, wrong, treachery',
          description:
            'The root carries a sense of liability, legal guilt. An asham is brought when someone has violated property, sacred trust, or another&apos;s rights and must make it right.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 6,
              spans: [
                t('Every male among the priests shall eat thereof: it shall be eaten in the holy place: '),
                hg('it is most holy', 'c-priest-share'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('As the sin offering is, so is the trespass offering: there is one law for them: the priest that maketh an atonement therewith shall have it.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the priest that offereth any man&apos;s burnt offering, even the priest shall have to himself the skin of the burnt offering which he hath offered.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And all the meat offering that is baken in the oven, and all that is dressed in the fryingpan, and in the pan, shall be the priest&apos;s that offereth it.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And every meat offering, mingled with oil, or dry, shall all the sons of Aaron have, '),
                hg('one as much as another', 'c-share-equal'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-priest-share',
          html:
            'The priest who officiates eats the trespass offering. This is not a salary — it is a sacred meal. He stands at the table where sin is covered and eats from that table. It binds him to the work, makes him a partaker of the very thing he mediates.',
        },
        {
          kind: 'commentary',
          id: 'c-share-equal',
          html:
            'Every male priest, regardless of rank, receives an equal portion of every grain offering. The system is designed so that priestly duty rotates, and the food comes with it. No priest starves. No priest hoards. The shared table shapes a shared priesthood.',
        },
        {
          kind: 'christ',
          id: 'christ-asham',
          title: 'Christ Connection — The Guilt Bearer',
          html:
            'Isaiah says of the Messiah: "he shall bear their iniquities" and "by his knowledge shall my righteous servant justify many; for he shall bear their iniquities" (Isa. 53:11). The word there is *asham*. Jesus steps into the trespass offering role — not only atoning for unwitting sin, but bearing the whole weight of human guilt and making full restitution. Hebrews calls Him "the Lamb of God, which taketh away the sin of the world" (John 1:29), the final guilt-bearer who needs no successor.',
        },
        {
          kind: 'carry',
          html:
            'When you have done real wrong — taken something that wasn&apos;t yours, broken a trust, spoken falsely — the impulse is often to hide it or smooth it over. But the trespass offering demands the hard arc: bring it into the light, make the victim whole, then walk free. That way of repair is ancient and remains true. Confession, restitution, reconciliation. Jesus bore your guilt at the cross, but you still get to walk the path of honest repair with those you&apos;ve wronged. It is not punishment — it is healing.',
        },
        {
          kind: 'reflection',
          id: 'lev7-asham',
          prompt:
            'Is there someone you&apos;ve wronged or defrauded whose trust you need to restore? What does full restitution — not just apology, but actual repair — look like?',
        },
      ],
    },

    /* ─── Leviticus 7:11–18 — The Peace Offering ───────────────────────── */
    {
      ref: 'Leviticus 7:11–18',
      title: 'The Peace Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 11,
              spans: [
                t('And this is the law of the sacrifice of '),
                hy('peace offerings', 'heb-todah'),
                t(', which he shall offer unto the Lord.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('If he offer it for a thanksgiving, then he shall offer with the sacrifice of thanksgiving '),
                hg('unleavened cakes', 'c-todah-bread'),
                t(' mingled with oil, and '),
                hg('unleavened wafers anointed', 'c-todah-bread'),
                t(' with oil, and cakes mingled with oil, of fine flour, '),
                hg('fried', 'c-todah-bread'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Besides the cakes, he shall offer for his offering leavened bread with the sacrifice of thanksgiving of his peace offerings.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-todah-intro',
          html:
            'The peace offering is Israel&apos;s only sacrifice that becomes a feast for the offerer. Within this category, three types emerge: the thanksgiving (*todah*), the vow, and the freewill. All are "peace offerings," but the thanksgiving has its own liturgical shape. Unleavened bread (without the time-agent of fermentation) mixed with oil, then leavened bread — the whole spectrum of bread, a full table.',
        },
        {
          kind: 'hebrew',
          id: 'heb-todah',
          title: 'Todah — &ldquo;thanksgiving offering&rdquo;',
          script: 'תּוֹדָה',
          translit: '<strong>todah</strong> · thanksgiving, praise, confession',
          description:
            'More than gratitude, *todah* is public witness — the offerer standing in the congregation and declaring what God has done. The Greek *eucharistia* (the Eucharist) carries this same meaning: not just thanks, but a public testimony of grace.',
        },
        {
          kind: 'commentary',
          id: 'c-todah-bread',
          html:
            'The thanksgiving offering is accompanied by a full spread of bread — unleavened cakes with oil, fried cakes, and leavened loaves. This is not a bare ritual. It is abundance, variety, substance. The offerer brings others to eat, making the thanksgiving a shared public event. You cannot thank God alone; the peace offering demands witnesses.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 14,
              spans: [
                t('And of it he shall offer one out of the whole oblation for an heave offering unto the Lord, and it shall be the priest&apos;s that sprinkleth the blood of the peace offerings.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the flesh of the sacrifice of his peace offerings for thanksgiving shall be eaten the '),
                hp('same day that it is offered', 'c-eat-same-day'),
                t('; he shall not leave any of it until the morning.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eat-same-day',
          html:
            'The thanksgiving offering is eaten the same day. This is not about food preservation — it is about urgency. The grace you are thanking God for is now. The meal is now. The communion with God is not something to delay or store up. Eat it while it is warm, while the gathered people are still present, while the memory of deliverance is fresh.',
        },
        {
          kind: 'christ',
          id: 'christ-todah',
          title: 'Christ Connection — The Eucharist as Thanksgiving',
          html:
            '[res:intertextual-eucharist-todah] When Jesus took bread at His last meal, Matthew tells us He "gave thanks" (*eucharisteo* in Greek, the same root as *todah*). Luke says "he took the cup, and gave thanks" (Luke 22:17). Every time you take Communion, you are standing in the *todah* tradition — offering your whole self as thanksgiving for salvation, eating bread together with the gathered body, witnessing to what God has done. The peace offering finds its fulfillment in the Lord&apos;s Supper, where Christ Himself becomes the bread of thanksgiving.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 16,
              spans: [
                t('But if the sacrifice of his offering be a vow, or a voluntary offering, it shall be eaten the same day that he offereth his sacrifice: and on the morrow also the remainder of it shall be eaten:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('But the remainder of the flesh of the sacrifice on the third day shall be burnt with fire.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And if any of the flesh of the sacrifice of his peace offerings be eaten at all on the third day, it shall not be accepted, neither shall it be imputed unto him that offereth it: it shall be an abomination, and the soul that eateth of it shall bear his iniquity.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-vow-freewill',
          html:
            'The vow and freewill offerings get two days (same day plus the morrow), but no more. The third day, anything left over burns. This is not wastefulness — it is a teaching. The covenant meal cannot be stale. The communion with God cannot be postponed indefinitely. There is a window, and after it closes, the food belongs to fire, not to the human mouth. What was meant to bond us together cannot sit in the back of the house, forgotten.',
        },
        {
          kind: 'carry',
          html:
            'If you have made a vow to God, or if you have a long-standing promise to keep, do not let it rot. Do not say "I&apos;ll get to it later" and then watch the third day pass. The vow or the freewill offering demands urgency. The covenant between you and God cannot wait. Whatever you promised — to serve, to give, to go, to change — the window for acting on it is now.',
        },
        {
          kind: 'reflection',
          id: 'lev7-timing',
          prompt:
            'What promise or vow have you been sitting on past the second day? What does it mean to act before the third day burns it away?',
        },
      ],
    },

    /* ─── Leviticus 7:19–27 — Clean Eating, Fat, Blood ────────────────── */
    {
      ref: 'Leviticus 7:19–27',
      title: 'What May Be Eaten, What May Not',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 19,
              spans: [
                t('And the flesh that toucheth any unclean thing shall not be eaten; it shall be burnt with fire: and as for the flesh, all that be '),
                hy('clean shall eat', 'c-clean-eaters'),
                t(' thereof.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But the soul that eateth of the flesh of the sacrifice of peace offerings, that pertain unto the Lord, having his uncleanness upon him, even that soul shall be cut off from his people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-clean-eaters',
          html:
            'Only the clean may eat. The text has already laid out what makes a person unclean — touching a corpse, certain illnesses, menstruation, certain emissions. The boundary is not about moral judgment; it is about standing in a holy place and eating holy food. You must be ritually prepared. The peace offering cannot be eaten by someone in a state of uncleanness — not because they are bad, but because the meal is sacred and requires that you first be in a state of readiness.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 21,
              spans: [
                t('Moreover the soul that shall touch any unclean thing, as the uncleanness of man, or any unclean beast, or any abominable unclean thing, and eat of the flesh of the sacrifice of peace offerings, which pertain unto the Lord, even that soul shall be cut off from his people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-boundary-kept',
          html:
            'The boundary is firm. Contact with uncleanness disqualifies you from the sacred meal. This teaches something about approach: the feast with God demands a clear moment of separation from what is unclean. You cannot walk out of contamination and directly into the table. There must be a break, a cleansing, an intentional return.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 22,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Speak unto the children of Israel, saying, '),
                hy('Ye shall eat no manner of fat', 'c-no-fat'),
                t(', of ox, or of sheep, or of goat;'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And the fat of the beast that dieth of itself, and the fat of that which is torn with beasts, may be used in any other use: but ye shall in no wise eat of it.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('For whosoever eateth the fat of the beast, of which men offer an offering made by fire unto the Lord, even the soul that eateth it shall be cut off from his people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-fat',
          html:
            'Fat is forbidden to the people but burned on the altar — the premium portion given to God, never to humans. In ancient thought, fat was where life and vitality concentrated. By forbidding the people to eat it, God establishes that the richest part of the animal belongs to Him alone. Even in a meal the offerer gets to share, there is a portion that is His alone.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 26,
              spans: [
                t('Moreover ye shall eat '),
                hy('no manner of blood', 'c-no-blood'),
                t(', whether it be of fowl or of beast, in any of your dwellings.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Whatsoever soul it be that eateth any manner of blood, even that soul shall be cut off from his people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-blood',
          html:
            'Blood is life. Leviticus says this explicitly in 17:11: "the life of the flesh is in the blood." Blood is never food; it belongs to the altar, to atonement, to the covenant. To eat blood would be to consume what God has designated as redemptive — to take the very substance of atonement into your body as if it were ordinary meat. It is a boundary between the sacred and the consumable.',
        },
        {
          kind: 'christ',
          id: 'christ-blood',
          title: 'Christ Connection — The Blood of the Covenant',
          html:
            '[res:sbl-priestly-portions] Jesus takes the cup and says "this is my blood of the new testament, which is shed for many for the remission of sins" (Matt. 26:28). In one sentence, He overturns centuries of Levitical law: the disciples are commanded to drink blood, which no Israelite ever did. He is saying: the blood that was always forbidden, reserved only for the altar, is now given to you. The life that atoned is now your sustenance. The new covenant runs on the same blood-language as the old, but now the blood flows *into* the people, not away from them.',
        },
        {
          kind: 'carry',
          html:
            'In the old order, fat and blood were forbidden — the richest parts belonged to God. But in the new covenant, you are invited to drink the blood of Christ, to consume the very life given for you. There is nothing left of the old law that would prevent you from drawing near. Whatever has kept you at a distance from God — thinking you must be better first, clean enough first, worthy enough first — is overturned by the one who spilled His blood so you could eat at His table.',
        },
        {
          kind: 'reflection',
          id: 'lev7-blood',
          prompt:
            'What part of you have you tried to keep from God, thinking it was too broken or too unclean? What would change if you believed you were invited all the way in?',
        },
      ],
    },

    /* ─── Leviticus 7:28–36 — The Wave Breast and Heave Shoulder ────── */
    {
      ref: 'Leviticus 7:28–36',
      title: 'The Priest&apos;s Portion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 28,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Speak unto the children of Israel, saying, He that offereth the sacrifice of his peace offerings unto the Lord shall bring his oblation unto the Lord of the sacrifice of his peace offerings.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('His own hands shall bring the offerings of the Lord made by fire, the fat with the breast, it shall he bring, that the '),
                hy('breast may be waved', 'c-wave-breast'),
                t(' for a wave offering before the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wave-breast',
          html:
            'The worshipper brings the breast and fat himself, and the priest waves it before the Lord in the air — a gesture of offering and receiving. The waving dedicates it to God, and then it is released to the priest. This is intimate work. The offerer&apos;s hands touch the offering; the priest&apos;s hands wave it. The meal requires both.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 31,
              spans: [
                t('And the priest shall burn the fat upon the altar: but the breast shall be Aaron&apos;s and his sons&apos;.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And the right shoulder shall ye give unto the priest for an heave offering of the sacrifices of your peace offerings.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('He among the sons of Aaron, that offereth the blood of the peace offerings, and the fat, shall have the right shoulder for his part.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heave-shoulder',
          html:
            'The right shoulder — the strongest part of the animal — is lifted up ("heaved," the old word) and given to the priest. Along with the breast, this ensures the priest is sustained by the sacrifices he offers. The priest does not serve for wages; he serves and is fed by the very covenant work he mediates.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 34,
              spans: [
                t('For the wave breast and the heave shoulder have I taken of the children of Israel from off the sacrifices of their peace offerings, and have given them unto Aaron the priest and unto his sons by a statute for ever from among the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-priest-provision',
          html:
            'God Himself assigns the breast and shoulder to the priesthood. This is not a human arrangement; it is divine decree. The priest who stands between God and the people is sustained by the very sacrifices that hold the covenant together. The people provide the animal; the priest leads the ritual; the priest eats. The priesthood is woven into the fabric of sacrifice itself.',
        },
        {
          kind: 'christ',
          id: 'christ-portions',
          title: 'Christ Connection — Feeding the Ministers',
          html:
            'Paul writes: "Do ye not know that they which minister about holy things live of the things of the temple? and they which wait at the altar are partakers with the altar?" (1 Cor. 9:13). The point is direct: the old covenant provided for its priests from the sacrifices. The new covenant should do the same. Those who serve the gospel full-time are not beggars; they are partakers of the sacrifice they mediate. Christ is the bread broken; those who teach and shepherd from His word share in that meal.',
        },
        {
          kind: 'carry',
          html:
            'If you support someone who teaches the Word or shepherds God&apos;s people, you are giving them a portion of the sacrifice you offer. That is not obligation; it is an ancient and holy partnership. And if you are the one teaching or shepherding, know that your sustenance is meant to come from the very work you do — from the Lord, through His people. You are not meant to starve or scramble.',
        },
        {
          kind: 'reflection',
          id: 'lev7-portions',
          prompt:
            'How do you support those who teach God&apos;s Word in your life? What would it look like to honor them as the covenant honors priests — as those whose meal is the sacrifice itself?',
        },
      ],
    },

    /* ─── Leviticus 7:37–38 — Summary and Close ──────────────────────── */
    {
      ref: 'Leviticus 7:37–38',
      title: 'The Law Complete',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 37,
              spans: [
                t('This is the law of the burnt offering, of the meat offering, and of the sin offering, and of the trespass offering, and of the '),
                hg('consecrations', 'c-ordination'),
                t(', and of the sacrifice of the peace offerings;'),
              ],
            },
            {
              number: 38,
              spans: [
                t('Which the Lord commanded Moses in mount Sinai, in the day that he commanded the children of Israel to offer their oblations unto the Lord, in the wilderness of Sinai.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ordination',
          html:
            'The word "consecrations" refers to the ordination of priests — the ritual by which Aaron and his sons were set apart for the work. Each offering type has been laid out. Now Moses will receive the ordination instructions. The whole system converges: the people bring offerings; the priests offer them; the priests are ordained and sustained by the very system they mediate. Everything coheres.',
        },
        {
          kind: 'commentary',
          id: 'c-law-complete',
          html:
            'Leviticus 7 completes the offering manual that began in chapter 1. The Lord has spoken; Moses has received it at Sinai; now Israel can approach. The wilderness is the classroom, and the people are learning the grammar of holiness.',
        },
        {
          kind: 'carry',
          html:
            'By the end of Leviticus 7, you have heard every way Israel draws near to God through sacrifice — burnt, grain, sin, trespass, and peace. Each teaches something different. The burnt offering is absolute surrender. The grain offering is the fruit of your hands. The sin offering is confession and cleansing. The trespass offering is restitution. The peace offering is covenant feast, thanksgiving, and communion. Together they form a language older than words, a way of standing before the Lord with your whole self and saying: I am Yours.',
        },
        {
          kind: 'reflection',
          id: 'lev7-whole',
          prompt:
            'Which of the five offerings speaks most deeply to where you are right now — surrender, provision, confession, restitution, or communion? Speak it aloud. Let it be your prayer.',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The peace offering is Israel&apos;s feast with God — a meal of thanksgiving, vow, and freewill, eaten in the presence of the Lord and His priest, binding the offerer and the priesthood together in the ancient covenant.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 7 · Study Guide',
  },

  resources: [
    {
      id: 'sbl-priestly-portions',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Priestly Portions and Sustenance in Offerings',
      url: 'https://www.bibleodyssey.org/en/passages/article/priests-and-offerings',
      description: 'Study of how priests were sustained through wave and heave portions, and the theology of providing for those who minister.',
    },
    {
      id: 'sefaria-todah-thanksgiving',
      kind: 'archive',
      source: 'Sefaria',
      label: 'Todah and Thanksgiving in Rabbinic Tradition',
      url: 'https://www.sefaria.org/Leviticus.7',
      description: 'Commentary on thanksgiving offerings and the covenant meal celebration with God and community.',
    },
    {
      id: 'intertextual-eucharist-todah',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'From Todah to Eucharistia — Thanksgiving Meal',
      url: 'https://intertextual.logos.com/',
      description: 'Cross-references linking the todah sacrifice to the Greek eucharistia and the Christian Eucharist.',
    },
  ],

  hasHebrew: true,
};
