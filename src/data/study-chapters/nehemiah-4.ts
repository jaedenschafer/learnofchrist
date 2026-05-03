import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nehemiah 4 — Sanballat's Mockery, Prayer, and the Wall Built with Sword and Trowel
 *
 * When word reaches Sanballat and Tobiah that the walls of Jerusalem are being
 * rebuilt, mockery turns to conspiracy. The enemies of the restoration plot to
 * attack and destroy the work. But Nehemiah's response is twofold: prayer to
 * God and organized vigilance. The people build with one hand and hold a weapon
 * in the other — a picture of faith working alongside wisdom, of trust in God
 * that does not refuse practical defense. The trumpet sounds to gather the people.
 * "Our God shall fight for us," Nehemiah says. And so they build, the work never
 * ceasing, the sword never leaving their side.
 */
export const NEHEMIAH_4: RichChapterContent = {
  bookSlug: 'nehemiah',
  bookName: 'Nehemiah',
  chapter: 4,

  estimatedMinutes: { beginner: 8, intermediate: 17, deep: 23 },
  intros: [
    'The work of rebuilding the walls of Jerusalem has begun. The rubble is being cleared, the stones are being set, and the people of Jerusalem are learning again the rhythm of labor and covenant. But not everyone is pleased. From outside the walls, the enemies of Israel grow angry. Sanballat and Tobiah, the leaders who mocked the returning exiles as "feeble Jews," now see their mockery turn to something darker: conspiracy.',
    'Nehemiah 4 is a study in the collision between faith and opposition, between prayer and practical vigilance. When mockery escalates to threat, when the people grow weary and afraid, Nehemiah teaches them something harder than either pure faith or pure caution. He prays. He sets a watch. He arms his people. He sounds the trumpet. He remembers that God fights for them, but also that they are called to stand in the breach, to build with a sword at their side, to never lay down their tools — no matter what they hear from those who want them to fail.',
  ],

  bottomShare: {
    label: 'Share Nehemiah 4',
    quote:
      'Nehemiah heard the mockery and the threats. He prayed and he set a watch. He armed his people with sword and trowel, teaching them that trust in God does not mean refusing to be wise, that faith is not a substitute for vigilance, that the work of God continues precisely because those who build it are also those who defend it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nehemiah 4 · Study Guide',
  },

  sections: [
    /* ─── Nehemiah 4:1–3 — Sanballat's Mockery ───────────────────────── */
    {
      ref: 'Nehemiah 4:1–3',
      title: 'Feeble Jews and Burned Stones',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('But it came to pass, that when '),
                hg('Sanballat heard that we builded the wall', 'n4-sanballat-heard'),
                t(', he was wroth, and took great indignation, and '),
                hg('mocked the Jews', 'n4-mocked'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he spake before his brethren and the army of Samaria, and said, What do these '),
                hg('feeble Jews', 'n4-feeble'),
                t('? will they '),
                hg('fortify themselves', 'n4-fortify'),
                t('? will they sacrifice? will they make an end in a day? will they revive the stones out of the heaps of the rubbish which are '),
                hg('burned', 'n4-burned'),
                t('?'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Now Tobiah the Ammonite was by him: and he said, Even that which they build, if a fox go up, he shall even break down their stone wall.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'n4-sanballat-heard',
          html:
            'The moment Sanballat hears that the work is real — not a rumor, but an actual reconstruction — his indignation turns violent. This is what opposition does when it discovers the opposition will not be intimidated or discouraged. The greater the work, the greater the resistance.',
        },
        {
          kind: 'commentary',
          id: 'n4-mocked',
          html:
            'Mockery is Sanballat&apos;s weapon. He does not attack the work itself; he attacks the workers. The people are feeble, the project is impossible, the task will never be accomplished. Mockery demoralizes. It creates an atmosphere where the people doubt themselves before they doubt God.',
        },
        {
          kind: 'hebrew',
          id: 'n4-laag',
          title: 'Laag — "Mock" or "Laugh At"',
          script: 'לָעַג',
          translit: '<strong>Laag</strong> · to mock; to jeer; to ridicule with intent to demoralize',
          description:
            'Sanballat&apos;s mockery is not gentle or playful. The word "laag" carries the sense of contemptuous laughter — the kind meant to wound and demean. It is a tool of power, used by those who hold authority to belittle those they wish to control or discourage.',
        },
        {
          kind: 'commentary',
          id: 'n4-feeble',
          html:
            'Sanballat calls them "feeble Jews." He is denying their capacity. He is saying: you are not strong enough. You do not have what it takes. This is the taunt aimed at every person who has ever tried to build something sacred despite opposition. The enemy will always say you are too weak.',
        },
        {
          kind: 'commentary',
          id: 'n4-fortify',
          html:
            'He mocks their ability to fortify themselves. Can they truly protect themselves? Will they sacrifice to secure God&apos;s favor? Will they finish in a day? The mockery is calculated to create doubt about both their strength and their God&apos;s willingness to help them.',
        },
        {
          kind: 'commentary',
          id: 'n4-burned',
          html:
            'The stones are burned — remnants of the destruction, fire-blackened, seemingly worthless. Sanballat&apos;s mockery is essentially: you are trying to rebuild with rubble. Your foundation is ash. Your project is built on the grave of what died. And Tobiah adds: a fox could tear down what you build. The work is so fragile that even a small animal could destroy it.',
        },
        {
          kind: 'carry',
          html:
            'When you attempt something sacred, mockery will come. It will come from those who benefit from your failure, from those who doubt God, and often from your own fears speaking through the voices of others. The first response is not to defend yourself or your work — it is to pray. The second is to keep building. Sanballat&apos;s words are loud, but they are not louder than the trumpet that will call God&apos;s people to the wall.',
        },
        {
          kind: 'reflection',
          id: 'sanballat-mockery',
          prompt: 'When have you heard mockery directed at something you or others were trying to build? What did that mockery make you feel? Did it stop the work, or did it clarify what the work was worth?',
        },
      ],
    },

    /* ─── Nehemiah 4:4–6 — Prayer and Resolve ─────────────────────────── */
    {
      ref: 'Nehemiah 4:4–6',
      title: 'Prayer: Turn Their Reproach Upon Their Own Head',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 4,
              spans: [
                t('Hear, O our God; for we are '),
                hg('despised', 'n4-despised'),
                t(': and '),
                hg('turn their reproach upon their own head', 'n4-reproach-turn'),
                t(', and give them for a prey in the land of captivity:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Cover not their iniquity, and let not their sin be blotted out from before thee: for they have provoked thee to anger before the builders.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('So built we the wall; and all the wall was joined together unto the half thereof: for the people had a '),
                hg('mind to work', 'n4-mind-to-work'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'n4-despised',
          html:
            'Nehemiah does not respond to mockery with more mockery or with shame. He brings it to God. "We are despised" — he acknowledges the weight of the mockery, the real sting of being seen as worthless. He brings his people&apos;s pain before God.',
        },
        {
          kind: 'commentary',
          id: 'n4-reproach-turn',
          html:
            'Nehemiah&apos;s prayer is direct: turn their reproach upon their own head. This is not a prayer for passivity — it is a prayer that asks God to execute justice, to ensure that those who have mocked His work face the consequence of their mockery. Nehemiah is not asking for mercy for the enemies of the work. He is asking God to be God, to protect His own, and to let no mocking go unanswered.',
        },
        {
          kind: 'hebrew',
          id: 'n4-cherpah',
          title: 'Cherpah — "Reproach" or "Shame"',
          script: 'חֶרְפָּה',
          translit: '<strong>Cherpah</strong> · reproach; disgrace; mockery; insult cast upon one',
          description:
            'Cherpah is not merely embarrassment — it is shame that clings, that damages honor, that marks a person or community as unworthy. Nehemiah&apos;s prayer asks that the cherpah leveled against his people be turned back on those who leveled it.',
        },
        {
          kind: 'commentary',
          id: 'n4-mind-to-work',
          html:
            'And yet — look at verse 6. "The people had a mind to work." Prayer is not a substitute for action. The people hear Nehemiah&apos;s prayer, and immediately they return to the wall. The mockery has not broken their resolve. The prayer has not made them passive. Instead, they work with renewed purpose. The wall is joined together unto the half. The work continues.',
        },
        {
          kind: 'carry',
          html:
            'Prayer is not resignation. It is not asking God to do what we refuse to do ourselves. Nehemiah prays for justice, and then he and his people work. They keep building. They keep their hands on the stones. They do not wait for an enemy to be struck down — they labor while God works. This is how God&apos;s work gets done: prayer and trowel, petition and perseverance, faith and labor, all at the same time.',
        },
        {
          kind: 'reflection',
          id: 'prayer-work',
          prompt: 'When you face opposition or mockery, do you tend to pray or to work, or to do both? What does it mean to bring your tears to God and then immediately return to the work?',
        },
      ],
    },

    /* ─── Nehemiah 4:7–12 — The Conspiracy and Rumor of Fear ───────────── */
    {
      ref: 'Nehemiah 4:7–12',
      title: 'Conspiring Enemies; A People&apos;s Doubt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 7,
              spans: [
                t('But it came to pass, that when Sanballat, and Tobiah, and the Arabians, and the Ammonites, and the Ashdodites, heard that the walls of Jerusalem were made up, and that the breaches began to be stopped, then they were '),
                hg('very wroth', 'n4-very-wroth'),
                t(','),
              ],
            },
            {
              number: 8,
              spans: [
                t('And conspired all of them together to come and to '),
                hg('fight against Jerusalem, and to hinder it', 'n4-hinder-work'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Nevertheless we made our '),
                hg('prayer unto our God, and set a watch', 'n4-prayer-watch'),
                t(' against them day and night, because of them.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Judah said, The '),
                hg('strength of the bearers of burdens is decayed', 'n4-strength-decayed'),
                t(', and there is much rubbish; so that we are not able to build the wall.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And our adversaries said, '),
                hg('They shall not know, neither see, till we come in the midst among them, and slay them, and cause the work to cease', 'n4-surprise-attack'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And it came to pass, that when the Jews which dwelt by them came, they said unto us ten times, From all places whence ye shall return unto us '),
                hg('they will be upon you', 'n4-everywhere-threat'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'n4-very-wroth',
          html:
            'The mockery has not worked. The people are still building. So Sanballat and his allies — the Arabians, Ammonites, Ashdodites — join together in anger. When mockery fails, conspiracy begins. The opposition hardens into a covenant of destruction.',
        },
        {
          kind: 'commentary',
          id: 'n4-hinder-work',
          html:
            'Their goal is not simply to attack Jerusalem — it is to hinder the work. They want to stop the building, to break the resolve, to convince the people that the task is impossible. This is the nature of spiritual opposition: it does not merely want to defeat; it wants to prevent the work from ever being completed.',
        },
        {
          kind: 'commentary',
          id: 'n4-prayer-watch',
          html:
            'Nehemiah&apos;s response is remarkable: "We made our prayer unto our God, and set a watch." This is not either-or. It is both-and. They pray to God to protect them. And they also station guards day and night. Faith and vigilance are not opposites. A God who tells His people to "watch and pray" (Matthew 26:41) is a God who calls us to both trust and attention.',
        },
        {
          kind: 'commentary',
          id: 'n4-strength-decayed',
          html:
            'Now the threat is internalized. The people themselves begin to lose confidence. "The strength of the bearers of burdens is decayed." The work is hard. The enemy is many. The people are tired. Rumor and fear do more damage than an actual attack. A whispered doubt can break an army that swords could not.',
        },
        {
          kind: 'hebrew',
          id: 'n4-kowach',
          title: 'Kowach — "Strength" or "Power"',
          script: 'כּוֹחַ',
          translit: '<strong>Kowach</strong> · strength; might; power; vigor; capacity to perform',
          description:
            'The strength of the workers is failing. Not because they have less food or rest, but because fear is consuming their capacity to believe they can finish the work. Kowach is not merely physical — it is the power to persist, to hope, to keep moving toward a goal.',
        },
        {
          kind: 'commentary',
          id: 'n4-surprise-attack',
          html:
            'The enemies plan a surprise attack. "They shall not know, neither see, till we come in the midst among them." This is a strategy of terror. The people must always be looking over their shoulders, always afraid that death is about to arrive from an unseen direction.',
        },
        {
          kind: 'commentary',
          id: 'n4-everywhere-threat',
          html:
            'Those living near the enemies come to the Jews with a dire message: "From all places whence ye shall return unto us they will be upon you." They deliver this message ten times. This is psychological warfare. The enemy is everywhere. There is no safe place. Trust no one. The threat comes not from a distant foe, but from your neighbors, from those who surround you.',
        },
        {
          kind: 'carry',
          html:
            'The greatest opposition to God&apos;s work is not always a frontal attack. Sometimes it is doubt. Sometimes it is weariness. Sometimes it is the voice of those around us saying, "It cannot be done." In such moments, we need more than courage — we need community, leadership, and the trumpet of God to call us back to our purpose. Nehemiah will now show us how.',
        },
        {
          kind: 'reflection',
          id: 'conspiracy-doubt',
          prompt: 'What threats have you heard about — ten times over — that made you doubt the work you were called to do? What might it look like to keep building anyway?',
        },
      ],
    },

    /* ─── Nehemiah 4:13–14 — "Be Not Afraid" — The Trumpet Gathers ────── */
    {
      ref: 'Nehemiah 4:13–14',
      title: 'Remember the Lord: The Call to Stand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 13,
              spans: [
                t('Therefore set I in the lower places behind the wall, and on the higher places, I even set the people after their families with their swords, their spears, and their bows. And I looked, and rose up, and said unto the nobles, and to the rulers, and to the rest of the people, '),
                hp('Be not ye afraid of them', 'n4-be-not-afraid'),
                t(':'),
              ],
            },
            {
              number: 14,
              spans: [
                hp('remember the Lord, which is great and terrible', 'n4-remember-lord'),
                t(', '),
                hp('fight for your brethren, your sons, your daughters, your wives, your houses', 'n4-fight-for-family'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'n4-be-not-afraid',
          html:
            'Nehemiah does not dismiss the threat. He acknowledges it by positioning his people strategically — lower places, higher places, families together, armed. But his first word to them is not "arm yourselves" or "brace for attack." His first word is: Be not afraid. This is the leadership the people need. Not a leader who ignores the threat, but one who has planned carefully and now calls the people to courage.',
        },
        {
          kind: 'commentary',
          id: 'n4-remember-lord',
          html:
            'Nehemiah&apos;s call to courage is rooted in memory. "Remember the Lord, which is great and terrible." The Lord is not small, not weak, not uncertain. He is great — infinite in power and wisdom. He is terrible — not in the sense of being cruel, but in the sense of being worthy of awe and reverence, powerful enough to scatter enemies, to hold the future, to ensure that His people are never abandoned. The antidote to fear is not the assurance that there is no enemy. It is the memory that there is a God greater than any enemy.',
        },
        {
          kind: 'hebrew',
          id: 'n4-gadol',
          title: 'Gadol — "Great"',
          script: 'גָּדוֹל',
          translit: '<strong>Gadol</strong> · great; mighty; large; powerful; one who is preeminent and supreme',
          description:
            'The Lord is gadol — not merely in size or power, but in significance and authority. He is the Great One. All other powers are subordinate to Him. When Nehemiah calls the people to "remember the Lord, which is great," he is calling them to set their fear in proper perspective. The Lord is greater than Sanballat. He is greater than the army of the Ammonites. He is greater than death itself.',
        },
        {
          kind: 'commentary',
          id: 'n4-fight-for-family',
          html:
            'Nehemiah does not call them to fight for national pride or for conquest. He calls them to fight for their brethren, their sons and daughters, their wives, their houses. This is a fight for what matters most — for family, for the people you love, for home. This transforms the battle from an abstract conflict into something personal, something holy.',
        },
        {
          kind: 'carry',
          html:
            'When fear comes — and it will come — a true leader does two things at once: he acknowledges the threat enough to prepare for it, and then he lifts the people&apos;s eyes to something greater than the threat. He does not say, "Don&apos;t worry, nothing bad will happen." He says, "Remember the Lord. Fight for what you love. Build your homes. Protect your families." This is how a people finds courage: not by denial, but by refocusing on what is truly great and truly worth protecting.',
        },
        {
          kind: 'reflection',
          id: 'be-not-afraid',
          prompt: 'Nehemiah reminds the people of the greatness of the Lord before he asks them to fight. When you face something that frightens you, does remembering God&apos;s greatness change what you are willing to do?',
        },
      ],
    },

    /* ─── Nehemiah 4:15–20 — Building with Sword and Trowel ────────────── */
    {
      ref: 'Nehemiah 4:15–20',
      title: 'The Trumpet That Gathers; Building With One Hand and a Weapon in the Other',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 15,
              spans: [
                t('And it came to pass, when our enemies heard that it was known unto us, and God had brought their counsel to nought, we returned all of us to the wall, every one unto his work.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And it came to pass from that time forth, that the '),
                hg('half of my servants wrought in the work', 'n4-half-servants-work'),
                t(', and the other half of them held both the spears, the shields, the bows, the habergeons; and the rulers were behind all the house of Judah.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('They which builded on the wall, and they that bare burdens, with those that laded, '),
                hp('every one with one of his hands wrought in the work, and with the other hand held a weapon', 'n4-sword-trowel'),
                t('.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('For the builders, every one had his sword girded by his side, and so builded. He that sounded the trumpet was by me.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And I said unto the nobles, and to the rulers, and to the rest of the people, '),
                hp('The work is great and large', 'n4-work-great'),
                t(', we are separated upon the wall, one far from another. In what place therefore ye hear the sound of '),
                hp('the trumpet, resort ye thither unto us', 'n4-trumpet-gather'),
                t(': '),
                hp('our God shall fight for us', 'n4-god-fight'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('So we laboured in the work: and half of them held the spears from the rising of the morning till the stars appeared.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'n4-half-servants-work',
          html:
            'The conspiracy is discovered. God has brought the enemy&apos;s counsel to nought — their plans are exposed. And now Nehemiah implements his strategy: half the people build, half stand guard. This is a picture of a people at war and at work simultaneously. Neither one nor the other, but both.',
        },
        {
          kind: 'commentary',
          id: 'n4-sword-trowel',
          html:
            'This is one of the most powerful images in Scripture: the builders with one hand on their work and one hand on their weapon. One hand lays the stone. One hand holds the sword. This is not a moment of weakness or lack of faith. This is wisdom. This is the courage to work while remaining vigilant. This is what it looks like to trust God and to use good sense at the same time.',
        },
        {
          kind: 'hebrew',
          id: 'n4-cherev',
          title: 'Cherev — "Sword"',
          script: 'חֶ֫רֶב',
          translit: '<strong>Cherev</strong> · sword; blade; the instrument of war and defense',
          description:
            'The sword is girded at the side of every builder. It is not a symbol of distrust in God — it is an instrument of obedience to the call to both faith and vigilance. The sword does not contradict the trowel. It protects the work that the trowel accomplishes.',
        },
        {
          kind: 'commentary',
          id: 'n4-work-great',
          html:
            'Nehemiah reminds the people: "The work is great and large." It matters. It is worth defending. It is worth the double burden of building and watching. When we understand the magnitude of what we are doing, we are willing to sacrifice more to protect it.',
        },
        {
          kind: 'commentary',
          id: 'n4-trumpet-gather',
          html:
            'Nehemiah stations a trumpeter by him. The trumpet is the instrument of gathering. When danger comes from any direction, the trumpet sounds, and the builders drop their tools and gather to the place of the trumpet. The trumpet calls them out of their isolation and into community, out of their fear and into unity. It is a simple system, but it is genius. The scattered people are unified by a single sound.',
        },
        {
          kind: 'hebrew',
          id: 'n4-shofar',
          title: 'Shofar — "Trumpet" or "Horn"',
          script: 'שׁוֹפָר',
          translit: '<strong>Shofar</strong> · ram&apos;s horn; trumpet; the instrument used to gather, to warn, to call to battle and to prayer',
          description:
            'The shofar is one of the oldest instruments of Israel. It is sounded to gather the people, to announce the beginning of a festival, to sound an alarm. In Nehemiah 4, it is the voice that calls a scattered people back together. It is the sound that says: you are not alone. Help is coming. Stand firm.',
        },
        {
          kind: 'commentary',
          id: 'n4-god-fight',
          html:
            'And then Nehemiah makes the promise that anchors everything: "Our God shall fight for us." This is not said by a man hiding. It is said by a man who has armed his people, posted his guards, stationed his trumpeter, and is now about to build through the night. He has done everything prudence demands. And now he declares the one thing that no strategy can accomplish: that God Himself will fight for them. Their vigilance and God&apos;s fight work together. Neither one makes the other unnecessary.',
        },
        {
          kind: 'christ',
          id: 'n4-christ-armed',
          title: 'Christ Connection — The Builder Armed for Battle',
          html:
            'Paul writes to the Ephesian church: "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil" (Ephesians 6:11). He tells them to put on the belt of truth, the breastplate of righteousness, the shield of faith, the helmet of salvation, the sword of the Spirit (Ephesians 6:14–17). The builders of Jerusalem had literal swords. The church of Christ has spiritual armor. But the principle is the same: the work of God requires both faith and vigilance. Jesus Himself tells His disciples to "watch and pray" (Matthew 26:41). He is not telling them to abandon prayer for watchfulness, or watchfulness for prayer. He is calling them to both. The Christ who comes in the clouds will come suddenly, and His church must be alert. The Christ who has already won the battle calls His church to put on armor not because the battle is still in doubt, but because we are called to stand firm in what He has already accomplished. The trumpet that summons the scattered builders is an image of the trumpet that will gather the elect at the end of days (1 Thessalonians 4:16). We build and we wait. We work and we watch. We trust and we stand ready.',
        },
        {
          kind: 'carry',
          html:
            'What are you building that requires both your whole heart and your vigilance? What work of God are you involved in that calls you to lay your hand to the plow and also to be aware of opposition? The call to follow Christ is not a call to naiveté or passivity. It is a call to build with all your might while remaining watchful, to trust God while using wisdom, to keep the trumpet close at hand so that when fear comes — and it will come — you can gather with others and remember that you are not alone.',
        },
        {
          kind: 'reflection',
          id: 'sword-trowel',
          prompt: 'What does it look like in your own life to hold the sword in one hand and the trowel in the other? Where are you called to both trust God and exercise good judgment at the same time?',
        },
      ],
    },

    /* ─── Nehemiah 4:21–23 — The Watch That Never Ends ──────────────────── */
    {
      ref: 'Nehemiah 4:21–23',
      title: 'No Rest, No Change of Clothes: The Long Vigilance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 21,
              spans: [
                t('And I said unto the nobles, and to the rulers, and to the rest of the people, '),
                hg('Let every one with his servant lodge within Jerusalem, that in the night they may be a guard to us, in the day a labour', 'n4-guard-labor'),
                t(':'),
              ],
            },
            {
              number: 22,
              spans: [
                t('So neither I, nor my brethren, nor my servants, nor the men of the guard which followed me, none of us '),
                hg('put off our clothes, saving that every one put them off for washing', 'n4-clothes-never-off'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'n4-guard-labor',
          html:
            'Nehemiah ensures that every man stays within Jerusalem. They do not return to their homes each night. Instead, they maintain a constant guard. By day, they labor on the wall. By night, they guard it. There is no moment when the work is not being protected.',
        },
        {
          kind: 'commentary',
          id: 'n4-clothes-never-off',
          html:
            'The detail is striking: none of them put off their clothes except to wash them. They remain in a constant state of readiness. This is the cost of building in the face of opposition — perpetual watchfulness, no rest, no moment when they can fully let down their guard. This is the reality of spiritual vigilance: it is not a posture you can simply turn on and off. It becomes the rhythm of your life.',
        },
        {
          kind: 'carry',
          html:
            'The work of God is not a task that can be done in office hours and then forgotten. It requires devotion. It requires a willingness to remain clothed and ready, to forego comfort, to live in constant awareness that opposition exists and that the work matters. This does not mean living in fear. It means living with a clear sense of priority. The people of Jerusalem did not put off their clothes because they had learned that nothing — not comfort, not ease, not the luxury of a normal life — was more important than the restoration they had been called to accomplish.',
        },
        {
          kind: 'reflection',
          id: 'long-watch',
          prompt: 'What does it cost to remain vigilant and faithful for a long time? Are you willing to "not put off your clothes," so to speak, in service of a work that matters to God?',
        },
      ],
    },
  ],
};
