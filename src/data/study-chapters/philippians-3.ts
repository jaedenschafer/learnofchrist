import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * Philippians 3 — Loss Is Gain; Knowing Christ Above All
 *
 * "I count all things but loss for the excellency of the knowledge of Christ
 * Jesus my Lord." Philippians 3 is Paul&apos;s personal testimony. He once had
 * credentials, status, achievements. Everything the world considers valuable.
 * Then he met Christ. And he counted it all garbage. Not from despair, but
 * from the overwhelming superiority of knowing Christ. This is the heart of
 * the entire book of Philippians: everything he had counted as gain became
 * loss for the surpassing knowledge of Christ Jesus.
 */
export const PHILIPPIANS_3: RichChapterContent = {
  bookSlug: 'philippians',
  bookName: 'Philippians',
  chapter: 3,

  estimatedMinutes: { beginner: 7, intermediate: 15, deep: 23 },
  intros: [
    'Paul begins Chapter 3 by warning against false teachers who insist that works or circumcision earn righteousness. But then he pivots. He does not argue with them. Instead, he tells his own story. He had everything such teachers could boast about—the right pedigree, the right status, the right zeal. He was, by every measure that mattered to his culture, a success. Then he met Christ. And his entire accounting system shifted.',
    'The language is crucial. He did not deny the reality of these things. His birth was real, his credentials were real, his achievements were real. He reassessed their value. And the reassessment was not made from failure—it was made from encounter. He had met Christ. That meeting transformed how he valued everything else. This is the logic of conversion: not denial of the old, but recognition that the new infinitely outweighs it.',
    'Philippians 3 is Paul&apos;s most personal chapter. It is not theology delivered from a distance. It is autobiography. And it is an invitation to the Philippians—and to us—to make the same reassessment. What are you holding onto? What credentials are you counting on? What are you willing to lose? The chapter closes not with an answer but with a call to press forward, to strain toward Christ, to be transformed into His likeness.',
  ],

  opener: {
    matchTitle: /gain|loss|treasure|race|prize|crown/i,
    matchArtist: /rembrandt|tissot|michelangelo/i,
    caption: 'Philippians 3: Everything Counted as Loss',
  },

  bottomShare: {
    label: 'Share Philippians 3',
    quote:
      'I count all things but loss for the excellency of the knowledge of Christ Jesus my Lord. Paul abandoned human credentials and achievements—the very things he once treasured—to gain Christ. Everything he had counted as gain became loss for the surpassing worth of knowing Him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Philippians 3 · Study Guide',
  },

  sections: [
    {
      ref: 'Philippians 3:1',
      title: 'Rejoice in the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              1,
              t('Finally, my brethren, '),
              hp('rejoice in the Lord', 'p3-rejoice'),
              t('. To write the same things to you, to me indeed is not grievous, but for you it is safe.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'p3-rejoice',
          html:
            'Paul opens with a simple command: rejoice. Chara in Greek—joy, gladness. This is the theme of the entire letter to the Philippians. Paul is writing from prison, awaiting trial that could end in execution. Yet he calls them to joy. Not happiness based on circumstances, but joy based on Christ. Before he warns against false teachers, before he tells his personal story, he establishes the foundation: your life is rooted in rejoicing.',
        },
        {
          kind: 'carry',
          html:
            'The command to rejoice comes before the warning against error. Joy is not optional in the Christian life. It is not something you earn through success or acquire through favorable circumstances. It is something you practice, a discipline, a choice made available to you because Christ is your foundation. Even now—in your doubt, your struggle, your uncertainty—you are invited to rejoice.',
        },
      ],
    },

    {
      ref: 'Philippians 3:2–3',
      title: 'Beware of Dogs and False Teachers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              2,
              hy('Beware of dogs, beware of evil workers, beware of the concision', 'p3-beware-all'),
              t('.'),
            ),
            verse(
              3,
              t('For we are the '),
              hp('circumcision', 'p3-true-circumcision'),
              t(', which worship God in the spirit, and rejoice in Christ Jesus, and have no confidence in the flesh.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'p3-beware-all',
          html:
            'Paul uses sharp language here. "Dogs" in Jewish culture were unclean animals. Paul is using a polemical term to describe false teachers who insist that gentile believers must be circumcised and keep Jewish law to be truly saved. "Evil workers"—their insistence on law-keeping as a path to righteousness is destructive. It undermines the sufficiency of Christ. Then Paul pivots to "the concision"—a brilliant rhetorical move. The word katatomē sounds like "circumcision" (peritomē) but means "concision," a mere cutting, a mutilation, a scar. He is saying that mere circumcision, without faith in Christ, is just an external mark, meaningless. The true circumcision is the circumcision of the heart.',
        },
        {
          kind: 'greek',
          id: 'p3-katatomē',
          title: 'Katatomē — "Concision"',
          script: 'κατατομή',
          translit: '<strong>katatomē</strong> · a cutting; mutilation; concision; a word-play on peritomē (circumcision)',
          description:
            'Paul deliberately chooses a harsh word that sounds like "circumcision" but means "concision"—a cutting, a mutilation, a mere external mark. It is a brilliant rhetorical move. The true circumcision is the circumcision of the heart.',
        },
        {
          kind: 'commentary',
          id: 'p3-true-circumcision',
          html:
            '"We are the circumcision." This is Paul&apos;s answer. The true people of God are not those who have undergone an external rite, but those who "worship God in the spirit, and rejoice in Christ Jesus, and have no confidence in the flesh." Circumcision meant nothing without faith. What matters is the condition of the heart.',
        },
        {
          kind: 'carry',
          html:
            'Every generation has its "dogs"—people who insist that something external will save you. A ritual, a rule, an identity. Paul&apos;s message is radical and still hard to hear: none of it matters. What matters is your heart turned toward Christ. Everything else—your accomplishments, your background, your credentials—will not secure you. Only Christ will.',
        },
        {
          kind: 'reflection',
          id: 'p3-beware-reflect',
          prompt:
            'What external thing are you tempted to trust in to make you acceptable to God? A behavior, a pedigree, a ritual, a rule? What would it mean to renounce "confidence in the flesh" and rest only in Christ?',
        },
      ],
    },

    {
      ref: 'Philippians 3:4–6',
      title: 'The Credentials That Once Mattered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              4,
              t('Though I might also have confidence in the flesh. If any other man thinketh that he hath whereof he might trust in the flesh, I more:'),
            ),
            verse(
              5,
              hy('Circumcised the eighth day, of the stock of Israel, of the tribe of Benjamin, an Hebrew of the Hebrews; touching the law, a Pharisee', 'p3-credentials'),
              t(';'),
            ),
            verse(
              6,
              t('Concerning zeal, persecuting the church; touching the righteousness which is in the law, '),
              hg('blameless', 'p3-blameless'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'p3-credentials',
          html:
            'Paul now does something remarkable. He lists his pedigree. "Circumcised the eighth day"—not a proselyte or a half-Jew, but marked at infancy as a covenant son. "Of the stock of Israel"—a true Israelite. "Of the tribe of Benjamin"—the tribe of the first king, the tribe whose territory included Jerusalem. "An Hebrew of the Hebrews"—he spoke Hebrew, lived in the Hebrew tradition, was not Hellenized. By every measure of cultural honor and religious legitimacy, Paul was the real thing. He was even a <em>Pharisee[res:pharisaic-righteousness-sbl]</em>—the most rigorous sect, known for keeping not just the written law but the oral traditions as well. He was among the most devout.',
        },
        {
          kind: 'commentary',
          id: 'p3-blameless',
          html:
            '"Touching the righteousness which is in the law, blameless." This is not false humility. By the standard of external obedience to the law, Paul was blameless. He was not breaking the rules. He was succeeding. He was a first-class Jew, by any measure the culture valued.',
        },
        {
          kind: 'greek',
          id: 'p3-amemptos',
          title: 'Amemptos — "Blameless"',
          script: 'ἄμεμπτος',
          translit: '<strong>amemptos</strong> · without blame; faultless; irreproachable',
          description:
            'The word means literally "not to be blamed." It is used in Philippians 2:15 (believers as blameless and harmless children of God) and 1 Thessalonians 3:13 (hearts blameless before God). For Paul as a Pharisee, blamelessness was the goal and the achievement.',
        },
        {
          kind: 'carry',
          html:
            'Paul is showing you his resume. Everything he lists, he earned. Everything he kept, he achieved. And he was successful. By the standards of his culture, he was exemplary. Then he met Christ. And suddenly, every line item on that resume became a liability.',
        },
        {
          kind: 'reflection',
          id: 'p3-resume-reflect',
          prompt:
            'What would you list on your resume of accomplishments? What credentials do you count on? What successes have you achieved? What would it cost you to count them as loss?',
        },
        {
          kind: 'artwork',
          matchTitle: /pharisee|jewish|hebrew|ancient judaism/i,
          caption: 'Philippians 3:4–6 · Paul&apos;s Credentials',
        },
      ],
    },

    {
      ref: 'Philippians 3:7–9',
      title: 'Everything Counted as Loss for Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              7,
              t('But what things were gain to me, those I '),
              hp('counted loss for Christ', 'p3-loss'),
              t('.'),
            ),
            verse(
              8,
              t('Yea doubtless, and I count all things but '),
              hg('loss for the excellency of the knowledge of Christ Jesus my Lord', 'p3-excellency'),
              t(': for whom I have suffered the loss of all things, and do count them but '),
              hy('dung', 'p3-dung'),
              t(', that I may win Christ,'),
            ),
            verse(
              9,
              t('And be found in him, not having mine own righteousness which is of the law, but that which is through the faith of Christ, the '),
              hp('righteousness which is of God by faith', 'p3-righteousness-god'),
              t(':'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'p3-loss',
          html:
            '"I counted loss for Christ." The shift happens at the moment of encounter. Paul does not say his credentials became worthless. He says he "counted" them loss—he made an accounting decision. He reassessed their value. In light of Christ, the profit margin shifted. What once looked like gain now looked like loss.',
        },
        {
          kind: 'commentary',
          id: 'p3-excellency',
          html:
            '"The excellency of the knowledge of Christ Jesus my Lord." Paul uses two words that deserve attention. "Excellency" (hyperechon) is literally something that stands out above and beyond. It surpasses, exceeds, transcends everything else. And "knowledge"—not abstract information, but intimate, relational knowledge. He is saying Christ is incomparable. Nothing else can be named in the same breath.',
        },
        {
          kind: 'greek',
          id: 'p3-zēmia',
          title: 'Zēmia — "Loss"',
          script: 'ζημία',
          translit: '<strong>zēmia</strong> · loss; damage; detriment; penalty',
          description:
            'The word appears in Matthew 16:26 (Jesus: "For what is a man profited, if he shall gain the whole world, and lose his own soul?"). It is the opposite of gain. Paul uses it twice in verse 8: all things become loss compared to knowing Christ.',
        },
        {
          kind: 'commentary',
          id: 'p3-dung',
          html:
            '"Do count them but dung." The word is brutal. Skybalon in Greek—refuse, garbage, waste. Paul is not saying his credentials were mediocre. He is saying they are trash. Worthless. To be thrown away. He counts them loss not because they were never real or never valuable, but because in light of Christ they are utterly inferior.',
        },
        {
          kind: 'greek',
          id: 'p3-skybalon',
          title: 'Skybalon — "Dung"',
          script: 'σκύβαλον',
          translit: '<strong>skybalon</strong> · refuse; garbage; dung; excrement; filth to be discarded',
          description:
            'This is one of the harshest words Paul uses. He is saying that his former achievements—everything he accomplished through law-keeping—are now refuse to be thrown away. The only thing worth keeping is Christ. Everything else is trash.',
        },
        {
          kind: 'commentary',
          id: 'p3-righteousness-god',
          html:
            '"The righteousness which is of God by faith." Here is the replacement. Not a righteousness Paul produces by his own effort—that was "righteousness which is in the law." But a righteousness that comes from God Himself, "by faith." It is a gift, not an achievement. It cannot be lost because it does not depend on his performance. It depends on Christ&apos;s righteousness imputed to the believer.',
        },
        {
          kind: 'greek',
          id: 'p3-hyperechon',
          title: 'Hyperechon — "Excellency" (Surpassing)',
          script: 'ὑπερέχον',
          translit: '<strong>hyperechon</strong> · to stand over and above; to exceed; to surpass; to be superior',
          description:
            'The word appears in Philippians 3:8 and 4:7. It is something that stands above everything else, that transcends comparison. Paul is saying the knowledge of Christ is categorically supreme.',
        },
        {
          kind: 'christ',
          id: 'p3-christ-supreme-worth',
          title: 'Christ Connection — The Surpassing Treasure',
          html:
            'Paul echoes Jesus&apos; parable of the treasure in the field: "The kingdom of heaven is like unto treasure hid in a field; the which when a man hath found, he hideth, and for joy thereof goeth and selleth all that he hath, and buyeth that field" (Matthew 13:44). The discovery of Christ is like finding hidden treasure. The response is not reluctant sacrifice but joyful surrender. "For joy thereof" the man sells all. Paul sold all. He counted everything loss. Not grudgingly, but with the joy of a man who knows he has found something infinitely more valuable than what he gave up.',
        },
        {
          kind: 'carry',
          html:
            'You are being invited to make the same reckoning. Not to deny your accomplishments or pretend your credentials are not real. But to reassess their value. In light of Christ, what do they actually matter? Your degree, your status, your reputation, your success—Paul is asking you to count it all and ask: Is this worth the knowledge of Christ? Is this worth being found in Him? Christ is offering you a different economy, a different way of measuring worth.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'p3-loss-reflect',
          prompt:
            'What things have you "counted" as gain? What credentials, accomplishments, or securities are you holding onto? If you really believed that knowing Christ surpasses them all, what would you be willing to let go of?',
        },
      ],
    },

    {
      ref: 'Philippians 3:10–11',
      title: 'The Power of His Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              10,
              t('That I may know him, and '),
              hp('the power of his resurrection', 'p3-power-resurrection'),
              t(', and the '),
              hy('fellowship of his sufferings', 'p3-fellowship-sufferings'),
              t(', being made conformable unto his death;'),
            ),
            verse(
              11,
              t('If by any means I might attain unto the '),
              hg('resurrection of the dead', 'p3-resurrection-dead'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'p3-power-resurrection',
          html:
            'Paul does not ask merely to know facts about Christ. He asks to know "the power of his resurrection." Dynamis in Greek—the operative force, the energy, the working power. The resurrection is not just a historical event that happened 2,000 years ago. It is a power that operates now, in the believer&apos;s life.',
        },
        {
          kind: 'commentary',
          id: 'p3-fellowship-sufferings',
          html:
            'But Paul does not stop there. He also asks for "the fellowship of his sufferings." Koinōnia—partnership, sharing, communion. Paul wants not only Christ&apos;s resurrection power, but also to share in His sufferings. This is paradoxical to modern ears. But Paul sees it as the path to transformation.',
        },
        {
          kind: 'greek',
          id: 'p3-dynamis',
          title: 'Dynamis — "Power"',
          script: 'δύναμις',
          translit: '<strong>dynamis</strong> · power; capability; might; the operative force of a miracle; energy at work',
          description:
            'The word appears throughout the New Testament for the power of the Spirit (Acts 1:8), the power of God (Romans 1:16), the power to perform miracles (1 Corinthians 12:10). In Philippians 3:10, it is the resurrection power—not a static event but an active force transforming the believer from the inside.',
        },
        {
          kind: 'commentary',
          id: 'p3-resurrection-dead',
          html:
            '"The resurrection of the dead." The Greek is anastasis ek nekrōn—literally, "standing up out of the dead." It is the future, bodily resurrection when Christ returns. Paul is saying that his entire life now is oriented toward that moment. He is pressing forward toward the resurrection, wanting to be found in Christ when it happens, when the dead rise and are transformed.',
        },
        {
          kind: 'greek',
          id: 'p3-anastasis',
          title: 'Anastasis Ek Nekrōn — "Resurrection from the Dead"',
          script: 'ἀνάστασις ἐκ νεκρῶν',
          translit: '<strong>anastasis ek nekrōn</strong> · standing up out of the dead; resurrection from death; bodily resurrection',
          description:
            'The phrase combines ana- (up, again) and stasis (standing). It is not a metaphorical rising (spiritual rebirth) but the literal bodily resurrection. Paul believes in a resurrection body, a real, physical body transformed and glorified like Christ&apos;s.',
        },
        {
          kind: 'christ',
          id: 'p3-christ-resurrection-union',
          title: 'Christ Connection — Union with Christ in Death and Resurrection',
          html:
            'Romans 6:1–11 is the extended meditation on this theme. Paul writes: "Know ye not, that so many of us as were baptized into Jesus Christ were baptized into his death?… Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life." The believer is joined to Christ—in His death, in His resurrection, in His rising to new life.',
        },
        {
          kind: 'carry',
          html:
            'The power that raised Christ is at work in your life right now. Not waiting for the future. Active now. It breaks the power of sin, overcomes despair, resurrects dead dreams, brings new life to hardened places. Every death to self, every suffering endured for Christ, is a small participation in the resurrection life that awaits you.',
        },
        {
          kind: 'reflection',
          id: 'p3-resurrection-reflect',
          prompt:
            'Where do you sense the resurrection power of Christ at work in your life right now? What has He raised from the dead in you? And what suffering or dying to self is He asking you to embrace in partnership with His sufferings?',
        },
      ],
    },

    {
      ref: 'Philippians 3:12–14',
      title: 'Not Yet Perfect, But Pressing Forward',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              12,
              t('Not as though I had already attained, either were already perfect: but I '),
              hp('follow after', 'p3-follow-after'),
              t(', if that I may apprehend that for which also I am apprehended of Christ Jesus.'),
            ),
            verse(
              13,
              t('Brethren, I count not myself to have apprehended: but this one thing I do, '),
              hy('forgetting those things which are behind', 'p3-forget-behind'),
              t(', and '),
              hy('reaching forth unto those things which are before', 'p3-reach-before'),
              t(','),
            ),
            verse(
              14,
              t('I '),
              hg('press toward the mark for the prize of the high calling of God in Christ Jesus', 'p3-mark-prize'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'p3-follow-after',
          html:
            'Paul will not claim to have "already attained" or to be "already perfect." After all he has experienced, he will not claim to have arrived. He is still "following after," still pressing, still in motion. Christ has "apprehended" him—seized him, claimed him. This creates a two-way movement: Christ has hold of Paul; Paul is now reaching back toward Christ.',
        },
        {
          kind: 'commentary',
          id: 'p3-forget-behind',
          html:
            'Paul tells himself and his readers to forget "those things which are behind." This is not amnesia about history. It is a deliberate act of will. Do not let yesterday define you. Do not let past victories make you complacent. Do not let past failures make you hopeless. Leave them behind.',
        },
        {
          kind: 'commentary',
          id: 'p3-reach-before',
          html:
            'Instead, "reach forth unto those things which are before." The image is of a runner in a race, leaning forward, straining toward the finish line. Eyes ahead, not behind. All energy directed at what is coming next.',
        },
        {
          kind: 'commentary',
          id: 'p3-mark-prize',
          html:
            '"I <em>press toward[res:prokopto-scaife]</em> the mark for the prize." "Mark" (skopos) is the target, the goal. "Prize" (brabeion) is the reward given to the victor in a race. The Christian life is not complacency. It is a race. There is a finish line. There is a reward. And the goal is conformity to Christ and the glory that awaits at His return.',
        },
        {
          kind: 'greek',
          id: 'p3-skopos',
          title: 'Skopos — "Mark" (Goal)',
          script: 'σκοπός',
          translit: '<strong>skopos</strong> · a mark; a target; a goal; that which one aims at',
          description:
            'The word is a focal point, a destination. In 3:14, it is the goal of the believer&apos;s race—conformity to Christ.',
        },
        {
          kind: 'carry',
          html:
            'Paul is 60 years old, has suffered beatings and imprisonment, has been through the wringer. By any measure, he has "made it." Yet he says: I am not done. I have not arrived. I am pressing. Why? Because there is no arrival in this life. There is only the next step, the next day, the next season of becoming more like Christ. You cannot coast. You cannot rest on your past experience with God. You can only say, "I press toward."',
        },
        {
          kind: 'reflection',
          id: 'p3-press-reflect',
          prompt:
            'What past victories or past failures are holding you back? What do you need to forget? And what is God calling you to reach toward now—what next step in becoming like Christ?',
        },
      ],
    },

    {
      ref: 'Philippians 3:18–19',
      title: 'Enemies of the Cross',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              18,
              t('(For many walk, of whom I have told you often, and now tell you even '),
              hy('weeping', 'p3-weeping'),
              t(', that they are '),
              hp('the enemies of the cross of Christ', 'p3-enemies-cross'),
              t(';'),
            ),
            verse(
              19,
              t('Whose end is destruction, whose God is their belly, and whose glory is in their shame, who mind earthly things.)'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'p3-weeping',
          html:
            'Paul is weeping. Not with anger or frustration, but with the sorrow of a pastor watching people go in the wrong direction. These are not enemies attacking from outside. They are people whose orientation is wrong. Their bellies, not God. Shame, not glory. The earthly, not the eternal.',
        },
        {
          kind: 'commentary',
          id: 'p3-enemies-cross',
          html:
            '"Enemies of the cross of Christ." Paul does not say they are enemies of Christ&apos;s teachings or His ethics. They are enemies of the cross itself—the symbol of suffering, sacrifice, self-denial. They want the benefits of the Christian life without the cross. But the cross cannot be separated from Christ. To follow Him is to deny yourself, take up your cross, and follow. Anyone who refuses the cross refuses the Christ the cross represents.',
        },
        {
          kind: 'carry',
          html:
            'Paul&apos;s tears remind us that rejecting the truth of the cross is not a small thing. It is not just a difference of opinion. It is a fundamental turn away from the God who defines Himself by sacrifice for others. There are many today, as in Paul&apos;s time, who want Christ without the cross. They want a God who makes life easier, not one who asks everything. Paul weeps for them because he knows their trajectory: "Whose end is destruction." They are heading in the wrong direction.',
        },
        {
          kind: 'reflection',
          id: 'p3-cross-reflect',
          prompt:
            'Are there ways you are trying to follow Christ without embracing the cross? Areas where you are seeking comfort instead of sacrifice? What would it mean to truly embrace the cross in your following of Christ?',
        },
      ],
    },

    {
      ref: 'Philippians 3:20–21',
      title: 'Transformation into His Glorious Body',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              20,
              t('For our '),
              hp('conversation is in heaven', 'p3-conversation-heaven'),
              t('; from whence also we look for the Saviour, the Lord Jesus Christ:'),
            ),
            verse(
              21,
              t('Who shall '),
              hg('change our vile body, that it may be fashioned like unto his glorious body', 'p3-fashioned-glorious'),
              t(', according to the working whereby he is able even to subdue all things unto himself.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'p3-conversation-heaven',
          html:
            '"Our conversation is in heaven." <em>Politeuma[res:politeuma-intertextual]</em> in Greek—citizenship, commonwealth, the place where one&apos;s primary allegiance lies. Paul is saying that your citizenship is not of this earth. You are a citizen of heaven. Your passport, your legal status, your home—it is there. Here, you are a foreigner, an alien, an ambassador. Your heart and your primary allegiance belong to the city whose builder and maker is God.',
        },
        {
          kind: 'commentary',
          id: 'p3-fashioned-glorious',
          html:
            '"Change our vile body, that it may be fashioned like unto his glorious body." The body is not evil, and it is not disposable. "Vile" here does not mean immoral; it means "lowly" or "humble"—subject to weakness, pain, death. Christ will transform it. Metaschematizō in Greek—to change the form, to reshape, to fashion. The believer&apos;s body will be reshaped, transformed, glorified. Not a ghostly existence in heaven, but a real body like Christ&apos;s resurrection body.',
        },
        {
          kind: 'greek',
          id: 'p3-politeuma',
          title: 'Politeuma — "Conversation" (Citizenship)',
          script: 'πολίτευμα',
          translit: '<strong>politeuma</strong> · a state; a commonwealth; citizenship; the body of citizens; the political order',
          description:
            'The word is political, not social. It refers to one&apos;s primary allegiance, one&apos;s legal status. Paul is saying believers are citizens of heaven—that is where the final authority lies, that is where our ultimate loyalty belongs, that is where we will ultimately dwell.',
        },
        {
          kind: 'greek',
          id: 'p3-metaschematizō',
          title: 'Metaschematizō — "Change" (Transform/Fashion)',
          script: 'μετασχηματίζω',
          translit: '<strong>metaschematizō</strong> · to change the form; to transform; to reshape; to fashion into a new form',
          description:
            'The word appears in Romans 12:2 (be transformed by the renewing of your mind) and 2 Corinthians 11:13–14 (false apostles transforming themselves). In Philippians 3:21, it is Christ transforming believers&apos; bodies at the resurrection.',
        },
        {
          kind: 'christ',
          id: 'p3-christ-glorification',
          title: 'Christ Connection — Believers Glorified in Christ&apos;s Likeness',
          html:
            '1 John 3:2 captures this: "Beloved, now are we the sons of God, and it doth not yet appear what we shall be: but we know that, when he shall appear, we shall be like him; for we shall see him as he is." The vision is not of disembodied spirits floating in ethereal space. It is of transformed people, with real bodies, glorified and powerful, fashioned after Christ&apos;s glorious body. Colossians 3:4 says believers will appear with Christ in glory. Philippians 3:21 grounds that appearance in bodily transformation.',
        },
        {
          kind: 'carry',
          html:
            'You are a citizen of another kingdom. That does not mean you neglect this world or its needs. But your ultimate home, your ultimate loyalty, your ultimate identity is not here. It is in heaven. And you are awaiting the day when Christ returns and transforms you—your whole self, your body, your entire being—into His likeness. Not a shadow of yourself, but a glorified, powerful, real version of yourself. Fit for the presence of God. That is the hope that frames everything Paul is saying.',
        },
        {
          kind: 'artwork',
          matchTitle: /transfiguration|resurrection|glory|ascension/i,
          caption: 'Philippians 3:20–21 · Transformation in His Likeness',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'p3-glory-reflect',
          prompt:
            'Where is your conversation? Where is your primary allegiance? What would it mean to live as a citizen of heaven while you are still on earth? What difference would it make to your decisions, your time, your money, your relationships?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'prokopto-scaife',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'Prokopto (προκόπτω) — To Press Forward',
      url: 'https://scaife.perseus.org/lexica/lsj/προκόπτω/',
      description: 'Greek verb meaning to advance, progress, or cut a path forward—Paul&apos;s metaphor for straining toward Christ as an athlete toward the prize.',
    },
    {
      id: 'politeuma-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Philippians 3:20 — Politeuma (Our Citizenship)',
      url: 'https://intertextual.bible/search?q=Philippians+3+20+',
      description: 'Paul&apos;s declaration that believers&apos; citizenship—politeuma—is in heaven, not Rome: a radical political theology.',
    },
    {
      id: 'pharisaic-righteousness-sbl',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Pharisees and Righteousness',
      url: 'https://www.bibleodyssey.org/dictionary/pharisees/',
      description: 'Context for understanding Paul&apos;s prior credentials as a Pharisee and his radical reassessment of righteousness in Philippians 3:4–11.',
    },
  ],
};
