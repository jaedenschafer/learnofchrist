import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

export const FIRST_PETER_3: RichChapterContent = {
  bookSlug: '1-peter',
  bookName: '1 Peter',
  chapter: 3,

  estimatedMinutes: { beginner: 7, intermediate: 10, deep: 17 },
  intros: [
    'First Peter addresses suffering Christians scattered across Roman provinces, now turning to social relationships within the church and household. Peter&apos;s vision is revolutionary: Christ&apos;s suffering transforms all of life—wives and husbands, servants and masters, community members—into places where the gospel becomes visible. The structure moves from household relationships (vv. 1–7) to community witness (vv. 8–12) to the bedrock foundation: Christ&apos;s own suffering and descent into the realm of the dead (vv. 14–22). In each setting, believers are called to &ldquo;always being prepared to make a defense&rdquo; for the hope that lives in them.',
    'The chapter opens with the apostle&apos;s counsel to wives and husbands—a passage that requires careful reading. Peter is speaking into the concrete realities of first-century household life, where women and slaves had no legal voice. His radical move is not to demand immediate social overthrow but to infuse submission with new meaning: submission becomes a place of power, where silent testimony and holy character win hearts more effectively than words. The complementary instruction to husbands—to live with them &ldquo;in an understanding way&rdquo;—reveals a mutual regard that honored women as fellow heirs of God&apos;s grace.',
  ],

  sections: [
    {
      ref: '1 Peter 3:1–2',
      title: 'Wives: Beauty That Speaks Without Words',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(1, t('Likewise, wives, '), hy('be subject to your own husbands', 'c-wives-subject'), t(', so that even if some do not obey the word, they may be won without a word by the '), hy('conduct of their wives', 'c-anastrophe'), t(',')),
            verse(2, t('when they see your '), hg('reverent and chaste conduct', 'c-reverent-chaste'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wives-subject',
          html: 'Peter addresses wives with a stunning paradox: your greatest power lies not in speech but in silence, not in argument but in beauty of life. In a world where women had minimal legal or social standing, where a wife could not divorce her husband, Peter offers something far more valuable—agency through character. The call to submission is not a call to erase yourself.',
        },
        {
          kind: 'greek',
          id: 'c-anastrophe',
          title: 'Anastrophē — &ldquo;Conduct&rdquo; or &ldquo;Manner of Life&rdquo;',
          script: 'ἀναστροφή',
          translit: '<strong>anastrophē</strong> · behavior, conduct, or way of life',
          description: 'The observable pattern of how a person lives. In the NT, anastrophē refers to the visible, daily expression of faith that others can witness and be affected by. Your conduct is your gospel.',
        },
        {
          kind: 'commentary',
          id: 'c-reverent-chaste',
          html: 'The word for &ldquo;reverent&rdquo; is <em>phobos</em> (fear)—not terror, but the kind of awe that comes from recognizing holiness. When a woman&apos;s life is anchored in reverence toward God, not dependence on her husband&apos;s approval, her conduct becomes magnetic. The <em>chaste</em> conduct speaks of integrity, purity of intention, and moral seriousness—qualities no amount of outward ornamentation can fake.',
        },
        {
          kind: 'carry',
          html: 'Peter is not saying women are voiceless. He is saying that in a context where your words have no legal power, your life has absolute power. The gospel does not wait for cultural permission to change hearts—it works through the silent testimony of transformed character.',
        },
        {
          kind: 'reflection',
          id: 'peter3-beauty-speaks',
          prompt: 'Where in your life do you rely on words, arguments, or persuasion when a change in your actual character would speak more powerfully? How might living with visible reverence toward God transform the hearts of those around you?',
        },
        {
          kind: 'artwork',
          matchTitle: /women.*beauty|adornment.*heart|conduct|reverent/i,
          caption: '1 Peter 3:1–2 · Silent Testimony',
        },
      ],
    },

    {
      ref: '1 Peter 3:3–4',
      title: 'Hidden Beauty: The Precious Self',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(3, t('Do not let your adorning be external—the braiding of hair and the putting on of gold jewelry, or the wearing of fine clothing—')),
            verse(4, t('but let your adorning be the '), hy('hidden person of the heart', 'c-hidden-heart'), t(' with the imperishable beauty of a '), hy('gentle and quiet spirit', 'c-praotes'), t(', which in God&apos;s sight is very precious.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hidden-heart',
          html: 'Peter is not forbidding women to braid their hair or wear jewelry. Rather, he is reordering priorities: do not let your <em>essence</em>—your sense of who you are and where your worth comes from—rest in externals. In the Roman world, a woman&apos;s social value was largely determined by her appearance. Peter invites women into a radical revaluation: your worth is not negotiable, not subject to the fashion of the moment.',
        },
        {
          kind: 'greek',
          id: 'c-praotes',
          title: 'Praotēs — &ldquo;Gentleness&rdquo; or &ldquo;Meekness&rdquo;',
          script: 'πραότης',
          translit: '<strong>praotēs</strong> · gentleness, meekness, or mildness',
          description: 'Strength under control. Like a powerful horse that obeys the rider. It is not weakness but restraint, mercy, and humility. The imperishable beauty—which never fades, never becomes outdated—is extremely valuable in God&apos;s sight.',
        },
        {
          kind: 'reflection',
          id: 'peter3-hidden-person',
          prompt: 'What does the &ldquo;hidden person of your heart&rdquo; look like? Where do you tend to seek beauty, value, or identity—in externals that fade or in the imperishable character that God treasures?',
        },
      ],
    },

    {
      ref: '1 Peter 3:5–7',
      title: 'Husbands: Understanding and Honor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(5, t('For this is how the holy women who hoped in God used to adorn themselves, by submitting to their own husbands,')),
            verse(6, t('as Sarah obeyed Abraham, calling him lord. And you are her children, if you do good and do not fear anything that is frightening.')),
            verse(7, t('Likewise, husbands, '), hy('live with your wives in an understanding way', 'c-understanding-way'), t(', showing honor to the woman as the weaker vessel, since they are '), hp('heirs with you of the grace of life', 'c-christ-coheirs'), t(', so that your prayers may not be hindered.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-understanding-way',
          html: 'The command to husbands is not to rule but to <em>live together in understanding</em>—to have knowledge of your wife, to study her, to know her mind and heart. A man of genuine strength protects and honors the one he could dominate. This is the real measure of power.',
        },
        {
          kind: 'greek',
          id: 'c-coheirs',
          title: 'Synkleronomos — &ldquo;Co-Heir&rdquo;',
          script: 'συγκληρόνομος',
          translit: '<strong>synkleronomos</strong> · joint heir; one who inherits together with another',
          description: 'Wives and husbands share equally in the inheritance of God&apos;s grace. This is radical equality in the midst of household order. The final clause—that prayers may not be hindered—warns that a man&apos;s spiritual life is blocked when he dishonors his wife.',
        },
        {
          kind: 'christ',
          id: 'c-christ-coheirs',
          title: 'Co-Heirs with Christ',
          html: 'Just as wives are co-heirs with their husbands in the grace of life, so all believers—men and women, Jew and Gentile, slave and free—are co-heirs with Christ (Romans 8:17). Christ shares his inheritance with us; we inherit eternal life, glory, and the Father&apos;s kingdom alongside him. There is no hierarchy in value, only different callings and gifts.',
        },
        {
          kind: 'carry',
          html: 'Peter&apos;s vision of marriage is not about dominance or submission as a power game. It is about two image-bearers of God covenanting to honor each other and together witness to Christ&apos;s love. Wives offer themselves with reverent strength; husbands honor and study their wives as equals in the kingdom.',
        },
        {
          kind: 'reflection',
          id: 'peter3-marriage-covenant',
          prompt: 'If you are married or considering marriage: what does it mean to live &ldquo;in an understanding way&rdquo; with your spouse? How does the vision of co-heirs reframe your relationship?',
        },
      ],
    },

    {
      ref: '1 Peter 3:8–9',
      title: 'One Mind, One Heart: The Community',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(8, t('Finally, all of you, have '), hg('unity of mind', 'c-unity-mind'), t(', sympathy, brotherly love, a tender heart, and a humble mind.')),
            verse(9, t('Do not repay evil for evil or '), hy('reviling for reviling', 'c-loidoria'), t(', but on the contrary, bless, for to this you were called, that you may inherit a blessing.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-unity-mind',
          html: 'Peter shifts from household instruction to the assembly of believers—the church gathering in a hostile world. <em>Unity of mind</em> does not mean uniformity of opinion. It means a shared orientation toward Christ, a common understanding that Christ is Lord and that his kingdom transcends all earthly hierarchies.',
        },
        {
          kind: 'greek',
          id: 'c-loidoria',
          title: 'Loidoria — &ldquo;Abusive Speech&rdquo; or &ldquo;Reviling&rdquo;',
          script: 'λοιδορία',
          translit: '<strong>loidoria</strong> · abusive speech, reviling, insult, or slander',
          description: 'The kind of verbal assault that seeks to shame and degrade. The early church faced loidoria from those who opposed the gospel. When insulted, the natural response is retaliation. But Peter recalls the community to their calling: they are called to bless.',
        },
        {
          kind: 'reflection',
          id: 'peter3-bless-enemies',
          prompt: 'When you are insulted or treated unkindly, what is your instinctive response? What would it mean to &ldquo;bless&rdquo; that person instead—not with false cheerfulness, but with genuine goodwill?',
        },
      ],
    },

    {
      ref: '1 Peter 3:10–11',
      title: 'Guard Your Tongue: Life and Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(10, t('For &ldquo;Whoever desires to love life and see good days, let him keep his '), hy('tongue from evil', 'c-tongue-evil'), t(' and his lips from speaking deceit;')),
            verse(11, t('let him turn away from evil and do good; let him seek peace and pursue it.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tongue-evil',
          html: 'Peter quotes Psalm 34:12–16. The connection is simple and profound: the tongue is a hinge on which entire lives turn. The tongue is an instrument of power: it can build up or tear down, bless or curse, bring life or death. To &ldquo;love life&rdquo; is not mere hedonism; it is to choose the path toward genuine flourishing, true goodness, and lasting joy.',
        },
        {
          kind: 'greek',
          id: 'c-glossa',
          title: 'Glōssa — &ldquo;Tongue&rdquo; or &ldquo;Language&rdquo;',
          script: 'γλῶσσα',
          translit: '<strong>glōssa</strong> · the tongue, or language itself',
          description: 'In the NT, glōssa is often used metaphorically to refer to speech and what flows from the mouth. James 3 develops the theme: the tongue is a small member that sets the whole course of life on fire.',
        },
        {
          kind: 'carry',
          html: 'Our words are not neutral. They shape our hearts, influence those around us, and open or close the door to the peace of Christ. Guarding the tongue is not prudishness; it is wisdom about what makes life truly good.',
        },
      ],
    },

    {
      ref: '1 Peter 3:12–14',
      title: 'Ready to Answer: Hope and Gentleness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(12, t('For the eyes of the Lord are on the righteous, and his ears are open to their prayer. But the face of the Lord is against those who do evil.&rdquo;')),
            verse(13, t('Now who is there to harm you if you are zealous for what is good?')),
            verse(14, t('But even if you should suffer for righteousness&apos; sake, you will be blessed. Have no fear of them, nor be troubled,')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-harm',
          html: 'This is a rhetorical question, not a promise of immunity from suffering. Peter is not naive about persecution. Rather, he is saying: the worst harm that can come to you is not physical death but moral compromise, the loss of your own conscience. The one who clings to good—even when it costs—cannot be truly harmed.',
        },
        {
          kind: 'christ',
          id: 'c-christ-hope',
          title: 'The Hope of Resurrection',
          html: 'Peter grounds all Christian hope in the resurrection of Christ. To be &ldquo;ready to give a reason for the hope that is in you&rdquo; is to point to Christ&apos;s victory over death and the promise that we too will rise (1 Corinthians 15:20–28). This hope is not wishful thinking or optimism about circumstances; it is trust in the God who raised Jesus and will raise us. No persecution, no slander, no opposition can extinguish this hope.',
        },
      ],
    },

    {
      ref: '1 Peter 3:15–18',
      title: 'Christ&apos;s Suffering and Justification',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(15, t('but in your hearts honor Christ the Lord as holy, always being prepared to make a '), hy('defense to anyone who asks', 'c-apologia'), t(' you for a reason for the hope that is in you;')),
            verse(16, t('yet do it with gentleness and respect, having a good conscience, so that, when you are slandered, those who revile your good conduct in Christ may be put to shame.')),
            verse(17, t('For it is better to suffer for doing good, if that should be God&apos;s will, than for doing evil.')),
            verse(18, t('For '), hp('Christ also suffered once for sins, the righteous for the unrighteous', 'c-christ-justification'), t(', that he might bring us to God, being put to death in the flesh but made alive in the spirit.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-apologia',
          html: 'The defense (<em>apologia</em>) that Peter calls believers to make is not aggressive argument but a ready, gentle explanation for the hope that is in you. The foundation of this readiness is fear of God, not fear of human opposition.',
        },
        {
          kind: 'greek',
          id: 'c-sarx',
          title: 'Sarx — &ldquo;Flesh&rdquo; or &ldquo;Body&rdquo;',
          script: 'σάρξ',
          translit: '<strong>sarx</strong> · flesh, the physical body, or human nature',
          description: 'In 1 Peter 3:18, sarx refers to Christ&apos;s bodily death. The reality of Christ&apos;s physical incarnation and death was essential to the gospel. He did not merely seem to suffer; he truly did.',
        },
        {
          kind: 'greek',
          id: 'c-pneumati',
          title: 'Pneumati — &ldquo;Spirit&rdquo; or &ldquo;Realm of Spirit&rdquo;',
          script: 'πνεύματι',
          translit: '<strong>pneumati</strong> · spirit, the immaterial realm, or the Holy Spirit',
          description: 'Christ was killed in flesh but raised and made alive in the realm of spirit. The resurrection is not resuscitation of a corpse but transformation into a new mode of existence.',
        },
        {
          kind: 'christ',
          id: 'c-christ-justification',
          title: 'Justification Through Christ&apos;s Substitution',
          html: '&ldquo;Christ also suffered once for sins, the righteous for the unrighteous.&rdquo; This is the engine of salvation: the innocent one takes the place of the guilty. Justification is not God ignoring our sin; it is God&apos;s righteous judgment being satisfied through Christ&apos;s sacrifice. We are brought to God—into his presence, reconciled to him—because Christ has borne what we deserve. This transforms everything. You do not suffer to earn God&apos;s favor (Christ earned that for you) but to witness to the gospel that has already saved you.',
        },
        {
          kind: 'reflection',
          id: 'peter3-justified-in-christ',
          prompt: 'How does Christ&apos;s substitutionary suffering change your view of your own struggles? When you face injustice or slander, how can you hold onto the reality that you are already justified in Christ?',
        },
      ],
    },

    {
      ref: '1 Peter 3:18–20 & 20–22',
      title: 'Descent to Sheol and Exaltation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(19, t('and in this he went and proclaimed to the '), hy('spirits in prison', 'c-phylake'), t(',')),
            verse(20, t('who formerly did not obey, when God&apos;s patience waited in the days of Noah, while the ark was being prepared, in which a few, that is, eight persons, were brought safely through water.')),
            verse(21, t('Baptism, which corresponds to this, now saves you, not as a removal of dirt from the body but as an appeal to God for a good conscience, through the resurrection of Jesus Christ,')),
            verse(22, t('who has gone into heaven and is at the right hand of God, with angels, authorities, and powers having been subjected to him.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-phylake',
          html: 'The spirits in prison are those from Noah&apos;s generation who refused God&apos;s patience and warning. Peter sees in Noah&apos;s generation a type of his own: both faced divine word, both faced opposition and scorn. Christ&apos;s proclamation to them was not an offer of salvation but a proclamation of his victory, his vindication, his triumph over all spiritual forces opposed to God.',
        },
        {
          kind: 'greek',
          id: 'c-phylake-def',
          title: 'Phylakē — &ldquo;Prison&rdquo; or &ldquo;Custody&rdquo;',
          script: 'φυλακή',
          translit: '<strong>phylakē</strong> · prison, custody, or the place where prisoners are kept',
          description: 'It refers to the abode of spirits, the realm of the dead. In the context of 1 Peter 3:19, it suggests the spiritual prison where those who rebelled against God are held in judgment.',
        },
        {
          kind: 'greek',
          id: 'c-antitypos',
          title: 'Antitypos — &ldquo;Corresponding To&rdquo; or &ldquo;Antitype&rdquo;',
          script: 'ἀντίτυπος',
          translit: '<strong>antitypos</strong> · corresponding to, or antitype',
          description: 'Something that corresponds to a type or shadow. The ark was a type that foreshadowed deliverance through water; baptism is the antitype, the reality to which the type pointed.',
        },
        {
          kind: 'commentary',
          id: 'c-baptism-saves',
          html: 'Peter makes a bold connection: baptism corresponds to the water that saved Noah. Just as the flood waters both destroyed the disobedient and bore up the righteous in the ark, so baptism is water that saves. But Peter immediately clarifies: baptism is not water-magic that cleanses the skin. It is an appeal to God—a prayer, a request, a covenant petition—for a good conscience.',
        },
        {
          kind: 'christ',
          id: 'c-christ-baptism',
          title: 'Baptism and Resurrection Faith',
          html: 'Baptism is the covenant sign that you have died with Christ (going under the water as a grave) and been raised with him (coming out of the water as resurrection). It connects you to the event that broke death&apos;s power and connects you to the exalted Christ who now reigns. Through baptism, you are inducted into the community of the risen, you appeal to God for a cleansed conscience, and you publicly testify that your ultimate hope rests not in this world but in the resurrection that Christ has won and will apply to all his people.',
        },
        {
          kind: 'christ',
          id: 'c-christ-session',
          title: 'The Session of Christ: Exaltation and Reign',
          html: 'After his work of redemption was complete, Christ ascended to sit at the right hand of the Father (Hebrews 1:3, 8:1). This is the &ldquo;session&rdquo;—the active, ongoing reign of Christ over creation. He is not waiting passively for the end of history; he is actively governing all things. The subjection of all powers to Christ means that no demonic force, no earthly ruler, no cosmic power stands outside his authority. Believers who suffer now do so under the protection and governance of this exalted Lord.',
        },
        {
          kind: 'carry',
          html: 'The descending and ascending Christ enfolds the suffering church. He has gone into the realm of death and returned. He has ascended above all powers and authorities. And now your baptism binds you to him—your death is his death, your resurrection is his resurrection, your vindication is his vindication. You are not ultimately threatened by earthly opposition because you belong to the one who holds all power in heaven and on earth.',
        },
        {
          kind: 'reflection',
          id: 'peter3-baptized-into-christ',
          prompt: 'When you were baptized (or as you consider baptism), what did it mean to appeal to God for a good conscience? How does faith in the exalted, reigning Christ sustain you when facing opposition or injustice?',
        },
        {
          kind: 'artwork',
          matchTitle: /baptism|water|ark|noah|resurrection|exalted|throne/i,
          caption: '1 Peter 3:18–22 · Through Water to Resurrection',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Christ also suffered once for sins, the righteous for the unrighteous, that he might bring us to God.',
    snippet: '1 Peter 3:18',
    ref: 'For Christ also suffered once for sins, the righteous for the unrighteous, that he might bring us to God, being put to death in the flesh but made alive in the spirit.',
  },
};
