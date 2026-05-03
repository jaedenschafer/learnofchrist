import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Samuel 6 — The Ark Brought to Jerusalem
 *
 * David gathers thirty thousand men to bring the ark of God to Jerusalem.
 * But he uses a new cart instead of the Levitical poles — a well-intentioned
 * error that costs Uzzah his life. After three months at Obed-edom&apos;s house,
 * David learns the proper way. He dances before the Lord with all his might,
 * and Michal despises him for his unrestrained joy. The chapter teaches that
 * holiness is not a metaphor, that worship cannot be performed carelessly,
 * and that those who approach God must approach God&apos;s way.
 */
export const SAMUEL_2_6: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 6,

  estimatedMinutes: { beginner: 8, intermediate: 16, deep: 21 },
  intros: [
    'David has been anointed king, Saul is dead, and all Israel is rallying to him. But before David can rule the nation fully, the ark of God must come to Jerusalem. The ark is not merely furniture. It is the sign of God&apos;s presence, the mercy seat where God&apos;s glory dwells. To bring it to the capital is to establish Jerusalem not just as Israel&apos;s political center but as the spiritual center of the nation — the place where God meets His people.',
    'Yet this chapter does not celebrate a simple triumph. David&apos;s first attempt to move the ark fails catastrophically. His motives are good, his ambition is holy, but his method is wrong. Uzzah dies. The ark is left in a stranger&apos;s house. And David must wait three months before he understands what he did wrong. The chapter asks: What does it mean to approach God? Can we come to Him any way we please, or does holiness demand that we come His way?',
  ],

  opener: {
    matchArtist: /rembrandt|tissot|constantine/i,
    matchTitle: /ark|dance|david/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Samuel 6',
    quote:
      'David gathered Israel to bring the ark of God to Jerusalem on a new cart. When the oxen stumbled, Uzzah reached out to steady the ark — and God struck him dead. Holiness is not a metaphor. Three months later, David learned the proper way, and danced before the Lord with all his might.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 6 · Study Guide',
  },

  sections: [
    /* ─── 2 Samuel 6:1–7 — The Ark on a New Cart ─────────────────────── */
    {
      ref: '2 Samuel 6:1–7',
      title: 'The Ark on a New Cart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('Again, David gathered together all the chosen men of Israel, thirty thousand.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And David arose, and went with all the people that were with him from '),
                hy('Baale of Judah', 'c-baale'),
                t(', to bring up from thence the ark of God, whose name is called by the name of the '),
                hp('Lord of hosts', 'c-lord-hosts'),
                t(' that dwelleth between the cherubims.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-baale',
          html:
            'Baale of Judah is another name for Kirjath-jearim, the city where the ark has rested since the days of Samuel. David brings thirty thousand men — an army of worship, a show of strength and honor. The ark has been away from the center of Israel&apos;s religious life for decades. Now David is bringing it home.',
        },
        {
          kind: 'commentary',
          id: 'c-lord-hosts',
          html:
            'The name "Lord of hosts" again — YHWH Tzva&apos;ot, the God of armies. The ark is the throne of the Lord of hosts, the place where the God who commands the heavenly armies makes Himself present to His people. To bring the ark is to bring God&apos;s presence and authority into the city.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 3,
              spans: [
                t('And they set the ark of God upon a '),
                hg('new cart', 'c-new-cart'),
                t(', and brought it out of the house of Abinadab that was in Gibeah: and Uzzah and Ahio, the sons of Abinadab, '),
                hg('drave the new cart', 'c-drove'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And they brought it out of the house of Abinadab which was at Gibeah, accompanying the ark of God: and Ahio went before the ark.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-new-cart',
          html:
            'A new cart. It sounds right — new for the Lord, pristine, honorable. But God had commanded that the ark be carried on the shoulders of the Levites by poles, never to be touched. "This they shall do unto the ark of the covenant: they shall not touch any holy thing" (Numbers 4:15). A cart, no matter how new, is not the way God appointed.',
        },
        {
          kind: 'hebrew',
          id: 'c-drove',
          title: 'The Method Matters',
          script: 'עַל־עֲגָלָה חֲדָשָׁה',
          translit: '<strong>Al agala chadasha</strong> · Upon a new cart',
          description:
            'The Levites were commanded to carry the ark on poles resting on their shoulders (Numbers 4:15, 7:9). This was not a minor detail. It was a matter of holiness. A cart — no matter who drove it, no matter how new — violated the law. David&apos;s error was not malice. It was carefulness misplaced. He sought honor, but bypassed obedience.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 5,
              spans: [
                t('And David and all the house of Israel '),
                hg('played before the Lord', 'c-played'),
                t(' on all manner of instruments made of fir wood, on harps, on psalteries, on timbrels, on cornets, and on cymbals.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-played',
          html:
            'The celebration is joyful. Harps, psalteries, timbrels, cornets, cymbals — every instrument sings. David and all Israel "played before the Lord." The word can mean both "played music" and "made sport" — a festival, a celebration, uninhibited joy. Yet the method underneath is still wrong.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 6,
              spans: [
                t('And when they came to '),
                hy('Nachon&apos;s threshingfloor', 'c-nachon'),
                t(', Uzzah put forth his hand to the ark of God, and '),
                hg('took hold of it', 'c-took-hold'),
                t('; for the oxen '),
                t('shook it'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the anger of the Lord was kindled against Uzzah; and God '),
                hg('smote him there for his error', 'c-smote'),
                t('; and he died there by the ark of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nachon',
          html:
            'Nachon&apos;s threshingfloor — a place of harvest, a place of separation (the chaff from the wheat). The name means "to prepare" or "to be ready." It is here that what is prepared (the ark on the cart) is tested.',
        },
        {
          kind: 'commentary',
          id: 'c-took-hold',
          html:
            'The oxen shook the ark — perhaps stumbling, perhaps being startled. And Uzzah, seeing the ark about to fall, instinctively reaches out to steady it. The impulse is human. The action is fatal. No one is permitted to touch the ark, not even to save it.',
        },
        {
          kind: 'commentary',
          id: 'c-smote',
          html:
            'God smote him. The text does not soften. It does not explain Uzzah&apos;s heart or intention. Uzzah was a good man, no doubt, raised in the house where the ark rested. But holiness is not a metaphor. The boundary is real. And when a boundary is crossed — even with the best of intentions — there are consequences.',
        },
        {
          kind: 'hebrew',
          id: 'uzzah-death',
          title: 'Perez-Uzzah — The Breach of Uzzah',
          script: 'פֶּרֶץ עֻזָּה',
          translit: '<strong>Perez-Uzzah</strong> · Breach of Uzzah',
          description:
            'The place is renamed Perez-Uzzah — "the breach of Uzzah" — a memorial to the death, the breaking, the violation of the boundary. It stands as a warning. The text calls it "Perez-uzzah to this day" — generations will remember that a man died here because he touched what he was not permitted to touch.',
        },

        {
          kind: 'carry',
          html:
            'The fear of the Lord is the beginning of wisdom. Uzzah learned this too late. His death is not a comfortable story. It asks us: Are there boundaries with God that are real? Can we approach Him any way we want, or does He require that we come His way? We live under grace, not law — but grace does not mean the absence of boundaries. It means that God has provided a way, and He asks us to walk in it.',
        },
        {
          kind: 'reflection',
          id: 'uzzah-error',
          prompt:
            'Where in your life have you felt that God&apos;s requirements are too strict, or that your good intentions should be enough? What does it mean to you that holiness is not negotiable?',
        },
      ],
    },

    /* ─── 2 Samuel 6:8–11 — David&apos;s Fear; The Ark at Obed-edom&apos;s House ─ */
    {
      ref: '2 Samuel 6:8–11',
      title: 'The Ark at Obed-edom&apos;s House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 8,
              spans: [
                t('And David was '),
                hg('displeased', 'c-displeased'),
                t(', because the Lord had made a breach upon Uzzah: and he called the name of the place '),
                t('Perez-uzzah'),
                t(' to this day.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And David was '),
                hg('afraid of the Lord', 'c-afraid'),
                t(' that day: and said, '),
                hg('How shall the ark of the Lord come to me?', 'c-come-to-me'),
                t(''),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-displeased',
          html:
            'David is displeased — angry, upset, perhaps grieving for Uzzah. The king of Israel has just lost a man on his mission. But the word carries another meaning: he is broken, shattered. The ease he expected has shattered against the reality of holiness.',
        },
        {
          kind: 'commentary',
          id: 'c-afraid',
          html:
            'And David is afraid. Not the fear of failure or loss, but the fear of the Lord — the realization that God is not safe, that approaching Him requires a kind of reverence and obedience that David had not fully grasped. The fear of the Lord is what wisdom begins with. David is learning it now.',
        },
        {
          kind: 'commentary',
          id: 'c-come-to-me',
          html:
            'David asks: "How shall the ark of the Lord come to me?" It is not a rhetorical question. He genuinely does not know. He has learned that his way was wrong. But he does not yet know the right way. And so he takes the next step: he stops.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 10,
              spans: [
                t('So David would not remove the ark of the Lord unto him into the city of David: but David '),
                hg('carried it aside', 'c-carried-aside'),
                t(' into the house of '),
                hy('Obed-edom the Gittite', 'c-obed-edom'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the ark of the Lord continued in the house of Obed-edom the Gittite '),
                hy('three months', 'c-three-months'),
                t(': and the Lord '),
                t('blessed Obed-edom, and all his household'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-carried-aside',
          html:
            'Instead of bringing the ark to Jerusalem, David carries it aside — to the house of Obed-edom the Gittite. Obed-edom is a foreigner, a man from Gath, yet his house becomes the resting place of the ark. And while the ark dwells there, the Lord blesses him and his household.',
        },
        {
          kind: 'commentary',
          id: 'c-obed-edom',
          html:
            'Obed-edom is described as "the Gittite" — a man from Gath, possibly even a foreigner who had come to trust in Israel&apos;s God. Yet he is deemed worthy to house the ark. The blessing of God is not conditional on national status or prior position. It falls on those who receive it in faith.',
        },
        {
          kind: 'commentary',
          id: 'c-three-months',
          html:
            'Three months. That is how long David waits. Not in despair, but in study. Somewhere in those three months — likely through consultation with the Levites and the law — David learns what he did wrong. He learns that the ark is to be carried on poles, on the shoulders of the Levites. The knowledge comes through waiting, through willingness to be taught.',
        },
        {
          kind: 'hebrew',
          id: 'obed-edom-blessing',
          title: 'The Blessing Overflows',
          script: 'יְהוָה בֵּרַךְ אֶת־בֵּית עוֹבֵד אֱדוֹם',
          translit: '<strong>Yahweh berach et-beit Obed-edom</strong> · The Lord blessed the house of Obed-edom',
          description:
            'The presence of the ark is not a curse to Obed-edom but a blessing. Where holiness dwells, those who receive it in faith are blessed. The lesson: it is not the ark that kills, but the violation of its boundary. Approached rightly, it brings blessing.',
        },

        {
          kind: 'carry',
          html:
            'Sometimes the wisest thing we can do is stop. David could have pushed forward with another cart, another attempt, his own way. Instead, he stopped. He waited. He asked. And in the waiting, God taught him. The blessing that falls on Obed-edom during those three months is a sign: the ark is safe where God is honored.',
        },
        {
          kind: 'reflection',
          id: 'three-months',
          prompt:
            'Have you ever had to stop and wait when things did not go as you expected? What did you learn in the waiting that you could not have learned by pushing forward?',
        },
      ],
    },

    /* ─── 2 Samuel 6:12–15 — David Dances Before the Lord ──────────────── */
    {
      ref: '2 Samuel 6:12–15',
      title: 'David Dances Before the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 12,
              spans: [
                t('And it was told king David, saying, The Lord hath blessed the house of Obed-edom, and all that pertaineth unto him, because of the ark of God. So David went and brought up the ark of God from the house of Obed-edom into the city of David with '),
                hg('gladness', 'c-gladness'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And when they that bare the ark of the Lord had gone six paces, he '),
                hg('sacrificed oxen and fatlings', 'c-sacrifice'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gladness',
          html:
            'David hears that the Lord has blessed Obed-edom. This is his sign. The ark is not cursed; it is a blessing. And now, three months later, David knows the proper way. He goes to bring it up "with gladness" — not with the elaborate festival of before, but with joy mixed with understanding.',
        },
        {
          kind: 'commentary',
          id: 'c-sacrifice',
          html:
            'When they have gone six paces — not rushing, not assuming — David stops to sacrifice. He offers oxen and fatlings. The sacrifices mark each step. This is deliberate, reverent, careful. David is not making the same mistake twice.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 14,
              spans: [
                t('And David '),
                hg('danced before the Lord with all his might', 'c-danced'),
                t('; and David was girded with a '),
                hy('linen ephod', 'c-ephod'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('So David and all the house of Israel brought up the ark of the Lord with shouting, and with the sound of the trumpet.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-danced',
          html:
            'David danced before the Lord with all his might. The Hebrew word <em>raqad</em> means to leap, to skip, to move with the whole body in rhythm. It is an abandonment, an unselfconsciousness of joy. David is not thinking about his dignity as king. He is not thinking about appearance. He is wholly present to the moment, wholly given to worship.',
        },
        {
          kind: 'hebrew',
          id: 'raqad',
          title: 'Raqad — To Dance, To Leap',
          script: 'רָקַד',
          translit: '<strong>Raqad</strong> · To dance, to skip, to leap',
          description:
            'The word raqad appears rarely in Scripture. It is the verb of wholehearted, unguarded movement — the leaping of joy, the skipping of a child. David does not dance decorously. He dances with all his might. This is not the posture of a king. This is the posture of one who has forgotten everything but the presence of the Lord.',
        },
        {
          kind: 'commentary',
          id: 'c-ephod',
          html:
            'David is girded with a linen ephod. The ephod is a priestly garment, worn by those who minister in the sanctuary. David, though a king, clothes himself as a priest, as a servant of the Lord. He has stripped off the trappings of kingship and taken on the simplicity of worship.',
        },
        {
          kind: 'hebrew',
          id: 'ephod-bad',
          title: 'Ephod Bad — The Linen Ephod',
          script: 'אֵפוֹד בָּד',
          translit: '<strong>Ephod bad</strong> · A linen ephod',
          description:
            'The linen ephod was the garment of the priest, woven of fine linen. David puts it on when he dances before the Lord. He is, in that moment, not a king but a worshipper — one who serves, one who is clothed in the simplicity of priestly service.',
        },

        {
          kind: 'carry',
          html:
            'Worship, when it is true, undoes us. It strips away pretense. David danced before the Lord with all his might, and he was a king. But in that moment, the crown was invisible. He was simply a man who loved the God who had called him, and he danced. What would it look like to worship with that kind of wholehearted joy? Not thinking about who sees you, not worrying about your dignity, but simply present to God with all your might?',
        },
        {
          kind: 'reflection',
          id: 'dance-before-lord',
          prompt:
            'What does uninhibited worship look like in your life? What would you have to let go of in order to worship with all your might?',
        },
      ],
    },

    /* ─── 2 Samuel 6:16–19 — Michal&apos;s Contempt ─────────────────────── */
    {
      ref: '2 Samuel 6:16–19',
      title: 'Michal&apos;s Contempt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 16,
              spans: [
                t('And as the ark of the Lord came into the city of David, '),
                hg('Michal Saul&apos;s daughter looked through a window', 'c-michal-window'),
                t(', and saw king David leaping and dancing before the Lord; and she '),
                hg('despised him in her heart', 'c-despised'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-michal-window',
          html:
            'Michal is the daughter of Saul, the first wife of David, a woman of royal blood. She looks through a window — removed, observing from a distance, not part of the celebration. She watches her husband dance, and her response is immediate.',
        },
        {
          kind: 'commentary',
          id: 'c-despised',
          html:
            'She despised him in her heart. The word is strong: <em>bazah</em>, to look down upon, to hold in contempt. What disturbs her? Is it the undignified movement of a king? Is it his willingness to be seen in a way that strips him of royal pretense? Is it the joy itself — joy that is unguarded, uninhibited, raw? The text does not explain. It only records her judgment.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 17,
              spans: [
                t('And they brought in the ark of the Lord, and set it in his place, in the midst of the tabernacle that David had pitched for it: and David offered burnt offerings and peace offerings before the Lord.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And as soon as David had made an end of offering burnt offerings and peace offerings, he blessed the people in the name of the Lord of hosts.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And he dealt among all the people, even among the whole multitude of Israel, as well to the women as men, to every one a cake of bread, and a good piece of flesh, and a flagon of wine: and all the people departed every one to his house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'david-blesses',
          html:
            'The ark is placed in its tent, David offers sacrifices, blesses the people, and distributes bread, meat, and wine to all Israel — women and men alike. There is no division. All are blessed by the king. The festival is complete. But Michal watches from her window, and her heart remains closed.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 20,
              spans: [
                t('Then David returned to bless his household. And '),
                hg('Michal the daughter of Saul came out to meet David', 'c-michal-meet'),
                t(', and said, How glorious was the king of Israel today, who uncovered himself today in the eyes of the handmaids of his servants, as one of the '),
                hy('vain fellows', 'c-vain'),
                t(' shamelessly uncovereth himself!'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-michal-meet',
          html:
            'Michal comes out to meet David. Her words are laced with sarcasm. She speaks of his glory — but means his shame. She speaks of his uncovering himself — and the implication is that he has exposed not just his body but his dignity, his status, the very kingship that should have kept him above such display.',
        },
        {
          kind: 'commentary',
          id: 'c-vain',
          html:
            'She calls him one of the "vain fellows" — those without substance, without restraint. In her view, a king should maintain a certain distance, a certain dignity. What David sees as wholehearted worship, Michal sees as undignified spectacle. They are looking at the same dance and seeing entirely different things.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 21,
              spans: [
                t('And David said unto Michal, It was before the Lord, which chose me before thy father, and before all his house, to appoint me ruler over the people of the Lord, over Israel: therefore will I '),
                hg('play before the Lord', 'c-play-before'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And I will yet be more vile than thus, and will be base in mine own sight: and of the maidservants which thou hast spoken of, of them shall I be had in honour.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-play-before',
          html:
            'David&apos;s answer is clear. He danced before the Lord — not before Michal, not before the people, but before the Lord who chose him. And he will do it again, even more freely, even more without restraint. He is willing to be "vile" in the eyes of those who cannot see worship as worship.',
        },
        {
          kind: 'commentary',
          id: 'david-answer',
          html:
            'David says he will be "base in mine own sight" — willing to lower himself below any standard that Michal holds. He will lay aside dignity before the Lord of hosts. And the maidservants whom Michal spoke of as witnesses to his shame — he will be had in honor among them. Not because he cares for their applause, but because his worship is genuine, and those who worship recognize worship.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 23,
              spans: [
                t('Therefore Michal the daughter of Saul had no child unto the day of her death.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'michal-childless',
          html:
            'The text ends with a statement of fact: Michal bore no children. Whether this is divine judgment or a simple narrative note, the meaning is clear. The line of Saul, which sought to maintain itself through Michal, bore no fruit. The rejection of wholehearted worship had consequences.',
        },

        {
          kind: 'carry',
          html:
            'Michal represents something we all carry: the desire to maintain a certain image, a certain dignity, a certain distance from vulnerability. Worship strips that away. It asks us to be present without pretense. And some part of us, like Michal, resists. We judge the worship of others by the standards we hold for ourselves — standards that often have little to do with the heart and everything to do with what others might think. David chose the Lord over Michal&apos;s judgment. The question is: whom will you choose?',
        },
        {
          kind: 'reflection',
          id: 'michal-rejection',
          prompt:
            'Where in your life do you hold back from wholehearted commitment because of what others might think? What would it cost you to "play before the Lord" without caring who is watching?',
        },
      ],
    },

    /* ─── 2 Samuel 6 — Christ Connection & Themes ──────────────────────── */
    {
      ref: '2 Samuel 6 — The Whole Chapter',
      title: 'Christ Connection — The King Who Danced',
      blocks: [
        {
          kind: 'christ',
          id: 'david-dancing',
          title: 'Christ Connection — The Wholehearted Joy of the Redeemed',
          html:
            'David danced before the Lord with all his might — naked of dignity, clothed in joy. This is the pattern of the redeemed. But Christ is the fulfillment of this pattern. Christ emptied Himself, laid aside the glory that was His due, and became human — lowly, vulnerable, exposed. He danced, so to speak, before His Father&apos;s face, not in triumph but in obedience. And He calls His people to do the same: to lay aside pretense, to abandon the careful guarding of reputation, and to worship with the wholehearted joy that David showed. "Blessed are those who hunger and thirst for righteousness, for they shall be filled" (Matt. 5:6). That hunger, that thirst, that unguarded longing — that is the dance.',
        },
        {
          kind: 'christ',
          id: 'uzzah-christ',
          title: 'Christ Connection — The One Who Bore the Holiness',
          html:
            'Uzzah reached out to steady the ark and died. He touched what he had no authority to touch. But consider: Christ came as the One who has ultimate authority over all things — "all things were created through him, and for him. And he is before all things, and in him all things hold together" (Col. 1:16–17). Yet Christ, who alone had the authority to touch the holiness of God, came willingly to bear what we could not bear. He took upon Himself the weight of holiness — the judgment, the fire, the death — so that we, like Obed-edom, might be blessed in the presence of God. Where Uzzah died, Christ rose. Where the boundary was broken, Christ made a way. The holiness that killed Uzzah became, in Christ, the holiness that saves.',
        },
        {
          kind: 'carry',
          html:
            'The chapter moves from death to blessing to joy. Uzzah dies because the boundary is crossed carelessly. The ark dwells with Obed-edom and blesses him. David learns the right way and dances. And all of this points to Christ. Christ is the One who makes the boundary safe, who brings the blessing, and who dances before His Father with the joy of the redeemed. And He calls you to dance too — not to guard your dignity, not to pretend strength, but to come to Him as you are, and find in His presence the joy that Michal could not see.',
        },
        {
          kind: 'reflection',
          id: 'final-reflection',
          prompt:
            'What is Jesus asking you to let go of so that you can worship with wholehearted joy? What would it look like to approach Him with the reverence of David after the three months of learning — careful, grateful, unburdened?',
        },
      ],
    },
  ],
};
