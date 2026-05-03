import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 3 — the peace offering (shelamim).
 *
 * Where the burnt offering was about total devotion, and the sin offering
 * about reconciliation, the peace offering is about communion. The worshipper
 * brings cattle, sheep, or goat. The fat and certain organs are burned for God.
 * But here is the revolutionary thing: the worshipper and his family eat most
 * of the meat. A shared meal in God&apos;s presence. God gets the honored portion
 * (the fat), but the feast belongs to the giver. Shalom is re-established not
 * through distance or fear, but through table fellowship.
 */
export const LEVITICUS_3: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 3,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 11 },
  intros: [
    'The peace offering is the only sacrifice where the worshipper sits down to eat. The burnt offering ascends entirely to the altar. The sin offering is mostly consumed at the altar, its meat never tasted by the giver. But the peace offering — the <em>shelamim</em>, from the root <em>shalom</em>, meaning peace and wholeness — reverses the old pagan pattern of appeasement. God does not demand the whole animal. He is content with the fat, the kidneys, the liver. The rest is a meal. The worshipper, his family, the priest beside him, eating together in God&apos;s courtyard. This is the gospel in shadow: restoration through relationship, not terror. Fellowship, not distance.',
    'Three variations fill this chapter — cattle (vv.1–5), sheep (vv.7–11), and goats (vv.12–17). The instructions are almost identical, which tells us something important: shalom tastes the same whether you bring wealth or less. The bottom line is always the same: God gets the fat and the blood. You get to feast. And the forbidden fat and blood reserve to God what is most prized — a principle woven into every offering. In fellowship with God, He still gets the honored portion.',
  ],

  bottomShare: {
    label: 'Share Leviticus 3',
    quote:
      'The peace offering is a sacrifice where God and the worshipper share a meal. The fat is burned for God, the meat is eaten by the worshipper and his family. Shalom — peace and wholeness — comes through communion at God&apos;s table.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 3 · Study Guide',
  },

  sections: [
    /* ─── Leviticus 3:1–5 — The Cattle Offering ───────────────────────────── */
    {
      ref: 'Leviticus 3:1–5',
      title: 'Cattle: The Wealthy&apos;s Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('And if his oblation be a sacrifice of '),
                hg('peace offering', 'c-shalom-offering'),
                t(', if he offer it of the herd; whether it be a male or female, he shall offer it without blemish before the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shalom-offering',
          html:
            'The word <em>shelamim</em>, peace offering, comes from <em>shalom</em> — a word meaning peace, wholeness, completeness, well-being. A shalom offering is not about covering guilt or proving devotion. It is about celebrating restored relationship. The giver brings a perfect animal, but not to be destroyed — to be shared.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 2,
              spans: [
                t('And he shall lay his hand upon the head of his offering, and '),
                hg('kill it at the door of the tabernacle of the congregation', 'c-lay-hand'),
                t(': and Aaron&apos;s sons the priests shall sprinkle the blood upon the altar round about.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lay-hand',
          html:
            'The same gesture as in the burnt offering: the giver&apos;s hand on the animal&apos;s head, identifying with it. The offering is not a stranger being sent in his place — it is a surrogate for the giver himself, standing at the door where heaven and earth meet. The blood is sprinkled on the altar, because blood holds life, and life belongs to the LORD.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 3,
              spans: [
                t('And he shall offer of the sacrifice of the peace offering an offering made by fire unto the LORD; '),
                hg('the fat that covereth the inwards, and all the fat that is upon the inwards', 'c-fat'),
                t(','),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the two kidneys, and the fat that is on them, which is by the flanks, and '),
                hg('the caul above the liver', 'hebrew-caul'),
                t(', with the kidneys, it shall he take away.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-caul',
          title: 'Caul — &ldquo;covering&rdquo;',
          script: 'יֹתֶרֶת',
          translit: '<strong>yoteret</strong> · a flap or lobe of the liver',
          description:
            'The caul is the fatty lobe of the liver. Why these parts? Fat and organs were considered the most precious, most full of life-energy. By reserving them for God&apos;s portion, the offering says: to You belong the things I value most, not my leftovers.',
        },
        {
          kind: 'commentary',
          id: 'c-fat',
          html:
            'The fat is what God gets — the richest, most delicious part of the animal. In the ancient Near East, fat was prized above meat; it was the luxury. The law of the peace offering is elegant: everything else is for the giver and his family. But the fat, and the blood, belong to the LORD. In fellowship with God, He still gets the honored portion.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 5,
              spans: [
                t('And Aaron&apos;s sons shall '),
                hg('burn it on the altar upon the burnt offering', 'c-burnt-offering'),
                t(', which is upon the wood that is on the fire: it is an offering made by fire, of a sweet savour unto the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-burnt-offering',
          html:
            'The fat of the peace offering ascends on top of the burnt offering already on the altar. The two offerings are woven together — the whole devotion of the burnt offering, and the communion of the peace offering, rising together in smoke.',
        },
        {
          kind: 'christ',
          id: 'christ-shalom',
          title: 'Christ Connection — Peace Through a Body',
          html:
            'Ephesians 2:14 names Jesus as our shalom: &ldquo;He is our peace.&rdquo; In John 6:53–56, Jesus takes the metaphor of the peace offering and makes it literal. &ldquo;Except ye eat the flesh of the Son of man, and drink his blood, ye have no life in you… For my flesh is meat indeed, and my blood is drink indeed… he that eateth me, even he shall live by me.&rdquo; The peace offering was always pointing to the gospel meal — the Eucharist, the table where God and the worshipper sit together. Revelation 19:9 closes the Bible with an eschatological vision: the marriage supper of the Lamb, the eternal peace offering, where we feast with God forever.',
        },
        {
          kind: 'carry',
          html:
            'Most of us live as if God is too holy for a meal with us, or too angry, or too distant. The peace offering says something radically different. God does not fear your table. He does not need your guilt-offerings more than your joy. The meal you share in His presence — breakfast with a friend, a conversation over coffee, Sunday worship, the Eucharist itself — is closer to His heart than you may realize. You are echoing a pattern older than Christianity itself. Table fellowship is how peace is made.',
        },
        {
          kind: 'reflection',
          id: 'lev3-cattle',
          prompt:
            'What table have you sat at lately where you felt the presence of God? What would change if you believed He delights in eating with you?',
        },
      ],
    },

    /* ─── Leviticus 3:6–11 — The Sheep Offering ────────────────────────── */
    {
      ref: 'Leviticus 3:6–11',
      title: 'Sheep: The Middle Way',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 6,
              spans: [
                t('And if his offering for a sacrifice of peace offering unto the LORD be of the flock; male or female, he shall offer it without blemish.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('If he offer a lamb for his offering, then shall he offer it before the LORD;'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he shall lay his hand upon the head of his offering, and kill it before the tabernacle of the congregation: and Aaron&apos;s sons shall sprinkle the blood thereof round about upon the altar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lamb-flesh',
          html:
            'A lamb is smaller than cattle, a step down in cost but not in significance. The ritual is identical; the words are the same. The law of the peace offering is democratic: whether the worshipper has wealth or less, the shape of shalom tastes the same. The same hand on the head, the same blood on the altar, the same fat for God, the same feast for the giver.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 9,
              spans: [
                t('And he shall offer of the sacrifice of the peace offering an offering made by fire unto the LORD; the fat thereof, and the whole rump, it shall he take away hard by the backbone; and the fat that covereth the inwards, and all the fat that is upon the inwards,'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the two kidneys, and the fat that is upon them, which is by the flanks, and the caul above the liver, with the kidneys, it shall he take away.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 11,
              spans: [
                t('And the priest shall '),
                hg('burn it upon the altar', 'c-priest-burn'),
                t(': it is the food of the offering made by fire unto the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-priest-burn',
          html:
            'The phrase is simple and profound: &ldquo;the food of the offering made by fire unto the LORD.&rdquo; God is described as eating the sacrifice. The fat ascends in smoke, and He partakes of it. It is not a metaphor; it is the Bible&apos;s way of expressing the reality that God is pleased, fed, satisfied by the worship of His people.',
        },
        {
          kind: 'carry',
          html:
            'A poor widow may bring a lamb where a landowner brings cattle. But when she lays her hand on its head, when the blood is sprinkled, when the fat rises in smoke, God&apos;s portion is no less precious, and her feast is no less real. Whatever you have to offer Him, His pleasure in it is not measured by its market price. Your bread, your time, your presence — these are the food of His altar.',
        },
        {
          kind: 'reflection',
          id: 'lev3-sheep',
          prompt:
            'If God&apos;s pleasure in your offering is not measured by cost or status, what would you bring to His table this week?',
        },
      ],
    },

    /* ─── Leviticus 3:12–17 — The Goat Offering & The Blood Covenant ───── */
    {
      ref: 'Leviticus 3:12–17',
      title: 'Goat: The Forbidden Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 12,
              spans: [
                t('And if his offering be a goat, then he shall offer it before the LORD.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And he shall lay his hand upon the head of it, and kill it before the tabernacle of the congregation: and the sons of Aaron shall sprinkle the blood thereof upon the altar round about.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Then he shall offer thereof his offering, even an offering made by fire unto the LORD; the fat that covereth the inwards, and all the fat that is upon the inwards,'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the two kidneys, and the fat that is upon them, which is by the flanks, and the caul above the liver, with the kidneys, it shall he take away.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the priest shall '),
                hg('burn them upon the altar', 'c-goat-burn'),
                t(': it is the food of the offering made by fire for a sweet savour: all the fat is the LORD&apos;s.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-goat-burn',
          html:
            'Even the goat, the least of the three animals, follows the same law. Three variations, one pattern. A worshipper&apos;s wealth may differ, but the taste of shalom does not. In every case: God receives the fat, the worshipper receives the feast.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 17,
              spans: [
                t('It shall be a '),
                hy('perpetual statute', 'hebrew-olam'),
                t(' for your generations throughout all your dwellings, that ye eat neither '),
                hy('fat nor blood', 'c-blood-covenant'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-olam',
          title: 'Olam — &ldquo;perpetual, forever&rdquo;',
          script: 'עוֹלָם',
          translit: '<strong>olam</strong> · forever, perpetual, eternity',
          description:
            'This law does not expire. It is not just for the wilderness generation. It stands as long as the covenant stands. Even in the New Testament, when Peter and the Jerusalem council address Gentiles who have entered the church, they affirm this prohibition (Acts 15:29): no blood, no strangled animals. Some boundaries, God keeps.',
        },
        {
          kind: 'commentary',
          id: 'c-blood-covenant',
          html:
            'The fat and the blood are forbidden to the worshipper. Why? Because they are God&apos;s portion. The blood is life itself — &ldquo;the life of the flesh is in the blood&rdquo; (Lev. 17:11). Life belongs to the LORD, not to us. The fat is the richest, most valuable part. These are reserved to God because in fellowship with Him, we do not take the throne. We do not consume what is only His to consume. The boundary between the human and the divine is kept. And in keeping it, we honor the distance even as we enjoy the meal.',
        },
        {
          kind: 'christ',
          id: 'christ-blood',
          title: 'Christ Connection — The Blood Covenant',
          html:
            'Every Eucharist echoes this boundary. &ldquo;This is my blood of the covenant, which is shed for many for the remission of sins&rdquo; (Matt. 26:28). The one thing the believer is commanded to do with Christ&apos;s blood is drink it — a reversal so startling the apostles could not believe it. But the principle underneath is the same. Blood belongs to God. In the Old Covenant, we are forbidden it. In the New Covenant, only Christ&apos;s blood is for us — and in receiving it, we participate in the covenant that He alone can make. His blood, and only His, is given freely for the many.',
        },
        {
          kind: 'carry',
          html:
            'The line &ldquo;neither fat nor blood&rdquo; marks a boundary. In a world that teaches us to take what we want, to blur all distinctions, to consume endlessly, this ancient law says something radical: some things belong only to God. Your life is not your own property to spend however you like. Your time, your energy, your body — these are held in trust, not owned outright. The feast is real and yours to eat. But the altar is still God&apos;s. And the boundary between them is where humility lives.',
        },
        {
          kind: 'reflection',
          id: 'lev3-boundary',
          prompt:
            'Where have you blurred the line between what is yours and what belongs only to God? What would change if you kept that boundary holy?',
        },
      ],
    },
  ],
};
