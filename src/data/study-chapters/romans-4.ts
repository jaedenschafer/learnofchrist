import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Romans 4 — Abraham&apos;s Faith Counted for Righteousness
 *
 * Paul grounds justification by faith in Israel&apos;s own ancestor. Abraham believed God,
 * and it was counted unto him for righteousness—before the law, before circumcision,
 * before any work. He is the father of all who believe, Jew and Gentile alike.
 * The promise was not through the law but through the righteousness of faith.
 * Abraham believed God who raises the dead, and that faith was reckoned as righteousness—
 * a pattern for every believer.
 */
export const ROMANS_4: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 4,

  estimatedMinutes: { beginner: 10, intermediate: 18, deep: 23 },
  intros: [
    'Paul now grounds his entire argument in Israel&apos;s own ancestor—Abraham himself. If justification is by faith, then it always has been by faith. Abraham believed God, and it was counted unto him for righteousness. This was not a transaction. It was a declaration. He was not yet circumcised. The law had not yet been given. He had no works to show. Yet God reckoned him righteous on the basis of one thing alone: his faith.',
    'The promise to Abraham was not that he would keep a law. It was that he would inherit the earth, that his seed would be as numerous as the stars. This promise rested entirely on God&apos;s word and Abraham&apos;s willingness to believe it even when it seemed humanly impossible—when he and Sarah were past the age of bearing children, when there was no sign, no path forward except God&apos;s voice. And because Abraham believed God in that impossible hour, righteousness was counted to him before he was ever marked by circumcision. Abraham became the father of many nations not through descent alone, but through faith.',
    'Romans 4 is Paul&apos;s answer to a question that would not leave the early church alone: How can a Gentile—someone outside the covenant, without the law, without circumcision—stand righteous before God? The answer is simple and radical: the same way Abraham did. Through faith. Abraham is not the father of the circumcised only. He is the father of all those who believe.',
  ],

  sections: [
    /* ─── Romans 4:1–3 — What Abraham Found ───────────────────────────── */
    {
      ref: 'Romans 4:1–3',
      title: 'What Did Abraham Find?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(1, t('What shall we say then that Abraham our father, as pertaining to the flesh, hath '), hg('found', 'rom4-found'), t('?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-found',
          html:
            'Paul sets the question simply. Not <em>What did Abraham earn?</em> Not <em>What did Abraham achieve?</em> What did he <em>find?</em> The Greek suggests something discovered, something that came to Abraham from outside himself. And the answer is about to be the hinge of the entire argument: Abraham found that faith itself is what God counts as righteousness.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(2, t('For if Abraham were justified by works, he hath whereof to '), hg('glory', 'rom4-glory'), t('; but not before God.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-glory',
          html:
            'Paul builds his case methodically. If righteousness came through works, then Abraham would have something to boast about. He would have earned it. He could stand before other people and display his credentials. But the whole point of Romans is that no one can boast before God. Works produce boasting. Faith produces humility. Abraham did not glory in his works because his righteousness did not rest on them.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(3, t('For what saith the scripture? '), hp('Abraham believed God, and it was counted unto him for righteousness', 'christ-faith-counted'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-reckoned',
          html:
            'Paul quotes Genesis 15:6—the verse that changed everything for Abraham, and the verse that will change everything for theology. Abraham simply believed. There is no work mentioned. No achievement. No transformation of character. Just faith. And God counted it—placed it in His ledger—as righteousness itself.',
        },
        {
          kind: 'christ',
          id: 'christ-faith-counted',
          title: 'Christ Connection — Faith Accepted as Righteousness',
          html:
            'Abraham&apos;s faith was credited to him for righteousness in Genesis 15:6. Paul seizes on this verse in Romans 4:3 and makes it the foundation of Christian justification: faith—not works, not character transformation, not moral achievement—is what God counts as righteousness. And in the New Testament, this faith is faith in Christ. Faith in His death and resurrection, faith in God&apos;s power to raise Him and to raise us with Him. That same reckoning happens to everyone who believes: "For we hold that a person is justified by faith apart from works of the law" (Rom. 3:28). Faith in Christ is what God marks in His books as righteousness.',
        },
        {
          kind: 'carry',
          html:
            'You may be keeping your own ledger—of your successes and failures, your keep and your fall-shorts. You are trying to make the numbers come out so that you can stand worthy before God. But Abraham teaches you to stop. The moment you actually believe what God has said about you, something changes in His books that you cannot see. Your belief itself becomes the entry. Stop waiting to be good enough. Believe you are counted righteous now.',
        },
        {
          kind: 'reflection',
          id: 'rom4-found',
          prompt: 'If righteousness is counted to you on the basis of faith alone, what would you stop trying to earn? What would change if you simply believed God&apos;s word instead?',
        },
      ],
    },

    /* ─── Romans 4:4–8 — The Wage and the Gift ───────────────────────── */
    {
      ref: 'Romans 4:4–8',
      title: 'The Wage and the Gift',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(4, t('Now to him that worketh is the '), hy('reward reckoned', 'greek-misthos'), t(' not of grace, but of debt.')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-misthos',
          title: 'Misthos — Wage/Reward',
          script: 'μισθός',
          translit: '<strong>misthos</strong> · wage, pay, reward',
          description:
            'A misthos is what you are owed. It is compensation for labor. If you work, you have earned the wage—the employer is obligated to pay you. It is <em>debt</em>, not grace. This is the contrast Paul is making: works produce a wage you have earned; faith receives a gift you cannot earn.',
        },
        {
          kind: 'commentary',
          id: 'rom4-misthos-logic',
          html:
            'Paul sets up a simple equation. When you work, you are owed a wage. It is not a gift. It is a debt. The employer owes you. You have earned it through your labor. Your work creates an obligation.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(5, t('But to him that worketh not, but '), hp('believeth on him that justifieth the ungodly', 'christ-ungodly'), t(', his faith is counted for righteousness:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-ungodly',
          html:
            'Notice the phrase: "justifieth the ungodly." Not <em>after</em> you are righteous. Not <em>when</em> you finally clean up your life. God justifies the <em>ungodly</em>—those who are, in fact, still trapped in sin, still broken, still failing. The faith that reaches toward Him in that condition—not in victory, not in moral triumph, but in nakedness—that is the faith that is counted. There is no wage here. There is only grace.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(6, t('Even as David also describeth the blessedness of the man, unto whom God imputeth righteousness without '), hg('works', 'rom4-apart-works'), t(',')),
            verse(7, t('Saying, Blessed are they whose iniquities are forgiven, and whose sins are covered.')),
            verse(8, t('Blessed is the man to whom the Lord will not impute sin.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-apart-works',
          html:
            'Paul brings in David (Psalm 32) to show that this truth runs through the Old Testament. David, author of Israel&apos;s prayers, speaks of blessedness—not through works, not through moral achievement, but through forgiveness. Sins covered. Sin not imputed. Righteousness credited. David is describing the same thing Abraham experienced: righteousness that comes not through what you do but through what God declares.',
        },
        {
          kind: 'christ',
          id: 'christ-ungodly',
          title: 'Christ Connection — Justification of the Ungodly',
          html:
            'Christ came to justify the ungodly. He did not wait for humanity to reform. He did not require a prerequisite of moral improvement. He died for the ungodly: "God commendeth his love toward us, in that, while we were yet sinners, Christ died for us" (Rom. 5:8). The blessedness David speaks of—sin forgiven, righteousness credited—is what Christ accomplishes on the cross. Every person who believes is declared righteous not because they are good but because God has imputed to them the righteousness of Christ.',
        },
        {
          kind: 'carry',
          html:
            'David speaks of blessedness—not earned, not achieved, not reached through moral striving. Blessedness that comes when sin is not imputed to you, when righteousness is credited to your account. That blessedness is available to you now. Not someday. Not when you are better. Now.',
        },
        {
          kind: 'reflection',
          id: 'rom4-blessedness',
          prompt: 'If God will not impute sin to you—if your sins are covered—what weight would you set down that you have been carrying? What would it mean to believe in that forgiveness?',
        },
      ],
    },

    /* ─── Romans 4:9–12 — Reckoned Before Circumcision ────────────────── */
    {
      ref: 'Romans 4:9–12',
      title: 'Reckoned Before the Sign',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(9, t('Cometh this blessedness then upon the circumcised only, or upon the uncircumcised also? for we say that faith was reckoned to Abraham for righteousness.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-circumcised-only',
          html:
            'Paul asks a question that cuts to the heart of the dispute between Jewish and Gentile believers. Is blessedness—righteousness, justification, acceptance with God—only for the circumcised? Only for those marked by the sign of the covenant? Paul is about to show that it is not. Abraham&apos;s righteousness came long before circumcision was ever mentioned.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(10, t('How was it then reckoned? when he was in circumcision, or in '), hg('uncircumcision', 'rom4-uncircumcision'), t('? Not in circumcision, but in uncircumcision.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-uncircumcision',
          html:
            'The timeline is decisive. Genesis 15:6 says Abraham believed and it was reckoned as righteousness. Genesis 17, chapters later, describes Abraham&apos;s circumcision. Righteousness came first. The sign came second. Abraham was counted righteous in his uncircumcision. This means the pathway to righteousness does not depend on the mark. It depends on faith.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(11, t('And he received the sign of circumcision, a '), hp('seal of the righteousness of the faith which he had yet being uncircumcised', 'christ-seal'), t(': that he might be the father of all them that believe, though they be not circumcised; that righteousness might be imputed unto them also:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-seal',
          html:
            'Circumcision becomes a <em>seal</em>—a mark or confirmation of a righteousness that already existed. It is not the source of righteousness. It is the sign that righteousness has already been credited. And here is the crucial move: Abraham becomes the father not just of the circumcised but of all who believe, even though they are uncircumcised. The promise runs through faith, not through the sign.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(12, t('And the father of circumcision to them who are not of the circumcision only, but who also walk in the steps of that faith of our father Abraham, which he had being yet uncircumcised.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-father-believers',
          html:
            'Abraham is the father of Gentiles—of those outside the covenant signs, those without circumcision, those who have not kept the law. But they are his children because they <em>walk in the steps of his faith.</em> That is what makes someone Abraham&apos;s child: not genealogy, not the sign, not the law, but faith. Faith like Abraham&apos;s. Belief in God despite impossible circumstances.',
        },
        {
          kind: 'christ',
          id: 'christ-seal',
          title: 'Christ Connection — Sealed by the Spirit',
          html:
            'Circumcision was the sign and seal of the righteousness Abraham had. In the New Testament, the Spirit is the seal: "In whom ye also trusted, after that ye heard the word of truth, the gospel of your salvation: in whom also after that ye believed, ye were sealed with that holy Spirit of promise" (Eph. 1:13). Believers are sealed not by a physical mark but by the indwelling of the Holy Spirit—the sign that the righteousness you have is real, that you are truly God&apos;s child. The Spirit is the seal of what faith has already secured.',
        },
        {
          kind: 'carry',
          html:
            'You may have been taught that you need a mark to belong—to the right community, the right tradition, the right institution. Abraham teaches something different. What makes you his child, what makes you belong to God, is faith. Not the mark. The faith. Walk where Abraham walked: believe God when it does not make sense. Stake everything on His word. That is what makes you a child of Abraham.',
        },
        {
          kind: 'reflection',
          id: 'rom4-seal',
          prompt: 'What mark are you waiting for to prove you belong to God? What would it mean to recognize that faith itself is the seal?',
        },
      ],
    },

    /* ─── Romans 4:13–17 — The Promise Not Through Law ───────────────── */
    {
      ref: 'Romans 4:13–17',
      title: 'The Promise Through Faith, Not Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(13, t('For the promise, that he should be the heir of the world, was not to Abraham, or to his seed, through the '), hy('law', 'rom4-law'), t(', but through the righteousness of '), hp('faith', 'christ-promise-faith'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-law',
          html:
            'Paul sets up the historical timeline. God made a promise to Abraham. Centuries later—430 years, Paul will say in Galatians—the law was given at Mount Sinai. The promise came first. The law came much later. Therefore, the fulfillment of the promise cannot depend on the law. It depends on what existed when the promise was made: righteousness of faith.',
        },
        {
          kind: 'greek',
          id: 'greek-charis',
          title: 'Charis — Grace',
          script: 'χάρις',
          translit: '<strong>charis</strong> · grace, favor, a gift given freely',
          description:
            'Charis is grace—something given freely, not earned, not owed. It stands in opposition to what is earned or merited. When righteousness comes through grace (not law), it means it is a gift. Abraham&apos;s righteousness was a gift. Ours is a gift. Not of debt. Of grace.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(14, t('For if they which are of the law be heirs, faith is made void, and the promise made of none effect:')),
            verse(15, t('Because the law worketh wrath: for where there is no law, there is no transgression.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-law-wrath',
          html:
            'Paul follows the logic. If the promise were fulfilled through the law, then the law would be the key. But the law does not fulfill the promise. The law works wrath—it shows us what we have done wrong, what we have failed to do, what we owe. Where there is law, there is judgment. Transgression becomes visible. The law cannot inherit because the law condemns.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(16, t('Therefore it is of '), hy('faith', 'greek-pistis'), t(', that it might be by '), hg('grace', 'rom4-grace-not-law'), t('; to the end the promise might be sure to all the seed; not to that only which is of the law, but to that also which is of the faith of Abraham; who is the '), hp('father of us all', 'christ-father-all'), t(',')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-pistis',
          title: 'Pistis — Faith',
          script: 'πίστις',
          translit: '<strong>pistis</strong> · faith, trust, confidence, belief',
          description:
            'Pistis is not intellectual assent. It is trust—the kind of trust Abraham showed when he believed God for a son in his old age. It is a commitment of the whole self to God&apos;s reliability. This is the mechanism by which the promise is secured: not through works, but through the trust that stakes everything on God.',
        },
        {
          kind: 'commentary',
          id: 'rom4-grace-not-law',
          html:
            'The promise is sure because it rests on grace, not on law. Why? Because grace can be given to anyone. Grace knows no boundaries. The law, by contrast, is particular—it was given to Israel at a specific moment in history. Grace is universal. Therefore, if the promise were through grace and faith, it could extend to all who believe, whether Jew or Gentile, whether marked by the sign or not.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(17, t('(As it is written, I have made thee a '), hg('father of many nations', 'rom4-many-nations'), t(',) '), hp('before him whom he believed, even God, who quickeneth the dead, and calleth those things which be not as though they were', 'christ-quickens-dead'), t(':')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-many-nations',
          html:
            'The promise to Abraham was staggering: father of many nations. Not just one son. Not just Israel. Many nations. This promise was impossible by every human calculation. Sarah was barren. Abraham was aged. Yet he was to be the father of multitudes. The promise itself required a God who works impossibly.',
        },
        {
          kind: 'christ',
          id: 'christ-father-all',
          title: 'Christ Connection — Father of All Nations',
          html:
            'Abraham is the father of all who believe—Jew and Gentile together. In Christ, that promise expands beyond any ethnic or covenant boundary. Paul writes: "Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ" (Gal. 3:16). The promise narrows to Christ, but then radiates outward: "So then they which be of faith are blessed with faithful Abraham" (Gal. 3:9). All who believe—from every nation—are Abraham&apos;s children and heirs of the promise.',
        },
        {
          kind: 'christ',
          id: 'christ-promise-faith',
          title: 'Christ Connection — The Promise Fulfilled in Christ',
          html:
            'The promise to Abraham—that his seed would be numerous as the stars and inherit the world—is fulfilled in Christ and His church. All who are in Christ are heirs of the promise. The church is the multitude promised to Abraham. And the church is composed not of the circumcised only but of all nations and peoples who believe.',
        },
        {
          kind: 'christ',
          id: 'christ-quickens-dead',
          title: 'Christ Connection — The God Who Raises the Dead',
          html:
            'Abraham believed in God "who quickeneth the dead"—who has power to make dead things live. This is not poetry. It is the core of what Abraham trusted. His wife was dead to childbearing. He was dead to fatherhood. Yet he believed in a God who resurrects. Centuries later, Jesus will die and rise again. And Paul identifies faith in the resurrection as the foundation of Christian justification: "If thou shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved" (Rom. 10:9). The same God Abraham believed in—the God who brings life from death—is the God who raised Christ. That is why Abraham is the father of all believers. We believe in the same God.',
        },
        {
          kind: 'carry',
          html:
            'What do you believe is impossible? A broken relationship healed. A dream that seemed to have passed you by. A gift you thought you had lost. Abraham teaches you to believe in a God who calls things that do not exist into being, who makes the dead live. Your circumstances are not the final word. God&apos;s voice is.',
        },
        {
          kind: 'reflection',
          id: 'rom4-promise',
          prompt: 'What has God promised you that seems impossible by every visible measure? How would your faith deepen if you truly believed in God who quickeneth the dead?',
        },
      ],
    },

    /* ─── Romans 4:18–21 — Who Against Hope Believed in Hope ───────────── */
    {
      ref: 'Romans 4:18–21',
      title: 'Hope Against Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(18, t('Who against hope believed in '), hy('hope', 'greek-elpis'), t(', that he might become the father of many nations, according to that which was spoken, So shall thy seed be:')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-elpis',
          title: 'Elpis — Hope',
          script: 'ἐλπίς',
          translit: '<strong>elpis</strong> · hope, expectation, confident trust in what is not yet seen',
          description:
            'Elpis is not wishful thinking. It is confident expectation. Hope that is grounded not in visible circumstances but in the character and promises of God. Abraham believed in <em>hope</em> when there was no natural reason for hope. His hope was anchored solely in God&apos;s word.',
        },
        {
          kind: 'commentary',
          id: 'rom4-against-hope',
          html:
            'The phrase is exquisite: "against hope believed in hope." All visible hope was gone. Naturally speaking, there was no reason to believe the promise. Yet Abraham believed in hope—not in what could be seen, but in what God had spoken. This is the shape of faith: it faces the silence of the world and chooses to trust God&apos;s voice instead.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(19, t('And being not weak in faith, he considered not his own body now '), hy('dead', 'rom4-dead-body'), t(', when he was about an hundred years old, neither yet the deadness of Sarah&apos;s womb:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-dead-body',
          html:
            'Abraham&apos;s body was dead. That is the literal fact. At one hundred years old, a man cannot father children. Sarah&apos;s womb was dead. Barrenness had sealed her past the age of hope. Every biological fact said <em>impossible.</em> Yet Abraham did not consider these facts as the final word. He looked past them.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(20, t('He '), hp('staggered not at the promise of God through unbelief', 'christ-staggered-not'), t('; but was strong in '), hg('faith', 'rom4-strong-faith'), t(', giving glory to God;')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-strong-faith',
          html:
            'Here is the turning point. Abraham did not waver. Did not doubt. Did not stagger back from the promise. Instead, he was <em>strong in faith.</em> His strength was not physical strength. It was not in his own power. It was in his capacity to trust God when everything in him wanted to doubt. And this faith—this refusal to doubt—gave glory to God. It said: <em>I believe You more than I believe my own aging body.</em>',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(21, t('And being fully persuaded that, what he had promised, he was able also to perform.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-fully-persuaded',
          html:
            'Abraham was fully persuaded. Not slowly coming around. Not reluctantly believing. <em>Fully</em> convinced. Completely assured. This is the shape of faith at its fullest: not blind hope, but a deep, reasoned conviction rooted in what you know of God&apos;s character. Abraham knew God was able. He was persuaded. And that persuasion was itself the substance of his faith.',
        },
        {
          kind: 'christ',
          id: 'christ-staggered-not',
          title: 'Christ Connection — The Faith That Refuses to Doubt',
          html:
            'Abraham staggered not at the promise of God through unbelief. He held the promise firm. Jesus models the same faith in Gethsemane: facing His death, He says to the Father, "Nevertheless not my will, but thine, be done" (Luke 22:42). Christ did not stagger at the cup. And He calls His disciples to the same kind of faith: "Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them" (Mark 11:24). The faith that does not waver, that does not stagger, that holds the promise firm—this is the faith Christ Himself embodies and asks of His followers.',
        },
        {
          kind: 'carry',
          html:
            'You have heard the promise. You have felt God&apos;s voice. But now you walk through a time when nothing is changing, when the circumstances are growing darker, when doubt creeps in like a thief. Abraham teaches you: do not consider your weakness as final. Do not let the deadness of circumstances become the deadness of your faith. Be strong. Be fully persuaded that what God promised, He is able to perform.',
        },
        {
          kind: 'reflection',
          id: 'rom4-fully-persuaded',
          prompt: 'Where is God asking you to be strong in faith despite circumstance? What would fully persuading yourself of God&apos;s ability look like in your life this week?',
        },
      ],
    },

    /* ─── Romans 4:22–25 — Raised Again for Our Justification ──────────── */
    {
      ref: 'Romans 4:22–25',
      title: 'Not for His Sake Alone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(22, t('And therefore it was imputed to him for righteousness.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-imputed-abraham',
          html:
            'The conclusion is simple. Because Abraham believed, righteousness was imputed—credited—to him. Not earned. Credited. Placed in his account. This is the reckoning language that runs through Romans 4. God does not transform Abraham through a process of moral improvement. He declares Abraham righteous because of his faith.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(23, t('Now it was not written for his sake alone, that it was imputed to him;')),
            verse(24, t('But for us also, to whom it shall be imputed, if we believe on him that '), hp('raised up Jesus our Lord from the dead', 'christ-resurrection'), t(';')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom4-written-us',
          html:
            'This is the move that opens the entire Old Testament to the New Testament reader. The story of Abraham was not written merely for Abraham. It was written for <em>us.</em> The same reckoning that happened to Abraham can happen to us. The same righteousness that was imputed to him is available to us. But the object of our faith is not the same as Abraham&apos;s. We believe not merely in God who raises the dead. We believe in God who has raised Jesus, our Lord, from the dead.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(25, t('Who was '), hy('delivered for our offences', 'greek-paradidomi'), t(', and was '), hg('raised again for our justification', 'rom4-raised-justification'), t('.')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-paradidomi',
          title: 'Paradidōmi — Delivered',
          script: 'παραδίδωμι',
          translit: '<strong>paradidōmi</strong> · deliver up, hand over, betray, commit',
          description:
            'Paradidōmi describes a deliberate act of handing over. Christ was delivered—handed over—to death. It was not accidental. It was the deliberate action of God the Father, sending the Son to die for our sins. The death of Christ was not a tragedy that happened to occur. It was the fulfillment of God&apos;s covenant purpose.',
        },
        {
          kind: 'commentary',
          id: 'rom4-raised-justification',
          html:
            'Christ was raised again for our justification. Not only His death justifies. His resurrection justifies. His rising from the dead is the proof that God has accepted His sacrifice, that the debt has been paid, that death has been conquered. Abraham believed in God who makes the dead live. We believe in God who raised Jesus. And that resurrection is the vindication of His death. It is the confirmation that our sins were truly borne, truly forgiven, truly removed.',
        },
        {
          kind: 'christ',
          id: 'christ-resurrection',
          title: 'Christ Connection — The Death and Resurrection Together',
          html:
            'Christ was delivered for our offences and raised again for our justification. The full work is the death <em>and</em> the resurrection together. The death alone could be a tragedy. The resurrection alone could be empty triumph. But together they are the complete picture: God taking upon Himself the penalty we deserve (the death), and then breaking the power of death itself (the resurrection). This is what we believe in. Not merely a dead God. But a risen God. And that faith—faith in the resurrection—is what brings justification. "If thou shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved" (Rom. 10:9). Abraham believed in God who quickeneth the dead. That same belief is available to us. Christ is the proof.',
        },
        {
          kind: 'carry',
          html:
            'You stand where Abraham stood—with a promise you cannot see, with a hope you cannot touch, with a God who asks you to believe against circumstance. But you stand with more than Abraham had. You have seen the resurrection. You have seen the God who raises the dead act in history, in flesh, in time. Christ rose. That is the fact that anchors everything. Believe on Him. That belief is what justifies you.',
        },
        {
          kind: 'reflection',
          id: 'rom4-believe-resurrection',
          prompt: 'How does your faith rest on the resurrection of Christ? What changes if you see His rising as God&apos;s declaration that your sins are forgiven and you are justified?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Abraham believed God, and it was counted unto him for righteousness. Who against hope believed in hope. He staggered not at the promise of God through unbelief, but was strong in faith. Christ was delivered for our offences, and was raised again for our justification.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 4 · Study Guide',
  },

  hasHebrew: false,
};
