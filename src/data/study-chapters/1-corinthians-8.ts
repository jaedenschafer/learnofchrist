import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Corinthians 8 — Meat Sacrificed to Idols
 *
 * "Now as touching things offered unto idols: We know that we all have knowledge.
 * Knowledge puffeth up, but charity edifieth."
 *
 * The Corinthians face a practical question: can they eat meat that has been
 * sacrificed to idols? Paul teaches that knowledge puffs up, but love builds up.
 * The right to eat is less important than the brother for whom Christ died.
 * The chapter ends with one of Paul&apos;s purest expressions of gospel sacrifice:
 * "If meat make my brother to offend, I will eat no flesh while the world standeth."
 */
export const FIRST_CORINTHIANS_8: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 8,

  estimatedMinutes: { 5: 6, 10: 13, 15: 19 },
  intros: [
    'In Corinth, as in most pagan cities, the meat sold in the market had often been sacrificed to idols before being offered for sale. When an animal was offered to a pagan god, part of it was burned, part went to the priests, and part went to market. A Christian convert from paganism would see that meat and feel the weight of their old life. Can they eat it? Does eating it drag them back toward idolatry? Paul addresses not just the practical question, but the deeper question it reveals: what does love demand of you when you have freedom that your brother does not have?',
    'The answer Paul gives is radical. He does not settle the question on theological principle. Instead, he inverts the hierarchy of values the Corinthians have been living by. Knowledge is inferior to love. Your right to exercise your liberty is less important than your brother&apos;s spiritual welfare. Your conscience matters. His conscience matters more. This chapter teaches a generosity so extreme that it baffles the modern ear: the willingness to limit your freedom permanently for the sake of another&apos;s faith.',
    'At its heart, 1 Corinthians 8 is not about meat or idols at all. It is about what happens when the gospel gets down into the neighborhood—when you live shoulder to shoulder with someone whose conscience is still fragile, and your knowledge or your freedom puts pressure on theirs. The answer Paul gives is not a rule. It is a shape: the shape of the cross, where freedom is laid down for another.',
  ],

  sections: [
    /* ─── 1 Corinthians 8:1–2 — Knowledge Puffeth Up ──────────────────── */
    {
      ref: '1 Corinthians 8:1–2',
      title: 'Knowledge Puffeth Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('Now as touching things offered unto idols: We know that we all have '),
                hy('knowledge', 'cor8-gnosis'),
                t('. '),
                hg('Knowledge puffeth up', 'cor8-puffeth'),
                t(', but '),
                hp('charity edifieth', 'cor8-charity-builds'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And if any man think that he '),
                hg('knoweth any thing', 'cor8-think-know'),
                t(', he '),
                hg('knoweth nothing yet as he ought to know it', 'cor8-ought-know'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'cor8-gnosis',
          title: 'Gnōsis — Knowledge',
          script: 'γνῶσις',
          translit: '<strong>gnōsis</strong> · knowledge; intellectual understanding; insight',
          description:
            'The Corinthians have prided themselves on gnōsis—their knowledge that idols are nothing, that an idol has no real power. It is correct knowledge. But knowledge can become a weapon. It can be wielded to show others how much you know and how little they do.',
        },
        {
          kind: 'commentary',
          id: 'cor8-puffeth',
          html:
            'Paul strikes at the heart of Corinthian pride: "Knowledge puffeth up." The Greek word is <em>physioō</em>—to inflate, as if with air. Knowledge, when it stands alone, makes a person swell with self-regard. "I know. You don&apos;t. I&apos;m right; you&apos;re blind." That is what puffed-up knowledge sounds like.',
        },
        {
          kind: 'greek',
          id: 'cor8-physiao',
          title: 'Physioō — Puff Up, Inflate',
          script: 'φυσιόω',
          translit: '<strong>physioō</strong> · to inflate; to cause to swell; to puff up with pride',
          description:
            'A physical metaphor for spiritual pride. Knowledge that stands alone swells the ego. Paul sets it against something that does the opposite: love, which builds others up rather than swelling oneself.',
        },
        {
          kind: 'commentary',
          id: 'cor8-think-know',
          html:
            'Notice the second verse: "If any man think that he knoweth any thing." There is a Corinthian tone here. "I know, therefore I am wise." Paul gently undermines it. If that is your stance—"I know, and therefore I&apos;m done learning"—then you have misunderstood what knowledge is.',
        },
        {
          kind: 'commentary',
          id: 'cor8-ought-know',
          html:
            '"He knoweth nothing yet as he ought to know it." Not that he knows nothing at all. Rather, he does not yet know <em>how</em> to know—does not yet know the shape that knowledge should take. Real knowledge is not a weapon you brandish. It is a tool you lay down at the feet of love.',
        },
        {
          kind: 'greek',
          id: 'cor8-oikodome',
          title: 'Oikodomeō — Build Up, Edify',
          script: 'οἰκοδομέω',
          translit: '<strong>oikodomeō</strong> · to build; to construct; to edify; to strengthen',
          description:
            'Love does what knowledge cannot: it builds. It constructs faith in others. It strengthens them. The image is of a builder, not a judge. Love lays bricks. Knowledge, left alone, just counts how many the other person missed.',
        },
        {
          kind: 'christ',
          id: 'cor8-charity-builds',
          title: 'Christ Connection — Love as the Measure',
          html:
            'Jesus made a point throughout His ministry: knowledge about God matters far less than love of God. "If I have the gift of prophecy, and know all mysteries and all knowledge… but have not charity, I am nothing" (1 Corinthians 13:2). Paul is echoing his Master. In Christ&apos;s kingdom, love is the currency that proves you actually know anything at all.',
        },
        {
          kind: 'carry',
          html:
            'You may have correct theology. You may know truths that others are still learning. But before you correct someone, before you explain what they&apos;re getting wrong, ask yourself: am I doing this to build them up, or to prove that I&apos;m right? The difference is not small. It is everything.',
        },
        {
          kind: 'reflection',
          id: 'cor8-knowledge-love',
          prompt:
            'Where are you tempted to use knowledge like a weapon—to show someone they&apos;re wrong or you&apos;re right? What would change if you chose to use that same knowledge to build them up instead?',
        },
      ],
    },

    /* ─── 1 Corinthians 8:3–4 — To Be Known of God ───────────────────── */
    {
      ref: '1 Corinthians 8:3–4',
      title: 'To Be Known of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 3,
              spans: [
                t('But if any man '),
                hp('love God', 'cor8-charity-builds'),
                t(', the same is '),
                hg('known of God', 'cor8-known-of-god'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('As concerning therefore the eating of those things that are offered in sacrifice unto idols, we know that '),
                hy('an idol is nothing in the world', 'cor8-idol-nothing'),
                t(', and that there is '),
                hg('none other God but one', 'cor8-one-god'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor8-known-of-god',
          html:
            'This is the pivot. Not "if any man knows God," but "if any man loves God, the same is known of God." The direction matters. Your knowledge of God matters less than God&apos;s knowledge of you—His choice, His acceptance, His election. You are known. You matter. And that status does not depend on how much theology you have figured out.',
        },
        {
          kind: 'commentary',
          id: 'cor8-idol-nothing',
          html:
            'Now Paul moves to the actual question: meat offered to idols. The logical answer is straightforward: "An idol is nothing in the world." Idols have no power. They are wood or stone, not gods. The Corinthian who eats the meat is not yielding to the idol. The idol is not real.',
        },
        {
          kind: 'greek',
          id: 'cor8-eidolon',
          title: 'Eidōlon — Idol',
          script: 'εἴδωλον',
          translit: '<strong>eidōlon</strong> · idol; image; phantom; something with the appearance but not the reality',
          description:
            'An eidōlon looks like something. It has shape, has presence. But it is not what it appears to be. It has no real power. Paul is telling the Corinthians: your fear of the idol is bigger than the idol itself.',
        },
        {
          kind: 'commentary',
          id: 'cor8-one-god',
          html:
            '"There is none other God but one." This is the confession. One God. Not the many idols the Corinthians grew up fearing. Not the gods of their neighbors. One God. The logic is airtight. If there is one God, then idols are nothing. Therefore, eating meat offered to idols should pose no spiritual problem. And yet Paul is about to overturn this logic entirely.',
        },
        {
          kind: 'carry',
          html:
            'You may have the facts straight. You may know intellectually that your old fears have no power. But intellectual knowledge sometimes heals slower than the heart needs. Someone else may still be working through to that same knowledge. Your truth is not yet their lived truth.',
        },
        {
          kind: 'reflection',
          id: 'cor8-one-god',
          prompt:
            'What do you know intellectually to be true that you have not yet felt in your bones? And who around you may still be where you used to be?',
        },
      ],
    },

    /* ─── 1 Corinthians 8:5–6 — One Lord Jesus Christ ────────────────── */
    {
      ref: '1 Corinthians 8:5–6',
      title: 'One Lord Jesus Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 5,
              spans: [
                t('For though there be that are called gods, whether in heaven or in earth, (as there be gods many, and lords many;)'),
              ],
            },
            {
              number: 6,
              spans: [
                t('But to us there is but '),
                hp('one God, the Father', 'cor8-one-father'),
                t(', of whom are all things, and we in him; and '),
                hp('one Lord Jesus Christ', 'cor8-one-lord-jesus'),
                t(', by whom are all things, and we by him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor8-one-father',
          html:
            'Paul acknowledges the world the Corinthians live in: a world full of gods, many and lords many. The pagan cosmos is crowded with deity claims. And then Paul narrows it to a point: "But to us there is but one God, the Father, of whom are all things, and we in him." All creation flows from the Father. We exist <em>in Him</em>—not in any other power, not under any idol&apos;s thumb.',
        },
        {
          kind: 'commentary',
          id: 'cor8-one-lord-jesus',
          html:
            'And one Lord. Not one of many; <em>one</em> Lord. "Jesus Christ, by whom are all things, and we by him." This echoes John 1:3: "All things were made by him." Christ is not a lord among lords. He is the agent through whom all existence was made. And through Him, the Corinthians themselves have been made, have been redeemed, have been claimed.',
        },
        {
          kind: 'christ',
          id: 'cor8-christ-creation',
          title: 'Christ Connection — Christ as Creator and Lord',
          html:
            'Paul grounds Christian identity not in knowledge but in creation itself: "by whom are all things, and we by him." The same idea appears in Colossians 1:16—"All things were created by him, and for him"—and in John 1:3—"All things were made by him." Christ is not one power among many. He is the power by which all powers came to be. His lordship is the only lordship that matters.',
        },
        {
          kind: 'carry',
          html:
            'You were made by Christ and redeemed by Christ. That claim on you is deeper than any fear, older than any habit, stronger than any pressure from others. That is who you belong to. Hold to that and let everything else find its true size.',
        },
        {
          kind: 'reflection',
          id: 'cor8-christ-lord',
          prompt:
            'When you face a choice or a pressure, do you ask "What am I allowed to do?" or "What does my Lord Christ want for me and for my brother?" How would that shift change your answer?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 1 Corinthians 8:7 — The Weak Conscience ────────────────────── */
    {
      ref: '1 Corinthians 8:7',
      title: 'But Not Everyone Knows This',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 7,
              spans: [
                t('Howbeit there is not in every man that '),
                hg('knowledge', 'cor8-not-every-man'),
                t(': for some with '),
                hy('conscience of the idol', 'cor8-syneidesis'),
                t(' unto this hour eat it as a thing offered unto an idol; and their conscience being weak is '),
                hg('defiled', 'cor8-defiled'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor8-not-every-man',
          html:
            'Here is the turn. Paul acknowledges the simple fact: not everyone has the knowledge he has just expounded. Not everyone knows that an idol is nothing. Not everyone knows that there is one God. Some have been Christians five years. Others five weeks. The knowledge that seems obvious to the strong is still distant to the weak.',
        },
        {
          kind: 'greek',
          id: 'cor8-syneidesis',
          title: 'Syneidesis — Conscience',
          script: 'συνείδησις',
          translit: '<strong>syneidesis</strong> · conscience; awareness; inner conviction',
          description:
            'Syneidesis is the inner witness. It is what a person knows to be true, what they believe about right and wrong, good and bad. A weak conscience is not an immoral one—it is one still learning, still healing from its past.',
        },
        {
          kind: 'commentary',
          id: 'cor8-defiled',
          html:
            'And here is the wound: "their conscience being weak is defiled." If a weak believer eats the meat, they do so while their conscience is telling them it is idolatry. They sin against their own conscience. That action leaves them stained, ashamed, worse off in their faith. The strong believer eats freely. The weak believer eats and feels they have betrayed the Lord.',
        },
        {
          kind: 'carry',
          html:
            'Conscience is not always right. It can be overly scrupulous, overly fearful. But it is not nothing. When someone&apos;s conscience says something is wrong, dismissing their conscience does not free them. It wounds them. There is a time to teach, but there is a time simply to wait while someone grows.',
        },
        {
          kind: 'reflection',
          id: 'cor8-weak-conscience',
          prompt:
            'Whose weak conscience are you aware of in your church or your life? What would it cost you to honor it rather than try to fix it?',
        },
      ],
    },

    /* ─── 1 Corinthians 8:10–11 — Through Thy Knowledge Shall the Weak Brother Perish ── */
    {
      ref: '1 Corinthians 8:10–11',
      title: 'Through Thy Knowledge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 10,
              spans: [
                t('For if any man see thee which hast knowledge sit at meat in the '),
                hg('idol&apos;s temple', 'cor8-idols-temple'),
                t(', shall not the conscience of him which is weak be '),
                hg('emboldened to eat', 'cor8-emboldened'),
                t(' those things which are offered to idols;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And '),
                hp('through thy knowledge shall the weak brother perish', 'cor8-brother-perish'),
                t(', for whom '),
                hp('Christ died', 'cor8-christ-died-weak'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor8-idols-temple',
          html:
            'Paul paints the scene: the strong believer, sure of their freedom, sits down at a meal in the idol&apos;s temple. It is a real place in Corinth—a building devoted to a pagan god, where sacrifices are made and public meals are held. The believer sits there, eats freely, unconcerned. And someone sees them.',
        },
        {
          kind: 'commentary',
          id: 'cor8-emboldened',
          html:
            'The weak believer sees the strong one eating there. "If they do it, maybe I can too." The conscience that has been saying "No, this is idolatry, you cannot" suddenly yields. The weak believer, pressured by the example of the strong, eats the meat against their own conscience. And in that moment, their faith sustains a wound.',
        },
        {
          kind: 'carry',
          html:
            'You may have the right to do something. Your conscience may be clear. But your freedom has an audience. Someone weaker is watching. And your example can either build them up or lead them to betray their own conscience. That matters. You matter to them in a way you may not realize.',
        },
        {
          kind: 'commentary',
          id: 'cor8-brother-perish',
          html:
            '"And through thy knowledge shall the weak brother perish." The language is devastating. Not "offend" or "stumble," but <em>perish</em>. By exercising your knowledge and your liberty, you can actually destroy faith. You can teach someone to violate their conscience, and in doing so, weaken their capacity to hear God&apos;s voice.',
        },
        {
          kind: 'commentary',
          id: 'cor8-christ-died-weak',
          html:
            'And then the question that turns everything: "for whom Christ died?" This brother, with the weak conscience, the timid faith, the fear of the idol—this person is someone for whom Jesus shed His blood. That person is <em>purchased</em>. That person is <em>beloved</em>. And you have the power to wound them.',
        },
        {
          kind: 'christ',
          id: 'cor8-christ-weak-brother',
          title: 'Christ Connection — Christ and the Weak One',
          html:
            'In Matthew 25:40, Jesus says, "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me." The weak brother is not a burden on your liberty. He is Christ in disguise. Your care for his conscience is care for Him. Your wound to his faith is a wound to the One who died for him.',
        },
        {
          kind: 'reflection',
          id: 'cor8-knowledge-perish',
          prompt:
            'Is there something you do freely that you know wounds someone weaker around you? What would it cost you to lay it down?',
        },
      ],
    },

    /* ─── 1 Corinthians 8:12 — Ye Sin Against Christ ─────────────────── */
    {
      ref: '1 Corinthians 8:12',
      title: 'Ye Sin Against Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 12,
              spans: [
                t('But when ye sin so against the brethren, and '),
                hg('wound their weak conscience', 'cor8-wound-conscience'),
                t(', '),
                hp('ye sin against Christ', 'cor8-sin-against-christ'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor8-wound-conscience',
          html:
            'To wound a weak conscience is to sin. Paul is clear. It is not a mistake, not a misunderstanding, not an unfortunate side effect of exercising your rights. It is <em>sin</em>. To put pressure on someone to violate their own moral sense, their own compass toward God—that is a violation of the first commandment in the other person. You are asking them to betray their conscience, and conscience is where the voice of the Spirit is still learning to speak in them.',
        },
        {
          kind: 'commentary',
          id: 'cor8-sin-against-christ',
          html:
            'But here is the shocking turn: to sin against the brethren is to sin against Christ. Not just against a fellow believer. Against Christ Himself. The Master has so identified with His people that an injury to them is an injury to Him. "Why are you persecuting me?" Jesus asked Saul on the road to Damascus. That same identity holds here: you wound the weak brother; you wound Christ.',
        },
        {
          kind: 'greek',
          id: 'cor8-hamartano',
          title: 'Hamartanō — Sin',
          script: 'ἁμαρτάνω',
          translit: '<strong>hamartanō</strong> · to sin; to miss the mark; to fall short of the standard',
          description:
            'To sin is to miss the mark, to fall away from the standard God has set. It is not just breaking a rule. It is departing from the character you are called to have. To wound the weak is to miss the mark of love.',
        },
        {
          kind: 'christ',
          id: 'cor8-sin-against-christ-conn',
          title: 'Christ Connection — Identification with the Weak',
          html:
            'This is perhaps Paul&apos;s most direct statement of Christ&apos;s identification with the believer. "Ye sin against Christ." In Acts 9:4, Jesus asks Saul, "Why persecutest thou me?" when Saul was persecuting the church. Here, to wound the weak is to wound Christ. The doctrine is clear: Christ and His people are one.',
        },
        {
          kind: 'carry',
          html:
            'Before you insist on your rights, ask: how does Christ identify with the person this will affect? What does my action do to Him? That is not the question we naturally ask. But it is the question that changes everything.',
        },
        {
          kind: 'reflection',
          id: 'cor8-sin-against-christ',
          prompt:
            'How does it change your thinking to realize that when you wound the weak, you wound Christ? What might look different in your choices if you truly believed that?',
        },
      ],
    },

    /* ─── 1 Corinthians 8:13 — I Will Eat No Flesh ────────────────────── */
    {
      ref: '1 Corinthians 8:13',
      title: 'I Will Eat No Flesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 13,
              spans: [
                t('Wherefore, if meat make my brother to '),
                hg('offend', 'cor8-offend-skandalon'),
                t(', '),
                hp('I will eat no flesh while the world standeth', 'cor8-no-flesh'),
                t(', lest I make my brother to offend.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor8-offend-skandalon',
          html:
            'To cause someone to offend is to place a stumbling block in their path. The Greek word is <em>skandalon</em>—a trap, a snare. Paul is saying: if my meat-eating becomes a trap that catches my brother and causes him to fall, then I must not eat it.',
        },
        {
          kind: 'greek',
          id: 'cor8-skandalon',
          title: 'Skandalon — Stumbling Block',
          script: 'σκάνδαλον',
          translit: '<strong>skandalon</strong> · stumbling block; snare; occasion of offense; thing that causes one to fall',
          description:
            'A skandalon is a trap. It is what catches your foot and brings you down. Paul says his meat-eating becomes a skandalon to his brother—a trap that draws the weak into violating their conscience.',
        },
        {
          kind: 'commentary',
          id: 'cor8-no-flesh',
          html:
            'And now Paul makes his commitment: "I will eat no flesh while the world standeth." This is the punchline of the entire chapter. Paul, who has the knowledge and the right to eat, lays down that right. <em>Permanently</em>. "While the world standeth"—as long as he lives. His freedom is surrendered for his brother&apos;s conscience.',
        },
        {
          kind: 'carry',
          html:
            'This is the cost of love in community. You may have rights. You may know you are free. But if exercising that freedom weakens the faith of someone Christ died for, you lay it down. Not reluctantly, not with resentment, but as a living sacrifice. That is what it means to follow the One who laid down His life.',
        },
        {
          kind: 'christ',
          id: 'cor8-paul-cross',
          title: 'Christ Connection — Following to the Cross',
          html:
            'Paul is imitating Christ here. Jesus gave up His freedom, His rights, His very life for the sake of others. In 1 Corinthians 11:1, Paul writes, "Be ye followers of me, even as I also am of Christ." Here he demonstrates what that looks like: the willing, permanent laying down of liberty for another&apos;s good. It is not a burden. It is the shape of the gospel itself.',
        },
        {
          kind: 'reflection',
          id: 'cor8-will-eat-no-flesh',
          prompt:
            'What would it look like for you to make Paul&apos;s commitment: to lay down a genuine freedom or right permanently if it would strengthen someone weaker than you? What are you being asked to give up?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will eat no flesh while the world standeth, lest I make my brother to offend.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 8 · Study Guide',
  },

  hasHebrew: false,
};
