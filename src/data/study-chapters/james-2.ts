import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * James 2 — Faith Without Works Is Dead
 *
 * James confronts a subtle lie: that faith and behavior are separable. He addresses
 * favoritism in the church, exposing how we honor the rich while neglecting the poor,
 * breaking the royal law to love our neighbor as ourselves. Faith alone, without the
 * works of love and justice, is dead—a corpse without breath.
 *
 * The chapter raises the deepest question about salvation itself: Is faith alone
 * (as Paul teaches in Romans and Galatians) in tension with faith's visible fruit?
 * James answers by showing that genuine faith—the kind that unites us to Christ—
 * cannot help but overflow in action. Abraham's faith "wrought with his works";
 * Rahab's faith moved her to hide the spies. In every case, trust in God takes shape
 * in the body, in the real world, in concrete love.
 */
export const JAMES_2: RichChapterContent = {
  bookSlug: 'james',
  bookName: 'James',
  chapter: 2,

  intros: [
    'James turns his attention to a problem he has observed in the church: favoritism. Believers gather for worship, and some are treated with honor because of their wealth or status, while others are dismissed or neglected. This is not incidental rudeness. It is a violation of the foundational law of Christ—to love your neighbor as yourself. When we honor the rich at the expense of the poor, we break covenant with the God who exalts the humble and has chosen the poor to be "rich in faith, and heirs of the kingdom."',
    'Then James moves into a fuller argument about faith itself. How can we claim to have faith in Christ—who emptied himself, who identified with the powerless, who taught that it is more blessed to give than to receive—while our actions deny that faith? This raises the deepest question: What is faith? Is it assent to doctrine, or is it a living trust that transforms how we live? James&apos; answer is unambiguous: faith without works is dead. And he anchors this not in theory but in the lives of Abraham and Rahab, showing that true faith has always borne fruit in concrete action.',
  ],

  opener: {
    matchArtist: /tissot|rembrandt|poussin/i,
    matchTitle: /poor|rich|assembly|widow|orphan|judgment/i,
    caption: 'Faith in the Eyes of the Poor',
  },

  sections: [
    /* ─── James 2:1–3 — Do Not Show Partiality ──────────────────────────── */
    {
      ref: 'James 2:1–3',
      title: 'Showing Favoritism in God&apos;s Presence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              1,
              t('My brethren, have not '),
              hp('the faith of our Lord Jesus Christ, the Lord of glory', 'jam2-christ-lordship'),
              t(', with '),
              hy('respect of persons', 'jam2-prosopolepsia'),
              t('.')
            ),
            verse(
              2,
              t('For if there come unto your assembly a man with a gold ring, in goodly apparel, and there come in also a poor man in vile raiment;')
            ),
            verse(
              3,
              t('And ye have '),
              hg('respect to him that weareth the gay clothing', 'jam2-honor-rich'),
              t(', and say unto him, Sit thou here in a good place; and say to the poor, Stand thou there, or sit here under my footstool:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam2-faith-glory',
          html:
            'James opens with a stunning contradiction: you claim to hold "the faith of our Lord Jesus Christ, the Lord of glory"—but then you treat people according to their clothes. The phrase <em>Lord of glory</em> appears nowhere else in the New Testament except here and in 1 Corinthians 2:8. It refers to Christ&apos;s divine majesty, His radiant splendor. And His glory, James is saying, is inseparable from His choice to identify with the powerless. To have faith <em>in</em> Him is to have absorbed His values, His justice, His radical revaluation of human worth.',
        },
        {
          kind: 'greek',
          id: 'jam2-prosopolepsia',
          title: 'Prosōpolēmpsia — Respect of Persons',
          script: 'προσωποληψία',
          translit: '<strong>prosōpolēmpsia</strong> · favoritism; partiality; judging by outward appearance',
          description:
            'The word combines <em>prosōpon</em> (face, outward appearance) with <em>lambano</em> (to receive, accept, favor). It means to accept someone on the basis of their external status. It is the opposite of the impartial justice God demands. In Leviticus 19:15, Israel is told: "Ye shall do no unrighteousness in judgment: thou shalt not respect the person of the poor, nor honour the person of the mighty: but in righteousness shalt thou judge thy neighbour."',
        },
        {
          kind: 'commentary',
          id: 'jam2-honor-rich',
          html:
            'The picture is vivid and damning. A wealthy visitor arrives in fine clothes and a gold ring—both marks of real wealth in the ancient world. The assembly rises to honor him, seats him prominently. A poor person enters in worn-out clothes. The assembly tells him to stand, or to sit on the ground "under my footstool"—literally, below the level of a seat, in a place of degradation. In one moment, the church has revealed whose kingdom it really believes in.',
        },
        {
          kind: 'christ',
          id: 'jam2-christ-lordship',
          title: 'Christ Connection — The Faith That Unmakes Status',
          html:
            'Jesus came into the world and did the opposite of what James&apos; assembly does. He rejected the symbols of worldly power. He touched lepers. He ate with tax collectors and sinners. He washed the feet of His disciples. He said that when we welcome the hungry, the stranger, the prisoner, we welcome Him (Matt. 25). The faith that unites us to <em>that</em> Lord cannot coexist with a faith that honors wealth over character, appearance over soul. To have the faith of Jesus is to have had one&apos;s whole hierarchy of value turned upside down.',
        },
        {
          kind: 'carry',
          html:
            'Before you judge the first-century assembly too harshly, look at your own. Whom do you listen to most carefully at church—the successful business person, the doctor, the person with a large social media following? Whom do you avoid? Whom do you assume has wisdom? Whom do you assume needs help? James is not naming a sin of the past. He is naming a temptation that lives in every community that calls itself Christian.',
        },
        {
          kind: 'reflection',
          id: 'jam2-favoritism',
          prompt: 'Where are you tempted to show favoritism? Who might you be overlooking because they lack status, wealth, or the kind of success your community prizes?',
        },
      ],
    },

    /* ─── James 2:4–7 — The Royal Law ─────────────────────────────────── */
    {
      ref: 'James 2:4–7',
      title: 'The Royal Law — Love Thy Neighbor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              4,
              t('Are ye not then '),
              hy('partial in yourselves', 'jam2-partial-judges'),
              t(', and are become judges of evil thoughts?')
            ),
            verse(
              5,
              t('Hearken, my beloved brethren, Hath not God '),
              hg('chosen the poor of this world', 'jam2-god-chooses-poor'),
              t(' rich in faith, and heirs of the kingdom which he hath promised to them that love him?')
            ),
            verse(
              6,
              t('But ye have despised the poor. Do not '),
              hy('rich men oppress you', 'jam2-rich-oppress'),
              t(', and draw you before the judgment seats?')
            ),
            verse(
              7,
              t('Do not they blaspheme that worthy name by the which ye are called?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam2-partial-judges',
          html:
            'James strikes the nerve: your partiality reveals that you are "judges of evil thoughts." You have become the kind of judge God despises—one who judges by appearance rather than by the heart. You are not impartial witnesses to God&apos;s kingdom. You are compromised judges, betraying your own deepest convictions.',
        },
        {
          kind: 'commentary',
          id: 'jam2-god-chooses-poor',
          html:
            'God has made a deliberate choice: <em>He has chosen the poor.</em> Not in spite of their poverty, but in some profound sense <em>because</em> of their spiritual vulnerability, their dependence, their openness to Him. The poor are "rich in faith"—not materially rich, but rich in the only wealth that matters. And they are "heirs of the kingdom," possessors of the same inheritance promised to Abraham. To despise them is to despise the very people God delights in.',
        },
        {
          kind: 'greek',
          id: 'jam2-basilikos',
          title: 'Basilikos — Royal',
          script: 'βασιλικός',
          translit: '<strong>basilikos</strong> · belonging to a king; of the kingdom; supreme',
          description:
            'James calls the law of love "the royal law"—the law of the kingdom of God. It is not one law among many. It is supreme, sovereign, the law by which all other obedience is measured. A believer who breaks this law at any point has failed the test of the kingdom, no matter what else they may claim to believe.',
        },
        {
          kind: 'commentary',
          id: 'jam2-rich-oppress',
          html:
            'James points out the bitter irony: you honor the rich, yet the rich are the ones oppressing you—taking you to court, exploiting your labor, dragging your names through the legal system. Your favoritism toward them makes no practical sense. It neither protects you nor gains you anything. It is pure spiritual confusion, a reversal of reality.',
        },
        {
          kind: 'commentary',
          id: 'jam2-worthy-name',
          html:
            'James speaks of "that worthy name by the which ye are called"—a circumlocution for the name of Christ, too holy to speak lightly. The wealthy are blaspheming that name, dishonoring the one whose followers you are meant to be. Your favoritism toward them implicates you in that blasphemy.',
        },
      ],
    },

    /* ─── James 2:8–11 — Fulfilling the Royal Law ────────────────────── */
    {
      ref: 'James 2:8–11',
      title: 'Love Your Neighbor as Yourself',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              8,
              t('If ye fulfil '),
              hg('the royal law according to the scripture', 'jam2-royal-law-quote'),
              t(', '),
              hy('Thou shalt love thy neighbour as thyself', 'jam2-love-neighbor'),
              t(', ye do well:')
            ),
            verse(
              9,
              t('But if ye have respect to persons, ye commit sin, and are convinced of the law as transgressors.')
            ),
            verse(
              10,
              t('For whosoever shall keep the whole law, and yet offend in one point, he is guilty of all.')
            ),
            verse(
              11,
              t('For he that said, Do not commit adultery, said also, Do not kill. Now if thou commit no adultery, yet if thou kill, thou art become a transgressor of the law.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam2-royal-law-quote',
          html:
            'James quotes Leviticus 19:18: "Thou shalt love thy neighbour as thyself." This is not a new command for the church. It is woven through the Old Testament—the heart of the law, the summary of the prophets. Jesus Himself named this as the second greatest commandment, after loving God (Mark 12:31). To fulfill this law is to "do well," to live rightly. This is what righteousness looks like in the real world: impartial kindness, genuine concern for the welfare of others as you have for your own.',
        },
        {
          kind: 'commentary',
          id: 'jam2-love-neighbor',
          html:
            'Notice that this law assumes each person has the same fundamental worth and the same right to dignity that you claim for yourself. To show favoritism is to deny this premise. It is to say: "Your worth depends on your bank account. The poor person does not deserve the same respect I give myself." This is not a small error. It cuts to the root of what it means to live under God&apos;s law.',
        },
        {
          kind: 'commentary',
          id: 'jam2-one-point',
          html:
            'James makes a claim that sounds harsh to modern ears: if you break the law at one point, you are guilty of all. What does he mean? He does not mean that all sins are equally severe in God&apos;s eyes—the Bible elsewhere teaches that some sins carry heavier judgment. Rather, he means this: the law is a unified whole, rooted in one principle—love. When you show favoritism, you reveal that you have not truly grasped what the law is for. You have not understood that it is all one thing, all stemming from the character of a God who loves impartially.',
        },
      ],
    },

    /* ─── James 2:12–13 — Mercy Triumphs Over Judgment ──────────────── */
    {
      ref: 'James 2:12–13',
      title: 'Mercy Rejoices Against Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              12,
              t('So speak ye, and so do, as they that shall be '),
              hy('judged by the law of liberty', 'jam2-law-liberty'),
              t(':')
            ),
            verse(
              13,
              t('For '),
              hp('he shall have judgment without mercy', 'jam2-mercy-triumphs'),
              t(', that hath shewed no mercy; and '),
              hp('mercy rejoiceth against judgment', 'jam2-mercy-triumphs'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam2-law-liberty',
          html:
            'James speaks of "the law of liberty"—a paradoxical phrase. How can law bring liberty? Because God&apos;s law is not arbitrary restriction. It is the law of love, and love is what sets us free. When you give up the exhausting work of judging others by their appearance, when you stop managing your reputation through favoritism, when you simply love your neighbor—you are released from a thousand petty tyrannies. The law of liberty is the law of the heart set free by love.',
        },
        {
          kind: 'greek',
          id: 'jam2-eleos',
          title: 'Eleos — Mercy',
          script: 'ἔλεος',
          translit: '<strong>eleos</strong> · mercy; compassion; the response to suffering and need',
          description:
            'Mercy is not a feeling but a choice—the choice to respond to another&apos;s need with kindness rather than judgment, with help rather than condemnation. In Matthew 5:7, Jesus says: "Blessed are the merciful: for they shall obtain mercy." Mercy is the quality that mirrors God Himself. And in James&apos; logic, a life of mercy toward others ensures that when we stand before God&apos;s judgment seat, we will find mercy rather than condemnation.',
        },
        {
          kind: 'christ',
          id: 'jam2-mercy-triumphs',
          title: 'Christ Connection — Mercy Triumphs Over Judgment',
          html:
            'This is one of the most beautiful lines in Scripture: "Mercy rejoiceth against judgment." It is a personification—mercy standing in the courtroom of judgment and overcoming it. James is drawing on Psalm 85:10, but he speaks it in the light of Christ. Jesus, the Judge of all the earth, chose not to condemn but to forgive. He became the one who was judged so that we might receive mercy. In His life and death, mercy defeated judgment—and that same mercy is now extended to us, on one condition: that we extend it to others (Matt. 18:21–35).',
        },
        {
          kind: 'carry',
          html:
            'You will be judged. James is certain of this. The question is not whether judgment will come, but what shape it will take. If you have been merciful, judgment will find you merciful. If you have been harsh, judgment will be harsh with you. But here is the hope: mercy has the final word. It "rejoices" against judgment—it triumphs. In God&apos;s courtroom, the merciful do not fear.',
        },
        {
          kind: 'reflection',
          id: 'jam2-mercy',
          prompt: 'How has mercy been extended to you? To whom do you need to extend it—not because they deserve it, but because you have received it?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── James 2:14–18 — Faith Without Works Is Dead ────────────────── */
    {
      ref: 'James 2:14–18',
      title: 'Faith Without Works Cannot Save',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              14,
              t('What doth it profit, my brethren, though a man '),
              hg('say he hath faith', 'jam2-say-faith'),
              t(', and have not '),
              hy('works', 'jam2-ergon'),
              t('? can faith save him?')
            ),
            verse(
              15,
              t('If a brother or sister be '),
              hg('naked, and destitute of daily food', 'jam2-naked-hungry'),
              t(';')
            ),
            verse(
              16,
              t('And one of you say unto them, Depart in peace, be ye warmed and filled; notwithstanding ye give them not '),
              hy('those things which are needful to the body', 'jam2-needful-body'),
              t('; what doth it profit?')
            ),
            verse(
              17,
              t('Even so '),
              hp('faith, if it hath not works, is dead', 'jam2-faith-dead'),
              t(', being alone.')
            ),
            verse(
              18,
              t('Yea, a man may say, Thou hast faith, and I have '),
              hy('works', 'jam2-ergon'),
              t(': shew me thy faith without thy works, and I will shew thee my faith by my works.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam2-say-faith',
          html:
            'James opens with a cutting question: "What doth it profit?" Profit. Benefit. Use. A man <em>says</em> he has faith—he makes the claim, he asserts the doctrine—but he does not act on it. James is asking: what good is that? What does it accomplish? Does it change anything?',
        },
        {
          kind: 'commentary',
          id: 'jam2-naked-hungry',
          html:
            'James gives a concrete picture: a fellow believer, a brother or sister, is naked—lacking clothes. They are hungry—lacking food. The need is visible, immediate, undeniable. It is not an abstraction.',
        },
        {
          kind: 'commentary',
          id: 'jam2-needful-body',
          html:
            'And what happens? One of the believers says: "Depart in peace, be ye warmed and filled." It sounds kind. It is gentle speech. But it costs nothing. It changes nothing. The hungry person leaves still hungry. The cold person leaves still cold. The believer has offered words in place of bread, piety in place of help.',
        },
        {
          kind: 'greek',
          id: 'jam2-ergon',
          title: 'Ergon — Works',
          script: 'ἔργον',
          translit: '<strong>ergon</strong> · work; deed; action; the visible, concrete fruit of faith',
          description:
            'James uses <em>ergon</em> repeatedly to mean not busy-ness but <em>action that matters</em>—the concrete expression of trust and love. In this passage, it is the work of feeding the hungry, clothing the naked, meeting real needs. It is faith taking shape in the body, in time, in the real world.',
        },
        {
          kind: 'commentary',
          id: 'jam2-faith-dead',
          html:
            'The verdict is stark: "Faith, if it hath not works, is dead, being alone." Alone—separated from works, isolated in the realm of internal belief. A corpse. No breath, no movement, no sign of life. The image is deliberately grotesque because James wants to shake us awake. You cannot have a living faith that does not issue in action any more than you can have a living body that has stopped breathing.',
        },
        {
          kind: 'carry',
          html:
            'Notice how James frames this: he does not say "Works will save you." He says "Faith saves you—faith that works." He is not pitting Paul against himself or denying what Paul teaches in Romans 3 and 4 about justification by faith. Rather, he is saying that the faith which unites us to Christ cannot help but overflow in action. Faith and works are not separable in the life of someone who truly knows Christ. They are two movements of the same living thing.',
        },
        {
          kind: 'reflection',
          id: 'jam2-living-faith',
          prompt: 'Where is your faith dead? Where are you saying pious things without doing the work that faith requires?',
        },
      ],
    },

    /* ─── James 2:19–21 — Even the Demons Believe ────────────────────── */
    {
      ref: 'James 2:19–21',
      title: 'Demons Believe, But They Do Not Trust',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              19,
              t('Thou believest that there is one God; thou doest well: but '),
              hg('the devils also believe, and tremble', 'jam2-devils-believe'),
              t('.')
            ),
            verse(
              20,
              t('But wilt thou know, O vain man, that '),
              hy('faith without works is dead', 'jam2-faith-dead-again'),
              t('?')
            ),
            verse(
              21,
              t('Was not '),
              hg('Abraham our father justified by works', 'jam2-abraham-works'),
              t(', when he had offered '),
              hp('Isaac his son upon the altar', 'jam2-abraham-isaac'),
              t('?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam2-devils-believe',
          html:
            'This is one of the most arresting lines in all of Scripture. The demons—the fallen angels, the enemies of God—they believe that God is one. They have theological accuracy. They know the truth about God&apos;s existence and power. And they tremble. Their knowledge produces terror, not trust. Their belief produces servility, not love. They are not saved. They will not be saved. Because demons do not have faith. They have knowledge. They have fear. They do not have the transforming trust that unites the soul to Christ.',
        },
        {
          kind: 'greek',
          id: 'jam2-pistis',
          title: 'Pistis — Faith vs. Mere Belief',
          script: 'πίστις',
          translit: '<strong>pistis</strong> · faith; trust; reliance; the movement of the whole self toward God',
          description:
            'Faith in the New Testament is radically different from intellectual agreement with doctrine. It is trust—the kind of trust that stakes your life on God&apos;s word, that moves you to action, that integrates your will with your mind. A demon can have correct doctrine without faith. But you cannot have saving faith without it transforming how you live.',
        },
        {
          kind: 'commentary',
          id: 'jam2-faith-dead-again',
          html:
            'James circles back to his central claim, driving it home a second time: "Faith without works is dead." It is not controversial among him and his readers that this is true. He is calling the reader a "vain man"—literally, "empty"—if he thinks otherwise. This is not a subtle theological debate. It is a stark, commonsense reality: a faith that does not change your life is not a faith that will save your life.',
        },
        {
          kind: 'commentary',
          id: 'jam2-abraham-works',
          html:
            'Now James anchors his argument in Scripture. He appeals to Abraham, the patriarch, the father of all believers, the one Paul himself appeals to in Romans 4 to argue for justification by faith. But James asks: was not Abraham justified by works? The answer is yes—and this is not contradictory to Paul. Both Paul and James appeal to Genesis 15:6, where it says "Abraham believed God, and it was imputed unto him for righteousness." But James is asking: when was Abraham <em>fully</em> justified, in the sense that his faith was proven perfect, complete, unshakeable?',
        },
        {
          kind: 'christ',
          id: 'jam2-abraham-isaac',
          title: 'Christ Connection — Abraham, Isaac, and the Seed',
          html:
            'Abraham offered Isaac on the altar. This is the supreme act of trust in Scripture. Abraham, told that his seed would be through Isaac, is asked to give up Isaac—to kill his own son. And Abraham obeys. "By faith Abraham, when he was tried, offered up Isaac… accounting that God was able to raise him up, even from the dead" (Heb. 11:17–19). Paul sees in this the foreshadowing of the Father offering His own Son. The faith that moves Abraham to the altar is the faith that looks ahead to Christ. And it is the same faith that will move you to action—to feed the hungry, to welcome the stranger, to lay down your life for others.',
        },
        {
          kind: 'carry',
          html:
            'You cannot hide from this. James is saying: your faith will be tested. It will be tested in real situations, with real people, with real costs. And when it is tested—when you are asked to give something up, to risk something, to act on your claim to believe—that test will reveal whether your faith is alive.',
        },
      ],
    },

    /* ─── James 2:22–24 — Faith Worked With Works ────────────────────── */
    {
      ref: 'James 2:22–24',
      title: 'Faith Fulfilled by Works',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              22,
              t('Seest thou how '),
              hg('faith wrought with his works', 'jam2-faith-wrought'),
              t(', and by '),
              hy('works was faith made perfect', 'jam2-faith-perfect'),
              t('?')
            ),
            verse(
              23,
              t('And the scripture was fulfilled which saith, '),
              hy('Abraham believed God, and it was imputed unto him for righteousness', 'jam2-faith-credited'),
              t(': and he was called the Friend of God.')
            ),
            verse(
              24,
              t('Ye see then how that '),
              hp('by works a man is justified', 'jam2-justified-works'),
              t(', and not by faith only.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam2-faith-wrought',
          html:
            'James uses the phrase "faith wrought with his works"—faith and works working together, synergizing, strengthening each other. This is not faith replacing works or works replacing faith. It is faith being expressed through works. Abraham&apos;s faith did not make his obedience unnecessary; rather, his faith moved him to obey.',
        },
        {
          kind: 'commentary',
          id: 'jam2-faith-perfect',
          html:
            'Works made his faith "perfect"—not in the sense of sinlessly perfect, but in the sense of complete, fulfilled, brought to its full expression. Abraham&apos;s faith reached its perfection when it issued in the willingness to give up everything. Until then, it was real faith but faith not yet tested, not yet proven complete.',
        },
        {
          kind: 'commentary',
          id: 'jam2-faith-credited',
          html:
            'James quotes Genesis 15:6 again: "Abraham believed God, and it was imputed unto him for righteousness." But notice something subtle: this faith was credited to him long before he ever offered Isaac. The faith came first, the righteousness was imputed first. So James is not saying that works earn salvation. He is saying something more nuanced: the faith that was credited to Abraham as righteousness was the faith that would later prove itself in the offering of Isaac. The same faith that trusted God in the beginning was the same faith that obeyed Him at the altar.',
        },
        {
          kind: 'greek',
          id: 'jam2-dikaioo',
          title: 'Dikaioo — Justified',
          script: 'δικαιόω',
          translit: '<strong>dikaioo</strong> · to declare righteous; to vindicate; to show to be just',
          description:
            'Here is where James and Paul use the same word but sometimes in subtly different contexts. Paul uses "justified" to mean the initial declaration of righteousness through faith, the moment the sinner is counted as righteous. James uses "justified" to mean the <em>vindication</em> of that faith, the demonstration that it was real. Both are true: you are justified (declared righteous) by faith, and your faith is justified (shown to be genuine) by works.',
        },
        {
          kind: 'commentary',
          id: 'jam2-justified-works',
          html:
            'James&apos; conclusion: "By works a man is justified, and not by faith only." This has troubled many readers who remember Paul&apos;s insistence on justification by faith apart from works. But they are asking different questions. Paul asks: <em>How does a sinner become righteous in God&apos;s sight?</em> Answer: by faith in Christ. James asks: <em>How is a person&apos;s faith shown to be real and genuine?</em> Answer: by its fruit in works. The two statements are not contradictory. They are complementary. Faith is the root; works are the fruit. You are justified by the root, but the world sees and knows your faith by the fruit.',
        },
        {
          kind: 'carry',
          html:
            'This section stands at the heart of one of Christianity&apos;s great debates. During the Reformation, Martin Luther struggled with James, at one point calling it "a right strawy epistle" because it seemed to contradict Paul. But Luther eventually saw that James was not teaching works-righteousness. He was teaching that genuine faith cannot be invisible. If your faith does not change your actions, then you do not have the faith that saves. Period. This is what James is saying. And it is a word the church needs to hear in every generation.',
        },
        {
          kind: 'reflection',
          id: 'jam2-faith-perfect',
          prompt: 'What work is God asking you to do that would perfect your faith? What obedience would show that your faith is not alone but alive?',
        },
      ],
    },

    /* ─── James 2:25 — Rahab Justified by Works ──────────────────────── */
    {
      ref: 'James 2:25',
      title: 'Rahab the Harlot Justified by Works',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              25,
              t('Likewise also was not '),
              hg('Rahab the harlot justified by works', 'jam2-rahab-works'),
              t(', when she had received the messengers, and had sent them out another way?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam2-rahab-works',
          html:
            'James gives a second example, and it is as radical as Abraham. He does not choose a patriarch or a king. He chooses a prostitute. Rahab, a woman of the lowest status, a woman whose very name marked her as ritually unclean by Jewish law. But Rahab had faith. When the Israelite spies came to Jericho, she believed that the God of Israel was the true God. She hid the spies from the king&apos;s guards and sent them out another way, risking her own life. Her faith took shape in concrete, dangerous action. And she was justified—made righteous, counted among the people of God, included in the genealogy of Jesus Himself (Matt. 1:5). Not because she was respectable, but because her faith worked.',
        },
        {
          kind: 'carry',
          html:
            'Do you see what James is doing? He reaches across the entire spectrum of human respectability. Abraham—the greatest of the patriarchs. Rahab—a prostitute, an outsider, a Canaanite woman with no heritage in Israel. And his point is: it does not matter what your status is. It does not matter whether the world honors you or despises you. The only question is whether your faith works. Do you trust God enough to act?',
        },
        {
          kind: 'christ',
          id: 'jam2-rahab-faith',
          title: 'Christ Connection — Rahab in the Genealogy of Jesus',
          html:
            'Rahab appears in the genealogy of Jesus in Matthew 1:5. She is one of only a handful of women named, one of even fewer with a sinful past explicitly mentioned. Her presence there is stunning: a prostitute, a foreigner, a woman whose very profession places her outside the boundaries of what Jewish law considered clean—and yet she is the ancestor of the King of kings. Her faith justified her. Her works proved her faith. And that justified faith became part of the very lineage of salvation. This is what the gospel does. It reaches into the places society has marked as irredeemable and finds faith—living, active, world-changing faith—and says: You are righteous.',
        },
      ],
    },

    /* ─── James 2:26 — The Body Without the Spirit ──────────────────── */
    {
      ref: 'James 2:26',
      title: 'Faith Without Works Is Dead',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              26,
              t('For as '),
              hg('the body without the spirit is dead', 'jam2-body-spirit'),
              t(', so '),
              hp('faith without works is dead also', 'jam2-faith-dead-final'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam2-body-spirit',
          html:
            'The image is simple, irreducible, and devastating. A body without a spirit—without breath, without the animating principle that makes it alive—is a corpse. It may look like a body. It may retain its form. It may appear whole from the outside. But it is dead. There is no life in it, no agency, no future. It is suitable only for burial.',
        },
        {
          kind: 'greek',
          id: 'jam2-pneuma',
          title: 'Pneuma — Spirit',
          script: 'πνεῦμα',
          translit: '<strong>pneuma</strong> · spirit; breath; the animating life-force',
          description:
            'The Greek word <em>pneuma</em> literally means breath or wind. It is the invisible reality that makes a body live. James is saying that just as a body needs breath to live, so faith needs works. Without works, faith may appear to have form and structure, but it lacks the vital force that makes it alive.',
        },
        {
          kind: 'commentary',
          id: 'jam2-faith-dead-final',
          html:
            'James brings his argument full circle. He ends with the same claim he made in verse 14 and verse 20: faith without works is dead. Three times he makes this statement. He will not let it go. He cannot let it go. Because he is not speaking to a small problem in a first-century assembly. He is speaking to a perennial human temptation: to believe that inner belief can substitute for outer action, that private virtue can substitute for public justice, that confession can substitute for transformation.',
        },
        {
          kind: 'carry',
          html:
            'Here is the word James leaves you with: faith is not meant to be a corpse. It is meant to be alive—breathing, moving, acting, transforming the world around it. If your faith has not changed how you treat people, how you spend money, how you respond to the poor and the powerless, then you do not yet have the faith that James is talking about. Not because you are not spiritual enough or sincere enough. But because the faith that unites us to Christ cannot help but be alive. And what is alive must move.',
        },
        {
          kind: 'reflection',
          id: 'jam2-alive-faith',
          prompt: 'Is your faith alive or dead? What work would make it live? What step will you take this week to show that your faith is not alone?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Artwork Hook ─────────────────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'artwork',
          matchTitle: /abraham|sacrifice|altar|faith/i,
          matchArtist: /caravaggio|rembrandt|chagall/i,
          caption: 'James 2:21 · Abraham Offering Isaac',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Have not the faith of our Lord Jesus Christ, the Lord of glory, with respect of persons. Thou shalt love thy neighbour as thyself. Faith without works is dead also.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'James 2 · Study Guide',
  },

  hasHebrew: false,
};
