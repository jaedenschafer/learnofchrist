import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 40 — Joseph in prison. Two royal officials — the butler and the
 * baker — dream while locked in the same dungeon. Joseph interprets. The
 * butler will be lifted up to life in three days; the baker, to death.
 * On the third day, it comes to pass. The butler is restored and forgets
 * Joseph. Two years will pass in silence.
 *
 * A short, tight chapter. The pattern of two men, one lifted up to life
 * and one to death — on the third day — is a resurrection shape that
 * repeats at the cross. Joseph forgotten is one of Scripture&apos;s most
 * relatable images of waiting in obscurity for a help that never comes.
 * At least, not yet.
 */
export const GENESIS_40: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 40,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 13 },
  intros: [
    'Joseph has not disappeared from Potiphar&apos;s house. He has been moved to prison — the captain of the guard&apos;s prison, where he continues to find favor and eventually runs the place. Then two men arrive: Pharaoh&apos;s chief butler and chief baker, both in disgrace, both locked away. Both men dream. And Joseph — the interpreter — is about to learn that accurate words matter far less than accurate timing.',
    'The chapter is 23 verses long and compressed as iron. Two dreams, two interpretations, two outcomes, all hinged on the same small detail: the third day. What happens when interpretations come true? Joseph asks for one thing in return. What happens then will shape the rest of his waiting.',
  ],

  bottomShare: {
    label: 'Share Genesis 40',
    quote:
      'Two men dreamed while imprisoned with Joseph. Joseph interpreted their dreams — one would be restored, one would not. Three days later, both things came to pass. But the one restored forgot the one imprisoned.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 40 · Study Guide',
  },

  sections: [
    /* ─── Genesis 40:1–8 — Two Dreams, One Answer ────────────────────────── */
    {
      ref: 'Genesis 40:1–8',
      title: 'Two Captives, Both Troubled',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass after these things, that the butler of the king of Egypt and his baker had offended their lord the king of Egypt.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Pharaoh was wroth against two of his officers, against the '),
                hg('chief of the butlers', 'c-officials'),
                t(', and against the chief of the bakers.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he put them in ward in the house of the captain of the guard, into the prison, a place where Joseph was bound.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the captain of the guard charged Joseph with them, and he served them: and they continued a season in ward.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And they dreamed a '),
                hy('dream both of them', 'hebrew-chalom'),
                t(', each man his '),
                hy('dream', 'hebrew-chalom'),
                t(' in one night, each man according to the interpretation of his dream, the butler and the baker of the king of Egypt, which were bound in the prison.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Joseph came in unto them in the morning, and looked upon them, and, behold, they were sad.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And he asked Pharaoh&apos;s officers that were with him in the ward of his lord&apos;s house, saying, '),
                hg('Wherefore look ye so sadly to day', 'c-sadness'),
                t('?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And they said unto him, We have dreamed a dream, and there is no '),
                hp('interpreter of it', 'christ-interpreter'),
                t('. And Joseph said unto them, '),
                hg('Do not interpretations belong to God', 'hebrew-pithronim'),
                t('? tell me them, I pray you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-officials',
          html:
            'The Hebrew uses <em>sar</em> — a court officer, a person of standing and access. These are not common prisoners. Each man once had Pharaoh&apos;s ear. Now both sit in the same cell Joseph occupies, and both carry the weight of royal disfavor.',
        },
        {
          kind: 'commentary',
          id: 'c-sadness',
          html:
            'Joseph&apos;s first act is to see them — not their titles, not their status in a world beyond these walls, but their faces this morning. They are sad. The word is simple, specific, and human. Pharaoh&apos;s court is somewhere very far away now.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chalom',
          title: 'Chalom — &ldquo;dream&rdquo;',
          script: 'חָלוֹם',
          translit: '<strong>chalom</strong> · a dream, a vision at night',
          description:
            'Both men have dreamed the same night — not as a coincidence, but as a sign of a word coming. In Scripture, when two or more dream at once, it means the thing is established by God. Joseph knows this before either man speaks a word.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-pithronim',
          title: 'Pithronim — &ldquo;interpretations&rdquo;',
          script: 'פִּתְרֹנִים',
          translit: '<strong>pithronim</strong> · interpretations, unfoldings of hidden meaning',
          description:
            'The Hebrew word carries the sense of <em>unfolding</em> — to open what is closed, to reveal what is hidden. Joseph does not guess. He unfolds what God has sealed inside the dream. The pithron belongs to God alone.',
        },
        {
          kind: 'christ',
          id: 'christ-interpreter',
          title: 'Christ Connection — The Spirit&apos;s Interpretations',
          html:
            'Joseph&apos;s question is one of the Bible&apos;s deepest questions about how God speaks. &ldquo;But the natural man receiveth not the things of the Spirit of God: for they are foolishness unto him; neither can he know them, because they are spiritually discerned&rdquo; (1 Cor. 2:14). Pharaoh&apos;s dream-readers are experts in their craft — but Joseph, the slave and prisoner, has something they do not: the Spirit of God. What looks like a gift of interpretation is actually a gift of discernment. A power not to guess better, but to <em>see</em> what is true.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world of interpreters. Every headline, every social media post, every voice with an opinion frames something we don&apos;t yet understand as if they&apos;ve already unfolded it. But interpretations — real ones — come from somewhere. Joseph names the source straight: <em>Do not interpretations belong to God?</em> This is not about choosing the right expert. It&apos;s about learning to listen for the presence of God&apos;s Spirit underneath what you&apos;re being told. The interpreter you can trust is the one who is actually listening to God, not the one with the loudest voice.',
        },
        {
          kind: 'reflection',
          id: 'gen40-interpreter',
          prompt:
            'When you&apos;re trying to understand something you can&apos;t yet see clearly, where do you usually look for an answer? What would change if you asked God&apos;s Spirit first?',
        },
      ],
    },

    /* ─── Genesis 40:9–15 — The Butler&apos;s Dream ──────────────────────────── */
    {
      ref: 'Genesis 40:9–15',
      title: 'Three Days of Favor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            {
              number: 9,
              spans: [
                t('And the chief butler told his dream to Joseph, and said to him, In my dream, behold, a vine was before me;'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And in the vine were three branches: and it was as though it budded, and her blossoms shot forth; and the clusters thereof brought forth ripe grapes:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And I took the grapes, and pressed them into Pharaoh&apos;s cup, and I gave the cup into Pharaoh&apos;s hand.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Joseph said unto him, This is the interpretation of it: '),
                hy('The three branches', 'hebrew-shlosha'),
                t(' are three days:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Yet within '),
                hg('three days shall Pharaoh lift up thine head', 'c-lift-butler'),
                t(', and restore thee unto thy place: and thou shalt deliver Pharaoh&apos;s cup into his hand, after the former manner when thou wast his butler.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('But think on me when it shall be well with thee, and shew kindness, I pray thee, unto me, and make mention of me unto Pharaoh, and bring me out of this house:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('For indeed I was '),
                hg('stolen away out of the land of the Hebrews', 'c-stolen'),
                t(': and here also have I done nothing that they should put me into the dungeon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hebrew-shlosha',
          html:
            'Three branches. Three days. The dream speaks in a language of numbers, and the language is a promise. The butler&apos;s vine imagery itself is a gift — vines are a symbol of blessing, fertility, the restored kingdom. His dream, unlike the baker&apos;s, is a dream of return.',
        },
        {
          kind: 'commentary',
          id: 'c-lift-butler',
          html:
            'The phrase is <em>nasa&apos; et rosh&apos;cha</em> — literally, "Pharaoh will lift up your head." It appears in the next verses for the baker too, with a crushing difference: his head will be lifted up onto a pole. The same Hebrew verb. Two opposite outcomes. The word that lifts can also cut down.',
        },
        {
          kind: 'commentary',
          id: 'c-stolen',
          html:
            'Joseph&apos;s only ask is not for protection or pardon. It is to be remembered. <em>Think on me</em>. He recounts his own story in whispers: stolen, innocent, locked away. He does not ask the butler to free him — only to tell Pharaoh that he exists, that his case is real, that someone in the palace might listen. It is a prayer disguised as a request.',
        },
        {
          kind: 'carry',
          html:
            'Watch what Joseph does not do. He does not beg. He does not promise the butler anything in return. He simply unfolds the dream, speaks the truth he sees, and then makes one request: remember. There is a dignity in this that is hard to find in desperation. Joseph has spent long enough in obscurity to know the difference between a plea and a name. <em>Think on me.</em> It is the simplest and the hardest prayer when no one remembers you exist.',
        },
        {
          kind: 'reflection',
          id: 'gen40-butler',
          prompt:
            'Joseph asks to be remembered. Is there someone in your life right now who is waiting in obscurity for someone to notice them — or are you that person? What would it mean to really <em>think on them</em> this week?',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph.*prison|prison.*joseph|dungeon/i,
          caption: 'Genesis 40:9–15 · Joseph Interprets the Butler&apos;s Dream',
        },
      ],
    },

    /* ─── Genesis 40:16–19 — The Baker&apos;s Dream ──────────────────────────── */
    {
      ref: 'Genesis 40:16–19',
      title: 'Three Days of Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            {
              number: 16,
              spans: [
                t('When the chief baker saw that the interpretation was good, he said unto Joseph, I also was in my dream, and, behold, I had three baskets of white bread upon my head;'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And in the uppermost basket there was of all manner of '),
                hy('bakemeats for Pharaoh', 'c-bakemeats'),
                t('; and the birds did eat them out of the basket upon my head.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Joseph answered and said, This is the interpretation thereof: '),
                hy('The three baskets', 'hebrew-shlosha-baker'),
                t(' are three days:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Yet within '),
                hg('three days shall Pharaoh lift up thy head from off thee', 'c-lift-baker'),
                t(', and shall hang thee on a tree; and the birds shall eat thy flesh.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bakemeats',
          html:
            'The baker&apos;s dream mirrors the butler&apos;s in structure — three containers, three days, the fulfillment of work. But where the butler&apos;s grapes are transformed and pressed into service, the baker&apos;s bread is broken down, consumed by birds. The dream is written in the same language, but the meaning is inverted. The same numbers mean opposite things.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shlosha-baker',
          title: 'Shlosha — &ldquo;three&rdquo;',
          script: 'שְׁלֹשָׁה',
          translit: '<strong>shlosha</strong> · three · the number of resurrection and judgment',
          description:
            'Three days is the period of death and rising in Scripture. Hosea 6:2 speaks of resurrection: "After two days will he revive us: in the third day he will raise us up." Here, three days is the waiting period before both outcomes are sealed — one to life, one to judgment. The same number carries both possibilities. The outcome rests not in the time, but in what the time reveals.',
        },
        {
          kind: 'commentary',
          id: 'c-lift-baker',
          html:
            'The cruelty of the language here is deliberate. <em>Lift up thy head from off thee</em> — the phrasing is unbearable. Joseph speaks it plainly, without softening. The butler&apos;s restoration and the baker&apos;s death both come three days hence. Both are lifted up. One, to power. One, to the tree.',
        },
        {
          kind: 'christ',
          id: 'christ-two-men',
          title: 'Christ Connection — Two Men, One Third Day',
          html:
            'The pattern Joseph describes repeats exactly at the cross. Two men hang beside Jesus. One is a thief called to paradise; the other, a thief condemned. "The Lord said unto him, Verily I say unto thee, To day shalt thou be with me in paradise" (Luke 23:43). Three days later, the one lifted up to death was lowered into the earth, but the one who spoke the word rose on the third day. The same verb — <em>nasa&apos;</em>, to be lifted up — and the same day, three, opens into opposite eternities. Joseph&apos;s prison shadows the cross.',
        },
        {
          kind: 'carry',
          html:
            'This is the part of the story where the dream-giver becomes the one who names what will be. Joseph does not soften the baker&apos;s fate. He tells him plainly what he will suffer. There is a strange mercy in this — not false hope, not a soft lie, but the truth spoken with the reverence it deserves. When you are walking toward something you cannot change, the last thing you need is someone pretending it is not happening. You need someone who sees it whole and speaks it clear.',
        },
        {
          kind: 'reflection',
          id: 'gen40-baker',
          prompt:
            'Has anyone ever told you something true and hard, not to hurt you but to prepare you? What did that honesty cost them — and what did it cost you?',
        },
      ],
    },

    /* ─── Genesis 40:20–23 — The Third Day Arrives ────────────────────────── */
    {
      ref: 'Genesis 40:20–23',
      title: 'The Word Made Flesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            {
              number: 20,
              spans: [
                t('And it came to pass the third day, which was Pharaoh&apos;s '),
                hy('birthday', 'hebrew-yom-huledet'),
                t(', that he made a feast unto all his servants: and he '),
                hg('lifted up the head of the chief butler', 'c-birthday-word'),
                t(' and of the chief baker among his servants.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And he restored the chief butler unto his butlership: and he gave the cup into Pharaoh&apos;s hand:'),
              ],
            },
            {
              number: 22,
              spans: [
                t('But he hanged the chief baker: as Joseph had said unto them.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Yet did not the chief butler '),
                hg('remember Joseph', 'c-forget'),
                t(', but '),
                hg('forgat him', 'c-forget'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hebrew-yom-huledet',
          html:
            'Pharaoh&apos;s birthday. The day of his own life being counted and celebrated. But in this chapter, a birthday becomes a day of judgment. Mark 6:21–29 will echo this — another birthday feast where a life is taken rather than given. In Scripture, birthdays are ambivalent. The day you are celebrated is also the day the ledger is kept.',
        },
        {
          kind: 'commentary',
          id: 'c-birthday-word',
          html:
            'The third day. Not a day of waiting any longer, but the day when the word Joseph spoke becomes the thing Pharaoh does. The dreams are fulfilled to the letter. Joseph&apos;s interpretation is not a guess or a reading — it is a knowing. The word he speaks is the word that happens.',
        },
        {
          kind: 'commentary',
          id: 'c-forget',
          html:
            'The Hebrew says it twice in the same verse, like a hammer: "yet did not the chief butler remember Joseph, but forgat him." It is not a gentle forgetting. It is an erasure. Joseph asked one thing — <em>think on me</em> — and the butler, his fortune restored, walks out and closes the door. Two years will pass before Joseph hears the butler&apos;s name again.',
        },
        {
          kind: 'carry',
          html:
            'This is the loneliest verse in Joseph&apos;s story so far. He has been accurate. He has been faithful. He has made one small request — that someone in power would remember him, would speak his name to Pharaoh, would be his voice when he had no other. And he watches that person forget. If you have ever trusted someone with your story and watched them leave it behind, you know this weight. You know how to wait in a place where no one is coming. You know how accurate prayers feel when they are not answered. Genesis 40 does not end with rescue. It ends with forgetting. And Joseph is still in prison.',
        },
        {
          kind: 'reflection',
          id: 'gen40-forget',
          prompt:
            'When has something you asked for been delayed or forgotten? What did that teach you about waiting, and about the kind of God who waits alongside you?',
        },
        {
          kind: 'artwork',
          matchTitle: /dream|interpret|vision/i,
          caption: 'Genesis 40:20–23 · The Third Day Fulfilled',
        },
      ],
    },
  ],
};
