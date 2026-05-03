import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 20 — The Servant King
 *
 * The parable of the laborers in the vineyard: workers hired at different hours
 * all receive the same wage. The last shall be first. "Whosoever will be great
 * among you, let him be your minister; and whosoever will be chief among you, let
 * him be your servant." Jesus speaks plainly of His coming death and resurrection.
 * Yet the mother of James and John asks for her sons to sit at His right and left.
 * Jesus offers them the cup He drinks, but position is not His to grant.
 */
export const MATTHEW_20: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 20,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'The kingdom of heaven is like a landowner who goes out early to hire laborers for his vineyard. He hires some at the beginning of the day for a denarius. As the day progresses, he hires more—at the third hour, the sixth hour, the ninth hour, and finally, at the eleventh hour, an hour before sunset, he finds others standing idle and brings them in. At the end of the day, all are paid the same wage. Those hired first murmur: it is unfair. But the owner replies: "Is it not lawful for me to do what I will with mine own?"',
    'Immediately following, Jesus prepares His disciples for what lies ahead. He speaks plainly: He will be delivered to the chief priests and scribes, condemned to death, and delivered to the Gentiles to be mocked, scourged, and crucified. Yet on the third day, He will rise. The glory and the cross are not separated. To reign with Christ requires drinking His cup.',
  ],

  sections: [
    /* ─── Matthew 20:1–16 — The Laborers in the Vineyard ────────────────── */
    {
      ref: 'Matthew 20:1–16',
      title: 'The Economy of Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(1, 'For the kingdom of heaven is like unto a man that is an householder, which went out early in the morning to hire labourers into his vineyard.'),
            plain(2, 'And when he had agreed with the labourers for a penny a day, he sent them into his vineyard.'),
            plain(8, 'So when even was come, the lord of the vineyard said unto his steward, Call the labourers, and give them their hire, beginning from the last unto the first.'),
            plain(10, 'But when the first came, they supposed that they should have received more; and they likewise received every man a penny.'),
            plain(15, 'Is it not lawful for me to do what I will with mine own? Is thine eye evil, because I am good?'),
            plain(16, 'So the last shall be first, and the first last: for many be called, but few chosen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt20-hire',
          html:
            'The landowner is generous from the beginning. Those hired early agreed to a denarius—a fair day&apos;s wage. But the owner continues hiring throughout the day. Those hired at the eleventh hour—who worked barely an hour—receive the same wage. The economy is not merit-based. It is rooted in the owner&apos;s generosity and goodwill.',
        },
        {
          kind: 'commentary',
          id: 'matt20-grumble',
          html:
            'Those hired early grumble. They expect to receive more for working longer. Instead, all receive the same. Their complaint reveals a transactional mind-set: work is a contract to be negotiated. But the owner&apos;s response is not a contract but a gift. He has done no wrong. He has been gracious to all. Those hired late have received mercy; those hired early have received what they bargained for.',
        },
        {
          kind: 'greek',
          id: 'matt20-misthos',
          title: 'Misthos — Wage; Reward',
          script: 'μισθός',
          translit: '<strong>Misthos</strong> · wage; hire; reward; recompense',
          description:
            'Misthos refers to a wage earned or a reward given. The parable turns on the contrast between earning (what the early laborers expected) and receiving (what the owner actually gives). Grace gives what is not earned.',
        },
        {
          kind: 'commentary',
          id: 'matt20-evil-eye',
          html:
            'The owner asks: "Is thine eye evil, because I am good?" An evil eye, in biblical language, is envious, covetous, begrudging. The early laborers cannot rejoice in the owner&apos;s kindness to others because they are comparing, calculating, and resentful. They cannot see goodness as goodness; they see only their own diminishment.',
        },
        {
          kind: 'christ',
          id: 'matt20-christ-grace',
          title: 'Christ Connection — The Grace Economy',
          html:
            'The kingdom of God operates on a grace economy, not a merit economy. No one earns salvation. All who come, whether early or late, receive the same grace—the forgiveness of sins and adoption as God&apos;s children. Those who have served long should not begrudge new believers their full inclusion.',
        },
        {
          kind: 'carry',
          html:
            'Do you grumble when God blesses someone else? Can you rejoice in His kindness even when you receive no more than another? The evil eye prevents us from seeing goodness. Opening your eyes to God&apos;s generosity liberates you from envy.',
        },
        {
          kind: 'reflection',
          id: 'matt20-envy',
          prompt: 'When have you felt that God was unfair in His generosity to someone else? How might seeing His generosity as grace change your perspective?',
        },
      ],
    },

    /* ─── Matthew 20:17–34 — Suffering, Service, and Two Blind Men ───────── */
    {
      ref: 'Matthew 20:17–34',
      title: 'The Servant King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(17, 'And Jesus going up to Jerusalem took the twelve disciples apart in the way, and said unto them,'),
            plain(18, 'Behold, we go up to Jerusalem; and the Son of man shall be betrayed unto the chief priests and unto the scribes, and they shall condemn him to death;'),
            plain(19, 'And shall deliver him to the Gentiles to mock, and to scourge, and to crucify him: and the third day he shall rise again.'),
            plain(26, 'But Jesus called them unto him, and said, Ye know that the princes of the Gentiles exercise dominion over them, and they that are great exercise authority upon them.'),
            plain(27, 'But it shall not be so among you: but whosoever will be great among you, let him be your minister;'),
            plain(28, 'And whosoever will be chief among you, let him be your servant.'),
            plain(34, 'So Jesus had compassion on them, and touched their eyes: and immediately their eyes received sight, and they followed him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt20-passion',
          html:
            'Jesus speaks plainly about His approaching passion. He will be betrayed, condemned, delivered to the Gentiles, mocked, scourged, and crucified. Yet the third day He will rise. The resurrection is not separate from the cross; it is inseparable from it. To follow Jesus requires understanding that suffering precedes glory.',
        },
        {
          kind: 'commentary',
          id: 'matt20-greatness',
          html:
            'The disciples still misunderstand. The mother of James and John requests that her sons sit at Jesus&apos; right and left in His kingdom. Jesus does not refuse the request directly. Instead, He redefines greatness. "Whosoever will be great among you, let him be your minister; and whosoever will be chief among you, let him be your servant." In God&apos;s kingdom, the ladder is inverted. Power is expressed through service. Greatness is expressed through humble care for others.',
        },
        {
          kind: 'greek',
          id: 'matt20-diakonos',
          title: 'Diakonos — Minister; Servant',
          script: 'διάκονος',
          translit: '<strong>Diakonos</strong> · servant; minister; attendant; one who serves',
          description:
            'Diakonos originally referred to a table servant, one who waits on others. Jesus redefines greatness as diaconia—service. Leadership in the kingdom is not about authority over others but about service to others.',
        },
        {
          kind: 'commentary',
          id: 'matt20-blind',
          html:
            'As Jesus leaves Jericho, two blind men sit by the wayside. When they hear that Jesus passes, they cry out for mercy. The crowd rebukes them. But they cry louder. Jesus stops, has compassion, and touches their eyes. Immediately, their sight is restored, and they follow Him. The blind—those the world ignores—are restored to wholeness and granted sight.',
        },
        {
          kind: 'christ',
          id: 'matt20-christ-servant',
          title: 'Christ Connection — Christ the Servant-King',
          html:
            'Jesus embodies the principle He teaches. He comes not to be served but to serve, and to give His life as a ransom for many. His kingship is expressed through self-giving love, through willingness to drink the cup of suffering for the sake of others.',
        },
        {
          kind: 'carry',
          html:
            'Where in your life do you seek greatness through power and status? What would change if you embraced greatness through service? The invitation is to follow Christ&apos;s example: the greatest are those who serve.',
        },
        {
          kind: 'reflection',
          id: 'matt20-serve',
          prompt: 'Who in your life most embodies the principle that greatness lies in service? How does their example challenge or inspire you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The last shall be first... Whosoever will be great among you, let him be your minister.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 20 · Study Guide',
  },

  hasHebrew: false,
};
