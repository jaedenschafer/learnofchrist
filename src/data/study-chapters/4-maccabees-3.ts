import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 4 Maccabees 3 — Reason Masters Appetite: David & the Water of Bethlehem
 *
 * 4 Maccabees teaches that reason (logismos) is not the enemy of emotion, but its master.
 * In this chapter, the author illustrates this principle through the famous story of David
 * in the cave of Adullam. Desperately thirsty in battle, David longs for water from the
 * well of Bethlehem. Three of his mighty men risk their lives to break through enemy lines
 * and fetch it. But when they arrive, David sees what the water has cost. He refuses to drink
 * it — instead, he pours it out as a libation to the Lord. His reason overmastered his appetite.
 * His love for his soldiers overcame his thirst. The chapter then shifts to Antiochus and the
 * Jewish martyrs, showing that this same reasoning faculty can sustain the human soul even
 * unto death.
 */
export const FOURTH_MACCABEES_3: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 3,

  estimatedMinutes: { beginner: 7, intermediate: 14, deep: 19 },
  intros: [
    'The book of 4 Maccabees is a philosophical meditation on one question: Can reason master the passions? The author&apos;s answer is yes—not by suppressing feeling, but by choosing what is noble over what is easy. To prove it, he draws on a story every Jewish listener would have known: David in hiding, burning with thirst, his men risking death to fetch him water.',
    'What happens next is not a king gulping water gratefully. Instead, David sees what the water has cost—the blood of his soldiers—and refuses to drink. He pours it out unto the Lord as a sacred offering. His appetite was real. His thirst was severe. But his reason, his integrity, his love for his men—these proved stronger. This is what 4 Maccabees means by reason mastering appetite: not denying desire, but choosing something higher.',
    'This chapter stands as a bridge: first showing us David&apos;s victory over thirst through love and reverence, then turning to Antiochus and the martyrs who will face a harder trial. If David can master appetite through reasoning about sacrifice, so too can the righteous master fear of death through reasoning about holiness. The chapter ends with a subtle shift—from David&apos;s triumph to the shadow of persecution, and the question: Can reason sustain us when appetite becomes survival itself?',
  ],

  opener: {
    matchTitle: /cave of adullam|bethlehem|water|warriors|sacrifice/i,
    matchArtist: /tissot|rembrandt|doré|caravaggio/i,
    caption: 'David Mastering Desire: The Test of the Water from Bethlehem',
  },

  sections: [
    /* ─── 4 Maccabees 3:1–5 — Reason Cannot Eradicate Passions ──────────── */
    {
      ref: '4 Maccabees 3:1–5',
      title: 'Reason Does Not Destroy Appetite',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(1, t('Now I shall show you an excellent example, how '), hy('reason', 'mac4-logismos'), t(' mastered the appetite of hunger and thirst.')),
            verse(2, t('David, being in the siege of the city, and the soldiers of the enemies pitching their camps round about the place, did endure thirst, and though there were fountains near, which did minister to the enemies, yet did not he drink of them.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-intro-reason',
          html:
            'The author begins with a careful philosophical claim: reason <em>mastered</em> appetite, not <em>eradicated</em> it. This is crucial. 4 Maccabees does not teach that the wise person has no desires. Rather, desire is present—thirst is real, hunger is real—but reason superintends it. Reason is the faculty that sees beyond immediate satisfaction to the deeper questions: What does this desire cost? What does integrity demand? What am I called to honor? [res:sefaria-4-macc-3] [res:theoi-stoic-reason]',
        },
        {
          kind: 'greek',
          id: 'mac4-logismos',
          title: 'Logismos — "Reason"; "Reckoning"; "Deliberate Judgment"',
          script: 'λογισμός',
          translit: '<strong>logismos</strong> · reason; the capacity to deliberate; the inner judge',
          description:
            'Logismos is not mere intellectual calculation. It is the faculty of deliberation—the power to reason through options and arrive at what is good and noble. When 4 Maccabees speaks of reason mastering the passions, logismos is the agent. It is your inner judge, weighing appetite against integrity, desire against duty. David possessed logismos. It is what made him more than a thirsty man.',
        },
        {
          kind: 'commentary',
          id: 'mac4-thirst-real',
          html:
            'David is surrounded. The enemy controls the high ground. Fountains flow for his enemy&apos;s soldiers, but David will not drink from them—perhaps because they are contaminated by their use, perhaps because to drink would be to lower his vigilance, perhaps because his enemy&apos;s proximity makes the water itself feel like a trap. Whatever the reason, David is thirsty. Severely thirsty. But reason stays his hand.',
        },
        {
          kind: 'carry',
          html:
            'You face your own "siege"—moments when what you want is right in front of you, available, but something whispers that it will cost you. This whisper is reason speaking. The question is not whether desire is present. It always is. The question is: Will you listen to the voice that sees beyond the immediate moment?',
        },
        {
          kind: 'reflection',
          id: 'mac4-thirst-present',
          prompt:
            'David&apos;s thirst is real. The text does not say he felt no desire. Rather, he chose not to act on it. When have you felt a strong desire but chosen not to satisfy it immediately? What made that choice possible?',
        },
      ],
    },

    /* ─── 4 Maccabees 3:6–8 — The Mighty Men Break Through ────────────── */
    {
      ref: '4 Maccabees 3:6–8',
      title: 'The Three Warriors Break Through',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(6, t('Yea, moreover, when his soldiers murmured because of the thirst, he comforted them, saying, That which is hard to endure is easy to master when we suffer in a well-ordered cause.')),
            verse(7, t('And three of his mightiest warriors desired to go out and to fetch water from the well which was without the camp of the enemies.')),
            verse(8, t('Then the king with great longing and eager thirst was desirous of their undertaking.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-comforth',
          html:
            'David does not suffer alone; his soldiers suffer with him. But he does not rail against them or blame them. Instead, he teaches them. "That which is hard to endure is easy to master when we suffer in a well-ordered cause." He has reframed their suffering: it is not meaningless deprivation, but endurance <em>for something</em>. This is the work of logismos—to help others see their hardship not as arbitrary, but as purposeful. Where there is purpose, there is meaning. Where there is meaning, there is strength.',
        },
        {
          kind: 'commentary',
          id: 'mac4-three-volunteer',
          html:
            'Three of his mightiest warriors offer themselves. They volunteer. No one is sent unwillingly. This is important. What makes their act so costly is not compulsion, but love. They understand what will be required of them—the Philistine lines are strong—and they volunteer anyway. Their action will be an act of sacrifice not from necessity, but from choice.',
        },
        {
          kind: 'commentary',
          id: 'mac4-king-desirous',
          html:
            'And here is the turning point: David longs for what they offer. The text says he is "with great longing and eager thirst" desirous of their undertaking. This is not heartlessness on David&apos;s part. He genuinely wants the water. The thirst that has plagued him, that has tempted him to drink from the fountains of the enemy—that thirst is still there. He is about to be given what he wants. But desire is not yet decision.',
        },
        {
          kind: 'carry',
          html:
            'The most dangerous moments come when someone else is willing to sacrifice themselves to give you what you want. Your role is not to reject the sacrifice out of pride, but to honor it by seeing it for what it is. Do you have people in your life who are willing to break through lines for you? Have you paused to recognize what that costs them?',
        },
      ],
    },

    /* ─── 4 Maccabees 3:9–11 — The Breakthrough and the Gift ───────────── */
    {
      ref: '4 Maccabees 3:9–11',
      title: 'The Water Brought at Great Cost',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(9, t('Then, having broken through the camp of the enemies, they came to the well and drew water.')),
            verse(10, t('And bringing it back with great danger, they came to the king with joy, and refreshed him with the water.')),
            verse(11, t('But when David had '),  hy('understood the danger', 'mac4-danger'), t(' which his soldiers had undergone, he refused to drink, but poured it out unto the Lord.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-breakthrough',
          html:
            'The three warriors do what seemed impossible. They break through the Philistine camp—not by stealth alone, but by skill and courage. They reach the well. They fill their vessel with water. The narrative moves swiftly, almost lightly. Yet each moment is fraught with danger. A watchful eye could have caught them. A drawn sword could have ended them. But they succeed.',
        },
        {
          kind: 'commentary',
          id: 'mac4-danger',
          html:
            'The crucial phrase comes: "when David had understood the danger which his soldiers had undergone." It is understanding that changes everything. David does not simply receive a drink. He receives a revelation of what that drink cost. Imagine it: three men, exhausted, triumphant, presenting him with water—and as they stand before him, David sees it clearly. Their sweat. Their risk. The real possibility that they might not have returned. The price of this water is not two denarius, or a laborer&apos;s wage. The price is the jeopardy of human life.',
        },
        {
          kind: 'reflection',
          id: 'mac4-danger-seen',
          prompt:
            'David understood. This single word changes the course of the scene. Have you ever suddenly grasped what something was costing someone you love? How did that understanding change you?',
        },
      ],
    },

    /* ─── 4 Maccabees 3:12–15 — The Refusal ──────────────────────────── */
    {
      ref: '4 Maccabees 3:12–15',
      title: 'Far Be It from Me, O Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(12, t('And he said, Far be it from me, O Lord, that I should do this thing; is not this the blood of the men that went in jeopardy of their lives?')),
            verse(13, t('Therefore would he not drink thereof. Thus did the '), hy('reason', 'mac4-reason-mastery'), t(' of David subdue his thirst.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-far-be',
          html:
            'David uses the most solemn language: "Far be it from me, O Lord." This is not casual refusal. This is a man speaking to God, saying: "This would be a violation of something sacred. I cannot do it." The water is not just water. It is, in his metaphor, blood—the life essence of his soldiers. To drink it would be to consume their sacrifice. To treat as a commodity what was offered as devotion. To take what was given at cost as if it were freely available.',
        },
        {
          kind: 'commentary',
          id: 'mac4-reason-mastery',
          html:
            'Now the author names what has happened: "Thus did the reason of David subdue his thirst." This is the thesis of the entire book, illustrated in one moment. David&apos;s thirst did not disappear. His reason did not deny that the water would refresh him, would slake his burning desire. But his reason—his logismos, his capacity to see beyond the moment—subdued the appetite. It held it back. It said: "There are things more important than my comfort. There are people more precious than my satisfaction. I will refuse."',
        },
        {
          kind: 'greek',
          id: 'mac4-enkrateia',
          title: 'Enkrateia — "Self-Mastery"; "Continence"',
          script: 'ἐγκράτεια',
          translit: '<strong>enkrateia</strong> · self-mastery; the power to hold appetites in check',
          description:
            'Enkrateia is not denial; it is mastery. The root implies power held in hand, like reins gripped firmly. A person with enkrateia has not eliminated desire—they have taken hold of it, directed it, and refused to be ruled by it. David exemplifies enkrateia in this moment. His thirst is real. He has full power to drink. But he chooses not to, and his choice reveals his character.',
        },
        {
          kind: 'christ',
          id: 'mac4-bethlehem-christ',
          title: 'Christ Connection — The Bread and Water from Bethlehem',
          html:
            'Bethlehem means "House of Bread." The well of Bethlehem was a well of sustenance—water from the city of nourishment. Centuries after David, another King would be born in Bethlehem. Jesus would say, "I am the Bread of Life" (John 6:48) and "If any man thirst, let him come unto me, and drink" (John 7:37). Yet when Jesus faced His greatest thirst—in the Garden, on the Cross—He too understood a deeper cost. In the Garden, He prayed, "Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt" (Matthew 26:39). Like David, Christ refused to consume what belonged to another—the Cup of suffering—for Himself alone. He drank it, but not for His own relief. He drank it for the salvation of all who believe. Both David and Christ, at the point of their greatest personal need, chose to honor a sacrifice greater than their own thirst.',
        },
        {
          kind: 'carry',
          html:
            'This is the hidden invitation of the chapter: You too have been offered water that cost. When someone serves you, speaks truth to you, stands by you, forgives you—these are gifts bought with the coin of another&apos;s effort, another&apos;s vulnerability, another&apos;s risk. To receive such gifts rightly is not to grab them like a thirsty person. It is to pause, to see, to honor what they cost, and to receive them with gratitude that overflows into reverence. What would it look like to receive the gifts people offer you as David received the water—as something sacred?',
        },
        {
          kind: 'reflection',
          id: 'mac4-blood-water',
          prompt:
            'David saw the soldiers&apos; sacrifice in the water itself—"Is not this the blood of the men?" What are the gifts in your life that carry the blood of others? How do you currently honor them?',
        },
      ],
    },

    /* ─── 4 Maccabees 3:16–18 — The Offering Poured Out ──────────────── */
    {
      ref: '4 Maccabees 3:16–18',
      title: 'The Libation Poured Out unto the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(16, t('And he poured out the water upon the ground, and offered it as a '), hy('libation', 'mac4-spende'), t(' unto the Lord.')),
            verse(17, t('For, he said, Far be it from me to do this, and to drink the blood of these men; therefore the Lord liveth, as it is written, Shall I drink the blood of these men that have jeopardized their souls? therefore he would not drink.')),
            verse(18, t('This example of the mastery of appetite sheweth, that reason doth command the passions.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-poured-out',
          html:
            'The act of pouring out the water is sacramental. In the Old Testament sacrificial system, a libation—a drink offering—was poured out at the base of the altar. It was never consumed by the priest or the people. It was given wholly to God. By pouring the water upon the ground, David transforms it. He takes what was meant to slake his thirst and offers it back to God as worship. In doing so, he honors both the soldiers who fetched it and the God whose will is binding even on kings.',
        },
        {
          kind: 'greek',
          id: 'mac4-spende',
          title: 'Spendō / Spondē — "To Pour Out"; "Libation"',
          script: 'σπένδω / σπονδή',
          translit: '<strong>spendō / spondē</strong> · to pour out as an offering; a drink offering wholly dedicated to God',
          description:
            'A spendē is not a partial gift or a portion reserved. When you spendō something, you pour it out entirely, holding nothing back. It is complete dedication. Later, Paul would write that he was "ready to be offered" (literally, "to be poured out as a drink offering," 2 Timothy 4:6). The Greek word Paul uses is the same word David&apos;s action invokes here: total surrender, total gift, nothing withheld.',
        },
        {
          kind: 'commentary',
          id: 'mac4-oath',
          html:
            'David backs his refusal with an oath: "Therefore the Lord liveth, as it is written, Shall I drink the blood of these men that have jeopardized their souls?" He swears by the living God. This is the language of a covenant—a binding commitment. David is not making a casual moral statement. He is placing himself under God&apos;s judgment, saying: "By the living God, I will not drink what cost these men their lives." This is what makes his refusal irrevocable.',
        },
        {
          kind: 'commentary',
          id: 'mac4-thesis',
          html:
            'The author then states his thesis plainly: "This example of the mastery of appetite sheweth, that reason doth command the passions." This is what 4 Maccabees has been arguing all along. You are not trapped by your desires. Reason—your capacity to deliberate, to see beyond the moment, to honor what is sacred—reason can command even the strongest appetite. It is not that reason denies appetite. Rather, reason sees more clearly than appetite can see. Appetite says, "I am thirsty." Reason says, "Yes, but look at what the water costs. Look at what your soldiers have risked. Look at what honor demands. And having seen these things truly, I will not drink."',
        },
        {
          kind: 'christ',
          id: 'mac4-poured-out-christ',
          title: 'Christ Connection — The Life Poured Out',
          html:
            'Jesus said to His disciples, "I have a baptism to be baptized with; and how am I straitened till it be accomplished!" (Luke 12:50). He was speaking of His death—the pouring out of His life as a drink offering. Paul wrote, "I am now ready to be offered, and the time of my departure is at hand. I have fought a good fight... henceforth there is laid up for me a crown of righteousness" (2 Timothy 4:6–8). And to the Philippians: "Yea, and if I be offered upon the sacrifice and service of your faith, I joy, and rejoice with you all" (Philippians 2:17). Christ and the apostles after Him poured themselves out—not because they had to, but because they had understood, as David understood, that there is something more precious than personal comfort, more sacred than survival. They poured themselves out as David poured the water: wholly, held back nothing, offered to God.',
        },
        {
          kind: 'carry',
          html:
            'The question that moves from David to us is not "Will you be asked to die?" (though for some, that may come). The question is: "Are you willing to pour out?" To pour out your time for someone who needs it. To pour out your resources for someone in need. To pour out your pride, your comfort, your insistence on being right—to pour these out at the feet of the Lord and at the feet of others. Like David, like Christ, like Paul: to understand that some things are too precious to hoard. Some gifts are meant to be given back.',
        },
        {
          kind: 'reflection',
          id: 'mac4-pouring-out',
          prompt:
            'What would you be pouring out if you truly believed that "reason doth command the passions"? What appetite—for comfort, for control, for recognition—might you be called to offer up, not to deny yourself, but to honor something greater?',
        },
      ],
    },

    /* ─── 4 Maccabees 3:19–22 — Antiochus & the Shadow of Persecution ─────── */
    {
      ref: '4 Maccabees 3:19–22',
      title: 'From David to the Martyrs: The Shift to Antiochus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(19, t('Now then let us consider whether reason is powerful to overcome the appetites.')),
            verse(20, t('If reason can thus overcome thirst and appetite and pain, surely it can also overcome malice and fear.')),
            verse(21, t('Therefore I shall now make manifest unto you an example, not of the mastery of appetite, but of the victory of reason over great torments and cruel passion. For when Antiochus the king demanded that the Jews should transgress the law and eat of the things sacrificed to idols,')),
            verse(22, t('And the righteous refused, and chose rather to be tormented than to transgress the commandment of God.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-shift',
          html:
            'The author moves from David to Antiochus. He has shown us reason mastering appetite in its gentler form—the refusal to drink water. Now he asks: if reason can do this, can it also overcome fear? Can it also endure torture? Can it hold firm when the cost is not a single cup of water, but everything—honor, family, life itself?',
        },
        {
          kind: 'commentary',
          id: 'mac4-antiochus',
          html:
            'Antiochus IV Epiphanes was the Syrian king who sought to Hellenize the Jewish people—to force them to abandon their laws, their identity, their covenant with God. He demanded they eat pork (forbidden in the Torah), sacrifice to idols, and renounce the Lord. The book of 4 Maccabees is largely a meditation on the Maccabean martyrs who chose torture and death rather than break the Law. This chapter introduces that narrative. The stakes are incomparably higher than David&apos;s thirst. This is death. This is the question of whether faith itself can command reason, or whether reason can sustain faith even unto the grave.',
        },
        {
          kind: 'commentary',
          id: 'mac4-righteous-refuse',
          html:
            'The righteous refused. This is the thesis sentence of the coming narrative. They did not negotiate. They did not say, "This is too much to ask." They chose. "They chose rather to be tormented than to transgress the commandment of God." It is a choice that echoes David&apos;s choice at the well. But instead of refusing a drink, they refuse their own lives. Instead of pouring out water, they pour out their blood.',
        },
        {
          kind: 'artwork',
          matchTitle: /martyrdom|maccabees|fire|torture|persecuRtion/i,
          matchArtist: /rembrandt|doré|delacroix/i,
          caption: 'The Maccabean Martyrs: Where Reason Meets Its Deepest Test',
        },
        {
          kind: 'carry',
          html:
            'The shift from David to the martyrs is not accidental. It is a test of your faith in the message of 4 Maccabees. If reason commands appetite in the moment of thirst, you can believe it. You can see it working. But can reason command the passions when the passion is fear of death? When "obey the king" means live, and "obey God" means die? That is when you learn whether logismos is truly the master, or merely a pleasant philosophy for comfortable times.',
        },
        {
          kind: 'reflection',
          id: 'mac4-threshold',
          prompt:
            'The chapter moves from David&apos;s water to the martyrs&apos; fire. If you believe reason can overcome thirst, what is the next appetite you would need to see it overcome for your faith to deepen? What is your "next level" test?',
        },
      ],
    },

  ],

  resources: [
    {
      id: 'sefaria-4-macc-3',
      kind: 'study',
      source: 'Sefaria',
      label: '4 Maccabees 3',
      url: 'https://www.sefaria.org/IV_Maccabees.3',
      description: 'Stoic philosophy applied to Torah obedience and rational virtue (section 3).',
    },
    {
      id: 'theoi-stoic-reason',
      kind: 'study',
      source: 'Theoi Classical Texts',
      label: 'Stoic Philosophy: Reason and Virtue',
      url: 'https://www.theoi.com/',
      description: 'Hellenistic Stoic concepts of reason controlling passion and emotion.',
    },
  ],

  bottomShare: {
    label: 'Share 4 Maccabees 3',
    quote:
      'David was exceeding thirsty, and his soldiers risked their lives to bring him water from the well of Bethlehem. But when David understood what the water cost, he said: "Far be it from me that I should drink the blood of these men!" He poured it out unto the Lord as an offering. Thus did reason master his appetite.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 3 · Study Guide',
  },
};
