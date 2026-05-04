import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 32 — The Song of Moses [res:sefaria-deuteronomy-32].
 * A poetic masterpiece: God&apos;s faithfulness to Israel, Israel&apos;s ingratitude,
 * judgment and mercy intertwined. Quoted by Paul on the Gentiles&apos; inclusion;
 * a preview of Christ as the Rock.
 */
export const DEUTERONOMY_32: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 32,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 19 },
  topicTags: ['covenant', 'faithfulness', 'leadership', 'love'],
  opener: {
    topical: true,
    caption: 'Deuteronomy 32',
  },
  intros: [
    'Deuteronomy 32 is Moses&apos; final song — his last words to Israel before he dies on Mount Nebo, barred from entering the land. It is a song that traces the whole story of Israel and God in miniature: creation, providence, ingratitude, judgment, and mercy. The poetry is dense and layered. Every image carries weight.',
    'The Song moves in a kind of spiral. It opens with God as the Rock, faithful and just. Then it traces Israel&apos;s journey — from desert wandering where God carried them like an eagle, to settled comfort that bred forgetting. Judgment falls. But even in judgment, God&apos;s hand is still open, his eye still fixed on his people. The song ends not in wrath but in reconciliation, and the command to remember.',
    'For readers on this side of the cross, this song is full of shadows of Christ. The Rock that brings living water (1 Corinthians 10:4), the image of God as an eagle hovering over the nest (Exodus 19:4 too), the jealousy of God that provokes Gentiles to seek Him (Romans 10:19, 11:11). Few chapters compress so much theology, and so much of the New Testament&apos;s reasoning, into so few verses.',
  ],

  bottomShare: {
    label: 'Share Deuteronomy 32',
    quote:
      'The Lord is the Rock whose works are perfect and whose ways are just. He found Israel in a barren wilderness and led them as tenderly as an eagle bears its young on its wings. But when they grew comfortable and forgot Him, He hid His face. Yet He promised: I live forever, and I will show mercy to the land and people I love.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 32 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-deuteronomy-32',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 32',
      url: 'https://www.sefaria.org/Deuteronomy.32',
      description: 'Open-access source text and rabbinic commentary on the Song of Moses, the Lord&apos;s justice, and Israel&apos;s covenant unfaithfulness.',
    },
    {
      id: 'song-moses-covenant-lawsuit-witness-bible-odyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Song as Covenant Lawsuit and Witness',
      url: 'https://www.bibleodyssey.org/topical-article/song/',
      description: 'Theological analysis of how the Song functions as a covenant [res:song-moses-covenant-lawsuit-witness-bible-odyssey] lawsuit against Israel, calling God as witness to inevitable judgment and restoration.',
    },
    {
      id: 'ancient-near-east-treaty-songs-witness-function',
      kind: 'archaeology',
      source: 'Oriental Institute',
      label: 'Songs and Witness Functions in Ancient Treaties',
      url: 'https://oi.uchicago.edu/',
      description: 'Comparative study of how ancient Near Eastern treaties included songs and witness invocations [res:ancient-near-east-treaty-songs-witness-function] to bind parties to covenant terms.',
    },
  ],

  sections: [
    /* ─── Deuteronomy 32:1–3 — Give Ear, O Heavens ───────────────────────── */
    {
      ref: 'Deuteronomy 32:1–3',
      title: '"Give ear, O heavens"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 1,
              spans: [
                t('Give ear, O ye heavens, and I will speak; and hear, O earth, the words of my mouth.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('My doctrine shall drop as the rain, my speech shall distil as the dew, as the small rain upon the tender herb, and as the showers upon the grass:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Because I will publish the name of the '),
                hy('Lord', 'hebrew-yhwh'),
                t(': ascribe ye '),
                hg('greatness unto our God', 'c-greatness'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-greatness',
          html:
            'Moses calls on the heavens and the earth themselves as witnesses to this song. It is not private counsel—it is cosmic testimony. His words are to fall like rain and dew on tender ground. And the point of it all is to publish God&apos;s name, to declare His greatness. The song is not about Moses or Israel; it is a proclamation of who God is.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yhwh',
          title: 'Yahweh — the Name',
          script: 'יְהוָה',
          translit: '<strong>YHWH</strong> · the unpronounceable divine Name, "I Am"',
          description:
            'Moses does not shrink from using God&apos;s covenant name, the Name revealed to Abraham and at the burning bush. The song is in service to the knowledge of God Himself.',
        },
        {
          kind: 'carry',
          html:
            'The Song of Moses begins not with history or instruction, but with a plea: pay attention. Whatever you&apos;re carrying into today, whatever noise fills your mind, there is a deeper word trying to reach you—steadier than the chatter, as essential as rain on parched ground. The song is not complicated. It is simply true.',
        },
        {
          kind: 'reflection',
          id: 'intro-hearken',
          prompt:
            'When do you actually listen—to Scripture, to wisdom, to the still small voice inside you? What would it mean to let His word fall on you like dew?',
        },
      ],
    },

    /* ─── Deuteronomy 32:4 — The Rock ───────────────────────────────────── */
    {
      ref: 'Deuteronomy 32:4',
      title: '"The Rock, his work is perfect"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 4,
              spans: [
                t('He is '),
                hy('the Rock', 'c-tsur'),
                t(', his work is perfect: for all his ways are judgment: a God of truth and without iniquity, '),
                hg('just and right is he', 'c-just'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-tsur',
          title: 'Tsur — "the Rock"',
          script: 'צוּר',
          translit: '<strong>tsur</strong> · a rock, a fortress, an unshakable foundation',
          description:
            'The word appears again and again in the Psalms, and echoes through Paul&apos;s letters: Christ is the Rock from which living water flows (1 Corinthians 10:4), the foundation of the church (1 Peter 2:5–8). God, in his stability and immovability, is compared not to marble or gold but to stone—ancient, solid, enduring through every season.',
        },
        {
          kind: 'commentary',
          id: 'c-just',
          html:
            'This is the foundation of everything that follows in the song. God is not capricious. His work is perfect. His ways are judgment—meaning they are righteous, measured, fair. This is stated as axiom before the story of Israel&apos;s failure even begins. The Rock does not shift. His character is not negotiable.',
        },
        {
          kind: 'christ',
          id: 'christ-rock',
          title: 'Christ Connection — The Rock That Rolls Away',
          html:
            'Paul writes: &ldquo;Christ is &hellip; the chief corner stone&rdquo; and &ldquo;That Rock was Christ&rdquo; (1 Corinthians 10:4). Matthew records the Pharisees asking about the resurrection: &ldquo;Jesus said unto them, Have ye never read in the scriptures, The stone which the builders rejected, the same is become the head of the corner?&rdquo; (Matt. 21:42, quoting Psalm 118:22, itself echoing this image). The Rock that was rejected is the Rock on which the church is built. The Rock that rolled away from the tomb is the foundation of all trust.',
        },
        {
          kind: 'carry',
          html:
            'In a world where everything shifts—opinions change, relationships falter, even your own convictions surprise you some mornings—God is described in his very first attribute here as the Rock. Not metaphorically. His perfection is not an aspiration; it is what He is. Your life built on that does not depend on feeling strong today or having it all figured out. It depends on Him.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'the-rock',
          prompt:
            'What part of your life feels most unstable right now? What would it mean to stop trying to steady it yourself and trust the Rock instead?',
        },
      ],
    },

    /* ─── Deuteronomy 32:8–14 — The Eagle and the Wilderness ────────────── */
    {
      ref: 'Deuteronomy 32:8–14',
      title: 'The Eagle and the Wilderness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 8,
              spans: [
                t('When the Most High divided to the nations their inheritance, when he separated the sons of Adam, he set the bounds of the people according to the number of the children of Israel.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('For '),
                hg('the Lord&apos;s portion is his people', 'c-portion'),
                t('; Jacob is the lot of his inheritance.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-portion',
          html:
            'While other nations were assigned to other gods (implied in the polytheistic worldview), Israel is the Lord&apos;s own portion. This is the covenant relationship in one sentence: of all peoples on earth, Israel belongs to God, and God claims them.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 10,
              spans: [
                t('He found him in a desert land, in the waste howling wilderness; he led him about, he instructed him, he kept him as the '),
                hy('apple of his eye', 'c-apple'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-apple',
          title: 'Ishon — "apple of the eye"',
          script: 'אִישׁוֹן',
          translit: '<strong>ishon</strong> · the pupil, the innermost tender part of the eye',
          description:
            'The phrase means the most protected, most precious part of a person. Zechariah 2:8 echoes it: "He that toucheth you toucheth the apple of his eye." God treasures His people with the most delicate care.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 11,
              spans: [
                t('As an eagle stirreth up her nest, fluttereth over her young, spreadeth abroad her wings, taketh them, beareth them on her wings: So the '),
                hg('Lord alone did lead him', 'c-eagle'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eagle',
          html:
            'This image appears also in Exodus 19:4, spoken at Sinai: "Ye have seen what I did unto the Egyptians, and how I bare you on eagles&apos; wings." The eagle does not force its young to fly; it bears them up, teaches them, holds them safe as they learn. This is God&apos;s method with Israel in the wilderness—not punishment for weakness, but tenderness that teaches strength.',
        },
        {
          kind: 'carry',
          html:
            'The wilderness in Scripture is almost never the endpoint. It is the schoolroom where God teaches His people to trust Him. If you are in a dry season, a time of waiting, a place where the only real provision you can see is God Himself, Moses wants you to know: that is exactly where the Eagle teaches you to fly. Your weakness there is not a sign He has abandoned you. It is the very moment when He is bearing you on His wings.',
        },
        { kind: 'divider' },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 12,
              spans: [
                t('So the Lord alone led him, and there was no strange god with him.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('He made him ride on the high places of the earth, that he might eat the increase of the fields; and he made him to suck honey out of the rock, and oil out of the flinty rock;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Butter of kine, and milk of sheep, with fat of lambs, and rams of the breed of Bashan, and goats, with the fat of kidneys of wheat; and thou didst drink the pure blood of the grape.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-provision',
          html:
            'The inventory of provision is almost overwhelming—honey from the rock, oil from stone, the richest meats, wine in abundance. God is not stingy. The wilderness was not meant to be deprivation but to teach dependence on a God whose provision is lavish beyond what the human eye can produce.',
        },
        {
          kind: 'reflection',
          id: 'eagle-reflection',
          prompt:
            'Can you name a time when God bore you through something you couldn&apos;t handle alone? What did you learn about His tenderness?',
        },
      ],
    },

    /* ─── Deuteronomy 32:15–18 — Jeshurun Waxed Fat ──────────────────────── */
    {
      ref: 'Deuteronomy 32:15–18',
      title: '"Jeshurun waxed fat, and kicked"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 15,
              spans: [
                t('But '),
                hy('Jeshurun', 'hebrew-jeshurun'),
                t(' waxed fat, and kicked: thou art waxen fat, thou art grown thick, thou art covered with fatness; then he forsook God which made him, and lightly esteemed the '),
                hg('Rock of his salvation', 'c-forsake'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-jeshurun',
          title: 'Yeshurun — "the upright one"',
          script: 'יְשֻׁרוּן',
          translit: '<strong>Yeshurun</strong> · an affectionate name for Israel, "the upright"',
          description:
            'The term appears only in Moses&apos; blessing (Deuteronomy 33) and in this song. Using it here—calling them "the upright one" even as they rebel—carries a kind of tenderness in the rebuke. God is naming who they were meant to be, even as He describes who they have become.',
        },
        {
          kind: 'commentary',
          id: 'c-forsake',
          html:
            'Comfort is not innocent. When Israel could rest and no longer had to depend on the Rock for daily bread, they forgot the Rock. This is the Bible&apos;s recurring pattern: security that breeds self-sufficiency, self-sufficiency that breeds ingratitude, ingratitude that breeds idolatry. "Lightly esteemed" carries disdain—not anger, but a turning away, a decision to treat lightly what once meant everything.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 16,
              spans: [
                t('They provoked him to jealousy with strange gods, with abominations provoked they him to anger.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('They sacrificed unto devils, not to God; to gods which they knew not, to new gods that came newly up, whom your fathers feared not.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Of '),
                hg('the Rock that begat thee', 'c-begat'),
                t(' thou art unmindful, and hast forgotten God that formed thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-begat',
          html:
            'The metaphor is almost tender despite the accusation. God did not purchase Israel as a slave; He begat them, brought them into being. And they unmindfully forgot Him. The tragedy is not God&apos;s inability to hold them, but their ability to forget so completely someone who had been intimate with them.',
        },
        {
          kind: 'carry',
          html:
            'Comfort can be dangerous. Security can quietly turn you away from the very God who built the security. In seasons of plenty—when the job is steady, the relationships are stable, the numbers in the bank account are reassuring—do you find yourself actually more conscious of God, or less? Jeshurun&apos;s danger is yours. The antidote is to name God&apos;s provision out loud while you still see it clearly, before comfort clouds your memory.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'jeshurun-reflection',
          prompt:
            'When have you drifted away from God during a season when things were going well? What brought you back?',
        },
      ],
    },

    /* ─── Deuteronomy 32:19–27 — "I will Provoke Them to Jealousy" ────────── */
    {
      ref: 'Deuteronomy 32:19–27',
      title: '"I will provoke them to jealousy"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 19,
              spans: [
                t('And when the Lord saw it, he abhorred them, because of the provoking of his sons, and of his daughters.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And he said, '),
                hg('I will hide my face from them', 'c-hide-face'),
                t(', I will see what their end shall be: for they are a very froward generation, children in whom is no faith.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hide-face',
          html:
            'To hide God&apos;s face is the deepest curse in Hebrew prayer. It is the experience of abandonment, the severance of relationship. But notice: it comes after saying "I will see what their end shall be." God is not truly absent; He is watching. His withdrawal is purposeful—part of a plan to draw them back.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 21,
              spans: [
                t('They have moved me to jealousy with that which is not God; they have provoked me to anger with their vanities: and I will '),
                hp('"move them to jealousy with those which are not a people"', 'c-jealousy'),
                t('; I will provoke them to anger with a foolish nation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jealousy',
          html:
            'Paul quotes this exact verse in Romans 10:19, and his argument hinges on it. The "foolish nation" Paul refers to are the Gentiles—people who had no covenant with God, no law, no promises. Yet through the Gentiles&apos; inclusion in Christ, the Jewish people would be provoked to jealousy and return. Paul is saying: God&apos;s judgment on Israel was never meant to be final. It was a tool in service of mercy.',
        },
        {
          kind: 'christ',
          id: 'christ-jealousy',
          title: 'Christ Connection — The Gentiles Included',
          html:
            'Paul writes: "Now I say that Jesus Christ was a minister of the circumcision for the truth of God, to confirm the promises made unto the fathers. And that the Gentiles might glorify God for his mercy... That the Gentiles might be filled with hope, by the power of the Holy Ghost" (Romans 15:8–9, 13). And in Romans 11:11: "Have they stumbled that they should fall? God forbid: but rather through their fall salvation is come unto the Gentiles, for to provoke them to jealousy." The Song of Moses is not prophecy of doom. It is prophecy of a mercy so wide it will eventually include the whole world.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 22,
              spans: [
                t('For a fire is kindled in mine anger, and shall burn unto the lowest hell, and shall consume the earth with her increase, and set on fire the foundations of the mountains.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('I will heap mischiefs upon them; I will spend mine arrows upon them.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('They shall be burnt with hunger, and devoured with burning heat, and with bitter destruction: I will also send the teeth of beasts upon them, with the poison of serpents of the dust.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('The sword without, and terror within, shall destroy both the young man and the virgin, the suckling also with the man of gray hairs.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('I said, I would scatter them into corners, I would make the remembrance of them to cease from among men:'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Were it not that I feared the wrath of the enemy, lest their adversaries should behave themselves strangely, and lest they should say, Our hand is high, and the Lord hath not done all this.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judgment-stays-hand',
          html:
            'The judgment language is fierce and concrete. But notice verse 27: even in His anger, God does not permit complete destruction. Why? Not because Israel deserves it, but because the world might misinterpret it—might think the adversaries had won by their own might. God&apos;s restrain of His own judgment is for the sake of His glory among the nations. Even the wrath serves mercy.',
        },
        {
          kind: 'carry',
          html:
            'The Song does not hide what happens when we forget God. The consequences are real—exile, loss, the unraveling of everything we built on our own sufficiency. But do not miss the detail in verse 27: even as judgment falls, God is already thinking about how to bring mercy. His anger, unlike human anger, is always a means to an end—and the end is always reconciliation.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'jealousy-reflection',
          prompt:
            'Have you ever experienced God&apos;s discipline as a way of calling you back? How did that feel at the time, and what did you see in it later?',
        },
      ],
    },

    /* ─── Deuteronomy 32:39–42 — "I Live Forever" ──────────────────────── */
    {
      ref: 'Deuteronomy 32:39–42',
      title: '"I live forever"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 39,
              spans: [
                t('See now that I, even I, am he, and there is no god with me: '),
                hg('I kill, and I make alive', 'c-kill-alive'),
                t('; I wound, and I heal: neither is there any that can deliver out of my hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kill-alive',
          html:
            'God claims authority over life and death, wounding and healing, in absolute terms. He is not subject to other forces or other gods. And crucially, He claims to do both: the destruction and the restoration belong to Him equally. This is not a God with competing impulses fighting inside Him—it is a God whose purposes are unified, whose judgment and mercy serve one goal.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 40,
              spans: [
                t('For '),
                hp('I lift up my hand to heaven', 'c-hand-heaven'),
                t(', and say, I live for ever.'),
              ],
            },
            {
              number: 41,
              spans: [
                t('If I whet my glittering sword, and mine hand take hold on judgment; I will render vengeance to mine enemies, and will reward them that hate me.'),
              ],
            },
            {
              number: 42,
              spans: [
                t('I will make mine arrows drunk with blood, and my sword shall devour flesh; and that with the blood of the slain and of the captives, from the beginning of revenges upon the enemy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hand-heaven',
          html:
            'This is God taking an oath—swearing by Himself, because there is no greater authority. "I live forever" is the foundation of every other promise. His judgment of enemies is not spiteful; it is just. His vengeance is the other side of His faithfulness—He will not let evil have the last word.',
        },
        { kind: 'divider' },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 43,
              spans: [
                t('Rejoice, O ye nations, with his people: for he will '),
                hg('avenge the blood of his servants', 'c-avenge'),
                t(', and will render vengeance to his adversaries, and will be '),
                hg('merciful unto his land', 'c-merciful'),
                t(', and to his people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-avenge',
          html:
            'The song does not end in isolation. It ends with an invitation to the nations to rejoice with God&apos;s people. Paul quotes this verse in Romans 15:10 as proof that the inclusion of the Gentiles was part of God&apos;s plan from the beginning. The song that traced Israel&apos;s failure turns outward, inviting all peoples into the joy of God&apos;s vindication.',
        },
        {
          kind: 'commentary',
          id: 'c-merciful',
          html:
            'Mercy to the land, mercy to the people. The song ends not with a sword raised high, but with mercy extended. The judgment is real and necessary, but it is never the final word. This is the Bible&apos;s pattern: judgment that leads back to mercy, discipline that serves restoration.',
        },
        {
          kind: 'carry',
          html:
            'You live in the time between the judgment and the mercy—between Israel&apos;s scattering and the calling of the nations, between the cross and the final reconciliation of all things. The God you encounter now is the God who swore "I live forever," who kills and makes alive, who judges and restores. Your job is not to fear His justice but to trust His aim. He is a God who lets nothing He loves go finally lost.',
        },
        {
          kind: 'reflection',
          id: 'forever-reflection',
          prompt:
            'What does it change in your life to know that God is not bound by time—that He is working toward a mercy that outlasts every failure?',
        },
      ],
    },

    /* ─── Deuteronomy 32:44–47 — Set Your Hearts ──────────────────────── */
    {
      ref: 'Deuteronomy 32:44–47',
      title: '"Set your hearts unto all the words"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 44,
              spans: [
                t('And Moses came and spake all the words of this song in the ears of the people, he, and Hoshea the son of Nun.'),
              ],
            },
            {
              number: 45,
              spans: [
                t('And Moses made an end of speaking all these words to all Israel:'),
              ],
            },
            {
              number: 46,
              spans: [
                t('And he said unto them, '),
                hp('"Set your hearts unto all the words"', 'c-hearts'),
                t(' which I testify among you this day, which ye shall command your children to observe to do, all the words of this law.'),
              ],
            },
            {
              number: 47,
              spans: [
                t('For it is not a vain thing for you; because '),
                hg('it is your life', 'c-your-life'),
                t(': and through this thing ye shall prolong your days in the land, whither ye go over Jordan to possess it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hearts',
          html:
            '"Set your hearts" is the call to intention. Not mere compliance, not rote memorization, but a deliberate turning of the whole self toward the words. The song is not given to be sung once and forgotten. It is meant to echo through generations—parents teaching it to children, the story of God&apos;s faithfulness and Israel&apos;s struggle becoming part of the family&apos;s memory.',
        },
        {
          kind: 'commentary',
          id: 'c-your-life',
          html:
            'This is stunning. The law—the words, the covenant, the whole weight of Torah—is not a burden imposed from outside. It is your life. To turn from it is to turn from life itself. To embrace it is to choose life. Moses is not threatening; he is showing them the anatomy of how to live.',
        },
        {
          kind: 'carry',
          html:
            'The song you have just read is meant to do something to you. Not to inform you as a neutral observer, but to reshape how you remember, how you understand God, how you see your own story inside His story. Set your heart to it. Let it be not information but formation. Tell the story of God&apos;s faithfulness and your own wandering to the people you love. In the telling, God shapes generations.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'hearts-reflection',
          prompt:
            'Whose story of God&apos;s faithfulness shaped you early? And whose story might God be inviting you to shape now?',
        },
      ],
    },
  ],
};
