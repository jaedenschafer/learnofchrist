import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Hebrews 10 — The Perfect Sacrifice and Perfect Access
 *
 * The author brings the argument for Christ&apos;s supremacy to its climax.
 * The Law was shadow. Christ is substance. One offering. Forever. Therefore,
 * boldness to draw near. Hold fast. Do not forsake assembly. Endure.
 *
 * Key passages: the Law as shadow (10:1); the impossibility of bulls and goats
 * (10:4); Christ&apos;s body prepared (10:5–7); one offering for sins forever (10:12);
 * perfected forever (10:14); boldness by His blood (10:19–22); a new and living
 * way through the veil—His flesh (10:20); holding fast without wavering (10:23);
 * stirring one another to love and good works (10:24–25); willful sin after knowledge
 * (10:26–31); the just living by faith (10:38–39).
 */

export const HEBREWS_10: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 10,

  estimatedMinutes: { beginner: 10, intermediate: 19, deep: 29 },
  topicTags: ['priest', 'sacrifice', 'faithfulness', 'hope'],
  opener: {
    topical: true,
    caption: 'Hebrews 10',
  },
  intros: [
    'Hebrews 10 is where the entire book reaches its crescendo. The author has spent nine chapters building a case: Christ is superior to the prophets, superior to angels, superior to Moses, superior to Joshua, and superior to the entire Levitical priesthood. Now comes the hammer blow. The Law was not weakness—it was shadow. And shadow, no matter how beautifully carved or carefully performed, can never become the thing itself.',
    'Every year, on the Day of Atonement, the high priest entered the Holy of Holies to offer sacrifices for the sins of the people. Every year, the same ritual. Every year, the people remained incomplete, unfinished, perpetually approaching but never arriving at perfection. The author asks: if the old system actually worked, why would you need to do it again next year? Into that endless cycle steps Jesus. One body. One offering. Once for all. Done.',
    'And that changes everything. If Christ&apos;s work is truly finished, then you—the reader—have access into God&apos;s presence. Not someday, not after more ritual, not after you get yourself together. Now. Therefore the chapter swings from theology to calling: Draw near. Hold fast. Spur one another. Assemble together. Endure. The stakes are high because the invitation is real.',
  ],

  sections: [
    /* ─── Hebrews 10:1 — The Law as Shadow, Not Image ──────────────────── */
    {
      ref: 'Hebrews 10:1–2',
      title: 'The Law a Shadow, Not the Very Image',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              1,
              t('For the law having a '),
              hy('shadow', 'greek-skia'),
              t(' of good things to come, and not the very '),
              hy('image', 'greek-eikon'),
              t(' of the things, can never with those sacrifices which they offered year by year continually make the comers thereunto perfect.')
            ),
            verse(
              2,
              t('For then would they not have ceased to be offered? because that the worshippers once purged should have had no more '),
              hg('conscience of sins', 'heb10-conscience'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb10-shadow-not-image',
          html:
            'The argument is elegant and devastating. The Law was not <em>false</em>—it was <em>incomplete</em>. A shadow is real. It points to something. But the shadow of a hand is not a hand. The shadow of food does not fill the belly. You cannot mistake shadow for substance and expect it to do what only substance can do. If year-by-year repetition proved the system worked, there would be no need for year-by-year repetition.',
        },
        {
          kind: 'greek',
          id: 'greek-skia',
          title: 'Skia — &ldquo;Shadow&rdquo;',
          script: 'σκία',
          translit: '<strong>skia</strong> · shadow; an outline cast by something real',
          description:
            'Paul uses this word too: &ldquo;For now we see through a glass, darkly… but then face to face&rdquo; (1 Cor. 13:12). The Old Testament is not false; it is a shadow on a cave wall, real but not ultimate.',
        },
        {
          kind: 'greek',
          id: 'greek-eikon',
          title: 'Eikon — &ldquo;Image&rdquo;',
          script: 'εἰκών',
          translit: '<strong>eikon</strong> · image; likeness; the thing itself made visible',
          description:
            'Not a copy. The <em>eikon</em> of something is what makes it known, reveals it, stands for it. Christ is the <em>eikon</em> of God (Col. 1:15). He is the very substance the shadows pointed toward.',
        },
        {
          kind: 'commentary',
          id: 'heb10-conscience',
          html:
            'Perfect sacrifice produces a perfect conscience. If the old sacrifices actually removed guilt, the worshippers would not need to return. But they did return. Year after year. The Law could regulate behavior; it could not heal the conscience. It could tell you what was wrong; it could not make you clean.',
        },
        {
          kind: 'christ',
          id: 'christ-law-fulfilled',
          title: 'Christ Connection — The Substance Arrives',
          html:
            'Jesus does not abolish the Law; He <em>is</em> what the Law was pointing to. Every year of animal sacrifice, every washbasin, every priesthood—all shadows cast forward by a coming Light. When that Light arrives in person, you can stop looking at the shadows. You have the thing itself.',
        },
        {
          kind: 'carry',
          html:
            'What shadows have you been mistaking for substance? A ritual that makes you feel better but does not change you. A rule that regulates the outside but leaves the inside unhealed. A system that demands you return again and again because it never actually fixes anything. The gospel offers you the thing itself: a conscience made clean, once for all, and kept clean by His blood.',
        },
        {
          kind: 'reflection',
          id: 'heb10-shadow',
          prompt:
            'What old patterns have you been returning to year after year, hoping they would finally work? How might Christ&apos;s &ldquo;once for all&rdquo; break that cycle?',
        },
      ],
    },

    /* ─── Hebrews 10:4 — The Blood of Bulls and Goats Cannot Remove Sins ── */
    {
      ref: 'Hebrews 10:3–4',
      title: 'It Is Not Possible the Blood of Bulls and Goats Should Take Away Sins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              3,
              t('But in those sacrifices there is a '),
              hg('remembrance made of sins every year', 'heb10-remembrance'),
              t('.')
            ),
            verse(
              4,
              t('For '),
              hy('it is not possible', 'greek-adynatos'),
              t(' that the blood of bulls and of goats should take away sins.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb10-remembrance',
          html:
            'Year by year, the Day of Atonement kept sin in view. It was a public, ceremonial acknowledgment: sin exists, and it needs to be covered. The ritual announced the problem even as it tried to address it. Every repetition was a quiet testimony to its own insufficiency.',
        },
        {
          kind: 'greek',
          id: 'greek-adynatos',
          title: 'Adynatos — &ldquo;Not Possible&rdquo;',
          script: 'ἀδύνατος',
          translit: '<strong>adynatos</strong> · without power; impossible; impossible by nature',
          description:
            'Not a failure in execution. Not poor technique. Impossible <em>by nature</em>. An animal cannot atone for the soul of a human being. Not because the priests were lazy; because physics and theology will not allow it.',
        },
        {
          kind: 'commentary',
          id: 'heb10-animal-limitation',
          html:
            'The author is not disrespecting the Law. He is honoring it by taking it seriously. The Law itself contained no claim that animal blood permanently removed sin. It temporarily covered it. The annual return was built into the system. The Law&apos;s own structure testified to its temporary nature.',
        },
        {
          kind: 'christ',
          id: 'christ-human-blood',
          title: 'Christ Connection — His Blood Does What Theirs Could Not',
          html:
            'Only human blood atones for human sin. The animal sacrifices were always meant to be a pointer, a promise of a day when one human—the God-man—would shed His blood for all. &ldquo;Without shedding of blood is no remission&rdquo; (Heb. 9:22). But when that blood is divine, when that body is sinless, when that offering is made once and received eternally—remission is complete.',
        },
        {
          kind: 'reflection',
          id: 'heb10-blood-takes-away',
          prompt:
            'What sin have you been trying to cover or manage on your own? How does it change things to know that His blood actually takes it away—not just covers it?',
        },
      ],
    },

    /* ─── Hebrews 10:5–7 — A Body Hast Thou Prepared Me ─────────────────── */
    {
      ref: 'Hebrews 10:5–7',
      title: 'A Body Hast Thou Prepared Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              5,
              t('Wherefore when he cometh into the world, he saith, Sacrifice and offering thou wouldest not, but a '),
              hp('body hast thou prepared me', 'christ-body-prepared'),
              t(':')
            ),
            verse(
              6,
              t('In '),
              t('burnt offerings and sacrifices for sin'),
              t(' thou hast had no pleasure.')
            ),
            verse(
              7,
              t('Then said I, Lo, '),
              t('I come'),
              t(' (in the volume of the book it is written of me,) to do thy will, O God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb10-psalm-40',
          html:
            'This is Psalm 40:6–8, placed in the mouth of Jesus. The author is identifying Jesus with the psalmist&apos;s promise to do God&apos;s will. Not reluctantly. Not in obedience to external command. But willingly, gladly, from the heart: <em>Lo, I come.</em>',
        },
        {
          kind: 'greek',
          id: 'greek-soma',
          title: 'Soma — &ldquo;Body&rdquo;',
          script: 'σῶμα',
          translit: '<strong>soma</strong> · body; flesh; the material self',
          description:
            'The Incarnation is the hinge. Not a spirit appearing to have a body. Not a phantom. A real body, real flesh, real vulnerability. God enters the world wearing skin.',
        },
        {
          kind: 'commentary',
          id: 'heb10-volume-book',
          html:
            'Christ says His coming is &ldquo;written of me&rdquo; in the scroll. Not one prophecy. Many. The Psalms, Isaiah, Genesis itself—the whole story of Israel points to this moment. He does not come out of nowhere. He comes as the fulfillment of a promise written through centuries.',
        },
        {
          kind: 'christ',
          id: 'christ-body-prepared',
          title: 'Christ Connection — The Perfect Instrument of Will',
          html:
            'The Father prepared a body for the Son. Not to suffer for suffering&apos;s sake, but as the instrument through which obedience would be made visible. &ldquo;He humbled himself, and became obedient unto death, even the death of the cross&rdquo; (Phil. 2:8). The body was prepared so the will could be done.',
        },
        {
          kind: 'carry',
          html:
            'Do thy will, O God. Those words, spoken into a prepared body, changed everything. Your own willingness—to pray those words, to offer your body as an instrument of obedience, to say <em>lo, I come</em> to the calling you sense God placing on your life—echoes His willingness. You are not here by accident.',
        },
        {
          kind: 'reflection',
          id: 'heb10-lo-i-come',
          prompt:
            'When Christ said &ldquo;Lo, I come to do thy will,&rdquo; He meant it fully. What would it look like for you to mean it just as fully?',
        },
      ],
    },

    /* ─── Hebrews 10:10 — Sanctified Through the Offering Once for All ────── */
    {
      ref: 'Hebrews 10:8–10',
      title: 'By Which Will We Are Sanctified Through the Offering Once for All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              8,
              t('Above when he said, Sacrifice and offering and burnt offerings and offering for sin thou wouldest not, neither hadst pleasure therein; which are offered by the law;')
            ),
            verse(
              9,
              t('Then said he, Lo, I come to do thy will. He taketh away the first, that he may establish the second.')
            ),
            verse(
              10,
              t('By the which will we are sanctified through the '),
              t('offering of the body of Jesus Christ'),
              t(' '),
              hy('once for all', 'greek-hapax'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb10-first-second',
          html:
            '&ldquo;He taketh away the first, that he may establish the second.&rdquo; The first system—animal sacrifice, Levitical priesthood, the veil—is not reformed. It is superseded. Replaced. The second system—Christ and faith—is not an improvement on the old. It is a completely new arrangement.',
        },
        {
          kind: 'greek',
          id: 'greek-hapax',
          title: 'Hapax — &ldquo;Once&rdquo;',
          script: 'ἅπαξ',
          translit: '<strong>hapax</strong> · once; one time; never again',
          description:
            'Not &ldquo;once&rdquo; as in one season and then more will come. <em>Hapax</em> means once and done. Finished. Complete. The work does not need repeating.',
        },
        {
          kind: 'greek',
          id: 'greek-hagiazō',
          title: 'Hagiazō — &ldquo;Sanctify&rdquo;',
          script: 'ἁγιάζω',
          translit: '<strong>hagiazō</strong> · to make holy; to set apart; to consecrate',
          description:
            'Not just forgiveness. Active separation unto God. You are marked as belonging to Him, reserved for Him, set apart from the common use of sin. Sanctification is ongoing, but its ground is the once-for-all offering.',
        },
        {
          kind: 'commentary',
          id: 'heb10-sanctified-comers',
          html:
            'Notice who is sanctified: &ldquo;them that are sanctified.&rdquo; Not the priests. Not a special class. Anyone who comes by His blood is consecrated, made holy, set apart to God. The priesthood is universal. The access is open.',
        },
        {
          kind: 'christ',
          id: 'christ-finished-work',
          title: 'Christ Connection — It Is Finished',
          html:
            'On the cross, Jesus said three words: &ldquo;It is finished&rdquo; (John 19:30). In Greek, a single word: <em>tetelestai</em>—perfected, completed, accomplished. That word echoes here. One offering. Once for all. The work is done. You are sanctified.',
        },
        { kind: 'divider' },
        {
          kind: 'carry',
          html:
            'You do not need to repeat His work. You do not need to add to it, improve it, or finish what He left incomplete. The offering of His body has already sanctified you. Step into that reality today. You are set apart to God. Holy. His.',
        },
        {
          kind: 'reflection',
          id: 'heb10-once-for-all',
          prompt:
            'What does it mean to you, personally, that Christ&apos;s sacrifice is complete—that you do not need to keep offering, repeating, or trying to earn what He already gave?',
        },
      ],
    },

    /* ─── Hebrews 10:12–14 — Sat Down at the Right Hand of God ────────── */
    {
      ref: 'Hebrews 10:11–14',
      title: 'After He Had Offered One Sacrifice for Sins for Ever, Sat Down',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              11,
              t('And every priest standeth daily ministering and offering oftentimes the same sacrifices, which can never take away sins:')
            ),
            verse(
              12,
              t('But this man, after he had offered '),
              t('one sacrifice for sins for ever'),
              t(', '),
              hg('sat down', 'heb10-sat-down'),
              t(' on the right hand of God;')
            ),
            verse(
              13,
              t('From henceforth expecting till his enemies be made his footstool.')
            ),
            verse(
              14,
              t('For '),
              t('by one offering he hath perfected for ever'),
              t(' them that are sanctified.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb10-standing-sitting',
          html:
            'The Levitical priests stood. They offered. They returned the next day and stood again. Their position was forever temporary. Jesus sat down. Sitting in Scripture is the posture of rest, completion, authority. A judge sits on a throne. A king sits in his kingdom. Jesus sits because His work is finished. This exaltation is promised in Psalm 110:1[res:sefaria-psalm110-1], where the Messiah is invited to sit at God&apos;s right hand until all enemies become His footstool.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yashav',
          title: 'Yashav — &ldquo;Sat Down&rdquo;',
          script: 'יָשַׁב',
          translit: '<strong>yashav</strong> · to sit; to settle; to dwell; to reign',
          description:
            'When God &ldquo;sits down,&rdquo; He is not resting from exhaustion. He is taking His place. Jesus takes His place at the right hand of power—the position of absolute authority and rest.',
        },
        {
          kind: 'commentary',
          id: 'heb10-enemies-footstool',
          html:
            '&ldquo;Expecting till his enemies be made his footstool.&rdquo; He sits because the work is complete, but not because conflict is over. He waits. He will return. But for now, He rests in the knowledge that nothing will stop the final accomplishment of all things.',
        },
        {
          kind: 'greek',
          id: 'greek-teleioō',
          title: 'Teleioō — &ldquo;Perfect, Make Perfect&rdquo;',
          script: 'τελειόω',
          translit: '<strong>teleioō</strong> · to perfect; to complete; to make mature; to bring to full capacity',
          description:
            'Not sinlessness. Completeness. You lack nothing that redemption requires. You are whole in Him. The work is finished in you.',
        },
        {
          kind: 'christ',
          id: 'christ-work-finished',
          title: 'Christ Connection — The Work Is Done',
          html:
            'Jesus does not stand and officiate. He does not return to make another offering. He sat down because the work is finished and will never need repeating. In Hebrews 8, when Christ enters the holy place, there is no more curtain—no veil separating earth from God. The barrier is gone. He opened the way. He sits waiting. The end is certain.',
        },
        {
          kind: 'carry',
          html:
            'In your own life, where are you still standing when you should be sitting? Still striving when He has already finished? Still trying to complete what He perfected forever? Rest in His work. Sit down in the reality of what He did. The race is not yours to win. It is already won.',
        },
        {
          kind: 'reflection',
          id: 'heb10-sat-down',
          prompt:
            'What labor or anxiety could you set down today, knowing that Christ has already sat down in completion? What would happen if you truly believed it was finished?',
        },
      ],
    },

    /* ─── Hebrews 10:19–20 — Boldness to Enter by His Blood ──────────────── */
    {
      ref: 'Hebrews 10:15–22',
      title: 'Boldness to Enter Into the Holiest by the Blood of Jesus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              15,
              t('Whereof the Holy Ghost also is a witness to us: for after he had said,')
            ),
            verse(
              16,
              t('This is the covenant that I will make with them after those days, saith the Lord, I will put my laws into their hearts, and in their minds will I write them;')
            ),
            verse(
              17,
              t('And their sins and iniquities will I remember no more.')
            ),
            verse(
              18,
              t('Now where remission of these is, there is no more offering for sin.')
            ),
            verse(
              19,
              t('Having therefore, brethren, '),
              hp('boldness', 'greek-parresia'),
              t(' to '),
              hg('enter into the holiest', 'heb10-holiest'),
              t(' by the blood of Jesus,')
            ),
            verse(
              20,
              t('By a '),
              hg('new and living way', 'heb10-new-way'),
              t(', which he hath consecrated for us, through the veil, that is to say, '),
              hp('his flesh', 'christ-veil-flesh'),
              t(';')
            ),
            verse(
              21,
              t('And having an high priest over the house of God;')
            ),
            verse(
              22,
              t('Let us '),
              hg('draw near', 'greek-proserchomai'),
              t(' with a true heart in full assurance of faith, having our hearts sprinkled from an '),
              hg('evil conscience', 'heb10-conscience-clean'),
              t(', and our bodies washed with pure water.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb10-remember-no-more',
          html:
            'God does not say He will <em>forgive</em> your sins once and then hold them over you. He says He will <em>remember them no more.</em> The debt is not just paid; it is obliterated. The record is not adjusted; it is erased. Complete forgiveness, complete amnesia about your sin—that is what the new covenant promises. This echoes the prophecy of Jeremiah 31:31–34[res:sefaria-jeremiah31-33-34], where God promised to write His law on hearts rather than tablets, and to remember sin no more.',
        },
        {
          kind: 'greek',
          id: 'greek-parresia',
          title: 'Parresia — &ldquo;Boldness&rdquo;',
          script: 'παρρησία',
          translit: '<strong>parresia</strong> · boldness; confidence; freedom to speak openly; freedom of access',
          description:
            'Not timidity. Not fear. Not slinking in through a back door. <em>Parresia</em> is coming forward openly, with your head high, invited. It is the opposite of shame.',
        },
        {
          kind: 'greek',
          id: 'greek-proserchomai',
          title: 'Proserchomai — &ldquo;Draw Near&rdquo;',
          script: 'προσέρχομαι',
          translit: '<strong>proserchomai</strong> · to approach; to draw near; to come forward to',
          description:
            'Used of coming near to a king, to an altar, to God Himself. Not a hesitant step. A decisive approach. This is what faith looks like—not hiding from God, but running to Him.',
        },
        {
          kind: 'commentary',
          id: 'heb10-holiest',
          html:
            'In the old system, only the high priest entered the Holy of Holies, and only once a year, on the Day of Atonement. Everyone else was locked out. Now—through His blood—every believer has access. The barrier is down. The way is open. All are invited in.',
        },
        {
          kind: 'commentary',
          id: 'heb10-new-way',
          html:
            'A &ldquo;new and living way&rdquo; contrasts with the old way of the Law. Not that the Law was dead or corrupt—only that it led to an ending, a repetition. This way is living because it leads to life, to relationship, to access that never ends.',
        },
        {
          kind: 'commentary',
          id: 'heb10-conscience-clean',
          html:
            'Your conscience is what condemns you. It whispers your failures. It keeps a record. The gospel reaches there—into the conscience—and cleanses it. Not just behavior. The feeling, the knowledge of being stained—that is washed away.',
        },
        {
          kind: 'christ',
          id: 'christ-veil-flesh',
          title: 'Christ Connection — The Veil Is His Flesh',
          html:
            'In the temple, a veil separated the Holy of Holies from the rest. No one could pass it. When Jesus died, Matthew tells us the veil was torn in two from top to bottom. His death ripped open the barrier. Now the veil is understood differently: it is His flesh, torn so you can pass through. His body became the opening. His blood made you fit to enter.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to earn access. You do not have to be perfect. Your conscience may still condemn you—old shame dies slowly—but you can bring that condemned conscience to Him and watch it be washed clean. Come boldly. The high priest is there. The veil is torn. The way is open. You are invited.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'heb10-boldness',
          prompt:
            'What keeps you from approaching God with boldness? What conscience-wounds need to be washed clean by His blood so you can draw near?',
        },
      ],
    },

    /* ─── Hebrews 10:23 — Hold Fast the Profession of Our Faith ────────── */
    {
      ref: 'Hebrews 10:23',
      title: 'Hold Fast the Profession of Our Faith Without Wavering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              23,
              t('Let us '),
              hg('hold fast the profession', 'heb10-hold-fast'),
              t(' of our faith without wavering; (for he is faithful that promised;)')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb10-profession',
          html:
            'A &ldquo;profession&rdquo; is a public declaration. Not a private feeling, but an open confession. &ldquo;That if thou shalt confess with thy mouth the Lord Jesus&rdquo; (Rom. 10:9). You confess not because feelings are stable—they fluctuate—but because the One you profess is faithful.',
        },
        {
          kind: 'greek',
          id: 'greek-homologia',
          title: 'Homologia — &ldquo;Profession&rdquo;',
          script: 'ὁμολογία',
          translit: '<strong>homologia</strong> · confession; acknowledgment; agreement; saying the same thing',
          description:
            'To confess faith is to say <em>the same thing</em> as God says about Christ. He says: &ldquo;This is my beloved Son.&rdquo; You say: &ldquo;I believe.&rdquo; You are in agreement.',
        },
        {
          kind: 'commentary',
          id: 'heb10-without-wavering',
          html:
            'Wavering suggests being blown back and forth, unstable, uncertain. The call is for a steadfast grip on what you have confessed. Not perfection of feeling, but constancy of faith. Hold on. Do not let go.',
        },
        {
          kind: 'commentary',
          id: 'heb10-he-is-faithful',
          html:
            '&ldquo;For he is faithful that promised.&rdquo; Your grip is not what holds you up. <em>His</em> faithfulness is. You can be weak and still hold fast because the one you are holding to cannot let go. He is faithful. He promised. He keeps His word.',
        },
        {
          kind: 'christ',
          id: 'christ-faithful-promise',
          title: 'Christ Connection — Faithful Over All',
          html:
            'Jesus is called &ldquo;the faithful witness, the firstborn of the dead, and the prince of the kings of the earth&rdquo; (Rev. 1:5). He keeps His promises. Every word He spoke will be fulfilled. Every covenant He made will stand. Lean on His faithfulness, not on your own steadiness.',
        },
        {
          kind: 'carry',
          html:
            'Today your feelings may not feel strong. You may doubt. You may waver. But your profession of faith does not rest on your feelings—it rests on His faithfulness. Say it anyway: &ldquo;I believe. I trust. I hold fast.&rdquo; The words, spoken in weakness, are anchored to His strength.',
        },
        {
          kind: 'reflection',
          id: 'heb10-hold-fast',
          prompt:
            'In what area of faith are you tempted to let go? What would it mean to hold fast, trusting not in your own strength but in His faithfulness?',
        },
      ],
    },

    /* ─── Hebrews 10:24–25 — Provoke One Another to Love and Good Works ─── */
    {
      ref: 'Hebrews 10:24–25',
      title: 'Provoke One Another to Love and Good Works',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              24,
              t('And let us consider one another to '),
              hg('provoke', 'greek-paroxysmos'),
              t(' unto love and to good works:')
            ),
            verse(
              25,
              t('Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb10-consider-one-another',
          html:
            'To &ldquo;consider one another&rdquo; is to pay attention, to notice, to be aware of. You cannot provoke someone to love if you are not paying attention to them. Discipleship is not impersonal. It is attentive. It sees.',
        },
        {
          kind: 'greek',
          id: 'greek-paroxysmos',
          title: 'Paroxysmos — &ldquo;Provoke&rdquo;',
          script: 'παροξυσμός',
          translit: '<strong>paroxysmos</strong> · provocation; sharp disagreement; also: stimulation; stirring up',
          description:
            'The word can mean sharp dispute, but here it means &ldquo;stirring up&rdquo;—like stirring embers to make them burn brighter. You stir each other up toward love. Not fighting. Fanning into flame what might otherwise go cold.',
        },
        {
          kind: 'commentary',
          id: 'heb10-forsaking-assembly',
          html:
            'The warning here is subtle but serious. &ldquo;Not forsaking the assembling of ourselves together.&rdquo; Some were already dropping away from gatherings. The author does not say why, but the implication is: you need the assembly. You need each other. Faith lived in isolation begins to drift.',
        },
        {
          kind: 'commentary',
          id: 'heb10-as-the-day-approaches',
          html:
            '&ldquo;As ye see the day approaching.&rdquo; The return of Christ draws near. In urgency, community matters more, not less. When the end feels close, the impulse might be to withdraw. The author says the opposite: draw closer together.',
        },
        {
          kind: 'christ',
          id: 'christ-community',
          title: 'Christ Connection — The Body of Christ',
          html:
            'Paul teaches that believers together are the body of Christ (1 Cor. 12:12–27). Not individually. Together. You cannot say, &ldquo;I do not need the body.&rdquo; Every member matters. Every person strengthens the others. Forsaking assembly is weakening the body Christ is still building.',
        },
        {
          kind: 'carry',
          html:
            'Find your people. The ones you can provoke to love. The ones who will exhort you. The ones you can see &ldquo;as the day approaches.&rdquo; Do not shrink back into isolation. Faith grows in community. Love is sharpened by other lovers. Good works multiply when they are witnessed and affirmed.',
        },
        {
          kind: 'reflection',
          id: 'heb10-assembly',
          prompt:
            'Who are the people that stir you up toward love and good works? Are you regularly gathering with them? What would change if you did?',
        },
      ],
    },

    /* ─── Hebrews 10:26–31 — If We Sin Wilfully After Knowledge ────────── */
    {
      ref: 'Hebrews 10:26–31',
      title: 'If We Sin Wilfully After That We Have Received the Knowledge of the Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              26,
              t('For if we '),
              hg('sin wilfully', 'heb10-willful-sin'),
              t(' after that we have received the knowledge of the truth, there remaineth no more sacrifice for sins,')
            ),
            verse(
              27,
              t('But a certain fearful looking for of judgment and '),
              hg('fiery indignation', 'heb10-fiery'),
              t(', which shall devour the adversaries.')
            ),
            verse(
              28,
              t('He that despised Moses&apos; law died without mercy under two or three witnesses:')
            ),
            verse(
              29,
              t('Of how much sorer punishment, suppose ye, shall he be thought worthy, who hath trodden under foot the Son of God, and hath counted the blood of the covenant, wherewith he was sanctified, an unholy thing, and hath done despite unto the Spirit of grace?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb10-willful-sin',
          html:
            'This is not the struggle of a believer against temptation. This is not stumbling, repenting, and rising again. Willful sin is a deliberate choice. It is turning your back on knowledge you have received. It is saying: &ldquo;I know the truth, and I reject it.&rdquo; It is not weakness. It is rebellion.',
        },
        {
          kind: 'commentary',
          id: 'heb10-no-more-sacrifice',
          html:
            '&ldquo;There remaineth no more sacrifice for sins.&rdquo; If you reject Christ—the only sacrifice that matters—there is nothing left. No backup plan. No other way. The logic is inexorable: if you reject the one way, you have chosen the only other option available.',
        },
        {
          kind: 'commentary',
          id: 'heb10-fiery',
          html:
            'This language is harsh. It should be. The author is addressing readers who may be tempted to abandon faith under pressure. He is raising the stakes so they see clearly: this matters. This is not a hobby you can take up and drop. This is life and death.',
        },
        {
          kind: 'greek',
          id: 'greek-hekousios',
          title: 'Hekousios — &ldquo;Willfully&rdquo;',
          script: 'ἑκούσιος',
          translit: '<strong>hekousios</strong> · willingly; intentionally; deliberately',
          description:
            'From <em>heko</em>, &ldquo;to follow or assent to.&rdquo; Willful sin is not accidental. It is chosen. The will is engaged. The person knows better and does it anyway.',
        },
        {
          kind: 'commentary',
          id: 'heb10-spite-spirit',
          html:
            'The author lists three things: treading underfoot the Son of God, counting His blood unholy, and doing despite unto the Spirit of grace. It is possible to know the truth and actively resist it. To call holy things common. To insult the grace being offered.',
        },
        {
          kind: 'commentary',
          id: 'heb10-apostasy-passage',
          html:
            'This passage—like Hebrews 6:4–6—has troubled readers for centuries. Different traditions interpret it differently. Some see it as warning against a real possibility of losing salvation. Others see it as speaking to the gravity of the choice being made, without claiming a believer would ever actually make it. What all agree on: willful rejection of Christ, after knowledge of Him, has serious consequences.',
        },
        {
          kind: 'christ',
          id: 'christ-severe-warning',
          title: 'Christ Connection — Take Him Seriously',
          html:
            'Jesus Himself spoke of hell with more frequency than anyone in Scripture. He took the reality of final judgment seriously. This passage echoes that seriousness. It is not meant to terrify believers—but to clarify that faith is not trivial. You cannot know Christ and treat Him as common. You cannot count His blood as worthless. The stakes are real.',
        },
        {
          kind: 'carry',
          html:
            'This passage is a warning, not a condemnation. If you are reading this and troubled by these words, that very trouble is evidence you are <em>not</em> the person the author is addressing. The person who willfully rejects Christ has hardened themselves past the point of concern. But you are concerned. You are listening. Hold to what you know.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'heb10-willful',
          prompt:
            'Have you ever known something was true and done the opposite anyway? What would willful rejection of Christ actually look like? How do you stay far from that edge?',
        },
      ],
    },

    /* ─── Hebrews 10:35–39 — Call to Remembrance; Now the Just Shall Live by Faith */
    {
      ref: 'Hebrews 10:32–39',
      title: 'The Just Shall Live by Faith; But if Any Man Draw Back, My Soul Shall Have No Pleasure in Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              32,
              t('But call to remembrance the former days, in which, after ye were illuminated, ye endured a great fight of afflictions;')
            ),
            verse(
              33,
              t('Partly, whilst ye were made a gazingstock both by reproaches and afflictions; and partly, whilst ye became companions of them that were so used.')
            ),
            verse(
              34,
              t('For ye had compassion of me in my bonds, and took joyfully the spoiling of your goods, knowing in yourselves that ye have in heaven a better and an enduring substance.')
            ),
            verse(
              35,
              t('Cast not away therefore your '),
              t('confidence'),
              t(', which hath great recompence of reward.')
            ),
            verse(
              36,
              t('For ye have need of patience, that, after ye have done the will of God, ye might receive the promise.')
            ),
            verse(
              37,
              t('For yet a little while, and he that shall come will come, and will not tarry.')
            ),
            verse(
              38,
              t('Now '),
              hp('the just shall live by faith', 'christ-hab-faith'),
              t(': but if any man draw back, my soul shall have no pleasure in him.')
            ),
            verse(
              39,
              t('But '),
              hg('we are not of them who draw back', 'heb10-not-draw-back'),
              t(' unto perdition; but of them that believe to the saving of the soul.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb10-former-days',
          html:
            'The author reminds his readers of their own history. They have suffered. They have endured reproach. They have lost possessions. And they did it joyfully, &ldquo;knowing in yourselves that ye have in heaven a better and an enduring substance.&rdquo; They have already proved their faith in action. Now he calls them to remember that capacity.',
        },
        {
          kind: 'commentary',
          id: 'heb10-confidence-reward',
          html:
            '&ldquo;Cast not away therefore your confidence, which hath great recompence of reward.&rdquo; A reward awaits the faithful. Not immediate. The promise is still coming. But it is certain. Do not trade the promise for present comfort.',
        },
        {
          kind: 'greek',
          id: 'greek-hupomone-endurance',
          title: 'Hupomone — Patience, Endurance',
          script: 'ὑπομονή',
          translit: '<strong>hupomone</strong> · patient endurance; steadfastness under pressure; waiting without losing faith',
          description:
            'Not passive acceptance. Active perseverance. The kind that does the will of God while waiting for the promise. It is the quality that transforms a trial into a testimony.',
        },
        {
          kind: 'commentary',
          id: 'heb10-yet-little-while',
          html:
            '&ldquo;For yet a little while, and he that shall come will come, and will not tarry.&rdquo; From the author&apos;s perspective, the end is near. Nearly 2,000 years later, we still wait. But the principle holds: from God&apos;s perspective, time is compressed. The return is nearer every day. Live like it matters.',
        },
        {
          kind: 'greek',
          id: 'greek-pisteuo',
          title: 'Pisteuo — &ldquo;Believe&rdquo;',
          script: 'πιστεύω',
          translit: '<strong>pisteuo</strong> · to believe; to trust; to commit oneself to',
          description:
            'Not intellectual assent alone. To <em>pisteuo</em> is to stake your life on the truth of something. To commit. To trust. It is a verb that demands a subject who acts.',
        },
        {
          kind: 'commentary',
          id: 'heb10-just-live-faith',
          html:
            'This is Habakkuk 2:4[res:intertextual-habakkuk-2-4]. The author quotes it in the context of both assurance and warning. The just (the righteous, those in covenant with God) live by faith. That is their mode of existence. Not by sight. Not by feeling. By faith. And that faith is active, not passive. It perseveres.',
        },
        {
          kind: 'commentary',
          id: 'heb10-not-draw-back',
          html:
            '&ldquo;But we are not of them who draw back unto perdition; but of them that believe to the saving of the soul.&rdquo; The author speaks with confidence about his readers. They are not apostates. They are believers. They will not ultimately shrink back. But the warning stands: that possibility exists, and some have chosen it.',
        },
        {
          kind: 'christ',
          id: 'christ-hab-faith',
          title: 'Christ Connection — Faith as the Gospel Summary',
          html:
            'Habakkuk wrote, &ldquo;The just shall live by faith,&rdquo; and Paul quotes it in Romans 1:17 as the thesis statement of the entire Gospel: &ldquo;The just shall live by faith.&rdquo; Again in Galatians 3:11. Again here in Hebrews. This is the golden thread running through Scripture. From Old Testament prophet to apostle to Hebrews: the righteous are those who believe. And their life is lived in that belief.',
        },
        {
          kind: 'carry',
          html:
            'You have endured already. You have seen His faithfulness already. You have tasted the goodness already. When the weariness comes—and it will—remember. Remember that you know this is true. Remember that the promise is nearer than it was yesterday. Do not cast away your confidence. Live by faith, not by what you feel.',
        },
        {
          kind: 'reflection',
          id: 'heb10-just-faith',
          prompt:
            'What would it look like for you, today, to live by faith rather than by sight? Where do you need to remember what you have already seen God do?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For by one offering he hath perfected for ever them that are sanctified. Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus, by a new and living way, which he hath consecrated for us, through the veil, that is to say, his flesh.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 10 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm110-1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 110:1 — "Sit Thou at My Right Hand"',
      url: 'https://www.sefaria.org/Psalms.110.1',
      description: 'Royal psalm establishing Christ&apos;s exaltation and cosmic rule after His single sacrifice is completed.',
    },
    {
      id: 'intertextual-habakkuk-2-4',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Habakkuk 2:4 Cross-Reference — "The Just Shall Live by Faith"',
      url: 'https://intertextual.bible/',
      description: 'Traces OT prophecy of faith-righteousness quoted by Paul and Hebrews as the gospel&apos;s foundation.',
    },
    {
      id: 'sefaria-jeremiah31-33-34',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 31:31–34 — The New Covenant Promise',
      url: 'https://www.sefaria.org/Jeremiah.31.31-34',
      description: 'OT covenant promise fulfilled in Hebrews 10:16&ndash;18: God writes His law on hearts and remembers sins no more.',
    },
  ],

  hasHebrew: true,
};
