import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Esdras 1 — God&apos;s Indictment and the Turning
 *
 * 2 Esdras (also called 4 Ezra) is a Jewish-Christian apocalyptic work likely
 * composed in the late 1st century CE. Chapters 1–2 and 15–16 are Christian
 * additions; the core work (chapters 3–14) is a Jewish apocalypse wrestling
 * with theodicy in the wake of the temple&apos;s destruction in 70 CE.
 *
 * Chapter 1 is God&apos;s direct address to the people through Ezra. God recounts
 * the Exodus and the wilderness, rehearses the rejection of prophets across
 * centuries, and then speaks the turning: because Israel has refused Him,
 * He will give His vineyard to other nations. It is a lament and a judgment,
 * yet not without the possibility of a remnant.
 */
export const SECOND_ESDRAS_1: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 1,

  estimatedMinutes: { beginner: 10, intermediate: 18, deep: 23 },
  intros: [
    'God addresses His people through Ezra the scribe, and the words are stern. He had brought Israel out of Egypt with power, sustained them in the wilderness, given them prophets generation after generation. Yet they refused to listen. They despised the law He gave them. Now God announces a judgment that cuts deep: He will take His vineyard away from them and plant it with a people that will know Him.',
    'This is not the end of the story—the prophetic pattern always holds open a door for the remnant who repent. But it is a watershed moment: the moment when God turns from Israel in its unfaithfulness and opens His covenant to the nations. The chapter sets the stage for what 2 Esdras will wrestle with for the rest of its length: how does God govern a world that rejects Him? And where is justice? And where is hope?',
  ],

  sections: [
    /* ─── 2 Esdras 1:1–3 — The Call to Gather ───────────────────────────── */
    {
      ref: '2 Esdras 1:1–3',
      title: 'The Call to Gather',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('The second book of the prophet Ezra. And the Lord said unto me, '),
                hp('Go thy way, and gather together the people of Israel', 'ezra-gather'),
                t(', that none of them may be wanting.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra-gather',
          html:
            'God summons Ezra to gather Israel. The phrase "that none of them may be wanting" carries the weight of inclusion—not one person left behind, every last member of the covenant community brought into the assembly. This is God&apos;s opening move: a call to gather, to remember, to come.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 2,
              spans: [
                t('And I gathered them together; and they came to me. But the Lord said unto me, '),
                hg('Some of them have despised my law, and cast away my yoke', 'despise-law'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'despise-law',
          html:
            'Ezra obeys; the people gather. Yet even as they assemble, God makes clear: some have already hardened their hearts. They have not merely broken the law; they have <em>despised</em> it, cast it aside as though God&apos;s word were worthless. The yoke of covenant—the structure that holds Israel together—has been rejected.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('Therefore saith the Lord, I will no more hold my tongue. '),
                hp('Hearken unto me, O my people', 'listen-people'),
                t('; and I will speak unto thee, O Jerusalem. For what injustice have your fathers done unto me?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'listen-people',
          html:
            'The silence breaks. God has held His tongue—a metaphor for patience worn thin. Now He speaks, and the speech is both indictment and lamentation. He calls them to hear, yet the question He asks is not demanding but grieving: "What injustice have your fathers done unto me?" Not "What rebellion?" but "What injury?" God speaks as one who has been wronged, who has been refused.',
        },

        {
          kind: 'carry',
          html:
            'When God calls you to gather—to remember, to return, to listen—the call assumes you have wandered. The very act of being called back is the signal that something has been broken. What in your life has God been patient about? What refusal have you been nursing? The silence you&apos;ve been living in—that silence is about to break.',
        },

        {
          kind: 'reflection',
          id: 'silence-break',
          prompt:
            'When has God&apos;s patience worn thin with you? What did it feel like when He stopped holding His tongue and spoke the hard truth you needed to hear?',
        },
      ],
    },

    /* ─── 2 Esdras 1:4–6 — The Exodus Recalled ───────────────────────────── */
    {
      ref: '2 Esdras 1:4–6',
      title: 'The Exodus Recalled',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 4,
              spans: [
                t('For I brought your fathers out of the land of Egypt with a mighty hand. And I set before you the way of life.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('But ye have forsaken me; and the Lord saith, I have set before you '),
                hg('fire and water, life and death', 'fire-water'),
                t(': choose that which is good.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'fire-water',
          html:
            'God sets before them a stark choice: fire and water, life and death. The language echoes Deuteronomy 30:15. What He offers is not hidden or complex. The way is plain. Life stands on one side; death on the other. And Israel is summoned to choose. The tragedy is that Israel chooses—but chooses wrong.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 6,
              spans: [
                t('But ye have not obeyed me. And the Lord saith, As the mother that loveth not her children, so have ye dealt with me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'mother-unloving',
          html:
            'The metaphor cuts deep. God compares Israel&apos;s treatment of Him to an unloving mother toward her own children—a betrayal that tears at the very bond of kinship. A mother is supposed to love; Israel is supposed to keep covenant. Both have failed. The pain God expresses here is not abstract judgment but the anguish of a covenant Partner watching the beloved turn away.',
        },

        {
          kind: 'carry',
          html:
            'When God reminded Israel of the Exodus, He was calling them back to a moment when they <em>knew</em> Him—when they saw His power, tasted His deliverance. That same summons comes to you: remember when you knew God was real. Remember the moment He brought you out. Hold that memory when you are tempted to walk away.',
        },

        {
          kind: 'reflection',
          id: 'exodus-memory',
          prompt:
            'What is your own "exodus moment"—a time when you saw God&apos;s power and knew He was real? How has that memory held you when temptation pulled you toward idols?',
        },
      ],
    },

    /* ─── 2 Esdras 1:7–14 — The Wilderness Rebellions ──────────────────── */
    {
      ref: '2 Esdras 1:7–14',
      title: 'The Wilderness Rebellions',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 7,
              spans: [
                t('For forty years I bare with you in the wilderness. And the manna which was food delightful from heaven gave I unto you.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And ye did not obey me. But ye despised my law. And '),
                hg('ye said in your hearts, We will not give obedience', 'heart-rebellion'),
                t(': wherefore I will do unto you as it hath seemed good unto me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'heart-rebellion',
          html:
            'The wilderness was a school of faith. God sustained Israel for forty years, provided manna that fell from heaven each morning. Yet the people, nourished by miracle, declared in their hearts: "We will not give obedience." Not ignorance, but defiance. Not hunger, but pride. They had been given everything; they repaid it with rebellion.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 9,
              spans: [
                t('And now I say unto you, '),
                hp('ye are gone away, and have wrought ungodliness before me', 'ungodliness-wrought'),
                t(': and ye have not been ashamed to do so.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ungodliness-wrought',
          html:
            'The pattern extends past the wilderness. Generations come and go, and Israel continues in ungodliness—not secret sin, but open transgression done without shame. What had begun as wilderness murmuring hardened into defiant worship of foreign gods.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 10,
              spans: [
                t('And behold, that that shall come to pass, that '),
                hg('I shall take away from you the brightness of my countenance', 'brightness-withdrawn'),
                t(': for ye have sinned before me, therefore will I turn my face from you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'brightness-withdrawn',
          html:
            'The great word comes: the withdrawal of God&apos;s presence. This is not merely the withdrawal of blessing or favor. It is the eclipse of the very brightness of His countenance. The face that had shone on Israel at Sinai, in the wilderness, in the temple—that face is now turned away.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-panav',
          title: 'Panav — "His Face"',
          script: 'פָּנָיו',
          translit: '<strong>Panav</strong> · his face; his presence; his favor',
          description:
            'In covenant language, God&apos;s face shining upon you is the ultimate blessing (Numbers 6:25–26). His face turned away is the ultimate loss. It is not annihilation, but abandonment—the absence of the One who had promised never to leave or forsake.',
        },

        {
          kind: 'christ',
          id: 'christ-face',
          title: 'Christ Connection — The Face Restored',
          html:
            'When Christ comes, He comes as the <em>image</em> of God—not the image of judgment, but of mercy. Paul writes that Christ is "the brightness of his glory" (Hebrews 1:3). And in the resurrection, the face of God is not only restored but made visible in Jesus. "In the face of Jesus Christ" (2 Corinthians 4:6) we see the glory of God. The very brightness that is withdrawn from Israel in judgment is restored to all the world in the person of Christ.',
        },

        {
          kind: 'carry',
          html:
            'The wilderness was hard—hunger, thirst, enemies. Yet the people knew God was there. They saw the pillar of cloud. They tasted the manna. They watched the water pour from the rock. And they rebelled against the very God who was sustaining them. That rebellion cost them the one thing they could not live without: His presence. When you are tempted to despise God&apos;s provision or His law, remember what the wilderness teaches: without His face, even bread tastes like ash.',
        },

        {
          kind: 'reflection',
          id: 'provision-rejected',
          prompt:
            'Where have you despised God&apos;s provision or His law even in the midst of blessing? What does it feel like when you sense His face turned away?',
        },
      ],
    },

    /* ─── 2 Esdras 1:15–20 — The Prophets Sent and Rejected ──────────────── */
    {
      ref: '2 Esdras 1:15–20',
      title: 'The Prophets Sent and Slain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 15,
              spans: [
                t('For thus saith the Lord, I am righteous and I am merciful, saith the Lord, and I will not rejoice in the destruction of sinners; but I sent my servants the prophets: and ye have taken and slain them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'prophets-slain',
          html:
            'After the wilderness, after the years of rebellion, God&apos;s strategy does not change from judgment to mercy without warning. He sends His servants—the prophets. Isaiah, Jeremiah, Ezekiel, the minor prophets—sent to call Israel back. Yet Israel does not merely reject them. Israel takes them and slays them. The blood of the prophets accumulates across centuries.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 16,
              spans: [
                t('And now saith the Lord, I will not hold my tongue. '),
                hg('Ye have put to death my righteous ones', 'righteous-slain'),
                t('. And I will require their blood of you, saith the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'righteous-slain',
          html:
            'The escalation of language is crucial. These are not merely "prophets" now; they are "my righteous ones"—bearers of God&apos;s own righteousness. And their blood cries out. God announces that He will require an accounting.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 17,
              spans: [
                t('And he saith, Thus saith the Lord: '),
                hg('Behold, I will plague you, as a father chasteneth his children', 'plague-chastening'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'plague-chastening',
          html:
            'The rhetoric shifts again—not pure vengeance now, but <em>chastisement</em>. A father strikes his child not in hatred but in hope of correction. Yet chastisement is still discipline, still painful. Israel will know the weight of God&apos;s hand.',
        },

        {
          kind: 'greek',
          id: 'greek-paideuo',
          title: 'Paideuo — "To Chasten"',
          script: 'παιδεύω',
          translit: '<strong>Paideuo</strong> · to teach by discipline; to chasten; to correct',
          description:
            'The Greek word carries the sense of education through correction—not random punishment, but purposeful shaping toward righteousness. A father chastens not from hatred but from love, seeking to turn his child from a path that leads to death.',
        },

        {
          kind: 'christ',
          id: 'christ-rejected-prophet',
          title: 'Christ Connection — The Prophet They Rejected',
          html:
            'Jesus comes as the culmination of the prophetic line—not merely a prophet, but the Son. And He, too, is sent to a people who reject Him. Matthew 23:37 captures His lament: "O Jerusalem, Jerusalem, thou that killest the prophets, and stonest them which are sent unto thee." Jesus adds Himself to the roll of the slain. But where the prophets&apos; blood cried for justice, Christ&apos;s blood cries for forgiveness: "Father, forgive them; for they know not what they do" (Luke 23:34). The pattern of rejection is fulfilled in Him—and broken by Him.',
        },

        {
          kind: 'carry',
          html:
            'God sends you His Word again and again—through Scripture, through faithful voices, through the still small voice in prayer. Yet you refuse. You silence the prophets in your own heart, reject the Word that calls you to turn. And judgment comes, not because God is cruel, but because you have refused the discipline of a Father whose only aim is your restoration. But even in judgment, the door stands open: turn back, and the Father will take you in.',
        },

        {
          kind: 'reflection',
          id: 'prophetic-voice',
          prompt:
            'Which prophetic voices have you silenced in your own life—the truths that call you to change, the words that challenge your comfort? What would it cost to listen?',
        },
      ],
    },

    /* ─── 2 Esdras 1:24–29 — The Vineyard Given to Others ──────────────── */
    {
      ref: '2 Esdras 1:24–29',
      title: '&ldquo;I Will Give Your Vineyard to a People That Knoweth Me Not&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 24,
              spans: [
                t('He saith also thus: Behold, I took you to be unto me a vineyard, and '),
                hg('I planted you, and thou wast very good', 'vine-planted'),
                t(': but now I will speak unto thee, Who shall I liken thee to?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'vine-planted',
          html:
            'God recalls the vineyard metaphor from Isaiah 5. He planted Israel as a choice vine in a choice place. The work was all His. The cultivation was His care. And Israel was "very good"—the language recalls Genesis, where God looked upon creation and saw that it was good. Yet that goodness is now past.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 25,
              spans: [
                t('And I will take away from you the brightness of my countenance. '),
                hp('Ye have not been ashamed, but ye have forsaken me', 'unashamed-forsake'),
                t(': therefore I will shut up the heaven, that there shall be no dew, neither shall there be showers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'unashamed-forsake',
          html:
            'The repetition of "I will take away the brightness of my countenance" hammers home the central judgment. And now the consequence is made physical: the heavens will be shut up. No dew, no rain. The vine that was watered by divine care will wither. This is not a distant judgment but the withdrawal of the very elements that sustain life.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 26,
              spans: [
                t('The sun shall be weary, and the moon shall not give her light; and '),
                hg('the stars shall not shine in their brightness', 'stars-dim'),
                t(': but the heavens shall be shut up, and the sun shall suddenly be ashamed in the midst thereof, and the moon shall not give her light.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'stars-dim',
          html:
            'The cosmic language escalates. It is not only the land that suffers but the heavens themselves. The sun is "ashamed," the moon withholds her light. Creation joins in judgment; the universe itself recoils from a people that has rejected its Maker. This echoes the apocalyptic language of later biblical books—when judgment comes, even the celestial order fractures.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 27,
              spans: [
                t('And I will command the clouds that they rain not upon you, and the earth shall speak unto you, that the fruit thereof shall be withheld. '),
              ],
            },
            {
              number: 28,
              spans: [
                t('For '),
                hg('ye have refused to obey me the Lord', 'refused-obey'),
                t('; and I will command the waters, that they shall not flow unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'refused-obey',
          html:
            'The refusal to obey has cosmic consequences. Water—the source of life itself—will be withheld. The earth that once brought forth fruit will be silent. This is not mere hardship; it is the undoing of creation&apos;s sustenance. The covenant that promised blessing if Israel obeyed now promises the reversal: curse.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 29,
              spans: [
                t('Hearken unto me, O my people, saith the Lord, and I will speak unto thee. I am righteous and merciful. '),
                hp('I will not take pleasure in the destruction of sinners', 'no-pleasure-destruction'),
                t('; but I sent unto thee my servants the prophets, and thou hast slain them, and stripped off their skins.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'no-pleasure-destruction',
          html:
            'Even in the midst of judgment, God insists on His own character: righteous <em>and</em> merciful. He takes no pleasure in destruction. Yet the facts are what they are. The prophets were sent; the people slew them, stripped off their skins. The violence is almost unspeakable—not merely killing, but desecration of the bodies. This is the height of contempt.',
        },

        {
          kind: 'artwork',
          matchTitle: /vineyard/i,
          caption: '2 Esdras 1:24–29 · The Vineyard',
        },

        {
          kind: 'carry',
          html:
            'God compares Himself to a gardener. He plants, tends, prunes, waters. He does the work of cultivation. Yet the vineyard He plants becomes wild fruit, turns bitter, refuses to bear what He intended. The judgment He announces is not anger at a distance; it is the grief of a gardener watching his work turn to ruin, and the hardness of withdrawing care from what has become poison.',
        },

        {
          kind: 'reflection',
          id: 'vineyard-self',
          prompt:
            'Where has God done the hard work of planting and cultivating in your life, and you have refused to bear good fruit? What would it look like to let Him tend you again?',
        },
      ],
    },

    /* ─── 2 Esdras 1:30–37 — The New People ────────────────────────────── */
    {
      ref: '2 Esdras 1:30–37',
      title: 'The Mother and Her Children Come',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 30,
              spans: [
                t('Behold, I send unto you my servants the prophets; which ye will not hear, saith the Lord.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Yet I sent you the water of the law, and ye would not drink it. '),
              ],
            },
            {
              number: 32,
              spans: [
                t('I sent you also my servants the prophets, and ye have despised them. And ye have slain those that exhorted you to live in the law.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'prophets-despised',
          html:
            'The indictment is complete. Water of the law was offered—refreshment, wisdom, life itself. The prophets came to exhort them to live. All rejected, despised, slain. Yet God&apos;s narrative does not end in destruction alone.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 33,
              spans: [
                t('I have not taken displeasure at you, but yet have exhorted you as a father his sons, and as a mother her daughters, and as a nurse her children.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'mother-nurse',
          html:
            'After the judgment, after the harsh words, God returns to the language of tenderness. He has exhorted them not as a tyrant but as a father to sons, a mother to daughters, a nurse to children. The intimacy is striking. Yet even this tenderness has been rejected.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 34,
              spans: [
                t('I willed you to gather yourselves together, as a hen gathereth her chickens under her wings: but ye have rejected it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hen-gathers',
          html:
            'The image of the hen gathering her chickens is one of Jesus own images for His desire over Jerusalem (Matthew 23:37). God has willed to gather them, to draw them into safety under His wings. Yet they have rejected even this protection. The hen cannot force her chickens to shelter; she can only invite. And Israel has said no.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 35,
              spans: [
                t('Therefore, thus saith the Lord, I will cast you off from my face: and '),
                hp('I will send forth a commandment unto the inhabitants of the earth', 'send-to-earth'),
                t(', that they which have not heard of my law shall keep it, and the nations which have not known of me shall do the things that I commanded.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'send-to-earth',
          html:
            'The great turning. Because Israel has rejected God&apos;s law, God will send His commandment to <em>the inhabitants of the earth</em>—the Gentiles, the nations that have never heard of the law of Moses. They, who were outside the covenant, will become its keepers. They, who did not know God, will do the things He commanded. This is the reversal of all expectation.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 36,
              spans: [
                t('And the nations shall dream dreams, and the kings shall prophesy concerning you, that they shall come and make you subject to them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nations-dream',
          html:
            'The nations will rise; kings will receive visions. And Israel, once the chosen, will be subject to them. This is the historical outcome: Jerusalem falls to Babylon; exile comes. But it is also the eschatological statement—the reversal of Israel&apos;s presumed status.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 37,
              spans: [
                t('And the nations shall say, Where is thy God? But I will shew great signs and wonders, and will confirm my covenant with the nations, and will make them my people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'signs-covenant',
          html:
            'The mockery comes: "Where is thy God?" Yet God&apos;s answer is not to defend Israel but to turn His face fully toward the nations. He will show signs and wonders, confirm His covenant <em>with them</em>, and call them His people. The language is explicit—what was promised to Israel is now extended to the Gentiles.',
        },

        {
          kind: 'christ',
          id: 'christ-vineyard-given',
          title: 'Christ Connection — The Vineyard Planted Anew',
          html:
            'Jesus tells a parable: a landowner plants a vineyard, lets it out to husbandmen, and when they beat and kill the servants sent to collect the fruit, he says, "Therefore I say unto you, The kingdom of God shall be taken from you, and given to a nation bringing forth the fruits thereof" (Matthew 21:43). The taking of the vineyard from Israel and the giving of it to the nations is spoken by Jesus Himself, the son of the landowner. And the new people of whom 2 Esdras speaks—"a people that shall be called by a new name"—is the Church, drawn from every nation, ethnicity, and tongue. God&apos;s covenant is not abandoned; it is opened to all who believe.',
        },

        {
          kind: 'carry',
          html:
            'The hardest truth here is that God&apos;s purposes cannot be thwarted by human refusal. Israel said no; the invitation goes to the Gentiles. You were never part of the original vine, yet you have been grafted in. You were far off, yet brought near. You did not know the law, yet it has become your guide. This is not because you deserved it or earned it. It is because God&apos;s covenant love is deeper than human rejection. It finds new soil in which to grow. The question for you is: what will you do with an invitation that was meant for someone else, and has mysteriously come to you?',
        },

        {
          kind: 'reflection',
          id: 'grafted-in',
          prompt:
            'You were not born into the covenant of Israel, yet you have been grafted into the tree of God&apos;s people. What does it mean to receive something you never earned? How does that change what you owe?',
        },
      ],
    },

    /* ─── 2 Esdras 1:37–40 — The Hope of the Remnant ─────────────────── */
    {
      ref: '2 Esdras 1:37–40',
      title: 'The Door Remains Open',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 38,
              spans: [
                t('And I said unto them, Hear me, O my people; and I will make a covenant with you, and ye shall be unto me a peculiar people, and I will be unto you a God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'covenant-peculiar',
          html:
            'Even as judgment comes, the call to covenant is renewed. The way back is not closed. Those who will hear, those who will turn—they can still enter the covenant. "Ye shall be unto me a peculiar people"—set apart, treasured, chosen. God&apos;s arm is not shortened; His grace is not exhausted.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 39,
              spans: [
                t('And the mother of the nations, rejoice ye, and be glad: for your sons are gathered into you from the four quarters.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'mother-nations',
          html:
            'The image shifts. No longer does God call Jerusalem "mother" in shame—the mother who rejected her children. Now He calls the nations the "mother of the nations." The Church becomes the gathering place; from every corner of the earth, sons and daughters gather. The image is of a mother receiving her children home.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 40,
              spans: [
                t('Remember, O my people, that I will not leave you desolate. '),
                hp('I am with you, and will be with you unto the end of the world', 'with-you-end'),
                t('. And remember ye my commandments, and my law; for they shall lead you into paradise, and give you gladness and immortality.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'with-you-end',
          html:
            'The closing word is not judgment but promise. "I will not leave you desolate." After all the indictment, after the turning away, after the vineyard is given to others—this. Presence that endures to the end of the world. This is the constant refrain of Scripture: I am with you. Even now.',
        },

        {
          kind: 'artwork',
          matchTitle: /paradise/i,
          caption: '2 Esdras 1:40 · Paradise and Gladness',
        },

        {
          kind: 'christ',
          id: 'christ-presence',
          title: 'Christ Connection — Immanuel, God With Us',
          html:
            'In Matthew, Jesus is called Immanuel—"God with us" (Matthew 1:23). At the close of Matthew&apos;s Gospel, the risen Christ says, "Lo, I am with you alway, even unto the end of the world" (Matthew 28:20). The promise that closes 2 Esdras 1 is the promise that defines the entire Gospel—God&apos;s presence is not withdrawn forever, but renewed and eternal in Christ. The judgment is real, but so is the invitation. The way is hard, but it is not closed. The presence is permanent.',
        },

        {
          kind: 'carry',
          html:
            'This chapter leaves you at a threshold. On one side, judgment—the consequence of refusal, the withdrawal of God&apos;s face, the loss of privilege. On the other, an open door: covenant renewed, nations invited, paradise promised. You are called to choose. The law is set before you, as it was set before Israel. Life and death. Good and evil. Choose that which is good. And choose now, while the door stands open, while the voice of God is calling you to gather in, to listen, to obey, to know Him.',
        },

        {
          kind: 'reflection',
          id: 'choose-now',
          prompt:
            'What choice is God asking you to make right now? What refusal have you been nursing, and what would it cost you to finally obey? The door is still open. What does it look like to walk through?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Esdras 1',
    quote:
      'Hearken unto me, O my people, saith the Lord. Behold, I send unto you my servants the prophets; which ye will not hear, nor regard their words. Therefore, thus saith the Lord, I will cast you off from my face: and I will send forth a commandment unto the inhabitants of the earth, that they which have not heard of my law shall keep it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 1 · Study Guide',
  },

  hasHebrew: true,
};
