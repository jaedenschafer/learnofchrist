import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 1 — The Ascension and the Promise of Power
 *
 * Jesus appears to His disciples for forty days after His resurrection,
 * speaking of the kingdom of God. Then, in the presence of many witnesses,
 * He is taken up into heaven. Before He goes, He leaves them with a promise:
 * "Ye shall receive power, after that the Holy Ghost is come upon you."
 * The chapter closes with the disciples gathering in Jerusalem, obedient,
 * waiting for that promise to be fulfilled.
 */
export const ACTS_1: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 1,

  estimatedMinutes: { beginner: 8, intermediate: 15, deep: 19 },
  intros: [
    'The Book of Acts opens not with doctrine, but with a risen Lord. Jesus has walked out of the tomb alive, flesh and bone, eating fish and speaking truth. For forty days He moves among His disciples, appearing and disappearing, teaching them about the kingdom of God. The resurrection is not a distant theological claim—it is a lived reality the disciples are being remade by. They touch His wounds. They sit and eat with Him. And in all that teaching, the central theme holds: the kingdom is not about earthly authority or political restoration, but about God&apos;s rule breaking into the world through the gift of the Spirit.',
    'Before His final departure, Jesus presses that promise into their hands: "Ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me." The disciples stand watching Him disappear into a cloud, and angels redirect them: why stand ye gazing? You have work to do. Not in the heavens, but on the earth. Not in a distant future, but beginning now, beginning here, beginning with Jerusalem.',
    'One hundred twenty believers gather, obedient to the command to wait. They move together without the slightest tension over Judas&apos;s empty chair. They pray. They cast lots. They choose Matthias. The scene closes not with confusion or fear, but with a company united, faithful, ready. The stage is set. The promise is about to break open.',
  ],

  opener: {
    matchTitle: /ascension/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Acts 1:1–3 — The Prologue: Testimony and Resurrection ─────────────── */
    {
      ref: 'Acts 1:1–3',
      title: 'Prologue: The Risen Lord Appears',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              1,
              t('The former treatise have I made, O Theophilus, of all that Jesus began both to do and teach,'),
            ),
            verse(
              2,
              t('Until the day in which he was taken up, after that he through the Holy Ghost had given commandments unto the apostles whom he had chosen:'),
            ),
            verse(
              3,
              t('To whom also he shewed himself alive after his passion by many infallible proofs, being seen of them forty days, and speaking of the things pertaining to the '),
              hg('kingdom of God', 'acts1-basileia'),
              t(':'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts1-beginning',
          html:
            'Acts opens by naming itself as a continuation[res:intertextual-luke-acts-continuity]. Luke, the author, has already written a Gospel—the former treatise about what Jesus "began" to do and teach. But what Jesus began on earth, He continues from heaven. The resurrection is not the end of His work. It is the shift from visible to invisible, from earthly to cosmic. The disciples will soon learn that His power is not diminished by His absence, but multiplied through the Spirit.',
        },
        {
          kind: 'greek',
          id: 'acts1-basileia',
          title: 'Basileia — Kingdom',
          script: 'βασιλεία',
          translit: '<strong>basileia</strong> · kingdom; rule; reign; sovereignty',
          description:
            'In Acts, <em>basileia</em> does not mean a physical territory you can point to on a map. It means the active reign of God, the breaking in of His rule into human affairs. Jesus teaches about this for forty days—not about when the political kingdom of Israel will be restored, but about how God&apos;s kingdom is already present and will spread to the ends of the earth.',
        },
        {
          kind: 'commentary',
          id: 'acts1-forty-days',
          html:
            'Forty days. It is a number heavy with biblical weight—the flood lasted forty days, Israel wandered forty years in the wilderness, Jesus fasted forty days in the desert. These are not idle gaps in the story. They mark spaces where God remakes His people. For forty days the disciples are being remade by the sight of the risen Lord. They are learning to see Him differently—not as the rabbi from Galilee, but as the one whose kingdom is cosmic, whose authority flows through heaven and earth.',
        },
        {
          kind: 'carry',
          html:
            'If the resurrection were only theological—only true as doctrine—the disciples could have learned it from a dream or an angel&apos;s message. But Jesus appears in the flesh. He eats. He speaks. He teaches. He lets them touch. The reality of His victory is being sunk into their bodies and their memory so deeply they will be willing to die rather than deny it. Wherever you are learning to trust Jesus&apos; resurrection power in your own life, He is equally real, equally present, equally teaching you.',
        },
        {
          kind: 'reflection',
          id: 'acts1-risen',
          prompt:
            'What would change if you moved from believing in the resurrection as a past event to experiencing it as the present power that makes all of Jesus&apos; promises real?',
        },
      ],
    },

    /* ─── Acts 1:4–8 — The Promise of the Spirit ──────────────────────── */
    {
      ref: 'Acts 1:4–8',
      title: 'The Promise of the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              4,
              t('And, being assembled together with them, '),
              hg('commanded them that they should not depart from Jerusalem', 'acts1-tarry'),
              t(', but wait for the promise of the Father, which, saith he, ye have heard of me.'),
            ),
            verse(
              5,
              t('For John truly baptized with water; but ye shall be '),
              hp('baptized with the Holy Ghost not many days hence', 'acts1-christ-spirit'),
              t('.'),
            ),
            verse(
              6,
              t('When they therefore were come together, they asked of him, saying, Lord, wilt thou at this time restore again the kingdom to Israel?'),
            ),
            verse(
              7,
              t('And he said unto them, It is not for you to know the times or the seasons, which the Father hath put in his own power.'),
            ),
            verse(
              8,
              t('But ye shall receive '),
              hy('power, after that the Holy Ghost is come upon you', 'acts1-dunamis'),
              t(': and ye shall be '),
              hg('witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth', 'acts1-witness'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts1-tarry',
          html:
            'Jesus commands them to stay. Not to run, not to hide, not to go back to their old trades. Stay here, in Jerusalem, in the city where they have just watched Him be executed. Stay in the very place most dangerous to them. This is not cowardice but obedience. The resurrection power they have seen is about to become their own, and they will need it in that very city.',
        },
        {
          kind: 'commentary',
          id: 'acts1-kingdom-question',
          html:
            'The disciples ask the deeply human question: "Wilt thou at this time restore again the kingdom to Israel?" They are still thinking of kingdoms as borders and armies, as thrones and tributaries. They are still hoping for the kind of power that can be pointed at on a map. Jesus does not answer their specific question. He redirects it. That kind of power is not yours to know about. But <em>this</em> kind of power—the power to speak my name from city to city, from nation to nation, the power to heal and forgive and multiply—that is for you, and it is coming soon.',
        },
        {
          kind: 'greek',
          id: 'acts1-dunamis',
          title: 'Dunamis — Power',
          script: 'δύναμις',
          translit: '<strong>dunamis</strong> · power; ability; strength; mighty work',
          description:
            'Dunamis is not power as coercion or domination. It is power as divine enablement—the capacity to perform mighty works in the Spirit&apos;s strength. The disciples receive this power not to rule kingdoms but to witness. The power that raises the dead, heals the sick, and breaks through human resistance flows through them, not from them.',
        },
        {
          kind: 'commentary',
          id: 'acts1-witness',
          html:
            'The mission geography is spelled out before any miracle happens[res:penn-museum-apostles-witness]. Jerusalem, Judaea, Samaria, the uttermost parts of the earth. The gospel does not stay put. It spreads outward in concentric circles, from the familiar to the foreign, from the comfortable to the dangerous. The disciples will soon see this pattern play out in their own lives—persecution scattering them, spreading the seed far from home.',
        },
        {
          kind: 'christ',
          id: 'acts1-christ-spirit',
          title: 'Christ Connection — Baptism with the Holy Ghost',
          html:
            'Jesus says John baptized with water—an external, temporary sign. But you will be baptized with the Holy Ghost—an internal, permanent reality. Then He ascends. To the disciples watching, it must feel like abandonment. But He is not leaving them. He is stepping out of the way so the Spirit can come in. The pattern is true for us: His absence in the flesh is the condition for His presence in the Spirit. "It is expedient for you that I go away: for if I go not away, the Comforter will not come unto you" (John 16:7).',
        },
        {
          kind: 'carry',
          html:
            'You stand, like the disciples, in a time between promise and fulfillment. Jesus has gone. The Spirit has come. The power is real, but it works through weakness—your weakness, your ordinary words, your willingness to be His witness even when you are afraid. When you speak His name today, you are not doing it alone. The same Spirit that filled the disciples at Pentecost fills you. The same power that turned Jerusalem upside down is moving through your faithfulness.',
        },
        {
          kind: 'reflection',
          id: 'acts1-power',
          prompt:
            'Where is God asking you to be a witness—to speak His name, to share what you have seen Him do? What would it mean to receive power for that specific work?',
        },
      ],
    },

    /* ─── Acts 1:9–11 — The Ascension and the Angels' Promise ──────────────────────– */
    {
      ref: 'Acts 1:9–11',
      title: 'Watching Him Go',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              9,
              t('And when he had spoken these things, while they beheld, he was '),
              hp('taken up; and a cloud received him out of their sight', 'christ-exaltation'),
              t('.'),
            ),
            verse(
              10,
              t('And while they looked stedfastly toward heaven as he went up, behold, two men stood by them in white apparel;'),
            ),
            verse(
              11,
              t('Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, '),
              hg('shall so come in like manner as ye have seen him go into heaven', 'acts1-gazing'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts1-ascension',
          html:
            'The ascension[res:bibleodyssey-ascension] is not a private rapture. It happens while they behold, in broad daylight, in the presence of many witnesses. He is not spirited away in a trance or a vision. A cloud receives Him out of their sight—and the cloud, in Jewish thought, is the sign of God&apos;s presence, the place where heaven and earth meet. Jesus is taken up not to disappear but to be exalted, to sit at the right hand of the Father, to intercede for all who believe.',
        },
        {
          kind: 'commentary',
          id: 'acts1-gazing',
          html:
            'The disciples stand gazing. It is a human reflex—your teacher, your Lord, the one who has just been alive in your arms, is now vanishing into a cloud. But the angels interrupt: "Why stand ye gazing up into heaven?" There is a gentle redirect here. Your hope is not in the sky. It is on the earth. The work is here. The waiting is now. The promise is coming soon.',
        },
        {
          kind: 'christ',
          id: 'christ-exaltation',
          title: 'Christ Connection — Exaltation and Return',
          html:
            'Jesus ascends not as a failure but as the one victorious. He returns to the Father in glory. And the angels promise: "this same Jesus… shall so come in like manner as ye have seen him go into heaven." His return will be as real, as visible, as undeniable as His ascension. The disciples will spend the rest of their lives in the light of that promise. Every day of waiting, witnessing, suffering—it is all bracketed by the certainty of His return. Paul writes: "This same Jesus, God will bring him back with the clouds of heaven" (1 Thess. 4:16, paraphrased).',
        },
        {
          kind: 'carry',
          html:
            'The direction of your hope matters. You can stand gazing upward, lost in the sky, waiting for rescue to fall from above. Or you can turn your feet toward the world, toward the people in front of you, and bear witness to the One who has promised to return. The resurrection and ascension are not distractions from your task. They are the ground of it. Because He is alive and interceding for you, you can speak His name with power.',
        },
        {
          kind: 'reflection',
          id: 'acts1-return',
          prompt:
            'How does the promise of Jesus&apos; return change the way you live today? What would be different if you truly believed He is coming back?',
        },
      ],
    },

    /* ─── Acts 1:12–14 — The Upper Room: United in Prayer ───────────────────────– */
    {
      ref: 'Acts 1:12–14',
      title: 'The Upper Room Gathering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              12,
              t('Then returned they unto Jerusalem from the mount called Olivet, which is from Jerusalem a sabbath day&apos;s journey.'),
            ),
            verse(
              13,
              t('And when they were come in, they went up into an upper room, where abode both Peter, and James, and John, and Andrew, Philip, and Thomas, Bartholomew, and Matthew, James the son of Alphaeus, and Simon Zelotes, and Judas the brother of James.'),
            ),
            verse(
              14,
              t('These all continued with one accord in '),
              hg('prayer and supplication, with the women, and Mary the mother of Jesus, and with his brethren', 'acts1-unity'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts1-gathering',
          html:
            'The apostles return from the Mount of Olives[res:bibleodyssey-mount-of-olives]—where Jesus has just ascended—and go up into an upper room[res:bibleodyssey-upper-room]. It is the same room, tradition holds, where they last ate with Him before His arrest. It is a room thick with memory, with loss, with waiting. They are obedient to His command: do not leave Jerusalem. Wait. But for what? They do not yet know. The Spirit has not fallen. Pentecost is not yet. But they gather, and they wait.',
        },
        {
          kind: 'commentary',
          id: 'acts1-unity',
          html:
            'The names are listed—Peter, James, John, Andrew, Philip, Thomas, Bartholomew, Matthew, James the younger, Simon the Zealot, Judas the brother of James. No divisions. No one stepping forward to claim leadership in the absence of Jesus. And notice who is there: not just the apostles, but the women, including Mary the mother of Jesus herself. The church at its beginning is a fellowship, not a hierarchy. They are knit together in prayer.',
        },
        {
          kind: 'carry',
          html:
            'You wait, like they wait, for a promise that has been given but not yet arrived. There is something you have been told to do, but not yet the strength to do it. There is a gift promised, but the gift has not yet come. The right response is not anxiety or impatience. It is prayer, supplication, and continued obedience in the company of others who are waiting too. Your waiting is not idle. It is the work of faith.',
        },
        {
          kind: 'reflection',
          id: 'acts1-upper',
          prompt:
            'What promise from Jesus are you still waiting to see fulfilled? How are you spending that season of waiting—alone or in community, in anxiety or in prayer?',
        },
      ],
    },

    /* ─── Acts 1:15–26 — The Choosing of Matthias ─────────────────────────────────– */
    {
      ref: 'Acts 1:15–26',
      title: 'The Restoration of the Twelve',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              15,
              t('And in those days Peter stood up in the midst of the brethren, and said, (the number of names together were about an hundred and twenty,)'),
            ),
            verse(
              16,
              t('Men and brethren, this scripture must needs have been fulfilled, which the Holy Ghost by the mouth of David spake before concerning Judas, which was guide to them that took Jesus.'),
            ),
            verse(
              20,
              t('For it is written in the book of Psalms, Let his habitation be desolate, and let no man dwell therein: and his bishoprick let another take.'),
            ),
            verse(
              21,
              t('Wherefore of these men which have '),
              hg('companied with us all the time that the Lord Jesus went in and out among us', 'acts1-witness-criterion'),
              t(','),
            ),
            verse(
              22,
              t('Beginning from the baptism of John, unto that same day that he was taken up from us, must one be ordained to be a witness with us of his resurrection.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts1-peter-speaks',
          html:
            'Peter stands up and speaks. There is no hesitation, no debate about whether leadership matters. The apostles understand that the witness of the twelve—the symbolic completion of the twelve tribes of Israel—is important for the church&apos;s authority and message. The vacancy left by Judas&apos; betrayal cannot simply be accepted. It must be filled. But by whom?',
        },
        {
          kind: 'commentary',
          id: 'acts1-witness-criterion',
          html:
            'The criterion is clear and uncompromising: the replacement must have been with Jesus from the beginning. From John&apos;s baptism all the way through the resurrection. Not a latecomer. Not a friend of a friend. But someone who has seen the whole story unfold, who has been tested by Jesus&apos; ministry and proved faithful. This is not democracy. This is apostolic discernment.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              23,
              t('And they appointed two, Joseph called Barsabas, who was surnamed Justus, and '),
              hg('Matthias[res:bibleodyssey-matthias]', 'acts1-peter-speaks'),
              t('.'),
            ),
            verse(
              24,
              t('And they prayed, and said, Thou, Lord, which knowest the hearts of all men, shew whether of these two thou hast chosen,'),
            ),
            verse(
              25,
              t('That he may take part of this ministry and apostleship, from which Judas by transgression fell, that he might go to his own place.'),
            ),
            verse(
              26,
              t('And the lot fell upon '),
              hg('Matthias; and he was numbered with the eleven apostles', 'acts1-prayer-and-lot'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts1-prayer-and-lot',
          html:
            'They do not hold a lengthy debate. They do not announce their preference. They pray—"Thou, Lord, which knowest the hearts of all men"—and then they cast lots. This is an ancient way of seeking God&apos;s will, letting chance reveal the hidden judgment of the Lord. The lot is not gambling. It is a form of prayer, a way of saying: we do not trust our own judgment in this. We trust Yours.',
        },
        {
          kind: 'christ',
          id: 'acts1-christ-apostles',
          title: 'Christ Connection — The Foundation of Witnesses',
          html:
            'The twelve apostles are the foundation stones of the church. They are the ones who have seen the risen Lord, who have been commissioned to be His witnesses, who will authenticate the gospel in the face of a hostile world. By choosing Matthias, the apostles are affirming that Jesus&apos; work is greater than any single person&apos;s betrayal. Judas fell, but the apostolic college stands. The testimony continues. Paul later writes: "Other foundations can no man lay than that is laid, which is Jesus Christ" (1 Cor. 3:11), and the twelve are the builders of that foundation.',
        },
        {
          kind: 'carry',
          html:
            'You live in a time after the apostles, but not after the pattern they set. When you are faced with a decision and you do not know which way to turn, do what they did: gather with others who are seeking, pray to the Lord who knows all hearts, and trust His judgment more than your preference. You may not cast lots, but you can seek the Lord&apos;s will with equal seriousness. He is as eager to guide you as He was to choose Matthias.',
        },
        {
          kind: 'reflection',
          id: 'acts1-choosing',
          prompt:
            'When have you sensed God choosing you for a particular work or role? How did you know it was His choice and not just your own ambition?',
        },
        {
          kind: 'artwork',
          matchTitle: /lot/i,
          caption: 'Acts 1:24–26 · The Choice of Matthias',
        },
      ],
    },

    /* ─── Acts 1:1–26 — The Stage Is Set ────────────────────────────────────────– */
    {
      ref: 'Acts 1',
      title: 'The Stage Is Set',
      blocks: [
        {
          kind: 'commentary',
          id: 'acts1-conclusion',
          html:
            'The chapter closes with a company waiting. One hundred twenty souls, gathered in Jerusalem, obedient to the command of the risen Jesus. They have not scattered. They have not doubted. They have not returned to their old trades. They have chosen an apostle to complete the symbolic twelve. They are united, praying, faithful. The promise hangs over their heads: the Holy Ghost is coming. Power is coming. The gospel will spread to the uttermost parts of the earth. But not yet. Not yet. First, they wait. First, they pray. First, they gather, with one accord, in an upper room.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'commentary',
          id: 'acts1-power-promised',
          html:
            'If the power Jesus promised had come that very day, if Pentecost had arrived on the heels of the ascension, the disciples might have attributed it to their excitement, their certainty, their emotional fervor. Instead, they wait. They are told to wait. The waiting teaches them that the power is not theirs. It comes from outside them, from above them, from the Father through the Spirit. When the power finally does come—when the sound like a rushing mighty wind fills the house, when the flames of fire sit on each head, when they speak in languages they never learned—they will know beyond any doubt: this is God. This is His doing. This is not us.',
        },
        {
          kind: 'carry',
          html:
            'The promise you have been given—to be a witness, to speak truth, to live in God&apos;s power—is not your achievement to make happen. It is God&apos;s gift to claim. And like the disciples, you may find that the waiting period is exactly when you need it: a time to gather with others, to pray, to be still, to let your own ambitions settle. The power, when it comes, will be unmistakable. It will not be your strength. It will be His.',
        },
        {
          kind: 'reflection',
          id: 'acts1-final',
          prompt:
            'What promise has Jesus made to you that you are still waiting to see fulfilled? How might God be using this season of waiting to prepare you for what comes next?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 1 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-ascension',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Ascension',
      url: 'https://www.bibleodyssey.org/dictionary/ascension/',
      description: 'Theological entry examining the resurrection to heavenly exaltation and apostolic witness in Acts.',
    },
    {
      id: 'penn-museum-apostles-witness',
      kind: 'museum',
      source: 'Penn Museum',
      label: 'Apostolic Witness in the Hellenistic World',
      url: 'https://www.penn.museum/',
      description: 'Archaeological context for the apostles&apos; testimony across the Mediterranean world in the first century.',
    },
    {
      id: 'intertextual-luke-acts-continuity',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Luke 1:1 ↔ Acts 1:1 — Gospel and Acts Continuity',
      url: 'https://intertextual.bible/search?q=Luke+1+1+Acts+1+1',
      description: 'Side-by-side comparison showing how Luke links his Gospel to Acts as a seamless two-part narrative.',
    },
  ],

  hasHebrew: false,
};
