import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Corinthians 8 — The Macedonian Example; Christ Became Poor
 *
 * Paul appeals to the Corinthians to contribute generously to the relief of the
 * Jerusalem church. He holds up the Macedonian churches as an example: out of
 * deep poverty, they gave generously. Paul points to Christ: though He was rich,
 * He became poor so that through His poverty, believers might become rich.
 */
export const SECOND_CORINTHIANS_8: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 8,

  estimatedMinutes: { beginner: 8, intermediate: 16, deep: 19 },
  intros: [
    'Paul has spoken of reconciliation and new identity in Christ. Now he turns to a practical expression of that identity: generosity. The Corinthians are comparatively wealthy. The saints in Jerusalem are suffering from famine. Paul doesn&apos;t appeal with guilt or obligation—he appeals with grace. He holds up two shining examples: the Macedonian churches, whose generosity exceeded their means, and Christ Himself, whose self-emptying poverty became the means of our enrichment.',
    'The chapter&apos;s message is strikingly counter-intuitive. Generosity doesn&apos;t come from wealth. It comes from grace. The Macedonians gave despite poverty. Christ surrendered despite equality with God. The pattern appears throughout Scripture: the way up is down. The way to blessing is through loss. The way to abundance is through the willingness to become poor.',
    'For readers of every tradition, this is a mirror held up to a fundamental question: What do you do with what God has given you? Not as duty, but as the overflow of a heart that has grasped what it means to be redeemed.',
  ],

  sections: [
    /* ─── 2 Corinthians 8:1–2 — The Grace Bestowed on Macedonia ──────── */
    {
      ref: '2 Corinthians 8:1–2',
      title: 'The Grace Bestowed on Macedonia',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              1,
              t('Moreover, brethren, we do you to wit of the '),
              hy('grace of God', 'cor2-8-charis'),
              t(' bestowed on the churches of Macedonia;')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor2-8-charis',
          title: 'Charis — Grace',
          script: 'χάρις',
          translit: '<strong>charis</strong> · grace; favor; gift freely given',
          description:
            'Charis is not earned. It is not calculated. It is God&apos;s unmerited favor. When grace "works" in human hearts, they become generous. Paul begins not with the Macedonians&apos; actions but with the grace that moved them.',
        },
        {
          kind: 'commentary',
          id: 'cor2-8-frame-grace',
          html:
            'Paul frames the whole discussion as a work of grace. Not pride in giving. Not reputation. Grace. The Macedonian churches have experienced God&apos;s favor, and from that favor flows generosity. The logic is always: first grace touches the heart, then the hand opens.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              2,
              t('How that in a great trial of affliction the '),
              hp('abundance of their joy', 'cor2-8-joy-poverty'),
              t(' and their '),
              hy('deep poverty', 'cor2-8-poverty-deep'),
              t(' abounded unto the riches of their liberality.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-joy-poverty',
          html:
            'This is the pivot on which the whole chapter turns[res:bibleodyssey-generosity]. In the very same sentence: abundance and poverty, joy and affliction. Not despite the poverty, but <em>with</em> the poverty. "The abundance of their joy and their deep poverty abounded unto the riches of their liberality." One state did not cancel the other. Both were present. Both moved them to give.',
        },
        {
          kind: 'commentary',
          id: 'cor2-8-poverty-deep',
          html:
            'The text says "deep poverty" — not mere lack, but a profound condition. Yet Paul calls this the same verse in which they show "abundance of joy" and their generosity abounds to "riches." In their destitution, grace made them rich. This is the Macedonian paradox: everything they had was nothing, and everything they gave was everything.',
        },
        {
          kind: 'carry',
          html:
            'You may find yourself in a season where you have very little. The Macedonians teach you something: what you have is not the measure of what grace can do through you. Joy in Christ can overflow into generosity even when the bank account is nearly empty. Not from what you have not. From what grace has already given you.',
        },
        {
          kind: 'reflection',
          id: 'cor2-8-paradox',
          prompt:
            'Where have you seen joy and hardship exist at the same time? How has that experience changed what you thought generosity required?',
        },
      ],
    },

    /* ─── 2 Corinthians 8:3–4 — "Beyond Their Power" ─────────────────── */
    {
      ref: '2 Corinthians 8:3–4',
      title: 'Beyond Their Power They Were Willing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              3,
              t('For to their power, I bear record, yea, and '),
              hg('beyond their power', 'cor2-8-beyond-power'),
              t(' they were willing of themselves;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-beyond-power',
          html:
            'This is not recklessness. Paul is a careful man. He says: first, they gave according to their ability. But then, beyond their ability, they were willing. Not pushed. Not shamed. Willing. Of themselves. The self-determination matters. No one dragged them forward. The grace moved them so that they wanted to give more than their means allowed.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              4,
              t('Praying us with much intreaty that '),
              hp('we would receive the gift', 'cor2-8-intreaty'),
              t(' and take upon us the fellowship of the ministering to the saints.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-intreaty',
          html:
            'They did not wait to be asked. They <em>begged</em> Paul and the other apostles to accept their gift. Imagine: people in deep poverty pressing forward, pleading to be allowed to give. They were not reluctant. They were eager. They wanted into the fellowship of caring for the suffering church at Jerusalem.',
        },
        {
          kind: 'greek',
          id: 'cor2-8-autoproairetos',
          title: 'Autoproairetos — Of Their Own Accord',
          script: 'αὐτοπροαίρετος',
          translit: '<strong>autoproairetos</strong> · of one&apos;s own choice; self-determined; voluntary',
          description:
            'The word literally means "choosing from oneself." It is the opposite of coercion. It describes a will that chooses to act before anyone asks it to. The Macedonians did not wait for instruction. They moved first.',
        },
        {
          kind: 'carry',
          html:
            'There is a difference between the generosity that calculates ("I can afford to give this") and the generosity that compels ("I must be part of this"). The Macedonians knew hardship, yet they were so gripped by the fellowship of care that they could not sit still. What cause moves you so deeply that you would give beyond your means to be part of it?',
        },
      ],
    },

    /* ─── 2 Corinthians 8:5 — They First Gave Themselves ─────────────── */
    {
      ref: '2 Corinthians 8:5',
      title: 'First Gave Themselves to the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              5,
              t('And this they did, not as we hoped, but '),
              hp('first gave their own selves to the Lord', 'cor2-8-selves-first'),
              t(', and unto us by the will of God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-selves-first',
          html:
            'Paul expected the gift of money. But what the Macedonians gave first was themselves. Not a donation. A surrender. <em>First gave their own selves to the Lord.</em> Everything flows from this. If your self has been given to the Lord, your money will follow. If your heart has been surrendered, your hands will open. The gift of resources is always secondary to the gift of self.',
        },
        {
          kind: 'christ',
          id: 'cor2-8-self-surrender',
          title: 'Christ Connection — The Gift of Self',
          html:
            'This is precisely what Christ did. He "gave his own self" (Gal. 2:20). He did not send money. He did not hire someone else. "Christ loved us, and gave himself for us an offering and a sacrifice to God" (Eph. 5:2). The Macedonians, in their generosity, imitated Christ&apos;s model of self-surrender. Every true gift begins when the self is handed over first.',
        },
        {
          kind: 'carry',
          html:
            'You have resources—time, money, attention, gifts. But before any of these flow outward, the Scripture suggests something must happen first: the self must be given to the Lord. Not in a moment of heroic surrender, but in the daily offering of your own will. From that foundation, everything else becomes overflow.',
        },
        {
          kind: 'reflection',
          id: 'cor2-8-self-gift',
          prompt: 'What does it mean, practically, to "give your own self to the Lord"? Where in your life might this surrender change how you give?',
        },
      ],
    },

    /* ─── 2 Corinthians 8:6–8 — Paul Appeals and Commends Titus ─────── */
    {
      ref: '2 Corinthians 8:6–8',
      title: 'Abound in This Grace Also',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              6,
              t('Insomuch that we desired Titus, that as he had begun, so he would also finish in you the same grace also.')
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              7,
              t('Therefore, as ye abound in every thing, in faith, and utterance, and knowledge, and in all diligence, and in your '),
              hg('love to us', 'cor2-8-love-abundance'),
              t(', see that ye '),
              hy('abound in this grace also', 'cor2-8-grace-abound'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-love-abundance',
          html:
            'The Corinthians are exceptionally gifted. Paul does not flatter them falsely, but he is honest: in faith, in eloquence, in knowledge, in diligence, and in affection toward Paul. They abound in spiritual gifts. They are not poor. They lack nothing.',
        },
        {
          kind: 'commentary',
          id: 'cor2-8-grace-abound',
          html:
            'Yet Paul says: "See that ye abound in this grace also." Generosity is not separate from the other spiritual gifts. It is a grace. It is not nice addition. It is essential. If you abound in everything else but not in generous giving, you are incomplete. The grace of liberality must match the grace of knowledge.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              8,
              t('I speak not by commandment, but by occasion of the forwardness of others, and to prove the sincerity of your love.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-not-commandment',
          html:
            'Paul is careful to say: I am not commanding you. This is not a rule. But look at what the Macedonians have done. Follow their example. And in doing so, your love will be tested and proven real. Generosity is a proof of whether faith is genuine or merely theoretical.',
        },
        {
          kind: 'carry',
          html:
            'You are strong in many things. But generosity asks a different kind of strength. It asks you to let go. To trust. To prove that your faith in God&apos;s provision is not just words. What you do with money becomes a declaration of what you actually believe.',
        },
      ],
    },

    /* ─── 2 Corinthians 8:9 — The Kenosis of Christ ──────────────────── */
    {
      ref: '2 Corinthians 8:9',
      title: 'Though He Was Rich, Yet for Your Sakes He Became Poor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              9,
              t('For ye know the '),
              hp('grace of our Lord Jesus Christ', 'cor2-8-christ-grace'),
              t(', that though he was rich, yet for your sakes he '),
              hp('became poor', 'cor2-8-christ-poor-became'),
              t(', that ye through his poverty might be rich.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-christ-grace',
          html:
            'This verse is the theological climax of the chapter. Paul invokes not Christ&apos;s teaching, but His grace. His acts. His willingness. The grace of Jesus is demonstrated not in words but in a historical event: He, who was rich, chose to become poor.',
        },
        {
          kind: 'commentary',
          id: 'cor2-8-christ-poor-became',
          html:
            'The language is important[res:sefaria-2-corinthians-8]. He "became poor." He did not simply visit poverty as a temporary condition. He entered it completely. He was born in a borrowed stable. He owned nothing (Mark 1:16ff). He was arrested and stripped. He died naked on a cross. The self-emptying (<em>kenosis</em>) was total.',
        },
        {
          kind: 'christ',
          id: 'cor2-8-kenosis',
          title: 'Christ Connection — The Exchange',
          html:
            'This is the great exchange that drives all Christian faith. Christ "was rich"—the wealth of heaven, equality with God, the glory of divinity. Yet "for your sakes he became poor." Philippians 2:7 says He "emptied himself" (Greek: <em>ekenosen</em>). For what purpose? "That ye through his poverty might be rich." He took our poverty—spiritual, moral, physical—so that we could inherit His riches. His destitution becomes our abundance. This is the model for every act of Christian generosity: I give up what I have so that you might receive what you need.',
        },
        {
          kind: 'carry',
          html:
            'You have been made rich by Christ&apos;s voluntary poverty. That is not a metaphor for you. You have received forgiveness, a new name, an inheritance, adoption into God&apos;s family, eternal life. You are wealthy beyond measure because Christ emptied Himself for you. The question before you is: will you empty yourself, in some small way, for others? Not to earn favor. Not from guilt. But from overwhelming gratitude that you have been made rich.',
        },
        {
          kind: 'reflection',
          id: 'cor2-8-riches-received',
          prompt:
            'What is one specific way Christ&apos;s poverty has made you rich? How does that reality shift the way you think about your own resources?',
        },
      ],
    },

    /* ─── 2 Corinthians 8:10–12 — The Willing Mind ────────────────────── */
    {
      ref: '2 Corinthians 8:10–12',
      title: 'The Willing Mind and the Measure of Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              10,
              t('And herein I give my advice: for this is expedient for you, who have begun not only to do, but also to be forward in your mind a year ago.')
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              11,
              t('Now therefore perform the doing of it; that as there was a readiness to will, so there may be a performance also out of that which ye have.')
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              12,
              t('For if there be first a '),
              hy('willing mind', 'cor2-8-willing-mind'),
              t(', it is accepted according to '),
              hg('that a man hath', 'cor2-8-what-you-have'),
              t(', and not according to that he hath not.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-willing-mind',
          html:
            'The Greek here is <em>prothumia</em>—eagerness, readiness, willingness. It is the state of being ready before action. The Corinthians had the will a year ago. Now Paul says: do it. Close the gap between intention and action. A "willing mind" is the prerequisite. Everything else flows from that internal state.',
        },
        {
          kind: 'greek',
          id: 'cor2-8-prothumia',
          title: 'Prothumia — Eagerness; Readiness',
          script: 'προθυμία',
          translit: '<strong>prothumia</strong> · eagerness; willingness; readiness of mind; earnest inclination',
          description:
            'Prothumia is not reluctant obedience. It is eager action. A willing mind moves forward with joy. God looks not at the size of the gift but at the eagerness with which it is given.',
        },
        {
          kind: 'commentary',
          id: 'cor2-8-what-you-have',
          html:
            'This is crucial for every reader. God does not measure by what you do not have. He measures by what you do have, and what you are willing to give from that. The widow&apos;s two mites were more precious than the rich man&apos;s bags of gold because she gave all she had. You are not responsible for money you do not possess. You are responsible for what grace has put into your hands.',
        },
        {
          kind: 'carry',
          html:
            'You may think: if I had more, I would give more. But Paul says that misses the point. God accepts the gift that flows from a willing mind, measured against what you actually have. What do you have right now? Not someday when you are wealthier, but now? What is God inviting you to release from what you hold?',
        },
        {
          kind: 'reflection',
          id: 'cor2-8-willing-willing',
          prompt: 'Is there a willing mind already present in you about a particular kind of giving? What is stopping the doing from following the will?',
        },
      ],
    },

    /* ─── 2 Corinthians 8:13–15 — Equality Through Supply ────────────── */
    {
      ref: '2 Corinthians 8:13–15',
      title: 'By an Equality',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              13,
              t('For I mean not that other men be eased, and ye burdened: but '),
              hg('by an equality', 'cor2-8-equality'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-equality',
          html:
            'Paul is not commanding the Corinthians into poverty. He is advocating for <em>equality</em>. The Greek word is <em>isotēs</em>—a leveling, a balance, a bringing to the same level. Those who have much share so that those who have little are not left behind. Not everyone becomes poor. But no one is abandoned to suffering when others could help.',
        },
        {
          kind: 'greek',
          id: 'cor2-8-isotēs',
          title: 'Isotēs — Equality; Fair Balance',
          script: 'ἰσότης',
          translit: '<strong>isotēs</strong> · equality; fairness; equal distribution; just balance',
          description:
            'Isotēs is not enforced sameness. It is the kind of fairness where the strong shoulder part of the burden so the weak are not crushed under it. In a body, no single member is left to suffer alone.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              14,
              t('At this time your abundance may be a supply for their want, that their abundance also may be a supply for your want: that there may be ')
            ),
            verse(15, t('As it is written, He that had gathered much had nothing over; and he that had gathered little had no lack.'))
            ,
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-abundance-want',
          html:
            'Paul envisions a church that functions as a body. Today, the Corinthians are strong and can give. Tomorrow, they may be weak and need to receive. The principle is reciprocal and humble. You are not permanently the giver. You are part of a body where need moves around, and strength answers need wherever it appears.',
        },
        {
          kind: 'commentary',
          id: 'cor2-8-manna',
          html:
            'Paul quotes Exodus 16:18[res:intertextual-exodus-manna], the account of the manna in the wilderness. Some gathered much, some little, yet in the end each had enough. God&apos;s provision was equal. Those who had gathered much did not hoard. Those who had gathered little were not left short. The same principle applies to the church: God&apos;s grace is sufficient for all, and the body of Christ distributes what is given so that no one lacks.',
        },
        {
          kind: 'christ',
          id: 'cor2-8-equality-christ',
          title: 'Christ Connection — The Manna Principle',
          html:
            'Christ is the true manna (John 6:35, 51). He fed the five thousand with five loaves and two fish—a sign that God&apos;s abundance, when distributed, is enough for all. The principle of equality Paul invokes here echoes the manna: in God&apos;s economy, there is enough. The question is whether the body will trust that principle and distribute accordingly. The church that gives generously declares faith in God&apos;s provision for all.',
        },
        {
          kind: 'carry',
          html:
            'You live inside a church that spans continents and centuries. Somewhere, someone who shares your faith in Christ is suffering. The manna principle suggests you are not separate from their need. The abundance God has given you is not purely for your own security. It is part of a supply meant to flow. What would change if you truly believed you are part of that one body?',
        },
        {
          kind: 'reflection',
          id: 'cor2-8-manna-today',
          prompt:
            'Where do you see inequality in your church or community? What would it mean to act as though you and those who lack are part of the same body?',
        },
      ],
    },

    /* ─── 2 Corinthians 8:16–19 — Titus and the Unnamed Brother ─────── */
    {
      ref: '2 Corinthians 8:16–19',
      title: 'The Messengers Sent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              16,
              t('But thanks be to God, which put the same earnest care into the heart of '),
              hy('Titus', 'cor2-8-titus-care'),
              t(' for you.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-titus-care',
          html:
            'Titus is a trusted lieutenant of Paul&apos;s. When Titus learned of the Corinthians&apos; situation, he was moved with the same care Paul feels. The gospel creates community not just across space but across feeling. Titus, far away, is touched by the need of believers he may not have met. This is the power of the body of Christ.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              17,
              t('For indeed he accepted the exhortation; but being more forward, of his own accord he went unto you.')
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              18,
              t('And we have sent with him the brother, whose praise is in the gospel throughout all the churches;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-unnamed-brother',
          html:
            'Paul mentions an unnamed brother "whose praise is in the gospel throughout all the churches." He does not name him. The text has never been certain who this is (possibly Luke, possibly Barnabas, possibly someone else). But the point is clear: this man is known and trusted across the churches for his faithful work in the gospel. These are not random couriers. They are proven servants of Christ.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              19,
              t('And not that only, but who was also chosen of the churches to travel with us with this grace, which is administered by us to the glory of the same Lord, and declaration of your ready mind:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-chosen-churches',
          html:
            'Notice: the messenger was "chosen of the churches," not appointed by Paul alone. This is a corporate decision. The church itself says: this person represents us well. This person carries our love faithfully. In entrusting the gift to these messengers, the Corinthians are entrusting it to people the body has vetted.',
        },
        {
          kind: 'carry',
          html:
            'When you give, you are saying: "I trust that my gift will be used well." Part of that trust is the people you entrust it to. Who are the faithful servants in your church? Who has proven themselves over years? Are you supporting them? Are you willing to let your generosity flow through their hands and their work?',
        },
      ],
    },

    /* ─── 2 Corinthians 8:20–24 — Providing for Honest Things ─────────── */
    {
      ref: '2 Corinthians 8:20–24',
      title: 'Honesty in the Sight of All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              20,
              t('Avoiding this, that no man should blame us in this abundance which is administered by us:')
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              21,
              t('Providing for '),
              hg('honest things', 'cor2-8-honest-sight'),
              t(', not only in the sight of the Lord, but also in the sight of men.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-honest-sight',
          html:
            'This is a remarkable principle. Paul says: we must be honest not only before God but before people. The handling of money is <em>public</em> business. The gift given in secret might be stolen or wasted in secret. The church has learned, painfully, that money + secrecy = corruption. Honesty requires witnesses. It requires transparency. It requires that even those skeptical of the church can see that the money is being handled faithfully.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              22,
              t('And we have sent with them our brother, whom we have oftentimes proved diligent in many things; but now much more diligent, upon the great confidence which I have in you.')
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              23,
              t('Whether any do inquire of '),
              hy('Titus', 'cor2-8-titus-partner'),
              t(', he is my partner and fellowhelper concerning you: or our brethren be inquired of, they are the messengers of the churches, and the glory of Christ.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-titus-partner',
          html:
            'Paul gives his full endorsement: Titus is his partner and fellow-helper. The other messengers are not Paul&apos;s private servants. They are "messengers of the churches"—representatives chosen and trusted by the body itself. This distribution of responsibility means no single person controls the gift. Multiple witnesses ensure honesty.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              24,
              t('Wherefore shew ye to them, and before the churches, '),
              hp('the proof of your love', 'cor2-8-proof-love'),
              t(', and of our boasting on your behalf.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-8-proof-love',
          html:
            'This is the last word: your gift becomes "proof of your love." Not your words about love. Your actual resources. Your actual hands opening. That proof is made visible "before the churches"—not hidden, not private, but public. The Corinthians give so that other churches will know: the gospel produces lovers, not hoarders. Christians share, not cling.',
        },
        {
          kind: 'christ',
          id: 'cor2-8-proof-witness',
          title: 'Christ Connection — Love as Public Witness',
          html:
            'Christ&apos;s love was not private. He laid down His life publicly, for witnesses to see. His death and resurrection declare His love in a way that cannot be hidden or denied. When the church gives generously, it makes a public declaration of the love of Christ working through it. The world watches. And in the watching, some may come to believe.',
        },
        {
          kind: 'carry',
          html:
            'You cannot hide your faith from the world. The question is what kind of faith you are displaying. Is it faith that trusts God for provision, or faith that says "I must hold on to everything I have"? Is it faith that produces love in action, or faith that remains theoretical? Your generosity, or your refusal of it, is a sermon to everyone watching.',
        },
        {
          kind: 'reflection',
          id: 'cor2-8-proof-public',
          prompt:
            'What does your giving declare about your faith? What would it mean to let your generosity be a "proof of your love" visible to others?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'For ye know the grace of our Lord Jesus Christ, that though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 8:9 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-generosity',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Generosity and Giving',
      url: 'https://www.bibleodyssey.org/dictionary/generosity/',
      description: 'SBL article on generosity as a spiritual gift rooted in grace, exemplified by Christ and the Macedonian churches.',
    },
    {
      id: 'intertextual-exodus-manna',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Exodus 16:18 ↔ 2 Corinthians 8:15',
      url: 'https://intertextual.bible/text/exodus-16.18/2-corinthians-8.15',
      description: 'Connection between the manna principle and Paul&apos;s vision of church equality: God&apos;s supply is sufficient for all.',
    },
    {
      id: 'sefaria-2-corinthians-8',
      kind: 'study',
      source: 'Sefaria',
      label: '2 Corinthians 8 — Full Text & Connections',
      url: 'https://www.sefaria.org/2-Corinthians.8',
      description: 'Open-access text with references to poverty, wealth, self-sacrifice, and the Macedonian model of giving.',
    },
  ],

  hasHebrew: false,
};
