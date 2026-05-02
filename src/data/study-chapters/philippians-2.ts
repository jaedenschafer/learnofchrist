import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Philippians 2 — The Mind of Christ; His Humiliation and Exaltation
 *
 * "Let this mind be in you, which was also in Christ Jesus." This chapter
 * contains what many scholars believe is the earliest sung confession of Christ
 * in Scripture—a hymn of His descent from the form of God to the death of the
 * cross, followed by His exaltation to the Name above every name. It is also
 * Paul&apos;s practical call to the Philippians to embody this same self-emptying
 * love in their relationships and witness.
 */
export const PHILIPPIANS_2: RichChapterContent = {
  bookSlug: 'philippians',
  bookName: 'Philippians',
  chapter: 2,

  intros: [
    'Philippians 2 opens with consolation, comfort, and an appeal: if you are a believer in Christ, resolve disputes. Cultivate humility. Regard others as better than yourselves. Then Paul offers the reason for this call—the ultimate example. Christ.',
    'What is the shape of Christ&apos;s example? Radical humiliation. He who was in the form of God, equal with the Father, made himself of no reputation. He took upon Him the form of a servant. He humbled Himself and became obedient unto death, even the death of the cross. But the passage does not end there. After the cross comes resurrection. After the grave comes exaltation. "Every knee should bow...every tongue should confess that Jesus Christ is Lord." The self-emptying is vindicated. The lowest point becomes the highest. This is the logic of the kingdom.',
    'Finally, Paul calls the Philippians to work out their own salvation with fear and trembling—yet assures them that God is working in them to will and to do of His good pleasure. They are to shine as lights in a crooked and perverse generation. And Paul commends two models: Timothy, who has no one like him in genuine care; and Epaphroditus, who risked death for the work of Christ.',
  ],

  opener: {
    matchArtist: /rembrandt/i,
    matchTitle: /christ|exalted|ascent/i,
    caption: 'The Mind of Christ',
  },

  bottomShare: {
    label: 'Share Philippians 2',
    quote:
      'Let this mind be in you which was also in Christ Jesus. Though He was equal with God, He humbled Himself, taking the form of a servant, and was obedient unto death—even the death of the cross. God has exalted Him, and every knee shall bow, confessing He is Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Philippians 2 · Study Guide',
  },

  sections: [
    /* ─── Philippians 2:1–4 — Consolation in Christ; Fulfill My Joy ──────── */
    {
      ref: 'Philippians 2:1–4',
      title: 'Consolation in Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('If there be therefore any '),
                hp('consolation in Christ', 'cons-christ'),
                t(', any comfort of love, any '),
                hy('fellowship of the Spirit', 'fellowship-spirit'),
                t(', any bowels and mercies;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cons-christ',
          html:
            'Paul opens not with command but with appeal. "If there be any consolation in Christ"—he is calling attention to what his readers have already experienced: the comfort, the sustenance, the nearness of Christ that they have tasted. He does not argue for Christ&apos;s reality; he invokes what they already know. The consolations of Christ are real. They have felt them.',
        },
        {
          kind: 'commentary',
          id: 'fellowship-spirit',
          html:
            '"Any fellowship of the Spirit"—<em>koinonia</em>, a word for participation, shared life. The Holy Spirit is not a distant force but a fellowship, a communion, a sharing with believers. Where Christ&apos;s consolation is felt, the Spirit&apos;s fellowship is known.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 2,
              spans: [
                t('Fulfil ye my joy, that ye be likeminded, having the same '),
                hg('love, being of one accord, of one mind', 'one-mind'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'one-mind',
          html:
            'Paul&apos;s joy is not abstract. It is fulfilled by concrete unity among the Philippians—by believers thinking the same way, loving with the same love, moving in the same direction. Yet this unity is not uniformity imposed from above. It grows from a single mindset: the mind of Christ.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('Let nothing be done through strife or vainglory; but in '),
                hg('lowliness of mind', 'lowliness'),
                t(' let each '),
                hp('esteem other better than themselves', 'esteem-other'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'lowliness',
          title: 'Tapeinophrosynē — &ldquo;Lowliness of Mind&rdquo;',
          script: 'ταπεινοφροσύνη',
          translit: '<strong>tapeinophrosynē</strong> · humility, lowliness, thinking oneself small',
          description:
            'Tapeinophrosynē was originally considered a weakness in Greek virtue, a failing. But Christ and Paul transformed it into the highest virtue—a mind that does not inflate itself, that measures itself honestly, that is willing to be less so others might be more. This is the mind Paul calls believers to cultivate.',
        },
        {
          kind: 'commentary',
          id: 'esteem-other',
          html:
            '"Esteem other better than themselves." Not false humility that denies real gifts. But a fundamental reorientation: in the habit of your mind, habitually consider the other person&apos;s good, dignity, and value as more urgent than your own. This is the opposite of the world&apos;s logic. Yet Paul does not present it as a burden. He presents it as the path to unified joy.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('Look not every man on his own things, but every man also on the things of '),
                hy('others', 'others-things'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'others-things',
          html:
            'This is the practical outworking of lowliness of mind. Your own needs do not disappear. But they are not the center of your vision. You train yourself to see the other person—their needs, their struggles, their growth. This is how a community moves toward unity and joy.',
        },

        {
          kind: 'carry',
          html:
            'The consolation of Christ is yours. The fellowship of the Spirit is real. Yet you are not called to enjoy these things in isolation. You are called to esteem others better than yourself—to look beyond your own needs and see the dignity and need of the person in front of you. This is how Christ&apos;s joy becomes your joy.',
        },
        {
          kind: 'reflection',
          id: 'lowliness-reflect',
          prompt:
            'Who is one person whose good you need to learn to prioritize over your own convenience this week? What would it look like to genuinely esteem them better than yourself?',
        },
      ],
    },

    /* ─── Philippians 2:5 — Let This Mind Be in You ───────────────────────── */
    {
      ref: 'Philippians 2:5',
      title: 'Let This Mind Be in You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 5,
              spans: [
                t('Let '),
                hp('this mind be in you, which was also in Christ Jesus', 'this-mind'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'this-mind',
          html:
            'This verse is the hinge of the chapter. Everything before it points toward it. Everything after it flows from it. "This mind"—the mind of humility, lowliness, concern for others—is not alien to the Philippians. It is not foreign teaching. It is the mind that was "also in Christ Jesus." Christ did not merely teach humility. He lived it. He embodied it. And Paul calls believers not simply to imitate Christ, but to <em>let this mind be in you</em>—to make it your own, to allow it to shape how you see and move through the world. This is the threshold. Everything that follows is the reason why.',
        },

        {
          kind: 'carry',
          html:
            'You are not called to become someone else. You are called to think like Jesus thought. To see like He saw. To value what He valued. This mind—this way of measuring the world—can be in you. Not as an idea, but as a lived reality, shaping your choices, your speech, your priorities, your relationships.',
        },
      ],
    },

    /* ─── Philippians 2:6 — Being in the Form of God ──────────────────────── */
    {
      ref: 'Philippians 2:6',
      title: 'In the Form of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 6,
              spans: [
                t('Who, '),
                hp('being in the form of God', 'form-god'),
                t(', '),
                hg('thought it not robbery to be equal with God', 'not-robbery'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'form-god',
          title: 'Morphē — &ldquo;Form&rdquo;',
          script: 'μορφή',
          translit: '<strong>morphē</strong> · form, shape, essential nature; not merely outward appearance',
          description:
            'Morphē refers not to shape but to essential nature. When Paul says Christ was "in the form of God," he means Christ possessed the essential nature of God. He was not wearing a God-suit; He was God. Yet this verse asserts both His divinity and the reality of the incarnation—He was genuinely human. The infinite entered finitude. The eternal entered time.',
        },
        {
          kind: 'greek',
          id: 'not-robbery',
          title: 'Harpagmos — &ldquo;Robbery&rdquo; or &ldquo;Grasping&rdquo;',
          script: 'ἁρπαγμός',
          translit: '<strong>harpagmos</strong> · grasping, snatching, something seized and held tightly',
          description:
            'Christ "thought it not robbery to be equal with God." He did not grasp at or cling to His equality. He did not insist on His rights. He did not demand the honor and worship that were rightly His. This is the mind of Christ—He possessed everything and clung to nothing. He was the Lord and became a servant by choice.',
        },
        {
          kind: 'commentary',
          id: 'form-god-comment',
          html:
            'Here lies the first movement of the hymn—the descent. Christ was equal with God, the divine nature, the form of God. Yet He did not clutch this equality. He did not say, "I will not let this go." He opened His hand. And in that opening of His hand lies the entire logic of redemption.',
        },

        {
          kind: 'christ',
          id: 'christ-incarnation',
          title: 'Christ Connection — The Divine Descent',
          html:
            'John opens his Gospel with the same truth: "In the beginning was the Word, and the Word was with God, and the Word was God...And the Word was made flesh" (John 1:1, 14). Philippians 2:6 is the doctrinal center of the incarnation. The divine nature did not change. But the divine person entered human life—finite, vulnerable, mortal. Hebrews says He "made himself of no reputation" and "took part of flesh and blood" (Heb. 2:14), "though he were a Son, yet learned obedience by the things which he suffered" (Heb. 5:8).',
        },

        {
          kind: 'reflection',
          id: 'form-god-reflect',
          prompt:
            'Christ possessed equality with God and did not grasp it. What equality or privilege or right do you need to release—not out of defeat, but out of love for others?',
        },
      ],
    },

    /* ─── Philippians 2:7a — Made Himself of No Reputation ─────────────────── */
    {
      ref: 'Philippians 2:7a',
      title: 'Made Himself of No Reputation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 7,
              spans: [
                t('But '),
                hg('made himself of no reputation', 'no-reputation'),
                t(', and '),
                hp('took upon him the form of a servant', 'form-servant'),
                t(', and was made in the likeness of men:'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'no-reputation',
          title: 'Kenoō — &ldquo;Emptied&rdquo; or &ldquo;Made of No Reputation&rdquo;',
          script: 'κενόω',
          translit: '<strong>kenoō</strong> · to empty, to render powerless, to strip of reputation or glory',
          description:
            'This is the verb behind the doctrine of kenosis—Christ&apos;s self-emptying. Yet this does not mean He emptied Himself of His divinity. Rather, He emptied Himself of the exercise of divine privileges. He became dependent. Vulnerable. Limited. He made Himself of no reputation—no prestige, no worldly honor, no platform that human eyes could see and instantly recognize.',
        },
        {
          kind: 'greek',
          id: 'form-servant',
          title: 'Doulos — &ldquo;Servant&rdquo; (Form of Servant)',
          script: 'δοῦλος',
          translit: '<strong>doulos</strong> · slave, servant; one who has no rights, who belongs wholly to another',
          description:
            'A doulos is not a hired servant with rights and a contract. A doulos is a slave—one whose life is not their own. When Christ took the form of a servant, He took the lowest position in the social order. He made Himself property. He made Himself available. He erased the distance between Himself and the most vulnerable.',
        },
        {
          kind: 'commentary',
          id: 'made-servant-comment',
          html:
            'The descent continues. Not only did Christ not grasp at equality; He positively took the form of a servant. He made Himself nothing—<em>kenosis</em>. The infinite confined to a body. The eternal bound in time. The all-knowing pretending ignorance so He could learn obedience. The almighty becoming a baby, dependent on a woman&apos;s milk.',
        },

        {
          kind: 'carry',
          html:
            'This is what it looks like to let the mind of Christ be in you. Not to inflate yourself. Not to preserve your status or protect your image. But to empty yourself. To serve. To make yourself available to the needs of others. To consider the other person&apos;s good worth the loss of your own comfort.',
        },
      ],
    },

    /* ─── Philippians 2:7b–8 — Obedient Unto the Death of the Cross ──────── */
    {
      ref: 'Philippians 2:7b–8',
      title: 'Obedient Unto the Death of the Cross',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 8,
              spans: [
                t('And being found in fashion as a man, he '),
                hp('humbled himself, and became obedient unto death, even the death of the cross', 'obedient-death'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'obedient-death',
          title: 'Hupakouō — &ldquo;Obedient&rdquo;',
          script: 'ὑπακούω',
          translit: '<strong>hupakouō</strong> · to listen under, to obey, to submit oneself to',
          description:
            'Hupakouō is a word of listening—listening to another, submitting to another&apos;s will. Christ, the One through whom the universe exists, became obedient to the Father. This obedience is the shape of His humanity and the pattern of redemption. He did not assert His will. He listened. He submitted. He obeyed unto death.',
        },
        {
          kind: 'commentary',
          id: 'death-cross-comment',
          html:
            'The descent reaches its nadir. "The death of the cross"—Paul does not merely say death. He specifies the cross. The cross is the most shameful, most excruciating form of execution Rome knew. The cross strips a person naked, exposes them to mockery, kills them slowly. For a Jewish believer, the cross carried an additional curse: "Cursed is every one that hangeth on a tree" (Deut. 21:23). Christ took not only death, but cursed death. He did not simply die; He was numbered with the transgressors, forsaken, bearing the judgment that was not His own.',
        },

        {
          kind: 'christ',
          id: 'christ-obedience',
          title: 'Christ Connection — Obedience as Redemption',
          html:
            'Romans 5:19 puts it plainly: "By one man&apos;s disobedience many were made sinners, so by the obedience of one shall many be made righteous." Christ&apos;s obedience unto death is the reversal of Adam&apos;s disobedience. Where Adam grasped at the fruit and fell into death, Christ released His claim on equality and ascended through death into life. Hebrews 5:8 says Christ "learned obedience by the things which he suffered"—His humanity was real, and His obedience was hard. Yet He chose it. He obeyed. For us.',
        },

        {
          kind: 'reflection',
          id: 'obedience-reflect',
          prompt:
            'Where is God calling you to obedience that feels costly? What would it look like to obey not out of compulsion but out of love, as Christ did?',
        },
      ],
    },

    /* ─── Philippians 2:9 — Highly Exalted Him ──────────────────────────────── */
    {
      ref: 'Philippians 2:9',
      title: 'Wherefore God Hath Highly Exalted Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 9,
              spans: [
                t('Wherefore God also hath '),
                hg('highly exalted him', 'highly-exalted'),
                t(', and given him a name which is above every name:'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'highly-exalted',
          title: 'Hyperupsoō — &ldquo;Highly Exalt&rdquo;',
          script: 'ὑπερυψόω',
          translit: '<strong>hyperupsoō</strong> · to raise up exceedingly, to exalt above all else',
          description:
            'Hyperupsoō is a superlative of exaltation—to exalt beyond all other exaltation. It appears nowhere else in the New Testament. Paul coins a new word to express the magnitude of Christ&apos;s vindication. He descended to the lowest; now He ascends to the highest. The movement is symmetrical, yet the exaltation far exceeds the humiliation.',
        },
        {
          kind: 'commentary',
          id: 'exaltation-begin',
          html:
            'Here the hymn turns. The descent is complete. Now begins the ascent. "Wherefore"—because of His obedience, because of His humiliation, God exalted Him. This is not reward in the usual sense. This is vindication. The cross appeared to be the end of the story. But God said no. He raised Christ from the dead. He seated Him at His right hand. He gave Him a name above every name.',
        },

        {
          kind: 'carry',
          html:
            'This is the reversal of all human logic. The path of humiliation becomes the path of exaltation. The emptying becomes the fullness. The servant becomes the Lord. And this is the pattern for you: when you empty yourself, when you serve, when you choose others over yourself, you are not losing. You are following Christ into the very structure of redemption. Humiliation and exaltation go together.',
        },
      ],
    },

    /* ─── Philippians 2:10–11 — Every Knee Shall Bow ──────────────────────── */
    {
      ref: 'Philippians 2:10–11',
      title: 'Every Knee Shall Bow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 10,
              spans: [
                t('That at the name of Jesus '),
                hp('every knee should bow', 'every-knee-comment'),
                t(', of things in heaven, and things in earth, and things under the earth;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'every-knee-comment',
          html:
            'Paul echoes Isaiah 45:23, where God speaks: "I have sworn by myself, the word is gone out of my mouth in righteousness, and shall not return, That unto me every knee shall bow." Isaiah applied this to God. Paul applies it to Jesus. This is the highest possible claim—that the universal worship due to God alone is rightly directed to Christ. Every creature in heaven, on earth, and under the earth will bow. Not some. Every. This is cosmic vindication.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 11,
              spans: [
                t('And that every tongue should '),
                hg('confess that Jesus Christ is Lord', 'confess-comment'),
                t(', to the glory of God the Father.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'confess-comment',
          html:
            '"Every tongue should confess that Jesus Christ is Lord, to the glory of God the Father." The confession that Jesus is Lord is the first Christian creed. Romans 10:9 makes confession of Christ&apos;s lordship essential to salvation. Here it is the culmination of the hymn—not private faith, but public, universal, joyful acknowledgment. And this confession redounds to the glory of God the Father. Christ&apos;s exaltation does not compete with the Father&apos;s glory; it manifests it. The Father is glorified in the Son.',
        },

        {
          kind: 'christ',
          id: 'christ-lordship',
          title: 'Christ Connection — Jesus Christ Is Lord',
          html:
            '"Jesus Christ is Lord" is not a statement that applies only to the future. It is already true. Yet it awaits the day when every creature will see it and confess it openly. Revelation 5 shows a vision of that day: all creation singing "Worthy is the Lamb" (Rev. 5:12). The exaltation of Christ is God&apos;s final word on the cross. The shame of Golgotha is answered by the throne of heaven. The death that looked like defeat becomes the victory that is ultimate.',
        },

        {
          kind: 'reflection',
          id: 'lordship-reflect',
          prompt:
            'What does it mean for you, right now, to confess that Jesus Christ is Lord? What part of your life are you still holding back from His lordship?',
        },
      ],
    },

    /* ─── Philippians 2:12–13 — Work Out Your Salvation ───────────────────── */
    {
      ref: 'Philippians 2:12–13',
      title: 'Work Out Your Own Salvation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 12,
              spans: [
                t('Wherefore, my beloved, as ye have always obeyed, not as in my presence only, but now much more in my absence, '),
                hp('work out your own salvation with fear and trembling', 'work-out'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'work-out',
          title: 'Katergazomai — &ldquo;Work Out&rdquo;',
          script: 'κατεργάζομαι',
          translit: '<strong>katergazomai</strong> · to accomplish, to work into effect, to realize fully',
          description:
            'Katergazomai is not mere effort. It means to bring something to completion, to work it through to its full realization. "Work out your salvation" does not mean <em>earn</em> your salvation—you cannot earn what is freely given. Rather, it means to <em>make real, actualize, live out</em> the salvation that Christ has purchased for you through His death and resurrection.',
        },
        {
          kind: 'commentary',
          id: 'work-out-comment',
          html:
            'Paul calls believers to work out their salvation "with fear and trembling." Not in panic, but with reverence and seriousness. This is not a casual endeavor. Your salvation is not merely something you possess; it is something you actualize, day by day, through obedience and growth. The Philippians have obeyed Paul&apos;s teaching while he was present; now, in his absence, they must continue—working out the implications of their salvation in their own context, their own relationships, their own choices.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 13,
              spans: [
                t('For it is God which '),
                hg('worketh in you both to will and to do of his good pleasure', 'god-works'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'god-works',
          html:
            'Here is the paradox at the heart of Christian life: you work, yet God is also working. Your effort and God&apos;s grace are not opposed. They are partners. God provides the will—the desire, the intention. God provides the power—the ability to do. You respond. You cooperate. You say yes to what God is already doing in you. This is not passivity; it is not works-righteousness. It is grace working through your willing cooperation.',
        },

        {
          kind: 'carry',
          html:
            'You are called to work out your salvation—to make it real through obedience, through growth, through the daily choices that demonstrate the mind of Christ. But this work is not your burden alone. God is working in you, shaping your desires, empowering your obedience. Your part is to respond. To say yes. To cooperate with the grace that is already at work.',
        },
        {
          kind: 'reflection',
          id: 'work-out-reflect',
          prompt:
            'What part of your salvation do you need to work out more fully this season? What would God accomplish in your will and your actions if you truly trusted that He was working in you?',
        },
      ],
    },

    /* ─── Philippians 2:14–15 — Shine as Lights in the World ──────────────── */
    {
      ref: 'Philippians 2:14–15',
      title: 'Shine as Lights in the World',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 14,
              spans: [
                t('Do all things without '),
                hy('murmurings and disputings', 'murmurings'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'murmurings',
          html:
            'Murmurings and disputings are small—whispered complaints, petty arguments. Yet they are corrosive. They undermine unity. They cloud the witness. When believers are known by their contentions and their secret grumblings, the world has no reason to listen. Paul calls the Philippians to do all things without these small erosions of faith.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 15,
              spans: [
                t('That ye may be blameless and harmless, the sons of God, without rebuke, in the midst of a crooked and perverse nation, among whom ye '),
                hp('shine as lights in the world', 'shine-lights'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'shine-lights',
          html:
            '"Ye shine as lights in the world." Not that you try to become lights. Not that you will become lights. But that you <em>are</em> lights. This is already your reality as believers. Your calling is to let that light shine. To not hide it under a basket. The world around you is described as "crooked and perverse"—twisted, dark. Into that darkness, God has placed you. Not to condemn. Not to withdraw. But to shine. To illuminate. To bear witness to the Light of the world.',
        },

        {
          kind: 'christ',
          id: 'christ-light-witness',
          title: 'Christ Connection — The Light of the World',
          html:
            'Jesus said, "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life" (John 8:12). Paul tells you: you shine as lights. You are reflectors of His light. The light that came into the world in Christ now shines through you—not your own brilliance, but His. This is not a burden; it is a gift. You are ambassadors of His light in a dark world.',
        },

        {
          kind: 'carry',
          html:
            'You are called to shine—to let the light of Christ that dwells in you shine into the darkness around you. This is not accomplished through grand gestures. It is accomplished through small, faithful choices: obedience without complaint, gentleness amid conflict, light in a dark place. The world is watching. And you, by the grace of God, are the answer to its darkness.',
        },

        {
          kind: 'reflection',
          id: 'shine-reflect',
          prompt:
            'In what "crooked and perverse" place are you called to shine this week? Who needs to see the light of Christ reflected in your choices, your speech, your presence?',
        },
      ],
    },

    /* ─── Philippians 2:16–18 — Holding Forth the Word of Life ───────────── */
    {
      ref: 'Philippians 2:16–18',
      title: 'Holding Forth the Word of Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 16,
              spans: [
                t('Holding forth the word of life; that I may rejoice in the day of Christ, that I have not run in vain, neither laboured in vain.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'holding-forth',
          html:
            'To "hold forth the word of life" means to present, to offer, to make available the message of the Gospel. Not to hide it. Not to keep it to yourself. But to hold it up, to lift it out, to say, "This is the answer. This is the truth. This is the life." Paul&apos;s great concern is that his labor not be in vain. His desire is to see the Philippians faithful, standing firm, offering the word of life to a generation in darkness.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 17,
              spans: [
                t('Yea, and if I be offered upon the '),
                hg('sacrifice and service of your faith', 'sacrifice-service'),
                t(', I joy, and rejoice with you all.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sacrifice-service',
          html:
            'Paul speaks of himself as possibly being "offered upon the sacrifice and service of your faith." This is the language of Jewish sacrifice—a drink offering poured out. Paul is willing, even eager, to pour out his life if it will advance the faith of the Philippians. His blood shed, his life spent, his death come—none of this diminishes his joy. Why? Because the faith of his beloved brothers and sisters is worth it.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 18,
              spans: [
                t('For the same cause also do ye joy, and rejoice with me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rejoice-together',
          html:
            'Paul calls the Philippians to join him in this joy. Not grief at his possible martyrdom. Not fear for his future. But joy—deep, spiritual joy that transcends circumstance. This is because their eyes are set on the same thing: the kingdom of Christ, the faithfulness of believers, the holding forth of the word of life. When you are united in purpose with others, even suffering becomes the occasion for joy.',
        },

        {
          kind: 'carry',
          html:
            'Your calling is to hold forth the word of life to a generation that is dying in darkness. This is not primarily a matter of eloquence or education. It is a matter of availability. Of willingness. Of opening your hand and offering what you have been given. And as you do, you align yourself with the great cloud of witnesses—with Paul, with the apostles, with all who have poured out their lives for the faith. You become part of something immeasurably larger than yourself.',
        },

        {
          kind: 'artwork',
          matchTitle: /light|witness|testimony/i,
          caption: 'Philippians 2:14–18 · Shining and Witnessing',
        },
      ],
    },

    /* ─── Philippians 2:19–30 — Timothy and Epaphroditus ───────────────────── */
    {
      ref: 'Philippians 2:19–30',
      title: 'Timothy and Epaphroditus: Models of the Mind of Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 19,
              spans: [
                t('But I trust in the Lord Jesus to send '),
                hg('Timotheus', 'timothy-intro'),
                t(' unto you shortly, that I also may be of good comfort, when I know your state.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'timothy-intro',
          html:
            'Paul plans to send Timothy to the Philippians. Timothy is not a theoretical figure. He is someone Paul knows deeply, has trained, has labored with. Timothy is young and vulnerable—later Paul will urge him not to let anyone despise his youth. Yet Paul trusts him with the church at Philippi.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 20,
              spans: [
                t('For I have no man likeminded, who will naturally care for your state.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'likeminded',
          html:
            'Paul gives Timothy the highest commendation: "I have no man likeminded." In other words, I have no one else who will genuinely care for your welfare, who will look not on his own things but on your things. Timothy has the mind of Christ. He esteems others better than himself. He does not merely carry out Paul&apos;s instructions; he loves the people he serves.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 21,
              spans: [
                t('For all seek their own, not the things which are Jesus Christ&apos;s.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'seek-own',
          html:
            'This is a sober assessment. "All seek their own"—not everyone, but the general tendency of the world is toward self-interest. Yet there is an alternative: the things which are Jesus Christ&apos;s. To seek His kingdom, His righteousness, His glory. Timothy has made this choice. He is exceptional precisely because he is not seeking his own things.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 22,
              spans: [
                t('But ye know the proof of him, that, as a son with the father, he hath served with me in the gospel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'timothy-proof',
          html:
            'Timothy&apos;s character is not theory; it is proven. He has served with Paul in the gospel as a son with a father. This is not hierarchy. This is intimacy. This is apprenticeship. The Philippians know Timothy. They have seen his faithfulness. They can trust him.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 23,
              spans: [
                t('Him therefore I hope to send presently, so soon as I shall see how it will go with me.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 24,
              spans: [
                t('But I trust in the Lord that I also myself shall come to you shortly.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 25,
              spans: [
                t('Yet I supposed it necessary to send to you '),
                hg('Epaphroditus', 'epaphroditus-intro'),
                t(', my brother, and companion in labour, and fellowsoldier, but your messenger, and he that ministered to my wants.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'epaphroditus-intro',
          html:
            'Paul now commends Epaphroditus. Where Timothy is to be sent, Epaphroditus is being returned to Philippi. Epaphroditus had come from the Philippian church to Paul with a gift and to serve him. He was their messenger, their apostle, their representative. The names given to him—brother, companion in labor, fellowsoldier—indicate intimacy and shared purpose.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 26,
              spans: [
                t('For he longed after you all, and was full of heaviness, because that ye had heard that he had been sick.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'epaphroditus-love',
          html:
            'Epaphroditus was sick—gravely ill. Yet his concern was not for himself. It was for the Philippians. He feared they would hear of his illness and be distressed. This is the mind of Christ: thinking of the other&apos;s need before your own suffering.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 27,
              spans: [
                t('For indeed he was sick nigh unto death: but God had mercy on him; and not on him only, but on me also, lest I should have sorrow upon sorrow.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'god-mercy',
          html:
            'Epaphroditus came near to death. God had mercy on him. Why? Not only for his sake, but to spare Paul additional sorrow. God is kind not just individually but communally. He considers the whole web of relationships and shows mercy that benefits more than one person.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 28,
              spans: [
                t('I sent him therefore the more carefully, that, when ye see him again, ye may rejoice, and that I may be the less sorrowful.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 29,
              spans: [
                t('Receive him therefore in the Lord with all gladness; and hold such in reputation:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'receive-gladness',
          html:
            'Paul calls the Philippians to receive Epaphroditus with joy and honor. Why? Because he has risked his life for the work of Christ. He has suffered. He has served. He deserves recognition not out of worldly acclaim but out of spiritual discernment—seeing his faithfulness and honoring it.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 30,
              spans: [
                t('For the work of Christ he was nigh unto death, not regarding his life, to supply your lack of service toward me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'work-christ',
          html:
            'Epaphroditus risked death not for money, not for glory, but for "the work of Christ." He came to serve Paul in the Philippians&apos; place—to be their hands, their feet, their servants. He "regarded not his life"—he was willing to die in service. This is the ultimate expression of the mind of Christ.',
        },

        {
          kind: 'christ',
          id: 'christ-servants',
          title: 'Christ Connection — The Way of the Servant',
          html:
            'Timothy and Epaphroditus are not extraordinary men. They are ordinary believers who have let the mind of Christ be in them. Timothy looks not on his own things. Epaphroditus risks his life without regard. This is what Christianity looks like in practice—not in theory, but in the concrete choices of ordinary people. Both men echo Jesus, who said, "Whosoever will come after me, let him deny himself, and take up his cross" (Mark 8:34).',
        },

        {
          kind: 'carry',
          html:
            'You have examples before you. Timothy. Epaphroditus. Paul. Each of them has let the mind of Christ shape their lives. Each of them has chosen to esteem others better than themselves. Each of them has been willing to risk, to sacrifice, to serve. You are not called to something different. You are called to the same. And as you do, you become a living letter of Christ to the world around you.',
        },

        {
          kind: 'reflection',
          id: 'timothy-epaphroditus-reflect',
          prompt:
            'Which of these servants—Timothy&apos;s care, Epaphroditus&apos;s willingness to risk—reflects better the direction God is calling you toward right now?',
        },

        {
          kind: 'artwork',
          matchTitle: /servant|fellowship|beloved|disciple/i,
          caption: 'Philippians 2:19–30 · Service and Faithfulness',
        },
      ],
    },
  ],
};
