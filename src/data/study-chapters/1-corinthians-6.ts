import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Corinthians 6 — Your Body Is for the Lord
 *
 * Paul addresses two issues: believers suing one another in secular courts, and
 * the sexual immorality of visiting prostitutes. Both misunderstand the nature
 * of the body. The body is not incidental to faith. It is the temple of the Holy
 * Spirit, purchased with a price. How we use our bodies matters eternally.
 */
export const FIRST_CORINTHIANS_6: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 6,

  estimatedMinutes: { beginner: 6, intermediate: 15, deep: 21 },
  intros: [
    'The Corinthian church reveals a troubling disconnect: they can speak in tongues and prophesy, yet they take one another to pagan courts to settle disputes. They can boast of spiritual gifts, yet they visit prostitutes, treating their bodies as instruments of sin. Paul cuts through the pretense. You cannot claim to belong to Christ while disregarding what the body is and what it is for.',
    'The radical claim underlying this chapter is that the body matters. In Greek philosophy, the body was considered a prison for the soul, essentially neutral or even hostile to spiritual growth. Paul reverses this. The body is the dwelling place of the Holy Spirit, purchased by the blood of Christ. Your body is not your own. It belongs to God. What you do with it matters eternally.',
  ],

  sections: [
    /* ─── 1 Corinthians 6:1–3 — Dare any of you go to law? ───────────────── */
    {
      ref: '1 Corinthians 6:1–3',
      title: 'Dare Any of You Go to Law?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(1, hg('Dare any of you, having a matter against another,', 'cor6-dare'), t(' '), hg('go to law before the unjust,', 'cor6-unjust'), t(' and not before the saints?')),
            verse(2, t('Do ye not know that '), hg('the saints shall judge the world?', 'cor6-judge-world'), t(' and if the world shall be judged by you, are ye not competent to judge the smallest matters?')),
            verse(3, t('Know ye not that we shall judge angels? how much more things that pertain to this life?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-dare',
          html:
            'Paul opens with a question that lands like a gasp: <em>dare</em> any of you? The audacity isn&apos;t just the lawsuit itself—it&apos;s the choosing of a pagan court. Believers are taking their disputes before judges who do not know God, judges who operate from an entirely foreign system of justice. This is not a legal question; it&apos;s a theological one. If you belong to Christ, who will judge your case?',
        },
        {
          kind: 'greek',
          id: 'greek-krinō',
          title: 'Krinō — to Judge',
          script: 'κρίνω',
          translit: '<strong>krinō</strong> · to judge; to distinguish; to render judgment; to condemn',
          description:
            'Paul uses this word both ways in a few verses: the saints will <em>judge</em> the world (v. 2); believers shouldn&apos;t judge one another (v. 4); the Lord <em>judges</em> you (v. 5). The question becomes: who holds the authority to discern right from wrong?',
        },
        {
          kind: 'commentary',
          id: 'cor6-unjust',
          html:
            'The Greek word for "unjust" (<em>adikos</em>) does not mean they are malicious—it means they operate outside God&apos;s justice. They have no access to the Spirit, no framework rooted in Christ. To submit a church dispute to such a court is to accept a foreign verdict as binding.',
        },
        {
          kind: 'commentary',
          id: 'cor6-judge-world',
          html:
            'Paul reminds them: the saints—ordinary believers—will one day judge the world. This isn&apos;t speculation or future hope; it&apos;s a stated fact rooted in your union with Christ. If you will sit in judgment over cosmic affairs, can you not handle a property dispute today? The irony is withering.',
        },
        {
          kind: 'christ',
          id: 'christ-judge-authority',
          title: 'Christ Connection — Judgment Seated with Christ',
          html:
            'Paul is drawing on an NT reality: believers are already seated with Christ in heavenly places (Eph. 2:6). Christ is the judge of all (John 5:22), and those united to Him participate in His authority. Not to judge arrogantly, but to discern rightly according to God&apos;s Word. The Corinthians forget their own dignity—and their own responsibility.',
        },
        {
          kind: 'carry',
          html:
            'When you are wronged at work, at home, in a friendship, your instinct is to take your case to the world—to lawyers, to anger, to public vindication. Paul asks: do you understand who you are? You are seated with Christ. You operate under His authority. Can you not sort this out among yourselves?',
        },
        {
          kind: 'reflection',
          id: 'cor6-judge-reflection',
          prompt:
            'What is one dispute or grievance you&apos;re nursing right now? What would it mean to bring it before the saints—your church family, Christ-followers who actually know God&apos;s justice—rather than before the world?',
        },
      ],
    },

    /* ─── 1 Corinthians 6:4–8 — Why do ye not rather take wrong? ──────────── */
    {
      ref: '1 Corinthians 6:4–8',
      title: 'Why Not Rather Take Wrong?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(4, t('If then ye have judgments of things pertaining to this life, '), hg('set them to judge who are least esteemed in the church.', 'cor6-least-esteemed')),
            verse(5, t('I speak to your shame. Is it so, that there is not a wise man among you? not one that shall be able to judge between his brethren?')),
            verse(6, t('But '), hg('brother goeth to law with brother,', 'cor6-brother-law'), t(' and that before the '), hg('unbelievers.', 'cor6-unbelievers')),
            verse(7, t('Now therefore there is utterly a fault among you, because ye go to law one with another. '), hg('Why do ye not rather take wrong?', 'cor6-take-wrong'), t(' why do ye not rather suffer yourselves to be defrauded?')),
            verse(8, t('Nay, ye do wrong, and defraud, and that your brethren.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-least-esteemed',
          html:
            'The text is difficult here, but Paul&apos;s point seems to be: if you must have disputes settled by judges, choose someone from your own fellowship—even the least wise among you. Anything is better than going before unbelievers. The sarcasm is bitter: "Is it so, that there is not a wise man among you?" Your community has been given the Spirit. Surely one of you has enough wisdom to sort this out.',
        },
        {
          kind: 'commentary',
          id: 'cor6-brother-law',
          html:
            'The word "brother" (<em>adelphos</em>) appears twice in verse 6, catching the reader&apos;s ear. Brother taking brother to law. The very name we call each other in Christ becomes the indictment. This is not a dispute between strangers; it&apos;s a betrayal of covenant.',
        },
        {
          kind: 'commentary',
          id: 'cor6-unbelievers',
          html:
            'Paul names them again: <em>unbelievers</em>. The term marks the central line: there is a difference between those who know Christ and those who do not. To let an unbeliever judge between believers is to invert the order of the cosmos.',
        },
        {
          kind: 'commentary',
          id: 'cor6-take-wrong',
          html:
            '"Why do ye not rather take wrong?" This is not passive resignation. It is an active choice—to absorb loss, to suffer defrauding, to relinquish vindication for the sake of the church&apos;s witness. This flies against every human instinct. Paul knows that. He is asking believers to live from a different center—trust in God, not trust in being proven right.',
        },
        {
          kind: 'carry',
          html:
            'Someone owes you an apology you may never get. Someone has wronged you and walked away free. Paul asks: is being right more important to you than preserving your church? Is vindication worth the wound you inflict on the body of Christ? Take the loss. Let it go. Your Father sees what was taken from you.',
        },
        {
          kind: 'reflection',
          id: 'cor6-wrong-reflection',
          prompt:
            'What would it cost you to absorb a wrong instead of fighting it? What might it gain your church, your witness, your own soul?',
        },
      ],
    },

    /* ─── 1 Corinthians 6:9–11 — The Vice List ────────────────────────────── */
    {
      ref: '1 Corinthians 6:9–10',
      title: 'Neither Fornicators, Nor Idolaters...',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(9, t('Know ye not that the unrighteous shall not inherit the kingdom of God? Be not deceived: '), hg('neither fornicators,', 'cor6-fornicators'), t(' nor idolaters, nor '), hg('adulterers,', 'cor6-adulterers'), t(' nor '), hg('effeminate,', 'cor6-effeminate'), t(' nor '), hg('abusers of themselves with mankind,', 'cor6-abusers')),
            verse(10, t('Nor thieves, nor covetous, nor drunkards, nor revilers, nor extortioners, shall inherit the kingdom of God.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-unrighteous',
          html:
            'Paul opens with a sober statement: unrighteousness has consequences. Not because God is angry or unfair, but because sin separates you from His kingdom. The life of the kingdom is incompatible with the life of habitual sin. Paul is not listing sins for the sake of judgment; he is naming the very sins the Corinthian church was committing—and then he will tell them something staggering.',
        },
        {
          kind: 'greek',
          id: 'greek-adikia',
          title: 'Adikia — Unrighteousness',
          script: 'ἀδικία',
          translit: '<strong>adikia</strong> · unrighteousness; injustice; wrongdoing; the condition of being out of step with God&apos;s justice',
          description:
            'Adikia is not just "badness"—it&apos;s a state of being fundamentally misaligned with God&apos;s kingdom. The unrighteous don&apos;t inherit the kingdom not because they are barred by an arbitrary rule, but because the kingdom and unrighteousness are mutually exclusive.',
        },
        {
          kind: 'commentary',
          id: 'cor6-fornicators',
          html:
            'Fornicators—those visiting prostitutes, like the Corinthians themselves. Paul is not condemning from a distance. He is naming the very sin that divides the church.',
        },
        {
          kind: 'commentary',
          id: 'cor6-adulterers',
          html:
            'Adulterers appear here alongside fornicators. Some are betraying spouses. Others are visiting brothels. Both are misuses of the body—a body that, as Paul will soon remind them, belongs to the Lord.',
        },
        {
          kind: 'commentary',
          id: 'cor6-effeminate',
          html:
            'The word <em>malakos</em> (rendered "effeminate" in the KJV) is contested. In context, it likely refers to the passive partner in same-sex activity. Paul is not condemning a personality or manner of speech—he is naming a sexual practice that separates from God&apos;s kingdom. The text speaks plainly. We need not soften it, but we also need not add layers it does not claim.',
        },
        {
          kind: 'commentary',
          id: 'cor6-abusers',
          html:
            'The term <em>arsenokoitēs</em> (literally "man-bedder") is similarly specific. Paul names same-sex intercourse. He does not elaborate. He does not philosophize. He names it alongside idolatry, theft, and covetousness, all of which separate one from the kingdom. What matters next is not the depth of this particular sin, but the response to all of them.',
        },
      ],
    },

    /* ─── 1 Corinthians 6:11 — And such were some of you ──────────────────── */
    {
      ref: '1 Corinthians 6:11',
      title: 'And Such Were Some of You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(11, t('And such were some of you: but ye are '), hg('washed,', 'cor6-washed'), t(' but ye are '), hg('sanctified,', 'cor6-sanctified'), t(' but ye are '), hg('justified', 'cor6-justified'), t(' in the name of the Lord Jesus, and by the Spirit of our God.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-such-were',
          html:
            'Three words in past tense: <em>were</em>. Fornicators, idolaters, adulterers, thieves. That was your history. But. The word <em>but</em> turns everything. The chapter is not written to condemn the Corinthians into obedience. It is written to remind them what has already happened to them. You have already been changed.',
        },
        {
          kind: 'greek',
          id: 'greek-apolouō',
          title: 'Apolouō — to Wash',
          script: 'ἀπολούω',
          translit: '<strong>apolouō</strong> · to wash off; to rinse away; to cleanse completely',
          description:
            'The prefix <em>apo-</em> means "away," emphasizing the complete removal. Your sins are not covered—they are washed away, rinsed off. This is not God looking past your guilt; it&apos;s God removing it entirely.',
        },
        {
          kind: 'christ',
          id: 'christ-washed-sanctified-justified',
          title: 'Christ Connection — The Threefold Work of Christ',
          html:
            'Paul names three works: <em>washed</em>, <em>sanctified</em>, <em>justified</em>. All three are accomplished in Christ&apos;s name and by His Spirit. You are washed—your sins cleansed by His blood (Heb. 10:10). You are sanctified—set apart for God, made holy by His Spirit (1 Thess. 5:23). You are justified—declared righteous before the Father through His death and resurrection (Rom. 5:9). The past you are addressed with complete redemptive power.',
        },
        {
          kind: 'greek',
          id: 'greek-hagiazō',
          title: 'Hagiazō — to Sanctify',
          script: 'ἁγιάζω',
          translit: '<strong>hagiazō</strong> · to set apart; to make holy; to consecrate',
          description:
            'You are not just washed of sin; you are set apart as holy. You now belong to God. Your status has shifted from slave to sin to slave to righteousness.',
        },
        {
          kind: 'commentary',
          id: 'cor6-washed',
          html:
            'Washed—your sins are not merely forgiven, they are cleansed away, removed from you entirely. The past does not cling.',
        },
        {
          kind: 'commentary',
          id: 'cor6-sanctified',
          html:
            'Sanctified—you are set apart for God alone. This is not a gradual process beginning now. It is already complete. You are already holy, already belonging to Him.',
        },
        {
          kind: 'commentary',
          id: 'cor6-justified',
          html:
            'Justified—declared righteous before the Father. All charges are dropped. You stand before Him not guilty, because you stand in Christ.',
        },
        {
          kind: 'carry',
          html:
            'Your past may be dark—habits, relationships, things you&apos;ve done that shame you still. Paul reminds you: <em>and such were some of you</em>. Past tense. You have been washed. You have been set apart. You have been declared righteous. This is the foundation of everything that follows. You cannot live as the old you because you are not the old you anymore.',
        },
        {
          kind: 'reflection',
          id: 'cor6-washed-reflection',
          prompt:
            'What sin or shame do you still carry as though it defines you? Can you believe that you have genuinely been washed, sanctified, and justified—that it is truly past tense?',
        },
      ],
    },

    /* ─── 1 Corinthians 6:12–13 — All things are lawful ────────────────────── */
    {
      ref: '1 Corinthians 6:12–13',
      title: 'All Things Are Lawful—But Are They Wise?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(12, hg('All things are lawful unto me,', 'cor6-lawful'), t(' but all things are not expedient: all things are lawful for me, but I will not be brought under the power of any.')),
            verse(13, t('Meats for the belly, and the belly for meats: but God shall '), hg('destroy both it and them.', 'cor6-destroy'), t(' Now the '), hg('body is not for fornication,', 'cor6-body-not-fornication'), t(' but for the Lord; and the Lord for the body.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-lawful',
          html:
            '"All things are lawful"—Paul quotes what the Corinthians themselves are saying, a slogan of Christian freedom. And he does not deny it. Under Christ, you are free from the law. But freedom is not license. Just because something is lawful does not make it wise. Just because you can does not mean you should.',
        },
        {
          kind: 'commentary',
          id: 'cor6-destroy',
          html:
            'The body will be destroyed, along with food. This verse has troubled readers. Paul seems to suggest the body is temporary, throwaway. But the next sentence reverses this entirely: the <em>body is for the Lord</em>. Paul is not denigrating the physical. He is saying the body&apos;s trajectory is resurrection, not permanent carnality. To use the body now as if this life is all there is misses the point entirely.',
        },
        {
          kind: 'commentary',
          id: 'cor6-body-not-fornication',
          html:
            'Here Paul makes the chapter&apos;s central claim: the body is not for fornication. You do not own your body for your own use. It is not an instrument of your pleasure. It is for the Lord. And—strikingly—the Lord is for the body. God cares about what happens to your body. He does not ask you to transcend it or escape it. He redeems it, glorifies it, will resurrect it.',
        },
        {
          kind: 'carry',
          html:
            'You may feel that your sexual choices are your own business—private, harmless. Paul challenges this entirely. Your body is not private property. It is the Lord&apos;s. This does not mean shame or fear. It means your body is precious to God, worthy of His care, destined for His glory. How you use it matters.',
        },
        {
          kind: 'reflection',
          id: 'cor6-body-reflection',
          prompt:
            'Where do you treat your body as your own to use as you please? What would change if you believed it belonged to the Lord, and the Lord belonged to your body—caring for it, glorifying it, resurrecting it?',
        },
      ],
    },

    /* ─── 1 Corinthians 6:14–16 — Members of Christ ─────────────────────────── */
    {
      ref: '1 Corinthians 6:14–16',
      title: 'Your Body Is a Member of Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(14, t('And God hath both raised up the Lord, and will also raise up us by his own power.')),
            verse(15, hg('Know ye not that your bodies are the members of Christ?', 'cor6-members'), t(' shall I then take the members of Christ, and make them the members of an harlot? God forbid.')),
            verse(16, t('What? know ye not that he which is joined to an harlot is one body? for two, saith he, shall be one flesh.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-members',
          html:
            'This is staggering language. Your body is not just yours. It is <em>a member of Christ</em>. Not metaphorically—Paul means it. When you join yourself to another body, you pull Christ into that union. Your body carries Christ&apos;s presence. Sexual union is not a private act. It is a corporate act. You cannot hide it from Him.',
        },
        {
          kind: 'christ',
          id: 'christ-members',
          title: 'Christ Connection — Union with Christ&apos;s Body',
          html:
            'Paul is drawing on the mystery revealed in Ephesians: believers are members of Christ&apos;s body (Eph. 5:30). This is not decoration—it is the core of Christian identity. "We are members of his body, of his flesh, and of his bones." To desecrate your body is to desecrate His.',
        },
        {
          kind: 'commentary',
          id: 'cor6-one-flesh',
          html:
            'Paul quotes Genesis 2:24: when two become one flesh in sexual union, they form a unit. This is what God designed marriage to be—a profound union. But when you take that same physical union and do it with a prostitute, you are claiming that union belongs anywhere, for anyone. The Corinthians treat sexual acts as transactions, not covenants. Paul says: every sexual act creates a real union. This is why it matters so much.',
        },
        {
          kind: 'carry',
          html:
            'You may see sexual acts as separate from who you are—a moment, a physical need, nothing deeper. Paul says: that is a lie your body knows is false. When you join yourself to another, something real happens. A union is formed. Christ is present. You cannot compartmentalize this.',
        },
        {
          kind: 'reflection',
          id: 'cor6-members-reflection',
          prompt:
            'What does it mean to you that your body is a member of Christ? How might that reality change what you do with your body, and whom you invite into physical union?',
        },
      ],
    },

    /* ─── 1 Corinthians 6:17–18 — Joined to the Lord ──────────────────────── */
    {
      ref: '1 Corinthians 6:17–18',
      title: 'Joined to the Lord—One Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(17, hg('But he that is joined unto the Lord is one spirit.', 'cor6-one-spirit')),
            verse(18, hg('Flee fornication.', 'cor6-flee'), t(' Every sin that a man doeth is without the body; but he that committeth fornication sinneth against his own body.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-one-spirit',
          html:
            'Paul sets the alternative before the Corinthians: you can join yourself to a prostitute (one body), or you can join yourself to the Lord (one spirit). The contrast is stark. One union is physical and final. The other is spiritual and eternal. The body chooses which union it serves.',
        },
        {
          kind: 'greek',
          id: 'greek-kolaō',
          title: 'Kolaō — to Adhere; to Glue Together',
          script: 'κολλάω',
          translit: '<strong>kolaō</strong> · to join; to glue together; to be cemented to',
          description:
            'The word suggests permanence—not a temporary liaison, but a joining. When you join yourself to the Lord, you are welded to Him. That is your deepest union. Every other union should flow from it, not compete with it.',
        },
        {
          kind: 'commentary',
          id: 'cor6-flee',
          html:
            'Paul does not say "avoid" or "resist." He says <em>flee</em>. Run. Fornication is not a temptation to be managed through willpower. It is danger to be escaped. This is not shame-language; it is survival language. When faced with sexual sin, the call is not to fight but to flee.',
        },
        {
          kind: 'commentary',
          id: 'cor6-against-own-body',
          html:
            'The statement is puzzling at first: every sin is "without the body," but fornication is against your own body. What does Paul mean? Likely this: other sins—theft, anger, jealousy—can be committed through your body but originate elsewhere (the mind, the heart). But fornication is unique: it is a sin against the body itself. It misuses the body for its own purposes. It treats your body as a thing to be exploited rather than honored.',
        },
        {
          kind: 'carry',
          html:
            'When sexual temptation arrives—and it will—do not negotiate. Do not calculate. Do not think through the pros and cons. Flee. Your body is not your battleground; it is God&apos;s temple. To stay and fight is already to have lost. Leave. Run. Find the presence of the Lord instead.',
        },
        {
          kind: 'reflection',
          id: 'cor6-flee-reflection',
          prompt:
            'When do you tend to negotiate with sexual temptation instead of fleeing? What would it look like to actually run—to remove yourself from the situation, the website, the relationship that is pulling you?',
        },
      ],
    },

    /* ─── 1 Corinthians 6:19–20 — Your Body Is the Temple ────────────────── */
    {
      ref: '1 Corinthians 6:19–20',
      title: 'Your Body Is the Temple of the Holy Ghost',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(19, hg('What? know ye not that your body is the temple of the Holy Ghost which is in you,', 'cor6-temple-holy-ghost'), t(' which ye have of God, and ye are not your own?')),
            verse(20, t('For '), hg('ye are bought with a price,', 'cor6-purchased'), t(' therefore glorify God in your body, and in your spirit, which are God&apos;s.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-temple-holy-ghost',
          html:
            'This is the chapter&apos;s climax. Your body[res:bibleodyssey-body]—<em>soma</em>[res:perseus-scaife-greek-soma], the whole physical form—is a <em>naos</em>, a temple, the dwelling place of the Holy Spirit. In the Old Testament[res:sefaria-genesis-224], the temple was where God&apos;s presence dwelled most intensely. That role has passed to you. Not your mind alone, not your spirit alone—your body. What you do with your flesh matters to God because God Himself lives there.',
        },
        {
          kind: 'greek',
          id: 'greek-naos',
          title: 'Naos — Temple Sanctuary',
          script: 'ναός',
          translit: '<strong>naos</strong> · temple; the inner sanctuary; the holy of holies',
          description:
            'Not a church building (that&apos;s <em>hieron</em>), but the innermost sanctum where God&apos;s presence dwells. Your body is that sacred space. The Spirit of God inhabits your physicality.',
        },
        {
          kind: 'commentary',
          id: 'cor6-purchased',
          html:
            'You have been purchased at a price—the blood of Christ. You are not your own. You belong to someone infinitely worthy. This is not bondage; it is belonging.',
        },
        {
          kind: 'commentary',
          id: 'cor6-not-your-own',
          html:
            'Paul adds: "ye are not your own." This hits hard against a culture of self-ownership, autonomy, and personal choice. But the Corinthians have been purchased. They are not free in the sense the world means. They are free in the sense that matters—free from sin, free for God, liberated to become what they were made to be.',
        },
        {
          kind: 'christ',
          id: 'christ-bought-with-price',
          title: 'Christ Connection — Bought with a Price',
          html:
            'The price was Christ&apos;s blood (1 Pet. 1:18–19). You are not your own because Christ claimed you as His own through the ransom of His death. You have been <em>agorazō</em>—purchased, redeemed, bought out of slavery to sin and bought into ownership by God. This is the ultimate statement of your value: Christ paid your price. You are worth His blood.',
        },
        {
          kind: 'greek',
          id: 'greek-agorazō',
          title: 'Agorazō — to Buy; to Redeem',
          script: 'ἀγοράζω',
          translit: '<strong>agorazō</strong> · to purchase in the marketplace; to buy freedom for a slave; to redeem',
          description:
            'The word carries the image of a slave market. You were in bondage. Christ entered the marketplace, paid the price, and claimed you. You are no longer for sale. You belong to Him.',
        },
        {
          kind: 'commentary',
          id: 'cor6-glorify',
          html:
            'The final call: <em>glorify God in your body, and in your spirit, which are God&apos;s</em>. This is not about shame. It is about glory. Your body is not a thing to be ashamed of or transcended. It is a vessel of glory, the very temple where God dwells. To glorify God in your body means to honor what God honors, to recognize that your flesh is sacred, to use your body as an instrument of the divine.',
        },
        {
          kind: 'greek',
          id: 'greek-doxazō',
          title: 'Doxazō — to Glorify',
          script: 'δοξάζω',
          translit: '<strong>doxazō</strong> · to give glory to; to honor; to magnify',
          description:
            'To glorify means to ascribe worth, to declare something&apos;s true value. When you glorify God in your body—through health choices, sexual purity, generosity, service—you are declaring His worth by how you live.',
        },
        {
          kind: 'carry',
          html:
            'Every meal, every rest, every physical boundary you keep, every time you say no to something that would dishonor your body—this is glorifying God. You are declaring by your body&apos;s choices that God is worth it. That your relationship with Him matters more than temporary pleasure. That you believe His design for your body is better than the world&apos;s. This is not restriction. This is worship.',
        },
        {
          kind: 'reflection',
          id: 'cor6-glorify-reflection',
          prompt:
            'In what specific ways could you glorify God in your body this week? Not from shame, but from the joy of recognizing whose temple it is?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own? For ye are bought with a price: therefore glorify God in your body.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 6 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-224',
      kind: 'study',
      source: 'Sefaria',
      label: 'Genesis 2:24 — Two Shall Become One Flesh',
      url: 'https://www.sefaria.org/Genesis.2.24?lang=en',
      description: 'The foundational text Paul cites in verse 16 — the covenant design for sexual union in marriage.',
    },
    {
      id: 'bibleodyssey-body',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Body',
      url: 'https://www.bibleodyssey.org/dictionary/body/',
      description: 'SBL study entry on <em>soma</em> in biblical theology — the body as integral to personhood, not incidental to spirit.',
    },
    {
      id: 'perseus-scaife-greek-soma',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'Greek Lexicon — Soma (σῶμα)',
      url: 'https://scaife.perseus.org/library/urn:cts:greekLit:tlg0540.tlg001/',
      description: 'Lexical and textual evidence for the Greek word <em>soma</em> — body, flesh, person — across classical and biblical usage.',
    },
  ],

  hasHebrew: false,
};
