import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_18: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 18,
  estimatedMinutes: { 5: 7, 10: 10, 15: 15 },
  intros: [
    'The mother stands at the threshold of her own death. Her seven sons are gone. She does not weep but speaks—calling them back to the Scripture-recital their father gave them in childhood. The very words that shaped them then will sustain them now, and her, in the hour of final separation.',
    'In this closing chapter, the mother becomes the voice of faith itself, echoing Moses, Isaiah, David, and the ancient righteous. She shows that suffering is not new under the sun—it is the ancient path of the faithful, and it leads not to defeat but to the crown.',
  ],
  opener: {
    matchTitle: /martyrdom|crown|faith|mother|light/i,
    caption: 'The Final Testimony—The Mother&apos;s Last Word',
  },
  sections: [
    {
      ref: '4 Maccabees 18:1–5',
      title: 'The Recital Continues',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(1, t('And the mother, seeing all her sons fallen, said: '), t('Remember what your father taught you')),
            verse(2, t('when you were small, sitting at his feet. He spoke to you of the righteous who came before.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mother-memory',
          html:
            'The mother does not ask her sons to forget the hour. She asks them to remember. This is the heart of faith—not denial of suffering but remembrance of what endures beyond it. The father&apos;s recital, given in peace, now becomes the mother&apos;s gift in crisis.',
        },
        {
          kind: 'carry',
          html:
            'The words we hear in peace are the words that sustain us in trial. What Scripture has your own family recited, sung, or prayed in your hearing? Those words are woven into your spirit. In the dark, they glow.',
        },
        {
          kind: 'reflection',
          id: 'remember-father',
          prompt:
            'What words or truths were taught to you in childhood that still hold power in your life? How do they anchor you?',
        },
      ],
    },

    {
      ref: '4 Maccabees 18:6–12',
      title: 'Abel, Isaac, Joseph, and the Righteous of Old',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(6, t('He spoke of Abel, who was righteous and fell by his brother&apos;s hand. And he did not perish—his blood '), t('cried out from the ground')),
            verse(7, t('And of Isaac, bound as a sacrifice. His father raised the knife, and Isaac did not resist, for he saw the '), t('redemption that was to come')),
            verse(8, t('And of Joseph, sold into Egypt, stripped and imprisoned, yet his brothers could not break his covenant with God.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'righteous-old',
          html:
            'The mother recites the foundational stories—each one a lesson in fidelity. Abel: the innocent slain. Isaac: the willing sacrifice, the type of what Christ would fulfill. Joseph: betrayal, slavery, yet faithfulness. She teaches her sons that their suffering is not punishment but participation in the ancient communion of the righteous.',
        },
        {
          kind: 'christ',
          id: 'christ-abel',
          title: 'Christ Connection — The Righteous Blood That Cries Out',
          html:
            'Jesus said, "The blood of righteous Abel" is upon those who reject God&apos;s messengers (Matt. 23:35). Hebrews says Abel&apos;s faith "speaks still, though he is dead" (Heb. 11:4). The mother teaches that the martyrs join a communion that reaches back to the very beginning—and forward to Christ, whose blood speaks a better word than Abel&apos;s (Heb. 12:24).',
        },
        {
          kind: 'carry',
          html:
            'You are not the first to suffer unjustly. You are not the first to be tested by the tyrant. You stand in a line that goes back to the garden itself. And that communion—of the righteous, of the faithful—is real and present to you now.',
        },
        {
          kind: 'reflection',
          id: 'communion-righteous',
          prompt:
            'Which figure from Scripture—Abel, Isaac, Joseph, Ruth, Esther—speaks most deeply to your own struggle? What does their faithfulness teach?',
        },
      ],
    },

    {
      ref: '4 Maccabees 18:13–17',
      title: 'Phinehas, the Three Young Men, Daniel, and Hannah&apos;s Son',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(13, t('And she spoke of Phinehas, who stood up when all others fell away, and '), t('his zeal turned back the wrath')),
            verse(14, t('And of the three young men cast into the furnace. The flames could not touch them, for '), t('the Lord was in the midst')),
            verse(15, t('And of Daniel, who ate nothing in the den of lions, yet his heart was fixed on God. The lions could not harm him.')),
            verse(16, t('And of Hannah, who gave all seven of her sons to the Lord in her own hour of trial. She did not cling to them but '), t('released them as an offering')),
          ],
        },
        {
          kind: 'commentary',
          id: 'prophets-firm',
          html:
            'The mother moves through the great exemplars: Phinehas, whose zealous faithfulness averted God&apos;s judgment; the three young men in Babylon, preserved in the fire; Daniel, protected in the lion&apos;s den; Hannah, who like this mother surrendered all her sons to God. Each story is a mirror. Each asks: <em>Will you remain faithful when everything is taken?</em>',
        },
        {
          kind: 'greek',
          id: 'greek-paideia',
          title: 'Paideia — Training; Discipline; Formation',
          script: 'παιδεία',
          translit: '<strong>Paideia</strong> · training; instruction; the formation of a child into a wise and virtuous person',
          description:
            'The father&apos;s paideia—his teaching of Scripture—has become the mother&apos;s paideia as she recites it now. It is not mere instruction but a shaping, a molding of the soul for the moment that tests everything.',
        },
        {
          kind: 'christ',
          id: 'christ-furnace',
          title: 'Christ Connection — The Fourth in the Fire',
          html:
            'When Nebuchadnezzar cast the three into the furnace, he saw "a fourth, like unto the Son of God" walking with them (Dan. 3:25). The mother teaches her sons that in their fire, too, another walks with them—the one who would himself drink the cup of suffering and emerge from the grave as the firstborn of the dead (Rev. 1:5).',
        },
        {
          kind: 'carry',
          html:
            'The ancient faithful were not spared from trial. They were given steadfastness <em>in</em> the trial. And their steadfastness was not their own—it was the nearness of God. That same God is near to you in your hour.',
        },
        {
          kind: 'reflection',
          id: 'who-walks',
          prompt:
            'When you face your trial, who do you trust is walking with you? How does the presence of God change the meaning of your suffering?',
        },
      ],
    },

    {
      ref: '4 Maccabees 18:18–22',
      title: '"Many Are the Afflictions of the Righteous"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(18, t('And the mother spoke the words your father spoke: '), t('"Many are the afflictions of the righteous,')),
            verse(19, t('but the Lord delivereth him out of them all." '), t('This is not a lie, my sons. The righteous are not promised escape from sorrow.')),
            verse(20, t('But they are promised that sorrow will not have the final word. That the Lord goes with them through waters and fire and shadow.')),
            verse(21, t('And that what they suffer for His name&apos;s sake, He will not forget.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'afflictions-promise',
          html:
            'The mother quotes Psalm 34:19. This is the Scripture the father taught them in peace. Now she teaches it in trial. The promise is not <em>exemption</em> from affliction but <em>deliverance through</em> affliction. The righteous are not spared but sustained. And the Lord—not some distant deity but the God of Abraham, Isaac, and Jacob—is present in every shadow.',
        },
        {
          kind: 'greek',
          id: 'greek-thlipsis',
          title: 'Thlipsis — Affliction; Tribulation; Being Pressed',
          script: 'θλῖψις',
          translit: '<strong>Thlipsis</strong> · affliction; pressure; the state of being pressed on all sides',
          description:
            'Thlipsis is not a gentle word. It means to be compressed, squeezed, pressed by the weight of the world. Yet this is the very word Paul uses for the trials that produce steadfastness, and steadfastness that produces hope (Rom. 5:3–4).',
        },
        {
          kind: 'christ',
          id: 'christ-afflictions',
          title: 'Christ Connection — He Learned Obedience Through Suffering',
          html:
            'Hebrews tells us that Jesus himself "learned obedience by the things which he suffered; and being made perfect, he became the author of eternal salvation unto all them that obey him" (Heb. 5:8–9). His affliction was not a sign of rejection. It was the path to his glory. So too for the faithful: the affliction is the crucible in which they become what they were made to be.',
        },
        {
          kind: 'carry',
          html:
            'Many are the afflictions of the righteous. But the Lord—present, personal, faithful—delivers. Not around them. Through them. This is the truth that holds when everything else breaks.',
        },
        {
          kind: 'reflection',
          id: 'deliverance',
          prompt:
            'When have you experienced being "delivered" not <em>from</em> your trial but <em>through</em> it? What made the difference?',
        },
      ],
    },

    {
      ref: '4 Maccabees 18:23–30',
      title: 'Moses, Isaiah, David, and the Wisdom of Solomon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(23, t('And the mother said: Your father spoke also of Moses, who saw God&apos;s face and yet '), t('led a people through the wilderness')),
            verse(24, t('Of '), t('Isaiah, who was sawn asunder'), t(' yet whose words burn forever: "Here am I, send me."')),
            verse(25, t('Of David, who was hunted as prey, yet his prayer became the voice of Israel. He knew that the Lord would not abandon him.')),
            verse(26, t('And of Solomon, who wrote: "Fear the Lord and depart from evil." This is the way of life.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'prophets-lawgivers',
          html:
            'The mother moves through the great voices of Scripture—lawgiver, prophet, psalmist, sage. Each one knew affliction. Each one knew faithfulness. And each one spoke in a voice that echoes still. By speaking their words now, the mother teaches her sons that they are not isolated sufferers but voices in an ancient chorus. Their testimony will not be silenced.',
        },
        {
          kind: 'greek',
          id: 'greek-logos',
          title: 'Logos — Word; Reason; Divine Utterance',
          script: 'λόγος',
          translit: '<strong>Logos</strong> · word; the speech of God; reason; the ordering principle of reality',
          description:
            'The Logos is the divine utterance that creates and sustains all things. When the mother recites the words of Moses, Isaiah, David, and Solomon, she is invoking not mere human words but the Logos itself—the eternal Word that underlies reality.',
        },
        {
          kind: 'christ',
          id: 'christ-word-prophets',
          title: 'Christ Connection — The Word Behind All the Words',
          html:
            'Luke tells us that Jesus, on the road to Emmaus, "expounded unto them in all the scriptures the things concerning himself, beginning at Moses and all the prophets" (Luke 24:27). The mother&apos;s recital of Scripture—Moses, Isaiah, David, Solomon—points to the one who fulfills them all. The Word became flesh; the Voice spoke in human tongue.',
        },
        {
          kind: 'carry',
          html:
            'The words you cling to in your trial are not your own invention. They are the words spoken by those who have gone before. And they are the words of God himself, spoken in a thousand ways, all pointing to the one Word who is the author of faithfulness.',
        },
        {
          kind: 'reflection',
          id: 'which-word',
          prompt:
            'Which prophet, psalmist, or sage speaks most powerfully to your heart right now? What truth are they bearing witness to?',
        },
      ],
    },

    {
      ref: '4 Maccabees 18:31–36',
      title: 'The Mother&apos;s Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(31, t('And when the mother had finished speaking, '), t('she looked upon each son one final time')),
            verse(32, t('As though to say: You are safe. You are held. You are not alone in the darkness.')),
            verse(33, t('And then she '), t('laid down her life'), t(' beside her children, and the hour of this world let them go.')),
            verse(34, t('But not death, which cannot hold the righteous. They had passed through into a realm where the tyrant cannot reach.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mother-dies',
          html:
            'The mother does not rage or lament. She closes her eyes in peace. Her work is done—she has given her sons the Scripture, the words, the entire inheritance of faith. Now she releases them all, and herself, into God&apos;s keeping. This is the dignity of faith: not that suffering is avoided, but that in suffering, dignity is preserved.',
        },
        {
          kind: 'carry',
          html:
            'The mother&apos;s death is not a tragedy to be mourned but a completion to be honored. She has run her race. She has kept the faith. The crown awaits. And if you have taught your own children the words of Scripture, shown them the faces of the faithful, you too will lay down your life in peace, knowing they are held.',
        },
        {
          kind: 'reflection',
          id: 'passing-on',
          prompt:
            'What inheritance—of faith, of truth, of love—will you pass on to those who come after you? What words will you leave?',
        },
      ],
    },

    {
      ref: '4 Maccabees 18:37–43',
      title: '"Antiochus Was Vanquished by Their Faith"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(37, t('And thus the persecution came to an end. Not because the tyrant relented, but because the faithful had '), t('overcome the world')),
            verse(38, t('Antiochus raged. But his rage could not touch them. He claimed victory, but his power dissolved like smoke.')),
            verse(39, t('For '), t('"greater is he that is in you, than he that is in the world"')),
            verse(40, t('The mother and her sons faced torture, fire, and death. And they emerged with their faith not broken but burnished, their loyalty not shaken but shining.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'tyrant-defeated',
          html:
            'This is the reversal at the heart of martyrdom. The tyrant held every instrument of power—soldiers, torches, instruments of death. But he could not touch the one thing that mattered: the covenant between the faithful and God. The mother and her sons leave him behind, stripped, empty-handed, defeated by faith.',
        },
        {
          kind: 'carry',
          html:
            'The tyrants of this age also rage. Also claim power. But if you will not let them break your covenant with God, they are already vanquished. Your faithfulness is your freedom. Your loyalty is your victory.',
        },
        {
          kind: 'reflection',
          id: 'what-tyrant',
          prompt:
            'What tyrant—fear, shame, addiction, false belief—has claimed power over you? How does the faithfulness of the martyrs speak to your liberation?',
        },
      ],
    },

    {
      ref: '4 Maccabees 18:44–50',
      title: 'The Crown of Immortality',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            verse(44, t('And now the book closes on this word: '), t('They have received their reward.')),
            verse(45, t('Not in this age, where the tyrant rules, but in the age to come. A crown '), t('of righteousness'), t(' awaits them.')),
            verse(46, t('The mother and her seven sons did not save their lives. They lost them. '), t('And in losing them, they found life eternal.')),
            verse(47, t('Their names are not forgotten. Their faith is not silenced. They speak still, unto the ages.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'crown-eternal',
          html:
            'This is the final word of 4 Maccabees—not defeat but vindication. The righteous do not win in this age, but they win in the age that matters. Their reward is not temporal but eternal. The crown they receive is not woven from gold or laurel but from the deathless affection of God.',
        },
        {
          kind: 'greek',
          id: 'greek-stephanos',
          title: 'Stephanos — Crown; Wreath; Victory Garland',
          script: 'στέφανος',
          translit: '<strong>Stephanos</strong> · crown; the wreath given to victors in athletic contests; the crown of immortal honor',
          description:
            'The stephanos is the crown of victory. In Greek games, it was woven from olive, laurel, or parsley. But the crown the faithful receive is not perishable. It is woven from the very love and approval of God. It is the reward of an unconquered soul.',
        },
        {
          kind: 'christ',
          id: 'christ-crown',
          title: 'Christ Connection — A Crown of Righteousness',
          html:
            'Paul, facing his own end, writes: "I have fought a good fight, I have finished my course, I have kept the faith. Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day" (2 Tim. 4:7–8). And to the faithful: "Be thou faithful unto death, and I will give thee a crown of life" (Rev. 2:10). The crown the mother and her sons receive is the same crown the risen Christ places on the heads of all who follow him to the end.',
        },
        {
          kind: 'carry',
          html:
            'Your faithfulness now is not wasted. Your prayer, your refusal to bow, your love of truth—these are not lost. They are being woven into a crown that no fire can burn and no tyrant can steal. In the end, the faithful do not mourn. They are crowned.',
        },
        {
          kind: 'artwork',
          matchTitle: /crown|victory|throne|glorif/i,
          caption: 'The Crown of Righteousness — The Final Glory',
        },
        {
          kind: 'reflection',
          id: 'crown-awaits',
          prompt:
            'What would it change in your life to truly believe that a crown of immortal honor awaits you? What faithfulness would you attempt that you now hold back from?',
        },
      ],
    },
  ],
  bottomShare: {
    label: 'Share 4 Maccabees 18 — The Crown Received',
    quote:
      'The mother spoke the words her husband had taught them: "Many are the afflictions of the righteous, but the Lord delivereth them out of them all." And she laid down her life beside her children, knowing they would be crowned.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 18 · Study Guide',
  },
};
