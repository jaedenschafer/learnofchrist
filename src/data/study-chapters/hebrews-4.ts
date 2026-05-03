import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Hebrews 4 — The Rest That Remains and the Word That Pierces
 *
 * A promise stands unfinished. The wilderness generation could not enter—
 * not because the way was barred, but because they would not believe.
 * Joshua did not give it. David still invites it. "There remaineth therefore
 * a rest to the people of God."
 *
 * This rest is not laziness. It is the Sabbath rest—the ceasing from your own
 * works and the entering into His sufficiency. And the one who calls you to
 * this rest is not distant or unmoved. He is a High Priest who has passed
 * through the heavens, who was tempted in every way you are tempted, who
 * knows the weight of what you carry. Come boldly to His throne.
 */
export const HEBREWS_4: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 4,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 17 },
  intros: [
    'Hebrews 4 opens with the echo of a promise. God swore to the wilderness generation that they would enter His rest. They refused to believe. They died in the desert—not because God had changed His mind, but because they had. Yet the promise is still standing. Joshua did not fulfill it. David, hundreds of years later, still invokes it in the Psalms. The rest remains open, waiting for those who will believe.',
    'The author then turns to the nature of this rest. It is the Sabbath rest—not merely a day of the week, but a spiritual reality. To enter it means to cease from your own works and to trust entirely in what Christ has accomplished. And here the chapter offers something tender: you do not bring this question to a God who is untouched by your struggle. You bring it to a High Priest who has walked your journey, who knows your weakness, who invites you to approach Him with boldness and without shame.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /rest|throne|grace|high priest/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Hebrews 4',
    quote:
      'The word of God is living and active, sharper than any two-edged sword. We have a great High Priest who passed through the heavens, touched with the feeling of our infirmities, tempted in all points like as we are, yet without sin. Come boldly unto the throne of grace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 4 · Study Guide',
  },

  sections: [
    /* ─── Hebrews 4:1–2 — Let Us Therefore Fear Lest We Come Short ─── */
    {
      ref: 'Hebrews 4:1–2',
      title: 'Let Us Therefore Fear Lest We Come Short',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              1,
              t('Let us therefore '),
              hg('fear', 'c-fear-reverent'),
              t(', lest, a promise being left us of entering into his rest, any of you should seem to come short of it.')
            ),
            verse(
              2,
              t('For unto us was the gospel preached, as well as unto them: but the '),
              hy('word preached did not profit them', 'c-word-profit'),
              t(', not being mixed with faith in them that heard it.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fear-reverent',
          html:
            'The fear here is not terror. It is reverence, alertness, a kind of serious caution. The promise is real. The rest is genuinely available. But it can be missed—not because God closes the door, but because you choose not to walk through it. Fear as the text uses it means: take this seriously. Do not sleepwalk past your own salvation.',
        },
        {
          kind: 'commentary',
          id: 'c-word-profit',
          html:
            'The wilderness generation heard the same gospel. They witnessed the miracles. They ate the manna from heaven. Yet the word did not profit them. Why? Because it was not "mixed with faith." Hearing the promise and believing it are not the same thing. You can sit in a room full of grace and miss it entirely if you do not receive it as true.',
        },
        {
          kind: 'carry',
          html:
            'How often have you heard a promise from God—in a sermon, in Scripture, in the quiet of your own prayer—and let it pass through you without really gripping it? The author invites you to a different kind of fear: reverence enough to actually believe what you have heard. Not mere intellectual assent, but the kind of faith that changes what you do.',
        },
        {
          kind: 'reflection',
          id: 'heb4-hear-believe',
          prompt:
            'What promise from God have you heard but not yet really mixed with faith? What would it look like to take it seriously today?',
        },
      ],
    },

    /* ─── Hebrews 4:3–7 — We Which Have Believed Do Enter Into Rest ──── */
    {
      ref: 'Hebrews 4:3–7',
      title: 'We Which Have Believed Do Enter Into Rest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              3,
              t('For we which have believed do enter into rest, as he said, As I have sworn in my wrath, If they shall enter into my rest: although '),
              hg('the works were finished from the foundation of the world', 'c-works-finished'),
              t('.')
            ),
            verse(
              4,
              t('For he spake in a certain place of the seventh day on this wise, '),
              hp('And God did rest the seventh day', 'christ-day-seven'),
              t(' from all his works.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-works-finished',
          html:
            'God did not rest because He was tired. He rested because the work was <em>done</em>. For us, to enter rest means to stop the internal striving—the proving, the achieving, the self-justification. Christ has finished the work. Your standing with God is not your achievement. It is His gift.',
        },
        {
          kind: 'christ',
          id: 'christ-day-seven',
          title: 'Christ Connection — The Unfinished Seventh Day',
          html:
            'Genesis 1 gives us six days of creation and a seventh day of rest. But notice: the seventh day has no "evening and morning." It is left open. Hebrews sees that open day as still waiting. When Jesus rose from the dead, He rose on the first day of the week—not the seventh. This means the seventh day was never closed. It is still open. It is still inviting you in. "Come unto me," Jesus says in Matthew 11:28, "all ye that labour and are heavy laden, and I will give you rest." You do not earn your way into the seventh day. You enter it by believing.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              6,
              t('Seeing therefore it remaineth that some must enter therein, and '),
              hg('they to whom it was first preached entered not in because of unbelief', 'c-unbelief-barrier'),
              t(':')
            ),
            verse(
              7,
              t('Again, he limiteth a certain day, saying in David, To day, after so long a time; as it is said, '),
              hy('To day if ye will hear his voice', 'c-todays-voice'),
              t(', harden not your hearts.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-unbelief-barrier',
          html:
            'Unbelief is the only barrier. The rest is not sealed. It is open. The only thing that keeps you out is your refusal to trust. The author is not harsh here. He is tender, almost urgent: the promise is real, and it is meant for you, but you have to actually believe it.',
        },
        {
          kind: 'commentary',
          id: 'c-todays-voice',
          html:
            'Notice the repetition of "today." [res:sefaria-psalm95-rest] It is always today that you must choose to hear His voice. Not someday when you are better, more worthy, more ready. Today. This day. The one you are living in. Will you soften your heart and listen?',
        },
        {
          kind: 'carry',
          html:
            'There is no waiting list for rest. There is no application process. The seventh day is open right now, and the invitation comes today. Not when you have achieved more, not when you are less broken, not when you have figured things out. Today. If you hear His voice—if something inside you softens toward Him—that is the moment. That is the open door.',
        },
        {
          kind: 'reflection',
          id: 'heb4-todays-invite',
          prompt: 'What keeps you from hearing His voice "today"? What would soften your heart to listen?',
        },
      ],
    },

    /* ─── Hebrews 4:8–10 — There Remaineth Therefore a Rest ─────────── */
    {
      ref: 'Hebrews 4:8–10',
      title: 'There Remaineth Therefore a Rest to the People of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              9,
              t('There remaineth therefore '),
              hp('a rest to the people of God', 'christ-rest-people'),
              t('.')
            ),
            verse(
              10,
              t('For he that is entered into his rest, he also hath ceased from his own works, as God did from his.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'heb4-sabbatismos',
          title: 'Sabbatismos — The Sabbath Rest',
          script: 'σαββατισμός',
          translit: '<strong>sabbatismos</strong> · the state of Sabbath rest',
          description:
            'This word appears nowhere else in the Greek New Testament. [res:brill-hebrews-sabbath] The author coins it to express something entirely new: not merely a day of rest, but a spiritual reality, a state of ceasing from your works entirely. To enter <em>sabbatismos</em> is to let go of the burden of proving yourself and to rest in His finished work.',
        },
        {
          kind: 'christ',
          id: 'christ-rest-people',
          title: 'Christ Connection — His Rest Is Now Your Rest',
          html:
            'Jesus told His disciples in Matthew 11:28: "Come unto me, all ye that labour and are heavy laden, and I will give you rest." And in John 14:27: "Peace I leave with you, my peace I give unto you." The rest the Old Testament pointed toward is now available through Him. It is not something you earn by being better. It is something you receive by believing. When you stop trying to justify yourself before God and instead trust that Christ has done it for you, you enter the rest. This is what it means to cease from your own works.',
        },
        {
          kind: 'carry',
          html:
            'Are you still working? Still trying to be enough, to prove yourself, to earn approval? The text invites you to cease. Not to become passive or lazy, but to release the internal striving. To stop measuring yourself against some invisible standard and instead to rest in the fact that you are loved, accepted, secure—not because of what you have done, but because of who you believe in.',
        },
        {
          kind: 'reflection',
          id: 'heb4-cease-works',
          prompt:
            'What are you still working so hard to prove? What if you stopped, just for today, and rested in the fact that Christ has already finished what matters most?',
        },
      ],
    },

    /* ─── Hebrews 4:11 — Let Us Labour Therefore to Enter Into That Rest ─ */
    {
      ref: 'Hebrews 4:11',
      title: 'Let Us Labour Therefore to Enter Into That Rest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              11,
              t('Let us '),
              hg('labour therefore to enter into that rest', 'c-labour-enter'),
              t(', lest any man fall after the same example of unbelief.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-labour-enter',
          html:
            'This seems contradictory at first: you "labour" to enter a rest. But the labour here is not the labour of achieving. It is the labour of believing, of pressing in, of saying yes to grace. It is the hard work of releasing control, of choosing to trust when everything in you wants to grab back the reins and prove yourself. The wilderness generation did not labour toward belief. They held back. Do not follow their example.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the hardest work is the work of rest—of actually letting yourself be loved without earning it. If you find yourself resisting that, pushing it away, telling yourself you don&apos;t deserve it, that is the labour the author is speaking of. It takes intentionality. It takes something like faith to actually receive what Christ is offering you.',
        },
        {
          kind: 'reflection',
          id: 'heb4-labour-believe',
          prompt: 'What would it look like for you to truly "labour" to believe this week? What is the hardest part of letting yourself rest?',
        },
      ],
    },

    /* ─── Hebrews 4:12–13 — The Word of God Is Quick and Powerful ───── */
    {
      ref: 'Hebrews 4:12–13',
      title: 'The Word of God Is Quick and Powerful',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              12,
              t('For the word of God is quick, and powerful, and sharper than any '),
              hy('twoedged sword', 'heb4-dichtonos'),
              t(', '),
              hg('piercing even to the dividing asunder of soul and spirit, and of the joints and marrow', 'c-piercing-divide'),
              t(', and is a '),
              hg('discerner of the thoughts and intents of the heart', 'c-discerner'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-piercing-divide',
          html:
            'To "divide soul and spirit" is to penetrate the deepest places of who you are—not just your actions or even your emotions, but your very spirit. The word of God is not surface-level. It goes down to the root. It sees what you have hidden even from yourself.',
        },
        {
          kind: 'greek',
          id: 'heb4-dichtonos',
          title: 'Dichtonos — The Two-Edged Sword',
          script: 'δίστομος',
          translit: '<strong>dichtonos</strong> · having two edges, cutting both ways',
          description:
            'A two-edged sword cuts both directions. The word of God cuts toward you and cuts away what is false in you. It judges, it convicts, it exposes. But it also heals, it builds up, it makes alive. Its power is not only punitive. It is redemptive. It wounds to heal.',
        },
        {
          kind: 'commentary',
          id: 'c-discerner',
          html:
            'The word discerns—it knows. It does not merely condemn without understanding. It penetrates all the way to your intention, to the why beneath what you do. And in that penetration is both exposure and mercy. You cannot hide from it, but neither do you need to. The One whose word it is already knows you entirely.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              13,
              t('Neither is there any creature that is not '),
              hg('manifest in his sight', 'c-open-before-him'),
              t(': but all things are '),
              hg('naked and opened unto the eyes of him with whom we have to do', 'c-naked-opened'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-open-before-him',
          html:
            'Manifest means made visible, exposed, known. There is no hiding. No part of your story—no sin, no shame, no secret failure or fear—is outside His sight. The question is: what do you do with that knowledge?',
        },
        {
          kind: 'commentary',
          id: 'c-naked-opened',
          html:
            'The Greek word here is <em>trachelizo</em>, which originally meant to pull someone&apos;s head back and force them to look you in the eye. All things are pulled open, exposed, nakedly visible before Him. Yet the author writes this not to terrify but to prepare you for the next truth: this God who sees everything is also a God of mercy.',
        },
        {
          kind: 'carry',
          html:
            'You are entirely known. Every motive, every failure, every secret you have never told anyone—it is all visible to Him. And instead of that being terrible news, it is the most liberating news you could hear. You do not have to hide anymore. You do not have to perform or pretend. The God who sees you completely is about to invite you to come near to Him anyway. In fact, because He sees you completely, His welcome is unshakeable.',
        },
        {
          kind: 'reflection',
          id: 'heb4-known-welcomed',
          prompt: 'What part of you are you most afraid God sees? What would change if you believed His response to that part was mercy?',
        },
      ],
    },

    /* ─── Hebrews 4:14–15 — We Have a Great High Priest ─────────────── */
    {
      ref: 'Hebrews 4:14–15',
      title: 'We Have a Great High Priest Passed Into the Heavens',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              14,
              t('Seeing then that we have '),
              hp('a great high priest, that is passed into the heavens', 'christ-high-priest-ascended'),
              t(', '),
              hg('Jesus the Son of God', 'c-jesus-son-god'),
              t(', let us hold fast our profession.')
            ),
            verse(
              15,
              t('For we have not an high priest which cannot be touched with the feeling of our infirmities; but was '),
              hg('in all points tempted like as we are, yet without sin', 'c-tempted-like-us'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jesus-son-god',
          html:
            'The author names the High Priest. It is Jesus. The Son of God. Not an abstraction, not a principle, not a concept—a person. One who became human, who walked the earth, who ate and slept and wept. One who understands what it is to be you.',
        },
        {
          kind: 'commentary',
          id: 'c-tempted-like-us',
          html:
            'Jesus was tempted. The text does not soften this. He faced the same kinds of temptation you face—toward fear, toward self-protection, toward self-gratification, toward unfaith. He felt the pull of all of it. Yet He never gave in. This means He truly understands the struggle. It was not easy for Him either. His compassion is not theoretical. It is earned.',
        },
        {
          kind: 'christ',
          id: 'christ-high-priest-ascended',
          title: 'Christ Connection — Your Advocate Now at the Right Hand',
          html:
            'In the Old Testament, the High Priest entered the Holy of Holies once a year, on the Day of Atonement, to make sacrifice for the people&apos;s sins. [res:sefaria-psalm110-priest] Jesus ascended into the heavens and entered—not an earthly temple, but the very presence of the Father. And He is there now, seated at the right hand of God, interceding for you (Romans 8:34). But He is not distant. He is not untouched by what you are going through. He is praying for you with the full knowledge of every struggle, every temptation, every weakness you carry. His intercession is grounded in His identification with you.',
        },
        {
          kind: 'carry',
          html:
            'Your High Priest is not someone who says, "I understand your struggle because I read about it." He is someone who says, "I understand your struggle because I lived it. I faced it. I felt the weight of it. And I know the way through." That changes everything. When you are tempted, when you are afraid, when you are unsure—He is at the throne of the Father, pleading your case with full knowledge and infinite compassion.',
        },
        {
          kind: 'reflection',
          id: 'heb4-high-priest-intercedes',
          prompt:
            'What temptation or struggle do you think Jesus best understands about you? What does it mean that He is right now interceding for you in that struggle?',
        },
      ],
    },

    /* ─── Hebrews 4:16 — Come Boldly Unto the Throne of Grace ──────── */
    {
      ref: 'Hebrews 4:16',
      title: 'Come Boldly Unto the Throne of Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              16,
              t('Let us therefore come '),
              hg('boldly unto the throne of grace', 'c-bold-approach'),
              t(', that we may obtain mercy, and find grace to help in time of need.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bold-approach',
          html:
            'Boldly. Not timidly. Not with your head down, shuffling in with your list of failures. Boldly. With the confidence that comes from knowing that the One sitting on the throne has already seen every single thing, has already paid for every single debt, and whose response is not judgment but grace. The throne is a throne of grace, not a throne of judgment. You are not coming to be condemned. You are coming to be helped.',
        },
        {
          kind: 'greek',
          id: 'heb4-parresia',
          title: 'Parresia — Boldness, Open Speech',
          script: 'παρρησία',
          translit: '<strong>parresia</strong> · boldness, outspokenness, freedom of speech',
          description:
            'In Greek, <em>parresia</em> means to speak openly, without fear of consequences. To speak as if you have every right to speak. The author is inviting you to approach God with that kind of boldness—not arrogance, but the confidence that you are welcome, that you belong, that you can speak your true need without pretense.',
        },
        {
          kind: 'christ',
          id: 'christ-throne-grace',
          title: 'Christ Connection — Access Through His Blood',
          html:
            'Hebrews 10:19 will say it directly: "Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus." In the Old Covenant, only the High Priest could enter the Holy of Holies, and only once a year. But Christ has opened the way. Because of His sacrifice, you have access. Because of His blood shed for you, the throne is now a throne of grace, not a throne of judgment. You do not earn this access. You receive it as a gift.',
        },
        {
          kind: 'carry',
          html:
            'Whatever you are carrying right now—your failure, your fear, your temptation, your weakness—is exactly what belongs in this conversation. Bring it boldly. Not because you deserve to be heard, but because you have been invited. Not because you are strong, but because He is. The grace you will find is not a sentimental sweetness. It is active help. It is strength in weakness. It is exactly what you need, exactly when you need it.',
        },
        {
          kind: 'reflection',
          id: 'heb4-bold-throne',
          prompt:
            'What need or struggle are you most hesitant to bring before God? What would it feel like to come boldly, knowing that the throne is a throne of grace?',
        },
        {
          kind: 'artwork',
          matchTitle: /throne|grace|mercy/i,
          caption: 'Hebrews 4:16 · Come Boldly Unto the Throne of Grace',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-psalm95-rest',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 95:11 — "My Rest"',
      url: 'https://www.sefaria.org/Psalms.95.11',
      description: 'The foundational OT promise of rest that Hebrews 4 interprets spiritually for the new covenant.',
    },
    {
      id: 'sefaria-psalm110-priest',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 110:4 — Eternal Priesthood',
      url: 'https://www.sefaria.org/Psalms.110.4',
      description: 'Establishes Christ&apos;s priesthood &ldquo;after the order of Melchisedec&rdquo; (Hebrews 5&apos;s foundation).',
    },
    {
      id: 'brill-hebrews-sabbath',
      kind: 'study',
      source: 'Brill',
      label: 'Sabbath Theology in Hebrews',
      url: 'https://brill.com/view/serial/23',
      description: 'Academic treatment of rest and Sabbath symbolism in Hebrews theology.',
    },
  ],

  hasHebrew: false,
};
