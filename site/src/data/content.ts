/**
 * All page content in one place. Chapters drive the video tour, the screen gallery and the
 * no-JS fallback alike. `app` = a frame from the demo video (src/assets/app), `refs` = screenshots
 * of the original website for comparison (src/assets/reference). Chapter texts are the original
 * wording from the first version of this page.
 */

export type Lang = 'de' | 'en';
type L10n = Record<Lang, string>;

export interface Chapter {
  id: string;
  start: number;
  app: string;
  refs: string[];
  title: L10n;
  text: L10n;
}

export const links = {
  repo: 'https://github.com/Umut-Aslan99/GlobalPenfriends/tree/develop',
  portfolio: 'https://umut-aslan.dev',
  apk: '/media/com.umutIT.globalpenfriends.apk',
  video: '/media/globalpenfriends-demo.mp4',
};

export const demoLogin = { email: 'admin@globalpenfriends.com', password: 'Password123!' };

export const chapters: Chapter[] = [
  {
    id: 'login', start: 0, app: 'login', refs: ['login', 'register'],
    title: { de: "Login-Seite", en: "Login Page" },
    text: {
      de: "Zu sehen ist die Login-Seite mit E-Mail- und Passwort-Authentifizierung, angelehnt an Global Penfriends. Wer die App testen möchte, findet unten einen Download-Button für die APK. Um weiterzugehen, kann man sich entweder registrieren oder folgende hinterlegte Zugangsdaten nutzen: admin@globalpenfriends.com / Password123!",
      en: "We can see the layout for a log-in page following the Email and Password authentication from Global Penfriends. For anyone interested in testing, a download button for the .apk is available at the bottom. To access the next pages, you can either go through the registration process or just use the hardcoded / pre-existing credentials: admin@globalpenfriends.com / Password123!",
    },
  },
  {
    id: 'register1', start: 16, app: 'register1', refs: ['page1_1', 'page1_2'],
    title: { de: "Registrierung – Schritt 1/4", en: "Registration – Step 1/4" },
    text: {
      de: "Der erste Schritt der Registrierung. Die Validierung greift sofort – hier zu sehen an einem ungültigen Leerzeichen im Profilnamen. Die Regeln entsprechen genau denen der Original-Website. Unten ein Referenzbild der originalen Seite 1.",
      en: "We can see page 1/4 of the registration process. We can also see working validation after inputting a bad whitespace character into the profile name. The rules for validation are the same that the original Website uses. Below is a reference from the original website's page 1.",
    },
  },
  {
    id: 'register2', start: 66, app: 'register2', refs: ['page2_1', 'page2_2'],
    title: { de: "Registrierung – Schritt 2/4", en: "Registration – Step 2/4" },
    text: {
      de: "Weitere persönliche Angaben sowie die Bestätigung, dass die Plattform nicht für Dating genutzt wird. Global Penfriends hat strenge Richtlinien, um die Sicherheit aller zu gewährleisten. Ich persönlich empfehle, der Community eine Chance zu geben – ich selbst hatte dort sehr angenehme Begegnungen und meine erste echte Brieffreundschaft.",
      en: "We can see page 2/4 of the registration process. Here some more personal data is required as well as the acknowledgement checkbox, that the website is not used for dating. Global Penfriends has a very strict policy to ensure everyone is safe around there. I personally recommend giving the community a try, I have had a couple of very pleasant encounters and experienced my very first Penpalship with actual letter exchange.",
    },
  },
  {
    id: 'register3', start: 109, app: 'register3', refs: ['page3'],
    title: { de: "Registrierung – Schritt 3/4", en: "Registration – Step 3/4" },
    text: {
      de: "Eine kürzere Seite: Hier werden Interessen für das eigene Profil ausgewählt. Die Auswahlmöglichkeiten stammen direkt von der Website (Stand 12. Februar 2026). Ich habe die Interessen zusätzlich etwas gruppiert, da mir die ursprüngliche Darstellung zu unübersichtlich erschien.",
      en: "We can see page 3/4 of the registration process. This is a shorter section as all we do here is select a set of interests we want to display on our profile. The choices are predefined by the Website and I included every selectable interest as of the last state of February 12, 2026. To add onto that feature, I also grouped the interests a little bit, since I thought the way it was implemented was quite chaotic.",
    },
  },
  {
    id: 'register4', start: 136, app: 'register4', refs: ['page_4'],
    title: { de: "Registrierung – Schritt 4/4", en: "Registration – Step 4/4" },
    text: {
      de: "Der letzte Schritt wirkt kurz, erfordert aber etwas Mühe: Man beschreibt sich selbst, was man in einem Brieffreund sucht, und teilt etwas über die eigene Kultur. Dafür gibt es eine Mindest- und Maximallänge.",
      en: "We can see page 4/4 of the registration process. This is one that looks pretty short but requires quite a bit of effort. To finish creating your profile, the community requires to explain a bit about yourself, what you look for in a penpal and to share some culture of where you live. There is a minimum and maximum amount of characters for a limit.",
    },
  },
  {
    id: 'review', start: 154, app: 'review', refs: ['profile_finish'],
    title: { de: "Profil wird überprüft", en: "Profile Under Review" },
    text: {
      de: "Eine kurze Bestätigungsseite, die denselben Hinweis gibt wie auf der Website: Das Profil wird von einem echten Menschen geprüft und dann freigeschaltet. Bis dahin kann man Bilder ändern oder sein Profil bearbeiten.",
      en: "This is a very short page, but just gives the same information you would get when finishing the registration on the website. Your profile is being prepared for review by a real human and activation. In the meantime you can still change your pictures or edit your profile.",
    },
  },
  {
    id: 'dashboard', start: 156, app: 'dashboard', refs: ['dashboard'],
    title: { de: "Dashboard", en: "Dashboard" },
    text: {
      de: "Das Dashboard ist stark an das Original angelehnt. Ziel war es, Look & Feel beizubehalten. Oben eine Willkommensbox mit Abo-Status, ID, Snailmail-Guthaben und Profilbild. Die Website erlaubt drei Bilder – über das Kamera-Icon kann man ein Bild aus dem lokalen Speicher wählen. Darunter die Übersicht der abgeschlossenen und ausstehenden Schritte sowie der Freigabestatus. Rechts eine gelbe Benachrichtigungsbox für Updates und Admin-Meldungen, darunter eine Erinnerung an die Unterstützung durch das Monetarisierungssystem.",
      en: "Finally we can see our dashboard. It is heavily inspired by the dashboard of the original website. The goal was to keep the look and feel the same, have the standard boxes there with their functionality. First we have a box for welcoming the user, show their current subscription tier, their ID, snailmail credits as well as their current picture. The website allows for 3 pictures total, and by clicking the camera icon we can select a picture from our local storage. Next we have a box that shows all the steps that are done or awaiting to be done on the left as well as the approval status. On the right we have a yellow notification box. Any updates or System messages by the admins can be displayed there. And below it is a small reminder to support them by upgrading functionalities with their monetization System.",
    },
  },
  {
    id: 'upload', start: 162, app: 'upload', refs: [],
    title: { de: "Profilbild hochladen", en: "Upload Profile Picture" },
    text: {
      de: "Nach einem Klick auf die Kamera öffnet sich die lokale App-Auswahl (hier Google Photos). Das gewählte Foto erscheint im Kreis anstelle des Kamera-Icons und wird zum aktiven Profilbild. Weiter unten erscheint 1/3 Bilder in der Übersicht. Über das Mülleimer-Icon lassen sich Bilder entfernen – das nächste Bild rückt automatisch nach.",
      en: "After a click on the camera, we see the option to select a picture for our profile with the local installed apps – in this case it was Google Photos. We can see the selected stock photo of a person appear both in the ring where the camera once was, which also now is our main active picture and always shows first. A little bit further down, we can now finally see 1/3 pictures in the little box. There is a bin icon we can click to remove a picture from our profile. It will automatically replace the active profile picture to the next one on the line, if there is one. Below this box is a button to open the \"My Profile\" view.",
    },
  },
  {
    id: 'profile', start: 174, app: 'profile', refs: [],
    title: { de: "Profilansicht", en: "Profile View" },
    text: {
      de: "Die Profilansicht ist ebenfalls stark an die originale Website angelehnt. Oben kann man auf ein Bild klicken, um es bildschirmfüllend zu sehen. Inhaltlich werden alle Registrierungsschritte 1–4 zusammengefasst, aber übersichtlicher und mit Sektionen formatiert. Die Interessen lassen sich aufklappen und leuchten grün, wenn sie mit denen eines anderen Profils übereinstimmen. Ganz unten gibt es ähnliche Profile als Vorschläge, um neue Brieffreunde zu entdecken.",
      en: "The profile view is also heavily inspired by the profile view of the original Website. At the top we have to possibility to click on a picture in order to see a full screen view of the picture, given the format fits. This profile view basically is a combination of all pages 1–4 of the registration page, but formatted in a well readable format with sections. The interests can also be opened to view more of them, and will light up green when viewing another persons profile and the interests match. All the way at the bottom we have the feature for Similar Profiles, which presents us a couple of profiles to contact and meet new penpals.",
    },
  },
  {
    id: 'notifications', start: 230, app: 'notifications', refs: [],
    title: { de: "Benachrichtigungs-Test", en: "Notification Test" },
    text: {
      de: "Dieser Bereich wäre in einer echten Veröffentlichung nicht sichtbar. Er dient dazu, verschiedene Systembenachrichtigungen zu testen. Eine davon ist der Eingang einer neuen Nachricht – genau das war einer der Hauptgründe für dieses Projekt. In den FAQ der Website stand, dass es keine mobile App gibt und man nur per E-Mail über neue Nachrichten informiert wird, ohne Absender oder Inhalt zu erfahren. Das empfand ich als veraltet – moderne Instant-Messaging-Benachrichtigungen sind heute Standard. Die Website selbst hat zudem ein merkwürdiges snapshot-basiertes System, bei dem man neue Nachrichten oft erst nach einem Reload sieht.",
      en: "This part is less relevant for the normal user of the app and would be removed in an actual release. That's why it is called \"Notification Test\" and its purpose is to trigger different types of system notifications to test them out. One of them would be the notification of receiving a new message from a user on the website. This actually was one of the key motivators for me to create a mobile application proof of concept for their website. In the FAQ they noted, that there currently is no mobile application and the only way to get notified of a new message was to check your Emails. And even there, you would not learn any information on who messaged you or the contents of the message. It felt like a primitive and outdated way of dealing with what we can do nowadays with instant messaging notifications for instance. And the website itself has a weird snapshot based system, where when you are in your inbox, you don't necessarily notice you got a new message until you refresh the website or go to the dashboard first.",
    },
  },
  {
    id: 'messaging', start: 239, app: 'messaging', refs: ['direct_message_1', 'direct_message_2'],
    title: { de: "Nachrichten & Direktkontakt", en: "Messaging & Direct Contact" },
    text: {
      de: "Nach Antippen der Nachrichten-Benachrichtigung landet man direkt im Chat mit dem entsprechenden Profil. Das Nachrichtensystem ist ein Kernfeature der Website – der erste Weg, um mit jemandem in Kontakt zu treten. Bevor man Kontaktdaten austauschen kann, muss man durch mehrere Schritte Vertrauen aufbauen. Nachrichten funktionieren wie in modernen Messengern. Das Drei-Punkte-Menü oben rechts erlaubt es, das Profil zu besuchen, den Nutzer zu blockieren oder zu melden. Über das Buddy-Icon/Profilbild gelangt man ebenfalls zum Profil. Die Farbe des Buddy-Icons ändert sich je nach Geschlecht.",
      en: "After triggering the message notification and tapping on it, we land directly on the messaging page with that profile. It is one of the core aspects of the Website, your first form of contacting people. The website requires quite a few steps for you to establish \"Trust\" and be able to share your contact details with the new penpal to maybe switch to letter exchanges. Messages can be sent like normal instant message software. The 3-dot menu at the top right allows to visit the profile, block the user or report them to the staff of the website. The profile can also be visited through clicking on the buddy icon / profile picture. Depending on the selected gender, the buddy icon also changes its color.",
    },
  },
  {
    id: 'other-profile', start: 266, app: 'other-profile', refs: ['profile_1', 'profile_2'],
    title: { de: "Ein anderes Profil", en: "Another Person's Profile" },
    text: {
      de: "Hier sehen wir, wie ein fremdes Profil aussieht. Da dieser Nutzer keine Bilder hochgeladen hat, fehlt die Bilderbox. Man kann ein Lächeln (Smile) senden, um Interesse zu signalisieren – eine gute erste Kontaktaufnahme, da die Anzahl kostenloser täglicher Kontakte begrenzt ist. Über den Button kann man auch direkt eine Nachricht schreiben. Ganz unten gibt es einen gesperrten Bereich mit Zusatzinfos für Premium-Nutzer; ein Tipp darauf führt zur Monetarisierungsseite.",
      en: "Here we can see how another person's profile page looks like. Since this person did not have pictures uploaded, we did not see the box with the pictures to click on them and view them bigger. We can send another profile a smile to notify them that we viewed their profile, considered them interesting and want to contact them. Due to the website's limited daily free contact credit, smiles are usually a good first way of contact. We can also directly contact them, landing back in the corresponding instant messaging view. At the bottom we have a locked area with additional information, saved for premium users. A tap on the linked message or the box will bring us to the monetization page.",
    },
  },
  {
    id: 'monetization', start: 286, app: 'monetization', refs: ['monetization', 'monetization_2', 'monetization_3'],
    title: { de: "Monetarisierung", en: "Monetization" },
    text: {
      de: "Die Monetarisierungsseiten sind eine nahezu 1:1-Umsetzung der Originalangebote der Website.",
      en: "This is the entire monetization page, which is basically a 1-to-1 replica of what the original website offers.",
    },
  },
  {
    id: 'inbox', start: 367, app: 'inbox', refs: ['inbox_1'],
    title: { de: "Posteingang", en: "Inbox" },
    text: {
      de: "Nach dem Zurückgehen aus einer Direktnachricht landet man im Posteingang. Hier sieht man die zuletzt kontaktierten Profile, Benachrichtigungs-Badges für ungelesene Nachrichten und so weiter. Alles folgt dem Standard-Design der Original-Website, interpretiert für eine moderne Smartphone-Anwendung.",
      en: "When we go back from a direct message with a person, we reach the inbox view. Here we have our last contacted profiles, notification bubbles of unread messages and so on. Everything here is following the standard design of the original Website, just translated to my interpretation of how it would look like in a modern smartphone application.",
    },
  },
  {
    id: 'search', start: 389, app: 'search', refs: ['search_1', 'search_2', 'search_3'],
    title: { de: "Navigation & Penpal-Suche", en: "Navigation & Penpal Search" },
    text: {
      de: "Das Burger-Menü oben links erleichtert die Navigation. Anschließend gelangt man zu einem weiteren Kernfeature: der Penpal-Suche. Sie ist im Wesentlichen eine 1:1-Umsetzung der Suchfunktion der Original-Website.",
      en: "The burger menu on the top left is another way of easing the navigation through the app. And then we get to another core feature of the original website, the penpal search. I won't go into too much detail, but it is basically just a 1-to-1 implementation of the original Website's search function.",
    },
  },
  {
    id: 'reminders', start: 428, app: 'reminders', refs: [],
    title: { de: "Weitere Benachrichtigungen", en: "Remaining Notification Tests" },
    text: {
      de: "Die restlichen Benachrichtigungstests: mehrere Nachrichten (führen zum Posteingang), tägliche Smile- und Credit-Erinnerung sowie eine zeitgesteuerte Benachrichtigung – ähnlich wie bei Facebook und anderen sozialen Medien, wenn die App nicht aktiv ist.",
      en: "The rest of the notification tests, such as multiple messages which direct to the inbox page, daily smile and credit reminder and one test of a time-based notification for when the app is not active like Facebook and other social media use.",
    },
  },
];

