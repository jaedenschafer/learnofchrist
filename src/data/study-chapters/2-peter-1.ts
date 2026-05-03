import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Peter 1 — Divine Nature and Apostolic Eyewitnesses
 *
 * Simon Peter writes to the scattered church with a clarion call: you have
 * been given all things that pertain to life and godliness. Not to be passive,
 * but to add to your faith virtue, knowledge, temperance, patience, godliness,
 * brotherly kindness, and charity. And as you grow in these, Peter reminds us
 * of a crucial foundation: we are not following cleverly devised fables. We saw
 * Jesus with our own eyes. We heard the Father's voice on the holy mount. And
 * the prophets who foresaw all this were moved by the Holy Spirit, not by their
 * own interpretation.
 */
export const SECOND_PETER_1: RichChapterContent = {
  bookSlug: '2-peter',
  bookName: '2 Peter',
  chapter: 1,

  estimatedMinutes: { 5: 9, 10: 17, 15: 26 },
  intros: [
    'Peter writes from the shadow of his own death. He knows his time is short. And so he writes not with elaborate theology but with the urgency of an eyewitness: you need to know that what we saw was real. Not mythology. Not borrowed ideas. The power and coming of Jesus Christ—we were there. And so he greets the scattered church with grace and peace multiplied through the knowledge of Christ, and immediately calls them upward: you have been given all things. The divine power of Christ has already given you everything you need. Now add to that gift: build virtue upon faith, knowledge upon virtue, continuing up an ascending staircase of character.',
    'What makes 2 Peter remarkable is its rooting of Christian growth in the reality of what was seen and heard. Peter and James and John stood on a mountain and heard the Father declare about Jesus: "This is my beloved Son, in whom I am well pleased." That moment—the voice from heaven, the glory reflected in human faces—is not incidental. It is the bedrock on which all Christian instruction rests. The prophets who wrote of Christ were not spinning their own interpretations; they were borne along by the Holy Spirit. The word prophecy itself, Peter suggests, is not about prediction but about the living presence of God moving human hearts to speak truth.',
  ],

  sections: [
    /* ─── 2 Peter 1:1–2 — Grace and Peace Multiplied ───────────────────── */
    {
      ref: '2 Peter 1:1–2',
      title: 'Simon Peter&apos;s Greeting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(1, hy('Simon Peter', 'c-simon-peter'), t(', a '), hy('servant', 'greek-doulos'), t(' and an '), hy('apostle', 'greek-apostolos'), t(' of Jesus Christ, to them that have obtained like precious '), hy('faith', 'c-faith-obtained'), t(' with us through the '), hy('righteousness', 'c-righteousness-god'), t(' of God and our Saviour Jesus Christ:')),
            verse(2, t('Grace and peace be multiplied unto you through the knowledge of God, and of Jesus our Lord.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-simon-peter',
          html: 'He calls himself Simon Peter—the name he was born with, before Jesus gave him the name of rock. The reminiscence is deliberate. He is reminding his readers that he is the same person who walked with Jesus, who denied Him, who was restored, and who now, in his final days, writes with a particular kind of authority: not the authority of office, but the authority of one who was there.',
        },
        {
          kind: 'greek',
          id: 'greek-doulos',
          title: 'Doulos — &ldquo;Servant&rdquo;',
          script: 'δοῦλος',
          translit: '<strong>doulos</strong> · a servant; a bondslave; one bound to another&apos;s will',
          description: 'Peter begins not with credentials but with servitude. This is not false humility. A doulos is entirely at someone else&apos;s disposal. Peter has made that choice. And from that choice flows the apostolic authority—not as a human appointment, but as a calling.',
        },
        {
          kind: 'greek',
          id: 'greek-apostolos',
          title: 'Apostolos — &ldquo;Apostle&rdquo; or &ldquo;One Sent&rdquo;',
          script: 'ἀπόστολος',
          translit: '<strong>apostolos</strong> · one sent forth; a messenger; an envoy with delegated authority',
          description: 'An apostle is not primarily an office holder but a messenger—one commissioned to carry a word. Peter is sent. Sent to those scattered by persecution, to those who have the same faith. Not a faith earned by worthiness, but obtained through the righteousness of God.',
        },
        {
          kind: 'commentary',
          id: 'c-faith-obtained',
          html: 'Peter does not say "to those who believe" or "to those who are faithful." He says to those who have obtained faith. It is a gift. Precious not because it is rare, but because it costs everything and is worth everything.',
        },
        {
          kind: 'commentary',
          id: 'c-righteousness-god',
          html: 'The faith they have was obtained "through the righteousness of God and our Saviour Jesus Christ." Their faith is not their achievement. It flows from God&apos;s righteousness—His character, His covenant-keeping, His determination to make things right. And this righteousness is both God the Father&apos;s and Christ&apos;s—a rightness that is one, that runs through the whole Godhead.',
        },
        {
          kind: 'carry',
          html: 'You did not achieve your faith through moral effort. It was obtained through the righteousness of God—through His character and His choice. You rest not on your own worthiness but on His. And from that foundation, grace and peace are multiplied to you. Not fixed at some quantity, but always increasing, deepening, overflowing into new circumstances and new sorrows.',
        },
        {
          kind: 'reflection',
          id: '2p1-greeting',
          prompt: 'Your faith was obtained through God&apos;s righteousness, not your own. What would it mean to live today from that foundation instead of from your own efforts?',
        },
        {
          kind: 'artwork',
          matchTitle: /servant|apostle|peter|greet/i,
          caption: '2 Peter 1:1–2 · Simon Peter&apos;s Greeting',
        },
      ],
    },

    /* ─── 2 Peter 1:3–4 — Divine Power; Partakers of Divine Nature ────────── */
    {
      ref: '2 Peter 1:3–4',
      title: 'Divine Power Hath Given Us All Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(3, t('According as his divine power hath given unto us '), hg('all things that pertain unto life and godliness', 'c-all-things'), t(', through the knowledge of him that hath called us to '), hg('glory and virtue', 'c-glory-virtue'), t(':')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-all-things',
          html: 'Peter begins not with demands but with abundance. His divine power—the dunamis, the working power of God—has already given you everything. Not most things. All things. All things pertaining to life—the biological, the daily, the ordinary—and to godliness, the spiritual character that reflects God. You lack nothing. You begin from fullness, not scarcity.',
        },
        {
          kind: 'commentary',
          id: 'c-glory-virtue',
          html: 'You are called to both glory and virtue. Glory is the manifest presence and beauty of God. Virtue is the moral excellence that flows from becoming like Him. These are not separated. The more you grow in virtue—in character, in holiness, in love—the more you reflect the glory of God. They are two sides of the same transformation.',
        },
        {
          kind: 'greek',
          id: 'greek-theia-physis',
          title: 'Theia Physis — &ldquo;Divine Nature&rdquo;',
          script: 'θεία φύσις',
          translit: '<strong>theia physis</strong> · the divine nature; divine essence or character',
          description: 'The power that gives you all things is divine—theia. It belongs to God&apos;s very nature. This is why the gift is inexhaustible. You are not drawing from a human reservoir; you are connected to the source of all life.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(4, t('Whereby are given unto us exceeding great and precious '), hy('promises', 'c-promises'), t(': that by these ye might be '), hg('partakers of the divine nature', 'c-divine-nature'), t(', having escaped the '), hg('corruption that is in the world through lust', 'c-corruption-lust'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-promises',
          html: 'Those all things manifest as promises. Exceeding great—vast, overwhelming—and precious—valuable beyond reckoning. God does not promise you a comfortable life or freedom from suffering. He promises you Himself. He promises transformation. He promises that you will become something other than what you were.',
        },
        {
          kind: 'commentary',
          id: 'c-divine-nature',
          html: 'To be a "partaker of the divine nature" is one of the most contested phrases in Christian theology. Some traditions call it deification or theosis—becoming divine (though always remaining human, always distinct from God). Others call it sanctification—being made holy, conformed to Christ. What is certain is that Peter is saying something radical: you are not merely forgiven; you are transformed. You share in a life that is not your own, a character that is God&apos;s. This does not happen all at once. It is the work of a lifetime. But it is the trajectory of your new identity: you are becoming like Him.',
        },
        {
          kind: 'commentary',
          id: 'c-corruption-lust',
          html: 'The corruption in the world flows from lust—not merely sexual desire, but the whole condition of wanting, grasping, being driven by appetite instead of by the Spirit. It is a corruption of what you were meant to be. And you are promised escape. Not escape from the world, but escape from the orientation of lust. The power to say no. The power to want something else—to want Christ, to want holiness, to want transformation.',
        },
        {
          kind: 'christ',
          id: 'christ-divine-nature',
          title: 'Christ Connection — Partakers in Him',
          html: 'To be a partaker of divine nature is to be conformed to the image of Christ (cf. Romans 8:29). Jesus is "the brightness of [God&apos;s] glory, and the express image of his person" (Heb. 1:3). He is the unbroken image of the invisible God. And you are invited to become like Him—not by achieving it, but by being transformed into His likeness as you behold His glory (cf. 2 Corinthians 3:18). The promise is not that you become a god. The promise is that you become truly human—truly yourself—remade in the likeness of the God who made you.',
        },
        {
          kind: 'carry',
          html: 'You are not given a small set of instructions and left to manage. You are given all things. And you are promised that as you take hold of these promises—as you turn toward Christ, behold His glory, yield to His Spirit—you will be slowly, irreversibly transformed. The corruption of lust will lose its grip. You will want different things. You will become someone different. And that transformation is the design, the trajectory, the very meaning of being called to the knowledge of Christ.',
        },
        {
          kind: 'reflection',
          id: '2p1-divine-nature',
          prompt: 'Where are you sensing the Spirit calling you toward a transformation—a way you are being asked to become more like Christ? What is the lust or corruption you are being promised escape from?',
        },
      ],
    },

    /* ─── 2 Peter 1:5–7 — The Seven Virtues to Add ─────────────────────── */
    {
      ref: '2 Peter 1:5–7',
      title: 'The Ladder of Virtues',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(5, t('And beside this, giving all diligence, '), hg('add to your faith virtue', 'c-add-virtue'), t('; and to '), hg('virtue knowledge', 'c-virtue-knowledge'), t(';')),
            verse(6, t('And to knowledge '), hy('temperance', 'greek-enkrateia'), t('; and to temperance '), hg('patience', 'c-patience'), t('; and to patience '), hg('godliness', 'c-godliness'), t(';')),
            verse(7, t('And to godliness '), hg('brotherly kindness', 'greek-philadelphia'), t('; and to '), hy('brotherly kindness charity', 'greek-agape'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-add-virtue',
          html: 'Peter does not say "trust God and do nothing." He says "add." Giving all diligence—all speed, all effort, all vigilance—add virtue to your faith. Virtue is arete in Greek, the excellence that belongs to a thing when it is fully itself. A knife has arete when it cuts well. A runner has arete when she runs swiftly. What is your arete? What does it look like when you are most fully yourself, most fully alive, most fully realizing what you were made for?',
        },
        {
          kind: 'greek',
          id: 'greek-arete',
          title: 'Arete — &ldquo;Virtue&rdquo; or &ldquo;Excellence&rdquo;',
          script: 'ἀρετή',
          translit: '<strong>arete</strong> · excellence; virtue; the full realization of a thing&apos;s potential',
          description: 'In Greek thought, arete is what makes something excellent—the fulfillment of its telos, its purpose. For a human being, arete is the excellence of character that flows from becoming all you were made to be. For Peter, it is the first thing to add to faith: the actualization of your potential in Christ.',
        },
        {
          kind: 'commentary',
          id: 'c-virtue-knowledge',
          html: 'To virtue add knowledge. Not mere intellectual knowledge, but epignosis—deep, experiential knowing. To know Christ, to know what He has done, to understand the workings of His Spirit. This knowledge is not passive reception. It is the kind of knowledge you gain by paying attention, asking questions, reading Scripture, sitting in communion.',
        },
        {
          kind: 'greek',
          id: 'greek-enkrateia',
          title: 'Enkrateia — &ldquo;Temperance&rdquo; or &ldquo;Self-Control&rdquo;',
          script: 'ἐγκράτεια',
          translit: '<strong>enkrateia</strong> · self-control; mastery over oneself; the virtue of restraint',
          description: 'Enkrateia is the power to say no—to appetite, to impulse, to the clamoring voice of desire. It is not the absence of desire, but the presence of a stronger desire: the desire to follow Christ, to become like Him, to be mastered by His will instead of enslaved by your own.',
        },
        {
          kind: 'commentary',
          id: 'c-patience',
          html: 'Patience is hypomone—not passive endurance, but active perseverance under pressure. It is the quality that does not lose heart. The long view. The refusal to quit.',
        },
        {
          kind: 'commentary',
          id: 'c-godliness',
          html: 'Godliness is eusebeia—the quality of one who is rightly oriented toward God, who shows Him reverence and honor in daily conduct. Not just in prayer or worship, but in how you treat the person in front of you, how you spend your money, how you keep your word.',
        },
        {
          kind: 'greek',
          id: 'greek-philadelphia',
          title: 'Philadelphia — &ldquo;Brotherly Kindness&rdquo;',
          script: 'φιλαδελφία',
          translit: '<strong>philadelphia</strong> · love of the brethren; the love that binds a family together',
          description: 'Philadelphia is the love that flows among those who share a common identity. You and your brothers and sisters in Christ are family. Not by choice, but by birth—born again into God&apos;s household. Philadelphia is the warmth and loyalty that comes from knowing you belong together.',
        },
        {
          kind: 'greek',
          id: 'greek-agape',
          title: 'Agape — &ldquo;Charity&rdquo; or &ldquo;Divine Love&rdquo;',
          script: 'ἀγάπη',
          translit: '<strong>agape</strong> · unconditional love; the love that seeks the good of another regardless of return; God&apos;s love',
          description: 'Agape is the crown of the ladder. It is the love that goes beyond the family, beyond those who deserve it, beyond those who can repay you. It is the love God shows us. And in growth, it becomes the love we show the world.',
        },
        {
          kind: 'carry',
          html: 'Notice the order. Faith is the foundation. But faith alone is not enough. It must grow into virtue—the excellence of character. Knowledge deepens that. Temperance strengthens it. Patience gives it time to take root. Godliness orients it toward the Source. Brotherly kindness makes it warm and alive. And agape crowns it—the love that holds all the others together and radiates outward to a world that does not yet know Christ. This is not a law laid upon you. It is an invitation to become fully alive.',
        },
        {
          kind: 'reflection',
          id: '2p1-virtues',
          prompt: 'Look at the seven virtues. Which one is weakest in you right now? What would it look like to "add" that to what you already have?',
        },
        {
          kind: 'artwork',
          matchTitle: /ladder|virtue|excellence|growth|character|ascent/i,
          caption: '2 Peter 1:5–7 · The Ladder of Virtues',
        },
      ],
    },

    /* ─── 2 Peter 1:8–11 — Make Your Calling and Election Sure ───────────── */
    {
      ref: '2 Peter 1:8–11',
      title: 'Neither Barren Nor Unfruitful',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(8, t('For if these things be in you, and abound, they make you that ye shall '), hg('neither be barren nor unfruitful', 'c-fruitful'), t(' in the knowledge of our Lord Jesus Christ.')),
            verse(9, t('But he that lacketh these things is '), hy('blind', 'greek-typhlos'), t(', and '), hy('cannot see afar off', 'c-myopic'), t(', and hath forgotten that he was purged from his old sins.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fruitful',
          html: 'If these virtues abound in you, they produce fruit. Barrenness—being unproductive, empty, leaving nothing behind—is no longer your condition. You will be fruitful. Fruitful in what? In the knowledge of Christ. The more you grow in these virtues, the more deeply and fully you will know Jesus—not as information about Him, but as living, experiential union with Him.',
        },
        {
          kind: 'greek',
          id: 'greek-typhlos',
          title: 'Typhlos — &ldquo;Blind&rdquo;',
          script: 'τυφλός',
          translit: '<strong>typhlos</strong> · blind; unable to see; spiritually blind',
          description: 'The person who refuses to add these virtues to their faith is typhlos—blind. Not in the sense of being unable to see Scripture or hear teaching. But blind to its meaning, blind to the grace it contains, blind to the reality of Christ who stands at the center of it all.',
        },
        {
          kind: 'commentary',
          id: 'c-myopic',
          html: 'He cannot see "afar off." His vision is foreshortened. He lives in the immediate, the urgent, the appetitive. He cannot see the long trajectory of his own life, cannot see the horizon of eternity toward which his days are moving, cannot perceive Christ standing at the end of all things calling him forward.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(10, t('Wherefore the rather, brethren, '), hg('give diligence to make your calling and election sure', 'c-election-sure'), t(': for if ye do these things, ye shall '), hg('never fall', 'c-never-fall'), t(':')),
            verse(11, t('For so an '), hp('entrance shall be ministered unto you abundantly', 'christ-entrance'), t(' into the '), hy('everlasting kingdom', 'c-everlasting-kingdom'), t(' of our Lord and Saviour Jesus Christ.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-election-sure',
          html: 'To make your calling and election sure is not to achieve your own salvation—that is already given. It is to settle it in your own heart. To move from uncertainty to firm conviction. To live as though you believe that God has chosen you, that He has called you to this life, that it is all true. The way you do that is through the ladder of virtues. Each step is a confirmation.',
        },
        {
          kind: 'commentary',
          id: 'c-never-fall',
          html: 'If you do these things—if you tend to the growth of these virtues—you will never fall. Not "you might not fall," but "you shall never fall." A strong word. The person who is growing in virtue, who is adding to their faith, who is becoming like Christ, is secure. The ground beneath them does not give way.',
        },
        {
          kind: 'christ',
          id: 'christ-entrance',
          title: 'Christ Connection — Abundant Entrance Into His Kingdom',
          html: 'The entrance will be ministered abundantly. Not barely squeaking in, not arriving at the gate with barely a moment to spare, but an abundant welcome into the everlasting kingdom. This kingdom is not somewhere else, not purely future. It is the kingdom of our Lord and Saviour Jesus Christ—the reign of Christ, which has already begun and which will be consummated when He appears. And you will enter it not as a criminal, but as a child coming home.',
        },
        {
          kind: 'commentary',
          id: 'c-everlasting-kingdom',
          html: 'The kingdom is everlasting—aionios, belonging to eternity, never ending. You are not being invited into a temporary arrangement. You are being woven into the very fabric of God&apos;s eternal purpose. Your growth in virtue, your becoming like Christ, is not mere self-improvement. It is your transformation into someone fit for eternity, someone at home in the presence of God.',
        },
        {
          kind: 'carry',
          html: 'The choice you make today—to add virtue to faith, knowledge to virtue, to build character slowly and steadily—is not a small thing. It is not self-improvement for its own sake. It is the path to never falling. It is the doorway to abundant entrance into the kingdom. The virtues are not demands laid on you from outside. They are invitations to become fully alive, to be transformed into the image of Christ, and to be welcomed home.',
        },
        {
          kind: 'reflection',
          id: '2p1-election-sure',
          prompt: 'What would change if you lived today as if your calling and election were already sure? As if you were already secure in Christ?',
        },
      ],
    },

    /* ─── 2 Peter 1:12–15 — Put Off This Tabernacle ────────────────────── */
    {
      ref: '2 Peter 1:12–15',
      title: 'A Tabernacle About to Be Laid Down',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(12, t('Wherefore I will not be negligent to put you always in remembrance of these things, though ye know them, and be established in the truth which is with you.')),
            verse(13, t('Yea, I think it meet, as long as I am in this tabernacle, to stir you up by putting you in remembrance;')),
            verse(14, t('Knowing that shortly I must '), hg('put off this my tabernacle', 'c-put-off-tabernacle'), t(', even as our Lord Jesus Christ hath shewed me.')),
            verse(15, t('Moreover I will endeavour that ye may be able after my decease to have these things always in remembrance.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-put-off-tabernacle',
          html: 'Peter knows he is dying. Jesus has shown him—likely a reference to John 21:18–19, where Jesus predicted Peter&apos;s death. Peter speaks of his body not as a prison to be escaped, but as a "tabernacle"—a dwelling place, a tent that he will soon fold up and put away. The language is matter-of-fact, neither desperate nor triumphant. This is the end toward which a life points. But before he goes, he must write. He must stir up remembrance. He must leave a word.',
        },
        {
          kind: 'greek',
          id: 'greek-episkēnōō',
          title: 'Episkēnoō / Skēnōma — &ldquo;Tabernacle&rdquo; or &ldquo;Tent&rdquo;',
          script: 'σκήνωμα',
          translit: '<strong>skēnōma</strong> · a tent; a dwelling; a temporary habitation',
          description: 'The tabernacle in the wilderness was not a permanent structure. It was a tent, meant to be moved, carried from place to place. Peter uses this word for his own body—temporary, moveable, not his final home. It emphasizes that the body is not the ultimate reality. But it also honors the body as a place where God has dwelt, where the Spirit has worked, where he has served.',
        },
        {
          kind: 'carry',
          html: 'Peter is near death and he knows it. And yet he does not withdraw. He does not say, "Well, I&apos;m leaving soon, so someone else can handle this." He says, "While I am here, I will stir you up. I will make sure you remember. And I will write so that after I am gone, you will still have these things." This is the work of a life being lived faithfully to the end. You do not check out because your time is limited. You lean in. You make sure the word is passed on.',
        },
        {
          kind: 'reflection',
          id: '2p1-tabernacle',
          prompt: 'What would it look like to live the rest of your days as Peter did—knowing they are limited, but spending them in service to others and to the truth?',
        },
      ],
    },

    /* ─── 2 Peter 1:16–18 — Eyewitnesses of His Majesty ────────────────── */
    {
      ref: '2 Peter 1:16–18',
      title: 'We Were Eyewitnesses of His Majesty',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(16, t('For we have not followed '), hg('cunningly devised fables', 'c-fables'), t(', when we made known unto you the power and coming of our Lord Jesus Christ, but were '), hp('eyewitnesses of his majesty', 'christ-eyewitness'), t(':')),
            verse(17, t('For he received from God the Father honour and glory, when there came such a voice to him from the excellent glory, '), hg('This is my beloved Son, in whom I am well pleased', 'c-beloved-son'), t('. And this voice which came from heaven we heard, when we were with him in the holy mount:')),
            verse(18, t('And we have heard this voice which came from heaven when we were with him in the holy mount.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fables',
          html: 'Peter is answering a charge that will dog the early church for centuries: that Christianity is just another mythology, just another story invented to control people. No, Peter says. We did not follow cunningly devised fables. We saw. We heard. We were there. This is the foundation of apostolic authority. Not intellectual argument or theological speculation, but testimony. Eyewitness testimony.',
        },
        {
          kind: 'greek',
          id: 'greek-epoptai',
          title: 'Epoptai — &ldquo;Eyewitnesses&rdquo;',
          script: 'ἐποπταῖ',
          translit: '<strong>epoptai</strong> · eyewitnesses; those who have seen with their own eyes; those initiated into mysteries',
          description: 'The word carries a double sense. It means literally eyewitnesses—those who saw. But in Greek, an epoptes was someone initiated into mystery religions, who had been granted access to secrets not known to the general public. Peter uses both senses: we have seen with our eyes, and we have been granted access to the deepest mysteries of God.',
        },
        {
          kind: 'commentary',
          id: 'c-beloved-son',
          html: 'The voice from heaven at the Transfiguration: "This is my beloved Son, in whom I am well pleased." This is the Father&apos;s direct utterance about Jesus. Not a metaphor. Not a suggestion. A declaration from the very throne of God. Peter heard it. James heard it. John heard it. And now, decades later, Peter writes it down so that we might know: the Father Himself authenticated the Son. The power and the coming of Christ are not wishful thinking. They are declared by the Most High.',
        },
        {
          kind: 'christ',
          id: 'christ-eyewitness',
          title: 'Christ Connection — The Glory Beheld',
          html: 'On the mount of Transfiguration, Peter and James and John saw Jesus transformed. His face shone like the sun. His clothes became white as light. Moses and Elijah appeared and spoke with Him. And the Father spoke from heaven: "This is my beloved Son" (Matthew 17:5). For Peter, this moment becomes the hinge on which everything turns. It is proof that Jesus is not merely a wise teacher or a moral exemplar. He is the Son of God, bearing the glory of God, authorized by God. And when Peter writes about "the power and coming of our Lord Jesus Christ," he is grounding it in that moment. The resurrection is not an invention. It is the continuation of a glory the disciples had already glimpsed.',
        },
        {
          kind: 'carry',
          html: 'The foundation of Christian faith is not a system or an ideology. It is testimony. Peter stands before you and says: I was there. I heard the Father&apos;s voice. I saw the glory. And because I saw, I am willing to die. Your faith does not rest on your own experience alone—you have not stood on the mount. But it rests on the testimony of those who were there, whose lives confirm what they witnessed. They were not liars. They had nothing to gain and everything to lose. They told the truth.',
        },
        {
          kind: 'reflection',
          id: '2p1-eyewitness',
          prompt: 'Who in your life has witnessed Jesus to you? Whose testimony has made the gospel real? And who are you witnessing to?',
        },
        {
          kind: 'artwork',
          matchTitle: /transfiguration|mount|glory|jesus|peter|james|john/i,
          caption: '2 Peter 1:16–18 · Eyewitnesses of His Majesty',
        },
      ],
    },

    /* ─── 2 Peter 1:19–21 — Day Star and Holy Prophets ────────────────── */
    {
      ref: '2 Peter 1:19–21',
      title: 'The More Sure Word of Prophecy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(19, t('We have also a more sure word of prophecy; whereunto ye do well that ye take heed, as unto a light that shineth in a dark place, until the '), hg('day dawn, and the day star arise in your hearts', 'c-daystar'), t(':')),
            verse(20, t('Knowing this first, that no prophecy of the scripture is of any private interpretation.')),
            verse(21, t('For the prophecy came not in old time by the will of man: but '), hp('holy men of God spake as they were moved by the Holy Ghost', 'christ-holy-ghost'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-daystar',
          html: 'The day star is the morning star—the last and brightest star visible before dawn breaks. Peter is saying: you have the eyewitness account of the Transfiguration. But you also have something else: the prophecies that pointed to Christ. They shine like a lamp in a dark place, giving you light to walk by, until the day actually dawns—until Christ appears in glory. Then the day star—Christ Himself—will arise in your hearts. You will know Him not through the written word, but face to face.',
        },
        {
          kind: 'greek',
          id: 'greek-phōsphoros',
          title: 'Phōsphoros — &ldquo;Day Star&rdquo; or &ldquo;Light-Bringer&rdquo;',
          script: 'φωσφόρος',
          translit: '<strong>phōsphoros</strong> · the morning star; the light-bearer; bringer of dawn',
          description: 'The phosphoros is the planet Venus, which appears in the morning sky and heralds the coming of the sun. It is not the sun itself, but it announces the sun. In Revelation 22:16, Jesus calls Himself "the bright and morning star." He is the phosphoros—the herald of the new day, the bringer of light.',
        },
        {
          kind: 'commentary',
          id: 'c-private-interpretation',
          html: 'Peter says no prophecy of Scripture is of any private interpretation. This does not mean you cannot read and interpret Scripture for yourself. Rather, it means that prophecy is not the product of one person&apos;s private opinion or invention. It is not a thing a prophet thought up on his own. It came from outside him.',
        },
        {
          kind: 'greek',
          id: 'greek-phero',
          title: 'Pherō — &ldquo;Moved&rdquo; or &ldquo;Borne Along&rdquo;',
          script: 'φέρω',
          translit: '<strong>pherō</strong> · to bear; to carry; to move; to be borne along',
          description: 'The prophets were borne along by the Holy Spirit. Like a ship carried by the wind and the current, they were moved by a power not their own. This does not make them puppets. They were fully themselves, speaking in their own voices, with their own personalities. But they were moved. Directed. Guided by the Spirit of God.',
        },
        {
          kind: 'christ',
          id: 'christ-holy-ghost',
          title: 'Christ Connection — The Spirit of Prophecy',
          html: 'The prophets spoke as they were moved by the Holy Ghost. What Holy Ghost? The Spirit of Christ. Revelation 19:10 tells us that "the testimony of Jesus is the spirit of prophecy." Every true prophecy—every word spoken by holy men of God—pointed toward Christ, witnessed to Christ, was borne along by the Spirit of Christ. When you read the Old Testament, you are reading the testimony of Christ, delivered by men who were moved by His Spirit. They may not have understood all they were saying. They may have struggled to understand the scope of what they were announcing. But their words are not their own. They are the word of Christ, delivered through their lips.',
        },
        {
          kind: 'carry',
          html: 'You hold in your hands a word of prophecy. The prophets spoke it, not from their own inventions but because the Holy Spirit moved them. Moses and David and Isaiah and Jeremiah and all the others—they were not geniuses inventing a religion. They were vessels, moved, carried, borne along by a power infinitely greater than themselves. And their words point to Christ. They are a lamp shining in a dark place, giving you light to walk by, until the day dawn when you see Him face to face. Take heed. Pay attention. This is not human opinion. This is the word of God.',
        },
        {
          kind: 'reflection',
          id: '2p1-prophecy',
          prompt: 'When you read Scripture, do you sense that you are reading words borne along by the Holy Spirit? Where have the prophets&apos; words shown you Christ?',
        },
        {
          kind: 'artwork',
          matchTitle: /prophet|prophesy|spirit|dawn|light|star|moses|isaiah/i,
          caption: '2 Peter 1:19–21 · The More Sure Word of Prophecy',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Peter 1',
    quote:
      'Simon Peter calls the scattered church to grow in the virtues—faith, virtue, knowledge, temperance, patience, godliness, brotherly kindness, and charity. As these abound in you, you become partakers of the divine nature, transformed from glory to glory into the image of Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Peter 1 · Study Guide',
  },
};
