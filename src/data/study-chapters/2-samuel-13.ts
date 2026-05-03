import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Samuel 13 — Amnon, Tamar, and the Sword in David&apos;s House
 *
 * A young woman is violated by her half-brother under a ruse of sickness,
 * cast out in shame while her abuser turns to hatred. The assault goes
 * unpunished by the king. Two years later, a half-brother takes terrible
 * vengeance. Nathan&apos;s prophecy that "the sword shall not depart from
 * thine house" begins to be fulfilled. The chapter holds uncompromising
 * moral clarity: Tamar&apos;s protests are righteous; Amnon&apos;s violence is
 * named; David&apos;s silence is injustice. Yet grace speaks too — Christ
 * restores the dignity every victim deserves.
 */
export const SAMUEL_2_13: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 13,

  estimatedMinutes: { beginner: 10, intermediate: 21, deep: 25 },
  intros: [
    'The history of David&apos;s house unfolds now as judgment. In 2 Samuel 12, the prophet Nathan told the king plainly: "The sword shall not depart from thine house, because thou hast despised me, and hast taken the wife of Uriah the Hittite to be thy wife." David&apos;s adult sin — the taking of Bathsheba, the murder of Uriah — plants a seed. And David&apos;s house begins to rot from within.',
    '2 Samuel 13 shows the terrible cost of that rot. It is a chapter about power twisted, about the weak left without protection, about silence that becomes complicity. Tamar, the daughter of the king, speaks clearly against her violation. Her voice is the moral voice of the chapter. But her father does nothing. David, who once defied armies, is paralyzed by domestic sin. And his silence gives birth to two years of slow, poisonous rage that will explode into murder.',
    'This is not a chapter to skim. It is a chapter to read with grave pastoral care — to see in it the way Scripture holds fast to justice even when kingdoms fail to do so; to hear in it the word of Christ to every person whose cry for help has gone unheard; to find in it the hope that God&apos;s kingdom will repair what human kingdoms have broken.',
  ],
  tapHint: null,
  showKjvNote: true,

  opener: {
    matchTitle: /tamar|david|amnon/i,
    matchArtist: /tissot|delacroix|rembrandt/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Samuel 13',
    quote:
      'A young woman named Tamar was violated by her half-brother and cast out in shame. Her father did nothing. The text honors her suffering and holds her abuser guilty — a mirror of God&apos;s justice when human kingdoms fail.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 13 · Study Guide',
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
    /* ─── 2 Samuel 13:1–5 — Amnon&apos;s Lust and Jonadab&apos;s Plot ─────── */
    {
      ref: '2 Samuel 13:1–5',
      title: 'The Subtil Counselor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass after this, that '),
                hg('Absalom the son of David had a fair sister', 'c-absalom-sister'),
                t(', whose name was '),
                hy('Tamar', 'c-tamar-name'),
                t('; and '),
                hp('Amnon the son of David loved her', 'amnon-love'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-absalom-sister',
          html:
            'Absalom is Tamar&apos;s full brother — her protector by blood and custom. Amnon is their half-brother, son of David by a different mother. In the ancient Near East, the distinction matters. A half-brother does not have the same claim. What follows is a violation of family law, of Tamar&apos;s vulnerability, and of the laws of hospitality and protection.[res:sefaria-david-king][res:iaa-city-david][res:bible-odyssey-jerusalem]',
        },
        {
          kind: 'hebrew',
          id: 'c-tamar-name',
          title: 'Tamar — "Palm Tree"',
          script: 'תָּמָר',
          translit: '<strong>Tamar</strong> · palm tree; a tall and graceful tree',
          description:
            'The name Tamar appears again in the genealogy of Judah (Genesis 38). That Tamar was also violated, also cast aside, also vindicated by the text. This Tamar — David&apos;s daughter — carries the same name and the same burden.',
        },
        {
          kind: 'commentary',
          id: 'amnon-love',
          html:
            'The text says Amnon "loved" Tamar. But read the chapter closely. This is not love. This is lechery. The Hebrew word is <em>ahav</em>, which can mean love, but the context makes clear: what Amnon feels is consuming desire. It torments him. It makes him sick. It is lust dressed in the language of love.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 2,
              spans: [
                t('And Amnon was so vexed that he fell sick for his sister Tamar; for she was a virgin; and Amnon thought it hard for him to do any thing to her.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Amnon is "vexed" — tormented by his desire. He becomes physically ill. "He thought it hard for him to do any thing to her" — the text acknowledges the obstacle: Tamar is guarded, a virgin, protected by her status. Amnon&apos;s "sickness" is the sickness of frustrated lust. He is not pining in innocent love. He is scheming how to remove her protection.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 3,
              spans: [
                t('But Amnon had a friend, '),
                hy('Jonadab the son of Shimeah David&apos;s brother', 'c-jonadab'),
                t(': and '),
                hg('Jonadab was a very subtil man', 'c-subtil'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jonadab',
          html:
            'Jonadab is Amnon&apos;s cousin, son of David&apos;s brother. He is close to the palace, close to the family. But proximity to power does not bring wisdom. It brings something worse — the ability to serve vice with the machinery of authority.',
        },
        {
          kind: 'hebrew',
          id: 'c-subtil',
          title: '&apos;Arum — "Subtil"; Cunning Without Conscience',
          script: 'עָרוּם',
          translit: '<strong>&apos;Arum</strong> · crafty, cunning, clever in a duplicitous way',
          description:
            'The same word describes the serpent in Genesis 3:1 ("Now the serpent was more subtil than any beast of the field"). It describes cleverness untethered from righteousness. Jonadab&apos;s counsel will not be wise counsel. It will be counsel designed to exploit Amnon&apos;s desire and turn it into action.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 4,
              spans: [
                t('And he said unto him, Why art thou, being the king&apos;s son, lean from day to day? wilt thou not tell me? And Amnon said unto him, I love Tamar, my brother Absalom&apos;s sister.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And Jonadab said unto him, Lay thee down on thy bed, make thyself sick: when thy father cometh to see thee, say unto him, I pray thee, let my sister Tamar come, and give me meat, and dress the meat in my sight, that I may see it, and eat it at her hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Jonadab sees through Amnon&apos;s torment. And instead of turning his friend away from evil, instead of counseling restraint or patience or lawful marriage, he designs a trap. The plan is simple: feign sickness. Use the king&apos;s affection and authority. Request Tamar alone. In that moment, with no witnesses, act. Every word Jonadab speaks is a step toward violation. This is the counsel of the subtil man — machinery disguised as kindness, exploitation dressed as hospitality.',
        },
        {
          kind: 'carry',
          html:
            'We are known by our counselors. Amnon might have sought wisdom from elders, from his father, from the laws of his people. Instead he confided in a friend who was "subtil" — clever enough to dress vice in the language of care, to make exploitation sound like a solution. If you have people around you who encourage you toward what you know to be wrong, no matter how reasonable they make it sound — those are not counselors. They are not friends. A true friend calls you away from the abyss, even when it costs you to hear it.',
        },
        {
          kind: 'reflection',
          id: 'jonadab-counsel',
          prompt:
            'Who are your counselors? Do they help you toward what is right, or do they find clever words to justify what you desire? What would it take to walk away from advice that leads you toward harm?',
        },
      ],
    },

    /* ─── 2 Samuel 13:6–14 — The Trap ────────────────────────────── */
    {
      ref: '2 Samuel 13:6–14',
      title: 'The Ruse and the Protest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 6,
              spans: [
                t('So Amnon lay down, and made himself sick: and when the king came to see him, Amnon said unto the king, I pray thee, let my sister Tamar come, and make me a couple of cakes in my sight, that I may eat at her hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Amnon performs sickness. He does not lie clumsily — he performs it as Jonadab taught him. When David arrives, the plea is gentle, almost humble. A prince wanting his sister to cook for him. Nothing unseemly. Nothing alarming. Except that every word is a lie in service of violation. This is how predation works: it hides behind the normal. It uses love and family structure as a mask.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 7,
              spans: [
                t('Then David sent home to Tamar, saying, Go now to thy brother Amnon&apos;s house, and dress him meat.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David does not hesitate. His son is ill. His daughter can cook. He trusts the bonds of family. He does not see the trap. Authority is not omniscience. A father can fail to protect even when protection is his highest duty.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 8,
              spans: [
                t('So Tamar went to her brother Amnon&apos;s house; and he was laid down. And she took flour, and kneaded it, and made cakes in his sight, and did bake the cakes.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And she took a pan, and poured them out before him; but he refused to eat. And Amnon said, Have out all men from me: and they went out every man.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Tamar is obedient. She goes to her brother. She cooks for him — an act of care, of family duty. She is innocent of any fault. She is doing what she has been asked to do. And now Amnon moves to the final step of the plan: he clears the room. He isolates her. No witnesses. No protection.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 10,
              spans: [
                t('And Amnon said to Tamar, Bring the meat into the chamber, that I may eat of thine hand. And Tamar took the cakes she had made, and brought them into the chamber to Amnon her brother.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And when she had brought them unto him to eat, '),
                hp('he took hold of her, and said unto her, Come lie with me, my sister', 'amnon-assault'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'amnon-assault',
          html:
            'Now his true intention is clear. He grabs her. Commands her. Calls her "my sister" in a way that perverts the relationship. There is no seduction here. There is an act of power over a helpless person in his house.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 12,
              spans: [
                t('And she said unto him, '),
                hy('Nay, my brother, do not force me', 'c-tamar-resist'),
                t('; for '),
                hg('no such thing ought to be done in Israel', 'c-law-violated'),
                t(': '),
                hp('do not thou this folly', 'c-folly'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tamar-resist',
          html:
            'Tamar resists. She does not freeze. She does not consent. She says "no" clearly. The text honors her resistance, her voice, her agency. A victim who speaks is heard by God even when she is not heard by her abuser.',
        },
        {
          kind: 'hebrew',
          id: 'c-law-violated',
          title: 'Nebalah — Folly, Vileness, a Thing That Ought Not Be',
          script: 'נְבָלָה',
          translit: '<strong>Nebalah</strong> · folly; a shameful or vile act',
          description:
            'Tamar invokes the law. She knows what is permitted and what is not. She is aware of her rights, her dignity, her standing as a woman in Israel. "No such thing ought to be done in Israel." She appeals to the moral order that should protect her. Later, when Judah encounters another Tamar in Genesis 38, he will say of his own sin: "She hath been more righteous than I." Here, Tamar speaks with the voice of the righteous.',
        },
        {
          kind: 'commentary',
          id: 'c-folly',
          html:
            'Tamar names what Amnon is about to do: <em>folly</em>. Not desire. Not love. Folly — a vile thing that violates order and law. She will not call it by any name that makes it seem excusable. Neither should we.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 13,
              spans: [
                t('And I, whither shall I cause my shame to go? and as for thee, thou shalt be as one of the fools in Israel. Now therefore, I pray thee, speak unto the king; for he will not withhold me from thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Tamar does not beg for mercy from her abuser. She makes an argument. She points out that the shame will fall on her, that he will be branded a fool in Israel, that the violation will be irreversible — and that there is a lawful path. If he wants to marry her, let him ask their father. The king will not withhold his daughter from his son. She is offering him a way to get what he desires without violation. She is rational. She is resourceful. She is trying to save herself. And he is about to destroy that attempt.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 14,
              spans: [
                t('Howbeit he would not hearken unto her voice: but, being '),
                hy('stronger than she', 'c-strength'),
                t(', '),
                hp('forced her, and lay with her', 'c-violated'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-strength',
          html:
            'The text gives the reason: "being stronger than she." Amnon has physical power. That is the only reason he can do this. Not desire. Not love. Not even lust that overwhelms reason. Strength. The ability to use force. This is rape. The text does not soften it. Neither should we.',
        },
        {
          kind: 'commentary',
          id: 'c-violated',
          html:
            'The Hebrew word here is <em>innah</em> — to afflict, to violate, to humble by force. The same word used in Genesis 34 for the assault on Dinah. The text uses it again in Deuteronomy 22, in the laws against violation. The text knows what it is describing. It does not hide behind euphemism.',
        },
      ],
    },

    /* ─── 2 Samuel 13:15–19 — The Hatred and the Cast-Out ────────────── */
    {
      ref: '2 Samuel 13:15–19',
      title: 'The Hatred That Follows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 15,
              spans: [
                t('Then Amnon '),
                hy('hated her exceedingly', 'c-hatred'),
                t('; so that the hatred wherewith he hated her was greater than the love wherewith he had loved her. And Amnon said unto her, Arise, be gone.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hatred',
          html:
            'This is one of Scripture&apos;s most brutal reversals. The lust that tormented him is gone. In its place: hatred. Greater hatred than he ever felt love. The text is clear about what this reveals: the "love" was never real. It was appetite. Once satisfied, it becomes disgust. This is the lie of lust — it promises fulfillment and delivers only contempt. For the one pursued and the pursuer both.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 16,
              spans: [
                t('And she said unto him, There is no cause: this evil in sending me away is greater than the other that thou didst unto me. But he would not hearken unto her.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Tamar speaks again. She tells him: the shame of being cast out is worse than the violation itself. Because the violation at least left her with the option of marriage, of restitution, of a future. But to be cast out — to be rejected by the man who has violated her — is to be left without remedy. "This evil… is greater." She names it truly. Being thrown away is its own devastation. And still he will not listen.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 17,
              spans: [
                t('Then he called his servant that ministered unto him, and said, Put now this woman out from me, and bolt the door after her.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And she had a garment of divers colours upon her: for with such robes were the king&apos;s daughters that were virgins apparelled. His servant brought her out, and bolted the door after her.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Tamar is cast out. The garment of divers colours — the robe of a virgin, a princess — becomes a symbol of what she has lost. She is no longer a virgin. She is no longer available for marriage. She is no longer valuable in her society&apos;s terms. And she is thrown into the street by her abuser&apos;s hand.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 19,
              spans: [
                t('And Tamar put ashes on her head, and rent her garment of divers colours, and laid her hand on her head, and went on crying.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Tamar mourns. She tears her royal robe. She puts ashes on her head — the symbols of desolation, of death. She weeps publicly. She does not hide what has been done to her. She bears witness to her own suffering. This is a woman destroyed, and she knows it. She does not deny it. She does not pretend.',
        },
        {
          kind: 'christ',
          id: 'christ-restoration',
          title: 'Christ Connection — Restoration of the Violated',
          html:
            'Throughout the Gospels, Jesus encounters the violated and restores their dignity. The woman with the issue of blood (Mark 5:25–34) — unclean by society&apos;s standards, hiding her need — reaches out to touch His garment. He does not pull away. He turns and says: "Thy faith hath made thee whole; go in peace." The woman caught in adultery (John 8:1–11) — exposed, shamed, waiting to be stoned — hears Jesus say, "Neither do I condemn thee: go, and sin no more." He does not erase what happened. He does not make her shame His concern. He makes her restoration His concern. And to His disciples He makes clear: "In as much as ye have done it unto one of the least of these my brethren, ye have done it unto me" (Matt. 25:40). Every violation visited on the weak is seen as visited on Christ Himself. The cross is the place where Christ takes on the shame that belongs to the violator and returns it as redemption to the violated. In the eschaton, Revelation 21:4 promises: "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away." Tamar&apos;s tears are seen. God knows them. And in the kingdom of Christ they will be avenged.',
        },
        {
          kind: 'carry',
          html:
            'If you have been violated — whether by force, by manipulation, by the abuse of trust or power — the text honors your pain and your resistance. It does not blame you for what was done to you. Tamar is not blamed. She resisted. She spoke. She bears witness to her own suffering. And God sees it. The cross of Jesus Christ is the place where God absorbs the full weight of human evil and offers to those who have suffered it a restoration that no perpetrator could ever give. Not forgetting. Not minimizing. But standing with you in the ruins and offering to build you into something whole again. If you have been hurt, you are not alone. If you have not been heard, God hears. If you are in pain, the promise is that pain will not have the last word.',
        },
        {
          kind: 'reflection',
          id: 'tamar-witness',
          prompt:
            'What does it mean that Tamar speaks her own suffering aloud, that she does not hide it? If you have carried a wound, what would it look like to bear witness to it — not in shame, but in truth?',
        },
      ],
    },

    /* ─── 2 Samuel 13:20–22 — The Silence of Absalom and the King ─── */
    {
      ref: '2 Samuel 13:20–22',
      title: 'The Silence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 20,
              spans: [
                t('And Absalom her brother said unto her, Hath Amnon thy brother been with thee? but hold now thy peace, my sister: he is thy brother; regard not this thing. So Tamar remained '),
                hy('desolate', 'c-desolate'),
                t(' in her brother Absalom&apos;s house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-desolate',
          html:
            'Absalom knows. He can see what has happened. And he tells her to be silent. "Hold now thy peace." He is kind in a way — she goes to his house, stays there. But he does not seek justice. He does not confront Amnon. He does not go to his father. He contains the shame, isolates Tamar, and stays silent. His silence is the silence of power that chooses passivity. It is not as destructive as Amnon&apos;s violence, but it is part of the same machinery. A woman harmed, and no one acts.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 21,
              spans: [
                t('But when King David heard of all these things, he was very wroth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David hears. And the text says he was "very wroth" — his anger burned. He felt what should be felt. He knew what was done was evil. But — and this is the crushing word — he did nothing. He did not punish Amnon. He did not seek restitution for Tamar. His anger burned and cooled, and Tamar remained desolate. This is the tragedy of David&apos;s fall. He was not always this man. He was once a king who would have run to avenge injustice. But his own sin with Bathsheba has weakened his capacity to execute justice in his own house. Moral authority has been compromised. And the consequence falls on the voiceless.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 22,
              spans: [
                t('And Absalom spake unto his brother Amnon neither good nor bad: for Absalom '),
                hg('hated Amnon', 'c-absalom-hate'),
                t(', because he had forced his sister Tamar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-absalom-hate',
          html:
            'Absalom&apos;s silence is not resignation. It is the silence of hatred. Two years of coldness toward Amnon. Two years of nursing a wound, planning. The hatred eats into him. It does not deliver justice. It delivers vengeance, which is not the same thing. Absalom will wait. Absalom will plot. Absalom will kill. And all of it grows in the soil that David watered with his inaction.',
        },
        {
          kind: 'carry',
          html:
            'When we see injustice — in our families, our workplaces, our communities — we have a choice. We can be like Absalom: silently hating, storing up anger, letting it metastasize into schemes for revenge. Or we can be like Tamar: honest about the harm, speaking it plainly, asking for justice. Or we can be like David: aware, angry, but paralyzed, allowing the harm to stand unanswered. There is a fourth way. It is the way of the cross — to see the victim, to name the harm, to stand with them, and to pursue justice not as revenge but as restoration. That way is costly. It requires us to act even when our own hands are not clean. Even David, broken as he was, could have done something. His silence compounds the original crime. Do not be a silent witness to harm. Do not be a builder of revenge schemes. Speak. Act. Restore.',
        },
        {
          kind: 'reflection',
          id: 'silence-justice',
          prompt:
            'Where in your life have you been silent when you saw harm? What would it look like to speak, to act, to pursue justice rather than storing anger or pretending not to notice?',
        },
      ],
    },

    /* ─── 2 Samuel 13:23–29 — The Trap Within the Trap ────────────── */
    {
      ref: '2 Samuel 13:23–29',
      title: 'The Cold Revenge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 23,
              spans: [
                t('And it came to pass after two full years, that Absalom had '),
                hy('sheepshearers in Baal-hazor', 'c-sheepshearers'),
                t(', which is beside Ephraim: and Absalom invited all the king&apos;s sons.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sheepshearers',
          html:
            'Two years have passed. Two years of Tamar desolate in Absalom&apos;s house. Two years of Absalom&apos;s hatred growing cold and precise. Now he acts. A feast at sheepshearing — a celebration, an occasion for gathering. Absalom invites "all the king&apos;s sons." No one suspects what is coming. This is how premeditated violence works: it dresses itself in the clothes of normalcy, uses normal occasions as a cover, invites its victim under the pretense of fellowship.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 24,
              spans: [
                t('And Absalom came to the king, and said, Behold now, thy servant hath sheepshearers; let the king, I beseech thee, and his servants go with thy servant.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And the king said to Absalom, Nay, my son, let us not all now go, lest we be chargeable unto thee. And he pressed him: howbeit he would not go, but blessed him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David declines. But Absalom presses him. Patiently. Cunning. Then — this is crucial — when David will not come, Absalom asks that Amnon come instead. "If not, I pray thee, let my brother Amnon go with us." The request seems casual, familial, innocent. It is none of those things. It is the bait.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 26,
              spans: [
                t('And the king said unto him, Why should he go with thee? And Absalom pressed him: and he let Amnon and all the king&apos;s sons go with Absalom.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Absalom presses. And David, who would not be persuaded to come himself, is persuaded to let Amnon go. The king has no idea what he is sending his son into. He is a king with the title of authority but not its substance. He cannot see what is before his eyes. His own sin has blinded him.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 27,
              spans: [
                t('Then Absalom commanded his servants, saying, Mark ye now when Amnon&apos;s heart is merry with wine, and when I say unto you, Smite Amnon; then kill him: fear not: have not I commanded you? be courageous, and be valiant.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And the servants of Absalom did unto Amnon as Absalom had commanded. Then all the king&apos;s sons arose, and every man gat him up upon his mule, and fled.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Absalom gives the command to his servants. Not in anger. In cold direction. "Be courageous, and be valiant" — he frames the murder as courage, as valor. And they obey. Amnon is struck down in the presence of his brothers. The feast becomes a bloodbath. All the king&apos;s sons flee.',
        },
      ],
    },

    /* ─── 2 Samuel 13:30–39 — Aftermath and Exile ────────────────── */
    {
      ref: '2 Samuel 13:30–39',
      title: 'The Prophecy Fulfilled',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 29,
              spans: [
                t('And while they were in the way, tidings came to David, saying, Absalom hath slain all the king&apos;s sons, and there is not one of them left.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Word reaches David: all his sons are dead. The rumor is false — only Amnon is dead. But David does not know that yet. In that moment, he believes his children are gone. The sword that Nathan spoke of is falling. This is the judgment David believed he had escaped. It has come home.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 30,
              spans: [
                t('Then the king arose, and tare his garments, and lay on the earth; and all his servants stood by with their clothes rent.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David tears his clothes. He lies on the earth. His grief is total. It is also — though he does not know it yet — misdirected. His grief should have come earlier. For Tamar. When she was violated and cast out. But David was too weak, too compromised, too bound by his own sins to grieve then. Now the grief comes. Now it falls on him. Now it is too late to prevent what has happened.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 31,
              spans: [
                t('But Jonadab, the son of Shimeah David&apos;s brother, answered and said, Let not my lord suppose that they have slain all the young men the king&apos;s sons; for Amnon only is dead: for by the appointment of Absalom this hath been determined from the day that he forced his sister Tamar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Jonadab — the same "subtil" counselor who designed Amnon&apos;s violation of Tamar — now brings news. He knows. He seems to have known Absalom was planning this all along. He brings news, and in doing so, he names something true: "by the appointment of Absalom this hath been determined from the day that he forced his sister Tamar." Absalom&apos;s hatred and his plot date from that day. The violation of Tamar is the seed. Murder is the harvest.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 32,
              spans: [
                t('Now therefore let not my lord the king take the thing to his heart, to think that all the king&apos;s sons are dead; for Amnon only is dead.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('But Absalom fled. And the young man that kept the watch lifted up his eyes, and looked, and behold, there came much people by the way of the hill side behind him.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And Jonadab said unto the king, Behold, the king&apos;s sons come: as thy servant said, so it is.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Jonadab tells the truth, and the brothers arrive alive. The relief must be enormous. But Absalom has fled. He knows what he has done. He knows what the consequences will be. And he runs.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 35,
              spans: [
                t('And David said unto his servants, See, is not the young man Jonadab with him? And the servants said, He is with Amnon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David recognizes what has happened. Amnon is dead. Absalom has killed him. The kingdom has eaten itself. The sword that should have fallen on enemies has fallen on David&apos;s own sons.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 36,
              spans: [
                t('And the king&apos;s sons wept very sore: and all his servants, even all the mighty men, wept very sore.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Everyone weeps. The house of David is in ashes. But notice who is not mentioned here. Tamar. There is no account of her grief, her reaction, her witness to this moment when her violation has finally — not just for her, but for everyone — come into the light.',
        },

        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 37,
              spans: [
                t('But Absalom fled, and went to Talmai, the son of Ammihud, king of Geshur.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('And David mourned for his son every day.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('So Absalom fled, and went to Geshur, and was there three years. And the soul of king David longed to go forth unto Absalom: for he was comforted concerning Amnon, seeing he was dead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Absalom goes to a foreign king and stays three years. David mourns. David&apos;s "soul longed to go forth unto Absalom." He grieves for his living son in exile. He mourns for his dead son. He is — finally, truly — broken. But the chapter does not record David mourning for Tamar, grieving what was done to his daughter, longing to comfort her or restore her. The sword has fallen on his sons. His daughter&apos;s wound was never treated. She was cast out and left to remain desolate. And the king did nothing.',
        },
        {
          kind: 'reflection',
          id: 'sword-house',
          prompt:
            'In Nathan&apos;s prophecy — "the sword shall not depart from thine house" — the sword has come. What does it cost a kingdom when the king does not act for justice? What breaks when power fails the powerless?',
        },
      ],
    },
  ],
};
