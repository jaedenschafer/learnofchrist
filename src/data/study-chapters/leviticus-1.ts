import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 1 — The Burnt Offering.
 *
 * The first instruction God gives to the newly freed people is not about
 * behavior or rules—it is about access. How does a sinner draw near to a holy
 * God? Through an offering. The word is qorban, which literally means "to draw
 * near." The burnt offering is olah, "that which goes up"—wholly consumed,
 * nothing kept back. It is the most basic sacrifice: a male animal, unblemished,
 * the worshiper&apos;s hand laid on its head—a laying on that means everything.
 * Substitution. The animal dies so the worshiper lives.
 *
 * Three tiers: a bull from the herd, a sheep or goat from the flock, or (for
 * the poor) a turtledove or young pigeon. The wealth divides; the access does
 * not. A widow and a priest both stand before God the same way: through a
 * substitute. Through a death that is not their own.
 *
 * Hebrews 10:5-10 quotes the burnt offerings and names them as fulfilled in
 * Christ. "Lo, I come to do thy will, O God." Hebrews 13:11-12 places Jesus
 * outside the gate as the perfect burnt offering. Every detail—the laying on of
 * hands, the blood at the altar, the whole carcass consumed by fire—is answered
 * in the One who became a curse outside Jerusalem so that sinners could draw near.
 */
