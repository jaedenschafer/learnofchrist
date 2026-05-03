import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 10 — The Southern Campaign
 * The sun stands still. Five Amorite kings unite against Gibeon.
 * Joshua moves all night from Gilgal. God fights with hailstones.
 * Joshua commands the sun to stand still — and it does.
 * The five kings are defeated, captured, and hanged.
 * The southern conquest sweeps from Makkedah to Gaza.
 */
export const JOSHUA_10: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 10,

  estimatedMinutes: { beginner: 12, intermediate: 18, deep: 22 },
  intros: [
    'Joshua 10 opens with five Amorite kings — Adoni-zedek of Jerusalem, plus the kings of Hebron, Jarmuth, Lachish, and Eglon — joining forces against Gibeon because Gibeon made peace with Joshua. They are terrified. Gibeon is a great city, a royal city, and its men are mighty. If Gibeon allies with Israel, the southern highlands will crumble under Israelite control. They attack to break the alliance.',
    'But Gibeon cries out to Joshua at Gilgal. And Joshua, trusting the word of the Lord, marches all night with his army. What follows is the most audacious moment in Israel&apos;s early conquest: the Lord discomfits the Amorite armies with a great slaughter, pursues them with hailstones, and when the day grows short and the victory is not yet complete, Joshua prays aloud — and the sun stands still. For nearly a whole day, the normal cycle of earth breaks. And when it is over, five kings are hanged from trees, and Israel controls the south.',
    'The chapter moves with relentless momentum. One moment of obedience, one night march, one prayer — and a whole region falls. It is a study in how God works: He does the fighting. Israel is the instrument. And when a man of God speaks in faith, even the heavens listen.',
  ],

  bottomShare: {
    label: 'Share Joshua 10',
    quote:
      'The Lord fought for Israel. Joshua asked, and the sun stood still until Israel had avenged itself upon its enemies. There was no day like it before or after, that the Lord hearkened unto the voice of a man.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 10 · Study Guide',
  },

  sections: [
    /* ─── Five Kings United ────────────────────────────────────────────── */
    {
      ref: 'Joshua 10:1–5',
      title: 'Five Kings Afraid',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 1,
              spans: [
                t('Now when '),
                hy('Adoni-zedek', 'joshua-adoni-zedek'),
                t(' king of Jerusalem had heard how Joshua took Ai, and had utterly destroyed it; as he had done to Jericho and her king, so he had done to Ai and her king; and how the inhabitants of Gibeon had made '),
                hg('peace with Joshua and with Israel', 'j10-peace'),
                t(', and were among them;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('That they feared greatly: because Gibeon was a great city, as one of the royal cities, and because it was greater than Ai, and all the men thereof were mighty.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-peace',
          html:
            'Gibeon made peace with Joshua without consulting the other city-states. That decision — rational, self-preserving, and motivated by fear of Israel — breaks the southern alliance&apos;s unity. Adoni-zedek sees a crack: if Gibeon stands with Israel, the whole highland network of five kings is surrounded.',
        },
        {
          kind: 'hebrew',
          id: 'joshua-adoni-zedek',
          title: 'Adoni-Zedek — &ldquo;lord of righteousness&rdquo;',
          script: 'אֲדֹנִי־צֶ֫דֶק',
          translit: '<strong>Adoni</strong>-<strong>Zedek</strong> · root as Melchizedek (Psalm 110)',
          description:
            'Adoni-zedek shares the same root as Melchizedek (&ldquo;king of righteousness&rdquo;), the priest-king of Salem who blessed Abraham. Where Melchizedek mediated God&apos;s blessing, Adoni-zedek opposes the Lord&apos;s people. The same title, opposed allegiances.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 3,
              spans: [
                t('Wherefore Adonizedek king of Jerusalem sent unto the king of Hebron, and unto the king of Jarmuth, and unto the king of Lachish, and unto the king of Eglon, saying,'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Come up unto me, and help me, that we may '),
                hg('smite Gibeon', 'j10-alliance'),
                t(': for it hath made peace with Joshua and with the children of Israel.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Therefore the five kings of the Amorites, the king of Jerusalem, the king of Hebron, the king of Jarmuth, the king of Lachish, and the king of Eglon, gathered themselves together, and went up, they and all their hosts, and encamped before Gibeon, and made war against it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-alliance',
          html:
            'Five kings moving as one. This is the largest unified resistance to Israel so far. The Amorites understand that divided, they fall; together, they might withstand the Hebrew advance. It is a rational calculation — and it will not matter. Fear of Israel is driving their military strategy, but they have no concept of who they are actually fighting against.',
        },

        {
          kind: 'carry',
          html:
            'Fear of what God is doing can unite people in opposition. The five kings moved together because they were afraid, and fear made them bold. But there is a fear that moves in the other direction — a fear of the Lord that makes you align yourself with His people instead of against them. Gibeon chose differently. When you sense God moving in someone&apos;s life or in the world, are you moving toward that movement or resisting it? The five kings&apos; unity will not hold.',
        },

        {
          kind: 'reflection',
          id: 'j10-afraid',
          prompt: 'What makes you afraid enough to pick a side — for or against God&apos;s movement? When has fear driven you the wrong direction?',
        },
      ],
    },

    /* ─── All Night March ──────────────────────────────────────────────── */
    {
      ref: 'Joshua 10:6–10',
      title: 'All Night, No Fear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 6,
              spans: [
                t('And the men of Gibeon sent unto Joshua to the camp to Gilgal, saying, '),
                hg('Slack not thy hand from thy servants', 'j10-cry'),
                t('; come up to us quickly, and save us, and help us: for all the kings of the Amorites that dwell in the mountains are gathered together against us.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-cry',
          html:
            'Gibeon made a covenant with Israel; now it calls Israel to honor it. There is no ambiguity in the cry: &ldquo;Slack not thy hand.&rdquo; Don&apos;t stop. Don&apos;t hesitate. Come quickly. The plea is to a God-sworn obligation — and Joshua hears it as such.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 7,
              spans: [
                t('So Joshua ascended from Gilgal, he, and all the people of war with him, and all the mighty men of valour.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the Lord said unto Joshua, '),
                t('Fear them not'),
                t(': for I have delivered them into thine hand; there shall not a man of them stand before thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-march',
          html:
            'Joshua does not hesitate. He marches. And before the battle even begins, the Lord speaks to him in the night: "Fear them not." The outcome is already settled. Israel will not face an ambiguous battle; Israel will face a delivered enemy. Joshua&apos;s only call is to show up and trust.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 9,
              spans: [
                t('Joshua therefore came unto them suddenly, and went up from Gilgal all that night.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the Lord '),
                hp('discomfited them', 'j10-disconcert'),
                t(' before Israel, and slew them with a great slaughter at Gibeon, and chased them along the way that goeth up to Beth-horon, and smote them to Azekah and unto Makkedah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-disconcert',
          html:
            'The Hebrew word here is <em>hamam</em> — to put in disorder, to terrify. The Lord does not give Joshua victory by military cleverness; He breaks the enemy&apos;s cohesion. Fear ripples through their ranks. Where moments before five kings moved as one, now panic scatters them. God is not interested in a close fight.',
        },

        {
          kind: 'carry',
          html:
            'Joshua heard the word of the Lord and moved. No strategy committee, no debate about odds, no delay. He marched all night. And the Lord met him in the darkness with a promise: "Fear them not." When you&apos;re standing at the edge of something the Lord has called you to — a conversation, a change, a stand you&apos;ve been avoiding — the first word is the same: don&apos;t be afraid. The outcome is not in doubt. You are called to show up and trust.',
        },

        {
          kind: 'reflection',
          id: 'j10-march-reflect',
          prompt: 'What is God calling you to move toward right now? What would it look like to march forward without hesitation, believing He has already delivered what you need?',
        },
      ],
    },

    /* ─── Hailstones from Heaven ───────────────────────────────────────── */
    {
      ref: 'Joshua 10:11',
      title: 'God&apos;s Hailstones',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 11,
              spans: [
                t('And it came to pass, as they fled from before Israel, and were in the going down to Beth-horon, that the Lord '),
                hy('cast down great stones from heaven', 'j10-hail'),
                t(' upon them unto Azekah: and they died: '),
                hg('there were more which died with hailstones than they whom the children of Israel slew with the sword', 'j10-hail-more'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'j10-hail',
          title: 'Avanim Gedolot — &ldquo;great stones&rdquo;',
          script: 'אֲבָנִים גְּדֹלֹת',
          translit: '<strong>avanim</strong> <strong>gedolot</strong> · hailstones, boulders of ice',
          description:
            'The same God who rained hail on Egypt in Exodus 9:24 and will sing in Psalm 18:12–13 about stones of hail is the God who arms the heavens against Israel&apos;s enemies. His weather is His weapon.',
        },
        {
          kind: 'commentary',
          id: 'j10-hail-more',
          html:
            'This detail cuts to the heart of the chapter&apos;s message. More enemies die from hailstones than from the sword. The battle is God&apos;s. Israel is the instrument, not the warrior. When you read "the Lord fought for Israel," this is what that means: the outcome depends on His power, not on military skill.',
        },

        {
          kind: 'christ',
          id: 'j10-christ-hail',
          title: 'Christ Connection — God Fights for His Covenant People',
          html:
            'The hailstones are God&apos;s sign that He is active in the conquest. Jesus picks up this same logic in His teaching. "If God be for us, who can be against us?" (Rom. 8:31). And in Revelation, when the church is persecuted, John hears the prayer of the martyrs answered: the throne releases hail and blood and fire (Rev. 8:7; 16:21). God does not abandon His people to their enemies. He fights for them. For the earliest Christians facing opposition, this chapter promises they are not alone.',
        },

        {
          kind: 'carry',
          html:
            'The five kings thought they were fighting Joshua. They were actually fighting the God of Joshua. You may be facing something or someone that looks overwhelming — a fear, a habit, a circumstance, a person — and it feels like a fight you will lose. But if you belong to God, that enemy is actually facing Him. You are not the one who has to win. Your only call is to show up and trust. The hailstones are His.',
        },

        {
          kind: 'reflection',
          id: 'j10-hail-reflect',
          prompt: 'What enemy or obstacle feels too big for you to overcome alone? What would change if you truly believed God was fighting it on your behalf?',
        },
      ],
    },

    /* ─── Sun Stands Still ─────────────────────────────────────────────── */
    {
      ref: 'Joshua 10:12–14',
      title: 'The Sun Stands Still',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 12,
              spans: [
                t('Then spake Joshua to the Lord in the sight of all Israel, and said, '),
                t('Sun, stand thou still upon Gibeon'),
                t('; and thou, Moon, in the valley of Ajalon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-song',
          html:
            'Joshua is not praying to the sun or the moon. He is commanding them — as instruments of God — to obey. The text says he "sang" this, or spoke it aloud "in the sight of all Israel." It is a public act. He speaks the command as if the heavens themselves are part of the Lord&apos;s army.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 13,
              spans: [
                t('And the sun stood still, and the moon stayed, until the people had avenged themselves upon their enemies. Is not this written in the book of Jasher? So the sun stood still in the midst of heaven, and '),
                hg('hasted not to go down about a whole day', 'j10-whole-day'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-whole-day',
          html:
            'The text does not explain the mechanism. It simply states the fact: the day lasted about a whole day longer than normal. Skeptics have struggled with this verse for centuries. Ancient pagan explanations. Astronomical theories. But the text is straightforward: God extended the day for the battle. Whether by a slowing of rotation, a bending of light, or means we have no name for, the work was accomplished. What matters is not how God did it, but that He did it because a man asked.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 14,
              spans: [
                t('And there was no day like that before it or after it, that the Lord '),
                hp('hearkened unto the voice of a man', 'j10-voice'),
                t(': for the Lord fought for Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-voice',
          html:
            'This verse is the keystone of the whole chapter. "The Lord hearkened unto the voice of a man." God listened to Joshua&apos;s prayer with cosmic consequences. The sun and moon obeyed. Creation bent to the word of a faithful man who spoke in faith. There has been no day before or after like it — a moment when the prayer of one man moved the heavens.',
        },

        {
          kind: 'christ',
          id: 'j10-christ-prayer',
          title: 'Christ Connection — The Prayer God Always Hears',
          html:
            'Joshua&apos;s prayer moved the heavens. But the New Testament locates the apex of all such prayers in Jesus. Paul writes: "We know that God heareth not sinners… but if any man be a worshipper of God, and doeth his will, him he heareth" (John 9:31). Jesus is the Man who always does the Father&apos;s will. His prayer in Gethsemane — "if it be possible, let this cup pass from me" — is met by angels strengthening Him (Luke 22:43). And at the cross, He speaks and the veil of the temple tears in two. Joshua&apos;s prayer moved the sun; Christ&apos;s prayer moves the foundation of all creation. He is the prayer God always listens to.',
        },

        {
          kind: 'carry',
          html:
            'The God who listened to Joshua listens to prayer. Not because Joshua earned it or because he was perfect, but because he asked in faith, aligned with God&apos;s purposes. When you pray in line with God&apos;s heart — for His kingdom, His peace, His justice — you are praying the kind of prayer He bends to hear. The heavens may not stand still, but the God who made the heavens is paying attention to you.',
        },

        {
          kind: 'reflection',
          id: 'j10-prayer-reflect',
          prompt: 'What would you ask God for if you truly believed He was listening? What keeps you from asking with that boldness?',
        },
      ],
    },

    /* ─── Five Kings Under His Feet ────────────────────────────────────── */
    {
      ref: 'Joshua 10:15–27',
      title: 'Feet on Enemies&apos; Necks',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 15,
              spans: [
                t('And Joshua returned, and all Israel with him, unto the camp to Gilgal.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 16,
              spans: [
                t('But these five kings fled, and hid themselves in a cave at Makkedah.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And it was told Joshua, saying, The five kings are found hid in a cave at Makkedah.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Joshua said, Roll great stones upon the mouth of the cave, and set men by it for to keep them:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And stay ye not, but pursue after your enemies, and smite the hindmost of them; suffer them not to enter into their cities: for the Lord your God hath delivered them into your hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-kings-cave',
          html:
            'The five kings, in their terror, flee and hide in a cave like frightened children. Joshua leaves a watch on the cave and tells his army to continue pursuing the rest of the enemy army. The kings will wait. The battle is not over until the whole enemy force is scattered.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 20,
              spans: [
                t('And it came to pass, when Joshua and the children of Israel had made an end of slaying them with a very great slaughter, till they were consumed, that the rest which remained of them entered into fenced cities.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And all the people returned to the camp to Joshua at Makkedah in peace: none moved his tongue against the children of Israel.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 22,
              spans: [
                t('Then said Joshua, Open the mouth of the cave, and bring out those five kings unto me out of the cave.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And they did so, and brought forth those five kings unto him out of the cave, the king of Jerusalem, the king of Hebron, the king of Jarmuth, the king of Lachish, and the king of Eglon.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And it came to pass, when they brought out those kings unto Joshua, that Joshua called for all the men of Israel, and said unto the captains of the men of war which went with him, '),
                hg('Come near, put your feet upon the necks of these kings', 'j10-feet'),
                t('. And they came near, and put their feet upon the necks of them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-feet',
          html:
            'This is not casual. It is ritual. In the ancient world, putting your foot on an enemy&apos;s neck is the ultimate symbol of vassalage — the conquered king is completely subject, completely stripped of dignity. Joshua commands the captains of Israel to do this publicly. Every soldier sees it. The five kings who united to resist Israel are now beneath the feet of Israel&apos;s warriors.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 25,
              spans: [
                t('And Joshua said unto them, '),
                t('Fear not, nor be dismayed, be strong and of good courage'),
                t(': for thus shall the Lord do to all your enemies against whom ye fight.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And after that Joshua smote them, and slew them, and hanged them on five trees: and they were hanging upon the trees until the evening.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And at the time of the going down of the sun Joshua commanded that they should take them down off the trees: and they cast them into the cave wherein they had hid themselves, and laid great stones in the mouth of the cave unto this very day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-couragesmite',
          html:
            'Joshua speaks the promise aloud to all the soldiers. "Thus shall the Lord do to all your enemies." This is not arrogance; it is assurance from the Lord. And then the kings are hanged on trees. That evening, before sunset, they are taken down — a gesture of respect for the dead that aligns with Deuteronomy 21:23. Even in judgment, the law is honored. The bodies are cast into the cave, sealed with great stones. The cave becomes their tomb — the hiding place becomes their grave.',
        },

        {
          kind: 'christ',
          id: 'j10-christ-feet',
          title: 'Christ Connection — Every Enemy Under His Feet',
          html:
            'Paul writes: "For he must reign, till he hath put all enemies under his feet" (1 Cor. 15:25), quoting Psalm 110. And in Romans 16:20: "And the God of peace shall bruise Satan under your feet shortly." What Joshua enacted on those five kings is the pattern of the whole gospel: Christ will put every enemy — death, sin, the accuser — under His feet. And because His people are in Him, we are already seated with Him in heavenly places (Eph. 2:6). The enemy is already beneath us, even if the final victory is not yet complete.',
        },

        {
          kind: 'carry',
          html:
            'Joshua told his captains the outcome before it fully unfolded: "Thus shall the Lord do to all your enemies." You may be standing in a battle that feels far from over. But if you belong to God, the final word is already spoken. Your actual enemy is not another person or circumstance — it is the lie that you are abandoned. Every fear that opposes God&apos;s purpose for you, every voice telling you that you will lose, every weight you have carried — that is what will ultimately be under your feet. Not because you are strong, but because you are His.',
        },

        {
          kind: 'reflection',
          id: 'j10-feet-reflect',
          prompt: 'What enemy — a fear, a shame, a habit, a relationship — do you need to see put under your feet? What would change if you believed it was already done?',
        },
      ],
    },

    /* ─── The Southern Conquest Sweeps ────────────────────────────────── */
    {
      ref: 'Joshua 10:28–43',
      title: 'From Makkedah to Gaza',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 28,
              spans: [
                t('And that day Joshua took Makkedah, and smote it with the edge of the sword, and the king thereof he utterly destroyed, them, and all the souls that were therein; he let none remain: and he did to the king of Makkedah as he did unto the king of Jericho.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 29,
              spans: [
                t('Then Joshua passed from Makkedah, and all Israel with him, unto Libnah: and fought against Libnah:'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And the Lord delivered it also, and the king thereof, into the hand of Israel; and he smote it with the edge of the sword, and all the souls that were therein; he let none remain in it; but did unto the king thereof as he had done unto the king of Jericho.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 31,
              spans: [
                t('And Joshua passed from Libnah, and all Israel with him, unto Lachish: and encamped against it, and fought against it:'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And the Lord delivered Lachish into the hand of Israel, which took it on the second day, and smote it with the edge of the sword, and all the souls that were therein, according to all that he had done to Libnah.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Then Horam king of Gezer came up to help Lachish; and Joshua smote him and his people, until he had left him none remaining.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 34,
              spans: [
                t('And from Lachish Joshua passed unto Eglon: and all Israel with him; and they encamped against it, and fought against it:'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And they took it on that day, and smote it with the edge of the sword, and all the souls that were therein he utterly destroyed that day, according to all that he had done to Lachish.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 36,
              spans: [
                t('And Joshua went up from Eglon, and all Israel with him, unto Hebron: and they fought against it:'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And they took it, and smote it with the edge of the sword, and the king thereof, and all the cities thereof, and all the souls that were therein; he left none remaining, according to all that he had done to Eglon; but destroyed it utterly, and all the souls that were therein.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 38,
              spans: [
                t('And Joshua returned, and all Israel with him, to Debir; and fought against it:'),
              ],
            },
            {
              number: 39,
              spans: [
                t('And he took it, and the king thereof, and all the cities thereof; and they smote them with the edge of the sword, and utterly destroyed all the souls that were therein; he left none remaining: as he had done to Hebron, so he did to Debir, and to the king thereof; as he had also done to Libnah, and to the king thereof.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-conquest',
          html:
            'The narrative marches forward with relentless pace. Makkedah, Libnah, Lachish, Eglon, Hebron, Debir — each city falls in turn. Each king is captured or killed. Each city is "utterly destroyed." The phrase "the Lord delivered it" repeats like a refrain. Israel is not conquering by cleverness or military might. Each city falls because the Lord gives it into Israel&apos;s hand. The rhythm of the conquest is the rhythm of obedience meeting God&apos;s promise.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 40,
              spans: [
                t('So Joshua smote all the country of the hills, and of the south, and of the vale, and of the springs, and all their kings: he left none remaining, but utterly destroyed all that breathed, '),
                hg('as the Lord God of Israel commanded', 'j10-commanded'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-commanded',
          html:
            'The conquest follows the pattern laid out in Joshua 1. The Lord commanded it; Joshua does it. The language "all that breathed" is absolute, total. There is no negotiation, no parley, no mercy except as the Lord commands (as with Rahab in Jericho, or the Gibeonites). This is the ancient world&apos;s complete military victory — the total elimination of rival power.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 41,
              spans: [
                t('And Joshua smote them from Kadesh-barnea even unto Gaza, and all the country of Goshen, even unto Gibeon.'),
              ],
            },
            {
              number: 42,
              spans: [
                t('And all these kings and their land did Joshua take at one time, because the Lord God of Israel fought for Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-all-at-once',
          html:
            'The summary is surgical. From south to north, from Kadesh-barnea to Gaza, the entire southern region falls "at one time." One moment of decision, one night march, one prayer, one day of battle — and a whole kingdom is subdued. It happens because "the Lord God of Israel fought for Israel." That sentence is the whole theology of the chapter.',
        },

        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 43,
              spans: [
                t('And Joshua returned, and all Israel with him, unto the camp to Gilgal.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'j10-return',
          html:
            'Joshua returns to Gilgal, the place where he began. The conquest of the south is complete. And the next phase of the campaign will begin from the same base. But what has changed is everything: the southern highlands are Israel&apos;s. The promise is being kept.',
        },

        {
          kind: 'carry',
          html:
            'The conquest moved with speed and completeness because Joshua did not second-guess the Lord&apos;s instructions. He heard the promise, obeyed, and watched it unfold. Your own landscape of faith — the habits you need to break, the fears you need to face, the ground the Lord has promised you — will not be conquered piecemeal if you are waiting for certainty. One decision. One step. One prayer. And then the Lord does the rest. Not everything at once, but faster and more completely than you expected.',
        },

        {
          kind: 'reflection',
          id: 'j10-conquest-reflect',
          prompt: 'Where is the Lord calling you to take ground — in your own character, in your relationships, in your faith? What would it look like to move as decisively as Joshua, trusting the outcome to God?',
        },
      ],
    },
  ],
};
