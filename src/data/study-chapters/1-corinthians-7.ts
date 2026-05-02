import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 7 — Marriage and Singleness
 *
 * Paul answers the Corinthian church&apos;s questions about marriage with pastoral
 * care. He does not romanticize celibacy or marriage; instead, he holds both
 * states as legitimate gifts. What matters is fidelity to Christ and love for
 * one&apos;s neighbor, whether inside or outside the covenant of marriage.
 */
export const FIRST_CORINTHIANS_7: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 7,

  intros: [
    'Some in the Corinthian church have written Paul asking whether believers should marry at all. It appears some have embraced an extreme asceticism, seeing the body and marriage as inherently unclean. Paul writes to correct this error without dismissing the genuine spiritual good he sees in singleness. Both marriage and singleness are callings. Both are gifts from God. The question is not which one is higher, but how to live faithfully in the one you have.',
    'This chapter is one of the most pastorally delicate in Scripture. Paul addresses believers trapped in unequal marriages, the enslaved and the free, the widowed and the unmarried, all people asking: &quot;How do I honor God where I am?&quot; His answer is consistent: you are bought with a price. Christ owns your life. Whether you marry or not, whether you remain enslaved or become free, the Lord has called you to walk in that calling with integrity. The time is short. Live undistracted. Make decisions that serve love.',
    'Reading this chapter well requires one thing: resist the urge to make Paul say what your tradition says. Let him stand on his own ground. He is speaking to an ancient church in crisis about its body. The principles are timeless. The application is yours.',
  ],

  sections: [
    /* ─── 1 Cor 7:1–2 — Marriage and Continence ──────────────────────── */
    {
      ref: '1 Corinthians 7:1–2',
      title: 'It Is Good',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(1, t('Now concerning the things whereof ye wrote unto me: '), hp('It is good for a man not to touch a woman', 'c7-good')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-good',
          html:
            'Paul is quoting something the Corinthians have written. &quot;It is good for a man not to touch a woman.&quot; He does not immediately contradict them. There is a good that lies in continence, in single-hearted devotion. But goodness is not the only measure.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(2, t('Nevertheless, to avoid fornication, '), hg('let every man have his own wife', 'c7-marriage'), t(', and let every woman have her own husband.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-marriage',
          html:
            'Paul adds a word that shifts the whole discussion. Yes, continence is good. But marriage is also good—and for many, necessary. Marriage is not second-best spirituality; it is a remedy for human passion, a safeguard against fornication. It is also the normal context where a man and woman live as companions.',
        },
        {
          kind: 'greek',
          id: 'c7-gyne',
          title: 'Gyne — Woman; Wife',
          script: 'γυνή',
          translit: '<strong>gyne</strong> · woman; wife; female person',
          description:
            'When Paul says a man should &quot;have&quot; his own wife, the word is gyne — a full human person, not property. In the ancient world, that language alone was radical. A wife is someone you belong to, just as she belongs to you.',
        },
        {
          kind: 'carry',
          html:
            'If you are unmarried and feeling pressure to marry, this word is for you: there is good in waiting. If you are single and grieving that state, there is good there too. But if you are burning with desire, marriage is not a lesser spiritual choice. It is God&apos;s design for keeping the covenant of your whole self.',
        },
        {
          kind: 'reflection',
          id: 'c7-r1',
          prompt: 'Where do you feel the tension between continence and companionship in your own life? What does it look like to honor both?',
        },
      ],
    },

    /* ─── 1 Cor 7:3–4 — Due Benevolence ────────────────────────────── */
    {
      ref: '1 Corinthians 7:3–4',
      title: 'Defraud Not',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(3, t('Let the husband render unto the wife due benevolence: and likewise also the wife unto the husband.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-benevolence',
          html:
            'The word &quot;due benevolence&quot; is opheile — what is owed. A debt of kindness. Paul is saying something no pagan moralist of his era would say: a man and woman in marriage owe each other not just obedience or reproduction, but affection. Tenderness. Care.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(4, t('The wife hath not power of her own body, but the husband: and likewise also the husband hath not power of his own body, but the wife.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-power',
          html:
            'This is the most radical verse on marriage in the ancient world. The wife has authority over the husband&apos;s body. The husband has authority over the wife&apos;s body. Not as masters. As covenanted partners. Mutuality. Neither is the autonomous owner of their own flesh; both belong to each other in a sacred exchange.',
        },
        {
          kind: 'christ',
          id: 'c7-christ-body',
          title: 'Christ Connection — Your Body, Not Your Own',
          html:
            'Paul says this exact phrase to all the Corinthians in 1 Corinthians 6:19–20: &quot;Know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own? For ye are bought with a price.&quot; You are Christ&apos;s. That belonging undergirds the marriage covenant. You cannot claim absolute autonomy over your own body because it has been purchased by the cross.',
        },
        {
          kind: 'carry',
          html:
            'Marriage requires surrender—not dominance, not control, but the conscious choice to give your body and your will to another person as they give theirs to you. This is the shape of the cross: dying to self-interest and rising in covenant love.',
        },
      ],
    },

    /* ─── 1 Cor 7:5–6 — Refrain and Consent ──────────────────────────── */
    {
      ref: '1 Corinthians 7:5–6',
      title: 'Refrain by Consent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(5, t('Defraud ye not one the other, except it be with consent for a time, that ye may give yourselves to fasting and prayer; and come together again, that Satan tempt you not for your incontinency.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-defraud',
          html:
            '&quot;Defraud&quot; means to rob, to deprive. If you refrain from each other, it must be by mutual agreement and for a purpose—prayer, fasting, spiritual discipline. But it cannot be indefinite. Both partners&apos; needs matter. Both are due care. Any withholding that becomes unilateral or permanent is a form of theft from the marriage covenant.',
        },
        {
          kind: 'greek',
          id: 'c7-apostereo',
          title: 'Apostereo — Defraud; Rob',
          script: 'ἀποστερέω',
          translit: '<strong>apostereo</strong> · to deprive; rob; withhold what belongs to another',
          description:
            'Paul uses the language of crime and violation. Not honoring your spouse&apos;s physical and emotional needs in marriage is not a spiritual act. It is a betrayal of the trust they placed in you.',
        },
        {
          kind: 'reflection',
          id: 'c7-r2',
          prompt: 'In your marriage or future marriage, what does it mean to not &quot;defraud&quot; your spouse? How do you give them what they are due?',
        },
      ],
    },

    /* ─── 1 Cor 7:7–9 — Every One a Gift ────────────────────────────── */
    {
      ref: '1 Corinthians 7:7–9',
      title: 'Each His Own Gift',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(7, t('For I would that all men were even as I myself: but every man hath '), hy('his proper gift of God', 'c7-gift')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-gift',
          html:
            'Paul is saying he is unmarried—and he wishes everyone had the freedom he has. But he immediately qualifies: not everyone has that gift. Some are built for marriage. Some for singleness. These are not moral achievements. They are gifts, distributions from God to different people.',
        },
        {
          kind: 'greek',
          id: 'c7-charisma',
          title: 'Charisma — Gift; Favor',
          script: 'χάρισμα',
          translit: '<strong>charisma</strong> · a gift of grace; divine favor',
          description:
            'The same word Paul uses for spiritual gifts (1 Cor 12) he uses here for the calling to marriage or singleness. Whether you marry or not is not a choice that reveals your holiness; it is a calling that reveals God&apos;s design for you.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(8, t('I say therefore to the unmarried and widows, It is good for them if they abide even as I:')),
          ],
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(9, t('But if they cannot contain, let them marry: for it is better to marry than to burn.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-burn',
          html:
            'Here Paul is startlingly honest. Some people cannot live without marriage. The passions are real. The needs are real. And marriage, far from being a compromise with the flesh, is better than burning with unfulfilled desire. This is not romantic; it is pastoral.',
        },
        {
          kind: 'carry',
          html:
            'Whether you are single or married, you have received a gift suited to you. Do not envy someone else&apos;s calling. If you are single, embrace it as Paul does—as a freedom. If you are burning with the desire to marry, that desire is not shameful. It is a sign that marriage is your gift, your calling. Step into it with gratitude.',
        },
      ],
    },

    /* ─── 1 Cor 7:10–11 — Let Not the Wife Depart ──────────────────── */
    {
      ref: '1 Corinthians 7:10–11',
      title: 'Hold the Marriage Together',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(10, t('And unto the married I command, yet not I, but the Lord, '), hp('Let not the wife depart from her husband', 'c7-depart')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-depart',
          html:
            'Paul invokes the Lord&apos;s word directly. The marriage covenant is not meant to be dissolved. A wife should not leave her husband. But Paul will immediately add: if she does, she must remain unmarried or be reconciled. The binding force is the covenant itself, not the civil law or the culture.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(11, t('(But and if she depart, let her remain unmarried, or be reconciled to her husband:) and let not the husband put away his wife.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-reconcile',
          html:
            'Paul is remarkably balanced. He says the wife should not depart—but acknowledges she might. If she does, her options are two: remain unmarried (honoring the marriage covenant even in separation) or be reconciled. The goal is always reconciliation. The breach is never God&apos;s design.',
        },
        {
          kind: 'reflection',
          id: 'c7-r3',
          prompt: 'What does it mean to keep your marriage covenant, even when you are angry or hurting? What would reconciliation look like in your situation?',
        },
      ],
    },

    /* ─── 1 Cor 7:12–16 — The Unbelieving Spouse ───────────────────── */
    {
      ref: '1 Corinthians 7:12–16',
      title: 'The Believing Spouse and the Unbeliever',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(12, t('But to the rest speak I, not the Lord: If any brother hath a wife that believeth not, and she be pleased to dwell with him, let him not put her away.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-unbelieve',
          html:
            'Paul distinguishes here: he is not quoting the Lord&apos;s words, but his own pastoral judgment. The question is specific: a believer married to an unbeliever. The covenant of marriage is already made. Paul&apos;s counsel is urgent: do not end it unilaterally. If the unbeliever is willing to stay, the believer should stay.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(13, t('And the woman which hath an husband that believeth not, and if he be pleased to dwell with her, let her not leave him.')),
          ],
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(14, t('For the unbelieving husband is sanctified by the wife, and the unbelieving wife is sanctified by the husband: else were your children unclean; but now are they holy.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-sanctify',
          html:
            'This is a stunning claim. The believing spouse does not make the unbeliever a Christian. But there is a holiness that extends through the marriage covenant. The children are not defiled; they are included in the sphere where God&apos;s grace moves. The believer&apos;s faithfulness sanctifies the home.',
        },
        {
          kind: 'greek',
          id: 'c7-hagiazo',
          title: 'Hagiazo — Sanctify; Make Holy',
          script: 'ἁγιάζω',
          translit: '<strong>hagiazo</strong> · to set apart; make holy; consecrate',
          description:
            'Paul does not say the unbelieving spouse becomes saved. Rather, by union with a believer, they are set apart—in the sphere of God&apos;s sanctifying work, through the marriage covenant itself. The home is holy ground because one person there belongs to Christ.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(15, t('But if the unbelieving depart, let him depart. A brother or a sister is not under bondage in such cases: but God hath called us to peace.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-depart-unbeliever',
          html:
            'Here Paul gives permission, not command. If the unbeliever leaves—if they will not stay in the marriage—the believer is free. Not obligated to pursue an impossibility. God&apos;s calling is to peace, not to endless suffering in a marriage the other person has already abandoned.',
        },
        {
          kind: 'carry',
          html:
            'If you are married to someone who does not share your faith, your faithfulness to Christ does not require you to become invisible or ashamed. Live your faith openly, tenderly. If they are willing to stay, stay and love them. If they leave, you are not bound. God calls you to peace—the peace that comes from integrity, from trying, and from knowing when to let go.',
        },
        {
          kind: 'reflection',
          id: 'c7-r4',
          prompt: 'How do you live out your faith when your spouse does not share it? What does sanctifying your home through your own faithfulness look like?',
        },
      ],
    },

    /* ─── 1 Cor 7:17–24 — Abide in Thy Calling ──────────────────────── */
    {
      ref: '1 Corinthians 7:17–24',
      title: 'Abide in Your Calling',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(17, t('But as God hath distributed to every man, as the Lord hath called every one, so '), hg('let him walk', 'c7-walk')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-walk',
          html:
            'Paul steps back from the marriage question to give a principle that covers everything. Each person has been distributed a share—a gift, a calling. Whatever that is, that is the shape of your obedience. Not where you wish you were. Not where you think is holier. Where God has called you.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(20, t('Let every man wherein he is called, therein '), hp('abide with God', 'c7-abide-god')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-abide-god',
          html:
            'Here is the key word: <em>abide</em>. Stay where you are. God has called you into a particular shape of life. The vocation is not the enemy. The failure to embrace it is.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(21, t('Art thou called being a servant? care not for it: but if thou mayest be made free, use it rather.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-servant',
          html:
            'Paul is addressing enslaved believers. Your freedom would be good—but not at the cost of betraying your oath to your master or your Lord. If you can gain freedom honorably, do so. But do not mistake freedom from slavery as the measure of your spiritual state. You can be Christ&apos;s slave while legally enslaved, and you can be a slave to sin while legally free.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(22, t('For he that is called in the Lord, being a servant, is the Lord&apos;s '), hy('freedman', 'c7-freedman'), t(': likewise also he that is called, being free, is Christ&apos;s servant.')),
          ],
        },
        {
          kind: 'greek',
          id: 'c7-freedman',
          title: 'Apeleutheros — Freedman; Freed Slave',
          script: 'ἀπελεύθερος',
          translit: '<strong>apeleutheros</strong> · one who has been set free',
          description:
            'A freedman was a slave who had been manumitted—freed by their owner but forever bearing the mark of having been enslaved. Paul uses this to say: a slave called in Christ is God&apos;s freedman, bearing His mark. Conversely, a free person is Christ&apos;s slave. The kingdom reverses every hierarchy.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(23, t('Ye are bought with a price; be not ye the servants of men.')),
          ],
        },
        {
          kind: 'christ',
          id: 'c7-bought',
          title: 'Christ Connection — Bought with a Price',
          html:
            'Paul returns to the cross. You have been purchased by Christ&apos;s death. Your owner is not another person—not a master, not a spouse, not a parent. It is Jesus. That ownership, that redemption, is your true freedom. See 1 Peter 1:18–19: &quot;Forasmuch as ye know that ye were not redeemed with corruptible things, as silver and gold… but with the precious blood of Christ, as of a lamb without blemish and without spot.&quot;',
        },
        {
          kind: 'carry',
          html:
            'Whatever your calling—married or single, free or enslaved by circumstance, wealthy or poor, educated or uneducated—Christ owns you. That ownership is your freedom. You do not have to escape your calling to prove your faithfulness. You have to walk it with Him.',
        },
      ],
    },

    /* ─── 1 Cor 7:25–31 — The Time Is Short ──────────────────────── */
    {
      ref: '1 Corinthians 7:25–31',
      title: 'The Time Is Short',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(25, t('Now concerning virgins I have no commandment of the Lord: yet I give my judgment, as one that hath obtained mercy of the Lord to be faithful.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-virgins',
          html:
            'Paul is cautious. On the question of unmarried believers, he says: I am not quoting Jesus. I am giving you my reasoned judgment from a life of faithfulness. That humility matters. He is not the Lord. But he has walked with the Lord, and he speaks from that experience.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(26, t('I suppose therefore that this is good for the present distress, '), hg('that it is good for a man so to be', 'c7-distress')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-distress',
          html:
            'Paul mentions &quot;the present distress.&quot; The Corinthian church is under pressure—persecution, instability, apostolic authority questioned. In such a time, singleness offers an advantage: fewer entanglements, more freedom to flee, to suffer, to serve. But this is context-specific advice, not a universal law.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(29, t('But this I say, brethren, '), hp('the time is short', 'c7-short')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-short',
          html:
            'Whether Paul means the imminent return of Christ or the brevity of human life, the counsel is the same: do not treat temporary things as permanent. Do not let the world&apos;s goods, relationships, or status become your anchor.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(30, t('And they that weep, as though they wept not; and they that rejoice, as though they rejoiced not; and they that buy, as though they possessed not;')),
            verse(31, t('And they that use this world, as not abusing it: for the fashion of this world passeth away.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-fashion',
          html:
            'Paul is painting a picture of detachment—not coldness, but a kind of freedom. Weep when grief comes; rejoice when joy comes. Buy what you need. Use the world. But hold it all lightly. The fashion of this world—the way it looks, the way it orders itself—is passing away.',
        },
        {
          kind: 'carry',
          html:
            'Your marriage, your singleness, your job, your possessions—receive them as gifts. Use them well. But do not let them consume you. They are temporary. Christ is eternal. Live as if you believed that.',
        },
      ],
    },

    /* ─── 1 Cor 7:32–35 — Without Carefulness ───────────────────── */
    {
      ref: '1 Corinthians 7:32–35',
      title: 'Undivided Care',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(32, t('But I would have you without carefulness. He that is unmarried careth for the things that belong to the Lord, how he may please the Lord:')),
          ],
        },
        {
          kind: 'greek',
          id: 'c7-merimna',
          title: 'Merimna — Care; Anxiety',
          script: 'μέριμνα',
          translit: '<strong>merimna</strong> · anxiety; care; divided attention',
          description:
            'The unmarried person can direct their merimna—their whole care and concern—toward pleasing the Lord. No children to feed, no spouse to consider, no household economics. Just the single question: how do I serve Christ?',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(33, t('But he that is married careth for the things that are of the world, how he may please his wife;')),
            verse(34, t('And his care is divided. There is a difference also between a wife unmarried and a virgin: the unmarried careth for the things of the Lord, that she may be holy both in body and in spirit: but she that is married careth for the things of the world, how she may please her husband.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-divided',
          html:
            'Paul is not saying married people cannot please God. He is saying marriage divides your care. You love your spouse. You provide for your children. You think about household needs. That is good work. But it is a division of the single-pointed focus the unmarried can have.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(35, t('And this I say for your own profit; not that I may cast a snare upon you, but for that which is comely, and that ye may attend upon the Lord without distraction.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-distraction',
          html:
            'Paul keeps his reason clear: he is speaking to their advantage. He is not legislating. He is pointing out what he sees. The unmarried can attend to the Lord without distraction. The Greek word is aperispastos—undistracted, not pulled in competing directions. That is a gift. Some have it. Some do not.',
        },
        {
          kind: 'carry',
          html:
            'If you are single, do not waste this season trying to escape it. Use it. Serve. Pray. Go where a married person cannot easily go. If you are married, know that your marriage itself is your service—a ministry of covenant, fidelity, and hospitality. Neither state disqualifies you from pleasing God. Both require your whole heart.',
        },
        {
          kind: 'reflection',
          id: 'c7-r5',
          prompt: 'Where is your merimna—your care—actually directed right now? What would it look like to give your divided attention wholeheartedly to Christ?',
        },
      ],
    },

    /* ─── 1 Cor 7:36–40 — Better Not to Marry ──────────────────────── */
    {
      ref: '1 Corinthians 7:36–40',
      title: 'No Sin in Marriage, But....',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(36, t('But if any man think that he behaveth himself uncomely toward his virgin, if she pass the flower of her age, and need so require, let him do what he will; '), hg('he sinneth not', 'c7-no-sin')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-no-sin',
          html:
            'Paul is addressing a specific cultural situation: a father or guardian who has promised a young woman to singleness (perhaps in virginity for spiritual reasons), and now realizes that is not working. She is older. She wants to marry. Paul says: there is no sin in letting her marry. Let her have her freedom.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(37, t('Nevertheless he that standeth stedfast in his heart, having no necessity, but hath power over his own will, and hath so decreed in his heart that '), hp('he will keep his virgin', 'c7-keep'), t(', doeth well;')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-keep',
          html:
            'But if the decision is firm—if the young woman herself is resolved to remain single, and she is not being coerced, and she truly can &quot;contain&quot; (hold herself in)—then that too is fine. Paul affirms her choice.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(38, t('So then he that giveth her in marriage doeth well; but '), hg('he that giveth her not in marriage doeth better', 'c7-better')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-better',
          html:
            'Here Paul uses the word &quot;better&quot; for the first time. Marriage is good. But singleness, given the brevity of time and the undivided attention it permits, is better—not in moral status, but in practical advantage for serving Christ. This is a pastoral observation, not a spiritual law.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(39, t('The wife is bound by the law as long as her husband liveth; but if her husband be dead, she is at liberty to be married to whom she will; only in the Lord.')),
            verse(40, t('But she is happier if she so abide, after my judgment: and I think also that I have the Spirit of God.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7-widow',
          html:
            'Paul ends with a word about widows. They are free to remarry. But he suggests—once again, as his reasoned judgment—that they will be happier (more at peace, more fulfilled) if they remain unmarried. Yet even here, he does not make it a law. He appeals to their own sense of what God would have for them.',
        },
        {
          kind: 'carry',
          html:
            'The whole of this chapter is Paul refusing to legislate where God has left room for choice. You are not sinning if you marry. You are not failing if you remain single. What matters is that you choose it—freely, with a clear heart, knowing who you are, and committed to serving Christ in whatever state you occupy.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Ye are bought with a price; be not ye the servants of men.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 7 · Study Guide',
  },

  hasHebrew: false,
};
