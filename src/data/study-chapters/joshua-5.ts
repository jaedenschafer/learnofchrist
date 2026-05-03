import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 5 — Circumcision before conquest, Passover in the land,
 * manna ceasing, and the Captain of the Lord&apos;s host.
 */
export const JOSHUA_5: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 5,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 12 },
  intros: [
    'Joshua 5 is where Israel pauses before the conquest of Canaan. The Jordan is crossed, the wilderness is behind, and the enemy kings&apos; hearts have already melted in fear. But God does not lead them straight to battle. Instead, He asks for circumcision — the covenant sign restored before any sword is drawn. Only after the people are healed and the Passover is kept does Israel eat the fruit of the land. Worship comes before warfare. The covenant comes before conquest.',
    'Three mysteries mark this chapter. First, a whole generation is circumcised in enemy territory — an act of stunning vulnerability that only faith can explain. Second, the manna that fed them for forty years stops the moment they taste Canaan&apos;s harvest — God&apos;s provision changes form but never quality. Third, a man with a drawn sword appears to Joshua, receives Joshua&apos;s worship, and claims to be the Captain of the Lord&apos;s host. He speaks like God, receives worship like God, and commands like God. He is almost certainly a pre-incarnate appearance of Christ Himself.',
  ],

  sections: [
    /* ─── Joshua 5:1 — The Enemy&apos;s Fear ─────────────────────────────────── */
    {
      ref: 'Joshua 5:1',
      title: 'The Kings&apos; Hearts Melted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass, when all the kings of the Amorites, which were on the side of Jordan westward, and all the kings of the Canaanites, which were by the sea, heard that the LORD had '),
                hy('dried up the waters of Jordan', 'jordan-dried'),
                t(' from before the children of Israel, until we were passed over, that '),
                hg('their heart melted', 'hearts-melted'),
                t(', neither was there spirit in them any more, because of the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jordan-dried',
          html:
            'The Jordan crossing (Joshua 3–4) is a smaller, dryer version of the Red Sea crossing forty years earlier. When God splits a sea, entire kingdoms feel it. Fear moves before faith. The Amorite and Canaanite kings have already lost the psychological ground of war.',
        },
        {
          kind: 'commentary',
          id: 'hearts-melted',
          html:
            'The Hebrew word for &ldquo;melted&rdquo; is used earlier for Rahab&apos;s terror: &ldquo;I know that the LORD hath given you the land, and that your fear is fallen upon us, and that all the inhabitants of the land faint because of you&rdquo; (Joshua 2:9). A nation&apos;s courage evaporates when it faces God. But Israel does not yet move. Instead, God asks them to stop and be vulnerable.',
        },
        {
          kind: 'carry',
          html:
            'Whatever enemy or obstacle sits across your Jordan right now — the conversation you need to have, the change you need to make, the calling you sense pulling you — that enemy already knows God has given it to you. Your fear of it is smaller than its fear of Him. The pause you feel before stepping forward is not weakness; it may be God asking you to be circumcised first — to let Him cut away the old patterns and claims before you enter the land.',
        },
      ],
    },

    /* ─── Joshua 5:2–9 — Circumcision Before Conquest ───────────────── */
    {
      ref: 'Joshua 5:2–9',
      title: 'Circumcision Before Conquest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 2,
              spans: [
                t('At that time the LORD said unto Joshua, '),
                hg('Make thee sharp knives', 'sharp-knives'),
                t(', and circumcise again the children of Israel the second time.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sharp-knives',
          html:
            'The command is startling. The enemy is afraid. The moment for victory is close. And God says: stop. Circumcise. This is not the strategy of any military handbook. It is the strategy of a God who cares more for His people&apos;s covenant standing than for their tactical advantage.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 3,
              spans: [
                t('And Joshua made him '),
                hg('sharp knives of stone', 'flint-knives'),
                t(', and circumcised the children of Israel at the hill of the foreskins.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'flint-knives',
          html:
            'Stone knives — not bronze or iron. This detail is so odd that some scholars have speculated it reflects an ancient practice predating metal tools. But it also reads as a return: Israel uses the tools of their ancestors, the tools of the original covenant. The wilderness generation has died. Their children now take up the sign their fathers bore.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 4,
              spans: [
                t('And this is the cause why Joshua did circumcise: All the people that came out of Egypt, that were males, even all the men of war, died in the wilderness by the way, after they came out of Egypt.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Now all the people that came out were circumcised: but all the people that were born in the wilderness by the way as they came forth out of Egypt, them they had not circumcised.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('For the children of Israel '),
                hg('walked forty years in the wilderness', 'forty-years'),
                t(', till all the people that were men of war, which came out of Egypt, were consumed, because they obeyed not the voice of the LORD: unto whom the LORD sware that he would not shew them the land, which the LORD sware unto their fathers that he would give us, a land that floweth with milk and honey.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'forty-years',
          html:
            'The wilderness generation refused God&apos;s voice at Kadesh-Barnea (Numbers 13–14). They had been circumcised in Egypt; they died in the wilderness uncircumcised spiritually — unwilling to enter covenant with Him. Now their children, born in the wilderness and never circumcised at all, must receive the sign before entering the land. The covenant passes to a new generation.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 7,
              spans: [
                t('And their children, whom he raised up in their stead, them Joshua circumcised: for they were '),
                hy('uncircumcised', 'uncircumcised-wilderness'),
                t(', because they had not circumcised them by the way.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'uncircumcised-wilderness',
          title: 'Arelim — &ldquo;uncircumcised&rdquo;',
          script: 'עֲרֵלִים',
          translit: '<strong>arelim</strong> · the uncircumcised, those outside the covenant',
          description:
            'Circumcision is not merely a rite; it is the sign and seal of the covenant. An uncircumcised generation had wandered forty years without the covenant mark — living under God&apos;s care but outside the covenant&apos;s formal claim on them. Now that mark is restored.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 8,
              spans: [
                t('Now when they had done circumcising all the people, they abode in their places in the camp, till they were whole.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the LORD said unto Joshua, '),
                hg('This day have I rolled away the reproach of Egypt', 'rolled-away'),
                t(' from off you. Wherefore the name of the place is called '),
                hy('Gilgal', 'gilgal-meaning'),
                t(' unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rolled-away',
          html:
            'The &ldquo;reproach of Egypt&rdquo; is the shame of slavery, of wandering without a land, of being a covenant people with no covenant home. Now, in circumcision and crossing, God removes that stigma. They are a covenant people in their land. The reproach is rolled away.',
        },
        {
          kind: 'hebrew',
          id: 'gilgal-meaning',
          title: 'Gilgal — &ldquo;rolling away&rdquo;',
          script: 'גִּלְגָּל',
          translit: '<strong>galal</strong> · to roll; root of Gilgal',
          description:
            'The place-name is a verb. Gilgal means &ldquo;rolling.&rdquo; God does not just forgive the past; He rolls it away — an act as complete as rolling a stone from a tomb. From this place, Israel will move forward without the weight of Egypt anymore.',
        },
        {
          kind: 'carry',
          html:
            'If there is an old reproach you carry — a shame you inherited, a failure that labeled you, a season when you were exiled from where you belong — circumcision in God&apos;s hands means that label is rolled away. Not hidden, not reframed. Rolled away. You don&apos;t carry it forward into the land. You are a covenant person in a covenant place, and the reproach is behind you now.',
        },
        {
          kind: 'reflection',
          id: 'circumcision',
          prompt:
            'What reproach from your past are you still carrying into the new ground God has opened? What would it look like to let Him roll it away?',
        },
      ],
    },

    /* ─── Joshua 5:10–12 — Passover and the Manna Ceasing ────────────── */
    {
      ref: 'Joshua 5:10–12',
      title: 'Passover in the Land, Manna Ceasing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 10,
              spans: [
                t('And the children of Israel encamped in Gilgal, and '),
                hg('kept the passover', 'passover-gilgal'),
                t(' on the fourteenth day of the month at even in the plains of Jericho.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'passover-gilgal',
          html:
            'The first Passover since leaving Egypt. For forty years, Israel either did not keep it or the text does not record it. Now, in Gilgal on the eve of conquest, they celebrate the feast that marks deliverance from slavery. Worship before warfare. The feast that remembers their rescue is the feast that prepares them for battle.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 11,
              spans: [
                t('And they did eat of the old corn of the land on the morrow after the passover, '),
                hg('unleavened cakes and parched corn', 'bread-of-land'),
                t(', in the selfsame day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bread-of-land',
          html:
            'The &ldquo;old corn of the land&rdquo; is grain stored from Canaan&apos;s previous harvest. Israel eats what the land has already produced. They are not invaders taking by force; they are people settling into what God has prepared.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 12,
              spans: [
                t('And the manna ceased on the morrow after they had eaten of the old corn of the land; neither had the children of Israel manna any more; but they did eat of the '),
                hy('fruit of the land of Canaan', 'harvest-harvest'),
                t(' that year.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'harvest-harvest',
          html:
            'Forty years of manna — the bread from heaven that fell every morning in the wilderness. Now it stops. But it stops not because God abandons them; it stops because they are ready to eat what the land itself yields. God&apos;s provision changes form, never quality. The wilderness manna becomes the Canaan harvest. A new season begins.',
        },
        {
          kind: 'carry',
          html:
            'God often feeds us in seasons where we cannot feed ourselves — the wilderness season, the waiting season, the season where nothing seems to be producing. But He never means for that to be forever. When you taste the fruit of the land — work that bears fruit, relationships that deepen, gifts that finally flourish — the manna of survival ceases. That is not abandonment. That is promotion. You are moving from being sustained to being settled, from being sustained to being fruitful.',
        },
        {
          kind: 'reflection',
          id: 'manna-ceases',
          prompt:
            'Where in your life is God moving you from manna to harvest — from sustenance to fruit? What are you tasting from the land?',
        },
      ],
    },

    /* ─── Joshua 5:13–15 — The Captain of the Lord&apos;s Host ────────────── */
    {
      ref: 'Joshua 5:13–15',
      title: 'The Captain of the Lord&apos;s Host',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 13,
              spans: [
                t('And it came to pass, when Joshua was by Jericho, that he '),
                hg('lifted up his eyes and looked', 'lifted-eyes'),
                t(', and, behold, there stood a man over against him with his sword drawn in his hand: and Joshua went unto him, and said unto him, '),
                t('Art thou for us, or for our adversaries'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lifted-eyes',
          html:
            'Joshua is standing alone, looking toward Jericho — the great walled city that is Israel&apos;s first obstacle in the conquest. A man with a drawn sword appears. The detail is striking: Joshua does not ask who he is, but whose side he is on. Joshua assumes the appearance of a military figure means war is being decided.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 14,
              spans: [
                t('And he said, '),
                hy('Nay', 'sar-captain'),
                t('; but as '),
                hp('captain of the host of the LORD', 'captain-host-span'),
                t(' am I now come. And Joshua fell on his face to the earth, and did worship, and said unto him, What saith my Lord unto his servant?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nay-no-sides',
          html:
            'The answer is almost a rebuke. &ldquo;No. You are asking the wrong question. I do not take sides. I command the side.&rdquo; Israel does not get to ask Christ to be on their team. They get to ask to be on His.',
        },
        {
          kind: 'commentary',
          id: 'captain-host',
          html:
            'The Hebrew is &ldquo;sar tzva&apos; Adonai&rdquo; — captain/prince of the host/army of the Lord. Joshua&apos;s response is immediate and instinctive: he falls on his face and worships. Joshua does not worship angels (see Revelation 22:8–9, where John is told not to worship even heavenly messengers). Joshua recognizes divine authority here.',
        },
        {
          kind: 'hebrew',
          id: 'sar-captain',
          title: 'Sar — &ldquo;captain&rdquo; or &ldquo;prince&rdquo;',
          script: 'שַׂר',
          translit: '<strong>sar</strong> · a military captain, a prince, one who commands',
          description:
            'The same word used for Israel&apos;s own military commanders and for princes of nations. Here it is used of the divine commander — the one who holds rank not by election or appointment, but by nature.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 15,
              spans: [
                t('And the captain of the LORD&apos;s host said unto Joshua, '),
                hg('Loose thy shoe from off thy foot', 'loose-shoe'),
                t('; for the place whereon thou standest is holy. And Joshua did so.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'loose-shoe',
          html:
            'The command parallels Moses at the burning bush: &ldquo;Put off thy shoes from off thy feet, for the place whereon thou standest is holy ground&rdquo; (Exodus 3:5). Both Joshua and Moses stand in the presence of God. Both are told the ground is holy because He stands there. The same voice, the same authority, the same demand for reverence. And nowhere else in the Old Testament does such a command come except in the presence of God Himself.',
        },
        {
          kind: 'christ',
          id: 'captain-host-span',
          title: 'Christ Connection — The Captain Becomes King',
          html:
            'The Captain of the Lord&apos;s host receives Joshua&apos;s worship, claims to speak for God, and commands with divine authority. He is almost certainly a Christophany — a pre-incarnate appearance of the Son. Later, Jesus will tell His disciples, &ldquo;All power is given unto me in heaven and in earth&rdquo; (Matthew 28:18). Here, that authority is already claimed. The Captain of the Lord&apos;s host is the Word who spoke creation into being, the One Isaiah will later see in the temple (Isaiah 6), the One John will recognize as the Light (John 1:1–3). He comes to Joshua not to take sides, but to take command. Christ is never our ally who agrees with us. He is our Commander.',
        },
        {
          kind: 'carry',
          html:
            'The questions we ask are almost always wrong questions. Am I winning? Is He on my side? Will this work out the way I planned? Joshua asked, &ldquo;Are you for us or against us?&rdquo; and was told, &ldquo;I am neither. I am the Captain.&rdquo; The shift that changes everything is simple: Stop asking Him to join your army. Ask to be enlisted in His.',
        },
        {
          kind: 'reflection',
          id: 'captain-reflection',
          prompt:
            'What would change in your life if you stopped asking God to be on your side and started asking to be on His?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Joshua 5',
    quote:
      'God said to Joshua, "This day have I rolled away the reproach of Egypt from off you." And the Captain of the Lord&apos;s host appeared to Joshua and said, "Loose thy shoe from off thy foot; for the place whereon thou standest is holy."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 5 · Study Guide',
  },

  hasHebrew: true,
};
