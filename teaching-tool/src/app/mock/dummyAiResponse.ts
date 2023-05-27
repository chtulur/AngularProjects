const dummyText = `
1. Happiness - Hurray!
2. Anxiety - Oh no!
3. Fear - Eek!
4. Surprise - Wow!
5. Disgust - Yuck!
6. Shame - Oops!
7. Amazement - Gosh!
8. Pride - All right!
9. Sadness - Aw...
10. Relief - Phew!
11. Annoyance - Grrr!
12. Excitement - Yippee!
13. Contentment - Ahhh!
14. Embarrassment - Um...
15. Anger - Darn it!`;

export default dummyText;

/**
 * TODO:
 * Ideas:
 *
 * > a page where a student can have a conversation with the Ai about a given topic.
 * > essay practice tool. The Ai could evaluate and even score you. Correct grammar, the way the essay was
 *  written etc
 *
 *
 */

// Exercise 1:
// Description for A1 level task:

// Follow the format. Let me explain: <sentence> -> Provide a sentence with a gap. Don't put the prompt beside the gap in parentheses. A sentence should look like this:
// 1. I _____ apples. <> eat

// Exercise 2:

// Create present simple sentences and cut them in half. The student should match them.
// <first part of the sentence> <> <second part of the sentence.>

/**
 * Hi I want to generate and English exercise with the following parameters:
 * Level: B2,
 * Grammar: Interjections
 * Description: Create interjection and emotion pairs.
 * Format: 1. <emotion> <> <interjection>
 * number of pairs: 15
 */

