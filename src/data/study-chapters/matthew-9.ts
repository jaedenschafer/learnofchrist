import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 9 — The Paralytic, Matthew&apos;s Calling, and the Harvest
 *
 * Jesus heals a paralytic and declares his sins forgiven—provoking accusation
 * from the scribes that He blasphemes. He then calls Matthew (Levi), a tax
 * collector, to follow Him. Matthew hosts a dinner, and Jesus eats with tax
 * collectors and sinners, saying "I am not come to call the righteous, but
 * sinners to repentance." Old wineskins cannot hold new wine. Then Jesus
 * encounters Jairus, whose daughter has died. He goes to her and says "Damsel,
 * arise." She lives. Two blind men cry out "Thou son of David, have mercy on
 * us," and their eyes are opened. Jesus looks at the multitude and says: "The
 * harvest truly is plenteous, but the labourers are few." He is the Lord of
 * the harvest.
 */
export const MATTHEW_9: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 9,

  intros: [
    'Jesus continues His ministry of healing and calling. A paralytic is brought to Him on a bed. "And Jesus seeing their faith said unto the sick of the palsy; Son, be of good cheer; thy sins be forgiven thee." This provokes an immediate response from the scribes: to forgive sins is to blaspheme. Only God forgives sins. But Jesus shows His authority: "Arise, and take up thy bed, and go unto thine house." The man who could not walk now carries his own bed. The paralysis is not merely physical. It is spiritual. And Jesus addresses both.',
    'Then comes the calling of Matthew, a tax collector—a man despised, considered a traitor to Israel for working for Rome. Jesus says "Follow me." Matthew leaves everything and follows. He hosts a dinner where Jesus eats with tax collectors and sinners. The Pharisees are scandalized: "Why eateth your Master with publicans and sinners?" Jesus answers: "I am not come to call the righteous, but sinners to repentance." He does not come for those who think they have no need. He comes for the lost, the excluded, the broken.',
  ],

  sections: [
    {
      ref: 'Matthew 9:1–17',
      title: 'The Paralytic, Matthew&apos;s Calling, and Old Wineskins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(2, 'And, behold, they brought to him a man sick of the palsy, lying on a bed: and Jesus seeing their faith said unto the sick of the palsy; Son, be of good cheer; thy sins be forgiven thee.'),
            plain(6, 'But that ye may know that the Son of man hath power on earth to forgive sins, (then saith he to the sick of the palsy,) Arise, take up thy bed, and go unto thine house.'),
            plain(9, 'And as Jesus passed forth from thence, he saw a man, named Matthew, sitting at the receipt of custom: and he saith unto him, Follow me. And he arose, and followed him.'),
            plain(11, 'And when the Pharisees saw it, they said unto his disciples, Why eateth your Master with publicans and sinners?'),
            plain(12, 'But when Jesus heard that, he said unto them, They that be whole have no need of the physician, but they that are sick.'),
            plain(13, 'But go ye and learn what that meaneth, I will have mercy, and not sacrifice: for I am not come to call the righteous, but sinners to repentance.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt9-paralytic',
          html:
            'The paralytic is brought by faith—the faith of those who carry him, whose faith Jesus "sees" and honors. Jesus&apos; response is surprising: "Son, be of good cheer; thy sins be forgiven thee." He speaks to spiritual paralysis before physical. The man&apos;s deeper sickness is separation from God. But the scribes object: "This man blasphemeth" (only God can forgive sins). Jesus responds by healing the body: "Arise, take up thy bed, and go unto thine house." The physical miracle proves the spiritual authority. The body obeys because the soul is cleansed.',
        },
        {
          kind: 'commentary',
          id: 'matt9-matthew-calling',
          html:
            'Jesus calls Matthew, a tax collector—a man wealthy but despised, working for the occupation force against his own people. Matthew leaves everything and follows. His calling is radical: no preparation, no negotiation, just "Follow me" and the response is immediate. Matthew is not first cleansed or instructed. He is called into discipleship. He will learn by following.',
        },
        {
          kind: 'commentary',
          id: 'matt9-sinners',
          html:
            'Matthew hosts a dinner, and Jesus reclines with tax collectors and sinners. The Pharisees are scandalized. Jesus responds: "They that be whole have no need of the physician, but they that are sick." Righteousness is not isolation from sinners but healing of sinners. Jesus quotes Hosea: "I will have mercy, and not sacrifice." The law and the temple sacrifices are good, but mercy—the healing love of God—surpasses them. Jesus comes not to call the self-righteous but to call sinners to repentance.',
        },
        {
          kind: 'greek',
          id: 'matt9-telonai',
          title: 'Telonai — Tax Collectors',
          script: 'τελῶναι',
          translit: '<strong>Telonai</strong> · tax collectors; publicans; those who collect taxes for Rome',
          description:
            'Tax collectors were despised in Jewish society—both as collaborators with Rome and often as extortionists who overcharged. Yet Jesus calls Matthew and eats with tax collectors, affirming them as worthy of His healing love. His kingdom breaks down the barriers that separate the respectable from the excluded.',
        },
        {
          kind: 'commentary',
          id: 'matt9-wineskins',
          html:
            'Jesus teaches about new wineskins: "No man putteth new wine into old bottles: else the bottles break... but they put new wine into new bottles." The gospel is not a patch on the old system. It is new wine requiring new containers. The kingdom of God requires a new way of thinking, a new community, a new kind of people. Old systems and old mindsets cannot contain it.',
        },
        {
          kind: 'christ',
          id: 'matt9-christ-physician',
          title: 'Christ Connection — Christ the Physician',
          html:
            'Jesus presents Himself as the physician. He does not come for the self-righteous but for the sick—those who know they are broken and need healing. His calling of Matthew shows that no one is beyond His reach, no matter how despised or broken. The new wine of the gospel is transformative. It requires new vessels to contain it.',
        },
        {
          kind: 'carry',
          html:
            'Matthew&apos;s calling reveals a truth about discipleship: You do not need to be good enough first. You do not need to purify yourself before following. Jesus calls you as you are—broken, excluded, aware of your need. Following is how you become transformed, not the result of transformation already accomplished.',
        },
        {
          kind: 'reflection',
          id: 'matt9-matthew',
          prompt: 'Matthew left his lucrative position to follow Jesus. What would it require of you to leave what you trust in or build your identity on to follow more fully?',
        },
      ],
    },

    {
      ref: 'Matthew 9:18–38',
      title: 'The Daughter Raised, the Blind Healed, and the Harvest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(18, 'While he spake these things unto them, behold, there came a certain ruler, and worshipped him, saying, My daughter is even now dead: but come and lay thy hand upon her, and she shall live.'),
            plain(25, 'But when the multitude was put forth, he went in, and took her by the hand, and the damsel arose.'),
            plain(27, 'And when Jesus departed thence, two blind men followed him, crying, and saying, Thou son of David, have mercy on us.'),
            plain(28, 'And when he was come into the house, the blind men came to him: and Jesus saith unto them, Believe ye that I am able to do this? They said unto him, Yea, Lord.'),
            plain(35, 'And Jesus went about all the cities and villages, teaching in their synagogues, and preaching the gospel of the kingdom, and healing every sickness and every disease among the people.'),
            plain(36, 'But when he saw the multitudes, he was moved with compassion on them, because they fainted, and were scattered abroad, as sheep having no shepherd.'),
            plain(37, 'Then saith he unto his disciples, The harvest truly is plenteous, but the labourers are few;'),
            plain(38, 'Pray ye therefore the Lord of the harvest, that he will send forth labourers into his harvest.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt9-jairus-daughter',
          html:
            'Jairus, a ruler of the synagogue, comes and worships Jesus: "My daughter is even now dead: but come and lay thy hand upon her, and she shall live." Even death is not beyond Jesus&apos; reach. He goes to the house, disperses the flute players and the crowd, and says to the girl: "Damsel, arise." And she arises. Death is reversed. Life returns. The girl sits up, and the report goes forth throughout the land.',
        },
        {
          kind: 'commentary',
          id: 'matt9-blind-men',
          html:
            'Two blind men follow Jesus crying "Thou son of David, have mercy on us." Jesus asks them: "Believe ye that I am able to do this?" They answer "Yea, Lord." Their faith is the condition. Jesus touches their eyes: "According to your faith be it unto you." And their eyes are opened. Belief precedes the miracle. The blind men&apos;s faith opens the door to healing.',
        },
        {
          kind: 'commentary',
          id: 'matt9-harvest',
          html:
            'As Jesus moves through the cities and villages, He sees the multitudes—"fainted, and scattered abroad, as sheep having no shepherd." His response is compassion. And then He addresses His disciples: "The harvest truly is plenteous, but the labourers are few." The world is ready for the gospel. The spiritual harvest waits. But there are not enough workers. Jesus calls His disciples to pray: "Pray ye therefore the Lord of the harvest, that he will send forth labourers into his harvest."',
        },
        {
          kind: 'greek',
          id: 'matt9-ekthymia',
          title: 'Splagchnizomai — Compassion',
          script: 'σπλαγχνίζομαι',
          translit: '<strong>Splagchnizomai</strong> · moved with compassion; felt in the bowels; deeply moved',
          description:
            'The Greek word splagchnizomai describes Jesus&apos; response to the multitudes. He is moved "in his bowels"—at the deepest emotional and spiritual level. His compassion is not sentimental but active, leading Him to heal, to teach, to call workers. Compassion moves Him to action.',
        },
        {
          kind: 'christ',
          id: 'matt9-christ-harvest',
          title: 'Christ Connection — Christ the Lord of the Harvest',
          html:
            'Jesus reveals Himself as the Lord of the harvest. He sees the fields ripe for reaping. He has compassion for the shepherdless crowds. He has authority over sickness, death, and blindness. Yet He calls His disciples to participate—to pray, to go, to labor alongside Him in bringing in the harvest. The kingdom is not accomplished by the Messiah alone. It calls forth workers from every generation.',
        },
        {
          kind: 'carry',
          html:
            'The cry "The harvest is plenteous, but the labourers are few" is Jesus&apos; call to every disciple. The need is real. The opportunity is urgent. The laborers are few. You are called not only to experience the healing and forgiveness of Jesus but to become a channel through which that healing and forgiveness flow to others.',
        },
        {
          kind: 'reflection',
          id: 'matt9-harvest',
          prompt: 'When you look at the people around you—your community, your nation, the world—what harvest do you see? How is Jesus calling you to be a laborer in that harvest?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am not come to call the righteous, but sinners to repentance. The harvest truly is plenteous, but the labourers are few.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 9 · Study Guide',
  },

  hasHebrew: false,
};
