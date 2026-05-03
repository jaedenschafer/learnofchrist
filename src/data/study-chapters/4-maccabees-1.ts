import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 4 Maccabees 1 — Devout Reason Masters the Passions
 *
 * 4 Maccabees is a Greek philosophical treatise (1st century AD) that argues
 * reason—not cold intellect, but pious devotion to God&apos;s law—is sovereign
 * over the passions. Chapter 1 lays out the thesis: the mind trained by the
 * law of Moses can master pleasure, pain, fear, and anger. The author argues
 * from reason first, then promises to prove it through the heroic martyrdoms
 * of Eleazar and the seven Maccabean brothers. The book is neither narrative
 * nor theology alone, but philosophy animated by faith: How does one live
 * virtuously? By submitting reason to the law. What is the law? Divine
 * instruction written by God. What is the virtue it produces? Freedom—true
 * freedom, not the license to satisfy every appetite, but the mastery of
 * oneself through love of God.
 */
export const FOURTH_MACCABEES_1: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 1,

  estimatedMinutes: { beginner: 6, intermediate: 14, deep: 19 },
  intros: [
    'Devout reason—the mind trained by God&apos;s law—is master over the passions. This is the thesis 4 Maccabees sets out to prove. Not the triumph of reason over reason, nor the triumph of passion over passion, but the victory of the soul ordered by God&apos;s word over every appetite that wars against it.',
    'The author writing to Greek-speaking Jews in the first century knows they live in a world that worships appetite: the appetite for wealth, for pleasure, for revenge, for safety. They see powerful nations around them ordering their lives by what they desire, what they fear, what makes them rich. And the author says: No. There is a higher order. There is a law that teaches the four cardinal virtues—prudence, justice, courage, and self-control. There is a mind that, trained by this law and devoted to God, can stand before any temptation, any torture, any threat of death, and choose rightly.',
    'What follows is philosophy, but philosophy at its most urgent. It is written by a Jew for Jews. It uses the examples of the faithful Jewish martyrs as the proof. But it speaks to anyone who has ever wondered: Can I master my appetites? Can I choose rightly when every passion screams for me to act? The answer, 4 Maccabees says, is yes—if you train your reason in God&apos;s law, and allow that reason to become truly devout: truly turned toward God, truly devoted to His will.',
  ],

  sections: [
    /* ─── 4 Maccabees 1:1–12 — The Thesis: Devout Reason Reigns ─────────── */
    {
      ref: '4 Maccabees 1:1–12',
      title: 'The Opening Claim: Reason Is Master',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(1,
              t('The subject that I am about to discuss is most philosophical, namely, '),
              hp('whether devout reason is sovereign over the passions', 'thesis-sovereign'),
              t('; and I think it is right for me to praise virtue greatly.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'thesis-sovereign',
          html:
            'The author announces his theme with the formal gravity of a Greek philosopher. He is not going to tell a story first and draw conclusions later. He states the thesis upfront: "devout reason is sovereign over the passions." Everything that follows is proof. The question is not whether reason <em>can</em> master the passions (a question a Greek rationalist might ask), but whether <em>devout</em> reason—reason shaped by piety, by devotion to God and His law—is sovereign. This is a claim no Greek rationalist would make. It is thoroughly Jewish. [res:sefaria-4-macc-1] [res:theoi-stoic-reason]',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(2,
              t('For it seems to me that '),
              hg('philosophy is the discipline of wisdom', 'philosophy-discipline'),
              t(', of which wisdom is the highest virtue.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'philosophy-discipline',
          html:
            'Philosophy—the love of wisdom—is a discipline. It is not idle speculation. It is the training of the soul. And the highest virtue is not courage or justice alone, but wisdom itself: the knowledge of what is truly good and the will to pursue it.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(3,
              t('Now the virtues are four, and over all of them '),
              hp('does devout reason rule', 'reason-rule'),
              t(': moderation, and justice, and courage, and wisdom.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'reason-rule',
          html:
            'The four cardinal virtues—moderation (self-control), justice, courage, and wisdom—are not separate powers battling one another. They are all ruled by devout reason. When reason is truly devotional, truly ordered toward God, all four virtues flow from it. They become one coherent life: the life of the person who has submitted the mind and will to God&apos;s law.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(5,
              t('But it is evident that '),
              hy('reason rules over the passions', 'reason-passions'),
              t('. For the law says, "Do not covet thy neighbor&apos;s wife, nor his field, nor his manservant, nor his maid." By these words the law teaches us that reason must govern desire.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'reason-passions',
          html:
            'The law is not given to those who are already virtuous. The law is given to those who struggle with desire. The commandment "Do not covet" does not pretend that covetousness does not exist or that it is easy to overcome. It commands—and in commanding, it appeals to reason. It says: your mind must be stronger than your appetite. Your obedience to God must be greater than your craving for what is not yours.',
        },

        {
          kind: 'greek',
          id: 'logismos',
          title: 'Logismos — "Reason"; "Reasoning"; "Calculation"',
          script: 'λογισμός',
          translit: '<strong>logismos</strong> · reason; rational deliberation; the mind&apos;s calculation',
          description:
            'Logismos is not mere intellect or cleverness. It is deliberate reasoning—the mind working to understand what is true and what is good. In 4 Maccabees, logismos paired with eusebeia (piety) becomes the soul&apos;s deepest power.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(8,
              t('For I can prove to you from many and various examples that '),
              hp('reason is supreme in mastering the passions', 'reason-supreme'),
              t(', namely, over anger and fear, over appetite and pain.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'reason-supreme',
          html:
            'The author lists the passions he will address: anger (the desire for revenge), fear (the dread of suffering), appetite (the hunger for pleasure and comfort), and pain (the physical cry of the body in distress). These are not trivial battles. These are the passions that topple kingdoms and break the faithful. The author claims that devout reason can master them all.',
        },

        {
          kind: 'carry',
          html:
            'Before you read further, ask yourself: Do I believe this? Can reason master anger? Can it stand against fear when death is at the door? The author is not offering comfort in this chapter. He is offering a challenge: your mind can be trained to rule your appetites. But only if it is trained by God&apos;s law, and only if that training has made your reason devout—truly turned toward God, truly devoted to His will above your own comfort.',
        },

        {
          kind: 'reflection',
          id: 'reflect-thesis',
          prompt:
            'What passion seems most powerful in your life? What would it mean to say that your reason could master it? Do you believe that? Why or why not?',
        },
      ],
    },

    /* ─── 4 Maccabees 1:13–20 — The Definition of Devout Reason ──────────── */
    {
      ref: '4 Maccabees 1:13–20',
      title: 'What Is Devout Reason?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(15,
              t('What then is '),
              hg('the life of the soul', 'life-soul'),
              t('? It is the living according to the law. '),
              hg('Let us explain this', 'explain-law'),
              t('. It is the law that teaches virtue, and through it wisdom is acquired.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'life-soul',
          html:
            'The life of the soul—the true life of the human being—is not measured in years, comfort, or security. It is the living according to the law. This is philosophical language, but it is thoroughly biblical. "Man shall not live by bread alone, but by every word that proceeds from the mouth of God" (Deuteronomy 8:3). The soul lives when the mind is ordered by God&apos;s word.',
        },
        {
          kind: 'commentary',
          id: 'explain-law',
          html:
            'The law is not merely a set of rules. It is the teacher of virtue. Through obedience to the law, wisdom grows. The law shows us what is truly good and what is truly harmful. In submitting to it, our reason becomes devout—not in opposition to reason, but reason perfected, reason fulfilled, reason converted from a tool for getting what we want into an instrument for knowing and loving what is good.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(16,
              t('And what is the law? The law is the word that comes from '),
              hp('the God who knows all things', 'god-almighty'),
              t(', the law that trains the soul and guides the mind to truth.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'god-almighty',
          html:
            'God knows all things—past, present, future. His law, therefore, is not arbitrary. It is not the whim of a despot. It is the Word of one who sees the end from the beginning, who understands the human heart and the true path to flourishing. When reason submits to this law, it is not submitting to something lesser; it is submitting to something infinitely greater than itself.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(17,
              t('For the law says, '),
              hg('"Thou shalt not murder. Thou shalt not steal. Thou shalt not commit adultery. Thou shalt not bear false witness."', 'law-commands'),
              t(' And it teaches us thus: if we regulate our appetite for food, and refrain from fornication, and abstain from all covetousness, then we are philosophers.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'law-commands',
          html:
            'The law is not mystical or vague. It speaks directly to appetite, to desire, to the concrete temptations we face. "Do not murder" speaks to anger. "Do not steal" speaks to greed. "Do not commit adultery" speaks to lust. These are not petty rules; they are the architecture of a soul that has learned to rule itself. The author says: if you can do this—regulate appetite, refrain from passion, abstain from covetousness—then you are a philosopher. You have the wisdom that matters.',
        },

        {
          kind: 'greek',
          id: 'eusebeia',
          title: 'Eusebeia — "Piety"; "Devotion"; "Reverence toward God"',
          script: 'εὐσέβεια',
          translit: '<strong>eusebeia</strong> · piety; fear of God; devotion to God; reverence',
          description:
            'Eusebeia is not mere religious feeling or ritual. It is the turn of the entire person toward God—the mind, the will, the heart, all ordered toward Him. When the author speaks of "devout reason," he means reason animated by eusebeia: reason that loves God more than comfort, that fears Him more than man&apos;s judgment, that reverences Him above all else.',
        },

        {
          kind: 'carry',
          html:
            'Notice how concrete this is. Devout reason is not some rarified spiritual state. It is your ability to say no to appetite at dinner, to refrain from anger when you are wronged, to tell the truth when a lie would profit you. Every single time you choose what is right over what would satisfy your immediate craving, you are training reason to be devout. You are building the strength of your soul.',
        },

        {
          kind: 'reflection',
          id: 'reflect-devout',
          prompt:
            'Where in your daily life do you face the choice between appetite and obedience? In that moment, what would it mean to choose with "devout reason"?',
        },
      ],
    },

    /* ─── 4 Maccabees 1:21–27 — The Four Virtues United ────────────────── */
    {
      ref: '4 Maccabees 1:21–27',
      title: 'The Four Virtues, Ruled by Devout Reason',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(21,
              t('For '),
              hg('wisdom is the knowledge of things divine and human', 'phronesis'),
              t('. And '),
              hg('courage is the victory of the soul over the passions', 'andreia'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'phronesis',
          html:
            'Wisdom is not mere accumulation of facts. It is the knowledge of what truly matters: things divine (God, holiness, the spiritual realities) and human (the nature of the soul, the true good, the path to flourishing). Such knowledge cannot be gained from books alone; it must be lived.',
        },
        {
          kind: 'commentary',
          id: 'andreia',
          html:
            'Courage is not the absence of fear. It is the victory of the soul—the triumph of the mind ordered by the law—over the passions that would pull the soul away from God. A soldier who faces death to conquer a city is brave, the author might say. But the faithful one who faces death rather than deny God? That is true courage.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(23,
              t('And '),
              hy('justice is the excellence of the soul', 'dikaiosyne'),
              t('. And '),
              hy('temperance is the dominion of the soul over the desires', 'sophrosyne'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'dikaiosyne',
          html:
            'Justice is not merely a legal concept. It is the excellence of the soul—the state of a soul that has learned to give each thing its due, to honor God as God, to respect the rights and dignity of others, to act rightly even when wrongness would profit. It flows from a mind that has been trained by the law to see truly.',
        },
        {
          kind: 'commentary',
          id: 'sophrosyne',
          html:
            'Temperance or self-control is the dominion of the soul over desires. Not the denial that desire exists, but the discipline that says: I have appetites, but my appetites do not rule me. My reason, trained by the law and devoted to God, is the master. My desires are the servants.',
        },

        {
          kind: 'greek',
          id: 'arete',
          title: 'Aretē — "Virtue"; "Excellence"; "the Full Realization of Potential"',
          script: 'ἀρετή',
          translit: '<strong>aretē</strong> · virtue; excellence; moral perfection; the full flowering of human nature',
          description:
            'Aretē is the excellence that comes when a thing fulfills its purpose perfectly. A sharp sword has aretē in cutting. A sound mind has aretē in reasoning. A soul devoted to God has aretē in living. All aretē comes from devout reason—from the mind perfectly ordered by the law toward God.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(26,
              t('Let us examine this now by reason. It is through the law that reason achieves its full power. And if reason is perfect, then all the virtues are present in the reasoning one; but if one of them is removed, then reason is imperfect.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The author makes a logical move here that is crucial: the virtues are not separate achievements. They are not four different things that must be conquered one by one. They are facets of a single reality—the reality of a mind perfectly ordered by the law. Compromise on one virtue, and the whole is compromised. Refuse to tell the truth, and your courage is tainted. Indulge a forbidden appetite, and your wisdom is clouded. The virtues are one, held together by devout reason.',
        },

        {
          kind: 'carry',
          html:
            'The author is building a vision of the integrated self—the human being whose mind, will, desire, and action are all aligned with God&apos;s law. This person is not fragmented, pulled in different directions by competing appetites. This person has a unified center: the devotion of reason to God. Everything else flows from that center. It is the opposite of the fractured, appetite-driven life you see all around you.',
        },

        {
          kind: 'reflection',
          id: 'reflect-virtues',
          prompt:
            'Which of the four virtues—wisdom, courage, justice, temperance—feels most distant from you? Which feels most necessary to develop? How might they be connected?',
        },
      ],
    },

    /* ─── 4 Maccabees 1:28–35 — Reason Masters Pleasure and Pain ────────── */
    {
      ref: '4 Maccabees 1:28–35',
      title: 'The Ultimate Proof: Mastery over Pleasure and Pain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(30,
              t('But the reason for our discussion is to demonstrate that '),
              hp('devout reason is supreme master', 'master-supreme'),
              t(' of the passions. But now, that we may prove this, let us examine whether reason holds sway over the appetite for pleasure and pain.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'master-supreme',
          html:
            'The author has laid out the theory. Now he turns to what matters most: the practical test. Can reason actually master the passions that everyone experiences? The two primary ones: the hunger for pleasure and the dread of pain. If reason can master these, the author says, then it can master all the rest.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(31,
              t('For all manner of pleasures is ruled by law; and reason commanding forbids both eating certain foods and the touching of certain things. And the law forbids the covering of thy neighbor&apos;s possessions.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The law seems to say no to pleasure. But the author&apos;s insight is different: the law says yes to a higher pleasure—the pleasure of obedience, the joy of the soul aligned with God. When you abstain from forbidden food, you are not denying pleasure; you are choosing the deeper pleasure of obedience. When you do not covet, you are not becoming joyless; you are experiencing the peace of a soul that is not ravaged by envy.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(32,
              t('And how are we to understand that the reason is sovereign even over pain? If one is struck with rods, or imprisoned, or is in extreme hunger or thirst, or exposed to wild beasts, or suffers other severe torments, does not his reason remain triumphant? This is the proof we seek.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Now the author moves to the harder test: pain, suffering, torment. This is not theoretical anymore. The question is: when your body is screaming in agony, when death is approaching, when everything in you wants to surrender—can reason still rule? Can you still choose rightly? The author says the proof comes from the faithful ones who face exactly these trials. (And he will spend the rest of the book telling their stories.) If devout reason can master pain, then it is truly sovereign.',
        },

        {
          kind: 'greek',
          id: 'pathos',
          title: 'Pathos — "Passion"; "Suffering"; "Emotion that Moves the Soul"',
          script: 'πάθος',
          translit: '<strong>pathos</strong> · passion; suffering; a feeling or emotion that moves the soul, often violently',
          description:
            'A pathos is not merely a feeling. It is an emotional force that moves you, that pulls you, that threatens to overwhelm reason. Pleasure and pain are the primary pathē (plural): the two forces that every human being must reckon with. Master them through devout reason, and you are free.',
        },

        {
          kind: 'carry',
          html:
            'The author is saying something radical: you can choose. When pain comes, when pleasure tempts, when fear whispers, you are not a puppet of your emotions. Your reason—trained by the law, devoted to God—can step in and choose differently. This does not mean the pain disappears or the desire vanishes. It means your mind is stronger than the storm. Your allegiance to God is deeper than your attachment to comfort. You can choose to obey even when obedience costs everything.',
        },

        {
          kind: 'reflection',
          id: 'reflect-pathos',
          prompt:
            'Think of a moment when you faced a strong emotion—pleasure that called you away from obedience, or pain that made you want to give up. How did you respond? What would it look like to let devout reason rule in that moment?',
        },
      ],
    },

    /* ─── 4 Maccabees 1:35 — The Promise: Examples Will Prove It ─────────── */
    {
      ref: '4 Maccabees 1:35',
      title: 'The Proof Promised: The Faithful Ones',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(35,
              t('Now, therefore, it is most evident that reason is not subject to the passions. But hear the proof of it. For when our ancestors were about to be deprived of their homeland and to be forced to eat unclean food, '),
              hp('the old man Eleazar and the seven brothers endured torture', 'eleazar-brothers'),
              t(', rather than transgress the law of God. And through these noble examples of piety, I shall now demonstrate that reason is supreme master of all the passions.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'eleazar-brothers',
          html:
            'The author is not going to win his case through logic alone, though he has laid out the reasoning carefully. He is going to win it through <em>examples</em>—through the stories of real human beings who faced real torture and chose obedience. Eleazar was an old man. The seven brothers were young. All of them had to choose: betray your God, or die. And all of them chose. If devout reason could master the most extreme passions—the terror of death, the agony of torture—then surely it can master the passions of daily life.',
        },

        {
          kind: 'christ',
          id: 'christ-reason-incarnate',
          title: 'Christ Connection — The Embodiment of Devout Reason',
          html:
            'Jesus Christ is the perfect embodiment of devout reason. "He was in all points tempted like as we are, yet without sin" (Hebrews 4:15). In the wilderness, He faced appetite, fear, the desire for power—the same passions that assail us. But His reason, perfected in devotion to His Father, never wavered. He chose obedience over comfort, holiness over ease, His Father&apos;s will over His own flesh. And in the garden, when the agony was so great that He sweat drops of blood, He still prayed, "Not my will, but Thine be done." This is devout reason incarnate.',
        },

        {
          kind: 'carry',
          html:
            'You are not alone in this struggle. Before you lie the examples of Eleazar, the seven brothers, and infinitely above them, the example of Christ Himself. They show you that it is possible. They show you what it looks like when a human being says yes to God and no to every passion that contradicts Him. You cannot do it by your own strength, but you can do it through the grace of God and the discipline of your mind trained by His law.',
        },

        {
          kind: 'reflection',
          id: 'reflect-examples',
          prompt:
            'Whose example—from Scripture or from your own life—shows you that a person can master their passions through devotion to God? What did you see in them that gave you hope?',
        },
      ],
    },

    /* ─── Closing reflection ──────────────────────────────────────────── */
    {
      blocks: [
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'reflect-closing',
          prompt:
            'The author has given you a thesis and promised proof through stories. But before you read the stories, what is your own belief? Do you think a human being can truly master the passions through devotion to God&apos;s law? What would it take to convince you?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-4-macc-1',
      kind: 'study',
      source: 'Sefaria',
      label: '4 Maccabees 1',
      url: 'https://www.sefaria.org/IV_Maccabees.1',
      description: 'Stoic philosophy applied to Torah obedience and rational virtue (section 1).',
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
    quote:
      'Devout reason is the supreme master of the passions. The law teaches virtue, and through it wisdom is acquired. When reason is perfectly ordered by the law, all the virtues are present in the reasoning one.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 1 · Study Guide',
  },
};
