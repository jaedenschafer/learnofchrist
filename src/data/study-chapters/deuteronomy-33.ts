import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 33 — Moses&apos; Blessing on the Tribes
 *
 * Before his death on Mount Nebo, Moses gathers the twelve tribes and pronounces
 * a blessing on each one. This chapter echoes Jacob&apos;s blessing in Genesis 49
 * but with a different tenor: not judgment, but encouragement and God&apos;s protection.
 * The chapter opens with a theophany (God coming from Sinai) and closes with a
 * doxology that is among the most exalted in Scripture. "The eternal God is thy
 * refuge, and underneath are the everlasting arms."
 */
export const DEUTERONOMY_33: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 33,

  estimatedMinutes: { beginner: 7, intermediate: 14, deep: 17 },
  intros: [
    'Deuteronomy 33 is Moses&apos; final blessing — his last word over Israel before he dies alone on Mount Nebo. Unlike Jacob&apos;s oracle in Genesis 49, which holds both blessing and curse, Moses pronounces only encouragement. Each tribe receives a word that speaks to their geography, their calling, their inheritance. The blessing is poetic, condensed, sometimes cryptic — but always it points to God&apos;s faithfulness.',
    'The chapter begins with an extraordinary theophany: "The Lord came from Sinai, and rose up from Seir unto them; he shined forth from mount Paran." God appears in glory, descending to His people with ten thousand saints. Levi is blessed for their fidelity to the covenant — those who loved God more than family. Joseph receives a vision of abundance, his land blessed with heavenly treasures. And then the chapter climaxes not with the tribes but with God Himself: "The eternal God is thy refuge, and underneath are the everlasting arms." This is the foundation of John 10:28–29. This is the refuge that will not fail. This is the place where Christ will sit at the right hand of the Father.',
    'Moses died, but this blessing did not. Two thousand years later, believers still rest on those everlasting arms. In every season, in every darkness, the God who sheltered the tribes at Sinai still shelters us.',
  ],

    resources: [
    {
      id: 'sefaria-deuteronomy-33',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 33',
      url: 'https://www.sefaria.org/Deuteronomy.33',
      description: 'Open-access source text and rabbinic commentary on Moses&apos; tribal blessings [res:sefaria-deuteronomy-33], the Lord as protector, and the chosen people&apos;s hope.',
    },
    {
      id: 'biblical-poetry-blessing-form-ancient-israel',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Blessing Poetry and Tribal Identity',
      url: 'https://www.intertextual.bible/',
      description: 'Literary and theological analysis of the blessing genre [res:biblical-poetry-blessing-form-ancient-israel] in ancient Israel, echoing Jacob&apos;s blessings and foreshadowing New Testament fulfillment.',
    },
  ],

  sections: [
    /* ─── Deuteronomy 33:1–5 — The Theophany from Sinai ──────────────────── */
    {
      ref: 'Deuteronomy 33:1–5',
      title: 'The Theophany from Sinai',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 1,
              spans: [
                t('And this is the blessing, wherewith Moses the man of God blessed the children of Israel '),
                hg('before his death', 'c-before-death'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-before-death',
          html:
            'Moses is about to ascend Mount Nebo and die alone. This is his final act as the mediator between God and Israel. Just as Jacob gathered his sons to pronounce their futures, Moses gathers the tribes to speak God&apos;s favor over them. The blessing is an inheritance, spoken from a dying father who will not cross the Jordan.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 2,
              spans: [
                t('And he said, '),
                hp('The Lord came from Sinai', 'sinai-theophany'),
                t(', and rose up from Seir unto them; he shined forth from mount Paran, and he came with '),
                hg('ten thousands of saints', 'c-ten-thousands'),
                t(': from his right hand went a fiery law for them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sinai-theophany',
          html:
            'This opening invokes God&apos;s descent at Sinai. The geographical names — Sinai, Seir, Paran — mark the mountain range where God revealed Himself to the people. Now, forty years after that revelation, the same God appears again, not in fire and thunder to terrify, but in glory to bless. Habakkuk 3:3 echoes this exact vision: "God came from Teman, and the Holy One from mount Paran."',
        },
        {
          kind: 'commentary',
          id: 'c-ten-thousands',
          html:
            'The "ten thousands of saints" are the heavenly hosts — God&apos;s holy ones who attend Him. This is not a private moment; it is a cosmic event. The God who is surrounded by the entire heavenly court is the one stooping to bless twelve tribes on the edge of a wilderness.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 3,
              spans: [
                t('Yea, he '),
                hp('loved the people', 'god-loves'),
                t('; all his saints are in thy hand: and they sat down at thy feet; every one shall receive of thy words.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'god-loves',
          html:
            'After the theophany, the first word is love. Not justice, not holiness, but love. God "loved the people" — this is foundation. All that follows flows from this single fact: God chose them, sees them, holds them in His hand.',
        },
        {
          kind: 'christ',
          id: 'christ-everlasting-arms',
          title: 'Christ Connection — Love Behind the Law',
          html:
            'This opening vision — God appearing in glory, surrounded by ten thousand saints, but His first word to His people is "I love you" — is the entire Gospel in miniature. John will later write: "Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God" (1 John 3:1). The law is not the first thing God shows His people; love is. Jesus embodied this: His final words were of love and forgiveness, not condemnation. The saints sit at God&apos;s feet to hear His words — just as the disciples sat at Jesus&apos; feet. The God who descends is the God who draws near.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 4,
              spans: [
                t('Moses commanded us a law, even the inheritance of the congregation of Jacob.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And he was king in Jeshurun, when the heads of the people and the tribes of Israel were gathered together.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yeshurun',
          title: 'Yeshurun — "The upright one"',
          script: 'יְשֻׁרוּן',
          translit: '<strong>Yeshurun</strong> · the upright one; a poetic name for Israel',
          description:
            'This is Israel&apos;s covenant name, invoking their identity as God&apos;s people called to walk uprightly. In Isaiah 44:2, God calls Israel "Jeshurun" with tenderness. It is a name that speaks to their calling, not their failure.',
        },
        {
          kind: 'commentary',
          id: 'c-king',
          html:
            'The text says God was king over Jeshurun — the true sovereign of Israel. Moses has delivered the law, the inheritance of the congregation. Now Israel gathers not to hear judgment but to be blessed by the God who rules over them with love.',
        },
        {
          kind: 'carry',
          html:
            'You sit at the feet of a God who loves you. Not a God who barely tolerates you, not a God angry at you for your failures, but a God who came down from heaven because His love for you required it. That love is the beginning of everything — the law, the covenant, the inheritance, your place in His family. What would change in you if you truly believed God loved you like Moses is describing?',
        },
        {
          kind: 'reflection',
          id: 'deut33-sinai',
          prompt: 'When have you felt most loved by God? What made it real to you, not just a concept?',
        },
      ],
    },

    /* ─── Deuteronomy 33:6–25 — Blessings on the Tribes ──────────────────── */
    {
      ref: 'Deuteronomy 33:6–25',
      title: 'Blessings on the Tribes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 6,
              spans: [
                t('Let Reuben live, and not die; and let not his men be few.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-reuben-brief',
          html:
            'Reuben was Jacob&apos;s firstborn but lost the birthright for his sin with Bilhah (Genesis 35:22). Moses&apos; blessing is simple and brief: let him live. No flourishing promised, no grand vision — just survival. The blessing is merciful but modest.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 7,
              spans: [
                t('And this is the blessing of Judah: and he said, '),
                hg('Hear, Lord, the voice of Judah', 'c-judah-voice'),
                t(', and bring him unto his people: let his hands be sufficient for him; and be thou an help to him from his enemies.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judah-voice',
          html:
            'Judah&apos;s blessing is that God will hear him — his prayers, his cries, his voice. And God will bring him back to his people, making his hands strong against enemies. Judah is the tribe from which the kings will come, from which Jesus will come.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 8,
              spans: [
                t('And of Levi he said, '),
                hg('Let thy Thummim and thy Urim be with thy holy one', 'c-levi-urim'),
                t('; whom thou didst prove at Massah, and with whom thou didst strive at the waters of Meribah;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-levi-urim',
          html:
            'Levi&apos;s blessing is priestly: the Urim and Thummim, the sacred lots used to discern God&apos;s will, will be with the priestly tribe. This tribe had proved themselves faithful at Massah and Meribah, places where Israel doubted God.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 9,
              spans: [
                t('Who said unto his father and to his mother, I have not seen him; neither did he acknowledge his brethren, nor knew his own children: for they have '),
                hy('observed thy word', 'c-levi-covenant'),
                t(', and kept thy covenant.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-levi-covenant',
          html:
            'This refers to the moment after the golden calf (Exodus 32:25–29). When Israel had fallen into idolatry, the Levites alone took up swords for God&apos;s cause. They abandoned family loyalty for covenant loyalty. Jesus echoed this: "He that loveth father or mother more than me is not worthy of me" (Matthew 10:37). Levi was blessed not despite this radical choice, but because of it.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-covenant',
          title: 'Brit — "Covenant"',
          script: 'בְרִית',
          translit: '<strong>brit</strong> · covenant; a binding agreement',
          description:
            'Levi&apos;s defining mark is that they kept God&apos;s covenant when everyone else broke it. The Levites chose God over blood family, and that choice defined them.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 10,
              spans: [
                t('They shall teach Jacob thy judgments, and Israel thy law: they shall put incense before thee, and whole burnt sacrifice upon thine altar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-levi-teach',
          html:
            'The Levites&apos; calling: to teach, to minister, to offer sacrifice. They become the intercessors between God and people. In Matthew 23, Jesus criticized the Pharisees for perverting this calling, but the calling itself was always holy.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 11,
              spans: [
                t('Bless, Lord, his substance, and accept the work of his hands: smite through the loins of them that rise against him, and of them that hate him, that they rise not again.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 12,
              spans: [
                t('And of Benjamin he said, '),
                hp('The beloved of the Lord', 'benjamin-beloved'),
                t(' shall dwell in safety by him; and the Lord shall cover him all the day long, and he shall dwell '),
                hy('between his shoulders', 'c-shoulders'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'benjamin-beloved',
          html:
            'Benjamin is called "the beloved of the Lord." Benjamin is the youngest tribe, born of Jacob&apos;s beloved wife Rachel. The temple will later be built on the border of Benjamin&apos;s territory (Jerusalem). This tribe dwell in safety, covered by God&apos;s protection "all the day long."',
        },
        {
          kind: 'commentary',
          id: 'c-shoulders',
          html:
            'To dwell "between His shoulders" is an image of intimate safety — nestled against God&apos;s back, utterly protected. The metaphor suggests not distance but closeness. Benjamin is held close.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 13,
              spans: [
                t('And of Joseph he said, '),
                hp('Blessed of the Lord be his land', 'joseph-blessed'),
                t(', for the precious things of heaven, for the dew, and for the deep that coucheth beneath,'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And for the precious fruits brought forth by the sun, and for the precious things put forth by the moon,'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And for the chief things of the ancient mountains, and for the precious things of the lasting hills,'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And for the precious things of the earth and fulness thereof, and for the good will of him that dwelt in the bush: let the blessing come upon the head of Joseph, and upon the top of the head of him that was separated from his brethren.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'joseph-blessed',
          html:
            'Joseph&apos;s blessing is the most lavish in the chapter. His land will be blessed with heavenly dew, deep waters below, precious fruits and gems. The mountains themselves hold treasures. Joseph, who was once separated from his brothers and sold into slavery, now receives the promise of incomparable abundance. This is vindication and blessing woven together. The phrase "him that dwelt in the bush" is a poetic reference to God Himself — the God who spoke to Moses from the burning bush.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 17,
              spans: [
                t('His glory is like the firstling of his bullock, and his horns are like the horns of a unicorn: with them he shall push the people together to the ends of the earth: and they are the ten thousands of Ephraim, and they are the thousands of Manasseh.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-joseph-strength',
          html:
            'Joseph is given the imagery of power: the horns of a wild ox, the strength to push nations together. Joseph&apos;s descendants (Ephraim and Manasseh) become the northern kingdom, and this blessing speaks to their dominance. Yet it also suggests Joseph as the type of Christ — despised, exalted, powerful, gathering peoples.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 18,
              spans: [
                t('And of Zebulun he said, '),
                hg('Rejoice, Zebulun, in thy going out', 'c-zebulun'),
                t('; and, Issachar, in thy tents.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('They shall call the people unto the mountain; there they shall offer sacrifices of righteousness: for they shall suck of the abundance of the seas, and of treasures hid in the sand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-zebulun',
          html:
            'Zebulun and Issachar are paired. Zebulun is the seafaring tribe, called to "go out" and trade. Issachar is the tent-dweller, the keeper at home. Together they represent both venture and stability. They will gather peoples and offer sacrifices of righteousness, drawing wealth from the sea and sand.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 20,
              spans: [
                t('And of Gad he said, '),
                hg('Blessed be he that enlargeth Gad', 'c-gad'),
                t(': he dwelleth as a lion, and teareth the arm with the crown of the head.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gad',
          html:
            'Gad, who will inherit land on the east side of the Jordan, is blessed for his enlargement — his strength and dominion. The lion imagery speaks of fierce power and protection. Gad will be a warrior tribe.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 21,
              spans: [
                t('And he provided the first part for himself, when the lawgiver&apos;s portion was revealed, and he came with the heads of the people, he executed the justice of the Lord, and his judgments with Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 22,
              spans: [
                t('And of Dan he said, '),
                hg('Dan is a lion&apos;s whelp', 'c-dan'),
                t(': he shall leap from Bashan.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dan',
          html:
            'Dan is also given the lion image — a young lion, agile and dangerous. The tribe will leap from Bashan, the rich grassland. Dan becomes the northernmost tribe, a warrior people.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 23,
              spans: [
                t('And of Naphtali he said, '),
                hg('O Naphtali, satisfied with favour', 'c-naphtali'),
                t(', and full with the blessing of the Lord: possess thou the west and the south.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-naphtali',
          html:
            'Naphtali is blessed with divine favor, satisfaction, and the inheritance of the western lands. The blessing emphasizes contentment and blessing — not conquest, but fullness.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 24,
              spans: [
                t('And of Asher he said, '),
                hg('Let Asher be blessed with children', 'c-asher'),
                t('; let him be acceptable to his brethren, and let him dip his foot in oil.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Thy shoes shall be iron and brass; and as thy days, so shall thy strength be.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-asher',
          html:
            'Asher (meaning "happy") is blessed with children, brotherhood, and oil. Oil was wealth in the ancient Near East. The image of dipping your foot in oil is profuse abundance. "As thy days, so shall thy strength be" — one of the most quoted promises in Scripture. Each day brings enough strength for what it holds. This verse has comforted countless believers facing impossible seasons.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yom',
          title: 'Yom — "Day"',
          script: 'יוֹם',
          translit: '<strong>yom</strong> · day; an unit of time',
          description:
            'The promise is day-by-day, not all at once. God measures strength by the day you are in, not by the difficulty you fear. This is grace distributed in the measure we can actually carry.',
        },
        {
          kind: 'carry',
          html:
            'You live like the tribes: some days you feel like Judah, strengthened and heard. Some days like Zebulun, venturing out. Some days like Benjamin, held close and safe. Some days like Asher, blessed in the ordinary. And every day, the promise is the same: "As thy days, so shall thy strength be." Not all strength on day one. Not borrowed strength for tomorrow&apos;s trials. But daily bread, daily grace, daily enough.',
        },
        {
          kind: 'reflection',
          id: 'deut33-tribes',
          prompt: 'Which tribe&apos;s blessing most speaks to where you are right now? What would it mean to live into that blessing?',
        },
      ],
    },

    /* ─── Deuteronomy 33:26–29 — The Doxology: Everlasting Arms ──────────── */
    {
      ref: 'Deuteronomy 33:26–29',
      title: 'The Doxology: Everlasting Arms',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 26,
              spans: [
                t('There is '),
                hg('none like unto the God of Jeshurun', 'c-none-like'),
                t(', who rideth upon the heaven in thy help, and in his excellency on the sky.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-none-like',
          html:
            'The chapter crescendos into a doxology — a hymn of praise. "There is none like unto the God of Jeshurun." After blessing each tribe, Moses turns to the One behind all blessing. There is no God like Him — no rival, no equal, no competitor for His throne.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 27,
              spans: [
                t('The '),
                hp('eternal God is thy refuge', 'eternal-refuge'),
                t(', and underneath are the '),
                hy('everlasting arms', 'hebrew-olam'),
                t(': and he shall thrust out the enemy from before thee; and shall say, Destroy them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'eternal-refuge',
          html:
            'This is perhaps the most quoted refuge verse in Scripture. "The eternal God is thy refuge" — not temporary shelter, not conditional safety, but eternal refuge. And underneath — supporting, holding, sustaining — are the everlasting arms. This verse has anchored believers in darkness for three millennia. The word is <em>ma&apos;on</em> — a dwelling place, a den where the weak creature hides and is safe. The arms are <em>zeroot olam</em> — arms of eternity, arms that do not fail.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-olam',
          title: 'Zeroot Olam — "Everlasting arms"',
          script: 'זְרוֹעוֹת עוֹלָם',
          translit: '<strong>zeroot olam</strong> · arms/strength of eternity; arms that will not fall',
          description:
            'This image combines physical strength (the zeroot, arms) with eternal permanence (olam). Not just strong arms, but arms that will never weaken, never withdraw, never leave.',
        },
        {
          kind: 'christ',
          id: 'christ-refuge-arms',
          title: 'Christ Connection — Everlasting Arms',
          html:
            'John writes: "My Father, which gave them me, is greater than all; and no man is able to pluck them out of my Father&apos;s hand. I and my Father are one" (John 10:28–30). The "everlasting arms" that hold Israel are the arms of the Father, and they become the arms of Christ. When Jesus ascended, He sat at the right hand of God — still holding His people, still refusing to let them go. The refuge you seek is not a hiding place far away; it is the embrace of the God who came near in Christ.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 28,
              spans: [
                t('Israel then shall dwell in safety alone: the '),
                hg('fountain of Jacob shall be upon a land of corn and wine', 'c-fountain-jacob'),
                t('; also his heavens shall drop down dew.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fountain-jacob',
          html:
            'The image is of complete provision and safety. A fountain — living water. Corn and wine — the staples of life. Heavens dropping dew — heaven itself watering the land. Jacob&apos;s descendants will dwell alone (in security, needing no other nation&apos;s protection) and fully provided for by God.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 29,
              spans: [
                t('Happy art thou, O Israel: who is like unto thee, O '),
                hp('people saved by the Lord', 'yeshu-a-salvation'),
                t(', the shield of thy help, and who is the sword of thy excellency! and thine enemies shall be found liars unto thee; and thou shalt tread upon their high places.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'yeshu-a-salvation',
          html:
            'The climactic word: "people saved by the Lord." The Hebrew is <em>yeshu&apos;ah</em> — salvation. This is the root of the name Jesus. God&apos;s salvation embodies itself in His Son. Israel is not saved by their own strength but by God who saves them. The shield and sword of Israel&apos;s excellency are God Himself — His protection and power.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yeshuah',
          title: 'Yeshu&apos;ah — "Salvation"',
          script: 'יְשׁוּעָה',
          translit: '<strong>yeshu&apos;ah</strong> · salvation; deliverance; the root of the name Yeshua (Jesus)',
          description:
            'The same root that appears in Joshua (Yehoshua), and later in Jesus (Yeshua in Hebrew). God Himself is the Salvation of His people.',
        },
        {
          kind: 'carry',
          html:
            'You are Israel. You are the people saved by the Lord. Not because you earned it, not because you&apos;re good enough, but because He is so God that He simply cannot leave you in your enemies&apos; hands. The everlasting arms are underneath you right now. He is your shield. He is your help. Your enemies — fear, shame, regret, despair — will be found liars when you stand in His truth. And you will tread upon their high places, not as a conqueror in pride, but as one who has been saved.',
        },
        {
          kind: 'reflection',
          id: 'deut33-refuge',
          prompt: 'What enemy — literal or spiritual — feels too strong for you right now? What would it mean to trust the everlasting arms beneath you?',
        },
        {
          kind: 'artwork',
          matchTitle: /blessing|moses|sinai/i,
          caption: 'Deuteronomy 33 · Moses&apos; Blessing on the Tribes',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 33',
    quote:
      'The eternal God is thy refuge, and underneath are the everlasting arms. O Israel: happy art thou, O people saved by the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 33:27, 29 · Study Guide',
  },

  hasHebrew: true,
};
