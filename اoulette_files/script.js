let language = navigator.language;
let dashIndex = language.indexOf("-");
if (dashIndex >= 0) {
  language = language.substring(0, dashIndex);
}
// let rtl = document.getElementById("revert");

switch (language) {
  case "ar":
    // var x = document.getElementsById("main_girl");
    // x.src = "./reg_arabic.png";
    document.getElementById("main_girl").src =
      "../اoulette_files/reg_arabic.png";
    break;
}

switch (language) {
  case "ar":
    document.getElementById("lang_yes").innerText = "نعم ";
    document.getElementById("lang_yes").style.fontFamily = "Tajawal";
    document.querySelector(".body-wrap").style.cssText =
      " transform: scaleX(-1);";
    document.querySelector(".bottom .testimonials .text-info").style.cssText =
      " transform: scaleX(-1);";
    document.querySelector(".bottom .testimonials .middle span").style.cssText =
      "transform: scaleX(-1)";
    document.querySelector(".header").style.cssText = " transform: scaleX(-1);";
    document.querySelector(".footer__items").style.cssText =
      " transform: scaleX(-1);";
    document.querySelector("#reverse_0").style.cssText =
      " transform: scaleX(-1);";
    document.querySelector("#reverse").style.cssText =
      " transform: scaleX(-1);";
    document.querySelector(".footer__aged").style.cssText =
      " transform: scaleX(-1);";
    document.querySelector(".main__text_1 span.color").style.cssText =
      " display: inline-block;";
    // document.querySelector(".bottom .testimonials .text-info").style.cssText =
    //   "justify-content: space-between;";
    // document.querySelector(".bottom .testimonials .text-info").style.gap =
    //   "5em";

    break;
  case "en":
    document.getElementById("lang_yes").innerText = "Yes";
    document.getElementById("lang_yes").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_no").innerText = "لا";
    document.getElementById("lang_no").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_no").innerText = "No";
    document.getElementById("lang_no").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_welcome").innerText = "مكافأة ترحيبية";
    document.getElementById("lang_welcome").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_welcome").innerText = "WELCOME BONUS";
    document.getElementById("lang_welcome").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_upto").innerText = "حتى";
    document.getElementById("lang_upto").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_upto").innerText = "up to ";
    document.getElementById("lang_upto").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_registration").innerText = "التسجيل السهل";
    document.getElementById("lang_registration").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_registration").innerText =
      "Easy registration";
    document.getElementById("lang_registration").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_simple").innerText =
      "بسيطة مثل واحد، اثنان، ثلاثة";
    document.getElementById("lang_simple").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_simple").innerText =
      "As simple as one, two, three";
    document.getElementById("lang_simple").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_secure").innerText = "إيداع آمن";
    document.getElementById("lang_secure").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_secure").innerText = "Secure deposit";
    document.getElementById("lang_secure").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_safest").innerText =
      "الطريقة الأكثر أمانًا للدفع";
    document.getElementById("lang_safest").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_safest").innerText = "The safest way to pay";
    document.getElementById("lang_safest").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_fastest").innerText = "أسرع عمليات الدفع";
    document.getElementById("lang_fastest").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_fastest").innerText = "Fastest payouts";
    document.getElementById("lang_fastest").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_withdraw").innerText = "السحب حتى 24 ساعة";
    document.getElementById("lang_withdraw").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_withdraw").innerText =
      "Withdrawal up to 24 hours";
    document.getElementById("lang_withdraw").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_text-info").innerText =
      "أعجب 1537 شخصًا بهذا";
    document.getElementById("lang_text-info").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_text-info").innerText =
      "1537 people like this";
    document.getElementById("lang_text-info").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_first-comment").innerText =
      "لم أعتقد مطلقًا أن الكازينوهات على الإنترنت يمكن أن تكون بهذه الواقعية حتى وجدت كازينو Jawhara Bet. الرسومات وطريقة اللعب واقعية للغاية لدرجة أنني شعرت أنني كنت جالسًا في كازينو حقيقي. الألعاب المصغرة ممتعة بشكل لا يصدق ، والجوائز مثيرة بنفس القدر!";
    document.getElementById("lang_first-comment").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_first-comment").innerText =
      "I never thought online casinos could be this realistic until I found Jawhara Bet Casino. The graphics and gameplay are so realistic, I felt like I was sitting in a real casino. The mini-games are incredibly fun, and the prizes are just as exciting!";
    document.getElementById("lang_first-comment").style.fontFamily =
      "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_second-comment").innerText =
      "لقد جربت العديد من الكازينوهات على الإنترنت ، لكن كازينو Jawhara Bet يبرز من بين الحشود. الألعاب المصغرة مبتكرة وتسبب الإدمان ، مما يجعلني منشغلاً لساعات. تجعل الرسومات عالية الجودة واللعب السلس متعة اللعب. لقد وضع كازينو Jawhara Bet بالفعل سقفًا مرتفعًا.";
    document.getElementById("lang_second-comment").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_second-comment").innerText =
      "I've tried many online casinos, but Jawhara Bet Casino stands out from the crowd. The mini-games are innovative and addictive, keeping me engaged for hours. The high-quality graphics and smooth gameplay make playing a pleasure. Jawhara Bet Casino has truly set the bar high.";
    document.getElementById("lang_second-comment").style.fontFamily =
      "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_third-comment").innerText =
      "كازينو Jawhara Bet هو وجهة المقامرة الافتراضية الخاصة بي. الألعاب المصغرة متنوعة ، كل منها يقدم تحديًا فريدًا وإثارة. تخلق واقعية بيئة الكازينو ، جنبًا إلى جنب مع فرصة الفوز بجوائز رائعة ، تجربة لعب لا تقبل المنافسة. كازينو Jawhara Bet هو الفائز في كتابي!";
    document.getElementById("lang_third-comment").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_third-comment").innerText =
      "Jawhara Bet Casino is my virtual gambling destination. The mini-games are diverse, each offering a unique challenge and excitement. The realism of the casino environment, combined with the opportunity to win great prizes, creates an unbeatable gaming experience. Jawhara Bet Casino is a winner in my book!";
    document.getElementById("lang_third-comment").style.fontFamily =
      "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_reward").innerText = "اذهب إلى المكافأة";
    document.getElementById("lang_reward").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_reward").innerText = "Go to reward";
    document.getElementById("lang_reward").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_rewards").innerText = "اذهب إلى المكافأة";
    document.getElementById("lang_rewards").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_rewards").innerText = "Go to reward";
    document.getElementById("lang_rewards").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_like").innerText = "تعليق";
    document.getElementById("lang_like").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_like").innerText = "comment";
    document.getElementById("lang_like").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_comment").innerText = "يحب";
    document.getElementById("lang_comment").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_comment").innerText = "like";
    document.getElementById("lang_comment").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_like_1").innerText = "تعليق";
    document.getElementById("lang_like_1").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_like_1").innerText = "comment";
    document.getElementById("lang_like_1").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_comment_1").innerText = "يحب";
    document.getElementById("lang_comment_1").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_comment_1").innerText = "like";
    document.getElementById("lang_comment_1").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_like_2").innerText = "تعليق";
    document.getElementById("lang_like_2").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_like_2").innerText = "comment";
    document.getElementById("lang_like_2").style.fontFamily = "Noto Sans";
}
switch (language) {
  case "ar":
    document.getElementById("lang_comment_2").innerText = "يحب";
    document.getElementById("lang_comment_2").style.fontFamily = "Tajawal";
    break;
  case "en":
    document.getElementById("lang_comment_2").innerText = "like";
    document.getElementById("lang_comment_2").style.fontFamily = "Noto Sans";
}
