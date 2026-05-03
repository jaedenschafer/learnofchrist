import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Hebrews 8 — The New Covenant
 *
 * The longest OT quotation in the NT: Jeremiah 31. Christ is the mediator
 * of a better covenant. Not written on stone, but on the human heart.
 */
export const HEBREWS_8: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 8,

  intros: [
    'Hebrews 8 contains the longest quotation of the Old Testament anywhere in the New Testament—an entire passage from Jeremiah 31. The author has spent seven chapters proving that Christ is a better High Priest than any priest under the Law. Now comes the punchline: He is the mediator of a better covenant. Not written in stone. Written on the human heart. This is the transformation the gospel accomplishes.',
    'The old covenant was not defective—it was a preparation, a shadow, a teacher pointing forward. But Christ brings the substance. He stands at the right hand of God&apos;s throne and mediates a covenant based on better promises: forgiveness remembered as if it never happened, and a people who know God from the least to the greatest.',
  ],

  opener: {
    matchTitle: /priest|tabernacle|altar/i,
    matchArtist: /tissot|rembrandt/i,
    caption: 'Christ the High Priest',
  },

  sections: [
    /* ─── Hebrews 8:1–2 — High Priest at the Throne ─────────────────── */
    {
      ref: 'Hebrews 8:1–2',
      title: 'We Have Such an High Priest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              1,
              t('Now of the things which we have spoken this is the sum: We have such an '),
              hp('high priest', 'heb8-priest'),
              t(', who is '),
              hy('set on the right hand of the throne of the Majesty', 'heb8-sum'),
              t(' in the heavens;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-sum',
          html:
            'The author pauses. Before moving to the covenant itself, he anchors everything in one fact: you have a High Priest. Not buried in history. Not waiting for the next atonement. Exalted. Seated. Reigning. All the theological weight of the previous seven chapters distills into this one image.',
        },
        {
          kind: 'christ',
          id: 'heb8-priest',
          title: 'Christ Connection — Seated in Power',
          html:
            'Jesus said, &ldquo;All power is given unto me in heaven and in earth&rdquo; (Matt. 28:18). Hebrews shows the seat—&ldquo;sat down on the right hand of the throne of God&rdquo; (Heb. 10:12). The right hand is the place of highest authority. Every priest under the Law stood, offering again and again (Heb. 10:11). Jesus sat. His work was finished. He remains there now, interceding for you (Rom. 8:34). Your High Priest is not past tense. He is actively present, presently ruling.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              2,
              t('A '),
              hy('minister', 'heb8-leitourgos'),
              t(' of the '),
              hy('sanctuary, and of the true tabernacle', 'heb8-true-tabernacle'),
              t(', which the Lord pitched, and not man.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-true-tabernacle',
          html:
            'The tabernacle Moses built was a copy, a shadow. The &ldquo;true tabernacle&rdquo; is not made with human hands. It is the very presence of God. Jesus did not minister in the earthly tent; He ministers in the real one. Every earthly priest was a copy of Christ. Now the Real Thing has come.',
        },
        {
          kind: 'greek',
          id: 'heb8-leitourgos',
          title: 'Leitourgos — &ldquo;minister&rdquo;',
          script: 'λειτουργός',
          translit: '<strong>leitourgos</strong> · servant, minister; one who performs sacred service',
          description:
            'The word carries the sense of a public servant—someone acting on behalf of others. Christ is not a solitary priest. He ministers on behalf of all His people. His intercession is His perpetual work.',
        },
        {
          kind: 'greek',
          id: 'heb8-skene',
          title: 'Skene — &ldquo;tabernacle&rdquo;',
          script: 'σκηνή',
          translit: '<strong>skene</strong> · tent, tabernacle; dwelling place',
          description:
            'The earthly tabernacle was where God dwelt among His people. The true tabernacle is heaven itself—the place where God dwells fully, and where Christ now sits. Not a building. Not a shadow. The reality.',
        },
        {
          kind: 'carry',
          html:
            'You are not waiting for God to show up. He already showed up in Christ. He is not far away, behind a veil, accessible only through a priest you cannot see. He is actively ruling, actively interceding, already positioned for you. This is not a distant hope. This is present-tense reality. Let that change something today.',
        },
        {
          kind: 'reflection',
          id: 'heb8-throne',
          prompt:
            'What would it mean in your daily life to trust that your High Priest is right now seated at the throne, actively interceding for you?',
        },
      ],
    },

    /* ─── Hebrews 8:3–5 — A Priest Must Have Something to Offer ────── */
    {
      ref: 'Hebrews 8:3–5',
      title: 'Minister of the True Tabernacle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              3,
              t('For every high priest is ordained to '),
              hg('offer gifts and sacrifices', 'heb8-offerings'),
              t(': wherefore it is of necessity that this man have somewhat also to offer.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-offerings',
          html:
            'Every priest must bring an offering—this is how the priesthood works. But what does Christ offer? Not a lamb that must be offered again next year. Not bulls or goats that cannot truly take away sin. The answer comes in Hebrews 10: Christ offered Himself. One sacrifice. For all time. That is why He sat down. The offering is complete.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              4,
              t('For '),
              hy('if he were on earth, he should not be a priest', 'heb8-tribe'),
              t(', seeing that there are priests that offer gifts according to the law;')
            ),
            verse(
              5,
              t('Who serve unto the example and shadow of heavenly things, as Moses was admonished of God when he was about to make the tabernacle: for, See, saith he, that thou make all things according to the pattern shewed to thee in the mount.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-tribe',
          html:
            'Jesus was from Judah, not Levi. He had no legal right to be a priest under the Law. But He belongs to a different priesthood entirely—&ldquo;after the order of Melchisedec&rdquo; (Heb. 5:10). The earthly priesthood was based on tribal birthright. His priesthood is based on His resurrection and divine character. No genealogy. No succession. Eternal.',
        },
        {
          kind: 'carry',
          html:
            'Every copy points back to the original. Every shadow proves there is light somewhere casting it. If earthly priests were so elaborate, so carefully regulated, so necessary—what does that tell you about the One they were all rehearsing? Your doubt about Christ&apos;s sufficiency is, in a strange way, a doubt about how seriously God takes the shadow. He does not. He gives the Reality.',
        },
        {
          kind: 'reflection',
          id: 'heb8-shadow',
          prompt:
            'Where are you still trying to live by the shadow instead of the substance? What ancient pattern is Christ inviting you to leave behind?',
        },
      ],
    },

    /* ─── Hebrews 8:6–7 — Better Covenant, Better Promises ──────────── */
    {
      ref: 'Hebrews 8:6–7',
      title: 'Mediator of a Better Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              6,
              t('But now hath he obtained a more excellent ministry, by how much also he is the '),
              hp('mediator of a better covenant', 'heb8-better-covenant'),
              t(', which was '),
              hy('established upon better promises', 'heb8-promises'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-better-covenant',
          html:
            'Not a different God. Not a contradiction of the old covenant. A better one. The old covenant said: if you keep the law, I will be your God. It was based on human performance. The new covenant says: I will be your God and rewrite you from the inside. It is based on Christ&apos;s performance, not ours. Better does not mean the first was worthless. It means this one works.',
        },
        {
          kind: 'greek',
          id: 'heb8-mesites',
          title: 'Mesites — &ldquo;mediator&rdquo;',
          script: 'μεσίτης',
          translit: '<strong>mesites</strong> · one who stands between; a mediator',
          description:
            'A mediator stands between two parties. Christ stands between God and humanity. He is fully God, fully human. The perfect bridge. Not a diplomat negotiating between equals, but the One who reconciles a holy God with sinful people. He does this by uniting both natures in Himself.',
        },
        {
          kind: 'christ',
          id: 'heb8-mediator',
          title: 'Christ Connection — The One in the Middle',
          html:
            'Paul says this directly: &ldquo;For there is one God, and one mediator between God and men, the man Christ Jesus&rdquo; (1 Tim. 2:5). Jesus is not competing with the old covenant prophets or priests. He fulfills them. He is the reason they existed. Every mediator before Him was pointing to this One. Every covenant before His pointed to this One. He is the sum of it all.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              7,
              t('For if that '),
              hg('first covenant had been faultless', 'heb8-not-faultless'),
              t(', then should no place have been sought for the second.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-not-faultless',
          html:
            'The problem was never the Law. The problem was us. The Law is holy and just and good (Rom. 7:12). But it cannot change the human heart. It cannot forgive. It can only show us our sin and demand payment. No amount of keeping the rules transforms a person. Only grace can do that. The new covenant does what the first never could.',
        },
        {
          kind: 'carry',
          html:
            'Have you been living as if following rules hard enough will eventually make you good? As if one more effort, one more discipline, one more resolution will finally earn God&apos;s favor? The Bible says: No. The problem is not your effort. The problem is that effort is not the answer. God is offering you something brand new—not a modified version of the old game, but an entirely different game. Stop trying to fix yourself with rules. Let Him transform you from inside out.',
        },
        {
          kind: 'reflection',
          id: 'heb8-promises',
          prompt:
            'What promise of the new covenant—forgiveness remembered, the heart transformed, God as your God—do you find hardest to believe? Why?',
        },
      ],
    },

    /* ─── Hebrews 8:8–9 — Behold, the Days Come ────────────────────── */
    {
      ref: 'Hebrews 8:8–9 · Jeremiah 31:31–32',
      title: 'I Will Make a New Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              8,
              t('For finding fault with them, he saith, Behold, the '),
              hy('days come, saith the Lord', 'heb8-jeremiah-intro'),
              t(', when I will make a '),
              hp('new covenant', 'heb8-jeremiah-intro'),
              t(' with the house of Israel and with the house of Judah;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-jeremiah-intro',
          html:
            'This is the voice of Jeremiah, the weeping prophet who watched Jerusalem fall. Exiled. Heartbroken. And yet God speaks to him of a day coming when everything will be remade. Not another set of rules. Not another temple built by human hands. A total rewriting. The author of Hebrews has been building toward this quotation for eight chapters. Jeremiah 31 is where the Old Testament itself announces the obsolescence of the old order. This is not Christianity inventing something new. This is Jeremiah foretelling it five hundred years before Jesus was born.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              9,
              t('Not according to the covenant that I made with their fathers in the day when I took them by the hand to lead them out of the land of Egypt; because they continued not in my covenant, and I regarded them not, saith the Lord.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-not-like-egypt',
          html:
            'Do not mistake this for judgment. God is not saying the old covenant was bad; He is saying it was not final. At Sinai, God gave His people a covenant based on obedience. They broke it. Not because the covenant was weak, but because the human heart is hard. So God promises something different: not a renewed attempt at the same covenant, but a new one altogether. A covenant where He changes the heart itself.',
        },
        {
          kind: 'greek',
          id: 'heb8-diatheke',
          title: 'Diatheke — &ldquo;covenant&rdquo;',
          script: 'διαθήκη',
          translit: '<strong>diatheke</strong> · covenant, testament, agreement',
          description:
            'A covenant is not a contract where both sides must perform. It is the sovereign will of God, laid down. The old covenant: God provides, people obey. The new covenant: God provides and transforms. The responsibility is entirely on His side now—to remember no more, to write on the heart, to be our God.',
        },
        {
          kind: 'carry',
          html:
            'You are not living under Mount Sinai anymore. Not in the age of external commandment, where obedience is a matter of willpower and fear. You are living in the age of the new covenant, where God has promised to write His will on your heart. Stop measuring yourself by how well you keep the rules. Start asking: is God remaking me from the inside? That is the sign of the new covenant working in you.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'heb8-covenant',
          prompt:
            'What difference would it make if you truly believed God has already begun the transformation the new covenant promises?',
        },
      ],
    },

    /* ─── Hebrews 8:10 — I Will Put My Laws in Their Mind ──────────── */
    {
      ref: 'Hebrews 8:10 · Jeremiah 31:33',
      title: 'I Will Write My Laws in Their Hearts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              10,
              t('For this is the covenant that I will make with the house of Israel after those days, saith the Lord; '),
              hy('I will put my laws into their mind', 'heb8-mind-heart'),
              t(', and '),
              hp('write them in their hearts', 'heb8-mind-heart'),
              t(': and I will be to them a God, and they shall be to me a people;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-mind-heart',
          html:
            'Two things. First, the laws are put into the mind—not to be memorized like rules, but to be understood from the inside. Second, they are written on the heart—not as external obligation, but as internal desire. God is not just giving you new information. He is remaking your will. He is making you want what is right.',
        },
        {
          kind: 'greek',
          id: 'heb8-kardia',
          title: 'Kardia — &ldquo;heart&rdquo;',
          script: 'καρδία',
          translit: '<strong>kardia</strong> · heart; the seat of understanding, will, desire',
          description:
            'In Hebrew thought, the heart is not sentiment; it is the center of decision-making and desire. When God writes on your heart, He is not making you feel emotional. He is remaking what you choose, what you love, what you reach for.',
        },
        {
          kind: 'christ',
          id: 'heb8-christ-heart',
          title: 'Christ Connection — The Spirit Writes',
          html:
            'Paul makes this explicit: &ldquo;Ye are manifestly declared to be the epistle of Christ… written not with ink, but with the Spirit of the living God; not in tables of stone, but in fleshy tables of the heart&rdquo; (2 Cor. 3:3). Jesus does not give you a list of dos and don&apos;ts and leave you to figure it out. He gives you His Spirit. The Spirit rewrites your desires. What once felt impossible—genuinely wanting to obey, genuinely wanting Him—becomes natural.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              10,
              t('(cont.) And they shall not teach every man his neighbour, and every man his brother, saying, Know the Lord: for all shall know me, from the least to the greatest.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-all-shall-know',
          html:
            'Under the old covenant, knowledge of God was mediated through priests and teachers. You needed an expert to tell you what God said. In the new covenant, all shall know Him—not by inheritance, not by official position, but directly. From the least to the greatest. A child and a scholar stand on the same ground. Everyone has direct access to the God who has rewritten their heart.',
        },
        {
          kind: 'carry',
          html:
            'You do not need a priest to tell you who God is. You do not need a scholar to interpret His will. The Spirit can speak directly to you. This is revolutionary. This is terrifying to institutions that build themselves on gatekeeping knowledge. But it is freedom. It is the promise of the new covenant: you, personally, can know God. Not someday. Now. What is stopping you from quieting down and listening?',
        },
        {
          kind: 'reflection',
          id: 'heb8-know',
          prompt:
            'When you pray, do you come as someone who needs a middleman to reach God, or as someone the Spirit speaks to directly? What would change if you really believed the latter?',
        },
      ],
    },

    /* ─── Hebrews 8:11–12 — Their Sins Will I Remember No More ────── */
    {
      ref: 'Hebrews 8:11–12 · Jeremiah 31:34',
      title: 'Their Sins Will I Remember No More',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              11,
              t('(cont. from v. 10) '),
              hg('For I will be merciful to their unrighteousness', 'heb8-merciful'),
              t(', and their sins and their iniquities '),
              hp('will I remember no more', 'heb8-remember-no-more'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-merciful',
          html:
            'Mercy is not naive forgetting. It is deliberate choice—the choice to stop counting. Under the old covenant, sin was confessed, a sacrifice was offered, and the record was temporarily cleared until next year. But the memory remained in the system. The whole elaborate machinery of confession and sacrifice was built on the assumption that sin was a permanent problem requiring yearly remediation. The new covenant offers something radically different.',
        },
        {
          kind: 'commentary',
          id: 'heb8-remember-no-more',
          html:
            'God will remember your sin no more. Not because He has a bad memory. Because He has chosen to count it as dealt with forever. This is how deep Christ&apos;s work goes. The foundation of the new covenant is that God decides to forget. Not that He is willing to forgive if you earn it back. But that forgiveness is already the permanent posture of the new covenant. Your sin is not filed away under &ldquo;pending.&rdquo; It is gone.',
        },
        {
          kind: 'greek',
          id: 'heb8-mnaomai',
          title: 'Mnaomai — &ldquo;to remember&rdquo;',
          script: 'μνάομαι',
          translit: '<strong>mnaomai</strong> · to remember, to recall',
          description:
            'When God says He will not remember, He is not saying His memory fails. He is saying He will not bring your sin to account. He will not hold it against you. He will not recall it for judgment. This is the ultimate promise of the gospel.',
        },
        {
          kind: 'christ',
          id: 'heb8-forgot-sins',
          title: 'Christ Connection — Remembered and Forgotten',
          html:
            'Christ&apos;s blood is the basis of this promise. In Hebrews 10:17, the author returns to this same promise and ties it directly to Jesus&apos;s sacrifice: &ldquo;Their sins and iniquities will I remember no more.&rdquo; Christ&apos;s death was the payment so complete, so final, that God can, in justice, count them as never happened. This is not lenience. This is satisfaction. The debt is paid. The record is clear.',
        },
        {
          kind: 'carry',
          html:
            'Do you carry your sin like a permanent file God is keeping on you? Do you imagine Him pulling it out whenever you stumble again, adding another entry to your record? This is a lie. This is the old covenant thinking. The new covenant says: gone. Not suspended pending good behavior. Not filed away as a warning. Gone. Let that word do its work in you. Your forgiveness is not conditional on never sinning again. It is unconditional, because it is based on Someone else&apos;s work, not yours.',
        },
        {
          kind: 'reflection',
          id: 'heb8-forgiven',
          prompt:
            'What sin are you still carrying as if God is still counting it against you? What would it mean to believe, really believe, that He has chosen to remember it no more?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Hebrews 8:13 — The First is Waxing Old ──────────────────── */
    {
      ref: 'Hebrews 8:13',
      title: 'The First Old, Ready to Vanish',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(
              13,
              t('In that he saith, A new covenant, he hath made the '),
              hy('first old', 'heb8-palaios'),
              t('. Now that which decayeth and '),
              hg('waxeth old is ready to vanish away', 'heb8-vanish'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb8-old-covenant-ending',
          html:
            'This is not contempt for the Law. This is the Law&apos;s own purpose. The whole apparatus of temple, priests, sacrifice, festival calendar—all of it was designed to point forward to Christ. Like scaffolding around a building under construction. Once the building is finished, the scaffolding comes down. Not because it was bad. Because it worked. It delivered the building.',
        },
        {
          kind: 'greek',
          id: 'heb8-palaios',
          title: 'Palaios — &ldquo;old&rdquo;',
          script: 'παλαιός',
          translit: '<strong>palaios</strong> · old, aged, worn out',
          description:
            'The word carries a sense of obsolescence—not just old in time, but old in function. A tool that has served its purpose. The old covenant was never meant to be permanent. It was a phase. A preparation. Now the preparation is complete.',
        },
        {
          kind: 'commentary',
          id: 'heb8-vanish',
          html:
            'What vanishes is not God&apos;s word. What vanishes is the system—the priesthood, the sacrifices, the regulations, the calendar. The Law itself remains as God&apos;s revelation of His character. But the ceremonial system built around it has fulfilled its purpose. Christians do not need to go back to it. The reality has come.',
        },
        {
          kind: 'christ',
          id: 'heb8-fulfillment',
          title: 'Christ Connection — The Pattern Made Real',
          html:
            'Jesus is not against the Law. He is the end of it. &ldquo;Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil&rdquo; (Matt. 5:17). Every sacrifice was a picture of His sacrifice. Every priest was a shadow of His priesthood. Every Day of Atonement was a rehearsal of His work. He did not break the Law; He completed it. He is why it existed.',
        },
        {
          kind: 'carry',
          html:
            'If you find yourself trying to live under the old covenant—trying to earn favor through works, afraid that your sin disqualifies you, measuring yourself by external rules—you are trying to rebuild the scaffolding around a finished building. It is not your job. It is not your home. Come into the building. Come into the new covenant. Jesus is waiting inside.',
        },
        {
          kind: 'reflection',
          id: 'heb8-vanish',
          prompt:
            'Where are you still trying to keep rules as a way to stay close to God? Where could you trade religious effort for a relationship?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Hebrews 8',
    quote:
      'Christ mediates a better covenant written not on stone, but on the human heart. God promises to put His laws into the mind, write them in the heart, be the God of His people, and remember their sins no more. All shall know Him, from the least to the greatest.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 8 · Study Guide',
  },

  hasHebrew: false,
};
