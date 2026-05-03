import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 34 — the final chapter of the Pentateuch.
 *
 * Moses climbs Mount Nebo, sees the Promised Land he will never enter, and
 * dies in the wilderness. God Himself buries him in an unmarked grave. The
 * children of Israel mourn for thirty days. Joshua is commissioned and stands
 * ready. The Pentateuch closes with an epitaph unmatched in Scripture: a man
 * whom God knew face to face, yet who could not lead his people into their
 * inheritance. The law of Moses cannot bring us in. Only Joshua—Yeshua—can.
 */
export const DEUTERONOMY_34: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 34,

  estimatedMinutes: { 5: 8, 10: 13, 15: 18 },
  intros: [
    'The Pentateuch opened with God speaking light into a formless void. Forty chapters later, it closes with a man climbing a mountain to see a land he will never possess. Moses, who walked with God more intimately than any other human being in Scripture, dies in the wilderness at 120 years old—his eye undimmed, his strength unabated, but his journey finally complete.',
    'Deuteronomy 34 is structured as a series of closings: Moses sees, Moses dies, God buries him, Israel grieves, Joshua rises, the epitaph is spoken. It is the most poignant closing in the Old Testament. The law of Moses was given to set God&apos;s people free—but the law itself cannot bring them into the land. Only Joshua, the next leader, whose name is Yeshua (Jesus), can cross over and lead them in. The Pentateuch ends pointing forward, waiting for the Prophet greater than Moses.',
    'Yet the closing is not quite final. At the Mount of Transfiguration, Moses appears again, standing with Elijah on a mountain in the Promised Land itself, speaking with Jesus about His coming exodus to Jerusalem. The promise made in the wilderness was not denied; it was exceeded. The God who knew Moses face to face kept His word—not in the way Moses imagined, but in a way more complete.',
  ],

  bottomShare: {
    label: 'Share Deuteronomy 34',
    quote:
      'There arose not a prophet since in Israel like unto Moses, whom the Lord knew face to face. Yet the promise was not denied—it was exceeded when Moses appeared on the mountain with the Prophet greater than himself.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 34 · Study Guide',
  },

  sections: [
    /* ─── Deuteronomy 34:1–4 — The Seeing Without Entering ─────────────── */
    {
      ref: 'Deuteronomy 34:1–4',
      title: 'The View from Pisgah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 1,
              spans: [
                t('And Moses went up from the plains of Moab unto the mountain of '),
                hy('Nebo', 'hebrew-nebo'),
                t(', to the top of '),
                hy('Pisgah', 'hebrew-pisgah'),
                t(', that is over against Jericho.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And '),
                hg('the Lord shewed him all the land', 'c-seeing-without-entering'),
                t(' of Gilead, unto Dan, And all Naphtali, and the land of Ephraim, and Manasseh, and all the land of Judah, unto the utmost sea,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the south, and the plain of the valley of Jericho, the city of palm trees, unto Zoar.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the Lord said unto him, '),
                hp('This is the land which I sware unto Abraham, unto Isaac, and unto Jacob, saying, I will give it unto thy seed', 'christ-promise-deferred'),
                t(': '),
                hp('I have caused thee to see it with thine eyes, but thou shalt not go over thither', 'c-moses-boundary'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nebo',
          title: 'Nebo — &ldquo;the mountain of God&apos;s heights&rdquo;',
          script: 'נְבוֹ',
          translit: '<strong>Nebo</strong> · to bring, carry; the height from which God carries His vision',
          description:
            'Mount Nebo is a high place. Moses climbs to the summit at the very end of his life—not to escape or to find peace, but to receive a gift that is also a denial: the sight of a land he will never live in.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-pisgah',
          title: 'Pisgah — &ldquo;the cleft, the view&rdquo;',
          script: 'פִּסְגָּה',
          translit: '<strong>Pisgah</strong> · a high point; a place of perspective and fissure',
          description:
            'The name suggests a mountain split open, revealing what lies beyond. Moses stands at a cleft in the world and sees the whole inheritance—all the land promised to Abraham, visible but unreachable.',
        },
        {
          kind: 'commentary',
          id: 'c-seeing-without-entering',
          html:
            'God shows Moses everything. Not a glimpse, but the whole geography of the promise—Gilead to Dan, Naphtali, Ephraim, Manasseh, Judah, the south, the plain of Jericho, Zoar. It is a panoramic vision: <em>here is what faithfulness was always reaching toward.</em> And then the door closes. Moses sees it all and enters none of it.',
        },
        {
          kind: 'commentary',
          id: 'c-moses-boundary',
          html:
            'This is the law of Moses: it shows the destination. It illuminates what wholeness looks like, what righteousness requires, what covenant demands. But the law itself cannot bring anyone across. Moses is faithful—at 120, his eye is not dim, his force is not abated. His faithfulness is perfect. And still: thou shalt not go over. The law reveals the land. Only grace can lead us in.',
        },
        {
          kind: 'christ',
          id: 'christ-promise-deferred',
          title: 'Christ Connection — The Law Shows, Grace Leads',
          html:
            'Hebrews 4:8 says: "For if Jesus had given them rest, then would he not afterward have spoken of another day." The Joshua of the Old Testament (same name as Jesus in Hebrew: Yeshua) led the people into the land—but the writer of Hebrews sees that only the true Joshua, Jesus Himself, can lead us into the rest that remains. Moses shows us the goal on the mountain; Jesus leads us there. The promise is not broken by Moses&apos; death—it is passed on, waiting for the One who can do what the law cannot.',
        },
        {
          kind: 'carry',
          html:
            'Have you ever seen clearly what God is calling you toward and found yourself unable to step into it—at least not yet? The vision is real. The calling is real. The barrier is real too. Moses saw the whole land and died in the wilderness. His seeing did not cheapen or deny what he saw; it made the not-yet-entering unbearably true. God met him there on that mountain, in the gap between the promise and the possession. He will meet you there too.',
        },
        {
          kind: 'reflection',
          id: 'deut34-seeing',
          prompt:
            'What has God shown you clearly that you have not yet entered? How does Moses&apos; faithfulness on this mountain—seeing without possessing—speak to your own waiting?',
        },
      ],
    },

    /* ─── Deuteronomy 34:5–8 — Death and Burial by God Himself ──────────── */
    {
      ref: 'Deuteronomy 34:5–8',
      title: 'The Unmarked Grave',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 5,
              spans: [
                t('So '),
                hp('Moses the servant of the Lord died there', 'c-moses-died'),
                t(' in the land of Moab, '),
                hg('according to the word of the Lord', 'c-divine-timing'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And '),
                hg('he buried him in a valley in the land of Moab', 'c-burial-location'),
                t(', '),
                hg('over against Beth-peor', 'c-bethpeor'),
                t(': but '),
                hp('no man knoweth of his sepulchre unto this day', 'c-unmarked-grave'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Moses was an hundred and twenty years old when he died: his eye was not dim, nor his natural force abated.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the children of Israel wept for Moses in the plains of Moab thirty days: so the days of weeping and mourning for Moses were finished.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-moses-died',
          html:
            'Moses is called "the servant of the Lord"—the same title given only to Joshua and Jesus in Scripture. He dies not in disgrace or defeat, but in service, at the end of his work. He has fulfilled his calling. He has led the people through forty years of wilderness. His death is not premature; it is appointed.',
        },
        {
          kind: 'commentary',
          id: 'c-divine-timing',
          html:
            'According to the word of the Lord—Moses dies by God&apos;s word, at God&apos;s time, not by illness or decay. His eye did not dim. His force was not abated. He could have continued. But his time was complete. The language suggests a sovereign hand, a purposeful ending. Death came not as defeat but as dismissal: <em>your work is finished.</em>',
        },
        {
          kind: 'commentary',
          id: 'c-burial-location',
          html:
            'No human hand digs Moses&apos; grave. God buries him. In the ancient world, a grave—especially an unmarked grave—can suggest shame or abandonment. But here it is the opposite. No human foot disturbs his rest. No one can point to the place and say, "Here lies the law." Instead, his burial is hidden, kept by God alone. It is a kind of honor: his grave is God&apos;s private work.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gamal',
          title: 'Gamal — &ldquo;he buried him&rdquo;',
          script: 'יִקְבֹּר',
          translit: '<strong>gamal</strong> · to bury, to cover, to complete',
          description:
            'The verb for "buried" in verse 6 is in the simple past, suggesting a single, final act. God covers Moses&apos; body. Jude 9 later speaks of a dispute between Michael and the devil over Moses&apos; body—as if even the powers of darkness recognize that this man belongs to God, and they want to fight over him.',
        },
        {
          kind: 'commentary',
          id: 'c-bethpeor',
          html:
            'Beth-peor, "the house of Peor," marks the place where Israel had fallen into idolatry (Numbers 25). Moses is buried in a valley opposite the site of Israel&apos;s worst transgression. The location is exact, even as the grave itself is invisible. God knows where His servant lies.',
        },
        {
          kind: 'commentary',
          id: 'c-unmarked-grave',
          html:
            'No man knows where Moses is buried. In an ancient context, this is extraordinary. Kings built monuments. Prophets had shrines. But Moses—the man who spoke with God face to face, who led a nation through the wilderness, who received the Law—Moses has no monument, no shrine, no known grave. His absence is complete. Yet the text keeps saying it, as if to assure us: God knows. Even though no human can point to the place, God knows exactly where His servant sleeps.',
        },
        {
          kind: 'christ',
          id: 'christ-resurrection',
          title: 'Christ Connection — Hidden and Raised',
          html:
            'Moses is buried by God in an unmarked grave—and then, centuries later, he appears on a mountain in the Promised Land (Matthew 17:3; Luke 9:30), speaking with Jesus about His exodus. The grave did not hold him. Not because his bones were taken up for burial elsewhere, but because God&apos;s care does not end at the tomb. The unmarked grave becomes a kind of resurrection image: hidden from human sight, but alive to God&apos;s seeing. Jesus would later say, "Where I am, there shall also my servant be" (John 12:26). Moses&apos; burial is a foreshadow of what it means to be wholly God&apos;s—seen by God, known by God, raised by God.',
        },
        {
          kind: 'carry',
          html:
            'When you die faithful to God, your death is not the end of your story. Moses saw the promised land and died before entering it—a kind of "not yet." But his faithful death is seen by God. If you are faithful in a work that won&apos;t be completed in your lifetime, if you live for a promise you won&apos;t see fulfilled, you are living in Moses&apos; shadow. Your faithfulness is not lost. God sees. God knows. And the promise does not die with you; it outlives you.',
        },
        {
          kind: 'reflection',
          id: 'deut34-burial',
          prompt:
            'What does it mean to you that God Himself—not any human authority—buried Moses? How does His seeing and knowing change the way you think about faithfulness that goes unrecognized by others?',
        },
      ],
    },

    /* ─── Deuteronomy 34:8–9 — Joshua&apos;s Commissioning ───────────────── */
    {
      ref: 'Deuteronomy 34:8–9',
      title: 'The Passing of the Mantle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 8,
              spans: [
                t('And the children of Israel wept for Moses in the plains of Moab thirty days: so the days of weeping and mourning for Moses were finished.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And '),
                hg('Joshua the son of Nun was full of the spirit of wisdom', 'c-joshua-wisdom'),
                t(', '),
                hy('for Moses had laid his hands upon him', 'c-laying-on-of-hands'),
                t(': and the children of Israel hearkened unto him, and did as the Lord commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-joshua-wisdom',
          html:
            'Joshua is not described as charismatic, or as a great military strategist, or as eloquent. He is full of the spirit of wisdom. Wisdom is the capacity to see what God is doing and to move in alignment with it. The next generation will need discernment more than power.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yehoshua',
          title: 'Yehoshua — &ldquo;Joshua&rdquo;',
          script: 'יְהוֹשׁוּעַ',
          translit: '<strong>Yehoshua</strong> · God saves, God is salvation',
          description:
            'Joshua&apos;s name is the same as Jesus (Greek: Iésous, Hebrew: Yeshua). The man whose name means "God saves" is commissioned to lead the people into the land that Moses could only see. The Pentateuch ends by handing the story over to someone whose very name points forward to the Savior.',
        },
        {
          kind: 'commentary',
          id: 'c-laying-on-of-hands',
          html:
            'Moses laid his hands upon Joshua. It is an act of blessing, of transfer, of commissioning. The weight of leading God&apos;s people passes from one man to another. And yet Moses does not choose Joshua in a vacuum—it is God who makes the choice, and God&apos;s Spirit dwells in the one chosen. Human succession and divine appointment work together.',
        },
        {
          kind: 'christ',
          id: 'christ-joshua',
          title: 'Christ Connection — Joshua to Jesus',
          html:
            'Acts 3:22 quotes Deuteronomy 18:15, applying it to Jesus: "Moses truly said unto the fathers, A prophet shall the Lord your God raise up unto you of your brethren, like unto me." Joshua led Israel into the physical land; Jesus leads believers into the eternal rest God promised. Hebrews 3:1–6 develops the contrast explicitly: Moses was faithful as a servant in God&apos;s house, but Christ is faithful as a Son over God&apos;s house. Joshua the son of Nun could not give what the Pentateuch ends waiting for—only the One whose name means "God Saves" can.',
        },
        {
          kind: 'carry',
          html:
            'Someone who came before you walked with God and carried a vision. They reached a certain limit. The hand-off comes to you—not as a burden of impossible expectations, but as the continuation of a story that was never yours to finish. Joshua did not have to do what Moses did or go where Moses could not. He had to do the next thing, faithful to the same God, in his own time. You are not called to repeat your predecessors. You are called to continue what they began.',
        },
        {
          kind: 'reflection',
          id: 'deut34-joshua',
          prompt:
            'Who has passed something on to you—a faith, a vision, an unfinished work? How does knowing that Joshua succeeded Moses not by repeating him but by doing the next thing change how you see your own inheritance?',
        },
      ],
    },

    /* ─── Deuteronomy 34:10–12 — The Unmatched Epitaph ──────────────────── */
    {
      ref: 'Deuteronomy 34:10–12',
      title: 'There Arose Not a Prophet Like Unto Moses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 10,
              spans: [
                t('And there arose not a prophet since in Israel like unto Moses, '),
                hp('whom the Lord knew face to face', 'c-face-to-face'),
                t(','),
              ],
            },
            {
              number: 11,
              spans: [
                t('In all the signs and the wonders, which the Lord sent him to do in the land of Egypt to Pharaoh, and to all his servants, and to all his land,'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And in all that mighty hand, and in all the great terror which Moses shewed in the sight of all Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-panim',
          title: 'Panim — &ldquo;face&rdquo;',
          script: 'פָּנִים',
          translit: '<strong>panim</strong> · face, presence, the full revelation of self',
          description:
            'Numbers 12:8 makes explicit what it means that God knew Moses "face to face": "With him will I speak mouth to mouth, even apparently, and not in dark speeches." No mediator, no intermediary—direct knowledge of God&apos;s self, as much as a human can bear.',
        },
        {
          kind: 'commentary',
          id: 'c-face-to-face',
          html:
            'This is the climax of all the Pentateuch&apos;s portrayal of Moses. He was faithful as a servant. He saw signs and wonders. He moved in the power of God&apos;s mighty hand. But the highest thing about him was not his power or his faithfulness—it was that he knew God face to face. He was a friend of God. The law that bears his name came not from abstract principle but from a man who had heard God&apos;s voice directly, who had stood in the presence of the Almighty.',
        },
        {
          kind: 'commentary',
          id: 'c-signs-wonders',
          html:
            'The epitaph names the ten plagues—the signs and wonders in Egypt. It names the mighty hand raised at the Red Sea. It names the terror the Egyptians felt when they saw Israel delivered. Moses was a man through whom God moved mightily. He was no mere administrator. He did not just pass along rules; he was the vehicle of God&apos;s power and presence to a generation.',
        },
        {
          kind: 'christ',
          id: 'christ-greater-prophet',
          title: 'Christ Connection — The Prophet Greater Than Moses',
          html:
            'Deuteronomy 18:15 prophesies: "The LORD thy God will raise up unto thee a Prophet from the midst of thee, of thy brethren, like unto me; unto him ye shall hearken." That verse is spoken by Moses himself, at the end of his life—an acknowledgment that his own prophetic role is not the end. Acts 3:22–23 applies it to Jesus, as does Acts 7:37. The Pentateuch closes with the affirmation that there has been no prophet like Moses—and in doing so, it leaves the door open. The very specificity of the epitaph ("there arose not a prophet <em>since</em>") becomes a kind of promise: one will come. One greater will come. One who will know God not just face to face, but as the incarnate Son—who <em>is</em> God.',
        },
        {
          kind: 'carry',
          html:
            'Moses was extraordinary. He knew God intimately. He saw signs and wonders. He led a whole people through the wilderness. And yet the story does not end with him. The Pentateuch closes with a wait, a door left open, a promise that someone greater will come. If Moses—the greatest prophet in Israel—was not the final word, then none of our greatest works are either. The faithfulness you are called to is real and valued by God. But you are not meant to be the final answer to the world&apos;s need. That One has already come, and His name is written into the structure of Israel&apos;s hope.',
        },
        {
          kind: 'reflection',
          id: 'deut34-epitaph',
          prompt:
            'The Pentateuch ends by saying there was no prophet like Moses—and in doing so, leaves room for one greater. How does this closing change the way you understand the difference between faithfulness and finality?',
        },
      ],
    },

    /* ─── The Transfiguration: Moses Appears in the Promised Land ───────── */
    {
      ref: 'Matthew 17:1–8; Luke 9:28–36',
      title: 'The Promise Exceeded',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-transfiguration-appears',
          html:
            'Centuries after Deuteronomy 34, Moses appears on a mountain—not in a vision, but in a real bodily presence, speaking with Jesus about His coming exodus to Jerusalem. He is standing in the Promised Land. He is no longer in the grave. The unmarked grave did not hold him. Not because his bones were recovered, but because he was alive to God, and God raised him to stand with the One greater than himself.',
        },
        {
          kind: 'christ',
          id: 'christ-transfiguration',
          title: 'Christ Connection — Moses Sees What He Could Not Enter',
          html:
            'On Mount Pisgah, Moses saw the Promised Land and could not enter. On the Mount of Transfiguration, Moses stands in the Promised Land itself, glorified, speaking with the One who can lead us in. The promise was not denied—it was exceeded. Not through the Joshua of the Old Testament, but through the One whose name Joshua bears. Matthew 17:3 says Moses appeared and spoke with Jesus. Luke 9:31 says they spoke of His "exodus… which he should accomplish at Jerusalem." Even in resurrection, Moses is speaking about deliverance, about the way out, about the One who leads us home.',
        },
        {
          kind: 'carry',
          html:
            'If you have been faithful to God in something you will not see completed, take comfort from Moses on the mountain. His faithfulness did not end at his death. His seeing did not end with the view from Pisgah. The God who buried him knew him face to face, and brought him not just to the land he could only view, but to stand beside the One who had accomplished a greater redemption. Your faithfulness now is building toward a fulfillment that may exceed anything you can imagine. The promise does not die with you.',
        },
        {
          kind: 'reflection',
          id: 'deut34-transfiguration',
          prompt:
            'Moses appears in the Promised Land, standing with Jesus, speaking about exodus and deliverance. How does the transfiguration change your understanding of what happened on Mount Pisgah? What does it mean that the promise was not denied, but exceeded?',
        },
      ],
    },
  ],

  hasHebrew: true,
};
