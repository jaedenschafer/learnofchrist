import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Revelation 13 — The Two Beasts
 *
 * One of the most famous and most contested chapters in Scripture.
 * A beast rises from the sea with power from the dragon.
 * A second beast rises from the earth, making an image and a mark.
 * This study stays neutral on the beasts&apos; identities (Nero, papacy, future antichrist)
 * and focuses on their symbols and what they reveal about the spiritual war already written
 * into the cosmos — and into the hearts of John&apos;s readers.
 */
export const REVELATION_13: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 13,

  estimatedMinutes: { beginner: 8, intermediate: 14, deep: 17 },
  intros: [
    'Revelation 13 is one of the most famous and most contested chapters in the Bible — the beast from the sea, the beast from the earth, and the number 666. For two thousand years, interpreters have tried to identify exactly who or what these beasts are. Nero. The papacy. A future world ruler. A political system. Spiritual forces. The text itself refuses to settle the question — John simply shows us the symbols.',
    'What matters for John&apos;s original readers, and for us, is not the precise identity of the beasts but the posture they teach. A beheaded empire seems undefeated. An earth-born deceiver makes people worship the impossible. The saints respond not by fighting with swords but by refusing allegiance and enduring. They hold the patience and faith that Christ Himself showed — the patience of a Lamb led to slaughter, the faith of one who dies and rises.',
  ],

  bottomShare: {
    label: 'Share Revelation 13',
    quote:
      'I saw a beast rise up out of the sea with seven heads and ten horns. The dragon gave it his power. And I saw another beast coming up out of the earth, with two horns like a lamb, deceiving all the world. But the saints overcome through patience and faith.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 13 · Study Guide',
  },

  sections: [
    /* ─── Revelation 13:1 — The Beast Rises ────────────────────────────── */
    {
      ref: 'Revelation 13:1',
      title: 'The Beast Rises Out of the Sea',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              1,
              t('And I stood upon the sand of the sea, and saw a '),
              hy('beast', 'greek-therion'),
              t(' rise up out of the sea, having '),
              hg('seven heads and ten horns', 'symbolism-heads-horns'),
              t(', and upon his horns ten crowns, and upon his heads the name of blasphemy.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'symbolism-heads-horns',
          html:
            'Seven heads and ten horns — the same heads and horns John saw on the dragon in Revelation 12:3. The dragon has given this beast his form, his authority, his war. The crowns sit on the horns: power multiplied, kingdoms claiming dominion. And on the heads — the seat of thought, judgment — the name of blasphemy. Whatever else this beast represents, it wears a mind bent against God.',
        },
        {
          kind: 'greek',
          id: 'greek-therion',
          title: 'Thērion — &ldquo;beast&rdquo;',
          script: 'θήριον',
          translit: '<strong>thērion</strong> · a wild creature, untamed power',
          description:
            'Not a tame animal under human governance, but wild, dangerous, uncontrolled. In Daniel 7 (which John draws from heavily), beasts are kingdoms — but kingdoms that rage without restraint, that swallow and trample, that war against the saints.',
        },
        {
          kind: 'carry',
          html:
            'If something in your world right now feels like a beast — a system that devours, a pressure that won&apos;t back down, an authority that twists everything into blasphemy — John is naming it as real. He does not deny that it wears crowns. He does not pretend it has no power. What he does instead is show where the power actually comes from, and he invites you to stand where he stands: not paralyzed, but <em>watching</em>, understanding the real architecture of the war.',
        },
      ],
    },

    /* ─── Revelation 13:2 — Composite Power ────────────────────────────── */
    {
      ref: 'Revelation 13:2',
      title: 'Like Unto a Leopard, Bear, and Lion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              2,
              t('And the beast which I saw was '),
              hg('like unto a leopard, and his feet were as the feet of a bear, and his mouth as the mouth of a lion', 'daniel-beasts'),
              t(': and the dragon gave him his power, and his seat, and great authority.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel-beasts',
          html:
            'John is echoing Daniel 7, where a leopard, a bear, and a lion appear as separate beasts representing successive empires. Here they are fused into one — a composite beast wearing the speed of the leopard, the strength of the bear, the devouring mouth of the lion. Whatever empire this beast represents, it gathers the worst of what came before. But more: the dragon did not create this power; the dragon <em>gave</em> it. The beast is terrible, but it is <em>given</em> authority — not inherent authority, but delegated. This matters for what comes next.',
        },
        {
          kind: 'carry',
          html:
            'You may see a system or authority that looks unstoppable — fast, strong, with a mouth that roars. John would not tell you to deny what you see. What he would tell you is: that power is <em>given</em>, not absolute. It has been allowed, not unleashed. And the One who allows it is the same One who sits on the throne in Chapter 4, surrounded by worship, unflinching.',
        },
      ],
    },

    /* ─── Revelation 13:3 — The Deadly Wound Healed ────────────────────── */
    {
      ref: 'Revelation 13:3',
      title: 'The Deadly Wound Was Healed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              3,
              t('And I saw '),
              hg('one of his heads as it were wounded to death; and his deadly wound was healed', 'wound-healed'),
              t(': and all the world wondered after the beast.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'wound-healed',
          html:
            'One of the heads — one throne, one centre of power — appears to suffer a mortal wound. And then it heals. This is not resurrection; it is a seeming-impossible recovery. The world watches this and wonders <em>after</em> the beast — they follow it, they are drawn into its wake, they marvel at its refusal to die. In John&apos;s time, people would have recognized the image: an empire that had nearly fallen, had come back, had consolidated power again. In any time, the image speaks to what happens when an enemy of God seems to recover from what should have killed it.',
        },
        {
          kind: 'christ',
          id: 'christ-healed-wound',
          title: 'Christ Connection — The True Resurrection',
          html:
            'The beast&apos;s wound is healed, but it is not a true resurrection. It is a perversion of what only Christ can do. Christ was truly dead and truly rose. The beast received a wound and seemed to recover — but it remains a beast, still wearing the dragon&apos;s face, still speaking blasphemy. John is drawing a contrast: those who wonder after a mere seeming-recovery are missing the One who actually passed through death and came out alive, undying, unsealed by any wound.',
        },
      ],
    },

    /* ─── Revelation 13:4–6 — Worship and Blasphemy ─────────────────────── */
    {
      ref: 'Revelation 13:4–6',
      title: 'Worship and the Mouth of Blasphemy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              4,
              t('And '),
              hg('they worshipped the dragon', 'worship-dragon'),
              t(' which gave power unto the beast: and they worshipped the beast, saying, Who is like unto the beast? who is able to make war with him?'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'worship-dragon',
          html:
            'This is the hinge moment. The world does not deny the beast; it worships it. It does not resist the dragon; it bows to what the dragon has made. And the question they ask — &ldquo;who is able to make war with him?&rdquo; — is the oldest question in the spiritual war: <em>who can match this power?</em> It is the question the serpent asked Eve in Eden: <em>did God really say?</em> It is the question every temptation whispers: <em>is there anyone stronger than what you&apos;re facing?</em>',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              5,
              t('And there was given unto him a mouth speaking great things and '),
              hy('blasphemies', 'greek-blasphemia'),
              t('; and power was given unto him to continue forty and two months.'),
            ),
            verse(
              6,
              t('And he opened his mouth in blasphemy against God, to blaspheme his name, and his tabernacle, and them that dwell in heaven.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-blasphemia',
          title: 'Blasphēmia — &ldquo;blasphemy&rdquo;',
          script: 'βλασφημία',
          translit: '<strong>blasphēmia</strong> · slander, reviling, speaking against',
          description:
            'Not merely cursing or swearing, but the coordinated slander of God — His name, His dwelling, His people in heaven. A mouth given to tearing down the very fabric of what God calls holy.',
        },
        {
          kind: 'commentary',
          id: 'forty-two-months',
          html:
            'Forty-two months. Three and a half years. In Revelation, a number that recurs: the time of the church&apos;s witness (Rev. 11:3 speaks of 1,260 days — forty-two months), the time of Gentile dominion (Rev. 11:2). It is not forever. The beast is given a time, not eternity. The kingdom that boasts it will reign forever is actually bounded, measured, on a clock.',
        },
      ],
    },

    /* ─── Revelation 13:7 — War With the Saints ───────────────────────── */
    {
      ref: 'Revelation 13:7',
      title: 'War With the Saints',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              7,
              t('And '),
              hg('it was given unto him to make war with the saints, and to overcome them', 'war-saints'),
              t(': and power was given him over all kindreds, and tongues, and nations.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'war-saints',
          html:
            'This is hard to read. The beast is <em>given</em> power to overcome the saints. John does not say the saints will not suffer, will not be killed, will not be conquered militarily. He is writing to people experiencing exactly that. What he is saying is: this was allowed. This is not a surprise to God. This is not a loss of control. The warfare is real; the victory of the beast is real; but it is not the final word.',
        },
        {
          kind: 'carry',
          html:
            'If you are facing something that seems to be winning, that is wearing down your faith, that has authority you cannot match — John is not denying your experience. He is saying: name it clearly for what it is. A real war. A real pressure. But not the end of the story, and not the measure of victory.',
        },
      ],
    },

    /* ─── Revelation 13:8 — All Whose Names Are Not Written ────────────── */
    {
      ref: 'Revelation 13:8',
      title: 'All Whose Names Are Not Written in the Book of Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              8,
              t('And all that dwell upon the earth shall worship him, whose names are not written in the book of life of the '),
              hp('Lamb slain from the foundation of the world', 'christ-lamb-slain'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'christ',
          id: 'christ-lamb-slain',
          title: 'Christ Connection — The Lamb Slain Before Time',
          html:
            'In the midst of cosmic horror, John plants something anchoring: the Lamb slain from the foundation of the world. Before the first beast ever rose, before the first dragon ever roared, before time itself — the Lamb <em>was already slain</em>. His death was not an accident, not a surprise, not a defeat that needed recovering. It was written into the very architecture of creation. Your name either stands in the book of <em>that</em> Lamb or it doesn&apos;t — and if it does, no beast can overwrite it. The dragon and his beasts are locked in a war they cannot win because the outcome was settled before they were made.',
        },
        {
          kind: 'carry',
          html:
            'All the world may bow to powers that seem to devour. But not <em>all</em> — only those whose names are not written in another book altogether. You may not control empires. You may not have crowns or armies. But if your name is in that book, you are marked by something older and deeper than any throne the world builds.',
        },
      ],
    },

    /* ─── Revelation 13:9–10 — The Patience and Faith of the Saints ────── */
    {
      ref: 'Revelation 13:9–10',
      title: 'Here Is the Patience and the Faith of the Saints',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              9,
              t('If any man have an ear, let him hear.'),
            ),
            verse(
              10,
              t('He that leadeth into captivity shall go into captivity: '),
              hp('he that killeth with the sword must be killed with the sword', 'christ-no-retaliation'),
              t('. Here is '),
              hy('the patience and the faith of the saints', 'greek-hypomonee'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-hypomonee',
          title: 'Hypomonē — &ldquo;patience&rdquo;',
          script: 'ὑπομονή',
          translit: '<strong>hypomonē</strong> · patient endurance, remaining under',
          description:
            'Not passive weakness, but active staying-power. The willingness to remain under pressure, to not be moved from your allegiance, to hold your position even when every voice tells you to surrender or to strike back.',
        },
        {
          kind: 'christ',
          id: 'christ-no-retaliation',
          title: 'Christ Connection — The Sword Laid Down',
          html:
            'When Peter drew his sword in the garden and struck the servant of the high priest, Jesus told him: &ldquo;Put up again thy sword into his place: for all they that take the sword shall perish with the sword&rdquo; (Matt. 26:52). Revelation 13:10 echoes that moment. The way of the beast is the way of the sword — capture, kill, dominate. The way of the saints is different: if they are led into captivity, they go. If they are killed, they are killed. But they do not strike back. The saints&apos; victory is not military; it is the refusal to become like what they are fighting. That refusal — that patience, that faith — is what John calls the saints&apos; true armor.',
        },
        {
          kind: 'reflection',
          id: 'patience-faith',
          prompt: 'Where are you being called to patience and faith instead of retaliation or escape? What would it cost to actually refuse the sword the world hands you?',
        },
      ],
    },

    {
      title: '',
      blocks: [{ kind: 'divider' }],
    },

    /* ─── Revelation 13:11 — The Second Beast Rises ────────────────────── */
    {
      ref: 'Revelation 13:11',
      title: 'The Second Beast — Two Horns Like a Lamb',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              11,
              t('And I beheld another '),
              hy('beast', 'greek-therion-2'),
              t(' coming up out of the earth; and he had '),
              hg('two horns like a lamb, and he spake as a dragon', 'counterfeit-christ'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'counterfeit-christ',
          html:
            'The first beast came from the sea — from the chaos of nations and empires. This second beast comes from the earth — from the ground where humans live, where they walk, where they build their ordinary lives. It looks like a lamb — innocent, harmless, gentle, even Christ-like. But it speaks as a dragon — with the voice of the serpent, the deceiver, the father of lies. This is the most dangerous beast: the one that looks righteous but teaches lies. The one that makes evil look like good.',
        },
        {
          kind: 'greek',
          id: 'greek-therion-2',
          title: 'Thērion — the second &ldquo;beast&rdquo;',
          script: 'θήριον',
          translit: '<strong>thērion</strong> · untamed, uncontrolled',
          description:
            'Same word as the first beast, but a different kind of wildness. Not the raw power of empire, but the deception of something that looks tame, even holy, while being exactly the opposite.',
        },
      ],
    },

    /* ─── Revelation 13:12–14 — Making an Image, Deceiving the World ───── */
    {
      ref: 'Revelation 13:12–14',
      title: 'He Deceiveth Them That Dwell on the Earth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              12,
              t('And he exerciseth all the power of the first beast before him, and causeth the earth and them which dwell therein to worship the first beast, whose deadly wound was healed.'),
            ),
            verse(
              13,
              t('And '),
              hg('he doeth great wonders, making fire come down from heaven on the earth in the sight of men', 'wonders-deception'),
              t(','),
            ),
            verse(
              14,
              t('And '),
              hy('deceiveth them that dwell on the earth by the means of those miracles which he had power to do in the sight of the beast', 'greek-planao'),
              t('; saying to them that dwell on the earth, that they should make an image to the beast, which had the wound by a sword, and did live.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-planao',
          title: 'Planáō — &ldquo;deceiveth&rdquo;',
          script: 'πλανάω',
          translit: '<strong>planáō</strong> · to lead astray, to cause to wander',
          description:
            'Not a simple lie, but a complete misdirection. The people are led astray — they lose their way, their judgment, their ability to see clearly. The wonders make them dizzy.',
        },
        {
          kind: 'commentary',
          id: 'wonders-deception',
          html:
            'The second beast performs great wonders — even making fire fall from heaven in the sight of men. This echoes Elijah, who called fire down from heaven as a sign that he spoke for God (2 Kings 1:10). The second beast mimics the holy and uses the mimicry to direct worship toward the first beast. This is the deepest deception: to make people mistake a lie for a truth, an idol for a god, a counterfeit for the real thing.',
        },
      ],
    },

    /* ─── Revelation 13:15 — The Image Speaks ──────────────────────────── */
    {
      ref: 'Revelation 13:15',
      title: 'The Image of the Beast Speaks',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              15,
              t('And '),
              hg('he had power to give life unto the image of the beast, that the image of the beast should both speak', 'image-speaks'),
              t(', and cause that as many as would not worship the image of the beast should be killed.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'image-speaks',
          html:
            'The second beast makes an image of the first and gives the image a voice — a kind of life. An idol that can speak, that can seem to think and judge and command. The power to compel worship has become total: either you worship the image, or you die. The choice appears absolute. No third way.',
        },
        {
          kind: 'carry',
          html:
            'You may encounter systems of power — ideologies, institutions, screens, voices that seem to speak with the authority of truth — that demand your worship or threaten your life, your livelihood, your standing. John would have you name that for what it is: an image that has been given a voice, not a god. Its threats are real. Its power is real. But its claim to be worthy of your worship is a lie.',
        },
      ],
    },

    /* ─── Revelation 13:16–17 — The Mark ──────────────────────────────── */
    {
      ref: 'Revelation 13:16–17',
      title: 'The Mark in the Right Hand or Forehead',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              16,
              t('And he causeth all, both small and great, rich and poor, free and bond, to receive a '),
              hg('mark in their right hand, or in their foreheads', 'mark-sealed'),
              t(':'),
            ),
            verse(
              17,
              t('And that no man might buy or sell, save he that had the mark, or the name of the beast, or the number of his name.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark-sealed',
          html:
            'The mark is in the right hand — the hand of work, productivity, transaction — or in the forehead — the seat of thought and allegiance. To receive the mark is to have your labor and your mind stamped with the beast&apos;s name. Without it, you cannot buy or sell. You are locked out of the economy, the system, the world&apos;s flow of goods. This is total social and economic control: to be unmarked is to starve, to be homeless, to be cut off.',
        },
        {
          kind: 'carry',
          html:
            'In your own time, you may face systems that pressure your allegiance in exchange for survival — a career that demands your whole soul, a community that requires your full assent, a future that seems to depend on marking yourself with something you don&apos;t believe in. John is not naive about the cost of refusal. But he is drawing a line: there is a difference between what you must do to live and what you must believe to be loved by God. The saints in John&apos;s time knew starvation. Knowing what you will and will not mark yourself with is already a kind of freedom.',
        },
      ],
    },

    /* ─── Revelation 13:18 — Count the Number ──────────────────────────── */
    {
      ref: 'Revelation 13:18',
      title: 'Here Is Wisdom: Count the Number',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              18,
              t('Here is '),
              hy('wisdom', 'greek-sophia'),
              t('. Let him that hath understanding '),
              hg('count the number of the beast', 'number-666'),
              t(': for it is the '),
              hy('number of a man', 'humanness-beast'),
              t('; and his '),
              hg('number is Six hundred threescore and six', 'six-hundred-sixty-six'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-sophia',
          title: 'Sophía — &ldquo;wisdom&rdquo;',
          script: 'σοφία',
          translit: '<strong>sophía</strong> · skill, understanding, the grasp of what is true',
          description:
            'Not mere information, but understanding rooted in the fear of God. The ability to see through deception. To count a number and understand what it means requires this kind of wisdom.',
        },
        {
          kind: 'commentary',
          id: 'number-666',
          html:
            'Scholars have spent centuries on this number. Does it encode a name (using gematria, a system where letters equal numbers)? Is it Nero Caesar in numerical form? Is it a symbol of incompleteness — six, the number of humanity, repeated, the human kingdom set against God&apos;s perfection (seven)? Is it the number of man, fallen short of God&apos;s rest? John does not explain. He invites the reader to understand.',
        },
        {
          kind: 'commentary',
          id: 'humanness-beast',
          html:
            'The number is the number of a man — or &ldquo;of man&rdquo; in the sense of the human order, cut off from God, relying on human strength alone. Whatever the beast represents — an empire, a system, a future ruler — it is fundamentally human in origin, limited by human wisdom and human power. It cannot escape the number that measures it.',
        },
        {
          kind: 'commentary',
          id: 'six-hundred-sixty-six',
          html:
            'Six, six, six. Not seven (God&apos;s number). Not eight (new creation, resurrection). Three sixes — the repetition of human pride, perhaps, or simply the triple emphasis on incompleteness. What matters is not the code but the conclusion: this number is <em>countable</em>. It is not infinite. It is not God. It is not beyond measure. It is a number a human can understand, and understanding it is a kind of freedom.',
        },
        {
          kind: 'christ',
          id: 'christ-true-number',
          title: 'Christ Connection — The Number of the Risen One',
          html:
            'The beast is numbered 666 — the number of man, incomplete, locked in human insufficiency. Christ is risen: the number that transcends all counting, the One who is no longer subject to numbering or limitation. When John later describes the New Jerusalem, there is no counting its measurements — &ldquo;and the city lieth foursquare&rdquo; (Rev. 21:16), perfect in every dimension, unmeasurable in its joy.',
        },
        {
          kind: 'reflection',
          id: 'wisdom-number',
          prompt:
            'Where are you being asked to worship something you can see through if you slow down and look? What would it cost to count the cost of that allegiance and refuse it?',
        },
      ],
    },
  ],
};