export const t = {
  de: {
    meta: {
      title: 'GlobalPenfriends als App – .NET MAUI Projekt von Umut Aslan',
      description: 'Inoffizielles Hobbyprojekt: wie die Brieffreundschafts-Plattform Global Penfriends als native Smartphone-App aussehen könnte. .NET MAUI, C#, MVVM, Clean Architecture. Mit Video-Tour und APK.',
    },
    nav: { why: 'Warum', tour: 'Tour', screens: 'Screens', tech: 'Technik', download: 'Download' },
    back: 'umut-aslan.dev',
    hero: {
      kicker: ".NET MAUI | C# | designed in XAML | Clean Architecture, Domain Driven Design (DDD) | Agentic Development",
      title: ['Global Penfriends,', 'als App gedacht.'],
      lead: "Ein Proof-of-Concept, entwickelt mit .NET MAUI, um die internationale Brieffreundschaftsplattform mobil erlebbar zu machen.",
      ctaTour: 'Video-Tour starten',
      ctaApk: 'APK für Android',
      badge: 'Inoffizielles Hobbyprojekt',
      facts: ['Kapitel in der Video-Tour', 'Minuten Demo', 'Plattformen aus einer Codebasis'],
    },
    why: {
      title: 'Warum diese App?',
      intro: 'Ich nutze die Plattform selbst gern. Drei Dinge haben mich gestört – die App löst jedes davon.',
      items: [
        ['Keine App', 'Laut FAQ gibt es keine mobile Anwendung, nur die Website.', 'Eine native App für Android und iOS aus einer C#-Codebasis.'],
        ['Benachrichtigung per E-Mail', 'Neue Nachrichten kommen als E-Mail – ohne Absender und Inhalt.', 'Push-Benachrichtigung mit Absender; ein Tipp öffnet direkt den Chat.'],
        ['Posteingang ohne Live-Update', 'Neue Nachrichten erscheinen oft erst nach einem Neuladen.', 'Posteingang und Badges aktualisieren sich sofort.'],
      ],
      before: 'Website heute',
      after: 'In der App',
    },
    tour: {
      title: 'Die Video-Tour',
      intro: 'Starte das Video oder wähle ein Kapitel – dazu erscheinen die Erklärung und die Original-Website zum Vergleich.',
      chapters: 'Kapitel',
      original: 'Original-Website zum Vergleich',
      play: 'Ab hier abspielen',
      video: 'Demo-Video der App (ohne Ton)',
    },
    screens: { title: 'Screens aus der App', intro: 'Standbilder aus dem Demo-Video – die echte App auf einem Android-Gerät, mit Testdaten.' },
    tech: {
      title: 'Unter der Haube',
      intro: 'Aufgebaut wie eine produktive App: klare Schichten, testbar, austauschbare Datenquelle.',
      layers: [
        ['Presentation', 'MAUI-Views in XAML'],
        ['ViewModels', 'MVVM mit CommunityToolkit.Mvvm'],
        ['Application', 'Interfaces und DTOs'],
        ['Infrastructure', 'Services, sichere Speicherung, Benachrichtigungen'],
        ['Domain', 'Entitäten und Geschäftsregeln'],
      ],
      projects: 'Projekte',
      projectList: [
        ['GlobalPenFriends', 'die App (UI, ViewModels)'],
        ['GlobalPenFriends.Core', 'Geschäftslogik, Domäne'],
        ['GlobalPenFriends.UnitTests', 'xUnit, Moq, FluentAssertions'],
        ['GlobalPenFriends.Tests', 'Integrationstests'],
      ],
      status: 'Stand',
      statusText: 'Proof of Concept mit Mock-Datenservices. Phase 2 laut Roadmap: echte API-Anbindung. Passwörter mit BCrypt gehasht, Tokens im Keychain/Keystore.',
      repo: 'Quellcode auf GitHub',
    },
    download: {
      title: 'Selbst ausprobieren',
      intro: 'Die App läuft komplett lokal mit Testdaten – es werden keine echten Konten oder Nachrichten verwendet.',
      apk: 'APK herunterladen',
      size: 'Android · 42 MB',
      steps: [
        'APK auf dem Android-Gerät herunterladen und öffnen.',
        'Installation aus dieser Quelle einmalig erlauben.',
        'Neues Profil registrieren oder mit den Demo-Daten anmelden.',
      ],
      login: 'Demo-Zugang',
      ios: 'iOS: Die App ist plattformübergreifend gebaut, für iOS gibt es aber keinen öffentlichen Build.',
    },
    disclaimer: {
      title: 'Hinweis',
      text: "Dies ist ein privates Hobbyprojekt und steht in keiner Verbindung zur offiziellen Global Penfriends-Website oder deren Betreibern. Ich habe die Plattform selbst gern genutzt und wollte zeigen, wie eine mobile Umsetzung aussehen könnte.",
    },
    footer: { by: 'Ein Projekt von', imprint: 'Impressum', privacy: 'Datenschutz' },
    switchLang: 'English',
    close: 'Schließen',
  },
  en: {
    meta: {
      title: 'Global Penfriends as an app – .NET MAUI project by Umut Aslan',
      description: 'Unofficial hobby project: how the pen-pal platform Global Penfriends could look as a native smartphone app. .NET MAUI, C#, MVVM, Clean Architecture. With video tour and APK.',
    },
    nav: { why: 'Why', tour: 'Tour', screens: 'Screens', tech: 'Tech', download: 'Download' },
    back: 'umut-aslan.dev',
    hero: {
      kicker: ".NET MAUI | C# | designed in XAML | Clean Architecture, Domain Driven Design (DDD) | Agentic Development",
      title: ['Global Penfriends,', 'imagined as an app.'],
      lead: "A proof-of-concept for how a mobile application of the original Global Penfriends website could be realized.",
      ctaTour: 'Start the video tour',
      ctaApk: 'APK for Android',
      badge: 'Unofficial hobby project',
      facts: ['chapters in the video tour', 'minutes of demo', 'platforms from one codebase'],
    },
    why: {
      title: 'Why this app?',
      intro: 'I enjoy using the platform. Three things bothered me – the app solves each of them.',
      items: [
        ['No app', 'According to the FAQ there is no mobile app, only the website.', 'A native app for Android and iOS from one C# codebase.'],
        ['Notifications by email', 'New messages arrive as an email – without sender or content.', 'A push notification with the sender; one tap opens the chat.'],
        ['Inbox without live updates', 'New messages often appear only after a reload.', 'Inbox and badges update instantly.'],
      ],
      before: 'Website today',
      after: 'In the app',
    },
    tour: {
      title: 'The video tour',
      intro: 'Play the video or pick a chapter – the explanation and the original website for comparison appear with it.',
      chapters: 'Chapters',
      original: 'Original website for comparison',
      play: 'Play from here',
      video: 'Demo video of the app (no sound)',
    },
    screens: { title: 'Screens from the app', intro: 'Stills from the demo video – the real app on an Android device, with test data.' },
    tech: {
      title: 'Under the hood',
      intro: 'Built like a production app: clear layers, testable, with a swappable data source.',
      layers: [
        ['Presentation', 'MAUI views in XAML'],
        ['ViewModels', 'MVVM with CommunityToolkit.Mvvm'],
        ['Application', 'Interfaces and DTOs'],
        ['Infrastructure', 'Services, secure storage, notifications'],
        ['Domain', 'Entities and business rules'],
      ],
      projects: 'Projects',
      projectList: [
        ['GlobalPenFriends', 'the app (UI, view models)'],
        ['GlobalPenFriends.Core', 'business logic, domain'],
        ['GlobalPenFriends.UnitTests', 'xUnit, Moq, FluentAssertions'],
        ['GlobalPenFriends.Tests', 'integration tests'],
      ],
      status: 'Status',
      statusText: 'Proof of concept with mock data services. Phase 2 on the roadmap: a real API. Passwords hashed with BCrypt, tokens in Keychain/Keystore.',
      repo: 'Source on GitHub',
    },
    download: {
      title: 'Try it yourself',
      intro: 'The app runs entirely locally with test data – no real accounts or messages are involved.',
      apk: 'Download APK',
      size: 'Android · 42 MB',
      steps: [
        'Download the APK on your Android device and open it.',
        'Allow installs from this source once.',
        'Register a new profile or sign in with the demo credentials.',
      ],
      login: 'Demo login',
      ios: 'iOS: the app is cross-platform, but there is no public iOS build.',
    },
    disclaimer: {
      title: 'Note',
      text: "This is a private hobby project and is not affiliated with the official Global Penfriends website or its operators. I enjoyed using the platform and wanted to demonstrate how a mobile implementation could look.",
    },
    footer: { by: 'A project by', imprint: 'Legal notice', privacy: 'Privacy' },
    switchLang: 'Deutsch',
    close: 'Close',
  },
};

export const fmtTime = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
