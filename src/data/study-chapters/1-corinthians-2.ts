import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Corinthians 2 — We Preach Christ Crucified
 *
 * Paul explains the method of his preaching. He did not come to Corinth with
 * eloquence or human wisdom. He came weak, trembling, demonstrating the Spirit
 * and power. The gospel works not through the force of rhetoric but through the
 * Spirit of God piercing hearts. The Spirit alone can reveal the deep things of
 * God to believers. And through the Spirit, believers come to have the mind of Christ.
 */
export const FIRST_CORINTHIANS_2: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 2,

  intros: [
    'When Paul arrived in Corinth, he came not as the eloquent orator the Greeks admired. He came in weakness, in fear, in trembling. This was no accident. It was strategy. Paul refused to let his own eloquence become the foundation of the Corinthians&apos; faith. If they believed because Paul was persuasive, their faith would rest on the sand of his personality. Instead, Paul preaches in the demonstration of the Spirit and power, so that faith rests on Christ alone.',
    'Behind the weakness of the preacher stands the power of the Spirit. The Spirit searches the deep things of God and reveals them to those who believe. No human wisdom, no matter how refined, can achieve this revelation. The Spirit alone can open the eyes of the blind to see Jesus Christ. And the Spirit brings believers to an astonishing place: union with Christ, so that you begin to have the mind of Christ Himself.',
  ],

  sections: [
    /* ─── 1 Corinthians 2:1–2 — Not with Excellency ──────────────────────── */
    {
      ref: '1 Corinthians 2:1–2',
      title: 'Not with Excellency of Speech',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              1,
              t('And I, brethren, when I came to you, came '),
              hg('not with excellency of speech or of wisdom', 'cor2-not-excellency'),
              t(', declaring unto you the testimony of God.'),
            ),
            verse(
              2,
              t('For I '),
              t('determined not to know any thing among you, save Jesus Christ, and him crucified'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-not-excellency',
          html:
            'Paul makes a deliberate choice, not born of inability but of conviction. Corinth was a city of rhetoricians and philosophers. A speaker with eloquence could build a following. But eloquence carries a subtle danger: people begin to believe because the preacher is impressive, and the foundation cracks when the preacher is gone. Paul refuses this trap. He will not be the foundation.',
        },
        {
          kind: 'carry',
          html:
            'You may feel pressure to present your faith persuasively, to win arguments with clever words, to make the gospel sound intellectual and respectable. Paul would say: let it go. Your stammering, your uncertainty, your simple words—these are not weaknesses to overcome. They are gifts. They make room for the Spirit to work.',
        },
        {
          kind: 'reflection',
          id: 'cor2-1-eloquence',
          prompt:
            'When have you felt tempted to make your faith sound impressive instead of true? What would change if you spoke from weakness instead?',
        },
      ],
    },

    /* ─── 1 Corinthians 2:2 — Jesus Christ and Him Crucified ────────────── */
    {
      ref: '1 Corinthians 2:2',
      title: 'Jesus Christ, and Him Crucified',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              2,
              t('For I determined not to know any thing among you, save '),
              t('Jesus Christ, and him crucified'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-crucified-only',
          html:
            'This is not narrow-mindedness. This is laser focus. Paul does not say he will preach Christ and some other things too. He says he will know only one thing—Jesus Christ crucified. The crucifixion is not a detail in a larger story. It is the story. It is the center from which everything else radiates.',
        },
        {
          kind: 'greek',
          id: 'cor2-stauros',
          title: 'Stauros — Crucified',
          script: 'σταυρός',
          translit: '<strong>stauros</strong> · cross; stake; an instrument of execution and shame',
          description:
            'The cross was not a symbol of hope to Paul&apos;s contemporaries. It was an instrument of shame, reserved for rebels, slaves, and the condemned. Yet Paul stakes everything on it. The wisdom of the world saw the cross as defeat. Paul sees it as victory.',
        },
        {
          kind: 'christ',
          id: 'cor2-crucified-connection',
          title: 'Christ Connection — The Cross as Redemption',
          html:
            '&ldquo;Jesus Christ, and him crucified&rdquo; is not just the gospel&apos;s method—it is its entire substance. At the cross, Christ &ldquo;was made a curse for us&rdquo; (Gal. 3:13). He became what we are so that we might become what He is. The cross is not a tragedy to be forgiven and moved past; it is the hinge on which all redemption turns. When you preach Christ crucified, you preach the only message that saves.',
        },
        {
          kind: 'carry',
          html:
            'Your mind may wander to Christ&apos;s teachings, His miracles, His example. All of these matter. But if you lose the cross, you lose the gospel. The cross is where Christ&apos;s love becomes concrete, measurable, impossible to misunderstand. When you face your own powerlessness or shame, run to the cross. There you will find a Savior who knows what it is to be utterly undone.',
        },
        {
          kind: 'reflection',
          id: 'cor2-2-crucified',
          prompt:
            'What does it mean to you personally that Christ was crucified? How does the cross answer your deepest fear or shame?',
        },
      ],
    },

    /* ─── 1 Corinthians 2:3 — In Weakness, Fear, and Much Trembling ──────── */
    {
      ref: '1 Corinthians 2:3',
      title: 'Weakness, Fear, and Trembling',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              3,
              t('And I was with you in '),
              hg('weakness, and in fear, and in much trembling', 'cor2-weakness-fear'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-weakness-fear',
          html:
            'Paul is telling the Corinthians the truth about himself: he was scared. He came to a great city, one of the empire&apos;s intellectual centers, and he was trembling. This is not a confession of inadequacy he wishes to overcome. It is a requirement for what God wants to do. When Paul&apos;s own strength runs out, God&apos;s strength can run in.',
        },
        {
          kind: 'commentary',
          id: 'cor2-weakness-paradox',
          html:
            'There is a paradox at the heart of Paul&apos;s preaching. He is weak. The Corinthians are powerful, educated, confident. Yet when Paul speaks, something breaks open in them. Not because of his confidence, but because of his humility. Because he is not standing between them and God; he is standing with them, both of them helpless before God&apos;s Spirit.',
        },
        {
          kind: 'carry',
          html:
            'You may feel disqualified because you are afraid, because you stammer, because you sometimes doubt. Paul would say: that is exactly when you are most useful to God. Your weakness makes room for His power. The person who is utterly confident in themselves cannot make space for God to work. But the person who is trembling, who admits their fear—there God finds an open door.',
        },
        {
          kind: 'reflection',
          id: 'cor2-3-weakness',
          prompt:
            'Where do you feel most weak or inadequate in your faith? How might God want to use that very weakness?',
        },
      ],
    },

    /* ─── 1 Corinthians 2:4–5 — Demonstration of Spirit and Power ──────── */
    {
      ref: '1 Corinthians 2:4–5',
      title: 'Demonstration of the Spirit and Power',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              4,
              t('And my speech and my preaching was not with '),
              hg('enticing words of man&apos;s wisdom', 'cor2-enticing'),
              t(', but in '),
              t('demonstration of the Spirit and of power'),
              t(':'),
            ),
            verse(
              5,
              t('That your faith should not stand in the wisdom of men, but in the '),
              hy('power of God', 'cor2-greek-dynamis'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-enticing',
          html:
            'Paul deliberately avoids &quot;enticing words.&quot; The Greek word suggests words designed to please, to seduce, to draw people in by their sweetness and polish. Paul refuses the preacher&apos;s easiest tool. Instead, he comes with something different: demonstration. Not theory but power. Not argument but transformation.',
        },
        {
          kind: 'greek',
          id: 'cor2-greek-dynamis',
          title: 'Dynamis — Power',
          script: 'δύναμις',
          translit: '<strong>dynamis</strong> · power; might; a mighty work; a miracle',
          description:
            'Dynamis is not intellectual persuasion. It is the living power that heals disease, raises the dead, breaks chains of sin. When Paul preaches, the dynamis of the Spirit is at work. The Corinthians do not believe because they have been convinced. They believe because they have been transformed.',
        },
        {
          kind: 'commentary',
          id: 'cor2-faith-foundation',
          html:
            'Paul makes something clear: faith&apos;s foundation matters. If your faith rests on human wisdom—on a pastor&apos;s eloquence, on your own intellectual assent, on a system of logic—then it is only as strong as that foundation. But if your faith rests on the power of God, on the Spirit&apos;s work in your own life, then it is unshakeable. You have encountered God yourself.',
        },
        {
          kind: 'christ',
          id: 'cor2-demo-connection',
          title: 'Christ Connection — The Power That Raises the Dead',
          html:
            'When Paul speaks of &quot;demonstration of the Spirit and of power,&quot; he is describing the same power that raised Jesus from the dead. Paul later writes: &quot;what is the exceeding greatness of his power to us-ward who believe, according to the working of his mighty power, which he wrought in Christ, when he raised him from the dead&quot; (Eph. 1:19–20). When the Spirit comes to you, you are touched by the very power that conquered death itself.',
        },
        {
          kind: 'carry',
          html:
            'Do not look for the Spirit&apos;s power in persuasive preaching or impressive arguments. Look for it in the quiet moments when you know God is real—when you pray and something shifts, when you read Scripture and suddenly see yourself, when you are healed or set free. That is the Spirit&apos;s demonstration. That is where your faith can rest.',
        },
        {
          kind: 'reflection',
          id: 'cor2-4-power',
          prompt:
            'When have you experienced God&apos;s power—not in words but in action? What would it mean to stake your whole faith on that power instead of on arguments?',
        },
      ],
    },

    /* ─── 1 Corinthians 2:6–9 — Wisdom Among the Perfect ─────────────────── */
    {
      ref: '1 Corinthians 2:6–9',
      title: 'Wisdom Among the Perfect',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              6,
              t('Howbeit we speak '),
              hg('wisdom among them that are perfect', 'cor2-perfect'),
              t(': yet not the wisdom of this world, nor of the princes of this world that come to nought:'),
            ),
            verse(
              7,
              t('But we speak the '),
              hp('wisdom of God in a mystery, even the hidden wisdom', 'cor2-hidden'),
              t(', which God ordained before the world unto our glory:'),
            ),
            verse(
              8,
              t('Which none of the princes of this world knew: for '),
              hy('had they known it, they would not have crucified the Lord of glory', 'cor2-glory'),
              t(':'),
            ),
            verse(
              9,
              t('But as it is written, '),
              hg('Eye hath not seen, nor ear heard, neither have entered into the heart of man, the things which God hath prepared for them that love him', 'cor2-eye-hath-not'),
              t(':'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-perfect',
          html:
            'The &quot;perfect&quot; here does not mean sinless. It means <em>mature</em>, those who have grown in understanding of God&apos;s ways. They are contrasted not with the immature in faith, but with those who pride themselves on worldly wisdom. To the worldly wise, the gospel looks like foolishness. But to those mature enough to see with God&apos;s eyes, it is the very deepest wisdom.',
        },
        {
          kind: 'commentary',
          id: 'cor2-hidden',
          html:
            'God has a wisdom that was hidden before the world began. It is hidden not because God kept it secret but because no one could see it. No human eye, gazing at history, would have predicted it. This wisdom is the plan to redeem the world through the cross—through weakness, shame, suffering, and death. The wisdom the world despises turns out to be the only wisdom that saves.',
        },
        {
          kind: 'greek',
          id: 'cor2-mysterion',
          title: 'Mysterion — Mystery',
          script: 'μυστήριον',
          translit: '<strong>mysterion</strong> · a secret; that which is hidden and now revealed',
          description:
            'A mystery in Scripture is not something inexplicable. It is something that was hidden but is now being revealed. The mystery of Christ is that God would save the world through the cross, that the despised would become victorious, that weakness would become strength. Once revealed, it makes perfect sense. Before revelation, it was incomprehensible.',
        },
        {
          kind: 'commentary',
          id: 'cor2-glory',
          html:
            'Paul says something staggering: the rulers and powers of the age &quot;would not have crucified the Lord of glory&quot; if they had known who He was. Their blindness was their undoing. They saw Jesus and thought they saw a dangerous rabbi. They did not see the Lord of glory. And so they did what no power should ever do—they murdered God.',
        },
        {
          kind: 'commentary',
          id: 'cor2-eye-hath-not',
          html:
            'Paul quotes Isaiah (64:4): eye has not seen, ear has not heard, no one&apos;s heart has imagined what God has prepared for those who love Him. The cross seems like the end of everything. But it is the gateway to glories no human mind can picture. God&apos;s plan is not just larger than what we can see; it is of a different order entirely.',
        },
        {
          kind: 'christ',
          id: 'cor2-hidden-connection',
          title: 'Christ Connection — The Lord of Glory Crucified',
          html:
            'The deepest mystery is that the Lord of glory walked into the hands of His enemies and let them kill Him. This is not defeat masked as victory. This is the strategy of God. &quot;He made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men: and being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross&quot; (Phil. 2:7–8). The wisdom of God looks like surrender. And it is the only power that ever truly conquers.',
        },
        {
          kind: 'carry',
          html:
            'Do not mistake what God is doing in your life for failure. Do not assume that suffering is a sign you are outside God&apos;s plan. The cross is God&apos;s pattern: apparent loss leading to true gain, death leading to resurrection, humiliation leading to exaltation. If your life looks small now, remember that eye has not seen what God is preparing for those who love Him.',
        },
        {
          kind: 'reflection',
          id: 'cor2-6-hidden-wisdom',
          prompt:
            'What seems like failure or foolishness in your life right now? How might God&apos;s hidden wisdom be working in ways you cannot yet see?',
        },
      ],
    },

    /* ─── 1 Corinthians 2:10–12 — The Spirit Searches Deep Things ────────── */
    {
      ref: '1 Corinthians 2:10–12',
      title: 'The Spirit Searches the Deep Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              10,
              t('But God hath '),
              hp('revealed them unto us by his Spirit', 'cor2-revealed'),
              t(': for the Spirit '),
              hy('searcheth all things, yea, the deep things of God', 'cor2-erevnao'),
              t('.'),
            ),
            verse(
              11,
              t('For what man knoweth the things of a man, save the spirit of man which is in him? even so the things of God knoweth no man, but the '),
              hg('Spirit of God', 'cor2-spirit-knows'),
              t('.'),
            ),
            verse(
              12,
              t('Now we have received, not the spirit of the world, but the spirit which is of God; that we might '),
              hg('know the things that are freely given to us of God', 'cor2-given'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-revealed',
          html:
            'The hidden wisdom is not hidden from believers. God reveals it. Not through our effort or cleverness, but by His Spirit. The Spirit is the revealer. He is the one who makes the invisible visible, the unknowable knowable. He brings the mystery out of darkness into light.',
        },
        {
          kind: 'greek',
          id: 'cor2-erevnao',
          title: 'Erevnaō — Search',
          script: 'ἐρευνάω',
          translit: '<strong>erevnaō</strong> · to search; to explore; to examine thoroughly',
          description:
            'The Spirit does not merely grasp God&apos;s knowledge. He searches it, explores it, goes into the depths. The Spirit is not distant from God&apos;s nature; He is intimate with it. And He shares this intimate knowledge with us.',
        },
        {
          kind: 'commentary',
          id: 'cor2-spirit-knows',
          html:
            'Paul uses a simple analogy: you know your own mind because your own spirit lives inside you. In the same way, only the Spirit of God knows the things of God. And when the Spirit comes to dwell in you, you begin to know what the Spirit knows. You are not left guessing about who God is. You have an inside witness.',
        },
        {
          kind: 'commentary',
          id: 'cor2-given',
          html:
            'The things God has given believers are freely given. Not earned. Not purchased. Not deserved. Grace is the operative word. You have access to the deep things of God not because you are smart enough or good enough, but because God&apos;s Spirit chooses to dwell in you and make known what cannot otherwise be known.',
        },
        {
          kind: 'carry',
          html:
            'If you ever feel like understanding Scripture is beyond you, or that God is too far away to know, remember: the Spirit is the one who brings understanding. Open yourself to the Spirit. Ask Him to teach you. And then trust what you sense, what you know, what the Spirit witnesses to your spirit. That inner knowing is more reliable than your doubts.',
        },
        {
          kind: 'reflection',
          id: 'cor2-10-deep-things',
          prompt:
            'What is one deep thing about God you wish you understood better? Ask the Spirit to reveal it to you. What would need to change in you to be ready to receive that revelation?',
        },
      ],
    },

    /* ─── 1 Corinthians 2:14 — The Natural Man Cannot Receive ────────────── */
    {
      ref: '1 Corinthians 2:14',
      title: 'The Natural Man',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              14,
              t('But the '),
              hg('natural man receiveth not the things of the Spirit of God', 'cor2-natural'),
              t(': for they are '),
              hg('foolishness unto him', 'cor2-foolish'),
              t(': '),
              hy('neither can he know them, because they are spiritually discerned', 'cor2-psychikos'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-natural',
          html:
            'The &quot;natural man&quot; is not a non-Christian. It is a person living by their own resources, their own wisdom, their own perception. Such a person finds the things of the Spirit incomprehensible. The gospel sounds absurd: God became human, died a shameful death, rose again, and calls you to die to yourself and live for Him. To the natural mind, this is nonsense.',
        },
        {
          kind: 'greek',
          id: 'cor2-psychikos',
          title: 'Psychikos — Natural',
          script: 'ψυχικός',
          translit: '<strong>psychikos</strong> · natural; of the soul; the life-force that is purely human',
          description:
            'Psychikos refers to the life and understanding that flow from the human soul alone—from reason, emotion, will, experience. It is not evil. But it is limited. It cannot perceive what is spiritual because it has no apparatus for it. Spiritual truth requires the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'cor2-foolish',
          html:
            'To the natural person, the cross is foolishness. It violates every principle of self-preservation and honor. You sacrifice yourself for others? You lose your life to save it? You trust God when you cannot see Him? The natural mind says: this is not wisdom; this is desperation. But Paul insists: it is the only wisdom that works.',
        },
        {
          kind: 'commentary',
          id: 'cor2-spiritually-discerned',
          html:
            'Spiritual truth is &quot;spiritually discerned.&quot; Not argued into. Not logicked into. Discerned—perceived, intuited, known from the inside by the work of the Spirit. This is not anti-intellectual. But it recognizes that the highest truths lie beyond the reach of the mind alone. They require the whole person opened to God&apos;s Spirit.',
        },
        {
          kind: 'carry',
          html:
            'You may have people in your life who mock your faith or dismiss it as irrational. Do not argue harder. You cannot convince the natural mind of spiritual truth. What you can do is live it. Let your joy, your peace, your transformed character become the argument. Let people see that what you have received is real. The Spirit does the convincing, not you.',
        },
        {
          kind: 'reflection',
          id: 'cor2-14-natural',
          prompt:
            'What spiritual truth seemed foolish to you before you believed it? What changed your mind—was it an argument or an experience?',
        },
      ],
    },

    /* ─── 1 Corinthians 2:15–16 — We Have the Mind of Christ ────────────── */
    {
      ref: '1 Corinthians 2:15–16',
      title: 'We Have the Mind of Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              15,
              t('But he that is '),
              hg('spiritual judgeth all things', 'cor2-judges-all'),
              t(', yet he himself is judged of no man.'),
            ),
            verse(
              16,
              t('For who hath known the mind of the Lord, that he may instruct him? But '),
              hp('we have the mind of Christ', 'cor2-mind-of-christ'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-judges-all',
          html:
            'The spiritual person—the one indwelt by the Spirit—has a new faculty: spiritual discernment. They can look at the world and see through its lies. They can read circumstances and understand God&apos;s hand in them. They are not trapped in the limited perspective of the natural mind. Yet this person remains humble, knowing they stand under God&apos;s judgment, not above it.',
        },
        {
          kind: 'commentary',
          id: 'cor2-mind-of-christ',
          html:
            'This is the astonishing conclusion. You have the mind of Christ. Not figuratively. Not eventually. Now. The Spirit who searched the deep things of God, who knows the Father&apos;s heart completely, dwells in you. You are beginning to think God&apos;s thoughts after Him. You are beginning to see as Christ sees. This is union. This is resurrection.</p><p>You are not your own anymore. You have been bought with a price. And the price was the blood of the Lord of glory.',
        },
        {
          kind: 'greek',
          id: 'cor2-nous',
          title: 'Nous — Mind',
          script: 'νοῦς',
          translit: '<strong>nous</strong> · mind; intellect; understanding; the capacity to perceive and know',
          description:
            'The nous is more than mere thinking. It is the capacity to perceive truth, to understand reality, to know God. When Paul says you have the mind of Christ, he means you are being transformed in your very capacity to understand what is true.',
        },
        {
          kind: 'christ',
          id: 'cor2-mind-connection',
          title: 'Christ Connection — Union with Christ',
          html:
            '&ldquo;We have the mind of Christ.&quot; Later, Paul will elaborate: &quot;Let this mind be in you, which was also in Christ Jesus&quot; (Phil. 2:5). To have the mind of Christ is to share His disposition, His priorities, His way of seeing. It is to be so united to Him that you begin to love what He loves, to value what He values, to find joy in serving rather than being served. This is not psychology. This is resurrection.',
        },
        {
          kind: 'carry',
          html:
            'As you go through your day, you carry the mind of Christ. Not perfectly—you are still becoming. But the Spirit is at work, slowly rewiring how you think, what you value, where you find meaning. When you face a choice, you have access to His discernment. When you face suffering, you have access to His peace. You are not alone. You are united to Him.',
        },
        {
          kind: 'reflection',
          id: 'cor2-16-mind-of-christ',
          prompt:
            'What is one area of your life where you wish you had Christ&apos;s perspective? What would it mean to actually think the way He thinks about that situation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'But we speak the wisdom of God in a mystery, even the hidden wisdom, which God ordained before the world unto our glory.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 2 · Study Guide',
  },

  hasHebrew: false,
};
