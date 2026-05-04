import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_10: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 10,
  estimatedMinutes: { beginner: 3, intermediate: 5, deep: 8 },
  topicTags: ['suffering', 'wisdom', 'faithfulness', 'integrity'],
  opener: {
    topical: true,
    caption: '4 Maccabees 10',
  },
  intros: [
    'The second and third brothers are brought before the king. They watch what happened to the first. And they choose the same path—not because they are trapped, but because something in them is stronger than the rope and the fire.',
    'Their bodies are torn limb from limb. Their scalps are ripped away. Their hands are cut off. And all the while, they speak boldly to the king: "You will not destroy our line of descent from Abraham. We will rise again."',
    'Each torment does not break their faith—it reveals it. Pious reason, the text keeps saying, masters even the worst suffering. They are not enduring. They are conquering.',
  ],

  sections: [
    {
      ref: '4 Maccabees 10:1–14',
      title: 'The Second Brother Steps Forward',
      blocks: [
        { kind: 'scripture', chapter: 10, lines: [
          plain(1, 'And when the first was dead, the second brother was brought forth unto the instruments.'),
          plain(5, 'And they skinned his head, and asked of him, Will you eat, or shall we torment you?'),
          plain(8, 'But he said unto them, I am not worthy to fear what my brother before me did not fear.'),
        ] },
        { kind: 'commentary', id: 'mac10-second-start', html: 'The second brother does not decide to be brave. He compares himself to the first. The previous martyr becomes his measure, his anchor. By watching the first, the second is already prepared. Witness makes courage contagious. [res:sefaria-4-macc-10-martyrs] [res:iaa-antiochus] [res:perseus-eulabeia]' },
        { kind: 'greek', id: 'mac10-andreia', title: 'Andreia — Courage; Valor', script: 'ἀνδρεία', translit: '<strong>andreia</strong> · courage; valor; the courage of one who stands firm', description: 'Not the recklessness of one who charges without thought, but the steady stand of one who has counted the cost and chosen anyway. The brothers possess andreia.' },
        { kind: 'christ', id: 'mac10-witness-christ', title: 'Christ Connection — The Courage of Witness', html: 'Jesus told Peter, "Feed my sheep" after asking three times, "Do you love me?" Each time the command echoed the denial—a test Peter could see in memory. By reminding Peter of what came before, the risen Christ was preparing Peter for what lay ahead. Witness to martyrdom became the substance of Peter&apos;s courage.' },
        { kind: 'carry', html: 'Whose faithful death are you still watching? How does the courage of someone who went before you give you strength for what is in front of you now?' },
        { kind: 'reflection', id: 'mac10-watch', prompt: 'The second brother watched the first and learned he was "not worthy to fear." What does it mean to measure your own courage against another&apos;s?' },
      ],
    },

    {
      ref: '4 Maccabees 10:15–22',
      title: 'The Torment; The Answer',
      blocks: [
        { kind: 'scripture', chapter: 10, lines: [
          plain(15, 'And they broke his feet and his hands, and tore at his limbs with cruel hooks.'),
          plain(18, 'And when they asked if he would repent, he said, My God sees all that you do, and you will account for it.'),
          plain(21, 'And in his great pain, he called to his brothers: All, follow the law! All, follow reason!'),
        ] },
        { kind: 'commentary', id: 'mac10-torture', html: 'Even as his body is shattered, the brother&apos;s mind is unbroken. He does not plead. He does not accuse. He addresses the cosmic dimension of what is happening—God is witness. And he turns to his remaining brothers with an exhortation, not a cry of despair. His words become another kind of strength-giving.' },
        { kind: 'carry', html: 'In the deepest pain, this brother does not curse or retreat into silence. He testifies. He exhorts. He keeps others in mind. What if your suffering, instead of isolating you, became the place where you most strengthen those who watch?' },
        { kind: 'reflection', id: 'mac10-cry', prompt: 'What would it look like for you to exhort others, even in your own suffering? Is this strength, wisdom, or both?' },
      ],
    },

    {
      ref: '4 Maccabees 10:23–28',
      title: 'The Third Brother Faces Death',
      blocks: [
        { kind: 'scripture', chapter: 10, lines: [
          plain(23, 'And the third brother was brought forth, and the king said, Have you seen what befell your brothers?'),
          plain(25, 'But the brother said, Yes. And I have seen reason triumph over every torture. My brothers did not yield.'),
          plain(27, 'Nor shall I. We are children of Abraham. We will rise again.'),
        ] },
        { kind: 'commentary', id: 'mac10-third-vision', html: 'The king asks a tactical question: have you learned from what you saw? He expects terror to have its teaching. But the third brother learns the opposite lesson entirely. He saw not death but triumph. He saw not failure but fidelity. Witness can teach despair or courage—it depends on what you are looking for.' },
        { kind: 'greek', id: 'mac10-paidia', title: 'Paidia — Children; Offspring', script: 'παιδία', translit: '<strong>paidia</strong> · children; young ones; offspring; collective term for children of one parent', description: 'The brothers call themselves the paidia—the children of Abraham. Not because they are weak, but because they belong to a lineage that extends beyond this torment, into resurrection.' },
        { kind: 'christ', id: 'mac10-children-christ', title: 'Christ Connection — Children of Abraham', html: 'In John 8:39, Jesus tells those claiming Abrahamic descent, "If you were Abraham&apos;s children, you would do as Abraham did." The true paidia of Abraham are those who trust God beyond death, as Abraham trusted the promise of descendants. Paul writes, "Know therefore that those of faith are the sons of Abraham" (Gal. 3:7). The brothers and Christ&apos;s followers live in the same genealogy—not flesh, but faith.' },
        { kind: 'carry', html: 'When you claim descent from the faithful—when you say "I am a child of Abraham," or "I am a follower of Christ"—what inheritance are you claiming? What does that lineage ask of you when suffering comes?' },
        { kind: 'reflection', id: 'mac10-inheritance', prompt: 'The brothers spoke of their line of descent from Abraham and their resurrection hope. What spiritual inheritance do you believe you have, and how does it shape how you face hardship?' },
      ],
    },

    {
      ref: '4 Maccabees 10:29–38',
      title: 'The Third Brother&apos;s Torment',
      blocks: [
        { kind: 'scripture', chapter: 10, lines: [
          plain(29, 'And they laid upon him every torment, and cut away his scalp, and tore his limbs from him.'),
          plain(32, 'Yet still he said, I praise you, O God, and I do not fear what you allow.'),
          plain(35, 'And his brothers, watching, grew not in despair but in resolve. They saw that pious reason was stronger than flesh torn from bone.'),
        ] },
        { kind: 'commentary', id: 'mac10-pious-reason', html: 'The text speaks of "pious reason"—not abstract thought, but reason anchored in faith and covenant. It is the mind of one who has already decided that nothing—not torture, not death—will sever their bond with God. This reason is not logic alone. It is logic soaked in devotion.' },
        { kind: 'carry', html: 'Pious reason is not the stoicism of the unbeliever who survives by detachment. It is the faith of one who is attached to God more than to their own comfort. How deep is that attachment in you? What would it cost to strengthen it?' },
        { kind: 'reflection', id: 'mac10-pious', prompt: 'What does "pious reason" mean to you? Can reason and faith together master suffering, or is that a delusion we comfort ourselves with?' },
      ],
    },

    {
      ref: '4 Maccabees 10:39–45',
      title: 'The Resurrection Hope Spoken Aloud',
      blocks: [
        { kind: 'scripture', chapter: 10, lines: [
          plain(39, 'And the third brother, even as his life left him, said to the king, You will not destroy our line of descent from Abraham.'),
          plain(42, 'Know that we will rise again. Our bodies may be torn, but they are not forgotten. God sees every piece.'),
          plain(44, 'And with these words, the third brother died, as his brothers had, unbroken in spirit.'),
        ] },
        { kind: 'commentary', id: 'mac10-resurrection-spoken', html: 'This is not hope whispered in secret. It is declared to the torturer himself. "You will not destroy our line"—these are words of absolute confidence in what God will do. The brothers do not die in uncertainty. They die in a proclamation that defies death itself.' },
        { kind: 'christ', id: 'mac10-resurrection-jesus', title: 'Christ Connection — I Am the Resurrection', html: 'Jesus said to Martha at her brother&apos;s grave, "I am the resurrection, and the life" (John 11:25). Not "I will cause a resurrection," but "I am resurrection—the power itself." The brothers echo this logic: death does not end the line. God sees every broken piece. Resurrection is not a future possibility—it is the nature of God Himself. This same Jesus told the thief on the cross, "Today you will be with me in paradise" (Luke 23:43). The brothers and the thief speak in the same conviction.' },
        { kind: 'carry', html: 'To proclaim resurrection in the face of death is an act of rebellion and faith. You do not say it because you are certain about what will happen next. You say it because you are certain about who God is. When would it change your suffering to speak that certainty aloud?' },
        { kind: 'reflection', id: 'mac10-rise-again', prompt: 'The brothers said, "We will rise again," facing death. What does that statement mean to you? Is it a comfort, a promise, a defiance—or something else?' },
      ],
    },

    {
      ref: '4 Maccabees 10:46–51',
      title: 'What Pious Reason Masters',
      blocks: [
        { kind: 'scripture', chapter: 10, lines: [
          plain(46, 'Thus the second and third brothers gave up their spirits, and all who saw them knew that no torment had conquered them.'),
          plain(48, 'For pious reason had been their master, and their passions their servant.'),
          plain(50, 'The king raged, but he could not touch what was unbreakable—the faith that lived in their minds even as their bodies were torn.'),
        ] },
        { kind: 'commentary', id: 'mac10-master-servant', html: 'The reversal is complete: usually, suffering makes reason serve the body&apos;s cry for mercy. Here, pious reason reverses the hierarchy. It becomes the master. The passions—fear, the plea for relief, the terror of the body—are reduced to servants, obeyed only if they serve faith. This is the dignity the brothers keep.' },
        { kind: 'carry', html: 'What is the master in your life? Is it reason wed to faith—pious reason? Or is it the cry of your flesh, your convenience, your fear? Whose servant are you, and whose master are you?' },
        { kind: 'reflection', id: 'mac10-master', prompt: 'In what ways is pious reason the master of your passions? Where do you feel the passions still ruling?' },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-4-macc-10-martyrs',
      kind: 'study',
      source: 'Sefaria',
      label: '4 Maccabees 10 — Martyrdom Accounts',
      url: 'https://www.sefaria.org/IV_Maccabees.10',
      description: 'Jewish martyrs under Antiochus IV and Stoic endurance (martyr 6).',
    },
    {
      id: 'iaa-antiochus',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Antiochus IV and Religious Persecution in Judea',
      url: 'https://www.antiquities.org.il/',
      description: 'Archaeological evidence of Seleucid religious policies and Jewish resistance.',
    },
    {
      id: 'perseus-eulabeia',
      kind: 'lexicon',
      source: 'Perseus Digital Library',
      label: 'Eulabeia — Piety and Virtue',
      url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.04.0057:entry=eu%29la%2Fbeia',
      description: 'Greek lexicon: eulabeia (pious reverence) in Stoic and religious thought.',
    },
  ],

  bottomShare: {
    quote: 'The second and third brothers were brought to torture, their limbs torn from them, their scalps ripped away. Yet they declared: "You will not destroy our line of descent from Abraham. We will rise again." Pious reason mastered even the worst suffering.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 10 · Study Guide',
  },
};
