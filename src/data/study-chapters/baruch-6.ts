import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Baruch 6 — The Letter of Jeremiah
 *
 * A sustained polemic against idolatry structured as a letter from Jeremiah
 * to the exiles bound for Babylon. Systematically demonstrates the absurdity
 * of idols: they cannot speak, see, save themselves from rust or theft, are
 * dressed by human hands, must be carried, are useless to the dead and useless
 * to the living. Refrain: "whereby they are known not to be gods: therefore
 * fear them not." Famous comparison: "as the scarecrow in a garden of cucumbers
 * keepeth nothing, so are their gods of wood." Ending: "better therefore is
 * the just man that hath none idols: for he shall be far from reproach."
 */
export const BARUCH_6: RichChapterContent = {
  bookSlug: 'baruch',
  bookName: 'Baruch',
  chapter: 6,

  estimatedMinutes: { beginner: 6, intermediate: 13, deep: 16 },
  intros: [
    'Baruch 6 is a practical warning for the exiles about to enter Babylon. They will be surrounded by a magnificent religious machine. The temples are grand. The priests are confident. The people are devoted. It would be easy to ask: if the God of Israel could not protect us from Babylon, perhaps these Babylonian gods are stronger?',
    'What Jeremiah sends is a letter that cuts through the glitter and shows the emptiness. The idols are wood and metal. They do not move unless moved. They do not speak unless words are put in their mouths. They do not see, hear, smell, or taste anything. This is the exiles&apos; anchor: reason itself exposes the absurdity of idolatry. The true God, by contrast, is alive, present, and worthy of trust even in captivity.',
    'The letter is a masterpiece of satire and logic—but it is also a love letter from Jeremiah to his people. He is not abandoning them to Babylon. He is sending them truth to stand on.',
  ],

  sections: [
    /* ──── Opening: The Letter to the Exiles ──────────────────────────── */
    {
      ref: 'Baruch 6:1–7',
      title: 'A Letter to the Captives',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(1, t('A copy of an epistle, which Jeremiah sent unto them which were to be led captives into Babylon by the king of the Babylonians; to certify them as the Lord had commanded him.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-epistle',
          html:
            'Jeremiah writes from Jerusalem to the exiles in Babylon. He cannot be with them physically—but he can send his words. The exiles will face pressure, seduction, and doubt. They will see idolatry all around them and wonder if their God has abandoned them. Jeremiah&apos;s letter is a rope thrown across the waters of exile. Hold to it.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(3, t('Because of the sins which ye have committed before the Lord, ye shall be led away captives into Babylon by Nebuchadnezzar the king of the Babylonians.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-sins',
          html:
            'Jeremiah names the hard truth: you are in exile because of sin. This is not random cruelty. This is covenant justice. But notice—the letter does not end there. If God judges, God also speaks. If God sends into exile, God also sends a messenger. The exiles are not abandoned; they are addressed.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(4, t('So when ye be come into Babylon, ye shall remain there many years, and for a long season, even seven generations: after that I will bring you away peaceably from thence.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-sevengenerations',
          html:
            'Seven generations. That is nearly two hundred years. Some of you will not live to see the return. Your children and grandchildren will die in exile. This is the weight of the exile. But Jeremiah does not say "you will be forgotten." He says God will bring them away. Exile is real. Restoration is certain. Hope is not false—it is long.',
        },
        {
          kind: 'carry',
          html:
            'If you are waiting on a promise that seems delayed, if you are living in a season that feels longer than you can bear, the first word is neither false hope nor despair. It is the truth: God sees. God speaks. God acts—sometimes slowly, but always faithfully.',
        },
      ],
    },

    /* ──── Idols Cannot See or Speak ────────────────────────────────────── */
    {
      ref: 'Baruch 6:8–23',
      title: 'Idols Cannot See, Speak, or Smell',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(8, t('For their gods are silver, and gold, and stone, and timber: such as men have made, graven and molten: they cannot speak, neither can they hear, neither can they see, nor have they understanding.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-made-by-hands',
          html:
            'Jeremiah opens his catalogue of idol-absurdities with a simple fact. These gods are fashioned. They are carved or cast. Every one of them bears the fingerprints of a human craftsman. If a god can be made by human hands, it is not divine. It is human work.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(9, t('They cannot do evil, neither can they do good. They see not what is coming; they cannot save themselves from rust, neither from the worms that eat them up. And they shall be ashamed of their works.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-impotent',
          html:
            'The refrain begins: the idol cannot help or harm. It cannot foresee or prevent its own decay. Metal oxidizes. Wood rots. Worms eat the flesh and gold alike. The god cannot even save itself. How can it save its worshippers?',
        },
        {
          kind: 'greek',
          id: 'bar6-eidolon',
          title: 'Eidōlon — "Idol"',
          script: 'εἴδωλον',
          translit: '<strong>eidōlon</strong> · idol; phantom; image; something seen but empty',
          description:
            'The Greek word eidōlon shares a root with "seeing"—something perceived by the eye. An idol is what you see, but what you see has no substance. It is a phantom in wood and stone. You see it. You feel drawn to it. But there is nothing there.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(12, t('They light candles before them, and set lamps upon them, which yet they cannot see. They are as the beams of the house; and their hearts are eaten out. The worms do creep up from the ground, and eat them and their raiment, and they feel it not.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-candles',
          html:
            'One of the most poignant details: the Babylonians light candles before the idols. They kindle lamps. The temple is ablaze with light. But the idol does not see the light. It does not feel the warmth. The worshippers burn offerings in front of a god that cannot see them burning. The whole spectacle of worship is a performance for an empty audience.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(19, t('Therefore fear them not: for they cannot defend you from evil, neither can they do you good.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-fear-not-refrain',
          html:
            'The refrain crystallizes: therefore fear them not. Fear is the lever by which idolatry works. The Babylonians fearfully serve their gods, hoping for protection. But an object that cannot see you, hear you, or move itself has no power to protect. Fear of idols is fear of shadows.',
        },
        {
          kind: 'carry',
          html:
            'What do you fear? What invisible idol have you handed power over your life? If it cannot see you, hear you, or act on your behalf, you have given your trust to a shadow. The God who is awake, alive, and present is the only one worthy of your fear.',
        },
        {
          kind: 'reflection',
          id: 'bar6-see-hear',
          prompt:
            'What promise or protection are you seeking from something that cannot see you or hear you? What would change if you turned that longing toward the God who sees and hears?',
        },
      ],
    },

    /* ──── Idols Cannot Save Themselves ──────────────────────────────── */
    {
      ref: 'Baruch 6:24–36',
      title: 'Idols Cannot Save Themselves from Ruin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              24,
              t('Seeing then that they are not gods, fear them not: for there is no power in them to do evil, neither to do any good. For I know that they are vanity and falsehood.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-vanity',
          html:
            'Vanity and falsehood—these are the only things an idol can deliver. An idol offers the illusion of power while remaining powerless. It is vanity dressed in gold. It is falsehood made into stone. To worship it is to embrace nothing while calling it everything.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              27,
              t('Their gods of gold and silver, and stone, and timber, are no better than the stones hewed out of the mountain: and they shall burn at last in the fire.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-fire',
          html:
            'The idol is no better than the raw stone from which it was carved. Gold can be melted. Silver can oxidize. Wood can burn. What is made can be unmade. An eternity constructed from materials that do not endure is an eternity built on sand.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              28,
              t('And that which is spoken concerning them is false: for both the priests do commit fraud, and the women do gird themselves with cords.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-fraud',
          html:
            'Even the priests know. They are committing fraud—engaging in practices they know are empty. They are not true believers; they are con artists. And the women who gird themselves with cords are those who wait upon the idols, hoping for fertility or healing. They wait on the deaf and the dead.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              33,
              t('The priests sit in their temples, having their clothes rent, and their heads and beards shaven, and their heads uncovered.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-priests',
          html:
            'The priests perform a ritual—torn clothes, shaved heads—to demonstrate their piety. But their piety is theater. They are not transformed by their god; they are merely deranged by service to what does not exist. Their ritual bears no fruit.',
        },
        {
          kind: 'carry',
          html:
            'You may be surrounded by people confidently serving dead gods—gods of money, gods of status, gods of pleasure. Their confidence is not evidence of truth. Many can be mistaken. Many can be deceived. What matters is not how many bow before it, but whether it can actually see and love you.',
        },
      ],
    },

    /* ──── The Scarecrow Comparison ──────────────────────────────────── */
    {
      ref: 'Baruch 6:37–44',
      title: 'As Useless as Scarecrows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              37,
              t('Wherefore they are not gods: therefore fear them not. For as a scarecrow in a garden of cucumbers keepeth nothing: so are their gods of wood, and laid over with silver and gold.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-scarecrow',
          html:
            'One of Scripture&apos;s most vivid metaphors. Picture it: a scarecrow in a cucumber garden. It is fashioned with care. It is dressed. It stands. Yet it keeps nothing. The birds ignore it. The garden is raided. The scarecrow is present but powerless. So too with idols. They are clothed in silver and gold, yet they keep nothing.',
        },
        {
          kind: 'greek',
          id: 'bar6-prosbaskanion',
          title: 'Prosbaskanion — "Scarecrow" (Guard Against Deception)',
          script: 'προσβασκάνιον',
          translit: '<strong>prosbaskanion</strong> · scarecrow; something that repels or guards against deception',
          description:
            'The Greek word suggests something that wards off harm—yet it fails to do so. A scarecrow is supposed to protect; instead it stands uselessly among the ruins of the crop it could not save. An apt image for an idol.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              41,
              t('Thus are they no better than a lie: and it shall be said in the land that they are gods; although they are not gods.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-lie',
          html:
            'The idol is not merely impotent—it is a lie. It claims to be divine while being only material. It claims to hear while being deaf. To worship it is to embrace a falsehood and call it truth. This is the essence of idolatry: not ignorance, but willful deception.',
        },
        {
          kind: 'carry',
          html:
            'How many scarecrows are you maintaining? How much time and effort do you pour into serving something that cannot actually protect you or provide for you? The mercy of Jeremiah&apos;s letter is to show you: put it down. The scarecrow cannot help you.',
        },
        {
          kind: 'reflection',
          id: 'bar6-useless-guard',
          prompt:
            'What idol have you been tending like a gardener tends a scarecrow? What are you hoping it will protect or provide? What would it mean to stop waiting for it to work?',
        },
      ],
    },

    /* ──── Idols Useless to Dead and Living ────────────────────────────── */
    {
      ref: 'Baruch 6:45–58',
      title: 'Powerless to the Dead, Helpless to the Living',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              45,
              t('It shall be known therefore unto all nations and kings that these are no gods, but the works of men&apos;s hands, and that there is no work of God in them.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-known-all-nations',
          html:
            'Jeremiah prophesies a reversal. What Babylon believes in secret—what seems to work in the darkness of the temple—will eventually be exposed to all. The emptiness will be revealed. What seemed powerful will be seen as mere human handiwork.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              48,
              t('How then can one perceive and suppose that they are gods? For neither to the Egyptians nor to the Indians will the gods do any good.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-no-good',
          html:
            'The logic extends outward. If the Babylonian gods cannot help the Egyptians or the Indians—peoples they do not even claim to govern—what are they to anyone? An idol is a local fiction with no reach, no authority, no power. Its domain is only the imagination of those who serve it.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              52,
              t('Moreover the priests take from their gods gold and silver, and give it unto harlots, and out of it also they buy garments for their wives and children.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-harlots',
          html:
            'Another detail of satire: the priests steal from the god and spend it on themselves. The idol is not even a good investment for those who serve it. The temple is just another enterprise for human profit. The god does not complain—because the god does not know.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              56,
              t('These gods of silver, and gold, and stone, being fashioned by the hands of artificers, cannot make whole any disease, nor give relief to one that is sick.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-cannot-heal',
          html:
            'A practical question: does the idol heal? No. Can it cure a disease? No. Can it ease pain? No. If a god cannot do the basic work of a god—to help, to heal, to ease suffering—what good is it? The greatest revelation of an idol&apos;s impotence is sickness without remedy.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              60,
              t('Neither can they give riches or money: though a man make a vow unto them, and keep it not, they are not able to require it.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-cannot-require',
          html:
            'The idol cannot even hold its worshippers accountable. A person vows to give money to the god and breaks the vow. The god cannot demand fulfillment. The god is powerless to enforce its own worship.',
        },
        {
          kind: 'carry',
          html:
            'If your god cannot heal you, cannot provide for you, cannot keep you accountable, and cannot even know when you betray it, then your god is not a god at all. It is a burden you are carrying. Put it down.',
        },
      ],
    },

    /* ──── The Call to Righteousness Instead ───────────────────────────── */
    {
      ref: 'Baruch 6:59–72',
      title: 'Better Is the Just Man',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              66,
              t('How can a man then say that they are gods? for they can neither set up a king over a land, nor give rain unto men.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-rain-kings',
          html:
            'The two great powers: rain and rule. Can the idol make rain fall on the crops? Can it appoint a king? These are the basics of divine power. If an idol cannot do them, it is not a god. No rain, no king, no power. The test is simple. The idol fails.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(69, t('These things are the inventions of men, and the work of the craftsmen: and none that worship them are not ashamed to worship them.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-inventions',
          html:
            'Jeremiah names them: inventions. Human work. Not ancient secrets, not divine revelations—just objects made by toolmakers. The exiles are invited to wake up and see what they are being asked to worship: human inventions dressed in gold.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              72,
              t('But blessed are the just, and their righteous deeds are not forgotten: for their righteousness is before the Lord, and their just deeds shall not be blotted out.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-blessed-just',
          html:
            'The pivot. Instead of the empty god, look to the just person. Instead of serving idols, be righteous. This is not a new god; it is a new standard. Righteousness is eternal. Justice is remembered by the Lord. A just life is a foundation that does not erode. An idol cannot see you. But the Lord sees you. The just person is blessed.',
        },
        {
          kind: 'greek',
          id: 'bar6-dikaios',
          title: 'Dikaios — "Just/Righteous"',
          script: 'δίκαιος',
          translit: '<strong>dikaios</strong> · just; righteous; rightly ordered toward God',
          description:
            'Dikaios means living in right relationship—with God, with others, with reality itself. A just person is not merely someone who follows rules; it is someone whose entire being is aligned with God. This is what the Lord remembers. This is what endures.',
        },
        {
          kind: 'christ',
          id: 'bar6-christ-righteousness',
          title: 'Christ Connection — The Righteous One',
          html:
            'In 1 Peter 3:18, the apostle writes: "Christ also hath once suffered for sins, the just for the unjust." Christ is the truly righteous one. He is the one whose deeds the Lord remembers eternally. He is the one before God, forever. And those who are in Him are counted righteous—not because of what they make or fashion, but because of what He has done.',
        },
        {
          kind: 'carry',
          html:
            'Your righteous act—your honest word, your patient love, your faith in the dark—is not lost. The Babylonians see no idol that can save you. But the Lord sees your justice, and it is written on His heart forever. This is the exiles&apos; comfort and yours.',
        },
        {
          kind: 'reflection',
          id: 'bar6-righteous-seen',
          prompt:
            'What righteous work have you done that felt unnoticed by the world? Does it change anything to know that the Lord sees it and it will not be forgotten?',
        },
      ],
    },

    /* ──── Closing: Therefore Fear Them Not ────────────────────────── */
    {
      ref: 'Baruch 6:73–END',
      title: 'Therefore Fear Them Not',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              73,
              t('Wherefore be not afraid of them: for they can do no hurt, neither is there any profit in them.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'bar6-conclusion',
          html:
            'The final word is a command and a release. Fear them not. This is addressed to exiles who will hear the voice of Babylon all around them—priests chanting, incense burning, the confidence of a civilization built on idols. In that cacophony, Jeremiah&apos;s letter says: fear them not. They cannot hurt you. There is no profit in them. Turn your heart elsewhere.',
        },
        {
          kind: 'artwork',
          matchTitle: /marketplace|babylon|exile|captive/i,
          matchArtist: /tissot|rembrandt|allston/i,
          caption: 'The Exile in Babylon — A People Surrounded by Idols',
        },
        {
          kind: 'carry',
          html:
            'You are surrounded by voices calling you to worship what cannot hear. They are loud and confident. Your neighbors bow. Your bosses believe in their gods. The culture tells you to fear them. Jeremiah&apos;s letter reaches across the centuries to tell you the truth: they have no power. Your fear of them is wasted. Give your fear to the God who sees, hears, acts, and loves. That fear alone will save you.',
        },
        {
          kind: 'reflection',
          id: 'bar6-turn-away',
          prompt:
            'Whose voice are you listening to—the confident voice of idolatry around you, or the quiet voice of Jeremiah&apos;s letter? What would it mean to turn away from the idols and trust the God who is alive?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'As a scarecrow in a garden of cucumbers keepeth nothing, so are their gods of wood. But blessed are the just, and their righteous deeds are not forgotten: for their righteousness is before the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Baruch 6 · Study Guide',
  },

  hasHebrew: true,
};
