import { useState } from "react";
import { useNavigate } from "react-router-dom";

const memories = [
  {
    img: "../../public/assets/first-meet.png",
    text: "The first time I saw you, my heart skipped a beat 💓",
    story: `It was orientation day at my college for CMA & ACCA.
I was sitting quietly, listening, trying to absorb everything about this new beginning.

Then you walked in calm, confident, and composed.

I didn’t expect that moment to affect me the way it did.
I found myself looking at you more than I should have, my heart feeling strangely restless.

Inside, I felt shy and blushy, confused by emotions I wasn’t prepared for.
And then I noticed you glanced at me too.

Just a normal glance, maybe…
but my heart reacted differently.

I quickly looked away, feeling shy, my heart racing.
There was no conversation, no intention just a soft, unspoken feeling.

That day, without meaning to, I developed a small crush on you, Sufaid sir.
Not something loud or wrong just a gentle feeling, kept safely in my heart.

An innocent moment from orientation day,
now a memory I’ll always remember with a smile 🤍`,
  },
  {
    img: "../../src/assets/first-meet1.png",
    text: "I was pretending to be calm, but inside I was so nervous 😳",
    story: `After the class ended, my heart was still restless.
Almost without thinking, I walked quickly toward the balcony, hoping—just hoping—to catch another glimpse of you.

You were there.

I stood a little away, pretending to be casual, while my eyes quietly searched for you. I wished you would look my way… just once. But you didn’t. Your attention was elsewhere, lost in your own world.

Still, I watched you.

There was something comforting about simply seeing you—from a distance, without words. I smiled to myself, a soft, secret smile no one else could see. Even without a glance from you, my heart felt strangely full.

Sometimes, feelings don’t need to be noticed to be real.
That quiet moment on the balcony became another gentle memory I kept just for myself 🤍`,
  },
  {
    img: "../../src/assets/Screenshot 2026-01-08 105158.png",
    text: "Your smile made everything around me feel lighter 💕",
    story: `When I reached home, my mind was still stuck at college… stuck on you.
I tried to distract myself, but my heart had other plans.

Without even realizing it, I started searching for your profile—scrolling slowly, carefully, feeling shy even though I was alone. Every picture, every detail made my cheeks warm, and I couldn’t stop smiling at my phone.

Then I saw it.

A reel of you on the IAM Institution page.

My heart skipped again. I watched it once… then again… and again. I lost count of how many times I replayed it, just to see you smile, just to notice the little details I missed before.

With every replay, my crush grew deeper.
I felt blushy, happy, and slightly embarrassed at myself—but I didn’t want to stop. That reel became my favorite moment of the day, and you… became the quiet thought I carried to bed.

That night, I realized my crush wasn’t just a moment anymore—it had turned into something sweeter, something real 🤍`,
  },
  {
    img: "../../src/assets/Screenshot 2026-01-08 110401.png",
    text: "That moment felt simple, yet so magical ✨",
    story: `That night, my heart gathered a little courage.
I opened the chat, typed your name, and slowly wrote a message. My fingers hovered over the screen, my heart racing faster with every word.

But then fear crept in.

What if he thinks I’m flirting?
What if this feels wrong?

Before I could overthink more, I deleted the message and closed the app, my heart pounding.

The next night… I did the same thing again.
I typed. I paused. I imagined you seeing it. And once again, nervousness won. I deleted the message before sending it.

I smiled at myself, half embarrassed, half relieved.
Maybe some feelings are meant to stay unspoken. Maybe it was better this way—quiet, respectful, and safe in my heart.

So I decided not to message you.
Not because I didn’t care… but because I cared too much 🤍`,
  },
  {
    img: "../../src/assets/Screenshot 2026-01-08 110246.png",
    text: "I remember thinking… I hope this moment never ends ❤️",
    story: `I still feel nervous…
and I stay quiet.

Every time your name crosses my mind, my heart beats a little faster. I want to say something, yet silence feels safer. So I keep my feelings to myself—hidden behind calm smiles and quiet moments.

Sometimes, being quiet isn’t weakness.
It’s just a heart trying to protect something gentle.

And so, I remain nervous…
still quiet…
but feeling everything 🤍`,
  },
  {
    img: "../../src/assets/Screenshot 2026-01-08 105326.png",
    text: "I remember thinking… I hope this moment never ends ❤️",
    story: `That night, I lay in bed, my thoughts drifting back to you.
I kept replaying the way you looked at me—the calm eyes, the quiet presence, that brief moment that stayed in my heart longer than it should have.

A small smile found its way to my lips as I held onto that memory. My heart felt warm, my thoughts soft and slow. Wrapped in those feelings, I finally closed my eyes.

And I fell asleep…
thinking of the way you looked at me 🤍✨`,
  },
  {
    img: "../../src/assets/Screenshot 2026-01-08 111139.png",
    text: "Every word you spoke made me feel more connected to you 💖",
    story: `The next night, my heart felt heavier than before.
I kept thinking… What if I stay quiet forever?
What if someone else notices him the way I do?
He was kind, calm, and so handsome—of course other girls might be drawn to him too.

That thought made my chest tighten.

I felt nervous… scared… but also brave in a small way.
For the first time, I thought about confessing my feelings. Not loudly, not face to face—but softly, safely.

Instagram felt like the only place where my heart could speak without trembling too much.

I stared at the screen for a long time, my fingers shaking, my mind full of questions. What will happen? What if this changes everything?
Still, somewhere deep inside, I felt that my feelings deserved honesty.

That night, courage and fear sat together in my heart…
and I gathered the strength to let love speak, even if it was through a screen 🤍✨`,
  },
  {
    img: "../../src/assets/Screenshot 2026-01-08 110351.png",
    text: "I didn’t know it then, but this was the start of us 💫",
    story: `When I finally gathered the courage and confessed, his reply came softly—but it changed everything.

He told me the truth.
He said he was already in love with another girl.

My heart sank.
Sadness quietly settled in, the kind that doesn’t cry loudly but hurts deeply. Still, I listened. He explained that there was no future for them because of caste differences, and that one day, they would have to break apart.

Hearing that made me feel strangely torn.

Sometimes, I feel deeply sad thinking about that kind of breakup—loving someone but knowing the end is already written. It hurts to see love stopped by things beyond the heart’s control.

But at the same time…
when I think about my situation, I feel a different emotion.

I didn’t lose something that was meant to be mine.
I was protected from deeper pain.

So I whisper Alhamdulillah.

Not because it didn’t hurt—
but because Allah saved me from loving someone who was never meant for me 🤍

And slowly, I learned this truth:
Not every love story is meant to be completed.
Some come only to teach us strength, patience, and faith.`,
  },
  {
    img: "../../src/assets/Screenshot 2026-01-08 111731.png",
    text: "That day gave me a memory I’ll carry for a lifetime 💞",
    story: `After that, he slowly shifted his thoughts back to the beautiful girl he loved.
His heart belonged there, and he chose to stay true to it.

With me, he kept things simple and kind.
What began as nervous feelings slowly settled into a good, respectful friendship. Our conversations became light—about college, classes, and small everyday things. No pressure, no expectations.

And somehow, that felt okay.

I learned to smile without hoping,
to talk without imagining,
to care without wanting more.

Sometimes, love doesn’t turn into a story…
it turns into understanding.

And sometimes, peace comes not from getting what we want,
but from accepting what is meant to be 🤍`,
  },
{
    img: "../../src/assets/Screenshot 2026-01-08 113634.png",
    text: "That day gave me a memory I’ll carry for a lifetime 💞",
    story:`Time passed quietly…
and then one day, everything changed.

After their breakup, he finally spoke from his heart. He confessed that what he felt for me was real—feelings he had kept hidden for a long time. Hearing those words felt unreal, like something my heart had once dreamed of but never truly expected to hear.

And then came 08-02-2024.

That day didn’t begin beautifully. We had a small fight about something else, and it left me feeling sad and emotionally drained. I thought the distance between us was growing, and that hurt more than I admitted.

But that night changed everything.

Around 11:30 PM on 08-02-2024, when my heart was still heavy, he opened up. In that quiet moment, he confessed his love and proposed to me.

My heart stood still.

All the nervousness, the silence, the patience, and the tears I never showed came rushing back at once. I felt shocked, emotional, and overwhelmed—in the most beautiful way. The same day that began with sadness ended with words that changed my life.

Life truly has its own timing.
What once felt impossible found its moment later.

That day taught me something powerful:
what is meant for you will always find you—
even if it takes a long, confusing path to arrive 🤍`,
},


{
    img: "../../src/assets/Screenshot 2026-01-08 113645.png",
    text: "That day gave me a memory I’ll carry for a lifetime 💞",
    story:`Time passed quietly…
and then one day, everything changed.

After their breakup, he finally spoke from his heart. He confessed that what he felt for me was real—feelings he had kept hidden for a long time. Hearing those words felt unreal, like something my heart had once dreamed of but never truly expected to hear.

And then came 08-02-2024.

That day didn’t begin beautifully. We had a small fight about something else, and it left me feeling sad and emotionally drained. I thought the distance between us was growing, and that hurt more than I admitted.

But that night changed everything.

Around 11:30 PM on 08-02-2024, when my heart was still heavy, he opened up. In that quiet moment, he confessed his love and proposed to me.

My heart stood still.

All the nervousness, the silence, the patience, and the tears I never showed came rushing back at once. I felt shocked, emotional, and overwhelmed—in the most beautiful way. The same day that began with sadness ended with words that changed my life.

Life truly has its own timing.
What once felt impossible found its moment later.

That day taught me something powerful:
what is meant for you will always find you—
even if it takes a long, confusing path to arrive 🤍`,
},

{
    img: "../../src/assets/Screenshot 2026-01-08 112353.png",
    text: "That day gave me a memory I’ll carry for a lifetime 💞",
    story:`We planned to meet at the theatre.
I went with my friend Dinu, and he came with Afsal. We were all going to watch Premalu together.

The moment I saw him there, my heart started racing again.
I felt shy… nervous… and happy all at once. After all, he was my crush—and now, the person who had confessed his love to me. I avoided eye contact at first, smiling softly, trying to calm my heart.

We went inside and started watching the movie.
At first, I focused on the screen, but my thoughts kept drifting back to him. The movie played, scenes passed, but my heart was more aware of his presence beside me.

Then, slowly, without any words…
we held hands.

That simple touch felt warmer than any scene on the screen. I forgot about the movie for a moment. All the shyness, nervousness, and happiness came together in that quiet gesture.

That day, the theatre became more than just a place to watch a movie—
it became a memory I’ll always hold close to my heart 🤍✨`,
},
{
    img: "../../src/assets/Screenshot 2026-01-08 112619.png",
    text: "That day gave me a memory I’ll carry for a lifetime 💞",
    story:`As the movie continued, my heart was already full of emotions.
Then, in that quiet moment, while the screen glowed in front of us, he leaned closer.

It happened gently—
a soft kiss, filled with warmth and reassurance. My heart skipped all over again. I felt shy, surprised, and happy all at once, my cheeks warming as I smiled quietly.

A little later, he took my hand again.
This time, he placed something in my palm.

A ring.

I looked at it in disbelief, my eyes shining, my heart overflowing with emotion. It wasn’t about how big or small it was—it was about what it meant. A promise. A feeling made real.

At that moment, the movie faded into the background.
All I could feel was his presence, his care, and the love that had slowly found its way to me.

That day gave me more than a memory—
it gave me a moment my heart will never forget 🤍✨`,
},

{
    img: "../../src/assets/Screenshot 2026-01-08 112750.png",
    text: "That day gave me a memory I’ll carry for a lifetime 💞",
    story:`We held each other’s hands tightly

In that quiet moment, we made a promise

A promise to stay together

A promise of forever 🤍`,
},


{
    img: "../../src/assets/Screenshot 2026-01-08 142934.png",
    text: "That day gave me a memory I’ll carry for a lifetime 💞",
    story:`We met somewhere special and shared our happy moments🫂🫂`,
},
{
    img: "../../src/assets/Screenshot 2026-01-08 142912.png",
    text: "That day gave me a memory I’ll carry for a lifetime 💞",
    story:`We had ice cream together 🍦`,
},
{
    img: "../../src/assets/Screenshot 2026-01-08 143139.png",
    text: "That day gave me a memory I’ll carry for a lifetime 💞",
    story:`We walked together for miles, talking and smiling

We stood side by side and watched the sea in silence 🌊`,
},
 

  {
    img: "../../src/assets/Screenshot 2026-01-08 144045.png",
    text: `One day, he left for Dubai.

That day, my house was full—
all my cousins were around, laughter everywhere, voices filling every corner. Yet inside me, there was only silence.

Even in a crowded room, I felt alone.

His absence felt heavier than I expected.
The distance between us suddenly became real, and my heart couldn’t stop missing him. I smiled for others, but inside, tears kept falling quietly.

That night, I cried—not because I was weak,
but because love had grown deep.

Distance taught me something beautiful and painful at the same time:
when someone becomes your comfort,
their absence is felt even in a room full of people.

And still, I held onto hope—
because true love doesn’t fade with distance,
it only waits 🤍✨`,
  },
  {
    img: "../../src/assets/Screenshot 2026-01-08 144150.png",
    text: `As the days of long distance passed, things slowly became harder.
We couldn’t talk every day like before. Small misunderstandings turned into fights, not because love was missing—but because we missed each other too much.

Sometimes, he couldn’t speak to me at all because of his father.
Those moments hurt the most. I waited for his voice, for a message, for anything—while he struggled on his side too.

We both cried… often.
Not out of anger, not out of doubt—but because the distance was heavy and the longing was deep.

We missed each other in silence.
Two hearts loving from far away, hurting the same pain, holding on the same hope.

That phase taught us something real:
love isn’t always about happy calls and constant talks—
sometimes, it’s about patience, tears, and still choosing each other 🤍`,
  },
  {
    img: "../../src/assets/Screenshot 2026-01-08 144524.png",
    text: `Later, I made a brave decision.
I went to Kochi to build my career and stand strong on my own feet.

At the same time, he was also focused on shaping his future.
Both of us chose growth—even when it was difficult, even when distance still existed between us.

We learned to balance love and responsibility.
To dream separately, yet believe in us together.

That phase taught us maturity:
that love doesn’t stop you from growing—
it grows with you.

Two hearts, chasing two careers,
still holding on to one promise 🤍✨`,
  },
  {
    img: "../../src/assets/Screenshot 2026-01-08 144919.png",
    text: `As we both became busy building our careers, time slowly slipped away from us.
We barely got time to talk, to share, or to understand each other like before.

Little things started turning into big fights.
Not because love was gone—but because stress, distance, and tired hearts took over.

Sometimes we fought strongly.
Words hurt. Silence hurt even more.

Yet deep inside, we both knew the truth:
we weren’t fighting each other—we were fighting the situation.

Love was still there,
just tired, waiting to be held gently again 🤍`,
  },

 

     {
    img: "../../src/assets/Screenshot 2026-01-08 113004.png",
    text: `After many fights and misunderstandings, we finally chose love over ego.
We understood that despite everything, we still loved each other deeply.

We accepted the long distance.
We stopped asking for constant time and attention and chose understanding instead. We didn’t need control—we needed comfort. We didn’t need perfection—we needed a safe place in each other’s hearts.

We became each other’s shelter.
A place to rest, to heal, to feel understood.

Now, our relationship is healthier and more real.
Built on trust, patience, and quiet love.

Not loud.
Not rushed.
Just strong, calm, and true 🤍`,
  },
  {
    img: "../../src/assets/Screenshot 2026-01-08 112957.png",
  
  },

];

