import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 20 — The laws of war, grounded in God&apos;s presence.
 * Exemptions reveal God&apos;s tenderness toward home, harvest, marriage, heart.
 * Peace before war. The herem against the seven nations as God&apos;s judgment
 * on accumulated iniquity, executed once in one place for one purpose: to guard
 * Israel from idolatry. Trees even in siege: creation honored even in judgment.
 */
export const DEUTERONOMY_20: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 20,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 15 },
  topicTags: ['covenant', 'faithfulness', 'leadership', 'love'],
  opener: {
    topical: true,
    caption: 'Deuteronomy 20',
  },
  intros: [
    'Deuteronomy 20 opens with one command that will echo through every battle to come: &ldquo;Be not afraid.&rdquo; Israel stands on the edge of conquest, facing horses and chariots and armies larger than their own. But the foundation is not military might. It is the presence of God. &ldquo;The Lord thy God is with thee, which brought thee up out of the land of Egypt.&rdquo; This is the theology of warfare in Scripture—not the glorification of violence, but the triumph of faith.',
    'Before a single sword is drawn, the priest speaks words that transform the meaning of what follows. And then, before the army marches, four groups are sent home: those with unfinished lives—a new house, a new vineyard, a betrothed bride. Those whose hearts tremble. God will not have His army consumed by fear or distraction. Even in war, life goes on. Then comes the command to offer peace first. And beneath it all—the herem against the seven nations, a judgment so severe it can only be understood in the frame of Scripture itself: God executing justice on centuries of accumulated iniquity, not a model for the church.',
  ],

  bottomShare: {
    label: 'Share Deuteronomy 20',
    quote:
      'Hear, O Israel, ye approach this day unto battle against your enemies: let not your hearts faint, fear not, and do not tremble, neither be ye terrified because of them; For the Lord your God is he that goeth with you, to fight for you against your enemies, to save you.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 20 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-deuteronomy-20',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 20',
      url: 'https://www.sefaria.org/Deuteronomy.20',
      description: 'Open-access source text and rabbinic commentary on warfare protocols [res:sefaria-deuteronomy-20], exemptions from military service, and rules of siege.',
    },
    {
      id: 'siege-warfare-ancient-near-east-archaeology',
      kind: 'archaeology',
      source: 'Oriental Institute',
      label: 'Siege Warfare in the Ancient Near East',
      url: 'https://oi.uchicago.edu/',
      description: 'Archaeological evidence for siege tactics, fortifications, and military engineering in Iron Age Levantine warfare.',
    },
  ],

  sections: [
    /* ─── Deuteronomy 20:1–4 — Fear and the Presence of God ─────────────── */
    {
      ref: 'Deuteronomy 20:1–4',
      title: 'Fear and the Presence of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 1,
              spans: [
                t('When thou goest out to battle against thine enemies, and seest '),
                hy('horses, and chariots, and a people more than thou', 'deut20-fear'),
                t(', '),
                hp('be not afraid of them', 'christ-presence'),
                t(': for the Lord thy God is with thee, which brought thee up out of the land of Egypt.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And it shall be, when ye are come nigh unto the battle, that the priest shall approach and speak unto the people,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And shall say unto them, Hear, O Israel, ye approach this day unto battle against your enemies: '),
                hg('let not your hearts faint, fear not, and do not tremble, neither be ye terrified because of them', 'priest-word'),
                t(';'),
              ],
            },
            {
              number: 4,
              spans: [
                t('For the Lord your God is he that goeth with you, to '),
                t('fight for you against your enemies, to save you'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut20-fear',
          html:
            'Horses and chariots—the ancient instruments of overwhelming military power. Egypt had them when Israel crossed the Red Sea, and they drowned. Here, Israel may see the enemy&apos;s advantage and feel the weight of it. But the command is not to deny the fear; it is to refuse to be ruled by it. The next word addresses fear directly at its root.',
        },
        {
          kind: 'commentary',
          id: 'priest-word',
          html:
            'The priest&apos;s role is peculiar. He does not go to war; he goes to speak. His words are not tactical—they do not describe the enemy&apos;s weakness or Israel&apos;s strength. He speaks only the fact of God&apos;s presence. That is the entire theology of warfare in the Old Testament: God does the saving. Israel does the trusting. Fear wants to occupy the heart, but the priest stands in the gap and names the One who is already there.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yare',
          title: 'Yare — &ldquo;afraid&rdquo;',
          script: 'יָרֵא',
          translit: '<strong>yare</strong> · to fear, to stand in awe, to be terrified',
          description:
            'The same root appears in Proverbs 9:10: &ldquo;The fear of the Lord is the beginning of wisdom.&rdquo; Here, the call is to transfer fear—away from the enemy, toward God. One fear must be broken by a greater one.',
        },
        {
          kind: 'christ',
          id: 'christ-presence',
          title: 'Christ Connection — Emmanuel, God with Us',
          html:
            '&ldquo;Fear thou not; for I am with thee: be not dismayed; for I am thy God&rdquo; (Isaiah 41:10). Jesus came as Emmanuel—God with us. He stood with the disciples in the storm and said, &ldquo;Why are ye fearful? have ye not faith?&rdquo; (Mark 4:40). The promise that &ldquo;the Lord your God is he that goeth with you&rdquo; reaches its fulfillment in the One who will not leave us nor forsake us. &ldquo;What shall we then say to these things? If God be for us, who can be against us?&rdquo; (Romans 8:31). The foundation of courage has always been presence.',
        },
        {
          kind: 'carry',
          html:
            'Every battle you face—whether it looks like external opposition or internal struggle—begins with a choice: to focus on what you see (the chariots, the numbers, the weight of it), or to remember who is with you. The priest&apos;s voice in your ear names the God who brought you out of slavery before. That presence hasn&apos;t changed. Fear is not sin. Fear that cuts you off from faith is. What would shift in your day if you actually believed that God fights for you?',
        },
        {
          kind: 'reflection',
          id: 'refl-fear',
          prompt:
            'What are the &ldquo;horses and chariots&rdquo; you&apos;re facing right now—the things that look too big, too powerful, too numerous? Can you name one thing, and then speak back to yourself the priest&apos;s word: the Lord is with you?',
        },
      ],
    },

    /* ─── Deuteronomy 20:5–8 — Four Exemptions ────────────────────────────── */
    {
      ref: 'Deuteronomy 20:5–8',
      title: 'Four Exemptions: Life Outside War',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 5,
              spans: [
                t('And the officers shall speak unto the people, saying, What man is there that hath built a new house, and hath not dedicated it? let him go and return to his house, lest he die in the battle, and '),
                hg('another man dedicate it', 'dedicate-house'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And what man is he that hath planted a vineyard, and hath not yet eaten of it? let him also go unto his house; lest he die in the battle, and '),
                hg('another man eat of it', 'eat-vineyard'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And what man is there that hath betrothed a wife, and hath not taken her? let him go and return unto his house, lest he die in the battle, and '),
                hg('another man take her', 'take-wife'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the officers shall speak further unto the people, and they shall say, What man is there that is fearful and '),
                hy('fainthearted', 'hebrew-yare'),
                t('? let him go and return unto his house, lest his brethren&apos;s heart faint as well as his.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dedicate-house',
          html:
            'A new house is not a luxury—it is a home. To dedicate it is to bless it, to make it sacred space, to begin life in it. God will not allow war to steal that moment. The fear here is not cowardice but loss: that if he dies, another will stand in his new home and speak the words of blessing that belong to him.',
        },
        {
          kind: 'commentary',
          id: 'eat-vineyard',
          html:
            'A vineyard takes years to mature. To plant one is an act of faith in the future, a statement that you believe you will live long enough to harvest it. The first fruit belongs to the planter by right. God honors that claim. Life, not duty, takes precedence.',
        },
        {
          kind: 'commentary',
          id: 'take-wife',
          html:
            'Betrothal is a covenant. A wife is not a possession to be taken lightly. To forbid marriage to a warrior is to forbid him the consolation of covenant, the presence of another, the beginning of family. Death could come in battle; the marriage night cannot wait.',
        },
        {
          kind: 'carry',
          html:
            'These exemptions are a portrait of God&apos;s tenderness. War is sometimes necessary, but the good things of life—home, harvest, marriage, love—are never expendable to the machinery of duty. God sees the unfinished things in your life and does not ask you to abandon them for obligation. If you are called to something that would destroy what is good and true and sacred in your closest life, that call itself may be suspect. Faithfulness includes protecting what matters most.',
        },
        {
          kind: 'reflection',
          id: 'refl-exemptions',
          prompt:
            'What is the new house in your life right now—something you&apos;ve begun that needs your presence and blessing to flourish? What exemption would you need to protect it?',
        },
      ],
    },

    /* ─── Deuteronomy 20:9–15 — Peace Before War ──────────────────────────── */
    {
      ref: 'Deuteronomy 20:10–15',
      title: 'Proclaim Peace First',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 10,
              spans: [
                t('When thou comest nigh unto a city to fight against it, then '),
                hg('proclaim peace unto it', 'proclaim-peace'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And it shall be, if it make thee answer of peace, and open unto thee, then it shall be, that all the people that is found therein shall be tributaries unto thee, and they shall serve thee.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And if it will make no peace with thee, but will make war against thee, then thou shalt besiege it:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And when the Lord thy God hath delivered it into thine hands, thou shalt smite every male thereof with the edge of the sword:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('But the women, and the little ones, and the cattle, and all that is in the city, even all the spoil thereof, shalt thou take unto thyself; and thou shalt eat the spoil of thine enemies, which the Lord thy God hath given thee.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Thus shalt thou do unto all the cities which are very far off from thee, which are not of the cities of these nations.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'proclaim-peace',
          html:
            'Before siege, before sword—peace. This is the order. Jesus would command His disciples: &ldquo;And into whatsoever house ye enter, first say, Peace be to this house&rdquo; (Luke 10:5). The offer of peace is not weakness. It is the first word of the kingdom of God, offered freely before judgment is executed. Many cities will choose it. Only those who refuse bear the consequence.',
        },
        {
          kind: 'carry',
          html:
            'In your conflicts—with a spouse, a friend, someone whose ideas differ from yours—the first move is always peace. Not surrender. Not compromise of truth. But the offer: there is a way forward together. Not every conflict will end that way. But your first word should always sound like peace, and your open door should remain open as long as the other person will have it.',
        },
        {
          kind: 'reflection',
          id: 'refl-peace',
          prompt:
            'Is there a relationship in your life right now where you&apos;ve moved past the &ldquo;proclaim peace&rdquo; stage? What would it look like to go back and genuinely offer peace before any further judgment?',
        },
      ],
    },

    /* ─── Deuteronomy 20:16–18 — The Seven Nations ──────────────────────── */
    {
      ref: 'Deuteronomy 20:16–18',
      title: 'The Herem: Judgment on Iniquity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 16,
              spans: [
                t('But of the cities of these nations which the Lord thy God doth give thee for an inheritance, '),
                hg('thou shalt save alive nothing that breatheth', 'cherem-cities'),
                t(':'),
              ],
            },
            {
              number: 17,
              spans: [
                t('But thou shalt '),
                t('utterly destroy them, namely, the Hittites, and the Amorites, the Canaanites, and the Perizzites, and the Hivites, and the Jebusites'),
                t('; as the Lord thy God hath commanded thee:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('That they teach you not to do after all their abominations, which they have done unto their gods; so should ye sin against the Lord your God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cherem-cities',
          html:
            'This is the herem—the devoted destruction that God commands against the seven nations. It is utterly severe and requires honest reckoning. Yet Scripture gives the frame for understanding it. Genesis 15:16 records God&apos;s word to Abraham: the land will be given to his descendants, but not yet, &ldquo;for the iniquity of the Amorites is not yet full.&rdquo; Four hundred years later, when Israel enters, that iniquity has reached its measure. This is not ethnic conquest for plunder or pride. This is God&apos;s execution of judgment on centuries of accumulated wickedness—child sacrifice, sorcery, idolatry, covenant-breaking—executed once, in one place, for one purpose: to cleanse the land God is giving His people as a sanctuary.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-cherem',
          title: 'Cherem — &ldquo;devoted destruction&rdquo;',
          script: 'חֵרֶם',
          translit: '<strong>cherem</strong> · that which is devoted, set apart to God; utter destruction',
          description:
            'Cherem appears also in the fall of Jericho (Joshua 6) and in the warning against coveting plundered idols. It is sacred destruction—not wanton, but purposeful, an instrument of God&apos;s judgment wielded by His people in His service.',
        },
        {
          kind: 'commentary',
          id: 'purpose-not-model',
          html:
            'What is crucial to say: the herem was executed in a specific hour, in a specific place, under a specific command, for a specific purpose—to preserve Israel&apos;s covenant purity. It is not a model for Christian conduct. The New Testament is clear: &ldquo;We wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places&rdquo; (Ephesians 6:12). The church&apos;s warfare is spiritual. &ldquo;The weapons of our warfare are not carnal, but mighty through God to the pulling down of strong holds&rdquo; (2 Corinthians 10:4). The judgment of nations belongs to God alone. The church proclaims the gospel and leaves the final judgment in His hands.',
        },
        {
          kind: 'christ',
          id: 'christ-judgment',
          title: 'Christ Connection — Judge and Savior',
          html:
            'Jesus will be the final judge of all nations. &ldquo;When the Son of man shall come in his glory, and all the holy angels with him, then shall he sit upon the throne of his glory&rdquo; (Matthew 25:31). But in His earthly ministry, He came not to judge but to save. &ldquo;I came not to judge the world, but to save the world&rdquo; (John 12:47). The day of judgment is coming; until then, the gospel is the word of peace, offered freely. The herem belongs to God&apos;s justice; it is not the church&apos;s weapon or pattern.',
        },
        {
          kind: 'carry',
          html:
            'You will face the impulse to judge, to cut off, to pronounce final destruction on someone whose way looks abominable to you. That is not your work. Your work is to stand apart from idolatry, to refuse the patterns that destroy, to proclaim peace and truth and the gospel. The judgment of nations and the unrepentant belongs to God. You are called to be salt and light, not the sword of justice.',
        },
        {
          kind: 'reflection',
          id: 'refl-herem',
          prompt:
            'Where do you sense the temptation to judge finally and harshly someone whose choices seem to lead them away from God? What would it look like to leave that judgment to God and focus instead on your own faithfulness?',
        },
      ],
    },

    /* ─── Deuteronomy 20:19–20 — Do Not Destroy the Trees ──────────────── */
    {
      ref: 'Deuteronomy 20:19–20',
      title: 'Honor Creation Even in War',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 19,
              spans: [
                t('When thou shalt besiege a city a long time, in making war against it to take it, '),
                hg('thou shalt not destroy the trees thereof by forcing an axe against them', 'preserve-trees'),
                t(': for thou mayest eat of them, and thou shalt not cut them down (for the tree of the field is man&apos;s life) to employ them in the siege:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Only the trees which thou knowest that they be not trees for meat thou shalt destroy and cut down; and thou shalt build bulwarks against the city that maketh war with thee, until it be subdued.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'preserve-trees',
          html:
            'Even in siege [res:siege-warfare-ancient-near-east-archaeology], where total destruction would seem a military advantage, God forbids the burning of fruit trees. Fruit trees feed. They are not fuel for war machines. The phrase &ldquo;the tree of the field is man&apos;s life&rdquo; is extraordinary—a recognition that the created world has its own value, independent of human military need. Creation is not collateral damage. Earth is not expendable to human ambition, even to justified war. God will accept siege; He will not accept the casual destruction of what sustains life.',
        },
        {
          kind: 'carry',
          html:
            'You live in a time of urgency and outcome-focused thinking. But God is telling you: not every tool is available. Not every method that works is permitted. The trees that bear fruit—the relationships that nourish, the practices that sustain, the creation itself—are off-limits to your strategy, even when you believe you are in the right. Victory at the cost of everything that makes life worth living is not victory. Preserve the trees.',
        },
        {
          kind: 'reflection',
          id: 'refl-trees',
          prompt:
            'In pursuing something important to you, what &ldquo;trees&rdquo; are you in danger of cutting down—relationships, practices, rhythms of rest that actually sustain your life? How might you win without destroying them?',
        },
      ],
    },
  ],
};
