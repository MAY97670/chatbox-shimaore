
// === DICTIONNAIRES ===

// Plusieurs traductions possibles pour un mot
const traductions = {
    "bonjour": "Gégé, Kwézi ou As-salâm alaykum",
    "bsr": "Gégé, Kwézi ou As-salâm alaykum", // Abréviation pour bonjour
    "bonsoir": "Gégé, Kwézi ou As-salâm alaykum",
    "salut": "Gégé, Kwézi ou As-salâm alaykum",
    "ça va ?": "Wa fetré ?",
    "cv ?": "Wa fetré ?", // Abréviation pour "ça va ?"
    "ça va": "Tsa fetré",
    "cava": "Tsa fetré", // Abréviation pour "ça va"
    "oui": "Ewa",
    "non": "Ahan",
    "pardon": "samahani ou nissoumihi",
    "je t’aime": "nissou vendza",
    "j’adore": "wami vendza",
    "je n’aime pas": "Wami tsiou vendzé",
    "où est la plage": "bahari yahavi ?",
    "je ne comprends pas": "Tsiss héléwa",
    "je comprends": "Niss héléwa",
    "je n'ai pas compris": "Tsa héléwa",
    "vous parlez français ?": "wawé oulagouwa chi farantsa ?",
    "vous parlez anglais ?": "wawé oulagouwa chi n'guéréza ?",
    "au revoir": "Kwaheri",
    "bienvenue": "Karibou",
    "merci": "Marahaba",
    "merci bcp": "Marahaba meingui", // Abréviation pour "merci beaucoup"
    "merci beaucoup": "Marahaba meingui",
    "non merci": "Ahan Marahaba",
    "je suis français": "Wami m'farantsa",
    "je suis mahorais": "Wami m'maoré",
    "je m'appelle": "Wami hiriwa",
    "c’est combien": "Iyo kissajé",
    "c’est cher": "Iyo hali",
    "argent": "Marké",
    "je voudrais aller": "Niss tsaha néndré",
    "je veux aller": "Niss tsaha néndré",
    "je souhaiterais": "Niss tsaha néndré",
    "bateau": "Marikabou",
    "taxi": "Taksi",
    "bus": "bus",
    "voiture": "Gari",
    "je veux": "niss tsaha",
    "je ne veux pas": "tsiss tsaha",
    "a droite": "Kouméni",
    "gauche": "Potroni",
    "tout droit": "M'béli hoho",
    "un": "Moja",
    "deux": "mbili",
    "trois": "traru",
    "quatre": "N'né",
    "cinq": "tsano",
    "six": "sita",
    "sept": "saba",
    "huit": "nane",
    "neuf": "shendra",
    "dix": "kumi",
    "vingt": "shirini",
    "trente": "thalathini",
    "quarante": "arbaini",
    "cinquante": "hamsini",
    "soixante": "sitini",
    "soixante-dix": "sabwini",
    "quatre-vingts": "thamanini",
    "quatre-vingt-dix": "tuswini",
    "cent": "mia",
    "quelle heure est-il": "ra léra trini",
    "quand": "lini",
    "hier": "jana",
    "aujourd’hui": "leo",
    "ce matin": "Assoubouhi",
    "ce midi": "Mtsana",
    "après midi": "Oujoni",
    "ce soir soir": "Oukouari",
    "demain": "messo",
    "lundi": "mufumoraru",
    "mardi": "mufumonne",
    "mercredi": "mufumostano",
    "jeudi": "yahoa",
    "vendredi": "djimwa",
    "samedi": "mufumotsi",
    "dimanche": "mufumovili",
    "je suis en vacance": "Tsa vacanssi",
    "je travaille ici": "wami fagna hazi ounou",
    "j’ai faim": "nissi ona n’dza",
    "j’ai soif": "nissi ona n’gnora",
    "bon appétit": "mastéréhi mema",
    "santé": "suiha",
    "c’était délicieux": "yako jiva soifi",
    "c’est délicieux": "issu jiva",
    "qu’est-ce que vous me recommandez": "ilazimou nifagné gégé",
    "je suis végétarien": "Wami tsi li n’gnama",
    "sans piment": "wasssi trihé poutou",
    "je n’aime pas les épices": "wami tsi vendzé poutou",
    "c’est trop chaud": "ina moro soifi",
    "je suis allergique": "oimi miko",
    "fruit de mer": "zitrou za baharini",
    "cacahuète": "penatsi",
    "je voudrais": "Natso vendza",
    "eau": "maji",
    "thé": "Dithé",
    "café": "kafé",
    "eau chaude": "maji ya moro",
    "l’addition s’il vous plaît": "lazimou nilivé kissajé",
    "j’ai besoin de voir un médecin": "ilazimou nahoné toibibou",
    "appelez un médecin": "na’mhiré toibibou",
    "appelez une ambulance": "na’mhiré toibibou",
    "où est l’hôpital": "havi dé lopitali",
    "je ne me sens pas très bien": "tsiss fétré",
    "j’ai mal ici": "nissi kodza vani",
    "où sont les toilettes": "havi dé m’rabani",
    "à l’aide": "na mouni saiydié",
    "police": "la police",
    "danger": "hatawari",
    "je suis perdue": "tsi latsiha",
    "premier": "Wa handra",
    "à droite": "Wa kumeni",
    "dixième": "Wa kumi",
    "dernier": "Wa mwiso",
    "huitième": "Wa nane",
    "quatrième": "Wa N’ne",
    "méchant": "Wa pehou",
    "à gauche": "Wa potroni",
    "troisième": "Wa raru (ou)",
    "septième": "Wa saba",
    "neuvième": "Wa shendra",
    "mahorais": "Wa shimaore",
    "comme les blancs": "Nori wa zungu",
    "sixième": "Wa sita",
    "cinquième": "Wa tsano",
    "supérieur": "Mbolé ou Mgouana",
    "inférieur": "Outitini",
    "deuxième": "Wa vili",
    "politesse": "Andabou",
    "respect": "Andabou",
    "deuxième prière": "Adhuhuri (midi)",
    "accident": "Adjali",
    "louer": "Ou adjiri (verbe)",
    "ennemi": "Andouille (pl. Maandouille)",
    "mettre d'accord": "Ouafikana (se -)",
    "réconcilier": "Ouafikisha",
    "son": "Lahe",
    "ses": "Lahe",
    "sa": "Lahe",
    "ton": "Laho",
    "tes": "Laho",
    "ta": "Laho",
    "épargne": "Ankiba",
    "même si": "Alakini",
    "bien que": "Alakini",
    "mille": "Alfu",
    "paix": "Amani",
    "que": "Amba",
    "dire": ["Ou rongoa (verbe)", "Aou hambia"],
    "mince": "Titi, Tsala",
    "étroit": "Titi, Tsala",
    "cri d’étonnement": "Ammaa !",
    "regarder": "Angalia",
    "dur": "Mangavu",
    "écrire à": "Ouangishia",
    "mon": "Langu (poss.)",
    "ma": "Langu (poss.)",
    "mes": "Langu (poss.)",
    "léger": "Ngangu",
    "facile": "Ngangu",
    "étendre au soleil": "Ouaniha",
    "retirer du soleil; ramasser": "Ouanoua",
    "votre": "Lagnu",
    "vos": "Lagnu",
    "Arabie": "Arabou (n.)",
    "quatre cents": "Arba mia",
    "quarante": "Arbayni",
    "terre": "Douniya -(Monde); trotro-(ch) -(sol)",
    "odeur": "Harufu",
    "parfum": "Harufu",
    "mariage": "Haroussi",
    "passion": "Ouvendza",
    "désir": "Ouvendza",
    "matin": "Assoubuhi",
    "matinée": "Assoubuhi",
    "arriver": "Awaswili",
    "notre": "Latru (poss.)",
    "nos": "Latru (poss.)",
    "ou": "Aou",
    "bien": "Aou",
    "maintenant": "Havassa",
    "tout de suite": "Havassa",
    "leur": "Lawo (poss.)",
    "leurs": "Lawo (poss.)",
    "prêter": "Ouazima",
    "santé": "Unono",
    "jasmin": "Anfu",
    "intelligence": "Ankili (n.)",
    "commencer": "Ouandrisa",
    "jouer": "Oungadza",
    "perdu": "Angamia",
    "causer la perte de": "Aoungamidza",
    "écrire": "Ouangiha",
    "origine": "Wachi (suivi du n, adj…)",
    "avion": ["Avio", "Roplani"],
};

