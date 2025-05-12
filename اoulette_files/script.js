let language = navigator.language;
let dashIndex = language.indexOf("-");
if (dashIndex >= 0) {
  language = language.substring(0, dashIndex);
}

switch (language) {
  case "ar":
    document.getElementById("lang_yes").innerText = "نعم ";
    break;
  case "en":
    document.getElementById("lang_yes").innerText = "Yes";
}
switch (language) {
  case "ar":
    document.getElementById("lang_no").innerText = "لا";
    break;
  case "en":
    document.getElementById("lang_no").innerText = "No";
}
switch (language) {
  case "ar":
    document.getElementById("lang_welcome").innerText = "مكافأة ترحيبية";
    break;
  case "en":
    document.getElementById("lang_welcome").innerText = "WELCOME BONUS";
}
switch (language) {
  case "ar":
    document.getElementById("lang_upto").innerText = "حتى";
    break;
  case "en":
    document.getElementById("lang_upto").innerText = "up to ";
}
switch (language) {
  case "ar":
    document.getElementById("lang_registration").innerText = "التسجيل السهل";
    break;
  case "en":
    document.getElementById("lang_registration").innerText =
      "Easy registration";
}
switch (language) {
  case "ar":
    document.getElementById("lang_simple").innerText =
      "بسيطة مثل واحد، اثنان، ثلاثة";
    break;
  case "en":
    document.getElementById("lang_simple").innerText =
      "As simple as one, two, three";
}
switch (language) {
  case "ar":
    document.getElementById("lang_secure").innerText = "إيداع آمن";
    break;
  case "en":
    document.getElementById("lang_secure").innerText = "Secure deposit";
}
switch (language) {
  case "ar":
    document.getElementById("lang_safest").innerText =
      "الطريقة الأكثر أمانًا للدفع";
    break;
  case "en":
    document.getElementById("lang_safest").innerText = "The safest way to pay";
}
switch (language) {
  case "ar":
    document.getElementById("lang_fastest").innerText = "أسرع عمليات الدفع";
    break;
  case "en":
    document.getElementById("lang_fastest").innerText = "Fastest payouts";
}
switch (language) {
  case "ar":
    document.getElementById("lang_withdraw").innerText = "السحب حتى 24 ساعة";
    break;
  case "en":
    document.getElementById("lang_withdraw").innerText =
      "Withdrawal up to 24 hours";
}
switch (language) {
  case "ar":
    document.getElementById("lang_text-info").innerText =
      "أعجب 1537 شخصًا بهذا";
    break;
  case "en":
    document.getElementById("lang_text-info").innerText =
      "1537 people like this";
}
switch (language) {
  case "ar":
    document.getElementById("lang_first-comment").innerText =
      "لم أعتقد مطلقًا أن الكازينوهات على الإنترنت يمكن أن تكون بهذه الواقعية حتى وجدت كازينو Jawhara Bet. الرسومات وطريقة اللعب واقعية للغاية لدرجة أنني شعرت أنني كنت جالسًا في كازينو حقيقي. الألعاب المصغرة ممتعة بشكل لا يصدق ، والجوائز مثيرة بنفس القدر!";
    break;
  case "en":
    document.getElementById("lang_first-comment").innerText =
      "I never thought online casinos could be this realistic until I found Jawhara Bet Casino. The graphics and gameplay are so realistic, I felt like I was sitting in a real casino. The mini-games are incredibly fun, and the prizes are just as exciting!";
}
switch (language) {
  case "ar":
    document.getElementById("lang_second-comment").innerText =
      "لقد جربت العديد من الكازينوهات على الإنترنت ، لكن كازينو Jawhara Bet يبرز من بين الحشود. الألعاب المصغرة مبتكرة وتسبب الإدمان ، مما يجعلني منشغلاً لساعات. تجعل الرسومات عالية الجودة واللعب السلس متعة اللعب. لقد وضع كازينو Jawhara Bet بالفعل سقفًا مرتفعًا.";
    break;
  case "en":
    document.getElementById("lang_second-comment").innerText =
      "I've tried many online casinos, but Jawhara Bet Casino stands out from the crowd. The mini-games are innovative and addictive, keeping me engaged for hours. The high-quality graphics and smooth gameplay make playing a pleasure. Jawhara Bet Casino has truly set the bar high.";
}
switch (language) {
  case "ar":
    document.getElementById("lang_third-comment").innerText =
      "كازينو Jawhara Bet هو وجهة المقامرة الافتراضية الخاصة بي. الألعاب المصغرة متنوعة ، كل منها يقدم تحديًا فريدًا وإثارة. تخلق واقعية بيئة الكازينو ، جنبًا إلى جنب مع فرصة الفوز بجوائز رائعة ، تجربة لعب لا تقبل المنافسة. كازينو Jawhara Bet هو الفائز في كتابي!";

    break;
  case "en":
    document.getElementById("lang_third-comment").innerText =
      "Jawhara Bet Casino is my virtual gambling destination. The mini-games are diverse, each offering a unique challenge and excitement. The realism of the casino environment, combined with the opportunity to win great prizes, creates an unbeatable gaming experience. Jawhara Bet Casino is a winner in my book!";
}
switch (language) {
  case "ar":
    document.getElementById("lang_reward").innerText = "اذهب إلى المكافأة";
    break;
  case "en":
    document.getElementById("lang_reward").innerText = "Go to reward";
}
switch (language) {
  case "ar":
    document.getElementById("lang_rewards").innerText = "اذهب إلى المكافأة";
    break;
  case "en":
    document.getElementById("lang_rewards").innerText = "Go to reward";
}
switch (language) {
  case "ar":
    document.getElementById("lang_like").innerText = "تعليق";
    break;
  case "en":
    document.getElementById("lang_like").innerText = "comment";
}
switch (language) {
  case "ar":
    document.getElementById("lang_comment").innerText = "يحب";
    break;
  case "en":
    document.getElementById("lang_comment").innerText = "like";
}
switch (language) {
  case "ar":
    document.getElementById("lang_like_1").innerText = "تعليق";
    break;
  case "en":
    document.getElementById("lang_like_1").innerText = "comment";
}
switch (language) {
  case "ar":
    document.getElementById("lang_comment_1").innerText = "يحب";
    break;
  case "en":
    document.getElementById("lang_comment_1").innerText = "like";
}
switch (language) {
  case "ar":
    document.getElementById("lang_like_2").innerText = "تعليق";
    break;
  case "en":
    document.getElementById("lang_like_2").innerText = "comment";
}
switch (language) {
  case "ar":
    document.getElementById("lang_comment_2").innerText = "يحب";
    break;
  case "en":
    document.getElementById("lang_comment_2").innerText = "like";
}
