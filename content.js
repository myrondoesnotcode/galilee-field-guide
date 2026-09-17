/* ============================================================
   CONTENT — every claim traced. See CLAIMS.md for the ledger.
   Convention: {t:'wow'} = a marginal note. {t:'tradition'} = an
   honesty marker separating received tradition from documented history.
   ============================================================ */
var Q = encodeURIComponent;
var waze  = function (q) { return "https://waze.com/ul?q=" + Q(q) + "&navigate=yes"; };
var gmaps = function (q) { return "https://www.google.com/maps/search/?api=1&query=" + Q(q); };

window.CONTENT = {

/* Plain-English definitions. Tapping a term anywhere on the site opens one.
   Written for someone who did not grow up with the word. */
glossary: {
  "Tanach": "The Hebrew Bible — Torah, Prophets and Writings.",
  "Chumash": "The Five Books of Moshe, in book form.",
  "Mikraos Gedolos": "A Chumash printed with the classic commentaries laid around the text.",
  "Gemara": "The Talmud’s discussion and analysis of the Mishnah.",
  "Mishnah": "The core text of the Oral Law, written down around 200 CE.",
  "Talmud": "Mishnah plus Gemara — the central text of Jewish law and thought.",
  "Bavli": "The Babylonian Talmud.",
  "Yerushalmi": "The Jerusalem Talmud, compiled here in Eretz Yisrael.",
  "daf": "A page of Talmud. A citation like “Shabbos 33b” points to one.",
  "baraita": "A teaching from the Mishnah’s era that did not make it into the Mishnah itself.",
  "sugya": "One extended discussion in the Gemara.",
  "kal vachomer": "A standard form of Torah reasoning: if it is true in the lighter case, how much more so in the heavier one.",
  "bas kol": "A voice from Heaven.",
  "Tanna": "A sage of the Mishnah’s era, roughly the first two centuries CE.",
  "Targum": "The Aramaic translation of Tanach, read alongside the Hebrew.",
  "halacha": "Jewish law.",
  "aggadah": "The non-legal side of the Talmud — stories, ethics, history.",
  "poskim": "Rabbis who decide practical Jewish law.",
  "psak": "A ruling in Jewish law.",
  "kevarim": "Graves.",
  "kever": "A grave.",
  "tzaddik": "A righteous person — here, one of the great sages buried along this route.",
  "tziyun": "The marked structure built over a grave.",
  "matzeivah": "A gravestone.",
  "segulah": "A practice believed to bring about a spiritual benefit.",
  "shidduch": "A marriage match.",
  "yahrzeit": "The anniversary of a death, kept by the Hebrew date.",
  "hillula": "A celebration held on a tzaddik’s yahrzeit.",
  "minhag": "A custom.",
  "semichah": "Rabbinic ordination, passed hand to hand from Moshe. The chain broke in ancient times — which is what Tzfat tried to repair in 1538.",
  "kohanim": "Descendants of Aharon, who may not enter a cemetery.",
  "upsherin": "A boy’s first haircut, at three years old.",
  "mekubalim": "Kabbalists.",
  "Kabbalah": "The mystical tradition of Torah.",
  "Zohar": "The foundational work of Kabbalah.",
  "nikud": "The vowel dots written under and around Hebrew letters.",
  "te’amim": "The cantillation marks that carry the tune of the Torah reading.",
  "Masoretes": "The scholars who fixed the text, vowels and notes of Tanach.",
  "zmanim": "The halachic times of the day, which shift with the sun through the year.",
  "chatzot": "Halachic midday — the midpoint between sunrise and sunset, not 12:00 on the clock.",
  "mincha gedola": "The earliest time Mincha may be davened — about half an hour after chatzot.",
  "Mincha": "The afternoon prayer.",
  "daven": "To pray.",
  "hechsher": "Kosher certification.",
  "Badatz": "A strict kosher certifying body.",
  "Kotel": "The Western Wall in Jerusalem.",
  "Shabbos": "Shabbat — the Sabbath.",
  "Shechinah": "The Divine Presence.",
  "Eretz Yisrael": "The Land of Israel.",
  "Aseres Yemei Teshuva": "The Ten Days of Repentance, from Rosh Hashanah through Yom Kippur.",
  "teshuva": "Return — repentance.",
  "beis midrash": "A study hall.",
  "churban": "The destruction of the Beis HaMikdash.",
  "Beis HaMikdash": "The Temple in Jerusalem.",
  "Sanhedrin": "The supreme Jewish court of seventy-one sages.",
  "tumah": "Ritual impurity.",
  "Shulchan Aruch": "The authoritative code of Jewish law, written in Tzfat’s golden age.",
  "Mishnah Berurah": "A standard modern commentary on everyday Jewish law.",
  "Rema": "Rabbi Moshe Isserles, whose glosses give the Ashkenazi practice in the Shulchan Aruch.",
  "tzedakah": "Charity.",
  "Tehillim": "Psalms.",
  "hekdesh": "A charitable trust that holds property for a holy purpose.",
  "Lag BaOmer": "The 33rd day of the Omer — traditionally Rashbi’s yahrzeit, marked with bonfires.",
  "Pesach Sheni": "The “second Pesach,” a month after Pesach, on 14 Iyar.",
  "tichel": "A headscarf worn by married women."
},

day: {
  greg: "Thursday 17 September 2026",
  gregShort: "Thu 17 Sep 2026",
  heb: "ו׳ בְּתִשְׁרֵי תשפ״ז",
  hebEn: "6 Tishrei 5787",
  departMins: "08:30",
  homeMins: "19:45",
  departFrom: "Chabad on the Coast · Hebron St 16, Tel Aviv"
},

zmanim: [
  { l: "Alos hashachar", t: "05:09" },
  { l: "Sunrise · netz", t: "06:23" },
  { l: "Sof zman krias shema", t: "09:28" },
  { l: "Chatzot", t: "12:32" },
  { l: "Mincha gedola — earliest Mincha", t: "13:03", hl: true },
  { l: "Mincha ketana", t: "16:08" },
  { l: "Plag hamincha", t: "17:25" },
  { l: "Sunset · shkia", t: "18:42" },
  { l: "Tzeis hakochavim", t: "19:19" }
],

alerts: [
  { pin: true, label: "Mincha can't be davened at 12:15",
    body: [
      "The itinerary schedules Mincha at Meron between 12:15 and 13:00. On this date in the Upper Galilee, <strong>chatzot is 12:32 and mincha gedola — the earliest time Mincha may be said — is 13:03.</strong> The whole Meron slot closes before Mincha becomes possible.",
      "Two clean fixes: hold at Meron until 13:03 and daven there, pushing lunch back about twenty minutes; or daven Mincha in Tiberias in the afternoon, where you're on site from 16:15 and mincha ketana is 16:08. Worth deciding before the bus leaves rather than on the mountain."
    ] },
  { pin: true, label: "You're traveling in the Aseres Yemei Teshuva",
    body: [
      "Today is 6 Tishrei. Yom Kippur begins Sunday night. The Rambam writes that although teshuva is always good, in these ten days <span class='hebrew'>הִיא יָפָה בְּיוֹתֵר וּמִתְקַבֶּלֶת הִיא מִיָּד</span> — it is more beautiful, and accepted immediately.",
      "Remember <em>HaMelech HaKadosh</em> in every Shemoneh Esrei, and Avinu Malkeinu. If you said <em>HaKel HaKadosh</em> and caught it immediately, you need not repeat."
    ] },
  { label: "A 1,400-meter drop, and seven degrees hotter",
    body: [
      "Meron stands at 1,204 m — the highest peak in Israel inside the Green Line. Tiberias sits about 200 m <em>below</em> sea level, the lowest city in the country. You lose roughly 1,400 meters of altitude between lunch and the afternoon.",
      "Tzfat averages 28.5 °C in September; Tiberias averages 35.9 °C. The afternoon is the hot part of the day, and Rabbi Akiva's kever is the uphill one. Water and hats."
    ] },
  { label: "Check the lunch address before you drive to it",
    body: [
      "The itinerary gives Mandis at Jerusalem St 33. The Tzfat restaurant registry lists it at <strong>Jerusalem 29</strong>, Old City, behind Bank Leumi; a separate listing gives 35. The operator's own site publishes no address at all.",
      "The hechsher is confirmed — <strong>Badatz Eidah HaChareidis, meat</strong> — by two independent directories. It's the street number and the hours that are unconfirmed. Call ahead."
    ] }
],

elevation: {
  note: "Labelled figures are sourced. Amuka sits in the Galilee hills between Tel Aviv and Meron; we found no elevation figure for it, so it carries none.",
  points: [
    { at: "Tel Aviv",  m: 0,     label: "Sea level", sourced: 1 },
    { at: "Amuka",     m: 720,   label: "",          sourced: 0 },
    { at: "Meron",     m: 1204,  label: "1,204 m",   sourced: 1 },
    { at: "Tzfat",     m: 937,   label: "937 m",     sourced: 1 },
    { at: "Teveria",   m: -200,  label: "\u2212200 m", sourced: 1 }
  ]
},

drives: ["15 min", "15 min · then lunch in Tzfat", "45 min · down to the lake"],

/* ============================================================ */
stops: [

/* ---------- 1. AMUKA ---------- */
{
  id: "amuka", time: "11:00", end: "12:00",
  name: "Amuka", he: "עֲמוּקָה", title: "Amuka", accent: "var(--amuka)",
  century: "1st century",
  who: "Rabbi Yonatan ben Uziel — the greatest of Hillel's eighty students",
  chips: ["Yaar Biriya", "Daylight only", "State-run"],
  waze: waze("קבר יונתן בן עוזיאל עמוקה"), gmaps: gmaps("קבר יונתן בן עוזיאל עמוקה"),
  brief: [
    "Under this stone, by a tradition first written down in 1210, lies <strong>Rabbi Yonatan ben Uziel</strong> — the man the Talmud calls the greatest of Hillel the Elder's eighty students.",
    "Hold that number. Hillel had eighty students, and the Talmud names exactly <em>two</em>: the greatest, who is here — and the least, who was Rabban Yochanan ben Zakkai, the man who walked out of besieged Jerusalem and saved Judaism after the Temple burned. The other seventy-eight are anonymous forever.",
    "Most of what you've heard about this place needs an asterisk. Here's which parts."
  ],
  sections: [
    { h: "The greatest of the eighty", b: [
      { t: "p", x: "The same baraita appears twice in the Talmud, word for word, in <em>Sukkah</em> and in <em>Bava Batra</em>. It sorts Hillel's students into three tiers, and the measuring stick it uses isn't modest." },
      { t: "quote",
        he: "שְׁמוֹנִים תַּלְמִידִים הָיוּ לוֹ לְהִלֵּל הַזָּקֵן… גָּדוֹל שֶׁבְּכוּלָּן — יוֹנָתָן בֶּן עוּזִּיאֵל, קָטָן שֶׁבְּכוּלָּן — רַבָּן יוֹחָנָן בֶּן זַכַּאי",
        en: "Hillel the Elder had eighty students… the greatest of them all — Yonatan ben Uziel; the least of them all — Rabban Yochanan ben Zakkai.",
        cite: "Sukkah 28a · Bava Batra 134a", url: "https://www.sefaria.org/Sukkah.28a" },
      { t: "p", x: "Thirty of the eighty were worthy that the Shechinah rest upon them <em>as it rested on Moshe Rabbeinu</em>. Thirty were worthy that the sun stand still for them <em>as it stood for Yehoshua bin Nun</em>. Twenty were in between. Rabban Yochanan ben Zakkai was in the bottom tier." },
      { t: "wow", label: "That was the floor, not the ceiling", x: [
        "So the Gemara lists what the <em>least</em> of them knew. Tanach, Mishnah, Gemara, halachah, aggadah, the astronomical cycles, gematrios. And then: <span class='hebrew'>שִׂיחַת שֵׁדִים, וְשִׂיחַת דְּקָלִים, וְשִׂיחַת מַלְאֲכֵי הַשָּׁרֵת</span> — the speech of demons, the speech of palm trees, and the speech of the ministering angels.",
        "Then it concludes: <em>and if this is the smallest of them, the greatest of them — how much more so.</em> Everything on that list is the floor. The man in front of you stood at the top of it."
      ] }
    ]},
    { h: "The birds that burned", b: [
      { t: "quote",
        he: "אָמְרוּ עָלָיו עַל יוֹנָתָן בֶּן עוּזִּיאֵל, בְּשָׁעָה שֶׁיּוֹשֵׁב וְעוֹסֵק בַּתּוֹרָה — כׇּל עוֹף שֶׁפּוֹרֵחַ עָלָיו מִיָּד נִשְׂרָף",
        en: "They said of Yonatan ben Uziel: when he would sit and occupy himself with Torah, any bird that flew over him was immediately burned.",
        cite: "Sukkah 28a", url: "https://www.sefaria.org/Sukkah.28a.7" },
      { t: "wow", label: "Rashi: it was never about the birds", x: [
        "Rashi on the spot explains where the fire comes from — and it isn't coming from Yonatan ben Uziel.",
        "<span class='hebrew'>נשרף — שהיו מלאכי השרת מתקבצין סביביו לשמוע דברי תורה מפיו</span> — <em>“burned: because the ministering angels would gather around him to hear words of Torah from his mouth.”</em>",
        "The heat is the angels. The bird doesn't fly over a dangerous man; it flies into a crowd of malachim who came down to listen. Read that way, the story stops being a warning and becomes a description of an audience."
      ] }
    ]},
    { h: "The day the Land shook", b: [
      { t: "p", x: "His life's work is the Targum — the Aramaic translation of the Prophets, still printed beside the text in every Mikraos Gedolos on Nevi'im. The Talmud says he didn't compose it. He received it." },
      { t: "quote",
        he: "תַּרְגּוּם שֶׁל נְבִיאִים — יוֹנָתָן בֶּן עוּזִּיאֵל אֲמָרוֹ מִפִּי חַגַּי זְכַרְיָה וּמַלְאָכִי, וְנִזְדַּעְזְעָה אֶרֶץ יִשְׂרָאֵל אַרְבַּע מֵאוֹת פַּרְסָה עַל אַרְבַּע מֵאוֹת פַּרְסָה. יָצְתָה בַּת קוֹל וְאָמְרָה: מִי הוּא זֶה שֶׁגִּילָּה סְתָרַיי לִבְנֵי אָדָם?",
        en: "The Targum of the Prophets — Yonatan ben Uziel said it from the mouths of Chaggai, Zechariah and Malachi. And the Land of Israel quaked, four hundred parsah by four hundred parsah. A heavenly voice went out and said: <em>Who is this who has revealed My secrets to mankind?</em>",
        cite: "Megillah 3a", url: "https://www.sefaria.org/Megillah.3a" },
      { t: "p", x: "He didn't hide. The Gemara says he <em>stood up on his feet</em> and answered: it is I. And it is revealed and known before You that I didn't do it for my own honor, nor for the honor of my father's house — <span class='hebrew'>אֶלָּא לִכְבוֹדְךָ עָשִׂיתִי, שֶׁלֹּא יִרְבּוּ מַחְלוֹקֶת בְּיִשְׂרָאֵל</span> — <strong>“so that disputes should not multiply in Israel.”</strong>" },
      { t: "p", x: "Rashi spells out what that means: to explain the verses that are closed. A translation is a fence against Jews reading the same prophet and coming away with two religions." },
      { t: "wow", label: "Why the Torah didn't shake", x: [
        "The Gemara asks the obvious question. Onkelos translated the entire Chumash and nothing happened. Yonatan translated the Prophets and the country moved. Why?",
        "<span class='hebrew'>דְּאוֹרָיְיתָא — מִיפָּרְשָׁא מִלְּתָא, דִּנְבִיאֵי — אִיכָּא מִילֵּי דְּמִיפָּרְשָׁן וְאִיכָּא מִילֵּי דִּמְסַתְּמָן</span> — the Torah's matters are already explicit; the Prophets contain matters that are explicit <em>and matters that are sealed</em>.",
        "The Land shakes only when something sealed is opened."
      ] },
      { t: "p", x: "He then asked to translate the Kesuvim as well, and was refused: <span class='hebrew'>דַּיֶּיךָּ</span> — <em>enough for you</em> — <span class='hebrew'>מִשּׁוּם דְּאִית בֵּיהּ קֵץ מָשִׁיחַ</span>, because the end of days is in it. Rashi names the book: <strong>Daniel</strong>." }
    ]},
    { h: "The Targum with his name on it isn't his", b: [
      { t: "p", x: "Open a Mikraos Gedolos on <em>Chumash</em> and you will find a Targum headed <em>Targum Yonatan ben Uziel</em>. The Gemara above credits him with the Prophets only, and Onkelos with the Torah. Both can't be right." },
      { t: "wow", label: "Two letters, expanded the wrong way", x: [
        "Azariah dei Rossi, in the sixteenth century, reported seeing two nearly identical Aramaic Torah translations — one headed <em>Targum Yonatan ben Uziel</em>, the other <em>Targum Yerushalmi</em>.",
        "The standard reconstruction: the original heading was <strong>Targum Yerushalmi</strong>, abbreviated <span class='hebrew'>ת״י</span>. Somewhere in transmission those two letters were expanded the wrong way — to <em>Targum Yonatan</em>, then to <em>Targum Yonatan ben Uziel</em>. Scholars now call the work <strong>Targum Pseudo-Jonathan</strong> and date it centuries after his lifetime.",
        "One abbreviation, misread, put a man's name on a book he never wrote — and the mistake is printed in nearly every Chumash on earth."
      ] },
      { t: "tradition", label: "Where this guide stands", x: "The Targum on <em>Nevi'im</em> genuinely is his, exactly as the Gemara says. Only the Chumash attribution is the misreading. Many otherwise careful Jewish sources still repeat the error." }
    ]},
    { h: "Why singles come here — and what is actually known", b: [
      { t: "p", x: "Amuka draws roughly 800,000 people a year, and the overwhelming majority come to daven for a shidduch. Worth knowing how old that custom actually is, because the honest answer beats the legend." },
      { t: "p", x: "Hebrew sources date the practice of asking at this kever to roughly the <strong>seventeenth century</strong> onward, and state plainly: <span class='hebrew'>מקור המנהג אינו ברור</span> — the source of the custom is unclear. There's no classical source." },
      { t: "p", x: "Chabad's own halachic desk goes further: it declines to publish his yahrzeit at all, noting that 26 Sivan has only been observed for something like seventy-five years, and that no classical source connects Yonatan ben Uziel to this segulah." },
      { t: "p", x: "The poskim split in public. The Steipler held there was no source for it. Rav Ovadia Yosef supported it. Both positions are on the record." },
      { t: "wow", label: "The best theory anyone has", x: [
        "Zev Vilnay proposed that the custom grew out of a single line in <em>Targum Pseudo-Jonathan</em> — the Targum that carries Yonatan ben Uziel's name by mistake.",
        "On the verse forbidding a creditor to seize a millstone, that Targum renders: <span class='hebrew'>לָא יֶהֱוֵי גְבַר אֲסַר חַתְנִין וְכַלִּין בְּחַרְשִׁין אֲרוּם נַפְשָׁא דְעָתִיד לְמֵיפַק מִנְהוֹן הוּא מְחַבֵּל</span> — <em>“a man shall not bind bridegrooms and brides by sorcery, for he destroys the soul destined to come from them.”</em>",
        "It's the one passage in all of Targum literature about the <strong>magical blocking of a marriage</strong> — and it sits in the book that bears his name by mistake. The segulah may descend not from the man, but from a misattributed line about untying what has been tied.",
        "<span class='hebrew'>ת״י</span> — two letters, read wrong, may have built the busiest kever in the Galilee."
      ] },
      { t: "p", x: "None of which argues against davening here. It argues for davening honestly: you're asking Hashem, in a place where hundreds of thousands of Jews have asked Him the same thing, in the merit of a man who gave up his own honor so that Jews wouldn't split into factions." }
    ]},
    { h: "Three graves, and one very old tree", b: [
      { t: "p", x: "The paper trail is older than the custom, and messier than the guidebooks." },
      { t: "ul", x: [
        "<strong>1083</strong> — <em>Megillas Evyatar</em> describes a burial at <strong>Dalton</strong>, beside Rabbi Yosi HaGlili, “and around him Yonatan ben Uziel.” The location is ambiguous.",
        "<strong>c. 1210</strong> — R' Shmuel bar Shimshon writes the first explicit Amuka testimony: <span class='hebrew'>באנו לכפר עמיקו ומצאנו שם קבר יונתן בן עוזיאל, ועליו אילן גדול</span> — “we came to the village of Amiku and found there the grave of Yonatan ben Uziel, and over it a great tree.” He notes that local Muslims bring oil, light lamps and make vows there.",
        "<strong>1215</strong> — R' Menachem HaChevroni puts the same grave near the <strong>Jordan</strong>, also under an enormous tree."
      ] },
      { t: "p", x: "Three traditions inside 130 years, in three different places. The Amuka identification won — but it won; it wasn't given." },
      { t: "wow", label: "The tree outlived every custom here", x: [
        "A great tree over the grave is recorded in 1210, again in 1215, and still in <strong>1875</strong>, when Victor Guérin found an aged tree with hewn stones beneath it inscribed with the names of Jewish pilgrims.",
        "Today that tree is hung with tichels and strips of cloth tied by women who came to ask. The oldest continuously recorded feature of this site isn't a building, a claim or a segulah. It's a tree, and people tying things to it."
      ] }
    ]},
    { h: "The ground you're standing on", b: [
      { t: "p", x: "Amuka sits about five kilometers north-east of Tzfat, on the western edge of <strong>Yaar Biriya</strong>, the largest planted forest in the Galil. The name means simply <em>deep</em> — from the gorge that splits the ridges around you." },
      { t: "tradition", label: "Not in Tanach — and not the Amuka you may be thinking of", x: "There's no place called Amuka anywhere in Tanach. Naftali's nineteen fortified towns are listed in Yehoshua 19:32–39 and it isn't among them. Don't confuse it with <span class='hebrew'>בֵּית הָעֵמֶק</span> (Yehoshua 19:27), which is in <em>Asher's</em> portion in the western Galilee near Akko." },
      { t: "p", x: "By geography rather than by name, you're inside the portion of <strong>Naftali</strong>. Moshe's blessing to that tribe reads <span class='hebrew'>נַפְתָּלִי שְׂבַע רָצוֹן וּמָלֵא בִּרְכַּת ה׳</span>, and Rashi explains it about this actual soil: <span class='hebrew'>שֶׁהָיְתָה אַרְצוֹ שְׂבֵעָה כָּל רְצוֹן יוֹשְׁבֶיהָ</span> — <em>his land was sated with everything its inhabitants desired</em>." },
      { t: "tradition", label: "Our drash, not Chazal's", x: "No classical source connects either blessing to Amuka or to the graves here. The verse and Rashi are real; the link to this valley is ours." }
    ]}
  ],
  more: [
    { s: "The inheritance fight — and the version where he loses", b: [
      { t: "p", x: "Bava Batra 133b: a man whose sons <span class='hebrew'>לֹא הָיוּ בָּנָיו נוֹהֲגִין כַּשּׁוּרָה</span> — weren't behaving properly — willed his entire estate to Yonatan ben Uziel. Yonatan sold a third, consecrated a third, and returned a third to the sons." },
      { t: "p", x: "Shammai came at him <span class='hebrew'>בְּמַקְלוֹ וְתַרְמִילוֹ</span> — with his staff and traveling bag — to object. Yonatan's answer: <em>Shammai, if you can repossess what I sold and what I consecrated, you can repossess what I returned.</em>" },
      { t: "wow", label: "The Yerushalmi tells it with the roles swapped", x: [
        "In the Bavli, Yonatan outmaneuvers the law to restore a disinherited family. In <em>Yerushalmi Nedarim</em>, the disinherited son is <strong>Yonatan himself</strong> — his own father vowed him out of the estate and wrote it to <strong>Shammai</strong> — and it is Shammai who performs the sell-a-third, consecrate-a-third, return-a-third maneuver to get it back to him.",
        "Two Talmuds, one legal maneuver, opposite casting."
      ] }
    ]},
    { s: "What is actually here today", b: [
      { t: "p", x: "The kever is run by Israel's <strong>National Center for the Development of Holy Places</strong>. Organised parking, wheelchair access, drinking water, seating, candle-lighting stations, siddurim and accessible restrooms." },
      { t: "p", x: "The official page carries one hard rule: <span class='hebrew'>אין תאורה במתחם ועל כן אין להגיע בשעות החשיכה</span> — <strong>there's no lighting in the compound, so don't come after dark.</strong> An 11:00 visit is exactly right." },
      { t: "wow", label: "No electricity until 2017", x: [
        "One of the most-visited Jewish sites in the country had <strong>no mains power</strong> until a 13.5 million shekel renovation connected it in 2017, lighting the site at night for the first time.",
        "Every one of the hundreds of thousands of visits before that happened by daylight, or by candle."
      ] }
    ]}
  ],
  onsite: [
    "Separate men's and women's sections at the kever. (Reported by Israeli sources; the official page doesn't state it.)",
    "No lighting on site — this is a daylight stop, which yours is.",
    "Drinking water and restrooms, including accessible ones. Fill up here.",
    "The tree beside the kever is where scarves and tichels are tied.",
    "You've got an hour. Some of it is the walk from the car park and back."
  ]
},

/* ---------- 2. MERON ---------- */
{
  id: "meron", time: "12:15", end: "13:00",
  name: "Meron", he: "מֵירוֹן", title: "Meron", accent: "var(--meron)",
  century: "2nd century",
  who: "Rabbi Shimon bar Yochai and his son Rabbi Elazar",
  chips: ["1,204 m", "Open 24 hours", "Har Meron"],
  waze: waze("ציון רשבי מירון"), gmaps: gmaps("ציון רשבי מירון"),
  brief: [
    "The highest ground you will stand on today — <strong>1,204 meters</strong>, the tallest peak in Israel inside the Green Line — and after the Kotel the most visited Jewish grave in the country.",
    "Below you, by a tradition first recorded around <strong>1187</strong>, lie <strong>Rabbi Shimon bar Yochai</strong> and his son <strong>Rabbi Elazar</strong>, who hid from a Roman death sentence in a cave, buried to their necks in sand, living off one carob tree.",
    "Almost every famous fact about this mountain has a better true version underneath it. You get both here."
  ],
  sections: [
    { h: "It started as a conversation about roads", b: [
      { t: "p", x: "The cave story isn't introduced as a story about a cave. It arrives as an explanation of why Rabbi Yehuda was called <span class='hebrew'>רֹאשׁ הַמְדַבְּרִים בְּכָל מָקוֹם</span> — head of the speakers everywhere." },
      { t: "p", x: "Rabbi Yehuda opened: <span class='hebrew'>כַּמָּה נָאִים מַעֲשֵׂיהֶן שֶׁל אוּמָּה זוֹ</span> — how pleasant are this nation's works. They established markets, bridges, bathhouses. <strong>Rabbi Yose was silent.</strong> Rabbi Shimon answered that they built every one of them for themselves: markets to house harlots, bathhouses to pamper themselves, bridges <span class='hebrew'>לִיטּוֹל מֵהֶן מֶכֶס</span> — to collect the toll." },
      { t: "p", x: "Yehuda ben Gerim was sitting with them. He repeated it at home, and it traveled. The sentence came back in rhyme:" },
      { t: "quote",
        he: "יְהוּדָה שֶׁעִילָּה — יִתְעַלֶּה. יוֹסֵי שֶׁשָּׁתַק — יִגְלֶה לְצִיפּוֹרִי. שִׁמְעוֹן שֶׁגִּינָּה — יֵהָרֵג",
        en: "Yehuda, who elevated — shall be elevated. Yose, who stayed silent — shall be exiled to Tzippori. Shimon, who condemned — shall be killed.",
        cite: "Shabbos 33b", url: "https://www.sefaria.org/Shabbat.33b" },
      { t: "wow", label: "Silence wasn't neutral", x: [
        "Read the middle line again. Rabbi Yose neither praised nor criticized. He said nothing at all — and he is exiled for it.",
        "Three men in one conversation: one flattered, one kept quiet, one spoke. All three were sentenced. There's no safe position in that room."
      ] }
    ]},
    { h: "Twelve years, and then twelve months", b: [
      { t: "p", x: "They didn't run to a cave first. They hid in the beis midrash, and Rabbi Shimon's wife brought them bread and a jug of water each day. Only when the decree hardened did they move — on the reasoning that if she were questioned under pressure she might give them away." },
      { t: "p", x: "In the cave <span class='hebrew'>אִיתְרְחִישׁ נִיסָּא</span> — a carob tree and a spring were <em>created</em> for them." },
      { t: "wow", label: "Why they sat in the sand", x: [
        "Everyone tells this as extreme asceticism. The Gemara gives a domestic reason.",
        "They took off their clothes and sat covered to the neck in sand, learning all day, dressing again only to daven — <span class='hebrew'>כִּי הֵיכִי דְּלָא לִיבְלוּ</span>, <strong>so that their clothes should not wear out.</strong>",
        "They had one set of garments and thirteen years. The sand is laundry management."
      ] },
      { t: "p", x: "Twelve years in. Eliyahu HaNavi stood at the mouth of the cave and said, to nobody in particular: <em>who will inform bar Yochai that Caesar has died and his decree is annulled?</em>" },
      { t: "p", x: "They came out, saw men ploughing and sowing, and said <span class='hebrew'>מַנִּיחִין חַיֵּי עוֹלָם וְעוֹסְקִין בְּחַיֵּי שָׁעָה</span> — they abandon eternal life and busy themselves with temporal life. Everywhere they set their eyes burned. A heavenly voice: <span class='hebrew'>לְהַחֲרִיב עוֹלָמִי יְצָאתֶם?! חִיזְרוּ לִמְעָרַתְכֶם</span> — <strong>did you come out to destroy My world? Go back to your cave.</strong>" },
      { t: "p", x: "Twelve months more — and the reason is theirs, not Heaven's: <em>the judgment of the wicked in Gehinnom is twelve months.</em> They sentenced themselves." },
      { t: "p", x: "When they emerged the second time the damage was asymmetric: <span class='hebrew'>כָּל הֵיכָא דַּהֲוָה מָחֵי רַבִּי אֶלְעָזָר, הֲוָה מַסֵּי רַבִּי שִׁמְעוֹן</span> — wherever Rabbi Elazar wounded, Rabbi Shimon healed. The father says: <em>my son, you and I are enough for the world.</em>" },
      { t: "p", x: "Then, at dusk on erev Shabbos, an old man ran past carrying <strong>two bundles of myrtle</strong>. What are they for? <em>In honor of Shabbos.</em> Why two? <span class='hebrew'>חַד כְּנֶגֶד זָכוֹר וְחַד כְּנֶגֶד שָׁמוֹר</span>." },
      { t: "quote",
        he: "חֲזִי כַּמָּה חֲבִיבִין מִצְוֹת עַל יִשְׂרָאֵל, אִיְּתִיבָה דַּעְתַּיְיהוּ",
        en: "“See how beloved the mitzvos are to Israel” — and their minds were settled.",
        cite: "Shabbos 33b", url: "https://www.sefaria.org/Shabbat.33b" },
      { t: "p", x: "Thirteen years underground couldn't repair what one old man running home with myrtle repaired in a sentence." },
      { t: "wow", label: "What the sand did to him", x: [
        "His son-in-law Rabbi Pinchas ben Yair took him to the bathhouse afterwards and saw that his skin was covered in <span class='hebrew'>פִּילֵי</span> — cracks and fissures — from the years in the sand. He wept over him.",
        "Rabbi Shimon's reply: <em>fortunate are you that you have seen me like this, for had you not seen me like this, you wouldn't have found this in me.</em>",
        "And the Gemara measures the gain. Before the cave, Rabbi Pinchas would answer each of Rabbi Shimon's questions with twelve resolutions. Afterwards, Rabbi Shimon answered each of Rabbi Pinchas's with twenty-four."
      ] }
    ]},
    { h: "There's a second version, and it is a different story", b: [
      { t: "p", x: "Everything above is the Babylonian Talmud. The Eretz Yisrael sources — <em>Bereishis Rabbah</em> and the <em>Yerushalmi</em> — tell it again, and almost nothing matches." },
      { t: "wow", label: "Thirteen straight years, and no Eliyahu", x: [
        "In the Eretz Yisrael version it is <strong>thirteen years in one stretch</strong> — not twelve plus twelve months. There's no spring. There's no sand. There's no Eliyahu at the cave mouth. And there's no burning of the farmers.",
        "They eat <span class='hebrew'>חֲרוּבִין שֶׁל גָּרוֹדָא</span>, dry withered carobs, <span class='hebrew'>עַד שֶׁהֶעֱלָה גּוּפָן חֲלוּדָה</span> — until their bodies broke out in rust.",
        "And what tells them it is safe to leave isn't a prophet. It's a <strong>bird-catcher</strong>. Rabbi Shimon watched a fowler work, and heard a heavenly voice call <span class='hebrew'>דִּימוֹס</span> — <em>dimissus</em>, acquitted — and the bird escaped; then <span class='hebrew'>סְפֶקוּלָא</span> — <em>arrows</em> — and it was taken.",
        "He concluded: <em>a bird isn't trapped without Heaven. How much more so a human soul.</em> And he came out."
      ] },
      { t: "tradition", label: "Don't blend them", x: "Both versions are authentic. They aren't two halves of one account, and the numbers don't reconcile — the Bavli's twelve-plus-one isn't the midrash's thirteen. Sefaria's edition of the Yerushalmi goes further and calls the Bavli's text “clearly derivative,” though that's one editor's judgment, not consensus. The cave's location is named in neither: <strong>Peki'in</strong> first appears in print in 1765." }
    ]},
    { h: "The man himself", b: [
      { t: "p", x: "He learned under Rabbi Akiva — <em>Vayikra Rabbah</em> has him and Rabbi Chanina ben Chachinai going to Bnei Brak and staying <strong>thirteen years</strong>. The point of that story isn't the learning: it is that Rabbi Shimon kept writing home and Rabbi Chanina did not." },
      { t: "p", x: "When Rabbi Akiva was imprisoned, Rabbi Shimon asked him to teach and threatened, in jest, to tell his father Yochai to hand him to the authorities. Akiva's answer became a proverb: <span class='hebrew'>יוֹתֵר מִמַּה שֶּׁהָעֵגֶל רוֹצֶה לִינַק — פָּרָה רוֹצֶה לְהָנִיק</span>, <em>more than the calf wants to nurse, the cow wants to feed.</em>" },
      { t: "quote",
        he: "יָכוֹל אֲנִי לִפְטוֹר אֶת כׇּל הָעוֹלָם כּוּלּוֹ מִן הַדִּין",
        en: "“I am able to exempt the entire world from judgment.”",
        cite: "Sukkah 45b", url: "https://www.sefaria.org/Sukkah.45b" },
      { t: "wow", label: "The line is longer than the quote", x: [
        "It rarely gets finished. He continues that if his son were with him they could exempt the world from the day of creation until now — and that if <strong>Yosam ben Uziyahu</strong> were with them, from the creation of the world until its very end.",
        "On the same daf: <em>I have seen the men of high standing, and they are few. If they are a thousand, my son and I are among them. If they are two — they are my son and I.</em>"
      ] },
      { t: "p", x: "Not everyone was enchanted. Isi ben Yehuda's thumbnail sketches of the Tannaim reach him and say <span class='hebrew'>רַבִּי שִׁמְעוֹן — טוֹחֵן הַרְבֵּה וּמוֹצִיא קִימְעָא</span>: <em>grinds a great deal and brings out little.</em> And the halachic maxim about him is careful — <span class='hebrew'>כְּדַאי הוּא רַבִּי שִׁמְעוֹן לִסְמוֹךְ עָלָיו בִּשְׁעַת הַדְּחָק</span>, worthy to rely on <em>under pressure</em>." }
    ]},
    { h: "The Zohar — and the date that isn't in it", b: [
      { t: "p", x: "The <em>Idra Rabba</em> opens with Rabbi Shimon asking his companions <span class='hebrew'>עַד אֵימַת נֵיתִיב בְּקַיְּימָא דְּחַד סַמְכָא</span> — how long shall we sit on a foundation of a single pillar? Ten went in. The text names the three who died during it, their souls leaving <span class='hebrew'>בִּנְשִׁיקָה</span>, and records the tally plainly: <strong>ten entered, seven came out.</strong>" },
      { t: "p", x: "The <em>Idra Zuta</em> is his last day. He assigns the roles himself — <span class='hebrew'>רִבִּי אַבָּא יִכְתּוֹב, וְרִבִּי אֶלְעָזָר בְּרִי יִלְעֵי</span>, Rabbi Abba will write and my son Rabbi Elazar will study — and <span class='hebrew'>כָּל הַהוּא יוֹמָא לָא אַפְסִיק אֶשָּׁא מִן בֵּיתָא</span>, all that day the fire didn't cease from the house, and none could come near him. He died mid-sentence, on the word <span class='hebrew'>חיים</span>." },
      { t: "wow", label: "There's no date anywhere in either Idra", x: [
        "The Zohar, read end to end, <strong>never says Lag BaOmer</strong>. It never says 18 Iyar. It never names a month. On his last day it says only <span class='hebrew'>בְּהַהוּא יוֹמָא</span> — <em>on that day.</em>",
        "It also never says “the day of my joy.” It says <span class='hebrew'>הִלּוּלָא דִּילִי</span>. The familiar <span class='hebrew'>בְּיוֹם שִׂמְחָתִי</span> comes from <em>Pri Etz Chaim</em> — the Ari's school, thirteen centuries later."
      ] },
      { t: "wow", label: "The yahrzeit may rest on one letter", x: [
        "The Chida held that the printed text was corrupted: <span class='hebrew'>שִׂמְחַת</span> רשב״י — <em>the joy of</em> Rashbi — misread as <span class='hebrew'>שֶׁמֵּת</span> רשב״י, <em>that Rashbi died.</em>",
        "The editions bear him out. <em>Sha'ar HaKavanos</em> 1752 and the first <em>Pri Etz Chaim</em> of 1782 read <em>simchas</em>. Koretz 1785 and Dubrowno 1802 read <em>she-meis</em>. The 1819 edition reverts to <em>simchas</em>. Benayahu and Rav Yaakov Hillel confirmed <em>simchas</em> from manuscript, Hillel from Chaim Vital's own hand.",
        "And the printed death-clause contradicts its own chapter: it explains the date by Rashbi being one of Rabbi Akiva's students who died in the Omer — while four paragraphs earlier, the same book lists him among the five who <strong>survived</strong>."
      ] },
      { t: "tradition", label: "Authorship", x: "Jewish tradition attributes the Zohar to Rashbi and his circle; the Chida defends it by invoking the Ramak and the Ari. Rabbi Yaakov Emden's position is subtler than either camp claims — he wrote that the book and its author are holy <em>whoever he was</em>, while arguing the compilation is far later than Rashbi. Academic scholarship runs from Scholem (Moshe de León, c. 1280s) through Liebes (a circle, not an author) to Abrams (there's no unified text to assign)." }
    ]},
    { h: "The pilgrimage wasn't originally his", b: [
      { t: "p", x: "This is the part almost nobody on the mountain knows, and it is the strongest thing on this page." },
      { t: "wow", label: "Hillel and Shammai, on Pesach Sheni, for rain", x: [
        "The original Meron pilgrimage wasn't to Rabbi Shimon, and it wasn't on Lag BaOmer. It was to the burial cave attributed to <strong>Hillel and Shammai</strong>, on <strong>Pesach Sheni</strong>, the 14th of Iyar — and it was about <em>water</em>.",
        "<strong>Benjamin of Tudela</strong>, who came through around 1170, describes that cave and the twenty graves of disciples beside it. He doesn't mention Rabbi Shimon bar Yochai anywhere in his entire itinerary.",
        "A 13th-century account describes the crowd watching for water to run out of the cave — a sign the year would be blessed — and records that <strong>Muslims came too</strong>. The Muslim governor of Tzfat confirms it independently in the 14th century: <em>on a certain day of the year, in mid-Iyar, many Jews gather there.</em>",
        "In 1501 a visitor found Rabbi Shimon's cave sealed shut, drank from Hillel's spring, and wrote honestly that he had looked for the miracle and <em>“I didn't see this wonder.”</em>"
      ] },
      { t: "tradition", label: "So who is actually buried here", x: "The earliest source placing Rabbi Shimon at Meron is Rabbi Yaakov ben Nesanel HaKohen, before 1187 — roughly a thousand years after his lifetime. Three other sources name three other places: the Bavli in <em>Bava Metzia</em> points to Biri, the midrash to Meron, and a traveler of about 1215 to Kfar Chananya. The 1971–77 excavation of ancient Meiron produced a village, seven strata, houses and workshops — and <strong>not one tomb identification</strong>. Nothing here is archaeologically established." },
      { t: "wow", label: "The Ari's own school says the third grave is someone else", x: [
        "People will tell you the third marker in the chamber is <strong>Rabbi Yitzchak Nafcha</strong>. <em>Sha'ar HaGilgulim</em> places him somewhere else entirely — a split rock near Tzfat. And Shmuel Vital adds a note saying it outright: <em>“it is explicit here that he isn't buried with Rashbi and his son in Meron, as people say that the third marker there's Rabbi Yitzchak.”</em>",
        "And on Meron itself, Chaim Vital — who elsewhere in the same chapter is happy to write <em>“the people erred”</em> — will only go as far as: <span class='hebrew'>שָׁם קָבוּר הרשב״י… כְּמוֹ שֶׁאוֹמְרִים הָעוֹלָם</span>, <strong>“as people say.”</strong>"
      ] },
      { t: "p", x: "The Bavli's account of how Rabbi Elazar came to lie beside his father is worth carrying up the hill. His bier was brought on erev Yom Kippur, and a serpent lay with its tail in its mouth, encircling the cave and sealing it. They addressed it: <span class='hebrew'>עַכְנָא עַכְנָא! פִּתְחִי פִּיךְ וְיִכָּנֵס בֵּן אֵצֶל אָבִיו</span> — <em>serpent, serpent! Open your mouth, and let a son come in beside his father.</em>" }
    ]},
    { h: "The mountain, the synagogue, and the lintel", b: [
      { t: "p", x: "<strong>Har Meron</strong> is the highest point in Israel within the Green Line at about 1,204 meters, inside a nature reserve of some 84,000 dunams." },
      { t: "p", x: "The ancient synagogue below was excavated across five seasons between 1971 and 1977. Its façade dates to roughly <strong>280–330 CE</strong>, which makes it the earliest known example of the “Galilean-type” basilica synagogue — eight columns a side, triple portal facing south toward Jerusalem." },
      { t: "wow", label: "Two things about the famous lintel", x: [
        "The tradition that Mashiach comes when it falls is real, and older than most people assume — but the earliest version, from a student of the Bartenura in <strong>1495</strong>, says <span class='hebrew'>כותל</span>, <strong>the wall</strong>, not the lintel. The lintel-specific form is the later popular one.",
        "And it isn't standing untouched. It's cracked, and it has been artificially reinforced. While you're looking at the three portals: <strong>one of them is modern</strong> — the western portal was reconstructed in the 1950s."
      ] },
      { t: "tradition", label: "Meron in Tanach, carefully", x: "Meron is <strong>not</strong> in Yehoshua 19 — neither in Naftali's nineteen fortified towns nor in Asher's list. No verse names it, so its tribe is an inference, not a text. Yehoshua 11's battle at <span class='hebrew'>מֵי מֵרוֹם</span> is genuinely disputed: Lake Hula, a site on this massif, and the Horns of Hattin all have serious backers. And <em>Shimron-Meron</em> in Yehoshua 12:20 is most likely the Shimron near Nazareth. Where Meron <em>does</em> appear is the Yerushalmi — as the olive capital: one eats olives until they are finished <span class='hebrew'>מִמֵּרוֹן וּמִגּוּשׁ חָלָב</span>." }
    ]}
  ],
  more: [
    { s: "Chai rotel, and where it actually comes from", b: [
      { t: "p", x: "You will be offered drink here, and told that distributing eighteen <em>rotl</em> is an ancient segulah." },
      { t: "wow", label: "One man, one vow, 1873", x: [
        "The earliest known mention is a Jerusalem book of <strong>1873</strong>. Its author describes meeting two men at Meron pressing drink on everyone, and asking why. One of them, childless for fourteen years, had at a previous Lag BaOmer called out in a festive mood that he would give eighteen rotl of drink if he were granted a son — and the crowd answered amen.",
        "The author was writing it down because he found it <em>surprising</em>. There's no earlier source. It reached today's organisations through a 1912 letter and a 1966 book.",
        "The original accounts tie it only to children. Shidduchim, health and parnassah are modern extensions. Rav Chaim Kanievsky, asked about the custom, said: <em>we never knew about it at all.</em>"
      ] }
    ]},
    { s: "The Ari, and the Chasam Sofer — both usually misquoted", b: [
      { t: "p", x: "<strong>The Ari.</strong> <em>Sha'ar HaKavanos</em> does record that he went to Meron on Lag BaOmer with his household and stayed three days — so the claim that the text says nothing is wrong. But Chaim Vital adds, of the Ari at that time, <em>“I don't know whether he was then expert in this wondrous wisdom that he later attained.”</em> The famous upsherin is second-hand testimony from Rabbi Yonatan Sagis, and <strong>it carries no date at all</strong> — nothing in the text puts the haircut on Lag BaOmer. And Vital calls it <span class='hebrew'>כְּמִנְהָג הַיָּדוּעַ</span>, <em>the known custom</em>: the Ari joined a practice that already existed. Vital's own stated purpose is defensive — <em>to show that this custom has a root.</em>" },
      { t: "p", x: "<strong>The Chasam Sofer.</strong> He is constantly quoted as having banned Meron. His responsum never uses the word Meron — he writes “in the holy city of <em>Tzfat</em>.” His objection is to fixing a festival on a day with no miracle and no mention anywhere in Shas or poskim. And his conclusion isn't a prohibition: <span class='hebrew'>לֹא יָדַעְתִּי אִם רַשָּׁאִים לַעֲשׂוֹת כֵּן</span> — <em>I don't know whether they are permitted to do so</em> — alongside a personal note that he kept apart from it himself. “He wouldn't join, and said he didn't know if it was permitted” is accurate. “He banned it” is not." }
    ]},
    { s: "Practical: what changed after 2021, and what didn't", b: [
      { t: "p", x: "On the night of 29–30 April 2021, <strong>forty-five</strong> men and boys were killed in a crowd crush at the Lag BaOmer hilula here and about 150 were injured, among an estimated hundred thousand people. The State Commission of Inquiry published its final report on <strong>6 March 2024</strong>, calling it a disaster that could and should have been prevented and finding sixteen of the eighteen officials it examined personally responsible." },
      { t: "p", x: "It wasn't the first, and it wasn't unforeseen. In <strong>1911</strong>, on Lag BaOmer night, a roof parapet gave way here and around a hundred people fell seven or eight meters; at least eleven died. Locals had warned the parapet was unsound on the eve of the hillula. And the <strong>State Comptroller warned in writing in 2008</strong> — thirteen years before the crush — about escape routes and a systemic failure that “endangers the hundreds of thousands of visitors.”" },
      { t: "p", x: "Every restriction that followed attaches to <strong>Lag BaOmer</strong>: ticketing, timed slots, capacity caps. The official page lists the tziyun as <span class='hebrew'>פתוח כל שעות היממה</span> — open around the clock, including Shabbos and yom tov. Don't expect hilula rules on a Thursday in Tishrei." },
      { t: "p", x: "Facilities: disabled access, parking, drinking water, seating, candle-lighting, siddurim, restrooms, and lighting throughout." }
    ]}
  ],
  onsite: [
    "Open 24 hours, and lit — unlike Amuka.",
    "This is the Mincha problem: mincha gedola is 13:03 and this slot ends at 13:00. See the alert on the Now screen.",
    "Rabbi Shimon and Rabbi Elazar are in one domed chamber — Rashbi's marker in the southern corner, Rabbi Elazar's in the center.",
    "At 1,204 m it is the coolest and windiest stop of the day. Tiberias this afternoon will be about 7 °C warmer.",
    "Restrooms, water and candle-lighting on site."
  ]
},

/* ---------- 3. TZFAT ---------- */
{
  id: "tzfat", time: "14:30", end: "15:30",
  name: "Tzfat", he: "צְפַת", title: "The Old Cemetery, Tzfat", accent: "var(--tzfat)",
  century: "16th century",
  who: "The Arizal, the Ramak, the Beis Yosef and the author of Lecha Dodi",
  chips: ["937 m", "Steep slope", "Not wheelchair accessible"],
  waze: waze("בית העלמין העתיק צפת"), gmaps: gmaps("בית העלמין העתיק צפת"),
  brief: [
    "On this hillside, inside a single generation, a few hundred refugee families produced the <strong>Shulchan Aruch</strong>, <strong>Lecha Dodi</strong>, the <strong>Kabbalat Shabbat</strong> service the entire Jewish world now davens, and the system of Kabbalah that every chassidus since is built on.",
    "Then they buried each other here, on the western slope, and the mountain fell on the town twice.",
    "The <strong>Arizal</strong> lies mid-slope beside the main staircase. The <strong>Ramak</strong> is immediately next to him. You can touch both in ninety seconds — which is the strange thing about this place, because in life one of them replaced the other."
  ],
  sections: [
    { h: "Two years that reorganized Judaism", b: [
      { t: "p", x: "Rabbi Yitzchak Luria — the <strong>Arizal</strong> — was born in Jerusalem in 1534, to an Ashkenazi father and a Sephardi mother. That's why a man raised in Egypt and buried in the Galilee is called “the German”." },
      { t: "p", x: "Orphaned young, he was taken to Cairo, to the house of a wealthy uncle whose daughter he married. He studied under the <strong>Radbaz</strong> and <strong>Rabbi Betzalel Ashkenazi</strong>, author of the <em>Shitah Mekubetzet</em> — meaning the greatest kabbalist of the age was trained first as a front-rank halachist." },
      { t: "p", x: "He secluded himself on an island in the Nile — <span class='hebrew'>ג׳זירת א-רודה</span> — reportedly for seven years, with the Zohar. He reached Tzfat around 1570 and died in an epidemic on <strong>5 Av 5332</strong>, aged 38." },
      { t: "wow", label: "He taught here for barely two years", x: [
        "Everything called <em>Lurianic Kabbalah</em> — tzimtzum, the shattering of the vessels, tikkun — comes out of a teaching career of roughly <strong>two years</strong>, ended by plague at thirty-eight.",
        "And he wrote almost none of it down. Encyclopaedia Judaica notes that apart from a commentary on the opening pages of the Zohar and scattered glosses, he left nothing. <em>Etz Chaim</em> is Rabbi Chaim Vital's reconstruction, written over the twenty years after his death.",
        "What the Ari did write in his own hand are three Aramaic Shabbos hymns — <span class='hebrew'>אזמר בשבחין</span>, <span class='hebrew'>אסדר לסעודתא</span>, <span class='hebrew'>בני היכלא</span> — each with his name in the acrostic. Sung at tables that have no idea who wrote them."
      ] },
      { t: "wow", label: "Both his death dates are correct", x: [
        "Encyclopaedia Judaica prints <strong>15 July 1572</strong>. Convert 5 Av 5332 and you get <strong>25 July 1572</strong>. Guides argue about this.",
        "Nobody is wrong. One is the Julian date in use in 1572; the other is the proleptic Gregorian. The ten-day gap is exactly the Julian–Gregorian offset for that century."
      ] }
    ]},
    { h: "The Ramak, who was here first", b: [
      { t: "p", x: "Rabbi Moshe Cordovero — the <strong>Ramak</strong> — finished <em>Pardes Rimonim</em>, the first systematic presentation of Kabbalah as a coherent philosophical system, <strong>by the age of twenty-seven</strong>. He led the Kabbalah academy of Tzfat for about twenty years and died on 23 Tammuz 5330, two years before the Ari." },
      { t: "p", x: "His teachers divide neatly: <strong>Shlomo Alkabetz</strong> — his brother-in-law — taught him the hidden Torah; the <strong>Beis Yosef</strong> taught him the revealed. All three are buried within a short walk of you." },
      { t: "p", x: "His masterwork, <em>Or Yakar</em>, a commentary on the whole of the Zoharic literature, sat in manuscript for nearly four centuries. It was first printed beginning in <strong>1962</strong>." },
      { t: "wow", label: "The Ramak objected to walking into the fields", x: [
        "Every Friday night the Jewish world sings <em>Lecha Dodi</em>, written by his brother-in-law, and turns to the door. In Tzfat they did it literally, dressing in white and walking out into the fields to meet the Shabbos queen.",
        "The Ramak <strong>disagreed with the practice</strong>. He argued that Shabbos doesn't arrive horizontally from the field but vertically, descending from above, and that it is best received in the synagogue.",
        "The man buried beside the Ari, whose circle produced the most famous Friday-night poem in Judaism, was the dissenter on the ritual that belongs to it."
      ] },
      { t: "tradition", label: "The pillar of fire", x: "The story goes that the Ari saw a pillar of fire following the Ramak's bier, and was recognized as his successor. It does not come from an eyewitness. It comes from two later collections: <em>Shivchei HaAri</em>, built from letters sent out of Safed in 1607 — a generation after the fact — and <em>Toledot HaAri</em>, which survives only in manuscripts from the later 1600s. Those two sources don't even agree: one has a pillar of <em>fire</em>, the other a pillar of <em>cloud</em>. And the dramatic version in which the Ari arrives in Tzfat on the very day of the funeral contradicts the record, which has him settled here from 1569/70 and studying under the Ramak before his death." }
    ]},
    { h: "The year they tried to restart the Sanhedrin", b: [
      { t: "p", x: "This is the Tzfat story almost nobody tells, and it is the most audacious thing that happened on this hill." },
      { t: "p", x: "The Rambam had written, in <em>Hilchos Sanhedrin</em>, a cautious sentence: <em>it appears to me that if all the wise men in Eretz Yisrael agree to appoint judges and convey semichah upon them, the semichah is binding</em> — and then closed with <em>the question requires resolution</em>." },
      { t: "p", x: "In <strong>1538</strong>, twenty-five rabbis assembled in Tzfat and acted on the first half of that sentence. They ordained <strong>Rabbi Yaakov Beirav</strong>, who then ordained <strong>Rabbi Yosef Karo</strong>, the <strong>Mabit</strong>, and others. Semichah had been broken for over a thousand years. Restore it, and you can reconstitute the Sanhedrin." },
      { t: "wow", label: "It was stopped over the calendar", x: [
        "Rabbi Levi ibn Habib in Jerusalem — the <strong>Ralbach</strong> — attacked the second half of the Rambam's sentence, and his objection was constitutional, not technical: a restored Sanhedrin <strong>could redefine the calendar</strong>. One court in Tzfat would then be setting Rosh Hashanah for every Jew on earth.",
        "The dispute turned ugly. Beirav publicly threw the Ralbach's forced baptism in Portugal at him — he had been about seventeen, Christian for barely a year, and fled at the first chance. The Ralbach admitted the fact in print and answered him anyway.",
        "The chain ran Karo → Alshich → Chaim Vital, ordained 20 Elul 1590, and then lapsed. For roughly fifty years, there were men walking in Tzfat who held semichah."
      ] }
    ]},
    { h: "Lecha Dodi, and the Mishnah that spoke", b: [
      { t: "p", x: "<strong>Rabbi Shlomo Alkabetz</strong> wrote <em>Lecha Dodi</em> here around 1540. Nine stanzas; the first letters of the first eight spell <span class='hebrew'>שלמה הלוי</span>. The ninth, <span class='hebrew'>בואי בשלום</span>, stands outside the acrostic." },
      { t: "p", x: "Turning to the door at <span class='hebrew'>בואי כלה</span> isn't a Tzfat invention — it re-enacts <em>Shabbos 119a</em>, where Rabbi Chanina robes himself at sunset and says “come, let us go out to greet the Shabbos queen,” and Rabbi Yannai says <span class='hebrew'>בואי כלה, בואי כלה</span>." },
      { t: "wow", label: "The Beis Yosef's night visitor", x: [
        "<strong>Rabbi Yosef Karo</strong>, who gave the Jewish world its code of law, kept a diary of fifty years of nocturnal visitations by an angelic being — the <em>Maggid Meisharim</em>.",
        "The Maggid introduces itself as <em>“I am the Mishnah that speaks in your mouth.”</em> The personified Mishnah, come to teach the man writing the Shulchan Aruch.",
        "Nineteenth-century maskilim denied the diary was his, embarrassed that a supreme legal mind kept a mystical journal. Louis Jacobs concluded its authenticity had been demonstrated beyond doubt."
      ] },
      { t: "p", x: "Also buried here: <strong>Rabbi Elazar Azikri</strong>, who wrote <em>Yedid Nefesh</em>, and who held the renewed semichah. Both of the poems the Jewish world sings on Friday night were written by men in one small circle on this hillside." }
    ]},
    { h: "Why the identifications are fragile, and why that's fine", b: [
      { t: "p", x: "Burial records for this cemetery were lost roughly seventy years ago. Earthquakes and soil slippage have left graves on top of graves; a survey counts around 10,000 stones, of which some 3,000 aren't in their original places." },
      { t: "wow", label: "The Radbaz was lost for a century", x: [
        "The grave of the Radbaz — the Ari's own teacher — <strong>went missing for over a hundred years</strong>, and was only re-identified in 2015, to the right of the Mabit.",
        "That's the honest frame for everything on this slope: the sixteenth-century identifications rest on continuous local tradition, not on paperwork. It's a strong tradition. It's not a filing cabinet."
      ] },
      { t: "tradition", label: "The blue", x: "The sky-blue paint on the kabbalists' graves is the visual signature of Tzfat, and nobody can source it. Explanations in circulation — tekhelet and the heavens, warding off the evil eye, marking the gates of heaven, repelling insects, or simply laundry bluing added to cheap whitewash — are undated, mutually inconsistent, and come from tourism writing. Enjoy it as a folk aesthetic and don't let anyone tell you it's from the Ari." },
      { t: "tradition", label: "Hoshea HaNavi", x: "A tradition places the prophet <span class='hebrew'>הושע בן בארי</span> here, attested from about 1495 — which is also the earliest mention of this cemetery in any source. But at least four competing traditions exist, and the oldest of them, from about 1435, puts him near Babylon. A camel legend exists precisely to reconcile the two. The Jewish Encyclopedia's own verdict on the whole set: <em>“All these stories are, however, historically worthless.”</em>" }
    ]},
    { h: "Tzfat isn't in Tanach — but it is in the Yerushalmi", b: [
      { t: "tradition", label: "Retire the beacon story", x: "You may hear that Tzfat was one of the beacon mountains of the Mishnah. It was not. Mishnah Rosh Hashanah 2:4 names five — Har HaMishcha, Sartava, Gerofina, Chavran, Beis Biltin — and Tzfat isn't among them. The <em>Zephath</em> of Shoftim 1:17 is a different place, in the Negev, renamed Chormah." },
      { t: "wow", label: "The real source is better than the myth", x: [
        "The <strong>Yerushalmi</strong> does name Tzfat. Rabbi Ze'ira asks Rabbi Abbahu whether those who see Tzfat's beacon should light their own. The answer: Rebbi abolished the beacons — so why is Tzfat still lighting? <span class='hebrew'>אֶלָּא בְגִין מוֹדָעָא דִאִינּוּן יָדְעִין</span> — <em>“to make known that they know.”</em>",
        "The beacons, the passage says, were never disestablished around the Kinneret. So Tzfat's fire isn't a Temple-era relay station. It's a local survival, lit after the official system was cancelled, for no operational reason at all — just to say <em>we still know</em>.",
        "That single line is the entire documentary basis for Tzfat's antiquity."
      ] }
    ]}
  ],
  more: [
    { s: "The golden age, by the numbers — and the number to stop repeating", b: [
      { t: "p", x: "You will hear that 16th-century Tzfat held 20,000 or 30,000 Jews. It's not supportable. Ottoman tax registers count households: 232 Jewish households in 1525/26, 716 plus 56 bachelors in 1553/54. Peak is under a thousand households — on the order of five to six thousand people." },
      { t: "p", x: "The internal check that settles it: in 1576 the Sultan ordered <strong>1,000 Jewish families</strong> deported to Cyprus and the community argued the town would be ruined. That threat only makes sense if the community <em>is</em> about a thousand families." },
      { t: "p", x: "The money was <strong>cloth</strong>. Textile manufacture was effectively a Jewish monopoly and the community's main income; wool came in through Sidon and Acre and finished cloth competed with Venice. An Italian merchant visiting in 1535 reported that over <strong>15,000 suits</strong> had been made in Tzfat that year. Leading rabbis were personally in the trade — Moshe Galante owned a factory." },
      { t: "p", x: "The collapse was economic before it was anything else: cheap western European woollens, a financial crisis in 1584, and England buying up the available raw wool." }
    ]},
    { s: "The printing press — one “first” survives out of four", b: [
      { t: "p", x: "In 1577 Eliezer ben Yitzchak Ashkenazi of Prague set up a press in Tzfat. The first book was <em>Lekach Tov</em>, a commentary on Esther by Rabbi Yom Tov Tzahalon — who was about <strong>eighteen</strong>, and presented it on the title page as <span class='hebrew'>משלוח מנות</span>, a Purim gift to his father." },
      { t: "wow", label: "It wasn't the first press in Asia", x: [
        "First in Asia? The Jesuits printed at Goa in 1556. First in the Ottoman Empire? Constantinople, 1493. First outside Constantinople? Salonica, 1512.",
        "The claim that survives is the one that matters: <strong>the first printing press in the Land of Israel</strong>, and <em>Lekach Tov</em> the first book ever printed here."
      ] }
    ]},
    { s: "Why the town is on top of the graveyard", b: [
      { t: "p", x: "On 1 January 1837, ten minutes before sunset, an earthquake of roughly magnitude 7 hit Tzfat. The town was terraced so steeply up the slope that <strong>the roofs of the lower houses formed the streets of the houses above them</strong>. When it went, the town fell onto itself in a cascade. Heavy rain in the preceding days had loaded the slopes." },
      { t: "p", x: "Don't quote a single death toll: estimates run from about 1,700 to 5,000 and the figures are irreconcilable. Survivors were pulled from the rubble six and seven days later; organized relief didn't begin until 19 January." },
      { t: "p", x: "Rabbi Shmuel Heller stood buried up to his nose all night among the dead and was dug out the next morning. The Chasam Sofer eulogised the victims in Pressburg. Rabbi Yisrael of Shklov read the quake as the beginning of the redemption." }
    ]}
  ],
  onsite: [
    "Steep rocky slope down toward Nachal Amud. The heritage register lists it as NOT wheelchair accessible.",
    "The Ari is mid-slope beside the main staircase; the Ramak is immediately beside him, with Alkabetz in the same cluster. The Beis Yosef is further down under a tree.",
    "The Ari's mikveh is at the cemetery entrance — a natural spring, near-freezing, open 24/7. In practice men only: there's a posted sign citing the rabbis of Tzfat.",
    "If anyone is going into the mikveh: dozens of stairs down, and at least a hundred back up. Know that before you commit.",
    "Kohanim: this is a hillside saturated with unmarked and displaced graves. Ask your own rav; the overlook from the Ari Sephardi shul is the alternative.",
    "Tzfat is the highest city in Israel at 937 m. It will be the coolest part of your day."
  ]
},

/* ---------- 4. TIBERIAS ---------- */
{
  id: "tiberias", time: "16:15", end: "17:30",
  name: "Teveria", he: "טְבֶרְיָה", title: "Teveria", accent: "var(--tiberias)",
  century: "2nd & 12th",
  who: "The Rambam, Rabbi Akiva and Rabbi Meir Baal HaNess",
  chips: ["−200 m", "Rakkas, in Naftali", "Three kevarim"],
  waze: waze("קבר הרמבם טבריה"), gmaps: gmaps("קבר הרמבם טבריה"),
  brief: [
    "You've dropped roughly 1,400 meters since lunch. This is the lowest city in Israel — and the only stop today that Tanach actually names.",
    "Three graves, three different centuries. <strong>Rabbi Akiva</strong>, who began learning at forty and died with the word <em>echad</em> on his lips. <strong>Rabbi Meir Baal HaNess</strong>, his student — his name is on a tzedakah box in half the kitchens you know. And the <strong>Rambam</strong>, who died in Egypt in 1204 and was brought here.",
    "And the day has a closing rhyme you may not have noticed. You began at <strong>Amuka</strong> — <em>deep</em>. The Gemara lists the Sanhedrin's ten exiles and ends at this city with the words <span class='hebrew'>וּטְבֶרְיָא עֲמוּקָּה מִכּוּלָּן</span> — <strong>and Teveria is the deepest of them all.</strong>"
  ],
  sections: [
    { h: "The city Tanach names", b: [
      { t: "p", x: "Amuka, Meron and Tzfat aren't named anywhere in Tanach. Teveria is — under an older name. Yehoshua 19:35 lists Naftali's fortified towns, and three of them land in a single verse: <span class='hebrew'>חַמַּת רַקַּת וְכִנָּרֶת</span>." },
      { t: "p", x: "<em>Megillah 6a</em> works out which is which. The young Rabbi Yochanan held that Chamas was Teveria — for the hot springs — and Rakkas was Tzippori. Rabba overturns it: <strong>Rakkas is Teveria.</strong> Rava is blunter still: <em>is there anyone who says Rakkas isn't Teveria?</em>" },
      { t: "wow", label: "Why it is called Rakkas", x: [
        "The Gemara gives the derasha, and it is one of the warmest lines in Shas about ordinary Jews:",
        "<span class='hebrew'>וְלָמָּה נִקְרָא שְׁמָהּ רַקַּת? שֶׁאֲפִילּוּ רֵיקָנִין שֶׁבָּהּ מְלֵאִין מִצְוֹת כְּרִמּוֹן</span>",
        "<em>“Why is it called Rakkas? Because even the empty ones among her are as full of mitzvos as a pomegranate.”</em> <span class='hebrew'>רֵיקָנִין</span> — <em>empty</em> — and <span class='hebrew'>רַקַּת</span> are the same root. The city's name is a pun on emptiness, and Chazal turn it into the opposite.",
        "Two more on the same daf: Rabbi Yirmeya says it is called Teveria because it sits at the <span class='hebrew'>טַבּוּר</span>, the navel of Eretz Yisrael. Rava says <span class='hebrew'>שֶׁטּוֹבָה רְאִיָּיתָהּ</span> — because it is good to look at. Look at it."
      ] },
      { t: "wow", label: "Its wall is the sea", x: [
        "<em>Megillah 5b</em>: Chizkiah read the Megillah in Teveria on both the 14th and the 15th, because he couldn't work out whether the city counted as walled — <span class='hebrew'>דְּחַד גִּיסָא שׁוּרָא דְיַמָּא הֲוָת</span>, one of its sides is walled by the sea.",
        "The baraisa settles it by excluding Teveria from <span class='hebrew'>סָבִיב</span> — <em>“surrounded”</em> — <span class='hebrew'>פְּרָט לִטְבֶרְיָא שֶׁיַּמָּהּ חוֹמָתָהּ</span>: <strong>except for Teveria, whose sea is its wall.</strong> You're looking at the wall."
      ] },
      { t: "p", x: "<em>Bava Kamma 81b</em>: <span class='hebrew'>יַמָּהּ שֶׁל טְבֶרְיָא — בְּחֶלְקוֹ שֶׁל נַפְתָּלִי הָיְתָה</span>. The lake fell in Naftali's portion, and he took in addition a strip along its southern shore the length of a fishing-net rope — the fulfillment of Moshe's blessing <span class='hebrew'>יָם וְדָרוֹם יְרָשָׁה</span>. You've been driving through Naftali's portion all day; this is the part the Torah describes." },
      { t: "tradition", label: "Not the harp", x: "You will be told the Kinneret is named for its harp shape. Chazal give a different reason: in <em>Megillah 6a</em>, Kinneret is Ginosar, and it is so called because <em>its fruit are as sweet as the sound of a kinnor</em>. The shape explanation is a later popular one." }
    ]},
    { h: "Rabbi Akiva — forty years old, and illiterate", b: [
      { t: "p", x: "<em>Kesubos 62b</em> opens flatly: <span class='hebrew'>רַבִּי עֲקִיבָא רָעֲיָא דְּבֶן כַּלְבָּא שָׂבוּעַ הֲוָה</span> — Rabbi Akiva was the shepherd of Ben Kalba Savua. His employer's daughter betrothed him in secret, on condition that he go and learn. Her father heard, threw her out, and vowed her off all his property." },
      { t: "p", x: "He sat and learned twelve years, and came back with twelve thousand students. He heard her say, through the door, that she would gladly give him twelve more — and he turned around and went back without entering. Twelve years later he returned with <strong>twenty-four thousand</strong>." },
      { t: "quote",
        he: "שִׁבְקוּהָ, שֶׁלִּי וְשֶׁלָּכֶם — שֶׁלָּהּ הוּא",
        en: "“Leave her be. What is mine and what is yours — is hers.”",
        cite: "Kesubos 63a", url: "https://www.sefaria.org/Ketubot.63a" },
      { t: "tradition", label: "The Bavli never gives her a name", x: "The Talmud tells this entire story without naming the wife. <strong>Rachel</strong> comes from <em>Avos d'Rabbi Nassan</em>, chapter 6 — a different, later source. Worth knowing before you say it as Gemara." },
      { t: "p", x: "That same chapter has the stone. He was forty and had learned nothing. He stood at the mouth of a well and asked who had hollowed the rock; they told him it was water, falling on it constantly. He answered himself with a kal vachomer from <em>Iyov 14:19</em> — <span class='hebrew'>אֲבָנִים שָׁחֲקוּ מַיִם</span>: if soft water carves hard stone, Torah, which is hard as iron, will surely carve a heart of flesh." },
      { t: "wow", label: "Moshe Rabbeinu couldn't follow the shiur", x: [
        "<em>Menachos 29b</em>. Moshe goes up and finds the Holy One tying crowns to the letters of the Torah. What are they for? <em>There's a man who will exist after many generations, Akiva ben Yosef by name, who will expound heaps and heaps of halachos on every single serif.</em>",
        "Moshe asks to see him, and is placed at the back of the eighth row of the beis midrash. He listens — <span class='hebrew'>וְלֹא הָיָה יוֹדֵעַ מָה הֵן אוֹמְרִים, תָּשַׁשׁ כֹּחוֹ</span>: <strong>he didn't understand what they were saying, and his strength failed him.</strong> Then a student asks Akiva his source, and Akiva answers: <em>halacha l'Moshe miSinai</em> — and Moshe is settled.",
        "Then Moshe asks to see the man's reward, and is shown his flesh being weighed out in the market. <span class='hebrew'>זוֹ תּוֹרָה וְזוֹ שְׂכָרָהּ?</span> — <em>this is Torah and this is its reward?</em> The answer is one word: <span class='hebrew'>שְׁתוֹק</span>. <em>Be silent. So it arose in thought before Me.</em>"
      ] },
      { t: "p", x: "He backed Bar Kochba — the Yerushalmi has him say, on <span class='hebrew'>דָּרַךְ כּוֹכָב מִיַּעֲקֹב</span>, <em>this is the King Messiah</em> — and Rabbi Yochanan ben Torta answered him: <em>Akiva, grass will grow from your jaws and the son of David will still not have come.</em> When the revolt failed, Rome executed him for teaching Torah." },
      { t: "quote",
        he: "הָיָה מַאֲרִיךְ בְּ׳אֶחָד׳ עַד שֶׁיָּצְתָה נִשְׁמָתוֹ בְּ׳אֶחָד׳",
        en: "He prolonged the word <em>echad</em> until his soul departed on <em>echad</em>. A heavenly voice said: fortunate are you, Rabbi Akiva, that your soul left on <em>echad</em>.",
        cite: "Berachos 61b", url: "https://www.sefaria.org/Berakhot.61b" },
      { t: "wow", label: "The one who laughed", x: [
        "<em>Makkos 24b</em>. Walking up to Har HaBayis after the churban, they saw a fox come out of the place of the Holy of Holies. The others wept. <span class='hebrew'>וְרַבִּי עֲקִיבָא מְצַחֵק</span> — <strong>Rabbi Akiva laughed.</strong>",
        "His reasoning: the prophecy of desolation and the prophecy of old men and women sitting again in the streets of Jerusalem are bound together. Now that he had seen the first fulfilled, he knew the second was coming.",
        "They answered him in words that became the standard Jewish response to the worst news: <span class='hebrew'>עֲקִיבָא נִיחַמְתָּנוּ, עֲקִיבָא נִיחַמְתָּנוּ</span> — <em>Akiva, you have comforted us.</em>"
      ] },
      { t: "tradition", label: "Where he is actually buried", x: "The oldest account of his burial is <em>Midrash Mishlei 9</em>, and it doesn't describe Teveria. Eliyahu HaNavi and Rabbi Yehoshua HaGarsi find the prison open and the guards asleep, and carry the body all night <span class='hebrew'>עַד שֶׁהִגִּיעוּ לִטְרַפִּילוֹן שֶׁל קֵסָרִין</span> — to the Tripylon <strong>of Caesarea</strong> — where a cave opens with a bed, a chair, a table and a lamp, and seals behind them. (Rabbi Yehoshua objects that a kohen may not become tamei; Eliyahu answers <span class='hebrew'>אֵין טוּמְאָה בַּצַּדִּיקִים</span>.) The kever in Teveria is a later local tradition — strong, continuous, and not from Chazal." },
      { t: "wow", label: "Of all the days in the year", x: [
        "The official page for this kever records that visitors traditionally come <strong>on erev Yom Kippur, or on Yom Kippur itself</strong>, following the tradition that he was killed on that day.",
        "You're here on <strong>6 Tishrei</strong>. Yom Kippur begins Sunday night."
      ] }
    ]},
    { h: "Rabbi Meir, and the three words on the tzedakah box", b: [
      { t: "wow", label: "That wasn't his name", x: [
        "<em>Eruvin 13b</em>: <span class='hebrew'>לֹא רַבִּי מֵאִיר שְׁמוֹ אֶלָּא רַבִּי נְהוֹרַאי שְׁמוֹ</span> — his name wasn't Meir but <strong>Nehorai</strong>. He is called Meir <span class='hebrew'>שֶׁהוּא מֵאִיר עֵינֵי חֲכָמִים בַּהֲלָכָה</span>, because he lights up the eyes of the sages in halacha.",
        "The same daf explains why the halacha is nonetheless not fixed like him, despite no one in his generation being his equal: <span class='hebrew'>שֶׁלֹּא יָכְלוּ חֲבֵירָיו לַעֲמוֹד עַל סוֹף דַּעְתּוֹ</span> — his colleagues couldn't get to the bottom of his reasoning. He could argue tamei on what was tahor, and tahor on what was tamei, and make both stand.",
        "He was too good to rule like."
      ] },
      { t: "p", x: "He was Rabbi Akiva's student — and, after Elisha ben Avuya left the faith, he went on learning from him. <em>Chagigah 15b</em>: <span class='hebrew'>רַבִּי מֵאִיר רִמּוֹן מָצָא, תּוֹכוֹ אָכַל, קְלִיפָּתוֹ זָרַק</span> — he found a pomegranate, ate the inside and threw away the peel." },
      { t: "p", x: "<em>Sanhedrin 86a</em>: an unattributed Mishnah is Rabbi Meir, an unattributed Tosefta is Rabbi Nechemiah, Sifra is Rabbi Yehuda, Sifri is Rabbi Shimon — <span class='hebrew'>וְכוּלְּהוּ אַלִּיבָּא דְּרַבִּי עֲקִיבָא</span>, <strong>and all of them according to Rabbi Akiva</strong>. The man buried up the hill is the source of the man buried down at the water." },
      { t: "p", x: "His wife was <strong>Beruriah</strong>, daughter of Rabbi Chananya ben Teradyon. When Rabbi Meir davened that local hooligans should die, she stopped him on a single letter of <em>Tehillim 104</em>: <span class='hebrew'>מִי כְּתִיב חוֹטְאִים? חַטָּאִים כְּתִיב</span> — it doesn't say <em>sinners</em>, it says <em>sins</em>. He prayed for them instead, and they did teshuva." },
      { t: "p", x: "The words on the charity box come from <em>Avodah Zarah 18a</em>. Rescuing Beruriah's sister, Rabbi Meir tells the guard: <span class='hebrew'>אֵימָא אֱלָהָא דְּמֵאִיר עֲנֵנִי וּמִתַּצְּלַתְּ</span> — <em>say “God of Meir, answer me,” and you will be saved.</em> Later, on the gallows, the guard says it and can't be hanged. Note the grammar: it is addressed to <strong>God</strong>, not to Rabbi Meir." },
      { t: "wow", label: "Why the kever is down at the water", x: [
        "The standing-burial story is told everywhere here and has no early source. The real source is better, and it explains the location you're standing in.",
        "<em>Yerushalmi Kilayim 9:3</em>: Rabbi Meir was dying in Asia, far from Eretz Yisrael, and instructed — <span class='hebrew'>יְהַבִי עַרְסִי עַל גֵּיף יַמָּא, דִּכְתִיב כִּי הוּא עַל יַמִּים יְסָדָהּ</span> — <em>“place my bier on the edge of the sea, for it is written: He founded it upon the seas.”</em>",
        "The compound sits on the hill above Chamat Teveria, at the lake. That instruction is why."
      ] },
      { t: "tradition", label: "Standing up", x: "The tradition that he is buried upright, ready to rise and greet Mashiach without delay, is told at the site and repeated everywhere. No early text supports it. Enjoy it as tradition." }
    ]},
    { h: "The Rambam, and the codex he trusted", b: [
      { t: "p", x: "Moshe ben Maimon was born in Córdoba — the year is genuinely contested between 1135 and 1138 — and the family chose exile over forced conversion when the Almohads took the city in 1148. Fez, then Eretz Yisrael, then Egypt." },
      { t: "p", x: "He wrote his own travel note. He left the ship at Akko on <strong>3 Sivan</strong>; on <strong>6 Marcheshvan</strong> he entered the place of the Mikdash and davened there; on <strong>9 Marcheshvan</strong> he left Jerusalem for Chevron, to the graves of the Avos. He vowed both days as private yamim tovim for the rest of his life — <em>“filled with prayer and happiness, food and drink.”</em>" },
      { t: "p", x: "In Egypt his brother David drowned on a business voyage, taking the family's money and other people's with him. The Rambam lay prostrate for a year, and wrote afterwards: <em>“Whenever I come across his handwriting or one of his books, my heart goes faint within me.”</em>" },
      { t: "p", x: "He became one of the physicians to <strong>al-Qadi al-Fadil</strong>, Saladin's vizier. His letter to Shmuel ibn Tibbon describes the day: out to Cairo at dawn, back to Fustat in the afternoon, patients in the antechamber until two hours into the night and beyond, eating once in twenty-four hours, and Shabbos given to the community." },
      { t: "p", x: "He wrote the <em>Mishneh Torah</em> — the whole of Jewish law in fourteen books, in Hebrew, with no citations — the <em>Moreh Nevuchim</em>, and the Thirteen Ikkarim, which sit in his commentary to the Mishnah on <em>Sanhedrin</em> perek Chelek. He died on <strong>20 Teves 4965</strong>." },
      { t: "wow", label: "How we know he is here", x: [
        "The best answer isn't the camel. It's a date.",
        "The earliest attestation of the Teveria burial is the Arab historian <strong>al-Qifti, writing in 1225</strong> — roughly twenty years after the Rambam's death, and from outside the Jewish community with no reason to invent it. Hebrew sources follow within a generation.",
        "Most scholars accept it. In fairness: <strong>Armand Kaminka</strong> argued the body never left Egypt."
      ] },
      { t: "tradition", label: "The camel", x: "The tradition is that he asked <span class='hebrew'>אַל נָא תִּקְבְּרוּנִי בְּמִצְרַיִם</span> — don't bury me in Egypt — and that the body was loaded onto a camel, the talmidim following, and buried where the camel stopped. A second tradition has Bedouin who set out to attack the cortège recognising it as the physician who had treated them for nothing, and escorting it instead. Both are legend; the reinterment itself is well attested." },
      { t: "p", x: "Walk in along the path of <strong>fourteen pillars</strong>, seven to a side — one for each of the fourteen books of the Mishneh Torah — under a metal crown, with water running either side. The stone reads <span class='hebrew'>מִמֹּשֶׁה עַד מֹשֶׁה לֹא קָם כְּמֹשֶׁה</span>. That it is on the stone is certain; who first said it, and when, nobody could tell us." },
      { t: "wow", label: "The vowels were made in this city", x: [
        "The <strong>Tiberian vocalization</strong> — the nikud and the te'amim in every Chumash on earth — was devised by the Masoretes of this city, from roughly the seventh and eighth centuries, with the <strong>ben Asher</strong> family as its culmination. It displaced the older Babylonian and Palestinian systems entirely.",
        "Around 920 a scribe here copied the consonantal text of what we call the <strong>Aleppo Codex</strong>, and Aharon ben Moshe ben Asher vocalized and annotated it.",
        "Now read what the Rambam writes in <em>Hilchos Sefer Torah</em>. The scroll he trusted was a codex famous in Egypt, which had spent years in Jerusalem. Why that one? <span class='hebrew'>לְפִי שֶׁהִגִּיהוֹ בֶּן אָשֵׁר</span> — <em>because ben Asher proofread it</em>, and refined it over many years. And then: <span class='hebrew'>וְעָלָיו סָמַכְתִּי בְּסֵפֶר הַתּוֹרָה שֶׁכָּתַבְתִּי</span> — <em>on it I relied for the Sefer Torah I wrote.</em>",
        "So the Rambam is buried in the city of the man whose text he trusted above all others."
      ] },
      { t: "tradition", label: "Be precise about that chain", x: "The Rambam names <em>ben Asher</em> and a codex known in Egypt. He doesn't write “Teveria,” “Aleppo,” or “Keter.” Identifying his codex with the Aleppo Codex is a scholarly conclusion — Umberto Cassuto examined it in 1943, and Moshe Goshen-Gottstein confirmed it. It's now consensus, but it is a conclusion, not his words." }
    ]},
    { h: "From here they will be redeemed", b: [
      { t: "p", x: "Teveria was founded around 20 CE by Herod Antipas and named for the emperor Tiberius. It was built over a graveyard, which is why observant Jews wouldn't live in it." },
      { t: "p", x: "<strong>Bereishis Rabbah 79:6</strong> tells how that changed, and it is the sequel to your lunchtime stop. Rabbi Shimon bar Yochai, out of the cave, is bathing in the hot springs when his son says: <em>Teveria has given us so much benefit, and we aren't purifying it from the dead?</em> He scatters lupines so that the corpses surface and the clean ground is marked. A mocker plants a body to discredit him, and is dealt with." },
      { t: "wow", label: "Noon and four o'clock are one story", x: [
        "The man whose grave you stood at before lunch is the reason there was a Jewish Teveria for the Rambam to be brought to.",
        "Two notes for accuracy, because the smooth version is wrong in both directions: the <em>Bavli</em> in Shabbos 33b tells the purification story but never names Teveria — it says only “a place of doubtful tumah.” It's the <em>midrash</em> that names this city. And the midrash says <strong>thirteen</strong> years in the cave, where the Bavli says twelve. Don't blend them."
      ] },
      { t: "p", x: "<em>Rosh Hashanah 31a–b</em> tracks the Sanhedrin through ten exiles — the Chamber of Hewn Stone, Chanus, Jerusalem, Yavneh, Usha, back to Yavneh, back to Usha, Shefaram, Beis She'arim, Tzippori, and finally here. Rashi notes that the last three were all in the days of Rebbi." },
      { t: "quote",
        he: "וּטְבֶרְיָא עֲמוּקָּה מִכּוּלָּן… אָמַר רַבִּי יוֹחָנָן: וּמִשָּׁם עֲתִידִין לִיגָּאֵל",
        en: "“And Teveria is the deepest of them all… Rabbi Yochanan said: and from there they are destined to be redeemed.”",
        cite: "Rosh Hashanah 31b", url: "https://www.sefaria.org/Rosh_Hashanah.31b" },
      { t: "wow", label: "The day closes where it opened", x: [
        "<span class='hebrew'>עֲמוּקָה</span> — <em>deep</em> — is the name of the valley where you stood at eleven o'clock this morning.",
        "<span class='hebrew'>עֲמוּקָּה מִכּוּלָּן</span> — <em>deepest of them all</em> — is what the Gemara calls the city you're standing in now.",
        "You started the day in a place called Deep and you're ending it in the place Chazal call deepest — and the line about the deepest point is the line about the redemption starting there."
      ] },
      { t: "p", x: "The Rambam wrote it into the law: <span class='hebrew'>וְקַבָּלָה הִיא שֶׁבִּטְבֶרְיָא עֲתִידִין לַחְזֹר תְּחִלָּה וּמִשָּׁם נֶעֱתָקִין לַמִּקְדָּשׁ</span> — <em>it is a received tradition that in Teveria they will first return, and from there they move to the Mikdash.</em> He is buried in the city he wrote that about." },
      { t: "tradition", label: "Not from the Ari", x: "This is often attributed to the Arizal. It's the Rambam's, in <em>Hilchos Sanhedrin</em> 14:12 — some 350 years earlier." }
    ]}
  ],
  more: [
    { s: "The Jerusalem Talmud, and the hot springs in the Mishnah", b: [
      { t: "p", x: "The Sanhedrin settled here around 220 CE, and Teveria became the center of Torah in Eretz Yisrael. The <strong>Talmud Yerushalmi</strong> was put together in this city — probably in the school of Rabbi Yochanan bar Nappacha, drawing also on Caesarea and Tzippori, and written in Galilean Aramaic." },
      { t: "p", x: "Its end was administrative, not sudden: an edict in 415 stripped Gamliel VI of his rank; he died in 425 and the title of Nasi was outlawed; in 426 the patriarchal tax was diverted to the imperial treasury; in 429 the patriarchate was terminated." },
      { t: "p", x: "The hot springs are in the Mishnah. <em>Shabbos 3:4</em> records that the people of Teveria ran a pipe of cold water through a channel of the hot spring on Shabbos — and the chachamim forbade it. <em>Shabbos 40a</em> tracks the bathhouse decrees and ends with the sages giving way: <span class='hebrew'>רָאוּ שֶׁאֵין הַדָּבָר עוֹמֵד לָהֶן, הִתִּירוּ לָהֶן חַמֵּי טְבֶרְיָה</span> — they saw the decree wouldn't hold, and permitted the hot springs of Teveria." },
      { t: "p", x: "Teveria has counted among the Four Holy Cities since the eighteenth century — not from antiquity." }
    ]},
    { s: "The twenty-four thousand — and the date everyone gets wrong", b: [
      { t: "p", x: "<em>Yevamos 62b</em>: <span class='hebrew'>שְׁנֵים עָשָׂר אָלֶף זוּגִים תַּלְמִידִים הָיוּ לוֹ לְרַבִּי עֲקִיבָא מִגְּבָת עַד אַנְטִיפְרַס</span> — twelve thousand <strong>pairs</strong> of students, spread from Gevas to Antipatris. They all died in one period, <span class='hebrew'>מִפְּנֵי שֶׁלֹּא נָהֲגוּ כָּבוֹד זֶה לָזֶה</span>, because they didn't treat one another with respect." },
      { t: "wow", label: "The Gemara doesn't say Lag BaOmer", x: [
        "Everyone knows the dying stopped on Lag BaOmer. The Gemara says something else: <span class='hebrew'>מִפֶּסַח וְעַד עֲצֶרֶת</span> — <strong>from Pesach until Shavuos.</strong> And Rav Nachman names the cause: <span class='hebrew'>אַסְכָּרָה</span>, askara.",
        "The Lag BaOmer cut-off is post-Talmudic. It's a real and ancient minhag — it is simply not what this daf says. Worth knowing which is which before you say it into a microphone."
      ] },
      { t: "p", x: "He was left with five students, and the Torah of all of them is his. The Gemara in <em>Sanhedrin</em> traces the unattributed Mishnah, Tosefta, Sifra and Sifri to four of them — and then adds that all four are <em>aliba d'Rabbi Akiva</em>." }
    ]},
    { s: "Who else is in the Rambam's compound", b: [
      { t: "p", x: "Rabban Yochanan ben Zakkai — the least of Hillel's eighty, and therefore the bookend to your first stop of the day. Rabbi Eliezer ben Hyrcanus. Rabbi Ami and Rabbi Assi. The Shelah HaKadosh. The Rambam's father, Rabbi Maimon. And his grandson, Rabbi David HaNagid." },
      { t: "wow", label: "The eighty, closed", x: [
        "This morning you stood over the <strong>greatest</strong> of Hillel's eighty students, at Amuka.",
        "This afternoon you're standing a few meters from the <strong>least</strong> of them, in the Rambam's compound.",
        "The two names the Talmud bothered to record out of eighty, at either end of one day's driving."
      ] }
    ]}
  ],
  onsite: [
    "Three separate sites: Rabbi Akiva high on the western ridge (end of Hagvura St, upper Teveria), the Rambam in the center near the lakefront, Rabbi Meir low and south above Chamat Teveria.",
    "Rabbi Akiva is the climb — and it is the hottest hour of the hottest stop. Water first.",
    "The Ramchal's kever is beside Rabbi Akiva's.",
    "Rabbi Meir's compound has two shuls, Ashkenazi and Sephardi, and posted hours; the Rambam and Rabbi Akiva are open around the clock.",
    "If Mincha wasn't davened at Meron, this is where it happens. Mincha ketana is 16:08 and you arrive at 16:15."
  ]
}
],

/* ============================================================ */
sages: [
  { name: "Rabbi Yonatan ben Uziel", from: 10, to: 60, approx: 1, he: "רַבִּי יוֹנָתָן בֶּן עוּזִּיאֵל", years: "1st c. CE", stop: "amuka", accent: "var(--amuka)",
    line: "Greatest of Hillel's eighty students. Translated the Prophets into Aramaic and, the Talmud says, shook the Land four hundred parsah doing it." },
  { name: "Rabbi Akiva", from: 50, to: 135, approx: 0, he: "רַבִּי עֲקִיבָא", years: "c. 50–135", stop: "tiberias", accent: "var(--tiberias)",
    line: "Began learning at forty. Twenty-four thousand students. Executed by Rome for teaching Torah, reciting Shema." },
  { name: "Rabbi Meir Baal HaNess", from: 100, to: 175, approx: 1, he: "רַבִּי מֵאִיר בַּעַל הַנֵּס", years: "2nd c. CE", stop: "tiberias", accent: "var(--tiberias)",
    line: "Akiva's student, and Elisha ben Avuya's. Married to Beruriah. His name is on the tzedakah box." },
  { name: "Rabbi Shimon bar Yochai", from: 100, to: 170, approx: 1, he: "רַבִּי שִׁמְעוֹן בַּר יוֹחַאי", years: "2nd c. CE", stop: "meron", accent: "var(--meron)",
    line: "Thirteen years in a cave under a Roman death sentence. Traditionally the author of the Zohar." },
  { name: "Rabbi Elazar b. Rabbi Shimon", from: 130, to: 190, approx: 1, he: "רַבִּי אֶלְעָזָר בְּרַבִּי שִׁמְעוֹן", years: "2nd c. CE", stop: "meron", accent: "var(--meron)",
    line: "In the cave with his father for all thirteen years, and buried beside him." },
  { name: "The Rambam", from: 1138, to: 1204, approx: 0, he: "רַבֵּנוּ מֹשֶׁה בֶּן מַיְמוֹן", years: "1138–1204", stop: "tiberias", accent: "var(--tiberias)",
    line: "Physician to Saladin's court. Codified the whole of Jewish law in fourteen books. Died in Egypt, brought here." },
  { name: "Rabbi Yosef Karo", from: 1488, to: 1575, approx: 0, he: "רַבִּי יוֹסֵף קָארוֹ", years: "1488–1575", stop: "tzfat", accent: "var(--tzfat)",
    line: "Wrote the Shulchan Aruch — and a fifty-year diary of visits from an angel who called itself the Mishnah." },
  { name: "Rabbi Shlomo Alkabetz", from: 1500, to: 1584, approx: 1, he: "רַבִּי שְׁלֹמֹה אַלְקַבֵּץ", years: "c. 1500–1584", stop: "tzfat", accent: "var(--tzfat)",
    line: "Wrote Lecha Dodi. His name is in the acrostic. Teacher and brother-in-law of the Ramak." },
  { name: "The Ramak", from: 1522, to: 1570, approx: 0, he: "רַבִּי מֹשֶׁה קוֹרְדוֹבֵירוֹ", years: "1522–1570", stop: "tzfat", accent: "var(--tzfat)",
    line: "Finished Pardes Rimonim by twenty-seven. Led Tzfat's Kabbalah academy for twenty years. Buried beside the Ari." },
  { name: "The Arizal", from: 1534, to: 1572, approx: 0, he: "רַבִּי יִצְחָק לוּרְיָא", years: "1534–1572", stop: "tzfat", accent: "var(--tzfat)",
    line: "Two years of teaching in Tzfat reorganized Jewish mysticism permanently. Died at thirty-eight, having written almost nothing." }
],

spine: [
  { year: "c. 20 CE", h: "Hillel's beis midrash", p: "Eighty students. The greatest of them is Yonatan ben Uziel — your first stop.", stop: "1", accent: "var(--amuka)" },
  { year: "70 CE", h: "The Second Temple is destroyed", p: "Rabban Yochanan ben Zakkai — the <em>least</em> of Hillel's eighty — gets out of Jerusalem and rebuilds at Yavneh." },
  { year: "c. 135", h: "Bar Kochba falls; Rabbi Akiva is killed", p: "Rome executes him for teaching Torah. Tradition places it on Yom Kippur.", stop: "4", accent: "var(--tiberias)" },
  { year: "c. 160", h: "Rashbi comes out of the cave", p: "Thirteen years hiding from a Roman death sentence, and then the old man with the two myrtle branches.", stop: "2", accent: "var(--meron)" },
  { year: "c. 200", h: "The Mishnah is redacted", p: "Rabbi Yehuda HaNasi closes the oral law into writing." },
  { year: "c. 220", h: "The Sanhedrin reaches Teveria", p: "The tenth and final station of its exile — “and from there they are destined to be redeemed.”", stop: "4", accent: "var(--tiberias)" },
  { year: "c. 400", h: "The Jerusalem Talmud is redacted", p: "In Teveria." },
  { year: "c. 930", h: "The vowels are invented", p: "The Masoretes of Teveria create the nikud and te'amim. Aharon ben Asher points the Aleppo Codex.", stop: "4", accent: "var(--tiberias)" },
  { year: "1204", h: "The Rambam dies in Egypt", p: "By tradition his body is brought to Teveria.", stop: "4", accent: "var(--tiberias)" },
  { year: "1210", h: "First testimony of the grave at Amuka", p: "A traveler finds it under “a great tree.” Two rival traditions put it elsewhere.", stop: "1", accent: "var(--amuka)" },
  { year: "1492", h: "Spain expels its Jews", p: "The refugees who reach the Galilee build what comes next." },
  { year: "1538", h: "Semichah is renewed in Tzfat", p: "Twenty-five rabbis ordain Yaakov Beirav, aiming at a restored Sanhedrin. Jerusalem stops it.", stop: "3", accent: "var(--tzfat)" },
  { year: "c. 1540", h: "Lecha Dodi is written", p: "Shlomo Alkabetz, in Tzfat. His name is in the acrostic.", stop: "3", accent: "var(--tzfat)" },
  { year: "1570", h: "The Ramak dies", p: "Two years before the Ari, whose grave is now beside his.", stop: "3", accent: "var(--tzfat)" },
  { year: "1572", h: "The Arizal dies at thirty-eight", p: "After roughly two years of teaching. Almost nothing written in his own hand.", stop: "3", accent: "var(--tzfat)" },
  { year: "1577", h: "The first printing press in Eretz Yisrael", p: "In Tzfat. The first book: a commentary on Esther by an eighteen-year-old.", stop: "3", accent: "var(--tzfat)" },
  { year: "1837", h: "The earthquake", p: "Tzfat falls down its own slope, ten minutes before sunset." },
  { year: "2026", h: "6 Tishrei 5787", p: "You, on a bus, four days before Yom Kippur." }
],

/* ============================================================ */
tefillosIntro: "There's a right way to think about what you're doing at a grave, and the Mishnah Berurah says it in one sentence. Everything below sits under it.",

tefillos: [
  { h: "The rule that governs the whole day",
    sub: "Mishnah Berurah 581:27 — on the custom of going to the kevarim",
    he: "אַךְ אַל יָשִׂים מְגַמָּתוֹ נֶגֶד הַמֵּתִים, אַךְ יְבַקֵּשׁ מֵהַשֵּׁם יִתְבָּרַךְ שֶׁיִּתֵּן עָלָיו רַחֲמִים בִּזְכוּת הַצַּדִּיקִים שׁוֹכְנֵי עָפָר",
    tl: "Ach al yasim megamaso neged hameisim, ach yevakesh meiHashem yisbarach sheyiten alav rachamim bizchus hatzaddikim shochnei afar.",
    en: "“But let him not direct his aim toward the dead. Rather, let him ask Hashem — blessed is He — to have mercy on him <strong>in the merit of the tzaddikim who dwell in the dust.</strong>” The same passage adds two practical instructions: give tzedakah before you begin, and do not visit the same grave twice in one day." },

  { h: "Where the custom comes from",
    sub: "Sotah 34b — Kalev breaks from the spies",
    he: "מְלַמֵּד שֶׁפֵּירַשׁ כָּלֵב מֵעֲצַת מְרַגְּלִים, וְהָלַךְ וְנִשְׁתַּטַּח עַל קִבְרֵי אָבוֹת. אָמַר לָהֶן: אֲבוֹתַי! בִּקְּשׁוּ עָלַי רַחֲמִים",
    tl: "Halach v'nishtateiach al kivrei avos. Amar lahen: avosai! Bakshu alai rachamim.",
    en: "Kalev broke away from the counsel of the spies, went and prostrated himself on the graves of the Avos, and said: <em>my fathers, ask mercy for me.</em> Note the wording — he asks them to <strong>ask</strong>, which is exactly the distinction the Mishnah Berurah draws." },

  { h: "And the line people worry about",
    sub: "Devarim 18:11 — what is actually forbidden",
    he: "וְחֹבֵר חָבֶר וְשֹׁאֵל אוֹב וְיִדְּעֹנִי וְדֹרֵשׁ אֶל־הַמֵּתִים",
    en: "The prohibition is necromancy — summoning and interrogating the dead. Davening at a kever is not that. You are not asking the tzaddik to answer you; you are asking Hashem, standing somewhere a tzaddik is buried, in his merit." },

  { h: "Why this week, specifically",
    sub: "Rambam, Hilchos Teshuva 2:6",
    he: "אַף עַל פִּי שֶׁהַתְּשׁוּבָה וְהַצְּעָקָה יָפָה לְעוֹלָם, בַּעֲשָׂרָה הַיָּמִים שֶׁבֵּין רֹאשׁ הַשָּׁנָה וְיוֹם הַכִּפּוּרִים הִיא יָפָה בְּיוֹתֵר וּמִתְקַבֶּלֶת הִיא מִיָּד",
    tl: "…hi yafah b'yoser umiskabeles hi miyad.",
    en: "“Although teshuva and crying out are always good — in the ten days between Rosh Hashanah and Yom Kippur they are more beautiful, and are accepted <strong>immediately</strong>.” Rosh Hashanah 18a applies <span class='hebrew'>דִּרְשׁוּ ה׳ בְּהִמָּצְאוֹ</span> — <em>seek Hashem where He is found</em> — to exactly these ten days." },

  { h: "At Rabbi Meir Baal HaNess",
    sub: "The words that go with the tzedakah — Avodah Zarah 18a",
    he: "אֱלָהָא דְמֵאִיר עֲנֵנִי",
    tl: "Elaka d'Meir aneini. (Customarily said three times.)",
    en: "“God of Meir, answer me.” From the Talmudic account of the rescue of Beruriah's sister, where a guard was told to say these words and was saved. Note the grammar — it is addressed to <strong>God</strong>, not to Rabbi Meir. Give the tzedakah with it." },

  { h: "In davening, all ten days",
    sub: "Shulchan Aruch O.C. 582 and 602",
    he: "הַמֶּלֶךְ הַקָּדוֹשׁ · הַמֶּלֶךְ הַמִּשְׁפָּט",
    en: "Say <em>HaMelech HaKadosh</em> and <em>HaMelech HaMishpat</em>. If you said <em>HaKel HaKadosh</em> and corrected yourself within <em>toch k'dei dibbur</em>, you need not repeat; if you left out <em>Zochreinu</em> or <em>Mi Chamocha</em>, you do not repeat at all. Avinu Malkeinu morning and evening. Useful to know for a minyan on a bus." }
],

/* ============================================================ */
fieldIntro: "What the official sources actually say — and, just as usefully, what they don't.",

field: [
  { h: "Dress", p: "No official dress code is published by the operators of any of the four sites — not for Amuka, Meron, the Rambam or Rabbi Akiva. Frum norms obviously apply and skirts are available at the larger sites. This guide isn't going to invent a rule that no source states." },
  { h: "The hard terrain", ul: [
    "<strong>Tzfat Old Cemetery</strong> — steep rocky slope, listed in the heritage register as not wheelchair accessible.",
    "<strong>The Ari's mikveh</strong> — dozens of steps down, at least a hundred back up, near-freezing spring water. Men only in practice, by a posted sign citing the rabbis of Tzfat.",
    "<strong>Rabbi Akiva</strong> — up the hill in Kiryat Moshe, in the hottest part of the hottest stop.",
    "<strong>Amuka and Meron</strong> — both have organized parking and accessible routes."
  ] },
  { h: "Hours, as officially published", ul: [
    "<strong>Amuka</strong> — daylight only. <span class='hebrew'>אין תאורה במתחם</span>: no lighting in the compound, don't come after dark.",
    "<strong>Meron</strong> — open 24 hours, including Shabbos and yom tov.",
    "<strong>Rambam</strong> — open 24 hours, including Shabbos and yom tov.",
    "<strong>Rabbi Akiva</strong> — open 24 hours.",
    "<strong>Rabbi Meir Baal HaNess</strong> — posted hours, and the site is split into a Sephardi and an Ashkenazi compound. Confirm on 1-800-300-508 which set applies."
  ] },
  { h: "Meron after 2021", p: "Forty-five people were killed in the Lag BaOmer crowd crush in April 2021, and a state commission published its final report on 6 March 2024. Every restriction that followed — tickets, capacity caps, a four-hour limit — attaches to <strong>Lag BaOmer</strong>. Nothing in the sources applies them to an ordinary weekday, and the official page lists plain 24-hour opening." },
  { h: "Heat and altitude", p: "Meron is 1,204 m. Tiberias is about 200 m below sea level. That's a drop of roughly 1,400 m between noon and four o'clock. Tzfat averages 28.5 °C in September; Tiberias averages 35.9 °C. Carry water from Amuka, and top up in Tzfat." },
  { h: "Lunch — verify before you drive", p: "<strong>Mandis, Tzfat.</strong> Hechsher confirmed by two independent directories: Badatz Eidah HaChareidis, meat. The address isn't confirmed — the itinerary says Jerusalem 33, the Tzfat restaurant registry says Jerusalem 29 behind Bank Leumi, another listing says 35, and the operator publishes no address at all. Hours aren't confirmed either. Call first." },
  { h: "Kohanim", p: "The Tzfat Old Cemetery is a hillside with unmarked and displaced graves — a survey found roughly 3,000 stones no longer in their original places. No operator publishes a ruling. Ask your own rav before the day, and note that the Ari Sephardi shul above the cemetery gives an overlook." },
  { h: "One thing the Mishnah Berurah asks", p: "Give tzedakah before you daven at each kever. It's in the same passage that frames the whole practice." }
],

/* ============================================================ */
sourcesIntro: "Every substantive claim on this site was checked against a source during research, and claims that couldn't be verified were either cut or marked on the page as tradition. Where sources disagree — the Ari's death date, the 1837 toll, Mei Merom, Tzfat's population — the guide says so rather than picking the tidier version.",

sources: [
  { t: "Sukkah 28a — Hillel's eighty students, the burning birds", url: "https://www.sefaria.org/Sukkah.28a" },
  { t: "Bava Batra 133b–134a — the inheritance, and the baraita", url: "https://www.sefaria.org/Bava_Batra.133b" },
  { t: "Megillah 3a — the Targum, the earthquake, the bas kol", url: "https://www.sefaria.org/Megillah.3a" },
  { t: "Megillah 6a — Rakkat is Teveria; why it is called Kinneret", url: "https://www.sefaria.org/Megillah.6a" },
  { t: "Shabbos 33b — Rashbi in the cave, and the purification of Teveria", url: "https://www.sefaria.org/Shabbat.33b" },
  { t: "Rosh Hashanah 31b — the Sanhedrin's ten exiles", url: "https://www.sefaria.org/Rosh_Hashanah.31b" },
  { t: "Rosh Hashanah 18a — the ten days when He is found", url: "https://www.sefaria.org/Rosh_Hashanah.18a" },
  { t: "Sotah 34b — Kalev at the graves of the Avos", url: "https://www.sefaria.org/Sotah.34b" },
  { t: "Bava Kamma 81b — the Kinneret in Naftali's portion", url: "https://www.sefaria.org/Bava_Kamma.81b" },
  { t: "Yehoshua 19:32–39 — Naftali's nineteen fortified towns", url: "https://www.sefaria.org/Joshua.19.32-39" },
  { t: "Yehoshua 11 — the Waters of Merom and Chatzor", url: "https://www.sefaria.org/Joshua.11" },
  { t: "Rambam, Hilchos Teshuva 2:6 — the ten days", url: "https://www.sefaria.org/Mishneh_Torah,_Repentance.2.6" },
  { t: "Rambam, Hilchos Sanhedrin 4:11 and 14:12 — semichah, and Teveria", url: "https://www.sefaria.org/Mishneh_Torah,_The_Sanhedrin_and_the_Penalties_within_their_Jurisdiction.4.11" },
  { t: "Shulchan Aruch O.C. 581:4 with Mishnah Berurah 581:27", url: "https://www.sefaria.org/Mishnah_Berurah.581.27" },
  { t: "Jerusalem Talmud, Rosh Hashanah 2:1 — Tzfat's beacon", url: "https://www.sefaria.org/Jerusalem_Talmud_Rosh_Hashanah.2.1" },
  { t: "Amuka — official site page, National Center for Holy Places", url: "https://holy.org.il/epicenter/%d7%99%d7%95%d7%a0%d7%aa%d7%9f-%d7%91%d7%9f-%d7%a2%d7%95%d7%96%d7%99%d7%90%d7%9c-%d7%a8%d7%91%d7%99/" },
  { t: "Rashbi, Meron — official site page", url: "https://holy.org.il/epicenter/%D7%A8%D7%A9%D7%91%D7%99/" },
  { t: "The Rambam, Teveria — official site page", url: "https://holy.org.il/epicenter/%D7%94%D7%A8%D7%9E%D7%91%D7%9D/" },
  { t: "Rabbi Akiva, Teveria — official site page (erev Yom Kippur custom)", url: "https://holy.org.il/epicenter/%D7%A2%D7%A7%D7%99%D7%91%D7%90-%D7%A8%D7%91%D7%99/" },
  { t: "Chabad — is it permitted to ask a deceased tzaddik to pray for me?", url: "https://www.chabad.org/library/article_cdo/aid/562222/jewish/Is-It-OK-to-Ask-a-Deceased-Tzaddik-to-Pray-for-Me.htm" },
  { t: "Chabad — why there's no entry for 26 Sivan (the Amuka yahrzeit)", url: "https://www.chabad.org/library/article_cdo/aid/6917668/jewish/Why-No-Entry-for-26th-of-Sivan.htm" },
  { t: "Isaac Luria — Encyclopaedia Judaica", url: "https://www.encyclopedia.com/people/philosophy-and-religion/judaism-biographies/isaac-ben-solomon-luria" },
  { t: "Moses Cordovero — Encyclopaedia Judaica", url: "https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/cordovero-moses-ben-jacob" },
  { t: "Lecha Dodi and the kabbalistic background to Kabbalat Shabbat — Hartman", url: "https://www.hartman.org.il/lcha-dodi-and-the-kabbalist-background-to-kabbalat-shabbat/" },
  { t: "The 1538 attempt to re-establish the Sanhedrin", url: "https://www.thesanhedrin.org/en/index.php/The_Mahari_Beirav_and_Beis_Yosef's_attempt_to_re-establish_a_Sanhedrin_in_1538" },
  { t: "Targum Pseudo-Jonathan — the misattribution", url: "https://en.wikipedia.org/wiki/Targum_Pseudo-Jonathan" },
  { t: "The 1837 Galilee earthquake — Dead Sea quake catalogue", url: "https://www.deadseaquake.info/EarthquakeCatalogOfTheDeadSea/1837CESafedQuake.html" },
  { t: "The 1577 Tzfat press and Lekach Tov", url: "https://cojs.org/1577-first-printing-press-middle-east-safed/" },
  { t: "Sukkah 45b — “I can exempt the whole world from judgment”", url: "https://www.sefaria.org/Sukkah.45b" },
  { t: "Bava Metzia 84b — the serpent at the cave, erev Yom Kippur", url: "https://www.sefaria.org/Bava_Metzia.84b" },
  { t: "Yerushalmi Sheviis 9:1 — the cave, the thirteen years, the bird-catcher", url: "https://www.sefaria.org/Jerusalem_Talmud_Sheviit.9.1" },
  { t: "Bereishis Rabbah 79:6 — the Eretz Yisrael version of the cave", url: "https://www.sefaria.org/Bereshit_Rabbah.79.6" },
  { t: "Vayikra Rabbah 21:8 — thirteen years with Rabbi Akiva", url: "https://www.sefaria.org/Vayikra_Rabbah.21.8" },
  { t: "Pesachim 112a — more than the calf wants to nurse", url: "https://www.sefaria.org/Pesachim.112a" },
  { t: "Gittin 67a — “grinds much and brings out little”", url: "https://www.sefaria.org/Gittin.67a" },
  { t: "Zohar, Idra Rabba — ten entered, seven came out", url: "https://www.sefaria.org/Zohar,_Idra_Rabba" },
  { t: "Zohar, Idra Zuta — his last day, and no date anywhere in it", url: "https://www.sefaria.org/Zohar,_Idra_Zuta" },
  { t: "Sha'ar HaGilgulim 37 — Rabbi Yitzchak Nafcha isn't at Meron", url: "https://www.sefaria.org/Sha'ar_HaGilgulim.37" },
  { t: "Shem HaGedolim — the Chida on the Zohar's authorship", url: "https://www.sefaria.org/Shem_HaGedolim,_Maarekhet_Sefarim,_Letter_Zayin.8" },
  { t: "Mitpachas Sefarim 1 — Rabbi Yaakov Emden, in his own words", url: "https://www.sefaria.org/Mitpachat_Sefarim.1" },
  { t: "Benjamin of Tudela's Itinerary — the Hillel and Shammai cave", url: "https://www.gutenberg.org/files/14981/14981-h/14981-h.htm" },
  { t: "Seforim Blog — the printing error behind the Lag BaOmer yahrzeit", url: "https://seforimblog.com/2011/05/printing-mistake-and-mysterious-origins/" },
  { t: "Zvi Ron, “The Origin of the Custom of Chai Rotl” (Ḥakirah 21)", url: "https://hakirah.org/vol21Ron.pdf" },
  { t: "Meron disaster — State Commission of Inquiry final report", url: "https://www.gov.il/he/pages/state-commission-of-inquiry-mount-meron_reports_06032024" },
  { t: "Menachos 29b — Moshe in Rabbi Akiva's beis midrash", url: "https://www.sefaria.org/Menachot.29b" },
  { t: "Makkos 24b — the fox at Har HaBayis", url: "https://www.sefaria.org/Makkot.24b" },
  { t: "Berachos 61b — Rabbi Akiva's last Shema", url: "https://www.sefaria.org/Berakhot.61b" },
  { t: "Yevamos 62b — the twelve thousand pairs, Pesach to Shavuos", url: "https://www.sefaria.org/Yevamot.62b" },
  { t: "Kesubos 62b–63a — “what is mine and yours is hers”", url: "https://www.sefaria.org/Ketubot.62b" },
  { t: "Avos d'Rabbi Nassan 6 — the stone, the water, and the name Rachel", url: "https://www.sefaria.org/Avot_D'Rabbi_Natan.6" },
  { t: "Midrash Mishlei 9 — Rabbi Akiva's burial, at Caesarea", url: "https://www.sefaria.org/Midrash_Mishlei.9" },
  { t: "Eruvin 13b — his name was Nehorai", url: "https://www.sefaria.org/Eruvin.13b" },
  { t: "Chagigah 15b — the pomegranate", url: "https://www.sefaria.org/Chagigah.15b" },
  { t: "Avodah Zarah 18a–18b — “Elaka d'Meir aneini”", url: "https://www.sefaria.org/Avodah_Zarah.18a" },
  { t: "Berachos 10a — Beruriah on chata'im, not chot'im", url: "https://www.sefaria.org/Berakhot.10a" },
  { t: "Yerushalmi Kilayim 9:3 — “place my bier at the edge of the sea”", url: "https://www.sefaria.org/Jerusalem_Talmud_Kilayim.9.3" },
  { t: "Sanhedrin 86a — stam Mishnah is Rabbi Meir, and all of it from Rabbi Akiva", url: "https://www.sefaria.org/Sanhedrin.86a" },
  { t: "Megillah 5b — “whose sea is its wall”", url: "https://www.sefaria.org/Megillah.5b" },
  { t: "Bereishis Rabbah 79:6 — Rashbi purifies Teveria", url: "https://www.sefaria.org/Bereshit_Rabbah.79.6" },
  { t: "Rambam, Hilchos Sefer Torah 8:4 — the codex ben Asher proofread", url: "https://www.sefaria.org/Mishneh_Torah,_Tefillin,_Mezuzah_and_the_Torah_Scroll.8.4" },
  { t: "Mishnah Shabbos 3:4 and Shabbos 40a — the hot springs of Teveria", url: "https://www.sefaria.org/Mishnah_Shabbat.3.4" },
  { t: "Zmanim for the day — Hebcal, calculated for Tzfat", url: "https://www.hebcal.com/zmanim?geo=pos&latitude=32.9646&longitude=35.496&date=2026-09-17" }
],

colophon: [
  "Built for a one-day trip on 6 Tishrei 5787. Times are the organiser's; zmanim are calculated for Tzfat and vary by under two minutes across the four stops.",
  "This guide separates three things on purpose: what a primary text says, what is received tradition, and what is a modern claim with no source behind it. Blocks marked with ≈ are tradition. Nothing here is a psak — ask your rav.",
  "Works offline once loaded. Add it to your home screen before the bus leaves reception."
]

};