// Abréviations
const abrevToFull = {
    "bsr": "bonsoir",
    "bjr": "bonjour",
    "cv": "ça va",
    "cava": "ça va",
    "bcp": "beaucoup",
    "svp": "s'il vous plaît",
    "tkt": "t'inquiète",
    "pk": "pourquoi",
    "qlq": "quelqu'un",
    "mdr": "mort de rire",
    "ptdr": "pété de rire",
    "slt": "salut",
    "drt": "droit",
    "gch": "gauche",
    "cc": "salut",
    "biz": "bisous"
};

// Conversion chiffres
const chiffresEnMots = {
    "0": "zéro", "1": "un", "2": "deux", "3": "trois", "4": "quatre",
    "5": "cinq", "6": "six", "7": "sept", "8": "huit", "9": "neuf",
    "10": "dix", "20": "vingt", "30": "trente", "40": "quarante",
    "50": "cinquante", "60": "soixante", "70": "soixante-dix",
    "80": "quatre-vingts", "90": "quatre-vingt-dix", "100": "cent",
    "1000": "mille"
};

function convertirNombre(nombre) {
    if (chiffresEnMots[nombre]) {
        return chiffresEnMots[nombre];
    } else {
        let dizaines = Math.floor(nombre / 10) * 10;
        let unités = nombre % 10;
        return (chiffresEnMots[dizaines] || dizaines) + "-" + (chiffresEnMots[unités] || unités);
    }
}

