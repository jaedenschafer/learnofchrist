import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Nehemiah 5 — Confronting Internal Injustice
 *
 * While the wall rises around Jerusalem, an invisible wall grows between
 * the people: creditors bleeding the poor, families mortgaging everything,
 * brothers enslaving brothers to pay tribute to the king. Nehemiah hears
 * their cry and confronts the nobles with a question that cuts to the bone:
 * "Ye exact usury, every one of his brother." The chapter is not about enemies
 * at the gates; it is about injustice at the table of God&apos;s own people.
 * And Nehemiah, asked to govern, chooses the harder path: he takes no bread,
 * feeds 150 at his own cost, and asks God to remember him not for what he
 * built, but for what he refused.
 */
export const NEHEMIAH_5: RichChapterContent = {
  bookSlug: 'nehemiah',
  bookName: 'Nehemiah',
  chapter: 5,

  intros: [
    'The wall of Jerusalem is rising. Stone by stone, the city&apos;s defense takes shape. But as the work continues, a different kind of wall emerges — one invisible, built of debt and desperation. The poor cry out. Their fields have been mortgaged. Their children are being sold into servitude. The very nobles who are meant to rebuild the nation are using the crisis to enrich themselves through usury — lending at interest to their own brothers in violation of the Law.',
    'This is the chapter where the true work of restoration becomes apparent: it is not enough to rebuild walls. The people themselves must be restored. Nehemiah, confronted with this injustice, does not retreat to diplomacy. He confronts the nobles directly, demands restitution, and then turns the mirror on himself — refusing the bread of the governor for twelve years, feeding 150 at his own table, asking nothing of the people he serves. It is a chapter about what it costs to lead with integrity when surrounded by corruption.',
  ],

  bottomShare: {
    label: 'Share Nehemiah 5',
    quote:
      'The wall is rising, but a greater work calls: the healing of a broken people. Nehemiah confronts his own nobility with a simple question — "Ye exact usury, every one of his brother?" — and in their answer, a nation is renewed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nehemiah 5 · Study Guide',
  },

  sections: [
    /* ─── Nehemiah 5:1–5 — The Cry of the Poor ──────────────────────────── */
    {
      ref: 'Nehemiah 5:1–5',
      title: 'The Cry of the Poor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'And there was a great cry of the people and of their wives against their brethren the Jews.'),
            {
              number: 2,
              spans: [
                t('For some said, We, our sons, and our daughters, are many: therefore we take up corn for them, that we may '),
                hg('eat, and live', 'poor-cry-sustain'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Some also there were that said, We have mortgaged our lands, vineyards, and houses, that we might buy corn, because of the dearth.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Then I said, There were also that said, We have borrowed money for the king&apos;s tribute, and that upon our lands and vineyards.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Yet now our '),
                hg('flesh is as the flesh of our brethren', 'poor-cry-equal'),
                t(', our children as their children: and, lo, we bring into '),
                hg('bondage our sons and our daughters to be servants', 'poor-cry-bondage'),
                t(', and some of our daughters are brought unto bondage already: neither is it in our power to redeem them; for other men have our lands and vineyards.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'poor-cry-sustain',
          html:
            'The cry arises not from malice, but from need. Families are large. Food is scarce during the dearth. The simple question — how shall we eat? — drives parents into a system of debt from which there is no escape. It is the cry of the powerless trapped in a structure of injustice.',
        },
        {
          kind: 'commentary',
          id: 'poor-cry-equal',
          html:
            'The statement "our flesh is as the flesh of our brethren" carries profound weight. We are the same people. We are the same blood. We suffer the same dearth, the same hunger. Yet one group has managed to turn scarcity into profit, using the Law itself — which forbids usury among brothers — as a mechanism of control.',
        },
        {
          kind: 'commentary',
          id: 'poor-cry-bondage',
          html:
            'The ultimate injustice: families are broken. Children are sold into servitude to creditors. Daughters become servants in the households of those who have consumed their parents&apos; land. The structure is fixed — "it is not in our power to redeem them." The poor have become trapped not by judgment or consequence, but by the machinery of their own "brothers" wealth-building.',
        },
        {
          kind: 'hebrew',
          id: 'neshek-usury',
          title: 'Neshek — "Usury" or "Biting Interest"',
          script: 'נֶ֫שֶׁךְ',
          translit: '<strong>Neshek</strong> · interest, usury; from root meaning "to bite"',
          description:
            'The Hebrew word neshek, from the root meaning "to bite," carries the image of something devouring flesh. To charge interest to a brother is to let debt bite into his very substance. The Law of Moses explicitly forbade lending at interest to fellow Israelites (Exodus 22:25; Leviticus 25:35–37). To exact neshek is not merely bad business — it is to devour your brother.',
        },
        {
          kind: 'carry',
          html:
            'Injustice often hides behind systems. No creditor says aloud, "I will enslave your children." Instead, they offer a loan. Circumstances are desperate. The alternative is starvation. And by the time the true cost emerges — the mortgaged field, the daughter in servitude — the trap is already closed. Do you see the hidden systems of burden in your own community? Where are the places where "helping" becomes "consuming"?',
        },
        {
          kind: 'reflection',
          id: 'cry-hear',
          prompt: 'When have you heard a cry for justice that you could not ignore? What made you stop and listen, rather than walk past?',
        },
      ],
    },

    /* ─── Nehemiah 5:6–9 — Nehemiah&apos;s Outrage and Confrontation ──────────── */
    {
      ref: 'Nehemiah 5:6–9',
      title: 'Ye Exact Usury, Every One of His Brother',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(6, 'And I was very angry when I heard their cry and these words.'),
            {
              number: 7,
              spans: [
                t('Then I consulted with myself, and I rebuked the nobles and the rulers, and said unto them, '),
                hp('Ye exact usury, every one of his brother', 'ye-exact-usury'),
                t(': and I set a great assembly against them.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And I said unto them, We after our ability have redeemed our brethren the Jews, which were sold unto the heathen; and will ye even sell your brethren? or shall they be sold unto us? Then held they their peace, and found nothing to answer.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Also I said, It is not good that ye do: ought ye not to walk in the fear of our God because of the reproach of the heathen our enemies?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'very-angry',
          html:
            'Nehemiah&apos;s anger is immediate and personal. He has just heard the cry of the poor — wives lamenting the sale of their children, families describing the mortgaging of everything they own — and he knows exactly who is responsible. His anger is not the rage of a man wronged; it is the righteous response of a leader confronted with the betrayal of his own people.',
        },
        {
          kind: 'commentary',
          id: 'ye-exact-usury',
          html:
            'The accusation is direct and unflinching. Nehemiah does not soften it with diplomatic language. "Ye exact usury, every one of his brother." The phrase names the sin without equivocation. These are not corrupt outsiders; they are the nobles and rulers of Judah itself, the very leaders meant to hold the community together.',
        },
        {
          kind: 'commentary',
          id: 'great-assembly',
          html:
            'Nehemiah convenes an assembly — a public gathering. This is not a private reproof behind closed doors. The sin has been public (the cry of the poor); the confrontation must be public as well. Shame, here, is a tool of restoration. Nehemiah is saying: this cannot be hidden.',
        },
        {
          kind: 'commentary',
          id: 'redeemed-heathen',
          html:
            'Nehemiah&apos;s argument is devastating in its simplicity. "We have redeemed our brethren the Jews, which were sold unto the heathen" — we have paid ransoms to bring our own people back from captivity. And now, you — the beneficiaries of that redemption — you are selling your brothers into bondage? The logic inverts itself: the nobles have become the very thing the people were rescued from.',
        },
        {
          kind: 'hebrew',
          id: 'yirat-elohim',
          title: 'Yirat Elohim — "Fear of God"',
          script: 'יִרְאַת אֱלֹהִים',
          translit: '<strong>Yirat Elohim</strong> · fear of God; reverence; awe',
          description:
            'The phrase "fear of God" is not about terror; it is about reverence and alignment with the will of God. To walk in the fear of God is to order your life according to His character. Nehemiah invokes this not as a threat, but as a call: remember who you serve. Remember what God demands of you.',
        },
        {
          kind: 'carry',
          html:
            'There is a moment when a leader must stand and name what is wrong, plainly and without apology. Nehemiah could have negotiated. He could have suggested the nobles reform gradually. Instead, he spoke truth with anger and assembled the people to witness it. What injustice in your own sphere have you allowed to continue unchallenged because confrontation seemed difficult?',
        },
        {
          kind: 'reflection',
          id: 'exact-usury',
          prompt: 'Nehemiah accused the nobles directly: "Ye exact usury, every one of his brother." What words do you need to speak to someone, but have not yet said?',
        },
      ],
    },

    /* ─── Nehemiah 5:10–13 — Restitution and the Oath ───────────────────── */
    {
      ref: 'Nehemiah 5:10–13',
      title: 'Restore Them This Day',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(10, 'Likewise, I, my brethren and my servants, might exact of them money and corn: I pray you, let us leave off this usury.'),
            {
              number: 11,
              spans: [
                t('Restore, I pray you, to them, even this day, their lands, their vineyards, their oliveyards, and their houses, also the hundredth part of the money, and of the corn, the wine, and the oil, that ye exact of them.'),
              ],
            },
            plain(12, 'Then said they, We will restore them, and will require nothing of them; so will we do as thou sayest. Then I called the priests, and took an oath of them, that they should do according to this promise.'),
            {
              number: 13,
              spans: [
                t('Also I shook my lap, and said, So God shake out every man from his house, and from his labour, that performeth not this promise, even thus be he shaken out, and emptied. And all the congregation said, '),
                hg('Amen', 'amen-affirmation'),
                t(', and praised the Lord. And the people did according to this promise.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'likewise-servants',
          html:
            'Nehemiah makes a stunning move: he includes himself. "I, my brethren and my servants, might exact of them money and corn." He is saying, in effect: I could do this too. I have the authority. My position as governor gives me the right. But "I pray you, let us leave off this usury." The call to righteousness begins with those in power choosing not to use their power to extract from the vulnerable. Leadership means restraint.',
        },
        {
          kind: 'commentary',
          id: 'restore-this-day',
          html:
            'The command is immediate. "This day." Not gradually, not over time, but now. Return the lands. Return the vineyards. Return the homes. And "the hundredth part" — a reference to the customary interest rate. Restore what you have taken in profit. Restitution is not delayed or softened. It is commanded and enforced.',
        },
        {
          kind: 'commentary',
          id: 'they-will-restore',
          html:
            'The nobles agree. "We will restore them, and will require nothing of them; so will we do as thou sayest." What changed? Nehemiah&apos;s directness. His willingness to confront. His moral authority as a leader. The nobles could have resisted. Instead, they capitulated. Sometimes what is required is the courage to speak what everyone knows is true.',
        },
        {
          kind: 'commentary',
          id: 'oath-priests',
          html:
            'Nehemiah does not trust in words alone. He calls the priests and extracts an oath — a solemn binding before God. The priests become witnesses. The commitment becomes sacred. This is how you ensure a promise holds: not by believing in human goodwill, but by setting it before God and the community.',
        },
        {
          kind: 'commentary',
          id: 'shake-lap',
          html:
            'Nehemiah performs a symbolic gesture: he shakes out his lap or cloak (likely his priestly vestments or a fold of his garment) and pronounces judgment. "So God shake out every man from his house, and from his labour, that performeth not this promise." The gesture says: may you be emptied, cast out, left with nothing — the very fate you have inflicted on others. It is a curse that calls down the consequence.',
        },
        {
          kind: 'hebrew',
          id: 'pachah-governor',
          title: 'Pachah — "Governor"',
          script: 'פָּחָה',
          translit: '<strong>Pachah</strong> · governor, prefect, regional ruler',
          description:
            'Nehemiah holds the title pachah — the Persian title for a regional governor. It is a position of considerable authority. And yet, he uses that authority not to extract and enrich himself, but to restore and protect the vulnerable. His governance is not about power; it is about justice.',
        },
        {
          kind: 'carry',
          html:
            'When leaders model restraint, others follow. Nehemiah could have accepted the nobles&apos; bribes, could have allowed the system to continue, could have enriched himself at the expense of the poor. Instead, he confronted injustice and then modeled the alternative: a leader who refuses to extract. The congregation&apos;s "Amen" and praise of the Lord suggest they recognized something rare and sacred — a leader whose power is turned not toward himself, but toward the restoration of his people.',
        },
        {
          kind: 'reflection',
          id: 'restore-day',
          prompt: 'Nehemiah demanded restitution "this day" — immediate, not delayed. What wrongs in your life are waiting for you to restore them? What keeps you from doing so immediately?',
        },
      ],
    },

    /* ─── Nehemiah 5:14–19 — Nehemiah&apos;s Twelve Years of Sacrifice ──────── */
    {
      ref: 'Nehemiah 5:14–19',
      title: 'The Bread of the Governor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 14,
              spans: [
                t('Moreover from the time that I was appointed to be their governor in the land of Judah, from the twentieth year even unto the thirty and second year of Artaxerxes the king, that is, twelve years, I and my brethren '),
                hg('have not eaten the bread of the governor', 'bread-governor'),
                t('.'),
              ],
            },
            plain(15, 'But the former governors that had been before me were chargeable unto the people, and had taken of them bread and wine, beside forty shekels of silver; and their servants bare rule over the people: but so did not I, because of the fear of God.'),
            plain(16, 'Yea, also I continued in the work of this wall, neither bought we any land: and all my servants were gathered thither unto the work.'),
            plain(17, 'Moreover there were at my table an hundred and fifty of the Jews and rulers, beside those that came unto us from among the heathen that are about us.'),
            {
              number: 18,
              spans: [
                t('Now that which was prepared for me daily was one ox and six choice sheep; also fowls were prepared for me, once in ten days store of all sorts of wine: yet for all this '),
                hg('required I not the bread of the governor', 'required-not-bread'),
                t(', because the '),
                hg('bondage was heavy upon this people', 'bondage-heavy'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Think upon me, my God, for good, according to all that I have done for this people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bread-governor',
          html:
            'The "bread of the governor" was a regular tax levied on the people to support their leader. It was the legitimate right of the office. Previous governors took it without hesitation — not only the official provision, but also forced contributions of wine and silver. Nehemiah, for twelve years, refused.',
        },
        {
          kind: 'commentary',
          id: 'fear-of-god',
          html:
            'For the second time in this chapter, Nehemiah invokes "the fear of God" as the motive for his restraint. He did not refuse the governor&apos;s bread because it was politically advantageous. He refused it because he feared God — because he ordered his life by God&apos;s character, not by what the office entitled him to take.',
        },
        {
          kind: 'commentary',
          id: 'one-hundred-fifty',
          html:
            'Instead of taking the tax, Nehemiah fed 150 at his own table — not just the nobles, but also visitors from surrounding nations. He bore the cost himself. The irony is profound: rather than extract from the people, he gave to them, at his own expense. His table became a place of welcome and nourishment, not extraction.',
        },
        {
          kind: 'commentary',
          id: 'required-not-bread',
          html:
            'The repetition is deliberate. "I required not the bread of the governor" appears twice in these verses. Nehemiah is not asking for credit; he is establishing a record. He is saying: remember that I could have taken from you, and I did not. And he gives the reason: "because the bondage was heavy upon this people." He felt their burden as his own.',
        },
        {
          kind: 'commentary',
          id: 'bondage-heavy',
          html:
            'This phrase — "the bondage was heavy upon this people" — is the deepest statement of Nehemiah&apos;s motive. The people are already burdened by debt, slavery, tribute to foreign kings. To add the tax of the governor on top of that would have been to break them further. Nehemiah saw their burden and chose not to add to it.',
        },
        {
          kind: 'christ',
          id: 'servant-leader-connection',
          title: 'Christ Connection — The Servant-Leader',
          html:
            'Nehemiah&apos;s refusal to take what was rightfully his echoes the pattern of Christ&apos;s self-emptying. In Philippians 2:5–8, Paul invites us to "have this mind... in you, which was also in Christ Jesus: who, being in the form of God, thought it not robbery to be equal with God; but made himself of no reputation, and took upon him the form of a servant." Nehemiah did not use his authority to extract; he used it to serve. He felt the people&apos;s burden and chose not to add to it. This mirrors Christ&apos;s descent from glory to become the servant of all. Both refused to exploit their rightful position. Both chose the way of burden-bearing.',
        },
        {
          kind: 'hebrew',
          id: 'zekhreini-leoni',
          title: 'Zekhreini Leoni — "Think Upon Me, My God, for Good"',
          script: 'זָכְרֵ֧נִי לְטוֹבָ֛ה',
          translit: '<strong>Zekhreini leoni</strong> · remember me for good; recall me to goodness',
          description:
            'This phrase does not ask God to reward Nehemiah with wealth or honor. It asks God to remember him — to hold him in mind — for the good he has done. It is an appeal to God&apos;s justice and fairness. Nehemiah trusts that his faithfulness, his refusal to extract from the people, his bearing of their burden, is something God sees and will acknowledge.',
        },
        {
          kind: 'carry',
          html:
            'Here is the deeper challenge: Nehemiah had every right to take the governor&apos;s bread. The law supported it. The custom authorized it. And yet he looked at the people — bent under debt, their children sold, their fields mortgaged — and chose not to use his authority to extract more. This is what integrity costs. This is what servant leadership means. Not power withheld from pride, but power used to bear the burden of others. Do you have any authority — as a parent, as a manager, as a friend — that you could exercise for your own benefit? What would it mean to refuse?',
        },
        {
          kind: 'reflection',
          id: 'remember-me',
          prompt: 'Nehemiah asks God to "think upon me, my God, for good, according to all that I have done for this people." What do you do, in private, when no one watches? What would you want God to remember about you?',
        },
      ],
    },
  ],
};
