import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 19 — Cities of Refuge, Justice, and the Protection of the Innocent
 *
 * Deuteronomy 19 recaps the law on cities of refuge—places where the manslayer
 * who kills unawares may flee from the avenger of blood. The chapter distinguishes
 * carefully between accidental killing and deliberate murder, and prescribes the
 * law for false witnesses, the removal of landmarks, and the lex talionis (eye
 * for eye) not as vengeful escalation but as a boundary protecting the innocent
 * from disproportionate punishment.
 *
 * Type: Christ is the city of refuge (Heb. 6:18). His death releases the refugee.
 * Voice: Mercy and justice are woven together. The law protects both the guilty-by-accident
 * and the innocent from false accusation. God's law is fair because God is just.
 */
export const DEUTERONOMY_19: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 19,

  estimatedMinutes: { 5: 8, 10: 15, 15: 19 },
  intros: [
    'Deuteronomy 19 begins with the command to set apart three cities of refuge—places for the person who kills another by accident to flee, where the avenger of blood cannot touch him until he stands before the congregation in judgment. The text is precise: not every killing is murder. The manslayer who strikes without enmity, without lying in wait, whose weapon flies from his hand and strikes down a neighbor—he has a refuge. But the one who strikes with hatred, who lies in wait, who chooses his moment and his weapon—that one has no refuge. Death is his.',
    'The chapter then turns to false witness, to landmarks, and to the principle of eye for eye, tooth for tooth. These laws are not about vindictiveness. They are about protecting the innocent and making sure that justice does not become a tool for revenge. Every law reflects the same theology: you shall not shed innocent blood in the land the Lord gives you, or the land will be defiled and you will be defiled with it.',
  ],

  bottomShare: {
    label: 'Share Deuteronomy 19',
    quote:
      'Prepare the way and divide the land into three cities of refuge. Slay not the innocent. Bear witness with truth. Measure out justice exactly—life for life, eye for eye, tooth for tooth—so no excess falls upon the guiltless.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 19 · Study Guide',
  },

  sections: [
    /* ─── Deuteronomy 19:1–10 — Cities of Refuge ────────────────────────── */
    {
      ref: 'Deuteronomy 19:1–10',
      title: 'Prepare the Way to Safety',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 1,
              spans: [
                t('When the Lord thy God hath cut off the nations, whose land the Lord thy God giveth thee, and thou succeedest them, and dwellest in their cities, and in their houses;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Thou shalt separate '),
                hg('three cities for thee', 'c-three-cities'),
                t(' in the midst of thy land, which the Lord thy God giveth thee to possess it.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Thou shalt '),
                hg('prepare thee a way', 'c-prepare-way'),
                t(', and divide the coasts of thy land, which the Lord thy God giveth thee to inherit, into three parts, that every slayer may flee thither.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-three-cities',
          html:
            'Three cities for an entire nation may seem sparse until you understand the purpose. The cities are not prisons; they are sanctuaries. They must be distributed so that the manslayer who flees in panic can reach one before the avenger of blood catches him. Distance matters. Accessibility matters. God is not hiding the refuge; He is making sure it is findable.',
        },
        {
          kind: 'commentary',
          id: 'c-prepare-way',
          html:
            'The Hebrew phrase <em>panu et-ha-derekh</em> literally means "prepare the way." The roads themselves must be marked, maintained, and clear. This is extraordinary legislation—God commands not just that the cities exist, but that the way to them be easy to follow. A manslayer fleeing in fear must not get lost. The infrastructure of mercy is as important as the law itself.',
        },

        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 4,
              spans: [
                t('And this is the case of the slayer, which shall flee thither, that he may live: Whoso killeth his neighbour '),
                hy('ignorantly', 'hebrew-shogeg'),
                t(', whom he hated not in time past;'),
              ],
            },
            {
              number: 5,
              spans: [
                t('As when a man goeth into the wood with his neighbour to hew wood, and his hand fetcheth a stroke with the axe to cut down the tree, and '),
                hg('the head slippeth from the helve', 'c-axe-head'),
                t(', and lighteth upon his neighbour, that he die; he shall flee unto one of these cities, and live:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Lest the avenger of the blood follow after the slayer, while his heart is hot, and overtake him, because the way is long, and slay him; whereas he was not worthy of death: inasmuch as he hated him not in time past.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-axe-head',
          html:
            'The example is vivid: two men chopping wood, and the axe head flies off and kills one of them. There is no anger here, no hatred, no intention. Just a terrible accident. The law says the survivor shall not die for this. He shall flee to the city of refuge and live. The text recognizes what modern law calls "accident"—an outcome no one intended, caused by no malice, where justice still demands that the killing be accounted for, but mercy requires that death not answer for accident.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shogeg',
          title: 'Shogeg — "Ignorantly, Without Intention"',
          script: 'שׁוֹגֵג',
          translit: '<strong>shogeg</strong> · without knowledge, by accident, unintentional',
          description:
            'Shogeg is the opposite of <em>zimam</em> (deliberate, premeditated). The law is built on the distinction between what you meant to do and what happened anyway. Intention matters because it reveals the heart.',
        },

        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 7,
              spans: [
                t('Wherefore I command thee, saying, '),
                hp('Thou shalt separate', 'christ-refuge'),
                t(' three cities for thee.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And if the Lord thy God enlarge thy coast, as he hath sworn unto thy fathers, and give thee all the land which he promised to give unto thy fathers;'),
              ],
            },
            {
              number: 9,
              spans: [
                t('If thou shalt keep all these commandments to do them, which I command thee this day, to love the Lord thy God, and to walk ever in his ways; then shalt thou add three cities more for thee, beside these three:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('That innocent blood be not shed in thy land, which the Lord thy God giveth thee to inherit, and so blood be upon thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-innocent-blood',
          html:
            'The clause "that innocent blood be not shed" is the purpose of the entire law. God is not creating an intricate legal system for its own sake. He is protecting innocence. He is saying: in the land I give you, let no one be executed for a death they did not intend. That blood defiles you. That blood defiles the land. The road to the refuge and the walls of the city stand to prevent that defilement.',
        },
        {
          kind: 'christ',
          id: 'christ-refuge',
          title: 'Christ Connection — The Refuge of the Cross',
          html:
            'Hebrews 6:18 applies this image directly to Jesus: "That by two immutable things, in which it was impossible for God to lie, we might have a strong consolation, who have fled for refuge to lay hold upon the hope set before us." The cities of refuge are a picture of Christ—the place you run to when you have killed (sinned) and the avenger (judgment, condemnation, death) pursues. His cross is both the city and the gate. You do not hide there forever; you stand trial there. And the verdict is delivered: not guilty, because He is guilty on your behalf.',
        },
        {
          kind: 'carry',
          html:
            'The roads to the cities of refuge were kept clear and marked—not hidden, not hard to find. God makes the way to safety obvious, not secret. If you have carried guilt for something that came from carelessness rather than malice, or for something you wish you could undo, the way to safety is not obscure. It is marked. Marked by the blood, marked by the cross, marked by a God who prepares the way so that in your panic, you do not get lost.',
        },
        {
          kind: 'reflection',
          id: 'refuge-city',
          prompt:
            'What mistake or accident have you been running from? What would it mean to stop and stand trial in a place where mercy is guaranteed?',
        },
      ],
    },

    /* ─── Deuteronomy 19:11–13 — The Murderer Shall Surely Die ────────────── */
    {
      ref: 'Deuteronomy 19:11–13',
      title: 'No Refuge for the Murderer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 11,
              spans: [
                t('But if any man hate his neighbour, and lie in wait for him, and rise up against him, and smite him mortally that he die, and fleeth into one of these cities;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Then the elders of his city shall send and fetch him thence, and deliver him into the hand of the avenger of blood, that he may die.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Thine eye shall not pity him, but thou shalt put away the guilt of innocent blood from Israel, and '),
                hg('it shall be well with thee', 'c-eye-shall-not-pity'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lie-in-wait',
          html:
            'The murderer lies in wait. He hates. He plans. He chooses his moment. This is not the axe head that flies; this is the hand that strikes with intention. The refuge is not a place for him. The cities of mercy are for those who did not mean to do this—not for those who meant it all along.',
        },
        {
          kind: 'commentary',
          id: 'c-elders-fetch',
          html:
            'Notice who brings the murderer out: the elders of the city. Not vigilantes. Not the avenger acting alone. The community—the legal authority—acts. Even in the case of the murderer, the law is not mob justice. It is adjudicated, witnessed, executed by the proper authority. That is why it has teeth.',
        },
        {
          kind: 'commentary',
          id: 'c-eye-shall-not-pity',
          html:
            'Thine eye shall not pity. Do not soften. Do not negotiate. Do not ransomed the murderer. The text is cold because the crime is calculating. The murderer chose this. The law is not cruelty; it is refusal to bargain with deliberate evil. The good of the community—"it shall be well with thee"—requires that some lines not be crossed.',
        },
        {
          kind: 'christ',
          id: 'christ-judgment',
          title: 'Christ Connection — The Judge Who Knows the Heart',
          html:
            'Jesus said, "The Father judgeth no man, but hath committed all judgment unto the Son" (John 5:22). He is not only the city of refuge; He is the judge who stands at the gate and looks at your heart. Did you strike with hatred or by accident? Did you lie in wait or stumble into harm? He knows. His judgment is not based on the outcome alone but on the intention. "For the Father knoweth the things that come unto him" (Matt. 6:8). You cannot hide malice from Him, and you cannot hide accident as if it were crime.',
        },
        {
          kind: 'carry',
          html:
            'Deliberate harm has a different weight than accidental harm. If you have harbored hatred and struck deliberately—chosen your moment, chosen your words, chosen to wound—the law catches up with that choice. You cannot hide it in excuses or call it accident when you meant it. But if you have wounded someone carelessly, without hatred, in a moment of thoughtlessness that you now regret, that is different. God sees the difference. The law respects it. So must you.',
        },
        {
          kind: 'reflection',
          id: 'murderer-refuge',
          prompt:
            'Is there a harm you caused that was deliberate rather than accidental? What would it mean to stop trying to hide it and face it—not as accident, but as a choice you made?',
        },
      ],
    },

    /* ─── Deuteronomy 19:14 — Remove Not the Landmark ──────────────────────── */
    {
      ref: 'Deuteronomy 19:14',
      title: 'Preserve What God Has Given',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 14,
              spans: [
                t('Thou shalt not '),
                hy('remove thy neighbour&apos;s landmark', 'hebrew-gevul'),
                t(', which they of old time have set in thine inheritance, in the land that the Lord thy God giveth thee to possess it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-landmark-theology',
          html:
            'This single verse may seem out of place in a chapter about cities of refuge and justice. But it is not. A landmark is a boundary—a stone or a marker that says, "This inheritance is mine." To remove it is to steal. It is to erase what was given, what was established, what belonged to someone else. The law protects property not as mere material possession but as the inheritance God assigned to each family.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gevul',
          title: 'Gevul — "Boundary, Landmark"',
          script: 'גְּבוּל',
          translit: '<strong>gevul</strong> · a boundary, border, or landmark; that which defines and separates inheritance',
          description:
            'The gevul marks what belongs to whom. To move it is not a minor infraction; it is to rewrite the order God established. Every family was given land as their inheritance in Canaan. The landmarks protected that gift from the strong stealing from the weak.',
        },
        {
          kind: 'commentary',
          id: 'c-landmark-echo',
          html:
            'Proverbs echoes this law: "Remove not the ancient landmark, which thy fathers have set" (Prov. 22:28). The principle runs through Scripture. What God has set—boundaries, inheritances, limits—are not to be erased by the powerful or the clever. The law protects not greed but the inheritance of the poor.',
        },
        {
          kind: 'carry',
          html:
            'Every person has been given an inheritance—a place, a calling, a measure of grace. Some of those inheritances are marked by boundaries others set. A gift that came before you. A role you inherited. A talent you did not create yourself. Not to seize beyond your boundary, not to take what belongs to another, not to rewrite what was given—that is part of living justly. In a world that says "take what you can," the law says, "Respect the line. Respect what was given to another. Let God&apos;s assignment stand."',
        },
        {
          kind: 'reflection',
          id: 'landmark',
          prompt:
            'What boundaries has God set in your life—limits on your time, your gifts, your role? What would it mean to honor them rather than trying to erase them?',
        },
      ],
    },

    /* ─── Deuteronomy 19:15–21 — One Witness Shall Not Rise Up ────────────── */
    {
      ref: 'Deuteronomy 19:15–21',
      title: 'The Truth of Two Witnesses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 15,
              spans: [
                t('One witness shall not rise up against any man for any iniquity, or for any sin, in any sin that he sinneth: at the mouth of '),
                hy('two witnesses', 'c-two-witnesses'),
                t(', or at the mouth of three witnesses, shall the matter be established.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-two-witnesses',
          html:
            'One voice alone cannot condemn. This is radical mercy embedded in justice. Even in a sin—even in a crime—one testimony is not enough. Two or three must corroborate. The law protects the accused from a single accuser, from the possibility that one person&apos;s word or vendetta might destroy an innocent life. The Bible values truth enough to require it from more than one mouth.',
        },

        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 16,
              spans: [
                t('If a false witness rise up against any man to testify against him that which is wrong;'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Then both the men, between whom the controversy is, shall stand before the Lord, before the priests and the judges, which shall be in those days;'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the judges shall make diligent inquisition: and, behold, if the witness be a false witness, and hath testified falsely against his brother;'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Then shall ye do unto him, as he had thought to do unto his brother: so shalt thou put the evil away from among you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-false-witness',
          html:
            'If a witness lies, he receives the punishment he tried to inflict on another. If he testified to have his brother executed, he is executed. The law applies to perjurers the same standard it applies to murderers: no pity, no bargaining. False witness is a form of murder—it kills an innocent life in the eyes of the law. The liar is treated as the murderer he tried to become.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ed',
          title: '"Ed — "Witness"',
          script: 'עֵד',
          translit: '<strong>&apos;ed</strong> · a witness, one who testifies; literally, "one who stands by and sees"',
          description:
            'A witness is one who has seen and can speak to what they saw. The weight of justice rests on the accuracy of that testimony. If that testimony is false, the one who would be innocent dies instead. This is why perjury carries the same weight as the crime itself.',
        },

        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 20,
              spans: [
                t('And those which remain shall hear, and fear, and shall henceforth commit no more any such evil among you.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And thine eye shall not pity; but '),
                hg('life shall go for life', 'c-lex-talionis'),
                t(', eye for eye, tooth for tooth, hand for hand, foot for foot.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-justice-visible',
          html:
            'The law is public. Others see what happens to the false witness. They fear. They do not want to be destroyed by their own lie. Justice that is hidden does not deter. Justice that is seen, that is applied, that carries weight—that changes behavior. This is not cruelty for its own sake; it is deterrence. It is the community saying: truth matters. Your word has weight. Do not use it to destroy.',
        },
        {
          kind: 'commentary',
          id: 'c-lex-talionis',
          html:
            'Eye for eye, tooth for tooth. This sounds like revenge. But it is the opposite. It is a boundary on revenge. It says: you may receive exactly what you gave. No more. The one who put out an eye may lose an eye, but not his hand, not his foot, not his life. The law prevents escalation. It prevents the victim&apos;s family from taking two eyes for one, from destroying the entire person, from turning justice into genocide. It is proportionality. It is mercy inside justice.',
        },
        {
          kind: 'christ',
          id: 'christ-testimony',
          title: 'Christ Connection — The Testimony That Cannot Fail',
          html:
            'Jesus said, "I am one that bear witness of myself, and the Father that sent me beareth witness of me" (John 8:18). Two witnesses confirm the truth. Paul applies this: "In the mouth of two or three witnesses every word may be established" (2 Cor. 13:1). Jesus is not alone in His testimony; the Father witnesses to Him. And in the epistles, an elder is not to be believed on the testimony of one accuser, but "against an elder receive not an accusation, but before two or three witnesses" (1 Tim. 5:19). The law on witness, carried all the way through the New Testament, protects the innocent.',
        },
        {
          kind: 'carry',
          html:
            'Your word carries weight. If you bear false witness—if you let someone believe a lie about another person, if you stay silent when you could speak truth, if you shade the truth to make yourself look better—you become complicit in destroying an innocent life. The law says your lie will be visited back on your own head. But more than that: the world is listening. Others are learning from what they see you do with the truth. Speak it. Speak it carefully. Speak it accurately. It matters more than you know.',
        },
        {
          kind: 'reflection',
          id: 'witnesses',
          prompt:
            'When have you let a lie about someone else go unchallenged? When have you shaded the truth to protect yourself? What would it take to be a witness to truth, even when it costs you?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Deuteronomy 19:21 — Eye for Eye as Protection ───────────────────── */
    {
      ref: 'Deuteronomy 19:21',
      title: 'Justice Measured, Not Endless',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-lex-foundation',
          html:
            'Eye for eye is not divine vindictiveness. It is divine justice holding a line. It says: the punishment must fit the crime. One eye for one eye. One tooth for one tooth. Not a life for an eye. Not the whole person destroyed for one wrong. The lex talionis—the law of retaliation—is actually a law of proportion. It sets the maximum, not the minimum. It prevents the wealthy or powerful from crushing the poor for a small offense.',
        },
        {
          kind: 'commentary',
          id: 'c-jesus-exceeds',
          html:
            'Jesus took these words—"Eye for eye, and tooth for tooth"—and said, "But I say unto you, That ye resist not evil: but whosoever shall smite thee on thy right cheek, turn to him the other also" (Matt. 5:38–39). He is not rejecting the law; He is transcending it. The law says the court must not exact more than justice requires. Jesus says the individual should exact less—should turn the other cheek, should forgive, should give more than was taken. But notice: He is teaching individuals to be merciful. He is not saying courts should abandon the lex talionis. Justice in the courtroom is not the same as forgiveness between persons.',
        },
        {
          kind: 'commentary',
          id: 'c-innocent-protected',
          html:
            'The entire law of Deuteronomy 19 works together to protect the innocent. The cities of refuge for the accidental killer. The requirement of two witnesses before conviction. The proportional punishment that prevents escalation. Eye for eye does not mean blind with rage. It means measured. It means fair. It means the innocent are not destroyed for the guilty, and the guilty are not destroyed beyond their crime.',
        },
        {
          kind: 'christ',
          id: 'christ-eye-for-eye',
          title: 'Christ Connection — The One Who Paid in Full',
          html:
            'Paul writes, "Recompense to no man evil for evil" (Rom. 12:17). Instead, "Vengeance is mine; I will repay, saith the Lord" (Rom. 12:19). Jesus, on the cross, does not demand eye for eye. He pays with His own blood for the guilt that belonged to the world. He receives the full punishment—not proportional to what we did, but infinite, complete, all-consuming—so that we receive no punishment at all. He is the only one who ever received more justice than was proportional to His crime. Because He committed no crime. He bore ours.',
        },
        {
          kind: 'carry',
          html:
            'Justice matters. The world requires boundaries, proportionality, and consequences for wrong. But your personal vengeance is not justice. If someone has hurt you, your response is not to hurt them back—even if the law would allow it. Your response is to let the law do its work, to let God settle accounts, to step out of the position of avenger and into the position of one who is free. That is what Christ did for you—paid the bill, received the penalty, set you free. You are not called to demand payment from others. You are called to receive the forgiveness you did not earn.',
        },
        {
          kind: 'reflection',
          id: 'eye-for-eye',
          prompt:
            'Where are you tempted to demand payment for what someone did to you? What would it mean to let God be the avenger and you be the one who is free?',
        },
      ],
    },
  ],
};
