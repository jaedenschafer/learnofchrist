import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 9 — The Eighth Day.
 * Aaron&apos;s first sacrifices as high priest. The glory of the LORD appears
 * and fire consumes the offering. A shadow of Christ&apos;s once-for-all offering
 * and the resurrection fire of Pentecost.
 */
export const LEVITICUS_9: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 9,

  estimatedMinutes: { beginner: 7, intermediate: 10, deep: 14 },
  intros: [
    'Leviticus 9 is the eighth day — the first day of a new week. It is the day Aaron, the high priest, stands before the people and offers his first sacrifices. For seven days he has been consecrated. Now he steps into the tabernacle with a sin offering, a burnt offering, and a peace offering. The eighth day in Scripture is always the day of beginning again, the day of resurrection, the day of new creation.',
    'What unfolds here is the climax of Leviticus. Not rules about sacrifices, but the moment when sacrifice itself works. When Aaron finishes his offerings, something happens that the text has been waiting for since Exodus 40. The glory of the LORD appears. The fire falls. The people see it and fall on their faces in worship. For every reader on this side of Pentecost, this chapter echoes with the fire that fell at Jerusalem, and with the Lamb who entered the heavenly tabernacle once for all.',
  ],

  bottomShare: {
    label: 'Share Leviticus 9',
    quote:
      'When Aaron finished offering the sin offering, the burnt offering, and the peace offering, and had blessed the people, the glory of the LORD appeared. And fire came out from before the LORD and consumed the offering on the altar. When all the people saw it, they shouted and fell on their faces.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 9 · Study Guide',
  },

  sections: [
    /* ─── Leviticus 9:1 — The Eighth Day ──────────────────────────────── */
    {
      ref: 'Leviticus 9:1',
      title: 'The Eighth Day Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass '),
                hy('on the eighth day', 'c-eighth'),
                t(', that Moses called Aaron and his sons, and the elders of Israel;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eighth',
          html:
            'The eighth day in Scripture is always a threshold. Seven is the number of completion. Eight is the number of what comes after — resurrection morning, a new creation, the beginning again. Aaron has been in the tabernacle for seven days, separated for his priestly work. Now, on the eighth day, he steps out to minister before the people. This is not just an inauguration. This is resurrection language.',
        },
        {
          kind: 'carry',
          html:
            'Where are you on day eight? Where have you finished a season of waiting, preparation, or purification? The scripture that calls the day &ldquo;eighth&rdquo; is telling you it is a new beginning — a resurrection moment, a stepping out into work you have been prepared for. Whatever comes next is not a return to the old, but a step into something you are being called to.',
        },
        {
          kind: 'reflection',
          id: 'eighth-day',
          prompt:
            'What season have you just completed? What feels like it is beginning in you on the other side of it?',
        },
      ],
    },

    /* ─── Leviticus 9:2–4 — The Sin Offering ────────────────────────────── */
    {
      ref: 'Leviticus 9:2–4',
      title: 'A Calf for the High Priest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 2,
              spans: [
                t('And he said unto Aaron, Take thee a young calf for a sin offering, and a ram for a burnt offering, without blemish, and offer them before the LORD.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And unto the children of Israel thou shalt speak, saying, Take ye a kid of the goats for a sin offering; and a calf and a lamb, both of the first year, without blemish, for a burnt offering;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Also a bullock and a ram for '),
                hg('peace offerings', 'c-peace'),
                t(', to sacrifice before the LORD; and '),
                hy('a meat offering mingled with oil', 'hebrew-mincha'),
                t(': for to day the LORD will appear unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-peace',
          html:
            'Aaron begins with a sin offering for himself, even as high priest. He is not sinless. Then he offers burnt and peace offerings. A sin offering acknowledges guilt. A burnt offering says everything is God&apos;s. A peace offering is the meal, the communion, the celebration — the reconciliation sealed with a shared table. All three have to happen before the people can see God&apos;s glory.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mincha',
          title: 'Mincha — &ldquo;meat offering&rdquo;',
          script: 'מִנְחָה',
          translit: '<strong>mincha</strong> · a grain offering; an offering of the work of human hands',
          description:
            'Mincha is the only offering without blood — it is grain, oil, flour, incense. It is the gift that says: I give you the fruit of my labor, the skill of my hands, all I have worked for. It comes from the ground, from human toil.',
        },
        {
          kind: 'carry',
          html:
            'Notice what happens before the glory appears: Aaron offers first for himself. Many of us wait until we are perfect before we offer anything to God. The text does not. The priest who represents the people before the LORD does not start clean. He starts with confession, with his own burnt offering, with bringing his own labor to the altar. Only a high priest who has offered for his own sin can offer for the people.',
        },
        {
          kind: 'reflection',
          id: 'offerings-self',
          prompt:
            'What would it look like to stop waiting until you&apos;re perfect before you offer something to God — your work, your presence, your confession? What are you carrying that you could lay down?',
        },
      ],
    },

    /* ─── Leviticus 9:5–22 — The Offerings Complete ───────────────────── */
    {
      ref: 'Leviticus 9:5–22',
      title: 'Aaron Offers for the People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 5,
              spans: [
                t('And they brought that which Moses commanded before the tabernacle of the congregation: and all the congregation drew near and stood before the LORD.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Moses said, This is the thing which the LORD commanded that ye should do: and '),
                hp('the glory of the LORD', 'christ-glory'),
                t(' shall appear unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-glory',
          html:
            'Before Aaron offers even one sacrifice, Moses makes a promise: &ldquo;the glory of the LORD shall appear unto you.&rdquo; This is not tentative. This is not &ldquo;maybe.&rdquo; The text moves through sacrifice toward one thing — a visible, unmistakable appearance of God&apos;s presence. All the offerings are a path toward seeing Him.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 7,
              spans: [
                t('And Aaron went unto the altar, and slew the calf of the sin offering, which was for himself.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the sons of Aaron brought the blood unto him: and he dipped his finger in the blood, and put it upon the horns of the altar, and poured out the blood at the bottom of the altar:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('But the fat, and the kidneys, and the caul above the liver of the sin offering, he burnt upon the altar; as the LORD commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sin-alone',
          html:
            'Blood on the horns of the altar. Blood poured at its base. The priest who stands between God and the people begins by breaking the barrier of his own guilt. The blood marks the transition — from death, from separation, toward the holy place. Aaron will stand in that place only because blood has gone first.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 10,
              spans: [
                t('And the flesh and the hide he burnt with fire without the camp.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And he slew the burnt offering; and Aaron&apos;s sons presented unto him the blood: and he sprinkled the blood upon the altar round about.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And they presented the burnt offering unto him, with the pieces thereof, and the head: and he burnt them upon the altar.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And he did wash the inwards and the legs, and burnt them upon the burnt offering on the altar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-whole-offering',
          html:
            'A burnt offering is wholly consumed — nothing remains for the priest to eat. It is everything given, nothing held back. The word &ldquo;burnt&rdquo; does not mean &ldquo;failed&rdquo; or &ldquo;destroyed.&rdquo; It means &ldquo;ascended.&rdquo; The smoke rises. The offering goes up to heaven. It says: you are God, and I am not. Everything I have is yours.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 14,
              spans: [
                t('And he did wash the inwards and the legs, and burnt them upon the burnt offering on the altar.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he brought the people&apos;s offering, and took the goat, which was the sin offering for the people, and slew it, and offered it for sin, as the first.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he brought the burnt offering, and offered it according to the manner.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And he brought the meat offering, and took an handful thereof, and burnt it upon the altar, beside the burnt offering of the morning.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('He slew also the bullock and the ram for a sacrifice of peace offerings, which was for the people: and Aaron&apos;s sons presented unto him the blood, and he sprinkled the blood upon the altar round about,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the fat of the bullock and of the ram, the rump, and that which covereth the inwards, and the kidneys, and the caul above the liver:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And they put the fat upon the breasts, and he burnt the fat upon the altar:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And the breasts and the right shoulder Aaron waved for a wave offering before the LORD; as Moses commanded.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Aaron lifted up his hand toward the people, and blessed them, and came down from offering of the sin offering, and the burnt offering, and peace offerings.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blessing-first',
          html:
            'Aaron does something remarkable. He offers for the people — sin offering, burnt offering, peace offering. Then, before anything else happens, he lifts his hands and blesses them. The text wants you to see this: the blessing comes before the fire, before the glory. Aaron&apos;s voice pronouncing blessing over the people is itself an act of priestly work. The people are blessed by his words before they ever see the fire.',
        },
        {
          kind: 'carry',
          html:
            'If you have been wrecked by someone&apos;s words — a parent&apos;s, a leader&apos;s, a teacher&apos;s — you know how much weight words carry. Aaron stood up and did the opposite of a curse. He lifted his hands and blessed. The Scripture is clear: the blessing comes before the visible sign. Before the glory appears, the people hear they are blessed. Before the fire falls, before they shout, before they fall on their faces — they have been told they are beloved.',
        },
        {
          kind: 'reflection',
          id: 'blessing-hands',
          prompt:
            'Who needs your blessing this week? Whose future, whose choices, whose very face do you need to lift your hands over and speak good into?',
        },
      ],
    },

    /* ─── Leviticus 9:23 — Into the Tabernacle ─────────────────────────── */
    {
      ref: 'Leviticus 9:23',
      title: 'The Glory Appears',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 23,
              spans: [
                t('And Moses and Aaron went into the tabernacle of the congregation, and came out, and '),
                hp('blessed the people', 'christ-double-blessing'),
                t(': and '),
                hy('the glory of the LORD', 'hebrew-kavod'),
                t(' appeared unto all the people.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kavod',
          title: 'Kavod — &ldquo;glory&rdquo;',
          script: 'כָּבוֹד',
          translit: '<strong>kavod</strong> · weight, heaviness, splendor, the visible presence of God&apos;s majesty',
          description:
            'The same word that filled the tabernacle in Exodus 40, when the work was finished. The same word that will fill the temple when Solomon&apos;s construction is complete. The glory is the presence made visible — God arriving, taking up space, being seen.',
        },
        {
          kind: 'commentary',
          id: 'c-tabernacle-entry',
          html:
            'Moses and Aaron go into the tabernacle. This is the first time anyone has entered the holy place since it was dedicated. They go in alone, into the darkness of the holy of holies. Then they come out. And the moment they come out, the glory is visible to all the people. No more veiled, hidden, mysterious. The presence that was locked inside a tent becomes visible to everyone standing before it.',
        },
        {
          kind: 'christ',
          id: 'christ-double-blessing',
          title: 'Christ Connection — Ascension and Pentecost',
          html:
            'Hebrews 9:11–12 says Christ &ldquo;entered in once into the holy place by his own blood, having obtained eternal redemption.&rdquo; Christ ascended. He went into the heavenly tabernacle alone, carrying His own blood. Then He sent His Spirit. The fire that fell at Pentecost — &ldquo;cloven tongues like as of fire&rdquo; (Acts 2:3) — is Leviticus 9 fulfilled. The glory has appeared. The fire has fallen. The blessing has been spoken. All the people see it.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever waited for a sign — for proof that what was promised is real, that God has not forgotten, that the blessing spoken over you will actually come to pass — this moment in Leviticus is your moment. The people stood before the tent and saw the glory with their own eyes. They did not have to guess. The fire fell and they knew. Whatever you are waiting to see become visible, whatever promise you are waiting to watch catch fire — the God of Leviticus 9 is the God who makes promises and then makes them visible.',
        },
        {
          kind: 'reflection',
          id: 'glory-waits',
          prompt:
            'What promise from God are you waiting to see come alive? What would it mean to actually believe it is moving toward you, the way the glory moved toward the people of Israel?',
        },
      ],
    },

    /* ─── Leviticus 9:24 — The Fire Falls ──────────────────────────────── */
    {
      ref: 'Leviticus 9:24',
      title: 'The Fire Falls and the People Respond',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 24,
              spans: [
                t('And there came a fire out from before the LORD, and '),
                hp('consumed upon the altar', 'christ-fire-acceptance'),
                t(' the burnt offering and the fat: which when all the people saw, they '),
                hg('shouted, and fell on their faces', 'c-peoples-answer'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-peoples-answer',
          html:
            'The fire is not the kind you light yourself. It comes from before the LORD. It comes out of the holy place. And when it comes, the offering is consumed in an instant — everything Aaron has laid on the altar is completely accepted, completely taken up into the presence of God. The people see it happen. And their response is involuntary: they shout. They fall on their faces. The fire does what the rules could not do — it silences every voice but one.',
        },
        {
          kind: 'commentary',
          id: 'c-divine-acceptance',
          html:
            'In every other chapter of Leviticus, the priest performs the sacrifice. Here, the fire performs it. This is the moment of divine acceptance — not human achievement, but God&apos;s own fire saying yes to what Aaron has brought. The Cross works the same way. Christ brings the offering. The Father accepts it. The Spirit testifies to it. The whole Trinity says yes, and the world is changed.',
        },
        {
          kind: 'christ',
          id: 'christ-fire-acceptance',
          title: 'Christ Connection — The Cross and the Resurrection',
          html:
            'Jesus told His disciples, &ldquo;I have come to send fire on the earth&rdquo; (Luke 12:49). On the cross, Scripture says the Father&apos;s holy fire fell on the Son — not to destroy Him, but to consume the sin He carried. The fire that appears at Leviticus 9 is a shadow of the cross, where the Father&apos;s acceptance came in the form of resurrection. The offering was accepted. The death was swallowed up. And the people — the Church — fell on their faces in worship of the God who had just made all things new.',
        },
        {
          kind: 'carry',
          html:
            'You have brought something to the altar. A prayer too broken to finish. An offering from hands that shake. A surrender you are not sure anyone saw. The fire says yes. The God you have worshiped in the dark, in the hidden place, before anyone else knew — He sees it. He receives it. His fire falls and says: accepted. Beloved. Mine. That is all the assurance you ever need.',
        },
        {
          kind: 'reflection',
          id: 'fire-acceptance',
          prompt:
            'What offering are you waiting for God to accept? What would change in you if you actually believed He had already said yes?',
        },
      ],
    },
  ],
};
