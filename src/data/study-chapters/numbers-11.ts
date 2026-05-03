import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 11 — Israel complains at Taberah; the mixed multitude lusts for Egypt;
 * Moses cries out under the burden; God puts His Spirit on 70 elders;
 * Eldad and Medad prophesy; the quail come in overwhelming abundance;
 * a plague strikes at Kibroth-hattaavah (graves of craving).
 */
export const NUMBERS_11: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 11,

  estimatedMinutes: { beginner: 9, intermediate: 16, deep: 20 },
  intros: [
    'Numbers 11 shows Israel in the wilderness at a breaking point. The journey from Egypt to Canaan, which should have taken two weeks, has already stretched into months. The people are tired, hungry, and restless. What begins as a quiet complaint at the edge of camp ignites into mutiny.',
    'The chapter layers several crises. First, fire consumes the edges of the camp. Then the mixed multitude—those who came out of Egypt but weren&apos;t born into Israel&apos;s covenant—begin to crave the foods of Egypt: fish, cucumbers, melons, leeks, onions, garlic. They weep. They remember comfort; they forget slavery. Moses, overwhelmed, cries out to God: "I am not able to bear all this people alone, because it is too heavy for me." God&apos;s answer fractures the entire leadership structure. He takes the Spirit resting on Moses and distributes it among seventy elders. Two men, Eldad and Medad, begin prophesying in the camp without being summoned. Joshua objects; Moses, in a moment of clarity, wishes that all the Lord&apos;s people were prophets. The chapter ends in quail—so much of it that the people gather for two days and spread it out to dry. But before they can eat their fill, a plague strikes them at Kibroth-hattaavah: "graves of craving." Their desire has become their grave.',
  ],

  sections: [
    /* ─── Numbers 11:1–3 — Fire at Taberah ────────────────────────────── */
    {
      ref: 'Numbers 11:1–3',
      title: 'Fire at the Edge of Camp',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('And when the people '),
                hg('complained', 'complain-1'),
                t(', it '),
                hp('displeased the LORD', 'displease-comment'),
                t(': and the LORD heard it; and his anger was kindled; and the '),
                hy('fire of the LORD', 'fire-edut'),
                t(' burnt among them, and consumed them that were in the uttermost parts of the camp.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the people cried unto Moses; and when Moses prayed unto the LORD, the fire was quenched.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he called the name of that place '),
                hg('Taberah', 'taberah-name'),
                t(': because the fire of the LORD was kindled against them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'displease-comment',
          html:
            'When God&apos;s people murmur, His anger is kindled. This is not petulance; it is a Father responding to ingratitude and faithlessness. The people have seen miracles and yet forgotten the Deliverer. The fire that consumes the edges of the camp is a judgment, yes, but also a mercy—a call to repentance before the murmuring spreads further.',
        },
        {
          kind: 'commentary',
          id: 'complain-1',
          html:
            'The word for "complained" here is not a formal petition but a murmuring—a restless, discontent breath that spreads from person to person. In the wilderness, murmuring is a kind of faithlessness. The people have seen the pillar of fire, the plagues on Egypt, the Red Sea open before them. Yet at the first hardship, they forget.',
        },
        {
          kind: 'greek',
          id: 'fire-edut',
          title: 'Eš Adonai — "Fire of the LORD"',
          script: 'אֵשׁ יְהוָה',
          translit: '<strong>eš adonai</strong> · the consuming fire',
          description:
            'Fire is God&apos;s response to murmuring. It consumes the "uttermost parts of the camp"—the edges where people live least carefully, where complaint spreads most easily. It is a warning and a judgment all at once.',
        },
        {
          kind: 'commentary',
          id: 'taberah-name',
          html:
            'Taberah means "burning" in Hebrew. The place is named for what happened there. Israel will carry the memory of this place—and the burning—all the way to Canaan. Names in Scripture are never accidental; they are permanent reminders of who God is.',
        },
        {
          kind: 'carry',
          html:
            'When discontent begins as a whisper in a group, it spreads like fire. What starts as a private complaint becomes a shared murmuring, then a rebellion. God&apos;s response here is swift and severe because He knows the danger: a people divided by complaint cannot enter the land of promise. The boundary between faithlessness and the consuming judgment of God is thinner than we think.',
        },
        {
          kind: 'reflection',
          id: 'taberah-reflect',
          prompt:
            'What complaints are you carrying that might be spreading like fire in your own heart? What would it look like to lay them down before the Lord?',
        },
      ],
    },

    /* ─── Numbers 11:4–9 — The Lust for Egypt ────────────────────────── */
    {
      ref: 'Numbers 11:4–9',
      title: 'The Mixed Multitude Craves Egypt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 4,
              spans: [
                t('And the '),
                hg('mixed multitude', 'aspsuf-1'),
                t(' that was among them '),
                hp('fell a lusting', 'lust-comment'),
                t(': and the children of Israel also wept again, and said, Who shall give us '),
                hy('flesh to eat', 'basar-1'),
                t('?'),
              ],
            },
            {
              number: 5,
              spans: [
                t('We remember the '),
                hg('fish', 'egypt-fish'),
                t(' which we did eat in Egypt freely; the '),
                hg('cucumbers', 'egypt-cucumber'),
                t(', and the '),
                hg('melons', 'egypt-melon'),
                t(', and the '),
                hg('leeks', 'egypt-leek'),
                t(', and the '),
                hg('onions', 'egypt-onion'),
                t(', and the '),
                hg('garlic', 'egypt-garlic'),
                t(':'),
              ],
            },
            {
              number: 6,
              spans: [
                t('But now our soul is dried away: there is nothing at all, beside this manna, before our eyes.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the manna was as '),
                hy('coriander seed', 'coriander-look'),
                t(', and the colour thereof as the colour of '),
                hy('bdellium', 'bdellium-look'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the people went about, and gathered it, and ground it in mills, or beat it in a mortar, and baked it in pans: and the taste of it was as the taste of fresh oil.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('But when the dew fell upon the camp in the night, the manna fell upon it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lust-comment',
          html:
            'Lusting is not neutral yearning; it is a demand that says "I deserve this, and I deserve it now." It is the appetite in rebellion against submission. The people do not ask God for bread; they tear it from His hand through complaint.',
        },
        {
          kind: 'commentary',
          id: 'aspsuf-1',
          html:
            'The "mixed multitude" (<em>aspsuf</em>) is the word for riffraff, foreigners, those who left Egypt but never fully belonged to Israel&apos;s covenant. They ignite the murmuring. But Israel joins in. This is the danger of complaint: it spreads fastest among those who were never fully committed to the promise in the first place.',
        },
        {
          kind: 'commentary',
          id: 'egypt-fish',
          html:
            'The catalog of Egyptian foods is vivid and specific. Fish, cucumbers, melons, leeks, onions, garlic—all the foods of the Nile and its cultivated fields. The people have romanticized Egypt. They remember the abundance of the food market and have forgotten the whip, the taskmaster, the crushing servitude. Memory in Scripture is dangerous when it is selective.',
        },
        {
          kind: 'commentary',
          id: 'egypt-cucumber',
          html:
            'Cucumbers are a cool, abundant crop of the Nile Valley—easy to grow, easy to eat. They represent comfort, accessibility, the life of a slave who could at least eat well. No one who had truly tasted freedom would trade it for cucumbers.',
        },
        {
          kind: 'commentary',
          id: 'egypt-melon',
          html:
            'Melons—sweet, substantial, the fruit of summer. The people are not asking for survival; they are asking for the good life they imagined themselves living in Egypt. They have forgotten that they were slaves.',
        },
        {
          kind: 'commentary',
          id: 'egypt-leek',
          html:
            'Leeks, onions, garlic—the staple flavorings of poor people&apos;s food. These are not luxuries; they are the foods of subsistence. Yet to Israel in the wilderness, surviving on manna, they seem infinitely precious. The nostalgia of the enslaved is a powerful and dangerous thing.',
        },
        {
          kind: 'commentary',
          id: 'egypt-onion',
          html:
            'The specificity here matters. This is not abstract hunger; this is hunger for a particular taste, a particular memory. Spiritual dissatisfaction often disguises itself as appetite.',
        },
        {
          kind: 'commentary',
          id: 'egypt-garlic',
          html:
            'Garlic. The humblest of the Egyptian foods mentioned. And yet it becomes, in the wilderness, the symbol of everything left behind. We desire what we have lost far more than what we have.',
        },
        {
          kind: 'hebrew',
          id: 'basar-1',
          title: 'Basar — "flesh, meat"',
          script: 'בָּשָׂר',
          translit: '<strong>basar</strong> · flesh, meat, or any food',
          description:
            'Basar in Hebrew can mean literal flesh or, more broadly, any substantial food. Here the people are not crying for survival; they are crying for the memory of abundance they falsely attribute to Egypt.',
        },
        {
          kind: 'commentary',
          id: 'coriander-look',
          html:
            'The manna is compared to coriander seed—small, round, pale. It is enough. God provides. But it is not what they crave. The wilderness teaches a hard lesson: provision is not the same as preference, and need is not the same as desire.',
        },
        {
          kind: 'commentary',
          id: 'bdellium-look',
          html:
            'Bdellium is a pale, translucent resin. The manna catches the morning light, becomes visible as dew falls. It is a visible, daily, undeniable miracle. Yet it does not satisfy the wanting of the heart.',
        },
        {
          kind: 'carry',
          html:
            'Craving is a form of infidelity. When you begin to long for what you left behind—comfort, safety, the known world—you are turning your back on the promise ahead. The wilderness is meant to teach you to want only what God provides. That is the deepest work of faith: not just obedience, but the transformation of desire itself.',
        },
        {
          kind: 'reflection',
          id: 'egypt-reflect',
          prompt:
            'What good thing from your old life are you romanticizing? What would it mean to grieve that loss while staying committed to where God is taking you?',
        },
        {
          kind: 'artwork',
          matchTitle: /manna|wilderness|eating/i,
          caption: 'Numbers 11:4–9 · The Lust for Egypt',
        },
      ],
    },

    /* ─── Numbers 11:10–15 — Moses Cries Out ────────────────────────── */
    {
      ref: 'Numbers 11:10–15',
      title: 'The Burden Falls on Moses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 10,
              spans: [
                t('Then Moses heard the people weep throughout their families, every man in the door of his tent: and the anger of the LORD was kindled greatly; Moses also was displeased.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Moses said unto the LORD, '),
                hp('Wherefore hast thou afflicted thy servant', 'christ-burden-1'),
                t('? and wherefore have I not found favour in thy sight, that thou layest the burden of all this people upon me?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Have I conceived all this people? have I begotten them, that thou shouldest say unto me, Carry them in thy bosom, as a nursing father beareth the sucking child, unto the land which thou swarest unto their fathers?'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Whence should I have '),
                hy('flesh', 'basar-burden'),
                t(' to give unto all this people? for they weep unto me, saying, Give us '),
                hg('flesh', 'flesh-demand'),
                t(' that we may eat.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('I am not able to bear all this people alone, because it is too '),
                hp('heavy for me', 'heavy-burden'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And if thou deal thus with me, kill me, I pray thee, out of hand, if I have found favour in thy sight; and let me not see my wretchedness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-burden-1',
          html:
            'Moses is at the end of his strength. He is not angry at the people (though he has every right to be); he is bewildered by God. "Why have you afflicted your servant?" he asks. He is carrying a weight he was never designed to carry alone. No human leader can bear the spiritual hunger of an entire people by themselves.',
        },
        {
          kind: 'commentary',
          id: 'basar-burden',
          html:
            'Moses parries with the same word the people used: "flesh." He is saying, in effect, where am I supposed to get meat for all this people? He is being literal and sarcastic at once. The people are asking the impossible. And he is the one being crushed by it.',
        },
        {
          kind: 'commentary',
          id: 'flesh-demand',
          html:
            'The repetition of "flesh" shows the weight of it—the people weeping, demanding, demanding again. This is not a small request. The whole camp is crying out in hunger. Moses has become the lightning rod for all of Israel&apos;s discontent.',
        },
        {
          kind: 'hebrew',
          id: 'heavy-burden',
          title: 'Kaved — "heavy"',
          script: 'כָּבֵד',
          translit: '<strong>kaved</strong> · heavy, weighty, grievous',
          description:
            'The word for "heavy" (kaved) is the same root as "glory" (kavod) in Hebrew. The weight Moses is carrying is a kind of weight that only comes from the presence of the holy. He is being crushed by proximity to God and to His people at the same time.',
        },
        {
          kind: 'carry',
          html:
            'If you are trying to carry the spiritual weight of others alone—their doubts, their needs, their hunger—you will break. Jesus said, "Come unto me, all ye that are weary and are heavy laden, and I will give you rest" (Matthew 11:28). The burden is meant to be borne by Him, not by you. Trying to be a savior to others is a way of refusing to let Christ be the Savior.',
        },
        {
          kind: 'reflection',
          id: 'burden-reflect',
          prompt:
            'Whose burden have you taken on that was never meant for you to carry? What would change if you set it down at the feet of Jesus?',
        },
      ],
    },

    /* ─── Numbers 11:16–30 — The Spirit Distributed Among Seventy ─── */
    {
      ref: 'Numbers 11:16–30',
      title: 'The Spirit Falls on Seventy Elders',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 16,
              spans: [
                t('And the LORD said unto Moses, Gather unto me '),
                hg('seventy men', 'seventy-elders'),
                t(' of the elders of Israel, whom thou knowest to be the elders of the people, and officers over them; and bring them unto the tabernacle of the congregation, that they may stand there with thee.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And I will come down and talk with thee there: and I will '),
                hp('take of the spirit which is upon thee', 'christ-spirit-share'),
                t(', and will put it upon them; and they shall bear the burden of the people with thee, that thou bear it not alone.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And say thou unto the people, Sanctify yourselves against to morrow, and ye shall eat flesh: for ye have wept in the ears of the LORD, saying, Who shall give us flesh to eat? for it was well with us in Egypt: therefore the LORD will give you flesh, and ye shall eat.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Ye shall not eat one day, nor two days, nor five days, neither ten days, nor twenty days;'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But even a whole month, until it come out at your nostrils, and it be loathsome unto you: because that ye have despised the LORD which is among you, and have wept before him, saying, Why came we forth out of Egypt?'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And Moses said, The people, among whom I am, are six hundred thousand footmen; and thou hast said, I will give them flesh, that they may eat a whole month.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Shall the flocks and the herds be slain for them, to suffice them? or shall all the fish of the sea be gathered together for them, to suffice them?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num11-mid',
          html:
            'The promise has been made: you shall eat flesh a whole month. Moses doubts the logistics—how can so much meat be provided? God does not answer the question directly. He asks instead: Is My hand shortened? Can I not do what I have said? The test is not about provision; it is about faith in God&apos;s sufficiency. Now comes the answer: it will be done. Watch.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 23,
              spans: [
                t('And the LORD said unto Moses, Is the LORD&apos;s hand waxed short? thou shalt see now whether my word shall come to pass unto thee or not.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Moses went out, and told the people the words of the LORD: and he gathered the seventy men of the elders of the people, and set them round about the tabernacle.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And the LORD came down in a cloud, and spake unto him, and took of the spirit that was upon him, and gave it unto the seventy elders: and it came to pass, that, when the spirit rested upon them, they '),
                hy('prophesied', 'prophecy-prophet'),
                t(', and did not cease.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('But there remained two of the men in the camp, the name of the one was '),
                hg('Eldad', 'eldad-medad'),
                t(', and the name of the other '),
                hg('Medad', 'medad-prophesy'),
                t(': and the spirit rested upon them; and they were of them that were written, but went not out unto the tabernacle: and they '),
                hy('prophesied', 'prophecy-eldad'),
                t(' in the camp.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And there ran a young man, and told Moses, and said, Eldad and Medad do prophesy in the camp.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Joshua the son of Nun, the servant of Moses, one of his young men, answered and said, My lord Moses, '),
                hg('forbid', 'joshua-forbid'),
                t(' them.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And Moses said unto him, '),
                hp('Enviest thou for my sake', 'christ-all-prophets'),
                t('? '),
                hp('would God that all the LORD&apos;s people were prophets', 'christ-all-prophets'),
                t(', and that the LORD would put his spirit upon them!'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Moses and the elders of Israel retired into the camp.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'seventy-elders',
          html:
            'Seventy elders. This is not arbitrary. Seventy becomes the template for shared leadership in Scripture—echoed later in the Sanhedrin and, most famously, in Jesus&apos; sending of seventy disciples (Luke 10:1). The work of the kingdom is never meant to rest on one person.',
        },
        {
          kind: 'commentary',
          id: 'christ-spirit-share',
          html:
            'God says He will take of the Spirit resting on Moses and distribute it. This is revolutionary. The Spirit has been Moses&apos; unique possession—the mark of his calling, his authority, the source of his power. Now God scatters it. This is how burden gets shared: not by multiplying resources, but by multiplying the people who carry the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'prophecy-prophet',
          html:
            'When the Spirit rests on the seventy, they prophesy. Prophecy here is not primarily predicting the future; it is speaking forth the word of the Lord, blessing and directing the people. The Spirit makes speakers of plain elders.',
        },
        {
          kind: 'commentary',
          id: 'eldad-medad',
          html:
            'Eldad and Medad are two men who were registered but did not show up at the tabernacle. And yet the Spirit rests on them anyway. They prophesy in the camp itself, among the people. This is shocking. The Spirit is not bound by protocol; it is not confined to the official place. It moves where it will.',
        },
        {
          kind: 'commentary',
          id: 'medad-prophesy',
          html:
            'These two names—Eldad and Medad—appear nowhere else in Scripture. And yet they are preserved here because of what happened to them: an outpouring of the Spirit that no one expected, in a place no one authorized, on people who were not even present when the formal commissioning occurred.',
        },
        {
          kind: 'commentary',
          id: 'prophecy-eldad',
          html:
            'The fact that they prophesy is reported as a breach of protocol. But look at Moses&apos; response. He does not see a problem. He sees instead the fulfillment of a hope.',
        },
        {
          kind: 'hebrew',
          id: 'joshua-forbid',
          title: 'Asár — "forbid, prevent"',
          script: 'אָסַר',
          translit: '<strong>asár</strong> · to bind, prevent, forbid',
          description:
            'Joshua wants to bind or prevent the prophecy of Eldad and Medad. He is protecting the tradition, the proper order. Moses will not have it. The Spirit is not bound by what we think proper.',
        },
        {
          kind: 'christ',
          id: 'christ-all-prophets',
          title: 'Christ Connection — The Spirit Poured Out on All',
          html:
            'Moses&apos; wish—"would God that all the LORD&apos;s people were prophets"—is not answered until Pentecost. On that day, the Spirit was poured out "upon all flesh," and "your sons and your daughters shall prophesy" (Acts 2:17–18, quoting Joel 2:28–29). What seemed like a radical breach of order in the wilderness became God&apos;s plan all along. Every believer is meant to carry the Spirit. Every believer is meant to speak forth God&apos;s word in their own time and place.',
        },
        {
          kind: 'carry',
          html:
            'The Spirit is not a scarce resource hoarded by the few. It is meant to be shared, distributed, poured out. If you are waiting for permission to speak the word of the Lord where you are, this is your permission. You do not need to stand in the official place. You do not need to be formally registered. The Spirit rests on you if you belong to Jesus. Speak.',
        },
        {
          kind: 'reflection',
          id: 'eldad-reflect',
          prompt:
            'What word of the Lord have you been afraid to speak because you thought you needed permission? What would change if you saw yourself as one of the seventy, filled with the Spirit?',
        },
        {
          kind: 'artwork',
          matchTitle: /spirit|pentecost|fire|holy/i,
          caption: 'Numbers 11:24–30 · The Spirit on the Seventy Elders',
        },
      ],
    },

    /* ─── Numbers 11:31–35 — Quail and Plague at Kibroth-hattaavah ───── */
    {
      ref: 'Numbers 11:31–35',
      title: 'The Graves of Craving',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 31,
              spans: [
                t('And there went forth a wind from the LORD, and brought '),
                hg('quails', 'quail-wind'),
                t(' from the sea, and let them fall by the camp, as it were a day&apos;s journey on this side, and as it were a day&apos;s journey on the other side, round about the camp, and as it were two cubits high upon the earth.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And the people stood up all that day, and all that night, and all the next day, and '),
                hp('gathered the quails', 'christ-feast-turned-judgment'),
                t(': he that gathered least gathered ten homers: and they spread them all abroad for themselves round about the camp.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And while the '),
                hy('flesh', 'basar-quail'),
                t(' was yet between their teeth, ere it was chewed, the wrath of the LORD was kindled against the people, and the LORD smote the people with a very great plague.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And he called the name of that place '),
                hg('Kibroth-hattaavah', 'graves-craving'),
                t(': because there they buried the people that '),
                hy('lusted', 'lust-taavah'),
                t('.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And the people journeyed from Kibroth-hattaavah unto Hazeroth; and abode at Hazeroth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'quail-wind',
          html:
            'A wind from the Lord blows quail in from the sea. They fall thick on the ground—nearly six feet high around the camp. The provision is immediate and overwhelming. God is answering their demand. He is giving them what they wanted. This is a terrible mercy.',
        },
        {
          kind: 'commentary',
          id: 'christ-feast-turned-judgment',
          html:
            'The people gather quail for two days straight—night and day. Each person gathers at least ten homers (a homer is a large measure, roughly 90 pounds). The abundance is staggering. They have what they asked for. And then, while they are still chewing, the plague comes.',
        },
        {
          kind: 'commentary',
          id: 'basar-quail',
          html:
            'The "flesh" they demanded comes. But it does not satisfy; it kills. The same word that described their hunger now describes the very thing that will cause their death. Desire and death become indistinguishable.',
        },
        {
          kind: 'hebrew',
          id: 'graves-craving',
          title: 'Kibroth-hattaavah — "Graves of Craving"',
          script: 'קִבְרוֹת הַתַּאֲוָה',
          translit: '<strong>kivrót ha-ta&apos;avá</strong> · graves of craving, lust',
          description:
            'The name of the place is a warning written into the map. These graves mark the spot where hunger became death. Every time Israel passes, they remember: craving is a grave.',
        },
        {
          kind: 'hebrew',
          id: 'lust-taavah',
          title: 'Taavah — "to lust, crave, desire"',
          script: 'תַּאֲוָה',
          translit: '<strong>taavá</strong> · lust, appetite, craving',
          description:
            'The root word for the place name. Taavah is not neutral desire; it is the hunger of the flesh that opposes the Spirit. It is craving untethered from gratitude, wanting untethered from obedience. It is the desire that says "I deserve this" and "God is withholding from me."',
        },
        {
          kind: 'christ',
          id: 'christ-feast-turned-judgment-2',
          title: 'Christ Connection — Feasting and Judgment',
          html:
            'This scene echoes throughout Scripture. Psalm 78:29–31 reflects on it: "So they did eat, and were well filled: for he gave them their own desire; But while their meat was yet in their mouths, the wrath of God came upon them." The pattern repeats in 1 Corinthians 10:5–6, where Paul warns the Corinthians about exactly this story. The judgment comes not because God is stingy but because the people have forgotten the Giver and are serving only appetite. Jesus, by contrast, turns us away from appetite toward Him. "Blessed are they which do hunger and thirst after righteousness: for they shall be filled" (Matthew 5:6). The graves of craving are avoided only when desire is transformed.',
        },
        {
          kind: 'carry',
          html:
            'Asking God for something is not the same as having Him answer. Sometimes He answers "no." Sometimes He answers "yes and it will kill you." When you get what you craved without gratitude, without restraint, without the slow transformation of your heart toward Him, the feast becomes a grave. The antidote is not less desire but different desire: to hunger and thirst for righteousness instead of for the comforts of the world you left behind.',
        },
        {
          kind: 'reflection',
          id: 'graves-reflect',
          prompt:
            'What is the one thing you are craving right now that you know, in your heart, would be a grave for you if God granted it? What would satisfy instead?',
        },
        {
          kind: 'artwork',
          matchTitle: /quail|judgment|plague|death/i,
          caption: 'Numbers 11:31–35 · Kibroth-hattaavah, the Graves of Craving',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Numbers 11',
    quote:
      'When Israel craved the foods of Egypt, forgetting they had been slaves, God gave them quail in such abundance that they became sick. He named the place Kibroth-hattaavah: "the graves of craving." But He also distributed His Spirit among seventy elders so that no one person would bear the burden alone, and He moved to bring the kingdom He is building into all who will receive it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 11 · Study Guide',
  },

  hasHebrew: true,
};
