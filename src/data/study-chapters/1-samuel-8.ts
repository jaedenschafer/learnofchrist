import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 8 — "Make Us a King"
 *
 * A nation asks to be like all the nations around them, rejecting the thing
 * that made them distinct. God grants their request—and grieves. The tragedy
 * of human choice: God honors our freedom even when it breaks His heart.
 */
export const SAMUEL_1_8: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 8,

  estimatedMinutes: { 5: 6, 10: 12, 15: 15 },
  intros: [
    'First Samuel 8 is a turning point. Samuel is old. His sons, who were supposed to carry on his work as judges, have turned aside from their father&apos;s ways. They took bribes, perverted judgment, became takers instead of servants. When the elders of Israel see that Samuel cannot be replaced by his own sons, they make their decision: "Give us a king to judge us like all the nations."',
    'The thing displeases Samuel. But God speaks to him: they have not rejected Samuel—they have rejected God Himself, that He should not reign over them. And yet, God says, let them have it. Samuel must tell them what a king will cost. And they must hear it. And then, knowing the price, they must choose. The chapter is a study in human freedom and divine grief—God granting what He hates, because He will not force anyone to love Him.',
  ],

  opener: {
    matchArtist: /tissot|rembrandt/i,
    matchTitle: /samuel|kings|coronat/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 8',
    quote:
      'When Israel demanded a king, God told them what it would cost: their sons, their daughters, their fields, their servants. Still they insisted. God granted their request. And He wept.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 8 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 8:1–5 — Samuel's Sons Fail ───────────────────────────── */
    {
      ref: '1 Samuel 8:1–5',
      title: 'A Father&apos;s Failure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass, when Samuel was old, that he made his '),
                hy('sons judges', 'c-sons'),
                t(' over Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sons',
          html:
            'Samuel is the great judge of Israel. His name is synonymous with faithful leadership. And yet when he is old and seeks to pass his authority to his sons, the narrative takes a turn that readers of Scripture will recognize: the same turn Abraham knew with Ishmael, Isaac with Jacob and Esau, David with his older sons. Great men often fail as fathers.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 2,
              spans: [
                t('Now the name of his firstborn was Joel; and the name of his second, Abiah: and they were judges in Beersheba.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And his sons '),
                hg('walked not in his ways', 'c-walked-not'),
                t(', but '),
                hg('turned aside after lucre', 'c-lucre'),
                t(', and '),
                hg('took bribes', 'c-bribed'),
                t(', and '),
                hg('perverted judgment', 'c-judgment'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-walked-not',
          html:
            'The phrase &ldquo;walked not in his ways&rdquo; echoes the language used of Israel&apos;s covenant failure. Samuel&apos;s sons are not simply failing at the job; they are breaking covenant with the God their father served.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-lucre',
          title: 'Betsa — &ldquo;lucre&rdquo; or gain',
          script: 'בֶּצַע',
          translit: '<strong>betsa</strong> · illicit gain, greed',
          description:
            'The word does not just mean profit. It means profit taken by means of fraud or corruption. The sons of Samuel are not merchants seeking honest gain; they are judges using their authority to enrich themselves unjustly.',
        },
        {
          kind: 'commentary',
          id: 'c-bribed',
          html:
            'The most basic requirement of a judge is impartiality. Bribes destroy it. By accepting payment from those who come before them, they have sold the only thing a judge has to give: a fair hearing.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 4,
              spans: [
                t('Then all the elders of Israel gathered themselves together, and came to Samuel unto Ramah, and said unto him, Behold, thou art old, and thy sons walk not in thy ways: now '),
                hp('make us a king', 'christ-king-demand'),
                t(' to judge us like all the nations.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-walked-not-elders',
          html:
            'The elders do not ask Samuel to fix his sons. They do not ask for a new judge. Their answer to failed human leadership is to change the system entirely. And the reason they give is telling: "like all the nations." Israel is asking to be ordinary.',
        },
        {
          kind: 'carry',
          html:
            'Samuel&apos;s failure as a father is part of Scripture&apos;s honesty about the men it honors. You can be a faithful servant of God and still raise children who betray everything you taught them. Your legacy is not guaranteed. The only response is not to pretend it didn&apos;t happen, but to grieve it, and then to watch what God does next.',
        },
        {
          kind: 'reflection',
          id: 'fathers-failure',
          prompt:
            "Where do you see yourself in this story—as a parent struggling to pass on what you believe? Or as someone who watched it fail in your own home? What does Samuel's honesty about his sons teach you about failure?",
        },
      ],
    },

    /* ─── 1 Samuel 8:6–9 — God's Grief ────────────────────────────────────── */
    {
      ref: '1 Samuel 8:6–9',
      title: 'They Have Rejected Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 5,
              spans: [
                t('And Samuel heard all the words of the people: and it '),
                hy('displeased him', 'c-displease'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-displease',
          html:
            'Samuel feels the weight of it. He prays. But notice what he doesn&apos;t do: he doesn&apos;t immediately grant the request. He brings it to the Lord. This is the model of a faithful leader—never deciding alone what the people demand of you.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 6,
              spans: [
                t('And Samuel '),
                hp('prayed unto the Lord', 'c-prayer'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the Lord said unto Samuel, Hearken unto the voice of the people in all that they say unto thee: for '),
                hg('they have not rejected thee', 'c-not-thee'),
                t(', but '),
                hy('they have rejected me', 'hebrew-maas'),
                t(', that I should not reign over them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-prayer',
          html:
            'Samuel&apos;s immediate response to the people&apos;s demand is not to defend himself, but to pray. A godly leader trusts God with the people&apos;s choices, even when those choices wound.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-maas',
          title: 'Ma&apos;as — &ldquo;reject&rdquo;',
          script: 'מָאַס',
          translit: '<strong>ma&apos;as</strong> · to refuse, to reject, to regard as worthless',
          description:
            'The God of Israel is not angry that the people do not want Samuel anymore. He is grieved that they do not want Him. The prophet is a symbol of something much larger.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 8,
              spans: [
                t('According to all the works which they have done since the day that I brought them up out of Egypt even unto this day, wherewith they have '),
                hg('forsaken me', 'c-forsaken'),
                t(', and '),
                hg('served other gods', 'c-gods'),
                t(', so do they also unto thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-forsaken',
          html:
            'This is not a new chapter in Israel&apos;s story. It is the continuation of a long pattern. From the moment God brought them out of Egypt, they have been asking to be like everyone else. They build a golden calf. They grumble. They doubt. And now they ask for a king. This is the same apostasy in new clothing.',
        },
        {
          kind: 'commentary',
          id: 'c-gods',
          html:
            'Israel can serve other gods by serving what the other nations serve—their kings, their systems, their way of organizing power. The sin is not always explicit idolatry. Sometimes it is simply a nation deciding it wants to be like the nation next door.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 9,
              spans: [
                t('Now therefore hearken unto their voice: howbeit yet '),
                hp('protest solemnly unto them', 'c-protest'),
                t(', and shew them the manner of the king that shall reign over them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-protest',
          html:
            'God does not simply grant what the people ask. He requires that they know the cost. This is mercy, not cruelty. God is saying: "I will let you choose what you are asking for, but you will choose it with your eyes open. You will know what it will cost you. And you will choose it anyway." That is the condition of human freedom—we are free to destroy ourselves, but not free to do it in ignorance.',
        },
        {
          kind: 'carry',
          html:
            'Is there something you are asking God for right now, knowing it is not what He wants for you? The story of Samuel 8 is not a promise that God will magically prevent your bad choices. It is a promise that He will not force you to do what is right. He will tell you the cost. And then He will honor your choice, even as He grieves it.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'rejected-me',
          prompt:
            'When God says to Samuel that the people have rejected Him, not Samuel—what does it mean to reject God? When have you wanted to be "like all the nations" instead of choosing what God was asking of you?',
        },
      ],
    },

    /* ─── 1 Samuel 8:10–18 — The Manner of the King ────────────────────── */
    {
      ref: '1 Samuel 8:10–18',
      title: 'The King Will Take',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 10,
              spans: [
                t('And '),
                hp('Samuel told all the words of the Lord', 'c-samuel-tells'),
                t(' unto the people that asked of him a king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-samuel-tells',
          html:
            'Samuel obeys God. He does not soften the message. He does not tell the people what they want to hear. He tells them what the Lord told him.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 11,
              spans: [
                t('And he said, '),
                hg('This will be the manner of the king', 'c-manner'),
                t(' that shall reign over you: '),
                hg('He will take your sons', 'c-take-sons'),
                t(', and appoint them for himself, for his chariots, and to be his horsemen; and some shall run before his chariots.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-manner',
          html:
            'The word translated "manner" suggests the law or custom that a king establishes. This is not a prophecy about one bad king. This is the nature of kingship itself. A king is a taker. Every verse that follows drives the same nail deeper: take, take, take, take. By the end, seven "takes" will have been uttered.',
        },
        {
          kind: 'commentary',
          id: 'c-take-sons',
          html:
            'Notice where this begins: with your sons. A king will take the young men of fighting age and turn them into soldiers for his wars. They will be instruments of his ambition, not their own.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 12,
              spans: [
                t('And he will appoint him captains over thousands, and captains over fifties; and will set them to ear his ground, and to reap his harvest, and to make his instruments of war, and instruments of his chariots.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-captains',
          html:
            'The king will not only use your sons in war. He will use them in his own farming, in his own service. The young men of Israel will become the king&apos;s servants, working his land, building his tools.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 13,
              spans: [
                t('And '),
                hg('he will take your daughters', 'c-take-daughters'),
                t(' to be confectionaries, and to be cooks, and to be bakers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-take-daughters',
          html:
            'The king will take your daughters as servants in his house. They will spend their lives making perfumes, cooking, baking—serving the appetites of the king.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 14,
              spans: [
                t('And '),
                hg('he will take your fields', 'c-take-land'),
                t(', and your vineyards, and your oliveyards, even the best of them, and give them to his servants.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-take-land',
          html:
            'In Israel&apos;s law, each family held their land as an inheritance from God. The land was not to be sold permanently (Leviticus 25). A king will violate that covenant, taking the best land for himself and his court.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 15,
              spans: [
                t('And '),
                hg('he will take the tenth of your seed', 'c-take-tenth'),
                t(', and of your vineyards, and give to his officers, and to his servants.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-take-tenth',
          html:
            'A tithe—a tenth of what you grow—belongs to the Lord and to His priests. A king will take it for himself. What was sacred becomes royal tribute.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 16,
              spans: [
                t('And '),
                hg('he will take your menservants, and your maidservants', 'c-take-servants'),
                t(', and your goodliest young men, and your asses, and put them to his work.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-take-servants',
          html:
            'The king will conscript not only the children of Israel, but their servants as well. He will take the best of your animals and put them to work for him.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 17,
              spans: [
                t('He will take the tenth of your sheep: and '),
                hg('ye shall be his servants', 'c-servants-of-king'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-servants-of-king',
          html:
            'The prophecy of what a king will take ends with the most important thing: yourselves. You will become servants of the king. You were brought out of Egypt to be servants of God alone. Now you will be servants of a man.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 18,
              spans: [
                t('And '),
                hg('ye shall cry out in that day', 'c-cry'),
                t(' because of your king which ye shall have chosen you; and '),
                hp('the Lord will not hear you in that day', 'christ-king-cost'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cry',
          html:
            'Samuel is not making a prediction that is uncertain. He is articulating something that is inevitable. When a people give their freedom to one person, they will someday regret it. And in that hour, they will cry out. But the Lord will not answer. Not because He is without mercy, but because they have cut themselves off from His kingship through their own choice.',
        },
        {
          kind: 'christ',
          id: 'christ-king-cost',
          title: 'Christ Connection — The King Who Gives',
          html:
            'Seven times in these verses Samuel says the king will "take." The contrast with Jesus could not be sharper. When Christ entered Jerusalem as King, He did not conscript soldiers or seize land. He washed His disciples&apos; feet. He said, "I came not to be ministered unto, but to minister, and to give my life a ransom for many" (Matt. 10:45). A earthly king takes everything from you. The True King gave everything for you. This is the difference between the throne of man and the throne of God.',
        },
        {
          kind: 'carry',
          html:
            'What in your life are you "taking" when you should be giving? What are you holding onto that you could lay down? Samuel&apos;s catalogue of the king&apos;s takings is brutal and merciless. It shows what unchecked power does: it consumes. Jesus shows the other way: power that flows downward, that serves, that gives. Both are true in Scripture. Both are present in history. Which one do you serve?',
        },
        {
          kind: 'reflection',
          id: 'manner-of-king',
          prompt:
            'Samuel lists everything the king will take from Israel. But Jesus came not to take but to give His life. Where are you being tempted to &quot;take&quot; in your own life, instead of give? What would change if you took Jesus seriously on this?',
        },
        {
          kind: 'artwork',
          matchTitle: /king|throne|coronat|regal/i,
          caption: '1 Samuel 8 · The Manner of the King',
        },
      ],
    },

    /* ─── 1 Samuel 8:19–22 — The People Insist ───────────────────────────── */
    {
      ref: '1 Samuel 8:19–22',
      title: 'Nevertheless, We Will Have a King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 19,
              spans: [
                t('Nevertheless '),
                hg('the people refused to obey', 'c-refused'),
                t(' the voice of Samuel; and they said, Nay; but we will have a king over us;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-refused',
          html:
            'Samuel has told them everything. The cost is clear. They understand what a king will take. And they say: nevertheless. This is the stubbornness of human will. Not the stubbornness of someone who hasn&apos;t heard, but of someone who has heard and is choosing to ignore it.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 19,
              spans: [
                t('that we also may be '),
                hg('like all the nations', 'c-like-nations'),
                t('; and that our king may judge us, and go out before us, and fight our battles.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-like-nations',
          html:
            'The reason is given again: they want to be like the other nations. What God had given them—a form of government unique in the ancient world, judges chosen for wisdom and justice rather than inherited right—seemed to them weak. They wanted what everyone else had. And what they all had was a strong man at the top, a king to "go out before us and fight our battles." They wanted someone else to fight for them, to make the hard choices, to bear the burden. And they were willing to pay the price for it.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 20,
              spans: [
                t('And Samuel heard all the words of the people, and he rehearsed them in the ears of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rehearsed',
          html:
            'Samuel does not make the decision himself. He takes the people&apos;s refusal to the Lord again. A good leader always brings the hard questions back to God.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 21,
              spans: [
                t('And the Lord said unto Samuel, '),
                hp('Hearken unto their voice', 'c-gods-grant'),
                t(', and '),
                hg('make them a king', 'c-make-king'),
                t('. And Samuel said unto the men of Israel, Go ye every man unto his city.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gods-grant',
          html:
            'God grants what He hates. This is the terrible freedom He has given us. He will not force you to choose His best for you. He honors human will even when that will chooses what wounds both the chooser and the heart of God.',
        },
        {
          kind: 'christ',
          id: 'c-make-king',
          title: 'Christ Connection — God Grants What He Grieves',
          html:
            'Romans 1 describes the same pattern: "God gave them over to the lusts of their hearts" (Rom. 1:24). The people of Israel asked for a king. God warned them. They insisted anyway. And God said yes. Not because He wanted this. But because He honors freedom. This is the only kind of love that is real—a love that can be refused, that will suffer the refusal, and will still honor the choice. Jesus showed this love on the cross. He could have forced Himself to be received. Instead He wept over Jerusalem, knowing it would reject Him. And then He let it happen.',
        },
        {
          kind: 'carry',
          html:
            'The deepest part of God&apos;s nature is not His power to make you obey. It is His willingness to let you go. This is the terrifying grace of the Bible. You are free. Not free from consequences—the Bible is clear about what follows when a nation chooses poorly. But free to choose poorly. And God will honor that choice, even as He grieves it. Even as He warns you of the cost.',
        },
        {
          kind: 'reflection',
          id: 'nevertheless',
          prompt:
            'The people heard the cost and said &quot;nevertheless, we will have a king.&quot; What is the &quot;nevertheless&quot; in your own life—the thing you insist on despite knowing what it will cost you? What would it look like to truly listen to God&apos;s warning?',
        },
      ],
    },
  ],
};
