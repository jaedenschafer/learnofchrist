import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Corinthians 13 — The Love Chapter
 *
 * Paul interrupts his teaching on spiritual gifts to make a staggering claim:
 * all the gifts in the world—prophecy, knowledge, faith, even martyrdom—without
 * love are nothing. This is love redefined. Not sentiment. Not romance. But the
 * self-giving, patient, kind, eternal power that sustains the body of Christ.
 */
export const FIRST_CORINTHIANS_13: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 13,

  estimatedMinutes: { beginner: 6, intermediate: 14, deep: 19 },
  intros: [
    'First Corinthians 12 describes the gifts—prophecy, healing, speaking in tongues, knowledge. The Corinthians prize them. They compete for them. They rank them. And Paul has affirmed that the gifts are real and vital. But then he says, "Let me show you a more excellent way." There is something greater than any gift.',
    'What follows is not a sermon on marriage or romantic love, though this chapter has graced a thousand wedding ceremonies. It is Paul&apos;s diagnosis of the Corinthian church: expert in gifts, catastrophic in love. They speak in tongues without love—mere noise. They move mountains without love—they are nothing. And he makes a breathtaking claim: love is the only thing that never fails. When prophecies end, when tongues cease, when knowledge vanishes, love endures. Love is eternal.',
    'This is love stripped bare. Not what we feel. What we do. Patient. Kind. Never envious. Never boasting. Never provoked. Bearing all things, enduring all things. Not a reward for the spiritual elite. The measure of what it means to follow Christ at all.',
  ],

  sections: [
    /* ─── 1 Corinthians 13:1–3 — Without Love, All Is Nothing ─────────── */
    {
      ref: '1 Corinthians 13:1–3',
      title: 'Without Love, All Is Nothing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(1, t('Though I speak with the tongues of men and of angels, and have not '), hy('charity', 'cor13-agape'), t(', I am become as sounding brass, or a tinkling cymbal.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-1-comment',
          html:
            'Paul starts with the highest achievement the Corinthians covet: speaking in tongues of men and angels. Ecstatic utterance. The voice of heaven itself. And without love—<em>agapē</em>—it is noise. Mere sound. A cymbal crashing in an empty room. There is no one there.',
        },
        {
          kind: 'greek',
          id: 'cor13-agape',
          title: 'Agapē — Love',
          script: 'ἀγάπη',
          translit: '<strong>agapē</strong> · self-giving love; the love of God',
          description:
            'Agapē is not eros (romantic desire) or philos (friendship)[res:perseus-agape-lexicon]. It is the radical, self-emptying love of God—the love that goes first, asks nothing, endures all things. It is the love that chose the cross.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(2, t('And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, and have not charity, I am '), hg('nothing', 'cor13-nothing'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-nothing',
          html:
            'Now Paul piles on the achievements. Not just eloquence—prophecy. Not just understanding—knowledge of all mysteries. Not just belief—faith to move mountains. These are the boasts of the spiritual elite. Yet the verdict is absolute: without love, <em>I am nothing.</em> Not "I have accomplished nothing." Not "my gifts are wasted." <em>I am nothing.</em> The whole person is emptied of worth.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(3, t('And though I bestow all my goods to feed the poor, and though I give my body to be burned, and have not charity, it '), hy('profiteth me nothing', 'cor13-profit'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-profit',
          html:
            'Paul goes to the limit: complete self-sacrifice. Giving away all wealth to feed the hungry. Surrendering one&apos;s own body to martyrdom. The ultimate acts of devotion. Yet without love, even these profit nothing. <em>Zero.</em> A sacrifice without love is not redemptive—it is merely loss.',
        },
        {
          kind: 'christ',
          id: 'cor13-christ-love',
          title: 'Christ Connection — Love Is the Heart of All Acts',
          html:
            'Jesus said the greatest commandments are to love God and to love your neighbor. All the law and prophets, He said, hang on these two (Matt. 22:37–40). Paul here echoes that. Every gift, every act of charity, every sacrifice finds its meaning only when love is the source. Christ&apos;s death on the cross was the supreme act of agapē—love that went to its death for those who rejected Him (Rom. 5:8).',
        },
        {
          kind: 'carry',
          html:
            'Whatever gifts you exercise—teaching, counsel, leadership, generosity—check their source. Are they born of love, or of something else? Pride? The need to be noticed? The desire to prove something? Let that distinction remake your day. If you speak a hard truth today, let it come from love. If you give, let it come from love. Without it, you are only noise.',
        },
        {
          kind: 'reflection',
          id: 'cor13-1-reflect',
          prompt: 'What spiritual gift or achievement are you most proud of? Now ask yourself honestly: what is the real source? Love, or something else?',
        },
      ],
    },

    /* ─── 1 Corinthians 13:4–5a — Charity Suffereth Long, and Is Kind ──── */
    {
      ref: '1 Corinthians 13:4–5a',
      title: 'Love Suffers Long, Love Is Kind',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(4, hy('Charity suffereth long', 'cor13-makro'), t(', and is '), hy('kind', 'cor13-kind'), t('; charity envieth not; charity vaunteth not itself, is not puffed up,')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-4-long-kind',
          html:
            'Paul begins the portrait of love. Two foundational marks. First: it <em>suffers long</em>—it is patient, forbearing, willing to bear with others over time. Second: it <em>is kind</em>—generous in spirit, not harsh, not quick to judge. These are not feelings. These are practices. The choice, made again and again, to slow down and show grace.',
        },
        {
          kind: 'greek',
          id: 'cor13-makro',
          title: 'Makrothymeō — Long-Suffering',
          script: 'μακροθυμέω',
          translit: '<strong>makro</strong> · long; <strong>thymos</strong> · wrath, heat. To have a long fuse.',
          description:
            'Makrothymeō is patience in the face of provocation. A long fuse. The willingness to absorb offense without retaliation. This is the love that Christ showed when falsely accused, mocked, crucified—and still prayed for His executioners (Luke 23:34).',
        },
        {
          kind: 'greek',
          id: 'cor13-kind',
          title: 'Chrēsteuomai — To Be Kind',
          script: 'χρηστεύομαι',
          translit: '<strong>chrēst</strong>- · fit, useful, good. To show practical kindness.',
          description:
            'This Greek verb means to prove oneself useful, to show practical goodwill. Not sweetness or sentimentality. The deliberate choice to act in the other person&apos;s interest, even when inconvenient.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(4, t('charity '), hg('envieth not', 'cor13-envy'), t('; charity '), hg('vaunteth not itself', 'cor13-vaunt'), t(', is not puffed up,')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-envy',
          html:
            'Love does not envy. It does not look at what the other person has and ache for it. No rivalry. No comparison. This is radical in a church full of people comparing their gifts. Someone else speaks in tongues and you don&apos;t? Don&apos;t envy. Someone else is prominent and you aren&apos;t? Don&apos;t envy. Love is freed from that calculus entirely.',
        },
        {
          kind: 'commentary',
          id: 'cor13-vaunt',
          html:
            'Love does not vaunt itself—does not parade its own superiority. Does not boast. Does not inflate itself. Paul knows the Corinthians. They have been puffed up by their gifts (1 Cor 4:6–8; 5:2). Each one convinced of their own importance. Love deflates all that. It is humble.',
        },
        {
          kind: 'carry',
          html:
            'Look at your day. Where are you tempted to envy? Which comparison gets under your skin? Which achievement are you most eager to announce? These are places where love is calling you to be small. To not need the glory. To be genuinely glad for someone else&apos;s good. This is the hardest work in Christianity.',
        },
        {
          kind: 'reflection',
          id: 'cor13-4-reflect',
          prompt: 'Who in your life seems to have something you secretly want—attention, success, influence? What would it look like to be genuinely glad for them instead?',
        },
      ],
    },

    /* ─── 1 Corinthians 13:5b – Doth Not Behave Unseemly ──────────────── */
    {
      ref: '1 Corinthians 13:5b',
      title: 'Love Does Not Behave Unseemly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(5, t('Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil;')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-5-unseemly',
          html:
            'Love does not behave unseemly—does not act indecently or inappropriately. It maintains dignity and respect, even in conflict. It is not rude. It does not violate boundaries or demand its own way regardless of the cost to others. There is a restraint here. A self-awareness. A willingness to step back and ask: <em>What does this situation require of me?</em>',
        },
        {
          kind: 'commentary',
          id: 'cor13-5-own',
          html:
            'Love <em>seeketh not her own.</em> It does not advance its own interests at the expense of the community. It does not put the self at the center. This is maybe the hardest thing Paul will say. We are wired to seek our own. To protect ourselves. To get ours. Love asks you to step aside.',
        },
        {
          kind: 'commentary',
          id: 'cor13-5-provoked',
          html:
            'Love <em>is not easily provoked.</em> It takes a lot to make it angry. It does not look for offense. Does not assume the worst. A colleague says something off-color and love doesn&apos;t erupt. Someone cuts you off in traffic and love doesn&apos;t spend the next hour rehearsing the insult. This is not passivity. It is the strength to stay calm when every nerve says <em>react.</em>',
        },
        {
          kind: 'greek',
          id: 'cor13-paroxyn',
          title: 'Paroxynomai — To Be Provoked',
          script: 'παροξύνομαι',
          translit: '<strong>paro</strong>- · beside; <strong>xyn</strong> · sharp. To be sharpened up, to be irritated.',
          description:
            'This verb has the sense of being sharpened to a point—made sharp by irritation. Love is not easily sharpened. It does not go sharp when rubbed the wrong way. This is the work of the Spirit to transform a quick-to-anger heart into one that stays gentle.',
        },
        {
          kind: 'commentary',
          id: 'cor13-5-evil',
          html:
            'Love <em>thinketh no evil.</em> It does not calculate offenses. Does not keep a ledger of wrongs. Does not rehearse the ways it has been mistreated. This is not naïveté—it is mercy. To meet someone today without bringing all the past into the room. To give them the chance to be new.',
        },
        {
          kind: 'carry',
          html:
            'You will be provoked today. Someone will be rude. Someone will cut corners. Someone will take credit for your work. The question is not whether you will be tempted to react—you will. The question is whether love has room to move in you. Can you sit with it for a minute? Can you ask what the other person really needs instead of what you need to prove?',
        },
        {
          kind: 'reflection',
          id: 'cor13-5-reflect',
          prompt: 'When was the last time you were provoked? Walk back through it. What would love have looked like in that moment?',
        },
      ],
    },

    /* ─── 1 Corinthians 13:6–7 — Love Rejoices in Truth, Bears All Things ─ */
    {
      ref: '1 Corinthians 13:6–7',
      title: 'Love Rejoices in Truth and Bears All Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(6, hg('Rejoiceth not in iniquity', 'cor13-iniquity'), t(', but '), hg('rejoiceth with the truth', 'cor13-truth'), t(';')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-iniquity',
          html:
            'Love does not rejoice in iniquity—does not take pleasure in wrongdoing, does not celebrate when someone else falls. There is no schadenfreude in love. No secret satisfaction when an enemy stumbles.',
        },
        {
          kind: 'commentary',
          id: 'cor13-truth',
          html:
            'Instead, love rejoices with the truth. It delights when truth wins. When injustice is exposed. When the right thing is finally done. Love is on the side of what is real and good.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(7, hg('Beareth all things', 'cor13-bear'), t(', '), hg('believeth all things', 'cor13-believe'), t(', '), hg('hopeth all things', 'cor13-hope'), t(', '), hg('endureth all things', 'cor13-endure'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-bear',
          html:
            'Love <em>beareth all things.</em> It carries all burdens. Not because it doesn&apos;t notice the weight. But because the other person matters more than the cost. This is the love that stays with someone in their darkest hour. That doesn&apos;t run when things get hard.',
        },
        {
          kind: 'commentary',
          id: 'cor13-believe',
          html:
            'Love <em>believeth all things.</em> This does not mean naïveté—that you believe every lie. Rather: love tends toward trust. Love gives the benefit of the doubt. Love assumes the best until proven otherwise. This is the posture of faith, not cynicism.',
        },
        {
          kind: 'commentary',
          id: 'cor13-hope',
          html:
            'Love <em>hopeth all things.</em> It does not write people off. Does not say <em>they&apos;re beyond help</em> or <em>they&apos;ll never change.</em> Love looks at someone in their worst moment and still sees the possibility of redemption. This is the theology of the gospel—that no one is past God&apos;s reaching.',
        },
        {
          kind: 'commentary',
          id: 'cor13-endure',
          html:
            'Love <em>endureth all things.</em> It lasts. It does not crack under pressure. It does not abandon the post when the struggle gets long. This is the only word here about time—and it matters. Love is not a flash. It is a commitment that holds through decades.',
        },
        {
          kind: 'christ',
          id: 'cor13-christ-bear',
          title: 'Christ Connection — Love That Bears the Cross',
          html:
            'All four of these—bearing, believing, hoping, enduring—reach their apex in Christ on the cross. He bore the weight of sin. He believed in the possibility of human redemption even as they killed Him. He endured the shame, the agony, the seeming finality of death. And then the resurrection proved His hope was warranted. This is the pattern of Christian love: willingness to carry, to trust, to keep hoping, to not let go.',
        },
        {
          kind: 'carry',
          html:
            'Is there someone in your life you&apos;ve nearly written off? Someone whose weight feels too heavy? Love is asking you to bear a little longer. To believe they can still change. To hope when the evidence is discouraging. Not because it&apos;s smart or safe, but because this is what it means to be formed by Christ.',
        },
        {
          kind: 'reflection',
          id: 'cor13-7-reflect',
          prompt: 'Who needs you to bear with them longer? What would it look like to extend hope to someone you&apos;ve been tempted to give up on?',
        },
      ],
    },

    /* ─── 1 Corinthians 13:8–10 — Love Never Faileth ────────────────────── */
    {
      ref: '1 Corinthians 13:8–10',
      title: 'Love Never Faileth; All Else Shall Cease',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(8, hy('Charity never faileth', 'cor13-never-fail'), t(': but whether there be prophecies, they shall fail; whether there be tongues, they shall cease; whether there be knowledge, it shall vanish away.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-never-fail',
          html:
            'This is the hinge of the chapter. <em>Charity never faileth.</em> It does not expire. It does not become obsolete. When everything the Corinthians prize—prophecy, tongues, knowledge—has passed away, love will still be standing. This is why Paul can make the claim: love is greater. Not because it is more impressive to watch. But because it is the only thing that lasts.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(9, t('For we know in part, and we prophesy in part.')),
            verse(10, t('But when that which is perfect is come, then that which is in part shall be done away.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-perfect',
          html:
            'Paul explains. Our knowledge is partial. Our prophecy is partial. Our understanding is shadow-work. We are squinting at reality through a glass. And when completeness comes—when Christ returns, when we stand face to face—all that fragmentary knowledge will be set aside. We will need the pieces no longer. But we will still need love.',
        },
        {
          kind: 'carry',
          html:
            'How much energy do you spend on things that will be done away? Acquiring knowledge, mastering skills, building a reputation? None of these is worthless—they are your calling. But they are all temporary. They are all partial. Love is the one thing you are building that will not be made obsolete. It will be the texture of eternity.',
        },
        {
          kind: 'reflection',
          id: 'cor13-8-reflect',
          prompt: 'What achievement or success are you chasing that you might not care about in ten years? What does that tell you about what matters?',
        },
      ],
    },

    /* ─── 1 Corinthians 13:11–12 — When That Which Is Perfect Is Come ──── */
    {
      ref: '1 Corinthians 13:11–12',
      title: 'From Child to Adult; Through a Glass Darkly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(11, t('When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-child',
          html:
            'Paul uses a simple picture. As a child, he spoke, understood, thought like a child. There was nothing wrong with that—it was appropriate to his stage. But maturity meant putting those things away. Not in regret. But in moving forward. The Corinthians are acting like children in their obsession with the flashy gifts. Paul is calling them to grow up. To see that love is the mark of maturity.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(12, t('For now we see through a '), hy('glass', 'cor13-glass'), t(', darkly; but then '), hy('face to face', 'cor13-face'), t(': now I know in part; but then shall I know even as also I am known.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-glass',
          html:
            'Paul shifts the image. Now is like looking into a mirror—the ancient polished bronze[res:met-bronze-mirrors] that gave a cloudy reflection. We see <em>through</em> it, darkly. The image is warped. We are guessing at the shape of things. Our prophecy, our knowledge—all of it is distorted by the limits of our sight. We are trying to read the face of reality in a funhouse mirror.',
        },
        {
          kind: 'greek',
          id: 'cor13-esoptron',
          title: 'Esoptron — Mirror or Glass',
          script: 'ἔσοπτρον',
          translit: '<strong>esoptron</strong> · a mirror, especially of polished bronze',
          description:
            'Ancient mirrors were polished bronze—never perfectly clear. The reflection was always dim, always slightly distorted. Paul uses this to capture how fragmentary our knowledge is. We see reality as through a warped glass. Only Christ, seen face to face, will give us clarity.',
        },
        {
          kind: 'commentary',
          id: 'cor13-face',
          html:
            'But then comes the promise: <em>face to face.</em> No more mirror. No more shadow. You will see the person directly. And in that moment, the fullness will be revealed. You will know even as also you are known. God knows you completely now—sees the whole of you, the beautiful and the broken, and loves you completely. In the end, you will know Him the same way.',
        },
        {
          kind: 'christ',
          id: 'cor13-christ-face',
          title: 'Christ Connection — To See Him Face to Face',
          html:
            'This is the fulfillment Paul points to. When Christ returns, we will not see the world through a glass darkly. We will see Him. "When he shall appear, we shall be like him; for we shall see him as he is" (1 John 3:2). The partial knowledge that puffed the Corinthians up with pride will be replaced by the fullness of seeing Christ Himself. And in that presence, love—which knows and is known—will be the only language that remains.',
        },
        {
          kind: 'carry',
          html:
            'You are looking through a glass darkly right now. The picture of someone you judge is incomplete. Your understanding of why they did what they did is partial. The clarity you think you have is actually quite murky. This is a call to humility. To love people anyway, knowing you don&apos;t have the whole truth about them. To hold your judgments lightly.',
        },
        {
          kind: 'reflection',
          id: 'cor13-12-reflect',
          prompt: 'Who do you judge most harshly? What if the glass you&apos;re looking through is more distorted than you think? What would it look like to love them through that distortion?',
        },
      ],
    },

    /* ─── 1 Corinthians 13:13 — The Greatest of These Is Charity ────────── */
    {
      ref: '1 Corinthians 13:13',
      title: 'Faith, Hope, Charity—The Greatest Is Charity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(13, t('And now abideth faith, hope, '), hg('charity', 'cor13-trinity-grace'), t(', these three; but the greatest of these is charity.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor13-trinity-grace',
          html:
            'Paul names the three virtues that survive into eternity: faith, hope, and charity. These three remain when everything else has passed away. <em>And now abideth</em>—present tense. They are already at work in you. Faith trusts God in the darkness. Hope believes in a future that hasn&apos;t happened yet. But love—<em>agapē</em>—is doing something right now, in this moment, to the person in front of you. This echo of Hebrew <em>chesed</em>[res:sefaria-hosea-chesed] (steadfast mercy) and the Greek philosophical traditions of love[res:theoi-four-loves] converge in Paul&apos;s vision.',
        },
        {
          kind: 'commentary',
          id: 'cor13-greatest',
          html:
            'The verdict: <em>the greatest of these is charity.</em> Not because faith and hope don&apos;t matter. They do. But love is the one that encompasses them. Faith without love is mere assent to doctrine. Hope without love is wishful thinking. But love? Love is faith expressed as action. Love is hope made visible. Love is the fruit bearing the seed.',
        },
        {
          kind: 'christ',
          id: 'cor13-christ-greatest',
          title: 'Christ Connection — Love as the Greatest Commandment',
          html:
            'When asked what the greatest commandment was, Jesus said: love the Lord your God with all your heart, and love your neighbor as yourself (Matt. 22:37–39). He did not say "believe the right doctrine" or "hope for the right things." He said <em>love.</em> And then He lived it. Every healing an act of love. Every meal shared an act of love. The cross itself an act of love. Christ is the measure of charity. And charity is the only thing worth living for.',
        },
        {
          kind: 'carry',
          html:
            'This is where all the theory comes down. You will not take your theology with you. You will not take your reputation. You will not take the languages you mastered or the truths you defended so fiercely. But you will carry with you every act of love you made space for. Every person you chose to bear with. Every moment you slowed down and treated someone as if they mattered—because they did. This is the only thing that endures.',
        },
        {
          kind: 'reflection',
          id: 'cor13-13-reflect',
          prompt: 'Look back on your life. What moments are you most grateful for? What do they have in common? What is that telling you about what to build toward?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'artwork',
          matchTitle: /wedding|love|charity/i,
          caption: '1 Corinthians 13 · The Love Chapter',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And now abideth faith, hope, charity, these three; but the greatest of these is charity.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 13 · Study Guide',
  },

  resources: [
    {
      id: 'perseus-agape-lexicon',
      kind: 'lexicon',
      source: 'Perseus Digital Library',
      label: 'Agapē, Philos, Eros: Greek Love Words',
      url: 'https://scaife.perseus.org/dictionaryLookup?q=agape',
      description: 'Lexical entry from the LSJ Greek-English lexicon comparing agapē with philos and eros across classical and New Testament texts.',
    },
    {
      id: 'sefaria-hosea-chesed',
      kind: 'study',
      source: 'Sefaria Library',
      label: 'Hosea &amp; Hebrew Chesed',
      url: 'https://www.sefaria.org/search?q=chesed+hosea',
      description: 'Sefaria&apos;s open-access Hebrew scripture search tool — trace chesed (covenant love) through Hosea&apos;s portrait of God&apos;s unfailing mercy.',
    },
    {
      id: 'met-bronze-mirrors',
      kind: 'archaeology',
      source: 'The Metropolitan Museum of Art',
      label: 'Ancient Roman Bronze Mirrors',
      url: 'https://www.metmuseum.org/art/collection?q=bronze%20mirror%20Roman',
      description: 'Collection of polished bronze mirrors from the Roman period — actual artifacts matching Paul&apos;s image of seeing &quot;through a glass, darkly&quot; at 1 Corinthians 13:12.',
    },
  ],

  hasHebrew: false,
};
