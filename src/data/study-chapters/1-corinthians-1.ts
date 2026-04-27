import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 1 — Christ the Wisdom and Power of God
 *
 * Paul writes to the fractured church at Corinth, where believers are dividing
 * into camps—some following Paul, others Apollos, still others Cephas. The
 * root of their division is misunderstanding the nature of the gospel itself.
 * They have confused the power of God with the wisdom of men. Paul redirects
 * their focus to Christ, who is the true power and wisdom that matters.
 */
export const FIRST_CORINTHIANS_1: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 1,

  intros: [
    'The church at Corinth was young, gifted, and divided. In their zeal to follow great teachers, they had lost sight of the One they were meant to follow. Paul addresses this not with rebuke alone, but with a clarion call to refocus on Christ Himself. The gospel, he reminds them, is not measured by human eloquence or the status of its messenger. It is measured by the power of God working through weakness.',
    'Paul knows the temptation that divided them: to admire the wise, the powerful, the eloquent. The world honors these gifts. But in God&apos;s economy, the foolishness of the cross—a rabbi executed by Roman soldiers—proves to be wiser than all the wisdom of men, and the weakness of a crucified man proves to be stronger than all earthly strength.',
  ],

  sections: [
    {
      ref: '1 Corinthians 1:1–9',
      title: 'Called into Fellowship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Paul, called to be an apostle of Jesus Christ through the will of God, and Sosthenes our brother,'),
            plain(2, 'Unto the church of God which is at Corinth, to them that are sanctified in Christ Jesus, called to be saints, with all that in every place call upon the name of Jesus Christ our Lord, both theirs and ours:'),
            plain(3, 'Grace be unto you, and peace, from God our Father, and from the Lord Jesus Christ.'),
            plain(4, 'I thank my God always on your behalf for the grace of God which is given you by Jesus Christ;'),
            plain(5, 'That in every thing ye are enriched by him, in all utterance, and in all knowledge;'),
            plain(8, 'Who shall also confirm you unto the end, that ye may be blameless in the day of our Lord Jesus Christ.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor1-1-apostle',
          html:
            'Paul begins as he always does—by grounding his authority not in his own merit but in the will of God. He is an apostle &quot;through the will of God,&quot; a messenger sent by Christ to proclaim the gospel. The church at Corinth is &quot;sanctified in Christ Jesus&quot;—set apart by His blood, made holy not by their own achievement but by His grace.',
        },
        {
          kind: 'greek',
          id: 'cor1-1-charisma',
          title: 'Charisma — Grace Gift',
          script: 'χάρισμα',
          translit: '<strong>Charisma</strong> · grace gift; spiritual gift given freely',
          description:
            'The Corinthians have been enriched with charisma—gifts of grace distributed freely by God. These gifts (prophecy, healing, wisdom, knowledge, tongues) are given not to elevate the recipient but to build up the body. The Corinthians&apos; error is to glorify the gift and the gifted one, forgetting that the Giver is Christ.',
        },
        {
          kind: 'commentary',
          id: 'cor1-1-enriched',
          html:
            'The Corinthians have been &quot;enriched by him, in all utterance, and in all knowledge.&quot; They are not lacking in gifts. They speak well. They understand much. Yet their abundance of gifts has become their downfall. They have begun to measure the gospel by their gifts rather than by Christ.',
        },
        {
          kind: 'christ',
          id: 'cor1-1-christ-confirm',
          title: 'Christ Connection — Our Confirmation',
          html:
            'Christ will &quot;confirm you unto the end, that ye may be blameless.&quot; The security of the believer does not rest in personal achievement or eloquence. It rests in Christ&apos;s faithfulness to complete the work He has begun. He is our confirmation, our guarantee.',
        },
        {
          kind: 'carry',
          html:
            'We are enriched with gifts—of intellect, skill, influence, perhaps eloquence. These are good gifts from God. But Paul warns: do not let your gifts become your focus. Do not admire the gifted one and forget the Giver. Let every gift be used to point others toward Christ.',
        },
        {
          kind: 'reflection',
          id: 'cor1-1-confirm',
          prompt: 'What gifts have you been given? How might you be tempted to rest in those gifts rather than in Christ&apos;s confirmation of you?',
        },
      ],
    },

    {
      ref: '1 Corinthians 1:18–31',
      title: 'The Wisdom of the Cross',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(18, 'For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.'),
            plain(21, 'For after that in the wisdom of God the world by wisdom knew not God, it pleased God by the foolishness of preaching to save them that believe.'),
            plain(22, 'For the Jews require a sign, and the Greeks seek after wisdom:'),
            plain(23, 'But we preach Christ crucified, unto the Jews a stumblingblock, and unto the Greeks foolishness;'),
            plain(24, 'But unto them which are called, both Jews and Greeks, Christ the power of God, and the wisdom of God.'),
            plain(30, 'But of him are ye in Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor1-1-cross',
          html:
            'The cross appears to the world as defeat—the failure of a failed messiah. The Greeks value philosophy, logical argument, eloquence. The Jews seek a king who will restore the kingdom. Neither can see in the crucified Jesus the power or wisdom they desire. Yet Paul insists: the cross is God&apos;s true power and wisdom. It conquers sin and death through apparent weakness.',
        },
        {
          kind: 'greek',
          id: 'cor1-1-stauros',
          title: 'Stauros — Cross',
          script: 'σταυρός',
          translit: '<strong>Stauros</strong> · cross; instrument of shame and death',
          description:
            'The stauros was Rome&apos;s instrument of ultimate shame and punishment. To say that God&apos;s salvation comes through the cross was to Paul&apos;s listeners not profound but absurd. How could God work through such degradation? Yet Paul sees in the cross not defeat but victory—the ultimate proof that God&apos;s power operates beyond human expectation.',
        },
        {
          kind: 'commentary',
          id: 'cor1-1-foolishness',
          html:
            'Paul does not apologize for the apparent foolishness of the gospel. He embraces it. The world&apos;s wisdom cannot grasp that God would enter human flesh, suffer, die. The world&apos;s wisdom counts this absurd. Yet in this very &quot;foolishness,&quot; God has chosen to save those who believe. The preaching itself—the simple proclamation—is the instrument through which God works.',
        },
        {
          kind: 'christ',
          id: 'cor1-1-christ-wisdom',
          title: 'Christ Connection — The True Wisdom',
          html:
            'Christ is &quot;made unto us wisdom, and righteousness, and sanctification, and redemption.&quot; He is not merely a model of wisdom. He is wisdom incarnate. He does not simply teach righteousness. He is our righteousness, because His life and death satisfy the demands of a holy God. In Him, all we need is present.',
        },
        {
          kind: 'carry',
          html:
            'The Corinthians wanted their faith to look wise by the world&apos;s standards. They wanted preachers with eloquence and status. Paul tells them: stop. The gospel will never look wise to the world. It is foolish to them. But to those of us who are saved, it is the power of God. Trust not in the wisdom of the world. Trust in Christ.',
        },
        {
          kind: 'reflection',
          id: 'cor1-1-wisdom',
          prompt: 'Where are you tempted to make the gospel look &quot;wise&quot; or acceptable to the world? Where can you instead simply declare Christ crucified?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But unto them which are called, both Jews and Greeks, Christ the power of God, and the wisdom of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 1 · Study Guide',
  },

  hasHebrew: false,
};
