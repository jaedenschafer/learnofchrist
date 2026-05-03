import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 4 Maccabees 7 — Eleazar: Philosophy Made Flesh
 */

export const FOURTH_MACCABEES_7: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 7,

  estimatedMinutes: { 5: 7, 10: 11, 15: 15 },
  intros: [
    'After the torture and flames, Eleazar is lifted from the instruments near death. But something in him remains unbroken. The guards see it—a man physically defeated yet spiritually unconquered.',
    'The author pauses the narrative to exalt him. Eleazar becomes not just a victim but a proof. For three hundred verses of argument about how reason masters passion, the author now points to a single flesh-and-blood human being and says: <em>Here. This is what it looks like.</em>',
    'Through a series of comparisons—pilot, temple, athlete, father—the writer crowns Eleazar as the vindication of his thesis. Pious reason has not failed in extremity. It has triumphed.',
  ],

  sections: [
    {
      ref: '4 Maccabees 7:1–3',
      title: 'The Unconquered Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(1, t('And when Eleazar was taken from the instruments, he was near unto death; yet '), hg('his face shone', 'mac7-face-shone'), t(' with the light of his faith.')),
          ],
        },
        { kind: 'commentary', id: 'mac7-face-shone', html: 'The guards expected to see a destroyed man emerging from the fire. Instead they see him radiant. Not invulnerable—the text says he is "near unto death"—but transfigured. His body has been conquered; his spirit remains sovereign. This is the author\'s vindication made visible.' },
        { kind: 'scripture', chapter: 7, lines: [ verse(2, t('And the guards, who had inflicted upon him great torments, '), hg('were amazed at his constancy', 'mac7-amazed-constancy'), t('.')) ] },
        { kind: 'commentary', id: 'mac7-amazed-constancy', html: 'Those trained to break men are themselves broken by what they see. Not by the absence of pain—Eleazar suffered intensely—but by the absence of <em>despair</em>. His reason has not surrendered; it has, if anything, become more lucid.' },
        { kind: 'scripture', chapter: 7, lines: [ verse(3, t('For they beheld a man who had been conquered by fire, '), hp('yet his spirit was unconquered', 'christ-victor'), t('.')) ] },
        { kind: 'christ', id: 'christ-victor', title: 'Christ Connection — Victory in Submission', html: 'Jesus predicted His own suffering plainly: "The Son of Man shall be delivered into the hands of men" (Mt 17:22). Yet on the cross, though His body is destroyed, His spirit remains fixed: "Father, into thy hands I commend my spirit" (Lk 23:46). Submission is not defeat when the will is intact. Christ demonstrates that the ultimate victory is not the prevention of suffering but the maintenance of trust <em>through</em> it.' },
        { kind: 'carry', html: 'The world teaches that victory means avoiding pain. Scripture teaches that victory is remaining true to God when pain comes anyway. Eleazar did not escape the fire; he remained himself <em>in</em> the fire. That kind of constancy—the refusal to surrender the spirit even when the body is broken—is the victory that no flame can take.' },
        { kind: 'reflection', id: 'mac7-unconquered', prompt: 'When have you remained yourself—your convictions intact, your faith steady—even though your circumstances grew painful? What made that possible?' },
      ],
    },
    {
      ref: '4 Maccabees 7:4–9',
      title: 'The Helmsman at the Storm',
      blocks: [
        { kind: 'scripture', chapter: 7, lines: [ verse(4, t('And those who stood by said one to another, "Surely he is like '), hg('a wise pilot that steers through storms', 'mac7-pilot-storms'), t('."')) ] },
        { kind: 'commentary', id: 'mac7-pilot-storms', html: 'The witnesses search for language adequate to what they have seen. They land on the image of the helmsman—the one who must steer by the stars when winds rage and waves rise, when the safe harbor has vanished from sight. Eleazar is that figure: his reason guiding him when every passion screams against it.' },
        { kind: 'scripture', chapter: 7, lines: [ verse(5, t('He did not cry out in the manner of lesser men; he '), hg('guided himself toward God', 'mac7-toward-god'), t(', even '), hg('through the tempest of suffering', 'mac7-tempest-suffering'), t('.')) ] },
        { kind: 'commentary', id: 'mac7-toward-god', html: 'The author uses the language of storms and navigation. To guide oneself "toward God" means to steer by Him as the fixed point, even when every circumstance pushes toward despair.' },
        { kind: 'commentary', id: 'mac7-tempest-suffering', html: 'A tempest is not something to avoid—it is something to navigate. The helmsman does not wait for calm seas; he steers through the storm toward the harbor.' },
        { kind: 'greek', id: 'mac7-kybernetes', title: 'Kybernḗtēs — "Helmsman; Steersman"', script: 'κυβερνήτης', translit: '<strong>kybernḗtēs</strong> · one who guides a ship through danger', description: 'The helmsman is not the captain who gives orders; he is the one gripping the helm, constantly adjusting it, reading the wind, keeping the bow pointed toward home. His hands are always active, always correcting. Reason in Eleazar is not passive resignation but active, moment-by-moment navigation.' },
        { kind: 'scripture', chapter: 7, lines: [ verse(6, t('And all who saw him said, "Such '), hg('wisdom is rare', 'mac7-wisdom-rare'), t('; such courage yet more rare."')) ] },
        { kind: 'commentary', id: 'mac7-wisdom-rare', html: 'Wisdom—not mere cleverness, but the depth to steer by God—is rare. Courage that flows from it is rarer still. These are the virtues that matter most.' },
        { kind: 'christ', id: 'christ-helmsman', title: 'Christ Connection — The Pilot Calms the Storm', html: 'The disciples are in a boat; the sea rises. Jesus sleeps while they row in terror. They wake Him: "Master, carest thou not that we perish?" He speaks to the wind and the waves—"Peace, be still"—and the storm ceases. Then He asks them: "Why are ye so fearful? how is it that ye have no faith?" (Mk 4:35–41). Christ is the <em>ultimate</em> helmsman: He does not merely guide us through the storm; He commands the storm itself. Yet He teaches us to navigate our own tempests with the same steady hand, the same unwavering trust.' },
        { kind: 'carry', html: 'In your tempest—whether of grief, doubt, failure, or pain—you are not the first to navigate it. Your reason, anchored in God&apos;s word and character, is the helm in your own hand. Every steady choice you make in the storm, every moment you refuse to abandon the course, is an act of helmsteering. You are not steering <em>toward</em> safety as the world defines it; you are steering <em>toward God</em>.' },
        { kind: 'reflection', id: 'mac7-storms', prompt: 'What storm are you navigating now? What is your compass? What would it mean to grip the helm and steer toward God rather than toward relief?' },
        { kind: 'divider' },
      ],
    },
    {
      ref: '4 Maccabees 7:10–15',
      title: 'The Unshaken Temple',
      blocks: [
        { kind: 'scripture', chapter: 7, lines: [ verse(10, t('And the author wrote, "Eleazar was like '), hg('a holy temple', 'mac7-holy-temple'), t(' that stands firm though the earth trembles beneath it."')) ] },
        { kind: 'commentary', id: 'mac7-holy-temple', html: 'The temple was built on rock. Its foundation did not move. The image is precise: Eleazar\'s faith is his foundation. External violence shakes the ground; it does not dislodge the temple. His reason is the architecture; his piety is the cornerstone.' },
        { kind: 'scripture', chapter: 7, lines: [ verse(11, t('His body may be broken by instruments; '), hg('his sanctity remains intact', 'mac7-sanctity-intact'), t('.')) ] },
        { kind: 'commentary', id: 'mac7-sanctity-intact', html: 'Sanctity—being set apart for God, dedicated to Him—is the inner work of the soul. Fire can wound the body but cannot touch the inner sanctum if the will remains fixed on God.' },
        { kind: 'greek', id: 'mac7-naos', title: 'Naó́s — "Temple; Inner Sanctum"', script: 'ναός', translit: '<strong>naó́s</strong> · the inmost chamber where God dwells', description: 'The naós is not the outer courts but the very place where God is present. It is inner. It is hidden. Enemies may breach the gates; they cannot breach the holy of holies unless the priests themselves allow it. Eleazar is a naó́s—a dwelling place of God that remains unviolated.' },
        { kind: 'scripture', chapter: 7, lines: [ verse(12, t('For reason, which '), hg('is the gift of the divine', 'mac7-divine-gift'), t(', had become '), hg('the guardian of his soul', 'mac7-guardian-soul'), t('.')) ] },
        { kind: 'commentary', id: 'mac7-divine-gift', html: 'Reason is not a human achievement; it is a divine <em>gift</em>. To use reason—true, pious reason—is to align oneself with God Himself.' },
        { kind: 'commentary', id: 'mac7-guardian-soul', html: 'When Eleazar chooses obedience over comfort, he is not defying his own nature; he is fulfilling it. Reason, as the guardian, keeps the soul oriented toward God.' },
        { kind: 'christ', id: 'christ-temple', title: 'Christ Connection — The Temple Raised in Three Days', html: 'Jesus said: "Destroy this temple, and in three days I will raise it up" (Jn 2:19). The disciples thought He spoke of the stone building in Jerusalem. But John clarifies: "He spake of the temple of his body" (Jn 2:21). Christ&apos;s body could be broken—pierced, crucified, buried—yet the sanctity within it could not be harmed. Three days later, the temple stood again, incorruptible. Eleazar prefigures this mystery: the unshaken sanctuary within, vindicated when the body rises.' },
        { kind: 'carry', html: 'Your inner life—your sanctity, your reason set on God—is a temple. The world can press against it; it may even wound the outer courts of your body and emotions. But the naó́s, the inmost room, remains untouched if you tend it. That is not weakness; that is the architecture of strength.' },
        { kind: 'reflection', id: 'mac7-temple', prompt: 'What threatens the temple of your inner life? What guards it? How is your reason—aligned with God—your first line of defense?' },
      ],
    },
    {
      ref: '4 Maccabees 7:16–20',
      title: 'The Athlete Completes the Race',
      blocks: [
        { kind: 'scripture', chapter: 7, lines: [ verse(16, t('And the author continued, "Like a noble athlete in the games, '), hg('Eleazar ran his race', 'mac7-ran-race'), t('."')) ] },
        { kind: 'commentary', id: 'mac7-ran-race', html: 'The athlete trains for a moment. When the games arrive, all the work—the discipline, the pain, the small refusals—converges into the competition. Eleazar has trained since youth in the Law. The fire is his contest. He does not stop halfway; he reaches the finish.' },
        { kind: 'scripture', chapter: 7, lines: [ verse(17, t('He did not withdraw when pain pressed him; '), hg('he ran toward the goal', 'mac7-ran-goal'), t(', '), hg('pressing through the agony', 'mac7-agony-press'), t('.')) ] },
        { kind: 'commentary', id: 'mac7-ran-goal', html: 'An athlete presses through the agony of muscle and lung because the finish line is real and the prize is worth it. Eleazar presses through torture because God is real and His approval is worth everything.' },
        { kind: 'commentary', id: 'mac7-agony-press', html: 'The text does not say he endured quietly or numbly. It says he pressed. Pressing through agony is different from merely enduring it—it is active, purposeful movement toward the goal.' },
        { kind: 'greek', id: 'mac7-athletes', title: 'Athlḗtēs — "Athlete; Contestant"', script: 'ἀθλητής', translit: '<strong>athlḗtēs</strong> · one who contends in games for the prize', description: 'The athlete knows that the contest is brief. Everything is compressed into a few moments of supreme effort. All his training, all his will, focuses on the finish. Eleazar\'s "race" is the torture and death; his "prize" is vindication and resurrection.' },
        { kind: 'scripture', chapter: 7, lines: [ verse(18, t('And those who witnessed said, "He has '), hg('completed his course', 'mac7-course-completed'), t('—not in shame, but in glory."')) ] },
        { kind: 'commentary', id: 'mac7-course-completed', html: 'To complete one\'s course is to finish what one was called to do. Eleazar did not quit. He did not compromise. He finished in glory—not the world\'s glory, but God\'s.' },
        { kind: 'christ', id: 'christ-athlete', title: 'Christ Connection — The Joy Set Before Him', html: 'Hebrews holds up Jesus as the supreme example: "Looking unto Jesus the author and finisher of our faith; who for the <em>joy that was set before him</em> endured the cross, despising the shame, and is set down at the right hand of the throne of God" (Heb 12:2). Christ ran His race. He saw the finish line—not as escape, but as vindication and resurrection. He did not stop. He pressed through agony toward the goal. Eleazar echoes Him: the athlete who keeps running because he sees the tape, even through pain.' },
        { kind: 'carry', html: 'Your race—your vocation, your marriage, your faith—is longer than a sprinter&apos;s dash. You will grow weary. You will want to stop. But athletes do not run <em>for the pain</em>; they run <em>through the pain</em> toward the finish. What joy is set before <em>you</em>? Not comfort—joy. Not the absence of struggle, but the completion that waits when you finish well.' },
        { kind: 'reflection', id: 'mac7-race', prompt: 'What race are you running? Where is the finish line? What joy sustains you when you want to stop?' },
      ],
    },
    {
      ref: '4 Maccabees 7:21–25',
      title: 'Father of the Martyrs',
      blocks: [
        { kind: 'scripture', chapter: 7, lines: [ verse(21, t('And the author wrote: "Eleazar shall be called '), hg('the father of those who follow', 'mac7-father-follow'), t('; for by his constancy he gave them courage."')) ] },
        { kind: 'commentary', id: 'mac7-father-follow', html: 'The text names Eleazar &ldquo;father.&rdquo; He has no children by flesh, but his example becomes the seed of a generation. The seven brothers who follow him into torture do so not in blind faith but in his faith. He has shown them the way through fire.' },
        { kind: 'scripture', chapter: 7, lines: [ verse(22, t('For when children see their father '), hg('stand unmoved by pain', 'mac7-stand-unmoved'), t(', they learn that '), hg('suffering is not the worst thing', 'mac7-worst-thing'), t('.')) ] },
        { kind: 'commentary', id: 'mac7-stand-unmoved', html: 'The phrase is paradoxical: his body was moved, wounded, burned. Yet his spirit remained unmoved, unshaken in its conviction. That is what the witnesses see and what his heirs learn from.' },
        { kind: 'commentary', id: 'mac7-worst-thing', html: 'The deepest teaching Eleazar gives is this: suffering is terrible, but betraying your conscience is worse. That lesson shapes everyone who witnesses it.' },
        { kind: 'greek', id: 'mac7-patriarches', title: 'Patriárchēs — "Father; Patriarch"', script: 'πατριάρχης', translit: '<strong>patriárchēs</strong> · founder; father of a lineage', description: 'The patriarch is not merely a biological parent; he is the one whose faithfulness echoes forward. Abraham is called the patriarch because his faith shaped generations. Eleazar becomes a patriarch—not of blood kin, but of spiritual children, the martyrs who follow him.' },
        { kind: 'scripture', chapter: 7, lines: [ verse(23, t('The greatest evil is not death or fire, but the '), hg('surrender of the soul to tyranny', 'mac7-soul-tyranny'), t('.')) ] },
        { kind: 'commentary', id: 'mac7-soul-tyranny', html: 'Eleazar teaches his successors—by action, not by words. His lesson: there are worse things than dying. The compromise of conscience, the surrender of reason to fear—these kill the soul before the body ever falls.' },
        { kind: 'carry', html: 'Who is watching you? Your children, your friends, your colleagues—they are all learning what matters by observing what you stand for. You are, whether you know it or not, someone&apos;s father or mother in faith. What are you teaching them about what is worth holding onto?' },
        { kind: 'reflection', id: 'mac7-father', prompt: 'Who are the spiritual children learning from your example? What are you showing them about the cost of faith—and its worth?' },
      ],
    },
    {
      ref: '4 Maccabees 7:26–28',
      title: 'The Proof Made Flesh',
      blocks: [
        { kind: 'scripture', chapter: 7, lines: [ verse(26, t('Thus the author cried out: "Here stands the proof of all I have written! '), hp('Reason mastered every passion', 'mac7-reason-mastered'), t('—pain, fear of death, love of life—in a single, ancient priest."')) ] },
        { kind: 'commentary', id: 'mac7-reason-mastered', html: 'The entire treatise—three hundred verses of philosophical argument—points here: to a man in flames, choosing God over life. This is not theory. This is the thesis embodied. Eleazar is the proof the author has been building toward since the opening page.' },
        { kind: 'scripture', chapter: 7, lines: [ verse(27, t('And as he was taken up into heaven, '), hg('his face yet shining', 'mac7-face-shining-final'), t(', '), hp('the Lord received him', 'mac7-lord-received'), t('.')) ] },
        { kind: 'commentary', id: 'mac7-face-shining-final', html: 'Even in death, his face shines. The transfiguration continues; it is not destroyed but perfected when he is received by God.' },
        { kind: 'christ', id: 'mac7-lord-received', title: 'Christ Connection — Received by the Father', html: 'Eleazar is received by God as his reward and vindication. Christ says to the thief on the cross: "To day shalt thou be with me in paradise" (Lk 23:43). The one who stands faithfully through suffering is received by God Himself—not abandoned to the grave, but escorted into His presence.' },
        { kind: 'scripture', chapter: 7, lines: [ verse(28, t('"Reason was the helmsman of his soul; piety was its compass. '), hg('So depart, Eleazar', 'mac7-depart-noble'), t(', '), hp('father of the faithful', 'mac7-father-faithful'), t(', model for all who would stand."')) ] },
        { kind: 'commentary', id: 'mac7-depart-noble', html: 'The author bestows the greatest honor: to depart as a father, as a model, as a triumphant witness. This is the crowning of Eleazar.' },
        { kind: 'christ', id: 'mac7-father-faithful', title: 'Christ Connection — The Model for All', html: 'Eleazar is called "father of the faithful." The ultimate Father of the faithful is Christ Himself, who leads "many sons unto glory" (Heb 2:10). In calling Eleazar father of those who follow him in faith, the author echoes the pattern Jesus embodies: the One whose example becomes the template for all who come after. "Let this mind be in you, which was also in Christ Jesus" (Phil 2:5).' },
        { kind: 'carry', html: 'You are not called to be a martyr in fire—most of us are not. But you are called to the same allegiance Eleazar embodied: to let reason, rooted in faith, be the helmsman of your soul. To say no to the smaller deaths, the small surrenders, the gradual compromise. To finish the race set before you, not for applause, but because the Lord is watching and the finish line is real.' },
        { kind: 'reflection', id: 'mac7-vindicated', prompt: 'In your own life, where is reason (rooted in faith) your helmsman? Where are you tempted to let passion take the wheel? What would it look like to stand, as Eleazar stood?' },
        { kind: 'artwork', matchTitle: /martyrdom|fire|faith|testament/i, matchArtist: /rembrandt|caravaggio|tintoretto/i, caption: '4 Maccabees 7 · The Proof of Pious Reason' },
      ],
    },
  ],

  bottomShare: {
    quote: 'Eleazar was like a wise helmsman steering through storms. His face shone with the light of faith. Reason was the helmsman of his soul; piety was its compass. He became the father of all who would follow him into faithfulness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 7 · Study Guide',
  },
};
