import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 11 — The Raising of Lazarus
 *
 * Lazarus is sick, then dead. Mary and Martha send word to Jesus: the one you love
 * is sick. But Jesus delays. "This sickness is not unto death, but for the glory
 * of God, that the Son of God might be glorified thereby." When Jesus arrives,
 * Lazarus has been dead four days. Martha says: "Lord, by this time he stinketh."
 * Yet Jesus commands: "Lazarus, come forth." And the dead man walks forth, bound
 * in grave clothes. "Jesus wept."—the shortest verse in Scripture, heavy with
 * the weight of His sorrow and love.
 */
export const JOHN_11: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 11,

  estimatedMinutes: { 5: 2, 10: 5, 15: 7 },
  intros: [
    'Lazarus falls ill in Bethany. His sisters Mary and Martha send for Jesus: "Lord, behold, he whom thou lovest is sick." But Jesus does not hasten. He remains where He is two more days. "This sickness is not unto death, but for the glory of God, that the Son of God might be glorified thereby." When Jesus finally comes to Bethany, Lazarus has been in the tomb four days. Martha approaches Jesus with a mixture of faith and reproach: "Lord, if thou hadst been here, my brother had not died. But I know, that even now, whatsoever thou wilt ask of God, God will give it thee."',
    'Jesus says: "I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live." Martha confesses: "Yea, Lord: I believe that thou art the Christ, the Son of God." Jesus asks to be taken to the tomb. And there, confronted by death itself—a stench, a finality, a darkness—Jesus weeps. In that moment, His love and His sorrow converge. Then He speaks the word: "Lazarus, come forth." And the dead man emerges from the darkness, still bound in grave clothes, walking into life.',
  ],

  sections: [
    /* ─── John 11:1–27 — The Way to Bethany ───────────────────────────── */
    {
      ref: 'John 11:1–27',
      title: 'I Am the Resurrection and the Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(3, 'Therefore his sisters sent unto him, saying, Lord, behold, he whom thou lovest is sick.'),
            plain(4, 'When Jesus heard that, he said, This sickness is not unto death, but for the glory of God, that the Son of God might be glorified thereby.'),
            plain(14, 'Then said Jesus unto them plainly, Lazarus is dead.'),
            plain(21, 'Then said Martha unto Jesus, Lord, if thou hadst been here, my brother had not died.'),
            plain(23, 'Jesus saith unto her, Thy brother shall rise again.'),
            plain(25, 'Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.'),
            plain(26, 'And whosoever liveth and believeth in me shall never die. Believest thou this?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john11-beloved',
          html:
            'Mary and Martha send word: "He whom thou lovest is sick." They appeal to Jesus&apos; love. If He cares for Lazarus, He will come. Yet Jesus, hearing this appeal, remains where He is. This is difficult. It seems to contradict His love. But Jesus is not indifferent. He is purposeful. "This sickness is not unto death, but for the glory of God."',
        },
        {
          kind: 'commentary',
          id: 'john11-glory',
          html:
            'The sickness exists so that God&apos;s glory can be manifested. Not as punishment, but as opportunity for the revelation of God&apos;s power and character. Lazarus will die. Jesus will be delayed. The darkness will seem final. Yet through that seeming defeat will come the greatest victory—a man raised from the dead, a sign pointing to Jesus&apos; own resurrection.',
        },
        {
          kind: 'greek',
          id: 'john11-doxa',
          title: 'Doxa — Glory',
          script: 'δόξα',
          translit: '<strong>Doxa</strong> · glory; honor; brightness; the revealed character of God',
          description:
            'Doxa is not reputation or fame. It is the manifest presence, the revealed reality of God&apos;s majesty and character. When God&apos;s glory is shown, the invisible becomes visible, the hidden is revealed, the power of God breaks into the world openly.',
        },
        {
          kind: 'commentary',
          id: 'john11-resurrection',
          html:
            '"I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live." This is the eleventh of John&apos;s "I am" statements. Jesus does not merely promise resurrection. He is resurrection itself. To believe in Him is to have entered into resurrection life even now. Physical death cannot undo what spiritual life has begun.',
        },
        {
          kind: 'commentary',
          id: 'john11-never-die',
          html:
            '"Whosoever liveth and believeth in me shall never die." There is a paradox here. All mortals die. Yet Jesus says the believer shall never die. He speaks of a death that matters eternally. To believe in Christ is to pass from the death that divides you from God into life that connects you to God eternally. Physical death becomes a transition, not an ending.',
        },
        {
          kind: 'christ',
          id: 'john11-christ-life',
          title: 'Christ Connection — Life Itself',
          html:
            'Jesus is the resurrection and the life. Not one or the other, but both. He raises the dead. He is the source of life itself. All vitality flows from Him. Death is real, but it does not have the final word. Life in Christ transcends death.',
        },
        {
          kind: 'carry',
          html:
            'Martha confesses: "Yea, Lord: I believe that thou art the Christ, the Son of God, which should come into the world." She makes the same confession Peter makes in Matthew. In the face of death, in her sorrow, she recognizes who Jesus is. Can you believe this while facing your own losses?',
        },
        {
          kind: 'reflection',
          id: 'john11-live',
          prompt: 'What part of you feels dead? How is Jesus calling you to believe in the resurrection and life He offers?',
        },
      ],
    },

    /* ─── John 11:28–46 — The Raising of Lazarus ────────────────────────── */
    {
      ref: 'John 11:28–46',
      title: 'Lazarus, Come Forth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(32, 'Then when Mary was come where Jesus was, and saw him, she fell down at his feet, saying unto him, Lord, if thou hadst been here, my brother had not died.'),
            plain(33, 'When Jesus therefore saw her weeping, and the Jews also weeping which came with her, he groaned in the spirit, and was troubled.'),
            plain(35, 'Jesus wept.'),
            plain(38, 'Jesus therefore again groaning in himself cometh to the grave. It was a cave, and a stone lay upon it.'),
            plain(39, 'Jesus said, Take ye away the stone. Martha, the sister of him that was dead, saith unto him, Lord, by this time he stinketh: for he hath been dead four days.'),
            plain(43, 'And when he thus had spoken, he cried with a loud voice, Lazarus, come forth.'),
            plain(44, 'And he that was dead came forth, bound hand and foot with graveclothes: and his face was bound about with a napkin. Jesus saith unto them, Loose him, and let him go.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john11-weeping',
          html:
            '"Jesus wept." The shortest verse in Scripture, yet the most profound. Jesus, the resurrection and the life, weeps at the tomb of His friend. His tears are not weakness or doubt. They are the sign of His full entry into human sorrow, His solidarity with those who grieve, His love so deep that death&apos;s reality grieves Him.',
        },
        {
          kind: 'commentary',
          id: 'john11-groaned',
          html:
            'Jesus "groaned in the spirit, and was troubled." This is not the detached resolve of a God-figure. This is agony, struggle, the weight of confronting death. Yet it is also the stirring of purpose, the gathering of power. Jesus does not bypass human emotion. He enters it fully.',
        },
        {
          kind: 'greek',
          id: 'john11-stenkzo',
          title: 'Stenkzo — Groaned',
          script: 'στενάζω',
          translit: '<strong>Stenkzo</strong> · to groan; to sigh; to groan with inward pain',
          description:
            'To groan is to express deep feeling, pain too profound for mere words. When Jesus groans, He is moved in His depths. He is not performing emotion. He is embodying genuine response to suffering.',
        },
        {
          kind: 'commentary',
          id: 'john11-stinketh',
          html:
            'Martha objects: "Lord, by this time he stinketh: for he hath been dead four days." Death is finality, decay, irreversibility. Martha speaks not from lack of faith, but from realism. Lazarus is gone. The body is corrupted. Resurrection seems impossible. Yet Jesus commands: "Take ye away the stone."',
        },
        {
          kind: 'commentary',
          id: 'john11-come-forth',
          html:
            '"Lazarus, come forth." A word of command, spoken with authority. The dead man obeys. He walks forth, still bound in grave clothes, but alive. He moves. His lungs fill with air. His heart beats. Death has released its grip. The impossible has happened before witnesses.',
        },
        {
          kind: 'commentary',
          id: 'john11-loose',
          html:
            '"Loose him, and let him go." Lazarus emerges from the tomb, but he is still bound. He must be unbounded. The grave clothes must be removed. Even in the miracle of resurrection, there is human participation. We must work to loose what binds.',
        },
        {
          kind: 'christ',
          id: 'john11-christ-death',
          title: 'Christ Connection — Death Defeated',
          html:
            'In raising Lazarus, Jesus demonstrates His power over death. Death is not ultimate. The grave is not final. Jesus breaks the barrier between life and death and brings His friend back. This sign foreshadows His own resurrection—His power to triumph over death, and the power He offers to all who believe.',
        },
        {
          kind: 'carry',
          html:
            'The people who witness this are astonished. Some believe. Others go to the Pharisees and report what Jesus did. His greatest miracle produces both faith and opposition. Truth encountered does not leave people neutral. It moves them toward Jesus or away from Him.',
        },
        {
          kind: 'reflection',
          id: 'john11-grave',
          prompt: 'What have you considered dead or beyond recovery in your life? How is Jesus calling you to expect resurrection?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live. Jesus wept. Lazarus, come forth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 11 · Study Guide',
  },

  hasHebrew: false,
};
