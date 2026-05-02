import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Corinthians 5 — Church Discipline and the Passover
 *
 * The Corinthian church has become tolerant of a grave moral failure.
 * A man is living with his father&apos;s wife — a relationship that
 * shocks even pagan conscience. Yet the church is &quot;puffed up&quot;
 * with pride, unmoved. Paul calls them back to their identity in Christ
 * and the seriousness of sin. The chapter&apos;s deepest beat is the
 * Passover image: Christ our Passover has been sacrificed for us.
 * Therefore, put away the old leaven. Keep the feast in sincerity and truth.
 */
export const FIRST_CORINTHIANS_5: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 5,

  intros: [
    'The Corinthian church has become permissive of a moral failure so severe that even pagan society would condemn it. A man is living in a sexual relationship with his father&apos;s wife — a violation of the most basic human bonds. Yet the church has taken no action. Worse, they appear to be proud of their tolerance, treating permissiveness as a mark of spiritual maturity.',
    'Paul is astounded. He calls the church to awaken to what they have allowed to happen. Discipline is not cruelty — it is love. A little leaven spreads through the whole lump of dough. One member living in unrepentant sin gradually corrupts the witness and purity of the entire body. Paul connects this call to purity with the Passover: Christ, the Passover Lamb, has been sacrificed for them. Therefore, they must put away the old leaven and keep the feast in sincerity and truth.',
    'This chapter is about the church&apos;s holiness. Not the holiness of individual believers alone — but the holiness of the gathered body. When the church tolerates sin in its midst, it betrays the sacrifice of Christ and wounds its own witness to the world.',
  ],

  sections: [
    {
      ref: '1 Corinthians 5:1–2',
      title: 'A Fornication Not Even Named Among the Gentiles',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('It is reported commonly that there is '),
                hy('fornication', 'greek-porneia'),
                t(' among you, and such fornication as is not so much as named among the Gentiles, that one should have his '),
                hg('father&apos;s wife', 'c5-familial-sin'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c5-familial-sin',
          html:
            'Paul opens with a scandal that defies belief. The man is not married to the woman; he has taken his father&apos;s wife — a stepmother, perhaps, or a widow. The Mosaic law forbade it (Leviticus 18:8). Pagan law forbade it. &quot;Not even named among the Gentiles&quot; means this act was so shameful that pagans did not even speak of it as something a man might do. Yet in Corinth, this happened. And the church knew.',
        },
        {
          kind: 'greek',
          id: 'greek-porneia',
          title: 'Porneia — Fornication; Sexual Immorality',
          script: 'πορνεία',
          translit: '<strong>porneia</strong> · sexual immorality; any sexual relationship outside covenant marriage',
          description:
            'Porneia is the umbrella term in Greek for illicit sexual acts — fornication, adultery, incest. It appears frequently in Paul&apos;s letters as the gravest threat to the church&apos;s holiness. Here, a specific instance of porneia is destroying the church&apos;s witness.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 2,
              spans: [
                t('And ye are '),
                hy('puffed up', 'greek-physioō'),
                t(', and have not rather '),
                hg('mourned', 'c5-mourning'),
                t('; that he that hath done this deed might be taken away from among you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c5-mourning',
          html:
            'Paul diagnoses the church&apos;s condition. They are &quot;puffed up&quot; — proud, self-satisfied, spiritually swollen. They have not &quot;mourned.&quot; There is no grief over the sin. No sense of spiritual crisis. No love for the brother who is destroying himself. This is not broadmindedness; this is spiritual numbness.',
        },
        {
          kind: 'greek',
          id: 'greek-physioō',
          title: 'Physioō — To Puff Up; To Make Arrogant',
          script: 'φυσιόω',
          translit: '<strong>physioō</strong> · to inflate; to puff up with pride; to make conceited',
          description:
            'The verb carries the image of air being pumped into something, swelling it beyond its true size. Paul uses it to describe a false spiritual confidence — the Corinthians think they are mature, enlightened, tolerant. In fact, they are spiritually deluded.',
        },
        {
          kind: 'carry',
          html:
            'When you see sin in your community — a friend living in contradiction to Christ, a pattern of deception, a relationship that violates covenant — the first response is not approval and the second is not silence. The first response is grief. Your heart should ache for the person. This is love. Only after this grief comes the difficult work of accountability.',
        },
        {
          kind: 'reflection',
          id: 'c5-1-puffed-up',
          prompt: 'Where have you seen a community become &quot;puffed up&quot; about tolerating what should break their hearts? What does this teach you about the difference between grace and indifference?',
        },
      ],
    },

    {
      ref: '1 Corinthians 5:3–5',
      title: 'Delivered Unto Satan for the Destruction of the Flesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 3,
              spans: [
                t('For I verily, as absent in body, but present in spirit, have judged already, as though I were present, concerning him that hath so done this deed,'),
              ],
            },
            {
              number: 4,
              spans: [
                t('In the name of the Lord Jesus Christ, when ye are gathered together, and '),
                hp('my spirit with the power of our Lord Jesus Christ', 'christ-authority'),
                t(','),
              ],
            },
            {
              number: 5,
              spans: [
                t('To '),
                hg('deliver such an one unto Satan', 'c5-satan-delivery'),
                t(' for the destruction of the '),
                hy('flesh', 'greek-sarx'),
                t(', that the '),
                hy('spirit', 'greek-pneuma-salvation'),
                t(' may be saved in the day of the Lord Jesus.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-authority',
          html:
            'Paul speaks with apostolic authority. Even though he is absent from Corinth in body, he is present in spirit and makes a judgment. The authority is not his own — it is &quot;in the name of the Lord Jesus Christ.&quot; The church is called to execute a decision that flows from Christ&apos;s own authority.',
        },
        {
          kind: 'commentary',
          id: 'c5-satan-delivery',
          html:
            'Paul commands the church to &quot;deliver such an one unto Satan.&quot; This is not damnation. It is removal from the church — a handing over to the sphere outside God&apos;s protection, the realm where Satan reigns. The aim is redemptive: &quot;that the spirit may be saved in the day of the Lord Jesus.&quot; The expulsion is meant to awaken the man to his condition. Sometimes love requires removing the comfort that enables a brother to persist in sin.',
        },
        {
          kind: 'greek',
          id: 'greek-sarx',
          title: 'Sarx — Flesh; the Sinful Nature',
          script: 'σάρξ',
          translit: '<strong>sarx</strong> · flesh; the mortal body; the old nature bent toward sin',
          description:
            'Paul distinguishes between sarx (the flesh, the body, the appetites) and pneuma (the spirit, the immortal self). Discipline aims at the destruction of the flesh — the starving of sinful desires — so that the spirit may be saved.',
        },
        {
          kind: 'greek',
          id: 'greek-pneuma-salvation',
          title: 'Pneuma — Spirit; the Immortal Soul',
          script: 'πνεῦμα',
          translit: '<strong>pneuma</strong> · spirit; breath; the immortal self; God&apos;s own being',
          description:
            'The pneuma is the eternal part of a person — the self that will stand before God. Paul&apos;s deepest aim in discipline is the salvation of the pneuma. The pain of expulsion is meant to call a person back to their true and eternal self.',
        },
        {
          kind: 'christ',
          id: 'christ-redemptive-aim',
          title: 'Christ Connection — Redemption, Not Destruction',
          html:
            'Christ&apos;s own aim is redemption. When He disciplines His people, it is always with an eye toward saving them (Hebrews 12:5–11). Discipline is a mark of love, not rejection. &quot;As many as I love, I rebuke and chasten&quot; (Revelation 3:19). The church, acting in the name of Jesus, must share His redemptive heart even when removing a member. The goal is always the salvation of the spirit.',
        },
        {
          kind: 'carry',
          html:
            'If you must call a brother or sister to account, do so in the spirit Paul models here. Hold two truths at once: the seriousness of the sin, and the redemptive aim. Be clear about the consequences. But never speak or act as if the goal is punishment or rejection. The goal is always the awakening and salvation of the person. This is how Christ disciplines those He loves.',
        },
        {
          kind: 'reflection',
          id: 'c5-3-redemption',
          prompt: 'How does understanding discipline as redemptive rather than punitive change the way you think about accountability in Christian community?',
        },
      ],
    },

    {
      ref: '1 Corinthians 5:6',
      title: 'Your Glorying Is Not Good',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 6,
              spans: [
                t('Your '),
                hg('glorying', 'c5-glorying-pride'),
                t(' is not good. Know ye not that a little '),
                hy('leaven', 'greek-zyme'),
                t(' leaveneth the whole lump?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c5-glorying-pride',
          html:
            'Paul returns to the church&apos;s pride. They are &quot;glorying&quot; — boasting, exulting — in something that ought to shame them. They boast of their tolerance, their broadmindedness, their freedom from judgment. Paul shatters this. &quot;Your glorying is not good.&quot; Tolerance of unrepentant sin is not enlightenment. It is spiritual death.',
        },
        {
          kind: 'greek',
          id: 'greek-zyme',
          title: 'Zyme — Leaven; Yeast; a Corrupting Influence',
          script: 'ζύμη',
          translit: '<strong>zyme</strong> · leaven; fermenting dough; a small thing that spreads corruption',
          description:
            'Leaven is a small amount of fermenting dough. When mixed into a larger lump, it causes the whole mass to rise and ferment. Paul uses it as an image for how sin spreads. One member&apos;s unrepentant sin does not affect only him. It gradually corrupts the culture, the witness, and the spiritual health of the whole church.',
        },
        {
          kind: 'commentary',
          id: 'c5-lump-corruption',
          html:
            'The question is rhetorical. Of course a little leaven leavens the whole lump. Paul is invoking a common experience — the visible, tangible truth that a small corruption spreads. If the church allows one member to persist in grave sin, that permission does not stay localized. It infects the church&apos;s standards, its witness, its moral seriousness.',
        },
        {
          kind: 'carry',
          html:
            'In your own life, where do you see a small compromise slowly corrupting a larger sphere? A little dishonesty at work, spreading to how you speak to your family. A small unkindness to someone, opening a door to more. The leaven is real. The spread is slow but certain. Name it, and ask God to awaken you before the whole lump is affected.',
        },
        {
          kind: 'reflection',
          id: 'c5-6-leaven',
          prompt: 'What &quot;leaven&quot; of sin or compromise have you seen spread slowly through a community? What would it have taken to stop it early?',
        },
      ],
    },

    {
      ref: '1 Corinthians 5:7',
      title: 'For Even Christ Our Passover Is Sacrificed for Us',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 7,
              spans: [
                t('Purge out therefore the old leaven, that ye may be a new lump, as ye are '),
                hy('unleavened', 'greek-azumos'),
                t('. For even '),
                hp('Christ our passover is sacrificed for us', 'christ-passover-lamb'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c5-purge',
          html:
            'Paul moves from the problem to the solution. &quot;Purge out therefore the old leaven.&quot; The church must act. They must remove the corrupting influence. But notice the foundation: &quot;as ye are unleavened.&quot; The church is already unleavened in Christ. Discipline is not making something happen; it is making something real. The church is already holy in Christ; now they must live that holiness out.',
        },
        {
          kind: 'greek',
          id: 'greek-azumos',
          title: 'Azumos — Unleavened; Without Leaven',
          script: 'ἄζυμος',
          translit: '<strong>azumos</strong> · unleavened; without yeast; pure; uncorrupted',
          description:
            'Unleavened bread was the bread of Passover, the bread of deliverance. For the Corinthians, being &quot;unleavened&quot; means belonging to the reality of the Passover — redeemed by Christ&apos;s blood. Their purity is not something they earn; it is their identity in Him.',
        },
        {
          kind: 'christ',
          id: 'christ-passover-lamb',
          title: 'Christ Connection — Christ Our Passover Lamb',
          html:
            'Paul makes the connection explicit: &quot;Christ our passover is sacrificed for us.&quot; At the first Passover, a lamb was slain, its blood was painted on the doorposts, and death passed over the homes of Israel (Exodus 12). Now Christ Himself is the Lamb. His blood has been shed. The church has been bought and redeemed. John the Baptist saw Jesus and declared, &quot;Behold the Lamb of God, which taketh away the sin of the world&quot; (John 1:29). The church&apos;s holiness rests on the Lamb&apos;s sacrifice. Therefore, the church must live a life worthy of that redemption.',
        },
        {
          kind: 'carry',
          html:
            'Every time you sense the call to holiness — to put away a sin, to name a compromise, to change a pattern — remember what Paul is saying: this call comes to you as one whose life has been purchased by the blood of the Passover Lamb. You are not being asked to earn your worth. You are being asked to live out the worth Christ has already given you. The call to purity is the call to live as the redeemed.',
        },
        {
          kind: 'reflection',
          id: 'c5-7-passover',
          prompt: 'What is one &quot;old leaven&quot; — a pattern, a compromise, a sin — that you need to purge because of what Christ has purchased for you? What would it mean to live as one the Passover Lamb has redeemed?',
        },
        {
          kind: 'artwork',
          matchTitle: /passover|lamb|sacrifice/i,
          caption: '1 Corinthians 5:7 · Christ Our Passover',
        },
      ],
    },

    {
      ref: '1 Corinthians 5:8',
      title: 'Keep the Feast in Sincerity and Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 8,
              spans: [
                t('Therefore let us keep the feast, not with old leaven, neither with the leaven of malice and wickedness; but with the '),
                hy('unleavened bread', 'greek-artos-azymos'),
                t(' of '),
                hg('sincerity and truth', 'c5-sincerity-truth'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c5-sincerity-truth',
          html:
            'Paul extends the Passover image to the church&apos;s entire life. &quot;Let us keep the feast&quot; — this is an invitation to ongoing celebration. But not with &quot;the leaven of malice and wickedness.&quot; Not with bitterness, not with corruption, not with the old patterns of the flesh. Rather, &quot;with the unleavened bread of sincerity and truth.&quot; The Greek word for sincerity is <em>eilikrineia</em> — literally &quot;judged in sunlight,&quot; unmixed, pure. Truth is <em>aletheia</em> — unhidden, transparent, real. The church keeps the feast not through outward ritual alone, but through a life of genuine purity and transparency.',
        },
        {
          kind: 'greek',
          id: 'greek-artos-azymos',
          title: 'Artos Azumos — Unleavened Bread; the Bread of Purity',
          script: 'ἄρτος ἄζυμος',
          translit: '<strong>artos azumos</strong> · unleavened bread; bread without corruption',
          description:
            'At Passover, Israel ate unleavened bread to remember their hasty departure from Egypt, their deliverance from death. For Paul, unleavened bread is now the symbol of the church&apos;s life in Christ — redeemed, pure, free from the old corruption.',
        },
        {
          kind: 'carry',
          html:
            'The Passover feast was not a somber memorial of death; it was a celebration of deliverance. &quot;Let us keep the feast&quot; invites you to live not in fear or shame, but in the joy of what Christ has done. But you keep it truly only when you live in sincerity — when your life is transparent, unmixed, judged in the sunlight of God&apos;s truth. There is no hiding. There is no malice. There is only the gladness of one who has been redeemed.',
        },
        {
          kind: 'reflection',
          id: 'c5-8-feast',
          prompt: 'What does it mean for you to &quot;keep the feast&quot; in your own life this week? Where would sincerity and truth ask you to change?',
        },
      ],
    },

    {
      ref: '1 Corinthians 5:9–10',
      title: 'Separation From the Church, Not From the World',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 9,
              spans: [
                t('I wrote unto you in an epistle '),
                hg('not to company with fornicators', 'c5-epistle-reference'),
                t(';'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Yet not altogether with the fornicators of this world, or with the covetous, or extortioners, or with idolaters; for then must ye needs '),
                hg('go out of the world', 'c5-world-separation'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c5-epistle-reference',
          html:
            'Paul refers to an earlier letter — a letter now lost to us. In it, he commanded the Corinthians not to keep company with fornicators. But the Corinthians have apparently misunderstood. They may have thought Paul meant they should withdraw from all sinful people, which would be impossible in a pagan city. Paul clarifies.',
        },
        {
          kind: 'commentary',
          id: 'c5-world-separation',
          html:
            'The point is subtle but essential. Christians cannot separate themselves entirely from unbelievers who live in sin. To do so would require leaving the world entirely. Christians are meant to live in the world as witnesses, as salt and light. They are called to maintain friendships, to do business, to live among pagans. The separation Paul calls for is not from the world, but from the church&apos;s own members who claim to follow Christ yet persist in grave sin.',
        },
        {
          kind: 'carry',
          html:
            'This distinction matters for your day. You are not called to be fearful or judgmental toward the unbelieving world. Your coworkers, your neighbors, your acquaintances who do not know Christ — they are not the target of church discipline. You can befriend them, work with them, love them. But if someone claims to be a Christian and is living in open, unrepentant sin, that requires a different response. The church&apos;s integrity depends on the difference.',
        },
        {
          kind: 'reflection',
          id: 'c5-9-separation',
          prompt: 'How do you practice the balance Paul describes — being engaged with the world while maintaining integrity within the church? Where is this balance hardest for you?',
        },
      ],
    },

    {
      ref: '1 Corinthians 5:11–12',
      title: 'Judge Those Within; Leave the Rest to God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 11,
              spans: [
                t('But now I have written unto you '),
                hg('not to keep company', 'c5-keep-company'),
                t(', if any man that is called a brother be a fornicator, or covetous, or an idolater, or a railer, or a drunkard, or an extortioner; '),
                hy('with such an one no not to eat', 'greek-koinoneo-eating'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('For what have I to do to judge them also that are without? do not ye '),
                hg('judge them that are within', 'c5-judge-within'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c5-keep-company',
          html:
            'The phrase is precise: &quot;if any man that is called a brother.&quot; The distinction hinges on the claim to follow Christ. If someone bears the name of Christian — a &quot;brother&quot; — yet lives in grave sin without repentance, the church must withdraw fellowship. This is not judgment in the sense of determining worth or destiny. It is church discipline — a boundary-setting act meant to awaken and redeem.',
        },
        {
          kind: 'greek',
          id: 'greek-koinoneo-eating',
          title: 'Koinoneo — To Have Fellowship; To Share a Meal',
          script: 'κοινωνέω',
          translit: '<strong>koinoneo</strong> · to share; to have fellowship; to eat together',
          description:
            'Eating together was the most intimate act of fellowship. To withdraw from eating with someone was to withdraw from the deepest kind of communion. Paul is not calling for avoidance of all contact, but for the withdrawal of the intimacy of shared meal and friendship. This was meant to communicate the seriousness of the matter.',
        },
        {
          kind: 'commentary',
          id: 'c5-judge-within',
          html:
            'Paul makes a sharp distinction. &quot;For what have I to do to judge them also that are without?&quot; The church does not judge unbelievers. That judgment belongs to God. But &quot;do not ye judge them that are within?&quot; The church is responsible for its own members. This is not a contradiction of Jesus&apos; teaching (&quot;Judge not, that ye be not judged&quot;). Rather, it is a clarification: the church is called to discern and maintain its own integrity. The world&apos;s judgment belongs to God alone.',
        },
        {
          kind: 'carry',
          html:
            'You are not the judge of the world. That exhausting work belongs to God. But you are responsible for your own community. If you are part of a church, a family, a close circle, you share responsibility for maintaining its character. This means sometimes having difficult conversations. Sometimes naming a pattern. Sometimes saying &quot;no, this does not belong here.&quot; This is not pharisaic judgment. It is love.',
        },
        {
          kind: 'reflection',
          id: 'c5-11-judge',
          prompt: 'Where do you need to remember that judgment of the world belongs to God alone? And where do you need to step up and take responsibility for the integrity of your own community?',
        },
        {
          kind: 'artwork',
          matchTitle: /communion|fellowship|meal|eating/i,
          caption: '1 Corinthians 5:11–12 · Judgment Within, Not Without',
        },
      ],
    },

    {
      ref: '1 Corinthians 5:13',
      title: 'Put Away the Wicked Person',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 13,
              spans: [
                t('But them that are without God judgeth. Therefore '),
                hp('put away from among yourselves that wicked person', 'christ-put-away'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c5-final-command',
          html:
            'Paul concludes with a simple command. The church must act. They must remove the man from their midst. Not because he is permanently lost — not because God has abandoned him to judgment. But because the church&apos;s own holiness, bought by the blood of Christ, demands it. And because sometimes, hard love requires a separation that might wake a person to themselves.',
        },
        {
          kind: 'christ',
          id: 'christ-put-away',
          title: 'Christ Connection — Redemptive Love and Separation',
          html:
            'Christ never wrote anyone off. Yet He also spoke with radical clarity about separation. &quot;If thy right eye offend thee, pluck it out, and cast it from thee&quot; (Matthew 5:29). The aim is salvation, not destruction. When Christ asks for separation, it is always in service of redemption — the cutting away of what will destroy you, in order that you might be whole. The church, acting in Christ&apos;s name, must do likewise. The separation is painful. But it is love.',
        },
        {
          kind: 'carry',
          html:
            'This chapter ends not in harshness, but in clarity. Sometimes the most loving thing you can do for someone is to let them face the consequences of their choices. Sometimes it means saying &quot;no, you cannot be part of this community&quot; because the community&apos;s witness and your friend&apos;s soul both depend on it. This is hard. But it is what Christ does. It is what He asks of His church.',
        },
        {
          kind: 'reflection',
          id: 'c5-13-final',
          prompt: 'When has a hard boundary — a &quot;no&quot; spoken in love — become the kindest thing someone did for you? What would that teach you about how to speak boundaries to others?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Corinthians 5',
    quote:
      'Purge out therefore the old leaven, that ye may be a new lump, as ye are unleavened. For even Christ our passover is sacrificed for us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 5 · Study Guide',
  },

  hasHebrew: false,
};
