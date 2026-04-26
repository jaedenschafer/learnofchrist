import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 2 — the grain offering (minchah). Fine flour with oil and
 * frankincense, baked in three ways. No leaven, no honey. All includes salt —
 * the salt of the covenant. A memorial portion burned; the rest to the priests.
 */
export const LEVITICUS_2: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 2,

  intros: [
    'After the burnt offering comes the grain offering — the minchah, a gift of fine flour, oil, and frankincense. It has no animal life, no blood. Where the burnt offering speaks of total surrender, the grain offering speaks of devotion of a different kind: the work of your hands, the fruits of the earth, the skilled labor of the harvest gathered and ground and presented with care.',
    'But this offering has very specific rules. No leaven, no honey — nothing that ferments or sweetens beyond the salt. And salt is not incidental. "All thy oblations thou shalt season with salt," Moses is told: the salt of God&apos;s covenant. This is the language of binding. This is an offering that tastes like covenant, like a bond that cannot break.',
    'For the reader on this side of the cross, the grain offering points to Jesus as the bread of life — broken, baked in the oven of suffering, without the leaven of corruption, seasoned with the covenant salt that binds Him and His people together forever.',
  ],

  sections: [
    /* ─── Leviticus 2:1–3 — The Basic Grain Offering ───────────────────── */
    {
      ref: 'Leviticus 2:1–3',
      title: 'Flour and Oil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('And when any will offer a '),
                hy('meat offering', 'lev2-minchah'),
                t(' unto the Lord, his offering shall be of '),
                hg('fine flour', 'lev2-flour'),
                t('; and he shall pour '),
                hg('oil', 'lev2-oil'),
                t(' upon it, and put '),
                hg('frankincense', 'lev2-frank'),
                t(' thereon:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev2-minchah',
          html:
            'The offering is called <em>minchah</em> — a tribute, a gift, a present brought to someone of higher rank. It appears first in Genesis 4:3 when Cain brings an offering to God. The word carries the sense of humble deference. The poorest person could bring a minchah; all that was required was grain, which anyone could grow. This is the offering of devotion without cost.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-minchah',
          title: 'Minchah — "grain offering"',
          script: 'מִנְחָה',
          translit: '<strong>minchah</strong> · tribute, gift, meal offering',
          description:
            'From a root meaning "to give" or "present." A minchah is always presented to someone greater than yourself—in ordinary use, to a king or lord. Here, it acknowledges God&apos;s kingship through the gift of the fields.',
        },
        {
          kind: 'commentary',
          id: 'lev2-flour',
          html:
            'The flour must be fine — <em>solet</em> in Hebrew, the finest grade, ground smooth. This is not the whole wheat chaff; this is wheat worked into softness. There is a picture here of preparation: the grain has been harvested, threshed, winnowed of chaff, and ground until it loses all its coarseness. Devotion is not raw; it is refined.',
        },
        {
          kind: 'commentary',
          id: 'lev2-oil',
          html:
            'Oil is poured onto the offering — not merely a trace but a substantial anointing. Oil speaks throughout Scripture of the Spirit, of joy, of consecration. A grain offering without oil would be dry, ordinary, without power. The oil makes it an offering worthy of God.',
        },
        {
          kind: 'commentary',
          id: 'lev2-frank',
          html:
            'Frankincense is added — the resin of the boswellia tree, valuable, fragrant, imported from distant lands. When burned, it fills the air with sweetness. No one burns frankincense for themselves; it is burned in honor of someone else. The poor person&apos;s offering is anointed with luxury.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 2,
              spans: [
                t('And he shall bring it to Aaron&apos;s sons the priests: and he shall take thereout his handful of the fine flour thereof, and of the oil thereof, with all the frankincense thereof; and the priest shall burn '),
                hp('the memorial of it', 'lev2-azkarah'),
                t(' upon the altar: it is a sweet savour unto the Lord:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the remnant of the meat offering shall be Aaron&apos;s and his sons&apos;: it is a thing most holy of the holy offerings of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev2-azkarah',
          html:
            'The priest takes a handful — not all of it, but a <em>memorial portion</em> (<em>azkarah</em> — "remembrance"). This is burned on the altar where the smoke rises. The rest remains for the priests to eat. God does not consume the whole offering as He does the burnt offering; God takes His memorial portion, the smell of it, and gives the nourishment of it to His priests. This is a shared meal, though one initiated by the giver.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-azkarah',
          title: 'Azkarah — "memorial portion"',
          script: 'אַזְכָּרָה',
          translit: '<strong>azkarah</strong> · remembrance, memorial, the portion that ascends',
          description:
            'From the root meaning "to remember." The memorial portion is what ensures the offering is remembered—by God, whose sense of smell receives it, and by the community, who see the smoke rise.',
        },
        {
          kind: 'carry',
          html:
            'When you bring a devotion that has cost you something — time, skill, the fruit of your work — God does not ignore it. He does not demand all of it for Himself alone. He takes His portion, receives the honor of it, and gives the rest for the nourishment of those who serve Him. Your gift matters because you matter to Him. It becomes food for others.',
        },
        {
          kind: 'reflection',
          id: 'lev2-flour-oil',
          prompt:
            'What gift of your labor — not money, but something your hands or mind have made — might it mean to present to God as a minchah? What would that look like?',
        },
      ],
    },

    /* ─── Leviticus 2:4–10 — Baked in Three Ways ──────────────────────── */
    {
      ref: 'Leviticus 2:4–10',
      title: 'The Oven, the Griddle, the Pan',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('And if thou bring an oblation of a meat offering '),
                hg('baken in the oven', 'lev2-oven'),
                t(', it shall be unleavened cakes of fine flour mingled with oil, or unleavened wafers anointed with oil.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And if thy oblation be a meat offering '),
                hg('baken in a pan', 'lev2-pan'),
                t(', it shall be of fine flour unleavened, mingled with oil.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Thou shalt part it in pieces, and pour oil thereon: it is a meat offering.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And if thy oblation be a meat offering '),
                hg('baken in the fryingpan', 'lev2-griddle'),
                t(', it shall be made of fine flour with oil.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev2-oven',
          html:
            'The first method: baked in an oven. This produces a firm bread, structured, shaped by heat. An oven demands patience — the bread must be left inside, where it hardens and transforms. There is something of suffering in an oven: you cannot rush it, and the heat does its work on something initially soft and formless.',
        },
        {
          kind: 'commentary',
          id: 'lev2-pan',
          html:
            'The second method: baked in a shallow pan. This is quicker, requires less heat, produces something more delicate. The bread is thinner, more tender, still shaped by fire but less severely. Different seasons of devotion produce different textures.',
        },
        {
          kind: 'commentary',
          id: 'lev2-griddle',
          html:
            'The third method: baked on a griddle (frying pan). This is the fastest, least transformed. The flour still holds its shape minimally; it is almost like a porridge poured on heat. Each method is valid. Each is an offering. The form of your devotion may vary — deep-baked, shallow-baked, poured out hot — but all are received.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 8,
              spans: [
                t('And thou shalt bring the meat offering that is made of these things unto the Lord: and when it is presented unto the priest, he shall bring it unto the altar.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the priest shall take from the meat offering a memorial thereof, and shall burn it upon the altar: '),
                hp('it is a sweet savour unto the Lord', 'lev2-sweet-savour'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And that which is left of the meat offering shall be Aaron&apos;s and his sons&apos;: it is a thing most holy of the holy offerings of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev2-sweet-savour',
          html:
            'The phrase "sweet savour unto the Lord" — <em>reiyach nichoach</em> in Hebrew — appears in all five major offerings. It is not a literal smell that God enjoys (God does not eat or breathe as humans do), but a way of saying: your devotion rises to Heaven and is received with pleasure. God is not indifferent to what you bring. He smells it, receives it, accepts it.',
        },
        {
          kind: 'carry',
          html:
            'Your devotion does not need to be perfect or elaborate to matter. Whether it is deep-baked through long suffering, or baked quickly in a shallow season, or poured out hot without much form — if it is made of fine flour, if it is anointed with oil, if it rises as a memorial to Heaven, God receives it and calls it sweet. The form varies; the acceptance is constant.',
        },
        {
          kind: 'reflection',
          id: 'lev2-oven-pan-griddle',
          prompt:
            'Which of these three — the deep oven, the shallow pan, the quick griddle — feels like the season you&apos;re in right now? What is being baked in you?',
        },
      ],
    },

    /* ─── Leviticus 2:11–13 — No Leaven, No Honey, But Salt ────────────── */
    {
      ref: 'Leviticus 2:11–13',
      title: 'The Covenant of Salt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 11,
              spans: [
                t('No meat offering, which ye shall bring unto the Lord, shall be made with '),
                hy('leaven', 'lev2-leaven'),
                t(': for ye shall burn no '),
                hy('leaven', 'lev2-leaven2'),
                t(', nor any '),
                hy('honey', 'lev2-honey'),
                t(', in any offering of the Lord made by fire.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev2-leaven',
          html:
            'Leaven is forbidden in the grain offering, as it is in most offerings (except the wave loaves of Pentecost). Leaven is a symbol of corruption — yeast ferments, transforms, causes dough to puff up with gas. An offering that has fermented is an offering compromised. For the reader after the cross, Paul will make this explicit: "Therefore let us keep the feast, not with old leaven, neither with the leaven of malice and wickedness; but with the unleavened bread of sincerity and truth" (1 Corinthians 5:8). Every time you see "no leaven" in Leviticus, hear Paul naming what leaven represents.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-se-or',
          title: 'Se&apos;or — "leaven"',
          script: 'שְׂאוֹר',
          translit: '<strong>se&apos;or</strong> · leaven, ferment, corruption',
          description:
            'The word is related to "se&apos;ar," to rise. Leaven causes things to rise, to puff, to change their nature through chemical decay. It represents anything that makes an offering false.',
        },
        {
          kind: 'commentary',
          id: 'lev2-leaven2',
          html:
            'The prohibition is stated twice in verse 11 — "ye shall burn no leaven, nor any honey." This repetition is not accident. Leaven and honey are paired as twin perils.',
        },
        {
          kind: 'commentary',
          id: 'lev2-honey',
          html:
            'Honey is also forbidden — strange at first, since honey is sweet, natural, a gift of the earth. But honey ferments easily. More than that, honey is not part of the dietary regime God prescribes for Israel. And there is something in the logic: an offering sweetened with honey is an offering that tastes good to us, that panders to our own appetite. But this offering is not made for us to enjoy; it is made for God. If it needs sweetening at all, let that sweetening come from God Himself, not from our own adding.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 12,
              spans: [
                t('As for the oblation of the firstfruits, ye shall offer them unto the Lord: but they shall not be burnt on the altar for a sweet savour.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And every oblation of thy meat offering shalt thou '),
                hg('season with salt', 'lev2-salt'),
                t('; neither shalt thou suffer the '),
                hg('salt of the covenant', 'lev2-covenant-salt'),
                t(' of thy God to be lacking from thy meat offering: with all thine offerings thou shalt offer salt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev2-salt',
          html:
            'And now the command that reshapes the whole offering: season all of it with salt. Salt preserves; salt makes things last. Salt also binds — it draws flavors together, makes distinct things cohere. In the ancient world, eating salt together was an oath, a covenant. Salt cannot be unsalted. Once it is there, it remains.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-melach',
          title: 'Melach — "salt"',
          script: 'מֶלַח',
          translit: '<strong>melach</strong> · salt, covenant sign, that which binds',
          description:
            'Salt in Scripture is always tied to covenant. "The salt of the covenant of your God" is the phrase here. Salt is the ingredient that cannot be undone, cannot be forgotten, cannot be unmade.',
        },
        {
          kind: 'commentary',
          id: 'lev2-covenant-salt',
          html:
            'The phrase is stunning: "the salt of the covenant of thy God." This is not just salt that flavors; this is salt that binds covenant. Every offering that goes to God is to be seasoned with the salt of His covenant — the binding, the oath, the promise that what is offered is offered within a relationship that cannot be broken. Your devotion is not a transaction; it is a covenant act.',
        },
        {
          kind: 'carry',
          html:
            'If anything in your life feels corrupted by leaven — by small hypocrisies, by compromises that seemed small but have fermented — the offering you bring now need not carry them forward. The flour can be fine; the oil can anoint it. And it is salt that makes it whole, salt that binds it to God&apos;s covenant. What you offer now, He receives as oath, as binding, as forever. Not because you are perfect, but because the salt of His covenant is in it.',
        },
        {
          kind: 'reflection',
          id: 'lev2-salt-covenant',
          prompt:
            'Where do you sense leaven or honey in the way you&apos;ve been living? What would it mean to "season with salt" — to bring that same life back into covenant, back into binding promise?',
        },
      ],
    },

    /* ─── Leviticus 2:14–16 — Firstfruits and the Priest's Portion ────── */
    {
      ref: 'Leviticus 2:14–16',
      title: 'The First and the Priest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 14,
              spans: [
                t('And if thou offer a meat offering of thy firstfruits unto the Lord, thou shalt offer for the meat offering of thy firstfruits '),
                hg('green ears of corn', 'lev2-greenears'),
                t(' dried by the fire, even '),
                hg('corn beaten out of full ears', 'lev2-beaten'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev2-greenears',
          html:
            'Green ears — the early harvest, not yet fully mature. This is an offering of firstfruits, which means it comes before the full harvest is in, before the year has unfolded in security. To offer firstfruits is to trust that the rest will follow. To offer them while they are still green is to offer from hope rather than abundance.',
        },
        {
          kind: 'commentary',
          id: 'lev2-beaten',
          html:
            'The ears must be dried by fire and beaten out — the kernels separated from the chaff and husk. This is labor-intensive; this is deliberate. The firstfruit offering is not casual. It is presented fully prepared, ready for use, no shortcuts.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 15,
              spans: [
                t('And thou shalt put oil upon it, and lay frankincense thereon: it is a meat offering.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the priest shall burn the memorial of it, '),
                hp('part of the beaten corn thereof, and part of the oil thereof', 'lev2-priest-portion'),
                t(', with all the frankincense thereof: it is an offering made by fire unto the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev2-priest-portion',
          html:
            'The priest receives a portion. This is not accidental. The priest is the mediator between God and the people — he stands in the gap, he ministers in the holy place, he carries the burdens of the people before God. He is sustained by the offerings the people bring. When you bring an offering, part of your devotion feeds those who minister. Your gifts strengthen not only your own covenant with God but the priestly office itself.',
        },
        {
          kind: 'christ',
          id: 'christ-bread-life',
          title: 'Christ Connection — The Bread of Life',
          html:
            '"Jesus said unto them, I am the bread of life: he that cometh to me shall never hunger" (John 6:35). The grain offering points directly to Jesus: the fine flour, ground and refined; the oil, the Spirit poured out; the frankincense, the sweet aroma of His devotion; the oven, where He was baked in suffering; no leaven, no corruption in Him; and the salt of covenant, binding us to Him forever. And like the grain offering that is broken and distributed to the priests and the people, Jesus took bread, gave thanks, broke it, and said, "This is my body, which is given for you" (Luke 22:19). He is the offering, and He becomes the food. The grain offering is the foreshadow; Jesus is the fullness.',
        },
        {
          kind: 'carry',
          html:
            'Every time you eat bread — whether as a simple meal or as a memorial of Christ&apos;s body — you are eating a grain offering. You are receiving the gift of the fields, the work of the harvest, transformed by fire, divided among a community. This is the minchah made flesh. Let it taste like covenant, like salt, like the binding promise that Jesus has made to you and you to Him.',
        },
        {
          kind: 'reflection',
          id: 'lev2-bread-covenant',
          prompt:
            'How might the next meal you eat — the next time you taste bread — become a moment of remembering your covenant with Jesus?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Every grain offering is seasoned with salt — the salt of the covenant of God. What you offer in devotion is offered within a covenant that cannot be broken.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 2 · Study Guide',
  },

  hasHebrew: true,
};
