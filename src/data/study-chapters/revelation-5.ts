import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Revelation 5 — The Lamb Worthy to Open the Book
 *
 * The climax of John&apos;s vision unfolds: a sealed scroll rests in the Father&apos;s hand—
 * the future, God&apos;s plan for all creation. No creature in heaven, on earth, or under
 * the earth is worthy to open it. John weeps. Then an elder tells him: "Weep not."
 * The Lion of the tribe of Judah has prevailed. But when John looks, he sees not a roaring
 * king—he sees a Lamb, slaughtered, standing at the throne. Through death, Christ is
 * made worthy to rule. Heaven erupts in the hymn that echoes through every age:
 * "Worthy is the Lamb that was slain."
 */
export const REVELATION_5: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 5,

  intros: [
    'Revelation 5 is the Christological climax of John&apos;s entire vision. In God&apos;s right hand is a scroll sealed with seven seals—the future, the unfolding of God&apos;s kingdom plan, the redemption and renewal of all things. But here is the crisis: no one is worthy to open it. Not in heaven, not on earth, not under the earth. The cosmos itself stands frozen.',
    'Into that desperate silence comes a word: "Weep not." The Lion of Judah, the Root of David, has prevailed. He will open the book. But what John sees when he looks is the inversion that makes the gospel: the Lion appears as the Lamb. The only one worthy to rule is the one willing to die. His sacrifice is His qualification. Through death He has conquered. Through the cross He inherits the kingdom.',
    'What follows is heaven&apos;s response—not quiet assent, but an explosion of worship that circles ever outward, from the twenty-four elders to ten thousand times ten thousand angels to every creature in heaven and on earth and under the earth and in the sea. The entire cosmos sings the song that Christ&apos;s redemption makes possible: "Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing."',
  ],

  opener: {
    matchTitle: /(?:lamb|throne|heaven|worship)/i,
    matchArtist: /(?:tissot|rembrandt|raphael)/i,
    caption: 'The Lamb Receives the Scroll',
  },

  sections: [
    /* ─── Revelation 5:1 — The Sealed Book ────────────────────────────── */
    {
      ref: 'Revelation 5:1',
      title: 'The Sealed Book',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              1,
              t('And I saw in the right hand of him that sat on the throne a book written within and on the backside, '),
              hg('sealed with seven seals', 'rev5-seals'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-seals',
          html:
            'The scroll rests in the right hand of the One on the throne—God the Father. It is written inside and outside, suggesting completeness and fullness of content. The seven seals themselves are symbolic—the number seven signals completeness and perfection in Scripture. Seven seals mean the scroll is thoroughly sealed, locked from every angle. Nothing about it is exposed. No one can know its contents until someone worthy opens it. This is the future in God&apos;s hand, the plan in its entirety.',
        },
        {
          kind: 'greek',
          id: 'rev5-biblion',
          title: 'Biblion — Book, Scroll',
          script: 'βιβλίον',
          translit: '<strong>biblion</strong> · a small book or scroll; a written document',
          description:
            'In John&apos;s vision, the biblion is not a casual text but an official document—sealed, authoritative, containing what <em>must come to pass</em>. Ezekiel saw a similar scroll, also full of lament, in his own call to prophecy.',
        },
        {
          kind: 'greek',
          id: 'rev5-sphragis',
          title: 'Sphragis — Seal',
          script: 'σφραγίς',
          translit: '<strong>sphragis</strong> · a seal; that which seals or closes',
          description:
            'A seal in ancient documents represented ownership, authenticity, and authority. To open a sealed document was an act requiring both power and right. The seven seals make the scroll impenetrable—until the One with full authority breaks them.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s plan is sealed in His hand, not scattered on the wind. Whatever uncertainty grips your own future, you are living inside a story whose ending is already written and held by God. The book is sealed not to keep you in darkness forever, but to preserve its purpose until the right moment, under the right hand.',
        },
      ],
    },

    /* ─── Revelation 5:2–4 — "Who is Worthy?" ──────────────────────────── */
    {
      ref: 'Revelation 5:2–4',
      title: '"Who Is Worthy?"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              2,
              t('And I saw a strong angel proclaiming with a loud voice, '),
              hg('Who is worthy to open the book, and to loose the seals thereof', 'rev5-worthy-question'),
              t('?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-worthy-question',
          html:
            'The strong angel doesn&apos;t whisper. He cries out with a loud voice across all creation. The question is cosmic in scope. Heaven is listening. Earth is listening. All creation waits. Who has the power, the right, the worthiness to unseal God&apos;s future? The answer comes back: silence. Complete silence. No one in heaven—not the angels, not the redeemed, not any creature of light. No one on earth—not the powerful, not the wise, not the kings. No one under the earth—not even in the realm of the dead.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              3,
              t('And no man in heaven, nor in earth, neither under the earth, was able to open the book, neither to look thereon.')
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              4,
              t('And '),
              hp('I wept much', 'rev5-weeping'),
              t(', because no man was found worthy to open and to read the book, neither to look thereon.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-weeping',
          html:
            'John&apos;s weeping is not sentimental. It is apocalyptic despair. If no one is worthy to open the scroll, then God&apos;s purposes are locked forever. The future remains sealed. Redemption hangs in suspension. The very plan of God seems to collapse. The entire cosmos is searched and found wanting. No one is worthy. John weeps because the cosmos appears to have reached an impasse.',
        },
        {
          kind: 'christ',
          id: 'rev5-christ-only-worthy',
          title: 'Christ Connection — The Only One Worthy',
          html:
            'No one else. Not Michael, not Gabriel, not all the angels joined together. Not Moses, not David, not any prophet. Not the martyrs in heaven. Only Jesus. Only the Lamb. The angel&apos;s cry exposes the utter exclusivity of Christ&apos;s role in redemption. No substitute exists. No second choice is possible. The universe depends on His worthiness alone.',
        },
        {
          kind: 'reflection',
          id: 'rev5-weeping-question',
          prompt: 'When have you experienced a "sealed book" moment—a future you couldn&apos;t see into, a plan you couldn&apos;t comprehend? How does Jesus&apos; worthiness to open what was sealed speak to that?',
        },
      ],
    },

    /* ─── Revelation 5:5 — The Lion and the Lamb ──────────────────────── */
    {
      ref: 'Revelation 5:5',
      title: 'The Lion and the Lamb',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              5,
              t('And one of the elders saith unto me, Weep not: behold, '),
              hp('the Lion of the tribe of Juda', 'rev5-lion-judah'),
              t(', the '),
              hp('Root of David', 'rev5-root-david'),
              t(', hath '),
              hy('prevailed', 'rev5-nikao'),
              t(' to open the book, and to loose the seven seals thereof.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-lion-judah',
          html:
            'One of the twenty-four elders—representing the redeemed church—approaches John and says: "Weep not." Then comes the proclamation, packed with Old Testament imagery. "The Lion of the tribe of Judah"—that is the kingship language of Genesis 49:9, where Jacob prophesies that Judah will be like a lion, the scepter will not depart from him. The Lion is the symbol of power, conquest, royal authority. Jacob blessed his son Judah: "The sceptre shall not depart from Judah, nor a lawgiver from between his feet, until Shiloh come" (Genesis 49:10). The Lion who comes is the fulfillment of that ancient word. Jesus is the Lion—the One who holds the scepter, the One who comes to rule.',
        },
        {
          kind: 'commentary',
          id: 'rev5-root-david',
          html:
            'The "Root of David" echoes Isaiah 11:10: "And in that day there shall be a root of Jesse, which shall stand for an ensign of the people." Jesus is described as the offspring of David (the branch) and also as the Root of David (the source). He is both the fulfillment of David&apos;s line and the origin of it—He existed before David, sustained all things, and now comes to inherit the throne.',
        },
        {
          kind: 'greek',
          id: 'rev5-nikao',
          title: 'Nikao — Overcome, Prevail',
          script: 'νικάω',
          translit: '<strong>nikao</strong> · to conquer, overcome, prevail',
          description:
            'The Lion has <em>prevailed</em>. This is the language of conquest, of victory won. But what victory? Not on a battlefield—on a cross. The Lamb&apos;s death is His victory. His willingness to be slaughtered is His conquest.',
        },
        {
          kind: 'carry',
          html:
            'You live in a kingdom where the King conquers by love, wins through sacrifice, triumphs through death. The Lion doesn&apos;t roar in your life to terrify you; He approaches with gentleness because He has already won. His victory is not in your defeat; it is in your redemption.',
        },
      ],
    },

    /* ─── Revelation 5:6 — A Lamb as Slain ─────────────────────────────── */
    {
      ref: 'Revelation 5:6',
      title: 'A Lamb as Slain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              6,
              t('And I beheld, and, lo, in the midst of the throne and of the four beasts, and in the midst of the elders, stood '),
              hp('a Lamb as it had been slain', 'rev5-lamb-slain'),
              t(', having '),
              hy('seven horns', 'rev5-horns-eyes'),
              t(' and seven eyes, which are the seven Spirits of God sent forth into all the earth.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-lamb-slain',
          html:
            'And then John <em>sees</em>. What he sees is the inversion of all power in creation. The Lion appears as the Lamb. Standing in the midst of the throne—not removed, not subordinate, but central, at the very heart of power. The Lamb bears the marks of slaughter. This is Jesus as He truly is in heaven: the Lamb who was slain, risen, exalted, yet forever marked by what He endured for us.',
        },
        {
          kind: 'commentary',
          id: 'rev5-horns-eyes',
          html:
            'Seven horns represent complete power—all authority, all dominion, perfected in every direction. Horns are the symbol of strength in Scripture. The Lamb has all power. But this power is exercised through sacrifice, not coercion. Seven eyes represent complete knowledge and vision—all-seeing, all-knowing. The Lamb sees everything that happens in His creation. Nothing escapes His awareness. He rules not blindly but with perfect knowledge of every heart, every need, every prayer. These seven eyes are identified as the seven Spirits of God sent forth into all the earth. Echoing Zechariah 4, the seven Spirits represent the Holy Spirit in His fullness, distributed throughout creation. The Lamb is not isolated in heaven; through the Spirit, His presence and power permeate the whole earth.',
        },
        {
          kind: 'greek',
          id: 'rev5-arnion',
          title: 'Arnion — Lamb',
          script: 'ἀρνίον',
          translit: '<strong>arnion</strong> · lamb; young lamb; innocent sacrifice',
          description:
            'Not a bull, not a king, but a lamb. The word arnion carries the weight of every lamb ever offered in the temple, every Passover sacrifice, the lamb led silently to slaughter in Isaiah 53. Jesus is the Lamb—innocent, willing, utterly giving.',
        },
        {
          kind: 'christ',
          id: 'rev5-lamb-isa53',
          title: 'Christ Connection — The Lamb Led to Slaughter',
          html:
            'Isaiah 53:7—"He is brought as a lamb to the slaughter." What Isaiah prophesied about a suffering servant, John now sees fulfilled and exalted. The Lamb who was silent before His shearers is now the Lamb at the center of God&apos;s throne, holding all power and knowledge and the very Spirit of God. His death was not His defeat; it was His enthronement.',
        },
        {
          kind: 'reflection',
          id: 'rev5-lamb-reflection',
          prompt: 'What does it mean to you that the One with all power and knowledge chose to come as a lamb—vulnerable, willing to die? How does His sacrifice change the way you understand power?',
        },
      ],
    },

    /* ─── Revelation 5:7–10 — The New Song ──────────────────────────────── */
    {
      ref: 'Revelation 5:7–10',
      title: 'The New Song',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              7,
              t('And he came and took the book out of the right hand of him that sat upon the throne.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-takes-book',
          html:
            'The Lamb moves forward. He takes the scroll from the Father&apos;s hand. The future, God&apos;s plan, the redemption of all things—now it is in the Lamb&apos;s hand. This is not usurpation. This is the Father&apos;s perfect will and joy. The Son receives what the Father has always intended to give Him.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              8,
              t('And when he had taken the book, the four beasts and four and twenty elders fell down before the Lamb, having every one of them harps, and golden vials full of '),
              hg('odours, which are the prayers of saints', 'rev5-prayers-incense'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-prayers-incense',
          html:
            'The moment the Lamb takes the book, all heaven responds. The four living creatures (representing all creation—lion, ox, man, eagle) and the twenty-four elders (representing the redeemed church) fall down in worship. This is not grudging obedience. This is the spontaneous adoration of those who have been saved by Him. They hold harps—the instruments of praise—and golden vials filled with incense, which are the prayers of the saints. Your prayers, my prayers, every prayer ever prayed by a believer—they rise like incense before God&apos;s throne. And now, as the Lamb takes the scroll, those prayers themselves become part of the worship. What we have asked for is about to be granted. What we have prayed for is about to be accomplished.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              9,
              t('And they sung a '),
              hy('new song', 'rev5-new-song'),
              t(', saying, '),
              hp('Thou art worthy to take the book, and to open the seals thereof', 'rev5-worthy-thou'),
              t(': for thou wast slain, and hast redeemed us to God by thy blood out of every kindred, and tongue, and people, and nation;')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'rev5-new-song',
          title: 'Od&#275; Kain&#275; — New Song',
          script: 'ᾠδὴ καινή',
          translit: '<strong>od&#275; kain&#275;</strong> · new song; a song never sung before',
          description:
            'This is not an old hymn, repeated from the ages. This is a new song, made possible only by what the Lamb has accomplished. It has never been sung until now because only now—after the Lamb&apos;s death and exaltation—is this song true.',
        },
        {
          kind: 'commentary',
          id: 'rev5-worthy-thou',
          html:
            'Notice the pronoun: <em>Thou</em> art worthy. Not "God is worthy." Not "the Father is worthy." But <em>you</em>—the Lamb, Jesus Christ—<em>thou</em> art worthy. He receives the direct address of worship. He is the focus of heaven&apos;s song. The reason for His worthiness: "Thou wast slain, and hast redeemed us to God by thy blood." His death is His qualification. His blood is His power. Through His sacrifice, redemption flows. And look at the scope: "out of every kindred, and tongue, and people, and nation." His redemption is universal. No group is excluded. No language is foreign to His salvation. Every tribe, every tongue, every people, every nation—all are included in the scope of His redeeming work.',
        },
        {
          kind: 'christ',
          id: 'rev5-christ-blood-redemption',
          title: 'Christ Connection — Redemption by Blood',
          html:
            'Peter writes, "Forasmuch as ye know that ye were not redeemed with corruptible things, as silver and gold... but with the precious blood of Christ, as of a lamb without blemish and without spot" (1 Peter 1:18–19). The Lamb&apos;s blood is redemption&apos;s price. His willingness to shed that blood is what makes Him worthy of all power, all riches, all wisdom, all strength, all honor, all glory, and all blessing.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              10,
              t('And hast made us unto our God '),
              hg('kings and priests', 'rev5-kings-priests'),
              t(': and we shall reign on the earth.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-kings-priests',
          html:
            'By His blood, the Lamb has made us kings and priests. We are given a royal dignity and a sacred calling. We are to reign on the earth. This is not escapism, not a hope that floats above creation. This is the promise that what was lost in Eden—humanity&apos;s responsible rule under God—is now restored and renewed through Christ. We will have a real role in the renewed creation.',
        },
        {
          kind: 'carry',
          html:
            'The Lamb has made you a king and a priest. Not in some distant, abstract sense, but as a real reality—one you will fully inhabit in the age to come, and one you begin to inhabit now. What does it mean to live as a priest today? To stand between God and a world that doesn&apos;t yet know Him. To offer intercession. To carry the presence of God into the places you go. To live set apart, but not separated—set apart <em>for</em> the world God loves.',
        },
        {
          kind: 'reflection',
          id: 'rev5-kings-priests-reflection',
          prompt: 'The Lamb has made you a king and a priest. What does that calling look like in your daily life? Where are you meant to reign? Whom are you meant to intercede for?',
        },
      ],
    },

    /* ─── Revelation 5:11–13 — Ten Thousand Times Ten Thousand ────────── */
    {
      ref: 'Revelation 5:11–13',
      title: 'The Cosmic Chorus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              11,
              t('And I beheld, and I heard the voice of many angels round about the throne and the beasts and the elders: and the number of them was '),
              hy('ten thousand times ten thousand, and thousands of thousands', 'rev5-myriads'),
              t(';')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'rev5-myriads',
          title: 'Myriades — Ten Thousand',
          script: 'μυριάδες',
          translit: '<strong>myriades</strong> · myriads; ten thousands; innumerable multitudes',
          description:
            'A myriad is the largest number with a specific name in the ancient world. To speak of myriads of myriads is to speak beyond number, beyond counting, beyond comprehension. Every angel that has ever been created joins the worship. The hymn spreads outward. Not just the elders and the creatures, but now the angels. And not a handful—ten thousand times ten thousand. That is ten thousand to the second power. Plus thousands of thousands. The number is incomprehensible, beyond counting. It is infinity. All of heaven joins the song.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              12,
              t('Saying with a loud voice, '),
              hg('Worthy is the Lamb that was slain', 'rev5-worthy-lamb'),
              t(' to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-worthy-lamb',
          html:
            'Seven attributes are listed: power, riches, wisdom, strength, honor, glory, blessing. Seven—again the number of completeness and perfection. The Lamb receives <em>all</em> these attributes in full. There is nothing He does not receive. Nothing is withheld. All of heaven&apos;s worship and adoration and blessing is poured out upon Him.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              13,
              t('And every creature which is in heaven, and on the earth, and under the earth, and such as are in the sea, and all that are in them, heard I saying, '),
              hp('Blessing, and honour, and glory, and power, be unto him that sitteth upon the throne, and unto the Lamb for ever and ever', 'rev5-universal-worship'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-universal-worship',
          html:
            'Now the circle expands to encompass all creation. Every creature—not just the conscious, not just the redeemed, but every creature—heaven, earth, under the earth, sea. All of them, together, join the song. This is the eschatological vision: the day when all creation, finally, will acknowledge who Jesus is and what He has done. The universe itself will sing His praise. Notice the crucial words: blessing, honor, glory, and power belong "unto him that sitteth upon the throne, and unto the Lamb for ever and ever." The Father and the Son share the worship equally. They are not rivals; they are not subordinate to one another. Both are God. Both receive the adoration of all creation, forever.',
        },
        {
          kind: 'christ',
          id: 'rev5-christ-father-equal',
          title: 'Christ Connection — Worship Shared with the Father',
          html:
            'This is the vision of Christ&apos;s full divinity and His eternal, coequal glory with the Father. Psalm 72:19 declares, "Blessed be the Lord God of Israel... and let the whole earth be filled with his glory; Amen, and Amen." And yet Revelation 5:13 declares that the same worship belongs to both the Father on the throne and to the Lamb forever and ever. Jesus Christ is God.',
        },
        {
          kind: 'carry',
          html:
            'All creation will one day join the song. But you need not wait. You can join it now. The worship that fills heaven is available to you today. Not as a distant echo, but as a real participation. When you acknowledge Christ&apos;s worthiness, when you bend your will to His, when you speak His praise—you are joining the song that has already begun in heaven and will never end.',
        },
        {
          kind: 'artwork',
          matchTitle: /(?:throne|heaven|worship)/i,
          matchArtist: /(?:tissot|blake|rembrandt)/i,
          caption: 'Revelation 5:11–13 · All Creation Worships',
        },
      ],
    },

    /* ─── Revelation 5:14 — The Amen ──────────────────────────────────────── */
    {
      ref: 'Revelation 5:14',
      title: 'The Amen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              14,
              t('And the four beasts said, '),
              hg('Amen', 'rev5-amen'),
              t(': and the four and twenty elders fell down and worshipped him that liveth for ever and ever.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev5-amen',
          html:
            'The hymn closes with Amen—"let it be so." The creatures, the elders, all of heaven agrees: Yes. This is true. This is right. This is what should be. The Lamb is worthy. The Lamb receives all power and all worship. So be it. The chapter ends not with questions but with the resounding affirmation of all created things: Amen. When you add your voice to this Amen, you are not adding a whisper to an already complete song. You are joining your "yes" to the yes of heaven. Your agreement with Christ&apos;s worthiness matters. Your worship joins the worship of ten thousand times ten thousand angels and all creation. You are never insignificant in the kingdom. Your Amen echoes through eternity.',
        },
        {
          kind: 'reflection',
          id: 'rev5-amen-reflection',
          prompt: 'What would it change in your daily life if you truly believed that the Lamb is worthy of all power, riches, wisdom, strength, honor, glory, and blessing? Where would you need to say Amen to His lordship today?',
        },
        {
          kind: 'artwork',
          matchTitle: /(?:heaven|dore|blake)/i,
          matchArtist: /(?:dore|blake|rembrandt)/i,
          caption: 'Revelation 5:14 · Amen',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 5 · Study Guide',
  },
};
