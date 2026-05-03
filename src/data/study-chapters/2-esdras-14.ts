import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Esdras 14 — The Voice from the Bush and the Seventy Books
 *
 * Ezra has finished his apocalyptic vision and God now speaks to him directly
 * from a burning bush—echoing the encounter with Moses at Horeb. God commands
 * Ezra to write down all that he has seen and heard. Ezra is filled with
 * understanding and dictates 94 books in 40 days: the scribe writes by divine
 * inspiration, his fingers moving without fatigue. Of these, 24 are public
 * (the Hebrew canon), and 70 are reserved for the wise. The chapter closes with
 * Ezra being taken up into heaven, translated like Enoch, never to see death.
 *
 * This is the climax of the Jewish apocalypse. The voice that spoke through
 * prophets now speaks through a scribe. The word is being preserved and
 * multiplied. And the faithful witness is being removed to heaven—a sign of
 * God's vindication and a foreshadowing of the Ascension to come.
 */
export const SECOND_ESDRAS_14: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 14,

  estimatedMinutes: { 5: 10, 10: 18, 15: 24 },
  intros: [
    'By chapter 14, Ezra has seen the visions—the woman transformed into a city, the eagle and the lion, the interpretation of days and times. Now God speaks to him directly. Not through an angel, not through a vision, but voice to voice. And God&apos;s command is clear: write down everything. What you have seen, what you understand, what the spirit has shown you—set it down. It is to be preserved.',
    'But there is something unprecedented in what happens next. Ezra is given understanding beyond human capacity. For forty days, with a pen and ink and a prepared scribe to write at his dictation, Ezra records 94 books—not slowly, but with the pace of inspiration itself. His mouth never tires. The scribe&apos;s hand never falters. When it is finished, God takes Ezra up into heaven. He does not die; he is removed, taken, translated. Like Enoch before him, like Philip in the desert, like Jesus Himself—Ezra is the witness to what God will do.',
    'The message is urgent: the word of God will not be lost. Even in exile, even after the temple&apos;s destruction, even when everything looks like ending, God is preserving His word and multiplying it. Twenty-four books go public—the canon Israel knows. Seventy go to the wise—hidden, reserved, for the faithful few who will read them in the age to come. This is how God works in a broken world: He hides treasure. He multiplies it. And He validates the witness who carries it.',
  ],

  opener: {
    matchTitle: /bush|fire|flame|ezra/i,
    matchArtist: /tissot|fuerst/i,
    caption: 'The Voice Speaks: God at the Burning Bush',
  },

  sections: [
    /* ─── 2 Esdras 14:1–6 — The Voice from the Bush ──────────────────────── */
    {
      ref: '2 Esdras 14:1–6',
      title: 'The Voice from the Bush',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass upon the third day, I sat '),
                hg('under a tree', 'tree-shade'),
                t(', and, behold, there came a '),
                hp('voice out of a bush', 'bush-moses'),
                t(', and I heard, and the words were these;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bush-moses',
          html:
            'The moment is unmistakable. A burning bush speaking to a man sitting beneath a tree. The echo of Moses at Horeb rings through the text. God does not appear to Ezra in the temple (it no longer stands). He appears in the wilderness, to a man in solitude, as He appeared to Moses. The God who called the first lawgiver now calls the last scribe. The pattern is ancient and will not break.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 2,
              spans: [
                t('And said, O Ezra, '),
                hg('open thy mouth, and drink what I give thee to drink', 'drink-cup'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tree-shade',
          html:
            'Ezra sits under a tree—a place of rest, of shade, of shelter. The tree echoes Eden, where humanity first received God&apos;s word. And from that place of rest, God speaks. Not in storm or earthquake, but in the quiet voice of the bush. The contrast is precise: Ezra is weary from his visions, and God comes to him in the place where he sits.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 3,
              spans: [
                t('Then took I the cup, and I drank: and when I had drunk it, my heart uttered understanding, and '),
                hy('wisdom grew in my breast', 'wisdom-grew'),
                t(', and the spirit '),
                hp('increased in my mouth', 'spirit-mouth'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'drink-cup',
          html:
            'The cup appears without explanation—no word of what is in it, no description of its contents. Yet when Ezra drinks, he is transformed. His heart grasps understanding; wisdom multiplies in him; his mouth becomes a channel for the spirit. This is not natural learning; this is the spirit of inspiration itself poured into him. God is preparing him for what comes next.',
        },

        {
          kind: 'greek',
          id: 'greek-phren',
          title: 'Phren — "Heart, Mind"',
          script: 'φρήν',
          translit: '<strong>phren</strong> · the seat of understanding, thought, emotion; the mind',
          description:
            'Ezra&apos;s heart is the place where understanding takes root. In Greek thought, the heart (phren) is not sentiment but intellect—the organ of perception where wisdom is born. God fills this space in him so that what he speaks comes from the deepest place of knowing.',
        },

        {
          kind: 'commentary',
          id: 'wisdom-grew',
          html:
            'Wisdom does not appear fully formed. It "grows"—multiplies, expands, fills the space where there was emptiness before. This is organic, alive language. God is not implanting a downloaded database of information. He is awakening and expanding something alive in Ezra&apos;s own being.',
        },

        {
          kind: 'commentary',
          id: 'spirit-mouth',
          html:
            'The spirit does not merely fill Ezra&apos;s mind—it comes through his mouth. This is the spirit of prophecy, the ruach of God that enables the prophet to speak what God intends. His mouth becomes the instrument through which the divine word will flow as he writes the ninety-four books.',
        },

        {
          kind: 'carry',
          html:
            'You have read Scripture and felt nothing, or felt confused. You have prayed and the words seemed to scatter. But the promise of Ezra is that there is an encounter ahead where God will speak directly to you—not audibly, perhaps, but unmistakably. A moment when you drink what God gives you and understanding grows in your heart. The cup is offered. Will you drink?',
        },

        {
          kind: 'reflection',
          id: 'cup-drink',
          prompt:
            'What cup is God offering you to drink right now—a hard truth, a confusing calling, a vision that costs? What would it mean for your understanding to grow by actually accepting it?',
        },
      ],
    },

    /* ─── 2 Esdras 14:10–12 — "Moses, Moses" Echoes ────────────────────── */
    {
      ref: '2 Esdras 14:10–12',
      title: '"Moses, Moses" Echoes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 10,
              spans: [
                t('And the Lord said unto me, '),
                hp('Thou hast drunk a bitter cup', 'bitter-cup'),
                t(', and thou alone hast learned the secrets of the Most High, and been counted worthy to receive the mysteries of wisdom.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bitter-cup',
          html:
            'The cup was bitter. God does not conceal this. What Ezra has been given to drink is not sweetness but anguish—the weight of seeing what cannot be unseen, the burden of understanding theodicy, the knowledge of judgment coming. Yet that bitterness has made him worthy. God is saying: the cost of this knowledge is the darkness you have already tasted, and you have not turned away.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 11,
              spans: [
                t('Therefore, I said unto thee, '),
                hg('Lay up the words that thou hearest in thy heart', 'lay-up-words'),
                t(';'),
              ],
            },
            {
              number: 12,
              spans: [
                t('For they shall not be shewed to the world until the world shall be consumed. And '),
                hp('thou shalt be taken up from among men', 'taken-up'),
                t(', and thy dwelling shall be in my Son&apos;s heart, and thy rest with them that rest like thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lay-up-words',
          html:
            'This is a direct echo of Mary in Luke 2:19—she "kept all these things, pondering them in her heart." Ezra is now doing what Mary did: laying up words in his heart, preserving them, not broadcasting them immediately. The words are kept hidden until the world itself is finished. They are not for the present age; they are for the age to come.',
        },

        {
          kind: 'commentary',
          id: 'taken-up',
          html:
            'The phrase is unmistakable: "thou shalt be taken up from among men." Not dying a natural death. Not being buried. Being taken, removed, translated into a different state of being. Ezra will join the small company of those who did not taste death: Enoch, Elijah, Philip, and—in the fullness of time—Jesus Himself. The witness is being validated not by words but by the very manner of his removal.',
        },

        {
          kind: 'christ',
          id: 'christ-taken-up',
          title: 'Christ Connection — Taken Up into Heaven',
          html:
            'In Acts 1:9, the disciples watch Jesus being taken up: "And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight." The same word, the same action. Jesus ascends into heaven in the sight of witnesses, and forty days later (echoing Ezra&apos;s forty days) the Spirit comes. But before Jesus ascends, He does what Ezra does: He speaks the words, commits them to the apostles, and says to them, "Lay up these words in your heart." Jesus is the ultimate Ezra—the one who brings the full, final word of God, who is translated to heaven, and who dwells eternally in the Father&apos;s heart.',
        },

        {
          kind: 'carry',
          html:
            'You are not called to be translated to heaven. But you are called to be a keeper of words. The truth you have been given is not yours alone; it is laid up in your heart so that you may pass it on. The question is not whether you will be taken bodily to heaven like Ezra; the question is whether you will preserve and pass down the word of God to those who come after you.',
        },

        {
          kind: 'reflection',
          id: 'words-laid-up',
          prompt:
            'What words has God laid up in your heart that are meant for someone else? What truth are you keeping that might transform the person who hears it from you?',
        },
      ],
    },

    /* ─── 2 Esdras 14:19–22 — The Forty Days ──────────────────────────── */
    {
      ref: '2 Esdras 14:19–22',
      title: 'The Forty Days',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 19,
              spans: [
                t('And it came to pass when I had written all these things, the Lord said unto me, '),
                hg('The former things that are past I have spoken unto thee', 'former-spoken'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'former-spoken',
          html:
            'Ezra has written the visions, the words, the prophecies. Now God is turning him toward a new task. What is past must be preserved; what is coming must be revealed. The two movements—writing down the past, preparing for the future—will take forty days of ceaseless work.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 20,
              spans: [
                t('But the latter times do '),
                hg('tarry longer', 'tarry-longer'),
                t(': for the world is full of darkness, and the inhabitants thereof are without light.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tarry-longer',
          html:
            'The latter times—the fulfillment, the end, the restoration—are delayed. The world lingers in darkness. This is the apocalyptic reality Ezra knows from his visions: there will be suffering, waiting, a long interval before God&apos;s purposes are completed. Yet in this darkness, the books are being written. The word is being preserved. Light is being hidden in text so that the wise may find it.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 21,
              spans: [
                t('For '),
                hy('thy people are in tribulation', 'people-tribulation'),
                t('; but '),
                hp('the world shall not be left empty', 'world-not-empty'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And I said, Then I will begin to think on these things, and the world shall be instructed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'people-tribulation',
          html:
            'Israel is in tribulation—exile, loss, displacement. Yet God&apos;s promise is not that the tribulation will end immediately, but that the world will not be left empty. The word will be there. The books will exist. When the dark times finally yield, there will be something preserved for the next generation to read and know.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-yomim',
          title: 'Yomim — "Days"',
          script: 'יָמִים',
          translit: '<strong>yomim</strong> · days; time; epochs',
          description:
            'The forty days are not merely a duration. They are a unit of transformation. In Scripture, forty marks a boundary: forty days in the wilderness, forty days between resurrection and ascension, forty years of wandering. The forty days of Ezra&apos;s writing are a sealed time, set apart, in which God accomplishes something complete.',
        },

        {
          kind: 'carry',
          html:
            'Your own dark season may not end tomorrow. The tribulation you face may linger. But God&apos;s work during that time is not wasted. He is preserving something in you—wisdom, tested faith, a deeper knowledge of Him. The world will not be left empty because you are here, writing your own story, laying up your own words. The darkness is temporary; the word you carry will outlast it.',
        },

        {
          kind: 'reflection',
          id: 'world-not-empty',
          prompt:
            'What is God preserving in you right now in the midst of your tribulation? What word or wisdom is He teaching you that will be needed by someone else when the darkness finally lifts?',
        },
      ],
    },

    /* ─── 2 Esdras 14:44–46 — The Ninety-Four Books ────────────────────── */
    {
      ref: '2 Esdras 14:44–46',
      title: 'The Ninety-Four Books',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 44,
              spans: [
                t('So in forty days the Almighty finished the works which he had commanded. And '),
                hg('Esdras wrote all this', 'esdras-wrote'),
                t('; And so the law which Moses saw was delivered to the people of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras-wrote',
          html:
            'The work is complete. In forty days, Ezra writes all that God has commanded. Not slowly, not laboriously, but in the divine pace of inspiration. The metaphor is clear: what Moses received at Sinai—the law itself—is being restored through Ezra in the exile. The word of God is not lost; it is multiplied.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 45,
              spans: [
                t('Now therefore go thy way, and thou hast written the law; and '),
                hp('thou hast made it known unto the wise of the people', 'wise-people'),
                t('; and thou shalt put them in a cup, and they shall drink.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'wise-people',
          html:
            'The wise are the ones who will receive the books. Not the powerful, not the priests, not the authorities of Israel. The wise—those who have ears to hear, eyes to see, hearts to understand. This is the recurring pattern of Scripture: God hides treasure from the proud and reveals it to the humble.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 46,
              spans: [
                t('And '),
                hg('when all the nations shall have drunk, then shall they say', 'nations-say'),
                t(', These are the springs of understanding, the fountains of wisdom, and the streams of knowledge. And I determined to do thus, and to wisdom, that I might send thee forth by thyself, singly and alone, and hear the words of the Most High that thou art commanded.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nations-say',
          html:
            'When the nations drink—when the word spreads beyond Israel to the Gentiles—they will recognize what they are receiving. Springs, fountains, streams. The language is abundant, flowing, multiplying. The word of God is not scarce; it is an overflowing source. What looks like loss in exile becomes multiplication in the hands of the wise.',
        },

        {
          kind: 'greek',
          id: 'greek-logos',
          title: 'Logos — "Word"',
          script: 'λόγος',
          translit: '<strong>logos</strong> · word; discourse; reason; the divine principle',
          description:
            'Ezra is recording the <em>logos</em>—not mere sound or letters, but the rational principle, the divine reason, the word that carries power and meaning. When John writes "In the beginning was the Word" (John 1:1), he is naming the same <em>logos</em> that Ezra is recording. The word is not information; it is the presence and power of God Himself.',
        },

        {
          kind: 'carry',
          html:
            'You have been given something precious—not a book to read passively, but a word to drink, to receive, to let transform you. The ninety-four books exist not to pile up on a shelf, but to be consumed, internalized, lived. You are the wise person the books are written for. You are the one who is called to drink and to make the springs of understanding known to others.',
        },

        {
          kind: 'reflection',
          id: 'ninety-four',
          prompt:
            'The ninety-four books were written for the wise. Do you count yourself among the wise enough to receive them? What would it mean to not just read Scripture but to drink it deeply into your bones?',
        },
      ],
    },

    /* ─── 2 Esdras 14:47–48 — Twenty-Four Made Public, Seventy Reserved ──── */
    {
      ref: '2 Esdras 14:47–48',
      title: 'Twenty-Four Made Public, Seventy Reserved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 47,
              spans: [
                t('And it came to pass when he had written all these things, and he had written ninety and four books. And the Almighty said unto me, Thou hast made thyself wise, and thou hast gotten thee the heart of understanding. '),
                hg('Of these books thou shalt set forth in public', 'public-books'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'public-books',
          html:
            'Of the ninety-four books—an overwhelming number—some are meant for public knowledge, for the whole community. These will become the canon: the twenty-four books of the Hebrew Scriptures (the Law, the Prophets, and the Writings). They are not hidden; they are proclaimed. Every reader, every nation, every generation is meant to know them.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 48,
              spans: [
                t('And '),
                hp('the seventy thou shalt keep secret', 'seventy-secret'),
                t(', and deliver them only to such as be wise among the people: For in them is the spring of understanding, the fountain of wisdom, and the stream of knowledge. And I did so.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'seventy-secret',
          html:
            'But seventy books are different. They are kept secret. Reserved. Given only to those who are wise enough to receive them without being destroyed by them, without misusing them. This is not God hoarding; this is God protecting. Some knowledge requires maturity, depth, the capacity to hold it without being crushed by it. The seventy books are for the ready heart.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-sephirim',
          title: 'Sephirim — "Books"',
          script: 'ספרים',
          translit: '<strong>sephirim</strong> · books; written documents; scrolls',
          description:
            'The word carries the sense of something counted, enumerated, documented. Books are not casual; they are intentional records. Each of the ninety-four is counted, placed, purposeful. The distinction between the twenty-four and the seventy is not arbitrary but reflects God&apos;s own ordering of what is public and what is reserved.',
        },

        {
          kind: 'christ',
          id: 'christ-canon',
          title: 'Christ Connection — The Canon He Uses',
          html:
            'Jesus does not quote from the seventy hidden books. In Luke 24:27, after His resurrection, Jesus walks with the disciples on the Emmaus road and "expounded unto them in all the scriptures the things concerning himself"—referring to the twenty-four public books, the Hebrew canon. The Gospels do not cite the apocryphal works; they cite what is open and available. Yet Jesus also promises the Holy Spirit will guide believers into "all truth" (John 16:13)—a wisdom beyond what is written, for those mature enough to receive it. The pattern of Ezra holds: public word for all, hidden wisdom for the ready.',
        },

        {
          kind: 'carry',
          html:
            'Some truths in Scripture are plain to all—the love of God, the reality of judgment, the call to repentance. Other truths are hidden, reserved for the wise, requiring maturity and suffering to fully receive. You may not be ready yet for certain understandings; that is not failure, that is protection. But as you grow deeper, the hidden springs will open to you. Ask God for wisdom, not just knowledge. Ask for the maturity to drink what He is keeping in reserve.',
        },

        {
          kind: 'reflection',
          id: 'seventy-reserved',
          prompt:
            'What truth in Scripture still feels too deep or painful for you to fully embrace? Rather than rushing to understand it, ask God to make you wise enough to receive it. What would mature you toward that readiness?',
        },
      ],
    },

    /* ─── 2 Esdras 14:37–40 — "Drink the Cup" ────────────────────────── */
    {
      ref: '2 Esdras 14:37–40',
      title: '"Drink the Cup"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 37,
              spans: [
                t('But thou hast received sorrow now for '),
                hg('thy many infirmities', 'infirmities-carry'),
                t(', and thou shalt be refreshed as the world for to come.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'infirmities-carry',
          html:
            'Ezra has carried the weight of his infirmities—the burden of the visions, the anguish of the questions about theodicy, the sorrow of seeing Israel in exile. Yet God promises a renewal ahead. The refreshment will come, but only after the weight has been borne. There is no shortcut past the sorrow; the sorrow is itself the path to understanding.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 38,
              spans: [
                t('For thou hast '),
                hg('drunk of the bitter cup which thy Lord commanded thee to drink', 'bitter-cup-lord'),
                t('; and when thou hast drunk it, thou shalt come and be refreshed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bitter-cup-lord',
          html:
            'The cup appears again—bitter, commanded by the Lord, inescapable. Yet the promise is clear: when you drink it, refreshment follows. Not avoidance of the cup, but acceptance of it, leads to restoration. This is the movement of all apocalyptic literature: present suffering, future vindication. The cup is given; it must be drunk. The drinking itself becomes the path to the drinking.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 39,
              spans: [
                t('And it came to pass when he had written all these things, and he had written ninety and four books. And '),
                hp('Esdras was taken up', 'esdras-taken-final'),
                t(', that his seat was set in heaven, that he might sit beside me.'),
              ],
            },
            {
              number: 40,
              spans: [
                t('And it shall come to pass, that every one that understandeth the law shall stand in the judgment to come: for these are the springs of understanding, the fountains of wisdom.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras-taken-final',
          html:
            'The cup leads to the taking up. Ezra drinks the bitter cup, completes his task, and is removed to heaven. This is God&apos;s vindication. The one who carried the weight of understanding is taken to a place of rest—not death, but translation, a removal from the suffering world to sit beside God. The pattern promises that those who drink the cup faithfully will not remain in the exile forever.',
        },

        {
          kind: 'christ',
          id: 'christ-cup-suffer',
          title: 'Christ Connection — The Cup of Suffering',
          html:
            'In Matthew 26:39, Jesus kneels in Gethsemane and prays, "O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt." Jesus knows the cup—knows it is bitter, knows it will cost His life. Yet He drinks it. And after He drinks it fully, after He dies and rises, He ascends into heaven and sits at the right hand of God (Hebrews 10:12). The pattern of Ezra—drink the cup, then be taken up—is the pattern Jesus fulfills. Ezra prefigures the one who will drink the cup of all human suffering and be lifted into the Father&apos;s presence.',
        },

        {
          kind: 'carry',
          html:
            'You will be asked to drink a cup. Not the cup of the cross—that was Christ&apos;s alone. But a cup of your own sorrow, your own cost, your own suffering. The question before you is whether you will drink it, or whether you will spend your life trying to hand it to someone else. Those who drink it—who accept the weight, who do not flinch, who say "not my will but thine"—will sit beside Him. Not in exile forever, but lifted, refreshed, vindicated.',
        },

        {
          kind: 'reflection',
          id: 'cup-myself',
          prompt:
            'What cup has God set before you that you have been refusing? What if you stopped asking for it to pass and simply said, "Not my will, but thine"?',
        },
      ],
    },

    /* ─── 2 Esdras 14:49–51 — Ezra Taken Up ────────────────────────────── */
    {
      ref: '2 Esdras 14:49–51',
      title: 'Ezra Taken Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 49,
              spans: [
                t('Now therefore all thy people which are found in the whole world, take thou unto thee, and comfort thou them; for they are left in affliction:'),
              ],
            },
            {
              number: 50,
              spans: [
                t('But as for me, I will '),
                hp('depart hence, and go unto my people which are in the wilderness', 'depart-wilderness'),
                t(', and so I will comfort them also; for I know that it is an evil time, and that extreme necessity is at hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'depart-wilderness',
          html:
            'Ezra is not remaining with those in exile; he is departing. He is going to comfort a people—possibly referring to the ten lost tribes, those scattered beyond recovery, those whom no earthly king can reach. His comfort will not be of this world but transcendent. He goes to them as one translated, as one no longer bound by the limits of geography or mortality.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 51,
              spans: [
                t('Therefore go thou thy way, and '),
                hg('drive out the desires of the world', 'drive-out-desires'),
                t('; and lay aside the cares thereof; and '),
                hp('cast away the thoughts of the flesh', 'cast-thoughts'),
                t('; and '),
                hg('hasten thee to depart hence', 'hasten-depart'),
                t('; For the world hath much evil begun; behold, many evils are come upon thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'drive-out-desires',
          html:
            'The final command is radical: let go of worldly desire. Not renunciation for its own sake, but clarity. The world is ending; attachment to it is pointless. What matters now is not comfort or security or the approval of men, but the completion of the work and the crossing over.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-olam',
          title: 'Olam — "World, Age"',
          script: 'עוֹלָם',
          translit: '<strong>olam</strong> · world; age; eternity; the order of things',
          description:
            'The world (olam) is not permanent; it is an age, a temporary order. To drive out desire for it is not hatred of creation but recognition of its transience. God alone is eternal; all else passes. Ezra&apos;s takeaway is liberation—freedom from the tyranny of a world that will not last.',
        },

        {
          kind: 'commentary',
          id: 'cast-thoughts',
          html:
            'Cast away the thoughts of the flesh—the preoccupations with the body, the fixations on survival, the anxieties about what will happen to your body in an ending world. These thoughts are not evil, but they are final-age distractions. They keep you from the larger reality: the eternal God and His eternal kingdom.',
        },

        {
          kind: 'christ',
          id: 'christ-ascension',
          title: 'Christ Connection — The Ascension',
          html:
            'After Jesus rose from the dead, He spent forty days appearing to the disciples (Acts 1:3), teaching them about the kingdom of God. Then, in their sight, He was taken up into heaven (Acts 1:9). The disciples wanted to cling to the physical Jesus—the one they could touch, see, hear in the flesh. But Jesus teaches them to let go of that desire and receive instead the Holy Spirit, the power that will take them beyond the limits of the flesh. Ezra&apos;s ascension prefigures this: the way forward is not clinging to what is visible and earthly, but accepting what is invisible and eternal. Jesus does not remain in the flesh; He ascends. And His people, like Ezra, are called to "hasten to depart hence" from the preoccupations of the flesh and enter into the reality of the kingdom.',
        },

        {
          kind: 'artwork',
          matchTitle: /ascension|heaven|taken|cloud/i,
          matchArtist: /tissot|fuerst/i,
          caption: '2 Esdras 14:51 — The Ascension of Ezra',
        },

        {
          kind: 'carry',
          html:
            'The world is ending. Not today, perhaps, but certainly. The order you are attached to—your career, your status, your security, your plans—is temporary. You are being called, like Ezra, to hasten your departure from those desires, not in despair but in freedom. What would it mean to hold everything loosely, to live as though you are about to be taken up? That is the faith Ezra learns. That is the witness he becomes.',
        },

        {
          kind: 'reflection',
          id: 'hasten-depart',
          prompt:
            'If you truly believed the world was ending and you were about to be taken up to heaven, what would you stop caring about? What would you finally let go of? Start there.',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Esdras 14',
    quote:
      'A voice came to Ezra from a burning bush, saying, Open thy mouth and drink what I give thee. And when he had drunk, his heart uttered understanding, and wisdom grew in his breast. And Esdras wrote all these things, ninety and four books in forty days. And he was taken up that he might sit beside God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 14 · Study Guide',
  },

  hasHebrew: true,
};
