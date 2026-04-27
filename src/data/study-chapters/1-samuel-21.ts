import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 21 — David at Nob and Gath
 *
 * Fleeing from Saul, David arrives at the priest&apos;s sanctuary in Nob,
 * hungry and weaponless. He eats the hallowed shewbread in an act of
 * necessity that Jesus will later cite to defend His disciples. Goliath&apos;s
 * sword is recovered — a weapon that belonged to an earlier victory. But
 * Doeg the Edomite is watching. When David flees to Gath, he feigns madness
 * to escape notice. The anointed, the one chosen by God, becomes a fugitive
 * hunted among enemies. Yet providence is at work: Psalm 34 comes from this
 * very moment, and the God of the impossible is gathering David in hiding.
 */
export const SAMUEL_1_21: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 21,

  intros: [
    'David is now a fugitive. Saul, jealous and afraid, has set himself against the man God has anointed. In chapter 20, David and Jonathan made a covenant, and David fled. Now, desperate and alone, he comes to Nob, where the high priest Ahimelech tends the sanctuary. David lies to the priest about his mission. He eats bread that was consecrated to God alone. He recovers the sword of Goliath — the very weapon he cut from the Philistine giant — and flees to Gath, where he feigns madness to escape the king&apos;s servants. The anointed of Israel, the man God chose to be king, is now hunted like a criminal in his own land.',
    'This chapter shows David in survival mode. His faith is tested not by a comfortable challenge, but by hunger, fear, and the urgent need to escape. And yet — the narrative moves with a kind of quiet providence. Goliath&apos;s sword reappears, preserved for the day when David would need it. The priest, unknowing, becomes part of God&apos;s plan. A psalm will later come from David&apos;s experience in Gath, a poem that names God&apos;s protection even when we taste the bitterness of exile. This is a chapter about what happens when the one God has chosen becomes the one the world rejects.',
  ],

  opener: {
    matchTitle: /david|nob|gath|sword|goliath/i,
    matchArtist: /tissot|delacroix|rubens/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 21',
    quote:
      'Fleeing from Saul, David came to the priest&apos;s sanctuary at Nob, ate hallowed bread in his hunger, recovered the sword of Goliath, and fled to Gath, where he feigned madness. Yet even in exile, God&apos;s hand was upon him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 21 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 21:1–6 — David at Nob: Bread and Deception ───────────── */
    {
      ref: '1 Samuel 21:1–6',
      title: 'David at Nob',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 1,
              spans: [
                t('Then came David to '),
                hy('Nob', 'c-nob'),
                t(' to Ahimelech the priest: and Ahimelech was '),
                hg('afraid at the meeting of David', 'c-afraid'),
                t(', and said unto him, Why art thou alone, and no man with thee?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nob',
          html:
            'Nob is a city of priests, a sanctuary town where the tabernacle has been moved. It is holy ground, a place where the ordinances of God are kept. David comes to this place not as a worshipper in peace, but as a fugitive in flight.',
        },
        {
          kind: 'commentary',
          id: 'c-afraid',
          html:
            'The priest Ahimelech is afraid. He has recognized David — the famous man, the one Saul fears, the one the people sing about. Ahimelech&apos;s fear is not strange. David arrives alone, which is dangerous. And he is fleeing from the king.',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 2,
              spans: [
                t('And David said unto Ahimelech the priest, The king hath commanded me a business, and hath said unto me, Let no man know any thing of the business whereabout I send thee, and what I have commanded thee: and I have appointed my servants to such and such a place.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lie',
          html:
            'David lies to the priest. He tells Ahimelech that the king has sent him on a secret mission, that no one should know where David is going or what he is doing. The lie is deliberate, artfully constructed. It is not the lie of someone cornered in a moment. It is a lie designed to make the priest believe David has the king&apos;s backing. And Ahimelech, believing it, will help him. But the text does not endorse the lie. It simply reports it. And later, the consequences of this lie will be terrible.',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 3,
              spans: [
                t('Now therefore what is under thine hand? give me five loaves of bread in mine hand, or what there is present.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ask',
          html:
            'David asks for bread. He is hungry. A fugitive has no time to prepare supplies. He eats what is available, what the priest can give him. And Ahimelech, believing the king&apos;s mission covers David&apos;s need, answers.',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 4,
              spans: [
                t('And the priest answered David, and said, There is no '),
                hy('common bread', 'c-common'),
                t(' under mine hand: but there is '),
                hg('hallowed bread', 'c-hallowed'),
                t('; if the young men have kept themselves at least from women.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-common',
          title: 'Common Bread — Everyday Provision',
          script: 'לֶ֫חֶם חֹ֥ל',
          translit: '<strong>lechem chol</strong> · ordinary bread, unholy bread',
          description:
            'The priest has no ordinary bread — no bread for everyday eating. All he has is bread that has been set apart, consecrated to God alone.',
        },
        {
          kind: 'hebrew',
          id: 'c-hallowed',
          title: 'Hallowed Bread — The Shewbread',
          script: 'לֶ֫חֶם הַפָּנִים',
          translit: '<strong>lechem ha-panim</strong> · bread of the presence; showbread',
          description:
            'The shewbread is the bread that stands perpetually before the Lord in the tabernacle. Twelve loaves, arranged in two rows, a loaf for each tribe of Israel. It is holy. Only the priests may eat it, and only when it is removed and replaced. To eat it is to cross a boundary — from the profane into the sacred.',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 5,
              spans: [
                t('And David answered the priest, and said unto him, Of a truth women have been kept from us about these three days since I came out, and the vessels of the young men are holy, though it be but a common business:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-three-days',
          html:
            'David answers with another layer of the lie. He claims that his men have been separated from women for three days — a state of ritual purity. He frames what is about to happen — eating the hallowed bread — as if it were acceptable, as if the men are clean enough, sanctified enough. The lie expands to cover what the lie has made possible.',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 6,
              spans: [
                t('How much more then today shall this be sanctified in the vessel?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-vessel',
          html:
            'The word "vessel" can mean the body — David is suggesting that his men themselves, as vessels of the Lord, are sanctified by their obedience and purity. Therefore, the hallowed bread can be given to them. The reasoning is clever, even plausible. But it is the reasoning of a man making an argument that only works because he needs it to work.',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 6,
              spans: [
                t('So the priest gave him hallowed bread: for there was no bread there but the shewbread, that was taken from before the Lord, to put hot bread in the day when it was taken away.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-decision',
          html:
            'The priest gives the hallowed bread to David. Ahimelech has made a choice — to trust David&apos;s word, to believe that David&apos;s claim of the king&apos;s mission is true, to give what is sacred to one in need. The text notes that the bread being given was the shewbread that had just been taken from before the Lord to be replaced with hot bread. So it is no longer actively standing in the sanctuary, but it is still holy. And it is given.',
        },

        {
          kind: 'christ',
          id: 'shewbread-christ',
          title: 'Christ Connection — Mercy Over Ceremony',
          html:
            'Centuries later, Jesus will cite this very moment to defend His disciples. When the Pharisees accuse Jesus&apos; disciples of plucking grain on the Sabbath — breaking the Law — Jesus answers: "Have ye not read what David did, when he was an hungred, and they that were with him; how he entered into the house of God, and did eat the shewbread, which was not lawful for him to eat, neither for them which were with him, but only for the priests?" (Matt. 12:3–4; see also Mark 2:25–26). And then Jesus says: "But I say unto you, That in this place is one greater than the temple" (Matt. 12:6). David ate the hallowed bread in hunger and need. The disciples plucked grain on the Sabbath in hunger. And Jesus — mercy incarnate — says that hunger, need, and the wholeness of a human being matter more than the letter of the ceremony. The law of the Sabbath and the law of the sanctuary were given to serve life, not to crush it. And Jesus, in his disciples, is claiming that same priority.',
        },

        {
          kind: 'carry',
          html:
            'You may have been taught that rules are absolute, that the boundary between sacred and secular is one you cannot cross. And some boundaries are truly inviolable. But there are moments when the deepest obedience to God is to choose need over protocol, hunger over ceremony, the human being over the regulation. David did not choose carelessly. He chose in desperation. And Jesus affirmed that choice. The question for us is: What have you been taught is forbidden that, in a moment of real need, might actually be merciful?',
        },

        {
          kind: 'reflection',
          id: 'bread-need',
          prompt:
            'Are there areas of your life where you have confused obedience to rules with obedience to God? What would it look like to let mercy guide your understanding of the law?',
        },
      ],
    },

    /* ─── 1 Samuel 21:6–9 — The Witness and the Sword ────────────────────── */
    {
      ref: '1 Samuel 21:6–9',
      title: 'The Sword of Goliath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 7,
              spans: [
                t('(Now a certain man of the servants of Saul was there that day, '),
                hg('detained before the Lord', 'c-detained'),
                t('; his name was '),
                hy('Doeg', 'c-doeg'),
                t(', an Edomite, the chiefest of the herdmen that belonged to Saul.)'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-detained',
          html:
            'Inserted here, almost parenthetically, is a detail of profound consequence: Doeg, one of Saul&apos;s servants, is "detained before the Lord" at Nob. Why he is there, the text does not say. But he is there. He sees David. He sees David eat the hallowed bread. He sees David take Goliath&apos;s sword. And he will remember.',
        },
        {
          kind: 'commentary',
          id: 'c-doeg',
          html:
            'Doeg is an Edomite, a foreigner in Saul&apos;s service — the chief of the herdsmen, a position of trust. He is an observer, a witness. In the next chapter, his presence here will have consequences that neither David nor Ahimelech can imagine at this moment. The God of providence is weaving together not only David&apos;s story but the stories of all who touch it.',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 8,
              spans: [
                t('And David said unto Ahimelech, And is there not here under thine hand spear or sword? for I have neither brought my sword nor my weapons with me, because the king&apos;s business required haste.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-weapons',
          html:
            'David, still building his lie, asks for a weapon. He came to Nob with nothing — no sword, no armor, no means of defense. He is a fugitive, and fugitives travel light. He uses the lie again: the king&apos;s urgent business required that he leave in haste, unprepared. Would the priest have any weapon?',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 9,
              spans: [
                t('And the priest said, The '),
                hy('sword of Goliath the Philistine', 'c-goliath'),
                t(', whom thou slewest in the valley of Elah, behold, it is here wrapped in a cloth behind the ephod: if thou wilt take that, take it: for there is '),
                hg('no other save that here', 'c-only-sword'),
                t('. And David said, There is '),
                hg('none like that', 'c-none-like'),
                t('; give it me.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-goliath',
          title: 'Goliath — The Giant Overcome',
          script: 'גָּלְיָת',
          translit: '<strong>Golyat</strong> · The Philistine giant',
          description:
            'Goliath, the giant of Gath, fell to David&apos;s sling and stone in 1 Samuel 17. Goliath&apos;s sword — massive, fearsome — was taken as spoil and brought to the sanctuary at Nob. It has been kept there, wrapped in cloth, behind the ephod, the sacred vestment of the high priest. David&apos;s earlier victory is preserved for his later need.',
        },
        {
          kind: 'commentary',
          id: 'c-only-sword',
          html:
            'The priest tells David: "There is no other save that here." This sword is the only weapon in the sanctuary. It is not a small thing — it is the blade that belonged to a giant, to the very enemy David once defeated. To hold it again is to remember a victory, to carry an omen forward.',
        },
        {
          kind: 'commentary',
          id: 'c-none-like',
          html:
            'David&apos;s response is immediate and certain: "There is none like that; give it me." He knows this sword. He has heard of it, perhaps seen it, or heard of its power. And he does not hesitate. He takes the sword of Goliath. A weapon forged for a giant, now in the hands of the man who overcame the giant.',
        },

        {
          kind: 'carry',
          html:
            'David&apos;s earlier faith, his earlier obedience, bore fruit — fruit that was preserved for him in a time of desperation. The sword that had hung in the sanctuary, a memory of one victory, became in his hand a tool for survival. God does not waste what we have already overcome. He preserves it, makes it available, lets it become a sign in our hands that we have been this way before and survived. What victory from your past is God preserving, waiting for you to need it again?',
        },

        {
          kind: 'reflection',
          id: 'goliath-sword',
          prompt:
            'What past victories in your life — moments when God came through for you — have been preserved? What would it mean to trust that God is still working through them?',
        },
      ],
    },

    /* ─── 1 Samuel 21:10–15 — David Flees to Gath ─────────────────────────── */
    {
      ref: '1 Samuel 21:10–15',
      title: 'Feigned Madness in Gath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 10,
              spans: [
                t('And '),
                hg('David arose', 'c-david-arose'),
                t(', and '),
                hg('fled that day for fear of Saul', 'c-fled-fear'),
                t(', and went to '),
                hy('Achish', 'c-achish'),
                t(' the king of '),
                hy('Gath', 'c-gath'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-arose',
          html:
            'David leaves Nob — the sanctuary, the holy place, the place where he has eaten sacred bread and taken a mighty sword. Now he runs.',
        },
        {
          kind: 'commentary',
          id: 'c-fled-fear',
          html:
            'David flees "for fear of Saul." Saul is hunting him. The king has power, soldiers, authority. David has nothing but a sword taken from the dead and the clothes on his back.',
        },
        {
          kind: 'hebrew',
          id: 'c-gath',
          title: 'Gath — The City of the Philistines',
          script: 'גַּת',
          translit: '<strong>Gat</strong> · A city of the Philistines, hometown of Goliath',
          description:
            'Gath is a Philistine city — enemy territory. It is the hometown of Goliath, the giant David killed. For David to come to Gath, carrying Goliath&apos;s sword, is supremely dangerous. He is a fugitive in a city full of people who would know his name, know who he is — and know what he did to their giant.',
        },
        {
          kind: 'commentary',
          id: 'c-achish',
          html:
            'Achish is the king of Gath. He is David&apos;s enemy, a ruler whose people hate the Hebrew who killed their champion.',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 11,
              spans: [
                t('And the servants of Achish said unto him, Is not this David the king of the land? did they not sing one to another of him in dances, saying, Saul hath slain his thousands, and David his ten thousands?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-recognition',
          html:
            'David is recognized. The servants of Achish know his name, know his fame. They have heard the women of Israel sing about him in the streets. "Saul hath slain his thousands, and David his ten thousands." David is famous — famous as the man who has slain the Philistines. And he is in the city of the Philistines, standing before their king.',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 12,
              spans: [
                t('And David '),
                hg('laid up these words in his heart', 'c-heart'),
                t(', and was '),
                hg('sore afraid of Achish king of Gath', 'c-afraid-achish'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heart',
          html:
            'David hears the recognition. He understands the danger. His life depends on what Achish decides to do with him now. He is afraid — deeply, intensely afraid.',
        },
        {
          kind: 'commentary',
          id: 'c-afraid-achish',
          html:
            'The text names his fear clearly: "sore afraid." David, the slayer of Goliath, the man the women of Israel sang about, is terrified in front of the enemy king.',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 13,
              spans: [
                t('And he '),
                hg('changed his behaviour', 'c-changed'),
                t(' before them, and '),
                hg('feigned himself mad in their hands', 'c-feigned'),
                t(', and '),
                hg('scrabbled on the doors of the gate', 'c-scrabbled'),
                t(', and '),
                hg('let his spittle fall down upon his beard', 'c-spittle'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-changed',
          html:
            'David changes his behavior entirely. He is no longer the famous warrior, the man the women sing about. He becomes someone else — someone unpredictable, unreliable, dangerous.',
        },
        {
          kind: 'commentary',
          id: 'c-feigned',
          html:
            'The text is careful: he "feigned himself mad" — he pretended to be mad. This is not madness that has overcome him. This is a choice, a strategy, a way of staying alive.',
        },
        {
          kind: 'commentary',
          id: 'c-scrabbled',
          html:
            'David scrabbles on the doors of the gate — scratching, scraping, making wild and meaningless sounds. The behavior of someone not in control, not sane, not a threat in any rational sense.',
        },
        {
          kind: 'commentary',
          id: 'c-spittle',
          html:
            'He lets his spittle fall down upon his beard. A sign of loss of control, of dignity abandoned, of someone too far gone to be a danger to anyone but themselves. The image is vivid and troubling — and it works.',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 14,
              spans: [
                t('Then said Achish unto his servants, Lo, ye see the man is mad: wherefore then have ye brought him to me?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-achish-mad',
          html:
            'Achish sees what David wants him to see. A madman. Not the famous slayer of Goliath, but a madman who is no threat and no use. What would Achish want with a madman?',
        },

        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 15,
              spans: [
                t('Have I need of mad men, that ye have brought this fellow to play the mad man in my presence? shall this fellow come into my house?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-departure',
          html:
            'Achish rejects him. He wants nothing to do with a madman. And David, having feigned madness, escapes. He leaves Gath alive. The strategy worked — not through strength or deception&apos;s exposure, but through a calculated performance that made him appear worthless to his enemy.',
        },

        {
          kind: 'christ',
          id: 'rejected-anointed',
          title: 'Christ Connection — The Anointed Rejected and Hiding',
          html:
            'This moment — David fleeing, hiding, feigning madness in the presence of his enemies — is an image of what the Anointed must sometimes endure. Jesus, the chosen of God, will be hunted by those in power. He will be misunderstood, rejected, forced to hide. David&apos;s experience here — the exile, the desperation, the need to survive by any means necessary — shadows what the Christ will face. And it suggests something about God&apos;s plan: the one God has chosen may not look victorious in this moment. The one God will use to save Israel may look defeated, mad, worthless. And yet God is still working, still preserving, still keeping His anointed alive for the purpose He has chosen. A psalm will come from this very night in Gath — Psalm 34, a song of God&apos;s deliverance and protection even when everything looks lost.',
        },

        {
          kind: 'carry',
          html:
            'There may be a season in your life when you must appear small, insignificant, or hidden. There may be a time when the gifts God has given you cannot be displayed, when your true calling is obscured, when you look to the world like you amount to nothing. David was famous, anointed, chosen — and in Gath he was a madman scratching on gates. But he escaped. He survived. And years later, he was king. The hiddenness you are experiencing may not be your final state. The God who guarded David guards those who belong to Him.',
        },

        {
          kind: 'reflection',
          id: 'feigned-madness',
          prompt:
            'Are you in a season where your gifts, your calling, or your true self cannot be fully expressed or seen? What does it mean to trust that God sees and values you, even when the world cannot?',
        },
      ],
    },
  ],
};
