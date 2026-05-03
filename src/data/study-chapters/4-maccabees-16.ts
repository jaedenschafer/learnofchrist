import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_16: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 16,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 13 },
  intros: [
    'The seven sons are dead. Their mother stands before their mangled bodies and their tyrant, not broken but transformed. In her speech, she recites the history of Israel&apos;s faithful ones—Abraham willing to sacrifice Isaac, Daniel unafraid in the lions&apos; den, the three young men in the furnace, Joseph in Potiphar&apos;s house—every one who suffered rather than betray God&apos;s covenant.',
    'The mother&apos;s words become a sermon preached over corpses. She teaches her sons how to die by reminding them they are not the first to choose faith over flesh. Their pious reason has been trained by the whole history of Israel to know which love comes first.',
  ],

  sections: [
    /* ─── The Mother at the Cross ─────────────────────────────────────── */
    {
      ref: '4 Maccabees 16:1–4',
      title: 'The Mother at the Cross',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(1, t('The mother stood and gazed upon her seven sons dead, torn by torment. Yet '), hy('her countenance did not change', 'mac16-steadfast'), t(', nor her resolve waver.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac16-steadfast',
          html: 'The text makes a radical claim. The mother does not collapse in grief. Her face remains unchanged—not because she has hardened her heart against her children, but because something has hardened it <em>for</em> them. She stands among corpses as a monument.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(2, t('She said to her sons while they were yet alive: Children, '), hy('pious reason', 'mac16-paideia'), t(' hath made you conquerors of the tyrant.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac16-paideia',
          html: 'Pious reason—trained obedience to God&apos;s covenant, the discipline of conscience—is what makes conquerors. Not muscle, not weapons, not the power to strike back. But the power to refuse to break.',
        },
        {
          kind: 'greek',
          id: 'mac16-nike',
          title: 'Nike — Victory; Conquest',
          script: 'νίκη',
          translit: '<strong>Nike</strong> · victory; conquest; the state of having overcome',
          description: 'Nike is not a word for mere survival. It means to have transformed an enemy into a testimony, to have made suffering itself into proof of God&apos;s strength.',
        },
        {
          kind: 'reflection',
          id: 'mac16-countenance',
          prompt: 'What does it look like to stand unbroken in sorrow? Can you love someone deeply and still refuse to despair?',
        },
      ],
    },

    /* ─── The Mother's Teaching: Abraham's Offering ────────────────────── */
    {
      ref: '4 Maccabees 16:5–7',
      title: 'Abraham and Isaac: Willing the Sacrifice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(5, t('Remember Abraham, children. He was '), hp('tried and found faithful', 'mac16-abraham-tested'), t('. God asked him for his son, and though his paternal love was strong, his pious reason prevailed.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac16-abraham-tested',
          html: 'The mother does not minimize Abraham&apos;s agony. His love for Isaac was real, deep, the love of a father for the child of the promise. Yet he <em>chose</em> to let God&apos;s covenant stand above it. The mother teaches her sons: your father Abraham knew this choice. You are his children.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(6, t('And when the knife was raised, '), hy('pious reason', 'mac16-logos-def'), t(' stood firm in his soul. And he did not cry out, and his hand did not falter.')),
          ],
        },
        {
          kind: 'greek',
          id: 'mac16-logos-def',
          title: 'Logos — Reason; Word; The Ordering Principle',
          script: 'λόγος',
          translit: '<strong>Logos</strong> · reason; word; the divine ordering principle that holds all things together',
          description: 'In 4 Maccabees, <em>logos</em> is more than thought. It is the indwelling presence of God&apos;s own reason, His ordering power, alive in the human soul. Abraham&apos;s hand was stayed by the Logos itself.',
        },
        {
          kind: 'christ',
          id: 'mac16-abraham-christ',
          title: 'Christ Connection — The Father Who Did Not Spare His Son',
          html: 'Abraham&apos;s willingness to let Isaac go foreshadows God the Father&apos;s willingness to give His own Son. Paul writes: "He that spared not his own Son, but delivered him up for us all" (Rom. 8:32). The mother teaches her sons they walk in the footsteps of Abraham and in the shadow of the cross.',
        },
        {
          kind: 'carry',
          html: 'Abraham chose the covenant over his own heart&apos;s cry. That is the mother&apos;s model. She is teaching her sons—and us—that faithfulness sometimes demands letting go of what we hold most dear. Not from hardness, but from a deeper love.',
        },
      ],
    },

    /* ─── Daniel in the Lions' Den ───────────────────────────────────── */
    {
      ref: '4 Maccabees 16:8–9',
      title: 'Daniel: The Lions Could Not Devour Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(8, t('And Daniel, when '), hy('cast among the lions', 'mac16-lions'), t(', did not fear. Why? Because his pious reason had been trained in God&apos;s law. The lions were hungry, but God&apos;s truth was hungrier still.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac16-lions',
          html: 'The mother knows the story. She does not soften it. Daniel was <em>alone</em> in a den of wild beasts. The text says the lions did not harm him because an angel shut their mouths (Dan. 6:22). But the mother emphasizes something the 4 Maccabees author repeats: Daniel was protected because he had practiced obedience his whole life. His pious reason—the discipline of conscience—was stronger than teeth and claws.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(9, t('So shall '), hp('pious reason guide you', 'mac16-paideia'), t(' when the beasts come. Not the beasts of the wild, but of appetite, of fear, of the tyrant&apos;s threats.')),
          ],
        },
        {
          kind: 'christ',
          id: 'mac16-daniel-christ',
          title: 'Christ Connection — Fed by God, Not by Bread Alone',
          html: 'Jesus quotes Deuteronomy in the desert: "It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God" (Matt. 4:4). Daniel ate nothing in the lions&apos; den, yet he was sustained. The Logos that fed Daniel feeds all who refuse to break covenant.',
        },
        {
          kind: 'carry',
          html: 'What are the lions in your life? Fear? Hunger? The threats of those who have power over you? The mother asks: Have you trained your pious reason? Have you practiced obedience when it was easy, so that your soul remembers how to obey when it costs everything?',
        },
        {
          kind: 'reflection',
          id: 'mac16-trained',
          prompt: 'What habits of faith have you built that might sustain you in a trial? Where is your pious reason being trained right now?',
        },
      ],
    },

    /* ─── The Three Young Men in the Furnace ──────────────────────────── */
    {
      ref: '4 Maccabees 16:10–12',
      title: 'The Furnace: When the Fire Cannot Touch',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(10, t('And three young men were cast into a burning furnace, and the fire was made '), hy('seven times hotter', 'mac16-furnace-heat'), t('. But they sang praises to God in the midst of the flame.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac16-furnace-heat',
          html: 'The text is unflinching. The heat was not metaphorical. The flame rose until it killed the soldiers who fed it (Dan. 3:22). Yet the three young men walked in the fire and were not burned. The mother reminds her children: the heat is real. But it cannot consume what God holds.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(11, t('A fourth appeared in the furnace with them—"like the Son of God," the king himself confessed. And so they were '), hp('protected by God&apos;s presence', 'mac16-fourth-presence'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac16-fourth-presence',
          html: 'Pious reason and God are inseparable. When the soul is aligned with the divine Logos, it is not alone—it is protected by God Himself. The fourth in the furnace is both a symbol and a reality.',
        },
        {
          kind: 'christ',
          id: 'mac16-furnace-christ',
          title: 'Christ Connection — In the Fire, He Is There',
          html: 'The king saw "a fourth in the furnace like the son of God." In Hebrews, the author tells us: "We are afflicted on every side, yet not forsaken; perplexed, but not in despair; persecuted, but not abandoned; cast down, but not destroyed" (2 Cor. 4:8–9). Christ is the fourth in every furnace of His people.',
        },
        {
          kind: 'carry',
          html: 'The mother is not promising her sons that God will spare them from suffering. She is promising something deeper: that in the midst of the fire, they will <em>not be alone</em>. The One who stands with the faithful in Babylon will stand with them in Jerusalem.',
        },
        {
          kind: 'reflection',
          id: 'mac16-furnace-faith',
          prompt: 'When have you felt most alone in a trial? What would it mean to trust that Someone walks beside you in the heat?',
        },
      ],
    },

    /* ─── Joseph in Prison ───────────────────────────────────────────── */
    {
      ref: '4 Maccabees 16:13–15',
      title: 'Joseph: Betrayed, Yet Kept',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(13, t('And Joseph was betrayed by his brothers and sold into slavery. '), hy('Potiphar&apos;s wife', 'mac16-joseph-tempted'), t(' tempted him: Lie with me, and you will have ease. But Joseph said, No. I will not betray my God.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac16-joseph-tempted',
          html: 'This is not a small temptation. Joseph is young, alone in a foreign land, without family or rank. Refusal would cost him everything—his position, his safety, his future. The text says Potiphar&apos;s wife falsely accused him, and he was cast into prison (Gen. 39:7–20). The mother teaches her sons: obedience may mean loss. But covenant is worth the price.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(14, t('And even in prison, '), hp('Joseph&apos;s soul remained free', 'mac16-soul-free'), t(', like gold refined in fire. For the tyrant cannot imprison a soul that has made its choice.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac16-soul-free',
          html: 'Joseph&apos;s pious reason was refined, tested, proven true. The prison walls contained his body but not his will, not his covenant, not his belonging to God. This is the deepest freedom.',
        },
        {
          kind: 'christ',
          id: 'mac16-joseph-christ',
          title: 'Christ Connection — Faithfulness in the Hidden Place',
          html: 'Joseph in prison with no witnesses, no vindication, no sign that his suffering means anything—is a mirror for all the faithful whose suffering is small, invisible, private. Jesus teaches that the reward of the faithful comes not from earthly honor but from the "Father which seeth in secret" (Matt. 6:4). Faithfulness itself is the victory.',
        },
        {
          kind: 'carry',
          html: 'The mother&apos;s point is subtle and piercing: Joseph in prison, wrongly accused, with no earthly court to clear his name, was more free than Potiphar in his house. Because Joseph&apos;s choice—to keep faith with God—was his <em>own</em>. No tyrant, no lie, no false witness could take it from him.',
        },
      ],
    },

    /* ─── "Suffer Like the Patriarchs" ────────────────────────────────── */
    {
      ref: '4 Maccabees 16:16–18',
      title: 'You Are Heirs of the Patriarchs',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(16, t('These are your fathers, children. Not in the flesh alone, but in the '), hy('paideia', 'mac16-paideia-training'), t('—the training of your conscience, the discipline of your soul. You come from a long line of those who chose God when it cost everything.')),
          ],
        },
        {
          kind: 'greek',
          id: 'mac16-paideia-training',
          title: 'Paideia — Training; Discipline; The Shaping of the Soul',
          script: 'παιδεία',
          translit: '<strong>Paideia</strong> · training; discipline; the ancient word for the shaping and education of the whole person',
          description: 'Paideia is not punishment. It is the loving work of forming the soul—like a master potter shaping clay, like a teacher training an athlete. The mother says: you have been trained in paideia. You know which love is greatest.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(17, t('Do not shame the covenant of your ancestors. Do not let the tyrant believe that suffering has broken you when it has in fact revealed you as '), hp('sons and daughters of the promise', 'mac16-promise-heirs'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac16-promise-heirs',
          html: 'The inheritance of faith is not material wealth or political power. It is the promise itself—the unbreakable covenant that Abraham, Daniel, the three young men, and Joseph all held as more precious than life. The mother calls her sons to claim their birthright.',
        },
        {
          kind: 'christ',
          id: 'mac16-heirs-christ',
          title: 'Christ Connection — Heirs of the Promise, Runners of the Race',
          html: 'Hebrews 12:1–2 calls us to "lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us, looking unto Jesus the author and finisher of our faith." The patriots and the mother and the seven sons are the cloud of witnesses. They have run. They are watching to see if you will run.',
        },
        {
          kind: 'carry',
          html: 'The mother does not promise reward. She does not promise survival. She promises something more dangerous: she promises that your suffering will prove who you are. That your refusal to break will be your truest speaking. That you will join a company of saints whose names echo through the ages.',
        },
        {
          kind: 'reflection',
          id: 'mac16-legacy',
          prompt: 'What am I heir to? What covenant, what faith, what example runs in my blood—not genetically, but spiritually? What am I called to pass on?',
        },
      ],
    },

    /* ─── The Sons Die Courageously ──────────────────────────────────── */
    {
      ref: '4 Maccabees 16:19–25',
      title: 'The Sons Die Courageously',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(19, t('And when the mother had finished her speech, '), hy('all seven brothers went to their death', 'mac16-courage'), t(' without a sound of complaint. One by one, they refused to eat swine flesh. One by one, they died.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac16-courage',
          html: 'The recital of patriarchs is not merely speech. It becomes action. The mother has reminded her sons of what they <em>are</em>—heirs of Abraham, Daniel, the three young men, Joseph. Now they step into that inheritance. Their death is not defeat. It is the completion of their training.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(21, t('And the tyrant, seeing that '), hp('pious reason had conquered his power', 'mac16-victory-true'), t(', was bewildered. How could this be? He had all the weapons, all the soldiers, all the kingdoms. Yet he could not break them.')),
          ],
        },
        {
          kind: 'christ',
          id: 'mac16-victory-true',
          title: 'Christ Connection — The Author and Finisher of Our Faith',
          html: 'In Hebrews 12:2, we are told to look to Jesus "the author and finisher of our faith; who for the joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God." Jesus is the first to prove that pious reason—faithfulness to God—conquers every power that can be brought against it. The seven sons walk in His footsteps.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(23, t('Thus did pious reason prove mightier than the flesh. The sons triumphed, and their mother passed away, '), hy('a monument to faith', 'mac16-monument'), t(' that stands to this day.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac16-monument',
          html: 'The chapter does not end with victory as the world counts it—not in survival, not in Antiochus being overthrown, not in the bodies being spared. It ends with faithfulness being proven true. The mother and her sons have become what Paul calls the "witness cloud"—not ghosts, but living proof that something in the human soul is stronger than any tyrant, any fire, any threat.',
        },
        {
          kind: 'carry',
          html: 'You are watching a mother and seven sons choose death rather than break their covenant with God. This is not a story for those seeking comfort. It is a story for those willing to ask: What would I refuse to do? What covenant runs so deep in my soul that I would not break it, even at the cost of everything I love?',
        },
        {
          kind: 'artwork',
          matchTitle: /maccab/i,
          caption: '4 Maccabees 16 · The Mother and Her Sons',
        },
        {
          kind: 'reflection',
          id: 'mac16-final',
          prompt: 'What does this chapter ask of you? Not as a historical question, but as a call on your own soul: Will you let God&apos;s covenant be worth more to you than comfort, approval, even life itself?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'These are your fathers, children. You come from a long line of those who chose God when it cost everything. Do not shame the covenant of your ancestors.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 16 · Study Guide',
  },
};