/**
 * Inversion:
 *  First we learned about it regarding questions. Simple enough, BUT!
 *  It allows great flexibility in sentence construction and can help put and shift emphasis or
 *  convey nuances in meaning. Normally it is used for questions and negation or it's compulsory part of
 *  conditional sentences.
 *
 *  It can add stylistic variety to writing and speech, making it more interesting and engaging.
 *
 *  subject-verb: In the garden sat a little girl  -> A little girl sat in the garden.
 *  Come sunrise, and the party was over -> The party was over when sunrise came
 *
 *  inversion after never:
 *    Never have I seen such a beautiful sunset. -> I have never seen...
 *
 *  inversion after rarely:
 *    Rarely does he get up before noon -> He rarely gets up before noon.
 *
 * Auxiliary-verb inversions:
 *  "Had I known you were coming, I would have baked a cake." (SVO: "I would have baked a cake if I had known
 *  you were coming.") - Conditional sentence with inversion of "had"
 *
 *  "Never before has she seen such a beautiful sunset." (SVO: "She has never seen such a beautiful sunset
 *  before.
 *  ") - Inversion of auxiliary verb "has"
 *
 *  "Not only does he play the piano, but he also sings." (SVO: "He not only plays the piano, but he also
 *  sings.
 *  ") - Inversion of auxiliary verb "does"
 *
 *  "Little did she know that her life was about to change forever." (SVO: "She knew little that her life was
 *  about to change forever.") - Inversion of auxiliary verb "did"
 *
 *  "Only after they had left did he realize his mistake." (SVO: "He realized his mistake only after they had
 *  left.") - Inversion of auxiliary verb "had"
 *
 * Normal question:
 *  What are you doing? -> You are doing what?
 *
 *
 * All types:
 * Subject-verb inversion in questions: "What are you doing?" (SVO: "You are doing what?")
 *
 * Verb-subject inversion for emphasis: "Down the street walked a man with a cane." (SVO: "A man with a cane
 * walked down the street.")
 *
 * Inversion after adverbs of place or direction: "Here comes the bus." (SVO: "The bus is coming here.")
 *
 * Inversion after negative adverbials: "Never have I seen such a beautiful sunset." (SVO: "I have never seen
 * such a beautiful sunset.")
 *
 * Auxiliary verb inversion in conditional sentences: "Had I known, I would have come earlier." (SVO: "I
 * ould have come earlier if I had known.")
 *
 * Inversion in questions with negative adverbials: "Under no circumstances should you give up." (SVO: "You
 * hould not give up under any circumstances.")
 *
 * Inversion with "so" in clauses of result: "So great was her joy that she could hardly contain herself."
 * (SVO: "Her joy was so great that she could hardly contain herself.")
 *
 *
 * Real world examples:
 * "Little did I know how much I would love you and how much you would come to mean to me." - Unknown
 * (frequently used as a wedding vow)
 * "Not until we are lost do we begin to understand ourselves." - Henry David Thoreau
 *
 *
 * "In the depths of winter, I finally learned that within me there lay an invincible summer." - Albert Camus
 *
 * "In war, resolution; in defeat, defiance; in victory, magnanimity." - Winston Churchill
 * magnanimity = nagylelkűség - generosity
 *
 * Shakespeare
 * Shall I compare thee to a summer's day?
 * Thou art more lovely and more temperate:
 * Rough winds do shake the darling buds of May,
 * And summer's lease hath all too short a date:
 * Sometime too hot the eye of heaven shines,
 * And often is his gold complexion dimm'd;
 * And every fair from fair sometime declines,
 * By chance or nature's changing course untrimm'd;
 * But thy eternal summer shall not fade
 * Nor lose possession of that fair thou owest;
 * Nor shall Death brag thou wander'st in his shade,
 * When in eternal lines to time thou growest:
 * So long as men can breathe or eyes can see, //this last part is inversion
 * So long lives this, and this gives life to thee.
 *
 *
 * "In the land of the blind, the one-eyed man is king." - Desiderius Erasmus
 *
 * "In the middle of every difficulty lies opportunity." - Albert Einstein
 *
 * IMPORTANT!!!!
 * "Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too
 *  eager to deal out death in judgement." - J.R.R. Tolkien
 *
 *
 * "No man is an island entire of itself; every man is a piece of the continent, a part of the main." - John
 * Donne
 *
 * "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars." -
 *  Kahlil Gibran
 *
 * "The only way to do great work is to love what you do." - Steve Jobs
 *
 * "To be or not to be, that is the question." - William Shakespeare
 *
 * "It matters not how straight the gate,
 *  how charged with punishments the scroll,
 *  I am the master of my fate,
 *  I am the captain of my soul." - Ernest Henley (Invictus)
 *
 *
 * "Ask not what your country can do for you, ask what you can do for your country." - John F. Kennedy
 *  Rhetorical devices used here:
 *    >Anthithesis: juxtaposes contrasting ideas "what your country can do for you" and "what you can do for
 *    your country."
 *    >Repetition
 *    >Parallellism: similar grammatical structure in the two clauses to create a rhythm and balance.
 *    >Rhetorical question (even though it is not phrased as a question it asks the listeners to consider
 *    their role in society)
 *
 *
 * LINKING WORDS:
 *  types
 *    >Addition
 *    >Contrast
 *    >Example
 *    >Result
 *    >Time
 *
 * Examples:
 * Addition: "Furthermore, the study found that the effects of the treatment were long-lasting."
 *
 * Contrast: "However, some experts argue that the results may be biased due to the small sample size."
 *
 * Example: "For instance, a recent survey showed that over 60% of people prefer to shop online."
 *
 * Result: "As a result, the company decided to invest more in marketing to increase its brand awareness."
 *
 * Time: "Firstly, we need to review the literature on this topic. Secondly, we will collect data through
 * urveys and interviews. Finally, we will analyze the results and draw conclusions."
 *
 * Addition:
Additionally
Moreover
Furthermore
In addition to
As well as
And
Too
Also
Besides
Coupled with
In conjunction with
Not to mention
Alongside
Including
Likewise
Along with
Equally important
Furthermore, it should be noted that
Another key point to consider is
Adding to that

Contrast:
However
Nevertheless
On the other hand
In contrast
Although
Despite
Yet
Even though
While
But
Instead
Conversely
Rather than
On the contrary
Nonetheless
Albeit
Though
In spite of
In any case
Be that as it may

Example:
For example
Such as
Like
Including
Among others
To illustrate
Specifically
Namely
In particular
For instance
As an example
One such case
A good illustration of this is
To give an idea
To demonstrate
As evidence
As proof
To show
To explain
As a case in point

Result:
Therefore
As a result
Consequently
Thus
Hence
So
Accordingly
As a consequence
Because of this
This leads to
This results in
As a corollary
In effect
In turn
For this reason
In consequence
That being the case
Such that
From this
Which means that

Time:
Firstly
Secondly
Thirdly
Next
Then
Afterward(s)
Subsequently
Meanwhile
Later on
In the meantime
Simultaneously
At the same time
Beforehand
Previously
Until
Eventually
Finally
At last
In conclusion
To conclude
 *  */
