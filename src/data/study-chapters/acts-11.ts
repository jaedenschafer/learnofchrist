import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 11 — Peter Explains to Jerusalem; The Gospel Breaks Ethnic Walls; Antioch
 *
 * Peter defends his meal with Cornelius before the Jerusalem church. The vision
 * that showed all foods clean becomes the key to showing all nations clean. The
 * apostles silence their objection and glorify God. Meanwhile, in Antioch, a new
 * center emerges. The gospel spreads to Greeks. The followers are called
 * Christians for the first time. Barnabas comes, then Saul. The church grows.
 * A prophet named Agabus foretells famine. The church sends relief to Judea.
 * The Holy Spirit breaks down walls faster than doctrine can explain them.
 */
export const ACTS_11: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 11,

  estimatedMinutes: { beginner: 9, intermediate: 15, deep: 21 },
  intros: [
    'The apostles in Jerusalem hear that Peter has eaten with uncircumcised Gentiles and even stayed in their home. They summon him to account. This is not a minor infraction—it violates the boundaries that have defined God&apos;s people since Moses. Peter stands and recounts the vision: a sheet lowered from heaven, unclean animals declared clean, a voice saying &ldquo;What God hath cleansed, that call not thou common.&rdquo; Then the Spirit fell on Cornelius and his household just as at Pentecost. Peter&apos;s question silences them all: &ldquo;Who was I, that I could withstand God?&rdquo; The answer is: no one.',
    'While this debate unfolds in Jerusalem, the gospel spreads in Antioch. Not only Jews believe—Greeks do too. The hand of the Lord is with them. In that city, far from Jerusalem, the followers are called by a name for the first time: Christians. It sticks. From that moment, the movement has a name that will outlast empires. Barnabas is sent to Antioch. He finds Saul, brings him north. Together they teach. A prophet comes from Jerusalem named Agabus. He predicts famine. The church in Antioch responds by sending relief to Judea. All of this happens because the Spirit broke through before the church was ready to explain it. The gospel was always meant for all peoples. The Spirit knew it before the apostles could articulate it.',
  ],

  sections: [
    /* ─── Acts 11:1–3 — The Circumcision Party Contends ──────────────────── */
    {
      ref: 'Acts 11:1–3',
      title: 'The Contention in Jerusalem',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              1,
              t('And the apostles and brethren that were in Judaea heard that '),
              hg('the Gentiles had also received the word of God', 'acts11-gentiles-word')
            ),
            verse(
              2,
              t('And when Peter was come up to Jerusalem, they that were '),
              hy('of the circumcision', 'acts11-peritome'),
              t(' contended with him,')
            ),
            verse(
              3,
              t('Saying, Thou wentest in to men '),
              hg('uncircumcised', 'acts11-uncircumcised'),
              t(', and '),
              hg('didst eat with them', 'acts11-ate')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts11-gentiles-word',
          html:
            'The news has traveled. Gentiles have believed. This is not a rumor—it is a fact on the ground. The boundary that has held for centuries is cracking. The question the Jerusalem church must answer is ancient: Can someone be in covenant with God without becoming Jewish first?',
        },
        {
          kind: 'greek',
          id: 'acts11-peritome',
          title: 'Peritomē — Circumcision; the Circumcised Party',
          script: 'περιτομή',
          translit: '<strong>peritome</strong> · circumcision; the circumcised ones; Jewish identity',
          description:
            'The term refers not just to the practice but to the party in Jerusalem who insisted on it. They believed that Gentiles must be circumcised and keep the law of Moses to be saved. They are not wrong to care about the law—they are wrong to make it a barrier God has already broken down.',
        },
        {
          kind: 'commentary',
          id: 'acts11-uncircumcised',
          html:
            'To a Jew of this time, this is offensive. Uncircumcised means outside the covenant. It is like saying Peter sat down to dinner with people who are, by definition, excluded from God. The circumcision party sees a violation. They do not yet see that God has shown Peter something else entirely.',
        },
        {
          kind: 'commentary',
          id: 'acts11-ate',
          html:
            'In Jewish law, eating with the uncircumcised is a breach of purity. It is not merely discourteous—it is religiously prohibited. Peter has violated a foundational boundary. The apostles must understand what he was thinking.',
        },
        {
          kind: 'carry',
          html:
            'Whenever something old and certain collides with something new that God is doing, there is friction. You may feel it in your own life—the way you were taught to see boundaries, the walls you learned were permanent, colliding with evidence that God has moved beyond them. The apostles&apos; defense will be simple: we cannot withstand God. Neither can you. The question is not whether the wall was real. The question is whether God has opened a door through it.',
        },
        {
          kind: 'reflection',
          id: 'acts11-contention',
          prompt: 'What old boundary have you had to question because God moved beyond it? What made you willing to follow?',
        },
      ],
    },

    /* ─── Acts 11:4–10 — Peter Retells the Vision ─────────────────────────── */
    {
      ref: 'Acts 11:4–10',
      title: 'The Vision Retold',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              4,
              t('But Peter rehearsed the matter from the beginning, and expounded it by order unto them, saying,')
            ),
            verse(
              5,
              t('I was in the city of Joppa praying: and in a trance I saw a '),
              hy('vision', 'acts11-horama'),
              t(', A certain vessel descend, as it had been a great sheet, let down from heaven by four corners; and it came even to me:')
            ),
            verse(
              6,
              t('Upon the which when I had fastened mine eyes, I considered, and saw '),
              hg('four-footed beasts of the earth, and wild beasts, and creeping things, and fowls of the air', 'acts11-animals')
            ),
            verse(
              7,
              t('And I heard a voice saying unto me, Rise, Peter; '),
              hp('slay and eat', 'acts11-christ-clean'),
              t('.')
            ),
            verse(
              8,
              t('But I said, Not so, Lord; for nothing common or unclean hath at any time entered into my mouth.')
            ),
            verse(
              9,
              t('But the voice answered me again from heaven, '),
              hp('What God hath cleansed, that call not thou common', 'acts11-christ-clean'),
              t('.')
            ),
            verse(
              10,
              t('And this was done three times: and all were drawn up again into heaven.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts11-animals',
          html:
            'The sheet holds animals forbidden by the law. Pigs, shellfish, predators. Everything the law marks as unclean, everything Peter has been taught to refuse—it is all there, alive, undeniable. The vision is not subtle. God is showing him the very boundaries that have defined Jewish identity and the law.',
        },
        {
          kind: 'greek',
          id: 'acts11-horama',
          title: 'Horama — Vision; Something Seen',
          script: 'ὅραμα',
          translit: '<strong>horama</strong> · a vision; something seen in a trance; a divine revelation through sight',
          description:
            'A horama is not a dream or imagination. It is a divinely granted sight. Peter is seeing something God wants him to understand. It is not his preference or his comfort he must adjust. It is his theology.',
        },
        {
          kind: 'commentary',
          id: 'acts11-not-so-lord',
          html:
            'Peter&apos;s response is revealing. "Not so, Lord." He calls God &ldquo;Lord&rdquo; while refusing His command. This is not rebellion—it is confusion. Peter is faithful to what he has always been taught. The law is holy. The boundaries are good. How can God ask him to cross them?',
        },
        {
          kind: 'commentary',
          id: 'acts11-christ-clean',
          html:
            'The voice says what Peter cannot refuse: "What God hath cleansed, that call not thou common." This is not a suggestion. God is cleansing what the law marks as unclean. He is not annulling the law—He is showing that the law was always meant to be transcended by grace. To call something common that God has cleansed is to resist God Himself.',
        },
        {
          kind: 'commentary',
          id: 'acts11-three-times',
          html:
            'The vision repeats three times. Peter cannot miss it. God is not making a suggestion. He is overturning a centuries-old distinction. And the reason is about to become clear: the law that separated clean from unclean was never the final word. It was a schoolmaster, a guardian for a time. Now the guardian is changing the rules.',
        },
        {
          kind: 'carry',
          html:
            'Peter had rules he thought were eternal. He was wrong—or rather, he was partly right. The law was holy, but it was not ultimate. God showed him something his culture had taught him to despise, and asked him to call it clean. You may face something similar. A person you were taught to dismiss. A way of doing things you thought was wrong. God asking you to look closer, to let go of an old boundary, to include rather than exclude. The question is the same as it was for Peter: Will you say "Not so, Lord" to what God shows you, or will you follow?',
        },
        {
          kind: 'reflection',
          id: 'acts11-vision',
          prompt: 'Is there a boundary you&apos;ve held so long that you&apos;ve stopped questioning whether it&apos;s still necessary? What would it take for God to show you it needs to change?',
        },
      ],
    },

    /* ─── Acts 11:11–15 — The Confirmation; The Spirit Falls ──────────────── */
    {
      ref: 'Acts 11:11–15',
      title: 'The Spirit Falls on the Gentiles',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              11,
              t('And, behold, immediately there were three men already come unto the house where I was, sent from Caesarea for me.')
            ),
            verse(
              12,
              t('And the Spirit bade me go with them, '),
              hg('nothing doubting', 'acts11-diakrino'),
              t('. Moreover these six brethren accompanied me, and we entered into the man&apos;s house:')
            ),
            verse(
              13,
              t('And he shewed us how he had seen an angel in his house, which stood and said unto him, Send men to Joppa, and call for Simon, whose surname is Peter;')
            ),
            verse(
              14,
              t('Who shall tell thee words, whereby thou and all thy house shall be '),
              hg('saved', 'acts11-sozo')
            ),
            verse(
              15,
              t('And as I began to speak, '),
              hp('the Holy Ghost fell on them, as on us at the beginning', 'acts11-christ-pentecost')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts11-diakrino',
          html:
            'Peter says he went &ldquo;nothing doubting.&rdquo; The word is <em>diakrino</em>—to dispute, to waver, to discriminate. Peter goes without wavering, without discrimination. The Spirit has told him to go. That is enough.',
        },
        {
          kind: 'greek',
          id: 'acts11-diakrino-word',
          title: 'Diakrinō — Doubt; Dispute; Discriminate',
          script: 'διακρίνω',
          translit: '<strong>diakrino</strong> · to distinguish; to hesitate; to doubt; to dispute',
          description:
            'Peter went without hesitation, without making distinctions between clean and unclean, between Jew and Gentile. The discrimination he might have made was silenced by obedience to the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'acts11-sozo',
          html:
            'The angel promises that Peter&apos;s words will bring salvation to Cornelius and his whole household. Salvation is not a private matter. It is household, family, community. When one person believes, the offer extends to all in that house.',
        },
        {
          kind: 'greek',
          id: 'acts11-sozo-word',
          title: 'Sōzō — Save; Heal; Make Whole; Deliver',
          script: 'σώζω',
          translit: '<strong>sozo</strong> · to save; to heal; to make whole; to deliver from destruction',
          description:
            'Salvation in Greek includes healing, wholeness, deliverance. It is not merely a doctrinal transaction. It is restoration to what humans were meant to be.',
        },
        {
          kind: 'christ',
          id: 'acts11-christ-pentecost',
          title: 'Christ Connection — Pentecost Without Walls',
          html:
            'The Spirit fell on Cornelius and his household "as on us at the beginning." Peter is saying: this is not a lesser version of Pentecost. This is Pentecost itself, without the Jewish prerequisite. The same Spirit. The same gift. The same proof that God has received them. When the Spirit does this, it is as though Christ Himself has declared these Gentiles clean. The resurrection power that fell at Pentecost is falling again. The gospel is breaking its original container and flowing where no human authority has approved it to go. Yet Christ&apos;s authority—the Spirit—has approved it.',
        },
        {
          kind: 'carry',
          html:
            'The Spirit does not ask your permission to work. The Spirit does not wait for your theology to be perfect. The Spirit shows up and declares the unthinkable clean, and you are left to either align or resist. Peter aligned. He saw the evidence of God at work and said yes. What evidence of the Spirit&apos;s work are you resisting because it does not fit the categories you were taught?',
        },
        {
          kind: 'reflection',
          id: 'acts11-spirit-falls',
          prompt: 'When have you witnessed the Spirit working in a way that surprised you or challenged your expectations? How did you respond?',
        },
      ],
    },

    /* ─── Acts 11:16–18 — "Who Was I, That I Could Withstand God?" ──────── */
    {
      ref: 'Acts 11:16–18',
      title: 'Who Was I, That I Could Withstand God?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              16,
              t('Then remembered I the word of the Lord, how that he said, John indeed baptized with water; but ye shall be baptized with the '),
              hg('Holy Ghost', 'acts11-holy-ghost')
            ),
            verse(
              17,
              t('Forasmuch then as God gave them the like gift as he did unto us, who believed on the Lord Jesus Christ; '),
              hg('what was I, that I could withstand God?', 'acts11-withstand')
            ),
            verse(
              18,
              t('When they heard these things, they held their peace, and '),
              hg('glorified God', 'acts11-glorified'),
              t(', saying, Then hath God also to the Gentiles granted '),
              hp('repentance unto life', 'acts11-christ-metanoia')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts11-holy-ghost',
          html:
            'Peter invokes the words of the risen Jesus: the baptism of the Holy Ghost is the promise to all believers. There is no footnote saying "except Gentiles." The promise is universal.',
        },
        {
          kind: 'commentary',
          id: 'acts11-withstand',
          html:
            'Peter&apos;s argument is devastating in its simplicity. God gave the Gentiles the same gift He gave the Jews. The gift is visible. The evidence is undeniable. To oppose it is to oppose God. There is no middle ground. No compromise. No way to say "yes but." Either God has done this, or He has not. Peter has seen it. He cannot unsee it.',
        },
        {
          kind: 'commentary',
          id: 'acts11-glorified',
          html:
            'The apostles do not debate further. They do not defend their original boundaries. They hold their peace. And in that silence, they do something remarkable: they glorify God. They recognize that God has moved, and they choose to move with Him. They become the first church to embrace the gospel&apos;s boundless reach.',
        },
        {
          kind: 'greek',
          id: 'acts11-metanoia-word',
          title: 'Metanoia — Repentance; Turning; Change of Mind',
          script: 'μετάνοια',
          translit: '<strong>metanoia</strong> · repentance; a turning around; a change of mind and direction',
          description:
            'Repentance is not shame or remorse. It is a change of mind. The apostles are experiencing metanoia themselves here—a change of mind about who God&apos;s people are. The Gentiles are experiencing it too: they are turning toward God.',
        },
        {
          kind: 'christ',
          id: 'acts11-christ-metanoia',
          title: 'Christ Connection — Repentance Belongs to All',
          html:
            'The apostles declare that God has "granted repentance unto life" to the Gentiles. This is not pity or exception-making. Repentance is a gift. The same gift offered to the Jews at Pentecost is now offered to all peoples. Jesus was never meant to be the Christ of one nation. He is the Savior of the world. And now, for the first time, the church is beginning to know it (Eph. 2:14–16; 3:6).',
        },
        {
          kind: 'carry',
          html:
            'There is a moment when you stop defending the old boundaries and simply agree: God has moved. It often comes after evidence you cannot deny. Peter could not deny that the Spirit fell. The apostles could not deny the result. Your turning may come the same way—through seeing something so real, so good, so clearly God&apos;s work that your old categories collapse. The invitation is always: follow God, not your prior certainty.',
        },
        {
          kind: 'reflection',
          id: 'acts11-withstand',
          prompt: 'What in your life have you tried to withstand or resist, only to find that God was moving beyond your objection? What did you learn?',
        },
      ],
    },

    /* ─── Acts 11:19–21 — The Gospel Spreads in Antioch ──────────────────── */
    {
      ref: 'Acts 11:19–21',
      title: 'The Men of Cyprus and Cyrene',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              19,
              t('Now they which were scattered abroad upon the persecution that arose about Stephen travelled as far as Phenice, and Cyprus, and '),
              hg('Antioch', 'acts11-antioch'),
              t(', speaking the word to none but unto the Jews only.')
            ),
            verse(
              20,
              t('And some of them were men of Cyprus and Cyrene, which, when they were come to Antioch, '),
              hg('spake unto the Grecians', 'acts11-hellenists'),
              t(', preaching the Lord Jesus.')
            ),
            verse(
              21,
              t('And '),
              hg('the hand of the Lord was with them', 'acts11-hand'),
              t(': and a great number believed, and turned unto the Lord.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts11-antioch',
          html:
            'Antioch is a major city, the third largest in the Roman Empire[res:ascsa-antioch-orontes]. It is cosmopolitan, Greek-speaking, far from Jerusalem. For the first time, the gospel is being preached not in the temple or the synagogue of a Jewish community, but in the streets and homes of a Gentile-majority city. The center of the movement is shifting. Jerusalem is the past. Antioch is the future.',
        },
        {
          kind: 'commentary',
          id: 'acts11-hellenists',
          html:
            'These preachers speak to Grecians—Greeks, not just Greek-speaking Jews. They are preaching the gospel to people with no prior connection to the covenant or the law. They are doing what would have been unthinkable just weeks before. And it is working. A great number believed.',
        },
        {
          kind: 'greek',
          id: 'acts11-chrir-word',
          title: 'Chēr — Grace; Hand; Power of the Lord',
          script: 'χείρ',
          translit: '<strong>cheir</strong> · hand; a metonym for power, action, authority',
          description:
            'The hand of the Lord is a biblical image for God&apos;s active, powerful presence. It was with the prophets. It was with Jesus. Now it is with the scattered believers in Antioch. God is not abandoning the movement—He is expanding it.',
        },
        {
          kind: 'carry',
          html:
            'The hand of the Lord is with them. This is not the hand of their skill or persuasiveness. It is God acting through their obedience. When you speak the gospel to someone who has never heard it, when you step into a place you have never been to share Christ, the promise is the same: God&apos;s hand is with you. You are not alone. Your inadequacy is not the measure. His power is.',
        },
        {
          kind: 'reflection',
          id: 'acts11-hand',
          prompt: 'When have you sensed the hand of the Lord with you in a task or conversation you thought you could not handle? What changed?',
        },
      ],
    },

    /* ─── Acts 11:22–26 — Barnabas, Saul, and the Name "Christian" ──────── */
    {
      ref: 'Acts 11:22–26',
      title: 'Barnabas to Antioch; Barnabas Finds Saul',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              22,
              t('Then tidings of these things came unto the ears of the church which was in Jerusalem: and they sent forth '),
              hg('Barnabas', 'acts11-barnabas'),
              t(', that he should go as far as Antioch.')
            ),
            verse(
              23,
              t('Who, when he came, and had seen the grace of God, was glad, and exhorted them all, that with purpose of heart they would cleave unto the Lord.')
            ),
            verse(
              24,
              t('For he was a good man, and full of the Holy Ghost and of '),
              hy('faith', 'acts11-pistis'),
              t(': and much people was added unto the Lord.')
            ),
            verse(
              25,
              t('Then departed Barnabas to Tarsus, for to seek '),
              hg('Saul', 'acts11-saul'),
              t(':')
            ),
            verse(
              26,
              t('And when he had found him, he brought him unto Antioch. And it came to pass, that a whole year they assembled themselves with the church, and taught much people. And '),
              hg('the disciples were called Christians first in Antioch', 'acts11-christianoi')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts11-barnabas',
          html:
            'Barnabas is sent as an envoy from Jerusalem. His name means "son of encouragement." He arrives in Antioch, sees that God is truly at work, and rejoices. He does not come with suspicion or conditions. He comes with the willingness to see what God is doing and say yes to it.',
        },
        {
          kind: 'greek',
          id: 'acts11-pistis',
          title: 'Pistis — Faith; Trust; Confidence',
          script: 'πίστις',
          translit: '<strong>pistis</strong> · faith; trust; belief; confidence in God',
          description:
            'Barnabas is full of faith. Not doubt, not hesitation. Confidence that God is at work. It is this faith that makes him useful. It opens his eyes to see what God is doing rather than defending what the past was.',
        },
        {
          kind: 'commentary',
          id: 'acts11-saul',
          html:
            'Barnabas leaves Antioch—a booming, expanding church—and goes to find Saul in Tarsus. Saul is unknown at this point. He is the one who held the cloaks of those who stoned Stephen. He is a troublemaker to the Jerusalem church. But Barnabas sees something in him. He brings him to Antioch. This is the moment everything changes. Saul will become Paul. The apostle to the Gentiles. The writer of most of the New Testament. And it happens because Barnabas believed in him when no one else did.',
        },
        {
          kind: 'commentary',
          id: 'acts11-christianoi',
          html:
            'And in Antioch, in that city full of Gentiles and Jews learning to live together in the gospel, the followers are called by a name: Christians. <em>Christianoi</em>[res:bibleodyssey-christianoi]. It is the first time in Scripture. It will be their name forever. It comes from outsiders—those who see that these people are entirely identified with Christ. The name will outlast Rome. It will outlast every empire. Christians. The word is born in a place where walls have fallen and outsiders are in. It is the name of the borderless church.',
        },
        {
          kind: 'greek',
          id: 'acts11-christianoi-word',
          title: 'Christianos — Christian; Bearer of Christ&apos;s Name',
          script: 'Χριστιανός',
          translit: '<strong>christianos</strong> · Christian; one identified with Christ; a follower of Christ',
          description:
            'The suffix <em>-ianos</em> means "belonging to" or "follower of." A <em>christianos</em> is someone who belongs to Christ. The name is likely given by outsiders who observed the believers&apos; absolute allegiance to Christ. It sticks because it is true.',
        },
        {
          kind: 'christ',
          id: 'acts11-christ-name',
          title: 'Christ Connection — Bearing His Name; Breaking Ethnic Walls',
          html:
            'To be called a Christian is to bear Christ&apos;s name. In that name, all ethnic divisions collapse. Jew and Greek are one body. The gospel that breaks down the wall between them is the gospel of the Cross itself: "For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us… that he might make in himself of twain one new man, so making peace" (Eph. 2:14–15). The name Christian means you belong to the one who makes peace by erasing the categories that divide.',
        },
        {
          kind: 'carry',
          html:
            'You are called a Christian. That name shapes everything: how you see others, what you belong to, where your primary allegiance lies. It is not a label you chose. It is a name given to you by a larger story, older than your preference. What you do with it—whether you live into its meaning or empty it—is the question of your life. The first Christians bore the name in a city where nobody thought unity was possible. That is your inheritance too.',
        },
        {
          kind: 'reflection',
          id: 'acts11-name',
          prompt: 'What does it mean to be called a Christian? Where do you most resist the unity that the name implies?',
        },
        {
          kind: 'artwork',
          matchTitle: /antioch|barnabas|paul|saul/i,
          caption: 'Acts 11:22–26 · Barnabas Finds Saul; The Name Christian',
        },
      ],
    },

    /* ─── Acts 11:27–30 — Agabus and the Famine; Relief to Judea ──────────── */
    {
      ref: 'Acts 11:27–30',
      title: 'Agabus and the Famine; Relief Sent to Judea',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(
              27,
              t('And in these days came prophets from Jerusalem unto Antioch.')
            ),
            verse(
              28,
              t('And there stood up one of them named Agabus, and signified by the Spirit that there should be great '),
              hy('dearth', 'acts11-limos'),
              t(' throughout all the world: which came to pass in the days of Claudius Caesar.')
            ),
            verse(
              29,
              t('Then the disciples, every man according to his ability, '),
              hg('determined to send relief', 'acts11-relief'),
              t(' unto the brethren which dwelt in Judaea;')
            ),
            verse(
              30,
              t('Which also they did, sending it to the elders by the hands of Barnabas and Saul.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts11-agabus',
          html:
            'Prophets come from Jerusalem to Antioch. One of them, Agabus, predicts a great famine. This is a real prophecy about a real future event—the severe famine under Claudius around 46–48 CE[res:theoi-aratus-phaenomena], one of the most documented crises of the early imperial period. The text is not interested in the accuracy of the prediction, only in what it triggers.',
        },
        {
          kind: 'greek',
          id: 'acts11-limos',
          title: 'Limos — Famine; Hunger; Extreme Scarcity',
          script: 'λιμός',
          translit: '<strong>limos</strong> · famine; widespread hunger; severe lack',
          description:
            'A famine is not mere shortage. It is crisis. Starvation. The word carries weight. When Agabus speaks, he is speaking of suffering to come. And the church&apos;s response will be immediate.',
        },
        {
          kind: 'commentary',
          id: 'acts11-relief',
          html:
            'The Antioch church does not debate. They do not ask whether Judea deserves help or whether Jerusalem will do the same for them. They simply determine to send relief. Each according to his ability. It is the first organized charity collection in Scripture. The Spirit moves a church to care for believers suffering in another place, another tradition, another land.',
        },
        {
          kind: 'carry',
          html:
            'When news of suffering reaches you, your first question is not "What do they deserve?" or "Will they help us?" It is "What is my ability, and how can I use it?" The Antioch church teaches you something: charity is not sentiment. It is action taken with your own resources, for people you may never meet, to relieve suffering you are not experiencing. It is the gospel made flesh.',
        },
        {
          kind: 'reflection',
          id: 'acts11-relief-reflect',
          prompt: 'When have you been moved to give or serve, not out of obligation but out of the Spirit&apos;s prompting? What did that feel like?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Acts 11',
    quote: 'What God hath cleansed, that call not thou common. The disciples were called Christians first in Antioch.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 11 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-christianoi',
      kind: 'lexicon',
      source: 'Bible Odyssey (SBL)',
      label: 'Christianoi — The Name Christian',
      url: 'https://www.bibleodyssey.org/dictionary/christianoi/',
      description: 'SBL entry on the Greek term Christianoi and its first appearance in Antioch, covering etymology and historical significance.',
    },
    {
      id: 'ascsa-antioch-orontes',
      kind: 'archaeology',
      source: 'ASCSA',
      label: 'Antioch on the Orontes Excavations',
      url: 'https://agora.ascsa.net/research',
      description: 'American School of Classical Studies excavation records and publications documenting third-century Antioch, the hub of early Gentile Christianity.',
    },
    {
      id: 'theoi-aratus-phaenomena',
      kind: 'archive',
      source: 'Theoi Classical Texts',
      label: 'Aratus, Phaenomena',
      url: 'https://www.theoi.com/Text/AratusPhaenomena.html',
      description: 'Full Greek and English text of the Stoic poem referenced in Acts, contextualizing Hellenistic thought world of Antioch.',
    },
  ],

  hasHebrew: false,
};
