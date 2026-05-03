import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Ephesians 6 — Children, Fathers, Servants, Masters, and the Armor of God
 *
 * Paul closes the epistle with instructions to three relationships: children and parents,
 * servants and masters. Each relationship is reframed in light of Christ. You obey not
 * because the authority is almighty, but because Christ is. You command not out of power
 * over others, but out of stewardship under Christ.
 *
 * Then the vision widens. The battle you are in is not against flesh and blood. It is
 * against principalities and powers, against spiritual wickedness in high places. And for
 * this, Paul does not call you to weapons of war. He calls you to put on the armor of God—
 * truth, righteousness, the gospel of peace, faith, salvation, and the sword of the Spirit.
 * Each piece is an aspect of Christ Himself. Together they are your sufficiency for every
 * spiritual battle. The chapter closes with a prayer, a final greeting, and the grace of
 * the Lord Jesus Christ.
 */
export const EPHESIANS_6: RichChapterContent = {
  bookSlug: 'ephesians',
  bookName: 'Ephesians',
  chapter: 6,

  estimatedMinutes: { beginner: 9, intermediate: 17, deep: 26 },
  intros: [
    'In the final chapter of Ephesians, Paul moves from theology to life. He addresses children and parents, servants and masters. These are not abstract teachings. They are instructions for Tuesday morning, for the dinner table, for the workplace. And in each case, the instruction is the same: know that you answer to Christ, not merely to the person in front of you. When a child obeys a parent, she is obeying the Lord. When a servant works, he works as if working for Christ. When a master commands, he remembers that his Master is in heaven.',
    'But then Paul&apos;s vision expands dramatically. He reminds the Ephesians that the struggle they face is not merely earthly. They do not wrestle against flesh and blood. Their real adversaries are principalities and powers, spiritual wickedness in high places. And for this cosmic battle, God has provided armor—not the armor of a soldier, but the armor of Christ. Truth is armor. Righteousness is armor. The gospel of peace is armor. Faith is a shield that quenches every fiery dart. And the sword of the Spirit is the word of God. As you put on this armor, piece by piece, you are putting on Christ.',
  ],

  sections: [
    /* ─── Ephesians 6:1–3 — Children, Obey Your Parents ────────────────────── */
    {
      ref: 'Ephesians 6:1–3',
      title: 'Children, Obey Your Parents in the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(1, t('Children, '), hg('obey your parents in the Lord', 'eph6-obey-parents'), t(': for this is right.')),
            verse(2, t('Honour thy father and mother; which is the '), hp('first commandment with promise', 'eph6-first-promise'), t(';')),
            verse(3, t('That it may be well with thee, and thou mayest live long on the earth.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-obey-parents',
          html: 'Paul does not say "Obey your parents because they are wise" or "because they are always right." He says obey them "in the Lord." This reframes obedience. The child is not surrendering to parental whim; the child is honoring the order that God has placed in the family. Obedience to parents becomes a spiritual act—a way of learning to submit to authority as it is arranged by God.',
        },
        {
          kind: 'commentary',
          id: 'eph6-first-promise',
          html: 'The commandment to honor father and mother is unique: it is the only commandment of the second table (commandments 5–10) that comes with a promise attached. "That it may be well with thee, and thou mayest live long on the earth." This is not merely rule-keeping. It is an invitation to blessing. When you honor those who gave you life, you live well and long.',
        },
        {
          kind: 'greek',
          id: 'greek-timao',
          title: 'Tīmao — &ldquo;to Honor&rdquo;',
          script: 'τιμάω',
          translit: '<strong>timao</strong> · to honor; to revere; to treat with respect and value',
          description: 'Honor is not mere obedience. A servant obeys a master. But you honor those whom you hold in high regard. To honor your parents is to see them as worthy of respect, as those through whom God brought you into existence.',
        },
        {
          kind: 'carry',
          html: 'If you are a parent, the weight of this falls on you. Your child is learning obedience, yes—but obedience in the Lord. This means your authority is not absolute. You exercise it as a steward of God&apos;s order, not as a tyrant. If you are a child, even an adult child, this calls you to a posture of honor toward those who bore you. Not blind agreement, not the surrender of your conscience, but genuine honor.',
        },
        {
          kind: 'reflection',
          id: 'eph6-obey',
          prompt: 'How have you experienced obedience to parents as a spiritual act? Or, if you are a parent, how might you exercise your authority more clearly as authority "in the Lord"?',
        },
      ],
    },

    /* ─── Ephesians 6:4 — Fathers, Provoke Not Your Children ────────────────── */
    {
      ref: 'Ephesians 6:4',
      title: 'Fathers, Provoke Not Your Children to Wrath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(4, t('And, ye fathers, provoke not your children to wrath: but '), hy('bring them up in the nurture and admonition of the Lord', 'greek-ektrephō'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-fathers',
          html: 'Paul shifts address. He speaks directly to fathers—the heads of households, those who carry authority. The warning is sharp: do not provoke your children to wrath. This is not a suggestion. It is a command. A father who uses his authority to anger, to shame, to crush his children&apos;s spirit is sinning. He is abusing the trust God has placed in him.',
        },
        {
          kind: 'greek',
          id: 'greek-ektrephō',
          title: 'Ektrephō — &ldquo;to Nurture&rdquo; or &ldquo;to Bring Up&rdquo;',
          script: 'ἐκτρέφω',
          translit: '<strong>ektrephō</strong> · to nourish; to feed; to bring up; to rear with care',
          description: 'The word suggests the gentle, sustained care of a parent who feeds and nurtures a child to maturity. Not harsh discipline alone, but the warmth of presence, the provision of food and safety, the patient instruction in what is true and good.',
        },
        {
          kind: 'commentary',
          id: 'eph6-nurture-admonition',
          html: 'Nurture (ektrophē) is the warm, sustaining work of raising a child. Admonition (nouthesia) is gentle rebuke, correction, training in wisdom. A father&apos;s task is both: to provide for, to encourage, to build up (nurture), and to correct gently when the child goes astray (admonition). Both flow from the Lord. Neither is an excuse for rage.',
        },
        {
          kind: 'carry',
          html: 'Fathers, your authority is not your own. It is given to you by God for the sake of your children, not for your sake. When you are tired, when you are frustrated, when your child has pushed you to your limit—this is when the command applies most directly. Do not provoke them to wrath. Instead, choose the harder path: bring them up in nurture and admonition. This requires patience that comes from Christ.',
        },
        {
          kind: 'reflection',
          id: 'eph6-fathers-reflect',
          prompt: 'In what situations do you most struggle to bring up your children (or those in your care) without provoking them? What would it look like to respond in nurture instead?',
        },
      ],
    },

    /* ─── Ephesians 6:5–8 — Servants, Be Obedient to Your Masters ────────────── */
    {
      ref: 'Ephesians 6:5–8',
      title: 'Servants, Work as Unto Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(5, t('Servants, be obedient to them that are your masters according to the flesh, with fear and trembling, in '), hg('singleness of your heart, as unto Christ', 'eph6-as-unto-christ'), t(';')),
            verse(6, t('Not with eyeservice, as menpleasers; but as the '), hp('servants of Christ', 'eph6-servants-christ'), t(', doing the will of God from the heart;')),
            verse(7, t('With good will doing service, as to the Lord, and not to men:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-as-unto-christ',
          html: 'This is the revolutionary reframing: you obey your earthly master as if you are obeying Christ. Not because your master is Christ. But because your obedience is ultimately to Christ. You do your work not to please the man who hired you, but to please Jesus. This does not make the work less earthly; it makes it more spiritual.',
        },
        {
          kind: 'commentary',
          id: 'eph6-servants-christ',
          html: 'The servant becomes, in Paul&apos;s vision, a servant of Christ first. The earthly relationship has not changed. The slave is still enslaved. But the relationship has been re-narrated. The slave now sees himself as serving Christ, doing the will of God. This is spiritual freedom in the midst of physical bondage.',
        },
        {
          kind: 'carry',
          html: 'This speaks to anyone in a subordinate position at work, in ministry, in any arena. You are tempted to deliver different work depending on who is watching. To be diligent when your supervisor is present, to slack when she is gone. Paul calls you to a deeper integrity: work as unto Christ. This transforms the mundane into the sacred.',
        },
        {
          kind: 'reflection',
          id: 'eph6-eyeservice',
          prompt: 'When you work, who are you really serving? How would your work change if you genuinely worked "as unto Christ" whether anyone else was watching?',
        },
      ],
    },

    /* ─── Ephesians 6:9 — Masters, Do the Same Things ───────────────────────── */
    {
      ref: 'Ephesians 6:9',
      title: 'Masters, Remember Your Master in Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(9, t('And, ye masters, do the same things unto them, forbearing threatening: knowing that your Master also is in heaven; '), hy('neither is there respect of persons with him', 'greek-prosopolepsia'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-masters-reciprocal',
          html: 'Paul does not tell masters to rule differently. He tells them to do the same things. Serve. Work with singleness of heart. Do not try to impress. Forbear threatening. Remember your Master in heaven. In other words, masters are also under authority. They are not the top of the hierarchy. They answer to Christ.',
        },
        {
          kind: 'greek',
          id: 'greek-prosopolepsia',
          title: 'Prosopolepsia — &ldquo;Respect of Persons&rdquo;',
          script: 'προσωπολημψία',
          translit: '<strong>prosopolepsia</strong> · partiality; favoritism; respect of persons based on status',
          description: 'God does not play favorites. He does not favor the rich over the poor, the powerful over the weak, the master over the slave. The same God who sees the servant sees the master. Both stand equal before Him.',
        },
        {
          kind: 'christ',
          id: 'christ-masters',
          title: 'Christ Connection — Masters Under a Master',
          html: 'Christ is the Master of all masters. He is the one before whom every earthly authority will give account. The master who understands this will lead not through fear and threats, but through the example of Christ—who came not to be served, but to serve (Matt. 20:28). He will treat his servants with dignity because he knows that they, like him, bear the image of God.',
        },
        {
          kind: 'carry',
          html: 'If you have authority over others—as a manager, a leader, a parent, a mentor—this word applies to you. Your power is not your own. You exercise it under Christ. You are not to use it to elevate yourself or to crush those beneath you. Instead, you are called to the harder work: to forbear threatening, to remember that the one you are leading is also a servant of Christ, and to lead in a way that reflects that truth.',
        },
        {
          kind: 'reflection',
          id: 'eph6-masters-reflect',
          prompt: 'How do you exercise authority in your sphere of influence? What would it look like to lead as someone who serves a Master in heaven?',
        },
      ],
    },

    /* ─── Ephesians 6:10–13 — Be Strong; We Wrestle Not Against Flesh and Blood */
    {
      ref: 'Ephesians 6:10–13',
      title: 'Be Strong in the Lord; We Wrestle Not Against Flesh and Blood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(10, t('Finally, my brethren, be '), hp('strong in the Lord', 'eph6-strong-lord'), t(', and in the power of his might.')),
            verse(11, t('Put on the whole armour of God, that ye may be able to stand against the '), hg('wiles of the devil', 'eph6-wiles-devil'), t('.')),
            verse(12, t('For we '), hy('wrestle not against flesh and blood', 'greek-pale'), t(', but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-strong-lord',
          html: 'Paul&apos;s closing word is not a call to your own strength. It is a call to be strong in the Lord. This is the shift he makes throughout Ephesians: the power is not in you; it is in Christ. You are strong only insofar as you are united to Him, drawing on His might.',
        },
        {
          kind: 'commentary',
          id: 'eph6-wiles-devil',
          html: 'The devil&apos;s wiles are his strategies, his schemes. He does not always attack head-on. Often he works through deception, through temptation, through the slow erosion of faith. The armor of God is your defense against these subtle attacks.',
        },
        {
          kind: 'greek',
          id: 'greek-pale',
          title: 'Palē — &ldquo;Wrestling&rdquo;',
          script: 'πάλη',
          translit: '<strong>palē</strong> · wrestling; a close hand-to-hand struggle',
          description: 'Wrestling is the most intimate form of combat[res:perseus-lexicon-wrestle]. It is not a distant battle with arrows and spears. It is face-to-face, body-to-body contact. Paul says your struggle is this intimate with spiritual forces. You are not merely resisting ideas; you are engaged with principalities and powers.',
        },
        {
          kind: 'commentary',
          id: 'eph6-principalities-powers',
          html: 'Principalities (archai) and powers (exousiai) are not human enemies. They are spiritual entities arrayed against you. Rulers of the darkness of this world—these are powers that work in the systems, the ideologies, the narratives of the fallen world. Spiritual wickedness in high places—these are demonic forces at work in the spiritual realm.',
        },
        {
          kind: 'carry',
          html: 'Your struggle is real, but it is not primarily with the people around you. When you are in conflict with a family member, with a coworker, with an adversary, you are tempted to see them as your enemy. But Paul reminds you: the real battle is spiritual. This does not excuse you from treating people with love and dignity. But it reorients you. Your real fight is not against flesh and blood. It is against the spiritual forces that work through this world to deceive, to destroy, to pull you away from Christ.',
        },
        {
          kind: 'reflection',
          id: 'eph6-struggle',
          prompt: 'In what situation are you currently in conflict with another person? How might you reframe that conflict in light of the truth that you "wrestle not against flesh and blood"?',
        },
        {
          kind: 'artwork',
          matchTitle: /armor|warrior|battle|wrestling|strength|shield|sword/i,
          caption: 'Ephesians 6:10–13 · Be Strong in the Lord',
        },
      ],
    },

    /* ─── Ephesians 6:14a — Loins Girt About with Truth ──────────────────────── */
    {
      ref: 'Ephesians 6:14a',
      title: 'Loins Girt About with Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(14, t('Stand therefore, having your loins girt about with '), hy('truth', 'greek-aletheia'), t(', and having on the breastplate of righteousness;')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-loins-truth',
          html: 'In ancient warfare, the soldier would gird his loins—bind his garment tightly—to be ready for movement and combat. Paul begins the armor not with a weapon but with truth. You stand ready when you are grounded in truth. Not the opinions of the world, not the lies of the enemy, but the truth as it is in Jesus.',
        },
        {
          kind: 'greek',
          id: 'greek-aletheia',
          title: 'Aletheia — &ldquo;Truth&rdquo;',
          script: 'ἀλήθεια',
          translit: '<strong>aletheia</strong> · truth; that which is true; the reality of God revealed',
          description: 'Truth in Scripture is not merely factual accuracy. It is the revealed reality of God. Jesus said, "I am the way, the truth, and the life" (John 14:6). To be girded about with truth is to be secured by the person and reality of Christ.',
        },
        {
          kind: 'christ',
          id: 'christ-truth',
          title: 'Christ Connection — Christ the Truth',
          html: 'Jesus is the truth. When you gird your loins with truth, you are preparing yourself with Christ. He is your foundation. He is the reality against which all deceptions are exposed. The enemy is the father of lies (John 8:44), but Christ is the truth incarnate.',
        },
        {
          kind: 'carry',
          html: 'How much of your day is spent absorbing half-truths, exaggerations, and outright lies? From media, from conversation, from your own heart? Paul calls you to something different: to girdle yourself with truth. This means returning repeatedly to Scripture, to the witness of the Spirit, to the person of Christ. It means measuring the world&apos;s narratives against His reality.',
        },
        {
          kind: 'reflection',
          id: 'eph6-truth',
          prompt: 'What lie have you been believing that undermines your spiritual readiness? How can you gird yourself with the truth of Christ instead?',
        },
      ],
    },

    /* ─── Ephesians 6:14b — Breastplate of Righteousness ──────────────────────── */
    {
      ref: 'Ephesians 6:14b',
      title: 'Breastplate of Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(14, t('...and having on the '), hg('breastplate of righteousness', 'eph6-breastplate'), t(';')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-breastplate',
          html: 'The breastplate protects the heart and vital organs. Paul pairs it with righteousness—right living, right standing with God. This is not the righteousness you manufacture through your own effort. It is the righteousness of Christ, imputed to you, which becomes the lived reality of your choices and character.',
        },
        {
          kind: 'commentary',
          id: 'eph6-righteousness-living',
          html: 'Isaiah 59:17[res:intertextual-ephesians-6-armor] says God Himself wears a breastplate of righteousness. When you put on this breastplate, you are putting on an aspect of Christ. His perfect obedience, His alignment with the will of God, His integrity—these become your protection. They shield your heart from guilt, from shame, from the accusations of the enemy.',
        },
        {
          kind: 'carry',
          html: 'The enemy attacks your heart—your sense of worth, your security, your standing with God. The breastplate of righteousness guards against this. When you walk in integrity, when you choose the right path even when it costs you, you are putting on protection. Not because your righteousness is perfect (it is not), but because Christ&apos;s righteousness covers you.',
        },
        {
          kind: 'reflection',
          id: 'eph6-righteousness',
          prompt: 'In what area of your life do you most struggle with guilt or shame? How does the truth of Christ&apos;s righteousness (imputed to you) offer protection?',
        },
      ],
    },

    /* ─── Ephesians 6:15 — Feet Shod with the Gospel of Peace ──────────────────── */
    {
      ref: 'Ephesians 6:15',
      title: 'Feet Shod with the Gospel of Peace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(15, t('And your feet shod with the '), hy('preparation of the gospel of peace', 'greek-hetoima'), t(';')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-feet-shod',
          html: 'The Roman soldier&apos;s sandals were studded to give him traction in battle. Paul says your feet are shod with the gospel of peace. This is what grounds you, what keeps you steady. The gospel—the good news that Christ died for you, rose again, and offers you peace with God—is your foundation for movement and advance.',
        },
        {
          kind: 'greek',
          id: 'greek-hetoima',
          title: 'Hetoimasia — &ldquo;Preparation&rdquo; or &ldquo;Readiness&rdquo;',
          script: 'ἑτοιμασία',
          translit: '<strong>hetoimasia</strong> · preparation; readiness; a state of being ready',
          description: 'The gospel of peace prepares you. It makes you ready to stand, to advance, to do the work God has called you to do. You are ready because you are at peace—not because you have solved all your problems, but because you know that God is for you.',
        },
        {
          kind: 'carry',
          html: 'This peace is not the absence of conflict. The Christian often faces opposition, misunderstanding, and attack. But underneath all of this is a bedrock peace: you are reconciled to God through Christ. The fight is real, but the outcome is secure. With your feet shod in this gospel of peace, you can stand firm.',
        },
        {
          kind: 'reflection',
          id: 'eph6-gospel-peace',
          prompt: 'What would it mean for your daily walk to be shod with the gospel of peace? Where do you most need that steadiness?',
        },
      ],
    },

    /* ─── Ephesians 6:16 — Shield of Faith ────────────────────────────────────── */
    {
      ref: 'Ephesians 6:16',
      title: 'Shield of Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(16, t('Above all, taking the '), hy('shield of faith', 'greek-thureos'), t(', wherewith ye shall be able to quench all the fiery darts of the wicked.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-shield-faith',
          html: 'Paul says this shield is primary: "Above all." Faith is your primary defense. The enemy attacks with fiery darts—accusations, doubts, temptations to despair. Against these, reason does not work. Only faith works. The conviction that God is good, that His word is true, that He will not abandon you—this is what extinguishes the enemy&apos;s attacks.',
        },
        {
          kind: 'greek',
          id: 'greek-thureos',
          title: 'Thureos — &ldquo;Shield&rdquo;',
          script: 'θυρεός',
          translit: '<strong>thureos</strong> · a large, door-like shield; a shield for covering the whole body',
          description: 'The word refers to the large shield carried by Roman soldiers, large enough to cover the whole body. Faith is this comprehensive protection—not just covering one area of vulnerability, but protecting you entirely.',
        },
        {
          kind: 'carry',
          html: 'You will be attacked. The attacks will come as burning thoughts, as accusations, as doubts. But above all, you have been given a shield: faith. Not faith that you generate on your own, but faith that you take up—faith that God is who He says He is, that His promises are true, that He is for you. Each time you choose to believe His word when the enemy whispers lies, you are raising this shield.',
        },
        {
          kind: 'reflection',
          id: 'eph6-shield',
          prompt: 'What fiery dart has the enemy been shooting at you? How does faith in Christ&apos;s character and promises quench it?',
        },
      ],
    },

    /* ─── Ephesians 6:17a — Helmet of Salvation ───────────────────────────────── */
    {
      ref: 'Ephesians 6:17a',
      title: 'Helmet of Salvation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(17, t('And '), hg('take the helmet of salvation', 'eph6-helmet'), t(', and the sword of the Spirit, which is the word of God;')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-helmet',
          html: 'The helmet protects the head and mind. Paul pairs it with salvation. Your hope—the assurance that you are saved, that Christ has purchased your redemption, that eternal life is yours—protects your thoughts. The enemy attacks your mind with despair, with the feeling that you are beyond help. The helmet of salvation counters this: you are saved. This is settled.',
        },
        {
          kind: 'commentary',
          id: 'eph6-salvation-assurance',
          html: 'This is not arrogant presumption. Paul speaks of the hope of salvation (Titus 2:13)—the confident expectation that what Christ has begun in you He will complete (Phil. 1:6). You know you are saved not because you have earned it, but because Christ died for you and rose again. That work is finished.',
        },
        {
          kind: 'christ',
          id: 'christ-salvation',
          title: 'Christ Connection — Christ Your Salvation',
          html: 'In Isaiah 59:17[res:intertextual-ephesians-6-armor], the Lord Himself puts on a helmet of salvation. When you put on this helmet, you are putting on Christ&apos;s own assurance of victory. He has already won. The battle is His. And you share in that victory.',
        },
        {
          kind: 'carry',
          html: 'The enemy wants you to feel unsure. Unsure whether God really loves you. Unsure whether you are really saved. Unsure whether Christ has truly forgiven you. The helmet of salvation says: this is certain. You are saved. Not by your works, but by Christ&apos;s finished work. This assurance, this confidence, this is what protects your mind from doubt and despair.',
        },
        {
          kind: 'reflection',
          id: 'eph6-salvation',
          prompt: 'Where do you struggle with assurance of your salvation? What would it mean to put on the helmet of that assurance as a daily defense?',
        },
      ],
    },

    /* ─── Ephesians 6:17b — Sword of the Spirit ───────────────────────────────── */
    {
      ref: 'Ephesians 6:17b',
      title: 'Sword of the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(17, t('...and the '), hy('sword of the Spirit', 'greek-machaira'), t(', which is the '), hg('word of God', 'eph6-word-god'), t(';')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-sword',
          html: 'All the other pieces of armor are defensive. The sword is your only offensive weapon. And it is the word of God. This is not a physical sword. It is the living, active word of Scripture. It is sharp enough to divide soul and spirit, discerning the thoughts and intents of the heart (Heb. 4:12). When you face temptation, when you face the accusations of the enemy, you wield this word.',
        },
        {
          kind: 'commentary',
          id: 'eph6-word-god',
          html: 'The word of God is the only offensive weapon in the armor. It is not a tool for debate or argument alone. It is a living, active power that accomplishes what God intends (Isa. 55:11). In moments of testing, it is your sword—the means by which you overcome the lies and accusations of the enemy.',
        },
        {
          kind: 'greek',
          id: 'greek-machaira',
          title: 'Machaira — &ldquo;Sword&rdquo;',
          script: 'μάχαιρα',
          translit: '<strong>machaira</strong> · a sword; a short sword; a blade',
          description: 'This is not a massive broadsword, but a sharp, wieldy blade. The word of God is precision. It is not a blunt instrument. It cuts exactly where it needs to cut—exposing lies, confirming truth, dividing the genuine from the false.',
        },
        {
          kind: 'carry',
          html: 'Do you know Scripture well enough to wield it? When temptation comes, when the enemy whispers lies, when you are shaken—do you have the word of God ready in your mind and heart? This is not about being a Bible scholar. It is about knowing enough of His word that you can draw it in the moment of need and let it do its work.',
        },
        {
          kind: 'reflection',
          id: 'eph6-sword',
          prompt: 'What Scripture has been most powerful in your spiritual battles? How can you make yourself more ready to wield the word of God when you need it?',
        },
      ],
    },

    /* ─── Ephesians 6:18–20 — Praying Always ──────────────────────────────────── */
    {
      ref: 'Ephesians 6:18–20',
      title: 'Praying Always with All Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(18, t('Praying '), hg('always with all prayer and supplication in the Spirit', 'eph6-praying-always'), t(', and watching thereunto with all perseverance and supplication for all saints;')),
            verse(19, t('And for me, that '), hg('utterance may be given unto me', 'eph6-utterance'), t(', that I may open my mouth boldly, to make known the mystery of the gospel;')),
            verse(20, t('For which I am an ambassador in bonds: that therein I may speak boldly, as I ought to speak.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-praying-always',
          html: 'Prayer is not the final piece of armor; it is what activates all of them. "Praying always" does not mean being on your knees constantly. It means maintaining a posture of dependency on God, a willingness to speak to Him about everything, a constant awareness that you are not self-sufficient.',
        },
        {
          kind: 'commentary',
          id: 'eph6-utterance',
          html: 'Paul, the Apostle, asks for prayer that "utterance may be given unto me." Even he, seasoned in faith and commissioned by Christ, needs the prayers of the church for boldness and the right words. This is not weakness; it is the realism of spiritual dependence. The church&apos;s intercession gives him courage to speak the gospel openly.',
        },
        {
          kind: 'commentary',
          id: 'eph6-watching-perseverance',
          html: 'Prayer is paired with watching—remaining alert—and perseverance. You do not pray once and think you are done. You pray continuously, persistently, knowing that the battle is long and your resources come from God alone.',
        },
        {
          kind: 'carry',
          html: 'Prayer is not a luxury. It is essential. It is what connects you to the Power that sustains you in battle. When you are tempted to skip prayer because you are too busy, too tired, or think you do not have time—that is precisely when you need it most. Prayer is not an addition to your spiritual armor. It is what makes the armor work.',
        },
        {
          kind: 'reflection',
          id: 'eph6-prayer',
          prompt: 'How consistent is your prayer life? What would it look like to pray "always with all prayer and supplication" for the next week?',
        },
      ],
    },

    /* ─── Ephesians 6:21–24 — Tychicus and the Closing Benediction ──────────── */
    {
      ref: 'Ephesians 6:21–24',
      title: 'Tychicus, Peace, and Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(21, t('But that ye also may know my affairs, and how I do, '), hy('Tychicus, a beloved brother and faithful minister in the Lord', 'eph6-tychicus'), t(', shall make known to you all things:')),
            verse(23, t('Peace be to the brethren, and '), hg('love with faith', 'eph6-love-faith'), t(', from God the Father and the Lord Jesus Christ.')),
            verse(24, t('Grace be with all them that love our Lord Jesus Christ in sincerity. Amen.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'eph6-tychicus',
          html: 'Paul ends the epistle by naming Tychicus—a trusted coworker, a messenger who will carry this letter to Ephesus and speak to them in person. This is a reminder that the church is not merely individual believers, but a community. The word Paul has written comes alive through personal encounter.',
        },
        {
          kind: 'commentary',
          id: 'eph6-love-faith',
          html: 'Paul&apos;s final word is peace[res:sefaria-isaiah-57-peace]. But not peace divorced from love and faith. These three—peace, love, and faith—flow from God the Father and the Lord Jesus Christ. They are not your creation. They are the gifts of the risen Christ to His church.',
        },
        {
          kind: 'commentary',
          id: 'eph6-sincerity',
          html: 'The final phrase is key: grace be with all them that "love our Lord Jesus Christ in sincerity." The blessing is for those who genuinely love Him, not those who merely profess a shallow faith. This love is uncorruptible, genuine, enduring.',
        },
        {
          kind: 'christ',
          id: 'christ-conclusion',
          title: 'Christ Connection — All Sufficiency in Christ',
          html: 'Ephesians begins with Paul reminding the church that God "hath blessed us with all spiritual blessings in Christ" (Eph. 1:3). The letter closes with the reminder that all peace, all love, all faith flow from God the Father and the Lord Jesus Christ. Christ is the beginning and the end. He is the foundation and the fulfillment. In Him, you lack nothing.',
        },
        {
          kind: 'carry',
          html: 'As you close this epistle, you return to where you began: all sufficiency is in Christ. Not in your effort. Not in your understanding. Not in your mastery of doctrine. In Christ. You are a child learning to obey in Him. You are a father learning to nurture in Him. You are a worker learning to labor in Him. You are a soldier learning to stand in His armor. You are strong in the Lord. This is the peace that surpasses understanding. This is grace, poured out on all who genuinely love Him.',
        },
        {
          kind: 'reflection',
          id: 'eph6-conclusion',
          prompt: 'As you finish this study of Ephesians, what is the one truth about Christ and His sufficiency that has affected you most deeply?',
        },
        {
          kind: 'artwork',
          matchTitle: /peace|grace|faith|love|blessing|christ/i,
          caption: 'Ephesians 6:21–24 · Peace and Grace',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Finally, my brethren, be strong in the Lord, and in the power of his might. Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ephesians 6 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-ephesians-6-armor',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Armor of God in Isaiah',
      url: 'https://www.intertextual.bible/',
      description: 'Traces how Ephesians 6 draws on Isaiah 59:17 to show God Himself wearing the armor that believers are called to put on.',
    },
    {
      id: 'sefaria-isaiah-57-peace',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 57 — Peace from God',
      url: 'https://www.sefaria.org/Isaiah.57',
      description: 'The foundational promise that peace flows from God to those who seek Him, which Paul echoes in Ephesians&apos; closing.',
    },
    {
      id: 'perseus-lexicon-wrestle',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'Wrestle: Greek Lexicon',
      url: 'https://scaife.perseus.org/lexica/',
      description: 'Lexical study of the Greek verb for wrestling, which Paul uses metaphorically for the spiritual struggle against evil.',
    },
  ],

  hasHebrew: false,
};
