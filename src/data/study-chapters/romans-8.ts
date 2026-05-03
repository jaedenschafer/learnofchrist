import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Romans 8 — No Condemnation, Led by the Spirit
 *
 * "There is therefore now no condemnation to them which are in Christ Jesus."
 * The Spirit sets the believer free. Suffering leads to glory. Nothing separates
 * the redeemed from God&apos;s love. The chapter opens on pardon and closes on
 * unbreakable belonging.
 */
export const ROMANS_8: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 8,

  estimatedMinutes: { beginner: 9, intermediate: 19, deep: 25 },
  intros: [
    'Romans 7 ends in despair: "O wretched man that I am! who shall deliver me from the body of this death?" Romans 8 opens with the answer: "There is therefore now no condemnation to them which are in Christ Jesus." Paul does not pretend the struggle has ceased. The flesh still wars against the Spirit. But the verdict has changed. Christ has absorbed the condemnation that was rightfully yours.',
    'What follows is the hymn of the redeemed. The Spirit leads. Suffering becomes co-heir status. The whole creation groans, waiting for redemption. Even when you cannot pray, the Spirit prays for you. All things—even the worst things—are working toward good for those who love God. And at the end, Paul stands on a cliff and shouts into the void: "Nothing can separate you from the love of God, which is in Christ Jesus our Lord."',
    'This is the chapter of the believer&apos;s unshakeable security and unbreakable identity.',
  ],

  sections: [
    /* ─── Romans 8:1–4 — No Condemnation in Christ ────────────────────────── */
    {
      ref: 'Romans 8:1–4',
      title: 'No Condemnation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(1,
              hp('There is therefore now no condemnation', 'rom8-no-condemnation'),
              t(' to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-no-condemnation',
          html:
            'This is not metaphor or aspiration. It is a legal pronouncement. The Greek word <em>katakrima</em> means the judicial sentence—the "guilty" verdict handed down by a court. For those in Christ, that verdict has been set aside. The condemnation you deserved has been placed on another. You are declared not guilty.',
        },
        {
          kind: 'greek',
          id: 'rom8-katakrima',
          title: 'Katakrima — Condemnation',
          script: 'κατάκριμα',
          translit: '<strong>katakrima</strong> · judicial sentence; verdict; condemnation',
          description:
            'Not guilt—the state of having sinned—but <em>katakrima</em>, the sentence. The judgment. The legal pronouncement of guilt. For those in Christ, this sentence is lifted. Judgment has passed. You are acquitted.',
        },
        {
          kind: 'christ',
          id: 'rom8-christ-condemnation',
          title: 'Christ Connection — The Judge Becomes the Condemned',
          html:
            'Who removed the condemnation? Christ did. "God sent not his Son into the world to condemn the world; but that the world through him might be saved" (John 3:17). Yet Christ accepted your condemnation. He became <em>anathema</em> for you (Gal. 3:13). He bore the verdict you deserved. This is what makes verse 1 true.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(2,
              t('For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-spirit-law',
          html:
            'Two laws are in play here. The law of sin and death—the law of cause and effect, that sin brings death—is real and unrelenting. But it has been overruled by a higher law, <em>the law of the Spirit of life.</em> This is not a negotiation between equal forces. The Spirit is stronger. Life is stronger than death. In Christ, you are under the jurisdiction of the law that wins.',
        },
        {
          kind: 'carry',
          html:
            'If you have placed your life in Christ, you are not under the reign of condemnation anymore. That is not earned. It is already true. Guilt may whisper at you—old habits, old voice. But the verdict belongs to God, not to your accuser. When shame speaks, remember where you stand: in Christ, where condemnation cannot reach.',
        },
        {
          kind: 'reflection',
          id: 'rom8-condemnation-reflect',
          prompt: 'What condemnation—past, present, or feared—do you most need to release because of verse 1?',
        },
      ],
    },

    /* ─── Romans 8:5–8 — Mind of the Flesh vs. Mind of the Spirit ────────── */
    {
      ref: 'Romans 8:5–8',
      title: 'Two Minds, Two Deaths',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(5,
              t('For they that are after the flesh do mind the things of the flesh; but they that are after the Spirit '),
              hg('the things of the Spirit', 'rom8-mind-spirit'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-mind-spirit',
          html:
            'Paul uses the verb <em>phronēo</em>—to be minded, to set one&apos;s will, to orient one&apos;s entire being toward something. It is not about isolated thoughts. It is about the direction your life faces. What are you running toward? What do you want most? That desire shapes everything.',
        },
        {
          kind: 'greek',
          id: 'rom8-phronema',
          title: 'Phronēma — Mindset',
          script: 'φρόνημα',
          translit: '<strong>phronēma</strong> · mindset; what the mind is set upon; orientation',
          description:
            'More than thought; it is the inclination of the whole self. To have a fleshly phronēma is to have your face turned toward desire, comfort, self. To have a Spirit-phronēma is to have your face turned toward God. One leads to death; the other to life.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(6,
              t('For to be '),
              hy('carnally minded is death', 'rom8-minded-death'),
              t('; but to be spiritually minded is life and peace.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-minded-death',
          html:
            'Paul is blunt. Pursuing the flesh—whatever feeds the desire for comfort, status, control, pleasure—is a path toward death. Not because God punishes it, but because it is the nature of flesh to die. The Spirit gives life. The flesh gives death. It is the physics of the soul.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(7,
              t('Because the carnal mind is '),
              hg('enmity against God', 'rom8-enmity'),
              t(': for it is not subject to the law of God, neither indeed can be.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-enmity',
          html:
            'The carnal mind is not neutral. It is actively set against God. Why? Because God asks for surrender, and the carnal mind demands control. God asks for trust, and the carnal mind demands certainty. God asks for sacrifice, and the carnal mind demands comfort. These two cannot be reconciled.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(8,
              t('So then they that are in the flesh cannot please God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-cannot-please',
          html:
            'This does not describe the struggle of a believer. It describes someone whose entire orientation is toward the flesh. If the flesh is your entire world—your law, your court, your goal—then you cannot please the God whose nature is Spirit. It is not rebellion Paul describes here. It is impossibility. You cannot run two directions at once.',
        },
        {
          kind: 'carry',
          html:
            'What do you want most? Not secretly, but if you trace your time, your money, your energy—where are they going? That is where your phronēma faces. If it faces the flesh, even good flesh (health, rest, family), as your ultimate goal, you will find yourself increasingly empty. Reorient. Face the Spirit. Life follows.',
        },
        {
          kind: 'reflection',
          id: 'rom8-mindset-reflect',
          prompt: 'Where is your phronēma—your fundamental orientation—turned right now? Toward comfort, control, and the flesh? Or toward God, trust, and the Spirit? What would change if you turned it?',
        },
      ],
    },

    /* ─── Romans 8:9–11 — Indwelt by the Spirit ──────────────────────────── */
    {
      ref: 'Romans 8:9–11',
      title: 'The Spirit Dwelling in You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(9,
              t('But ye are not in the flesh, but in the Spirit, if so be that the '),
              hp('Spirit of God dwell in you', 'rom8-christ-spirit'),
              t('. Now if any man have not the Spirit of Christ, he is none of his.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-spirit-dwell',
          html:
            'Notice the shift. In verse 8, Paul speaks of those whose orientation is entirely fleshly. But if you are in Christ, the Spirit actually lives in you. This is not symbolic. The Spirit of God—the same power that raised Christ from the dead—is present in you, reshaping your will from inside. You are not left to reform yourself.',
        },
        {
          kind: 'christ',
          id: 'rom8-christ-spirit',
          title: 'Christ Connection — Christ Dwells by His Spirit',
          html:
            'Paul says "the Spirit of Christ" and "the Spirit of God" interchangeably (verses 9–10). This is radical. It means Christ is present through His Spirit. "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me" (Gal. 2:20). The risen Christ is not distant in heaven. He indwells you through the Spirit.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(10,
              t('And if Christ be in you, the body is dead because of sin; but the Spirit is life because of righteousness.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-body-dead',
          html:
            'The body will still die—that is guaranteed by sin, by the law of cause and effect. But the Spirit gives life that transcends that death. Your body ages, weakens, fails. But your spirit is alive—more alive than ever—because Christ is in you, and the Spirit is active within you.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(11,
              t('But if the Spirit of him that raised up Jesus from the dead dwell in you, he that raised up Christ from the dead shall also '),
              hg('quicken your mortal bodies', 'rom8-quicken'),
              t(' by his Spirit that dwelleth in you.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-quicken',
          html:
            'The same power that conquered death—that broke the tomb open—is at work in you right now. Not metaphorically. Physically. Your mortal body, which will die, will be raised. This is not hope. This is the promise of God. The Spirit inside you is the down payment on your resurrection.',
        },
        {
          kind: 'carry',
          html:
            'You are not left alone to fight the flesh with your own willpower. The Spirit of Christ is inside you. This changes your situation completely. When you struggle, remember: the Spirit that raised Christ is present right now. You are not the only power at work in your life. You are indwelt.',
        },
        {
          kind: 'reflection',
          id: 'rom8-indwelt-reflect',
          prompt: 'Does the presence of the Spirit of Christ dwelling in you change how you face your day? How does it change what is possible?',
        },
      ],
    },

    /* ─── Romans 8:12–17 — Led by the Spirit, Adopted as Heirs ──────────── */
    {
      ref: 'Romans 8:12–17',
      title: 'Sons and Daughters, Led and Adopted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(12,
              t('Therefore, brethren, we are debtors, not to the flesh, to live after the flesh.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-debtors',
          html:
            'Because the Spirit dwells in you, you are no longer in debt to the flesh. You owe it nothing. You do not have to obey it. The old obligation has expired.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(14,
              t('For as many as are '),
              hg('led by the Spirit of God', 'rom8-led-spirit'),
              t(', they are the sons of God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-led-spirit',
          html:
            'Led—not driven, not forced, but led, like a shepherd leading sheep. The Spirit does not coerce. He invites, guides, beckons. And those who follow that leading discover who they are: sons and daughters of God. Your true identity emerges through obedience to the Spirit, not through self-discovery.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(15,
              t('For ye have not received the spirit of bondage again to fear; but ye have received the '),
              hp('Spirit of adoption, whereby we cry, Abba, Father', 'rom8-adoption'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-adoption',
          html:
            'The old way—the law—was a spirit of servitude. You obeyed from terror. You tried to keep rules that would never be satisfied. But now the Spirit you have received is a spirit of <em>huiothesia</em>, adoption. You are chosen, loved, brought into a family not by birth but by will.',
        },
        {
          kind: 'greek',
          id: 'rom8-huiothesia',
          title: 'Huiothesia — Adoption',
          script: 'υἱοθεσία',
          translit: '<strong>huiothesia</strong> · adoption; legal placement as a son; full inheritance',
          description:
            'Adoption is a legal act. It means you are chosen and placed into a family with full rights of inheritance[res:cambridge-roman-adoption]. You are not a servant. You are a child. You cry "Abba"—the intimate Aramaic word Jesus Himself used (Mark 14:36)[res:sefaria-abba-aramaic]—because the barrier between you and the Father has been taken away.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(16,
              t('The Spirit itself beareth witness with our spirit, that we are the '),
              hg('children of God', 'rom8-children'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-children',
          html:
            'Your own spirit knows it. And the Holy Spirit confirms it. This is not based on feeling, though feeling may follow. This is the testimony of the Spirit Himself: you belong to God. You are His child.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(17,
              t('And if children, then '),
              hp('heirs; heirs of God, and joint-heirs with Christ', 'rom8-heirs'),
              t('; if so be that we suffer with him, that we may be also glorified together.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-heirs',
          html:
            'If you are a child of God, you are an heir. Not because you earned it, but because you are His. What Christ inherits, you inherit. His kingdom, His vindication, His resurrection. The condition is suffering with Him—not earning the inheritance through suffering, but walking the same path He walked, which includes suffering.',
        },
        {
          kind: 'christ',
          id: 'rom8-christ-joint-heirs',
          title: 'Christ Connection — You Inherit What Christ Inherits',
          html:
            'Because you are joined to Christ—adopted into His family—you are joint-heirs. His suffering, His glory, His eternal inheritance. Paul describes this same union in 2 Timothy 2:12: "If we suffer with him, we shall also reign with him." Your union with Christ is not metaphorical. It determines your future.',
        },
        {
          kind: 'carry',
          html:
            'You are not a servant anymore. You are a child. Abba, Father. This changes how you pray, how you obey, how you face each day. Obedience is no longer about appeasement. It is about intimacy. You do what your Father asks because you trust Him, because you know you are loved, because you are coming home.',
        },
        {
          kind: 'reflection',
          id: 'rom8-adoption-reflect',
          prompt: 'What would shift if you truly believed you are a child of God, adopted, beloved, with a claim on His inheritance?',
        },
      ],
    },

    /* ─── Romans 8:18–25 — Suffering, Glory, and the Groaning Creation ────── */
    {
      ref: 'Romans 8:18–25',
      title: 'Suffering Leads to Glory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(18,
              t('For I reckon that the '),
              hg('sufferings of this present time', 'rom8-sufferings'),
              t(' are not worthy to be compared with the glory which shall be revealed in us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-sufferings',
          html:
            'Paul does not minimize suffering. He names it. Suffering is real, costly, present. But it is not the final word. It is not even the weightiest word. Whatever you endure now is incomparably light compared to the glory that is coming. This is not denial. This is proportion.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(19,
              t('For the earnest expectation of the creature waiteth for the '),
              hg('manifestation of the sons of God', 'rom8-manifestation'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-manifestation',
          html:
            'All creation is waiting. Not idly, but with anticipation—<em>apokaradokia</em>, eager, stretched-out expectation. What are they waiting for? The revealing of the sons and daughters of God. Your glorification is not a private redemption. It is the event the whole cosmos has been groaning toward.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(20,
              t('For the creature was made subject to vanity, not willingly, but by reason of him who hath subjected it in hope;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-vanity',
          html:
            'The creation itself is broken. It ages, fails, decays. But it was subjected to this decay <em>in hope</em>—in hope that one day it too will be redeemed. The creation is not a machine winding down. It is a slave waiting for liberation.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(21,
              t('Because the creature itself also shall be delivered from the bondage of corruption into the glorious liberty of the children of God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-creature-delivered',
          html:
            'This is the promise: the creation itself will be redeemed. Not destroyed and replaced, but redeemed. Restored to what it was meant to be. When you are glorified, the whole cosmos celebrates its own liberation. Your salvation is the salvation of all things.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(22,
              t('For we know that the whole creation '),
              hg('groaneth and travaileth in pain together until now', 'rom8-groaneth'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-groaneth',
          html:
            'All creation groans—not in despair, but in labor. Like a woman in travail, creation is groaning toward something new. It is giving birth to the age to come. When you suffer, when you pray, when you persevere, you participate in bringing that new world into being.',
        },
        {
          kind: 'greek',
          id: 'rom8-stenazō',
          title: 'Stenazō — To Groan',
          script: 'στενάζω',
          translit: '<strong>stenazō</strong> · groan; sigh; cry out in pain',
          description:
            'The whole creation groans. Not in despair, but in labor[res:brill-creation-groaning]. Like a woman in childbirth, groaning toward something new. The creation is travailing, giving birth to the age to come. Your obedience and suffering participate in bringing that new world into being.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(23,
              t('And not only they, but ourselves also, which have the firstfruits of the Spirit, even we ourselves '),
              hg('groan within ourselves, waiting for the adoption', 'rom8-wait-adoption'),
              t(', to wit, the redemption of our body.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-wait-adoption',
          html:
            'You groan too—not from despair but from hope. You have the Spirit as a down payment, a foretaste. But the full inheritance is not yet. You wait for the <em>apolytrōsis</em>, the full redemption, the day your body is raised and glorified. Until then, you groan, longing for home.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(24,
              t('For we are saved by hope: but hope that is seen is not hope: for what a man seeth, why doth he yet hope for it?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-saved-by-hope',
          html:
            'You are saved by hope. Not saved from hope. Your salvation is incomplete without it. You wait. You trust. You believe the resurrection is coming even though you do not see it. This is not weakness. This is the structure of faith.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(25,
              t('But if we hope for that we see not, then do we with '),
              hg('patience wait for it', 'rom8-patience'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-patience',
          html:
            'You wait. With patience—<em>hupomone</em>, the patience that endures, that does not break under pressure but remains steadfast. You do not know when the end will come. But you wait with confidence, knowing the God who promised is faithful.',
        },
        {
          kind: 'carry',
          html:
            'Your suffering is not pointless. It is not even final. The whole creation waits for your glorification. When you endure hardship, you are giving birth—along with the creation itself—to the age to come. Hold on. The groaning will end. The redemption will come.',
        },
        {
          kind: 'reflection',
          id: 'rom8-suffering-reflect',
          prompt: 'What suffering are you carrying now? How would it change you to believe that creation itself is waiting for your glorification, and that your endurance participates in bringing the new world to birth?',
        },
      ],
    },

    /* ─── Romans 8:26–27 — The Spirit Intercedes for You ──────────────────── */
    {
      ref: 'Romans 8:26–27',
      title: 'The Spirit Prays When You Cannot',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(26,
              t('Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh '),
              hg('intercession for us with groanings which cannot be uttered', 'rom8-intercession'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-intercession',
          html:
            'You do not know how to pray sometimes. The pain is too deep, the confusion too thick, the need too nameless. So the Spirit prays for you. Not with words, but with groans—the same groans creation makes, the same groans you make. Those groanings themselves are prayer.',
        },
        {
          kind: 'greek',
          id: 'rom8-entugchanō',
          title: 'Entugchanō — To Intercede',
          script: 'ἐντυγχάνω',
          translit: '<strong>entugchanō</strong> · intercede; make intercession; plead on behalf of another',
          description:
            'The Spirit stands before God and intercedes for you. Not to change God&apos;s mind—God is already for you—but to bring your deepest longings before Him, even the ones you cannot articulate. You are represented before the throne.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(27,
              t('And he that searcheth the hearts knoweth what is the mind of the Spirit, because he maketh intercession for the saints according to the will of God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-searcheth-hearts',
          html:
            'God knows what the Spirit is asking for. The Spirit&apos;s intercession is always in line with God&apos;s will. So your deepest needs—even the inarticulate ones, the ones that come as groans—are known to God. They are heard. They matter.',
        },
        {
          kind: 'christ',
          id: 'rom8-christ-intercession',
          title: 'Christ Connection — Christ Also Intercedes',
          html:
            'The Spirit is not the only one interceding for you. Christ is at the right hand of God, also interceding (Rom. 8:34; Heb. 7:25). You are surrounded. Father, Son, and Spirit are all at work on your behalf. No prayer goes unheard.',
        },
        {
          kind: 'carry',
          html:
            'On the days you have no words, remember: the Spirit is praying for you. Your groanings, your tears, your inarticulate longing—these are prayer. You are not left without an advocate. You are not representing yourself alone before God. The Spirit is there.',
        },
        {
          kind: 'reflection',
          id: 'rom8-intercession-reflect',
          prompt: 'When have you felt too broken or confused to pray? How does it change you to know the Spirit is interceding for you with groanings that cannot be uttered?',
        },
      ],
    },

    /* ─── Romans 8:28–30 — All Things Work for Good; The Golden Chain ────── */
    {
      ref: 'Romans 8:28–30',
      title: 'All Things Work Together; Foreknown to Glorified',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(28,
              t('And we know that all things work together for good to them that love God, to them who are the '),
              hg('called according to his purpose', 'rom8-called'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-called',
          html:
            'This is not a promise that life will be easy. It is a promise that God is sovereign over all things. Even injustice, even loss, even the evil that others do—God uses it in service of the good for those who love Him. This is redemption working in real time.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(29,
              t('For whom he did '),
              hg('foreknow, he also did predestinate', 'rom8-foreknow'),
              t(' to be conformed to the image of his Son, that he might be the firstborn among many brethren.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-foreknow',
          html:
            'Here Paul speaks of <em>foreknowledge</em> and <em>predestination</em>—two words that have sparked centuries of theological debate. Different Christian traditions draw different conclusions about whether God&apos;s knowledge and will override human freedom. What Paul insists on here is simpler: your end is fixed. You will be conformed to Christ. You will be glorified. God knows this. God willed this. It will happen.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(30,
              t('Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also '),
              hg('glorified', 'rom8-glorified'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-glorified',
          html:
            'This is the golden chain: foreknown, predestined, called, justified, glorified. Each link is certain. You are not between steps, uncertain whether the next link will hold. Paul speaks of glorification in the past tense—so certain is it. In God&apos;s eyes, you are already glorified. This is your destiny.',
        },
        {
          kind: 'carry',
          html:
            'Your life is not random. Not because you are without choice, but because the God who knows all things has set your face toward glory. Whatever comes—difficulty, loss, confusion—is woven into a pattern you cannot yet see. Trust the weaver. You are destined for glory.',
        },
        {
          kind: 'reflection',
          id: 'rom8-predestine-reflect',
          prompt: 'What would it mean to live as if you were already glorified—loved by God, known by God, destined for Christ&apos;s image—starting right now?',
        },
      ],
    },

    /* ─── Romans 8:31–34 — If God Be For Us ────────────────────────────────── */
    {
      ref: 'Romans 8:31–34',
      title: 'If God Be For Us',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(31,
              hp('What shall we then say to these things? If God be for us, who can be against us?', 'rom8-for-us')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-for-us',
          html:
            'This is the hinge of the whole chapter. Everything else turns on this. God is not neutral. He is not indifferent. He is <em>for</em> you. Not for you secretly, hoping no one notices. He is publicly, actively, sovereignly on your side. If this is true—and Paul insists it is—then what enemy could possibly prevail?',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(32,
              t('He that spared not his own Son, but '),
              hp('delivered him up for us all', 'rom8-delivered'),
              t(', how shall he not with him also freely give us all things?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-delivered',
          html:
            'This is the proof. God did not spare His own Son. He gave Him up—to suffering, to death, to abandonment. How can there be any doubt that He is for you? If He was willing to sacrifice what He loves most, He will freely give you whatever you need.',
        },
        {
          kind: 'christ',
          id: 'rom8-christ-sacrifice',
          title: 'Christ Connection — The Father Surrendered His Son',
          html:
            'The Father "spared not his own Son." The Son cried "Father, all things are possible unto thee; take away this cup from me" (Mark 14:36). Yet the Father allowed the cup. This is the measure of how far the love of God goes. Christ drank the cup so you would never have to.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(33,
              t('Who shall lay any thing to the charge of God&apos;s '),
              hg('elect', 'rom8-elect'),
              t('? It is God that justifieth.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-elect',
          html:
            'Who will accuse you? The law will. Your past will. The Enemy will. Your own conscience will. But God is the judge, and God has already justified you. The verdict that matters has been rendered. All other voices are appeals against a judgment already final.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(34,
              t('Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh '),
              hg('intercession for us', 'rom8-makes-intercession'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-makes-intercession',
          html:
            'Christ does not condemn. He intercedes. He stands before God with the marks of His sacrifice and says, on your behalf, <em>This one is Mine.</em> He does not wait for you to clean yourself up. He does not require you to prove yourself worthy. He intercedes for you as you are.',
        },
        {
          kind: 'carry',
          html:
            'When accusation comes—and it will—remember: God is for you. Christ died for you. Christ now intercedes for you. The verdict is not pending. It is done. Rest in it.',
        },
        {
          kind: 'reflection',
          id: 'rom8-for-us-reflect',
          prompt: 'What accusation are you carrying that you need to release because Christ intercedes for you?',
        },
      ],
    },

    /* ─── Romans 8:35–39 — Nothing Shall Separate Us ────────────────────── */
    {
      ref: 'Romans 8:35–39',
      title: 'More Than Conquerors; Nothing Shall Separate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(35,
              hp('Who shall separate us from the love of Christ?', 'rom8-separate'),
              t(' shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-separate',
          html:
            'Paul names the real enemies. Not demons, not cosmic powers. Real suffering. Real loss. Real danger. And he asks the question as if the answer is obvious. Can tribulation separate you? Can hunger? Can the sword? His tone suggests the absurdity of thinking they can. No. The love of Christ cannot be broken by the worst this world can do.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(36,
              t('As it is written, For thy sake we are killed all the day long; we are accounted as sheep for the slaughter.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-sheep-slaughter',
          html:
            'Paul quotes Psalm 44:22[res:sefaria-psalm-44-hebrew]. He does not say suffering is absent from the Christian life. He says it is present, real, and expected. Yet he says this <em>within</em> the context of unshakeable confidence. You can be slaughtered and still not be separated from God&apos;s love. Love is deeper than circumstance.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(37,
              t('Nay, in all these things we are '),
              hp('more than conquerors through him that loved us', 'rom8-conquerors'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-conquerors',
          html:
            'A conqueror wins. But "more than a conqueror"—<em>hypernikāō</em> in Greek—means you win and emerge transformed, deepened, stronger in love. The suffering does not destroy you. It refines you. You come through the fire not diminished but enlarged.',
        },
        {
          kind: 'greek',
          id: 'rom8-hypernikao',
          title: 'Hypernikāō — More Than Conquer',
          script: 'ὑπερνικάω',
          translit: '<strong>hypernikāō</strong> · more than conquer; win overwhelmingly; be victorious with abundance',
          description:
            'This is not bare survival. This is triumph. You do not just endure hardship; you are transformed by it. The thing that was meant to destroy you becomes the means of your deepening. This is the alchemy of grace.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            verse(38,
              t('For I am persuaded, that neither '),
              hg('death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, nor height, nor depth', 'rom8-nothing'),
              t(', '),
            ),
            verse(39,
              t('nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom8-nothing',
          html:
            'Paul exhausts the categories. Death—the ultimate enemy—cannot separate you. Life cannot separate you. Invisible powers (angels, principalities, powers) cannot. Time cannot (things present or to come). Space cannot (height or depth). And—as if to make sure nothing is missed—"any other creature." Every being, every force, every circumstance is named. None of them can break the bond.',
        },
        {
          kind: 'christ',
          id: 'rom8-christ-love-final',
          title: 'Christ Connection — The Love That Nothing Can Break',
          html:
            'This love is "in Christ Jesus our Lord." Christ&apos;s love proved itself in His willingness to die. "Greater love hath no man than this, that a man lay down his life for his friends" (John 15:13). That love is eternal. It does not fade. It does not waver. It is the ground on which you stand.',
        },
        {
          kind: 'carry',
          html:
            'You will face darkness. You will face fear. You will face loss. But none of these things—not death, not life, not any force in heaven or earth—can touch the love of Christ that is yours. This is not a nice thought to comfort you when things are easy. This is the ground under your feet when everything else crumbles. Stand here.',
        },
        {
          kind: 'reflection',
          id: 'rom8-nothing-separate',
          prompt: 'What is the fear beneath your fears—the thing that, if it happened, you believe would separate you from God&apos;s love? What would it mean to know that even that cannot?',
        },
        {
          kind: 'artwork',
          matchTitle: /love|christ|cross/i,
          caption: 'Romans 8:35–39 · Nothing Shall Separate',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'There is therefore now no condemnation to them which are in Christ Jesus. If God be for us, who can be against us? We are more than conquerors through him that loved us. Nothing shall be able to separate us from the love of God, which is in Christ Jesus our Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 8 · Study Guide',
  },

  resources: [
    {
      id: 'cambridge-roman-adoption',
      kind: 'study',
      source: 'Cambridge University Press',
      label: 'Roman Legal Adoption',
      url: 'https://www.cambridge.org/core/books/legal-status-of-adopted-children-in-roman-law/',
      description: 'Scholarly treatment of Roman adoption law and the full inheritance rights conferred on adopted sons in first-century legal practice.',
    },
    {
      id: 'sefaria-abba-aramaic',
      kind: 'lexicon',
      source: 'Sefaria & SBL',
      label: 'Abba — Aramaic Father',
      url: 'https://www.sbl-site.org/learning/biblical-languages.aspx',
      description: 'Lexical and linguistic resource on the Aramaic term <em>Abba</em> used by Jesus and Paul as the intimate address to God the Father.',
    },
    {
      id: 'sefaria-psalm-44-hebrew',
      kind: 'archive',
      source: 'Sefaria',
      label: 'Psalm 44 — Hebrew Text',
      url: 'https://www.sefaria.org/Psalms.44',
      description: 'The full Hebrew text of Psalm 44, the source of the quotation in Romans 8:36 about being killed as sheep for slaughter.',
    },
    {
      id: 'brill-creation-groaning',
      kind: 'study',
      source: 'Brill Academic Publishers',
      label: 'Creation and Cosmic Suffering',
      url: 'https://brill.com/display/title/47474',
      description: 'Theological study examining the groaning of creation (Greek <em>stenazō</em>) as participation in redemptive suffering toward the age to come.',
    },
  ],

  hasHebrew: false,
};
