import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 4 Maccabees 6 — Eleazar, the first martyr.
 *
 * In 4 Maccabees, Eleazar—ninety years old, a scribe of the Law—refuses to eat pork
 * to save his life. The text draws a portrait of suffering that the Jewish tradition
 * saw as vicarious: his blood becomes a ransom for his people. For Christian readers,
 * the echoes of Christ's scourging and crucifixion, and of His blood shed for many,
 * are unmistakable. We touch this carefully—not forcing a cross-reading, but allowing
 * the Jewish text to speak into the Christian story.
 *
 * Eleazar bears witness that reason, faith, and the law can master even the body's
 * deepest agony. He becomes the first of seven martyrdoms in 4 Maccabees—a cascade
 * of faithfulness under torture that prefigures the way of the cross.
 */

export const FOURTH_MACCABEES_6: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 6,

  intros: [
    'Eleazar is ninety years old. He is a teacher of the Law, honored among the Jews. When the Syrian king&apos;s officers order him to eat pork and deny the Torah, Eleazar refuses. He will not save his life by breaking his covenant.',
    'What follows is the opening chapter of one of the most striking martyrdom accounts in Second Temple Jewish literature. Eleazar is stripped, bound, and whipped. The narrative unfolds his suffering not as tragedy but as testimony—each blow a voice speaking to God. His blood, the text will later say, becomes a ransom. For readers of the cross, the parallels are profound.',
    'This is the first of seven martyrdoms in 4 Maccabees—a cascade of faithfulness that shakes the faith of the executioners and their king. Here we begin with the old man whose example will hold the others firm.',
  ],

  sections: [
    /* ─── 4 Maccabees 6:1–5 — The Stripping ────────────────────────────────── */
    {
      ref: '4 Maccabees 6:1–5',
      title: 'Stripped Before Power',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              1,
              t('Now when Antiochus saw the '),
              hg('courage of Eleazar', 'mac4-6-tharsos'),
              t(' and heard his words, he became enraged.')
            ),
            verse(
              2,
              t('For Eleazar was not moved by his torturers nor intimidated; the officials laid hands on him to bring him to the torture wheel.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-6-tharsos',
          html:
            'The Greek word <em>tharsos</em>—courage, boldness—describes an unflinching confidence in the face of power. It is not recklessness or despair, but a calm assurance rooted in faith. Eleazar&apos;s courage speaks louder than his voice. It silences the room. The king sees it and is enraged precisely because he cannot break it.',
        },
        {
          kind: 'commentary',
          id: 'mac4-intro-stripped',
          html:
            'The king sees no vacillation in Eleazar&apos;s eyes. The old man&apos;s refusal is not a plea for mercy or a negotiation—it is a declaration. The instruments are brought forward not because Antiochus doubts Eleazar will break, but because Eleazar has made it clear he will not. What follows is not interrogation but punishment: the king&apos;s wrath expressed through the body.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              3,
              t('But the guards '),
              hg('stripped him bare', 'mac4-gumnos'),
              t(' and set him before the instruments.')
            ),
            verse(
              4,
              t('And beholding the racks and the instruments, Eleazar neither trembled nor turned away his face.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'mac4-gumnos',
          title: 'Gymnos — &ldquo;Stripped; Bare&rdquo;',
          script: 'γυμνός',
          translit: '<strong>gymnos</strong> · naked; utterly exposed; defenseless',
          description:
            'The stripping removes every protection—clothing, dignity, the social armor that holds a person upright. It is a systematic dehumanization, the deliberate reduction of the person to mere flesh. Yet the text immediately pivots: Eleazar does not turn his face. His spirit does not strip with his garment.',
        },
        {
          kind: 'carry',
          html:
            'There are moments when we are stripped: loss of status, betrayal, public shame, sudden illness, a dream deferred. The vulnerability feels total. The urge to cover ourselves—to reconstruct dignity, to retaliate, to disappear—is overwhelming. Eleazar does none of these. He does not turn away. He stands in his nakedness before power and does not flinch. What would it look like to meet your own stripping with that kind of steadiness?',
        },
        {
          kind: 'reflection',
          id: 'mac4-stripped-ref',
          prompt:
            'When have you felt stripped of something you thought made you who you were? A role, a relationship, a reputation? Where was God in that moment?',
        },
      ],
    },

    /* ─── 4 Maccabees 6:6–9 — The Torture Begins ───────────────────────────── */
    {
      ref: '4 Maccabees 6:6–9',
      title: 'The Lashes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              6,
              t('Then the torturers, taking up their instruments, began to '),
              hg('scourge him', 'mac4-mastix'),
              t(' without mercy.')
            ),
            verse(
              7,
              t('And the blood flowed from his sides, and his flesh, being lacerated, became unfit for sight.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-blood-flows',
          html:
            'The text lingers on the destruction of the body. Blood flows. Flesh tears. The scourge is designed to humiliate as much as to torture—to render the man unseeable, unbearable to look at. Yet the passage does not avert its own gaze. It watches the damage accumulate and holds that witnessing as a kind of testimony.',
        },
        {
          kind: 'greek',
          id: 'mac4-mastix',
          title: 'Mastix — &ldquo;Scourge; Whip&rdquo;',
          script: 'μάστιξ',
          translit: '<strong>mastix</strong> · a whip; a plague; a stroke of discipline',
          description:
            'The mastix tears skin, shatters bone, and in Scripture becomes an image of divine punishment—and of the cross. Every Gospel records it: Jesus was scourged before crucifixion (Mt 27:26, Mk 15:15, Jn 19:1). The same word marks both the Jewish martyr&apos;s suffering and Christ&apos;s.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              8,
              t('And as he hung there, tormented, the tyrant issued an order, saying: Let each of them persuade him to eat the swine&apos;s meat.')
            ),
            verse(
              9,
              t('But Eleazar, as if awaking from the pain, said: Ye can construct no worse torment than the torment of your conscience.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-paused-torture',
          html:
            'There is an extraordinary detail here: the torturers <em>pause</em>. Perhaps to let him recover slightly, to make the next round more terrible. But in that pause, Eleazar speaks. He redirects the dialogue from his body to the tyrant&apos;s soul. The torturers expect his will to break. Instead, they encounter his mind at work, undistracted, even in agony.',
        },
        {
          kind: 'carry',
          html:
            'Suffering has a way of silencing speech. Pain alone consumes everything. Yet Eleazar is not consumed. In the midst of being destroyed, he thinks. He addresses not his tormentors&apos; power but their accountability. He reminds them that conscience exists—that what they are doing to him is also being done to themselves. In your own suffering, can you still see the souls around you?',
        },
        {
          kind: 'reflection',
          id: 'mac4-conscience-ref',
          prompt:
            'Eleazar speaks to the conscience of his torturers even as they torture him. Where do you carry conscience in your own suffering? Can you see others&apos; souls while your own body is in pain?',
        },
      ],
    },

    /* ─── 4 Maccabees 6:10–14 — "Pretend to Eat" ──────────────────────────── */
    {
      ref: '4 Maccabees 6:10–14',
      title: 'Friends Urge Him to Pretend',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              10,
              t('Now some of those who stood nearby, observing the extreme agony, were moved with '),
              hg('compassion', 'mac4-splanchnon'),
              t('.')
            ),
            verse(
              11,
              t('And they came to him and said: Why do you throw away your life for the sake of the law? Eat the meat. We will help conceal it from the king.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'mac4-splanchnon',
          title: 'Splanchnon — &ldquo;Compassion; Entrails&rdquo;',
          script: 'σπλάγχνα',
          translit: '<strong>splanchnon</strong> · the inward parts; the seat of emotion and mercy',
          description:
            'The word begins as anatomy (the organs) and becomes ethics (the seat of compassion). In the Gospels, Jesus is moved with splanchnon—with the kind of mercy that comes from the deepest part of the being. Here, watchers are moved by compassion at Eleazar&apos;s fate. They offer him a way out: a lie, a small deception, life preserved.',
        },
        {
          kind: 'commentary',
          id: 'mac4-the-offer',
          html:
            'The offer is reasonable. It is merciful even. Eat the meat in secret, pretend compliance, live. No one need know. The deception itself is small—a gesture, a swallow, a moment of performance. The reasoning is the reasoning of the world: sometimes discretion is wisdom; sometimes survival is the highest good. But Eleazar understands something these kind friends do not: the example matters more than the exit.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              12,
              t('But Eleazar said unto them: Such counsel as this is not worthy of our age, nor of our virtue, nor of the law under which I have lived from my youth.')
            ),
            verse(
              13,
              t('Think you that if I should be ashamed of my God by violating His covenant, even in pretense, that I would not become a curse to myself and to all Israel?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-curse',
          html:
            'Eleazar refuses even the <em>pretense</em> of apostasy. This is radical. Not because eating pork is intrinsically unforgivable, but because the act—even as performance, even hidden—would constitute a kind of self-curse. It would put him at enmity with God. It would also, he understands, teach younger Jews to compromise. The example would contaminate the faith of the community.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age of hidden compromises: the email we send that misrepresents our view; the silence that stands for consent; the small deception no one else will know about; the pretense that shields us from inconvenience. We tell ourselves: no one will know, so no harm. But Eleazar names the real cost: such acts curse the soul of the one who does them, and they scatter a poison in the example they set. Is there a "small compromise" you have been rehearsing in your mind? What would Eleazar say about it?',
        },
        {
          kind: 'reflection',
          id: 'mac4-pretense-ref',
          prompt:
            'Eleazar refuses even the appearance of breaking faith. Are there "pretend" compromises in your life—things you would do secretly, if you thought no one would know? What would change if you saw your own soul, not just others&apos; eyes, as the witness?',
        },
      ],
    },

    /* ─── 4 Maccabees 6:15–21 — He Will Not Break ─────────────────────────── */
    {
      ref: '4 Maccabees 6:15–21',
      title: 'Unbreakable',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              15,
              t('For if I should do this, as a young man would have become a laughingstock, so now too shall I become a mockery because of my age.')
            ),
            verse(
              16,
              t('Even if by preserving my life in this way I should seem to gain a brief respite, yet in doing so I would '),
              hg('defile my soul', 'mac4-rhypos'),
              t(' and shame my God before all men.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'mac4-rhypos',
          title: 'Rhypos — &ldquo;Defile; Filth&rdquo;',
          script: 'ῥύπος',
          translit: '<strong>rhypos</strong> · filth; defilement; spiritual uncleanness',
          description:
            'The body is being torn apart by the scourge, yet Eleazar fears the defilement of his soul more than the destruction of his flesh. This is the theological heart of the martyrdom: the hierarchy of goods. The body is real, the suffering is real—but the soul&apos;s integrity is more real still.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              17,
              t('For how could I hope that the young would heed the law, if I myself should show weakness?')
            ),
            verse(
              18,
              t('I must not only endure the torment myself, but also be a pattern for those younger than myself, showing how to die nobly for the laws of our fathers.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-pattern',
          html:
            'Eleazar is ninety. His own suffering might end soon. But the example he sets can endure for generations. He is not dying for <em>himself</em> alone; he is dying so that the faithful who come after him will have a mirror to look into. He is becoming a pedagogue of faithfulness written in his own flesh. This is the deepest reason for refusing the way out: the community needs to see what unbroken faith looks like.',
        },
        {
          kind: 'carry',
          html:
            'We are always being watched by someone younger—or by someone afraid. Your choice to hold to integrity when the easy path is open, your refusal to compromise when the cost is real, your decision to trust God when the circumstances say you shouldn&apos;t—these are not private acts. They teach. They give permission to others to be faithful. Your steadiness is a pattern others are learning from, whether you know it or not.',
        },
        {
          kind: 'reflection',
          id: 'mac4-pattern-ref',
          prompt:
            'Who is watching you hold (or fail to hold) to your convictions? What pattern are you setting by the life you live?',
        },
      ],
    },

    /* ─── 4 Maccabees 6:22–27 — The Final Blows ─────────────────────────── */
    {
      ref: '4 Maccabees 6:22–27',
      title: 'The Final Blows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              22,
              t('Having thus spoken, he was '),
              hg('dragged to the instruments of torture', 'mac4-syrmazo'),
              t(', and bound upon the rack.')
            ),
            verse(
              23,
              t('And the tyrant ordered them to stretch him with violence on the racks, so that his limbs were dislocated.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'mac4-syrmazo',
          title: 'Syrmazo — &ldquo;Dragged; Hauled&rdquo;',
          script: 'σύρω',
          translit: '<strong>syrmazo</strong> · to drag; to haul along the ground; to treat ignominiously',
          description:
            'The word carries a sense of humiliation as much as violence—the deliberate undignified transport of a human body. Yet even as he is dragged, Eleazar continues to speak. His words do not stop because his body is being destroyed.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              24,
              t('But Eleazar, his sinews stretched, laughed aloud at their futile efforts.')
            ),
            verse(
              25,
              t('For the old man, his mind thoroughly steeled by reverence for God, regarded the tortures as nothing.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-laugh',
          html:
            'He laughs. This is not hysteria but triumph—the moment of clear sight. The torturers, commanding vast power and machinery, are revealed as ineffectual. They cannot touch what matters. They can destroy the body, but the part of him that is most alive—his will, his faith, his integrity—they cannot reach. The laughter names their defeat.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              26,
              t('And as his organs failed, and the blood flowed down in great quantity, he remained steadfast, nor did he cry out.')
            ),
            verse(
              27,
              t('For his spirit was strong, and his faith was unshaken.')
            ),
          ],
        },
        {
          kind: 'carry',
          html:
            'The body has limits. Blood flows, organs fail, there is a moment when flesh simply gives way. Yet what the text calls "spirit"—the person&apos;s essential yes to God—can remain intact even as the body breaks. This is not a theory. It is a witness. It says: you can be destroyed, and yet not destroyed. You can lose everything, and yet lose nothing. The part of you that matters most cannot be taken.',
        },
        {
          kind: 'reflection',
          id: 'mac4-organs-ref',
          prompt:
            'What does it mean that Eleazar "remained steadfast" even as "his organs failed"? What is the difference between a body being broken and a spirit being broken?',
        },
      ],
    },

    /* ─── 4 Maccabees 6:28–30 — The Dying Prayer ──────────────────────── */
    {
      ref: '4 Maccabees 6:28–30',
      title: 'Make My Blood Their Purification',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              28,
              t('And as he was about to breathe his last, he said unto the tyrant:')
            ),
            verse(
              29,
              t('Thou knowest, O God, that though I might have saved myself, I am dying in fiery torments for thy law. Be merciful unto thy people, and let our punishment be a satisfaction in their behalf. '),
              hp('Make my blood their purification', 'mac4-katharismos'),
              t(', and take my life in exchange for theirs.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'mac4-katharismos',
          title: 'Katharismos — &ldquo;Purification; Cleansing&rdquo;',
          script: 'καθαρισμός',
          translit: '<strong>katharismos</strong> · cleansing; purification; the removal of defilement',
          description:
            'This is the theological pivot point of 4 Maccabees 6. Eleazar offers his suffering not for personal merit but as an expiation—a ransom—for the people. His blood becomes a cleansing agent. This is distinctly Jewish thought: the suffering of the righteous can benefit the community. Yet for Christian readers, the connection to Christ&apos;s blood as "the purification for our sins" (1 Jn 1:7) is unmistakable.',
        },
        {
          kind: 'commentary',
          id: 'mac4-ransom-prayer',
          html:
            'This prayer does something extraordinary: it converts suffering from meaningless agony into meaningful sacrifice. Eleazar does not die by accident, nor does he die merely as punishment. He dies <em>for</em>—his blood becomes a transaction, a ransom paid. The tyrant sought to break him; instead, Eleazar breaks into prayer. His last words are not a cry of pain but an intercession. He dies praying for others.',
        },
        {
          kind: 'christ',
          id: 'mac4-christ-scourging',
          title: 'Christ Connection — The Scourged One',
          html:
            'All four Gospels record Christ being scourged before crucifixion. Matthew and Mark add: after the soldiers mocked Him with the crown of thorns and a purple robe, they led Him out to crucify Him. The mastix, the same whip that tears Eleazar&apos;s flesh, tears Christ&apos;s. The pattern is unmistakable: the old martyr prefigures the true Martyr. Yet Christ does not merely endure as Eleazar endures—Christ offers His suffering consciously as a ransom. His blood is poured out "for many" (Mt 26:28). His body is broken (Lk 22:19). The Jewish prayer for vicarious atonement finds its answer in the cross.',
        },
        {
          kind: 'christ',
          id: 'mac4-christ-blood',
          title: 'Christ Connection — Blood as Cleansing',
          html:
            'John will write: "The blood of Jesus Christ His Son cleanseth us from all sin" (1 Jn 1:7). Hebrews will argue that Christ&apos;s blood accomplishes what all the Old Testament offerings could not—it is the once-for-all cleansing (Heb 9:14, 10:10). The prayer of a Jewish martyr—"Make my blood their purification"—becomes the very logic of the Gospel. Eleazar&apos;s blood cannot truly cleanse; it is a type, a shadow, a witness to the blood that can. Yet that blood exists in the Jewish hope. Christian faith does not create the concept; it recognizes and fulfills it.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(
              30,
              t('And having spoken thus, the holy man died.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-holy-man',
          html:
            'He is called holy. Not because he never suffered doubt, but because he was entirely aligned with God&apos;s purpose. His death is not an ending; it is a completion. He dies speaking—not in agony, but in intercession. The text grants him the dignity of a final word: not silence, not a scream, but prayer. This is the model 4 Maccabees offers: the death of the martyr as a conversation with God, witnessed by the community, efficacious for the people.',
        },
        {
          kind: 'carry',
          html:
            'Eleazar teaches something the world does not want to hear: that suffering can be meaningful; that a life given away in faithfulness is not wasted; that the example of steadiness costs something but purchases something for others. He does not romanticize his pain. He feels it, bears it, and then transfigures it—offers it up as an oblation. Is there a suffering you are carrying that you have not yet offered? Not sought, not willed—but received and transformed into intercession?',
        },
        {
          kind: 'reflection',
          id: 'mac4-ransom-ref',
          prompt:
            'Eleazar prays that his blood become a purification for his people. What would it look like to offer your own suffering—not seek it, but offer what you bear—as an intercession for others?',
        },
      ],
    },

    /* ─── 4 Maccabees 6:1–30 — Impact and Witness ─────────────────────────── */
    {
      ref: '4 Maccabees 6 · The Whole Picture',
      title: 'The First of Seven',
      blocks: [
        {
          kind: 'commentary',
          id: 'mac4-first-martyr',
          html:
            'Eleazar is the first of seven martyrdoms in 4 Maccabees. Each family—the mother and her seven sons—will follow into the torture chamber. Yet Eleazar&apos;s example will strengthen them. The text suggests that as each one watches the one before die faithfully, they find courage not from a source outside themselves but from the <em>pattern</em> they have witnessed. Faith becomes contagious. Steadiness becomes a teaching. The old man&apos;s death is not solitary; it is a word spoken to the community across generations.',
        },
        {
          kind: 'artwork',
          matchArtist: /tissot/i,
          matchTitle: /martyrdom|torture|scourge/i,
          caption: '4 Maccabees 6 · The Scourging',
        },
        {
          kind: 'christ',
          id: 'mac4-christ-example',
          title: 'Christ Connection — The Exemplary Suffering',
          html:
            'Peter writes: "For even hereunto were ye called; because Christ also suffered for us, leaving us an <em>example</em>, that ye should follow His steps. Who did no sin, neither was guile found in His mouth; who, when He was reviled, reviled not again; when He suffered, He threatened not; but committed Himself to Him that judgeth righteously" (1 Pet 2:21–23). Christ is not merely the victim of circumstance; He is the supreme example of how to bear suffering—how to remain steadfast, how to love even the torturer, how to offer the pain as an oblation. Eleazar&apos;s witness points forward to this. The pattern of faithfulness under torture, of prayer in agony, of death offered for the people—all of it echoes in Christ&apos;s way to the cross.',
        },
        {
          kind: 'carry',
          html:
            'We are not all called to martyrdom. But we are all called to follow in Christ&apos;s steps. That means: to remain steadfast when the easy way is open; to think of others even in our own pain; to refuse the small compromises that corrupt the soul; to believe that what we endure, offered to God, is never wasted; to let our faithfulness teach someone else that God is worth trusting. Eleazar shows us what this looks like. Christ shows us what it means when God Himself does it. The question now is: how will your steadiness teach?',
        },
        {
          kind: 'reflection',
          id: 'mac4-full-ref',
          prompt:
            'Eleazar&apos;s whole life—his refusal, his torture, his prayer, his death—becomes a witness. What will your steadiness teach someone who is watching?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Eleazar, aged ninety, refused to break faith even in torture. Stripped, lashed, his flesh torn—he remained steadfast. In his dying prayer, he asked: "Make my blood their purification, and take my life in exchange for theirs." He became the first witness of seven martyrdoms, showing that faith masters even the body&apos;s deepest agony.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 6 · Study Guide',
  },
};
