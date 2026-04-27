import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 2 — Letters to Four Churches
 *
 * Christ dictates letters to four of the seven churches: Ephesus (who lost
 * their first love), Smyrna (faithful unto death), Pergamos (tolerating false
 * doctrine), and Thyatira (seduced by a false prophetess). Each letter is a
 * diagnosis and a summons to repentance and perseverance.
 */
export const REVELATION_2: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 2,

  intros: [
    'Christ addresses each church in its particular condition. He knows the churches intimately—their works, their endurance, their compromises. Some are praised; some are rebuked. But each letter contains both diagnosis and hope: a call to remain faithful, a promise to those who overcome.',
    'The pattern is consistent: Christ knows you. He sees your works and your heart. He calls you to account where you have strayed. And He offers a promise—to the one who overcomes, I will give you rest, or a crown, or the hidden manna, or authority.',
  ],

  sections: [
    {
      ref: 'Revelation 2:1–7',
      title: 'Ephesus — Losing First Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Unto the angel of the church of Ephesus write; These things saith he that holdeth the seven stars in his right hand, who walketh in the midst of the seven golden candlesticks;'),
            plain(2, 'I know thy works, and thy labour, and thy patience, and how thou canst not bear them which are evil: but thou hast left thy first love.'),
            plain(4, 'Nevertheless I have somewhat against thee, because thou hast left thy first love.'),
            plain(5, 'Remember therefore from whence thou art fallen, and repent, and do the first works; or else I will come unto thee quickly, and will remove thy candlestick out of his place, except thou repent.'),
            plain(7, 'He that hath an ear, let him hear what the Spirit saith unto the churches; To him that overcometh will I give to eat of the tree of life, which is in the midst of the paradise of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev2-ephesus-works',
          html:
            'Ephesus is praised for its works and endurance, its labor for Christ and its discernment—it "canst not bear them which are evil." Yet for all this achievement, it has lost something essential: its first love. The church has become dutiful but cold, orthodox but joyless. Right doctrine without burning love is not enough.',
        },
        {
          kind: 'greek',
          id: 'rev2-agape',
          title: 'Agape — First Love',
          script: 'ἀγάπη',
          translit: '<strong>Agape</strong> · love; divine love; sacrificial love',
          description:
            'Agape is the love of God toward His people—self-giving, unconditional, costly. When the church loses its first love, it loses the fire that animated it. Works become mechanical. Doctrine becomes dry. Agape is the heart that makes all other virtues live.',
        },
        {
          kind: 'christ',
          id: 'rev2-christ-ephesus',
          title: 'Christ Connection — The Lover of Your Soul',
          html:
            'Christ calls the church back to love—His love for them and their responsive love for Him. The tree of life, offered to those who overcome, recalls Eden&apos;s garden. In Christ, the barrier between God and man is broken. The tree of life is accessible to the beloved again.',
        },
        {
          kind: 'carry',
          html:
            'Orthodoxy without affection becomes brittle. Correct teaching without love becomes pride. As you walk your faith, ask: Do I still burn? Or have I become competent and cold? The summons is always: repent, and do the first works. Love first. Love your God.',
        },
        {
          kind: 'reflection',
          id: 'rev2-ephesus-love',
          prompt: 'What does your "first love" look like? What would it take for you to return to the joy and passion of your early faith?',
        },
      ],
    },

    {
      ref: 'Revelation 2:8–11',
      title: 'Smyrna — Faithful unto Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(8, 'And unto the angel of the church in Smyrna write; These things saith the first and the last, which was dead, and is alive;'),
            plain(9, 'I know thy works, and tribulation, and poverty, (but thou art rich) and I know the blasphemy of them which say they are Jews, and are not, but are the synagogue of Satan.'),
            plain(10, 'Fear them not which kill the body, but are not able to kill the soul: but rather fear him which is able to destroy both soul and body in hell. Be thou faithful unto death, and I will give thee a crown of life.'),
            plain(11, 'He that hath an ear, let him hear what the Spirit saith unto the churches; He that overcometh shall not be hurt of the second death.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev2-smyrna-poverty',
          html:
            'Smyrna is materially poor but spiritually rich. The church faces tribulation and blasphemy from "the synagogue of Satan"—those who claim to be God&apos;s people but oppose God&apos;s purposes. Yet the promise is clear: be faithful unto death, and you shall receive a crown of life. Death is not defeat. Faithfulness unto death is victory.',
        },
        {
          kind: 'greek',
          id: 'rev2-stephanos',
          title: 'Stephanos — Crown',
          script: 'στέφανος',
          translit: '<strong>Stephanos</strong> · crown; victor&apos;s wreath',
          description:
            'The stephanos is the crown given to a victor in athletic competition or battle. It is the sign of triumph. Christ promises that those faithful unto death shall wear this crown. Physical death is not the loss of the crown. It is the moment the crown is placed.',
        },
        {
          kind: 'christ',
          id: 'rev2-christ-smyrna',
          title: 'Christ Connection — Faithful Witness',
          html:
            'Christ is described as "the first and the last, which was dead, and is alive." He is the faithful witness unto death. His faithfulness led to the cross. But the cross led to resurrection. Smyrna is called to the same pattern—death, and then the crown.',
        },
        {
          kind: 'carry',
          html:
            'Fear not those who kill the body. This is the word for every age, for every persecuted believer. The ultimate fear is reserved for God alone. To fear Him is to trust Him—even unto death. Smyrna teaches us that the poorest church may be the richest in the sight of God.',
        },
        {
          kind: 'reflection',
          id: 'rev2-smyrna-faithful',
          prompt: 'What does faithfulness look like in your life? If your faith cost you everything, would you still cling to it?',
        },
      ],
    },

    {
      ref: 'Revelation 2:12–17',
      title: 'Pergamos — Tolerating False Doctrine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(12, 'And to the angel of the church in Pergamos write; These things saith he which hath the sharp sword with two edges;'),
            plain(13, 'I know thy works, and where thou dwellest, even where Satan&apos;s seat is: and thou holdest fast my name, and hast not denied my faith, even in those days wherein Antipas was my faithful martyr, who was slain among you, where Satan dwelleth.'),
            plain(14, 'But I have a few things against thee, because thou hast there them that hold the doctrine of Balaam, who taught Balak to cast a stumbling block before the children of Israel, to eat things sacrificed unto idols, and to commit fornication.'),
            plain(17, 'He that hath an ear, let him hear what the Spirit saith unto the churches; To him that overcometh will I give to eat of the hidden manna, and will give him a white stone, and in the stone a new name written, which no man knoweth saving he that receiveth it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev2-pergamos-doctrine',
          html:
            'Pergamos is commended for holding fast the faith of Jesus, even as a martyr, Antipas, has been slain. Yet the church tolerates those who teach the doctrine of Balaam—an ancient figure who led God&apos;s people into idolatry and sexual sin (Numbers 22–25). By accommodating these false teachers, Pergamos compromises its witness. To compromise doctrine is to stumble into idolatry.',
        },
        {
          kind: 'greek',
          id: 'rev2-manna',
          title: 'Manna — Hidden Food',
          script: 'μάννα',
          translit: '<strong>Manna</strong> · the bread from heaven',
          description:
            'Manna was the bread God gave Israel in the wilderness. The "hidden manna" promised to those who overcome is the true sustenance—not earthly bread but the presence and provision of God Himself. It is hidden because it is meant for those who seek it, who turn from idols.',
        },
        {
          kind: 'christ',
          id: 'rev2-christ-pergamos',
          title: 'Christ Connection — The Sharp Sword',
          html:
            'Christ is introduced as holding the sharp sword with two edges—the sword of His word that cuts between truth and falsehood. Pergamos tolerates Balaam&apos;s doctrine, blunting the edge of truth. Christ calls the church back to the sharp clarity of His word.',
        },
        {
          kind: 'carry',
          html:
            'It is easy to accommodate false doctrine in the name of love or compromise. But Christ will not tolerate it. The white stone and the new name are tokens of intimacy—given only to those who overcome, who refuse the path of Balaam. Remain faithful to truth.',
        },
        {
          kind: 'reflection',
          id: 'rev2-pergamos-doctrine',
          prompt: 'Where are you tempted to accommodate falsehood in the name of unity or acceptance? How does Christ&apos;s call to stand firm on truth speak to you?',
        },
      ],
    },

    {
      ref: 'Revelation 2:18–29',
      title: 'Thyatira — Tolerance of Jezebel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(18, 'And unto the angel of the church in Thyatira write; These things saith the Son of God, who hath his eyes like unto a flame of fire, and his feet are like fine brass;'),
            plain(19, 'I know thy works, and charity, and service, and faith, and thy patience, and thy works; and the last to be more than the first.'),
            plain(20, 'Notwithstanding I have a few things against thee, because thou sufferest that woman Jezebel, which calleth herself a prophetess, to teach and to seduce my servants to commit fornication, and to eat things sacrificed unto idols.'),
            plain(26, 'And he that overcometh, and keepeth my works unto the end, to him will I give power over the nations.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev2-thyatira-jezebel',
          html:
            'Thyatira is praised for its works, love, and service. Yet it "suffers" a false prophetess—Jezebel, named after the ancient queen of Israel who led God&apos;s people into idolatry. This Jezebel teaches sedition and idolatry, and the church permits it. To tolerate such teaching is to tolerate the corruption of God&apos;s people.',
        },
        {
          kind: 'greek',
          id: 'rev2-pseudoprophetes',
          title: 'Pseudoprophetes — False Prophet',
          script: 'ψευδοπροφήτης',
          translit: '<strong>Pseudoprophetes</strong> · false prophet; one who speaks falsely in God&apos;s name',
          description:
            'A pseudoprophetes claims to speak for God but leads people away from truth into idolatry and compromise. False prophecy is insidious because it wears the mask of authority. The church must discern and reject such voices.',
        },
        {
          kind: 'christ',
          id: 'rev2-christ-thyatira',
          title: 'Christ Connection — Eyes Like Flame, Feet Like Brass',
          html:
            'Christ&apos;s eyes see all; His feet stand firm on justice. He sees the seduction of Thyatira and will not tolerate it. Yet to those who overcome and keep His works, He gives authority over the nations. The promise is power and vindication.',
        },
        {
          kind: 'carry',
          html:
            'To permit false teaching is to participate in the seduction of God&apos;s people. Church discipline is not cruelty. It is love—love for the truth and love for those who might be led astray. Stand firm. Reject false prophets.',
        },
        {
          kind: 'reflection',
          id: 'rev2-thyatira-jezebel',
          prompt: 'How do you discern true from false teaching? What would it require of you to speak up against deception in your community?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He that hath an ear, let him hear what the Spirit saith unto the churches; To him that overcometh will I give to eat of the tree of life, which is in the midst of the paradise of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 2 · Study Guide',
  },

  hasHebrew: false,
};
