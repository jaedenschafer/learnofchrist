import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 34 — The Borders of Canaan
 *
 * The Lord defines the boundaries of the land Israel will inherit. Four borders,
 * marked by cities and landmarks: south to north, east to west. Then nine and a half
 * tribes will inherit on the west side of Jordan; three tribes have already settled east.
 * Eleazar the priest and Joshua plus one prince from each of the twelve tribes shall divide
 * the land. The names are listed—Caleb first (the man who followed wholly), the rest by tribe.
 *
 * Voice: A survey map, a property deed, a list of names. But behind the geography is theology:
 * God assigns the inheritance. The borders are not human invention. Caleb&apos;s faithfulness is
 * publicly named. The pattern is God&apos;s, not ours.
 *
 * Christ: The land foreshadows the inheritance Christ secures (Heb. 11:13-16; Eph. 1:11).
 * The measuring and dividing echo the work of the Spirit—marking out what belongs to whom,
 * making covenant real in concrete places.
 */
export const NUMBERS_34: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 34,

  intros: [
    'After forty years of wilderness, God stands Israel at the edge of Canaan and does something remarkable: He measures the land. Not to keep them out, but to mark the borders, name the territory, make the promise concrete. This is not an abstract assurance. This is a deed. These are the boundaries. This land is yours.',
    'The chapter reads like a surveyor&apos;s report—south border from the wilderness of Zin to the Salt Sea; west border the Mediterranean; north border to Hamath and Ziphron; east border back down the Jordan to the Salt Sea. One boundary traced in place names, in geography, in specificity. Then, after the borders are marked, come the names of the men who will divide it. Not by lottery, not by war, but by priestly assignment and tribal representation. Caleb, the one who followed wholly, is named first.',
  ],

  bottomShare: {
    label: 'Share Numbers 34',
    quote:
      'God defines the borders of the land Israel will inherit and assigns leaders—Eleazar the priest and Joshua—to divide it among the tribes. Caleb, who followed God wholly, is named first among the tribal princes. The inheritance is not left to chance or to human whim. God measures it. God assigns it. God remembers faithfulness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 34 · Study Guide',
  },

  sections: [
    /* ─── The South and West Borders ───────────────────────────────────── */
    {
      ref: 'Numbers 34:1–5',
      title: 'The South Border: From Wilderness to Sea',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Command the children of Israel, and say unto them, When ye come into the land of Canaan; (this is the land that shall '),
                hg('fall unto you', 'c-inheritance'),
                t(' for an inheritance, even the land of Canaan with the coasts thereof:)'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Then your south quarter shall be from the wilderness of Zin along by the coast of Edom, and your south border shall be the outmost coast of the '),
                hy('salt sea', 'hebrew-yam-melach'),
                t(' eastward:'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And your border shall turn from the south to the going up to Akrabbim, and pass on to Zin: and the going forth thereof shall be from the south to Kadesh-barnea, and shall go on to Hazar-addar, and pass on to Azmon:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the border shall fetch a compass from Azmon unto the '),
                hy('river of Egypt', 'c-river-egypt'),
                t(', and the goings out of it shall be at the sea.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-inheritance',
          html:
            'The word is <em>fall unto you</em>—as if by divine distribution, not by conquest or luck. This is inheritance language, covenant language. The land is <em>given</em> before it is fought for. God owns it; He grants it. The borders He marks are the borders of His gift.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yam-melach',
          title: 'Yam Melach — &ldquo;the Salt Sea&rdquo;',
          script: 'יַם מֶלַח',
          translit: '<strong>yam melach</strong> · the Dead Sea; sea of salt',
          description:
            'The Dead Sea marks Israel&apos;s southeastern boundary. Its name reflects its character—salt so dense nothing floats, except by miracle. The boundary itself is a geography of extremes, reminding Israel: this land has a specific shape, specific edges, and those edges are marked by God.',
        },
        {
          kind: 'commentary',
          id: 'c-river-egypt',
          html:
            'The "river of Egypt" (likely the Wadi el-Arish, not the Nile) forms the southwestern border. Israel&apos;s southern boundary, then, is marked by three compass points: the wilderness where they wandered, the Dead Sea where redemption ends and possession begins, and Egypt behind them—the land they came from. The south border encloses a history.',
        },
        {
          kind: 'christ',
          id: 'christ-inheritance',
          title: 'Christ Connection — Inheritance Through Him',
          html:
            'Paul writes that believers are &ldquo;blessed us with all spiritual blessings in heavenly places in Christ&rdquo; and that we have &ldquo;redemption through his blood, the forgiveness of sins&rdquo; and are &ldquo;sealed with that holy Spirit of promise, which is the earnest of our inheritance&rdquo; (Eph. 1:3, 7, 13–14). Our inheritance is not earned. It is marked out, measured, and given—just as Canaan was. The borders of our inheritance are fixed not by our faithfulness but by Christ&apos;s accomplished redemption. He is the border, the boundary, the one who marks where the inheritance begins and ends.',
        },
        {
          kind: 'carry',
          html:
            'If you feel like you&apos;re standing at the edge of something God has promised you—a calling, a relationship, a freedom, a home—this chapter is a reminder that the inheritance has boundaries. It is not endless, boundless, undefined. God marks the borders. He names the territory. Your inheritance is not a vague hope; it is specific, measurable, real. The edges of it are already known to God. You can step into it with confidence, not because you earned it, but because God Himself has measured and assigned it.',
        },
        {
          kind: 'reflection',
          id: 'south-border',
          prompt:
            'What is the inheritance God has promised you? Can you name its borders? What would it mean to stop expanding it beyond what He has marked and instead, step fully into what He has given?',
        },
      ],
    },

    /* ─── The West and North Borders ───────────────────────────────────── */
    {
      ref: 'Numbers 34:6–9',
      title: 'The West and North: The Great Sea and the Heights',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 6,
              spans: [
                t('And as for the western border, ye shall even have '),
                hy('the great sea', 'hebrew-gadol'),
                t(' for a border: this shall be your west border.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And this shall be your north border: from the great sea ye shall point out for you mount Hor:'),
              ],
            },
            {
              number: 8,
              spans: [
                t('From mount Hor ye shall point out your border unto the entrance of Hamath; and the goings forth of the border shall be toward Zedad:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the border shall go on to Ziphron, and the goings out of it shall be at Hazar-enan: this shall be your north border.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hebrew-gadol',
          html:
            'The west border is not a city or a river; it is &ldquo;the great sea&rdquo;—the Mediterranean. One side of Israel&apos;s inheritance opens onto the wider world. The Mediterranean was a highway of trade, a boundary both literal and symbolic. The promised land is not closed off. It has a coast.',
        },
        {
          kind: 'commentary',
          id: 'c-north-border',
          html:
            'The north border, traced from Mount Hor through Hamath to Ziphron to Hazar-enan, marks the territory up into what we might call Syria. This is the maximum extent of the northern border—the outer limit of the inheritance. Historically, Israel would rarely hold this entire stretch, but God marks it now, before they enter.',
        },
        {
          kind: 'reflection',
          id: 'west-north-borders',
          prompt:
            'God marks boundaries—not to confine, but to define. The west opens to the Mediterranean; the north extends into higher territory. What does it mean that your inheritance has both open horizons and clear limits?',
        },
      ],
    },

    /* ─── The East Border ──────────────────────────────────────────────── */
    {
      ref: 'Numbers 34:10–15',
      title: 'The East Border: From Hazar-enan to the Salt Sea',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 10,
              spans: [
                t('And ye shall point out your east border from Hazar-enan to Shepham:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the coast shall go down from Shepham to Riblah, on the east side of Ain; and the border shall descend, and shall reach unto the side of the sea of Chinnereth '),
                hg('eastward', 'c-chinnereth'),
                t(':'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the border shall go down to the Jordan: and the goings out of it shall be at the salt sea: this shall be your land with the coasts thereof round about.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Moses commanded the children of Israel, saying, This is the land which ye shall inherit by lot, which the Lord commanded to give unto the nine tribes, and to the half tribe:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('For the tribe of the children of Reuben according to the house of their fathers, and the tribe of the children of Gad according to the house of their fathers, have received their inheritance; and half the tribe of Manasseh have received their inheritance:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('The two tribes and the half tribe have received their inheritance on this side Jordan near Jericho eastward, toward the sunrising.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-chinnereth',
          html:
            'Chinnereth is the Sea of Galilee—a freshwater inland sea, a place of blessing and provision. The border runs down along it and ends at the Salt Sea, where the Jordan emptiness into its most dense waters. The inheritance is bounded east by the great river and the sea—natural borders, divine markers.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gevul',
          title: 'Gevul — &ldquo;border&rdquo;',
          script: 'גְּבוּל',
          translit: '<strong>gevul</strong> · a boundary; a limit; a definition of what belongs to whom',
          description:
            'The Hebrew word for border carries the sense of definition. A border is not a wall but a clarity: this side is yours, that side is not. To know your border is to know who you are.',
        },
        {
          kind: 'commentary',
          id: 'c-two-and-half',
          html:
            'Reuben, Gad, and half of Manasseh had already received their inheritance on the east side of the Jordan—the land they asked for after seeing it was good for cattle. This chapter acknowledges that inheritance as real but distinct. The west side of Jordan is the main inheritance; the east side is secondary—a kind of overflow, a departure from the pattern. Yet God honors both.',
        },
        {
          kind: 'carry',
          html:
            'The inheritance has boundaries. Not everyone receives the same inheritance. Reuben, Gad, and half of Manasseh got something different—and it was real, it was valid, it was from God. There is a place for the unexpected, the off-the-usual-path inheritance. But there is also a pattern, a main story. Knowing which you are called to is part of knowing your boundary. Comparing your inheritance to someone else&apos;s is the only real way to feel diminished. Receive what is yours, and rejoice in it.',
        },
        {
          kind: 'reflection',
          id: 'east-border',
          prompt:
            'Is there an inheritance you&apos;ve received that doesn&apos;t look like the "main" version others have? What would it mean to see it as valid, real, and from God?',
        },
      ],
    },

    /* ─── The Leaders and Caleb ────────────────────────────────────────── */
    {
      ref: 'Numbers 34:16–29',
      title: 'The Princes of the Tribes: Faithfulness Named',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 16,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 17,
              spans: [
                t('These are the names of the men which shall divide the land unto you: '),
                hp('Eleazar the priest', 'c-eleazar'),
                t(' and '),
                hp('Joshua the son of Nun', 'c-joshua'),
                t('.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And ye shall take one prince of every tribe, to divide the land by inheritance.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the names of the men are these: Of the tribe of Judah, '),
                hg('Caleb the son of Jephunneh', 'c-caleb'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And of the tribe of Simeon, Shemuel the son of Ammihud.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Of the tribe of Benjamin, Elidad the son of Chislon.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the prince of the tribe of the children of Dan, Ahiezer the son of Ammishaddai.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('The prince of the children of Asher, Pagiel the son of Ocran.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And the prince of the tribe of Gad, Geuel the son of Machi.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('The prince of the tribe of Zebulun, Elizaphan the son of Parnach.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And the prince of the tribe of Issachar, Paltiel the son of Azzan.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And the prince of the tribe of Asher, Ahihud the son of Shelomi.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And the prince of the tribe of Naphtali, Pedahel the son of Ammihud.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('These are they whom the Lord commanded to divide the inheritance unto the children of Israel in the land of Canaan.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eleazar',
          html:
            'Eleazar the high priest is named first among those who will divide the land. The division is not left to military leaders or judges, but to the priest—the one who represents the people before God and God before the people. The inheritance of the land is a sacred act, not a political one.',
        },
        {
          kind: 'commentary',
          id: 'c-joshua',
          html:
            'Joshua appears here not as king or general, but as co-leader alongside Eleazar. Moses has already announced that Joshua will succeed him. Here, Joshua is already stepping into his role as the one who will lead the land-taking. He will fight the battles; Eleazar will sanctify the divisions.',
        },
        {
          kind: 'commentary',
          id: 'c-caleb',
          html:
            'Caleb is named first among the tribal princes. This is not random. Caleb is the man who, at Kadesh-barnea forty years earlier, said, &ldquo;Let us go up at once, and possess it; for we are well able to overcome it&rdquo; (Num. 13:30). While the other spies brought a faithless report, Caleb followed the Lord wholly. His faithfulness is publicly honored here. He gets to participate in dividing the land he trusted God to give.',
        },
        {
          kind: 'christ',
          id: 'christ-caleb',
          title: 'Christ Connection — Faithfulness Remembered',
          html:
            'Caleb followed God wholly—"wholly" is the word the Bible uses. Later, when the tribes are being assigned their territories, God says to Joshua, &ldquo;Caleb the son of Jephunneh liveth; let him have his portion&rdquo; (Joshua 14:13). His faithfulness is remembered and rewarded. Jesus teaches that faithfulness matters eternally. "Well done, thou good and faithful servant… enter thou into the joy of thy lord&rdquo; (Matt. 25:21). Caleb&apos;s name at the head of the list is a promise: God sees your faithfulness. He remembers. He rewards it not in the moment, but at the end, when the inheritance is actually divided.',
        },
        {
          kind: 'carry',
          html:
            'Your faithfulness is being noted. The thing you trusted God for forty years ago—the promise you believed when no one else did, the step you took when others turned back—that faithfulness is being recorded. God is not forgetful. He does not reward it immediately, but He does not forget it. When the time comes to divide the inheritance, to assign the territory, to hand out what belongs to you, your name will be there, written down, honored. Be like Caleb. Follow wholly. Let your yes be yes. Trust when others doubt. And know that God sees it all, writes it all down, and will remember.',
        },
        {
          kind: 'reflection',
          id: 'caleb',
          prompt:
            'When have you followed God wholly, when others doubted? What inheritance or reward have you been waiting for? How does it change things to know God has written your faithfulness down?',
        },
      ],
    },

    /* ─── The Pattern: God Assigns ─────────────────────────────────────── */
    {
      ref: 'The Theology of Assignment',
      title: 'God Measures; God Assigns',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-theology-assignment',
          html:
            'The chapter divides neatly: first, the borders (verses 1–15); second, the leaders who will divide (verses 16–29). The structure is theological. <strong>God marks the borders of the inheritance. God assigns the leaders who will distribute it.</strong> Humans do not invent the inheritance. Humans do not decide who gets what. The pattern—the boundary, the leader, the division—belongs to God. Israel steps into an inheritance already measured, already assigned, already blessed.',
        },
        {
          kind: 'commentary',
          id: 'c-nachalah',
          html:
            'The Hebrew word for inheritance, <em>nachalah</em>, carries the sense of something assigned by lot, by divine distribution. An inheritance is not purchased; it is <em>given</em>. It is <em>assigned</em>. The moment you understand that your inheritance—whether the land, the calling, the family, the talents God has given—is not yours to invent but yours to receive, everything changes. You stop striving to earn it and start preparing to inhabit it.',
        },
        {
          kind: 'christ',
          id: 'christ-spirit-division',
          title: 'Christ Connection — The Spirit Divides',
          html:
            'Paul writes that "to each one is given the manifestation of the Spirit for the common good" (1 Cor. 12:7). Who divides? The Spirit. "All these are the work of one and the same Spirit, who distributes to each one individually just as he determines" (1 Cor. 12:11). Just as Eleazar and Joshua and the tribal princes divided the land, the Spirit divides the gifts of the Spirit. You did not earn your gifts. You did not invent your calling. The Spirit has measured it out and assigned it. That assignment is your inheritance. You step into it, you work it, you steward it—but you do not invent it.',
        },
        {
          kind: 'carry',
          html:
            'Stop trying to figure out what inheritance is "supposed" to be. Stop comparing your boundaries to someone else&apos;s. God has marked borders for you. He has assigned leaders (mentors, pastors, wise voices) to help you see where they are. Your calling, your gifts, your territory—they are not up for grabs in some endless competition. They are assigned. Measured. Yours. The relief of that is enormous. You can stop striving to deserve it and start attending to the work of living in it faithfully.',
        },
        {
          kind: 'reflection',
          id: 'theology-assignment',
          prompt:
            'What has God assigned to you that you&apos;ve been trying to earn? What would change if you received it as an inheritance—measured out, assigned, real—rather than something you have to perpetually prove yourself worthy of?',
        },
        { kind: 'divider' },
        {
          kind: 'commentary',
          id: 'c-nachalah-word',
          html:
            'The Hebrew word <em>nachalah</em> appears throughout Numbers 34. The land is not bought, not conquered (yet), not earned—it is <em>nachalah</em>, inherited, assigned, given. This is the language of covenant, of grace. God does not sell the land to Israel. He assigns it. The price has already been paid—paid in Egypt, at the Passover, in the wilderness, in the faithfulness of Caleb and Joshua who held fast to the promise when others let go.',
        },
      ],
    },
  ],
};
