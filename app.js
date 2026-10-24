const $ = (id) => document.getElementById(id);

const labels = {
  en: {
    reportTitle: "Incident report draft",
    intro: "I would like to report an online incident. The details below are based on my account and should be reviewed for accuracy before submission.",
    date: "Date/time of incident (as reported by me):",
    category: "Incident category:",
    details: "Description provided by me:",
    evidence: "Evidence file/hash reference:",
    request: "I request that this incident be reviewed and appropriate guidance be provided. I can supply further information if required.",
    steps: [
      "If you may be in immediate danger, move to a safer place if possible and contact local emergency services or a trusted person.",
      "Keep the original message or file where safe to do so; avoid editing the original evidence.",
      "Do not pay or share additional private information in response to threats. Seek trusted support before responding.",
      "Use the platform’s report/block tools when safe, and consider saving the account name, URL and incident time.",
      "Use the official cybercrime reporting portal or appropriate local authority; review the draft before submitting."
    ],
    labels: {harassment:"Harassment or threats",sextortion:"Sextortion or coercion",impersonation:"Fake profile / impersonation",doxxing:"Personal information exposed",scam:"Scam or suspicious demand",stalking:"Repeated unwanted contact",unknown:"Unclear / needs review"},
    summary: "This is a preliminary, rule-based screening result. Review the matched indicators and the original context.",
    title: "Preliminary threat assessment",
    noMatch: "No configured keyword rules matched. This does not mean the message is safe; context matters.",
    why: "Matched indicators: ",
    nodes: ["Reported incident","Information involved","Suggested response"]
  },
  te: {
    reportTitle: "సంఘటన నివేదిక ముసాయిదా",
    intro: "ఆన్‌లైన్ సంఘటనను నివేదించాలనుకుంటున్నాను. క్రింది వివరాలు నా వివరణ ఆధారంగా ఉన్నాయి; సమర్పించే ముందు ఖచ్చితత్వం కోసం పరిశీలించాలి.",
    date: "నేను తెలిపిన సంఘటన తేదీ/సమయం:",
    category: "సంఘటన వర్గం:",
    details: "నేను అందించిన వివరణ:",
    evidence: "ఆధార ఫైల్/హ్యాష్ వివరాలు:",
    request: "ఈ సంఘటనను పరిశీలించి తగిన మార్గదర్శకత్వం ఇవ్వాలని కోరుతున్నాను. అవసరమైతే మరిన్ని వివరాలు అందిస్తాను.",
    steps: [
      "తక్షణ ప్రమాదం ఉంటే, సాధ్యమైతే సురక్షిత ప్రదేశానికి వెళ్లి స్థానిక అత్యవసర సేవలను లేదా నమ్మకమైన వ్యక్తిని సంప్రదించండి.",
      "సురక్షితమైతే అసలు సందేశం లేదా ఫైల్‌ను భద్రపరచండి; అసలు ఆధారాన్ని మార్చవద్దు.",
      "బెదిరింపులకు ప్రతిస్పందనగా డబ్బు చెల్లించవద్దు లేదా మరింత వ్యక్తిగత సమాచారాన్ని పంచుకోవద్దు. నమ్మకమైన సహాయం పొందండి.",
      "సురక్షితంగా ఉన్నప్పుడు ప్లాట్‌ఫారమ్‌లో రిపోర్ట్/బ్లాక్ ఎంపికలను ఉపయోగించండి; ఖాతా పేరు, URL, సమయాన్ని నమోదు చేయండి.",
      "అధికారిక సైబర్ క్రైమ్ పోర్టల్ లేదా సంబంధిత అధికారిని సంప్రదించండి; సమర్పించే ముందు ముసాయిదాను పరిశీలించండి."
    ],
    labels: {harassment:"వేధింపులు లేదా బెదిరింపులు",sextortion:"లైంగిక బెదిరింపు/బలవంతం",impersonation:"నకిలీ ప్రొఫైల్ / వేషధారణ",doxxing:"వ్యక్తిగత సమాచారం బహిర్గతం",scam:"మోసం లేదా అనుమానాస్పద డిమాండ్",stalking:"పునరావృత అవాంఛిత సంప్రదింపు",unknown:"స్పష్టత లేదు / పరిశీలించాలి"},
    summary: "ఇది నియమాల ఆధారిత ప్రాథమిక పరిశీలన మాత్రమే. సరిపోలిన సూచనలు, అసలు సందర్భాన్ని పరిశీలించండి.",
    title: "ప్రాథమిక బెదిరింపు పరిశీలన",
    noMatch: "నిర్దేశించిన కీవర్డ్ నియమాలు సరిపోలలేదు. అందువల్ల సందేశం సురక్షితమని అర్థం కాదు.",
    why: "సరిపోలిన సూచనలు: ",
    nodes: ["నివేదించిన సంఘటన","సంబంధిత సమాచారం","సూచించిన చర్య"]
  },
  hi: {
    reportTitle: "घटना रिपोर्ट का मसौदा",
    intro: "मैं एक ऑनलाइन घटना की रिपोर्ट करना चाहती/चाहता हूँ। नीचे दिए गए विवरण मेरे बयान पर आधारित हैं; जमा करने से पहले उनकी सटीकता जाँचें।",
    date: "मेरे अनुसार घटना की तारीख/समय:",
    category: "घटना की श्रेणी:",
    details: "मेरे द्वारा दिया गया विवरण:",
    evidence: "साक्ष्य फ़ाइल/हैश संदर्भ:",
    request: "कृपया इस घटना की समीक्षा कर उचित मार्गदर्शन दें। आवश्यकता होने पर मैं अतिरिक्त जानकारी दे सकती/सकता हूँ।",
    steps: [
      "यदि तत्काल खतरा हो, तो संभव हो तो सुरक्षित स्थान पर जाएँ और स्थानीय आपातकालीन सेवा या भरोसेमंद व्यक्ति से संपर्क करें।",
      "जहाँ सुरक्षित हो, मूल संदेश या फ़ाइल सुरक्षित रखें; मूल साक्ष्य में बदलाव न करें।",
      "धमकी के जवाब में पैसे न दें और अतिरिक्त निजी जानकारी साझा न करें। भरोसेमंद सहायता लें।",
      "सुरक्षित होने पर प्लेटफ़ॉर्म के रिपोर्ट/ब्लॉक विकल्प इस्तेमाल करें; खाते का नाम, URL और समय लिख लें।",
      "आधिकारिक साइबर अपराध पोर्टल या संबंधित अधिकारी से संपर्क करें; जमा करने से पहले मसौदा जाँचें।"
    ],
    labels: {harassment:"उत्पीड़न या धमकी",sextortion:"यौन शोषण की धमकी / दबाव",impersonation:"फर्जी प्रोफ़ाइल / पहचान की नकल",doxxing:"निजी जानकारी उजागर",scam:"धोखाधड़ी या संदिग्ध माँग",stalking:"बार-बार अनचाहा संपर्क",unknown:"अस्पष्ट / समीक्षा आवश्यक"},
    summary: "यह नियम-आधारित प्रारंभिक जाँच है। मिले संकेतों और मूल संदर्भ की समीक्षा करें।",
    title: "प्रारंभिक खतरा आकलन",
    noMatch: "निर्धारित कीवर्ड नियम मेल नहीं खाए। इसका अर्थ यह नहीं कि संदेश सुरक्षित है।",
    why: "मिले संकेत: ",
    nodes: ["रिपोर्ट की गई घटना","संबंधित जानकारी","सुझाया गया कदम"]
  }
};

