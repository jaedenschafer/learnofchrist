import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 3 — Peter and John Heal the Lame Beggar
 *
 * At the temple gate called Beautiful, a man lame from birth is carried daily
 * to beg. Peter and John, filled with the Holy Ghost, command him to rise in
 * the name of Jesus. The man leaps and walks. Peter seizes the moment to point
 * the astounded crowd to Jesus—the rejected Messiah whom God has raised, the
 * prophet foretold by Moses, the heir of Abraham&apos;s covenant blessing.
 */
export const ACTS_3: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 3,

  intros: [
    'Acts 3 opens with the apostles moving freely in Jerusalem, entering the temple at the ninth hour—the hour of prayer when the faithful gather. A man lies at the gate called Beautiful, lame from his mother&apos;s womb, brought there daily by others. For forty years he has not walked. He has known only the position of a beggar, watching the able-bodied stream past him into worship. When Peter and John approach, Peter does something radical: he does not reach for coins. Instead, he reaches for his faith in the name of Jesus.',
    'What happens next is not the healing itself that drives the chapter. The healing is the opening. Peter seizes the crowd&apos;s amazement and redirects it entirely. He stands up and preaches. He points away from himself and John to the Messiah they denied and crucified. He calls them to repentance, promises them times of refreshing, and tells them Jesus is the prophet Moses foretold—and more: He is the seed of Abraham through whom all the nations of the earth will be blessed.',
    'This chapter shows you what the apostles did with a miracle: they made it a doorway to faith in Christ. Every sign points beyond itself.',
  ],

  sections: [
    /* ─── Acts 3:1–5 — The Hour of Prayer ───────────────────────────────── */
    {
      ref: 'Acts 3:1–5',
      title: 'The Hour of Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              1,
              t('Now Peter and John went up together into the '),
              hy('temple', 'acts3-hieron'),
              t(' at the hour of prayer, being the '),
              hg('ninth hour', 'acts3-ninth')
            ),
            verse(
              2,
              t('And a certain man lame from his mother&apos;s womb was '),
              hy('carried', 'acts3-carried'),
              t(' daily: whom they laid at the gate of the temple which is called '),
              hg('Beautiful', 'acts3-beautiful'),
              t(', to ask alms of them that entered into the temple;')
            ),
            verse(
              3,
              t('Who seeing Peter and John about to go into the temple asked an alms.')
            ),
            verse(
              4,
              t('And Peter, fastening his eyes upon him with John, said, '),
              hy('Look on us', 'acts3-attenizo'),
              t('.')
            ),
            verse(
              5,
              t('And he gave heed unto them, expecting to receive something of them.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts3-ninth',
          html:
            'The ninth hour in Jewish reckoning is about three in the afternoon—the time of the evening sacrifice and daily prayers. The apostles are not hiding. They move openly through Jerusalem in the temple, at the hour when the most people are present. This is the first sign of the boldness the Holy Ghost granted them. They have no reason to fear; they have been told to wait in Jerusalem, and they have. Now they move.',
        },
        {
          kind: 'greek',
          id: 'acts3-hieron',
          title: 'Hieron — Temple',
          script: 'ἱερόν',
          translit: '<strong>hieron</strong> · the temple precinct',
          description:
            'The hieron is the temple complex—the outer court, the porticos, the gates. It is <em>not</em> the naos, the inner sanctum. Peter and John move in the public courtyard where the people gather. Their boldness is visible.',
        },
        {
          kind: 'commentary',
          id: 'acts3-beautiful',
          html:
            'The gate called Beautiful—perhaps the Nicanor Gate, the main entrance to the inner court—is where the lame man is placed daily. It is a place of threshold. He is laid at the boundary between the outer court where anyone can go and the inner court where only the ritually clean may enter. For forty years he has watched others cross that line. He cannot.',
        },
        {
          kind: 'commentary',
          id: 'acts3-carried',
          html:
            'He is &ldquo;carried daily&rdquo;—not brought, but <em>carried</em>. The word emphasizes his total dependence. He cannot even get himself to his own begging spot. He is daily moved by others&apos; hands. It is a portrait of helplessness so complete that it seems permanent. Forty years at the gate. Forty years of the same view, the same question, the same answer: alms, not healing.',
        },
        {
          kind: 'greek',
          id: 'acts3-attenizo',
          title: 'Attenizo — Look Intently',
          script: 'ἀτενίζω',
          translit: '<strong>attenizo</strong> · to look steadily; to gaze; to fix the eyes upon',
          description:
            'Peter and John do not look past the man. They look <em>at</em> him, and deeply. The Greek verb suggests not a glance but a fixing of the attention. They see him. This is the first thing he receives from them: witness. A real person acknowledging his existence. Not pity. Attention.',
        },
        {
          kind: 'carry',
          html:
            'In your life right now, you may feel like the lame man—present but overlooked, showing up but not advancing, watched by others as a fixture of sadness rather than as a person with potential. Notice what Peter did first. He looked at you. Not past you. Not down at you. At you. The beginning of every healing in Scripture is someone&apos;s willingness to really see.',
        },
        {
          kind: 'reflection',
          id: 'acts3-seen',
          prompt: 'When did someone look at you—really look—and something shifted? Who might you need to look at the same way?',
        },
      ],
    },

    /* ─── Acts 3:6–8 — Silver and Gold ───────────────────────────────────── */
    {
      ref: 'Acts 3:6–8',
      title: 'Silver and Gold Have I None',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              6,
              t('Then Peter said, Silver and gold have I none; but such as I have give I thee: '),
              hp('In the name of Jesus Christ of Nazareth rise up and walk', 'acts3-christ-name')
            ),
            verse(
              7,
              t('And he took him by the right hand, and lifted him up: and immediately his '),
              hy('feet and ankle bones', 'acts3-iaomai'),
              t(' received strength.')
            ),
            verse(
              8,
              t('And he '),
              hg('leaping up stood, and walked, and entered with them into the temple', 'acts3-leaping'),
              t(', walking, and leaping, and praising God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts3-silver',
          html:
            'Peter does not apologize for his poverty. He does not say, &ldquo;I wish I could help but I&apos;m a fisherman.&rdquo; Instead, he pivots. <em>What</em> I have, I give you. He does not have what the man expects. He has something better. This is not a lesser gift. It is infinitely greater. The beggar has spent forty years begging for coins. In one sentence, Peter frees him from the need to beg at all.',
        },
        {
          kind: 'christ',
          id: 'acts3-christ-name',
          title: 'Christ Connection — Authority in His Name',
          html:
            'Peter does not say, &ldquo;Jesus is here to heal you.&rdquo; He says, &ldquo;Rise and walk <em>in the name of Jesus Christ.</em>&rdquo; The name of Jesus is not a formula. It is His person, His authority, His resurrection power. To act in His name is to stand in His place, to speak as His representative, to bring His authority to bear. The apostles cannot heal. But Jesus can. And they are His hands and voice in Jerusalem. When Peter speaks His name, it is as though Jesus Himself is standing there commanding the man to rise.',
        },
        {
          kind: 'greek',
          id: 'acts3-iaomai',
          title: 'Iaomai — Heal; Restore to Wholeness',
          script: 'ἰάομαι',
          translit: '<strong>iaomai</strong> · to heal; to make whole; to cure',
          description:
            'The feet and ankle bones receive strength—<em>iaomai</em>—healing. It is not metaphorical. The physical body that has been dead is restored to function. The healing is total and instantaneous. There is no gradual recovery, no therapy. Only the command and the immediate, visible, verifiable result.',
        },
        {
          kind: 'commentary',
          id: 'acts3-leaping',
          html:
            'He does not stand carefully and test his weight. He leaps. The man who could not be carried anywhere under his own power suddenly springs upright. He walks. Then he enters the temple. He does what he has been barred from for his whole life: he crosses the threshold into the inner court. The beauty of it is not just the physical fact. It is what it means. He is no longer an outsider. He is no longer excluded. He walks where only the ritually able may walk.',
        },
        {
          kind: 'carry',
          html:
            'Healing in Scripture is always concrete. You do not experience a vague spiritual improvement. Your feet work. Your broken thing becomes whole. Your barrier dissolves. Whatever has been keeping you out—shame, limitation, fear, the voice that says &ldquo;you can&apos;t&rdquo;—Jesus can command it to release you. The question is whether you will rise.',
        },
        {
          kind: 'reflection',
          id: 'acts3-rise',
          prompt: 'What would you do first if the thing that has kept you out—the boundary you&apos;ve accepted as permanent—suddenly dissolved?',
        },
        {
          kind: 'artwork',
          matchTitle: /lame|beautiful|gate/i,
          caption: 'Acts 3:6–8 · Silver and Gold',
        },
      ],
    },

    /* ─── Acts 3:9–12 — Wonder and Astonishment ───────────────────────────── */
    {
      ref: 'Acts 3:9–12',
      title: 'Wonder and Astonishment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              9,
              t('And all the people saw him walking and '),
              hg('praising God', 'acts3-praise'),
              t(':')
            ),
            verse(
              10,
              t('And they knew that it was he which sat for alms at the Beautiful gate of the temple: and they were '),
              hy('filled with wonder and amazement', 'acts3-thauma'),
              t(' at that which had happened unto him.')
            ),
            verse(
              11,
              t('And as the lame man which was healed held Peter and John, all the people ran together unto them in the porch that is called '),
              hg('Solomon&apos;s Porch', 'acts3-solomon'),
              t(', greatly wondering.')
            ),
            verse(
              12,
              t('And when Peter saw it, he answered unto the people, Ye men of Israel, why marvel ye at this? or why look ye so earnestly on us, as though by our own power or holiness we had made this man to walk?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts3-praise',
          html:
            'The formerly lame man is not silent. He praises God. The healing is not only physical—it is spiritual. His mouth opens. His voice joins the worshipping community. He is no longer a spectator at the gate but a participant in praise. He walks and leaps and praises, all at once. Healing and joy are inseparable.',
        },
        {
          kind: 'greek',
          id: 'acts3-thauma',
          title: 'Thauma — Wonder; Amazement; Astonishment',
          script: 'θαῦμα',
          translit: '<strong>thauma</strong> · wonder; a marvel; something that causes astonishment',
          description:
            'The Greek word root lies in the verb <em>thaumazo</em>, to wonder at. The crowd is not merely surprised. They are filled with <em>thauma</em>—a sense of something beyond ordinary explanation, something that exceeds the usual order of the world. This is the moment of openness. The crowd&apos;s reason has been interrupted. They are ready to listen.',
        },
        {
          kind: 'commentary',
          id: 'acts3-solomon',
          html:
            'The scene moves from the gate to Solomon&apos;s Porch, the covered portico that surrounded the outer court of the temple. This is not the priests&apos; domain. This is public space where anyone may gather. Peter will use this space to preach to them openly, not in secret.',
        },
        {
          kind: 'commentary',
          id: 'acts3-marvel',
          html:
            'Peter is quick to redirect. The crowd is looking at him and John as though <em>their</em> power has done this. Peter sees the danger—the moment of wonder can become a moment of false faith, faith in the apostles rather than in Christ. So he redirects immediately. This is not us. This is Jesus. The crowd&apos;s astonishment must be aimed at the right target.',
        },
        {
          kind: 'carry',
          html:
            'When something inexplicable happens in your life—when a door opens that was shut, when a relationship heals, when a way forward appears—the first temptation is to credit the visible agent. Thank the person who helped. But the deeper work is to see through the person to the Source. Who is the real power here? Where does the healing actually come from? Peter&apos;s quick redirection teaches you to look past the instrument to the Healer.',
        },
      ],
    },

    /* ─── Acts 3:13–16 — Denial and Resurrection ──────────────────────────── */
    {
      ref: 'Acts 3:13–16',
      title: 'The God of Abraham and the Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              13,
              t('The God of Abraham, and of Isaac, and of Jacob, the God of our fathers, hath '),
              hy('glorified', 'acts3-god-fathers'),
              t(' his Son Jesus; whom ye delivered up, and denied him in the presence of Pilate, when he was determined to let him go.')
            ),
            verse(
              14,
              t('But ye denied the Holy One and the Just, and desired a murderer to be granted unto you;')
            ),
            verse(
              15,
              t('And killed the Prince of life: whom God hath '),
              hp('raised from the dead', 'acts3-christ-author'),
              t('; whereof we are witnesses.')
            ),
            verse(
              16,
              t('And his name through faith in his name hath made this man strong, whom ye see and know: yea, the faith which is by him hath given him this perfect soundness in the presence of you all.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts3-god-fathers',
          html:
            'Peter anchors Jesus in the covenant history of Israel. This is not a foreign god, not an invention. This is the God of Abraham, Isaac, and Jacob—the God who made the promises. That same God has glorified Jesus. Peter is telling them: the God you worship, the God of your fathers, the God who made the covenant—<em>He</em> has raised Jesus. You are not being asked to abandon your faith. You are being asked to recognize what God has done within the story you already know.',
        },
        {
          kind: 'commentary',
          id: 'acts3-denied',
          html:
            'Peter does not soften the accusation. They delivered Him up. They denied Him. They chose a murderer instead. These are hard words. But notice the structure. Peter names the guilt first. Only then can he offer the cure. Repentance always begins with the truth about what you did. And only after the truth comes the healing.',
        },
        {
          kind: 'greek',
          id: 'acts3-archegos',
          title: 'Archegos — Author; Pioneer; Captain',
          script: 'ἀρχηγός',
          translit: '<strong>archegos</strong> · founder; originator; leader; author',
          description:
            'Peter calls Jesus &ldquo;the Prince of life&rdquo;—literally, the <em>archegos</em> of life, the one who originates life, leads the way into it. Jesus is not merely alive. He is the source of life itself. As the Captain who has already crossed into resurrection, He leads others across after Him.',
        },
        {
          kind: 'christ',
          id: 'acts3-christ-author',
          title: 'Christ Connection — The Author of Life Risen',
          html:
            'They killed the Prince of life—and God raised Him. The contrast is absolute. They silenced Him; God vindicated Him. They took His life; God restored it. This is the central claim of apostolic preaching: Jesus rose from the dead, and by His resurrection, every other hope of life is confirmed. You are not trusting a dead prophet. You are trusting the one who defeated death. &ldquo;Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved&rdquo; (Acts 4:12).',
        },
        {
          kind: 'commentary',
          id: 'acts3-faith-makes-strong',
          html:
            'The healing is attributed to faith—faith in the name of Jesus. It is not Peter&apos;s faith alone, nor the man&apos;s faith alone. It is a meeting: the apostles&apos; faith in the power of the risen Jesus, and the man&apos;s willingness to stand and walk. Faith in Christ, expressed through obedience, produces the healing. The man is made strong.',
        },
        {
          kind: 'carry',
          html:
            'Repentance in Scripture is not self-focused shame. It is the turning around that happens when you finally see clearly: what you did, and what God did in response. The people denied Jesus. But God raised Him. The question Peter puts to them—and to you—is whether you will align with what God has done, or keep your back turned. The healing is only on the other side of the turn.',
        },
        {
          kind: 'reflection',
          id: 'acts3-repent',
          prompt: 'What have you been denying or pushing away? What would it look like to turn toward God&apos;s resurrection power instead?',
        },
      ],
    },

    /* ─── Acts 3:17–21 — Times of Refreshing ─────────────────────────────── */
    {
      ref: 'Acts 3:17–21',
      title: 'Times of Refreshing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              17,
              t('And now, brethren, I wot that through ignorance ye did it, as did also your rulers.')
            ),
            verse(
              18,
              t('But those things, which God before had shewed by the mouth of all his prophets, that Christ should suffer, he hath so fulfilled.')
            ),
            verse(
              19,
              t('Repent ye therefore, and be converted, that your sins may be blotted out, when the '),
              hy('times of refreshing', 'acts3-chronoi'),
              t(' shall come from the presence of the Lord;')
            ),
            verse(
              20,
              t('And he shall send Jesus Christ, which before was preached unto you:')
            ),
            verse(
              21,
              t('Whom the heaven must receive until the times of '),
              hg('restitution of all things', 'acts3-apokatastasis'),
              t(', which God hath spoken by the mouth of all his holy prophets since the world began.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts3-ignorance',
          html:
            'Peter shows mercy. &ldquo;I wot that through ignorance ye did it.&rdquo; He does not excuse their action. He explains it. They did not understand what they were doing when they crucified the Christ. That is no longer possible. He is risen. The light has come. From this moment forward, they know. The offer of repentance stands because they can now turn.',
        },
        {
          kind: 'commentary',
          id: 'acts3-prophets',
          html:
            'Peter places the cross not as an accident or a tragedy, but as the fulfillment of what the prophets foretold. The suffering of the Messiah was written long before. It was the plan. This is how Peter helps them reframe what seemed like catastrophe—the apparent victory of His enemies—as the unfolding of God&apos;s design.',
        },
        {
          kind: 'greek',
          id: 'acts3-chronoi',
          title: 'Chronoi — Times; Seasons; Appointed Periods',
          script: 'χρόνοι',
          translit: '<strong>chronoi</strong> · seasons; times; periods; appointed occasions',
          description:
            'The <em>chronoi</em> of refreshing are not the <em>kairos</em>—the sudden, unrepeatable moment—but the <em>chronoi</em>, the seasons. There is a rhythm to God&apos;s restoration. Seasons of refreshing come and go. They come from the presence of the Lord. When He is near, refreshing is possible.',
        },
        {
          kind: 'commentary',
          id: 'acts3-refreshing',
          html:
            'What is offered is not judgment but refreshing. The word suggests relief, revival, restoration. Imagine being parched and suddenly coming to water. That is the tone of Peter&apos;s offer. Your sins can be blotted out. You can come alive again. The times of refreshing come from the presence of the Lord—not from your effort, your sacrifice, your shame, but from His nearness. Repentance is the turning that puts you in reach of His presence.',
        },
        {
          kind: 'greek',
          id: 'acts3-apokatastasis',
          title: 'Apokatastasis — Restoration; Restitution; Return to Original State',
          script: 'ἀποκατάστασις',
          translit: '<strong>apokatastasis</strong> · restoration; the return of all things to their original state; restitution',
          description:
            'The restitution of all things—<em>apokatastasis</em>—is the great restoration. All that has been broken will be made whole. This is the grand narrative arc: the fall (beginning to break), the work of Christ (the foundation of restoration), and the Second Coming (when the restoration is complete). Peter is telling them: you are not watching a merely local Jerusalem event. You are watching the hinge on which all history turns.',
        },
        {
          kind: 'carry',
          html:
            'Repentance is not primarily about feeling bad. It is about turning toward the presence of the Lord, from which refreshing comes. You cannot refresh yourself. You cannot restore yourself. You can only turn and come near. The times of refreshing are God&apos;s gift. Your part is the turning.',
        },
        {
          kind: 'reflection',
          id: 'acts3-refreshing-reflection',
          prompt: 'What area of your life most needs refreshing right now? What would it mean to stop trying to fix it yourself and instead turn toward God&apos;s presence?',
        },
      ],
    },

    /* ─── Acts 3:22–26 — The Prophet and the Covenant ────────────────────── */
    {
      ref: 'Acts 3:22–26',
      title: 'The Prophet Like Moses and the Seed of Abraham',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              22,
              t('For Moses truly said unto the fathers, A '),
              hp('prophet shall the Lord your God raise up unto you of your brethren, like unto me', 'acts3-prophet-moses'),
              t('; him shall ye hear in all things whatsoever he shall say unto you.')
            ),
            verse(
              23,
              t('And it shall come to pass, that every soul, which will not hear that prophet, shall be destroyed from among the people.')
            ),
            verse(
              24,
              t('Yea, and all the prophets from Samuel and those that follow after, as many as have spoken, have likewise foretold of these days.')
            ),
            verse(
              25,
              t('Ye are the children of the prophets, and of '),
              hg('the covenant which God made with our fathers', 'acts3-covenant'),
              t(', saying unto Abraham, And in thy seed shall '),
              hp('all the kindreds of the earth be blessed', 'acts3-blessing'),
              t(':')
            ),
            verse(
              26,
              t('Unto you first God, sending his Son Jesus, hath raised him up, and sent him to bless you, in turning away every one of you from his iniquities.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts3-prophet-moses',
          html:
            'Peter quotes Deuteronomy 18:15 and the promise of a prophet like Moses. For a Jew, Moses is the greatest figure in history—the one who spoke with God face to face, who led Israel out of bondage, who received the Torah. When Peter says Jesus is <em>like</em> Moses, he is not saying Jesus is merely another prophet in a line. He is saying the one who will be what Moses was is now here. The one who will do what only the greatest leader Israel has known did—that is Jesus. You are not abandoning your faith in Moses. You are receiving what Moses pointed toward.',
        },
        {
          kind: 'christ',
          id: 'acts3-prophet-like-moses',
          title: 'Christ Connection — The Prophet Like Moses',
          html:
            'Jesus is the fulfillment of the Deuteronomic promise. He speaks God&apos;s words. He leads God&apos;s people. He makes a new covenant. But Peter goes further: Jesus is not only the prophet like Moses. He is God&apos;s Son, sent to bless all nations through the seed of Abraham. The prophet is also the long-awaited heir of the covenant. The one through whom all the nations are blessed is here.',
        },
        {
          kind: 'commentary',
          id: 'acts3-covenant',
          html:
            'The covenant God made with Abraham is the foundation of all hope in Scripture. And now Peter tells the crowd: You are the children of the prophets and of that covenant. Your identity is in the ancient promise. That promise is now being fulfilled. You are not being called to something foreign. You are being called into what you already belong to—if you will receive it.',
        },
        {
          kind: 'commentary',
          id: 'acts3-blessing',
          html:
            'The promise to Abraham was that in his seed all the families of the earth would be blessed. It was never meant to be only for Israel. It was always for all nations. Peter is expanding their vision. The God who blessed Abraham is the same God who is at work now, through Jesus, to bless not just this crowd but all nations. They are not the endpoint of the blessing. They are the gateway.',
        },
        {
          kind: 'commentary',
          id: 'acts3-his-son-sent',
          html:
            'Notice the structure: &ldquo;Unto you first God, sending his Son Jesus, hath raised him up.&rdquo; The raising of Jesus is presented as the sending. The resurrection is the fulfillment of the Son being sent. He was sent to bless you by turning you from your iniquities. The healing of the beggar is not the ultimate point. The healing of your soul from sin is. That is what Jesus was sent to accomplish.',
        },
        {
          kind: 'carry',
          html:
            'Peter tells them something crucial: You are not on the outside of God&apos;s covenant. You are the children of the promise. You are the heirs of Abraham. The question is not whether you belong. The question is whether you will receive the blessing. Will you turn toward the one sent to bless you? Will you let Him turn you from your iniquities? The covenant is open. It is your choice whether to step through.',
        },
        {
          kind: 'reflection',
          id: 'acts3-covenant-reflection',
          prompt: 'What does it mean to you that you are a child of the covenant God made with Abraham? How does that identity change the way you see yourself?',
        },
        {
          kind: 'artwork',
          matchTitle: /peter|temple|porch/i,
          caption: 'Acts 3:22–26 · The Prophet and the Covenant',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'In the name of Jesus Christ of Nazareth rise up and walk. The times of refreshing shall come from the presence of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 3 · Study Guide',
  },

  hasHebrew: false,
};
