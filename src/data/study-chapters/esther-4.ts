import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Esther 4 — "For Such a Time as This"
 *
 * Mordecai perceives the death decree against the Jews and tears his clothes,
 * sitting in sackcloth and ashes before the king's gate. Esther, hidden in
 * the palace, learns of the crisis through her servant Hatach. Mordecai charges
 * her: "Think not with thyself that thou shalt escape... If thou altogether
 * holdest thy peace at this time, then shall there enlargement and deliverance
 * arise to the Jews from another place; but thou and thy father's house shall
 * be destroyed: and WHO KNOWETH WHETHER THOU ART COME TO THE KINGDOM FOR SUCH
 * A TIME AS THIS?"
 *
 * Esther responds with resolve: a three-day fast, and then she will go to the
 * king—against the law that forbids approaching him unsummoned. "If I perish,
 * I perish." In this chapter, a young woman discovers her calling in a moment
 * of crisis, and learns that her hidden position has been preparation for
 * deliverance.
 */
export const ESTHER_4: RichChapterContent = {
  bookSlug: 'esther',
  bookName: 'Esther',
  chapter: 4,

  estimatedMinutes: { beginner: 6, intermediate: 12, deep: 16 },
  intros: [
    'The book of Esther moves swiftly. In chapter 3, the king signed a decree—sealed with his signet ring—ordering the destruction of every Jew in his kingdom on a single day. The reason: Mordecai had refused to bow to Haman, the king&apos;s favorite, and Haman&apos;s pride demanded not merely Mordecai&apos;s death, but the death of an entire people. The decree went out. Letters were sent to every province. The date was set. And in this fourth chapter, two things happen: Mordecai grieves, and Esther discovers why she was ever queen.',
    'Throughout the book of Esther, God&apos;s name appears nowhere. Yet His presence is everywhere—in coincidence, in timing, in the turns of fate that seem random but are not. This chapter is where that providence becomes personal. Esther must choose whether to risk her life for her people. And in making that choice, she becomes a woman "for such a time as this."',
  ],

  bottomShare: {
    label: 'Share Esther 4',
    quote:
      '"If I perish, I perish." Esther&apos;s covenant to risk everything for her people echoes the resolve of the One who came "for such a time as this"—to lay down His life for the salvation of many.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Esther 4 · Study Guide',
  },

  resources: [
    {
      id: 'theoi-herodotus',
      kind: 'archive',
      source: 'Theoi Classical Texts',
      label: 'Herodotus on Xerxes I',
      url: 'https://www.theoi.com/Text/HerodotusHistories.html',
      description: 'Herodotus accounts of Xerxes, Persian court intrigues, and royal authority.',
    },
  ],

  sections: [
    /* ─── Esther 4:1–3 — Mordecai's Mourning at the Gate ──────────────── */
    {
      ref: 'Esther 4:1–3',
      title: 'Mordecai Mourns Before the Gate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('When Mordecai perceived all that was done, he '),
                hg('rent his clothes', 'est4-rent-clothes'),
                t(', and put on '),
                hy('sackcloth', 'est4-sackcloth'),
                t(' with ashes, and went out into the midst of the city, and cried with a loud and bitter cry;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And came even before the king&apos;s gate: for none might enter into the king&apos;s gate clothed with sackcloth.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And in every province, whithersoever the king&apos;s commandment and his decree came, there was great mourning among the Jews, and fasting, and weeping, and wailing; and many lay in sackcloth and ashes.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'est4-rent-clothes',
          html:
            'Mordecai tears his clothes—an ancient gesture of absolute devastation. This is not a private grief. He goes into the city, he cries with a loud and bitter cry. The death decree has been signed. It cannot be revoked. And the one man who could have prevented it all—if he had only bowed to Haman—now wears his refusal in the form of sackcloth and ashes. [res:theoi-herodotus]',
        },
        {
          kind: 'hebrew',
          id: 'est4-sackcloth',
          title: 'Sackcloth — שַׂק',
          script: 'שַׂק',
          translit: '<strong>Saq</strong> · sackcloth; rough burlap cloth worn in mourning',
          description:
            'Sackcloth is not fine clothing. It is the harsh, undyed cloth of mourning—uncomfortable against the skin, a visible advertisement of grief and desperation. When a person puts on sackcloth, they are telling the world: I am broken. I am undone. I am in need of mercy.',
        },
        {
          kind: 'commentary',
          id: 'est4-gate',
          html:
            'Mordecai comes to the king&apos;s gate, but cannot enter. The law forbids anyone clothed in sackcloth from coming before the king. And so Mordecai sits outside—a man in mourning, powerless, waiting. He has done what he could do. He has refused to bow. And now he must wait to see what God will do.',
        },
        {
          kind: 'carry',
          html:
            'There are moments when our refusal to compromise puts others at risk. Mordecai&apos;s integrity cost his people dearly. And yet he did not bow. In your own life, have there been times when standing firm on principle felt like it exposed those you loved to danger? What does faithfulness look like when the stakes are that high?',
        },
        {
          kind: 'reflection',
          id: 'mordecai-mourning',
          prompt:
            'Mordecai&apos;s grief is visible and loud. When has your own grief or conviction led you to public vulnerability? What did that cost you, and what did it accomplish?',
        },
      ],
    },

    /* ─── Esther 4:4–8 — Esther Sends Hatach to Inquire ─────────────── */
    {
      ref: 'Esther 4:4–8',
      title: 'Esther Learns the Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 4,
              spans: [
                t('So Esther&apos;s maids and her chamberlains came and told her. And the queen was exceedingly grieved; and she sent raiment to clothe Mordecai, and to take away his sackcloth from him: but he received it not.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Then called Esther for Hatach, one of the king&apos;s chamberlains, whom he had appointed to attend upon her, and gave him a commandment to go unto Mordecai, to know what it was, and why it was.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('So Hatach went forth to Mordecai unto the street of the city, which was before the king&apos;s gate.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Mordecai told him of all that had happened unto him, and of the sum of the money that Haman had promised to pay to the king&apos;s treasuries for the Jews, to destroy them.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Also he gave him the copy of the writing of the decree that was given at Shushan to destroy them, to shew it unto Esther, and to declare it unto her, and to '),
                hg('charge her that she should go in unto the king', 'est4-charge-king'),
                t(', to make supplication unto him, and to make request before him for her people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'est4-grieved',
          html:
            'Esther does not know. She is hidden in the palace, far from the streets where the mourning Jews sit in sackcloth. She learns that Mordecai—her guardian, the man who raised her—is in anguish. Her first impulse is comfort: send him new clothes, take away his grief. But Mordecai refuses. Clothes will not fix this. Only action will.',
        },
        {
          kind: 'commentary',
          id: 'est4-charge-king',
          html:
            'Mordecai sends word through Hatach: Go to the king. Make supplication. Make request. She must use her position. She must use the fact that she is queen. And for the first time, Esther must confront what being queen means—not privilege and safety, but responsibility and risk.',
        },
        {
          kind: 'carry',
          html:
            'When we discover that someone we love is in danger, our first instinct is often to offer comfort. But sometimes comfort is not what&apos;s needed. Sometimes the people we love need us to stand up, to risk, to use whatever platform or influence we have. Esther learned this. The question for us is: who in our life is in danger, and are we willing to risk?',
        },
        {
          kind: 'reflection',
          id: 'hatach-messenger',
          prompt: 'Hatach becomes the messenger between Mordecai and Esther—carrying news of danger. Who serves as a messenger in your life, bringing you news you don&apos;t want to hear but need to know?',
        },
      ],
    },

    /* ─── Esther 4:9–11 — Esther's Fear: "I Have Not Been Called" ────── */
    {
      ref: 'Esther 4:9–11',
      title: 'The Law of the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 9,
              spans: [
                t('And Hatach came and told Esther the words of Mordecai.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Again Esther spake unto Hatach, and gave him commandment unto Mordecai;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('All the king&apos;s servants, and the people of the king&apos;s provinces, do know, that whosoever, whether man or woman, shall come unto the king into the inner court, who is not called, there is one law to put him to death, except such to whom the king shall hold out the golden sceptre, that he may live: but '),
                hg('I have not been called to come in unto the king these thirty days', 'est4-thirty-days'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'est4-thirty-days',
          html:
            'Esther&apos;s response is reasonable. She names the law: anyone who enters the king&apos;s inner court without being summoned is put to death—unless the king holds out his golden sceptre. And she has not been called for thirty days. She is out of favor. She has no guarantee that if she approaches him, he will choose to spare her life. The law is absolute. And she is not willing to die.',
        },
        {
          kind: 'commentary',
          id: 'est4-golden-sceptre',
          html:
            'The golden sceptre becomes the symbol of the king&apos;s grace—his power to give life or death. To enter the court unbidden is to place your life entirely in his hand. You are betting that his affection for you is greater than his anger at your presumption. Esther has not made that bet in thirty days. She does not know if she can win it now.',
        },
        {
          kind: 'carry',
          html:
            'There is a difference between being afraid and being cowardly. Esther is afraid. She states the facts clearly: the law is death, and she is not in the king&apos;s favor. Her fear is reasonable. But what will she do with it? Will she let it decide her, or will she let something else speak?',
        },
        {
          kind: 'reflection',
          id: 'esther-fear',
          prompt: 'Esther names her fear directly—the risk is real and the cost could be her life. What is a fear you face that you&apos;ve been using to justify inaction? What would change if you named it and then acted anyway?',
        },
      ],
    },

    /* ─── Esther 4:12–14 — Mordecai's Challenge: "For Such a Time as This" ── */
    {
      ref: 'Esther 4:12–14',
      title: '"For Such a Time as This"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 12,
              spans: [
                t('And they told to Mordecai Esther&apos;s words.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Then Mordecai commanded to answer Esther, THINK NOT WITH THYSELF THAT THOU SHALT ESCAPE IN THE KING&apos;S HOUSE, MORE THAN ALL THE JEWS.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('For if thou altogether holdest thy peace at this time, then shall there enlargement and deliverance arise to the Jews from another place; but thou and thy father&apos;s house shall be destroyed: '),
                hp('AND WHO KNOWETH WHETHER THOU ART COME TO THE KINGDOM FOR SUCH A TIME AS THIS', 'est4-such-time'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'est4-escape',
          html:
            'Mordecai&apos;s response is fierce. Do not think, Esther, that you will escape. Your palace will not protect you. Your marriage to the king will not save you. You are a Jew, and the decree covers every Jew in the kingdom. If all the others die, you will die too.',
        },
        {
          kind: 'commentary',
          id: 'est4-another-place',
          html:
            'And then Mordecai says something extraordinary: even if you do nothing, "enlargement and deliverance" will arise to the Jews from another place. This is the only explicit statement of faith in the entire book. God will save His people. Not from her. But from another place. Perhaps from God Himself. The inference is unmistakable: God is present, even though His name is never spoken.',
        },
        {
          kind: 'commentary',
          id: 'est4-such-time',
          html:
            'But if deliverance will come anyway, then why should she risk? Mordecai answers: "And who knoweth whether thou art come to the kingdom for such a time as this?" Your position. Your elevation to the throne. It was not accident. It was not random. It was preparation. You were brought to the kingdom not for your own sake, but for theirs—for the Jews. You were made queen for this moment. This is why you are here.',
        },
        {
          kind: 'hebrew',
          id: 'est4-goel',
          title: 'Goel — גּוֹאֵל',
          script: 'גּוֹאֵל',
          translit: '<strong>Goel</strong> · redeemer; kinsman-redeemer; one who restores',
          description:
            'The word Mordecai does not use here is "goel"—redeemer. He does not say "God will redeem you." But the structure of his words mirrors redemption: God will deliver the people. The implication is that Esther, if she acts, becomes an instrument of that redemption. She becomes the goel—the one who restores her people.',
        },
        {
          kind: 'christ',
          id: 'est4-christ-time',
          title: "Christ Connection — Appointed &quot;For Such a Time as This&quot;",
          html:
            'Mordecai tells Esther: you were brought to the kingdom for such a time as this. The apostle Paul uses strikingly similar language about Christ: &quot;When the fulness of the time was come, God sent forth his Son&quot; (Galatians 4:4). Christ came at exactly the moment appointed. He came for a purpose. He came to do what no one else could do—to stand before the King and make intercession for His people. Like Esther, Christ faced a law that demanded death. Like Esther, He was asked to risk everything. Like Esther, He said yes.',
        },
        {
          kind: 'carry',
          html:
            'Mordecai does not command Esther to save her people because she owes it to them. He commands her because of what her position means. You are not in the kingdom by accident. You are not hidden because you are less. You were elevated for a purpose. Whatever platform, influence, or unique position you have been given—it was given for a time like this. The question is whether you will use it.',
        },
        {
          kind: 'reflection',
          id: 'such-time',
          prompt: 'Mordecai suggests that Esther&apos;s elevation was not for her own comfort but for her people&apos;s deliverance. What unique position or platform have you been given? What "time as this" are you prepared for?',
        },
      ],
    },

    /* ─── Esther 4:15–17 — Esther's Covenant: "If I Perish, I Perish" ─── */
    {
      ref: 'Esther 4:15–17',
      title: '"If I Perish, I Perish"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 15,
              spans: [
                t('And Esther bade them return Mordecai this answer,'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Go, gather together all the Jews that are present in Shushan, and FAST YE FOR ME, and neither eat nor drink three days, night or day: I also and my maidens will fast likewise; and so will I go in unto the king, which is not according to the law: '),
                hp('AND IF I PERISH, I PERISH', 'est4-perish'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('So Mordecai went his way, and did according to all that Esther had commanded him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'est4-fast',
          html:
            'Esther&apos;s first action is to call for a fast. She does not rush to the king with tears and pleas. She calls her people to join her in a three-day fast—night and day. No food. No drink. She will fast with them. This is not desperation. This is discipline. This is a woman preparing her spirit and calling her people to prayer. Even though God&apos;s name is never mentioned, Esther&apos;s call to fasting is a call to seek God&apos;s face.',
        },
        {
          kind: 'hebrew',
          id: 'est4-tsom',
          title: 'Fast — צוֹם',
          script: 'צוֹם',
          translit: '<strong>Tsom</strong> · fast; abstention from food',
          description:
            'The word "tsom"—fast—means to abstain, to refrain, to empty oneself. In Scripture, fasting is never merely about denying the body. It is about making space for prayer, for dependence, for clarity. Esther calls her people to fast so that they will be present—body and spirit—in the moment of deliverance.',
        },
        {
          kind: 'commentary',
          id: 'est4-perish',
          html:
            'And then the words that echo through Scripture: "If I perish, I perish." It is a covenant. Esther is saying: I choose this. I choose to risk. I choose to stand. I am no longer hiding. I am no longer safe. I am stepping into the danger, and I accept the cost. It is one of the most courageous statements in the Bible—not because it is loud, but because it is clear-eyed about the price.',
        },
        {
          kind: 'commentary',
          id: 'est4-goes-king',
          html:
            'Esther decides to go to the king unbidden. She is breaking the law. She is risking death. And she does it not in a moment of panic, but after prayer, after calling her people to stand with her, after three days of preparation. She goes as a woman who has chosen her course and accepted the consequences.',
        },
        {
          kind: 'christ',
          id: 'est4-christ-perish',
          title: "Christ Connection — &quot;If I Perish, I Perish&quot;",
          html:
            "Esther says: &quot;If I perish, I perish.&quot; In Matthew 26:39, Jesus prays in the Garden of Gethsemane: &quot;O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt.&quot; He, too, understands the cost. He, too, faces death. But He chooses to go forward anyway. And unlike Esther, whose sacrifice might save her people, Christ&apos;s sacrifice does save them—all who call on His name. He goes not into a palace to plead with a human king, but to the cross to stand before the throne of God. And He does it saying, in effect: &quot;If I perish, I perish—for their salvation&quot; (Hebrews 2:9).",
        },
        {
          kind: 'carry',
          html:
            'There is a moment in every person&apos;s life when they must choose: Will I do what needs to be done, even if it costs me everything? Will I step out of hiding? Will I risk? Esther made that choice. She did not know that she would survive. She did not know that Mordecai&apos;s words would come true. She only knew that the alternative—silence—was death for her people, and perhaps for her as well. She chose to risk for others. That choice is what made her who she became.',
        },
        {
          kind: 'reflection',
          id: 'perish-covenant',
          prompt: 'Esther&apos;s "If I perish, I perish" is a covenant to risk everything. What covenant have you made—or do you need to make—with yourself or with God about what you will stand for?',
        },
      ],
    },

    /* ─── Divider ────────────────────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Closing Reflection ──────────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'commentary',
          html:
            'The book of Esther contains no prayer, no invocation of God by name. Yet in this chapter, we see the whole architecture of faith: Mordecai perceives and grieves; Esther learns and fears; she calls her people to fast and prepare; and then she steps into the unknown. She does not know that God is with her. But her actions declare that she believes He is. And by chapter 7, she will stand before the king, and the king will listen, and Haman will fall, and the Jews will be delivered. The name of God is never mentioned. But His hand is everywhere. Esther learned that the palace where she thought she was safe was actually the place where she was being prepared. Your hidden place—your waiting, your preparation, your training—it is not accident. It is preparation "for such a time as this." You may not see it yet. But the day will come when you understand why you were placed where you are.',
        },
      ],
    },
  ],
};