export default function FirstMeet() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

 const nextMemory = () => {
    if (index < memories.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevMemory = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 flex items-center justify-center px-4">
      <div className="max-w-3xl p-6 text-center space-y-6">
        <h1 className="text-3xl font-bold text-rose-600">
          Our First Meet 💞
        </h1>

        <img
          src={memories[index].img}
          alt="First meet memory"
          className="mx-auto transition duration-700"
        />

        <p className="text-[15px] leading-tight text-black text-left whitespace-pre-line font-light">
          {memories[index].story || memories[index].text}
        </p>

        {/* BUTTONS */}
        <div className="flex justify-between items-center mt-6">
          {/* PREVIOUS */}
          <button
            onClick={prevMemory}
            disabled={index === 0}
            className={`px-6 py-2 rounded-full shadow-md transition
              ${
                index === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 hover:scale-105"
              }`}
          >
            ⬅️ Previous
          </button>

          {/* NEXT */}
          <button
            onClick={
              index === memories.length - 1
                ? () => navigate("/happy-birthday")
                : nextMemory
            }
            className={`px-6 py-2 rounded-full shadow-md transition
              ${
                index === memories.length - 1
                  ? "bg-yellow-400 text-rose-700 hover:scale-110 font-semibold"
                  : "bg-rose-500 text-white hover:scale-105"
              }`}
          >
            {index === memories.length - 1
              ? "Happy Birthday 🎂❤️"
              : "Next ➡️"}
          </button>
        </div>
      </div>
    </div>
  );
}

