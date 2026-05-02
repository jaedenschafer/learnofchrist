import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Corinthians 7 — Godly Sorrow and Restored Joy
 *
 * Paul opens with a promise: those who follow Christ are cleansed and perfected.
 * He then unfolds the story of his "severe letter" to Corinth—a letter that caused
 * pain, but pain that bore fruit. The Corinthians&apos; sorrow led to repentance.
 * Paul rejoices not in their suffering, but in what their repentance reveals:
 * genuine faith, authentic change, and the difference between sorrow that kills
 * and sorrow that saves.
 */
export const SECOND_CORINTHIANS_7: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 7,

  intros: [
    'Paul has spent much of 2 Corinthians speaking about comfort—the comfort God gives, the comfort that overflows from Christ through suffering, the comfort that Paul himself carries as an apostle. In chapter 7, he turns a sharp corner. He speaks of comfort that comes through pain, of sorrow that saves, of a wound that heals.',
    'The chapter arises from a crisis now resolved. Paul had written the Corinthian church a severe letter—a letter that grieved him to write, that caused them grief to read. But their grief bore fruit. They repented. And in their repentance, Paul sees the fingerprints of God. This is not a chapter about avoiding pain. It is a chapter about what pain can do when it leads us toward God instead of away from Him.',
  ],

  sections: [
    /* ─── 2 Corinthians 7:1 — Cleanse Ourselves ───────────────────────── */
    {
      ref: '2 Corinthians 7:1',
      title: 'Cleansing and Perfection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              1,
              t('Having therefore these '),
              hp('promises', 'cor7-promises'),
              t(', dearly beloved, let us '),
              hy('cleanse ourselves', 'cor7-molysmos'),
              t(' from all filthiness of the flesh and spirit, '),
              hg('perfecting holiness', 'cor7-perfect'),
              t(' in the fear of God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor7-promises',
          html:
            'Paul refers to the promises made earlier in 2 Corinthians 6:16–18: &ldquo;I will dwell in them, and walk in them&rdquo; (God&apos;s promise), &ldquo;I will be your Father&rdquo; (God&apos;s promise), &ldquo;Ye are the sons and daughters of the Lord Almighty&rdquo; (God&apos;s promise). These are not small things. They are belonging, intimacy, family. Paul says: given such promises, there is only one sane response.',
        },
        {
          kind: 'greek',
          id: 'cor7-molysmos',
          title: 'Molysmos — &ldquo;Filthiness&rdquo;',
          script: 'μολυσμός',
          translit: '<strong>molysmos</strong> · stain, filth, defilement; moral pollution',
          description:
            'Not external dirt. Moral staining—the kind that marks the conscience, that clings to the soul. Paul says: cleanse yourselves from every such thing.',
        },
        {
          kind: 'commentary',
          id: 'cor7-perfect',
          html:
            'To &ldquo;perfect holiness&rdquo; does not mean to achieve sinless perfection. The Greek word <em>epitelein</em> means to complete, to bring to its full expression. Paul is calling the Corinthians to let their faith work its full work in them—to let it reshape not just their behavior, but their hearts and minds. Holiness is not a thing you earn. It is a thing you let grow.',
        },
        {
          kind: 'christ',
          id: 'cor7-christ-clean',
          title: 'Christ Connection — Cleansed by His Blood',
          html:
            'Paul says &ldquo;cleanse ourselves,&rdquo; but He knows—and his readers know—that the cleansing power is not our own. John says it plainly: &ldquo;If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness&rdquo; (1 John 1:9). Our part is to come with open hands; His part is to wash. Christ&apos;s blood is the only thing that cleanses away filthiness of the spirit.',
        },
        {
          kind: 'carry',
          html:
            'When you read the promises God makes to His people—that He will dwell in you, walk with you, be your Father—does anything in you recoil? Does shame whisper that you are too stained, too compromised? That is the voice of the enemy, not of God. God sees through to the deepest stains, and He says anyway: come. Cleanse yourself by coming to me.',
        },
        {
          kind: 'reflection',
          id: 'cor7-cleanse',
          prompt:
            'What promise from God feels hardest for you to believe? What would change if you actually accepted it as true about yourself?',
        },
      ],
    },

    /* ─── 2 Corinthians 7:2–4 — Receive Us ──────────────────────────── */
    {
      ref: '2 Corinthians 7:2–4',
      title: 'Paul&apos;s Appeal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              2,
              hp('Receive us', 'cor7-receive'),
              t('; we have wronged no man, we have '),
              hy('corrupted', 'cor7-phtheiro'),
              t(' no man, we have defrauded no man.')
            ),
            verse(
              3,
              t('I speak not this to condemn you: for I have said before, that ye are in our hearts to die and to live with you.')
            ),
            verse(
              4,
              t('Great is my '),
              hp('boldness of speech', 'cor7-boldness'),
              t(' toward you, great is my glorying of you: I am filled with comfort, I am exceeding joyful in all our tribulation.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor7-receive',
          html:
            'Paul opens his heart. He has not come to them with hidden motives or false claims. He asks them to receive him as he has received them—fully, without reservation. This is the language of spiritual authority sought not through manipulation but through transparency.',
        },
        {
          kind: 'greek',
          id: 'cor7-phtheiro',
          title: 'Phtheiro — &ldquo;Corrupted&rdquo;',
          script: 'φθείρω',
          translit: '<strong>phtheiro</strong> · to decay, corrupt, ruin; to seduce or lead astray',
          description:
            'Paul has not decayed their faith by flattery or seduced them into false doctrine. His stewardship has been clean.',
        },
        {
          kind: 'commentary',
          id: 'cor7-boldness',
          html:
            'Paul has <em>parresia</em>—bold, open speech. He can speak plainly to the Corinthians without fear, because his conscience is clear. That boldness is a gift when it rests on integrity. Without integrity, boldness is just noise.',
        },
        {
          kind: 'carry',
          html:
            'Where in your life are you called to have clear conscience and bold speech—with family, at work, in your faith community? To speak openly requires both courage and integrity. Ask God for both.',
        },
        {
          kind: 'reflection',
          id: 'cor7-boldness-prompt',
          prompt:
            'Is there a conversation you have been afraid to have because you fear judgment? What would boldness of speech look like if you had Paul&apos;s clear conscience?',
        },
      ],
    },

    /* ─── 2 Corinthians 7:5–7 — Tribulation and Comfort ────────────── */
    {
      ref: '2 Corinthians 7:5–7',
      title: 'Comfort in Tribulation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              5,
              t('For when we were come into Macedonia, our flesh had no rest, but we were troubled on every side; '),
              hg('without were fightings, within were fears', 'cor7-fightings'),
              t('.')
            ),
            verse(
              6,
              t('Nevertheless God, that comforteth those that are '),
              hp('cast down', 'cor7-comfort'),
              t(', comforted us by the coming of Titus;')
            ),
            verse(
              7,
              t('And not by his coming only, but by the consolation wherewith he was comforted in you, when he told us your earnest desire, your mourning, your fervent mind toward me; so that I rejoiced the more.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor7-fightings',
          html:
            'Paul has been carrying the weight of Corinth—their conflicts, their questions, their struggles. He is worn down. &ldquo;Without were fightings&rdquo;—the external pressures of his apostleship, the opposition, the travel, the physical toll. &ldquo;Within were fears&rdquo;—the internal, spiritual worry that perhaps his ministry to Corinth has failed. He is not superhuman. He is tired.',
        },
        {
          kind: 'commentary',
          id: 'cor7-comfort',
          html:
            'And then, into that exhaustion, comes relief—not from solving the problem, but from the presence of a friend. Titus arrives with news: the Corinthians have repented. The church is well. Paul&apos;s tears have not been wasted. And Paul, who has spent this letter speaking about comfort, discovers he needs it just as much.',
        },
        {
          kind: 'christ',
          id: 'cor7-christ-comfort',
          title: 'Christ Connection — Comforter of the Afflicted',
          html:
            'Jesus said, &ldquo;Come unto me, all ye that labour and are heavy laden, and I will give you rest&rdquo; (Matt. 11:28). He also promised, &ldquo;I will not leave you comfortless: I will come to you&rdquo; (John 14:18). God&apos;s pattern is to comfort through presence—sometimes directly, sometimes through the presence of another believer who brings news of God&apos;s faithfulness. Both are His hand.',
        },
        {
          kind: 'carry',
          html:
            'You may be tired today—carrying weight that does not belong on your shoulders alone. Watch for comfort. It may come in the form of a friend&apos;s arrival, a word that breaks the silence, news that settles your fears. When it comes, do not mistake it for coincidence. It is God, comforting those who are cast down.',
        },
        {
          kind: 'reflection',
          id: 'cor7-comfort-prompt',
          prompt:
            'What burden are you carrying right now that you have been afraid to set down? Who could you tell—and let their care become God&apos;s comfort to you?',
        },
      ],
    },

    /* ─── 2 Corinthians 7:8–9 — Repentance and Rejoicing ──────────── */
    {
      ref: '2 Corinthians 7:8–9',
      title: 'The Severe Letter Bore Fruit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              8,
              t('For though I made you sorry with a letter, I do not repent, '),
              hg('though I did repent', 'cor7-did-repent'),
              t(': for I perceive that the same epistle hath made you sorry, though it were but for a season.')
            ),
            verse(
              9,
              t('Now I rejoice, not that ye were made sorry, but that ye sorrowed to '),
              hp('repentance', 'cor7-metanoia'),
              t(': for ye were made sorry after a godly manner, that ye might receive damage by us in nothing.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor7-did-repent',
          html:
            'Paul had regretted sending the severe letter—grieved at having to wound those he loved. But then he learned the outcome. The wound produced healing. The hard word produced obedience. And Paul&apos;s regret transformed into confidence. Sometimes the most loving thing is to tell a hard truth.',
        },
        {
          kind: 'commentary',
          id: 'cor7-metanoia',
          html:
            'Paul does not rejoice that the Corinthians suffered. He rejoices that they <em>repented</em>. The distinction is crucial. Suffering for its own sake proves nothing. But suffering that leads a person away from sin and toward God—that is suffering with a purpose.',
        },
        {
          kind: 'greek',
          id: 'cor7-metanoia-full',
          title: 'Metanoia — &ldquo;Repentance&rdquo;',
          script: 'μετανοέω',
          translit: '<strong>metanoia</strong> · a turning around; reversal of mind and direction; change of course',
          description:
            'Not remorse. Not shame that looks inward. True repentance looks away from the sin and toward God. It is a 180-degree turn.',
        },
        {
          kind: 'christ',
          id: 'cor7-christ-repent',
          title: 'Christ Connection — The Penitent&apos;s Prayer',
          html:
            'In Luke 18, Jesus tells of a tax collector who stands far off, beats his breast, and cries, &ldquo;God, be merciful to me a sinner&rdquo; (Luke 18:13). That sorrow—godly sorrow—leads him home justified. Jesus says of him, &ldquo;This man went down to his house justified&rdquo; (Luke 18:14). Godly sorrow does not stop at the tears. It goes all the way home to God.',
        },
        {
          kind: 'carry',
          html:
            'If you are nursing regret today, ask yourself: What am I regretting? If it is that you caused pain to someone you love, that is a good sorrow—it opens the door to change. But don&apos;t stop at the sorrow. Let it lead you to turn. That is godly sorrow. That is repentance.',
        },
        {
          kind: 'reflection',
          id: 'cor7-repent-prompt',
          prompt:
            'When have you experienced sorrow that led you to genuine change? What did that turning around feel like? Where does God want you to turn now?',
        },
      ],
    },

    /* ─── 2 Corinthians 7:10 — Godly Sorrow vs. Worldly Sorrow ──────── */
    {
      ref: '2 Corinthians 7:10',
      title: 'Two Kinds of Sorrow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              10,
              t('For '),
              hp('godly sorrow worketh repentance to salvation', 'cor7-lype-kata-theon'),
              t(' not to be repented of: but '),
              hg('the sorrow of the world worketh death', 'cor7-worldly-sorrow'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor7-lype-kata-theon',
          html:
            'Godly sorrow is sorrow that has God in view. You grieve the wrong not because it makes you look bad, not because it embarrasses you, but because it separates you from God and damages others. That sorrow produces <em>metanoia</em>—a turning that issues in life.',
        },
        {
          kind: 'greek',
          id: 'cor7-lype-kata-theon-full',
          title: 'Lype Kata Theon — &ldquo;Godly Sorrow&rdquo;',
          script: 'λύπη κατὰ θεόν',
          translit: '<strong>lype kata theon</strong> · sorrow in the direction of God; grief oriented toward God',
          description:
            'Not self-focused shame, but sorrow that looks toward God, that turns toward His mercy, that is willing to change because the relationship with Him is what matters most.',
        },
        {
          kind: 'commentary',
          id: 'cor7-worldly-sorrow',
          html:
            '&ldquo;The sorrow of the world worketh death.&rdquo; Worldly sorrow is sorrow focused on yourself—on what you&apos;ve lost, how you look, how unfair things are, how you feel. It produces despair, bitterness, hardness. It is the sorrow that leads people to hide, to harden, to exit. It produces death.',
        },
        {
          kind: 'carry',
          html:
            'When you fail, when you sin, when you are caught, you will feel sorrow. The question is where it leads. Does it make you defensive, self-protective, bitter? That is worldly sorrow. Or does it make you honest, turning you toward God and toward repair? That is godly sorrow. Both are painful. Only one gives life.',
        },
        {
          kind: 'reflection',
          id: 'cor7-sorrow-kind',
          prompt:
            'Think of a time you felt sorrow. Where did it lead you? Toward God and repair, or toward shame and hiding? What is the difference?',
        },
      ],
    },

    /* ─── 2 Corinthians 7:11 — The Fruits of Repentance ──────────── */
    {
      ref: '2 Corinthians 7:11',
      title: 'What Repentance Produces',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              11,
              t('For behold this selfsame thing, that ye sorrowed after a godly sort, what carefulness it wrought in you, yea, what clearing of yourselves, yea, what indignation, yea, what fear, yea, what vehement desire, yea, what zeal, yea, '),
              hp('what revenge', 'cor7-spoudē'),
              t('! In all things ye have approved yourselves to be clear in this matter.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor7-spoudē',
          html:
            'Paul lists the fruit of godly sorrow: carefulness—they took the matter seriously. Clearing of themselves—they made their own house right. Indignation—they were angry at the sin. Fear—reverence in the face of God&apos;s standard. Vehement desire—hunger to be right with God and with Paul. Zeal—energy spent on correction. And &ldquo;revenge&rdquo;—not vengeance, but <em>ekdikesis</em>, a vindicating justice, a putting right of wrong. All of this is the fruit of one thing: godly sorrow that looked toward God.',
        },
        {
          kind: 'greek',
          id: 'cor7-spoudē-full',
          title: 'Spoudē — &ldquo;Carefulness&rdquo;; Zeal',
          script: 'σπουδή',
          translit: '<strong>spoudē</strong> · earnestness, diligence, zeal, eagerness; serious attention',
          description:
            'Not casual. Not half-hearted. Serious, focused energy. When godly sorrow grips a person, they move with purpose. They clean house. They make things right.',
        },
        {
          kind: 'christ',
          id: 'cor7-christ-vindicate',
          title: 'Christ Connection — Vindication Through Repentance',
          html:
            'In the Psalms, the righteous cry for vindication—for God to clear their name, to show their integrity. Repentance is a form of self-vindication: through turning, through humbling, through the fruits of changed life, a person proves the authenticity of their faith. Jesus said, &ldquo;By their fruits ye shall know them&rdquo; (Matt. 7:20). The Corinthians&apos; fruits vindicated their repentance.',
        },
        {
          kind: 'carry',
          html:
            'If you are working to repair something you&apos;ve broken—a relationship, a trust, your own integrity—know this: the work itself is the vindication. The effort, the seriousness, the willingness to change—these prove that your sorrow is genuine. Do not grow tired of the work. Let the fruits speak.',
        },
        {
          kind: 'reflection',
          id: 'cor7-fruits-prompt',
          prompt:
            'What does genuine repentance look like in your life? What &ldquo;fruits&rdquo; do you see—or need to see—as evidence of real change?',
        },
      ],
    },

    /* ─── 2 Corinthians 7:12–13 — Paul&apos;s Defense ──────────────── */
    {
      ref: '2 Corinthians 7:12–13',
      title: 'Vindication of Paul&apos;s Ministry',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              12,
              t('Wherefore, though I wrote unto you, I did it not for his cause that had done the wrong, nor for his cause that suffered wrong, but that our care for you in the sight of God might appear unto you.')
            ),
            verse(
              13,
              t('Therefore we were comforted in your comfort: and being comforted, we joyed the more exceedingly for the joy of Titus, because his spirit was refreshed by you all.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor7-paulcare',
          html:
            'Paul clarifies: the severe letter was not primarily about punishing one person or defending another. It was about revealing—to the church and to Paul himself—whether Paul&apos;s care for them was real. Did they trust him enough to take his hard word seriously? Did they love God enough to repent? The letter was a test of relationship. And the Corinthians passed.',
        },
        {
          kind: 'commentary',
          id: 'cor7-comfort-joy',
          html:
            'Paul speaks of being comforted by their comfort—and of joy, the more exceedingly. This is the fullness of pastoral joy: to see those you love turn from their wandering, to see them own their repentance, to see the Spirit work through them.',
        },
        {
          kind: 'carry',
          html:
            'If you are a parent, a mentor, a friend who has had to speak hard truth to someone you love, receive this: when they respond with genuine repentance, you are vindicated. Your care is made visible. The pain of speaking up was worth it. Do not apologize for loving someone enough to tell them hard things.',
        },
        {
          kind: 'reflection',
          id: 'cor7-care-prompt',
          prompt:
            'Who do you love enough to speak hard truth to? What would it take for you to do it—and to see their response as a sign of trust, not division?',
        },
      ],
    },

    /* ─── 2 Corinthians 7:14–16 — Titus and Confidence ───────────── */
    {
      ref: '2 Corinthians 7:14–16',
      title: 'Confidence Restored',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              14,
              t('For if I have boasted any thing to him of you, I am not ashamed; but as we spake all things to you in truth, even so our '),
              hy('boasting', 'cor7-apologia'),
              t(', which I made before Titus, is found a truth.')
            ),
            verse(
              15,
              t('And his inward affection is more abundant toward you, whilst he remembereth the obedience of you all, how with fear and trembling ye received him.')
            ),
            verse(
              16,
              t('I rejoice therefore that I have '),
              hp('confidence in you in all things', 'cor7-final-confidence'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor7-apologia',
          html:
            'Paul had spoken well of the Corinthians to Titus—had &ldquo;boasted&rdquo; about them. Titus comes, sees their repentance, and Paul&apos;s boasting is proven true. His confidence in them was not misplaced. They are, in fact, the serious believers he said they were.',
        },
        {
          kind: 'greek',
          id: 'cor7-apologia-full',
          title: 'Apologia — &ldquo;Clearing&rdquo;; Defense',
          script: 'ἀπολογία',
          translit: '<strong>apologia</strong> · a defense; a vindication; a reasoned clearing of oneself',
          description:
            'Paul&apos;s words about the Corinthians were not flattery or exaggeration. They were the truth. And the Corinthians proved it by their actions—their obedience, their fear and trembling, their genuine care.',
        },
        {
          kind: 'commentary',
          id: 'cor7-final-confidence',
          html:
            '&ldquo;I have confidence in you in all things.&rdquo; This is not naive optimism. It is the confidence that grows from evidence: they have repented genuinely; they have borne the fruit of repentance; they have proven their faith. Paul can trust them.',
        },
        {
          kind: 'christ',
          id: 'cor7-christ-final',
          title: 'Christ Connection — Christ&apos;s Confidence in Us',
          html:
            'Jesus told Peter, &ldquo;Thou art Peter, and upon this rock I will build my church&rdquo; (Matt. 16:18). Peter would deny Him, would fail repeatedly. Yet Jesus saw in him the rock he would become. God has that kind of confidence in you—not blind to your failures, but rooted in knowing the person you are becoming through faith in Christ. His confidence is not in your perfection. It is in His own power to transform you.',
        },
        {
          kind: 'carry',
          html:
            'Do you believe that God has confidence in you? Not confidence that you won&apos;t fail—you will. But confidence that you are becoming who He made you to be. If you have genuinely turned toward Him, if you bear the fruit of repentance, you can stand in that confidence. You are His work in progress, and the progress is real.',
        },
        {
          kind: 'reflection',
          id: 'cor7-final-prompt',
          prompt:
            'Where do you need to move from shame to confidence—confidence rooted not in your perfection, but in God&apos;s faithfulness to transform you? What is stopping you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'For godly sorrow worketh repentance to salvation not to be repented of: but the sorrow of the world worketh death.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 7 · Study Guide',
  },

  hasHebrew: false,
};
