import { hp, hy, hg, t, type RichChapterContent } from './types';

export const EXODUS_29: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 29,

  intros: [
    'Exodus 29 details the priestly consecration ritual — the filling of the priests&apos; hands with the weight of their office. Before Aaron and his sons can stand in the tabernacle and speak for Israel, they must be washed, dressed, anointed, and marked with blood. The ritual is exacting, performed only once, and its pieces — the bull for sin, the first ram for wholeness, the second ram of consecration with its blood on ear and thumb and toe — teach what it means to be set apart.',
    'God closes the chapter with a promise: "I will dwell among the children of Israel, and will be their God." The whole apparatus of tabernacle and priesthood exists because God intends to live in the midst of His people. Every detail of the consecration ceremony points to a people being prepared to host the presence of the God who came down the mountain.',
  ],

  sections: [
    /* ─── Exodus 29:1–3 — The Preparation ─────────────────────────────────── */
    {
      ref: 'Exodus 29:1–3',
      title: 'Preparation at the Door',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 1,
              spans: [
                t('And this is the thing that thou shalt do unto them to '),
                hy('hallow them', 'exo29-hallow'),
                t(', to minister unto me in the priest&apos;s office: Take one young bullook, and two rams without blemish,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And '),
                hg('unleavened bread', 'exo29-bread-comm'),
                t(', and cakes unleavened tempered with oil, and wafers unleavened anointed with oil: of wheaten flour shalt thou make them.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And thou shalt put them into one basket, and bring them in the basket, with the bullock and the two rams.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exo29-bread-comm',
          html:
            'Unleavened bread marks this as a set-apart occasion. Leaven in Scripture speaks of corruption, of what works in secret to puff things up. For the priesthood to begin, everything brought must be simple, whole, without the hidden working of leaven. The priests do not offer their own elaborate preparations; they bring what has been made clean.',
        },
        {
          kind: 'hebrew',
          id: 'exo29-hallow',
          title: 'Millu&apos;im — &ldquo;consecration&rdquo;',
          script: 'מִלֻּאִים',
          translit: '<strong>millu&apos;im</strong> · the filling of the hands',
          description:
            'Literally, "fillings." In the ancient Near East, to give someone authority was to "fill their hands" with power. This chapter fills the priests&apos; hands with the weight of standing before God on behalf of Israel.',
        },
        {
          kind: 'carry',
          html:
            'Being set apart by God never begins with fanfare. It begins with preparation — simple, obedient, done at the door. If God has called you to something, the first step is the unglamorous one: gathering what He has said, bringing it, and offering it. The bread at your feet before you ever stand.',
        },
        {
          kind: 'reflection',
          id: 'exo29-prep',
          prompt: 'What has God asked you to prepare before stepping into a new calling or season? What would it mean to gather it faithfully, even now?',
        },
      ],
    },

    /* ─── Exodus 29:4–9 — Washing, Clothing, Anointing ──────────────────────── */
    {
      ref: 'Exodus 29:4–9',
      title: 'Washed, Clothed, Anointed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 4,
              spans: [
                t('And Aaron and his sons thou shalt bring unto the door of the tabernacle of the congregation, and shalt '),
                hg('wash them with water', 'exo29-water-comm'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And thou shalt take the garments, and put upon Aaron '),
                hy('the coat, and the robe of the ephod', 'exo29-ephod'),
                t(', and the ephod, and the breastplate, and gird him with the curious girdle of the ephod:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And thou shalt put '),
                hy('the mitre upon his head', 'exo29-mitre'),
                t('; and upon the mitre thou shalt put the golden plate, the holy crown.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Then shalt thou take '),
                hg('the anointing oil', 'exo29-oil-comm'),
                t(', and pour it upon his head, and anoint him.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And thou shalt bring his sons, and put coats upon them.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And thou shalt gird them with girdles, Aaron and his sons, and put the bonnets on them: and the priest&apos;s office shall be theirs for a perpetual statute: and thou shalt consecrate Aaron and his sons.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exo29-water-comm',
          html:
            'Water first. Before any robes, before any oil, the body itself is made clean. The priests wash themselves — and Exodus is careful to note that Aaron&apos;s sons wash at the same place, at the same time. No one stands apart. All are equally in need of cleansing.',
        },
        {
          kind: 'commentary',
          id: 'exo29-oil-comm',
          html:
            'Oil is poured. In Scripture, anointing always marks a person for a purpose — not for privilege, but for work. The oil runs down Aaron&apos;s head and face and flows to the edges of his robe. Psalm 133 will later call this "precious" — the anointing oil running down the beard of the high priest, making all the priests a fragrant, unity-bound company.',
        },
        {
          kind: 'commentary',
          id: 'exo29-ephod-comm',
          html:
            'The ephod is a vest with two stones on the shoulders, each bearing the names of six tribes. When the priest enters the holy place, he carries Israel on his shoulders — literally, the names of God&apos;s people are pressed against his strength. The breastplate holds Urim and Thummim, mysterious stones for discerning God&apos;s will. Every piece of clothing speaks the priest&apos;s actual function: to bear Israel, to seek God&apos;s mind for them, to stand between heaven and earth.',
        },
        {
          kind: 'commentary',
          id: 'exo29-whole-comm',
          html:
            'Unlike the sin offering, this one is wholly burned. Every part — organs, legs, head, fat — all of it rises as smoke. The burnt offering means total surrender, the gift of everything, nothing held back. A sweet savour. The smell reaches God and He is pleased. The priests have given not what is required, but all that they are.',
        },
        {
          kind: 'commentary',
          id: 'exo29-wave-comm',
          html:
            'The wave offering moves the sacrifice before God — left and right, back and forth, up and down. It is shown to Him before it is given to the priest. The priest does not feed himself first. He presents what he has been given to God, receives God&apos;s blessing on it, and only then partakes. The rhythm is always: offer, then receive.',
        },
        {
          kind: 'commentary',
          id: 'exo29-breast-comm',
          html:
            'The breast — the place nearest the heart — becomes the priest&apos;s portion. He tends God&apos;s people with his whole heart, and God provides for him. The priest is cared for. He does not work for wages that come from those he serves. His care comes directly from the covenant.',
        },
        {
          kind: 'commentary',
          id: 'exo29-seven-days-comm',
          html:
            'Seven days of wearing the holy garments. Not a lifetime all at once, but one week to settle into it. Seven — the number of completion, of rest, of a full cycle. The priests are given time to become who they have been called to be.',
        },
        {
          kind: 'commentary',
          id: 'exo29-stranger-comm',
          html:
            'A stranger — anyone outside the priesthood — cannot eat of the consecration meal. This meal belongs only to those who have been marked. The privacy is not arrogance but protection. What is holy cannot be consumed casually. What has been paid for with blood is not for casual tasting.',
        },
        {
          kind: 'commentary',
          id: 'exo29-holiness-comm',
          html:
            'Most holy — the highest category of sacred space. The altar becomes so set apart that anything touching it becomes holy too. Holiness is not just a property of an object; it is contagious. Whatever meets the holy altar is drawn into its holiness.',
        },
        {
          kind: 'commentary',
          id: 'exo29-conclusion-comm',
          html:
            'The whole consecration ritual, the entire priesthood, the tabernacle, the altar — every detail serves one purpose: to make known that the Lord is the God of Israel. The power is not in the ritual but in the One who receives it.',
        },
        {
          kind: 'hebrew',
          id: 'exo29-ephod',
          title: 'Ephod — the priestly vest',
          script: 'אֵפוֹד',
          translit: '<strong>ephod</strong> · bearing; carrying',
          description:
            'The ephod means "bearing" or "carrying." Worn by the priest, it displays the twelve tribal names on its shoulders. A priest&apos;s job is literally to carry the people.',
        },
        {
          kind: 'hebrew',
          id: 'exo29-mitre',
          title: 'Mitre — the turban',
          script: 'מִצְנֶפֶת',
          translit: '<strong>mitznefet</strong> · a turban, a crown of office',
          description:
            'The high priest&apos;s headdress. On it sits the golden plate inscribed "Holy to the Lord." A priest&apos;s head is marked before God as belonging to holiness, not to his own ambition.',
        },
        {
          kind: 'carry',
          html:
            'Before you can lead anyone, you must be clean. Before you can be set apart, you must be clothed for the work — not dressed for admiration, but dressed for the actual task ahead. And before you stand, you are marked with oil — the strange, beautiful way God says: <em>you are Mine for this work, and no other power claims you.</em> Whatever you lead, teach, or tend — a family, a team, a craft — you are being asked to carry real people. On your shoulders. By name. That&apos;s the weight and the honor.',
        },
        {
          kind: 'reflection',
          id: 'exo29-wash',
          prompt: 'What needs to be washed clean in you before you step into the work God has for you? What does being clothed and anointed actually look like in your calling?',
        },
      ],
    },

    /* ─── Exodus 29:10–14 — The Sin Offering ──────────────────────────────── */
    {
      ref: 'Exodus 29:10–14',
      title: 'The Bull of Sin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 10,
              spans: [
                t('And thou shalt cause a bullock to be brought before the tabernacle of the congregation: and Aaron and his sons shall put their hands upon the head of the bullock.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And thou shalt kill the bullock before the Lord, by the door of the tabernacle of the congregation.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And thou shalt take of the blood of the bullock, and put it upon the horns of the altar with thy finger, and pour out all the blood beside the base of the altar.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And thou shalt take all the fat that covereth the inwards, and the caul that is above the liver, and the two kidneys, and the fat that is upon them, and burn them upon the altar.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('But '),
                hg('the flesh of the bullock', 'exo29-flesh-burn-comm'),
                t(', and his skin, and his dung, shalt thou burn with fire '),
                hy('without the camp', 'exo29-outside-comm'),
                t('; it is a sin offering.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exo29-hands',
          html:
            'The priests lay their hands on the bullock&apos;s head. This is not distant ritual. It is direct contact. They are transferring something — guilt, the need for cleansing, the weight of standing before God — to the animal. The bull dies in their place, carrying what they cannot carry into God&apos;s presence alone.',
        },
        {
          kind: 'commentary',
          id: 'exo29-flesh-burn-comm',
          html:
            'The bullock is torn into parts. The fat and organs are burned on the altar — the sweet part that rises to God. The flesh, skin, and dung are burned outside the camp — outside the congregation, outside the holy space. The people cannot look at it or walk past it. It is wholly consumed, completely gone. This is what happens to sin when God deals with it — complete removal, total consumption.',
        },
        {
          kind: 'commentary',
          id: 'exo29-outside-comm',
          html:
            'Outside the camp is where lepers live, where unclean things are burned, where what cannot remain among the people is destroyed. This is the exile of sin.',
        },
        {
          kind: 'hebrew',
          id: 'exo29-outside',
          title: 'Outside the Camp',
          script: 'מִחוּץ לַמַּחֲנֶה',
          translit: '<strong>mihutz lamachaneh</strong> · beyond the boundaries, ritually removed',
          description:
            'Outside the camp is where lepers live, where unclean things are burned, where what cannot remain among the people is destroyed. This is the exile of sin.',
        },
        {
          kind: 'christ',
          id: 'exo29-christ-sin',
          title: 'Christ Connection — Bearing Away the Sin',
          html:
            'The priests lay their hands on the bull, and the bull dies for their sin. Hebrews builds this directly to Jesus: "He is the sacrifice for our sins" and "He suffered without the gate" (Heb. 13:12). Jesus is the sin offering who dies outside the camp, carrying away what we cannot carry into God&apos;s presence. But there is more: He rises. The bullock is wholly consumed and gone. Jesus is consumed and rises, opening a way for the priests — for us — to actually come near.',
        },
        {
          kind: 'carry',
          html:
            'You cannot stand before God carrying what you&apos;ve done. The priesthood cannot begin there. It begins when you lay your hand on what Christ bore — the whole weight, the whole shame, the whole burning — and you watch it lifted away, consumed, finished. Not hidden. Not managed. Not slowly getting better. Finished. Then the oil can fall on your head.',
        },
        {
          kind: 'reflection',
          id: 'exo29-sin',
          prompt: 'What guilt or shame have you been carrying as if you had to manage it yourself? What would it mean to lay your hand on it and watch Christ carry it away entirely?',
        },
      ],
    },

    /* ─── Exodus 29:15–18 — The Burnt Offering ───────────────────────────── */
    {
      ref: 'Exodus 29:15–18',
      title: 'The Ram Wholly Burned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 15,
              spans: [
                t('Thou shalt also take one ram; and Aaron and his sons shall put their hands upon the head of the ram.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And thou shalt slay the ram, and thou shalt take his blood, and sprinkle it round about upon the altar.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And thou shalt cut the ram in pieces, and wash the inwards thereof, and his legs, and put them unto his pieces, and unto his head.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And thou shalt burn '),
                hg('the whole ram upon the altar', 'exo29-whole-comm'),
                t(': it is a burn offering unto the Lord: it is a sweet savour, an offering made by fire unto the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'There are two moments in becoming a priest: first, the laying down of your sin. Then, the laying down of your whole self — your ambitions, your control, your carefully managed life — as an offering. The first kills the old. The second says the new belongs wholly to the work. Not partly devoted. Not a priest Monday through Friday. All of it burning upward.',
        },
        {
          kind: 'reflection',
          id: 'exo29-burnt',
          prompt: 'Beyond confession, what would it look like to offer yourself wholly — not in fragments or on certain days, but your whole life burning upward? Name what that asks you to release.',
        },
      ],
    },

    /* ─── Exodus 29:19–25 — The Ram of Consecration ───────────────────────── */
    {
      ref: 'Exodus 29:19–25',
      title: 'Blood on Ear, Thumb, and Toe',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 19,
              spans: [
                t('And thou shalt take the other ram; and Aaron and his sons shall put their hands upon the head of the ram.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Then shalt thou kill the ram, and take of his blood, and put it upon the tip of the right ear of Aaron, and upon the tip of the right ear of his sons, and upon the thumb of their right hand, and upon the great toe of their right foot, and sprinkle the blood upon the altar round about.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And thou shalt take of the blood that is upon the altar, and of the anointing oil, and sprinkle it upon Aaron, and upon his garments, and upon his sons, and upon the garments of his sons with him: and he shall be hallowed, and his garments, and his sons, and his sons&apos; garments with him.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Also thou shalt take of the ram the fat and the rump, and the fat that covereth the inwards, and the caul above the liver, and the two kidneys, and the fat that is upon them, and the right shoulder; for it is a ram of consecration:'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And one loaf of bread, and one cake of oiled bread, and one wafer out of the basket of the unleavened bread that is before the Lord:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And thou shalt put all in the hands of Aaron, and in the hands of his sons; and shalt wave them for a wave offering before the Lord.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And thou shalt receive them of their hands, and burn them upon the altar for a sweet savour before the Lord: it is an offering made by fire unto the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exo29-ear-thumb-toe',
          html:
            'The blood touches three places: the ear, to consecrate hearing; the thumb, to consecrate work and strength; the great toe, to consecrate walking and direction. Everything a priest does — everything they hear, make, and go toward — is marked with the blood of the covenant. They are literally marked for God&apos;s purposes in body and in action. The priest does not hear for himself. His hands do not work for his own gain. His feet do not walk his own path.',
        },
        {
          kind: 'hebrew',
          id: 'exo29-consecrate',
          title: 'Consecrate — marked with blood',
          script: 'מִלֵּא אֶת־יָדוֹ',
          translit: '<strong>mille et yado</strong> · to fill the hand',
          description:
            'The consecration fills the priest&apos;s hands with authority and responsibility. The blood on ear, thumb, and toe fills the priest&apos;s whole person — what they hear, what they do, where they walk.',
        },
        {
          kind: 'christ',
          id: 'exo29-christ-consecrate',
          title: 'Christ Connection — Priests in His Blood',
          html:
            'The priests are marked with blood — ear, thumb, toe. Peter tells believers, "Ye are a chosen generation, a royal priesthood" (1 Pet. 2:9), and John adds that Christ "hath made us kings and priests unto God" (Rev. 1:6). Our consecration comes through His blood — shed once, applied eternally. When the letter to Hebrews unfolds the priesthood of Jesus, it explains that His blood does what all the rams of Exodus could never do: "By one offering he hath perfected for ever them that are sanctified" (Heb. 10:14). The blood marks us now. Our hearing, our work, our walking — all of it claimed and consecrated in His blood.',
        },
        {
          kind: 'carry',
          html:
            'There is blood on you. Not visible, but real. It marks your right ear — your hearing belongs to Him. It marks your right thumb — your hands are His. It marks your right toe — the path you walk is His. This is not a feeling. It is a fact written in covenant. When you hear something that pulls you away, you can touch your ear and remember: claimed. When your hands want to grab what isn&apos;t yours, you can remember: marked. When your feet want to wander from the calling, you can remember: blood. You are not your own.',
        },
        {
          kind: 'reflection',
          id: 'exo29-marked',
          prompt: 'Imagine the blood of Christ marking your ear, your hand, your foot. What would you hear differently? What would you do differently? Where would you walk differently?',
        },
        {
          kind: 'artwork',
          matchTitle: /priest|aaron/i,
          caption: 'Exodus 29:19–25 · Blood Mark and Oil',
        },
      ],
    },

    /* ─── Exodus 29:26–34 — The Wave Offering and the Portion ────────────── */
    {
      ref: 'Exodus 29:26–34',
      title: 'The Priest&apos;s Portion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 26,
              spans: [
                t('And thou shalt take the breast of the ram of Aaron&apos;s consecration, and '),
                hg('wave it', 'exo29-wave-comm'),
                t(' for a wave offering before the Lord: and it shall be thy part.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And thou shalt sanctify '),
                hy('the breast of the wave offering', 'exo29-breast-comm'),
                t(', and the shoulder of the heave offering, which is waved, and which is heaved up, of the ram of the consecration, even of that which is for Aaron, and of that which is for his sons:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And it shall be Aaron&apos;s and his sons&apos; by a statute for ever from the children of Israel: for it is an heave offering: and it shall be an heave offering from the children of Israel of the sacrifice of their peace offerings, even their heave offering unto the Lord.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And the holy garments of Aaron shall be his sons&apos; after him, to be anointed therein, and to be consecrated in them.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And that son that is priest in his stead shall put them on '),
                hg('seven days', 'exo29-seven-days-comm'),
                t(', when he cometh into the tabernacle of the congregation to minister in the holy place.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And thou shalt take the ram of the consecration, and seethe his flesh in the holy place.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And Aaron and his sons shall eat the flesh of the ram, and the bread that is in the basket, by the door of the tabernacle of the congregation.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Thus they shall eat those things wherewith the atonement was made, to consecrate and to sanctify them: but '),
                hg('a stranger shall not eat thereof', 'exo29-stranger-comm'),
                t(', because they are holy.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And if ought of the flesh of the consecrations, or of the bread, remain until the morning, then thou shalt burn the remainder with fire: it shall not be eaten, because it is holy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exo29-wave-comm',
          html:
            'The wave offering moves the sacrifice before God — left and right, back and forth, up and down. It is shown to Him before it is given to the priest. The priest does not feed himself first. He presents what he has been given to God, receives God&apos;s blessing on it, and only then partakes. The rhythm is always: offer, then receive.',
        },
        {
          kind: 'commentary',
          id: 'exo29-breast-comm',
          html:
            'The breast — the place nearest the heart — becomes the priest&apos;s portion. He tends God&apos;s people with his whole heart, and God provides for him. The priest is cared for. He does not work for wages that come from those he serves. His care comes directly from the covenant.',
        },
        {
          kind: 'commentary',
          id: 'exo29-seven-comm',
          html:
            'Seven days of wearing the holy garments. Not a lifetime all at once, but one week to settle into it. Seven — the number of completion, of rest, of a full cycle. The priests are given time to become who they have been called to be.',
        },
        {
          kind: 'commentary',
          id: 'exo29-stranger-comm',
          html:
            'A stranger — anyone outside the priesthood — cannot eat of the consecration meal. This meal belongs only to those who have been marked. The privacy is not arrogance but protection. What is holy cannot be consumed casually. What has been paid for with blood is not for casual tasting.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s people are cared for by people who are cared for. The priest eats. He has provision. He is not emaciated by the work. The covenant provides for those who tend it. And the rhythm is ancient and simple: you offer first, you present to God, you receive His blessing, and then you eat. Never the reverse. Offer, then receive. Present, then partake. The heart of priestly life is learning that God&apos;s provision comes <em>through</em> the sacrifice, not apart from it.',
        },
        {
          kind: 'reflection',
          id: 'exo29-portion',
          prompt: 'In your calling, how do you offer first before you take? Where might you need to reverse an order — to present before you consume, to give to God before giving to yourself?',
        },
      ],
    },

    /* ─── Exodus 29:35–37 — Completion of the Rite ──────────────────────── */
    {
      ref: 'Exodus 29:35–37',
      title: 'Seven Days Complete',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 35,
              spans: [
                t('Thus shalt thou do unto Aaron, and to his sons, according to all things which I have commanded thee: '),
                hy('seven days', 'exo29-seven-complete'),
                t(' shalt thou consecrate them.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And thou shalt offer every day a bullock for a sin offering for atonement: and thou shalt cleanse the altar, when thou hast made an atonement for it, and thou shalt anoint it, to sanctify it.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('Seven days thou shalt make an atonement for the altar, and sanctify it; and it shall be '),
                hg('most holy', 'exo29-holiness-comm'),
                t(': whatsoever toucheth the altar shall be holy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exo29-completion',
          html:
            'Seven days. A full week. Every day a fresh sin offering, fresh atonement, fresh preparation. The priests are not consecrated all at once on day one; they are consecrated slowly, over the whole week, with daily return to the same altar, daily acknowledgment that standing before God is a renewable work, not a one-time event.',
        },
        {
          kind: 'commentary',
          id: 'exo29-holiness-comm',
          html:
            'Most holy — the highest category of sacred space. The altar becomes so set apart that anything touching it becomes holy too. Holiness is not just a property of an object; it is contagious. Whatever meets the holy altar is drawn into its holiness.',
        },
        {
          kind: 'carry',
          html:
            'Your consecration is not a moment. It is a rhythm — seven days, then again seven days, then a lifetime of returning. The altar you tend, the people you serve, the work you do — it becomes most holy not by your effort but by your repeated return. And whatever touches that work is drawn into something bigger than itself. The person you serve. The craft you make. The space you steward. It becomes holy because it has met the holy God through your hands.',
        },
        {
          kind: 'reflection',
          id: 'exo29-seven',
          prompt: 'Where in your work or calling do you need to understand "consecration" not as a moment but as a seven-day rhythm? What would daily return to the altar look like for you?',
        },
      ],
    },

    /* ─── Exodus 29:38–46 — The Continual Offering and the Promise ────────── */
    {
      ref: 'Exodus 29:38–46',
      title: 'Morning and Evening — The Continual Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 38,
              spans: [
                t('Now this is that which thou shalt offer upon the altar; two lambs of the first year day by day continually.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('The one lamb thou shalt offer in the morning; and the other lamb thou shalt offer at even:'),
              ],
            },
            {
              number: 40,
              spans: [
                t('And with the one lamb a tenth deal of flour mingled with the fourth part of an hin of beaten oil; and the fourth part of an hin of wine for a drink offering.'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And the other lamb thou shalt offer at even, and shalt do thereto according to the meat offering of the morning, and according to the drink offering thereof, for a sweet savour, an offering made by fire unto the Lord.'),
              ],
            },
            {
              number: 42,
              spans: [
                t('This shall be a '),
                hy('continual burnt offering', 'exo29-tamid'),
                t(' throughout your generations at the door of the tabernacle of the congregation before the Lord: where I will meet with you, to speak there unto thee.'),
              ],
            },
            {
              number: 43,
              spans: [
                t('And there I will meet with the children of Israel: and the tabernacle shall be sanctified by my glory.'),
              ],
            },
            {
              number: 44,
              spans: [
                t('And I will sanctify the tabernacle of the congregation, and the altar: I will sanctify also Aaron and his sons, to minister to me in the priest&apos;s office.'),
              ],
            },
            {
              number: 45,
              spans: [
                t('And '),
                hp('I will dwell among the children of Israel', 'exo29-christ-dwelling'),
                t(', and will be their God.'),
              ],
            },
            {
              number: 46,
              spans: [
                t('And they shall know that I am the Lord their God, that brought them out of the land of Egypt, that I may dwell among them: '),
                hg('I am the Lord their God', 'exo29-conclusion-comm'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exo29-tamid-comm',
          html:
            'The tamid offering — the continual offering. Every morning, every evening. Before any other sacrifice, before any petition, before any plea, the priests offer a lamb. Not for guilt, not for dedication, but simply to say: we are here, we are awake, you are God, we belong to you. This pattern runs through the entire history of Israel and into the New Testament. It is the heartbeat of priestly life.',
        },
        {
          kind: 'hebrew',
          id: 'exo29-tamid',
          title: 'Tamid — the continual',
          script: 'תָּמִיד',
          translit: '<strong>tamid</strong> · continual, constant, perpetual',
          description:
            'The word means "always" or "continuously." The offering does not end at sunset or when the priest grows tired. It is the rhythm that holds the whole system together — morning and evening, every day, without ceasing.',
        },
        {
          kind: 'commentary',
          id: 'exo29-dwell-comm',
          html:
            'The whole consecration ritual, the entire priesthood, the tabernacle, the altar — every detail serves one purpose: "I will dwell among the children of Israel." God is not hiding. He is not distant. He comes down the mountain to live in a tent in the middle of His people, held by priests who stand between Him and them, offered to by lambs that burn at morning and at evening. The God who led them out of Egypt wants to live with them. This is the news underneath every ritual.',
        },
        {
          kind: 'christ',
          id: 'exo29-christ-dwelling',
          title: 'Christ Connection — The Lamb and the Dwelling',
          html:
            'The tamid offering — the continual lamb burned at morning and evening — points to Jesus, who Hebrews says offered "one sacrifice for sins for ever" (Heb. 10:12). By one offering He perfected what all the morning and evening lambs could never complete. And John closes the circle: in the new creation, the temple is gone because "the Lord God Almighty and the Lamb are the temple of it" (Rev. 21:22). Presence without a building. Dwelling without distance. The promise of Exodus 29:45 finds its answer in Revelation 21:3 — "Behold, the tabernacle of God is with men, and he will dwell with them."',
        },
        {
          kind: 'carry',
          html:
            'Every morning and every evening, the lamb burns. Not because God runs out of forgiveness or forgets you between sunrises. But because devotion is not a one-time choice — it is a rhythm. Morning: <em>I am yours.</em> Evening: <em>Still yours.</em> And the whole point of every ritual, every temple, every priestly act through all of history, is that God will dwell. With you. Not watching from a distance. Dwelling. Speaking. Meeting you at the place where you come to Him. The mystery underneath the tabernacle is that the God who is too holy to touch, the God who cannot look at sin, wants to live among you anyway. The priests, the blood, the lambs — all of it is what makes it possible for holiness and weakness to live in the same place.',
        },
        {
          kind: 'reflection',
          id: 'exo29-dwelling',
          prompt: 'What would it mean for you to know — really know — that the God of holiness chooses to dwell with you, not in judgment but in covenant? What needs to change in how you see Him?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'exo29-final',
          prompt: 'From beginning to end, what does Exodus 29 teach you about what it costs to be set apart? What has it cost Christ to make you a priest?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'I will dwell among the children of Israel, and will be their God, and they shall know that I am the Lord their God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 29:45–46 · Study Guide',
  },

  hasHebrew: true,
};
