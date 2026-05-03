import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 1 — Solomon Anointed at Gihon
 *
 * King David lies dying, his body chilled beyond warming. A damsel, Abishag,
 * is brought to cherish him — but the king knows her not. And in the vacuum
 * of his failing life, two sons contend for the throne. Adonijah exalts
 * himself: "I will be king." He gathers chariots, horsemen, and the great
 * men of Judah, but David's prophet Nathan and his mother Bathsheba see
 * the danger. In a stunning reversal, they move David to anoint Solomon at
 * Gihon, a hidden spring, with oil from the tabernacle itself. The earth
 * shakes with the people's joy. And Adonijah, terrified, flees to the horns
 * of the altar — a refuge available even to him, even now.
 *
 * This chapter is about succession, about the vulnerability of kingdoms when
 * power passes from aging hands to younger ones, and about a king's first
 * act: clemency tempered by the warning that wickedness brings death.
 */
export const KINGS_1_1: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 1,

  estimatedMinutes: { beginner: 11, intermediate: 20, deep: 25 },
  intros: [
    'The books of Kings open at the threshold of Israel&apos;s decline. David, the shepherd king who conquered Jerusalem and established the dynasty, is old. His body no longer holds heat; servants cover him with clothes, but the warmth will not come. He lies in his chamber, served by a young woman named Abishag, who tends to him but cannot rouse him from his frailty.',
    'In this moment of a king&apos;s fading, the kingdom itself becomes unstable. Adonijah, David&apos;s eldest surviving son, sees an opportunity. He declares himself: "I will be king." He prepares chariots, horsemen, runners — the regalia of kingship. And he gathers those in power: Joab the general, Abiathar the priest. But not everyone follows him. Nathan the prophet, Benaiah the captain of the guard, and Bathsheba, mother of Solomon, perceive the danger.',
    'What unfolds is a race against time. Nathan and Bathsheba must move David — feeble though he is — to make a choice before death takes the decision from him. They succeed in ways that seem to unsettle even David himself. At a hidden spring called Gihon, Solomon is anointed king with oil from the tabernacle. The trumpet sounds. The people shout. And in that moment, Adonijah&apos;s bid for power collapses. He flees to the altar, seeking refuge even as his usurpation crumbles.',
  ],

  sections: [
    /* ─── 1 Kings 1:1–4 — The Cold King and Abishag ──────────────────── */
    {
      ref: '1 Kings 1:1–4',
      title: 'The King&apos;s Frailty',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('Now king David was '),
                hg('old and stricken in years', 'old-stricken'),
                t('; and they covered him with clothes, but he gat no heat.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Wherefore his servants said unto him, Let there be sought for my lord the king a young virgin: and let her stand before the king, and let her '),
                hg('cherish him', 'cherish-king'),
                t(', and '),
                hg('let her lie in thy bosom', 'lie-bosom'),
                t(', that my lord the king may get heat.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('So they sought for a fair damsel throughout all the coasts of Israel, and found Abishag a Shunammite, and brought her to the king.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the damsel was very fair, and cherished the king, and ministered to him: but the king knew her not.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'old-stricken',
          html:
            'David is not merely old — he is "stricken in years," a phrase that suggests not just age but the weight of a long life, the accumulation of years and labors and sorrows. The great warrior, the shepherd, the psalmist who poured out his heart to God — this man is now too frail to generate his own warmth. The kingdom&apos;s strength rests on a king whose body is failing. This is the vulnerability that opens the door to succession crisis.[res:sefaria-solomon-reign][res:israel-museum-temple-artifacts][res:iaa-solomon-period]',
        },
        {
          kind: 'commentary',
          id: 'cherish-king',
          html:
            'The verb "cherish" carries affection and care. Abishag is not brought to be a servant; she is brought to be a companion, to warm the aging king through her presence and touch. The intention is not clinical — it is human, intimate in the simplest way. And yet the king cannot be aroused. His need has outpaced human remedy.',
        },
        {
          kind: 'commentary',
          id: 'lie-bosom',
          html:
            '"Let her lie in thy bosom" — the most literal intimacy of bodily warmth. Yet the text is clear: "the king knew her not." He cannot. The text preserves David&apos;s dignity — he is still king, still present, but life itself is draining away. His weakness is not moral failure; it is the human condition meeting the end of its time.',
        },
        {
          kind: 'hebrew',
          id: 'h1-yada',
          title: 'Yada — "To Know"',
          script: 'יָדַע',
          translit: '<strong>Yada</strong> · to know; to understand; to be intimate with',
          description:
            'The verb yada carries multiple meanings in Scripture: to know facts, to understand intimately, to be sexually joined. Here, "he knew her not" means he had no relations with her, no matter her presence and care. The word choice is gentle — not that he rejected her, but that he could not. His body had passed beyond that season. Abishag remains unnamed in any deeper way; she is present, caring, but the text is truthful about the limits of human proximity in the face of approaching death.',
        },
        {
          kind: 'carry',
          html:
            'We live in a culture that does not like aging, that hides the dying away, that prefers to pretend that the body&apos;s decline is not real. But this text is honest: David is old. His body fails. He cannot be restored. And yet he is still king. He is still worthy of care. He is still present in his weakness. What does it mean to honor those who are aging, to be present to them not to fix them but to sit with them as they move through their time?',
        },
        {
          kind: 'reflection',
          id: 'king-frailty',
          prompt: 'Have you sat with someone in their frailty — aging, illness, the approach of death? What did their weakness teach you about your own?',
        },
      ],
    },

    /* ─── 1 Kings 1:5–10 — Adonijah&apos;s Self-Exaltation ───────────────── */
    {
      ref: '1 Kings 1:5–10',
      title: 'Adonijah Exalts Himself',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 5,
              spans: [
                t('Then Adonijah the son of Haggith exalted himself, saying, '),
                hg('I will be king', 'adonijah-will-be'),
                t(': and he prepared him chariots and horsemen, and fifty men to run before him.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And his father had not displeased him at any time in saying, Why hast thou done so? and he was a very goodly man; and '),
                hg('his mother bare him', 'adonijah-haggith'),
                t(' after Absalom.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And he conferred with Joab the son of Zeruiah, and with Abiathar the priest: and they following Adonijah helped him.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But Zadok the priest, and Benaiah the son of Jehoiada, and Nathan the prophet, and Shimei, and Rei, and the mighty men which belonged to David, were not with Adonijah.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And Adonijah slew sheep and oxen and fat cattle by the stone of Zoheleth, which is by En-rogel; and called all his brethren the king&apos;s sons, and all the men of Judah the king&apos;s servants:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('But Nathan the prophet, and Benaiah, and the mighty men, and Solomon his brother, he called not.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'adonijah-will-be',
          html:
            'Adonijah&apos;s declaration is stark and self-initiated: "I will be king." No one has appointed him. No one has asked him. He has looked at his aging father and decided: the throne is mine. The verb "exalted himself" — same root as the serpent&apos;s own self-exaltation in Eden — suggests a will bent on its own glorification. What Lucifer said in the heavens ("I will ascend"), Adonijah says in Jerusalem. The pattern repeats: the desire to seize what is not yet given.',
        },
        {
          kind: 'commentary',
          id: 'adonijah-haggith',
          html:
            'David "had not displeased him at any time in saying, Why hast thou done so?" This is the text&apos;s diagnosis of a fundamental failure in parenting. David indulged Adonijah. He did not discipline him. He did not say no. And the result is a son who assumes that his will and the kingdom&apos;s will are the same thing. The text is surgical: weakness in a parent becomes vice in a child. We are witnessing the consequences of David&apos;s own earlier indulgence with Amnon and Absalom. The pattern is repeating.',
        },
        {
          kind: 'commentary',
          id: 'support-split',
          html:
            'Notice the careful account of who followed Adonijah and who did not. Joab (the general) and Abiathar (the priest) aligned with him. But Zadok the priest, Benaiah the captain, and Nathan the prophet — the spiritual and military leadership most devoted to David — stayed loyal to the king&apos;s will. The kingdom is split. And most tellingly: Solomon is not even invited to the ceremony. He is not a threat yet because he is not even in the room.',
        },
        {
          kind: 'hebrew',
          id: 'h1-adonijah',
          title: 'Adonijah — "My Lord Is Yah"',
          script: 'אֲדֹנִיָּ֫ה',
          translit: '<strong>Adonijah</strong> · my lord is Yah; my lord is the Lord',
          description:
            'The name itself is a confession of faith: "My Lord Is Yah." Adonijah bears a theophoric name that acknowledges God&apos;s lordship. Yet he acts as though his own will is supreme. There is a tragic irony here — a man named for God&apos;s sovereignty who cannot acknowledge that anyone but himself is sovereign.',
        },
        {
          kind: 'carry',
          html:
            'Adonijah&apos;s error is not that he wanted to be king — it is that he took the throne for himself rather than waiting for it to be given. We all face moments where we must choose: Will I grasp what I want, or will I wait for it to be given? Will I make my own way, or trust that God knows the proper time? The text suggests that seizing power we were not meant to have — even power that might otherwise have been ours — is a kind of death.',
        },
        {
          kind: 'reflection',
          id: 'adonijah-exalts',
          prompt: 'When have you been tempted to take something for yourself rather than wait for it to be given? What was the cost of grasping?',
        },
      ],
    },

    /* ─── 1 Kings 1:11–27 — Nathan&apos;s Plan and Bathsheba&apos;s Plea ───── */
    {
      ref: '1 Kings 1:11–27',
      title: 'Nathan and Bathsheba Move the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 11,
              spans: [
                t('Wherefore Nathan spake unto Bathsheba the mother of Solomon, saying, Hast thou not heard that Adonijah the son of Haggith doth reign, and David our lord knoweth it not?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Now therefore come, let me, I pray thee, give thee counsel, that thou mayest save thine own life, and the life of thy son Solomon.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Go and get thee in unto king David, and say unto him, Didst not thou, my lord, O king, swear unto thine handmaid, saying, Assuredly Solomon thy son shall reign after me, and he shall sit upon my throne? why then doth Adonijah reign?'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Behold, while thou yet talkest there with the king, I also will come in after thee, and confirm thy words.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k1-1-split-1',
          html:
            'Nathan moves quickly, approaching Bathsheba with an urgent plan. He does not frame this as his own ambition but as a matter of survival: unless they act, she and Solomon will be marked as traitors when Adonijah solidifies his hold. Nathan will be the second witness, the one who confirms Bathsheba&apos;s words. Together, they will remind David of his own oath — the promise he made when he was stronger and could bind his will more clearly.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 15,
              spans: [
                t('And Bathsheba went in unto the king into the chamber: and the king was very old; and Abishag the Shunammite ministered unto the king.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Bathsheba bowed, and did obeisance unto the king. And the king said, What wouldest thou?'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And she said unto him, My lord, thou swarest by the Lord thy God unto thine handmaid, saying, Assuredly Solomon thy son shall reign after me, and he shall sit upon my throne.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1-kings-1-mid-17',
          html:
            '<p>Opposition rises, exposing the tensions between faith and the throne&apos;s ambitions.</p>',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 18,
              spans: [
                t('And now, behold, Adonijah reigneth; and now, my lord the king, thou knowest it not:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And he hath slain oxen and fat cattle and sheep in abundance, and hath called all the sons of the king, and Abiathar the priest, and Joab the captain of the host: but Solomon thy servant hath he not called.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And thou, my lord, O king, the eyes of all Israel are upon thee, that thou shouldest tell them who shall sit on the throne of my lord the king after him.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Otherwise it shall come to pass, when my lord the king shall sleep with his fathers, that I and my son Solomon shall be counted offenders.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k1-1-split-2',
          html:
            'Bathsheba approaches with both humility and urgency. She bows and waits to be addressed. But when she speaks, she does not equivocate. She reminds David of his oath sworn "by the Lord thy God" — his own word, binding and holy. She describes the crisis plainly: Adonijah has taken the throne in fact if not yet in title. Solomon is not invited. And the eyes of all Israel are upon David. His silence will be interpreted as consent. If he does not speak, she and her son face death when he is gone.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 22,
              spans: [
                t('And, lo, while she yet spake with the king, Nathan the prophet also came in.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And they told the king, saying, Behold Nathan the prophet. And when he was come in before the king, he bowed himself before the king with his face to the ground.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Nathan said, My lord, O king, hast thou said, Adonijah shall be king after me, and he shall sit upon my throne?'),
              ],
            },
            {
              number: 25,
              spans: [
                t('For he is gone down this day, and hath slain oxen and fat cattle and sheep in abundance, and hath called all the king&apos;s sons, and the captains of the host, and Abiathar the priest; and, behold, they eat and drink before him, and say, God save king Adonijah.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('But me, even me thy servant, and Zadok the priest, and Benaiah the son of Jehoiada, and thy servant Solomon, hath he not called.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Is this thing done by my lord the king, and thou hast not shewed it unto thy servant, who should sit on the throne of my lord the king after him?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k1-1-split-3',
          html:
            'As Bathsheba finishes, Nathan enters — a prophet bearing witness. He asks David a direct question, not as an accusation but as an appeal to David&apos;s own will: "Hast thou said, Adonijah shall be king?" He confirms what Bathsheba has reported — that Adonijah and his followers are feasting and crying "God save king Adonijah." He names those who were not invited: himself, Zadok, Benaiah, and Solomon. The implication is sharp: this usurpation was done without David&apos;s knowledge, without his consent. Nathan asks: Is this your will? Or will you speak?',
        },
        {
          kind: 'commentary',
          id: 'nathan-bathsheba',
          html:
            'Nathan the prophet approaches Bathsheba with an urgent plan. He is not acting in a power play of his own; he is defending the word David himself has spoken — the oath that Solomon will reign. Nathan is the guardian of the king&apos;s own voice, calling David back to his own promise when his frailty threatens to unmake it. And he enlists Bathsheba, who has every reason to fear: if Adonijah becomes king, she and her son will be marked as traitors.',
        },
        {
          kind: 'commentary',
          id: 'bathsheba-plea',
          html:
            'Bathsheba speaks to David with respect — bowing, calling him "my lord the king" — but with urgency. She reminds him of the oath he swore "by the Lord thy God." She is not inventing a memory; she is holding David to a word he spoke when he was more fully himself. She describes the threat plainly: Adonijah has proclaimed himself king, and Solomon — heir to the throne, even now vulnerable — has not even been invited to the feast. She names the consequences: if David does not act, she and Solomon will be "counted offenders" when he is gone.',
        },
        {
          kind: 'commentary',
          id: 'nathan-confirms',
          html:
            'Nathan arrives as Bathsheba finishes speaking. His testimony is corroborating: he confirms what Bathsheba has said and adds a detail she left out — that Adonijah&apos;s followers are already crying "God save king Adonijah!" The moment is critical. David&apos;s will, when spoken, is still supreme. But if he does not speak it now, the kingdom will move without him.',
        },
        {
          kind: 'carry',
          html:
            'Bathsheba and Nathan do not seize power for Solomon; they urge David to speak his own will. They are not rebels against the king — they are keepers of the king&apos;s own word when his frailty threatens to unspeak it. In our own lives, there are moments when we must remind people — gently, respectfully, but urgently — of their own values, their own promises, their own better selves. This is an act of love, not rebellion.',
        },
        {
          kind: 'reflection',
          id: 'nathan-bathsheba-plea',
          prompt: 'Who in your life has reminded you of a promise you made when you were stronger, or of your better self when you had lost sight of it? What was the gift in that reminder?',
        },
      ],
    },

    /* ─── 1 Kings 1:28–40 — Solomon Anointed at Gihon ──────────────────── */
    {
      ref: '1 Kings 1:28–40',
      title: 'The King Speaks; Solomon Is Anointed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 28,
              spans: [
                t('Then king David answered and said, Call me Bathsheba. And she came into the king&apos;s presence, and stood before the king.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And the king sware, and said, '),
                hp('As the Lord liveth, that hath redeemed my soul out of all distress', 'lord-redeemed'),
                t(','),
              ],
            },
            {
              number: 30,
              spans: [
                t('Even as I sware unto thee by the Lord God of Israel, saying, Assuredly Solomon thy son shall reign after me, and he shall sit upon my throne in my stead; even so '),
                hp('will I certainly do this day', 'do-this-day'),
                t('.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Then Bathsheba bowed with her face to the earth, and did reverence to the king, and said, Let my lord king David live for ever.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And king David said, Call me Zadok the priest, and Nathan the prophet, and Benaiah the son of Jehoiada. And they came before the king.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('The king also said unto them, Take with you the servants of your lord, and cause Solomon my son to ride upon mine own mule;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k1-coronation-procession',
          html:
            'David moves quickly. Bathsheba&apos;s plea has barely landed before the king is naming a mule, a horn of oil, and a route. A coronation that should have taken weeks is collapsing into a single afternoon, because the throne cannot survive a vacuum at sundown.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 34,
              spans: [
                t('And bring him down to Gihon:'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And let Zadok the priest and Nathan the prophet anoint him there king over Israel: blow ye with the trumpet, and say, God save king Solomon.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('Then ye shall come up after him, that he may come and sit upon my throne; for he shall be king in my stead: and I have appointed him to be ruler over Israel and over Judah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1-kings-1-mid-36',
          html:
            '<p>The kingdom solidifies as Solomon consolidates power and establishes his regime.</p>',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 37,
              spans: [
                t('And Benaiah the son of Jehoiada answered the king, and said, Amen: the Lord God of my lord the king say so too.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('As the Lord hath been with my lord the king, even so let him be with Solomon, and make his throne greater than the throne of my lord king David.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('So Zadok the priest, and Nathan the prophet, and Benaiah the son of Jehoiada, and the Cherethites, and the Pelethites, went down, and caused Solomon to ride upon king David&apos;s mule, and brought him to Gihon.'),
              ],
            },
            {
              number: 40,
              spans: [
                t('And Zadok the priest took an horn of oil out of the tabernacle, and '),
                t('anointed Solomon'),
                t('. And they blew the trumpet; and all the people said, '),
                t('God save king Solomon'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lord-redeemed',
          html:
            'David swears his oath not by his own strength but by the Lord&apos;s — "As the Lord liveth, that hath redeemed my soul out of all distress." He is not claiming power for himself. He is invoking the Lord who has kept him alive, who has carried him through a lifetime of peril and adversity. His word stands because it is grounded in the Lord&apos;s faithfulness, not his own.',
        },
        {
          kind: 'commentary',
          id: 'do-this-day',
          html:
            'The oath is absolute: "even so will I certainly do this day." David does not say "I will do this when I am able" or "This will happen after I am gone." He commits to it now, immediately, while he still has the authority to speak and to be obeyed. He will not leave the kingdom in ambiguity.',
        },
        {
          kind: 'commentary',
          id: 'gihon-spring',
          html:
            'Solomon is brought to Gihon, a spring outside Jerusalem — not to the temple, not to any place of state ceremony, but to a place of living water, a place hidden from the city itself. It is an intimate coronation, not a public parade. There is almost a sense of secrecy in it, or at least of proceeding without waiting for the consent of those who might object. The choice of location matters: Gihon, "bursting forth," is the spring that gives Jerusalem life.',
        },
        {
          kind: 'hebrew',
          id: 'h1-gihon',
          title: 'Gihon — "Bursting Forth"',
          script: 'גִּחוֹן',
          translit: '<strong>Gihon</strong> · the spring; bursting forth; a spring that flows naturally',
          description:
            'Gihon is one of the four rivers of Eden (Gen. 2:13), but in this context, it is the spring that feeds Jerusalem&apos;s water supply. The name suggests life, fertility, water that comes from the earth itself without human engineering. The text chooses Gihon — not the altar of the temple, not the royal seat, but the living spring — as the place where Solomon is anointed. The anointing is not an abstract ceremony; it is an act grounded in the earth, in life, in continuity.',
        },
        {
          kind: 'hebrew',
          id: 'h1-mashach',
          title: 'Mashach — "To Anoint"',
          script: 'מָשַׁח',
          translit: '<strong>Mashach</strong> · to anoint; to smear with oil; to consecrate',
          description:
            'Zadok takes oil from the tabernacle itself — the holy place — and anoints Solomon. The verb mashach means not just to apply oil but to consecrate, to set apart for divine purpose. The oil from the tabernacle carries the weight of the covenant. It is not merely a political act; it is a sacred act. Solomon is not seizing the throne; he is being set apart for it by the Lord&apos;s own priest.',
        },
        {
          kind: 'carry',
          html:
            'Notice that Solomon does not crown himself. He does not declare his own kingship. David speaks. Zadok anoints. Nathan confirms. Solomon is anointed at a hidden spring, riding on his father&apos;s own mule — an act of humility and continuity. He is carried into kingship, not seized into it. There is a profound lesson here about how true authority comes not from grasping but from being chosen, being set apart, being consecrated by those who come before us.',
        },
        {
          kind: 'reflection',
          id: 'solomon-anointed',
          prompt: 'What is the difference between seizing power and being chosen for a task? When have you experienced being called to something rather than taking it for yourself?',
        },
      ],
    },

    /* ─── 1 Kings 1:41–53 — Adonijah at the Horns of the Altar ────────────── */
    {
      ref: '1 Kings 1:41–53',
      title: 'Adonijah Seeks Refuge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 41,
              spans: [
                t('And Adonijah and all the guests that were with him heard it as they had made an end of eating. And when Joab heard the sound of the trumpet, he said, Wherefore is this noise of the city being in an uproar?'),
              ],
            },
            {
              number: 42,
              spans: [
                t('And while he yet spake, behold, Jonathan the son of Abiathar the priest came: and Adonijah said unto him, Come in; for thou art a valiant man, and bringest good tidings.'),
              ],
            },
            {
              number: 43,
              spans: [
                t('And Jonathan answered and said to Adonijah, Verily our lord king David hath made Solomon king:'),
              ],
            },
            {
              number: 44,
              spans: [
                t('And the king hath sent with him Zadok the priest, and Nathan the prophet, and Benaiah the son of Jehoiada, and the Cherethites, and the Pelethites, and they have caused him to ride upon the king&apos;s mule:'),
              ],
            },
            {
              number: 45,
              spans: [
                t('And Zadok the priest and Nathan the prophet have anointed him king in Gihon: and they are come up from thence rejoicing, so that the city is in a uproar. This is the noise that ye have heard.'),
              ],
            },
            {
              number: 46,
              spans: [
                t('And also Solomon sitteth on the throne of the kingdom.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k1-feast-collapses',
          html:
            'Notice how the news travels — not as rumor but as a cascade. The trumpet, the city&apos;s shout, the messenger Adonijah&apos;s feast was hoping never to see. By the time Jonathan finishes speaking, the guests already know that they have eaten at the wrong table.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 47,
              spans: [
                t('And moreover the king&apos;s servants came to bless our lord king David, saying, God make the name of Solomon better than thy name, and make his throne greater than thy throne: and the king bowed himself upon the bed.'),
              ],
            },
            {
              number: 48,
              spans: [
                t('And also thus said the king, Blessed be the Lord God of Israel, which hath given one to sit on my throne this day, mine eyes even seeing it.'),
              ],
            },
            {
              number: 49,
              spans: [
                t('And all the guests that were with Adonijah were afraid, and rose up, and went every man his way.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1-kings-1-mid-49',
          html:
            '<p>The kingdom solidifies as Solomon consolidates power and establishes his regime.</p>',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 50,
              spans: [
                t('And Adonijah feared because of Solomon; and rose up, and went, and '),
                hg('caught hold on the horns of the altar', 'horns-altar'),
                t('.'),
              ],
            },
            {
              number: 51,
              spans: [
                t('And it was told Solomon, Behold, Adonijah feareth king Solomon: for, lo, he hath caught hold on the horns of the altar, saying, Let king Solomon swear unto me today that he will not slay his servant with the sword.'),
              ],
            },
            {
              number: 52,
              spans: [
                t('And Solomon said, If he will shew himself a worthy man, there shall not an hair of him fall to the earth: but if wickedness shall be found in him, he shall die.'),
              ],
            },
            {
              number: 53,
              spans: [
                t('So king Solomon sent, and they brought him down from the altar. And he came and bowed himself to king Solomon: and Solomon said unto him, Go to thine house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'horns-altar',
          html:
            'The "horns of the altar" were a refuge prescribed in the Torah — a place where the unintentional manslayer could flee and find protection (Exodus 21:14). But Adonijah&apos;s flight to the altar is not the refuge of an innocent man; it is the last resort of a usurper whose bid for power has collapsed utterly. He fled in fear, caught the horns, and waited. The irony is sharp: a man who tried to seize the kingdom now clings to the altar as his only hope of survival.',
        },
        {
          kind: 'commentary',
          id: 'adonijah-fear',
          html:
            'Adonijah&apos;s own supporters vanish the moment the trumpet sounds. His feast is broken up. His followers disperse. He is left alone, watching his plan crumble. And in his fear, he runs to the altar — the one refuge the law itself recognizes, available even to enemies of the king.',
        },
        {
          kind: 'commentary',
          id: 'solomon-clemency',
          html:
            'Solomon&apos;s response is neither swift execution nor easy forgiveness. He sets a condition: "If he will shew himself a worthy man" — if his actions going forward are righteous — then he will live. "But if wickedness shall be found in him, he shall die." Solomon&apos;s first act as king is not mercy; it is mercy tempered by the warning that consequences follow wickedness. It is the wisdom of a young king who understands that some threats cannot simply be executed away — they can only be watched, and if they break faith, then judgment falls.',
        },
        {
          kind: 'christ',
          id: 'christ-king-humble',
          title: 'Christ Connection — The King Riding Humbly',
          html:
            'Solomon rides to his anointing on his father&apos;s mule — not on a war horse, not in a chariot, but on a humble beast of burden. The text echoes in the New Testament: "Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass" (Matthew 21:9, from Zechariah 9:9). Jesus enters Jerusalem on a donkey, not in the regalia of an earthly king. He is anointed too, but not with oil from the tabernacle — He is anointed with the Spirit of God Himself. And like Solomon, His reign will be characterized by both clemency and judgment. The true King does not seize; He is sent. He does not crown Himself; He receives His crown from His Father.',
        },
        {
          kind: 'carry',
          html:
            'Adonijah sought the throne by his own will, by grasping, by gathering followers and declaring himself king. Solomon receives it through the word of his father, the anointing of the priest, and the witness of the prophet. One way leads to flight and fear and the altar. The other leads to a kingdom. The difference is not luck; it is obedience. In your own life, where are you trying to seize something that is not yet yours to take? And where might you find that what you are called to receive is more secure than what you could grasp?',
        },
        {
          kind: 'reflection',
          id: 'adonijah-altar',
          prompt: 'Adonijah fled from the king he tried to be and clung to the altar for refuge. When have you had to surrender a plan or ambition that you had fought for? What did you discover in that letting go?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Kings 1',
    quote:
      'In the vulnerability of a kingdom, a king speaks his last great word. A son is anointed not by his own seizing but by his father&apos;s oath, his priest&apos;s oil, and his prophet&apos;s witness. And in that moment, the kingdom passes to the next generation — not by force, but by the grace of succession.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 1 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-solomon-reign',
      kind: 'study',
      source: 'Sefaria',
      label: 'Solomon&apos;s Reign and Temple',
      url: 'https://www.sefaria.org/1_Kings.1',
      description: 'Solomon&apos;s ascension to the throne and his building of the first temple in Jerusalem.',
    },
    {
      id: 'israel-museum-temple-artifacts',
      kind: 'museum',
      source: 'Israel Museum',
      label: 'Solomonic Period Artifacts',
      url: 'https://www.imj.org.il/',
      description: 'Museum collection of objects from Solomon&apos;s era (10th century BCE).',
    },
    {
      id: 'iaa-solomon-period',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Archaeology of the Solomonic Period',
      url: 'https://www.antiquities.org.il/',
      description: 'Excavation evidence for urban centers and building projects attributed to Solomon&apos;s reign.',
    },
  ],
  hasHebrew: true,
};
