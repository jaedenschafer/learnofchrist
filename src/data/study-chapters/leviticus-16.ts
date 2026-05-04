import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 16 — The Day of Atonement (Yom Kippur).
 *
 * One of the Old Testament&apos;s most theologically loaded chapters. After Nadab
 * and Abihu&apos;s death—God speaks AFTER the cost of His holiness has been made
 * visible—Aaron must enter the Holy of Holies once a year on the 10th day of
 * the 7th month. He brings a bull for his own sin. For the people, two goats:
 * one cast for the LORD and slain at the altar, its blood taken behind the veil
 * to sprinkle on the mercy seat. The other cast for *azazel* and sent alive into
 * the wilderness, carrying all the iniquities of Israel on its head. No animal
 * is wasted, no detail accidental. When Hebrews 9 opens its explanation of Christ,
 * it reaches straight to this chapter. The Day of Atonement is the annual answer
 * to the question: How does the covenant hold when sin keeps breaking it?
 */
export const LEVITICUS_16: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 16,

  estimatedMinutes: { beginner: 12, intermediate: 19, deep: 24 },
  intros: [
    'Leviticus 16 is the book&apos;s centerpiece—the one day each year when the high priest enters the Holy of Holies, the place where God&apos;s presence dwells on the mercy seat. It is a day when the whole nation must afflict their souls. It is the day the gap between the holy God and a sinful people is bridged by blood, by confession, by the death of an innocent. The chapter begins immediately after the death of Nadab and Abihu, two of Aaron&apos;s own sons, who entered God&apos;s presence carelessly and were consumed by holy fire. The message is stark: holiness is not a metaphor. It is a boundary. It costs.',
    'Two goats lie at the heart of this chapter. One is slain; its blood is carried into the Holy of Holies. One is sent alive into the wilderness, carrying the sins of the nation on its head. One Christ, two saving movements: the blood that satisfies God&apos;s justice, and the removal that takes sin away from the presence of His people. The Epistle to the Hebrews sees the entirety of Christ&apos;s atonement written in these verses. By this day, by this blood, by these two goats, Jesus&apos; death is explained.',
    'Yom Kippur—the Day of Atonement—remains the holiest day in the Jewish calendar. For anyone who wants to understand what the cross means and how it works, this chapter is non-negotiable. Here is how the covenant survives. Here is how sin is paid for. Here is how a sinful people can live in the presence of a holy God. And here, waiting in the shadows, is the Lamb.',
  ],

  opener: {
    matchTitle: /atonement|yom kippur|scapegoat|holman hunt/i,
    matchArtist: /hunt|tissot/i,
    caption: 'The Day of Atonement',
  },

  sections: [
    /* ─── Leviticus 16:1–4 — God Speaks After the Cost ───────────────── */
    {
      ref: 'Leviticus 16:1–4',
      title: 'God Speaks After the Cost',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            { number: 1, spans: [ t('And the LORD spake unto Moses after the death of the two sons of Aaron, when they offered before the LORD, and '), hp('died', 'christ-death-consequence'), t(';') ] },
            { number: 2, spans: [ t('And the LORD said unto Moses, Speak unto Aaron thy brother, that he come not at all times into the holy place within the vail before the mercy seat, which is upon the ark; that he die not: for I will appear in the cloud upon the mercy seat.') ] },
            { number: 3, spans: [ t('Thus shall Aaron come into the holy place: with a young bullock for a sin offering, and a ram for a burnt offering.') ] },
            { number: 4, spans: [ t('He shall put on the holy linen coat, and he shall have the linen breeches upon his flesh, and shall be girded with a linen girdle, and with the linen mitre shall he be attired: these are holy garments; therefore shall he wash his flesh in water, and so put them on.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-death-consequence',
          html: 'Nadab and Abihu entered God&apos;s presence carelessly—they offered strange fire, fire not prescribed by God. Fire went out from His presence and consumed them. They died. The opening word of this chapter is <em>death</em>. Only after the people have seen what holiness costs do we learn how to approach it. Holiness is not a sentimental thing. It is a boundary. It burns.',
        },
        {
          kind: 'commentary',
          id: 'christ-mercy-seat',
          html: 'The mercy seat is the place where God sits enthroned above the ark. It is the holiest point in all of Israel—the one place where the high priest stands once a year, alone, before the presence of God. The veil separates it from the rest of the tabernacle. No one enters there except once each year, and only the high priest, and only after prescribed preparation, and only with blood. This is the place Christ enters according to Hebrews 9:11-12: &quot;Christ being come an high priest of good things to come... by his own blood... entered in once into the holy place.&quot;',
        },
        {
          kind: 'carry',
          html: 'Holiness is not casual. God&apos;s presence is not a warm feeling or an emotional experience. It is a reality that demands reverence, preparation, and a clear awareness that you are standing before something so set apart, so other, so consuming that you cannot approach without dying. This is not meant to alienate you from God. It is meant to show you that to approach Him is to step into fire—and that it takes a mediator, a priest, and blood between you and the flames.',
        },
        {
          kind: 'reflection',
          id: 'reflect-holiness-cost',
          prompt: 'When you think of approaching God, do you think of Him as holy, dangerous, consuming? Or have you learned to approach Him as if He were tame? What does the death of Nadab and Abihu mean for how you understand His presence?',
        },
      ],
    },

    /* ─── Leviticus 16:5–10 — The Two Goats ───────────────────────────── */
    {
      ref: 'Leviticus 16:5–10',
      title: 'The Two Goats',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            { number: 5, spans: [ t('And he shall take of the congregation of the children of Israel two kids of the goats for a sin offering, and one ram for a burnt offering.') ] },
            { number: 6, spans: [ t('And Aaron shall offer his bullock of the sin offering, which is for himself, and make an atonement for himself, and for his house.') ] },
            { number: 7, spans: [ t('And he shall take the two goats, and present them before the LORD at the door of the tabernacle of the congregation.') ] },
            { number: 8, spans: [ t('And Aaron shall '), hy('cast lots upon the two goats', 'lots-casting'), t('; one lot for the LORD, and the other lot for the '), hy('scapegoat', 'azazel-word'), t('.') ] },
            { number: 9, spans: [ t('And Aaron shall bring the goat upon which the LORD&apos;s lot fell, and offer him for a sin offering.') ] },
            { number: 10, spans: [ t('But the goat, on which the lot fell to be the scapegoat, shall be presented alive before the LORD, to make an atonement with him, and to let him go for a scapegoat into the wilderness.') ] },
          ],
        },
        {
          kind: 'hebrew',
          id: 'azazel-word',
          title: 'Azazel — &ldquo;the scapegoat&rdquo;',
          script: 'עֲזָאזֵל',
          translit: '<strong>azazel</strong> · the destination or the name of a place or being; meaning debated',
          description: 'The Hebrew word appears only in this chapter and nowhere else in scripture. Scholars debate its meaning: a place name ("the rocky place"), a concept ("complete removal"), or possibly a spirit name. Jerome translated it as "the goat that goes away." Whatever it means, one goat goes to the LORD in death, and one goat goes to <em>azazel</em> in life. They are not the same transaction.',
        },
        {
          kind: 'commentary',
          id: 'lots-casting',
          html: 'The decision is made by lot, not by human choice. Both goats are identical. Both are blameless. But one is appointed for death, and one for exile. One remains in the camp with the LORD&apos;s people; the other is driven into the wasteland. The lot removes human preference and makes clear that the difference is appointed, not earned. The casting of lots will appear again in the Gospels when soldiers cast lots for Jesus&apos; garments at the cross.',
        },
        {
          kind: 'christ',
          id: 'christ-two-goats',
          title: 'Christ Connection — The Two Natures of Atonement',
          html: 'From Augustine through the Reformation to modern theology, the Church has read these two goats as two aspects of Christ&apos;s single work. The first goat slain points to the blood that satisfies God&apos;s justice and covers sin. The second goat sent away points to the removal of sin from the presence of God and God&apos;s people. One Christ offers both: His blood satisfies; His departure takes sin away. Paul writes: "As far as the east is from the west, so far hath he removed our transgressions from us" (Psalm 103:12, but Paul&apos;s refrain). The goat that dies and the goat that is sent away are not competing images. They are two angles on the same salvation.',
        },
        {
          kind: 'carry',
          html: 'You need both goats. You need the blood that tells you your sin is paid for—the satisfaction, the covering, the death that answers for your death. But you also need the removal—the assurance that your sin is not just covered but carried away, not just atoned but exiled from the presence of God. If you only have one, you are either living in fear that your sin will be found out, or you are living in presumption that nothing was ever wrong. You need both the blood and the wilderness.',
        },
        {
          kind: 'reflection',
          id: 'reflect-two-goats',
          prompt: 'Which do you need more right now: the blood that covers, or the assurance that your sin is removed and carried away? Why?',
        },
        {
          kind: 'artwork',
          matchTitle: /scapegoat|azazel|goat.*wilderness/i,
          matchArtist: /hunt|holman/i,
          caption: 'The Scapegoat Sent Away, Leviticus 16:20–22',
        },
      ],
    },

    /* ─── Leviticus 16:11–14 — The High Priest Enters ──────────────────── */
    {
      ref: 'Leviticus 16:11–14',
      title: 'The High Priest Enters',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            { number: 11, spans: [ t('And Aaron shall bring the bullock of the sin offering, which is for himself, and shall make an atonement for himself, and for his house, and shall kill the bullock of the sin offering which is for himself:') ] },
            { number: 12, spans: [ t('And he shall take a censer full of '), hg('burning coals of fire from off the altar', 'censer-coal'), t(' before the LORD, and his hands full of sweet incense beaten small, and bring it within the vail:') ] },
            { number: 13, spans: [ t('And he shall put the incense upon the fire before the LORD, that the cloud of the incense may cover the mercy seat that is upon the testimony; that he die not:') ] },
            { number: 14, spans: [ t('And he shall take of the blood of the bullock, and '), hp('sprinkle it with his finger upon the mercy seat', 'christ-mercy-seat'), t(' eastward; and before the mercy seat shall he sprinkle of the blood with his finger seven times.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'censer-coal',
          html: 'The coal comes from the altar where the sacrifices have been burned. The incense rises in a cloud. The cloud is protection—it hides the high priest from the direct gaze of the presence of God. Without the veil of smoke, he would see directly what even Isaiah could barely endure seeing. The incense creates a mercy between the human and the holy. The Psalms sing of incense as prayer: "Let my prayer be set forth before thee as incense" (Psalm 141:2). Here, incense is intercession—it speaks for the priest even as he stands silent.',
        },
        {
          kind: 'hebrew',
          id: 'kaporet-mercy-seat',
          title: 'Kaporet — &ldquo;mercy seat&rdquo;',
          script: 'כַּפֹּרֶת',
          translit: '<strong>kaporet</strong> · the place of covering, atonement; from root <strong>kapar</strong>, to cover, atone',
          description: 'The same Hebrew root as <em>kippur</em> (atonement) and the verb <em>kafar</em> (to cover, atone). This is the place where God covers sin. It is the lid of the ark, where the blood is sprinkled. In the Greek, it becomes <em>hilasterion</em>—the mercy seat, the propitiation, the place of atonement. The New Testament writers read Christ as the <em>kaporet</em>: He is the place where God covers sin and meets human need.',
        },
        {
          kind: 'commentary',
          id: 'seven-times',
          html: 'Seven times the blood is sprinkled. Seven is the number of completion, of fullness, of perfection in Hebrew. The blood does not cover partially. It covers completely. Every trace of sin in the people&apos;s record is answered. The repetition is not obsessive; it is thorough. God&apos;s mercy is not tentative. It is full.',
        },
        {
          kind: 'carry',
          html: 'You live in the time when the veil has been torn. You do not need a censer full of incense to hide from God&apos;s presence, because Christ&apos;s blood has already made you acceptable. But understand what it cost to tear that veil—what preparation, what sacrifice, what blood had to be shed so that you could stand where only the high priest could stand once a year. You are standing in the Holy of Holies. Live knowing what it means.',
        },
        {
          kind: 'reflection',
          id: 'reflect-enter',
          prompt: 'When you pray, or when you speak to God, do you speak as one who has to hide behind incense? Or do you speak knowing the veil is torn and you are welcome?',
        },
      ],
    },

    /* ─── Leviticus 16:15–19 — The Goat for the LORD ──────────────────── */
    {
      ref: 'Leviticus 16:15–19',
      title: 'The Goat for the LORD',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            { number: 15, spans: [ t('Then shall he kill the goat of the sin offering, that is for the people, and bring his blood within the vail, and do with that blood as he did with the blood of the bullock, and sprinkle it upon the mercy seat, and before the mercy seat:') ] },
            { number: 16, spans: [ t('Thus shall he make an atonement for the holy place, because of the uncleanness of the children of Israel, and because of their transgressions in all their sins: and so shall he do for the tabernacle of the congregation, that remaineth among them in the midst of their uncleanness.') ] },
            { number: 17, spans: [ t('And there shall be no man in the tabernacle of the congregation when he goeth in to make an atonement in the holy place, until he come out, and have made an atonement for himself, and for his household, and for all the congregation of Israel.') ] },
            { number: 18, spans: [ t('And he shall go out unto the altar that is before the LORD, and make an atonement for it; and shall take of the blood of the bullock, and of the blood of the goat, and put it upon the horns of the altar round about.') ] },
            { number: 19, spans: [ t('And he shall sprinkle of the blood upon it with his finger seven times, and cleanse it, and hallow it from the uncleanness of the children of Israel.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'atonement-tabernacle',
          html: 'The blood is applied to the mercy seat, the altar, the horns of the altar—all the places of God&apos;s presence in the tabernacle. Why? Because the people&apos;s sin pollutes even the sacred spaces. A holy God cannot dwell in the midst of uncleanness. The tabernacle itself becomes unclean when the people sin. So the blood must cleanse not just the people, but the place where God meets them. This is radical: sin is not just a personal moral failure; it is a cosmic stain that reaches into the very structure of reality. Only blood removes it.',
        },
        {
          kind: 'commentary',
          id: 'no-man-present',
          html: 'When the high priest enters the Holy of Holies, no one else is in the tabernacle. He is utterly alone. The whole nation is outside, waiting, afflicting their souls, hoping. One man stands between heaven and earth. One man bears the sin of all. This image of solitary intercession will echo through the New Testament: "He is the mediator of the new testament... that by means of death... they which are called might receive the promise of eternal inheritance" (Heb. 9:15).',
        },
        {
          kind: 'christ',
          id: 'christ-priest-alone',
          title: 'Christ Connection — The Priest Who Enters Alone',
          html: 'Hebrews 9:11-12 reads this moment into Jesus: "Christ being come an high priest of good things to come, by a greater and more perfect tabernacle, not made with hands... neither by the blood of goats and calves, but by his own blood he entered in once into the holy place, having obtained eternal redemption for us." Jesus is the high priest who enters alone. He enters not once a year, but once for all. He brings not the blood of animals, but His own blood. The atonement He makes is not provisional, waiting to be renewed next year, but final. "By one offering he hath perfected for ever them that are sanctified" (Heb. 10:14).',
        },
        {
          kind: 'carry',
          html: 'You do not have to wait for the high priest to go into the Holy of Holies once a year on your behalf. Your advocate has already gone in. His blood is on the mercy seat. The atonement is done. You are free to enter the presence of God because someone else entered first, alone, and made a way.',
        },
        {
          kind: 'reflection',
          id: 'reflect-atonement-done',
          prompt: 'What does it mean for you that the atonement is finished, that you do not need to wait for the next Yom Kippur?',
        },
      ],
    },

    /* ─── Leviticus 16:20–22 — The Scapegoat Sent Away ──────────────────── */
    {
      ref: 'Leviticus 16:20–22',
      title: 'The Scapegoat Sent Away',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            { number: 20, spans: [ t('And when he hath made an end of reconciling the holy place, and the tabernacle of the congregation, and the altar, he shall bring the live goat:') ] },
            { number: 21, spans: [ t('And Aaron shall lay both his hands upon the head of the live goat, and confess over him all the iniquities of the children of Israel, and all their transgressions in all their sins, putting them upon the head of the goat, and shall send him away by the hand of a fit man into the wilderness:') ] },
            { number: 22, spans: [ t('And the goat shall bear upon him all their iniquities unto a land not inhabited: and he shall let go the goat in the wilderness.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'both-hands-confession',
          html: 'Aaron lays <em>both</em> hands on the goat&apos;s head. Not one hand. Both. It is a gesture of complete transfer, of the full weight of sin passing from the nation to the innocent animal. And over this gesture, he <em>confesses</em>. He names the sins out loud. He does not hide them. He does not minimize them. He confesses all their iniquities, all their transgressions, all their sins. The goat hears the confession. The people hear the confession. God hears the confession. And then the goat is sent away.',
        },
        {
          kind: 'hebrew',
          id: 'nasa-bear',
          title: 'Nasa — &ldquo;to bear, to carry&rdquo;',
          script: 'נָשָׂא',
          translit: '<strong>nasa</strong> · to lift, carry, bear, take away',
          description: 'The goat does not just symbolize the removal of sin; it actually <em>bears</em> it. It carries it. It takes it away. When Isaiah writes of the servant who "hath borne our griefs, and carried our sorrows" (Isa. 53:4), he is using the vocabulary of Leviticus 16. The goat does not erase sin; it bears the weight of it into exile.',
        },
        {
          kind: 'commentary',
          id: 'land-not-inhabited',
          html: 'The goat is sent to a land not inhabited—the wilderness, the place of no return, the place of separation. This is not symbolic prettiness. It is harsh and real. The goat is driven away from camp, from people, from the place of God&apos;s dwelling. Its life is not ended, as the first goat&apos;s was, but it is ended in the sense that matters most: it is separated from the community, exiled with the sins it carries.',
        },
        {
          kind: 'christ',
          id: 'christ-scapegoat-exile',
          title: 'Christ Connection — The Lamb Bearing Sins Away',
          html: 'Hebrews 13:11-13 makes this connection explicit: "For the bodies of those beasts, whose blood is brought into the sanctuary by the high priest for sin, are burned without the camp. Wherefore Jesus also, that he might sanctify the people with his own blood, suffered without the gate. Let us go forth therefore unto him without the camp, bearing his reproach." Jesus is the scapegoat. He bears the sins of the people and is sent outside the gate, separated from the camp, exiled to die in the wilderness (figuratively, outside Jerusalem). But unlike the Leviticus 16 goat, Jesus does not merely bear sin away—He transforms it. His exile becomes redemption. His carrying away becomes reconciliation.',
        },
        {
          kind: 'carry',
          html: 'Your sins have been borne away. Not hidden. Not covered in a way that might be discovered. Borne away—carried into exile, separated from you, removed as far as the east is from the west. You are not carrying them anymore. The goat carried them. The Lamb carried them. You are free.',
        },
        {
          kind: 'reflection',
          id: 'reflect-sins-away',
          prompt: 'Can you name a sin or shame you have been carrying? What would it mean to believe it has been borne away?',
        },
      ],
    },

    /* ─── Leviticus 16:23–28 — The Purification Afterward ──────────────── */
    {
      ref: 'Leviticus 16:23–28',
      title: 'The Purification After',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            { number: 23, spans: [ t('And Aaron shall come into the tabernacle of the congregation, and shall put off the linen garments, which he put on when he went into the holy place, and shall leave them there:') ] },
            { number: 24, spans: [ t('And he shall wash his flesh with water in the holy place, and put on his garments, and come forth, and offer his burnt offering, and the burnt offering of the people, and make an atonement for himself, and for the people.') ] },
            { number: 25, spans: [ t('And the fat of the sin offering shall he burn upon the altar.') ] },
            { number: 26, spans: [ t('And he that let go the goat for the scapegoat shall wash his clothes, and bathe his flesh in water, and afterward come into the camp.') ] },
            { number: 27, spans: [ t('And the bullock for the sin offering, and the goat for the sin offering, whose blood was brought in to make atonement in the holy place, shall one carry forth without the camp to a clean place, where the ashes are poured out, and they shall burn in the fire their skins, and their flesh, and their dung.') ] },
            { number: 28, spans: [ t('And he that burneth them shall wash his clothes, and bathe his flesh in water, and afterward he shall come into the camp.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'linen-left-behind',
          html: 'The high priest removes the linen garments—the holy clothes he wore in the presence of God—and leaves them there in the tabernacle. They are not taken back to the camp. They stay in the holy place. Then he bathes. He puts on ordinary clothes. He emerges into the light of day as an ordinary man. The moment of mediation is over. The burden is set down. He has done what no other person could do, and now he steps back into the community.',
        },
        {
          kind: 'commentary',
          id: 'washing-purification',
          html: 'Everyone involved in the sacrifice—the priest, the man who sent the scapegoat, the man who burned the animals—must wash. They must bathe in water. They are not unclean in the sense of moral guilt, but they have touched the machinery of sin, the animals that bore it, and they must be purified before re-entering the camp. This insists that sin is real, its weight is real, its separation is real, and even those who help remove it must be cleansed.',
        },
        {
          kind: 'carry',
          html: 'The purification is not the high priest&apos;s alone. Everyone involved in the atonement must wash. This is true of you: you are not purified by simply receiving the atonement; you are called to respond, to bathe, to wash in water—to let the reality of what has happened to you change the way you live. You have touched grace. You must be purified by it.',
        },
        {
          kind: 'reflection',
          id: 'reflect-washed',
          prompt: 'If the atonement is complete, why do you still need to wash? What does it mean to be purified by what Christ has done?',
        },
      ],
    },

    /* ─── Leviticus 16:29–34 — The People Afflict Their Souls ─────────── */
    {
      ref: 'Leviticus 16:29–34',
      title: 'The People Afflict Their Souls',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            { number: 29, spans: [ t('And this shall be a statute for ever unto you: that in the seventh month, on the tenth day of the month, ye shall afflict your souls, and do no work at all, whether it be one of your own country, or a stranger that sojourneth among you:') ] },
            { number: 30, spans: [ t('For on this day shall the priest make an atonement for you, to cleanse you, that ye may be clean from all your sins before the LORD.') ] },
            { number: 31, spans: [ t('It shall be a sabbath of rest unto you, and ye shall afflict your souls: it is a statute for ever.') ] },
            { number: 32, spans: [ t('And the priest, whom he shall anoint, and whom he shall consecrate to minister in the priest&apos;s office in his father&apos;s stead, shall make the atonement, and shall put on the linen clothes, even the holy garments:') ] },
            { number: 33, spans: [ t('And he shall make an atonement for the holy sanctuary, and he shall make an atonement for the tabernacle of the congregation, and for the altar, and he shall make an atonement for the priests, and for all the people of the congregation.') ] },
            { number: 34, spans: [ t('And this shall be an everlasting statute unto you, to make an atonement for the children of Israel for all their sins once a year. And he did as the LORD commanded Moses.') ] },
          ],
        },
        {
          kind: 'hebrew',
          id: 'anah-napshotekhem',
          title: 'Anah napshotekhem — &ldquo;afflict your souls&rdquo;',
          script: 'עִנּוּ אֶת־נַפְשֹׁתֵיכֶם',
          translit: '<strong>anah</strong> · to afflict, oppress, humble; <strong>nephesh</strong> · soul, self, life',
          description: 'The people do not simply receive atonement passively. They <em>afflict</em> their souls. They humble themselves. They fast. They abstain. This is not punishment—it is participation. They join with the high priest&apos;s work by recognizing the seriousness of sin, the cost of atonement, the weight of the day.',
        },
        {
          kind: 'commentary',
          id: 'statute-forever',
          html: 'This is a statute for ever. Once a year, every year, on the tenth day of the seventh month, the whole nation stops. All work ceases. No one eats. Everyone afflicts their soul. It becomes the rhythm of Israel&apos;s year. The holiest day. The day that says: We remember what we are. We remember what we deserve. We remember that we live only because of blood, because of atonement, because someone stands between us and the consuming fire.',
        },
        {
          kind: 'commentary',
          id: 'clean-from-all-sins',
          html: 'The promise of Yom Kippur is staggering: "Ye shall be clean from all your sins before the LORD." Not some sins. Not the minor ones. All. Every trace. Before the LORD. Not hidden from God&apos;s knowledge, but openly, fully, completely clean. There is no asterisk, no condition, no unfinished business. The atonement is total.',
        },
        {
          kind: 'christ',
          id: 'christ-once-for-all',
          title: 'Christ Connection — Once for All',
          html: 'The Day of Atonement comes once a year, year after year, forever. But it never ends the problem. The sins return. The people sin again. So the high priest must go in again next year, and the year after, without end. But Christ ends it[res:intertextual-hebrews-9-leviticus-16]. "Now once in the end of the world hath he appeared to put away sin by the sacrifice of himself... Christ was once offered to bear the sins of many" (Heb. 9:26-28). Jesus is the Day of Atonement that needs no repetition[res:bibleodyssey-scapegoat]. He is the priest who enters once and finishes the work. The atonement is done. Not provisionally. Not year by year. Done. Finished. Complete.',
        },
        {
          kind: 'carry',
          html: 'You live on the side of the cross. Yom Kippur is not something you are waiting for. It is something that has happened. The high priest has entered. The blood has been shed. The goat has borne your sins away. And you are not waiting to do it again next year. The atonement is finished. Your sins are not covered provisionally. They are covered finally. Completely. Once and for all. Live in the freedom that cost the world everything to give you.',
        },
        {
          kind: 'reflection',
          id: 'reflect-once-for-all',
          prompt: 'What would change in how you live if you truly believed your atonement is complete, not just provisional?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Leviticus 16',
    quote:
      'On the Day of Atonement, the high priest enters the Holy of Holies alone, carrying the blood of sacrifice. One goat is slain; its blood covers sin. One goat is sent away; it bears all the people&apos;s iniquities into the wilderness. By blood, by confession, by the removal of sin, the covenant is restored and the people are made clean before God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 16 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-leviticus-16',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 16 — Yom Kippur',
      url: 'https://www.sefaria.org/Leviticus.16',
      description: 'Extensive rabbinic commentary on the Day of Atonement, the two goats, and the high priest&apos;s entry into the Holy of Holies[res:sefaria-leviticus-16].',
    },
    {
      id: 'intertextual-hebrews-9-leviticus-16',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Leviticus 16 ↔ Hebrews 9–10',
      url: 'https://intertextual.bible/search?q=Leviticus+16+Hebrews+9+1',
      description: 'Side-by-side comparison showing how Hebrews reads Christ&apos;s atonement through the lens of Leviticus 16[res:intertextual-hebrews-9-leviticus-16].',
    },
  ],
};
