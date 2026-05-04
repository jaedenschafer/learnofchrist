import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SAMUEL_1_6: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 6,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 8 },
  opener: {
    matchTitle: /The Ark Is Returned/i,
    caption: '1 Samuel 6',
  },
  intros: [
    'The ark of the Lord has been in Philistine territory for seven months. Dagon has fallen. Plague has moved from city to city. Now even the priests and diviners of the Philistines tell their lords what every reader of Exodus already knows: you cannot keep the ark of the God of Israel and live. Send it home, they say — but send it home with honor.',
    'The chapter then moves to Beth-shemesh, where Israel celebrates the ark&apos;s return — and immediately presumes upon the holy. The very people who should have known better look into the ark, and judgment falls on them as well. The chapter closes with the same question both pagan and covenant peoples are forced to ask: &quot;Who is able to stand before this holy Lord God?&quot;',
  ],

  sections: [
    {
      ref: '1 Samuel 6:1–6',
      title: 'The Diviners&apos; Counsel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'And the ark of the Lord was in the country of the Philistines seven months.'),
            plain(2, 'And the Philistines called for the priests and the diviners, saying, What shall we do to the ark of the Lord? tell us wherewith we shall send it to his place.'),
            plain(3, 'And they said, If ye send away the ark of the God of Israel, send it not empty; but in any wise return him a trespass offering: then ye shall be healed, and it shall be known to you why his hand is not removed from you.'),
            plain(4, 'Then said they, What shall be the trespass offering which we shall return to him? They answered, Five golden emerods, and five golden mice, according to the number of the lords of the Philistines: for one plague was on you all, and on your lords.'),
            plain(5, 'Wherefore ye shall make images of your emerods, and images of your mice that mar the land; and ye shall give glory unto the God of Israel: peradventure he will lighten his hand from off you, and from off your gods, and from off your land.'),
            plain(6, 'Wherefore then do ye harden your hearts, as the Egyptians and Pharaoh hardened their hearts? when he had wrought wonderfully among them, did they not let the people go, and they departed?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'pagan-memory',
          html: 'Even Philistine diviners cite the exodus. Pharaoh&apos;s name is a warning across the centuries — a story preserved in the cultural memory of Israel&apos;s neighbors. The pagans know what the covenant people sometimes forget: the God of Israel is not a household idol to be moved at convenience. He brought down an empire over a single act of refusal. Send Him home, the diviners say, before He breaks Philistia the way He broke Egypt.[res:sefaria-hannah-prayer][res:bible-odyssey-eli-priests][res:iaa-shiloh-excavation]',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-asham',
          title: 'Asham — Trespass Offering',
          script: 'אָשָׁם',
          translit: '<strong>asham</strong> · guilt or trespass offering',
          description: 'The asham was the offering required when sin had caused damage requiring restitution. The Philistines, who knew nothing of Leviticus, intuit the principle: holiness violated demands compensation. Even pagans know that you cannot offend the Holy One without restitution.',
        },
        {
          kind: 'carry',
          html: 'When the people most distant from God can see what the people closest sometimes miss — that the Holy is not casual — the warning bell sounds. Have you grown casual with what should make you tremble? The diviners had nothing of the covenant but knew enough to be afraid. Has your familiarity with God dulled the fear that pagans still felt?',
        },
        {
          kind: 'reflection',
          id: 'ref-pagan-fear',
          prompt: 'Where in your life has long association with the holy made you forget how holy it is? What would it mean to recover the right kind of fear?',
        },
      ],
    },

    {
      ref: '1 Samuel 6:7–12',
      title: 'The Sign of the Milk Cows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(7, 'Now therefore make a new cart, and take two milch kine, on which there hath come no yoke, and tie the kine to the cart, and bring their calves home from them:'),
            plain(8, 'And take the ark of the Lord, and lay it upon the cart; and put the jewels of gold, which ye return him for a trespass offering, in a coffer by the side thereof; and send it away, that it may go.'),
            plain(9, 'And see, if it goeth up by the way of his own coast to Beth-shemesh, then he hath done us this great evil: but if not, then we shall know that it is not his hand that smote us; it was a chance that happened to us.'),
            plain(10, 'And the men did so; and took two milch kine, and tied them to the cart, and shut up their calves at home:'),
            plain(11, 'And they laid the ark of the Lord upon the cart, and the coffer with the mice of gold and the images of their emerods.'),
            plain(12, 'And the kine took the straight way to the way of Beth-shemesh, and went along the highway, lowing as they went, and turned not aside to the right hand or to the left; and the lords of the Philistines went after them unto the border of Beth-shemesh.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'milk-cows',
          html: 'The Philistines designed an exquisite test. Milk cows whose calves had just been taken from them — every instinct of mother and beast would draw them home, lowing for their young. Untrained, unyoked, no human driver. If they walk the road to Israel anyway, the Philistines will know. The cows lowed for their calves the whole way; their hearts pulled one direction; the hand of God pulled them another. They walked the straight way to Beth-shemesh.',
        },
        {
          kind: 'commentary',
          id: 'sign-faith',
          html: 'The Philistines wanted certainty before they would believe. They got it. The same God who hardened Pharaoh&apos;s heart now softens the necks of milk cows to bear His ark home. He works through every layer of creation — even the muscle of an animal pulling against its own instinct — to be glorified.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yashar',
          title: 'Yashar — Straight',
          script: 'יָשַׁר',
          translit: '<strong>yashar</strong> · straight, upright',
          description: 'The cows took the &quot;straight way&quot; — yashar derech. The same word is used for moral uprightness and for the path the righteous walk. The cows make a straight road; in the very next chapter, Samuel will call Israel to make their hearts straight too.',
        },
        {
          kind: 'carry',
          html: 'God can use the unwilling to do what the willing refuse. He can move you against the pull of your own instincts when His glory requires it. The lowing of the cows did not stop them; their grief did not turn them. If God is calling you to a hard path, the ache in your heart is not a sign you are wrong. Sometimes obedience and sorrow walk the same road together.',
        },
        {
          kind: 'reflection',
          id: 'ref-straight-way',
          prompt: 'Where is God asking you to walk a straight road that pulls against your instincts? Can you obey while the lowing in your heart continues?',
        },
      ],
    },

    {
      ref: '1 Samuel 6:13–18',
      title: 'The Ark Returns to Beth-shemesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(13, 'And they of Beth-shemesh were reaping their wheat harvest in the valley: and they lifted up their eyes, and saw the ark, and rejoiced to see it.'),
            plain(14, 'And the cart came into the field of Joshua, a Beth-shemite, and stood there, where there was a great stone: and they clave the wood of the cart, and offered the kine a burnt offering unto the Lord.'),
            plain(15, 'And the Levites took down the ark of the Lord, and the coffer that was with it, wherein the jewels of gold were, and put them on the great stone: and the men of Beth-shemesh offered burnt offerings and sacrificed sacrifices the same day unto the Lord.'),
            plain(16, 'And when the five lords of the Philistines had seen it, they returned to Ekron the same day.'),
            plain(17, 'And these are the golden emerods which the Philistines returned for a trespass offering unto the Lord; for Ashdod one, for Gaza one, for Askelon one, for Gath one, for Ekron one;'),
            plain(18, 'And the golden mice, according to the number of all the cities of the Philistines belonging to the five lords, both of fenced cities, and of country villages, even unto the great stone of Abel, whereon they set down the ark of the Lord: which stone remaineth unto this day in the field of Joshua, the Bethshemite.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'wheat-harvest',
          html: 'Beth-shemesh — &quot;house of the sun&quot; — at wheat harvest. The picture is full of light and abundance. The reapers look up and see what they had not dared hope for: the ark returning, drawn by cows the Philistines had loaded. They rejoice. They sacrifice the cart and the cows themselves — the most fitting offering, since both were used to bear the holy.',
        },
        {
          kind: 'commentary',
          id: 'great-stone',
          html: 'A great stone in the field of Joshua becomes a temporary altar. The same Joshua name as the great commander of an earlier generation echoes here. The ark rests on the rock; the offerings rise; for one moment Israel and the holy are reunited in joy. But this peace will not last the chapter.',
        },
        {
          kind: 'carry',
          html: 'The right response to God&apos;s return is sacrifice — to give Him back what we have, including the very things that brought Him to us. The cart and the cows had carried the ark home. They became the offering. What has God used to draw you back to Him? Are you willing to give it to Him as well, instead of clutching it as a trophy?',
        },
        {
          kind: 'reflection',
          id: 'ref-give-the-cart',
          prompt: 'What in your life has been the cart that bore God back to you? Could you offer that very thing as a sacrifice of gratitude rather than holding it as a possession?',
        },
      ],
    },

    {
      ref: '1 Samuel 6:19–21',
      title: '&quot;Who Is Able to Stand?&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(19, 'And he smote the men of Beth-shemesh, because they had looked into the ark of the Lord, even he smote of the people fifty thousand and threescore and ten men: and the people lamented, because the Lord had smitten many of the people with a great slaughter.'),
            plain(20, 'And the men of Beth-shemesh said, Who is able to stand before this holy Lord God? and to whom shall he go up from us?'),
            plain(21, 'And they sent messengers to the inhabitants of Kirjath-jearim, saying, The Philistines have brought again the ark of the Lord; come ye down, and fetch it up to you.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'looked-in',
          html: 'Joy turns to lament. The men of Beth-shemesh — Israelites, not Philistines — looked into the ark, violating the holiness Moses had established generations earlier. The numbers in the Hebrew text are debated; some manuscripts read 70, others 50,070. Whatever the count, the lesson is unmistakable: the ark&apos;s holiness is not negotiated by ethnic identity. Covenant people are no more permitted to presume than pagans.',
        },
        {
          kind: 'commentary',
          id: 'who-can-stand',
          html: 'The question that closes the chapter is the right one — and it is the wrong question to be asking under judgment. &quot;Who is able to stand before this holy Lord God?&quot; The answer Scripture eventually gives, through the cross, is: no one — except those covered by the blood of the Lamb. The Beth-shemites can only send the ark away. The whole sacrificial system, eventually, is the answer to their question.',
        },
        {
          kind: 'christ',
          id: 'christ-stand-through-blood',
          title: 'Christ Connection — Through Him We Have Boldness',
          html: 'The men of Beth-shemesh asked the unanswerable question: &quot;Who is able to stand before this holy Lord God?&quot; The author of Hebrews answers, centuries later: &quot;Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus, by a new and living way, which he hath consecrated for us, through the veil, that is to say, his flesh&quot; (Hebrews 10:19–20). What no Israelite could do — stand before the holy Lord God — Christ has made possible. The ark that struck men dead is the same place where the blood of atonement was sprinkled. In Christ, the very holiness that once required distance now invites embrace. He is the New and Living Way.',
        },
        {
          kind: 'carry',
          html: 'You may have grown casual with what is holy. You may also have grown afraid of it. The cross stands between both errors. Casualness forgets that He is the consuming fire. Fear forgets that He is also our Father. Christ holds both truths together — &quot;a new and living way&quot; — that lets us approach with reverence and confidence at once.',
        },
        {
          kind: 'reflection',
          id: 'ref-boldness',
          prompt: 'Where do you swing toward casualness with the holy? Where do you swing toward dread? How does the cross teach you to hold both reverence and confidence together?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Samuel 6',
    quote:
      '&quot;Who is able to stand before this holy Lord God?&quot; The men of Beth-shemesh ask the unanswerable question — and Christ, centuries later, becomes the answer: a new and living way through His flesh.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 6 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hannah-prayer',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hannah&apos;s Prayer',
      url: 'https://www.sefaria.org/1_Samuel.1',
      description: 'Complete text and commentary on Hannah&apos;s prayer and Samuel&apos;s birth.',
    },
    {
      id: 'bible-odyssey-eli-priests',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Eli and the Priestly Line',
      url: 'https://www.bibleodyssey.org/dictionary/eli/',
      description: 'Overview of Eli&apos;s role as high priest and the corruption of his sons.',
    },
    {
      id: 'iaa-shiloh-excavation',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Shiloh Excavation',
      url: 'https://www.antiquities.org.il/',
      description: 'Archaeological evidence of the Shiloh temple site where Hannah and Eli worshipped.',
    },
  ],
  hasHebrew: true,
};