const rules = [
  {type:"sextortion", words:["sextortion","send money or i will share","pay or i'll post","intimate photo","nudes","blackmail","private pictures","వీడియోలు పంపిస్తా","డబ్బు పంపు","निजी फोटो","पैसे भेजो"], level:3, reason:"Language suggesting coercion, blackmail, or threats involving private content."},
  {type:"doxxing", words:["home address","phone number is","leaked your address","posting your address","share your location","personal information","address leak","చిరునామా","पता लीक","फोन नंबर"], level:3, reason:"Possible exposure or threatened exposure of personal information."},
  {type:"impersonation", words:["fake profile","pretending to be you","impersonating","your account is fake","made an account using your name","నకిలీ ఖాతా","फर्जी प्रोफाइल","नकली अकाउंट"], level:2, reason:"Language suggesting impersonation or a fake account."},
  {type:"stalking", words:["i know where you go","watching you every day","following you","won't stop contacting","outside your house","నిన్ను వెంబడిస్తా","पीछा कर रहा","तुम्हारा पीछा"], level:3, reason:"Language suggesting repeated unwanted contact or possible surveillance."},
  {type:"harassment", words:["i will hurt you","kill you","threaten","hurt you","you will regret","send your photos","harass","చంపేస్తా","బెదిరింపు","मार दूँगा","धमकी","तुम्हें नुकसान"], level:3, reason:"Threatening or abusive language detected."},
  {type:"scam", words:["otp","verification code","send money now","urgent payment","bank details","click this link","account will be blocked","ఓటీపీ","డబ్బు పంపు","ओटीपी","तुरंत पैसे"], level:2, reason:"Language associated with suspicious requests for money, credentials, or codes."}
];

