import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 28 — David's Last Public Address
 *
 * David, now aged and approaching the end of his reign, convenes the princes,
 * captains, and leaders of Israel in Jerusalem. In his final public charge, he
 * reveals what God has shown him: Solomon, not himself, will build the Lord's
 * house. The temple pattern comes by Spirit, as Moses received the tabernacle
 * pattern. David charges his son directly — "Know thou the God of thy father;
 * serve Him with a perfect heart." Then he gives Solomon the architectural
 * pattern, detailed specifications, and a final covenant: "Be strong and do it;
 * fear not, nor be dismayed — for the Lord God, even my God, will be with
 * thee; He will not fail thee, nor forsake thee, until thou hast finished all
 * the work for the service of the house of the Lord."
 */
export const CHRONICLES_1_28: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 28,

  estimatedMinutes: { beginner: 9, intermediate: 16, deep: 21 },
  intros: [
    'David&apos;s reign is drawing to a close. He has conquered enemies, secured the kingdom, and gathered immense treasure. But one thing remains undone: the house of the Lord. David himself is called a "man of war," and God has told him he cannot build the temple. Instead, the Lord has chosen Solomon, David&apos;s son.',
    'In this chapter, David makes his final public appearance before all Israel&apos;s leaders. He does not announce his successor in anger or resignation. Rather, he speaks with the authority of one who understands God&apos;s purposes. He recounts God&apos;s word to him. He commissions Solomon not merely as a political heir, but as a covenant son. And in an act of profound spiritual transmission, David gives Solomon the temple pattern — the complete architectural design that God showed to David by the Spirit, just as God showed Moses the tabernacle pattern. David&apos;s last great work is to prepare his son, and to ensure that what God has shown him passes faithfully to the next generation.',
  ],

  bottomShare: {
    quote:
      'David&apos;s final charge to Solomon: "Know thou the God of thy father, and serve Him with a perfect heart and with a willing mind; for the Lord searcheth all hearts... Be strong, and do it; fear not, nor be dismayed — for the Lord God, even my God, will be with thee."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 28 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-david',
      kind: 'archaeology',
      source: 'British Museum',
      label: 'David in the Ancient Near East',
      url: 'https://www.britishmuseum.org/',
      description: 'British Museum collections on Iron Age Levantine kingdoms and David.',
    },
  ],

  sections: [
    /* ─── 1 Chronicles 28:1 — The Assembly Summoned ────────────────────── */
    {
      ref: '1 Chronicles 28:1',
      title: 'The Great Assembly Summoned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(
              1,
              'And David assembled all the princes of Israel, the princes of the tribes, and the captains of the companies that served the king by division, and captains over thousands, and captains over hundreds, and the stewards over all the substance and possessions of the king, and of his sons, with the officers, and with the mighty men, and with all the valiant men, unto Jerusalem.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'assembly-summoned',
          html:
            'David gathers not a casual audience but the governing structure of the entire kingdom: princes of the tribes, military captains, stewards of the royal estates, officers, and mighty men. This is not a private moment. This is the nation assembled. David stands before them not as a warrior claiming territory, but as a father preparing to pass authority to his son. [res:british-museum-david]',
        },
        {
          kind: 'carry',
          html:
            'When we face significant transitions in life — passing leadership, stepping back from work, preparing the next generation — do we do it alone, or do we gather witnesses? David brings the people. He makes his transition public, visible, and binding on the community that will follow Solomon.',
        },
        {
          kind: 'reflection',
          id: 'assembly-summoned-reflect',
          prompt:
            'Think of a time when you passed responsibility to someone else, or received responsibility from someone. How did having witnesses to that moment matter?',
        },
      ],
    },

    /* ─── 1 Chronicles 28:2–8 — David's Heart for the Temple ───────────── */
    {
      ref: '1 Chronicles 28:2–8',
      title: 'David&apos;s Heart for the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 2,
              spans: [
                t('And David stood up upon his feet, and said, Hear me, my brethren, and my people: As for me, I '),
                hg('had in mine heart to build an house of rest', 'david-intention'),
                t(' for the ark of the covenant of the Lord, and for the footstool of our God, and had made ready for the building:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('But God said unto me, '),
                hg('Thou shalt not build an house for my name, because thou hast been a man of war, and hast shed blood', 'david-warriors-disqualify'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Howbeit the Lord God of Israel chose me before all the house of my father to be king over Israel for ever: for he hath chosen Judah to be the ruler; and of the house of Judah, the house of my father; and among the sons of my father he liked me to make me king over all Israel:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-28-mid-4',
          html:
            '<p>These connections reveal how God&apos;s family plan unfolded across centuries.</p>',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 5,
              spans: [
                t('And of all my sons (for the Lord hath given me many sons,) '),
                hp('he hath chosen Solomon my son to sit upon the throne of the kingdom of the Lord over Israel', 'solomon-chosen'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And he said unto me, Solomon thy son, '),
                hg('he shall build my house and my courts', 'solomon-builder'),
                t(': for I have chosen him to be my son, and I will be his father.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Moreover I will establish his kingdom for ever, if he be constant to do my commandments and my judgments, as at this day.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Now therefore in the sight of all Israel the congregation of the Lord, and in the audience of our God, keep and seek for all the commandments of the Lord your God: that ye may possess this good land, and leave it for an inheritance for your children after you for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'david-intention',
          html:
            'David speaks openly: his own heart yearned to build the temple. He prepared the materials, gathered the resources, made himself ready. This is no reluctant step-aside. David genuinely desired to construct God&apos;s house. But God chose otherwise.',
        },
        {
          kind: 'commentary',
          id: 'david-warriors-disqualify',
          html:
            'God&apos;s reason is clear: David is a man of war who has shed blood. The temple, the place where God&apos;s presence dwells, must be built by hands that have not been instruments of death. This is not a rejection of David&apos;s kingship or his covenant with God. It is a particular calling. Some works require seasons of peace. Some builders must be men of peace.',
        },
        {
          kind: 'commentary',
          id: 'solomon-chosen',
          html:
            'The Lord says to David directly: "Of all my sons, he hath chosen Solomon my son." The emphasis is profound. David had many sons. But among them all, the Lord chose this one. The choice is royal and divine both.',
        },
        {
          kind: 'commentary',
          id: 'solomon-builder',
          html:
            'Solomon will build the house of the Lord. Not in some distant future. This is the work for which God has prepared him. David&apos;s blessing passes to Solomon — not merely the throne, but the sacred trust.',
        },
        {
          kind: 'hebrew',
          id: 'menucha',
          title: 'Menucha — "House of Rest"',
          script: 'מְנוּחָה',
          translit: '<strong>Menucha</strong> · rest; resting place; dwelling place',
          description:
            'David says he desires to build a "house of rest" for the ark of the covenant — the menucha, the resting place of God. The temple is not merely a building of stone and gold. It is the place where God rests, where His presence dwells at peace among His people. The word carries both the sense of completion and of sacred stillness.',
        },
        {
          kind: 'christ',
          id: 'david-temple-foreshadow',
          title: 'Christ Connection — The Temple Builder',
          html:
            'Jesus Himself speaks of His body as the temple: &quot;Destroy this temple, and in three days I will raise it up&quot; (John 2:19). He is the true house of God, the dwelling place of God (Colossians 2:9). Just as Solomon — the son of David, chosen by the Lord — built the earthly temple, Christ is the chosen Son who is Himself the ultimate temple, the sanctuary in which the fullness of God comes to dwell. And Christ promises that the faithful will themselves become living temples: &quot;Know ye not that ye are the temple of the Holy Ghost?&quot; (1 Corinthians 6:19). The pattern continues — Christ the chosen Son is both Builder and Building.',
        },
        {
          kind: 'carry',
          html:
            'David&apos;s acceptance of his own limitation teaches us something profound about maturity. He does not sulk over what he cannot do. He focuses entirely on preparing the one who can. In our own lives, we may face moments when we realize that a work we hoped to accomplish will be done by someone else — by our children, by those who come after us. David shows us how to pass the baton with joy, not resentment.',
        },
        {
          kind: 'reflection',
          id: 'david-intention-reflect',
          prompt:
            'What dream or work did you once hope to accomplish that was given to someone else? How have you come to peace with that, or are you still wrestling with it?',
        },
      ],
    },

    /* ─── 1 Chronicles 28:9 — Know Thou the God of Thy Father ──────────── */
    {
      ref: '1 Chronicles 28:9',
      title: 'Know Thou the God of Thy Father',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 9,
              spans: [
                t('And thou, Solomon my son, '),
                hp('KNOW THOU THE GOD OF THY FATHER', 'solomon-know-god'),
                t(', and '),
                hg('SERVE HIM WITH A PERFECT HEART AND WITH A WILLING MIND', 'solomon-perfect-heart'),
                t(': for the '),
                hy('LORD SEARCHETH ALL HEARTS', 'lord-searches-hearts'),
                t(', AND '),
                hy('UNDERSTANDETH ALL THE IMAGINATIONS OF THE THOUGHTS', 'lord-understands-thoughts'),
                t(': '),
                hg('if thou seek him, he will be found of thee; but if thou forsake him, he will cast thee off for ever', 'seek-forsake'),
                t('. '),
                hg('TAKE HEED NOW', 'take-heed'),
                t('; for the '),
                hp('LORD HATH CHOSEN THEE TO BUILD AN HOUSE FOR THE SANCTUARY', 'chosen-sanctuary'),
                t(': '),
                hg('BE STRONG, AND DO IT', 'be-strong-do-it'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'solomon-know-god',
          html:
            'David speaks directly to his son, using his name: "And thou, Solomon." This is not a general exhortation to the assembled people. This is a father speaking to his son across the threshold of power. "Know thou the God of thy father" — the God is relational. It is not distant theology or abstract doctrine. It is the God whom David has known, the God David has covenanted with. And Solomon is called to know that same God, in that same relational way.',
        },
        {
          kind: 'commentary',
          id: 'solomon-perfect-heart',
          html:
            'The call is not to perfection of action (an impossible standard), but to a "perfect heart" — a heart that is whole, undivided, committed entirely to the Lord. And "with a willing mind" — not by coercion or obligation, but by genuine choice. This is the covenant language of Deuteronomy: love the Lord your God with all your heart.',
        },
        {
          kind: 'hebrew',
          id: 'shalem',
          title: 'Shalem — "Perfect" or "Whole"',
          script: 'שָׁלֵם',
          translit: '<strong>Shalem</strong> · perfect; whole; complete; at peace',
          description:
            'David asks Solomon to serve with a "perfect heart" — a shalem heart, a whole heart, a heart that is at peace within itself because it is entirely devoted to one thing. Not divided, not wavering, but complete and intact in its allegiance.',
        },
        {
          kind: 'commentary',
          id: 'lord-searches-hearts',
          html:
            'Why this emphasis? Because the Lord searches all hearts. Solomon may deceive the people, may maintain outward appearances of piety, may build a temple of surpassing beauty. But God knows what is truly within. The call to know the God of thy father is a call to transparency before God — to align the internal and external, what God sees and what the world sees.',
        },
        {
          kind: 'hebrew',
          id: 'chaqar',
          title: 'Chaqar — "Search" or "Examine"',
          script: 'חָקַר',
          translit: '<strong>Chaqar</strong> · search; investigate; examine thoroughly; penetrate',
          description:
            'The verb "searcheth" carries the sense of thorough, penetrating investigation. God does not merely glance at the heart; He searches it, examines it, knows it completely. This echoes Psalm 139: "O Lord, thou hast searched me, and known me."',
        },
        {
          kind: 'commentary',
          id: 'lord-understands-thoughts',
          html:
            'God not only knows what is in the heart; He understands "all the imaginations of the thoughts." The Hebrew word yetzer suggests the forming, shaping, inclination of thought. God knows the deepest patterns of our minds before they become action. This is the language of Hebrews 4:12-13: the word of God "is a discerner of the thoughts and intents of the heart."',
        },
        {
          kind: 'commentary',
          id: 'seek-forsake',
          html:
            'David lays out the covenant in stark terms: if Solomon seeks the Lord, he will be found. This is the promise of Deuteronomy 4:29. But if he forsakes the Lord, God will cast him off forever. Not for a season. Not for a punishment that can be appeased. Forever. This is the cost of privilege, of being chosen.',
        },
        {
          kind: 'commentary',
          id: 'take-heed',
          html:
            '"Take heed now" — the present moment. Not "someday when you feel like it." Not "when the pressure is on." Now. While you stand before the assembly. While the weight of this work is fresh upon you. Covenant-making is an act of present intention.',
        },
        {
          kind: 'commentary',
          id: 'chosen-sanctuary',
          html:
            'The Lord has chosen Solomon to build the house of the sanctuary — the holy place, the place where God&apos;s holiness dwells. This is not a secular building project. Every stone placed, every measurement made, every detail attended to is an act of worship, of building the place where heaven and earth meet.',
        },
        {
          kind: 'commentary',
          id: 'be-strong-do-it',
          html:
            '"Be strong, and do it." These same words will be spoken to Joshua as he prepares to lead Israel into the Promised Land. They are words of command, comfort, and empowerment all at once. The work is difficult. But the command is clear. And the strength to accomplish it will be given.',
        },
        {
          kind: 'christ',
          id: 'christ-knows-hearts',
          title: 'Christ Connection — The One Who Knows All Hearts',
          html:
            'John 2:24-25 tells us: &quot;But Jesus did not commit himself unto them, because he knew all men... for he needed not that any should testify of man: for he knew what was in man.&quot; Christ is the one who searches hearts. And His first call to any who would follow Him is the same as David&apos;s call to Solomon: &quot;Know me.&quot; Not abstractly, not from a distance, but in the deep relational way that David knew the God of his fathers. And Christ promises, &quot;If ye seek me, ye shall find me&quot; (Jeremiah 29:13).',
        },
        {
          kind: 'carry',
          html:
            'David&apos;s charge reveals something profound about what it means to lead. It is not enough to make good decisions or build impressive structures. The foundation is always the same: knowing God. Seeking Him. Serving with a whole heart. When we face our own work — whether building something literal or figurative, whether in family or in profession — the question David asks Solomon is the question we must ask ourselves: Do I truly know the God I claim to serve?',
        },
        {
          kind: 'reflection',
          id: 'know-god-reflect',
          prompt:
            'What does it mean to you to "know God" — not merely to know about God, but to know Him as a person you have covenanted with? How does that knowing shape what you do?',
        },
      ],
    },

    /* ─── 1 Chronicles 28:10–19 — The Spirit-Given Pattern ────────────── */
    {
      ref: '1 Chronicles 28:10–19',
      title: 'The Pattern Given by the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 10,
              spans: [
                t('Take heed now; for the Lord hath chosen thee to build an house for the sanctuary: be strong, and do it.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Then David gave to Solomon his son the '),
                hg('pattern of the porch', 'temple-pattern-design'),
                t(', and the houses thereof, and the treasuries thereof, and the upper chambers thereof, and the inner parlours thereof, and of the place of the mercy seat,'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the pattern of all that he had by the spirit, of the courts of the house of the Lord, and of all the chambers round about, of the treasuries of the house of God, and of the treasuries of the dedicated things:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Also for the courses of the priests and the Levites, and for all the work of the service of the house of the Lord, and for all the vessels of service in the house of the Lord.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Even the weight of the gold for things of gold, and the silver for things of silver, and for all manner of work to be made by the hands of artificers. And who then is willing to consecrate his service this day unto the Lord?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1chr28-pattern-given',
          html:
            'David hands Solomon the blueprints — the pattern of the porches, the courts, the chambers, the weight of every implement. The temple is not improvised; it is received.',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 15,
              spans: [
                t('Then the chief of the fathers and princes of the tribes of Israel, and the captains of thousands and of hundreds, with the rulers of the king&apos;s work, offered willingly,'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And gave for the service of the house of God of gold five thousand talents and ten thousand drams, and of silver ten thousand talents, and of brass eighteen thousand talents, and one hundred thousand talents of iron.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And they with whom precious stones were found gave them to the treasure of the house of the Lord, by the hand of Jehiel the Gershonite.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Then David the king said unto all the congregation, Solomon my son, whom alone God hath chosen, is yet young and tender, and the work is great: for the palace is not for man, but for the Lord God.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Now I have prepared with all my might for the house of my God the gold, the silver, and the brass, and the iron, and the wood, and onyx stones, and stones to be set, gums, and all manner of precious stones, and marble stones in abundance.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'temple-pattern-design',
          html:
            'David hands to Solomon not vague instructions but a detailed, visible pattern. The porch, the houses, the treasuries, the upper chambers, the inner parlors — every element is specified. This is not metaphorical. This is architectural precision.',
        },
        {
          kind: 'commentary',
          id: 'pattern-by-spirit',
          html:
            'But here is the extraordinary claim: "the pattern of all that he had by the spirit." David did not dream this pattern up from his own imagination. He received it from God. The temple was shown to David by the Spirit, just as God showed Moses the pattern of the tabernacle (Exodus 25:9). The work of building is never merely human. It is always grounded in a revelation from God, a pattern from the Spirit.',
        },
        {
          kind: 'hebrew',
          id: 'tavnit',
          title: 'Tavnit — "Pattern" or "Model"',
          script: 'תַּבְנִית',
          translit: '<strong>Tavnit</strong> · pattern; model; design; form; likeness',
          description:
            'The word "tavnit" suggests not merely a two-dimensional blueprint but a three-dimensional model, something you can see and touch and understand spatially. God showed David the tavnit — the complete, intelligible form of what was to be built.',
        },
        {
          kind: 'commentary',
          id: 'palace-not-for-man',
          html:
            'David addresses the assembled people: "The palace is not for man, but for the Lord God." This reframes the entire work. It is not a royal residence. It is a house for God. Every stone, every piece of gold, every moment of labor is consecrated to this purpose.',
        },
        {
          kind: 'christ',
          id: 'christ-spirit-pattern',
          title: 'Christ Connection — Built by the Spirit According to God&apos;s Pattern',
          html:
            'Just as David received the temple pattern by the Spirit, the apostle Paul speaks of the church as built &quot;fitly framed together... a holy temple in the Lord&quot; (Ephesians 2:21). The church is constructed according to a pattern shown by the Spirit — not a pattern of stone and gold, but of living stones: believers built together into God&apos;s dwelling place. And Christ Himself is &quot;the pattern&quot; — the design by which all who believe are being conformed. Paul writes, &quot;Be ye therefore followers of God as dear children&quot; (Ephesians 5:1). The eternal pattern was revealed to David for a temporal building. The same pattern, mediated through Christ, builds the eternal church.',
        },
        {
          kind: 'carry',
          html:
            'David doesn&apos;t hand Solomon vagueness or sentiment. He hands him specifications. The materials are prepared. The work is defined. And yet the foundation of it all is that Solomon must know the God who gave the pattern. In our own work, we too are called to do the practical, detailed thing — to show up, to prepare, to execute faithfully — while keeping our eyes on the God whose purpose the work serves.',
        },
        {
          kind: 'reflection',
          id: 'pattern-reflect',
          prompt:
            'When have you received clear guidance about something you were meant to build or accomplish — whether literally or figuratively? How did you know it was from God and not merely your own desire?',
        },
      ],
    },

    /* ─── 1 Chronicles 28:20–21 — Be Strong; Fear Not; He Will Not Fail ─ */
    {
      ref: '1 Chronicles 28:20–21',
      title: 'Be Strong and Do It; Fear Not; He Will Not Fail Thee',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 20,
              spans: [
                t('And David said to Solomon his son, '),
                hg('Be strong and of good courage, and do it', 'be-strong-courage'),
                t(': '),
                hg('fear not, nor be dismayed', 'fear-not-dismayed'),
                t(': for the '),
                hp('LORD GOD, EVEN MY GOD, WILL BE WITH THEE', 'lord-with-thee'),
                t('; '),
                hp('he will not fail thee, nor forsake thee', 'not-fail-forsake'),
                t(', until thou hast '),
                hg('finished all the work for the service of the house of the Lord', 'finished-work'),
                t('.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And, behold, the courses of the priests and the Levites shall be with thee for all the service of the house of God: and there shall be with thee for all manner of workmanship every willing skillful man for any manner of service: also the princes and all the people will be wholly at thy commandment.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'be-strong-courage',
          html:
            'David repeats the command: "Be strong and of good courage, and do it." These words echo Joshua 1:6-7, where God Himself speaks to Joshua as he prepares to lead Israel: "Be strong and of a good courage: for unto this people shalt thou divide for an inheritance the land, which I sware unto their fathers to give them." Solomon, like Joshua, stands at a threshold. A great work awaits. The command is the same.',
        },
        {
          kind: 'commentary',
          id: 'fear-not-dismayed',
          html:
            '"Fear not, nor be dismayed." These words come not from Solomon&apos;s own courage, but from David&apos;s certainty about who will sustain him. David is not saying: "You are strong enough; you can do this." He is saying: "The Lord is strong; the Lord will do this."',
        },
        {
          kind: 'commentary',
          id: 'lord-with-thee',
          html:
            '"The Lord God, even my God, will be with thee." Notice the emphasis: "my God" — the God David knows, the God David has covenanted with. David is not handing Solomon to an abstract deity. He is handing him to the God who has been faithful to David. The God who will be with Solomon is the God David has known.',
        },
        {
          kind: 'commentary',
          id: 'not-fail-forsake',
          html:
            '"He will not fail thee, nor forsake thee." This promise appears in Deuteronomy 31:6 and Joshua 1:5. It will appear again in Hebrews 13:5, applied to all believers: "I will never leave thee, nor forsake thee." It is the fundamental assurance of the covenant. The Lord does not withdraw. He does not abandon His people in the midst of their work.',
        },
        {
          kind: 'commentary',
          id: 'finished-work',
          html:
            'The promise is specific: He will not fail you "until thou hast finished all the work for the service of the house of the Lord." The covenant extends for the full duration of the labor. Solomon is not left alone mid-project, wondering if God still cares. The promise endures to completion.',
        },
        {
          kind: 'christ',
          id: 'christ-never-fails',
          title: "Christ Connection — &quot;I Will Never Leave Thee Nor Forsake Thee&quot;",
          html:
            'Hebrews 13:5 applies this very promise to all who follow Christ: &quot;I will never leave thee, nor forsake thee.&quot; Hebrews 3:6 tells us that Christ is &quot;faithful over his own house as a son... whose house are we.&quot; Just as David was faithful, just as Solomon was called to faithfulness, Christ is the faithful Son who will not abandon the house of God — which is the church, the people of believers. This faithfulness is not conditional on our strength or our worthiness. It is grounded in Christ&apos;s nature. He cannot fail. He will not forsake.',
        },
        {
          kind: 'carry',
          html:
            "When we face work that overwhelms us — work that seems too large, requiring skills we do not fully possess, demanding more than we think we can give — the covenant promise stands. Not: &quot;You will be strong enough.&quot; But: &quot;The Lord will be with you. He will not fail you. He will not forsake you until the work is finished.&quot; This is the word David speaks. This is the word that sustains all who have answered God&apos;s call.",
        },
        {
          kind: 'reflection',
          id: 'fear-not-reflect',
          prompt:
            'What work or calling do you carry right now that feels too large? What would it mean for you to trust that the Lord will not fail you, nor forsake you, until that work is finished?',
        },
      ],
    },
  ],
};
