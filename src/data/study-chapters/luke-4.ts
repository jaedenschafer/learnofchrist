import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 4 — Testing in the Wilderness and Authority Revealed
 *
 * Full of the Holy Ghost, Jesus is led into the wilderness to be tempted.
 * For forty days He fasts. The tempter comes. Turn stones to bread. Worship
 * me and receive all the kingdoms of the world. Throw yourself down from the
 * temple pinnacle. But Jesus answers each temptation with the word of God.
 * "It is written." When the testing is complete, the Spirit leads Him back
 * to Galilee. He comes to the synagogue in Nazareth, opens the scroll of
 * Isaiah, and reads: "The Spirit of the Lord is upon me, because he hath
 * anointed me to preach the gospel to the poor." His hometown rejects Him.
 * He casts out demons. He heals the sick. Authority is manifest.
 */
export const LUKE_4: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 4,

  intros: [
    'Being full of the Holy Ghost, Jesus is led by the Spirit into the wilderness. For forty days He is tempted by the devil, fasting all that time. Like Moses and Elijah before Him, Jesus spends forty days in the wilderness in communion with God. But Jesus faces the tempter. The devil offers all the world&apos;s kingdoms if Jesus will worship him. But Jesus resists. He knows who He is. He knows what He has come to do.',
    'When the testing is complete, the Spirit leads Jesus back to Galilee. He enters the synagogue in Nazareth, His childhood home. He stands to read. The scroll of the prophet Isaiah is given to Him. He unrolls it and finds the place written: "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor." And He says: "This day is this scripture fulfilled in your ears."',
  ],

  sections: [
    {
      ref: 'Luke 4:1–13',
      title: 'Temptation in the Wilderness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'And Jesus being full of the Holy Ghost returned from Jordan, and was led by the Spirit into the wilderness,'),
            plain(2, 'Being forty days tempted of the devil. And in those days he did eat nothing: and when they were ended, he hungered.'),
            plain(3, 'And the devil said unto him, If thou be the Son of God, command this stone that it be made bread.'),
            plain(4, 'And Jesus answered him, saying, It is written, That man shall not live by bread alone, but by every word of God.'),
            plain(8, 'And Jesus answered and said unto him, Get thee behind me, Satan: for it is written, Thou shalt worship the Lord thy God, and him only shalt thou serve.'),
            plain(12, 'And Jesus answered and said unto him, It is said, Thou shalt not tempt the Lord thy God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke4-wilderness',
          html:
            'Jesus is led by the Spirit into the wilderness to be tempted. This is not a failure or a detour. It is part of the unfolding of Jesus&apos; mission. For forty days He fasts. His body hungers. His spirit is tested. The tempter comes to Him at the point of His greatest vulnerability: hunger.',
        },
        {
          kind: 'commentary',
          id: 'luke4-bread',
          html:
            'The devil&apos;s first temptation is immediate and personal: turn the stone to bread. Jesus is starving. The power is His—He could do it. But Jesus refuses. He quotes from Deuteronomy: "Man shall not live by bread alone, but by every word of God." The temptation is not merely to ease hunger. It is to use divine power for personal convenience, to prove His identity, to choose comfort over obedience.',
        },
        {
          kind: 'greek',
          id: 'luke4-peirazō',
          title: 'Peirazō — Tempt; Test',
          script: 'πειράζω',
          translit: '<strong>Peirazō</strong> · tempt; test; try; entice to sin',
          description:
            'Peirazō can mean both "to test" (as a teacher tests a student) and "to tempt to evil" (as the devil tempts us). Jesus faces both. The Spirit tests Him. The devil tempts Him. But Jesus stands firm in both.',
        },
        {
          kind: 'commentary',
          id: 'luke4-kingdoms',
          html:
            'The devil shows Jesus all the kingdoms of the world in a moment of time. "All this power will I give thee, and the glory of them: for that is delivered unto me; and to whomsoever I will I give it." The tempter offers a shortcut to rule—dominion without the cross, glory without suffering. Jesus refuses. "Thou shalt worship the Lord thy God, and him only shalt thou serve."',
        },
        {
          kind: 'christ',
          id: 'luke4-christ-temptation',
          title: 'Christ Connection — Victory Over Temptation',
          html:
            'Jesus&apos; temptation reveals His humanity. He experiences real hunger, real testing. Yet He responds with the word of God. He refuses to use His power for Himself. He chooses obedience over the world&apos;s offers. This is victory—not the absence of temptation, but faithfulness in the face of it.',
        },
        {
          kind: 'carry',
          html:
            'The devil uses Scripture too—he quotes the Psalms when he tempts Jesus to throw Himself from the temple. But Jesus knows the full counsel of Scripture. He knows that testing God—demanding a sign, presuming upon His protection—is itself a violation of trust. Jesus answers with truth.',
        },
        {
          kind: 'reflection',
          id: 'luke4-temptation-reflect',
          prompt: 'When you face temptation, do you answer with Scripture? What words of God sustain you?',
        },
      ],
    },

    {
      ref: 'Luke 4:14–30',
      title: 'Anointing and Rejection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(14, 'And Jesus returned in the power of the Spirit into Galilee: and there went out a fame of him through all the region round about.'),
            plain(16, 'And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.'),
            plain(18, 'The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised,'),
            plain(21, 'And he began to say unto them, This day is this scripture fulfilled in your ears.'),
            plain(28, 'And all they in the synagogue, when they heard these things, were filled with wrath,'),
            plain(30, 'But he passing through the midst of them went his way.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke4-power',
          html:
            'Jesus returns from the wilderness "in the power of the Spirit." The testing has strengthened Him. News of Him spreads through the region. He has overcome temptation. He is ready for His work. When He comes to Nazareth, He enters the synagogue on the Sabbath as He customarily does. He stands to read.',
        },
        {
          kind: 'commentary',
          id: 'luke4-isaiah',
          html:
            'The scroll of Isaiah is given to Him. He unrolls it and reads: "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised." This is the manifesto of Jesus&apos; ministry. Good news to the poor. Healing to the broken. Freedom to the captive. Sight to the blind.',
        },
        {
          kind: 'greek',
          id: 'luke4-euaggelizō',
          title: 'Euaggelizō — Preach Good News',
          script: 'εὐαγγελίζω',
          translit: '<strong>Euaggelizō</strong> · preach good news; bring glad tidings',
          description:
            'Jesus&apos; mission is to euaggelizō—to bring good news. Not judgment first, though judgment comes. Not condemnation, though His word judges. But good news: to the poor, to the captive, to the blind. The gospel is good news before it is anything else.',
        },
        {
          kind: 'commentary',
          id: 'luke4-rejection',
          html:
            'Jesus closes the scroll and sits. "This day is this scripture fulfilled in your ears." The people are amazed at His gracious words. But then Jesus reminds them: in the days of Elijah and Elisha, God&apos;s miracles were given not to Israel but to foreigners. The implications are clear—these people who knew Him as a boy, who want Him to prove Himself, may not be the ones He saves. Their amazement turns to wrath. They try to kill Him. But He walks through them and goes His way.',
        },
        {
          kind: 'christ',
          id: 'luke4-christ-anointing',
          title: 'Christ Connection — The Anointed One',
          html:
            'Jesus declares Himself the fulfillment of Isaiah&apos;s prophecy. He is the anointed one—the Messiah sent to bring good news to the poor and freedom to the captive. This is His identity and His work. Yet His hometown rejects Him. So it will be throughout His ministry: those who should recognize Him first often reject Him.',
        },
        {
          kind: 'reflection',
          id: 'luke4-nazareth-reflect',
          prompt: 'Why do you think Jesus&apos; own town rejected Him? What prevents us from recognizing God&apos;s work in the familiar?',
        },
      ],
    },

    {
      ref: 'Luke 4:31–44',
      title: 'Authority Over Demons and Disease',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(31, 'And came down to Capernaum, a city of Galilee, and taught them on the sabbath days.'),
            plain(33, 'And in the synagogue there was a man, which had a spirit of an unclean devil, and cried out with a loud voice,'),
            plain(35, 'And Jesus rebuked him, saying, Hold thy peace: and come out of him. And when the devil had thrown him in the midst, he came out of him, and hurt him not.'),
            plain(38, 'And he arose out of the synagogue, and entered into Simon&apos;s house. And Simon&apos;s wife&apos;s mother was taken with a great fever; and they besought him for her.'),
            plain(39, 'And he stood over her, and rebuked the fever; and it left her: and immediately she arose and ministered unto them.'),
            plain(40, 'Now when the sun was setting, all they that had any sick with divers diseases brought them unto him; and he laid his hands on every one of them, and healed them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke4-capernaum',
          html:
            'Jesus moves to Capernaum, where He teaches on the Sabbath. In the synagogue, a man possessed by a demon cries out. The demon recognizes Jesus: "Let us alone; what have we to do with thee, thou Jesus of Nazareth? art thou come to destroy us?" The demon knows who Jesus is. But Jesus commands it to silence and come out. The demon throws the man to the ground but harms him not, and comes out.',
        },
        {
          kind: 'commentary',
          id: 'luke4-healing',
          html:
            'After the synagogue, Jesus enters Simon&apos;s house. Simon&apos;s mother-in-law is burning with fever. Jesus rebukes the fever as He rebuked the demon. Immediately, she is healed. She arises and serves them. At sunset, the people bring to Him all who are sick. Jesus lays His hands on each one and heals them. The authority demonstrated over demons extends to sickness. The power that drove out unclean spirits brings wholeness to bodies.',
        },
        {
          kind: 'greek',
          id: 'luke4-iaomai',
          title: 'Iaomai — Heal; Make Whole',
          script: 'ἰάομαι',
          translit: '<strong>Iaomai</strong> · heal; make whole; restore',
          description:
            'Jesus iaomai—He heals. The word encompasses physical healing and spiritual restoration. The kingdom of God is not merely a doctrine. It is the active healing, the restoration of wholeness to those who are broken.',
        },
        {
          kind: 'christ',
          id: 'luke4-christ-power',
          title: 'Christ Connection — The Kingdom Breaking In',
          html:
            'In these healing accounts, the kingdom of God arrives. Demons are cast out. Sickness is rebuked. The power of death and darkness retreats before the presence of Jesus. These are not magic tricks or displays of power for their own sake. They are signs that God&apos;s reign is being established on earth.',
        },
        {
          kind: 'reflection',
          id: 'luke4-healing-reflect',
          prompt: 'What in your life needs the rebuke and healing that only Jesus can bring? What are you carrying that needs to be laid at His feet?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor. It is written, Thou shalt not live by bread alone, but by every word of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 4 · Study Guide',
  },

  hasHebrew: false,
};
