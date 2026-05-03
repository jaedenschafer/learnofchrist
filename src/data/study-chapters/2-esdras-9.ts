import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Esdras 9 — The Angel Unfolds the End Times and Ezra&apos;s Fast
 *
 * In chapter 9, the angel Uriel continues his apocalyptic discourse with Ezra,
 * revealing the signs of the end times and what it means to be among the elect.
 * The Most High&apos;s judgment unfolds: mourners shall be exalted to glory, and
 * only the few elect will see God&apos;s face. Ezra must fast for seven days in a
 * flowery field—nourished only by the flowers of the field—that he may receive
 * a new vision. The chapter is heavy with eschatological imagery and the promise
 * that those who endure shall behold the glory of God.
 */
export const SECOND_ESDRAS_9: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 9,

  intros: [
    'The angel Uriel draws Ezra deeper into the mysteries of the end times. The visions grow darker, stranger, more urgent. The signs multiply. Yet woven through every dark prophecy runs a thread of hope: those few who endure, who remain faithful when all else falls away, shall see the glory of the Most High.',
    'And then comes the call to prepare. Ezra must fast for seven days in a field of flowers, eating only what the earth yields. It is a strange preparation—not the usual fast of bread and water, but a fast that feeds him on beauty itself. Only so will he be ready to receive the final vision.',
  ],

  sections: [
    /* ─── 2 Esdras 9:1–13 — The Signs of the End ────────────────────────── */
    {
      ref: '2 Esdras 9:1–13',
      title: 'The Signs of the End Times Unfold',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(1, t('And the angel said unto me, '), hp('These are the signs of the end that the Most High shall shew', 'signs-end'), t(':'), ),
            verse(2, t('Behold, the days come, when those that dwell upon earth shall be seized with great terror; and the way of truth shall be hidden, and the land shall be barren of faith.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'signs-end',
          html:
            'The angel unveils the eschatological calendar. In the last days, terror seizes the earth. The way of truth—the path God has marked out—is hidden from sight. Faith drains from the land like water from a broken vessel. This is not mere chaos; it is the deliberate obscuring of God&apos;s presence, the hardening of hearts.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(3, t('And iniquity shall be increased above that which now thou seest, or that thou hast heard of long ago.'), ),
            verse(4, t('And the land that thou seest now to rule shall be waste and untrodden; and men shall see it desolate.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'iniquity-increase',
          html:
            'Wickedness multiplies beyond what any generation has known. The world that seems stable to us will become waste—unmapped, uninhabited, reduced. This vision echoes apocalyptic passages across Scripture: the earth groaning, creation itself undone by sin.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(5, t('But if the Most High grant thee to live, thou shalt see it after the third time; and '), hg('the sun suddenly shall shine again in the night, and the moon three times in a day', 'sun-moon-reversed'), t(':'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sun-moon-reversed',
          html:
            'Yet if Ezra survives—if he endures—he will witness the cosmic reversal. The heavens themselves will be inverted: the sun shining at midnight, the moon appearing three times in a single day. This is the language of apocalypse: the laws of creation unmade, time itself fractured.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(6, t('And blood shall drop out of wood, and the stone shall give a voice, and the peoples shall be troubled.'), ),
            verse(7, t('And he whom none knoweth shall rule, and the beasts shall change their places; and the dumb beasts shall speak.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'blood-stone-voice',
          html:
            'The natural order inverts completely. Trees bleed. Stones cry out. Beasts that have been mute speak with voices. All of creation witnesses the upheaval—and all creation groans. This is the cosmos in labor, birth pangs of the age to come.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-yom-ha-din',
          title: 'Yom HaDin — "The Day of Judgment"',
          script: 'יוֹם הַדִּין',
          translit: '<strong>Yom HaDin</strong> · the day of judgment; the day of decision',
          description:
            'The Day of Judgment is not a single moment but an unraveling—a time when God&apos;s hidden judgment becomes visible in all creation. It is the day when what has been sown is reaped.',
        },

        {
          kind: 'christ',
          id: 'christ-signs-end',
          title: 'Christ Connection — The Signs Jesus Spoke',
          html:
            'Jesus gives His own list of end-times signs in Matthew 24: "Ye shall hear of wars and rumours of wars... and there shall be famines, and pestilences, and earthquakes in divers places." He tells His disciples, "When ye therefore shall see all these things... know that it is near" (Matthew 24:6, 7, 33). The angel&apos;s description of cosmic upheaval—sun and moon reversed, signs in heaven and earth—matches Christ&apos;s own prophecy word for word. The same judgment that Ezra hears of is the judgment Christ announces.',
        },

        {
          kind: 'carry',
          html:
            'When the world grows dark and the signs multiply, when truth seems hidden and faith drains away, you are not caught off guard if you have heard these words. God has warned His people. The end times are not a secret whispered in darkness; they are written down, spoken aloud, announced beforehand. You know they come. The question is: will you be ready?',
        },

        {
          kind: 'reflection',
          id: 'signs-aware',
          prompt: 'Where do you see the signs of the end playing out in your own time? How does knowing they are coming change how you live today?',
        },
      ],
    },

    /* ─── 2 Esdras 9:14–25 — The Mourners Exalted; The Elect Remain ──────── */
    {
      ref: '2 Esdras 9:14–25',
      title: 'The Elect and the Exalted: A Reversal of All Earthly Order',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(14, t('And it shall come to pass, that whosoever remaineth after all that I have foretold unto thee shall himself be saved, and shall '), hg('see my salvation in my land, and within my borders', 'see-salvation-land'), t('.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'see-salvation-land',
          html:
            'A promise cuts through the darkness. Those who endure—who hold fast when the signs come, who do not fall away—shall see the salvation of the Most High. And they shall see it in a land, within borders. This is not a vague spiritual promise but concrete, geographical, real. God&apos;s salvation takes place in the material world.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(15, t('Then shall they that have been sorrowful leave the figure of this present time, and shall receive glory without measure: '), ),
            verse(16, t('For all grief shall pass away; and the weakness that groweth weak shall wax strong in that day.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sorrow-to-glory',
          html:
            'Here is the reversal. Those who have mourned—who have grieved in this age, who have carried sorrow—shall receive glory beyond measure. The tears they wept become proof that they belonged to God&apos;s people. Sorrow is the mark of the faithful in a fallen world; it becomes their passport to glory.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(17, t('And as for the few that shall be left, I will guard them, and deliver them that are afflicted to marvellous health.'), ),
            verse(18, t('But the rest shall see that I have sent my servants the prophets; but they have not hearkened unto them; therefore have I confounded their inventions.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'few-guarded',
          html:
            'The "few"—the small remnant, the elect—shall be kept safe and healed. But the "rest," those who rejected the prophets, who hardened their hearts, shall face the Most High&apos;s judgment. Their own schemes shall become their undoing. Their inventions shall confound them.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(19, t('This is the covenant: when the time cometh, I will '), hp('show them that seek after righteousness the glory of the Most High', 'show-glory-elect'), t('.'), ),
            verse(20, t('Hear now these words: Blessed are they that live and keep my statutes; for they shall enter into rest.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'show-glory-elect',
          html:
            'The covenant is renewed for the endtimes: those who seek righteousness shall see the Most High&apos;s glory with their own eyes. This is not transmitted through prophets or written in books; it is direct vision. To see the face of God—this is the ultimate beatitude, promised only to the elect who endure.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(21, t('Behold, the world shall end; and those that dwell therein shall pass away: but they that believed on me shall pass into another world.'), ),
            verse(22, t('For this present world shall pass away, and the new world shall abide everlasting.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'world-pass-eternal',
          html:
            'The angel states it plainly: this world—the one we know, with its sorrows and fears and certainties—shall pass away. But those who believed, who kept faith, shall pass into another world. And that world shall endure forever. Believers cross over; the world dissolves.',
        },

        {
          kind: 'greek',
          id: 'greek-aionios',
          title: 'Aionios — "Eternal"',
          script: 'αἰώνιος',
          translit: '<strong>Aionios</strong> · eternal; lasting through the ages; forever',
          description:
            'Not temporary, not limited to a span of years. Aionios speaks of time without end, of eternity itself. The new world is not a repair of this one but something wholly other, wholly enduring.',
        },

        {
          kind: 'christ',
          id: 'christ-elect-glory',
          title: 'Christ Connection — The Elect Shall See God&apos;s Face',
          html:
            'Paul writes, "Now we see through a glass, darkly; but then face to face" (1 Corinthians 13:12). The elect—those who believe in Christ—shall see the Most High directly, as Christ Himself sees the Father. And Christ is the glory they shall see: "the brightness of his glory, and the express image of his person" (Hebrews 1:3). The elect do not see some distant vision of God; they behold Christ, in whom God&apos;s glory is made visible.',
        },

        {
          kind: 'carry',
          html:
            'You are invited into the covenant of the end times. The question is simple: will you keep God&apos;s statutes? Will you seek righteousness even when the world grows dark? Will you believe when signs multiply? Those who do—who hold fast to faith when all else shakes—shall see the glory of the Most High. You shall pass through; the world shall not hold you.',
        },

        {
          kind: 'reflection',
          id: 'elect-covenant',
          prompt: 'What would it look like to truly believe in the face of the signs? How would it change your choices today if you knew you would see God&apos;s glory?',
        },
      ],
    },

    /* ─── 2 Esdras 9:26–37 — The Most High&apos;s Promise and Warning ──────── */
    {
      ref: '2 Esdras 9:26–37',
      title: 'The Most High Entreats; The People Must Choose',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(26, t('And the Most High said unto me, Come, stand upon thy feet, and hear a word full of terror: for all they that are born are sick, and they that be sick cannot refrain from sinning.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'born-sick',
          html:
            'Humanity itself is sick—not merely individuals, but the human condition. To be born into this world is to inherit sickness, and sickness breeds sin. This is not blame; it is diagnosis. The Most High does not accuse but states the condition of the creation.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(27, t('Yet, behold, the Lord striveth with me, and I am afflicted with sorrow even in my sickness: how long shall I suffer these things?'), ),
            verse(28, t('And the Lord said, I have set before thee life and death, good and evil; choose now which thou wilt follow.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'choose-life-death',
          html:
            'Even in sickness, the choice remains. The Most High does not force obedience; He sets before humanity the fullness of the choice. Life and death. Good and evil. Choose. The responsibility falls on the creature, not the Creator. This is the freedom and the burden of being human.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(29, t('And Ezra said, O Lord, I am not able to bear thy words: for my heart is weak and my spirit trembleth.'), ),
            verse(30, t('And the Lord answered and said, '), hg('I have laboured more in this, than in the creation of the world', 'laboured-more'), t(': for I have gone over the ways of my people as a shepherd over his flock.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'laboured-more',
          html:
            'The Most High&apos;s confession is staggering: the labor of calling His people, tending them, pleading with them has cost Him more than the creation itself. The shepherd tends his flock; God tends His people across generations, with infinite patience and infinite grief.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(31, t('Say therefore unto them, Thus saith the Lord: '), hp('Behold, I set before you a way of life and a way of death', 'way-life-death'), t(': follow ye that which is good, and ye shall live in my sight.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'way-life-death',
          html:
            'Two ways. One leads to life lived "in God&apos;s sight"—in His presence, under His care, in covenant with Him. The other leads to death. The choice is yours. Choose.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(32, t('But if ye turn away and deny my commandments, ye shall die the death that I have set before you.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'turn-away-die',
          html:
            'Refusal has weight. To turn from God&apos;s commandments is to choose death—not as a punishment inflicted externally, but as the natural consequence of severing oneself from the source of life.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-derech',
          title: 'Derech — "Way"',
          script: 'דֶּרֶךְ',
          translit: '<strong>Derech</strong> · way; path; journey',
          description:
            'Life is a walking. God sets two paths before us: one that leads toward Him, one that leads away. The way is not static; it is a direction of travel, a choice made again each day.',
        },

        {
          kind: 'christ',
          id: 'christ-the-way',
          title: 'Christ Connection — I Am the Way, the Truth, and the Life',
          html:
            'Jesus says, "I am the way, the truth, and the life: no man cometh unto the Father, but by me" (John 14:6). The two ways—life and death—are fulfilled in the choice to follow Christ or reject Him. He is the personification of "the way of life." To know Him is to live; to deny Him is to refuse the source of life itself.',
        },

        {
          kind: 'carry',
          html:
            'The choice is placed before you every day. Not once, at some distant moment of conversion, but now. Will you follow the way of life? Will you keep His commandments? Will you live in His sight? Or will you turn away? The Most High has labored for you—tended you as a shepherd tends his flock. He asks only this: choose life.',
        },

        {
          kind: 'reflection',
          id: 'choose-life-today',
          prompt: 'What would it look like to truly choose the way of life today? Where are you still walking the way of death?',
        },
      ],
    },

    /* ─── 2 Esdras 9:38–50 — The Command: Fast in a Flowery Field ────────── */
    {
      ref: '2 Esdras 9:38–50',
      title: 'The Angel&apos;s Instruction: Seven Days of Flowers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(38, t('And when I heard these words, I rose upon my feet, and hearkened; and the angel said unto me, '), hg('Go thy way into a field where no house is builded, and eat nothing but the flowers of the field', 'field-flowers'), t(';'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'field-flowers',
          html:
            'A strange command. Not water and bread—the typical fast—but flowers. Ezra is told to enter a place untouched by human habitation, a field where only the wild things grow. There he shall eat flowers alone. This is not deprivation but a different kind of nourishment: the beauty and sustenance of nature itself.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(39, t('And thou shalt not taste of meat, neither shall wine come into thy mouth; but thou shalt eat flowers only.'), ),
            verse(40, t('And do this for seven days; and after seven days thou shalt see more than in all thy life before.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'seven-days-flowers',
          html:
            'Seven days—the number of completeness, of perfection. For that span, Ezra will strip away every human comfort, every cultivated thing. No wine, no meat. Only the flowers that grow without human hands. And after seven days, the most profound vision of his life shall come. Fasting from human plenty opens the way to divine revelation.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(41, t('For thou hast forsaken thy own will, and applied thyself unto my law, and served me in truth.'), ),
            verse(42, t('Therefore will I show unto thee the secrets of the times, and speak unto thee of the end.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'secrets-times',
          html:
            'The fast is not punishment but a gift. Because Ezra has set aside his own will and aligned himself with God&apos;s law, God will reveal secrets hidden from the beginning—the mysteries of the times, the shape of the end. Obedience opens doors that rebellion seals shut.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(43, t('And Ezra said, What manner of rest is this whereof thou speakest?'), ),
            verse(44, t('And he said unto me, The seventh day shall be of great gladness, and the eighth day shall be of rest; wherein shall all things come to an end, even as the first beginning.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'seventh-eighth-day',
          html:
            'Ezra asks: what does rest mean in this new age? The angel answers in language that echoes the creation account. The seventh day is gladness; the eighth day begins rest. It is the new creation, made in the image of the old but transformed. Where creation once rested on the seventh day, the new world begins its rest on the eighth—the first day of the resurrection age.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(45, t('So I took food; and gave the angel that brought me the word the flower of the field, and he ate it also.'), ),
            verse(46, t('And after seven days I awoke, and my heart was moved with great fear.'), ),
          ],
        },
        {
          kind: 'commentary',
          id: 'seven-days-complete',
          html:
            'Ezra obeys. He eats the flowers of the field, and in a striking moment, gives the angel also to eat. The angel—God&apos;s messenger—partakes of the same nourishment. They are united in this act of faith and obedience. After seven days, Ezra wakes. Fear seizes him—the fear that precedes revelation, the trembling before the holy.',
        },

        {
          kind: 'greek',
          id: 'greek-phobos',
          title: 'Phobos — "Fear"',
          script: 'φόβος',
          translit: '<strong>Phobos</strong> · fear; awe; reverence',
          description:
            'This is not the fear of harm but the awe that seizes a person when confronted with the presence of the divine. It is the fear that makes you know you are in the presence of the Holy One.',
        },

        {
          kind: 'artwork',
          matchTitle: /field|flower|garden/i,
          caption: '2 Esdras 9:38–46 · Ezra in the Flowery Field',
        },

        {
          kind: 'christ',
          id: 'christ-fast-vision',
          title: 'Christ Connection — Fasting Opens the Way to Vision',
          html:
            'Jesus fasted forty days in the wilderness (Matthew 4:2), and during that fast He was tempted and also strengthened. Paul writes of fasting as a preparation for spiritual work: "In fastings oft" (2 Corinthians 11:27), he endured hardship to sharpen his discernment. Ezra&apos;s fast in the flowery field mirrors this principle: the emptying of the self of human appetite opens the way to divine speech. And Christ, who fasted, who emptied Himself—He is the ultimate witness to the power of surrender to receive the Father&apos;s word.',
        },

        {
          kind: 'carry',
          html:
            'You have been living on the bread of this world—the comforts, the securities, the ordinary sustenance. What if you set those aside? What if, for a season, you ate only flowers—beauty, prayer, the presence of God—and nothing else? The fast need not be long, but it must be real. In that emptiness, in that surrender of your own will, revelation comes. God speaks to those who have made space to listen.',
        },

        {
          kind: 'reflection',
          id: 'fast-revelation',
          prompt: 'What would you have to set aside to make space for revelation? What is God asking you to fast from, that you might hear His voice more clearly?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Esdras 9',
    quote:
      'And the Most High said unto me, Come, stand upon thy feet, and hear a word full of terror: for all they that are born are sick, and they that be sick cannot refrain from sinning. But I have set before thee life and death, good and evil; choose now which thou wilt follow.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 9 · Study Guide',
  },

  hasHebrew: true,
};
