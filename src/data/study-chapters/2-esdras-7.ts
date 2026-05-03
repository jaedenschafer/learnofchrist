import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Esdras 7 — The Narrow Gate and the End of All Things
 *
 * 2 Esdras 7 is the theological heart of the book — a dense, visionary passage
 * where Ezra receives a cosmic revelation about the end of time. The chapter
 * unfolds as a series of images: a narrow sea passage accessible to the few,
 * a city reachable only by a narrow path between fire and water, the Messiah's
 * reign for 400 years followed by His death, seven days of silence, the
 * resurrection, and the division of humanity into the eternally saved (blessed
 * in seven joys) and the eternally lost (tormented in seven ways). Ezra grieves
 * for the multitude who perish; the angel teaches him that the few are saved
 * by their own response to grace.
 *
 * This is Jewish second-temple eschatology, not Christian dogma. The Messiah
 * reigning then dying is unusual — we engage it as theological speculation
 * without forcing a Christian reading. Yet for the reader on this side of
 * the cross, Christ's own redemptive death and the narrow way to salvation
 * illuminate every image.
 */
export const SECOND_ESDRAS_7: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 7,

  estimatedMinutes: { 5: 11, 10: 19, 15: 23 },
  intros: [
    'Ezra has been grieving the fate of Israel, asking the angel why so many perish in the world to come. The angel&apos;s answer is a long revelation about the end of time — perhaps the most detailed apocalyptic vision in all the biblical apocrypha. It speaks of a narrow way that only the few can enter, of a Messiah who will reign for 400 years and then die, of seven days of primordial silence, of resurrection and judgment, and of the eternal destinies of the saved and the lost. The vision is dense, symbolic, and darkly beautiful. It is also deeply pastoral: the angel is teaching Ezra that salvation is real, judgment is real, and the few who are saved are saved because they have truly chosen to be.',
    'For the reader on this side of the cross, almost every image in this chapter echoes with the voice of Christ. The narrow gate, the strait passage, the city on a hill, the one who reigns and dies — these are not Christian inventions, but second-temple Jewish theology. Yet when you read them in light of the Gospel, you see a profound alignment. Christ&apos;s "strait is the gate, and narrow is the way which leadeth unto life, and few there be that find it" (Matthew 7:14) is not a new thought; it is the completion of what Ezra saw.',
  ],

  opener: {
    matchArtist: /unknown/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Esdras 7',
    quote:
      'The Messiah will reign 400 years and die. Then come seven days of silence, the resurrection, and judgment. The few are saved in seven joys; the many are lost in seven torments. Salvation comes to those who truly choose it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 7 · Study Guide',
  },

  sections: [
    /* ─── 2 Esdras 7:1–9 — The Narrow Gate ────────────────────────────── */
    {
      ref: '2 Esdras 7:1–9',
      title: 'The Narrow Gate',
      blocks: [
        {
          kind: 'commentary',
          html:
            'Ezra has been asking the angel: why are there so many wicked in the world to come? Why do so few enter eternal life? The angel&apos;s answer is not comfortable. It begins with a vision, a paradox — a vision that Ezra himself was shown.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('And he said unto me, Behold, I will show thee the path of the way, and rehearse unto thee the manner of the judgment;'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 3,
              spans: [
                t('And I said, Go on, my Lord. Then said he unto me, '),
                hg('This is the matter; As for the straits and the narrow passages, whereby thou askest me, thus are they; few and many have I made', 'few-many-paradox'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'few-many-paradox',
          html:
            'The angel is not explaining away the paradox; he is affirming it. God has made the world so that few are saved and many are lost. This is not because God&apos;s grace is limited, but because the gate is narrow. Salvation requires a response, a choice, a walking through. Most do not choose to walk through.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 4,
              spans: [
                t('Like as a narrow passage in a great way, so is the future also compared unto the past; '),
                hy('but few there be that have left the broad way, and have entered into the narrow', 'broad-narrow'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'broad-narrow',
          html:
            'The image is crystalline: a narrow passage lies within a broad way. The many walk the broad way because it is wide, easy, obvious. The few notice the narrow passage and take it. The choice to enter that passage is a choice to leave the broad way — a deliberate turning.',
        },

        {
          kind: 'greek',
          id: 'stenos-narrow',
          title: 'Stenos — "Narrow" or "Strait"',
          script: 'στενός',
          translit: '<strong>stenos</strong> · narrow; cramped; difficult; requiring effort',
          description:
            'The Greek word stenos describes the narrow gate and narrow way of Matthew 7:14. It is not a way that is hidden or hard to find — it is a way that is genuinely difficult, that requires a deliberate choice and sustained effort. The narrowness is not deception; it is the nature of salvation itself.',
        },

        {
          kind: 'christ',
          id: 'christ-narrow-gate',
          title: 'Christ Connection — The Strait Gate',
          html:
            'Christ speaks in Matthew 7:14: "Strait is the gate, and narrow is the way which leadeth unto life, and few there be that find it." These are not new words; this is the same doctrine Ezra is learning. The narrow way is entered through a decision, a recognition, a choice to leave the broad way. And Christ teaches that finding that way is itself a grace — not all who look find it. Yet those who do find it walk toward Him.',
        },

        {
          kind: 'carry',
          html:
            'Are you on the broad way, or have you noticed the narrow passage? The text does not say the passage is hidden or impossible to find — it says it is narrow. It is visible. It requires a different choice than the one most people make. What would change if you stopped asking why so few are saved and started asking instead: what is the narrow passage in my own life that I have been walking past?',
        },

        {
          kind: 'reflection',
          id: 'choose-narrow',
          prompt:
            'What narrow passage have you entered in your faith that the world around you has not noticed? What did it cost to leave the broad way?',
        },
      ],
    },

    /* ─── 2 Esdras 7:10–25 — The Sea and the City ──────────────────────── */
    {
      ref: '2 Esdras 7:10–25',
      title: 'The Strait Sea-Passage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 10,
              spans: [
                t('When therefore he had talked with me, I went my way into the field, to wit, into the flower of the rose, and I beheld the place where the smoke went up from the burning;'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 12,
              spans: [
                t('And I said, O Lord, '),
                hg('shew me this thing; What is this smoke? for my heart is afraid', 'ezra-fear'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'ezra-fear',
          html:
            'Ezra has entered the vision. He sees smoke rising — the smoke of fire — and he is afraid. He asks the angel to explain. What he will learn is a vision of the last judgment, of a way through the sea guarded by fire and deep water. The fear is appropriate. What he is about to witness is the end of all things.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 13,
              spans: [
                t('Then said he unto me, '),
                hg('This is the passing away of the world to come', 'passing-away'),
                t('; '),
              ],
            },
            {
              number: 14,
              spans: [
                t('For when the judgment shall be now come of the most High, and shall be opened the things that are to come, neither shall the passage out of it nor the way thither be manifest.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'passing-away',
          html:
            'The angel tells Ezra: you are seeing the dissolution of all things — the world as we know it burning away. The passage to the world to come will not be a place of easy transit. It will be marked by fire, by the terror of judgment.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 15,
              spans: [
                t('But this is the condition; When the most High shall have ended the world, then shall appear the pathway and the city be shewed, '),
                hy('wherein the few be', 'few-be'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'few-be',
          html:
            'After the world ends, after the burning, the pathway becomes visible. The city built on a hill stands revealed. Not before. Not to everyone. Only to the few — to those who have already chosen the narrow passage, those who have already walked toward the fire.',
        },

        {
          kind: 'artwork',
          matchTitle: /fire|judgment|passage/i,
          caption: '2 Esdras 7:10–25 — The Fire and the Passage',
        },

        {
          kind: 'carry',
          html:
            'The vision teaches that the revelation of salvation comes at the end, not at the beginning. Faith, therefore, is not faith in what you can already see. It is faith in the pathway before the city is manifest, trust in the passage before it opens. You walk toward the fire without seeing the city yet — and that is precisely what faith means.',
        },

        {
          kind: 'reflection',
          id: 'faith-unseen',
          prompt:
            'What are you walking toward in faith without yet seeing the outcome? How would your trust change if you demanded to see the city before you entered the passage?',
        },
      ],
    },

    /* ─── 2 Esdras 7:26–35 — The Messiah and His Reign ──────────────────── */
    {
      ref: '2 Esdras 7:26–35',
      title: 'The Messiah&apos;s Reign',
      blocks: [
        {
          kind: 'commentary',
          html:
            'Now the angel turns to speak of the Messiah — but not the Messiah as Christian theology knows Him. This is second-temple Jewish eschatology. The Messiah will reign for 400 years and then die. This unusual doctrine requires pastoral care: we honor the text as honest Jewish theology without forcing a Christian reading onto it. And yet, Christ&apos;s death and resurrection are the fulfillment, the answer, the truth toward which all these images point.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 26,
              spans: [
                t('Behold, the days come, that '),
                hg('the Highest will begin to make manifest the world, and there shall be seen those that be delivered from the evil works', 'manifest-world'),
                t('; '),
              ],
            },
            {
              number: 27,
              spans: [
                t('For '),
                hg('the earth shall give forth them that are asleep in it, and the dust those that dwell silently in it, and the secret places shall deliver those that were committed unto it', 'resurrection'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'manifest-world',
          html:
            'The world to come will be manifest — revealed, made visible. The delivered will be seen. Those who have truly been delivered from evil will stand revealed in that world. Salvation is not secret; it becomes known at the resurrection.',
        },

        {
          kind: 'commentary',
          id: 'resurrection',
          html:
            'The earth itself will give up those that sleep in it. The secret places — the graves — will deliver the dead. Resurrection is not a spiritual abstraction. It is literal, bodily, the earth opening and returning what it holds. The dead will stand.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 28,
              spans: [
                t('And it shall come to pass after these things, when the Highest shall have showed thee all the wonders which I have shewed thee before: then shall he shew '),
                hg('the Messias whom thou now seest as a man exalted, but this Messias shall be revealed', 'messiah-revealed'),
                t(';'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'messiah-revealed',
          html:
            'The Messiah will be revealed — made known to all. He has been hidden, veiled, known only to the faithful. At the end, He becomes manifest to all. This is consistent with Christian teaching: Christ hidden in heaven will be revealed in glory. The end reveals what faith has always known.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 29,
              spans: [
                t('And all that have put off the mortal clothes shall be clothed with immortal apparel, and the Messias shall continue, and '),
                hy('all they that live shall live and not die', 'live-not-die'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'live-not-die',
          html:
            'Those who have put off the mortal body will be clothed with immortality. The Messiah will remain. And the living will not die — they will be transformed, not destroyed. Life wins. Death loses.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 33,
              spans: [
                t('And '),
                hg('the Messias shall be revealed with those things wherewithal he cometh, and shall rejoice forty years', 'messiah-forty'),
                t('.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And after these forty years the Messias shall die, and all men that have drawn breath shall die also.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'messiah-forty',
          html:
            'This is the unusual doctrine: the Messiah reigns and then dies. In Jewish second-temple theology, this was a way of saying that even the Messiah is subject to the limits of creation, subject to time. For Christians, this ancient text unknowingly prophesies something far deeper: that Christ&apos;s death is the very center of His salvation. The Messiah dies — and through His death, all who have put on immortal apparel live forever.',
        },

        {
          kind: 'christ',
          id: 'christ-messiah-death',
          title: 'Christ Connection — The Messiah&apos;s Death',
          html:
            'Paul teaches, "Christ our passover is sacrificed for us" (1 Corinthians 5:7). The Messiah&apos;s death in this Jewish vision finds its fulfillment in Christ&apos;s cross. Ezra saw that the Messiah must die. Christ&apos;s disciples saw it happen. But Christ did more — He died and rose again, and His death became the door through which all who believe enter into immortality. "I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live" (John 11:25, 26). The narrow passage runs through His death and out the other side.',
        },

        {
          kind: 'carry',
          html:
            'If the Messiah dies, what hope is there? The angel&apos;s answer is this: the ones who live do not die. The righteous who have already made their choice, who have already entered the narrow passage, do not fear the death even of the Messiah. They fear the judgment that comes after. And the judgment, for them, is not condemnation but blessing. What would change in your life if you truly believed that your own death, like the Messiah&apos;s death, is not the end of your story?',
        },

        {
          kind: 'reflection',
          id: 'death-not-end',
          prompt:
            'How does it change your faith to know that even the Messiah dies? What does it mean that His death becomes the doorway to eternal life?',
        },
      ],
    },

    /* ─── 2 Esdras 7:36–44 — The Seven Days of Silence ─────────────────── */
    {
      ref: '2 Esdras 7:36–44',
      title: 'The Seven Days of Silence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 36,
              spans: [
                t('And '),
                hg('when the world shall be turned into the old silence for seven days, like as in the beginning', 'silence-beginning'),
                t(', then shall all that are not dead be awakened;'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'silence-beginning',
          html:
            'After the Messiah dies, the world is returned to silence — the silence that preceded creation. The days of creation were six days of work, the seventh a day of rest and silence. Here, at the end, seven days of silence mirror the beginning. The world is unmade, returned to the void, readied for renewal. It is a descent into chaos before the resurrection. The silence is complete. The living are awakened in it.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 37,
              spans: [
                t('And '),
                hg('the eighth day and after shall the world be awakened of his sleep', 'eighth-day'),
                t(';'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'eighth-day',
          html:
            'The eighth day — the first day after the seven days of silence. The day after the world has been unmade and returned to nothing. On that day, the world wakes, as if from sleep. The new creation begins. The seventh day is the silence; the eighth is the resurrection.',
        },

        {
          kind: 'carry',
          html:
            'Between the Messiah&apos;s death and the resurrection is a silence — a void, a waiting, a time when nothing seems to happen. The disciples knew that silence. Three days in the tomb, the world holding its breath, the kingdom of God apparently defeated. The angel teaches Ezra that such silences are part of the design, part of the rhythm of creation itself. Every new thing is preceded by a silence, a return to nothing, a waiting. Do not mistake silence for abandonment. The eighth day will come.',
        },

        {
          kind: 'reflection',
          id: 'silence-waiting',
          prompt:
            'What silence are you waiting in right now? What would it mean to trust that the eighth day — the day of awakening — will come?',
        },
      ],
    },

    /* ─── 2 Esdras 7:45–61 — The Judgment and the Joys ──────────────────── */
    {
      ref: '2 Esdras 7:45–61',
      title: 'The Resurrection and Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 45,
              spans: [
                t('For '),
                hp('my judgment shall proceed, and I will shew mercy unto those of whom I have chosen', 'judgment-mercy'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'judgment-mercy',
          html:
            'Judgment is not cruelty. The Most High says: my judgment shall proceed, and I will show mercy. Judgment and mercy are not opposed. Judgment is the just assessment of each soul according to how it has responded to grace. Mercy is given to those who have chosen rightly. The judgment reveals the reality of the choices made.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 46,
              spans: [
                t('Then said he unto me, This is the manner of the judgment, which I promised thee.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 47,
              spans: [
                t('Behold, I have set before thee '),
                hg('fire and water; stretch out thy hand whithersoever thou wilt', 'fire-water-choose'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'fire-water-choose',
          html:
            'The judgment is a choice. Fire or water. Life or death. Ezra — and by extension, every soul — must choose. The Most High does not choose for us. The judgment reveals which we have chosen.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 48,
              spans: [
                t('For as for the fire and the water, so are the deeds of men measured; the deeds of those that are just and strong shall prosper, as a flame; but as for weak and feeble deeds, they shall be dried up like a stalk.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 50,
              spans: [
                t('For '),
                hg('the righteous which have many works laid up with thee, shall out of their own deeds receive reward', 'righteous-reward'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'righteous-reward',
          html:
            'The righteous receive reward from their own works — not because they have earned heaven as a wage, but because their deeds are the expression of their response to grace, and that response is what saves them. You are saved not by works, but the response that saves you always produces works.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 55,
              spans: [
                t('And there shall be shewed them '),
                hy('seven ways of torment, and seven ways of joy', 'seven-torments-joys'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'seven-torments-joys',
          html:
            'Seven ways of torment for the lost; seven ways of joy for the saved. The number seven signifies completeness, totality. The lost experience torment completely; the saved experience joy completely. There is no middle ground, no mixed result. You are known entirely; you are judged entirely; you are saved or lost entirely.',
        },

        {
          kind: 'carry',
          html:
            'The judgment is thorough. Nothing hidden remains hidden. You will be known as you truly are — and you will know yourself truly. For the saved, that knowledge brings joy. For the lost, it brings the torment of knowing exactly what they chose, exactly what they refused. The mercy of the judgment is that it is just. What you have chosen is what you receive.',
        },

        {
          kind: 'reflection',
          id: 'judgment-known',
          prompt:
            'When you imagine standing before God in judgment, knowing yourself completely and being known completely, what would bring you joy? What would bring you torment? Which person are you becoming?',
        },
      ],
    },

    /* ─── 2 Esdras 7:62–101 — The Seven Joys of the Saved ──────────────── */
    {
      ref: '2 Esdras 7:62–101',
      title: 'The Seven Joys of the Saved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 62,
              spans: [
                t('Now as concerning the torments of which thou hast asked me, thus it is: the places wherein the torments of the wicked are set are under the heavens;'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 75,
              spans: [
                t('Now this is the condition touching the end, that the just shall be tried in seven ways. '),
              ],
            },
            {
              number: 76,
              spans: [
                t('First, how they have been despised of all; second, how their souls have feared, and trembled in great danger; third, what uncleanness they have suffered; fourth, how the souls which dwell with them shall bewray them; fifth, how they shall wonder at the delay of the judgment; sixth, the reward laid up to them; seventh, the joy.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          html:
            'But the focus of the passage is on the righteous. They experience trials, yes — rejection, fear, shame, bewilderment, waiting. But these trials prepare them for the joy. The trials test their faith. They burn away attachment to this world and attach the soul to the world to come. They reveal what the soul truly loves.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 88,
              spans: [
                t('And they shall be shewed the crown, and how the righteous shall shine, and how the Lord shall '),
                hp('glorify those which have believed on his name', 'glorify-believers'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'glorify-believers',
          html:
            'The glory of the saved is the glory that comes from being believed in, from being known by God completely and loved without reservation. Their shining is the radiance of having been seen, treasured, and honored by the Most High.',
        },

        {
          kind: 'christ',
          id: 'christ-glory',
          title: 'Christ Connection — Glorified in Christ',
          html:
            'Peter teaches: "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance" (2 Peter 3:9). And later: "But according to his promise we look for new heavens and a new earth, wherein dwelleth righteousness" (2 Peter 3:13). The glory Ezra sees is the glory that Christ promises to all who believe. "Father, I will that they also, whom thou hast given me, be with me where I am; that they may behold my glory" (John 17:24). The seven joys of the saved are the fulfillment of the promise Christ made to His own.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 91,
              spans: [
                t('Now concerning the time, when the end of these things shall be: the days are coming, wherein those which dwell upon the earth shall be visited, because they are wrapped in iniquity;'),
              ],
            },
          ],
        },

        {
          kind: 'artwork',
          matchTitle: /glory|resurrection|heaven/i,
          caption: '2 Esdras 7:88–101 — The Glory of the Righteous',
        },

        {
          kind: 'carry',
          html:
            'The seven joys are not described in detail — they are implied to be beyond description. What we know is that they are real, that they are reward, that they are glory. And they are the end toward which all the trials of faith point. Every moment of fear you have endured in faith, every rejection you have suffered for righteousness, every shame you have borne rather than compromise — these are not wasted. They are refined in the fire of judgment and emerge as gold, as glory, as the joy that nothing in this world could ever give.',
        },

        {
          kind: 'reflection',
          id: 'joys-ahead',
          prompt:
            'What trial of faith are you enduring now? How would knowing that it is preparing you for unspeakable joy change the way you bear it?',
        },
      ],
    },

    /* ─── 2 Esdras 7:102–115 — The Few Are Saved ─────────────────────── */
    {
      ref: '2 Esdras 7:102–115',
      title: 'The Few Are Saved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 102,
              spans: [
                t('And I answered and said, O Lord, that dwellest in eternity, thou knowest what thy creature can endure, and whether or no shall he endure.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'lord-knoweth',
          html:
            'Ezra now responds to the vision. He has heard of the trials, the judgment, the joys. And he grieves. He says to God: you know what your creature can endure. You know whether or not we shall endure. You see us clearly, and you know what we are capable of bearing.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 103,
              spans: [
                t('Then said he unto me, I know before all the world, that all that have been born are transgressors, and thou art just, in that thou fearest not to draw near unto me. '),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 105,
              spans: [
                t('And therefore I say unto thee, That '),
                hg('many more do I see that have sinned, than such as have abstained from sin', 'many-sinned-few-saved'),
                t('; except only '),
                hg('a few which have holden out in the law', 'few-holden-out'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'many-sinned-few-saved',
          html:
            'The Most High answers: I see the reality. Many have sinned. Few have refrained from sin. This is not God&apos;s failure; it is the human condition. We are transgressors by nature, and only a few, by God&apos;s grace and their own choice, have held out in the law.',
        },

        {
          kind: 'commentary',
          id: 'few-holden-out',
          html:
            'The few who hold out are not the few who are forced to hold out. They are the few who have made the choice, moment by moment, day by day, to keep covenant, to walk the narrow way, to respond to grace by not turning back.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 106,
              spans: [
                t('Wherefore, if thou shalt die the death of all men, thy reward shall be the greater; but if thou shalt depart out of the common way of mortality, thou shalt receive such things as are reserved for thee. '),
              ],
            },
          ],
        },

        {
          kind: 'christ',
          id: 'christ-few-chosen',
          title: 'Christ Connection — Many Called, Few Chosen',
          html:
            'Christ teaches the same hard truth in Matthew 22:14: "Many are called, but few are chosen." And in Matthew 7:14: "Strait is the gate, and narrow is the way which leadeth unto life, and few there be that find it." This is not because God is miserly with grace. It is because salvation requires a response, a walking through, a choosing. The grace is freely offered. The narrow way is open. But not all who see it enter. Not all who are called respond. The few who do are those who have truly chosen — and that choice is the greatest reward.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 107,
              spans: [
                t('For '),
                hg('the world to come shall judge those to whom is now given the law', 'world-judges-law'),
                t('. But the '),
                t('time of this world passeth away.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'world-judges-law',
          html:
            'Those who have been given the law — who have had the opportunity to choose — will be judged by it. The judgment is not based on what you never knew. It is based on what you were shown and how you responded.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 113,
              spans: [
                t('He answered me again, saying, '),
                hg('The most High made this world for the sake of many, but the world to come for the sake of few', 'world-many-few'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'world-many-few',
          html:
            'The design of the two worlds is different. This world is made for the many — for all creation, for the free expression of choices, for the drama of faith playing out across countless lives. The world to come is made for the few — for those who have chosen, who have held out, who have entered the narrow passage. Both worlds are real. Both are necessary. But they serve different purposes.',
        },

        {
          kind: 'carry',
          html:
            'You are not saved because you are good. You are not lost because you are bad. You are saved if you choose to enter the narrow passage, if you hold out in the law, if you respond to grace by turning toward it and not away. The few who are saved are not saved by luck or random assignment. They are saved by their own choice, empowered by grace. The invitation is to everyone. But only the few accept. Which group are you joining?',
        },

        {
          kind: 'reflection',
          id: 'few-choice',
          prompt:
            'What does it cost you to enter the narrow way? Why do you think most people choose not to walk it? What would it mean to commit to being among the few?',
        },
      ],
    },
  ],
};
