import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 22 — Against the Kings of Judah; Coniah Cursed
 *
 * Jeremiah pronounces judgment against the kings of Judah, especially against
 * Jehoiachin (called Coniah), who is cursed: "Write ye this man childless, a
 * man that shall not prosper in his days: for no man of his seed shall sit upon
 * the throne of David, and rule any more in Judah." Yet even in the judgment of
 * kings, the promise of a true king persists.
 */
export const JEREMIAH_22: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 22,

  estimatedMinutes: { 5: 5, 10: 7, 15: 9 },
  intros: [
    'Jeremiah goes to the house of the king and speaks judgment on the kings of Judah. They have built palaces with injustice, have not paid workers their wages, have built their houses on unjust gain. The judgment is specific: "Shallum" (another name for Jehoahaz) will be carried away in captivity and will not return. Coniah (Jehoiachin) is cursed: he will be "as a signet ring" that God pulls from His finger — rejected, removed, cast away.',
    'Yet even in the midst of judgment, the promise of a true king emerges. In chapter 23, Jeremiah will speak of "a righteous Branch" who will be called "The Lord Our Righteousness." The false kings will fall, but the true King is coming.',
  ],

  bottomShare: {
    label: 'Share Jeremiah 22',
    quote:
      'The kings of Judah have built on injustice. Jeremiah pronounces: the true King will be righteous, called "The Lord Our Righteousness."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 22 · Study Guide',
  },

  sections: [
    /* ─── Jeremiah 22:1–9 — The House of the King ──────────────────────────── */
    {
      ref: 'Jeremiah 22:1–9',
      title: 'Judgment on Unjust Rule',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 1,
              spans: [
                t('Thus saith the Lord; Go down to the house of the king of Judah, and speak there this word,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And say, Hear the word of the Lord, O king of Judah, that sittest upon the throne of David, thou, and thy servants, and thy people that enter in by these gates:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Thus saith the Lord; Execute ye judgment and righteousness, and deliver the spoiled out of the hand of the oppressor: and do no wrong, do no violence to the stranger, the fatherless, nor the widow, neither shed innocent blood in this place.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('For if ye do this thing indeed, then shall there enter in by the gates of this house kings sitting upon the throne of David, riding in chariots and on horses, he, and his servants, and his people.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('But if ye will not hear these words, I swear by myself, saith the Lord, that this house shall become a desolation.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('For thus saith the Lord unto the king&apos;s house of Judah; Thou art Gilead unto me, and the head of Lebanon: yet surely I will make thee a wilderness, and cities which are not inhabited.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And I will prepare destroyers against thee, every one with his weapons: and they shall cut down thy choice cedars, and cast them into the fire.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And many nations shall pass by this city, and they shall say every one to his neighbour, Wherefore hath the Lord done thus unto this great city?'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then they shall answer, Because they have forsaken the covenant of the Lord their God, and worshipped other gods, and served them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer22-execute-judgment',
          html:
            'The king is called to "execute judgment and righteousness, and deliver the spoiled." The king&apos;s primary duty is not splendor or strength, but justice — especially for the vulnerable: the stranger, the fatherless, the widow. The covenant with the throne is conditional: faithfulness brings continuity; betrayal brings desolation.',
        },
        {
          kind: 'commentary',
          id: 'jer22-gilead',
          html:
            'Gilead and Lebanon are places of richness and value. The king&apos;s house has been as valuable as these places. But now, if the king refuses to repent, God will make them a wilderness, a desolation. The choice is the king&apos;s to make.',
        },
        {
          kind: 'carry',
          html:
            'Those in power are not exempt from the call to justice. Indeed, their power is conditional upon their willingness to care for the vulnerable. A throne built on injustice is doomed. But a throne built on justice and righteousness will endure.',
        },
        {
          kind: 'reflection',
          id: 'jer22-powerful',
          prompt: 'The king is called to execute justice especially for the vulnerable. If you have power or responsibility, how are you using it to protect and uplift those without power?',
        },
      ],
    },

    /* ─── Jeremiah 22:10–17 — Lament for the Dead Kings ────────────────────── */
    {
      ref: 'Jeremiah 22:10–17',
      title: 'Kings Dead and Living',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 10,
              spans: [
                t('Weep ye not for the dead, neither bemoan him: but weep sore for him that goeth away: for he shall return no more, nor see his native country.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('For thus saith the Lord touching Shallum the son of Josiah king of Judah, which reigned instead of Josiah his father, which went forth out of this place; He shall not return any more:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('But he shall die in the place whither they have led him captive, and shall see this land no more.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Woe unto him that buildeth his house by unrighteousness, and his chambers by wrong; that useth his neighbour&apos;s service without wages, and giveth him not for his work;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('That saith, I will build me a wide house and large chambers, and cutteth him out windows; and it is cieled with cedar, and painted with vermilion.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Shalt thou reign, because thou closest thyself in cedar? did not thy father eat and drink, and do judgment and justice, and then it was well with him?'),
              ],
            },
            {
              number: 16,
              spans: [
                t('He judged the cause of the poor and needy; then it was well with him: was not this to know me? saith the Lord.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('But thine eyes and thine heart are but for covetousness, and for shedding of innocent blood, and for oppression, and for violence, to do it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer22-shallum',
          html:
            'Shallum (Jehoahaz) is carried away to captivity and will never return to his native country. Jeremiah says, do not weep for him as though dead; weep for him as one carried away, for he will not see Judah again. Exile is worse than death — it is a living separation from home.',
        },
        {
          kind: 'commentary',
          id: 'jer22-unrighteousness',
          html:
            'The king builds his house on unrighteousness, using his neighbor&apos;s service without paying wages. He thinks grandeur comes from cedar and vermilion, from fine building materials. But Jeremiah points him to his father (Josiah) — a king who ate and drank ordinarily but judged the cause of the poor. That king&apos;s reign was well. This king&apos;s reign will end in exile.',
        },
        {
          kind: 'carry',
          html:
            'Luxury built on injustice is hollow. A king who neglects the poor but builds cedarwood palaces is living an illusion. True prosperity comes when judgment and justice are done. The paradox is that a king who serves the vulnerable prospers; a king who exploits them fails.',
        },
        {
          kind: 'reflection',
          id: 'jer22-luxury',
          prompt: 'The king builds beautiful palaces but neglects justice. What luxuries in your own life might be built on injustice? What would it mean to choose justice instead?',
        },
      ],
    },

    /* ─── Jeremiah 22:18–30 — Coniah Cursed ────────────────────────────────── */
    {
      ref: 'Jeremiah 22:18–30',
      title: 'Coniah Written Childless',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 18,
              spans: [
                t('Therefore thus saith the Lord concerning Jehoiakim the son of Josiah king of Judah; They shall not lament for him, saying, Ah my brother! or, Ah sister! they shall not lament for him, saying, Ah lord! or, Ah his glory!'),
              ],
            },
            {
              number: 19,
              spans: [
                t('He shall be buried with the burial of an ass, drawn and cast forth beyond the gates of Jerusalem.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Go up to Lebanon, and cry; and lift up thy voice in Bashan, and cry from the passages: for all thy lovers are destroyed.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('As I live, saith the Lord, though Coniah the son of Jehoiakim king of Judah were the '),
                hp('signet ring upon my right hand', 'jer22-signet'),
                t(', yet would I pluck thee thence;'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And I will give thee into the hand of them that seek thy life, and into the hand of them whose face thou fearest, even into the hand of the king of Babylon, and into the hand of the Chaldeans.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And I will cast thee out, and thy mother that bare thee, into another country, where ye were not born; and there shall ye die.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Is this man Coniah a despised broken idol? is he a vessel wherein is no pleasure? wherefore are they cast out, he and his seed, and are cast into a land which they know not?'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Thus saith the Lord, Write ye this man '),
                hg('childless, a man that shall not prosper in his days', 'jer22-childless'),
                t(': for no man of his seed shall sit upon the throne of David, and rule any more in Judah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer22-signet',
          html:
            'The signet ring on the right hand is precious, intimate, invaluable. Yet God says He would pluck Coniah from His own finger. The king thought himself precious, safe in God&apos;s hand. But God removes him. He will be given to those who seek his life, carried away, and die in a foreign land.',
        },
        {
          kind: 'commentary',
          id: 'jer22-childless',
          html:
            'Coniah is written as childless — a man without heir, without future, whose line will not continue. In ancient thinking, to be childless was to be erased from history, forgotten. The curse is total.',
        },
        {
          kind: 'christ',
          id: 'jer22-christ-true-king',
          title: 'Christ Connection — The True King and the Branch',
          html:
            'The false kings — Shallum, Coniah — are rejected, cursed, removed. Yet Jeremiah points to a coming King, a "righteous Branch" (23:5) who will be called "The Lord Our Righteousness." This King will not be cursed or childless. He will have an eternal throne. In Christ, we see the fulfillment — a King who judges righteously, who cares for the vulnerable, whose kingdom will have no end.',
        },
        {
          kind: 'carry',
          html:
            'The curse on Coniah might seem harsh, but Jeremiah is teaching something essential: thrones are not permanent except by God&apos;s grace. No king rules except by God&apos;s hand. And the kings who rule unjustly will be removed. The true King — the righteous Branch — is coming.',
        },
        {
          kind: 'reflection',
          id: 'jer22-throne',
          prompt: 'Coniah is removed from God&apos;s hand like a signet ring plucked away. What are you clinging to that God may be asking you to release? What would it mean to trust that a new and better King is coming?',
        },
      ],
    },

    /* ─── Jeremiah 22 · Thrones and Justice ────────────────────────────────── */
    {
      ref: 'Jeremiah 22 · All',
      title: 'The Judgment of Kings',
      blocks: [
        {
          kind: 'commentary',
          id: 'jer22-royal-judgment',
          html:
            'The chapter presents a systematic judgment of the kings of Judah. Those who rule unjustly are removed. Those who exploit their power are cursed. Yet the very judgment of unjust kings points forward to the coming of the Just King, who will reign in righteousness.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
