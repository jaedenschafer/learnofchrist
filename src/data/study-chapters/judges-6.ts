import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 6 — Gideon&apos;s Call
 * Israel under oppression by Midian. The angel calls a hidden thresher
 * "mighty man of valor." Gideon doubts, asks for signs, builds an altar
 * to Jehovah-Shalom. Tears down Baal&apos;s altar. The fleece.
 */
export const JUDGES_6: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 6,

  estimatedMinutes: { 5: 10, 10: 15, 15: 18 },
  intros: [
    'Israel has sinned and fallen into the pattern the book of Judges repeats like a drum: they do evil, God gives them over to enemies, they cry out, God sends a deliverer, the cycle breaks for a time, then begins again. Now Midian has crushed them for seven years. Crops disappear. The people hide in caves. And then God sends an angel to a man named Gideon — and tells him something that will haunt and define him: he is a mighty man of valor.',
    'The word comes to a man threshing wheat in secret, afraid of his own people, the least in his father&apos;s house. God does not call the brave into bravery. He calls the hidden and terrified, and He calls them by what they are not yet. Gideon asks for signs — not once but three times — and God gives them. He tears down his father&apos;s altar to Baal. He builds an altar to the Lord. And in his trembling faithfulness, he becomes the hewer who will break Israel&apos;s chains.',
  ],

  sections: [
    /* ─── Judges 6:1–6 — Israel Under Midian ──────────────────────────── */
    {
      ref: 'Judges 6:1–6',
      title: 'Israel Under Midian',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('And the children of Israel did evil in the sight of the Lord: and the Lord '),
                hy('delivered them into the hand of Midian', 'midian-oppression'),
                t(' seven years.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the hand of Midian prevailed against Israel: and because of the Midianites the children of Israel made them the '),
                hg('dens which are in the mountains', 'c-hiding'),
                t(', and caves, and strong holds.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'midian-oppression',
          html:
            'The pattern in Judges runs like a wheel: Israel does evil, God delivers them to their enemies for a season, then they cry out and He raises a deliverer. Seven years is a full cycle in biblical time — a complete, hard measure of consequence. The people are not merely conquered; they are driven underground.',
        },
        {
          kind: 'commentary',
          id: 'c-hiding',
          html:
            'An entire people hiding in mountain caves. This is what the Bible shows us at the low point — Israel has lost not just security but dignity, forced into dens and shadows while Midianite raiders strip the land.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 3,
              spans: [
                t('And so it was, when Israel had sown, that the Midianites came up, and the Amalekites, and the children of the east, even they came up against them;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And they encamped against them, and destroyed the increase of the earth, till thou come unto Gaza, and left no sustenance for Israel, neither sheep, nor ox, nor ass.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('For they came up with their cattle and their tents, and they came as grasshoppers for multitude; for both they and their camels were without number: and they entered into the land to destroy it.'),
              ],
            },
            {
              number: 6,
              spans: [
                hy('And Israel was greatly impoverished', 'c-poverty'),
                t(' because of the Midianites; and the children of Israel '),
                hp('cried unto the Lord', 'christ-cry'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-poverty',
          html:
            'Israel is "greatly impoverished" — the crop, the livestock, the means of survival itself has been systematically destroyed. They are not just losing battles; they are losing the ability to live.',
        },
        {
          kind: 'carry',
          html:
            'The moment before God moves is often the moment of deepest hunger. When you find yourself stripped of your own resources, when you have run out of solutions and strength, that bare place may be exactly where God is waiting to introduce Himself. Your cry matters. It is heard.',
        },
        {
          kind: 'reflection',
          id: 'midian-reflection',
          prompt:
            'When have you cried out to God from a place of real need, not just preference? What changed when you did?',
        },
      ],
    },

    /* ─── Judges 6:7–10 — The Prophet&apos;s Word ────────────────────────────── */
    {
      ref: 'Judges 6:7–10',
      title: 'The Prophet&apos;s Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 7,
              spans: [
                t('And it came to pass, when the children of Israel '),
                hg('cried unto the Lord', 'c-prophet-call'),
                t(' because of the Midianites,'),
              ],
            },
            {
              number: 8,
              spans: [
                t('That the Lord sent a prophet unto the children of Israel, which said unto them, Thus saith the Lord God of Israel, I brought you up from Egypt, and brought you forth out of the house of bondage;'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And I delivered you out of the hand of the Egyptians, and out of the hand of all that oppressed you, and drave them out before you, and gave you their land;'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And I said unto you, I am the Lord your God; fear not the gods of the Amorites, in whose land ye dwell: '),
                hy('but ye have not obeyed my voice', 'hebrew-shema'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-prophet-call',
          html:
            'Before the angel comes, before Gideon appears, God sends a prophet. The prophet&apos;s job is to remind Israel of the covenant — to say, "I rescued you once; I am the one who made you a promise." God&apos;s first word to them in their oppression is not a command but a memory.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shema',
          title: 'Shema — &ldquo;hear, obey&rdquo;',
          script: 'שׁמע',
          translit: '<strong>shema</strong> · to hear, listen, obey',
          description:
            'The verb carries both senses at once: to hear and to obey are one action in Hebrew. Not hearing the word of God with your ears only, but hearing it into obedience.',
        },
        {
          kind: 'commentary',
          id: 'c-disobedience',
          html:
            'The prophet&apos;s word is stark: "You have not obeyed my voice." This is the diagnosis. Israel wanted the protection of the gods around them instead of trusting the one God who had already proven Himself.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the first thing God needs us to hear when we are in trouble is not a strategy but a reminder of whose we are. That He has kept His word before. That He knows the way out. When you are most afraid, His word often sounds like a story: "Remember when I saved you? I haven&apos;t changed."',
        },
      ],
    },

    /* ─── Judges 6:11–16 — The Angel Calls Gideon ──────────────────────── */
    {
      ref: 'Judges 6:11–16',
      title: 'The Angel Calls Gideon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 11,
              spans: [
                t('And there came an '),
                hp('angel of the Lord', 'christ-angel'),
                t(', and sat under an oak which was in Ophrah, that pertained unto Joash the Abi-ezrite: and his son '),
                hy('Gideon', 'hebrew-gideon'),
                t(' was beating out wheat by the winepress to hide it from the Midianites.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gideon-hiding',
          html:
            'Gideon is threshing wheat — work that is usually done in the open, in the wind — but he is doing it in hiding, by the winepress, where the Midianites cannot see him. This is a man terrified. And this is the man the angel is about to call "mighty man of valor."',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gideon',
          title: 'Gideon — &ldquo;hewer&rdquo;',
          script: 'גִּדְעוֹן',
          translit: '<strong>gideon</strong> · one who hews, cuts down',
          description:
            'The name is future-tense: he will be one who cuts down, who breaks. Not what he is yet, but what he will become.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 12,
              spans: [
                t('And the angel of the Lord appeared unto him, and said unto him, The Lord is with thee, thou '),
                hg('mighty man of valour', 'c-mighty'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mighty',
          html:
            'The angel speaks a name Gideon does not yet own. This is not flattery or false encouragement. This is calling into being what God sees and promises. In Scripture, to name something is to declare what it is becoming, not what it already is.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 13,
              spans: [
                t('And Gideon said unto him, Oh my Lord, if the Lord be with us, why then is all this befallen us? and where be all his miracles which our fathers told us of, saying, Did not the Lord bring us up from Egypt? but now the Lord hath forsaken us, and delivered us into the hands of the Midianites.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gideon-doubt',
          html:
            'Gideon argues. If God is with us, why are we crushed? Where are the miracles our fathers knew? This is not arrogance — this is the honest cry of a man who has seen only silence and defeat. And God does not rebuke him for it.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 14,
              spans: [
                t('And the Lord looked upon him, and said, '),
                hp('Go in this thy might', 'c-sentness'),
                t(', and thou shalt save Israel from the hand of the Midianites: have not I sent thee?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sentness',
          html:
            'God&apos;s answer is not "because," not even comfort. It is a commission: "Go in this thy might." But Gideon has no might. That is the point. God is not upgrading Gideon&apos;s resources; He is sending him out on the basis of something else entirely — sentness. "Have not I sent thee?" The authority is not in the person; it is in the One doing the sending.',
        },
        {
          kind: 'christ',
          id: 'christ-angel',
          title: 'Christ Connection — The Angel of the Lord',
          html:
            'Throughout the Old Testament, the "angel of the Lord" performs acts that only God can perform — He receives sacrifice, accepts worship, forgives sin. Most interpreters recognize this as a Christophany, an appearance of Christ before His incarnation. When fire consumes the offering on the rock, and the angel vanishes, Gideon will know he has met the divine. Jesus Himself said, "I am the God of Abraham" (John 8:58 alluding to Exodus 3:6) — claiming the identity of the angel who called Moses.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 15,
              spans: [
                t('And he said unto him, Oh my Lord, wherewith shall I save Israel? behold, my family is poor in Manasseh, and I am the least in my father&apos;s house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-least',
          html:
            'Gideon lists his credentials for failure: poor family, least son. In human terms, he has nothing to recommend him. But God is not looking at the resume. He is looking at obedience.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 16,
              spans: [
                t('And the Lord said unto him, Surely I will be with thee, and thou shalt smite the Midianites as one man.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-with-thee',
          html:
            'The promise stands. Not "because you are mighty," but "because I am with you." The one thing Gideon needs to know is not what he can do, but that he will not do it alone.',
        },
        {
          kind: 'carry',
          html:
            'Sentness, not capability. God so often calls the unqualified, the afraid, the least-likely — not in spite of what they lack, but because the whole point is that the strength will not be theirs to take credit for. When you feel unfit for what He is asking, that is the exact place He most often starts.',
        },
        {
          kind: 'reflection',
          id: 'call-reflection',
          prompt:
            'What is God calling you to do that feels impossible given what you have? What would change if you believed His presence mattered more than your qualifications?',
        },
      ],
    },

    /* ─── Judges 6:17–24 — Jehovah-Shalom ─────────────────────────────── */
    {
      ref: 'Judges 6:17–24',
      title: 'Jehovah-Shalom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 17,
              spans: [
                t('And Gideon said unto him, If now I have found grace in thy sight, then shew me a sign that thou talkest with me.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Depart not hence, I pray thee, until I come unto thee, and bring forth my present, and set it before thee. And he said, I will tarry until thou come again.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fleece-first',
          html:
            'Gideon asks for a sign. This is not the famous fleece story yet — this is something simpler. Gideon is asking God to wait while he brings food. He is stalling, thinking. He needs to know this is real.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 19,
              spans: [
                t('And Gideon went in, and made ready a kid, and unleavened cakes of an ephah of flour: the flesh he put in a basket, and he put the broth in a pot, and brought it out unto him under the oak, and presented it.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the angel of God said unto him, Take the flesh and the unleavened cakes, and lay them upon this rock, and pour out the broth. And he did so.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 21,
              spans: [
                t('Then the angel of the Lord put forth the end of the staff that was in his hand, and touched the flesh and the unleavened cakes; and there '),
                hg('rose up fire out of the rock', 'c-fire'),
                t(', and consumed them. And the angel of the Lord departed out of his sight.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fire',
          html:
            'Fire rises from the rock and consumes the offering. This is the sign — not words, but presence. The angel is not just speaking to Gideon; the angel is revealing divine power. Fire consuming a sacrifice is how God accepts worship. Gideon has just met the living God.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 22,
              spans: [
                t('And when Gideon perceived that he was an '),
                hy('angel of the Lord', 'c-perceived'),
                t(', Gideon said, Alas, O Lord God! for because I have seen an angel of the Lord face to face.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the Lord said unto him, Peace be unto thee; fear not: thou shalt not die.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-perceived',
          html:
            'Gideon recognizes what he has encountered. In the ancient Near East, to see the face of God was to die. Gideon expects judgment. Instead, he receives peace.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 24,
              spans: [
                t('Then Gideon built an altar there unto the Lord, and '),
                hy('called it Jehovah-shalom', 'hebrew-shalom'),
                t(': unto this day it is yet in Ophrah of the Abi-ezrites.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shalom',
          title: 'Jehovah-Shalom — &ldquo;the Lord is peace&rdquo;',
          script: 'יְהוָה שָׁלוֹם',
          translit: '<strong>yahweh shalom</strong> · the Lord, peace; wholeness, harmony',
          description:
            'Shalom is not merely the absence of conflict; it is wholeness, right relationship, completeness. Gideon names the altar by what the encounter gave him: the knowledge that God is peace itself.',
        },
        {
          kind: 'christ',
          id: 'christ-peace',
          title: 'Christ Connection — Our Peace',
          html:
            'Gideon finds peace in the presence of the One he feared. Ephesians 2:14 says Christ Himself "is our peace" — He is the one in whom we encounter the face of God without death, with only embrace. What Gideon knew in a moment on a rock, the cross makes permanent: we can stand before God and live.',
        },
        {
          kind: 'carry',
          html:
            'Fear of God and peace in God are not opposites in the Bible — they are the same meeting. To truly encounter the holy is to be terrified at first, and then to be told: "Peace. Fear not. You will not die." That peace, built on the bedrock of having met the real and being accepted anyway, is deeper than any comfort.',
        },
      ],
    },

    /* ─── Judges 6:25–32 — Breaking the Altar of Baal ────────────────── */
    {
      ref: 'Judges 6:25–32',
      title: 'Breaking the Altar of Baal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 25,
              spans: [
                t('And it came to pass the same night, that the Lord said unto him, Take thy father&apos;s young bullock, even the second bullock of seven years old, and throw down '),
                hg('the altar of Baal', 'c-baal'),
                t(' that thy father hath, and cut down the grove that is by it:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-baal',
          html:
            'God does not give Gideon a year to prepare. The command comes the same night Gideon has seen the fire and the angel. He must tear down his father&apos;s altar to Baal — a violation of family honor in the culture of the day.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 26,
              spans: [
                t('And build an altar unto the Lord thy God upon the top of this rock, in the ordered place, and take the second bullock, and offer a burnt sacrifice with the wood of the grove which thou shalt cut down.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Then Gideon took ten men of his servants, and did as the Lord had said: but because he feared his father&apos;s household and the men of the city, he could not do it by day: but he did it by night.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-night-work',
          html:
            'Gideon gathers ten men and works in darkness. He is still afraid — not of the Midianites in this moment, but of his own father and the city. Yet he does the thing anyway. Faith is not the absence of fear; it is obedience in the face of it.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 28,
              spans: [
                t('And when the men of the city arose early in the morning, behold, the altar of Baal was cast down, and the grove was cut down that was by it, and the second bullock was offered upon the altar that was built.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And they said one to another, Who hath done this thing? And when they enquired and asked, they said, Gideon the son of Joash hath done this thing.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Then the men of the city said unto Joash, Bring out thy son, that he may die: because he hath cast down the altar of Baal, and because he hath cut down the grove that was by it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-death-demand',
          html:
            'The people of the city move to kill Gideon. In a culture where your father&apos;s honor is your life, to destroy his altar is to demand your own death. The city sees only sacrilege. They do not see Gideon&apos;s obedience.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 31,
              spans: [
                t('And Joash said unto all that stood against him, Will ye '),
                hy('plead for Baal', 'c-plead'),
                t('? will ye save him? he that will plead for him, let him be put to death whilst it is yet morning: if he be a god, let him plead for himself, because one hath cast down his altar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-plead',
          html:
            'Joash, Gideon&apos;s father, turns on the crowd with logic they cannot answer. If Baal is a god, let him defend himself. The silence that follows is the sound of idolatry losing its grip.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 32,
              spans: [
                t('Therefore on that day he called him '),
                hy('Jerubbaal', 'hebrew-jerubbaal'),
                t(', saying, Let Baal contend with him, because he hath thrown down his altar.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-jerubbaal',
          title: 'Jerubbaal — &ldquo;let Baal contend&rdquo;',
          script: 'יְרֻבַּעַל',
          translit: '<strong>jerubbaal</strong> · "let Baal plead/contend"',
          description:
            'A name that becomes a banner. Every time people call Gideon by this name, they repeat the defiance: we have torn down the idol, and if it is real, let it come against us. The name is an act of courage.',
        },
        {
          kind: 'carry',
          html:
            'There are altars in our own lives — habits, relationships, ambitions, approval, screens — that we have inherited or built, that feel too big to question. Gideon had to tear down his father&apos;s altar. What altar, built by someone you love or by your own hands, is God asking you to break? The breaking may be frightening. But on the other side is freedom.',
        },
        {
          kind: 'reflection',
          id: 'baal-reflection',
          prompt:
            'What false god — what altar — has your family or your culture built that you are beginning to see does not belong in your life? What would it take to step away from it?',
        },
      ],
    },

    /* ─── Judges 6:33–40 — The Fleece ───────────────────────────────── */
    {
      ref: 'Judges 6:33–40',
      title: 'The Fleece',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 33,
              spans: [
                t('Then all the Midianites and the Amalekites and the children of the east were gathered together, and went over, and pitched in the valley of Jezreel.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('But '),
                hg('the Spirit of the Lord came upon Gideon', 'c-spirit-gideon'),
                t(': and he blew a trumpet; and Abi-ezer was gathered after him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-spirit-gideon',
          html:
            'The enemy has gathered in the valley. But before Gideon acts, the Spirit of the Lord comes upon him. The power is not his; it is given. He blows the trumpet, and the tribes come.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 35,
              spans: [
                t('And he sent messengers throughout all Manasseh; who also was gathered after him: and he sent messengers unto Asher, and unto Zebulun, and unto Naphtali; and they came up to meet him.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And Gideon said unto God, If thou wilt '),
                hg('save Israel by mine hand', 'c-fleece-ask'),
                t(', as thou hast said,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fleece-ask',
          html:
            'The troops are gathering. The armies are ready. And Gideon still needs to ask. Even now, with the Spirit of the Lord upon him and the tribes gathered, he doubts.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 37,
              spans: [
                t('Behold, I will put a fleece of wool in the floor; and if the dew be on the fleece only, and it be dry upon all the earth beside, then shall I know that thou wilt save Israel by mine hand, as thou hast said.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('And it was so: for he rose up early on the morrow, and thrust the fleece together, and wringed the dew out of the fleece, a bowlful of water.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-first-fleece',
          html:
            'God grants the first sign. Dew on the fleece alone, dry ground everywhere else. It is an impossible reversal of nature. And Gideon has the answer he asked for.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 39,
              spans: [
                t('And Gideon said unto God, Let not thine anger be hot against me, and I will speak but this once: let me prove, I pray thee, but this once with the fleece; let it now be dry only upon the fleece, and upon all the ground let there be dew:'),
              ],
            },
            {
              number: 40,
              spans: [
                t('And God did so that night: for it was dry upon the fleece only, and there was dew on all the ground.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-second-fleece',
          html:
            'Gideon asks again. This time the opposite: dry fleece, wet ground. And God does it again. Some commentators see this as weak faith requiring more proof; others see it as careful confirmation, a man making sure before he asks his people to risk their lives. Either way, God accommodates.',
        },
        {
          kind: 'carry',
          html:
            'God does not shame Gideon for asking. Not once, not twice. Some call it weak faith. Some call it due diligence before you ask others to follow you. The truth is: God is patient with how you process fear. He is willing to give you the sign, the second sign, the conversation you need. He is not rushed or offended by your need to be sure.',
        },
        {
          kind: 'reflection',
          id: 'fleece-reflection',
          prompt:
            'What fleece have you been asking God for? What would it take for you to move forward, even if the sign is not absolutely certain?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Judges 6',
    quote:
      'God sends an angel to a hidden man and calls him a mighty man of valor. He tears down an altar of Baal, builds an altar to the Lord, and receives peace. His fear becomes his obedience.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 6 · Study Guide',
  },
};