export const LEVITICUS_1: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 1,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 13 },
  intros: [
    'Leviticus is not a book most readers turn to first. It is full of rules, animal blood, priestly instructions, and the word "abomination." But it opens with something else entirely: not a law, not a prohibition, but a word about access. "And the LORD called unto Moses, and spake unto him out of the tabernacle of the congregation, saying..." What God is about to teach is how sinners can draw near. Leviticus is a book about holiness—but not holiness that keeps people away. Holiness that makes room for sinners to come.',
    'The burnt offering is the first sacrifice, the most basic one, the one that opens the door. It is called olah in Hebrew, a word that means "that which goes up"—the whole animal, wholly consumed by fire, nothing reserved, nothing kept back for the priest or the worshiper. It rises as a smell, a savor, to the Lord. And before the animal is killed, before the blood flows, before the fire consumes it all, the worshiper lays his hand on the animal&apos;s head. This act—samakh yad, "the laying on of the hand"—is the heart of the entire sacrifice. It means: this animal is my substitute. My hand marks it. My guilt is transferred. My death becomes its death. So I can live.',
    'Three choices—bull, sheep, or bird. The wealthy bring a bull. The middle class bring a sheep or goat. The poor bring a turtledove or pigeon. Mary, when she brought the infant Jesus to the temple, brought two turtledoves—the poor person&apos;s offering. Access to God in the Old Testament does not depend on money. It depends on willingness. The poorest person in Israel could stand before the altar with exactly the same covenant sign as the richest. And that poor person&apos;s offering points forward to the One who became poor so that we could become rich.',
  ],

  sections: [
    /* ─── Leviticus 1:1–2 — The Call ────────────────────────────────── */
    {
      ref: 'Leviticus 1:1–2',
      title: 'The Call',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD '),
                hp('called unto Moses', 'call-to-draw-near'),
                t(', and spake unto him out of the tabernacle of the congregation, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Speak unto the children of Israel, and say unto them, '),
                hy('If any man of you bring an offering unto the LORD', 'qorban-draw-near'),
                t(', ye shall bring your offering of the '),
                hy('cattle', 'behemah-herd'),
                t(', even of the herd, and of the flock.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'call-to-draw-near',
          html:
            'God does not issue commands first. He opens a door. He calls. The tabernacle is the new space where God dwells—the holy place where no one should be able to approach. And yet the first word from that tabernacle is: I am going to teach you how to come.',
        },
        {
          kind: 'hebrew',
          id: 'qorban-draw-near',
          title: 'Qorban — &ldquo;offering&rdquo;',
          script: 'קָרְבָּן',
          translit: '<strong>qorban</strong> · an offering; literally "that which brings near"',
          description:
            'The root is qarab, "to draw near." The offering is not merely a gift to appease an angry god. It is the means by which a sinner draws near to a holy God. It is access. It is the way in.',
        },
        {
          kind: 'hebrew',
          id: 'behemah-herd',
          title: 'Behemah — &ldquo;cattle&rdquo;',
          script: 'בְהֵמָה',
          translit: '<strong>behemah</strong> · large herd animals; the livestock of the household',
          description:
            'Not wild animals. Not something captured or hunted. The behemah is domesticated, known, part of the household. The animal the worshiper brings is one he tends, one he knows, one that costs him something.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world where access seems conditional on worthiness—access to certain people, certain places, certain futures. But the first word Leviticus hears from God is that He is teaching a way for you to draw near. Not when you are worthy. Not after you clean up. Now. The door is open. And the way in has a name: the offering. The substitute.',
        },
        {
          kind: 'reflection',
          id: 'reflect-call',
          prompt:
            'When you hear God call and say "I will teach you how to draw near," what in you wants to believe it? What resists?',
        },
      ],
    },

    /* ─── Leviticus 1:3–9 — The Burnt Offering of the Herd ─────────── */
    {
      ref: 'Leviticus 1:3–9',
      title: 'The Burnt Offering of the Herd',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('If his offering be a burnt sacrifice of the herd, let him offer a male '),
                hy('without blemish', 'tamim-unblemished'),
                t(': he shall offer it of his own voluntary will at the door of the tabernacle of the congregation before the LORD.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And '),
                hy('he shall put his hand upon the head of the burnt offering', 'samakh-laying-on'),
                t('; and it shall be accepted for him '),
                hp('to make atonement for him', 'atonement-substitution'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And he shall kill the bullock before the LORD: and the priests, Aaron&apos;s sons, shall bring the blood, and sprinkle the blood round about upon the altar that is by the door of the tabernacle of the congregation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'leviticus_1_v3-9',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 6,
              spans: [
                t('And he shall flay the burnt offering, and cut it into his pieces.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the sons of Aaron the priest shall put fire upon the altar, and lay the wood in order upon the fire:'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the priests, Aaron&apos;s sons, shall lay the parts, the head, and the fat, in order upon the wood that is on the fire which is upon the altar:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('But his inwards and his legs shall he wash in water: and the priest shall burn all on the altar, '),
                hg('to be a burnt sacrifice, an offering made by fire', 'olah-ascends'),
                t(', of a '),
                hg('sweet savour', 'sweet-savor'),
                t(' unto the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'tamim-unblemished',
          title: 'Tamim — &ldquo;without blemish&rdquo;',
          script: 'תָּמִים',
          translit: '<strong>tamim</strong> · perfect, whole, unblemished; complete',
          description:
            'Not a scar, not a limp, not a defect. The animal must be perfect. When Peter later writes of Christ, he uses the same word: &quot;a lamb without blemish and without spot&quot; (1 Pet. 1:19).',
        },
        {
          kind: 'hebrew',
          id: 'samakh-laying-on',
          title: 'Samakh Yad — &ldquo;lay the hand&rdquo;',
          script: 'סָמַךְ יָד',
          translit: '<strong>samakh yad</strong> · to place the hand upon; to lay on, to lean on',
          description:
            'This is the act that makes the sacrifice work. The worshiper places his hand on the animal&apos;s head and, in that gesture, identifies with the substitute. His guilt transfers to it. His death becomes its death. So he can live.',
        },
        {
          kind: 'commentary',
          id: 'atonement-substitution',
          html:
            '[res:sbl-sacrificial-system] The word is kippur—to make atonement, to cover, to propitiate. And it is not magical. It works because of what the laying on of the hand means: this animal is taking my place. It is voluntary—"of his own voluntary will." The sinner chooses to come. He chooses to bring the substitute. He chooses to lay his hand on its head and mark the transfer of guilt. This is not coercion. This is access opened.',
        },
        {
          kind: 'commentary',
          id: 'olah-ascends',
          html:
            'The Hebrew olah literally means "that which goes up." It is the only sacrifice wholly consumed by fire. Nothing is reserved for the priest. Nothing is reserved for the worshiper. The entire animal ascends in smoke. It is not a meal. It is an ascension. And in that ascension, the atonement is complete.',
        },
        {
          kind: 'commentary',
          id: 'sweet-savor',
          html:
            'The phrase "sweet savour" appears seven times in Leviticus—once for each category of offering that draws near to God. It is not that God needs food or enjoyment; it is that God accepts the offering. The smell rising skyward is the sign that the sacrifice has been received. The sinner is accepted. Access is granted.',
        },
        {
          kind: 'christ',
          id: 'christ-olah-ascends',
          title: 'Christ Connection — The Offering That Ascends',
          html:
            '[res:intertextual-hebrews-10] Hebrews 10:5-10 quotes Psalm 40 and reads it as Christ speaking: "Lo, I come to do thy will, O God... by the which will we are sanctified through the offering of the body of Jesus Christ once for all." Christ is the burnt offering. His body is laid on the altar of the cross. His blood is poured out. And His sacrifice ascends to God the Father as a sweet savor—accepted, complete, needing nothing more. Every old covenant burnt offering points to this one sacrifice that makes access permanent.',
        },
        {
          kind: 'carry',
          html:
            'The laying on of the hand connects you to the substitute. That transfer—my guilt to the animal, my death to it—is what saves. And when you stand before God, you do not stand alone. You stand marked by the hand of another. You stand in the identity of the One whose body was offered. His perfection covers your defect. His ascension is your access. His sweet savor rising is the sign that you are accepted.',
        },
        {
          kind: 'reflection',
          id: 'reflect-herd',
          prompt:
            'The hand laid on the animal is the moment the transfer happens. What would it mean to place your hand, right now, on the One who became your substitute?',
        },
      ],
    },

    /* ─── Leviticus 1:10–13 — The Burnt Offering of the Flock ─────── */
    {
      ref: 'Leviticus 1:10–13',
      title: 'The Burnt Offering of the Flock',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 10,
              spans: [
                t('And if his offering be of the flocks, namely of the sheep, or of the goats, for a burnt sacrifice; he shall bring it a male without blemish.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And he shall kill it on the side of the altar northward before the LORD: and the priests, Aaron&apos;s sons, shall sprinkle his blood round about upon the altar.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he shall cut it into his pieces, with his head and his fat: and the priest shall lay them in order upon the wood that is on the fire which is upon the altar:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('But he shall wash the inwards and the legs with water: and the priest shall bring it all, and burn it upon the altar: it is a burnt sacrifice, an offering made by fire, of a sweet savour unto the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'flock-substitute',
          html:
            'The process is the same, whether herd or flock. The same ritual. The same laying on of hands. The same ascension. The cost differs—a sheep costs less than a bull. But the access is identical. A poor person can enter the holiness of God by the same covenant sign as a wealthy person. The difference in wealth does not create a difference in acceptance before God.',
        },
        {
          kind: 'carry',
          html:
            'You have seen someone wealthy choose a costly gift for someone they love, and someone poor choose something humble. The value differs. The love, the sacrifice, the offering—these are the same. God does not measure His welcome by the weight of your offering or the size of your sacrifice. He measures it by the truth of your substitution: you have laid your hand on the One who goes up in your place.',
        },
      ],
    },

    /* ─── Leviticus 1:14–17 — The Burnt Offering of Birds ────────── */
    {
      ref: 'Leviticus 1:14–17',
      title: 'The Burnt Offering of Birds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 14,
              spans: [
                t('And if the burnt sacrifice for his offering to the LORD be of fowls, then he shall bring his offering of turtledoves, or of young pigeons.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the priest shall bring it unto the altar, and wring off his head, and burn it on the altar; and the blood thereof shall be wrung out at the side of the altar:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he shall pluck away his crop with his feathers, and cast it beside the altar on the east part, by the place of the ashes:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And '),
                hy('he shall cleave it with the wings thereof', 'pinion-split'),
                t(', but shall not divide it asunder: and the priest shall burn it upon the altar, upon the wood that is upon the fire: it is a burnt sacrifice, an offering made by fire, of a sweet savour unto the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'pinion-split',
          title: 'Pinion — &ldquo;wing&rdquo;',
          script: 'פִּנְיוֹן',
          translit: '<strong>pinion</strong> · the wing; the pinion-joint; to cleave at the wings',
          description:
            'The bird is split open at the wings but not divided completely. It remains, in a sense, whole even in its breaking. A small gesture toward the holiness being honored: even the poorest offering receives a reverence that does not hack it to pieces.',
        },
        {
          kind: 'commentary',
          id: 'poor-offering',
          html:
            '[res:sefaria-olah-midrash] A turtledove or a young pigeon. The poor person&apos;s offering. The Widow of Zarephath would have brought a bird. Hannah at the temple would have brought a bird. Mary, when she brought the infant Jesus to the temple for consecration, brought two turtledoves—the poor person&apos;s offering (Luke 2:24). The youngest of Jesus, the holiest person who ever lived, entered the temple through the poorest offering available. Access is not measured by wealth. The altar receives a pigeon with the same sweet savor as a bull.',
        },
        {
          kind: 'christ',
          id: 'christ-poor-offering',
          title: 'Christ Connection — The Poor Person&apos;s Offering',
          html:
            'Luke deliberately includes the detail that Mary and Joseph offered a pair of turtledoves. He is reading the Passover law back into the law of Leviticus. Jesus, who would become the Lamb of God, was brought to the temple with the offering of the poor. And forty days later, He would be presented at the altar, sanctified to God, identified with the very poorest sign of access. The One who would become rich so that sinners could become rich (2 Cor. 8:9) entered the temple as a poor person&apos;s offering.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to bring gold to buy your way to God. You do not have to be wealthy, powerful, impressive. You can come as poor as a widow. You can come with as little as a bird. The ritual does not change. The sweet savor still rises. The atonement still works. Your substitution is accepted. The smallest offering, laid on the altar with the sincere hand of repentance, is enough.',
        },
        {
          kind: 'reflection',
          id: 'reflect-birds',
          prompt:
            'If Jesus entered the temple as a poor person&apos;s offering, what does it mean that your coming to God does not require wealth or status—only willingness to lay your hand on the substitute?',
        },
        {
          kind: 'artwork',
          matchTitle: /burnt.*offering|offering.*fire|altar.*smoke/i,
          caption: 'Leviticus 1 · The Burnt Offering Ascends',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Leviticus 1',
    quote:
      'The burnt offering is how sinners draw near to a holy God. A substitute is chosen—bull, sheep, or bird—laid on the altar. The worshiper lays his hand on its head. His guilt transfers. His death becomes its death. And the whole offering ascends in smoke, a sweet savor to the Lord. Access is granted.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 1 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-olah-midrash',
      kind: 'archive',
      source: 'Sefaria',
      label: 'Olah in Rabbinic and Medieval Exegesis',
      url: 'https://www.sefaria.org/Leviticus.1',
      description: 'Traditional Jewish interpretations of the burnt offering\'s meaning, including commentary on the laying on of hands and substitution theology.',
    },
    {
      id: 'intertextual-hebrews-10',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Hebrews 10:5-10 and Psalm 40 — Christ as Olah',
      url: 'https://intertextual.bible/',
      description: 'Cross-references and analysis of how the New Testament reads Levitical burnt offerings as fulfilled in Christ\'s once-for-all sacrifice.',
    },
  ],

  hasHebrew: true,
};
