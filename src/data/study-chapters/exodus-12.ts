import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 12 — The Passover instituted.
 *
 * This is one of the three or four hinge chapters in all of scripture.
 * The lamb is selected on the 10th day and kept until the 14th. It is
 * slain at twilight. Blood is applied to the doorposts and lintel. It is
 * eaten with bitter herbs and unleavened bread in haste, with loins girded,
 * staff in hand—ready to move. At midnight, the angel of death passes
 * through Egypt, and every firstborn falls. But the blood on the doorposts
 * saves—not because of what the family did to deserve it, but because of
 * what the lamb did. Israel leaves Egypt with the plunder of Egypt,
 * 600,000 men plus women and children plus a mixed multitude of believers
 * from among the Egyptians themselves. What begins in this chapter does
 * not end. The Passover becomes the most sacred feast of Israel, celebrated
 * every year forever. And it becomes the type that every other sacrifice in
 * the Old Testament points toward, and every other gospel event in the New
 * Testament points back to. Nothing in scripture foreshadows Christ more
 * carefully, or more thoroughly, than this night.
 */
export const EXODUS_12: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 12,

  estimatedMinutes: { beginner: 12, intermediate: 19, deep: 23 },
  intros: [
    'Exodus 12 is the night God saves His people. It is the centerpiece of Israel&apos;s identity—so central that when the New Testament writers look for the language to describe Jesus&apos; death, they reach back to this chapter. What happens on this night shapes everything that comes after: the Law, the Tabernacle, the priesthood, every sacrifice, every feast. For a Hebrew reader, the Passover is not just a historical memory. It is the theological answer to the question: How does God save?',
    'The chapter turns on a strange reversal. Egypt is the powerful nation. Israel is enslaved. But in this one night, the firstborn of Egypt—from Pharaoh&apos;s heir to the servant in the dungeon—are all marked for death. And the only shelter is blood. Not the blood of the strong. The blood of a lamb. A lamb chosen for its fitness, killed in the evening, eaten with bitter herbs and haste. The blood of that lamb, marked on the doorposts and lintel, forms a cross. And the angel of death passes over. It passes over because of the sign, not because of the family&apos;s worthiness. The Passover asks: Do you trust the lamb, or do you trust yourself?',
    'This is the chapter Jesus celebrated on the night He was arrested. It is the chapter Paul reads when he writes, &quot;Christ our passover is sacrificed for us.&quot; It is the chapter John reads when he says of the Lamb slain at the cross: &quot;A bone of him shall not be broken.&quot; No chapter in the Old Testament carries Christ&apos;s shadow as deliberately, as completely, as this one.',
  ],

  opener: {
    matchTitle: /passover|lamb|blood.*door/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Exodus 12:1–14 — The Lamb Selected and Slain ────────────────── */
    {
      ref: 'Exodus 12:1–14',
      title: 'The Lamb Selected and Slain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            { number: 1, spans: [ t('And the LORD spake unto Moses and Aaron in the land of Egypt, saying,') ] },
            { number: 2, spans: [ t('This month shall be unto you the beginning of months: it shall be the first month of the year to you.') ] },
            { number: 3, spans: [ t('Speak ye unto all the congregation of Israel, saying, In the tenth day of this month they shall take to them every man a '), hy('lamb', 'seh-lamb'), t(', according to the house of their fathers, a lamb for an house:') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_12_v1-7',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            { number: 4, spans: [ t('And if the household be too little for the lamb, let him and his neighbour next unto his house take it according to the number of the souls; every man according to his eating shall make your count for the lamb.') ] },
            { number: 5, spans: [ t('Your '), hy('lamb shall be without blemish', 'tamim-unblemished'), t(', a male of the first year: ye shall take it out from the sheep, or from the goats:') ] },
            { number: 6, spans: [ t('And ye shall keep it up until the '), hy('fourteenth day of the same month', 'fourteen-kept'), t(': and the whole assembly of the congregation of Israel shall kill it '), hg('in the evening', 'erev-twilight'), t('.') ] },
            { number: 7, spans: [ t('And they shall take of the blood, and strike it on the two side posts and on the '), hg('upper door post', 'lintel-doorpost'), t(' of the houses, wherein they shall eat it.') ] },
          ],
        },
        { kind: 'commentary', id: 'ex12-mid', html: 'The lamb is slain and marked. Blood on the doorposts and lintel. The sign is set. Now comes the next step—not just dying, but eating. The covenant is not only about what&apos;s done to save you, but what you do in response. You take it. You eat it. You make the sacrifice part of yourself.' },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            { number: 8, spans: [ t('And they shall eat the flesh in that night, roast with fire, and '), hg('unleavened bread', 'matzah-bread'), t('; and with '), hg('bitter herbs', 'bitter-herbs'), t(' they shall eat it.') ] },
            { number: 9, spans: [ t('Eat not of it raw, nor sodden at all with water, but roast with fire; his head with his legs, and with the purtenance thereof.') ] },
            { number: 10, spans: [ t('And ye shall let nothing of it remain until the morning; and that which remaineth of it until the morning ye shall burn with fire.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_12_v8-14',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            { number: 11, spans: [ t('And thus shall ye eat it; with your loins girded, your shoes on your feet, and your staff in your hand; and ye shall eat it in haste: it is the LORD&apos;s passover.') ] },
            { number: 12, spans: [ t('For I will pass through the land of Egypt this night, and will smite all the firstborn in the land of Egypt, both man and beast; and against all the gods of Egypt I will execute judgment: I am the LORD.') ] },
            { number: 13, spans: [ t('And the blood shall be to you for a token upon the houses where ye are: and when I see the blood, I will pass over you, and the plague shall not be upon you to destroy you, when I smite the land of Egypt.') ] },
            { number: 14, spans: [ t('And this day shall be unto you for a memorial; and ye shall keep it a feast to the LORD throughout your generations; ye shall keep it a feast by an ordinance for ever.') ] },
          ],
        },
        { kind: 'hebrew', id: 'seh-lamb', title: 'Seh — &ldquo;lamb&rdquo;', script: 'שֶׂה', translit: '<strong>seh</strong> · a young sheep or goat; the singular form of a flock', description: 'Not a bull. Not an impressive animal. A seh is the smallest, most vulnerable creature in a household—the one with no power, no influence, no strength to resist. It becomes the image of the one who saves.' },
        { kind: 'hebrew', id: 'tamim-unblemished', title: 'Tamim — &ldquo;without blemish&rdquo;', script: 'תָּמִים', translit: '<strong>tamim</strong> · perfect, whole, unblemished (root meaning &ldquo;complete&rdquo;)', description: 'The lamb cannot be marked or scarred or deficient. It is spotless by definition. John Chrysostom and the Church fathers read this quality into Christ at the cross: &ldquo;a lamb without blemish and without spot&rdquo; (1 Pet. 1:19).' },
        { kind: 'commentary', id: 'fourteen-kept', html: 'The lamb is taken on the tenth day and kept until the fourteenth. Four days of inspection. The family lives with the lamb they will eat. They watch it. They care for it. They know it. When the knife comes, it is not an abstract sacrifice. It is personal. It is the cost made visible.' },
        { kind: 'commentary', id: 'erev-twilight', html: 'The Hebrew <em>erev</em> means twilight—the boundary between day and night. Not noon. Not midnight. The in-between time. Jesus dies at this hour. The Gospels align His crucifixion with the Passover lamb, slain at twilight on the fourteenth of Nisan. Matthew, Mark, and Luke all position it this way. Even the time of death is a foreshadowing.' },
        { kind: 'commentary', id: 'lintel-doorpost', html: 'The blood is marked on two side posts and the upper door post—the lintel. When you mark all three, the shape is the shape of a cross. The ancient Church, knowing this, saw in the blood-marked doorway a type of the cross itself: the lamb&apos;s blood marking not a piece of wood, but the instrument where the Lamb of God would shed His blood.' },
        { kind: 'hebrew', id: 'matzah-bread', title: 'Matzah — &ldquo;unleavened bread&rdquo;', script: 'מַצָּה', translit: '<strong>matzah</strong> · bread without leaven (root <strong>matzah</strong> means &ldquo;to press, to squeeze&rdquo;)', description: 'No time for the dough to rise. The bread of haste and affliction. When Jesus celebrates the Passover with His disciples, He breaks the matzah and says, &quot;This is my body.&quot; The unleavened bread becomes the bread of the new covenant.' },
        { kind: 'commentary', id: 'bitter-herbs', html: 'The bitter herbs (<em>maror</em> in later tradition) are the taste of slavery. The family eats the lamb with the flavor of affliction still on their tongue. It is not a feast of celebration alone. It is a feast of remembrance—remembrance of the bondage that the lamb frees them from. The bitterness and the salvation are intertwined.' },
                { kind: 'christ', id: 'christ-lamb-unblemished', title: 'Christ Connection — The Lamb of God', html: 'John the Baptist sees Jesus crossing his path and cries out: &quot;Behold the Lamb of God, which taketh away the sin of the world&quot; (John 1:29). John is reading the Passover. He is seeing in Jesus the fulfillment of every detail: the lamb without blemish, the lamb whose blood saves, the lamb that is given not forced. Every element of the Exodus 12 lamb—its spotlessness, its selection, the days of inspection, the breaking of no bone, the blood on the doorpost—points directly to the One who would die outside Jerusalem to save all who trust Him.' },
        { kind: 'carry', html: 'You know what it is to be marked by a lamb. Every time you eat bread, every time you remember a cost, every time you see a cross on a door or a church, you are living in the aftermath of this night. The lamb that saves does not save quietly—it transforms everything: the calendar, the meal, the memory, the future. The family that eats it is never the same. Neither are you.' },
        { kind: 'reflection', id: 'reflect-lamb-cost', prompt: 'When you picture the lamb—vulnerable, spotless, kept for four days, then slain—what does your own resistance to the cross feel like?' },
      ],
    },

    /* ─── Exodus 12:15–28 — The Feast Made Law ────────────────────────── */
    {
      ref: 'Exodus 12:15–28',
      title: 'The Feast Made Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            { number: 15, spans: [ t('Seven days shall ye eat unleavened bread; even the first day ye shall put away leaven out of your houses: for whosoever eateth leavened bread from the first day until the seventh day, that soul shall be cut off from Israel.') ] },
            { number: 16, spans: [ t('And in the first day there shall be an holy convocation, and in the seventh day there shall be an holy convocation to you; no manner of work shall be done in them, save that which every man must eat, that only may be done of you.') ] },
            { number: 17, spans: [ t('And ye shall observe the feast of unleavened bread; for in this selfsame day have I brought your armies out of the land of Egypt: therefore shall ye observe this day in your generations by an ordinance for ever.') ] },
            { number: 18, spans: [ t('In the first month, on the fourteenth day of the month at even, ye shall eat unleavened bread, until the one and twentieth day of the month at even.') ] },
            { number: 19, spans: [ t('Seven days shall there be no leaven found in your houses: for whosoever eateth that which is leavened, even that soul shall be cut off from the congregation of Israel, whether he be a stranger, or born in the land.') ] },
            { number: 20, spans: [ t('Ye shall eat nothing leavened; in all your habitations shall ye eat unleavened bread.') ] },
          ],
        },
        { kind: 'commentary', id: 'ex12-mid2', html: 'The law has been spoken from Sinai. Now it falls to the leaders to carry it out. The shift is decisive: from God&apos;s word to human action, from command to execution, from what must be done to how it is done. The elders are named. Responsibility lands on their shoulders.' },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            { number: 21, spans: [ t('Then Moses called for all the elders of Israel, and said unto them, Draw out and take you a lamb according to your families, and kill the passover.') ] },
            { number: 22, spans: [ t('And ye shall take a bunch of hysop, and dip it in the blood that is in the bason, and strike the lintel and the two side posts with the blood that is in the bason; and none of you shall go out at the door of his house until the morning.') ] },
            { number: 23, spans: [ t('For the LORD will pass through to smite the Egyptians; and when he seeth the blood upon the lintel, and on the two side posts, the LORD will pass over the door, and will not suffer the destroyer to come in unto your houses to smite you.') ] },
            { number: 24, spans: [ t('And ye shall observe this thing for an ordinance to thee and to thy sons for ever.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_12_v21-28',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            { number: 25, spans: [ t('And it shall come to pass, when ye be come to the land which the LORD will give you, according as he hath promised, that ye shall keep this service.') ] },
            { number: 26, spans: [ t('And it shall come to pass, when your children shall say unto you, What mean ye by this service?') ] },
            { number: 27, spans: [ t('That ye shall say, It is the sacrifice of the LORD&apos;s passover, who passed over the houses of the children of Israel in Egypt, when he smote the Egyptians, and delivered our houses. And the people bowed the head and worshipped.') ] },
            { number: 28, spans: [ t('And the children of Israel went away, and did as the LORD had commanded Moses and Aaron, so did they.') ] },
          ],
        },
        { kind: 'commentary', id: 'leaven-removed', html: 'Leaven is a metaphor for corruption. It spreads through the whole batch. The command to remove it is not merely practical—it is theological. For seven days, the household becomes a place of purity. Paul uses this same image: &quot;Christ our passover is sacrificed for us: therefore let us keep the feast, not with old leaven, neither with the leaven of malice and wickedness; but with the unleavened bread of sincerity and truth&quot; (1 Cor. 5:7–8). The feast of unleavened bread becomes a parable of what happens when the Lamb saves you.' },
        { kind: 'commentary', id: 'blood-hysop', html: 'Hysop is a small, humble plant—the opposite of a grand implement. In Psalm 51:7, the psalmist cries, &quot;Purge me with hyssop, and I shall be clean.&quot; David thinks of salvation as hyssop: small, humble, lowly. The blood is applied not with ceremony or grandiosity, but with the instrument of the smallest, most fragile plant. It is applied by the hands of ordinary people in ordinary houses. There is no priest yet, no tabernacle yet. Just a family and a bush and the blood of a lamb [res:blood-covenant].' },
        { kind: 'commentary', id: 'pass-over-meaning', html: 'The verb <em>pesach</em> means to pass over, to skip over, to spring over. Not to protect by hiding. Not to guard by might. But to pass over. The destroyer comes. The angel of death moves through Egypt. But there is a mark on this doorway. And so it passes over. Death passes over this house because the blood marks it. The covenant is made not in strength, but in a mark on wood [res:passover-law].' },
        { kind: 'carry', html: 'When your children ask you one day, &quot;Why do you believe this? Why the cross? Why the blood?&quot; You will say what the elders said: &quot;It is the sacrifice of the Lord&apos;s passover. When He passed over me, He delivered my house.&quot; You will not argue the point. You will tell the story. You will point to the sign. And if they have any sense, they will bow their head and understand that the most important things in life come because someone passed over with a mark.' },
        { kind: 'reflection', id: 'reflect-pass-over', prompt: 'What does it mean for the destroyer to pass over your house? What are you asking the blood of the Lamb to save you from?' },
      ],
    },

    /* ─── Exodus 12:29–36 — The Death of the Firstborn ────────────────── */
    {
      ref: 'Exodus 12:29–36',
      title: 'The Death of the Firstborn',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            { number: 29, spans: [ t('And it came to pass, that at midnight the LORD '), hg('smote all the firstborn in the land of Egypt', 'firstborn-death'), t(', from the firstborn of Pharaoh that sat on his throne unto the firstborn of the captive that was in the dungeon; and all the firstborn of cattle.') ] },
            { number: 30, spans: [ t('And Pharaoh rose up in the night, he, and all his servants, and all the Egyptians; and there was a great cry in Egypt; for there was not a house where there was not one dead.') ] },
            { number: 31, spans: [ t('And he called for Moses and Aaron by night, and said, Rise up, and get you forth from among my people, both ye and the children of Israel; and go, serve the LORD, as ye have said.') ] },
            { number: 32, spans: [ t('Also take your flocks and your herds, as ye have said, and be gone; and bless me also.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_12_v29-36',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            { number: 33, spans: [ t('And the Egyptians were urgent upon the people, that they might send them out of the land in haste; for they said, We be all dead men.') ] },
            { number: 34, spans: [ t('And the people took their dough before it was leavened, their kneadingtroughs being bound up in their clothes upon their shoulders.') ] },
            { number: 35, spans: [ t('And the children of Israel did according to the word of Moses; and they borrowed of the Egyptians jewels of silver, and jewels of gold, and raiment:') ] },
            { number: 36, spans: [ t('And the LORD gave the people favour in the sight of the Egyptians, so that they lent unto them such things as they required. And they spoiled the Egyptians.') ] },
          ],
        },
        { kind: 'commentary', id: 'firstborn-death', html: 'At midnight. Not in the light. Not in the sight of all. In darkness, while Israel sleeps—or keeps vigil, watching the blood on the doorpost. This is the hardest part of the Exodus story. The firstborn of Egypt die. The firstborn of the cattle die. Pharaoh&apos;s own heir dies. From the throne to the dungeon, death comes to every firstborn. It is the judgment God brings on a nation that has enslaved His people, hardened their hearts with cruelty, and refused the word of God again and again. The Passover is not only a salvation story for Israel. It is a judgment story for Egypt. And it is addressed honestly in scripture—not as a source of shame or apology, but as the answer to the question: How does God save His people when evil stands in the way? With judgment. With the sword. With death passing through.' },
        { kind: 'christ', id: 'christ-firstborn', title: 'Christ Connection — The Firstborn Slain', html: 'Israel is spared because the lamb dies instead of the firstborn. Christ is called the &ldquo;firstborn among many brethren&rdquo; (Rom. 8:29). He is the only begotten Son. The firstborn of all creation (Col. 1:15). And at the cross, the firstborn dies in place of many. &quot;Since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive&quot; (1 Cor. 15:21–22). The judgment that fell on Egypt—death of the firstborn—falls instead on the one Firstborn who takes it so that all others are spared.' },
        { kind: 'carry', html: 'You stand on the side of Israel this night—not because you are better than Egypt, but because someone passed over. The judgment did not fall on you, but it fell somewhere. It fell on the Lamb. It fell on the One who could bear it. If you are free, it is not because you deserved to be. It is because death passed over your house because of the mark. You are spared. Live like it.' },
        { kind: 'reflection', id: 'reflect-judgment', prompt: 'How does it change your understanding of the cross to know that a judgment as heavy as the death of the firstborn fell on it instead of you?' },
        { kind: 'artwork', matchTitle: /passover|lamb.*egypt|death.*firstborn/i, caption: 'The Judgment and the Escape, Exodus 12:29–36' },
      ],
    },

    /* ─── Exodus 12:37–42 — The Departure ─────────────────────────────── */
    {
      ref: 'Exodus 12:37–42',
      title: 'The Departure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            { number: 37, spans: [ t('And the children of Israel journeyed from '), t('Rameses to Succoth'), t(', about six hundred thousand on foot that were men, '), hg('beside children', 'beside-children-note'), t('.') ] },
            { number: 38, spans: [ t('And a '), hy('mixed multitude', 'erev-rav-multitude'), t(' went up also with them; and flocks, and herds, even very much cattle.') ] },
            { number: 39, spans: [ t('And they baked unleavened cakes of the dough which they brought forth out of Egypt, for it was not leavened; because they were thrust out of Egypt, and could not tarry, neither had they prepared for themselves any victual.') ] },
            { number: 40, spans: [ t('Now the sojourning of the children of Israel, who dwelt in Egypt, was four hundred and thirty years.') ] },
            { number: 41, spans: [ t('And it came to pass at the end of the four hundred and thirty years, even the selfsame day it came to pass, that all the hosts of the LORD went out from the land of Egypt.') ] },
            { number: 42, spans: [ t('It is a night to be much observed unto the LORD for bringing them out from the land of Egypt: by this night of the LORD keeping of it is to be observed of all the children of Israel in their generations.') ] },
          ],
        },
        { kind: 'commentary', id: 'beside-children-note', html: 'Six hundred thousand men, &quot;beside children.&quot; The text does not count them. They are beyond counting. The deliverance is so vast that the Scripture gives up the math and points instead at the overflow. Not six hundred thousand. Not even a million. A nation. An exodus. An impossibility made real.' },
        { kind: 'hebrew', id: 'erev-rav-multitude', title: 'Erev Rav — &ldquo;mixed multitude&rdquo;', script: 'עֵרֶב רַב', translit: '<strong>erev rav</strong> · a mixing, a mixture; foreign people who join Israel', description: 'Not all who leave Egypt are descendants of Jacob. Egyptians and foreigners, believers among the oppressors, join the exodus. The salvation is not tribalism. It is not for Israel alone. Whoever trusts the lamb is welcome to join. Whoever marks the doorpost with blood is part of the people.' },
        { kind: 'commentary', id: 'four-hundred-years', html: 'Genesis 15:13 prophesied: &quot;Know of a surety that thy seed shall be a stranger in a land that is not theirs, and shall serve them; and they shall afflict them four hundred years.&quot; Now the time is fulfilled. The promise God made to Abraham in the dark is kept to Abraham&apos;s descendants in Egypt. The delay was not forgotten. The faithfulness was not abandoned. The fourth generation lived to see the exodus. The word of God proved sure.' },
        { kind: 'carry', html: 'You have left Egypt. You have crossed out of the land of slavery. You are part of the mixed multitude—not because of your bloodline, but because you trust the Lamb. The journey is long. The wilderness is ahead. But you go forward with the bread of affliction still tasting bitter on your tongue, and the knowledge that death passed over your house. You are not the same person who lived in Egypt. You are not the same person who was enslaved. You are the child of the Passover.' },
        { kind: 'reflection', id: 'reflect-departure', prompt: 'What does it mean to you that you are part of the &quot;mixed multitude&quot;—not chosen by blood, but chosen by the mark of the Lamb?' },
      ],
    },

    /* ─── Exodus 12:43–51 — The Ordinance for Ever ───────────────────── */
    {
      ref: 'Exodus 12:43–51',
      title: 'The Ordinance for Ever',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            { number: 43, spans: [ t('And the LORD said unto Moses and Aaron, This is the ordinance of the passover: There shall no stranger eat thereof:') ] },
            { number: 44, spans: [ t('But every man&apos;s servant that is bought for money, when thou hast circumcised him, then shall he eat thereof.') ] },
            { number: 45, spans: [ t('A foreigner and an hired servant shall not eat thereof.') ] },
            { number: 46, spans: [ t('In one house shall it be eaten; thou shalt not carry forth ought of the flesh abroad out of the house; '), hp('neither shall ye break a bone thereof', 'christ-bones-unbroken'), t('.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex12-passover-rules',
          html:
            'The Passover meal has its own rules — eaten in one house, no bone broken, no stranger sharing. The night that delivered Israel becomes a sacrament with edges[res:sefaria-exodus-12].',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            { number: 47, spans: [ t('All the congregation of Israel shall keep it.') ] },
            { number: 48, spans: [ t('And when a stranger shall sojourn with thee, and will keep the passover to the LORD, let all his males be circumcised, and then let him come near and keep it; and he shall be as one that is born in the land: for no uncircumcised person shall eat thereof.') ] },
            { number: 49, spans: [ t('One law shall be to him that is homeborn, and unto the stranger that sojourneth among you.') ] },
            { number: 50, spans: [ t('Thus did all the children of Israel; as the LORD commanded Moses and Aaron, so did they.') ] },
            { number: 51, spans: [ t('And it came to pass the selfsame day, that the LORD brought the children of Israel out of the land of Egypt by their armies.') ] },
          ],
        },
        { kind: 'commentary', id: 'bones-unbroken-detail', html: 'It is an odd detail to include. The lamb is slain, roasted, eaten. Why specify that no bone shall be broken? It seems minor. But nearly fifteen hundred years later, on a hill called Golgotha, this detail will become central. A man will hang on a cross, and soldiers will come to break His legs—the standard practice to hasten death. But when they come to Jesus, they find He is already dead. So they do not break His legs. And John, writing the gospel, will quote this verse: &quot;These things were done, that the scripture should be fulfilled, A bone of him shall not be broken&quot; (John 19:36). The oddness of the detail reveals its purpose. It was written into the Passover ordinance so that when the Lamb of God was slain, the people of God would recognize Him.' },
        { kind: 'christ', id: 'christ-bones-unbroken', title: 'Christ Connection — Not a Bone Broken', html: 'In John 1:29, the Baptist sees Jesus and says, &quot;Behold the Lamb of God, which taketh away the sin of the world.&quot; John is reading the Passover. In 1 Corinthians 5:7, Paul writes, &quot;Christ our passover is sacrificed for us.&quot; The New Testament writers do not see Jesus as a departure from the Passover—they see Him as its fulfillment. And one of the ways they mark that fulfillment is the unbroken bones. The lamb slain in Egypt pointed to the Lamb slain outside Jerusalem. The blood on the doorposts pointed to the blood spilled on the cross. And now all who drink the cup and eat the bread in remembrance are partaking of the Passover that saves.' },
        { kind: 'carry', html: 'Every time you take bread and wine, you are eating a Passover. You are commemorating a night when death passed over, when judgment fell on the sacrifice, when the covenant was sealed in blood. You are remembering the lamb. And if you understand what you are doing, you are not merely looking backward to Egypt. You are looking back to the cross. You are saying: I trust the Lamb. The blood is on the doorpost. Death passes over me because of the mark. And I will keep this ordinance all my life, all my days, in memory of Him.' },
        { kind: 'reflection', id: 'reflect-ordinance', prompt: 'When you eat bread and drink wine, knowing that no bone of the Lamb was broken, what does it mean to you that the smallest details of Exodus 12 point to the cross?' },
        { kind: 'artwork', matchTitle: /lamb.*slain|paschal|passover.*supper/i, caption: 'The Lamb Slain, the Ordinance Forever, Exodus 12:46–51' },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 12',
    quote: 'A lamb without blemish, slain in the evening, its blood marked on the doorposts and lintel—the sign that death would pass over. The Passover became the feast Israel celebrated forever. And it became the type of the Lamb of God, whose blood was shed so that judgment would pass over all who believe.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 12 · Study Guide',
  },


  resources: [
    {
      id: 'passover-law',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 12: The Passover',
      url: 'https://www.sefaria.org/Exodus.12',
      description: 'Full Hebrew text and commentary on Passover.',
    },
    {
      id: 'blood-covenant',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Blood Covenant',
      url: 'https://www.bibleodyssey.org/dictionary/covenant/',
      description: 'The role of blood in covenant ratification.',
    },
    {
      id: 'sefaria-exodus-12',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 12 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Exodus.12',
      description: 'The Hebrew text of Exodus 12 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
