import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 15 — The Song of Moses. The first hymn in the Bible, sung after
 * the Red Sea crossing. The tree at Marah—God's healing. The compound name
 * YHWH-Rapha, "the LORD that healeth."
 */
export const EXODUS_15: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 15,

  intros: [
    'After the Red Sea parts and Pharaoh&apos;s army drowns, Moses leads the people in the first hymn in the Bible. He sings the LORD&apos;s might, His mercy toward Israel, His judgment on Egypt. The song turns the exodus into poetry—raw praise erupting from the shore as the people realize they are alive, they are free, and they have seen something that rewrites their story.',
    'Then comes a harsher moment. Three days into the wilderness, the water at Marah is bitter and undrinkable. The people turn on Moses. But the LORD shows Moses a tree to throw into the waters, and they become sweet. Marah is where Israel learns that every bitter thing placed in God&apos;s hands becomes life-giving—a truth the Church Fathers recognized as pointing to the wood of the Cross. And here, for the first time, the LORD names Himself by one of His compound names: *YHWH-Rapha*, "the LORD that healeth."',
  ],

  sections: [
    /* ─── Exodus 15:1–3 — The Song Begins ────────────────────────────── */
    {
      ref: 'Exodus 15:1–3',
      title: 'The Song',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 1,
              spans: [
                t('Then '),
                hp('sang Moses and the children of Israel', 'christ-song'),
                t(' this '),
                hg('song', 'c-shir'),
                t(' unto the LORD, and spake, saying, I will sing unto the LORD: for he hath triumphed gloriously; the horse and his rider hath he thrown into the sea.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shir',
          html:
            'The Hebrew word <em>shir</em> (song) comes from a root meaning to sing out, to break into sound. This is not a quiet reflection. This is a people bursting into voice, the sound of someone who has just been delivered from the jaws of death.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shir',
          title: 'Shir — &ldquo;song&rdquo;',
          script: 'שִׁיר',
          translit: '<strong>shir</strong> · a song, a hymn',
          description:
            'Shir is the first musical word in the Bible. Song is how Israel processes salvation—not debate, not prose, but the full voice of the body breaking into praise.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 2,
              spans: [
                t('The LORD is my strength and my song; he is become my '),
                hp('salvation', 'christ-song'),
                t(': he is my God, and I will prepare him an '),
                hy('habitation', 'c-dwelling'),
                t('; my father&apos;s God, and I will exalt him.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('The LORD is a man of war: the LORD is his '),
                hg('name', 'c-name-war'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dwelling',
          html:
            'To &ldquo;prepare a habitation&rdquo; for God is to make Him a home—in the tabernacle soon to come, yes, but deeper: in the hearts of a people who have learned that He keeps His word. Israel has just watched the sea close over their enemies. Now they will build Him a dwelling.',
        },
        {
          kind: 'commentary',
          id: 'c-name-war',
          html:
            'God takes a name here: &ldquo;The LORD is a man of war.&rdquo; He is not ashamed of the judgment He executes. But notice what comes immediately: not more about His power, but the story of His particular promises to Israel, the God of Abraham, Isaac, and Jacob who keeps covenant.',
        },
        {
          kind: 'christ',
          id: 'christ-song',
          title: 'Christ Connection — The Song in Heaven',
          html:
            'Near the end of Revelation, John hears the redeemed singing this exact song: &ldquo;And they sing the song of Moses the servant of God, and the song of the Lamb, saying, Great and marvellous are thy works, Lord God Almighty; just and true are thy ways&rdquo; (Rev. 15:3). The Red Sea deliverance and the cross become one song—two moments when God says no to slavery, yes to His people. Every hymn sung in heaven will echo the song sung at Marah&apos;s shore.',
        },
        {
          kind: 'carry',
          html:
            'The first hymn in the Bible is not soft. It is a people who have watched execution and walked through a sea, now breaking into song. If your praise has felt quiet or small, know that sometimes salvation demands the full voice. Moses did not thank God sitting down. He sang.',
        },
        {
          kind: 'reflection',
          id: 'song-begins',
          prompt: 'What does salvation look like in your story? Not theologically—actually. When you remember it, what comes with that memory?',
        },
      ],
    },

    /* ─── Exodus 15:4–10 — Pharaoh and the Sea ───────────────────────── */
    {
      ref: 'Exodus 15:4–10',
      title: 'Pharaoh&apos;s Defeat',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 4,
              spans: [
                t('Pharaoh&apos;s chariots and his host hath he cast into the sea: his chosen captains also are drowned in the Red sea.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('The depths have covered them: they sank into the bottom as a stone.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Thy right hand, O LORD, is become glorious in power: thy right hand, O LORD, hath '),
                hg('dashed in pieces', 'c-dashed'),
                t(' the enemy.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And in the greatness of thine excellency thou hast overthrown them that rose up against thee: thou sentest forth thy wrath, which consumed them as stubble.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And with the blast of thy nostrils the waters were gathered together, the '),
                hy('floods stood upright', 'c-waters-wall'),
                t(' as an heap, and the depths were congealed in the heart of the sea.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dashed',
          html:
            'To dash something in pieces is to render it useless, defeated, broken beyond reconstruction. This is not gentle language, and Moses does not soften it. God defeats those who oppress His people, and the people sing about it without apology.',
        },
        {
          kind: 'commentary',
          id: 'c-waters-wall',
          html:
            'The image is extraordinary: the waters standing upright like a wall, thick as a wall, holding themselves vertical. The Red Sea becomes a monument—not just a crossing, but a visible statement of what the LORD can do with water itself.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 9,
              spans: [
                t('The enemy said, I will pursue, I will overtake, I will divide the spoil; my lust shall be satisfied upon them; I will draw my sword, my hand shall destroy them.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Thou didst blow with thy wind, the sea covered them: they sank as lead in the mighty waters.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-pharaoh-voice',
          html:
            'Pharaoh&apos;s voice echoes through the song—his arrogance, his certainty that Israel can be captured, divided, destroyed. But his words hang unfinished. A single breath from God, and the sea becomes his tomb. The boast dies unfinished.',
        },
        {
          kind: 'carry',
          html:
            'The fear that was chasing you—the one with the voice full of certainty, the momentum that felt unstoppable—has met something bigger. You are still learning to believe it. The song helps. Sometimes you have to sing the defeat of the thing that was hunting you, out loud, before you can actually feel safe.',
        },
        {
          kind: 'reflection',
          id: 'pharaoh-defeat',
          prompt: 'What enemy have you watched God reduce to nothing? What would it mean to sing that out loud?',
        },
      ],
    },

    /* ─── Exodus 15:11–18 — The Kingship of God ───────────────────────── */
    {
      ref: 'Exodus 15:11–18',
      title: 'The Reign',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 11,
              spans: [
                t('Who is like unto thee, O LORD, '),
                hg('among the gods', 'c-incomparable'),
                t('? who is like thee, glorious in holiness, fearful in praises, doing wonders?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Thou stretchedst out thy right hand, the earth swallowed them.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Thou in thy mercy hast led forth the people which thou hast redeemed: thou hast guided them in thy strength unto thy '),
                hy('holy habitation', 'c-destination'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-incomparable',
          html:
            'The song turns from celebrating what God did to celebrating what God <em>is</em>. There is no rival, no god who compares. This is not a boast on Israel&apos;s behalf—it is Israel&apos;s honest recognition of their God&apos;s singular power.',
        },
        {
          kind: 'commentary',
          id: 'c-destination',
          html:
            'The promise is not just escape; it is arrival. God does not only save from—He saves <em>toward</em>. The wilderness is not the end point. The holy habitation—the land, the temple, the presence of God—is where this is all headed.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 14,
              spans: [
                t('The people shall hear, and be afraid: sorrow shall take hold on the inhabitants of Palestina.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Then the dukes of Edom shall be amazed; the mighty men of Moab, trembling shall take hold upon them; all the inhabitants of Canaan shall melt away.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Fear and dread shall fall upon them; by the greatness of thine arm they shall be as still as a stone; till thy people pass over, O LORD, till the people pass over, which thou hast purchased.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nations-fear',
          html:
            'Moses is singing the future. The song of the Red Sea already contains the taking of the land. The nations will hear what God did to Egypt and will fear. Israel is not moving into that land as an invading army that no one has heard of—Israel is moving in as a people whose God has already announced Himself. The battle in some sense is already won.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 17,
              spans: [
                t('Thou shalt bring them in, and plant them in the mountain of thine inheritance, in the place, O LORD, which thou hast made for thee to dwell in, In the Sanctuary, O LORD, which thy hands have established.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('The LORD shall reign for ever and ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-forever',
          html:
            'The song ends with a throne. Not a story of deliverance that is finished, but a reign that is forever. Israel has walked out of the sea and into an eternal kingdom. Every year they will retell this song—and every year it will point further forward, to a King whose reign has no end.',
        },
        {
          kind: 'carry',
          html:
            'You are not just escaped. You are being led somewhere—to a habitation, a place made for you, where the King reigns forever. The wilderness is real. The hunger and thirst are coming. But they are not the story. The story is a people being brought in, planted, made part of a kingdom that will not end.',
        },
        {
          kind: 'reflection',
          id: 'reign-forever',
          prompt: 'What does it change in your day if God&apos;s reign is truly forever—not just for now, but eternally?',
        },
      ],
    },

    /* ─── Exodus 15:19–21 — Miriam and the Women ──────────────────────── */
    {
      ref: 'Exodus 15:19–21',
      title: 'Miriam&apos;s Echo',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 19,
              spans: [
                t('For the horse of Pharaoh went in with his chariots and with his horsemen into the sea, and the LORD brought again the waters of the sea upon them; but the children of Israel went on dry land in the midst of the sea.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And '),
                hy('Miriam the prophetess', 'c-miriam'),
                t(', the sister of Aaron, took a timbrel in her hand; and all the women went out after her with timbrels and with dances.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-miriam',
          html:
            'Miriam appears once, briefly, in the song. She is a prophetess—a woman who hears and speaks the word of God. She is given a timbrel, the percussion of joy. She leads the women in dance. Women are not silent in this story; they are not sidelined. Miriam echoes Moses&apos; song with the instrument of the body.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 21,
              spans: [
                t('And Miriam answered them, '),
                hp('Sing ye to the LORD', 'christ-miriam-refrain'),
                t(': for he hath triumphed gloriously; the horse and his rider hath he thrown into the sea.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-refrain',
          html:
            'Miriam takes the first line of Moses&apos; song and gives it back to the people—shortens it, makes it a refrain they can echo. She is not offering a new song; she is ensuring that the salvation Moses sang about becomes the people&apos;s own song, repeated, embodied, danced out on the shore.',
        },
        {
          kind: 'christ',
          id: 'christ-miriam-refrain',
          title: 'Christ Connection — Women Sing the Victory',
          html:
            'After the resurrection, it is women who are first sent to announce the victory to the disciples. Miriam stands at the beginning of Israel&apos;s history as a prophetess leading others into the song of deliverance; women stand at the climax of the New Testament as the first witnesses to announce the final deliverance. From the Red Sea to the resurrection, women are given the voice of witness, of praise, of proclamation.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to be the first to sing—but you can be the one who repeats it loud enough that others hear. Miriam watched Moses sing, then gave the women a piece of the song small enough that they could make it their own and large enough that it changed them. Your role is to echo the deliverance, to make it real in the community, to call others into the singing.',
        },
        {
          kind: 'reflection',
          id: 'miriam-song',
          prompt: 'Who have you watched be first—to choose, to act, to speak? How can you take what they&apos;ve done and help others own it too?',
        },
      ],
    },

    /* ─── Exodus 15:22–27 — Marah and Healing ────────────────────────── */
    {
      ref: 'Exodus 15:22–27',
      title: 'The Bitter Water Made Sweet',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 22,
              spans: [
                t('So Moses brought Israel from the Red sea: and they went out into the wilderness of Shur; and they went three days in the wilderness, and found no water.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And when they came to '),
                hy('Marah', 'hebrew-marah'),
                t(', they could not drink of the waters of Marah, for they were '),
                hg('bitter', 'c-bitter'),
                t(': therefore the name of it was called Marah.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-marah',
          title: 'Marah — &ldquo;bitter&rdquo;',
          script: 'מָרָה',
          translit: '<strong>marah</strong> · bitter, harsh, grievous',
          description:
            'Marah is the name of the place and the character of the water. The first place that has a name after deliverance is defined by its bitterness. The journey into freedom does not bypass hardship; it walks straight into it.',
        },
        {
          kind: 'commentary',
          id: 'c-bitter',
          html:
            'Three days of wilderness. Celebration on the shore has given way to thirst and the realization that the promised land is not one mile away. The people turn on Moses: &ldquo;What shall we drink?&rdquo; (v. 24). The song is over. Reality has arrived.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 24,
              spans: [
                t('And the people murmured against Moses, saying, What shall we drink?'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And he cried unto the LORD; and the LORD shewed him a '),
                hp('tree', 'christ-tree'),
                t(': and when he had cast it into the waters, the waters were made sweet: there he made for them a statute and an ordinance, and there he proved them,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tree-shown',
          html:
            'Moses cries to God, and God shows him a tree. Just a tree. Not an explanation, not an apology from the people, not a miracle that restores their faith. Just a tree—and the instruction to put it in the bitter water. The tree is so small, so unlikely, that it could easily be overlooked. But when it is placed in what is undrinkable, it transforms.',
        },
        {
          kind: 'christ',
          id: 'christ-tree',
          title: 'Christ Connection — The Tree That Heals',
          html:
            'The Church Fathers recognized the tree of Marah as a type of the Cross—the wood that God showed the deliverer that turns bitterness into life. When the bitter cup came to Jesus, He drank it; and somehow, in that drinking, the wood of the cross became the thing that heals. &ldquo;Christ hath redeemed us from the curse of the law, being made a curse for us&rdquo; (Gal. 3:13). The tree at Marah is a whisper of the tree at Golgotha.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the thing God shows you to put in your bitter water is small. You wouldn&apos;t have picked it. It doesn&apos;t look adequate. Throw it in anyway. The sweetness that comes is not because the tree is large or because you understand how it works. It is because God showed it to you, and because you obeyed.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 26,
              spans: [
                t('And said, If thou wilt diligently hearken to the voice of the LORD thy God, and wilt do that which is right in his sight, and wilt give ear to his commandments, and keep all his statutes, I will put none of these diseases upon thee, which I have brought upon the Egyptians: for I am '),
                hy('the LORD that healeth thee', 'hebrew-rapha'),
                t('.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And they came to Elim, and there were twelve wells of water, and threescore and ten palm trees: and they encamped there by the waters.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-rapha',
          title: 'YHWH-Rapha — &ldquo;the LORD that healeth&rdquo;',
          script: 'יְהוָה רֹפְאֶךָ',
          translit: '<strong>YHWH-rapha</strong> · the LORD, my healer',
          description:
            'This is the first of God&apos;s compound names in Scripture. Not just healing, but a personal declaration: <em>I am</em> the one who heals you. Jesus will later quote this name and claim it: &ldquo;I am the Lord thy God... that healeth thee&rdquo; (Matt. 8:17, quoting Isaiah 53:4).',
        },
        {
          kind: 'commentary',
          id: 'c-rapha-promise',
          html:
            'God names Himself here for the first time with a compound name. He is not just the mighty One who defeated Egypt; He is the One who heals. Healing is not a distant promise. It is His identity, His name, His nature. When Israel drinks water made sweet by the tree, they are drinking the promise that God Himself is their healer.',
        },
        {
          kind: 'carry',
          html:
            'After the bitterness comes Elim—twelve wells of water and seventy palm trees. The detail matters. Not just survival, but abundance. Not just water, but shade. You are being brought to a place more lush than where the bitterness found you. God is not promising you will never taste bitterness. He is promising that you will not stay there.',
        },
        {
          kind: 'reflection',
          id: 'marah-healing',
          prompt: 'What bitter water have you been drinking? What small tree might God be showing you to put into it? What would change if you trusted that the healer is working?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Sing unto the LORD, for He hath triumphed gloriously. He is the LORD that healeth thee.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 15 · Study Guide',
  },

  hasHebrew: true,
};
