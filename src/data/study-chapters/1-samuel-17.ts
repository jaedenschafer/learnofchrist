import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 17 — David and Goliath
 *
 * The Philistines and Israel face each other across the valley of Elah, but
 * the battle will not be decided by two armies. It will be decided by a single
 * man — a giant named Goliath, armored and defiant. And against him will come
 * a boy with five smooth stones and a sling, armed only with the name of the
 * living God. This is the most famous chapter in the book of Samuel: the story
 * of how the shepherd becomes the champion, and how the battle belongs to the Lord.
 */
export const SAMUEL_1_17: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 17,

  estimatedMinutes: { beginner: 12, intermediate: 23, deep: 27 },
  intros: [
    'The Philistines and Israel stand ready for war. Two armies face each other across the valley of Elah — Philistines on one mountain, Israel on another, with a valley between them. From the Philistine side comes Goliath of Gath, a man so tall he casts a shadow that swallows ordinary men. His armor weighs more than a man. His spear is like a weaver&apos;s beam. He is the Philistine champion, a warrior of war from his youth, and he cries out to Israel: "Give me a man, that we may fight together." No one answers. Israel is dismayed, greatly afraid.',
    'But there is a boy in the camp — the youngest son of Jesse, left behind to tend the sheep. His name is David. And when David hears Goliath&apos;s defiance, something stirs in him that is not fear. He sees a man defying the armies of the living God. And he knows: the battle does not belong to Goliath. It belongs to the Lord.',
  ],

  bottomShare: {
    label: 'Share 1 Samuel 17',
    quote:
      'David came to Goliath with a sling and five smooth stones, saying: "Thou comest to me with a sword, and with a spear, and with a shield: but I come to thee in the name of the Lord of hosts, the God of the armies of Israel." And David prevailed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 17 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 17:1–11 — Goliath's Challenge ─────────────────────── */
    {
      ref: '1 Samuel 17:1–11',
      title: 'A Champion Comes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 1,
              spans: [
                t('Now the Philistines gathered together their armies to battle, and were gathered together at Shochoh, which belongeth to Judah, and pitched between Shochoh and Azekah, in Ephes-dammim.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Saul and the men of Israel were gathered together, and pitched by the valley of Elah, and set the battle in array against the Philistines.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-valley-elah',
          html:
            'The valley of Elah is a real place — archaeologists have walked it, and it still bears the name. But it is not a place of grand strategy. Two armies face each other, and between them lies an open valley. The battle will be decided here, in this narrow space, and not by thousands but by one man.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 3,
              spans: [
                t('And the Philistines stood on a mountain on the one side, and Israel stood on a mountain on the other side: and there was a '),
                hg('valley between them', 'c-valley-between'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-valley-between',
          html:
            'The valley is not filled with soldiers. It is empty. Waiting. And from the Philistine side, a man will step into that emptiness, and call out to Israel. The Philistines and Israel are far apart — yet the valley between them will decide everything.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 4,
              spans: [
                t('And there went out a '),
                hg('champion out of the camp of the Philistines', 'c-champion'),
                t(', named '),
                hy('Goliath', 'hebrew-goliath'),
                t(', of Gath: whose height was six cubits and a span.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-goliath',
          title: 'Goliath — גָּלְיָת',
          script: 'גָּלְיָת',
          translit: '<strong>Goliath</strong> · possibly "exile" or "one who has passed over"',
          description:
            'The name Goliath may derive from a Hebrew root meaning to roll, to pass over, or to exile. Whether or not the etymology is certain, the text makes clear what Goliath is: a man so massive, so armored, so utterly dominant that he seems to have passed beyond the category of ordinary human. He is the exile from mercy.',
        },
        {
          kind: 'commentary',
          id: 'c-champion',
          html:
            'A &quot;champion&quot; in this ancient world was not a winner of contests. He was a man chosen to fight on behalf of the army — a single combatant whose victory or defeat would settle the battle.',
        },
        {
          kind: 'commentary',
          id: 'c-giant-size',
          html:
            'Six cubits and a span — roughly nine feet and nine inches. For context, an ancient cubit was about eighteen inches, and a span about nine inches. Goliath is not merely tall. He is outsized in a way that seems to belong to a different creation altogether. In the ancient world, giants were often associated with the world before the Flood, with chaos, with the enemies of God&apos;s order.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 5,
              spans: [
                t('And he had a helmet of brass upon his head, and he was armed with a coat of mail; and the weight of the coat was five thousand shekels of brass.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And he had greaves of brass upon his legs, and a target of brass between his shoulders.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the staff of his spear was like a weaver&apos;s beam; and his spear&apos;s head weighed six hundred shekels of iron: and one bearing a shield went before him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-armor',
          html:
            'Every piece of Goliath&apos;s armor is metal — helmet, coat of mail, greaves, target. The weight of his coat alone was five thousand shekels of brass, roughly 150 pounds. And his spear — the spear head alone weighed six hundred shekels of iron, about fifteen pounds. He is not just a man. He is a walking fortress. And even he has someone carrying his shield before him — he is so massive that he needs a man just to hold his protection.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 8,
              spans: [
                t('And he stood and cried unto the armies of Israel, and said unto them, Why are ye come out to set your battle in array? am not I a Philistine, and ye servants to Saul? choose you a man for you, and let him come down to me.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('If he be able to fight with me, and to kill me, then will we be your servants: but if I prevail against him, and kill him, then shall ye be our servants, and serve us.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the Philistine said, I '),
                hp('defy the armies of the living God', 'defiance-of-god'),
                t(' this day; give me a man, that we may fight together.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'defiance-of-god',
          html:
            'This is the heart of Goliath&apos;s challenge. He does not simply defy Israel. He defies the armies of the living God. He stands in the valley and cries out: "I defy the God of Israel." His words are not merely military — they are theological. He is saying: your God is not strong enough to defend you. Your God cannot give you a man to stand against me. Give up.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 11,
              spans: [
                t('When Saul and all Israel heard those words of the Philistine, they were '),
                hg('dismayed, and greatly afraid', 'c-afraid'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-afraid',
          html:
            'Israel does not answer. Saul, the king anointed by Samuel, does not step forward. And Israel is "dismayed, and greatly afraid." For forty days, Goliath will come out morning and evening, and repeat his defiance. For forty days, Israel will be silent. Saul is king, but Saul has no answer to Goliath.',
        },

        {
          kind: 'reflection',
          id: 'reflect-defiance',
          prompt:
            'What giants in your own life — what overwhelming obstacles, what voices of defiance — seem to have won simply because no one has answered them? What would it look like to answer, as David will?',
        },
      ],
    },

    /* ─── 1 Samuel 17:12–30 — David Hears the Challenge ────────────────── */
    {
      ref: '1 Samuel 17:12–30',
      title: 'A Boy Comes to the Camp',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 12,
              spans: [
                t('Now '),
                hg('David was the son of that Ephrathite', 'c-david-origin'),
                t(' of Bethlehem-judah, whose name was Jesse; and he had eight sons: and the man went among men for an old man in the days of Saul.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the three eldest sons of Jesse went and followed Saul to the battle: and the names of his three sons that went to the battle were Eliab the firstborn, and next unto him Abinadab, and the third Shammah.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And David was the youngest: and the three eldest followed Saul.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-origin',
          html:
            'David is an Ephrathite of Bethlehem — the same Bethlehem where Ruth and Boaz bore Obed, where the line of Jesus will be born. Jesse has eight sons, and David is the youngest. In the eyes of his household, he is the one left behind.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 15,
              spans: [
                t('But '),
                hg('David went back and forth from Saul', 'c-back-forth'),
                t(' to feed his father&apos;s sheep at Bethlehem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-back-forth',
          html:
            'David is not a warrior in the camp. He is a shepherd. His father has sent him back and forth — he plays the harp for Saul when Saul is troubled by the evil spirit (as the text mentioned in chapter 16), and then he goes back to Bethlehem to tend the sheep. He belongs to two worlds: the court of the king and the pasture of the flock.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 16,
              spans: [
                t('And the Philistine drew near morning and evening, and presented himself forty days.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 17,
              spans: [
                t('And Jesse said unto David his son, Take now for thy brethren an ephah of this parched corn, and these ten loaves, and run to the camp to thy brethren;'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And carry these ten cheeses unto the captain of their thousand, and look how thy brethren fare, and take their pledge.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sent',
          html:
            'Jesse sends David to the camp with food — parched corn, loaves of bread, cheeses. A father&apos;s simple errand. Bring food to your brothers. See how they are. Take a token (probably something of value) from them to prove you have done this. It is domestic, ordinary. No one knows that David is being sent straight into the moment that will reshape Israel.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 19,
              spans: [
                t('Now Saul, and they, and all the men of Israel, were in the valley of Elah, fighting with the Philistines.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And David rose up early in the morning, and left the sheep with a keeper, and took, and went, as Jesse had commanded him; and he came to the trench of the camp as the host was going forth to the fight, and shouted for the battle.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-early',
          html:
            'David rises early. The shepherd &apos;s rhythm — he knows dawn. He leaves the sheep with a keeper, and runs to the camp. The armies are going forth to the fight, and David arrives at the moment of maximum tension, when the two nations are shouting for battle.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 21,
              spans: [
                t('For Israel and the Philistines had put the battle in array, army against army.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And David left his carriage in the hand of the keeper of the carriage, and ran into the army, and came and saluted his brethren.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And as he talked with them, behold, there came up the champion, the Philistine of Gath, Goliath by name, out of the armies of the Philistines, and spake according to the same words: and David heard them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heard-goliath',
          html:
            'David has just arrived. He sets down his supplies, greets his brothers — and in that moment, Goliath comes out. The timing is not coincidence. David hears Goliath&apos;s defiance fresh, unburdened by the forty days of fear that have weighed on Israel. He hears the words as a shepherd hears them, not as a soldier afraid for his life.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 24,
              spans: [
                t('And all the men of Israel, when they saw the man, fled from him, and were sore afraid.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And the men of Israel said, Have ye seen this man that is come up? surely to defy Israel is he come up: and it shall be, that the man who killeth him, the king will enrich him with great riches, and will give him his daughter, and make his father&apos;s house free in Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-reward',
          html:
            'Israel has been afraid so long that they have begun to speak of a reward for anyone who can kill Goliath — great riches, the king&apos;s daughter, freedom from taxation. But no one steps forward. Fear is not moved by promises. Fear is moved only by something stronger than fear.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 26,
              spans: [
                t('And David spake to the men that stood by him, saying, '),
                hp('What shall be done to the man that killeth this Philistine', 'c-question'),
                t(', and '),
                hp('taketh away the reproach from Israel', 'c-reproach'),
                t('? for '),
                t('who is this uncircumcised Philistine'),
                t(', that he should '),
                hg('defy the armies of the living God', 'c-defiance-david'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-question',
          html:
            'David asks the men around him a question. He does not ask about the riches or the king&apos;s daughter. He asks: what shall be done to the man that killeth this Philistine? He is asking not for himself, but testing the waters. He is asking as if the possibility had not occurred to anyone.',
        },
        {
          kind: 'commentary',
          id: 'c-reproach',
          html:
            'David speaks of the "reproach" on Israel — the shame, the disgrace. Goliath has defied Israel, and Israel has been silent. That silence is a wound. And David, though he has just arrived, feels it as keenly as if he had been there all forty days.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-uncircumcised',
          title: 'Uncircumcised — עָרֵל (Arel)',
          script: 'עָרֵל',
          translit: '<strong>Arel</strong> · uncircumcised; set apart from the covenant',
          description:
            'David does not call Goliath a giant. He calls him uncircumcised. The word carries the weight of covenant — this Philistine has no covenant with the God of Israel, no sign of the people of God. He is set apart, not by size, but by his separation from the God of Abraham.',
        },
        {
          kind: 'commentary',
          id: 'c-defiance-david',
          html:
            'David repeats Goliath&apos;s own words: "Who is this uncircumcised Philistine, that he should defy the armies of the living God?" But where Goliath said it as a threat, David says it as a question. A question that suggests an answer: that such a defiance should not be tolerated.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 27,
              spans: [
                t('And the people answered him after this manner, saying, So shall it be done to the man that killeth him.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Eliab his eldest brother heard when he spake unto the men; and Eliab&apos;s anger was kindled against David, and he said, Why camest thou down hither? and with whom hast thou left those few sheep in the wilderness? I know thy pride, and the naughtiness of thine heart; for thou art come down that thou mightest see the battle.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eliab-anger',
          html:
            'Eliab, David&apos;s eldest brother, is a soldier in the army. He has been afraid of Goliath for forty days. And now his youngest brother has arrived, asked a simple question, and the men have answered. Eliab&apos;s anger is kindled. He accuses David of pride, of wanting to see the battle. Eliab cannot see that his brother has just shown what none of the soldiers could show: a response to Goliath other than fear.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 29,
              spans: [
                t('And David said, What have I now done? Is there not a cause?'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And he turned from him toward another, and spake after the same manner: and the people answered him again after the former words.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cause',
          html:
            '"Is there not a cause?" David does not defend himself against Eliab&apos;s accusations. He simply responds: is there not a cause? Is there not a reason to speak? Is Goliath&apos;s defiance of the living God not a cause worth speaking about? And the people agree. They tell him again: the man who kills Goliath shall receive great rewards.',
        },

        {
          kind: 'carry',
          html:
            'You may find yourself in a situation where fear has settled so deeply that it looks like wisdom. Where soldiers have stood silent for forty days, and their silence has become the normal. And you may speak a truth, ask a question, suggest a possibility — and be met with anger from those who have accepted the fear. The anger does not mean you are wrong. It means you have said something they needed to hear but cannot yet believe.',
        },

        {
          kind: 'reflection',
          id: 'reflect-eliab',
          prompt:
            'When has someone accused you of pride or wrong motives when you were actually trying to do something right? How did you respond, and what did you learn?',
        },
      ],
    },

    /* ─── 1 Samuel 17:31–40 — David Refuses the Armor ────────────────── */
    {
      ref: '1 Samuel 17:31–40',
      title: 'Saul&apos;s Armor and David&apos;s Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 31,
              spans: [
                t('And when the words were heard which David spake, they rehearsed them before Saul: and he sent for him.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And David said to Saul, Let no man&apos;s heart fail because of him; thy servant will go and fight with this Philistine.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-offer',
          html:
            'David comes before the king. He does not wait to be asked if he will fight. He simply offers: "Let no man&apos;s heart fail because of him; thy servant will go and fight with this Philistine." He speaks as a servant, but he speaks with absolute certainty. Not "I will try," but "I will go and fight."',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 33,
              spans: [
                t('And Saul said to David, '),
                hg('Thou art not able to go against this Philistine', 'c-saul-doubt'),
                t(' to fight with him: for thou art but a youth, and he a man of war from his youth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-doubt',
          html:
            'Saul looks at David and sees what the world sees: a youth, not a man of war. Saul is tall (taller than all the people from his shoulders upward, as the text said in chapter 10), and he knows the difference between a youth and a warrior. He tries to discourage David with reason.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 34,
              spans: [
                t('And David said unto Saul, '),
                hy('Thy servant kept his father&apos;s sheep', 'c-shepherd'),
                t(': and there came a lion, and a bear, and took a lamb out of the flock:'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And I went out after him, and smote him, and delivered it out of his mouth: and when he arose against me, '),
                t('I caught him by his beard'),
                t(', and smote him, and slew him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shepherd',
          html:
            'David answers Saul not with words about faith, but with a testimony. "Thy servant kept his father&apos;s sheep." He is a shepherd. And a shepherd&apos;s first duty is to protect the flock.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-beard',
          title: 'By His Beard — זָקָן (Zaqan)',
          script: 'זָקָן',
          translit: '<strong>Zaqan</strong> · beard; the mark of a man&apos;s strength and dignity',
          description:
            'When David caught the lion by its beard, he grabbed hold of the thing that marks a creature&apos;s power and dignity. To catch something by the beard is to seize it at the point of its strength. David is not speaking theoretically. He has faced beasts that would kill a man, and he has prevailed.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 36,
              spans: [
                t('Thy servant slew both the lion and the bear: and this '),
                hg('uncircumcised Philistine', 'c-faith-uncircumcised'),
                t(' shall be as one of them, seeing he hath '),
                hp('defied the armies of the living God', 'c-faith-defiance'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-faith-uncircumcised',
          html:
            'David compares Goliath to the beasts he has killed. The comparison is not about size. It is about the covenant. A lion and a bear are creatures of the wild. Goliath is uncircumcised — set apart from God&apos;s covenant. And David has killed creatures that seemed stronger than any man. The Philistine will be no different.',
        },
        {
          kind: 'commentary',
          id: 'c-faith-defiance',
          html:
            'This is the turning point in David&apos;s testimony. He moves from what he has done to what God has done. "He hath defied the armies of the living God." The defiance is the issue. And God cannot accept such defiance forever.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 37,
              spans: [
                t('The Lord that delivered me out of the paw of the lion, and out of the paw of the bear, he will deliver me out of the hand of this Philistine.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-delivered',
          html:
            'David&apos;s faith rests on a simple pattern: the Lord has delivered him before; the Lord will deliver him again. His past experience of God&apos;s protection is the foundation of his present courage. This is not blind faith. This is faith grounded in memory.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 38,
              spans: [
                t('And Saul said unto David, Go, and the Lord be with thee.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('And Saul armed David with his armour, and put a helmet of brass upon his head, also armed him with a coat of mail.'),
              ],
            },
            {
              number: 40,
              spans: [
                t('And David girded his sword upon his armour, and assayed to go; for he had not proved them. And David said to Saul, I cannot go with these; for '),
                hp('I have not proved them', 'c-not-proved'),
                t('. And David put them off.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-not-proved',
          html:
            'Saul gives David his own armor — the armor of a king, the armor that should protect. But David cannot move in it. He has not tested it, does not know its weight, does not fit in it. And in a moment of extraordinary faith, David takes it off. He refuses the apparatus of power. He chooses instead what he knows: his staff, his sling, five smooth stones.',
        },

        {
          kind: 'christ',
          id: 'christ-armor',
          title: 'Christ Connection — Refusing False Armor',
          html:
            'Paul will later write to the Ephesians about the "armor of God" — truth, righteousness, faith, the helmet of salvation, the sword of the Spirit (Ephesians 6:10–18). These are not the armor Saul offered. They are not heavy, external apparatus. They are the interior realities of a soul rooted in God. David&apos;s refusal of Saul&apos;s armor prefigures a deeper principle: that what protects us in our true battle — our battle against sin, against the power of darkness — is not borrowed from the world&apos;s arsenal. It is the living God Himself, internalized, made real in our own hearts through faith and obedience.',
        },

        {
          kind: 'carry',
          html:
            'You may be in a situation where someone offers you their armor — their methods, their weapons, their ways of fighting. The armor may be solid, may come from someone you respect, may seem like the right thing to use. But if it is not yours, if you have not tested it, if it does not fit who you are, you will move in it like David moved in Saul&apos;s coat of mail. You will be weighted down. You will not be able to move. The true strength you have — the faith you have built through your own experience of God, the skills and gifts that are actually yours — that is what you need. That is what will serve you when the moment comes.',
        },

        {
          kind: 'reflection',
          id: 'reflect-armor',
          prompt:
            'What "armor" have you been given by others — methods, advice, ways of doing things — that don&apos;t actually fit you? What are you carrying that you need to set down?',
        },
      ],
    },

    /* ─── 1 Samuel 17:40–51 — The Stone in the Forehead ────────────────── */
    {
      ref: '1 Samuel 17:40–51',
      title: 'The Battle Belongs to the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 40,
              spans: [
                t('And he took his staff in his hand, and chose him five smooth stones out of the brook, and put them in a shepherd&apos;s bag which he had, even in a scrip; and his '),
                hy('sling was in his hand', 'c-sling'),
                t(': and he drew near to the Philistine.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-eben',
          title: 'Stone — אֶבֶן (Eben)',
          script: 'אֶבֶן',
          translit: '<strong>Eben</strong> · stone; solid, enduring, a foundation',
          description:
            'The stones David chooses are "smooth" — not the jagged rocks scattered on a battlefield, but stones worn smooth by water. They are chosen with care. David does not grab in desperation. He selects five stones from the brook, each one selected for its fitness, its balance, its potential.',
        },
        {
          kind: 'commentary',
          id: 'c-five-stones',
          html:
            'Why five stones? David does not carry a sword. He carries five weapons. Not "I will use this one and if I miss I am done," but "I have five chances." It is not uncertainty. It is preparedness. It is the difference between fatalism and faith — faith is not passivity, it is careful readiness.',
        },
        {
          kind: 'commentary',
          id: 'c-sling',
          html:
            'A sling was a shepherd&apos;s tool. It was used to protect flocks, to drive away predators. It was not a weapon of war. It was a weapon of care, a tool for defense. David approaches the greatest warrior in the world armed with a shepherd&apos;s tool.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 41,
              spans: [
                t('And the Philistine came on and drew nigh unto David; and the man that bare the shield went before him.'),
              ],
            },
            {
              number: 42,
              spans: [
                t('And when the Philistine looked about, and saw David, '),
                hg('he disdained him', 'c-disdain'),
                t(': for he was but a youth, and ruddy, and of a fair countenance.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-disdain',
          html:
            'Goliath looks at David and is contemptuous. He sees a boy, ruddy, fair of face — not a warrior, but a youth. A shepherd. And in that moment of disdain, Goliath has already lost. He has looked at David and seen nothing of what David actually is.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 43,
              spans: [
                t('And the Philistine said unto David, '),
                hg('Am I a dog', 'c-dog'),
                t(', that thou comest to me with staves? And the Philistine cursed David by his gods.'),
              ],
            },
            {
              number: 44,
              spans: [
                t('And the Philistine said to David, Come to me, and I will give thy flesh unto the fowls of the air, and to the beasts of the field.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dog',
          html:
            'Goliath is insulted. A dog? He is insulted at being challenged by a shepherd with a staff and a sling. But his insult contains a truth he does not intend: dogs are faithful. Dogs are loyal. The shepherd who comes with a staff is more like a dog than like a warrior. And a dog&apos;s loyalty to its master is what will serve David here.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 45,
              spans: [
                t('Then said David to the Philistine, '),
                hp('Thou comest to me with a sword, and with a spear, and with a shield', 'c-goliath-weapons'),
                t(': but '),
                hp('I come to thee in the name of the Lord of hosts', 'c-davids-name'),
                t(', the God of the armies of Israel, whom thou hast defied.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-goliath-weapons',
          html:
            'David catalogs Goliath&apos;s weapons. Sword, spear, shield. All visible. All physical. All the apparatus of war that Saul offered to give him. And David refuses to compete on that ground.',
        },
        {
          kind: 'commentary',
          id: 'c-davids-name',
          html:
            'Instead, David speaks his own armament: "I come to thee in the name of the Lord of hosts, the God of the armies of Israel." He does not come in his own name. He comes in the name of the God of armies. He comes as a representative, as an instrument, as a servant of the living God.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 46,
              spans: [
                t('This day will the Lord deliver thee into mine hand; and I will smite thee, and take thine head from thee; and I will give the carcases of the host of the Philistines this day unto the fowls of the air, and to the wild beasts of the earth; that '),
                hp('all the earth may know that there is a God in Israel', 'c-knowledge-god'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-knowledge-god',
          html:
            'David speaks the outcome before it happens. Not "I hope," not "I will try," but "This day will the Lord deliver thee into mine hand." And the purpose is not David&apos;s victory. The purpose is that all the earth may know that there is a God in Israel. This is warfare for a theological purpose — to reveal God.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 47,
              spans: [
                t('And all this assembly shall know that the Lord saveth not with sword and spear: for the battle is the '),
                hp('Lord&apos;s', 'battle-lords'),
                t(', and he will give you into our hands.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'battle-lords',
          html:
            'This is the central thesis of the chapter. "The battle is the Lord&apos;s." Not David&apos;s, not Israel&apos;s — the Lord&apos;s. "The Lord saveth not with sword and spear" — salvation and victory come not from the apparatus of war, but from God Himself. And the assembly of Israel will learn this lesson.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 48,
              spans: [
                t('And it came to pass, when the Philistine arose, and came and drew nigh to meet David, that David '),
                hy('hasted, and ran toward the army', 'c-haste'),
                t(' to meet the Philistine.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-haste',
          html:
            'David does not wait. He does not delay. He runs toward Goliath. And this is faith — not passive, but active. Not meek, but bold. David "hasted and ran" toward the thing that terrified all of Israel. And in that haste is the confidence of one who knows who the battle belongs to.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 49,
              spans: [
                t('And David put his hand in his bag, and took thence a stone, and slang it, and smote the Philistine in his '),
                hy('forehead', 'hebrew-forehead'),
                t('; and the stone sunk into his forehead; and he fell upon his face to the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-forehead',
          title: 'Forehead — מֵצַח (Metzach)',
          script: 'מֵצַח',
          translit: '<strong>Metzach</strong> · forehead; the place of boldness, the place where a person meets the world',
          description:
            'The stone strikes the forehead. Not a lucky shot, but a direct hit on the place that faces the world. Goliath&apos;s forehead — the bold, arrogant face he has turned toward Israel for forty days — is where the stone finds its mark. And in that moment, the defiance ends.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 50,
              spans: [
                t('So David prevailed over the Philistine with a sling and with a stone, and smote the Philistine, and slew him; but there was no sword in the hand of David.'),
              ],
            },
            {
              number: 51,
              spans: [
                t('Therefore David ran, and stood upon the Philistine, and took his sword, and drew it out of the sheath thereof, and slew him, and cut off his head therewith. And when the Philistines saw their champion was dead, they fled: and the men of Israel and Judah arose, and shouted, and pursued the Philistines, until thou come to the valley, and to the gates of Ekron.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-victory',
          html:
            'The stone kills Goliath. And David does not leave the body. He stands upon it, takes the giant&apos;s own sword, and uses it to finish what the stone began. The Philistine armies see their champion dead, and they flee. Israel, which has been silent for forty days, now arises and shouts. The armies that were dismayed are now in pursuit. One stone. One shepherd. One act of faith. And all of Israel is transformed.',
        },

        {
          kind: 'christ',
          id: 'christ-stone-sin',
          title: 'Christ Connection — The Stone and the Serpent&apos;s Seed',
          html:
            'Genesis 3:15 prophesies that the seed of the woman will "bruise" the serpent&apos;s head. The word for "bruise" in Hebrew is the same word used for a mortal wound. And in David&apos;s stone striking Goliath&apos;s forehead, the Old Testament reader sees a foreshadowing of that greater victory: Christ, the true David, the one who comes in the name of the Lord of hosts, striking the head of the old serpent, the power of sin and death that holds humanity in fear. Like David, Christ faces the giant not with the weapons of the world, but with the power of God. Like David, He runs toward the thing that would destroy Him. And like David, He prevails. "The battle is the Lord&apos;s," and in the cross, that battle is won. Hebrews 2:14 makes the connection explicit: Christ became human "that through death he might destroy him that had the power of death, that is, the devil." The stone in the forehead becomes, in the New Testament, the cross in history — the place where the old serpent&apos;s reign was broken forever.',
        },

        {
          kind: 'carry',
          html:
            'You may be facing something in your own life that feels as large as Goliath. A fear that has grown over days or months or years. A voice that keeps coming out morning and evening, telling you that you cannot win, that you are not strong enough. And you may think you need armor, weapons, apparatus — the world&apos;s way of fighting. But the truth that David learned, and that the New Testament proclaims, is that the battle does not belong to you. It belongs to the Lord. And the weapons you need are not external but internal — faith grounded in past deliverances, trust in the God of armies, the courage to run toward what frightens you when you know the Lord is with you. The stone is small. The sling is a shepherd&apos;s tool. And yet it is enough, because the battle is the Lord&apos;s.',
        },

        {
          kind: 'reflection',
          id: 'reflect-battle',
          prompt:
            'What "Goliath" in your own life needs to hear that the battle belongs to the Lord? How might your response change if you truly believed that this is God&apos;s battle to fight, not yours to win alone?',
        },
      ],
    },
  ],
};
