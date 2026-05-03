import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Samuel 23 — David&apos;s Last Words and His Mighty Men
 *
 * David speaks his final words as an old king — a prophetic vision of the just
 * ruler "as the light of the morning without clouds." Then the chapter lists his
 * mighty men, the warriors who fought beside him. Among their exploits: three of
 * them broke through enemy lines to bring David water from Bethlehem's well, and
 * David refused to drink it, pouring it out as a drink offering unto the Lord.
 * "Is not this the blood of the men that went in jeopardy of their lives?"
 * The chapter ends quietly with Uriah the Hittite's name — the man David murdered.
 * Even a king's glory is shadowed by the price of his sin.
 */
export const SAMUEL_2_23: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 23,

  estimatedMinutes: { beginner: 8, intermediate: 17, deep: 21 },
  intros: [
    'As David approaches the end of his life, the text records his last words — not a political testament, but a vision. He speaks of himself as "the man raised up on high, the anointed of the God of Jacob," and as "the sweet psalmist of Israel." But more than personal reflection, David articulates what he has learned about kingship: "He that ruleth over men must be just, ruling in the fear of God." A ruler who follows God will shine "as the light of the morning, when the sun riseth, even a morning without clouds." This is David&apos;s farewell message about the nature of just rule.',
    'The chapter then turns to the mighty men who made David&apos;s reign possible — warriors of extraordinary courage and strength. Adino, Eleazar, Shammah, Abishai, Benaiah, and a long list of others are named and their exploits recounted. Among these stories is a striking moment of grace: three of David&apos;s men broke through enemy lines to bring him water from the well of Bethlehem. But when he saw what it had cost them, David would not drink it. Instead, he poured it out unto the Lord as a drink offering — a transformation of valor into worship. Yet the chapter closes with an unsettling silence: the last name in the list of mighty men is Uriah the Hittite. No exploit is recorded for Uriah. The text simply names him and moves on. Every reader of David&apos;s story knows what David did to Uriah, and the chapter&apos;s quiet inclusion of that name is a reckoning.',
  ],

  bottomShare: {
    label: 'Share 2 Samuel 23',
    quote:
      'David&apos;s last words speak of a just ruler "as the light of the morning without clouds." But the chapter ends with the name Uriah the Hittite — a reminder that even great kings answer to a Greater King.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 23 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-david-king',
      kind: 'study',
      source: 'Sefaria',
      label: 'David as King of Israel',
      url: 'https://www.sefaria.org/2_Samuel.1',
      description: 'David&apos;s consolidation of power and establishment of monarchy over united Israel.',
    },
    {
      id: 'iaa-city-david',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'City of David Excavations',
      url: 'https://www.antiquities.org.il/',
      description: 'Continuous excavation revealing David-era structures and urban development in Jerusalem.',
    },
    {
      id: 'bible-odyssey-jerusalem',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Jerusalem Captured',
      url: 'https://www.bibleodyssey.org/dictionary/jerusalem/',
      description: 'David&apos;s capture of the Jebusite city and establishment as Israel&apos;s capital.',
    },
  ],

  sections: [
    /* ─── 2 Samuel 23:1–7 — David&apos;s Last Words ──────────────────────── */
    {
      ref: '2 Samuel 23:1–7',
      title: 'David&apos;s Final Vision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 1,
              spans: [
                t('Now these be the last words of David. David the son of Jesse said, and the man who was '),
                hg('raised up on high', 's23-raised-up'),
                t(', the anointed of the God of Jacob, and the sweet psalmist of Israel, said,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('The '),
                hp('Spirit of the Lord', 's23-spirit-spake'),
                t(' spake by me, and '),
                hp('his word was in my tongue', 's23-spirit-spake'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('The God of Israel said, the Rock of Israel spake to me, '),
                hg('He that ruleth over men must be just', 's23-just-ruler'),
                t(', '),
                hg('ruling in the fear of God', 's23-fear-god'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And he shall be as the '),
                hg('light of the morning', 's23-light-morning'),
                t(', when the sun riseth, even a morning without clouds; as the tender grass springing out of the earth by clear shining after rain.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Although my house be not so with God; yet he hath made with me an '),
                hy('everlasting covenant', 's23-covenant'),
                t(', '),
                hg('ordered in all things, and sure', 's23-ordered'),
                t(': for this is all my salvation, and all my desire, although he make it not to grow.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's23-raised-up',
          html:
            'David identifies himself as "the man raised up on high" — one whom God has exalted. He speaks in the third person, with a kind of detachment that befits a man at the end of his life, looking back at what God has made of him. He is "the anointed of the God of Jacob" — set apart by God&apos;s own hand, given a calling. And he is "the sweet psalmist of Israel" — not only a warrior, but a voice, a singer, a man who expressed the soul of his people.[res:sefaria-david-king][res:iaa-city-david][res:bible-odyssey-jerusalem]',
        },
        {
          kind: 'commentary',
          id: 's23-spirit-spake',
          html:
            'This is David&apos;s claim that his words are not merely human words. "The Spirit of the Lord spake by me, and his word was in my tongue." David understands his kingship and his psalms as having been shaped by the Spirit of God. He speaks not only with authority, but with the awareness that something greater than himself has been using him as an instrument.',
        },
        {
          kind: 'hebrew',
          id: 's23-ruach',
          title: 'Ruach — "Spirit" or "Wind"',
          script: 'רוּחַ',
          translit: '<strong>Ruach</strong> · spirit; wind; breath; the Spirit of God',
          description:
            'The word "ruach" carries multiple meanings: the wind that moves across the earth, the breath that animates life, and the Spirit of God that moves through human hearts and minds. When David says "the Spirit of the Lord spake by me," he is claiming that the very breath, the very animating force of God, moved through him. This is not pride; it is David&apos;s understanding of his own role as a conduit for something beyond himself.',
        },
        {
          kind: 'commentary',
          id: 's23-just-ruler',
          html:
            'Here is the heart of David&apos;s final message: "He that ruleth over men must be just." Not powerful. Not wealthy. Not victorious. Just. Ruling with justice — this is the measure of a king. And David is not speaking only of himself. He is articulating a principle that applies to all who rule. The obligation of authority is justice.',
        },
        {
          kind: 'commentary',
          id: 's23-fear-god',
          html:
            'Justice and the fear of God are inseparable. To rule in the fear of God is to acknowledge that earthly authority is accountable to a higher authority. The king is not sovereign unto himself. He rules under God&apos;s law, or his rule becomes tyranny.',
        },
        {
          kind: 'commentary',
          id: 's23-light-morning',
          html:
            'David uses poetry to describe the result of such just rule. "He shall be as the light of the morning, when the sun riseth, even a morning without clouds." The image is of clarity, of warmth, of new life breaking forth. Just rule brings blessing — not from the ruler&apos;s might, but from his alignment with God&apos;s justice. Where there is justice, life grows. It is like grass after rain, like the sun breaking through darkness.',
        },
        {
          kind: 'commentary',
          id: 's23-covenant',
          html:
            'David then speaks of what he has clung to through his life: the everlasting covenant God made with him. This is the Davidic covenant — not conditional on David&apos;s perfect obedience, but sure and enduring. It orders all things for David, and it is what he calls "all my salvation, and all my desire."',
        },
        {
          kind: 'hebrew',
          id: 's23-berit-olam',
          title: 'Berit Olam — "Everlasting Covenant"',
          script: 'בְּרִית עוֹלָם',
          translit: '<strong>Berit olam</strong> · everlasting covenant; eternal bond',
          description:
            'The word "berit" is covenant — a binding agreement sealed with blood, with oath. "Olam" means the age, the eternity, the unending sweep of time. An "everlasting covenant" is not a treaty that expires when one party dies. It reaches forward into time, stable and sure. For David, this covenant is not just a promise about his lineage, but the foundation of his entire understanding of salvation and purpose.',
        },
        {
          kind: 'commentary',
          id: 's23-ordered',
          html:
            'Here David makes a remarkable statement: his house is not "so with God" — meaning his family, his personal life, has not been spotless. He has sinned. He has failed. Yet God has made a covenant with him that is "ordered in all things, and sure." The covenant stands despite David&apos;s failures. God&apos;s promise does not depend on David&apos;s perfection; it depends on God&apos;s faithfulness. This is grace.',
        },
        {
          kind: 'carry',
          html:
            'David&apos;s final words teach us that the true measure of authority is not strength, but justice. When we lead — whether in a family, a workplace, a community — the question is not "How powerful am I?" but "Am I serving those I lead with integrity?" And when we fail, as David did, the hope is not that our failings cancel God&apos;s purpose. The hope is that God&apos;s covenant with us is ordered in all things and sure, regardless of our stumbles.',
        },
        {
          kind: 'reflection',
          id: 'davids-last-words',
          prompt:
            'David recognizes both his own failures and the covenant that sustains him anyway. What does it mean to you that God&apos;s promises to us do not depend on our perfection?',
        },
      ],
    },

    /* ─── 2 Samuel 23:8–17 — The Mighty Men and the Water of Bethlehem ──── */
    {
      ref: '2 Samuel 23:8–17',
      title: 'The Three and the Water of Bethlehem',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 8,
              spans: [
                t('These be the names of the mighty men whom David had: The Tachmonite that sat in the seat, chief among the captains; the same was Adino the Eznite: he lift up his spear against eight hundred, whom he slew at one time.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And after him was Eleazar the son of Dodo the Ahohite, one of the three mighty men with David, when they defied the Philistines that were there gathered together to battle, and the men of Israel were gone away:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('He arose, and smote the Philistines until his hand was weary, and his hand clave unto the sword: and the Lord wrought a great victory that day; and the people returned only to spoil the slain.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And after him was Shammah the son of Agee the Hararite. And the Philistines were gathered together into a troop, where was a piece of ground full of lentils: and the people fled before the Philistines.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('But he stood in the midst of the ground, and defended it, and slew the Philistines: and the Lord wrought a great victory.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2-sam-23-mighty-turn',
          html:
            'Three giants fall before three mighty men. Valor flows from those who tasted the water of Bethlehem and remembered: this is worth the thirst, worth the risk.',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 13,
              spans: [
                t('And three of the thirty chief went down, and came to David in the harvest time unto the cave of Adullam: and the troop of the Philistines pitched in the valley of Rephaim.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And David was then in an hold, and the garrison of the Philistines was then in Bethlehem.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And David said, '),
                hg('Oh that one would give me drink of the water of the well of Bethlehem', 's23-water-longing'),
                t(', which is by the gate!'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the three mighty men brake through the host of the Philistines, and drew water out of the well of Bethlehem, that was by the gate, and took it, and brought it to David: nevertheless he would not drink thereof, but '),
                hp('poured it out unto the Lord', 's23-poured-out'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And he said, '),
                hp('Be it far from me, O Lord, that I should do this', 's23-not-drink'),
                t(': is not this the '),
                hp('blood of the men', 's23-blood-men'),
                t(' that went in jeopardy of their lives? therefore he would not drink it. These things did these three mighty men.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's23-water-longing',
          html:
            'In the midst of listing his mighty men and their deeds, the narrative pauses for a moment of longing. David is in hiding, in the cave of Adullam, while the Philistines camp in the valley nearby. He remembers Bethlehem — his home, the city of his youth. "Oh that one would give me drink of the water of the well of Bethlehem!" It is a casual wish, almost a sigh. He is thirsty, and he remembers the water of home. He does not command anyone to get it. He simply expresses a desire.',
        },
        {
          kind: 'hebrew',
          id: 's23-bethlehem',
          title: 'Beit-Lechem — "House of Bread"',
          script: 'בֵּית לֶחֶם',
          translit: '<strong>Beit-lechem</strong> · house of bread; the city of sustenance',
          description:
            'Bethlehem, where David was born and raised, literally means "house of bread." It is the city of nourishment, of provision. Later, it will be the birthplace of another King — one who will call Himself "the Bread of Life." The water David longs for comes from this place that means bread, from a well of sustenance. This is no accident of the text.',
        },
        {
          kind: 'commentary',
          id: 's23-poured-out',
          html:
            'The three warriors do what David did not ask them to command — they break through the Philistine lines and bring him the water. But when they arrive and offer it to him, David does not drink. Instead, he pours it out unto the Lord. This is a drink offering — a libation, a sacrifice. In the Old Testament ritual, a drink offering was poured out at the base of the altar, not consumed. It was an act of complete dedication, of giving back to God what had been given to you.',
        },
        {
          kind: 'commentary',
          id: 's23-not-drink',
          html:
            'David&apos;s refusal to drink is accompanied by a spiritual conviction: "Be it far from me, O Lord, that I should do this." To drink the water would be to treat it as a mere commodity, a beverage to slake his thirst. But it is not. It is something far more precious.',
        },
        {
          kind: 'commentary',
          id: 's23-blood-men',
          html:
            'David explains his refusal with a metaphor that transforms everything: "Is not this the blood of the men that went in jeopardy of their lives?" The water is not water; it is the lifeblood of the warriors who went to fetch it. They risked their lives to bring it to him. In pouring it out, David is treating it as sacred — as a drink offering that honors the sacrifice his men have made. He cannot consume something that costly without first dedicating it to God.',
        },
        {
          kind: 'christ',
          id: 's23-cup-connection',
          title: 'Christ Connection — The Cup Poured Out',
          html:
            'In the Last Supper, Christ takes a cup of wine and says, "This is my blood of the covenant, which is shed for many" (Mark 14:24). He is about to be poured out — to go into jeopardy of His life, to the point of death. And He offers that sacrifice to His disciples as a drink offering. Later, in the Garden of Gethsemane, He prays, "Not my will, but thine, be done," and asks, "Let this cup pass from me" — but then accepts the cup of suffering. David, refusing to drink the water that cost his men so dearly, foreshadows the Lord of the covenant who will drink the cup of suffering for the salvation of His people. And like David, He will pour Himself out unto the Lord.',
        },
        {
          kind: 'carry',
          html:
            'David teaches us that there are gifts too costly to consume for ourselves. When someone risks themselves for us — in small ways or large — we are called to honor that risk by acknowledging it, by not treating it as trivial. We might pour it out in prayer, in gratitude, in rededication to the One whose grace made it possible. Nothing is too small to be sacred when it is bought with sacrifice.',
        },
        {
          kind: 'reflection',
          id: 'water-bethlehem',
          prompt:
            'When have you received something that cost another person deeply? How did you respond to that gift? What would it look like to honor the sacrifice of others by treating their gift as sacred?',
        },
      ],
    },

    /* ─── 2 Samuel 23:18–39 — The Mighty Men and a King&apos;s Shadow ────── */
    {
      ref: '2 Samuel 23:18–39',
      title: 'The Roll of Mighty Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 18,
              spans: [
                t('And Abishai, the brother of Joab, son of Zeruiah, was chief of three: and he lifted up his spear against three hundred, and slew them, and had the name among three.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Was he not most honourable of three? therefore he was their captain: howbeit he attained not unto the first three.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Benaiah the son of Jehoiada, the son of a valiant man, of Kabzeel, who had done many acts, he slew two lionlike men of Moab: he went down also and slew a lion in the midst of a pit in time of snow:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And he slew an Egyptian, a goodly man: and the Egyptian had a spear in his hand; but he went down to him with a staff, and plucked the spear out of his hand, and slew him with his own spear.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('These things did Benaiah the son of Jehoiada: and he had the name among three mighty men.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('He was more honourable than the thirty, but he attained not to the first three. And David set him over his guard.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's23-three-mighty',
          html: 'The three—Adino, Eleazar, Shammah—stand above all others. Then Abishai and Benaiah, legendary in their own right. These five names anchor the list: men whose feats are recorded, whose valor is named. They rose when others retreated.',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 24,
              spans: [
                t('Asahel the brother of Joab was one of the thirty; Elhanan the son of Dodo of Bethlehem,'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Shammah the Harodite, Elika the Harodite,'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Helez the Paltite, Ira the son of Ikkesh the Tekoite,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2-samuel-23-78mid-1',
          html:
            'David&apos;s last words arrive. Not a battle plan or a speech to the kingdom, but a poem about the Spirit of the Lord speaking through him. The king's final gift is not power, but witness.',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 27,
              spans: [
                t('Abiezer the Anethothite, Mebunnai the Hushathite,'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Zalmon the Ahohite, Maharai the Netophathite,'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Heleb the son of Baanah, a Netophathite, Ittai the son of Ribai out of Gibeah of the children of Benjamin,'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Benaiah the Pirathonite, Hiddai of the brooks of Gaash,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2sam23-thirty-named',
          html:
            'These are the men whose names David refused to forget. The Three stood apart, but the Thirty mattered too — soldiers from a dozen towns, foreigners and Israelites alike, a brotherhood forged in caves before any of them lived in palaces.',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 31,
              spans: [
                t('Abi-albon the Arbathite, Azmaveth the Barhumite,'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Eliahba the Shaalbonite, of the sons of Jashen, Jonathan,'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Shammah the Hararite, Ahiam the son of Sharar the Hararite,'),
              ],
            },
            {
              number: 34,
              spans: [
                t('Eliphelet the son of Ahasbai, the son of the Maachathite, Eliam the son of Ahithophel the Gilonite,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2-samuel-23-78mid-2',
          html:
            'David&apos;s last words arrive. Not a battle plan or a speech to the kingdom, but a poem about the Spirit of the Lord speaking through him. The king's final gift is not power, but witness.',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 35,
              spans: [
                t('Hezrai the Carmelite, Paarai the Arbite,'),
              ],
            },
            {
              number: 36,
              spans: [
                t('Igal the son of Nathan of Zobah, Bani the Gadite,'),
              ],
            },
            {
              number: 37,
              spans: [
                t('Zelek the Ammonite, Naharai the Beerothite, armourbearer to Joab the son of Zeruiah,'),
              ],
            },
            {
              number: 38,
              spans: [
                t('Ira an Ithrite, Gareb an Ithrite,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's23-thirty-names',
          html: 'The roll of the thirty: each name carries its own weight, its own story. Thirty warriors, not as legendary as the three or five, but proven fighters who stood with David through years of wilderness and war. They are more than a list; they are a testimony.',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 39,
              spans: [
                t('And '),
                hg('Uriah the Hittite', 's23-uriah-ends'),
                t(': thirty and seven in all.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's23-abishai',
          html:
            'Abishai, Joab&apos;s brother, slew three hundred men and "had the name among three" — he was renowned among the mighty men. Yet the text notes that "he attained not unto the first three." There is a hierarchy of valor in David&apos;s army. The greatest are singled out; others, though mighty, are less mighty still. This is not diminishment, but recognition of degrees of greatness.',
        },
        {
          kind: 'commentary',
          id: 's23-benaiah',
          html:
            'Benaiah is given more detailed treatment. He slew two lions of Moab. He descended into a pit in winter snow and killed a lion. And he faced an Egyptian "a goodly man" — five cubits tall, carrying a spear like a weaver&apos;s beam — and took the man&apos;s spear from his own hand and slew him with it. These are not realistic battles; they are near-mythological feats. Yet they serve a purpose: to show that the warriors around David are drawn from the greatest fighters in the land, men whose courage and strength approach the legendary.',
        },
        {
          kind: 'commentary',
          id: 's23-roll-names',
          html:
            'What follows is a roll call of names. Asahel, brother of Joab, heads the list of the thirty. Then Elhanan of Bethlehem (interestingly, also from David&apos;s home city). Shammah, Elika, Helez, Ira, Abiezer, Mebunnai, Zalmon, Maharai — name after name, each a warrior, each with a reputation. The accumulation of names is significant. David did not build his kingdom alone. He did not even succeed through virtue of his own arm. These men, dozens of them, each strong, each brave, made David king.',
        },
        {
          kind: 'commentary',
          id: 's23-uriah-ends',
          html:
            'And then the list ends with a single name: "Uriah the Hittite." There is no exploit recorded for Uriah. No story of his strength or valor. The text simply lists his name and says "thirty and seven in all" — Uriah is the thirty-seventh mighty man. Every reader of David&apos;s story carries the weight of this name. Uriah was the husband whose wife David took. Uriah was the man David placed on the front lines of battle so that he would be killed. David murdered Uriah to cover his own sin. And in the roll of honor of David&apos;s mighty men, Uriah is there — silent, unnamed in achievement, but not erased from the record. The chapter closes with Uriah&apos;s name as a quiet indictment. Even the greatest king answers to judgment. Even a man with dozens of mighty men cannot escape the consequence of betraying one.',
        },
        {
          kind: 'carry',
          html:
            'It is tempting to read David&apos;s accomplishments — a kingdom built, mighty men gathered, justice proclaimed — and forget the cost. But Scripture does not let us. The chapter ends with Uriah&apos;s name. This is a reminder that greatness built on exploitation, kingdoms expanded through betrayal, and kingdoms expanded through the sacrifice of the innocent will not stand unchallenged before God. Our accomplishments do not erase our failures.',
        },
        {
          kind: 'reflection',
          id: 'uriah-reckoning',
          prompt:
            'What does it mean to see Uriah&apos;s name listed without explanation, at the end of a roll of honor? What in your own life might be calling for a similar reckoning?',
        },
      ],
    },

    /* ─── Divider ────────────────────────────────────────────────────────── */
    {
      blocks: [{ kind: 'divider' }],
    },

    /* ─── Thematic: The Just Ruler "As Light" ────────────────────────────── */
    {
      title: 'The Just Ruler as Morning Light',
      blocks: [
        {
          kind: 'commentary',
          id: 's23-just-ruler-theme',
          html:
            'David&apos;s final words return again and again to the image of the just ruler: "He that ruleth over men must be just, ruling in the fear of God. And he shall be as the light of the morning, when the sun riseth, even a morning without clouds." This is not a description of David himself. David, for all his faithfulness, has failed in justice. He committed adultery. He murdered. His house is "not so with God." Instead, David is painting a portrait of the kind of ruler God looks for — one who pursues justice, who fears God, and whose reign brings light and life, like the sun breaking over the earth after darkness.',
        },
        {
          kind: 'commentary',
          id: 's23-light-justice',
          html:
            'The connection between justice and light is not arbitrary. Where justice reigns, people can see what is true. They can depend on what is promised. Their lives are not lived in the shadow of fear that the powerful will exploit them. Light exposes what is hidden. A just ruler lets the truth stand. A just ruler does not hide his crimes or blame others for what he himself has done. In this sense, the just ruler is like the sun itself — illuminating the whole landscape, hiding nothing, excluding no one from the light.',
        },
        {
          kind: 'hebrew',
          id: 's23-or',
          title: 'Or — "Light"',
          script: 'אוֹר',
          translit: '<strong>Or</strong> · light; illumination; truth; revelation',
          description:
            'In Hebrew, light is not merely physical illumination. It is often a symbol of truth, life, blessing, and God&apos;s presence. When David says the just ruler "shall be as the light of the morning," he is saying that such a ruler embodies truth and blessing. His presence is clarifying. His reign brings life.',
        },
        {
          kind: 'carry',
          html:
            'If you lead others — in a family, a team, an organization — David asks you: Are you a person of justice? Do you rule in the fear of God, acknowledging that you answer to someone higher? Do you bring light or shadow? A leader who hides truth, who exploits others, who uses power for personal gain, brings shadow. A leader who pursues justice, who tells the truth, who protects the vulnerable, brings light. The question for each day is simple: Am I being light to those I lead, or shadow?',
        },
        {
          kind: 'reflection',
          id: 'light-ruler',
          prompt:
            'What does it mean to you to "rule" (lead) "in the fear of God"? How does the image of the just ruler as morning light challenge or inspire you?',
        },
      ],
    },

    /* ─── Christ Connection ─────────────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'christ',
          id: 's23-christ-light-king',
          title: 'Christ Connection — The Morning Star and the Bread of Life',
          html:
            'David speaks of the just ruler as "the light of the morning without clouds." In Revelation, Christ is called the "Morning Star" (22:16) — the light that breaks the night, that brings the dawn. And when Jesus enters the world, He is born in Bethlehem, the "house of bread" — the very city David longed for in this chapter. Christ is literally the Bread of Life (John 6:35), and He offers to His followers a new covenant, ordered in all things and sure, just as David clung to the everlasting covenant made with him. And like David, Jesus pours Himself out — not as a drink offering at an altar, but as a sacrifice on a cross. "This is my blood of the new covenant," He says, "shed for many." The King who rules in justice is the King who rules from a throne of mercy, whose light illuminates every shadow, and whose sacrifice redeems what sin has broken.',
        },
      ],
    },
  ],
};
