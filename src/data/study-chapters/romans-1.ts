import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Romans 1 — Paul&apos;s announcement of the gospel
 *
 * Paul opens his most carefully constructed letter with an announcement:
 * the gospel of God, promised through the prophets, is now revealed. Its
 * content is Christ—declared Son of God with power through His resurrection.
 * But before Paul offers salvation, he first exposes humanity&apos;s condition:
 * how we have seen God in creation, refused to honor Him, and spiraled into
 * corruption. The wrath revealed is not arbitrary. It is the consequence of
 * choosing the creature over the Creator.
 */
export const ROMANS_1: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 1,

  intros: [
    'Romans is Paul&apos;s most carefully built letter. He writes to a church he has never met, in the capital of the empire, with a single goal: to show how God&apos;s righteousness comes through faith in Christ, not through the works of the law. He begins by announcing the gospel—not as a new invention, but as the fulfillment of everything the prophets promised.',
    'Yet Paul knows that before anyone can understand grace, they must see the condition they are saved from. Romans 1 is his diagnosis of humanity as it stands without Christ. He shows us how men and women everywhere have enough light—God visible in creation—to turn toward Him. But instead they have turned away, suppressing the truth, replacing God with idols, and spiraling into darkness. The wrath revealed in Romans 1 is not arbitrary punishment. It is the inevitable consequence of refusing the only One worth honoring.',
    'This chapter is the foundation for everything Paul will say next. It sets up the universal need. Jew and Gentile alike stand guilty before God. And it is to this guilty world that Christ comes, not as a threat, but as the power of God unto salvation.',
  ],

  sections: [
    /* ─── Romans 1:1–3 — Paul a Servant ──────────────────────────────── */
    {
      ref: 'Romans 1:1–3',
      title: 'Paul a Servant of Jesus Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(1, hy('Paul, a servant', 'rom1-doulos'), t(' of Jesus Christ, called to be an apostle, '), hy('separated unto', 'rom1-aphorizō'), t(' the gospel of God,')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-servant-intro',
          html:
            'Notice the order: Paul does not announce himself as "Paul the Apostle" or "Paul the one with authority." He announces himself as a &ldquo;servant&rdquo;—a <em>doulos</em>, one bound in complete dependence to another. Only then, having placed himself in that posture of submission, does he name his calling. Authority in the gospel is never self-claimed. It flows out of surrender.',
        },
        {
          kind: 'greek',
          id: 'rom1-doulos',
          title: 'Doulos — Servant/Slave',
          script: 'δοῦλος',
          translit: '<strong>doulos</strong> · servant; one bound to serve another; slave',
          description:
            'Doulos is not hired help or a day laborer. A doulos belongs entirely to another person. By calling himself Christ&apos;s servant, Paul stakes his entire identity on Jesus. His will, his time, his reputation—all of it belongs to his Master.',
        },
        {
          kind: 'greek',
          id: 'rom1-aphorizō',
          title: 'Aphorizō — Set Apart',
          script: 'ἀφορίζω',
          translit: '<strong>aphorizō</strong> · set apart; separated; consecrated',
          description:
            'Paul was not conscripted into service by accident. He was separated—set apart by God for a specific purpose. This is a deliberate calling, rooted in eternity.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(2, t('Which he had promised afore by his prophets in the holy scriptures,')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-promised',
          html:
            'The gospel is not a last-minute rescue plan or a new invention. God promised it long ago through the voices of the prophets. It stands on the shoulders of every promise made since the beginning—to Abraham, to David, to Israel. When Paul preaches Christ, he is not introducing something foreign. He is announcing the fulfillment of everything Scripture has been pointing toward.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(3, t('Concerning his Son Jesus Christ our Lord, which was made of the seed of David according to the flesh;')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-seed-david',
          html:
            'The gospel&apos;s substance is Christ. And Christ is identified as the Son of David—inheritor of a royal line that goes back to God&apos;s covenant with Israel. Jesus is not a phantom or a purely spiritual figure. He was "made of the seed of David." He entered history, bore a body, carried flesh and blood. The promised King has arrived.',
        },

        {
          kind: 'carry',
          html:
            'Paul introduces himself as a servant before he claims any authority. In a world that teaches you to build your brand and announce your credentials, Paul&apos;s posture is inverted: the more dependent on Christ you become, the more authentic your witness. What would change in your day if you moved through it as Christ&apos;s servant first, and everything else—your job, your relationships, your goals—as a flowing-out of that?',
        },

        {
          kind: 'reflection',
          id: 'rom1-servant',
          prompt: 'What does it mean to you to be a "servant of Jesus Christ"? Where are you still building your own platform instead of serving His?',
        },
      ],
    },

    /* ─── Romans 1:4–5 — Declared with Power ──────────────────────────── */
    {
      ref: 'Romans 1:4–5',
      title: 'Made of the Seed of David, Declared with Power',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(4, t('And declared to be the Son of God with power, according to the spirit of holiness, '), hy('by the resurrection from the dead:', 'rom1-apokalyptetai')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-declared-power',
          html:
            'The resurrection is not a sequel to the cross. It is the vindication of everything Jesus claimed. Before the resurrection, He walked among men as the God-man—divine nature cloaked in mortal flesh. At the resurrection, His divine identity is declared openly, with unmistakable authority. The grave could not hold Him. Death could not contain Him. In rising, He is revealed as who He has always been: the Son of God, eternal and unshakeable.',
        },
        {
          kind: 'greek',
          id: 'rom1-apokalyptetai',
          title: 'Apokalyptetai — Revealed/Declared',
          script: 'ἀποκαλύπτεται',
          translit: '<strong>apokalyptetai</strong> · is being revealed; disclosed; uncovered',
          description:
            'The resurrection is not an upgrade or a promotion. It is an unveiling. Christ&apos;s divine nature was always there. The resurrection simply removes the veil and shows us who we have been looking at all along.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(5, t('By whom we have received grace and apostleship, for '), hg('obedience to the faith', 'rom1-faith-obedience'), t(' among all nations, for his name:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-faith-obedience',
          html:
            'Paul has received his apostolic calling from Christ risen. His mission is "obedience to the faith among all nations." This is not the faith <em>of</em> Christ alone, but obedience <em>to</em> the gospel, a willingness to let Christ&apos;s claims reshape your entire life. And this obedience is meant to spread—from the Jews to the Gentiles, to Rome, to the ends of the earth.',
        },

        {
          kind: 'christ',
          id: 'rom1-christ-power',
          title: 'Christ Connection — Power Revealed in Weakness',
          html:
            'The cross looked like defeat. The grave looked like the end. But the resurrection declares that the power of God works precisely through what the world sees as weakness. Paul says this gospel is "the power of God unto salvation" (verse 16). Not the power of Rome&apos;s legions or the world&apos;s wisdom, but the power of a crucified Man who rose from the dead. This is the paradox Paul will spend the rest of Romans unpacking: strength in weakness, victory in surrender, life in death.',
        },

        {
          kind: 'carry',
          html:
            'The resurrection proves that Christ is who He claims to be. That same resurrection power is available to you. Not the power to conquer your enemies or climb the ladder, but the power to die to yourself and rise into a wholly new life. Where in your day could you trade your grip on control for the power that raised Jesus from the dead?',
        },

        {
          kind: 'reflection',
          id: 'rom1-resurrection-power',
          prompt: 'If the resurrection of Christ is real, what does that mean about the things you&apos;re afraid of? About the limitations you think are permanent?',
        },
      ],
    },

    /* ─── Romans 1:15–17 — I Am Not Ashamed ──────────────────────────── */
    {
      ref: 'Romans 1:15–17',
      title: 'Not Ashamed of the Gospel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(15, t('So, as much as in me is, I am ready to preach the gospel to you that are at Rome also.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-ready',
          html:
            'Rome. The center of power. The city that ruled the known world. Paul, a Jew, shipwrecked and imprisoned, writes to believers in the greatest empire—not to bow before it, but to proclaim the gospel in its very heart. He is ready. Not timid. Not waiting for permission. Ready to announce that Christ, not Caesar, is Lord.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(16, t('For '), hp('I am not ashamed of the gospel of Christ', 'rom1-christ-power'), t(': for it is the '), hy('power of God unto salvation', 'rom1-euangelion'), t(' to every one that believeth; to the Jew first, and also to the Greek.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-not-ashamed',
          html:
            'In Rome, what could be more absurd than a crucified criminal? The Romans crucified slaves and rebels—the lowest of the low. To Paul&apos;s Greek and Roman audience, a gospel centered on a crucified Jew would have seemed madness. Yet Paul declares: I am <em>not ashamed.</em> This is the power of God. Power not of legions or rhetoric, but of transformation through faith in a risen Christ.',
        },
        {
          kind: 'greek',
          id: 'rom1-euangelion',
          title: 'Euangelion — Gospel / Good News',
          script: 'εὐαγγέλιον',
          translit: '<strong>euangelion</strong> · good news; gospel; glad tidings',
          description:
            'In Greek, euangelion was originally the announcement of victory—the news a messenger brought back from a battle. In Paul&apos;s hands, it is the announcement of God&apos;s ultimate victory: that through Christ&apos;s death and resurrection, God has defeated sin and opened the way to eternal life.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(17, t('For therein is the righteousness of God revealed from faith to faith: as it is written, '), hg('The just shall live by faith', 'rom1-faith-habakkuk'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-faith-habakkuk',
          html:
            'Paul quotes the prophet Habakkuk: "The just shall live by faith." This is the hinge on which the entire letter turns. God&apos;s righteousness—His justice, His right-ness—is revealed not through law-keeping but through faith. A person stands just before God, not because they have performed enough good works, but because they have believed the gospel. Faith receives what God has already accomplished through Christ.',
        },

        {
          kind: 'christ',
          id: 'rom1-christ-faith-life',
          title: 'Christ Connection — The Just Live by Faith',
          html:
            'Habakkuk asked the question in his time: how long will the wicked go unpunished while the righteous suffer? God&apos;s answer: "The just shall live by faith." That faith, in Habakkuk&apos;s day, was trust in the God who would one day bring justice. In Paul&apos;s day—and in ours—that faith has a name and a face: Jesus Christ, crucified and risen. He is the vindication Habakkuk looked for. The just live by faith in Him.',
        },

        {
          kind: 'carry',
          html:
            'Paul is not ashamed. In a culture that rewards the visible, the powerful, and the successful, you live in a gospel that seems weak to outsiders. Your faith in a Man who died two thousand years ago, your trust in resurrection, your hope in a kingdom not of this world—to the world it is foolishness. Yet Paul calls you to the same unashamed stance: this gospel, though it seems foolish to the wise, <em>is</em> the power of God unto salvation. Where are you tempted to be ashamed?',
        },

        {
          kind: 'reflection',
          id: 'rom1-ashamed',
          prompt: 'Where in your life are you tempted to soften or hide the gospel because it seems weak or foolish to others? What would it mean to not be ashamed?',
        },

        {
          kind: 'artwork',
          matchTitle: /paul|gospel|cross/i,
          caption: 'Romans 1:15–17 · Not Ashamed',
        },
      ],
    },

    /* ─── Romans 1:18–20 — Wrath Revealed, Truth Manifest ────────────── */
    {
      ref: 'Romans 1:18–20',
      title: 'Wrath Revealed Against Unrighteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(18, t('For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who '), hy('hold the truth in unrighteousness', 'rom1-asebeia-adikia'), t(';')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-wrath-intro',
          html:
            'Paul shifts tone. The gospel is good news—but only for those who receive it. For those who reject it, who refuse the light, God&apos;s wrath is revealed. This is not arbitrary punishment. Wrath is God&apos;s settled opposition to all that defaces and destroys His creation. It is targeted at ungodliness—irreverence toward God—and unrighteousness—the violation of justice toward the neighbor. And this wrath is not future or hidden. It is revealed <em>now</em>, worked out in the consequences sin brings upon itself.',
        },
        {
          kind: 'greek',
          id: 'rom1-asebeia-adikia',
          title: 'Asebeia and Adikia — Ungodliness and Unrighteousness',
          script: 'ἀσέβεια · ἀδικία',
          translit: '<strong>asebeia</strong> · impiety toward God; <strong>adikia</strong> · injustice; violation of right',
          description:
            'Sin is not a single mistake. It has two vectors: vertical (against God) and horizontal (against neighbor). Ungodliness is the refusal to give God His due. Unrighteousness is the violation of justice toward others. Both flow from the same root: the refusal to see clearly.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(19, t('Because that which may be known of God is manifest in them; for God hath shewed it unto them.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-manifest-creation',
          html:
            'Paul insists on something radical: all people everywhere have enough light to turn toward God. "That which may be known of God is manifest." It has been shown. God has revealed Himself. Not through Scripture yet, not through prophets in every land, but through the most universal language of all: creation itself.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(20, t('For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-creation-invisible',
          html:
            'Look at the world. The heavens declare His glory. The order of nature speaks of His wisdom. The vastness of creation testifies to His power. The way life reproduces itself, the way seasons turn, the way growth and decay are balanced—all of it says something about the One who made it. These invisible things—His eternal power and divine nature—are clearly visible in what He has made. No one can claim ignorance. The light has been given. All people everywhere have enough.',
        },

        {
          kind: 'carry',
          html:
            'Paul says men are "without excuse." You do not need a Bible to know that you are dependent. You do not need a pastor to see that the world is made by something greater than yourself. You do not need theological training to sense that you are answerable. The question is not whether you have light. The question is what you do with the light you have been given.',
        },

        {
          kind: 'reflection',
          id: 'rom1-manifest',
          prompt: 'Where do you see the invisible things of God—His eternal power and divine nature—made visible in creation around you? And where have you suppressed that knowledge?',
        },
      ],
    },

    /* ─── Romans 1:21–23 — Vain Imaginations ──────────────────────────── */
    {
      ref: 'Romans 1:21–23',
      title: 'They Glorified Him Not, But Became Vain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(21, t('Because when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-knew-not-glorified',
          html:
            'Here is the tragedy: they <em>knew</em> God. They had light enough. But knowing is not the same as honoring. They saw the truth and chose to suppress it. Instead of glorifying God, they glorified themselves. Instead of gratitude—the acknowledgment of dependence—they felt entitled. Their imaginations became vain; they began to think of themselves as less dependent than they actually were. And as they stopped looking up to the Creator, their hearts grew darker.',
        },
        {
          kind: 'greek',
          id: 'rom1-asophos',
          title: 'Asophos — Foolish Heart',
          script: 'ἀσύνετος',
          translit: '<strong>asophos</strong> (related) · without understanding; foolish',
          description:
            'True wisdom, Paul implies, is first the acknowledgment of reality: God is God, you are not. Foolishness is the refusal of that reality, the insistence on thinking of yourself as more autonomous, more central, more permanent than you are.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(22, t('Professing themselves to be wise, they became fools;')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-wise-fools',
          html:
            'The moment we stop looking up to God, we start looking only at ourselves and one another—and everything in that inverted world looks distorted. The philosophies that replace God-knowledge may sound sophisticated. But they are foolishness. Without the Creator in view, all other knowledge is ultimately senseless.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(23, t('And changed the glory of the uncorruptible God into an image made like to corruptible man, and to birds, and fourfooted beasts, and creeping things.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-idolatry',
          html:
            'The descent into idolatry is not about wood and stone. It is about what you bow to. You replace the uncorruptible God—immortal, eternal, beyond decay—with images of corruptible things: human beings, animals, the created world. You take what God made and treat it as if it were God. You diminish yourself in the process. A person shaped by the infinite God becomes a person shaped by the finite.',
        },

        {
          kind: 'carry',
          html:
            'Paul is describing a spiral: stop honoring God → lose gratitude → become vain in imagination → your heart darkens → you create false gods. It begins with a choice not to look up. In your own day: where have you stopped looking up and started bowing to something that cannot ultimately save or satisfy? A career, an image, a relationship, a dream? The spiral downward begins with that first refusal to honor God as God.',
        },

        {
          kind: 'reflection',
          id: 'rom1-vain',
          prompt: 'When you "profess yourself to be wise," what are you relying on instead of God? What would it mean to let go of that wisdom and become foolish before Him?',
        },

        {
          kind: 'artwork',
          matchTitle: /idolatry|false/i,
          caption: 'Romans 1:21–23 · Vain Imaginations',
        },
      ],
    },

    /* ─── Romans 1:24 — First Handover ──────────────────────────────── */
    {
      ref: 'Romans 1:24',
      title: 'God Gave Them Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(24, t('Wherefore God also '), hg('gave them up', 'rom1-gave-up-1'), t(' to uncleanness through the lusts of their own hearts, to dishonour their own bodies between themselves:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-gave-up-1',
          html:
            'This is the first of three times Paul uses this terrible phrase: "God gave them up." This is not a punishment imposed from outside. This is what happens when you refuse to honor God: He honors your choice. He lets you go. He gives you over to the consequences your own choices produce. You wanted to be your own god; now you are left alone with a creature who cannot save or satisfy.',
        },
        {
          kind: 'greek',
          id: 'rom1-paredoken',
          title: 'Paredōken — Gave Up / Handed Over',
          script: 'παρέδωκεν',
          translit: '<strong>paredōken</strong> · gave up; handed over; delivered',
          description:
            'The word conveys a handing-over, a release. God does not remain hands-on in the life of one who refuses Him. He steps back and allows the natural consequences of rebellion to unfold. This is judgment, but a judgment that flows from the person&apos;s own choice.',
        },

        {
          kind: 'carry',
          html:
            'There is a mercy in being given over to your own choices. It is the moment when you must finally see what you are actually bowing to. When the thing you hoped would save you reveals that it cannot. When the person you made central to your life shows their own fragility. That disillusionment, painful as it is, is where repentance becomes possible.',
        },

        {
          kind: 'reflection',
          id: 'rom1-handover-1',
          prompt: 'What has God allowed you to experience the consequences of—so that you could finally see what you were actually pursuing?',
        },
      ],
    },

    /* ─── Romans 1:25–26 — The Darkness Deepens ──────────────────────── */
    {
      ref: 'Romans 1:25–26',
      title: 'The Darkness Deepens: Second Handover',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(25, t('Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever. Amen. For this cause God '), hg('gave them up', 'rom1-gave-up-2'), t(' unto vile affections: for even their women did change the natural use into that which is against nature:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-gave-up-2',
          html:
            'The second handover. They worshipped and served the creature more than the Creator, and God honored that choice by giving them over to "vile affections." The descent is real and observable. Without God, you are left only with yourself and others like you, all seeking satisfaction in things that cannot ultimately satisfy.',
        },
        {
          kind: 'commentary',
          id: 'rom1-creature-creator',
          html:
            'Paul makes the fundamental distinction: Creator and creature. When you worship the creature instead of the Creator—when you bow to the human, the physical, the visible, the temporary—you are living a lie. You are mistaking the shadow for the substance. And as that pattern hardens, you are given over to "vile affections." The descent is real. Without God, you are left only with yourself and others like you, all seeking satisfaction in things that cannot ultimately satisfy.',
        },

        {
          kind: 'carry',
          html:
            'Paul is describing what happens when a whole society chooses creature-worship over Creator-worship. It is not abstract theology. It is what unfolds in human flesh: the loss of proper sexuality, the twisting of desire, the dimming of conscience. This is what the world looks like when it is given over to itself. The diagnosis is urgent precisely because the cure is Christ.',
        },

        {
          kind: 'reflection',
          id: 'rom1-handover-2',
          prompt: 'In what ways have you caught yourself worshipping "the creature more than the Creator"? What would it take to turn that around?',
        },
      ],
    },

    /* ─── Romans 1:28 — Third Handover & Catalogue ──────────────────── */
    {
      ref: 'Romans 1:28–32',
      title: 'Third Handover: The Catalogue of Sin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(28, t('And even as they did not like to retain God in their knowledge, God '), hg('gave them over', 'rom1-gave-up-3'), t(' to a reprobate mind, to do those things which are not convenient;')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-gave-up-3',
          html:
            'The third handover. They did not "like to retain God in their knowledge"—they made a deliberate choice to forget, to set Him aside. So God gave them over to a "reprobate mind," a mind no longer capable of knowing right from wrong. It is not that conscience disappears. It is that it is so darkened it can no longer function.',
        },
        {
          kind: 'commentary',
          id: 'rom1-gave-up-3',
          html:
            'The third handover. They did not "like to retain God in their knowledge"—they made a choice to forget, to set Him aside, to live as though He did not matter. So God gave them over to a "reprobate mind," a mind no longer capable of knowing right from wrong, beauty from ugliness, truth from falsehood. It is not that conscience disappears. It is that it is so darkened it can no longer function.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(29, t('Being filled with all unrighteousness, fornication, wickedness, covetousness, maliciousness; full of envy, murder, debate, deceit, malignity; whisperers,')),
            verse(30, t('Backbiters, haters of God, despiteful, proud, boasters, inventors of evil things, disobedient to parents,')),
            verse(31, t('Without understanding, covenantbreakers, without natural affection, implacable, unmerciful:')),
            verse(32, t('Who knowing the judgment of God, that they which commit such things are worthy of death, not only do the same, but have pleasure in them that do them.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom1-catalogue',
          html:
            'Paul lists it all. Not to shame but to diagnose. When you are left without God, when you have refused the light, this is what spills out: malice toward God and neighbor, the broken bonds, the loveless heart, the hardened conscience. The tragedy is the last line: they know the judgment. Deep down, conscience still whispers. But they have hardened themselves so completely that they rejoice in the very things that are destroying them.',
        },

        {
          kind: 'carry',
          html:
            'This catalogue is Paul&apos;s description of a world given over to itself—and it is horrifyingly contemporary. Yet Paul is not listing sins to condemn you. He is describing a condition that is answerable to Christ. The good news is that you do not have to remain in this darkness. Christ is the power that can break the spiral and begin the reversal.',
        },

        {
          kind: 'reflection',
          id: 'rom1-catalogue',
          prompt: 'Where do you see this catalogue playing out in your own culture? And where are you tempted to "have pleasure in them that do them"—to call evil good?',
        },

        {
          kind: 'artwork',
          matchTitle: /judgment|sin|death/i,
          caption: 'Romans 1:28–32 · The Catalogue',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth. The just shall live by faith.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 1 · Study Guide',
  },

  hasHebrew: false,
};
