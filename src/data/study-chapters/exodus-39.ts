import { hp, hy, hg, t, type RichChapterContent } from './types';

export const EXODUS_39: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 39,

  intros: [
    'Exodus 39 is the completion. After the golden calf shattered everything, after Moses interceded and God relented, after judgment and forgiveness, Israel now makes the priestly garments exactly as the LORD commanded. Every detail matters: the ephod with its shoulder pieces, the breastplate holding the names of the tribes, the robe with its bells and pomegranates, the gold plate engraved "HOLINESS TO THE LORD." The chapter pulses with one refrain, repeated like a refrain across seven verses: "as the LORD commanded." This is the echo of Genesis 1&apos;s seven-fold "and God saw that it was good." After the fall, here is Israel restoring what was broken — and doing it precisely.',
    'The chapter ends with an inspection. Moses sees all the work, finds that the people have done it exactly as God commanded, and then does something profoundly simple: he blesses them. Not because the work was perfect in execution, but because it was obedient. And for the reader who knows the cross, this chapter holds a secret: the Son, too, will say at the end of His work, "It is finished" — the work the Father gave Him, completed precisely.',
  ],

  opener: {
    matchTitle: /priest/i,
    matchArtist: /tissot/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Exodus 39:1 — The Ephod and Breastplate ─────────────────────── */
    {
      ref: 'Exodus 39:1–7',
      title: 'The Ephod and Breastplate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 1,
              spans: [
                t('And of the blue, and purple, and scarlet, they made '),
                hg('cloths of service', 'c-service-garments'),
                t(', to do service in the holy place, and made the holy garments for Aaron; as the LORD commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-service-garments',
          html:
            'After the sin at the golden calf, after the breaking of the tablets, Israel begins again. The work is not hurried or sloppy. It is careful: blue, purple, scarlet — the same colors used in the tabernacle itself. These garments are woven with intention. They are not merely functional; they are prayers in thread and dye.',
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 2,
              spans: [
                t('And he made the ephod of gold, blue, and purple, and scarlet, and fine twined linen. And they did '),
                hg('beat the gold into thin plates', 'hebrew-zahav'),
                t(', and cut it into wires, to work it in the blue, and in the purple, and in the scarlet, and in the fine linen, with cunning work.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-zahav',
          title: 'Zahav — &ldquo;gold&rdquo;',
          script: 'זָהָב',
          translit: '<strong>zahav</strong> · precious metal, the treasure; also means "to shine"',
          description:
            'Gold beaten thin and woven into the work—not as weight, but as light. The priests who wear this will move, and the gold will catch the lamplight. Every movement of the priestly work is a kind of shining.',
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 3,
              spans: [
                t('And they made '),
                hg('shoulderpieces for it', 'c-shoulders'),
                t(', to couple it together: by the two edges was it coupled together.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shoulders',
          html:
            'The ephod rests on the priest&apos;s shoulders. In Scripture, the shoulder is the place of strength and kingship—"the government shall be upon his shoulder" (Isaiah 9:6). The priest bears the work. He does not merely recite it; he wears the weight and the privilege of standing before God.',
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 4,
              spans: [
                t('And the curious girdle of his ephod, that was upon it, was of the same, according to the work thereof; of gold, blue, and purple, and scarlet, and fine twined linen; as the LORD commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 5,
              spans: [
                t('And they wrought onyx stones '),
                hy('inclosed in ouches of gold', 'c-onyx-setting'),
                t(', and graved, as signets are graven, with the names of the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-onyx-setting',
          html:
            'The names of the twelve tribes are engraved on two onyx stones and set in gold on the ephod&apos;s shoulders. Every name. Every tribe. The priest carries Israel literally—not as a burden he bears alone, but as a privilege. He stands before God with every name written on his body.',
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 6,
              spans: [
                t('And he made the breastplate of cunning work, like the work of the ephod; of gold, blue, and purple, and scarlet, and fine twined linen.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('It was foursquare; they made the breastplate double: a span was the length thereof, and a span the breadth thereof, being doubled. And they set in it four rows of stones: the first row was a sardius, a topaz, and a carbuncle: this was the first row. And the second row, an emerald, a sapphire, and a diamond. And the third row, a ligure, an agate, and an amethyst. And the fourth row, a beryl, an onyx, and a jasper: they were inclosed in ouches of gold in their inclosings. And the stones were according to the names of the children of Israel, twelve, according to their names, like the engravings of a signet, every one with his name, according to the twelve tribes.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'The breastplate holds twelve stones, each engraved with a tribe&apos;s name. When you feel unnamed, unseen, forgotten—remember that you are written on the breastplate of the priest who stands before God for you. Your name is engraved there like a signet. Not because you earned it. Because He bore it. You are known by the One who brings your name into the holy place.',
        },
        {
          kind: 'reflection',
          id: 'breastplate',
          prompt: 'What does it mean to you that your name is written on the priestly breastplate—that you are carried into the holy place by someone else&apos;s work?',
        },
      ],
    },

    /* ─── Exodus 39:8–21 — The Robe of the Ephod ──────────────────────── */
    {
      ref: 'Exodus 39:22–26',
      title: 'The Robe: Bells and Pomegranates',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 22,
              spans: [
                t('And he made the robe of the ephod of woven work, all of blue.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And there was an hole in the midst of the robe, as the hole of an habergeon, with a band round about the hole, that it should not rend.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And they made upon the hems of the robe '),
                hg('pomegranates of blue, and purple, and scarlet, and twined linen', 'c-pomegranates'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-pomegranates',
          html:
            'Pomegranates are seeds—life, fruitfulness, the generative power of God&apos;s creation. Each one made by hand. The robe is not bare; it is dressed in the fruit of the earth. The priest does not stand before God in emptiness. He stands clothed in the evidence that God makes things grow.',
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 25,
              spans: [
                t('And they made '),
                hy('bells of pure gold', 'hebrew-bells'),
                t(', and put the bells between the pomegranates upon the hem of the robe, round about: a bell and a pomegranate, a bell and a pomegranate, round about the hem of the robe to minister in: as the LORD commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-bells',
          title: 'P&apos;amon — &ldquo;bell&rdquo;',
          script: 'פַּעֲמוֹן',
          translit: '<strong>p&apos;amon</strong> · a hammer-struck bell; the percussion of movement',
          description:
            'The bells are not silent. Each step the priest takes is a sound in the sanctuary—a living bell. The high priest cannot enter the holy place unheard. Even his movement is prayer.',
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 26,
              spans: [
                t('A bell and a pomegranate, a bell and a pomegranate, round about the hem of the robe to minister in: as the LORD commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ministry-sound',
          html:
            'The priestly work is not silent. A bell and a pomegranate, alternating all around—life and song, fruitfulness and sound. The priest moves, and the sanctuary rings. The people waiting outside hear the bells and know he is still alive, still moving, still before the presence. His obedience makes a sound.',
        },
        {
          kind: 'carry',
          html:
            'Your work in the world—your faithfulness in small things, your showing up, your careful attention to what was broken—it makes a sound. Not all of it gets applause. Most of it doesn&apos;t. But the priestly work of intercession, of standing for others, of bringing their names before God, rings like a bell in the sanctuary. Someone hears it. God hears it. The fruit is still growing.',
        },
        {
          kind: 'reflection',
          id: 'bells',
          prompt: 'Where do you labor quietly, and what would change if you knew that your faithfulness is making a sound in the holy place?',
        },
      ],
    },

    /* ─── Exodus 39:27–31 — The Tunic, Turban, and Gold Plate ──────────── */
    {
      ref: 'Exodus 39:27–31',
      title: 'Holiness to the LORD',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 27,
              spans: [
                t('And they made coats of fine linen of woven work for Aaron, and for his sons,'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And a mitre of fine linen, and goodly bonnets of fine linen, and linen breeches of fine twined linen,'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And a girdle of fine twined linen, and blue, and purple, and scarlet, of needlework; as the LORD commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 30,
              spans: [
                t('And they made the plate of the holy crown of '),
                hp('pure gold', 'c-gold-plate'),
                t(', and wrote upon it a writing, like to the engravings of a signet, '),
                hy('HOLINESS TO THE LORD', 'hebrew-kodesh'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kodesh',
          title: 'Kodesh — &ldquo;holiness&rdquo;',
          script: 'קֹדֶשׁ',
          translit: '<strong>kodesh</strong> · set apart, consecrated, belonging wholly to God',
          description:
            'Not merely beauty. Not merely craftsmanship. The crown declares a category: this belongs to God alone. The priest is not holy in himself; he is holy only by his dedication to God.',
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 31,
              spans: [
                t('And they tied unto it a lace of blue, to fasten it on high upon the mitre; as the LORD commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gold-plate',
          html:
            'The plate is fastened to the priest&apos;s forehead—right where you look first when you see a face. Not hidden. Not reserved for moments of ceremony. The proclamation is constant: <em>This person is set apart. This person belongs to God. His whole walk is holiness.</em> After the calf, after the breaking, this is Israel saying: we are rebuilt, and we are dedicated.',
        },
        {
          kind: 'carry',
          html:
            'You are not holy by your own effort. You are holy by His dedication. Your forehead bears His name whether you feel it or not. When you go into work tomorrow, when you struggle with a temptation, when you feel small and ordinary, the dedication is still there. You belong to Him. That belonging does not depend on your performance. It depends on His choice to set you apart.',
        },
        {
          kind: 'reflection',
          id: 'gold-plate',
          prompt: 'What would shift in your day if you lived as though "Holiness to the LORD" is written on your forehead—that you are set apart, not by your goodness, but by His dedication?',
        },
      ],
    },

    /* ─── Exodus 39:32–43 — The Completion and Inspection ──────────────── */
    {
      ref: 'Exodus 39:32–43',
      title: 'It Is Finished',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 32,
              spans: [
                t('Thus was all the work of the tabernacle of the tent of the congregation finished: and the children of Israel did according to all that the LORD commanded Moses, so did they. And Moses '),
                hg('did look upon all the work', 'c-inspection'),
                t(', and, behold, they had done it as the LORD had commanded, even so had they done it: and Moses blessed them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-inspection',
          html:
            'This is not Moses looking for flaws. This is a father looking at his children&apos;s work and saying: <em>You heard Me. You obeyed Me. You did it right.</em> After the calf, after the judgment, this blessing is profound. The people are restored. Not because they earned it, but because they returned to obedience. And obedience itself is the doorway back into blessing.',
        },
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            {
              number: 42,
              spans: [
                t('According to all that the LORD commanded Moses, so the children of Israel made all the work. And Moses '),
                hp('saw', 'c-sees-finished'),
                t(' all the work, and, behold, they had done it: as the LORD had commanded, even so had they done it: and Moses '),
                hg('blessed them', 'c-blessed'),
                t('.'),
              ],
            },
            {
              number: 43,
              spans: [
                t('And Moses said unto the children of Israel, This is the thing which the LORD commanded. If ye will offer a freewill offering unto the LORD, ye may. Every one that is of a willing heart let him bring it, an offering of the LORD; gold, and silver, and brass, and blue, and purple, and scarlet, and fine linen, and goats hair, and rams skins dyed red, and badgers skins, and shittim wood, and oil for the light, and spices for anointing oil, and for the sweet incense, and onyx stones, and stones to be set for the ephod, and for the breastplate.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'c-sees-finished',
          title: 'Christ Connection — It Is Finished',
          html:
            'Israel finishes the work exactly as the LORD commanded, and Moses blesses them. Centuries later, Jesus hangs on a cross and says, &ldquo;It is finished&rdquo; (John 19:30). John 17:4: &ldquo;I have finished the work which thou gavest me to do.&rdquo; The Son completes precisely what the Father gave Him—just as Israel completed the tabernacle. And the blessing that falls on the people when they obey is the same blessing that falls on all who trust in His finished work.',
        },
        {
          kind: 'commentary',
          id: 'c-blessed',
          html:
            'Moses blesses them. Not for being perfect, but for being obedient. For hearing what was broken, for turning from the calf, for doing the work exactly as they were told. The blessing is not earned; it is given. And it rests on obedience—not on outcome, not on success, but on the willingness to return and do what was commanded.',
        },
        {
          kind: 'carry',
          html:
            'When you turn from a wrong turn and return to obedience—even incomplete, even clumsy, even after failure—that is the moment the blessing falls. Not because the work is perfect. But because you heard Him, and you obeyed. The priestly work is not about flawlessness; it is about alignment. Alignment with what He has commanded. That is enough. That is everything.',
        },
        {
          kind: 'reflection',
          id: 'finished',
          prompt: 'What work has the Lord given you that is waiting for your obedience, not your perfection? What would it look like to return to it this week?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'artwork',
          matchTitle: /priest/i,
          matchArtist: /tissot/i,
          caption: 'Exodus 39:42–43 · The Work Is Finished',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 39',
    quote:
      'Israel made the priestly garments exactly as the LORD commanded: the ephod, the breastplate holding all twelve tribes, the robe with bells and pomegranates, the gold plate engraved "HOLINESS TO THE LORD." When it was finished, Moses saw that it was done right, and he blessed them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 39 · Study Guide',
  },

  hasHebrew: true,
};
