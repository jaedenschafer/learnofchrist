import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 John 4 — God Is Love
 *
 * The chapter where John anchors faith to the incarnation. Test the spirits—does it
 * confess Christ come in the flesh? And then unfolds the paradox: God is love, love
 * is of God, and perfect love casts out fear. Twice John declares "God is love"
 * (vv. 8, 16), and the whole chapter is a meditation on what that costs and what it
 * demands of us.
 */
export const FIRST_JOHN_4: RichChapterContent = {
  bookSlug: '1-john',
  bookName: '1 John',
  chapter: 4,

  intros: [
    'John now approaches love from a different angle. Love is not merely a commandment we obey. It flows from the nature of God Himself. God is love. This is not metaphor or poetic language. It is the deepest truth about God. The universe is not fundamentally ruled by force, chance, or law, but by love. And those who know God are drawn into that love, becoming lovers themselves.',
    'But John first addresses a threat: how to discern true and false prophets. Many deceivers are in the world. But there is a test: do they confess Jesus Christ as Lord? Do they affirm the incarnation—that God became flesh? Those who deny that God became flesh deny the essence of the gospel. Test the spirits, beloved. Know who you are listening to. Then John returns to love: if God is love, and God sent His only begotten Son, then we must love one another. And perfect love casts out fear.',
  ],

  bottomShare: {
    quote: 'God is love. Every one that loveth is born of God, and knoweth God. God sent his only begotten Son into the world, that we might live through him. Perfect love casteth out fear. We love him, because he first loved us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 John 4 · Study Guide',
  },

  sections: [
    /* ─── 1 John 4:1–3 — Try the Spirits ──────────────────────────────── */
    {
      ref: '1 John 4:1–3',
      title: 'Try the Spirits',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              1,
              t('Beloved, believe not every spirit, but '),
              hp('try the spirits whether they are of God', 'c-test-spirits'),
              t(': because many false prophets are gone out into the world.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-test-spirits',
          html:
            'John calls believers to active discernment. Not every voice claiming spiritual authority speaks for God. The world is full of false prophets—teachers whose words sound spiritual but lead away from truth. Testing is not hostile or suspicious. It is wisdom. When gold is tested, its purity is revealed. When a spiritual teacher is tested, their true allegiance shows.',
        },
        {
          kind: 'greek',
          id: 'greek-dokimazo',
          title: 'Dokimazo — &ldquo;To Test&rdquo;',
          script: 'δοκιμάζω',
          translit: '<strong>dokimazo</strong> · to examine, test, discern; to approve after testing',
          description:
            'The word carries the sense of proving by trial. A goldsmith uses heat to test metal. A judge uses evidence to test a claim. Here, the test is Scripture—does this teaching align with what you know of Christ? Does it honor the incarnation?',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              2,
              t('Hereby know ye the Spirit of God: '),
              hp('Every spirit that confesseth that Jesus Christ is come in the flesh', 'c-incarnation'),
              t(' is of God:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-incarnation',
          html:
            'The test is fixed: Does this teacher confess that Jesus Christ came in the flesh? This is not a minor detail. To deny the incarnation is to deny the gospel itself. Some in John&apos;s time denied that God could truly become human—too degrading, they thought, for the divine. Others denied that Jesus was truly God. Both are false spirits. The true Spirit of God says: Jesus is fully God and fully human. God became flesh. The Word pitched His tent among us.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              3,
              t('And every spirit that confesseth not that Jesus Christ is come in the flesh is not of God: and this is that spirit of antichrist, whereof ye have heard that it should come; and even now already is it in the world.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-antichrist-denial',
          html:
            'To deny the incarnation is to align with the spirit of antichrist. The prefix anti- means both "against" and "instead of"—the spirit of antichrist works against Christ and proposes a substitute Christ, a false gospel, a different Jesus. John says this deception is already at work. It did not wait for a future moment. False prophets are active now, in John&apos;s own time and in ours.',
        },
        {
          kind: 'carry',
          html:
            'You have a responsibility to think. Faith is not gullibility. The command to test the spirits is a command to read, to listen carefully, to ask hard questions. What does this teaching say about Jesus? Does it honor His incarnation? Does it make room for His full humanity and full divinity? If not, step back. The safety of your soul depends on the truth of Jesus.',
        },
        {
          kind: 'reflection',
          id: 'test-spirits',
          prompt:
            'What is one voice or teaching you encounter regularly? By the test John gives, does it confess Jesus Christ come in the flesh? What would it mean for you to apply this test more carefully?',
        },
      ],
    },

    /* ─── 1 John 4:4–6 — Greater Is He That Is in You ────────────────── */
    {
      ref: '1 John 4:4–6',
      title: 'Greater Is He That Is in You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              4,
              t('Ye are of God, little children, and have '),
              hp('overcome them', 'c-overcome'),
              t(': because greater is he that is in you, than he that is in the world.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-overcome',
          html:
            'John addresses the believers as "little children"—a term of deep affection. And he tells them they have already overcome. Not that they will overcome in the future, but that they have. The battle is not uncertain. The false spirits and their lies have already been defeated. The victory is decided. Your confidence should rest on this: the Spirit in you is greater than any false spirit at work in the world.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              5,
              t('They are of the world: therefore speak they of the world, and the world heareth them.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-of-world',
          html:
            'False prophets speak to the desires of the world—comfort without cost, authority without accountability, spirituality without sacrifice. The world listens because they hear only what they want to hear. But you have been called out of this pattern. You have been reborn.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              6,
              t('We are of God: he that knoweth God heareth us; he that is not of God heareth not us. Hereby know we the spirit of truth, and the spirit of error.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-spirit-truth',
          html:
            'There are two spirits at work—the spirit of truth and the spirit of error. A person who knows God will recognize God&apos;s truth when they hear it. They may not agree with everything, but they will sense the presence of the Holy Spirit. A person still enslaved to error will reject the truth, even when it is spoken plainly. This is not a failure of the speaker. It is the current condition of the listener&apos;s heart.',
        },
        {
          kind: 'carry',
          html:
            'You need not fear the false voices in the world. Greater is He that is in you. The Spirit of truth dwells in you. You have already overcome. This does not mean you will never be tempted or confused. But it means the outcome is certain. Your part is to stay connected to the truth, to test what you hear, and to trust the Spirit in you to guide you home.',
        },
        {
          kind: 'reflection',
          id: 'greater-in-you',
          prompt: 'When have you sensed the Spirit in you at work? How does the promise "greater is he that is in you" comfort you in times of doubt?',
        },
      ],
    },

    /* ─── 1 John 4:7–8 — God Is Love ──────────────────────────────────── */
    {
      ref: '1 John 4:7–8',
      title: 'God Is Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              7,
              t('Beloved, let us '),
              hp('love one another', 'c-love-another'),
              t(': for love is of God; and every one that loveth is born of God, and knoweth God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-love-another',
          html:
            'This is not sentiment. Love is an act. John calls believers to do it—to love one another actively, concretely, in the face of false prophets and a world that does not understand. And the foundation is this: love originates in God. You cannot manufacture love through willpower alone. Love grows from knowing that you are loved by God, and being reborn into His nature.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              8,
              t('He that loveth not knoweth not God; for '),
              hp('God is love', 'c-god-is-love'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-god-is-love',
          html:
            'John makes the stunning claim: God is love. Not "God loves" (which is true) but "God <em>is</em> love"—love is His fundamental nature, His essence. All other divine attributes flow from this. His justice is love protecting what is good. His mercy is love extending forgiveness to the broken. His holiness is love refusing to compromise with what destroys. His wrath is love opposed to evil. To know God is to be drawn into the nature of love itself.',
        },
        {
          kind: 'greek',
          id: 'greek-agape',
          title: 'Agapē — &ldquo;Love&rdquo;',
          script: 'ἀγάπη',
          translit: '<strong>agape</strong> · covenant love, self-giving love, divine love',
          description:
            'Agapē is not romantic love or friendship. It is the love that chooses the beloved&apos;s good even at cost to itself. It is the love that dies. It is the love that forgives. It is God&apos;s love, and when John says God is agapē, he is saying God is self-giving, sacrificial, irrevocable.',
        },
        {
          kind: 'christ',
          id: 'christ-god-is-love',
          title: 'Christ Connection — God Is Love Incarnate',
          html:
            'In Jesus, you see what "God is love" looks like in human form. He washed disciples&apos; feet. He ate with tax collectors. He healed the sick and touched the untouchable. He spent Himself for others. And finally, He laid down His life. Love is not a theory God holds. Love is a life God lived. Love is the cross. When you look at Jesus, you are looking at the character of God poured into flesh and blood.',
        },
        {
          kind: 'carry',
          html:
            'You are born of God only if you love. This is not a reward you earn for being good. It is the sign that you have been reborn. Just as a child bears the genetic markers of their parents, a child of God bears the mark of love. If you find yourself incapable of love, unwilling to extend kindness, closed against forgiveness, the first step is not to try harder. It is to ask God to remind you how deeply you are loved.',
        },
        {
          kind: 'reflection',
          id: 'god-is-love',
          prompt: 'What does "God is love" mean to you in a concrete way? When have you experienced His love most clearly?',
        },
      ],
    },

    /* ─── 1 John 4:9–10 — He Sent His Only Begotten Son ────────────────── */
    {
      ref: '1 John 4:9–10',
      title: 'He Sent His Only Begotten Son',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              9,
              t('In this was manifested the love of God toward us, because that God sent his only begotten Son into the world, that we might live through him.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-only-begotten',
          html:
            'How do you know God is love? Look at what He did. He sent His only begotten Son. Not a servant. Not an angel. Not a prophet. His Son. The One He loved with the fullness of divine love. And He sent Him not to a palace or to the righteous, but to a world of sinners and rebels. He sent Him to die.',
        },
        {
          kind: 'greek',
          id: 'greek-monogenes',
          title: 'Monogenēs — &ldquo;Only Begotten&rdquo;',
          script: 'μονογενής',
          translit: '<strong>monogenes</strong> · unique, only, one of a kind',
          description:
            'Not merely "only" but "one of a kind." Jesus is the unique Son of God. There is no one else like Him. And this One—irreplaceable, incomparable—was sent into the world for you. The cost of love could not be higher.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              10,
              t('Herein is love, not that we loved God, but that he loved us, and sent his Son to be the '),
              hy('propitiation', 'c-propitiation'),
              t(' for our sins.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-propitiation',
          html:
            'Our love for God is thin and failing. We forget Him. We turn away. We break covenant. But God&apos;s love is not conditional on ours. He loved us not because we deserved it, but because He is love. And He sent His Son to be the propitiation—the sacrifice that turns away wrath and makes peace between a holy God and sinful people.',
        },
        {
          kind: 'greek',
          id: 'greek-hilasmos',
          title: 'Hilasmos — &ldquo;Propitiation&rdquo;',
          script: 'ἱλασμός',
          translit: '<strong>hilasmos</strong> · atonement, appeasement, the sacrifice that restores peace',
          description:
            'In the Old Testament, the high priest would enter the Holy of Holies once a year to offer a sacrifice on the mercy seat for the sins of all Israel. Jesus is that sacrifice forever. He is the one who restores peace between God and humanity.',
        },
        {
          kind: 'christ',
          id: 'christ-propitiation',
          title: 'Christ Connection — The Propitiation for Our Sins',
          html:
            'Jesus did not come to condemn you. He came to stand in your place. Your sin created a debt you cannot pay and a separation you cannot bridge. But Christ paid the debt in full. He bore the judgment. He bridged the gap. When God looks at you now, He sees you clothed in the righteousness of His Son. This is the love of God poured out.',
        },
        {
          kind: 'carry',
          html:
            'You live on the other side of the cross. The sacrifice has been made. Your sins are forgiven. Not because you earned it, not because you deserve it, but because God is love, and love sent His Son. Let that reality reshape how you see yourself and how you relate to others. If God loved you that much, you can risk loving others.',
        },
        {
          kind: 'reflection',
          id: 'sent-son',
          prompt: 'What does it mean to you that God sent His only begotten Son for you? How does that change how you live?',
        },
      ],
    },

    /* ─── 1 John 4:11–12 — If We Love One Another ────────────────────── */
    {
      ref: '1 John 4:11–12',
      title: 'If We Love One Another',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              11,
              t('Beloved, if God so loved us, we ought also to '),
              hp('love one another', 'c-love-duty'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-love-duty',
          html:
            'The logic is simple but relentless. If God sent His Son to die for you, then you owe love to others. Not as a burden, but as a logical response. You have been shown the deepest kindness. You must pass it on. Love is not optional for the believer. It is the overflow of being loved by God.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              12,
              t('No man hath seen God at any time. If we love one another, God dwelleth in us, and his love is perfected in us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-love-perfected',
          html:
            'God is invisible. No one has seen Him with their own eyes. But when you see believers loving one another—forgiving, serving, sacrificing—you see God. His love becomes visible. His nature becomes tangible. The love of God is "perfected" or "completed" when it flows through you to another person. Love is not perfected in isolation. It is perfected in the community of believers loving one another.',
        },
        {
          kind: 'carry',
          html:
            'Others are watching you. They may never read the Bible. They may never hear a sermon. But they will see whether you love. They will see whether the God you claim to know has changed how you treat people. Your love is a sermon. Your forgiveness is a testimony. Your kindness is the gospel made visible.',
        },
        {
          kind: 'reflection',
          id: 'love-community',
          prompt: 'In what community are you called to show God&apos;s love? What is one concrete way you can love one another this week?',
        },
      ],
    },

    /* ─── 1 John 4:13–14 — We Have Seen and Do Testify ───────────────── */
    {
      ref: '1 John 4:13–14',
      title: 'We Have Seen and Do Testify',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              13,
              t('Hereby know we that we dwell in him, and he in us, because he hath given us of his Spirit.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-spirit-given',
          html:
            'John returns to assurance. How do you know God dwells in you? How do you know you dwell in Him? It is not a feeling, though it may be felt. It is the presence of the Holy Spirit. God has given you of His Spirit—not a fragment, but a share in the Holy Spirit Himself. This is the proof of union with God.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              14,
              t('And we have seen and do testify that the '),
              hy('Father sent the Son to be the Saviour of the world', 'c-saviour-world'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saviour-world',
          html:
            'John speaks as an eyewitness. "We have seen." He and the other apostles walked with Jesus. They saw His miracles. They heard His words. They witnessed His resurrection. And they testify: the Father sent the Son to be the Saviour of the world. Not just for Israel. Not just for the righteous. The world—all of it, in all its sin and rebellion—is what God came to save.',
        },
        {
          kind: 'christ',
          id: 'christ-saviour-world',
          title: 'Christ Connection — Saviour of the World',
          html:
            'Jesus did not come for a small group of the worthy. He came for the world. He came for tax collectors and prostitutes, for the demon-possessed, for the sick and the poor. He came for you, with all your failures and your shame. The scope of His redemption is universal. "Whosoever believeth in him should not perish, but have everlasting life" (John 3:16). That whosoever includes you.',
        },
        {
          kind: 'carry',
          html:
            'If Jesus came for the world, then the world matters to God. The broken person next to you matters. The stranger, the enemy, the one you have written off—they are part of the world Christ came to save. Your responsibility is not to judge who is worthy of God&apos;s love. It is to testify to what you have seen: Christ saves.',
        },
        {
          kind: 'reflection',
          id: 'saviour-world',
          prompt: 'How would it change your life to truly believe Jesus came for the world—including the people you struggle with?',
        },
      ],
    },

    /* ─── 1 John 4:15–16 — Whosoever Shall Confess ────────────────────── */
    {
      ref: '1 John 4:15–16',
      title: 'Whosoever Shall Confess',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              15,
              t('Whosoever shall confess that Jesus is the Son of God, God dwelleth in him, and he in God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-confess-son',
          html:
            'To confess is to declare openly. It is not a whisper or a secret. A believer confesses that Jesus is the Son of God—fully God, fully human, the one who died and rose again. And the promise follows: God dwells in that person, and they dwell in God. Not as strangers, but in intimate union.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              16,
              t('And we have known and believed the love that God hath to us. God is love; and he that dwelleth in love dwelleth in God, and God in him.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-love-again',
          html:
            'John returns to the declaration that echoed in verse 8: God is love. This time, he adds: those who dwell in love dwell in God, and God in them. Love is not a separate practice from your faith. Love is the atmosphere of God&apos;s presence. To live in love is to live in God.',
        },
        {
          kind: 'carry',
          html:
            'You confess Jesus. That is the threshold. But the walk continues. You are asked to dwell in love—not merely to feel it, but to stay in it, to make your home in it, to let it shape your choices, your words, your relationships. This is what it means to live in God.',
        },
        {
          kind: 'reflection',
          id: 'confess-dwell',
          prompt: 'What does it mean for you to "dwell in love"? Where do you feel most tempted to leave that dwelling place?',
        },
      ],
    },

    /* ─── 1 John 4:17–18 — Perfect Love Casteth Out Fear ──────────────── */
    {
      ref: '1 John 4:17–18',
      title: 'Perfect Love Casteth Out Fear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              17,
              t('Herein is our love made perfect, that we may have boldness in the day of judgment: because as he is, so are we in this world.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-boldness',
          html:
            'Love is made perfect—matured, completed—when it gives us boldness to face the day of judgment. Not arrogance, but confidence. You will stand before God. You will be known completely. And you can face that day without fear because "as he is, so are we"—you are clothed in the righteousness of Christ. You are seen as He is seen.',
        },
        {
          kind: 'greek',
          id: 'greek-parresia',
          title: 'Parresia — &ldquo;Boldness&rdquo;',
          script: 'παρρησία',
          translit: '<strong>parresia</strong> · freedom of speech, confidence, boldness, openness',
          description:
            'Parresia is the confidence to speak openly, to stand boldly, to have nothing to hide. In the day of judgment, the believer can approach with parresia because Christ has paid the price and declared the believer righteous.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              18,
              t('There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fear-torment',
          html:
            'Fear and love are incompatible in a mature heart. Fear produces torment—a constant dread, a running from judgment, a hiding of self. But perfect love—love that knows you are forgiven, that God is for you, that Christ has paid the price—love casts out that fear. Not through denial, but through truth. You are safe in God&apos;s hands.',
        },
        {
          kind: 'christ',
          id: 'christ-love-fear',
          title: 'Christ Connection — His Love Overcomes Your Fear',
          html:
            'Jesus faced the judgment you deserve. He bore the punishment. He rose again. And now He stands at the right hand of God, interceding for you. His love for you is not passive. It is active, present, fighting for you. In His love, every reason for fear is answered.',
        },
        {
          kind: 'carry',
          html:
            'What fears torment you? Fear of judgment? Fear of rejection? Fear of failure? Fear of death? Perfect love addresses them all. Not by telling you your fears are silly, but by showing you that the one who loves you completely has already handled the worst. You are safe. You are known. You are forgiven. You can rest.',
        },
        {
          kind: 'reflection',
          id: 'fear-love',
          prompt: 'What fear has tormented you? How might God&apos;s perfect love cast it out?',
        },
      ],
    },

    /* ─── 1 John 4:19–21 — We Love Him Because He First Loved Us ──────── */
    {
      ref: '1 John 4:19–21',
      title: 'We Love Him Because He First Loved Us',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              19,
              t('We love him, because he first loved us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-love-first',
          html:
            'Your love for God is not the origin. It is a response. God loved you first—before you loved Him, before you even knew Him, when you were still a sinner. You did not wake up one day and decide to love God. You were awakened to the reality that God loves you. That love broke open your heart, and love poured out.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              20,
              t('If a man say, I love God, and hateth his brother, he is a liar: for he that loveth not his brother whom he hath seen, how can he love God whom he hath not seen?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-love-test',
          html:
            'John gives the final test. If you claim to love God but despise your brother, you are a liar. It is simple logic: you can see your brother. You interact with your brother. If you cannot love what you see and touch, how can you claim to love what you cannot see? Love must be concrete. It must be visible. It must extend to the person next to you.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              21,
              t('And this commandment have we from him, That he who loveth God love his brother also.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-commandment',
          html:
            'This is not a suggestion or an ideal. It is a commandment. Jesus Himself gave it. "A new commandment I give unto you, That ye love one another" (John 13:34). The two loves are not separate. You cannot truly love God and refuse to love your brother. The command is absolute: if you love God, you must love your brother.',
        },
        {
          kind: 'christ',
          id: 'christ-love-brother',
          title: 'Christ Connection — Love Laid Down at the Cross',
          html:
            'Jesus loved His brothers—even Judas, who betrayed Him. Even Peter, who denied Him. Even the soldiers who crucified Him. His love was not conditional. It was not withdrawn when rejected. It was poured out freely, completely, even unto death. That is the measure. That is the model. Not romantic love or friendly affection, but the self-giving, sacrificial love that dies for others.',
        },
        {
          kind: 'carry',
          html:
            'Is there someone you struggle to love? A family member? A coworker? An enemy? John will not let you off the hook. You cannot hide behind pious language. You cannot love God in the abstract while hating your brother in the concrete. Love is an act. It starts with one person, in one moment, doing one kind thing. Start there. Ask God to help you love the person you find most unlovable. That is where His love becomes real in you.',
        },
        {
          kind: 'reflection',
          id: 'love-brother',
          prompt: 'Is there someone you struggle to love? What would it mean for you to obey the commandment to love them—even in one small way?',
        },
      ],
    },
  ],

  hasHebrew: false,
};
