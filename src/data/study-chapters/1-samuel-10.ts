import { hp, hy, hg, plain, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 10 — Saul Anointed King
 *
 * Samuel anoints Saul with oil and confirms the anointing with three signs.
 * The Spirit of God comes upon Saul, transforming him. He is hidden when chosen by lot,
 * yet the people acclaim him. The chapter ends with mixed reactions—
 * some men whose hearts God touched followed him; others despised him.
 */
export const SAMUEL_1_10: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 10,

  intros: [
    'Saul enters 1 Samuel 10 as a private citizen, searching for lost donkeys. He leaves it as the anointed king of Israel — yet he hides when chosen. The chapter moves through sacred ritual (anointing), divine confirmation (three signs), the power of the Spirit, and the mystery of a reluctant king. Every detail marks the moment Israel&#39;s request for a human king becomes God&#39;s reality, with all the beauty and danger that will follow.',
    'Samuel&#39;s role is to be the confirmer of what God is doing. The oil he pours, the signs he predicts, and the words he speaks all testify that this transformation is not Saul&#39;s ambition—it is God&#39;s anointing. Yet the chapter leaves us with an uncomfortable picture: a king chosen by God, transformed by His Spirit, hiding among the baggage, with some of his own people questioning whether he can save them.',
  ],

  opener: {
    matchArtist: /tissot|doré|schnorr/i,
    matchTitle: /(saul|anointed|king|samuel)/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 10',
    quote:
      'Samuel anointed Saul and said, "The Lord hath anointed thee to be captain over his inheritance." Three signs confirmed the calling. God&#39;s Spirit came upon Saul, turning him into another man. The people shouted, "God save the king."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 10 · Study Guide',
  },

  sections: [
    /* ─── The Vial of Oil ──────────────────────────────────────────────── */
    {
      ref: '1 Samuel 10:1',
      title: 'The Vial of Oil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 1,
              spans: [
                t('Then Samuel took a vial of oil, and poured it upon his head, and '),
                hp('kissed him', 'c-kissed'),
                t(', and said, Is it not because the Lord hath '),
                hy('anointed thee', 'hebrew-mashach'),
                t(' to be captain over his inheritance?'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mashach',
          title: 'Mashach — &ldquo;anointed&rdquo;',
          script: 'מָשַׁח',
          translit: '<strong>mashach</strong> · to anoint with oil, to consecrate',
          description:
            'The same root as <em>Messiah</em> and <em>Christ</em> — the Anointed One. To anoint a person with oil in Israel was to set them apart, to consecrate them, to mark them as God&#39;s chosen instrument for a sacred purpose.',
        },
        {
          kind: 'commentary',
          id: 'c-kissed',
          html:
            'Samuel does not simply perform a ritual; he <em>kisses</em> Saul. The oil consecrates; the kiss seals affection. Samuel is not reluctant about this king—he is endorsing him, embracing the very man he once grieved over choosing. Whatever Samuel&#39;s private doubts about Israel&#39;s request, his public act is unreserved: this man is the Lord&#39;s anointed.',
        },
        {
          kind: 'commentary',
          id: 'c-inheritance',
          html:
            'God calls Israel His &ldquo;inheritance.&rdquo; The king is not a ruler over subjects; he is a captain over God&#39;s own possession. The title says everything: Saul&#39;s authority is never his own—it is stewardship on behalf of the God who owns the land and the people. This will become the standard against which all Saul&#39;s later choices are measured.',
        },
        {
          kind: 'christ',
          id: 'christ-anointed',
          title: 'Christ Connection — The Anointed One',
          html:
            'Jesus is <em>the</em> Anointed One—Christ, literally &ldquo;the Messiah.&rdquo; But the anointing speaks to something deeper than title: to consecration, to being set apart, to being equipped by God&#39;s Spirit for a mission that only He can accomplish. When Jesus rises from the dead, the Spirit is poured out at Pentecost (Acts 2), and every believer is anointed with the same Spirit—we become, like Saul, marked as belonging to God. The difference is that Saul&#39;s anointing will not endure; Christ&#39;s does, and He shares it with all who believe.',
        },
        {
          kind: 'carry',
          html:
            'Oil in Scripture always speaks to the Spirit. To be anointed is to be marked by God as His own, set apart for His purpose. Whatever you have been called to—whether a visible platform or quiet faithfulness—you are anointed. The Spirit who fell on Saul that day is the same Spirit who anoints every believer. You are marked by God. Consecrated. Set apart. That mark never washes off.',
        },
        {
          kind: 'reflection',
          id: 'anointing',
          prompt:
            'What has God anointed you to do? Can you name your calling—not in grand terms, but as plainly as Samuel named Saul&#39;s? What would change if you believed the anointing on your life was just as real as the oil poured on Saul&#39;s head?',
        },
      ],
    },

    /* ─── The Three Signs, Part 1 ──────────────────────────────────────── */
    {
      ref: '1 Samuel 10:2–4',
      title: 'The First Sign — Lost Donkeys Found',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 2,
              spans: [
                t('When thou art departed from me today, then thou shalt find two men by Rachel&#39;s sepulchre in the border of Benjamin at Zelzah; and they will say unto thee, The asses which thou wentest to seek are found: and, lo, thy father hath left the care of the asses, and sorroweth for you, saying, '),
                hg('What shall I do for my son?', 'c-father-worry'),
                t(''),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-father-worry',
          html:
            'The first sign is tender. Saul came to the prophet to find lost donkeys. Samuel will confirm the anointing by telling him exactly how he will find them—and in the process, Saul will discover that his father has moved from worry about the donkeys to worry about his son. The detail is crucial: God knows Saul&#39;s small life, his errands, his father&#39;s love. The anointing does not lift him out of his ordinary world; it meets him in the midst of it.',
        },
      ],
    },

    /* ─── The Three Signs, Part 2 ──────────────────────────────────────── */
    {
      ref: '1 Samuel 10:3–4',
      title: 'The Second Sign — Three Gifts and a Salute',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 3,
              spans: [
                t('Then shalt thou go on forward from thence, and thou shalt come to the plain of Tabor, and there shall meet thee three men going up to God to Bethel, one carrying three kids, and another carrying three loaves of bread, and another carrying a bottle of wine: and they will salute thee, and '),
                hg('give thee two loaves of bread', 'c-sustenance'),
                t('; which thou shalt receive of their hands.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sustenance',
          html:
            'The second sign is a meeting with three men on their way to worship at Bethel. They carry provisions—kids, bread, wine—as offerings to God. They will greet Saul, recognize him (though he does not yet know his own importance), and give him bread. The sign says: you are not alone. You are known. Even strangers will offer you provision. The anointed king is sustained by the community God has called him to serve.',
        },
      ],
    },

    /* ─── The Three Signs, Part 3 ──────────────────────────────────────── */
    {
      ref: '1 Samuel 10:5–7',
      title: 'The Third Sign — The Spirit Comes Upon You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 5,
              spans: [
                t('After that thou shalt come to the hill of God, where is the garrison of the Philistines: and it shall come to pass, when thou art come thither to the city, that thou shalt meet a company of prophets coming down from the high place with a psaltery, and a tabret, and a pipe, and a harp, before them; and '),
                hg('they shall prophesy', 'c-prophesy'),
                t(':'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And '),
                hp('the Spirit of the Lord will come upon thee', 'christ-spirit'),
                t(', and '),
                hg('thou shalt prophesy with them', 'c-prophesy'),
                t(', and '),
                hy('shalt be turned into another man', 'c-another-man'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And let it be, when these signs are come unto thee, that thou do as '),
                hp('occasion serve thee', 'c-freedom'),
                t('; for God is with thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-prophesy',
          html:
            'The third sign is the most intimate and transformative: Saul will encounter a band of prophets worshiping God with music and words. He will join them. He will prophesy—speak forth God&#39;s word. He will enter the company of those who know God&#39;s voice.',
        },
        {
          kind: 'hebrew',
          id: 'c-another-man',
          title: 'Turned Into Another Man',
          script: 'נֶהְפַּכְתָּ לְאִישׁ אַחֵר',
          translit: '<strong>nehfakta le&apos;ish acher</strong> · you will be turned into a different man',
          description:
            'The Spirit of God does not educate or improve Saul gradually. He transforms him suddenly, inwardly. This is not Saul becoming more himself—it is Saul becoming <em>different</em>. The power of God to change a person from the inside out.',
        },
        {
          kind: 'commentary',
          id: 'c-freedom',
          html:
            'The phrase &ldquo;as occasion serve thee&rdquo; is cryptic. It gives Saul freedom to act as the Spirit leads him, as circumstances warrant. After the transformation, he will not be bound by fear or doubt. He will have the liberty that comes from knowing God is with him—and that freedom carries both grace and danger.',
        },
        {
          kind: 'christ',
          id: 'christ-spirit',
          title: 'Christ Connection — The Spirit of the Lord',
          html:
            'The Spirit of the Lord fell on Saul, and he was &ldquo;turned into another man.&rdquo; Jesus told Nicodemus: &ldquo;Except a man be born again, he cannot see the kingdom of God&rdquo; (John 3:3). To be born again is to be &ldquo;turned into another&rdquo; kind of person—a child of God, indwelt by His Spirit. The language of transformation, of inner change, of the Spirit of God coming upon a person—all of it radiates from Saul to every believer who encounters Christ. The gift Christ brings is the gift of the Spirit, and the work of the Spirit is to turn us into a new creation.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever felt the presence of God&#39;s Spirit—in worship, in prayer, in a moment of clarity or conviction—you have tasted what Saul tasted when the Spirit came upon him. You have been, in that moment, &ldquo;turned into another.&rdquo; It did not last permanently for Saul; his transformation did not endure. But for those who belong to Jesus, the Spirit indwells us—stays with us—and the work of turning us into a new creation is permanent. You are not who you were.',
        },
        {
          kind: 'reflection',
          id: 'spirit-transformation',
          prompt:
            'When have you felt the Spirit of God working in you? What changed in you in that moment? What would it look like to live in the continued awareness that God&#39;s Spirit is already dwelling in you, turning you into who He has called you to be?',
        },
      ],
    },

    /* ─── The Signs Come to Pass ───────────────────────────────────────── */
    {
      ref: '1 Samuel 10:8–10',
      title: 'Is Saul Also Among the Prophets?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 8,
              spans: [
                t('And thou shalt go down before me to Gilgal; and, behold, I will come down unto thee, to offer burnt offerings, and to sacrifice sacrifices of peace offerings: seven days shalt thou tarry, till I come to thee, and shew thee what thou shalt do.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And it was so, that when he had turned his back to go from Samuel, God gave him '),
                hg('another heart', 'c-another-heart'),
                t(': and all those signs came to pass that day.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And when they came thither to the hill, behold, a company of prophets met him; and the Spirit of God came upon him, and '),
                hp('he prophesied among them', 'c-prophesy-fulfilled'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-another-heart',
          html:
            'The text says God gave Saul &ldquo;another heart.&rdquo; Not a new mind, not new circumstances—a new <em>heart</em>. In Scripture, the heart is the seat of intention, will, and desire. Saul&#39;s desires change. His capacity to care about God&#39;s inheritance changes. He becomes, inwardly, someone different. And then, as Samuel predicted, all three signs happen exactly as told. God&#39;s word proves true.',
        },
        {
          kind: 'commentary',
          id: 'c-prophesy-fulfilled',
          html:
            'Saul encounters the prophets and the Spirit comes upon him. He joins their worship and speaks forth God&#39;s word. The promise is fulfilled. The people who know Saul from before are shocked. &ldquo;Is Saul also among the prophets?&rdquo; (verse 11) becomes a proverb—a saying marking surprise and incongruity. Saul is not a prophet by training or background. Yet the Spirit of God makes him one in that moment. The anointing is real.',
        },
        {
          kind: 'carry',
          html:
            'When the Spirit of God comes upon us, we become what we were not before. A timid person becomes bold. A skeptic becomes a witness. An angry person becomes patient. The change is real. Other people notice. Sometimes they are scandalized—&ldquo;Is <em>he</em> also a prophet?&rdquo;—because the transformation is so complete. If the Spirit of God is dwelling in you, you have already been &ldquo;turned into another&rdquo; kind of person. The question is whether you are living from that new heart, or still acting like the person you were before.',
        },
      ],
    },

    /* ─── Saul Hides and Reveals Nothing ──────────────────────────────── */
    {
      ref: '1 Samuel 10:11–16',
      title: 'Saul Hides His Secret',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 11,
              spans: [
                t('And all that knew him beforetime saw that he prophesied among the prophets then the people said one to another, What is this that is come unto the son of Kish? Is Saul also among the prophets?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And one of the same place answered and said, But '),
                hg('who is their father?', 'c-their-father'),
                t(' Therefore it became a proverb, '),
                hp('Is Saul also among the prophets?', 'hebrew-proverb'),
                t(''),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-their-father',
          html:
            'The question &ldquo;who is their father?&rdquo; is a play on words. It can mean: who are the prophets&#39; parents (since Saul is not their son)? Or: who is Saul&#39;s father, given that he is not the son of prophets? The point is the same: Saul comes from nowhere. He has no prophetic pedigree. Yet the Spirit of God has come upon him anyway. Pedigree does not limit God.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-proverb',
          title: '&ldquo;Is Saul Also Among the Prophets?&rdquo;',
          script: 'הִשָּׁאוּל גַּם־בִּנְבִיאִים',
          translit: '<strong>hashaaul gam bineviim</strong> · Is Saul also among the prophets?',
          description:
            'This phrase becomes a proverbial saying—a way of marking surprise and incongruity. It speaks to the shock that someone ordinary, someone with no obvious qualification, should be found in a role or company that seems incompatible with his origin.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 13,
              spans: [
                t('And when he had made an end of prophesying, he came to the high place.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Saul&#39;s uncle said unto him and to his servant, Whither went ye? And he said, To seek the asses: and when we saw they were no where, we came to Samuel.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Saul&#39;s uncle said, Tell me, I pray thee, what Samuel said unto you.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Saul said unto his uncle, He told us plainly that the asses were found. But '),
                hg('of the matter of the kingdom, whereof Samuel spake', 'c-hidden'),
                t(', he told him not.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hidden',
          html:
            'Saul keeps the greatest news to himself. He tells his uncle the small thing—the donkeys are found—but hides the vast thing: he is to be king. Why? Fear? Humility? Uncertainty? The text does not explain. This silence marks Saul from the start. He knows something Samuel has revealed, but he does not speak it. The future will show whether this silence flows from wisdom or from a deeper hesitation about the calling God has given him.',
        },
        {
          kind: 'carry',
          html:
            'There are seasons when God gives us a word, a calling, a truth we know is His—and we are silent about it. We do not trumpet it. We do not announce it. We carry it quietly until the time is ripe to speak it or live it. That silence can be the silence of wisdom, of trust, of a heart still settling what God has said. But it can also be the silence of doubt, of fear, of reluctance. Pay attention to your own silence. Is it the silence of a faith being quietly deepened? Or is it the silence of a calling you are not yet ready to answer?',
        },
      ],
    },

    /* ─── The King Chosen by Lot ───────────────────────────────────────── */
    {
      ref: '1 Samuel 10:17–25',
      title: 'The King Found Among the Baggage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 17,
              spans: [
                t('And Samuel called the people together unto the Lord to Mizpeh; and said unto them, Thus saith the Lord God of Israel, I brought up Israel out of Egypt, and delivered you out of the hand of the Egyptians, and out of the hand of all kingdoms, and of them that oppressed you: and ye have this day rejected your God, who himself saved you out of all your adversities and your tribulations; and ye have said unto him, Nay, but set a king over us. Now therefore present yourselves before the Lord by your tribes, and by your thousands.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rejected',
          html:
            'Samuel summons all Israel and reminds them: God has rescued you. God has been your King. And you have rejected Him—you have asked for a human king instead. The anointing of Saul is real, and it is also a judgment on Israel&#39;s refusal to let God reign over them. Samuel does not hide this. The introduction to the king is also a reminder of what was lost.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 18,
              spans: [
                t('And when Samuel had caused all the tribes of Israel to come near, the tribe of Benjamin was taken. And when he had caused the tribe of Benjamin to come near by their families, the family of Matri was taken: and Saul the son of Kish was taken: and when they sought him, he could not be found.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Therefore they inquired of the Lord further, if the man should yet come thither. And the Lord answered, Behold, he hath '),
                hg('hid himself among the stuff', 'c-hidden-among-stuff'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And they ran and fetched him thence: and when he stood among the people, '),
                hy('he was higher than any of the people from his shoulders and upward', 'c-head-and-shoulders'),
                t('.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And Samuel said to all the people, See ye him whom the Lord hath chosen, that there is none like him among all the people? And all the people shouted, and said, '),
                hp('God save the king', 'christ-king'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hidden-among-stuff',
          html:
            'When the lot is cast and Saul&#39;s name comes up—when God has chosen him publicly—Saul hides among the baggage. Is this humility? Is this fear? The text leaves it ambiguous. He was already hidden when Samuel anointed him; now he hides when chosen by the whole people. This reticence will mark him throughout his reign. The people must pull him out. He does not step forward.',
        },
        {
          kind: 'commentary',
          id: 'c-head-and-shoulders',
          html:
            'When Saul stands, he is visibly taller than everyone else—head and shoulders above them. He looks like a king. He was made for the role physically. Yet his interior is still uncertain. Physical stature and inward conviction are not the same thing.',
        },
        {
          kind: 'christ',
          id: 'christ-king',
          title: 'Christ Connection — God Save the King',
          html:
            'The people cry out, &ldquo;God save the king.&rdquo; Here is a king whom God has chosen, anointed, and presented—yet who hides when called. Jesus is the King of kings—God&#39;s true anointed—yet He came as a servant. He did not hide among the baggage, but He humbled Himself. He did not grasp at the throne; He emptied Himself, took on flesh, and died on a cross. The contrast is sharp: Saul is anointed and hides from it; Christ is anointed and embraces the servant&#39;s path. When we cry, &ldquo;God save the king,&rdquo; we are calling on Christ to be our King—not in power we can see, but in a kingdom already inaugurated and not yet fully visible.',
        },
        {
          kind: 'carry',
          html:
            'It is one thing to be chosen. It is another thing to step forward and own the calling. Saul was anointed, yet he hid. He was chosen by lot before all Israel, yet they had to find him among the baggage. Do you know who you are in God? Have you stepped forward into the calling He has given you? Or are you still hiding—waiting for someone else to call your name, reluctant to stand up and claim the role you have been given?',
        },
        {
          kind: 'reflection',
          id: 'king-found',
          prompt:
            'If Saul represents the reluctance to own our calling, what are you hiding from? What gift, what talent, what role has God given you that you have not yet stepped into? What would it mean to come out from among the baggage?',
        },
      ],
    },

    /* ─── Those Whose Hearts God Touched ───────────────────────────────── */
    {
      ref: '1 Samuel 10:26–27',
      title: 'Whose Hearts God Touched',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 22,
              spans: [
                t('And Samuel said to all the people, See ye him whom the Lord hath chosen, that there is none like him among all the people? And all the people shouted, and said, God save the king.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Then Samuel told the people the manner of the kingdom, and wrote it in a book, and laid it up before the Lord. And Samuel sent all the people away, every man to his house.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Saul also went home to Gibeah; and there went with him a band of men, whose hearts the Lord had touched.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('But the children of Belial said, How shall this man save us? and they despised him, and brought him no presents. But he held his peace.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-band-touched',
          html:
            'Saul returns home, and with him goes &ldquo;a band of men, whose hearts the Lord had touched.&rdquo; These are not warriors Saul conscripted. They are men whom God Himself moved—whose hearts were stirred to follow the anointed king. It is a small company, but they are His.',
        },
        {
          kind: 'commentary',
          id: 'c-belial',
          html:
            '&ldquo;The children of Belial&rdquo; are those set against God—rebels, worthless ones. They mock Saul: &ldquo;How shall this man save us?&rdquo; They bring him no gifts, no honor. It is contempt and rejection. The king is accepted and rejected in the same moment. Some hearts God touches; others remain hardened. Saul&#39;s response is silence—he does not defend himself, does not rage, does not strike back. Whether this is restraint or weakness, we cannot yet tell.',
        },
        {
          kind: 'carry',
          html:
            'God has His people—those whose hearts He has touched. They are not always the majority. They are not always the loudest or most powerful. But they are real, and they follow. At the same time, there are always those who despise what God is doing, who mock His chosen ones, who refuse to honor what God honors. To follow Jesus is to be loved fiercely by some and despised by others. Do not be surprised by either. What matters is whether you are among those whose heart God has touched.',
        },
        {
          kind: 'reflection',
          id: 'hearts-touched',
          prompt:
            'Can you identify the people in your life whose hearts God has touched—people who see and affirm what God is doing? How does their presence strengthen you? And how do you respond when people despise what matters to you or mock what you believe?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'chapter-reflection',
          prompt:
            'In this chapter, Saul is anointed, transformed, chosen, and hidden—all at once. Where are <em>you</em> in that arc? Have you been anointed by God? Transformed by His Spirit? Chosen? Or are you still hiding, waiting for the calling to become real enough to step into?',
        },
      ],
    },
  ],
};