// === FONCTIONS ===

// === NORMALISATION ===
function normalizeMessage(message) {
    return message
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,!?;:]/g, "")
        .split(" ")
        .map(word => /^\d+$/.test(word) ? convertirNombre(parseInt(word)) : (abrevToFull[word] || word))
        .join(" ")
        .trim();
}

// === RÉPONSE DU BOT ===
function getBotResponse(message) {
    if (traductions[message]) {
        let trads = traductions[message];
        return Array.isArray(trads) ? trads[Math.floor(Math.random() * trads.length)] : trads;
    }
    return "Oups 🤔 je ne connais pas encore cette expression. Laisse-moi un commentaire juste en dessous !";
}

// === ENVOI MESSAGE ===
function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const loading = document.getElementById("loading-indicator");
    let message = input.value.trim();
    if (!message) return;

    // Affiche message utilisateur
    const userBubble = document.createElement("div");
    userBubble.className = "bubble user";
    userBubble.textContent = message;
    chatBox.appendChild(userBubble);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Affiche indicateur de chargement
    loading.style.display = "flex";

    setTimeout(() => {
        loading.style.display = "none";
        const botBubble = document.createElement("div");
        botBubble.className = "bubble bot";
        botBubble.textContent = getBotResponse(normalizeMessage(message));
        chatBox.appendChild(botBubble);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500); // délai de 0,5s pour simuler réflexion

    input.value = "";
}

// === EFFACER CHAT ===
function clearChat() {
    document.getElementById('chat-box').innerHTML = '';
}

// === ENVOI COMMENTAIRE ===
function sendComment() {
    const comment = document.getElementById('user-comment').value.trim();
    if (!comment) return;

    // Affiche le commentaire dans le chat sous forme de bulle
    const chatBox = document.getElementById("chat-box");
    const commentBubble = document.createElement("div");
    commentBubble.className = "bubble user";
    commentBubble.style.background = "#28a745"; // couleur différente pour les commentaires
    commentBubble.textContent = comment;
    chatBox.appendChild(commentBubble);
    chatBox.scrollTop = chatBox.scrollHeight;

    alert("Merci pour ton commentaire !");
    document.getElementById('user-comment').value = '';
}