let selectedFile = null;
let selectedHash = null;
let currentAssessment = null;
let toastTimer;

function toast(message) {
  const node = $("toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove("show"), 2800);
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function getLanguage() { return labels[$("language").value] || labels.en; }
function humanType(type, lang = getLanguage()) { return lang.labels[type] || lang.labels.unknown; }
function classify(text, chosen) {
  const content = text.toLowerCase();
  const matches = rules.map(rule => ({...rule, hits: rule.words.filter(word => content.includes(word.toLowerCase()))}))
    .filter(rule => rule.hits.length > 0);
  let type = chosen !== "auto" ? chosen : (matches.sort((a,b) => b.level-a.level)[0]?.type || "unknown");
  const chosenRule = matches.find(m => m.type === type);
  let level = chosenRule ? chosenRule.level : (type === "unknown" ? 1 : 2);
  // The level is a rough triage cue based on keyword matches, not a prediction of danger.
  if (chosen !== "auto" && !chosenRule) level = 2;
  const reasons = chosenRule ? chosenRule.reason + " Matched terms: " + chosenRule.hits.slice(0,5).join(", ") : getLanguage().noMatch;
  return {type, level, reasons, matches: matches.map(m=>m.type), hits: matches.flatMap(m=>m.hits).slice(0,8)};
}
function buildComplaint(text, type, fileName, hash) {
  const lang = getLanguage();
  const now = new Date().toLocaleString();
  return `${lang.reportTitle}\n\n${lang.intro}\n\n${lang.date} [Please enter the incident date/time]\n${lang.category} ${humanType(type,lang)}\n\n${lang.details}\n${text || "[Add your factual description here]"}\n\n${lang.evidence} ${fileName ? fileName + (hash ? " | SHA-256: " + hash : "") : "[Add evidence reference if applicable]"}\n\n${lang.request}\n\n[Your name/contact details — add only when required by the official reporting channel]\n[Draft generated in SheShield on ${now}. Please review all facts before submission.]`;
}
function renderMap(type, level, lang) {
  const exposure = type === "doxxing" ? "Personal information" :
    type === "impersonation" ? "Identity / profile" :
    type === "sextortion" ? "Private content / coercion" :
    type === "scam" ? "Money / credentials" :
    type === "stalking" ? "Repeated contact / location" : "Threatening communication";
  const action = level === 3 ? "Preserve evidence + seek trusted help" : "Review account + reporting options";
  const nodes = [
    {icon:"◉", title:lang.nodes[0], text:humanType(type,lang)},
    {icon:"⌕", title:lang.nodes[1], text:exposure},
    {icon:"✓", title:lang.nodes[2], text:action}
  ];
  $("exposureMap").innerHTML = nodes.map(n=>`<div class="map-node"><span>${n.icon}</span><b>${escapeHtml(n.title)}</b><br>${escapeHtml(n.text)}</div>`).join("");
}
function renderSteps(level) {
  const lang = getLanguage();
  const steps = [...lang.steps];
  if (level === 3) steps.unshift("Higher-priority review: consider contacting a trusted person or relevant authority promptly. The app cannot determine actual danger.");
  $("nextSteps").innerHTML = steps.map(s=>`<li>${escapeHtml(s)}</li>`).join("");
}
function renderResults(assessment) {
  const lang = getLanguage();
  currentAssessment = assessment;
  $("emptyState").hidden = true;
  $("results").hidden = false;
  $("threatTitle").textContent = humanType(assessment.type, lang);
  const badge = $("severityBadge");
  badge.className = "severity " + (assessment.level===3 ? "high" : assessment.level===2 ? "medium" : "low");
  badge.textContent = assessment.level===3 ? ( $("language").value==="te" ? "అధిక ప్రాధాన్యత" : $("language").value==="hi" ? "उच्च प्राथमिकता" : "Higher priority") : assessment.level===2 ? ($("language").value==="te"?"సమీక్షించండి":$("language").value==="hi"?"समीक्षा करें":"Review") : ($("language").value==="te"?"తక్కువ సూచనలు":$("language").value==="hi"?"कम संकेत":"Few indicators");
  $("assessmentSummary").textContent = lang.summary;
  $("reasons").textContent = assessment.reasons;
  renderMap(assessment.type, assessment.level, lang);
  renderSteps(assessment.level);
  $("complaintDraft").value = buildComplaint($("message").value.trim(), assessment.type, selectedFile?.name, selectedHash);
  renderEvidence();
}
async function hashFile(file) {
  if (!crypto.subtle) throw new Error("Web Crypto is unavailable. Open this app on localhost or a secure HTTPS site.");
  const buffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,"0")).join("");
}
function renderEvidence() {
  const area = $("evidenceArea");
  if (!selectedFile) {
    area.innerHTML = "<p>No evidence file selected. A report can still be created from the incident description.</p>";
    $("verifyBtn").disabled = true;
    return;
  }
  area.innerHTML = `<p><strong>File:</strong> ${escapeHtml(selectedFile.name)}</p><p><strong>Size:</strong> ${selectedFile.size.toLocaleString()} bytes</p><p><strong>SHA-256:</strong><br><code>${escapeHtml(selectedHash || "Hash unavailable")}</code></p><p><strong>Status:</strong> Hash recorded in this browser session. Keep the original file safe.</p>`;
  $("verifyBtn").disabled = false;
}
function makeReportText() {
  const a = currentAssessment;
  if (!a) return "";
  return [
    "SheShield — Incident Summary (Prototype)",
    "Generated: " + new Date().toISOString(),
    "Important: This is a user-reviewed draft, not an official filing or legal opinion.",
    "",
    "ASSESSMENT",
    "Category: " + humanType(a.type),
    "Rule-based triage level: " + (a.level===3?"Higher priority":a.level===2?"Review":"Few configured indicators"),
    "Reason: " + a.reasons,
    "",
    "USER-PROVIDED DESCRIPTION",
    $("message").value.trim() || "[No text description entered]",
    "",
    "EVIDENCE FILE",
    selectedFile ? `Name: ${selectedFile.name}\nSize: ${selectedFile.size} bytes\nSHA-256: ${selectedHash}\nHash created at: ${new Date().toISOString()}` : "No evidence file selected.",
    "",
    "COMPLAINT DRAFT",
    $("complaintDraft").value,
    "",
    "LIMITATIONS",
    "SHA-256 detects byte-level changes only when compared with a trusted recorded hash. It does not prove authenticity, ownership, original creation time, or legal admissibility.",
    "The classifier is keyword-based and may miss context. Review all output before acting."
  ].join("\n");
}
function downloadBlob(name, content, type) {
  const blob = new Blob([content], {type});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
$("message").addEventListener("input", () => $("charCount").textContent = `${$("message").value.length} / 8000`);
$("evidenceFile").addEventListener("change", async (event) => {
  selectedFile = event.target.files?.[0] || null;
  selectedHash = null;
  if (!selectedFile) { $("fileInfo").hidden = true; renderEvidence(); return; }
  if (selectedFile.size > 10 * 1024 * 1024) {
    selectedFile = null; event.target.value = "";
    toast("Please choose a file smaller than 10 MB.");
    return;
  }
  $("fileInfo").hidden = false;
  $("fileInfo").textContent = `Reading ${selectedFile.name} locally…`;
  try {
    selectedHash = await hashFile(selectedFile);
    $("fileInfo").textContent = `Ready: ${selectedFile.name} • SHA-256 calculated locally`;
    renderEvidence();
    if (currentAssessment) $("complaintDraft").value = buildComplaint($("message").value.trim(), currentAssessment.type, selectedFile.name, selectedHash);
  } catch (error) {
    $("fileInfo").textContent = error.message;
    toast(error.message);
  }
});
$("analyzeBtn").addEventListener("click", () => {
  const text = $("message").value.trim();
  const chosen = $("incidentType").value;
  if (!text && !selectedFile) { toast("Add a fictional sample message or select a file first."); return; }
  if (text.length > 8000) { toast("Please shorten the description."); return; }
  const assessment = classify(text, chosen);
  renderResults(assessment);
  $("resultsPanel").scrollIntoView({behavior:"smooth",block:"start"});
});
$("loadSampleBtn").addEventListener("click", () => {
  $("message").value = "This is a fictional demo message: send money now or I will share your private pictures with others.";
  $("incidentType").value = "auto";
  $("charCount").textContent = `${$("message").value.length} / 8000`;
  toast("Fictional sample loaded. Select Review incident.");
});
$("language").addEventListener("change", () => {
  if (currentAssessment) renderResults(currentAssessment);
});
$("copyComplaintBtn").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText($("complaintDraft").value); toast("Complaint draft copied."); }
  catch { $("complaintDraft").select(); toast("Select and copy the draft manually."); }
});
$("downloadReportBtn").addEventListener("click", () => {
  if (!currentAssessment) return;
  const base = makeReportText();
  const manifest = {
    app: "SheShield prototype",
    generatedAt: new Date().toISOString(),
    file: selectedFile ? {name:selectedFile.name,size:selectedFile.size,sha256:selectedHash} : null,
    assessment: {category:currentAssessment.type,level:currentAssessment.level,reason:currentAssessment.reasons},
    disclaimer: "Hash verifies file bytes against this recorded value only; it does not prove authenticity or incident time."
  };
  downloadBlob("SheShield-incident-summary.txt", base, "text/plain;charset=utf-8");
  downloadBlob("SheShield-evidence-manifest.json", JSON.stringify(manifest,null,2), "application/json");
  toast("Downloaded summary and manifest. Use Print → Save as PDF for a PDF copy.");
});
$("verifyBtn").addEventListener("click", async () => {
  if (!selectedFile || !selectedHash) return;
  try {
    const freshHash = await hashFile(selectedFile);
    const match = freshHash === selectedHash;
    toast(match ? "Integrity check passed: bytes match the recorded hash." : "Integrity check failed: file bytes differ.");
  } catch (error) { toast(error.message); }
});
