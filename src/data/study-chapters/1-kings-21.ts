import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 21 — Naboth's Vineyard: The Peril of Coveting
 *
 * King Ahab desires a vineyard that does not belong to him—the property of
 * a man named Naboth. Naboth, bound by Mosaic law, refuses to sell. Rather
 * than accept this, Ahab retreats in petulance. His wife Jezebel, a foreign
 * queen schooled in the ways of pagan kingship, orchestrates a scheme: she
 * forges letters in Ahab's name, arranges a mock trial with false witnesses,
 * and has Naboth stoned. When Ahab takes possession of the seized vineyard,
 * the prophet Elijah confronts him with God's word: the blood of the innocent
 * cries out, and judgment will fall upon the house of Ahab. Yet when Ahab
 * hears this, he repents—tearing his clothes, fasting, walking softly before
 * God. And God, seeing even this broken repentance from so wicked a king,
 * delays the judgment to the next generation. In this chapter, we see the
 * corruption that coveting breeds, the power of manipulation, the access
 * prophets retain even to fallen kings, and the mercy that meets even partial
 * repentance.
 */
export const KINGS_1_21: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 21,

  intros: [
    'There is a moment in every person&apos;s life when they want something that is not theirs. A possession, a role, a place in another&apos;s life. The tenth commandment forbids coveting—not because desire itself is sinful, but because coveting, unchecked, breeds lies, theft, and murder. Ahab, the king of Israel, encounters such a moment. And what begins as a simple, reasonable request becomes a cascade of injustice.',
    'Naboth the Jezreelite owns a vineyard near Ahab&apos;s palace in Jezreel. Ahab wants it for a garden of herbs. He offers compensation—a better vineyard, or money. It seems fair. But Naboth refuses on principle: the vineyard is his family&apos;s inheritance, given by the Lord under Mosaic law. It is not for sale. Ahab sulks. He cannot accept refusal. And Jezebel, his Phoenician queen, knows how to solve problems that cannot be solved through honest means. What follows is judicial murder dressed in religious form—a perversion of the very law that protects the innocent.',
  ],

  bottomShare: {
    label: 'Share 1 Kings 21',
    quote:
      'Naboth stood on the inheritance of his fathers. Ahab coveted it and fell into ruin. The God of Israel hears the cry of the innocent and moves even through the worst of kings to show that justice matters.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 21 · Study Guide',
  },

  sections: [
    /* ─── 1 Kings 21:1–4 — The Vineyard, the Refusal, the Sulk ──────── */
    {
      ref: '1 Kings 21:1–4',
      title: 'The Vineyard and the Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(1, 'And it came to pass after these things, that Naboth the Jezreelite had a vineyard, which was in Jezreel, hard by the palace of Ahab king of Samaria.'),
            {
              number: 2,
              spans: [
                t('And Ahab spake unto Naboth, saying, Give me thy vineyard, that I may have it for a garden of herbs, because it is near unto my house: and I will give thee for it a better vineyard than it; or, if it seem good to thee, I will give thee the worth of it in '),
                hy('money', 'naboth-money'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Naboth said to Ahab, The Lord forbid it me, that I should give the '),
                hy('inheritance of my fathers', 'naboth-inheritance'),
                t(' unto thee.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And Ahab came into his house heavy and displeased because of the word which Naboth the Jezreelite had spoken unto him: for he had said, I will not give thee the inheritance of my fathers. And he laid him down upon his bed, and turned away his face, and would '),
                hg('eat no bread', 'ahab-sulk'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'naboth-money',
          html:
            'Ahab&apos;s offer is not unreasonable by worldly standards. He is a king; he sees something he wants. He offers compensation—a better vineyard, or its monetary value. It is the language of commerce, of fair dealing. He is willing to pay.',
        },
        {
          kind: 'commentary',
          id: 'naboth-inheritance',
          html:
            'But Naboth refuses. His answer is rooted not in emotion or stubbornness, but in law. Under the Mosaic law, the inheritance of the fathers—the land given to each family—could not be permanently sold. Leviticus 25:23 states: "The land shall not be sold for ever: for the land is mine." Naboth is bound by a covenant older than the crown. His refusal is an act of faithfulness to God&apos;s law, not to his own will.',
        },
        {
          kind: 'hebrew',
          id: 'kerem-vineyard',
          title: 'Kerem — "Vineyard"',
          script: 'כֶּ֫רֶם',
          translit: '<strong>Kerem</strong> · vineyard; a plot of land planted with vines',
          description:
            'The vineyard is not merely a possession. In the language of Scripture, a vineyard is a sign of God&apos;s care and blessing—a place of productivity, of life-giving fruit. To have a vineyard is to be rooted, to be blessed, to belong to the land. Naboth&apos;s vineyard, his family&apos;s kerem, is a legacy. It is not a commodity.',
        },
        {
          kind: 'commentary',
          id: 'ahab-sulk',
          html:
            'Ahab, the king, cannot accept refusal. He withdraws to his chamber, turns away his face, refuses food. It is the behavior of a child denied a toy—except this child commands armies and claims the throne of Israel. His inability to accept "no" reveals the spiritual sickness at the heart of his reign. He has much. He has power. Yet he wants what is not his, and the wanting poisons his peace.',
        },
        {
          kind: 'carry',
          html:
            'Coveting begins in a moment—when we see something another person has and think it ought to be ours. It seems small. Ahab only wanted a garden. But the refusal to accept what we cannot have, the refusal to honor another&apos;s right to refuse, opens a door to darkness. Are there things you have learned to want and cannot have? How do you live with that refusal?',
        },
        {
          kind: 'reflection',
          id: 'naboth-refusal',
          prompt: 'Naboth stood on principle when the king himself made a request. What would it cost you to refuse someone in power? What principle would be worth that cost?',
        },
      ],
    },

    /* ─── 1 Kings 21:5–7 — Jezebel Takes Control ──────────────────── */
    {
      ref: '1 Kings 21:5–7',
      title: 'Jezebel&apos;s Question',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(5, 'But Jezebel his wife came unto him, and said unto him, Why is thy spirit so sad, that thou eatest no bread?'),
            {
              number: 6,
              spans: [
                t('And he said unto her, Because I spake unto Naboth the Jezreelite, and said unto him, Give me thy vineyard for money; or else, if it please thee, I will give thee another vineyard for it: and he answered, I will not give thee my vineyard.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Jezebel his wife said unto him, Dost thou now govern the kingdom of Israel? arise, eat bread, and let thine heart be merry: '),
                hp('I will give thee the vineyard of Naboth the Jezreelite', 'jezebel-promise'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jezebel-question',
          html:
            'Jezebel asks a seemingly innocent question: Why are you sad? But her question is a test. She is testing to see if Ahab still has a grip on reality, or if she can reshape it for him. She is a Phoenician princess, raised in the courts where kings are gods and their word is law. The notion that a subject might refuse the king would be absurd in her world. She sees Ahab&apos;s sulking as weakness, an opening.',
        },
        {
          kind: 'commentary',
          id: 'jezebel-promise',
          html:
            'Jezebel&apos;s promise is chilling in its simplicity: I will give you the vineyard. Not "I will try," not "I will ask." I will give it. She knows exactly how to solve a problem. She will use the mechanisms of the state—law, witnesses, the courts—to take what Ahab wants. She will make legality serve her will.',
        },
        {
          kind: 'hebrew',
          id: 'nachalah-inheritance',
          title: 'Nachalah — "Inheritance"',
          script: 'נַחֲלָה',
          translit: '<strong>Nachalah</strong> · inheritance; portion; something given and held in perpetuity',
          description:
            'The word nachalah carries the sense of something that is yours by covenant, by family, by God&apos;s distribution of the land. It is not earned or bought. It is inherited, held in trust for the next generation. To take a nachalah from someone is to break the covenant structure of Israel itself.',
        },
        {
          kind: 'carry',
          html:
            'Jezebel&apos;s confidence is the confidence of one who sees no higher law than the king&apos;s will. She has no fear because she operates in a world where power is the only power. But Ahab, even in his weakness, knows there is a law—the law of the Lord. He is an Israelite, bound by covenant. Yet he does not stop Jezebel. He does not say, "There is a law that forbids this." He eats bread and lets his heart be merry while another plans murder. In that moment, he chooses to look away.',
        },
        {
          kind: 'reflection',
          id: 'jezebel-control',
          prompt: 'Jezebel took control of the situation. When have you turned a blind eye to injustice because someone else promised to "handle it"? What did that cost?',
        },
      ],
    },

    /* ─── 1 Kings 21:8–14 — The Mock Trial and Murder ──────────────── */
    {
      ref: '1 Kings 21:8–14',
      title: 'Judicial Murder',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 8,
              spans: [
                t('So she wrote letters in Ahab&apos;s name, and sealed them with his seal, and sent the letters unto the elders and to the nobles that were in his city, dwelling with Naboth.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And she wrote in the letters, saying, Proclaim a '),
                hg('fast', 'mock-fast'),
                t(', and set Naboth on high among the people:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And set two men, '),
                hg('sons of Belial', 'belial-witnesses'),
                t(', before him, to bear witness against him, saying, Thou didst blaspheme God and the king. Then carry him out, and stone him, that he may die.'),
              ],
            },
            plain(11, 'And the men of his city, even the elders and the nobles who were the inhabitants thereof, did as Jezebel had sent unto them, and as it was written in the letters which she had sent unto them.'),
            plain(12, 'They proclaimed a fast, and set Naboth on high among the people.'),
            plain(13, 'And there came in two men, children of Belial, and sat before him: and the men of Belial witnessed against him, even against Naboth, in the presence of the people, saying, Naboth did blaspheme God and the king. Then they carried him forth out of the city, and stoned him with stones, that he died.'),
            plain(14, 'Then they sent to Jezebel, saying, Naboth is stoned, and is dead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jezebel-letters',
          html:
            'Jezebel writes letters in Ahab&apos;s name. She seals them with his seal. This is the language of authority, of state power. The letters are not demands; they are instructions disguised as letters from the king himself. The elders and nobles receive them and obey. None of them question. None of them resist. This is what happens when power goes unchecked and authority is separated from justice.',
        },
        {
          kind: 'commentary',
          id: 'mock-fast',
          html:
            'A fast is proclaimed. This is the language of ritual, of repentance, of seeking the Lord. To the people of Naboth&apos;s city, a fast suggests that something grave has happened, that something must be atoned for. The form of religion is weaponized. The sacred is used to accomplish the profane. The very appearance of holiness makes the evil acceptable.',
        },
        {
          kind: 'commentary',
          id: 'belial-witnesses',
          html:
            'Two men, "sons of Belial," are set as witnesses. Belial means "without worth" or "worthless." These are not just false witnesses; they are worthless men, debased men, men for whom lying is a trade. And they testify that Naboth has blasphemed God and the king. In the law, two witnesses are required to confirm a death sentence (Deuteronomy 19:15). Jezebel uses the very structure of justice to pervert it.',
        },
        {
          kind: 'hebrew',
          id: 'saqal-stone',
          title: 'Saqal — "To Stone"',
          script: 'סָקַל',
          translit: '<strong>Saqal</strong> · to stone; to kill by pelting with stones',
          description:
            'Stoning is the prescribed death for blasphemy under Mosaic law. It is a form of execution that requires the community—the witnesses and the people gather and cast stones. In this case, the community becomes the instrument of Jezebel&apos;s will. They stone a man they know to be innocent. They participate in the very injustice they claim to punish.',
        },
        {
          kind: 'commentary',
          id: 'naboth-stoned',
          html:
            'Naboth is stoned. He dies. The sentence is carried out in the name of justice, in the name of God. The people of his city, the elders, the nobles—they participate in the murder. And when it is done, word is sent back to Jezebel: the deed is accomplished. Naboth is stoned and dead.',
        },
        {
          kind: 'carry',
          html:
            'Evil often wears the clothes of justice. The fast, the trial, the witnesses, the law—all the forms are correct. And because the forms are correct, people participate without questioning. They do what they are told by those in authority. They do not ask why. They do not resist. This is how murder becomes law. This is how a whole city becomes complicit in a crime. We too must ask ourselves: When do I follow instructions without questioning? When do I participate in injustice because the authority asking seems legitimate?',
        },
        {
          kind: 'reflection',
          id: 'mock-trial',
          prompt: 'The people of Naboth&apos;s city stoned an innocent man because authority figures told them to. What would it have taken for you to refuse? What would protect you from such compliance?',
        },
      ],
    },

    /* ─── 1 Kings 21:15–21 — Elijah Confronts the King ───────────── */
    {
      ref: '1 Kings 21:15–21',
      title: 'Elijah Confronts Ahab',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(15, 'And it came to pass, when Jezebel heard that Naboth was stoned, and was dead, that Jezebel said to Ahab, Arise, take possession of the vineyard of Naboth the Jezreelite, which he refused to give thee for money: for Naboth is not alive, but dead.'),
            plain(16, 'And it came to pass, when Ahab heard that Naboth was dead, that Ahab rose up to go down to the vineyard of Naboth the Jezreelite, to take possession of it.'),
            {
              number: 17,
              spans: [
                t('And the word of the Lord came to Elijah the Tishbite, saying,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Arise, go down to meet Ahab king of Israel, which is in Samaria: behold, he is in the vineyard of Naboth, whither he is gone down to possess it.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And thou shalt speak unto him, saying, Thus saith the Lord, '),
                hp('Hast thou killed, and also taken possession', 'elijah-charge'),
                t('? And thou shalt speak unto him, saying, Thus saith the Lord, In the place where dogs licked the blood of Naboth shall dogs lick thy blood, even thine.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Ahab said to Elijah, Hast thou found me, O mine enemy? And he said, I have found thee: because thou hast '),
                hp('sold thyself to work evil in the sight of the Lord', 'sold-evil'),
                t('.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Behold, I will bring evil upon thee, and will take away thy posterity, and will cut off from Ahab him that pisseth against the wall, and him that is shut up and left in Israel,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'elijah-charge',
          html:
            'God sends Elijah to confront Ahab. The prophet finds him in the vineyard—already taking possession of what he coveted. And Elijah speaks the Word of the Lord with devastating clarity: "Hast thou killed, and also taken possession?" The charge is not accusation but fact. In God&apos;s sight, the deed is done. Naboth is dead, and Ahab is his killer.',
        },
        {
          kind: 'commentary',
          id: 'sold-evil',
          html:
            'Elijah&apos;s word reaches deeper than the external act. Ahab has "sold himself to work evil in the sight of the Lord." He has made a covenant with his own desire. He wanted something he could not have, and rather than submit to the boundary, he allowed his wife to break it for him. He became complicit. He sold his soul—the integrity of the Lord&apos;s anointed—for a garden.',
        },
        {
          kind: 'commentary',
          id: 'dogs-blood',
          html:
            'The judgment is delivered with poetic precision: In the place where dogs licked the blood of Naboth shall dogs lick thy blood. The innocent victim&apos;s blood cries out from the ground. And the same ground will drink the blood of the king. Justice is not delayed. The innocent are vindicated. God hears what the courts deny.',
        },
        {
          kind: 'greek',
          id: 'logos-word',
          title: 'Logos — "The Word"',
          script: 'λόγος',
          translit: '<strong>Logos</strong> · word; reason; divine speech',
          description:
            'When the prophet speaks, it is not mere speech. It is the Word of the Lord—logos carrying the force of creation, judgment, and truth. In the New Testament, Jesus is called the Logos, the Word made flesh. The prophet Elijah speaks that same Word when he confronts Ahab. The Word of God accomplishes what it sets out to do.',
        },
        {
          kind: 'christ',
          id: 'vineyard-christ-connection',
          title: 'Christ Connection — The True Vineyard',
          html:
            'Jesus calls Himself the vine and His Father the vinedresser: "I am the true vine, and my Father is the husbandman" (John 15:1). The vineyard is the place of God&apos;s care, His blessing, His fruitfulness. Christ is that vineyard—the one who bears the fruit God desires. And unlike Naboth, Christ could not be seized unjustly. When He was crucified, He gave Himself. "No man taketh it from me, but I lay it down of myself" (John 10:18). He chose the cross. He was never the victim of covetousness. He is the King who rules not through seizure but through self-offering. And unlike Ahab, Christ did not need what was not His. He had all things.',
        },
        {
          kind: 'carry',
          html:
            'Elijah, a prophet facing a king, speaks truth without fear. He does not negotiate. He does not soften his message. He does not flinch. He calls murder murder. He calls evil evil. And he stands in the presence of power and declares the Word of the Lord. This is what faithfulness looks like when the stakes are highest. When do you remain silent in the face of injustice? What would it take for you to speak as Elijah spoke?',
        },
        {
          kind: 'reflection',
          id: 'elijah-confronts',
          prompt: 'Elijah confronted the king directly. What would it take for you to speak truth to power in your own life? What fears stop you?',
        },
      ],
    },

    /* ─── 1 Kings 21:22–29 — Ahab's Repentance ────────────────────── */
    {
      ref: '1 Kings 21:22–29',
      title: 'Ahab Repents—and God Answers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(22, 'And I will make thine house like the house of Jeroboam the son of Nebat, and like the house of Baasha the son of Ahijah, for the provocation wherewith thou hast provoked me to anger, and made Israel to sin.'),
            plain(23, 'And of Jezebel also spake the Lord, saying, The dogs shall eat Jezebel by the wall of Jezreel.'),
            plain(24, 'Him that dieth of Ahab in the city the dogs shall eat; and him that dieth in the field shall the fowls of the air eat.'),
            {
              number: 25,
              spans: [
                t('But there was none like unto Ahab, which did sell himself to work evil in the sight of the Lord, whom Jezebel his wife stirred up.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And he did very abominably in following idols, according to all things as did the Amorites, whom the Lord cast out before the children of Israel.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And it came to pass, when Ahab heard these words, that he '),
                hg('rent his clothes', 'ahab-repent'),
                t(', and put sackcloth upon his flesh, and fasted, and lay in sackcloth, and went softly.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And the word of the Lord came to Elijah the Tishbite, saying,'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Seest thou how Ahab humbleth himself before me? because he humbleth himself before me, I will not bring the evil in his days: but in his son&apos;s days will I bring the evil upon his house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judgment-declared',
          html:
            'Elijah speaks a judgment that is final and terrible. Ahab&apos;s house will be destroyed like the house of Jeroboam, like the house of Baasha—dynasties that rose and fell. His dynasty will end. And Jezebel, the architect of Naboth&apos;s murder, will be eaten by dogs at the wall of Jezreel. The judgment is not merciful. It is complete.',
        },
        {
          kind: 'commentary',
          id: 'ahab-repent',
          html:
            'And then Ahab does something unexpected. He hears the Word of the Lord—not disputed, not questioned, but received. And he tears his clothes. He puts on sackcloth. He fasts. He goes softly. These are the signs of repentance, of a man broken before God. Ahab, the king, the man who coveted and killed, chooses to humble himself.',
        },
        {
          kind: 'commentary',
          id: 'god-merciful',
          html:
            'God sees this repentance—and though He has spoken judgment, He sees the humbling and relents. Not entirely. The evil will still come upon Ahab&apos;s house. But it will not come in Ahab&apos;s lifetime. It will fall upon his son. The evil king, the one who "sold himself to work evil," receives mercy because he humbled himself.',
        },
        {
          kind: 'hebrew',
          id: 'kanaf-softly',
          title: 'Kanaf — "To Go Softly"',
          script: 'כָּנַף',
          translit: '<strong>Kanaf</strong> (related) · to go humbly; to walk in submission',
          description:
            'The word "went softly" carries the sense of walking humbly, of moving with the posture of one who has been broken. Ahab is no longer the king who demands. He is a man who has seen his own evil and cannot stand upright before God.',
        },
        {
          kind: 'christ',
          id: 'repentance-mercy-connection',
          title: 'Christ Connection — Mercy on Repentance',
          html:
            'In the Gospel of Luke, Jesus tells the story of the tax collector who went to the temple and beat his chest, saying, "God, be merciful to me a sinner" (Luke 18:13). Jesus says of this man: "This man went down to his house justified rather than the other." Even a sinner, even a man like Ahab who has done terrible evil, receives mercy when he repents. Not because he deserves it. Not because the evil is undone. But because God delights in the return of the lost. Christ came into the world not to condemn, but to save. And the moment a sinner turns toward God and humbles himself, that moment is met with mercy.',
        },
        {
          kind: 'carry',
          html:
            'We live in a time when judgment is swift and permanent. A man makes a mistake, and society condemns him forever. Yet Ahab—the king who murdered an innocent man for a garden—receives mercy because he repented. This does not erase his guilt. Naboth remains dead. The evil still comes upon his house. But his own death is delayed. His own destruction is deferred. This is the logic of grace: not that the consequence disappears, but that it is met with mercy. Are you willing to repent? Are you willing to let someone else repent? Are you willing to believe that a broken heart still moves God?',
        },
        {
          kind: 'reflection',
          id: 'ahab-repent',
          prompt: 'Ahab, even after his great evil, was given time when he repented. Is there something you need to repent of? What would it look like to humble yourself as Ahab did?',
        },
      ],
    },
  ],
};
