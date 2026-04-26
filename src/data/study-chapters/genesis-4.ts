import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 4 — Cain and Abel; the first murder; the line of Cain;
 * Seth and the beginning of the worship of God.
 *
 * The chapter that shows what happens when the knowledge of good and evil
 * meets free will. A story of two brothers, two offerings, and a choice that
 * echoes through all of Scripture. Inside the darkness of the first murder
 * is the light of the first promise of grace — and the first human soul
 * to call on the name of the Lord.
 */
export const GENESIS_4: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 4,

  intros: [
    'Genesis 4 opens with two brothers and two offerings. God looks with favor on one and not the other. In that moment of rejection, Cain faces a choice — he can accept the boundary God has drawn, or cross it. He crosses it. The result is the first murder, the first human death, the first blood crying from the ground. The chapter is dark.',
    'But read carefully. Inside this story of Cain&apos;s line — murderers, polygamists, the arrogant builder Lamech — God has placed another line. Seth is born to replace Abel. And the chapter closes with a single sentence that transforms everything: &ldquo;then began men to call upon the name of the LORD.&rdquo; In the very chapter that shows the worst humans can do to each other, God opens the first door to worship.',
  ],

  bottomShare: {
    label: 'Share Genesis 4',
    quote:
      'Two brothers, two offerings, and the first murder — but also the first soul born to call upon the name of the LORD. Genesis 4 is where human sin and God&apos;s patience meet.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 4 · Study Guide',
  },

  sections: [
    /* ─── Genesis 4:1–7 — The Two Offerings ───────────────────────────── */
    {
      ref: 'Genesis 4:1–7',
      title: 'The Two Offerings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('And Adam knew Eve his wife; and she conceived, and bare '),
                hg('Cain', 'gen4-cain-name'),
                t(', saying, I have '),
                hy('gotten', 'hebrew-qayin'),
                t(' a man from the LORD.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And she again bare his brother '),
                hg('Abel', 'gen4-abel-name'),
                t('. And Abel was a keeper of sheep, but Cain was a '),
                hg('tiller of the ground', 'gen4-occupations'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-qayin',
          title: 'Qayin — "gotten"',
          script: 'קַיִן',
          translit: '<strong>qayin</strong> · acquired, gotten; a wordplay on Cain&apos;s name',
          description:
            'The verb "to get, to acquire" (qanah) sounds like the name Cain (Qayin). Eve names her firstborn with a wordplay: "I have gotten a man with the help of the LORD." The same name will carry a darker meaning when Cain murders — he "gets" his brother&apos;s life.',
        },
        {
          kind: 'commentary',
          id: 'gen4-cain-name',
          html:
            'Cain&apos;s name echoes a verb of acquisition. Eve speaks as if she has obtained something from God — a man, a helper. The language is tender. But names in Scripture often carry a weight the person will discover later. Cain will spend his life reaching for what he does not have, and what he reaches for will destroy him.',
        },
        {
          kind: 'commentary',
          id: 'gen4-abel-name',
          html:
            'Abel&apos;s name comes from <em>hevel</em>, meaning vapor, breath, vanity. He is a shepherd. His offering pleases God. Yet his life is the shortest in the chapter — described in just a few verses, then ended. The name fits. He is like breath: present, then gone.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 3,
              spans: [
                t('And in process of time it came to pass, that Cain brought of the '),
                hy('fruit of the ground', 'gen4-cain-offering'),
                t(' an offering unto the LORD.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And Abel, he also brought of the '),
                hy('firstlings of his flock', 'gen4-abel-offering'),
                t(', and of the fat thereof. And the LORD '),
                hp('had respect to Abel and to his offering', 'christ-acceptable-sacrifice'),
                t(':'),
              ],
            },
            {
              number: 5,
              spans: [
                t('But unto Cain and to his offering he had not respect. And Cain was very wroth, and his countenance fell.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen4-occupations',
          html:
            'The brothers have different work: Cain farms the ground his parents were told to till in Genesis 3:23; Abel tends sheep. Both are legitimate. Both could honor God. What matters is not the work itself but what the work produces — whether there is a heart that recognizes God in it.',
        },
        {
          kind: 'commentary',
          id: 'gen4-cain-offering',
          html:
            'Cain brings "of the fruit of the ground." The Hebrew allows for either a generous offering or a casual one — we are not told. But the text does tell us what Abel brought: "the firstlings... and the fat thereof" — the best, the first, the richest part. Cain&apos;s offering is not criticized; Abel&apos;s is explicitly praised. The difference seems to be in the heart that brings it.',
        },
        {
          kind: 'commentary',
          id: 'gen4-abel-offering',
          html:
            'Abel brings the firstlings of his flock — the first and the best — and specifically the fat, the richest part. He holds nothing back. God "has respect" to his offering. The word used here (Hebrew <em>sha&apos;ah</em>) carries the sense of intimate attention, favor, turning toward with affection.',
        },
        {
          kind: 'christ',
          id: 'christ-acceptable-sacrifice',
          title: 'Christ Connection — The Blood That Speaks',
          html:
            'Hebrews 11:4 tells us: "By faith Abel offered unto God a more excellent sacrifice than Cain." The difference was faith — Abel believed that worship required blood, something costly given up. Later the Hebrews passage links this directly to Christ: "to Jesus the mediator of the new covenant, and to the blood of sprinkling, that speaketh better things than that of Abel" (Heb. 12:24). Abel&apos;s blood cries from the ground in Genesis 4:10. Jesus&apos; blood speaks a better word — not a word of judgment, but of forgiveness. The pattern begins here: acceptable worship flows from faith that God deserves the best, and costs the worshipper something real.',
        },
        {
          kind: 'carry',
          html:
            'Cain&apos;s anger is not because his work is wrong. It is because he wanted credit for the work instead of gratitude for the ability to work at all. When you catch yourself comparing your offering — your time, your gifts, your service — to someone else&apos;s, and anger rises, you are standing where Cain stood. The antidote is not a bigger offering. It is remembering that worship is not about you proving something. It is about turning toward God with what you have.',
        },
        {
          kind: 'reflection',
          id: 'gen4-offerings',
          prompt:
            'What are you bringing to God right now — your work, your time, your worship? Is it something that costs you, or something you bring because it is convenient? What would change if you brought the first and the best instead?',
        },
        {
          kind: 'artwork',
          matchTitle: /cain.*abel|abel.*offering/i,
          matchArtist: /tissot|rubens/i,
          caption: 'Genesis 4:1–7 · The Two Offerings',
        },
      ],
    },

    /* ─── Genesis 4:8–15 — The Murder and the Mark ───────────────────── */
    {
      ref: 'Genesis 4:8–15',
      title: 'The Murder and the Mark',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 6,
              spans: [
                t('And the LORD said unto Cain, Why art thou wroth? and why is thy countenance fallen?'),
              ],
            },
            {
              number: 7,
              spans: [
                t('If thou doest well, shalt thou not be accepted? and if thou doest not well, sin lieth at the door. And unto thee shall be his desire, and '),
                hg('thou shalt rule over him', 'gen4-rule'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen4-rule',
          html:
            'God offers Cain a way out. <em>If thou doest well</em> — if you shift from envy to excellence — you will be accepted. "Sin lies at the door" (the Hebrew word is <em>chatta&apos;</em>, suggesting sin as a predator crouching, waiting). God tells Cain plainly: you have a choice. And if you make the right one, you will rule over your own desires and over sin itself. Cain is being offered mastery. He refuses it.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 8,
              spans: [
                t('And Cain talked with Abel his brother: and it came to pass, when they were in the field, that Cain '),
                hp('rose up against Abel his brother, and slew him', 'christ-first-blood'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen4-murder',
          html:
            'The text does not elaborate. It simply states what happened: Cain rose up and killed his brother. No drama, no speeches. Just the naked fact of what happens when shame meets anger and no boundary holds. The first human death is not from age or sickness or accident. It is murder. It is the choice to destroy what you cannot control.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 9,
              spans: [
                t('And the LORD said unto Cain, Where is Abel thy brother? And he said, I know not: '),
                hg('am I my brother&apos;s keeper?', 'gen4-keeper'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he said, What hast thou done? the voice of thy brother&apos;s '),
                hy('blood', 'hebrew-dam'),
                t(' '),
                hy('crieth', 'hebrew-tsa-aq'),
                t(' unto me from the ground.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-dam',
          title: 'Dam — "blood"',
          script: 'דָּם',
          translit: '<strong>dam</strong> · blood; the life-force of flesh',
          description:
            'In Hebrew thought, blood is the life (Leviticus 17:11). When Cain sheds Abel&apos;s blood, he pours out Abel&apos;s life into the ground. The blood becomes a witness, speaking from the soil itself.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tsa-aq',
          title: 'Tsa&apos;aq — "crieth"',
          script: 'צָעַק',
          translit: '<strong>tsa&apos;aq</strong> · to cry out, to shriek, to call for help',
          description:
            'The same verb is used elsewhere for the cry of the oppressed reaching God&apos;s ears (Exodus 3:7). Abel&apos;s blood does not lie silent. It speaks. It calls. It demands acknowledgment from the God who made both brothers.',
        },
        {
          kind: 'commentary',
          id: 'gen4-keeper',
          html:
            'Cain&apos;s response to God&apos;s question mirrors Adam&apos;s response in Genesis 3:11. <em>Where is your brother?</em> becomes <em>Am I my brother&apos;s keeper?</em> — a refusal to answer, a deflection, a claim of innocence. But Cain has done worse than hide from God. He has hidden his brother in the ground.',
        },
        {
          kind: 'christ',
          id: 'christ-first-blood',
          title: 'Christ Connection — The Blood That Speaks',
          html:
            'Abel&apos;s blood cries from the ground and God hears it. Centuries later, Jesus says something startling: "Upon you may come all the righteous blood shed upon the earth, from the blood of righteous Abel unto the blood of Zacharias" (Matthew 23:35). He connects Abel — the first murdered righteous person — to the entire line of those who die for their faith, which culminates in Himself. And then Paul writes of the church: "Ye are come... to Jesus the mediator of the new covenant, and to the blood of sprinkling, that speaketh better things than that of Abel" (Hebrews 12:22–24). Abel&apos;s blood cried for justice. Jesus&apos; blood cries for mercy — a voice that speaks better things than judgment.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 11,
              spans: [
                t('Now art thou cursed from the earth, which hath opened her mouth to receive thy brother&apos;s blood from thy hand;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('When thou tillest the ground, it shall not henceforth yield unto thee her strength: a fugitive and a wanderer shalt thou be in the earth.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Cain said unto the LORD, My punishment is greater than I can bear.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Behold, thou hast driven me out this day from thy face; and from thy face shall I hid myself; and I shall be a fugitive and a wanderer in the earth; and every one that findeth me shall slay me.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the LORD said unto him, Therefore whosoever slayeth Cain, vengeance shall be taken on him sevenfold. And the LORD set a '),
                hy('mark', 'hebrew-ot'),
                t(' upon Cain, lest any finding him should kill him.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ot',
          title: 'Ot — "mark"',
          script: 'אוֹת',
          translit: '<strong>&apos;ot</strong> · sign, mark, token',
          description:
            'The same word is used for God&apos;s covenantal signs (the rainbow after the flood, circumcision). The mark on Cain is God&apos;s sign too — not of approval, but of protection. Even in exile, God does not abandon the murderer.',
        },
        {
          kind: 'commentary',
          id: 'gen4-curse',
          html:
            'The curse is precise: the ground will no longer yield its strength to Cain. He will become a wanderer. He has shed blood on the earth; now the earth will reject him. There is a fitting justice in this — the thing he loved (his crops, his standing as a farmer) is taken. But God does not take his life.',
        },
        {
          kind: 'commentary',
          id: 'gen4-mark',
          html:
            'Cain fears death. And God, in an astonishing act of mercy, marks him so that no one will kill him. The mark is a protection. Even for the murderer, God does not abandon. The exile is real, the curse is real — but death is withheld. Grace persists even in judgment.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever done something you cannot undo, and felt like Cain — that the punishment is more than you can bear, that you deserve to be killed — this verse is for you. God does not minimize what you did. The curse stands. But neither does He let you be destroyed. There is a mark upon your life. It marks you as someone who has sinned, yes. But also as someone God has not abandoned.',
        },
        {
          kind: 'reflection',
          id: 'gen4-mark-grace',
          prompt:
            'What sin in your past has made you feel like you deserve to be destroyed? Where is the mark of God&apos;s protection on you, even in the midst of the consequences you are living?',
        },
        {
          kind: 'artwork',
          matchTitle: /cain.*mark|cain.*slain/i,
          caption: 'Genesis 4:8–15 · The Murder and the Mark',
        },
      ],
    },

    /* ─── Genesis 4:16–24 — The Line of Cain ──────────────────────────── */
    {
      ref: 'Genesis 4:16–24',
      title: 'The Line of Cain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 16,
              spans: [t('And Cain went out from the presence of the LORD, and dwelt in the land of Nod, on the east of Eden.')],
            },
            {
              number: 17,
              spans: [
                t('And Cain knew his wife; and she conceived, and bare Enoch: and he builded a city, and called the name of the city, after the name of his son, Enoch.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And unto Enoch was born Irad: and Irad begat Mehujael: and Mehujael begat Methusael: and Methusael begat Lamech.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen4-nod',
          html:
            'Cain goes to the land of Nod. The name comes from the Hebrew <em>nud</em>, meaning to wander or flee. He has become what God said he would be: a wanderer. But even in exile, Cain does what humans do. He builds. He marries. He creates culture and a name. This genealogy is not innocent — it is the history of a humanity that builds cities and forges weapons, that spreads further from God with each generation, that fills the earth but not with worship.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 19,
              spans: [
                t('And Lamech took unto him two wives: the name of the one was Adah, and the name of the other Zillah.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Adah bare Jabal: he was the father of such as dwell in tents, and of such as have cattle.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And his brother&apos;s name was Jubal: he was the father of all such as handle the harp and organ.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Zillah, she also bare Tubal-cain, an instructer of every artificer in brass and iron: and the sister of Tubal-cain was Naamah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen4-lamech-culture',
          html:
            'Lamech has two wives (the first polygamist). His sons and daughter invent technology and art: tents and cattle, music, metalworking. They are building civilization. But notice what is missing. In the genealogy of Adam (chapter 5), each generation is named and measured by how long they lived and by the fact that they "called upon the name of the LORD." Here, accomplishment and invention replace worship. Cain&apos;s line makes a world, but a world without God at its center.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 23,
              spans: [
                t('And Lamech said unto his wives, Adah and Zillah, Hear my voice; ye wives of Lamech, hearken unto my speech: for I have '),
                hg('slain a man to my wounding, and a young man to my hurt', 'gen4-lamech-boast'),
                t('.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('If Cain shall be avenged sevenfold, truly Lamech seventy and sevenfold.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen4-lamech-boast',
          html:
            'Lamech breaks silence with a taunt. He has killed a man and brags about it. Where Cain was silent and then repentant, Lamech announces his violence and claims a sevenfold vengeance. He has taken the mark that God placed on Cain — the sign of protection — and weaponized it into a promise of violence. Cain&apos;s line does not lead toward humanity becoming better. It leads toward each generation walking further into what they want, even if it destroys others.',
        },
        {
          kind: 'carry',
          html:
            'Lamech&apos;s line shows you what happens when ambition and ability grow without worship — when you build and make and accomplish, but never turn your face toward God. You can build beautiful things. You can create. You can become skilled and strong. But if you are not simultaneously learning to call upon God&apos;s name, you are walking the path Lamech walked. Check: is what you are building, what you are becoming, what you are proud of — is it drawing you toward God or further away?',
        },
        {
          kind: 'reflection',
          id: 'gen4-lamech-worship',
          prompt:
            'What have you built or created lately that you are proud of? In the process of making it, were you conscious of God, or was it entirely about your own vision and capability?',
        },
      ],
    },

    /* ─── Genesis 4:25–26 — Seth and the Beginning of Worship ─────────── */
    {
      ref: 'Genesis 4:25–26',
      title: 'Seth and the Beginning of Worship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 25,
              spans: [
                t('And Adam knew his wife again; and she bare a son, and called his name Seth: For God, said she, hath appointed me another seed instead of Abel, whom Cain slew.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And to Seth, to him also there was born a son; and he called his name Enosh: and then began men to '),
                hp('call upon the name of the LORD', 'christ-worship-begins'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen4-seth-appointed',
          html:
            'Eve names Seth because God "hath appointed me another seed instead of Abel." She is looking back to Genesis 3:15 — to the promise of a seed. Abel died without heirs. Seth is appointed to replace him, to carry the line forward. But more than that: Seth is born into a family that knows the cost of murder, that has seen what sin looks like up close. He is born into repentance.',
        },
        {
          kind: 'commentary',
          id: 'gen4-enosh-worship',
          html:
            'With Enosh (Seth&apos;s son), the text breaks into a new note: "then began men to call upon the name of the LORD." This is the first time in Scripture this phrase appears. Not just to believe in God, or to know about God, but to <em>call upon His name</em> — to speak to Him, to invoke Him, to worship Him as a community. The genealogy of Cain ends in Lamech boasting of murder. The genealogy of Seth begins in worship.',
        },
        {
          kind: 'christ',
          id: 'christ-worship-begins',
          title: 'Christ Connection — The Line Through Seth',
          html:
            'Seth is appointed to replace Abel. The genealogy of Genesis 5 — the line of Seth — carries forward the line of promise. Matthew 1 traces Jesus all the way back through this line: "which was the son of Seth, which was the son of Adam, which was the son of God" (Luke 3:38). The one who will be called the <em>Seed</em> of the woman (Genesis 3:15) comes not through Cain (who murdered and was exiled) but through Seth, through the line that learns to call upon God&apos;s name. Worship is not something humans invent. It is the pattern of a people chosen to draw near to God, generation after generation, until the Seed Himself appears.',
        },
        {
          kind: 'carry',
          html:
            'You are born into a long line. Before you were born, your ancestors were calling on God&apos;s name. Whether you knew them or not, whether they were perfect or broken, they were part of a people learning generation by generation what it means to turn toward God. You stand in that line now. When you call on His name — in prayer, in worship, in the simple act of turning your face toward Him — you are part of something that has been happening since the days of Enosh. You are not starting something new. You are continuing something very old.',
        },
        {
          kind: 'reflection',
          id: 'gen4-call-upon',
          prompt:
            'What does it look like for you to "call upon the name of the LORD" today — not just to believe in Him, but to actually speak to Him, to invoke His presence, to worship? When will you do that?',
        },
      ],
    },
  ],

  hasHebrew: true,
};
