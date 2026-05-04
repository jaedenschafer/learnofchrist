import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 3 John — Truth & Hospitality
 *
 * The elder writes to Gaius, whom he loves in truth. John rejoices that Gaius
 * walks in truth and shows faithful hospitality to traveling missionaries. Yet
 * Diotrephes—ambitious and controlling—refuses to welcome them and casts out
 * those who do. Demetrius is commended for his good report. John calls the
 * church to imitate good, not evil; to know God by the fruit of their lives.
 *
 * Three character snapshots frame the entire letter: Gaius (beloved host),
 * Diotrephes (prideful gatekeeper), Demetrius (well-spoken-of servant).
 */
export const THIRD_JOHN_1: RichChapterContent = {
  bookSlug: '3-john',
  bookName: '3 John',
  chapter: 1,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 13 },
  opener: {
    matchTitle: /The Death of the/i,
    caption: '3 John 1',
  },
  intros: [
    '3 John is the most personal letter in the New Testament—a warm, direct note from an aging apostle to a young believer he loves. John writes to Gaius, a man known for faithfulness to truth and generosity to the brothers. But a problem has taken root: Diotrephes, a leader consumed by his own importance, refuses to welcome John&apos;s representatives and even casts out those who show them hospitality.',
    'The letter opens with affirmation, turns to admonition, and closes with commendation. In fourteen verses, John sketches three kinds of people: Gaius the faithful, Diotrephes the prideful, and Demetrius the well-spoken-of. It is a snapshot of every church—some humble and open, some ambitious and closed. John&apos;s call is clear: imitate good, not evil. He that doeth good is of God.',
  ],

  sections: [
    /* ─── 3 John 1–2: Greeting & Wellbeing ───────────────────────────── */
    {
      ref: '3 John 1–2',
      title: 'The Elder to His Beloved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(1, t('The elder unto the wellbeloved Gaius, whom I love in the '), hy('truth', '3j-truth-intro'), t('.')),
            verse(2, t('Beloved, I wish above all things that thou mayest '), hy('prosper and be in health', '3j-prosper'), t(', even as thy soul prospereth.')),
          ],
        },
        {
          kind: 'commentary',
          id: '3j-truth-intro',
          html:
            'John opens with affection and precision. He loves Gaius &ldquo;in the truth.&rdquo; Not in sentiment or nostalgia, but in shared conviction about Christ. Truth is the bedrock of their friendship. John&apos;s greeting sets the tone: this is a letter from the church&apos;s teacher to a faithful student, a relationship rooted in the gospel[res:sefaria-leviticus-19][res:perseus-philoxenia][res:intertextual-hospitality].',
        },
        {
          kind: 'commentary',
          id: '3j-prosper',
          html:
            'Notice the double wish. John prays for Gaius&apos; physical health and material provision. The life of faith is not life after death only; it matters now. But the prayer makes clear which prosperity matters most: even as thy soul prospereth. Spiritual health is the foundation. Everything else is secondary.',
        },
        {
          kind: 'greek',
          id: '3j-psyche',
          title: 'Psychē — &ldquo;soul&rdquo;',
          script: 'ψυχή',
          translit: '<strong>psy-chē</strong> · the seat of life, emotion, and will',
          description:
            'For John, the soul is the true self—your will, your capacity to love, your inner orientation toward God. To prosper in soul is to be well in the place that matters eternally. Physical health fades; the health of your spirit echoes forever.',
        },
        {
          kind: 'carry',
          html:
            'This is how John prays. Not &ldquo;I hope things go well&rdquo; but a specific blessing: flourish in your body, yes, but flourish <em>first</em> in your soul. What would change if that became your prayer for those you love? Not wishing them success or comfort only, but asking God to deepen their faith, their trust, their inner peace in Him.',
        },
      ],
    },

    /* ─── 3 John 3–4: Joy in Truth & Faithfulness ────────────────────── */
    {
      ref: '3 John 3–4',
      title: 'I Have No Greater Joy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(3, t('For I rejoiced greatly, when the brethren came and testified of the '), hp('truth that is in thee', '3j-truth-walk'), t(', even as thou '), hy('walkest in the truth', '3j-walk-truth'), t('.')),
            verse(4, t('I have no greater '), hg('joy than to hear', '3j-joy'), t(' that my children '), hy('walk in truth', '3j-walk-truth'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: '3j-truth-walk',
          html:
            'The brethren have brought John a report—and it delights him. Gaius doesn&apos;t just believe the truth intellectually. The truth is <em>in him</em>, woven into who he is, visible in how he lives. His faith is not private; it shows. It is recognizable.',
        },
        {
          kind: 'greek',
          id: '3j-aletheia',
          title: 'Alētheia — &ldquo;truth&rdquo;',
          script: 'ἀλήθεια',
          translit: '<strong>a-lē-thei-a</strong> · reality, genuineness, the true nature of things',
          description:
            'For John, truth is not just right doctrine. It is reality—the way things actually are in God. To walk in truth is to align your life with that reality, to let the gospel shape how you actually live.',
        },
        {
          kind: 'commentary',
          id: '3j-joy',
          html:
            'Here is the deepest pastoral joy: watching young believers live out their faith. Not that they have the right beliefs, but that they actually walk them out. That their love is real. That their hospitality costs them something. That they choose the harder good. This is what makes an elder&apos;s heart sing.',
        },
        {
          kind: 'christ',
          id: '3j-truth-in-thee',
          title: 'Christ Connection — Living Truth',
          html:
            'Jesus said, &ldquo;I am the way, the truth, and the life&rdquo; (John 14:6). To have truth in you is to have Christ in you—not as a concept, but as a reality that changes how you show up. When John sees Gaius living out his faith, he is seeing Jesus work through him. This is what incarnational faith looks like.',
        },
        {
          kind: 'carry',
          html:
            'What would your life look like if someone described it as &ldquo;the truth that is in thee&rdquo;? Not that you have beliefs, but that truth lives in you—shapes your choices, your generosity, your words, the way you treat the person no one is watching you with? That is the kind of faith that makes someone&apos;s elder heart sing.',
        },
        {
          kind: 'reflection',
          id: '3j-walk-truth',
          prompt: 'When someone observes you, what truth do they see lived out? Where is your belief still just belief, not yet life?',
        },
      ],
    },

    /* ─── 3 John 5–8: The Faithful Host ──────────────────────────────── */
    {
      ref: '3 John 5–8',
      title: 'Gaius the Faithful Host',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(5, t('Beloved, thou doest faithfully whatsoever thou doest to the brethren, and to strangers; Which have borne '), hy('witness of thy charity', '3j-charity'), t(' before the church:')),
            verse(6, t('Whom if thou '), hp('bring forward on their journey after a godly sort', '3j-mission'), t(', thou shalt do well: Because that '), hp('for his name&apos;s sake', '3j-his-name'), t(' they went forth, taking nothing of the Gentiles.')),
            verse(7, t('We therefore ought to receive such, that we might be '), hg('fellowhelpers to the truth', '3j-partnership'), t('.')),
            verse(8, t('I therefore that I have written unto the church: but Diotrephes, who loveth to have the preeminence among them, receiveth us not.')),
          ],
        },
        {
          kind: 'commentary',
          id: '3j-charity',
          html:
            'John commends Gaius for his practical faithfulness. He shows &ldquo;charity&rdquo;—not sentimental kindness, but working love. He helps strangers, even. This is not virtue-signaling; the brethren themselves have testified of it. His generosity is known.',
        },
        {
          kind: 'greek',
          id: '3j-agape',
          title: 'Agapē — &ldquo;charity, love&rdquo;',
          script: 'ἀγάπη',
          translit: '<strong>a-gä-pē</strong> · self-giving love, the highest form of love',
          description:
            'Agape is not sentimental. It is the love that pays a cost to care for another. When Gaius receives the brothers and provides for their journey, he is practicing agape—love that looks past whether it is convenient.',
        },
        {
          kind: 'commentary',
          id: '3j-mission',
          html:
            'These traveling missionaries went out "taking nothing of the Gentiles"—relying on the hospitality of believers rather than on pagan support. To send them forward "after a godly sort" is to equip them well, to resource their mission, to participate in their work.',
        },
        {
          kind: 'christ',
          id: '3j-his-name',
          title: 'Christ Connection — For His Name&apos;s Sake',
          html:
            'These men went out &ldquo;for his name&apos;s sake,&rdquo; for Christ&apos;s name. In Matthew 28:19, Jesus sends the disciples with the same mission: &ldquo;Go ye therefore, and teach all nations… teaching them to observe all things whatsoever I have commanded you.&rdquo; When Gaius helps them, he is partnering with the Great Commission itself. His hospitality is not charity; it is mission.',
        },
        {
          kind: 'commentary',
          id: '3j-partnership',
          html:
            'John gives the theology of hospitality: &ldquo;We ought to receive such, that we might be fellowhelpers to the truth.&rdquo; To host a missionary is to become a partner in the gospel work. Gaius&apos; table is not separate from ministry; it is ministry.',
        },
        {
          kind: 'carry',
          html:
            'Hospitality, in John&apos;s eyes, is not a spiritual discipline only for those with certain temperaments. It is the work of the kingdom—a way of saying yes to God&apos;s mission with your home, your table, your resources. Whoever you receive, if they are going out for Christ&apos;s name&apos;s sake, you are a fellowhelper to the truth.',
        },
      ],
    },

    /* ─── 3 John 9–10: Diotrephes the Prideful ────────────────────────── */
    {
      ref: '3 John 9–10',
      title: 'Diotrephes Loveth to Have the Preeminence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(9, t('I wrote unto the church: but Diotrephes, who '), hg('loveth to have the preeminence', '3j-preeminence'), t(' among them, receiveth us not.')),
            verse(10, t('Wherefore, if I come, I will remember his deeds which he doeth, '), hy('prating against us with malicious words', '3j-prate'), t(': and not content therewith, neither doth he himself receive the brethren, and forbiddeth them that would, and '), hg('casteth them out of the church', '3j-cast-out'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: '3j-preeminence',
          html:
            'Diotrephes is a study in ego. He wants to have the first place, the highest position. This is not uncommon in church leadership—someone with gifts and drive who begins to confuse his role with his identity. His hunger for honor becomes his ruling passion.',
        },
        {
          kind: 'greek',
          id: '3j-philoproteuo',
          title: 'Philoprōteuō — &ldquo;to love to be first&rdquo;',
          script: 'φιλοπρωτεύω',
          translit: '<strong>phil-o-pro-teu-ō</strong> · to desire to have the chief place',
          description:
            'Only John uses this word. It captures a particular kind of pride—not just wanting respect, but <em>needing</em> to be first. It is ambition that cannot tolerate challenge or oversight.',
        },
        {
          kind: 'commentary',
          id: '3j-prate',
          html:
            'Diotrephes does not simply refuse John; he speaks maliciously against him. He attacks the apostle&apos;s reputation with careless words. This is the next step: when control is challenged, the prideful resort to character assassination.',
        },
        {
          kind: 'greek',
          id: '3j-phluareo',
          title: 'Phluareō — &ldquo;to prate, to talk idly&rdquo;',
          script: 'φλυαρέω',
          translit: '<strong>phlu-a-rē-ō</strong> · to speak malicious nonsense, to prattle against',
          description:
            'His words are not just angry; they are hollow—empty attacks meant to wound without substance. This is how pride speaks when it is threatened: loud, bitter, and without real argument.',
        },
        {
          kind: 'commentary',
          id: '3j-cast-out',
          html:
            'The final step: Diotrephes not only refuses to welcome the brothers—he forbids others from welcoming them and casts out those who do. This is not leadership; this is manipulation and control. He has weaponized his position.',
        },
        {
          kind: 'christ',
          id: '3j-diotrephes-opposite',
          title: 'Christ Connection — The Opposite of Servant Leadership',
          html:
            'Jesus taught His disciples: &ldquo;Whosoever will be chief among you, let him be your servant&rdquo; (Matt. 20:27). Diotrephes does the opposite. He hoards authority, punishes dissent, and casts out the innocent to protect his position. His kingdom is built on fear, not love. And Jesus says such kingdoms collapse.',
        },
      ],
    },

    /* ─── 3 John 11–12: Follow Good; Beware Evil ────────────────────── */
    {
      ref: '3 John 11–12',
      title: 'Follow Not That Which Is Evil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(11, t('Beloved, '), hg('follow not that which is evil', '3j-follow-good'), t(', but '), hg('that which is good', '3j-follow-good'), t('. He that doeth good is of God: but '), hy('he that doeth evil hath not seen God', '3j-seen-god'), t('.')),
            verse(12, t('Demetrius hath '), hg('good report of all men', '3j-demetrius'), t(', and of the truth itself: yea, and we also bear record; and ye know that our record is true.')),
          ],
        },
        {
          kind: 'commentary',
          id: '3j-follow-good',
          html:
            'John gives the plainest of verdicts: watch carefully how people live. Follow the pattern of good. Not because it is always easier or more rewarded in this world, but because it is the truth about reality. Good is of God. Evil is not.',
        },
        {
          kind: 'commentary',
          id: '3j-seen-god',
          html:
            'This is a stark statement: &ldquo;He that doeth evil hath not seen God.&rdquo; Not "will not see God," but "has not seen"—has no real acquaintance with Him. If you know God, your life will show it. If you do not know Him, that too will show.',
        },
        {
          kind: 'greek',
          id: '3j-agathos',
          title: 'Agathos — &ldquo;good&rdquo;',
          script: 'ἀγαθός',
          translit: '<strong>a-ga-thos</strong> · good, useful, kind; that which benefits',
          description:
            'Good, for John, is not abstract. It is kindness, hospitality, faithfulness—love shown through action. Evil is the opposite: pride, control, cruelty. The question is not &ldquo;what do they believe?&rdquo; but &ldquo;how do they treat people?&rdquo;',
        },
        {
          kind: 'commentary',
          id: '3j-demetrius',
          html:
            'John holds up Demetrius as the counterpoint to Diotrephes. Demetrius has a good report from all—even from the world, which judges by a clear standard: Does this person treat people well? Is he honest? Is he kind? The answer for Demetrius is yes.',
        },
        {
          kind: 'christ',
          id: '3j-fruits-ye-know',
          title: 'Christ Connection — By Their Fruits Ye Shall Know Them',
          html:
            'Jesus said, &ldquo;By their fruits ye shall know them. A good tree bringeth forth good fruit; but a corrupt tree bringeth forth evil fruit&rdquo; (Matt. 7:16–17). John is applying that truth directly. You want to know who knows God? Watch what they do. Gaius serves; Diotrephes controls. Demetrius helps; Diotrephes harms. The fruit is visible.',
        },
        {
          kind: 'carry',
          html:
            'This is permission to trust your discernment. You do not need to be naive about people. The proof of the gospel is not in what anyone claims to believe but in how they actually live. Do they build others up or tear them down? Do they open doors or close them? Do they serve or demand to be served? That fruit tells you everything.',
        },
        {
          kind: 'reflection',
          id: '3j-imitate-good',
          prompt: 'In your own life right now, are you more drawn toward imitating Gaius, Demetrius, or Diotrephes? What would change if you consciously imitated the good?',
        },
      ],
    },

    /* ─── 3 John 13–14: Closing & Peace ────────────────────────────── */
    {
      ref: '3 John 13–14',
      title: 'Peace & Face to Face',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(13, t('I had many things to write, but I will not with ink and pen write unto thee:')),
            verse(14, t('But I trust I shall shortly see thee, and we shall speak '), hp('face to face', '3j-face-to-face'), t('. '), hg('Peace be to thee', '3j-peace'), t('. Our friends salute thee. Greet the friends by name.')),
          ],
        },
        {
          kind: 'commentary',
          id: '3j-face-to-face',
          html:
            'Even in a fourteen-verse letter, John is not done. But he reserves the deepest things—the kind that cannot be fully captured in ink—for face-to-face conversation. There is a wisdom here: some things demand presence. Some truths are better spoken in person, where you can see someone&apos;s face and know you are heard.',
        },
        {
          kind: 'carry',
          html:
            'We live in the age of written words. Messages, emails, texts. But John reminds us that the deepest communication happens in presence. When you have something tender to say, something that needs real understanding—put down the pen. Show up. Let them see your face. Let the conversation breathe.',
        },
        {
          kind: 'christ',
          id: '3j-face-to-face-2',
          title: 'Christ Connection — Face to Face',
          html:
            'John was one of the few who saw Jesus face to face. He will see Him again. Paul writes, &ldquo;Now we see through a glass, darkly; but then face to face&rdquo; (1 Cor. 13:12). Every time believers gather in person, they taste that promise—the day when Jesus will look us in the eye and say our name.',
        },
        {
          kind: 'commentary',
          id: '3j-peace',
          html:
            'The letter ends with "Peace be to thee." Not &ldquo;I hope you are well.&rdquo; A blessing—a prayer that God&apos;s peace, His shalom, His wholeness, would rest on Gaius. It is how Jesus always left His people: with peace.',
        },
        {
          kind: 'carry',
          html:
            'This is how it ends: with affection, with the promise of soon seeing each other, with a blessing of peace. Not with a list of problems, not with shame, but with love. That is how John leads. That is how Christ leads. The rebuke for Diotrephes was real, but the letter closes not with the rebuke but with peace spoken over the faithful.',
        },
        {
          kind: 'reflection',
          id: '3j-blessing',
          prompt: 'Who needs you to send them a word of peace right now? What would it look like to speak blessing over them?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'artwork',
          matchTitle: /hospitality|inn|room|ancient.*host|host.*ancient|supper|fellowship/i,
          caption: '3 John — Welcome & Hospitality',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The elder unto the wellbeloved Gaius, whom I love in the truth. I have no greater joy than to hear that my children walk in truth. Beloved, follow not that which is evil, but that which is good. He that doeth good is of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 John · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-leviticus-19',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 19 (Holiness & Love)',
      url: 'https://www.sefaria.org/Leviticus.19',
      description: 'The Old Testament foundation for hospitality and love of neighbor, emphasizing practical care and ethical living within the community.',
    },
    {
      id: 'perseus-philoxenia',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'φιλοξενία (philoxenia)',
      url: 'https://scaife.perseus.org/lexicon/entry/greek-lsj-φιλοξενία/1',
      description: 'Greek lexicon entry for philoxenia (hospitality/love of strangers), the central virtue Gaius exemplifies in his care for traveling missionaries.',
    },
    {
      id: 'intertextual-hospitality',
      kind: 'archive',
      source: 'Intertextual Bible',
      label: 'Hospitality in Scripture',
      url: 'https://www.intertextual.bible/search?q=hospitality',
      description: 'Cross-references to hospitality practices from Old Testament to the epistles, showing how welcoming strangers is an expression of faith and love.',
    },
  ],

  hasHebrew: false,
};
