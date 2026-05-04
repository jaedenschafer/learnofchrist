import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 25 — Nabal, Abigail, and the Mercy of Waiting
 *
 * Samuel, the prophet who shaped Israel, has died. David, the king-in-waiting,
 * is still in the wilderness, hunted by Saul. In the shadow of Samuel's passing,
 * David encounters Nabal — a man whose wealth far exceeds his wisdom — and is
 * tested by the anger that comes when he is disrespected. But a woman of
 * understanding, Abigail, intervenes. She does not shield Nabal from
 * consequences; she shields David from *himself* — from becoming the kind of
 * man he will later regret being. The Lord smites Nabal. David marries Abigail.
 * And in the middle stands a lesson about vengeance deferred, wisdom heard, and
 * the difference between the sword we take and the sword the Lord wields.
 */
export const SAMUEL_1_25: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 25,

  estimatedMinutes: { beginner: 10, intermediate: 19, deep: 23 },
  opener: {
    matchTitle: /David and Abigail/i,
    caption: '1 Samuel 25',
  },
  intros: [
    'Samuel is dead. The prophet who anointed Saul, who spoke God&apos;s word fearlessly, who shaped the very soul of Israel — he is gone. All Israel gathers to mourn him. But his death does not end the story. The office remains. The word remains. And in the wilderness, a young man who has learned from the prophets must learn something harder: that waiting for vindication is not the same as taking it yourself.',
    'This is the story of a fool and a wise woman, of anger tested and restrained, of a man learning to trust that the Lord fights His own battles. It is a chapter about the difference between being right and being righteous, between the victory we seize and the victory God wins on our behalf.',
  ],

  sections: [
    /* ─── 1 Samuel 25:1–3 — Samuel Dead; Nabal and Abigail Introduced ─── */
    {
      ref: '1 Samuel 25:1–3',
      title: 'Samuel Dead; Nabal and Abigail',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hg('Samuel died', 'c-samuel-dead'),
                t('; and all the Israelites were gathered together, and lamented him, and buried him in his house at Ramah. And David arose, and went down to the wilderness of Paran.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-samuel-dead',
          html:
            'Samuel is dead. The great prophet, the man who heard God&apos;s voice and spoke it fearlessly, who had no master but the Lord — he is gone. And with him, a generation passes. David, the young man anointed by Samuel&apos;s own hand, must now live without the prophet&apos;s counsel. The wilderness has claimed another exile — not just David, but the prophetic generation itself.[res:sefaria-hannah-prayer][res:bible-odyssey-eli][res:iaa-shiloh]',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 2,
              spans: [
                t('And there was a man in Maon, whose possessions were in Carmel; and the man was '),
                hy('very great', 'c-very-great'),
                t(', having three thousand sheep, and a thousand goats: and he was '),
                t('shearing his sheep'),
                t(' in Carmel.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Now the name of the man was '),
                hy('Nabal', 'hebrew-nabal'),
                t('; and the name of his wife '),
                hy('Abigail', 'hebrew-abigail'),
                t(': and she was a woman of '),
                hg('good understanding', 'c-understanding'),
                t(' and of a '),
                hg('beautiful countenance', 'c-countenance'),
                t(': but the man was '),
                hg('churlish and evil', 'c-churlish'),
                t(' in his doings; and he was of the house of Caleb.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-very-great',
          html:
            'Nabal is &quot;very great.&quot; Three thousand sheep, a thousand goats — he is wealthy beyond measure. He is the kind of man the ancient world understood: a man with possessions, power, property. This is the man who will measure David by the world&apos;s standards and find him wanting.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nabal',
          title: 'Nabal — A Fool',
          script: 'נָבָל',
          translit: '<strong>Nabal</strong> · fool, senseless person',
          description:
            'His name means "fool" — not foolish in a lighthearted way, but in the biblical sense: a man who despises wisdom, who has rejected the fear of the Lord. The text does not hide this. It announces it. Nabal is not a misleading villain or a man misunderstood. He is simply a fool, and his name has told you so from the start.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-abigail',
          title: 'Abigail — "My Father Is Joy"',
          script: 'אֲבִיגַ֫יִל',
          translit: '<strong>Abigail</strong> · my father is joy; father of joy',
          description:
            'Abigail&apos;s name means "my father is joy" — it carries a sense of fatherly delight, of someone beloved. Her name and her character match: she is wise, fair, beautiful, and capable. She is everything Nabal is not.',
        },
        {
          kind: 'commentary',
          id: 'c-understanding',
          html:
            'Abigail is a woman of "good understanding" — Hebrew <em>tov sekhel</em>. She has wisdom, discernment, judgment. She sees what others miss. She will see David&apos;s anger before he acts on it, and she will act.',
        },
        {
          kind: 'commentary',
          id: 'c-countenance',
          html:
            'She is also beautiful — "of a beautiful countenance." But the text mentions her wisdom first. Her understanding comes before her beauty in the text&apos;s order of presentation. She is known first for her mind.',
        },
        {
          kind: 'commentary',
          id: 'c-churlish',
          html:
            'Nabal is "churlish and evil in his doings." The Hebrew word is <em>qasheh</em> — hard, difficult, harsh. He is a man without courtesy, without grace, without the capacity to see anyone outside himself. He is wealthy in sheep and goats; he is bankrupt in character.',
        },
      ],
    },

    /* ─── 1 Samuel 25:4–9 — David&apos;s Courtesy and Nabal&apos;s Refusal ─── */
    {
      ref: '1 Samuel 25:4–11',
      title: 'David&apos;s Request; Nabal&apos;s Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 4,
              spans: [
                t('And David heard in the wilderness that Nabal did shear his sheep.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And David sent out ten young men, and David said unto the young men, Get you up to Carmel, and go to Nabal, and greet him in my name:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And thus shall ye say to him that liveth in prosperity, Peace be both to thee, and peace be to thine house, and peace be unto all that thou hast.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And now I have heard that thou hast '),
                hg('shearers', 'c-shearers'),
                t(': now thy shepherds which were with us, we hurt them not, neither was there ought missing unto them, all the while they were in Carmel.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Ask thy young men, and they will shew thee. Wherefore let the young men find favour in thine eyes: for we come in a '),
                hg('good day', 'c-good-day'),
                t(': give, I pray thee, whatsoever cometh to thine hand unto thy servants, and to thy son David.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shearers',
          html:
            'David is in the wilderness with his men, and he hears that Nabal is shearing sheep. Shearing season is a festival, a time of profit and celebration. David&apos;s men have been living in the hills near Nabal&apos;s flocks, and they have protected them — no raider has stolen from Nabal, no wolf has taken his sheep, while David&apos;s men have been near.',
        },
        {
          kind: 'commentary',
          id: 'c-good-day',
          html:
            'David sends a courteous request: "We come in a good day." The shearing yields profit; let that profit be shared. It is not unreasonable. It is the way of the ancient world — protection and provision given, hospitality and thanks returned. David is asking for something that a man of understanding would grant.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 9,
              spans: [
                t('And when David&apos;s young men came, they spake to Nabal according to all these words in the name of David, and ceased.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Nabal answered the servants of David, and said, '),
                hg('Who is David?', 'c-who-is-david'),
                t(' and who is the son of Jesse? there be many servants now a days that break away every man from his master.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Shall I then take my bread, and my water, and my flesh that I have killed for my shearers, and give it unto men, whom I know not whence they be?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-who-is-david',
          html:
            'Nabal&apos;s response is contempt. "Who is David?" As if to say: I do not know you. I do not recognize your name. You mean nothing to me. It is a public refusal, spoken in front of David&apos;s servants, designed to humiliate. He adds an insult — you are like the servants who break away from their masters, you are a nobody, you are nothing. And then he refuses: I will not give you food. It is not courtesy. It is mockery.',
        },
        {
          kind: 'carry',
          html:
            'There is a particular sting that comes when someone you have been kind to shows you that they regard you as nothing. David&apos;s men have kept Nabal&apos;s sheep safe. And Nabal responds by saying he does not even know who David is. It is an erasure. It is saying: your help meant nothing to me. You are worth nothing. Hold this moment. It is about to produce anger that will cost blood.',
        },
      ],
    },

    /* ─── 1 Samuel 25:12–22 — David&apos;s Vow of Vengeance ────────────── */
    {
      ref: '1 Samuel 25:12–22',
      title: 'David&apos;s Vow of Slaughter',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 12,
              spans: [
                t('And David&apos;s young men turned their way, and went again, and came and told him all those sayings.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And David said unto his men, Gird ye on every man his sword. And they girded on every man his sword; and David also girded on his sword: and there went up after David about four hundred men; and two hundred abode by the stuff.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gird-sword',
          html:
            'David&apos;s response is swift and violent. He tells his men to arm themselves. Four hundred men stand up and march. Two hundred stay behind to guard the camp. This is war. This is an army moving. And it is moving because a man has insulted David — because David&apos;s generosity has been mocked.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 14,
              spans: [
                t('But one of the young men told Abigail, Nabal&apos;s wife, saying, Behold, David sent messengers out of the wilderness to salute our master; and he '),
                hg('railed on them', 'c-railed'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('But the men were very good unto us, and we were not hurt, neither missed we any thing, all the while we conversed with them, when we were in the fields:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('They were a wall unto us both by night and day, all the while we were with them keeping the sheep.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Now therefore know and consider what thou wilt do; for '),
                hg('evil is determined against our master', 'c-evil-determined'),
                t(', and against all his household: for he is such a '),
                hy('son of Belial', 'c-son-of-belial'),
                t(', that a man cannot speak to him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-railed',
          html:
            'One of Nabal&apos;s own servants tells Abigail what has happened. He tells her the truth: David&apos;s men protected us. They were good to us. They kept us safe. And our master railed upon them — he insulted them, he cursed them, he sent them away in shame.',
        },
        {
          kind: 'hebrew',
          id: 'c-son-of-belial',
          title: 'A Son of Belial — Worthless and Wicked',
          script: 'בֶן־בְלִיַּעַל',
          translit: '<strong>Ben Belial</strong> · a son of worthlessness, a man of no value',
          description:
            'The servant calls Nabal "a son of Belial" — a phrase that means a man of absolute worthlessness, a man hostile to God and goodness. It is the servant&apos;s own diagnosis of his master. And he tells Abigail: the evil is determined. David is coming to destroy.',
        },
        {
          kind: 'commentary',
          id: 'c-evil-determined',
          html:
            'The servant speaks clearly: "evil is determined against our master." He is not asking Abigail to prevent it. He is announcing it as fact. And then he looks to her: "know and consider what thou wilt do." He is calling on her wisdom. The household is in danger. Only she can act.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 18,
              spans: [
                t('Then Abigail made haste, and took two hundred loaves, and two bottles of wine, and five sheep ready dressed, and five measures of parched corn, and an hundred clusters of raisins, and two hundred cakes of figs, and laid them on asses:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And she said unto her servants, Go on before me; behold, I come after you. But she told not her husband Nabal.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abigail-haste',
          html:
            'Abigail does not ask permission. She does not debate with Nabal. She acts with speed and clarity. She gathers food — bread, wine, cooked meat, grain, fruit. She loads it on donkeys. She sends her servants ahead and follows. And she does not tell her husband. There is no time for a fool&apos;s argument. There is only time to prevent slaughter.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 20,
              spans: [
                t('And it was so, as she rode on the ass, that she '),
                hg('came down by the covert of the hill', 'c-covert'),
                t('; and, behold, David and his men came down against her; and she met them.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Now David had said, Surely in vain have I kept all that this fellow hath in the wilderness, so that nothing was missed of all that pertained unto him: and he hath '),
                hg('requited me evil for good', 'c-evil-for-good'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('So and more also do God unto the enemies of David, if I leave of all that pertain to him by the morning light any that pisseth against the wall.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-covert',
          html:
            'Abigail rides down from the hill, and there — on the very road David is taking — she meets him. The text is precise: she comes down "by the covert of the hill" — in the shelter of the heights. She is positioned between David and Nabal&apos;s house. She stands in the way of vengeance.',
        },
        {
          kind: 'commentary',
          id: 'c-evil-for-good',
          html:
            'David is speaking his rage aloud. He says: "Surely in vain have I kept all that this fellow hath in the wilderness." He is saying: all my care was for nothing. I protected his goods, and he repays me with evil for good. He has insulted me. And the vow is absolute: if I leave anyone alive — anyone who "pisseth against the wall," a biblical idiom for any male — God will do terrible things to me.',
        },
        {
          kind: 'reflection',
          id: 'david-vow',
          prompt:
            'David has been wronged — this is not disputed. But his anger has become total. He is not planning to kill Nabal; he is planning to destroy the entire household. When has your anger, once justified, become something larger and more dangerous than the original wound deserved?',
        },
      ],
    },

    /* ─── 1 Samuel 25:23–31 — Abigail&apos;s Intercession ──────────────── */
    {
      ref: '1 Samuel 25:23–31',
      title: 'Abigail&apos;s Intercession and Prophecy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 23,
              spans: [
                t('And when Abigail saw David, she '),
                hg('hasted', 'c-hasted'),
                t(', and lighted off the ass, and fell before David on her face, and bowed herself to the ground,'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And fell at his feet, and said, Upon me, my lord, upon me let this iniquity be: and let thine handmaid, I pray thee, speak in thine audience, and hear the words of thine handmaid.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hasted',
          html:
            'Abigail sees David and his army, and she moves with urgency. She dismounts the donkey, falls on her face before him, bows to the ground. She is placing herself directly in front of his sword. She is saying: if you are going to kill someone, kill me first. She is between David and his anger.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 25,
              spans: [
                t('Let not my lord, I pray thee, regard this man of Belial, even Nabal: for as his name is, so is he; '),
                hy('Nabal is his name, and folly is with him', 'c-nabal-name'),
                t(': but I thine handmaid saw not the young men of my lord, whom thou didst send.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nabal-name',
          html:
            'Abigail addresses David directly. She says: Do not regard this man of Belial. And then she speaks his name as his diagnosis: "Nabal is his name, and folly is with him." She is saying: he is a fool. That is what he is. Folly walks with him. Do you truly want to shed blood over a fool&apos;s words?',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 26,
              spans: [
                t('Now therefore, my lord, as the Lord liveth, and as thy soul liveth, seeing the Lord hath withholden thee from coming to shed blood, and from avenging thyself with thine own hand, now let thine enemies, and they that seek evil to my lord, be as Nabal.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lord-withheld',
          html:
            'This is remarkable. Abigail is saying: "The Lord hath withheld thee from coming to shed blood." She is not saying David has withheld himself. She is saying the Lord has withheld him — that God has placed her, standing on this road, in David&apos;s path for a reason. And she swears by the Lord&apos;s life and David&apos;s own life: let your enemies be as Nabal. Let the consequences fall on the actual guilty, not on the innocent.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 27,
              spans: [
                t('And now this blessing which thine handmaid hath brought unto my lord, let it even be given unto the young men that follow my lord.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('I pray thee, forgive the trespass of thine handmaid: for the Lord will certainly make my lord a sure house; because my lord fighteth the battles of the Lord, and '),
                hp('evil hath not been found in thee', 'c-no-evil'),
                t(' all thy days.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-evil',
          html:
            'Abigail speaks directly to David&apos;s identity. She says: "Evil hath not been found in thee all thy days." She is reminding him of who he is — a man who fights the Lord&apos;s battles, a man who does not do evil. She is calling him back to his better self, the David who the Lord has called. She is appealing to his conscience.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 29,
              spans: [
                t('Yet a man is risen up to pursue thee, and to seek thy soul: but the soul of my lord shall be '),
                hp('bound in the bundle of life with the Lord thy God', 'hebrew-tseror'),
                t('; and the souls of thine enemies, them shall he sling out, as out of the middle of a sling.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tseror',
          title: 'The Bundle of Life — Tseror HaChayyim',
          script: 'צְרוֹר הַחַיִּים',
          translit: '<strong>Tseror HaChayyim</strong> · bundle of life',
          description:
            'This phrase appears only once in Scripture, here in Abigail&apos;s words. It suggests that a soul bound in God&apos;s bundle is protected, held safely in His hand, never to be lost. The enemies, by contrast, are slung out like stones from a sling — scattered, dispersed, cast away. Abigail is not saying David will be safe by his own strength. She is saying his life is held in God&apos;s keeping.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 30,
              spans: [
                t('And it shall come to pass, when the Lord shall have done to my lord according to all the good that he hath spoken concerning thee, and shall have appointed thee ruler over Israel;'),
              ],
            },
            {
              number: 31,
              spans: [
                t('That this shall be no grief unto thee, nor offence of heart unto my lord, either that thou hast shed blood causeless, or that my lord hath avenged himself: but when the Lord shall have dealt well with my lord, then remember thine handmaid.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-prophecy-david',
          html:
            'Abigail speaks a prophecy. She says: When the Lord has done to you all the good He has spoken, when He has appointed you ruler over Israel — then do not let your heart be troubled by having shed blood causeless, or having avenged yourself. She is not saying these things will happen. She is saying: they are certain. God has spoken it. And when they come to pass, do not carry the grief of killing Nabal and his household with you. Let the Lord do the avenging. Leave it in His hands.',
        },
        {
          kind: 'carry',
          html:
            'What Abigail gives David is not comfort. It is foresight. She is saying: I see who you are going to become. I see the king in you. And I am asking you not to carry bloodguilt into that kingship. Let the Lord fight for you. Let Him be the one to avenge. Trust that His hand is enough.',
        },
      ],
    },

    /* ─── 1 Samuel 25:32–35 — David Accepts Abigail&apos;s Counsel ─────── */
    {
      ref: '1 Samuel 25:32–35',
      title: 'David Listens; His Anger Breaks',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 32,
              spans: [
                t('And David said to Abigail, '),
                hp('Blessed be the Lord God of Israel', 'c-david-blessed'),
                t(', which sent thee this day to meet me:'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And blessed be thy advice, and blessed be thou, which hast '),
                hg('kept me this day from coming to shed blood', 'c-kept-from-blood'),
                t(', and from avenging myself with mine own hand.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('For in very deed, as the Lord God of Israel liveth, which hath kept me back from hurting thee, except thou hadst hasted and come to meet me, surely there had not been left unto Nabal by the morning light any that pisseth against the wall.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-blessed',
          html:
            'David&apos;s response is immediate and total. He blesses the Lord. He does not argue. He does not defend his anger. He sees what Abigail has done, and he recognizes it as the Lord&apos;s hand. He says: the God of Israel sent you to meet me.',
        },
        {
          kind: 'commentary',
          id: 'c-kept-from-blood',
          html:
            'David acknowledges the truth: Abigail "kept me this day from coming to shed blood." She stopped him. And David accepts this. He is not too proud to be counseled by a woman. He is not too angry to hear wisdom. And he swears: if you had not come, all the men of Nabal&apos;s house would be dead by morning. But you came. And now they will live.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 35,
              spans: [
                t('So David received of her hand that which she had brought him, and said unto her, Go up in peace to thine house; see, I have hearkened to thy voice, and have accepted thy person.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-accept-person',
          html:
            'David receives the food Abigail has brought. And then he speaks a blessing that echoes the angel of the Lord: "Go up in peace to thine house. I have hearkened to thy voice, and have accepted thy person." He is not just accepting her gifts. He is honoring her. She came as a suppliant; she leaves honored.',
        },
        {
          kind: 'christ',
          id: 'david-restraint',
          title: 'Christ Connection — Vengeance Deferred',
          html:
            'Jesus will teach His disciples: "Beloved, avenge not yourselves, but rather give place unto wrath: for it is written, Vengeance is mine; I will repay, saith the Lord" (Rom. 12:19). David, centuries before Paul, learns this from a woman&apos;s wisdom. He has been wronged. His anger is justified. But he releases the right to avenge himself and lets the Lord do the avenging. This is the path Jesus walks in Gethsemane: "Not my will, but thine be done." It is the path of the cross — the refusal to strike back, the trust that God&apos;s justice is more reliable than the sword in your hand.',
        },
        {
          kind: 'reflection',
          id: 'deferred-vengeance',
          prompt:
            'Where in your life has someone wronged you, and you have had to choose between the anger that demands immediate action and the trust that God can handle the justice? What does it look like to release that right?',
        },
      ],
    },

    /* ─── 1 Samuel 25:36–42 — Nabal Dies; Abigail Becomes David&apos;s Wife ─ */
    {
      ref: '1 Samuel 25:36–42',
      title: 'The Lord Smites Nabal; Abigail Becomes David&apos;s Wife',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 36,
              spans: [
                t('And Abigail came to Nabal; and, behold, he held a '),
                hg('feast in his house', 'c-feast'),
                t(', like the feast of a king; and Nabal&apos;s heart was merry, very drunken: and she told him nothing, less or more, until the morning light.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-feast',
          html:
            'Abigail returns to find Nabal holding a feast — feasting like a king, drunk on wine. He does not know that David was coming to kill him. He does not know that his wife walked between him and a sword. He knows nothing. She tells him nothing. There is nothing to tell a fool who will not listen.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 37,
              spans: [
                t('But it came to pass in the morning, when the wine was gone out of Nabal, and his wife had told him these things, that '),
                hg('his heart died within him', 'c-heart-died'),
                t(', and he became as a stone.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('And it came to pass about ten days after, that the Lord smote Nabal, that he died.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heart-died',
          html:
            'When Nabal learns what his wife has done — that she has given David everything he asked, that she has paid the price David would have taken in blood — his heart dies within him. He becomes "as a stone." He is paralyzed. He cannot speak, cannot move. And ten days later, the Lord smites him, and he dies. It is not David&apos;s sword. It is the Lord&apos;s judgment.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 39,
              spans: [
                t('And when David heard that Nabal was dead, he said, '),
                hp('Blessed be the Lord', 'c-blessed-nabal-dead'),
                t(', that hath pleaded the cause of my reproach from the hand of Nabal, and hath kept his servant from evil: for the Lord hath returned the wickedness of Nabal upon his own head. And David sent and communed with Abigail, to take her to him to wife.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blessed-nabal-dead',
          html:
            'David hears that Nabal is dead, and he blesses the Lord again. He says: the Lord hath pleaded my cause. The Lord has avenged me. The Lord has kept me from evil. And the Lord has returned Nabal&apos;s wickedness upon his own head. This is not David taking satisfaction. This is David recognizing that the Lord has done what David himself was about to do — and done it with perfect justice.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 40,
              spans: [
                t('And when the servants of David came to Abigail to Carmel, they spake unto her, saying, David sent us unto thee, to take thee to him to wife.'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And she arose, and bowed herself on her face to the earth, and said, Behold, let thine handmaid be a servant to wash the feet of the servants of my lord.'),
              ],
            },
            {
              number: 42,
              spans: [
                t('And Abigail hasted, and arose, and rode upon an ass, with five damsels of hers; and she went after the messengers of David, and became his wife.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abigail-wife',
          html:
            'David sends for Abigail to become his wife. She accepts immediately. She says: "Behold, let thine handmaid be a servant to wash the feet of the servants of my lord." The woman who counseled the king now serves him. She has not lost her humility or her understanding. She has simply moved from one house to another — from a fool&apos;s house to a king&apos;s house.',
        },

        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 43,
              spans: [
                t('David also took Ahinoam of Jezreel; and they were also both his wives.'),
              ],
            },
            {
              number: 44,
              spans: [
                t('But Saul had given Michal his daughter, David&apos;s wife, to Phalti the son of Laish.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-context',
          html:
            'The text notes that David takes another wife, Ahinoam, and that Michal — the wife Saul gave him — has been given to another man while David is in the wilderness. These details remind us that David is still a fugitive, still a king-in-waiting. He has not yet come into his kingdom. But he is learning what it means to be the king he will become.',
        },
        {
          kind: 'carry',
          html:
            'The wise woman and the patient king are joined. David will rule Israel, but he learns his greatest lessons not from war but from wisdom — from a woman who stood between him and his own rage, and from a Lord who avenges His people when we trust Him enough to let go of the sword. Abigail becomes David&apos;s wife not because she is conquered, but because her wisdom has conquered something in David — the part of him that wanted to rule through violence. She teaches him that a true king rules with a heart ruled by God.',
        },
        {
          kind: 'reflection',
          id: 'wise-bride',
          prompt:
            'Where in your own life has wisdom — sometimes wisdom that came from an unexpected source — changed the trajectory you were on? What happened when you listened?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Samuel 25',
    quote:
      'A fool and his wealth. A wise woman and her courage. A young king and a choice: to take vengeance with his own hand, or to trust that the Lord fights His battles. Abigail stood between David and his own anger, and changed him forever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 25 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hannah-prayer',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hannah&apos;s Prayer',
      url: 'https://www.sefaria.org/1_Samuel.1',
      description: 'Complete text and commentary on Hannah&apos;s prayer and Samuel&apos;s birth.',
    },
    {
      id: 'bible-odyssey-eli',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Eli and the Priesthood',
      url: 'https://www.bibleodyssey.org/dictionary/eli/',
      description: 'Overview of Eli&apos;s role as high priest and the corruption of his sons.',
    },
    {
      id: 'iaa-shiloh',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Shiloh Excavation',
      url: 'https://www.antiquities.org.il/',
      description: 'Archaeological evidence of the Shiloh temple site where Hannah and Eli worshipped.',
    },
  ],
};
