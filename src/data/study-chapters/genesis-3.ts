import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 3 - the chapter the entire Bible answers.
 *
 * Three actors, three temptations, three curses, and the first promise of
 * a Saviour. This chapter is the door every later book of the Bible walks
 * through, and it ends with one verse - Genesis 3:15 - that scholars have
 * called the protoevangelion: the gospel before the gospel.
 */
export const GENESIS_3: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 3,

  estimatedMinutes: { beginner: 10, intermediate: 14, deep: 19 },
  opener: {
    matchTitle: /Temptation of Eve by/i,
    caption: 'Genesis 3',
  },
  intros: [
    'Two chapters in, the Bible has shown you a Maker, a garden, a man, a woman, and a single boundary. Genesis 3 is the page where everything turns. A voice not God&apos;s makes its first appearance. A small permission becomes a great suspicion. The fruit goes to a mouth, and the world bends.',
    'And yet - read the chapter carefully - God does not respond to humanity&apos;s rebellion the way a frightened tyrant would. He walks. He calls. He asks. He clothes them with His own hands before sending them out. And in the middle of the curses on the serpent, He drops one promise[res:intertextual-protoevangelium] that the rest of the Bible will spend two thousand years unpacking: <em>her seed shall bruise thy head.</em>',
  ],

  bottomShare: {
    label: 'Share Genesis 3',
    quote:
      'A serpent, a fruit, fig leaves, and a curse - and inside the curse, the first promise of a Saviour: the Seed of the woman who would crush the serpent&apos;s head. Genesis 3 is the page the rest of the Bible answers.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 3 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-3',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 3 · Hebrew + Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.3',
      description: 'Hebrew text with Rashi, Ibn Ezra, and medieval interpreters on the Fall and its consequences.',
    },
    {
      id: 'bibleodyssey-serpent-fall',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Fall and Original Sin',
      url: 'https://www.bibleodyssey.org/articles/the-fall-and-original-sin/',
      description: 'SBL article on humanity&apos;s choice and the theological shape of sin and death in Scripture.',
    },
    {
      id: 'intertextual-protoevangelium',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Genesis 3:15 (Protoevangelium) traced forward',
      url: 'https://intertextual.bible/text/genesis-3.15',
      description: 'Links the first promise of redemption forward to Christ across NT interpretation.',
    },
  ],

  sections: [
    /* ─── Genesis 3:1-5 - The Voice of the Serpent ───────────────────── */
    {
      ref: 'Genesis 3:1-5',
      title: 'The Voice of the Serpent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('Now the '),
                hy('serpent', 'hebrew-nakhash'),
                t(' was more '),
                hy('subtil', 'hebrew-arum'),
                t(' than any beast of the field which the LORD God had made. And he said unto the woman, '),
                hg('Yea, hath God said, Ye shall not eat of every tree of the garden?', 'c-hath-god-said'),
              ],
            },
            {
              number: 2,
              spans: [t('And the woman said unto the serpent, We may eat of the fruit of the trees of the garden:')],
            },
            {
              number: 3,
              spans: [
                t('But of the fruit of the tree which is in the midst of the garden, God hath said, Ye shall not eat of it, '),
                hg('neither shall ye touch it', 'c-touch-it'),
                t(', lest ye die.'),
              ],
            },
            {
              number: 4,
              spans: [t('And the serpent said unto the woman, Ye shall not surely die:')],
            },
            {
              number: 5,
              spans: [
                t('For God doth know that in the day ye eat thereof, then your eyes shall be opened, and ye shall be as '),
                hp('gods, knowing good and evil', 'christ-true-image'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nakhash',
          title: 'Nakhash - &ldquo;serpent&rdquo;',
          script: 'נָחָשׁ',
          translit: '<strong>nakhash</strong> · serpent; the verb means to hiss, to whisper, to enchant',
          description:
            'The same root means &ldquo;to whisper&rdquo; and &ldquo;to practice divination.&rdquo; The serpent is not depicted as a wild predator but as a smooth, low voice - the sort of voice that doesn&apos;t shout, doesn&apos;t threaten, only whispers a question. The most dangerous lies in scripture are almost always quiet ones.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-arum',
          title: 'Arum - &ldquo;subtil, shrewd&rdquo;',
          script: 'עָרוּם',
          translit: '<strong>arum</strong> · cunning, crafty (a wordplay with <em>arumim</em>, &ldquo;naked,&rdquo; in 2:25)',
          description:
            'The Hebrew puns. The man and woman were just called <em>arumim</em> - naked, exposed, vulnerable. The serpent is <em>arum</em> - covered, sly, hiding what it knows. Innocence stands across from cunning, and cunning makes the first move.',
        },
        {
          kind: 'commentary',
          id: 'c-hath-god-said',
          html:
            'The serpent does not start with a lie. It starts with a question. <em>Hath God said?</em> The first weapon ever used against humanity was suspicion of God&apos;s word. Notice the distortion: God said &ldquo;of every tree thou mayest freely eat&rdquo; (2:16). The serpent inverts it - &ldquo;ye shall not eat of every tree?&rdquo; - turning a vast yes into a stingy no. Every temptation since has worked the same way. Make the boundary feel bigger than the gift[res:sefaria-genesis-3][res:bibleodyssey-serpent-fall].',
        },
        {
          kind: 'commentary',
          id: 'c-touch-it',
          html:
            'Eve adds something God never said: <em>neither shall ye touch it.</em> God&apos;s actual command was about eating, not touching. When we feel cornered by a temptation we tend to make the rule bigger than it really is - and the bigger we make it, the more arbitrary it feels, and the easier it is to throw the whole thing away. Eve isn&apos;t wicked here; she is doing what we all do. Inflating the rule is one of the first steps toward breaking it.',
        },
        {
          kind: 'christ',
          id: 'christ-true-image',
          title: 'Christ Connection - Already Like Him',
          html:
            'The serpent&apos;s pitch is built on a lie within a lie. It promises the woman she will <em>be like God</em> - but Genesis 1 has already told us she <em>was made</em> in the image of God. She is reaching to grab what she already had. Centuries later, Paul writes of Christ: &ldquo;Who, being in the form of God, thought it not robbery to be equal with God&rdquo; (Phil. 2:6). Where Eve grasped at a likeness she already possessed, Christ refused to grasp at a likeness that was already His. The whole gospel hinges on that opposite movement.',
        },
        {
          kind: 'reflection',
          id: 'gen3-suspicion',
          prompt:
            "What 'hath God said?' is in your head right now - a place where you suspect God of being stingy with you? What does He actually say in scripture about that part of your life?",
        },
      ],
    },

    /* ─── Genesis 3:6-7 - The Eyes of Them Both Were Opened ──────────── */
    {
      ref: 'Genesis 3:6-7',
      title: 'The Eyes of Them Both Were Opened',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 6,
              spans: [
                t('And when the woman saw that the tree was '),
                hg('good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise', 'c-three-temptations'),
                t(', she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the eyes of them both were opened, and they knew that they were '),
                hp('naked', 'christ-clothes'),
                t('; and they sewed fig leaves together, and made themselves aprons.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-three-temptations',
          html:
            'John borrows this triple a thousand years later: &ldquo;the lust of the flesh, and the lust of the eyes, and the pride of life&rdquo; (1 John 2:16). The temptation that overthrows Eden is not exotic. It is the same template that has worked on every human heart since: <em>good for food</em> (the body), <em>pleasant to the eyes</em> (the senses), <em>desired to make one wise</em> (the ego). The first sin is unremarkable. That&apos;s the point.',
        },
        {
          kind: 'commentary',
          id: 'c-with-her',
          html:
            'Three small words have stopped careful readers for centuries: <em>with her.</em> Adam was there. He was not off in another part of the garden being deceived; he was beside her, listening to the serpent, watching the conversation, silent. The first sin was not only Eve&apos;s reach for the fruit; it was Adam&apos;s refusal to speak when the woman built from his side was being lied to. Sometimes the loudest sin in a room is what is not being said.',
        },
        {
          kind: 'christ',
          id: 'christ-clothes',
          title: 'Christ Connection - Fig Leaves and Skins',
          html:
            'The first thing humanity does in our broken state is invent religion: we sew fig leaves to cover our shame. By the end of the chapter, God will replace those leaves with garments of skin (3:21) - coverings that cost an animal&apos;s life. From the very first verse of human failure, the Bible quietly insists on the pattern: shame cannot be hidden by anything we make; it can only be covered by something God provides, at the cost of life. The book ends with the saints clothed in robes washed in the blood of the Lamb (Rev. 7:14). The fig leaves never did the job. The Lamb does.',
        },
        {
          kind: 'carry',
          html:
            'The hardest thing about shame is how quickly it goes to work. The instant the man and woman saw themselves, they were sewing. We do the same - covering, performing, defending, before we even admit anything is wrong. Notice the next time you reach for fig leaves of any kind, and let yourself stop sewing for one minute. The God who walks in the garden in the next verse is not coming to shame you. He is coming with a better covering.',
        },
        {
          kind: 'reflection',
          id: 'gen3-fig-leaves',
          prompt:
            'What are your fig leaves - the things you reach for first when you feel exposed? Productivity, humor, anger, scrolling? What would it look like to let God hand you something better instead?',
        },
      ],
    },

    /* ─── Genesis 3:8-13 - Where Art Thou? ───────────────────────────── */
    {
      ref: 'Genesis 3:8-13',
      title: 'Where Art Thou?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 8,
              spans: [
                t('And they heard the voice of the LORD God '),
                hg('walking in the garden in the cool of the day', 'c-walking'),
                t(': and Adam and his wife hid themselves from the presence of the LORD God amongst the trees of the garden.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the LORD God called unto Adam, and said unto him, '),
                hp('Where art thou?', 'christ-seeking'),
              ],
            },
            {
              number: 10,
              spans: [t('And he said, I heard thy voice in the garden, and I was afraid, because I was naked; and I hid myself.')],
            },
            {
              number: 11,
              spans: [t('And he said, Who told thee that thou wast naked? Hast thou eaten of the tree, whereof I commanded thee that thou shouldest not eat?')],
            },
            {
              number: 12,
              spans: [
                t('And the man said, '),
                hg('The woman whom thou gavest to be with me, she gave me of the tree, and I did eat', 'c-blame'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [t('And the LORD God said unto the woman, What is this that thou hast done? And the woman said, The serpent beguiled me, and I did eat.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-walking',
          html:
            'God walks. The God who spoke galaxies into being has been on foot in this garden, in the cool of the day, with the people He made. Whatever Eden was, it was the kind of place where God Himself takes evening walks with friends. The tragedy of the chapter is not that God is suddenly distant. It is that we are the ones who hide.',
        },
        {
          kind: 'commentary',
          id: 'c-blame',
          html:
            'The first conversation between God and broken humanity is a chain of blame. Adam blames the woman - and behind her, God Himself: <em>the woman whom thou gavest me.</em> Eve blames the serpent. Nobody yet says the simple sentence the rest of the Bible will be teaching us to say: <em>I sinned.</em> Genesis 3 ends with a fall, but it is only the first chapter of a much longer fall, the long human habit of pointing somewhere else.',
        },
        {
          kind: 'christ',
          id: 'christ-seeking',
          title: 'Christ Connection - God Who Comes Looking',
          html:
            '&ldquo;Where art thou?&rdquo; is not a question of geography. God knows where Adam is. The question is the first move of grace in human history. Before any curse, before any consequence, God comes to find the people who hid from Him. Centuries later, Jesus tells His disciples that He is the Son of Man come &ldquo;to seek and to save that which was lost&rdquo; (Luke 19:10). Christianity does not begin with humanity climbing toward God. It begins with God walking through the garden, calling our names, finding us behind the trees we are crouching behind, and not letting us stay there.',
        },
        {
          kind: 'carry',
          html:
            'Whatever you have done today, however far behind the trees you have crawled, the first move God makes toward broken people is not a thunderclap. It is a question. <em>Where art thou?</em> Not because He doesn&apos;t know - because He wants you to. Tell Him where you are.',
        },
        {
          kind: 'reflection',
          id: 'gen3-where',
          prompt:
            "If God asked you, in your honest voice, 'Where art thou?' - what would you actually answer this morning?",
        },
      ],
    },

    /* ─── Genesis 3:14-15 - The First Promise ────────────────────────── */
    {
      ref: 'Genesis 3:14-15',
      title: 'The First Promise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 14,
              spans: [
                t('And the LORD God said unto the serpent, Because thou hast done this, thou art cursed above all cattle, and above every beast of the field; upon thy belly shalt thou go, and dust shalt thou eat all the days of thy life:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And I will put enmity between thee and the woman, and between thy seed and '),
                hp('her seed', 'christ-protoevangelion'),
                t('; '),
                hp('it shall bruise thy head', 'christ-protoevangelion'),
                t(', and thou shalt bruise his heel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-curse-on-serpent',
          html:
            'God begins with the serpent. Notice He does not ask the serpent any questions. The deceiver is sentenced first; the deceived will be heard. Even the order of justice in this chapter is merciful - God interrogates the people He still loves and condemns only the enemy.',
        },
        {
          kind: 'christ',
          id: 'christ-protoevangelion',
          title: 'Christ Connection - The Gospel Before the Gospel',
          html:
            'The Church Fathers called Genesis 3:15 the <em>protoevangelion</em> - the first announcement of the gospel. In the very middle of the curse on the serpent, God speaks of a future child - &ldquo;her seed&rdquo; - who will crush the serpent&apos;s head, and be wounded in the process. The whole rest of the Bible is the slow unveiling of who that child is. Paul names Him in Galatians 4:4: &ldquo;When the fulness of the time was come, God sent forth his Son, made of a woman.&rdquo; John shows him at the end: &ldquo;the great dragon was cast out, that old serpent, called the Devil, and Satan&rdquo; (Rev. 12:9). The first sermon ever preached - preached by God Himself to a snake - is about the Cross.',
        },
        {
          kind: 'carry',
          html:
            'The first announcement of the gospel was not made in church. It was made in a garden, in the middle of a curse, to people who had just betrayed God. Whatever you have done, the gospel comes to you in the same place He met them: at the bottom of your worst day, with a promise that does not depend on you keeping anything.',
        },
        {
          kind: 'reflection',
          id: 'gen3-promise',
          prompt:
            'When was the last time you heard a promise of God in the middle of bad news in your life? What would change if you read your bad news for the promise tucked inside it?',
        },
      ],
    },

    /* ─── Genesis 3:16-19 - Curses ───────────────────────────────────── */
    {
      ref: 'Genesis 3:16-19',
      title: 'Thorns, Pain, and Sweat',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 16,
              spans: [
                t('Unto the woman he said, '),
                hg('I will greatly multiply thy sorrow and thy conception', 'c-woman-curse'),
                t('; in sorrow thou shalt bring forth children; and thy desire shall be to thy husband, and he shall rule over thee.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And unto Adam he said, Because thou hast hearkened unto the voice of thy wife, and hast eaten of the tree, of which I commanded thee, saying, Thou shalt not eat of it: cursed is the '),
                hy('ground', 'hebrew-adamah-cursed'),
                t(' for thy sake; in sorrow shalt thou eat of it all the days of thy life;'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Thorns also and thistles shall it bring forth to thee; and thou shalt eat the herb of the field;'),
              ],
            },
            {
              number: 19,
              spans: [
                t('In the sweat of thy face shalt thou eat bread, till thou return unto the ground; for out of it wast thou taken: for '),
                hp('dust thou art, and unto dust shalt thou return', 'christ-second-adam-3'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-woman-curse',
          html:
            'The curses are not arbitrary punishments; they are the natural shape of life lived on the wrong side of communion with God. The woman&apos;s gift of bringing life will now hurt. The man&apos;s vocation of cultivating a garden will now resist him. The two halves of the human couple will now strain against each other. Notice the careful framing: God does not curse the man and the woman as He cursed the serpent. He describes what their world will now feel like.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-adamah-cursed',
          title: 'Adamah - &ldquo;ground&rdquo;',
          script: 'אֲדָמָה',
          translit: '<strong>adamah</strong> · the same word from which Adam took his name',
          description:
            'The wordplay from chapter 2 returns and turns dark. The man (<em>adam</em>) was made from the ground (<em>adamah</em>). Now the ground itself is cursed for his sake. There is no part of human existence - not body, not work, not relationship, not the very dirt under the feet - that the Fall does not touch.',
        },
        {
          kind: 'christ',
          id: 'christ-second-adam-3',
          title: 'Christ Connection - Thorns and Sweat for the Last Adam',
          html:
            'Notice what the second Adam wears in His own garden. A crown of <em>thorns</em> on His head - the curse of Genesis 3:18 placed where it could do its worst. <em>Sweat</em> running down His face in Gethsemane, &ldquo;great drops of blood falling down to the ground&rdquo; (Luke 22:44) - the curse of 3:19 absorbed by the only one who didn&apos;t earn it. The thorns of Adam&apos;s curse become the crown of Christ&apos;s mercy. Every brokenness named in this chapter becomes something Jesus carries.',
        },
        {
          kind: 'carry',
          html:
            'The pain in your work, your body, your relationships is not God&apos;s anger at you. It is the world you and I were born into - a world east of Eden, where everything good comes mixed with thorns. And the same God who described it for Adam stepped into it Himself, wore the thorns, sweat the blood, and is at work to give you back a garden. The curses are not the last word.',
        },
        {
          kind: 'reflection',
          id: 'gen3-thorns',
          prompt:
            'Where in your life is a thorn pressing in right now? What might it look like to bring it to Jesus rather than carry it alone?',
        },
      ],
    },

    /* ─── Genesis 3:20-24 - Out of Eden ──────────────────────────────── */
    {
      ref: 'Genesis 3:20-24',
      title: 'Out of Eden',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 20,
              spans: [
                t('And Adam called his wife&apos;s name '),
                hg('Eve', 'c-eve-name'),
                t('; because she was the mother of all living.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Unto Adam also and to his wife did the LORD God '),
                hp('make coats of skins, and clothed them', 'christ-coats'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the LORD God said, Behold, the man is become as one of us, to know good and evil: and now, lest he put forth his hand, and take also of '),
                hp('the tree of life', 'christ-tree-2'),
                t(', and eat, and live for ever:'),
              ],
            },
            {
              number: 23,
              spans: [t('Therefore the LORD God sent him forth from the garden of Eden, to till the ground from whence he was taken.')],
            },
            {
              number: 24,
              spans: [
                t('So he drove out the man; and he placed at the east of the garden of Eden '),
                hy('Cherubims', 'hebrew-cherubim'),
                t(', and a flaming sword which turned every way, to keep the way of the tree of life.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eve-name',
          html:
            'Look carefully at what Adam does in the middle of the curse. He names his wife <em>Eve</em> - &ldquo;life-giver&rdquo; - because she would be the mother of all living. The first man, in the worst hour of his life, chooses an act of hope. He does not name her after the death they have just earned. He names her after the life that will come through her. The promise of 3:15 is already starting to do its work.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-cherubim',
          title: 'Cherubim - &ldquo;guardians of holy space&rdquo;',
          script: 'כְּרוּבִים',
          translit: '<strong>k&apos;ruvim</strong> · winged guardian beings',
          description:
            'The cherubim will reappear at the entrance of the tabernacle (Ex. 26:31) and embroidered into the curtain of the holy of holies. Eden was the first holy place; from now on every place where God dwells will be guarded the same way. When Jesus dies, that curtain - the one with the cherubim on it - is torn from top to bottom (Matt. 27:51). The guarded way is open again.',
        },
        {
          kind: 'christ',
          id: 'christ-coats',
          title: 'Christ Connection - Clothed by God',
          html:
            'God did not leave them in their fig leaves. He made coats of skins for the people who had just hurt Him, and dressed them with His own hands. An animal had to die for that. The first death in the Bible is not a punishment; it is a covering. From this verse forward the pattern is set - sin covered by the death of an innocent - until the Lamb finally appears whom John sees and announces: &ldquo;Behold the Lamb of God, which taketh away the sin of the world&rdquo; (John 1:29).',
        },
        {
          kind: 'christ',
          id: 'christ-tree-2',
          title: 'Christ Connection - The Tree of Life Reopened',
          html:
            'The way to the tree of life is barred. It stays barred for the entire Old Testament. On the last page of the Bible the way is opened again: &ldquo;On either side of the river, was there the tree of life, which bare twelve manner of fruits&rdquo; (Rev. 22:2). Between Genesis 3 and Revelation 22 stands a tree on a hill outside Jerusalem - the tree where the second Adam was lifted up. It is the only way back to the first Tree.',
        },
        {
          kind: 'carry',
          html:
            'Every sad story in human history started with the man and woman walking out of Eden, eastward. Every story of grace points the same way home. The God who clothed them did not stop loving them when they walked out the gate. He went with them. He is going with you too.',
        },
        {
          kind: 'reflection',
          id: 'gen3-east-of-eden',
          prompt:
            'What part of your life feels east of Eden right now - outside the place you wish you were? Where can you ask the God who clothes broken people to walk with you, in that exact place, today?',
        },
      ],
    },
  ],
};
