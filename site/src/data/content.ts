/**
 * All page content in one place. Chapters drive the video tour, the screen gallery and the
 * no-JS fallback alike. `app` = a frame from the demo video (src/assets/app), `refs` = screenshots
 * of the original website for comparison (src/assets/reference). Reference shots that show other
 * members' personal data are deliberately not used.
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
    title: { de: 'Anmeldung', en: 'Sign in' },
    text: {
      de: 'Login mit E-Mail und Passwort wie auf der Website. Zum Testen kann man sich registrieren oder die hinterlegten Demo-Zugangsdaten nutzen (siehe Download-Bereich).',
      en: 'Email and password sign-in, as on the website. To try it, register a new profile or use the built-in demo credentials (see the download section).',
    },
  },
  {
    id: 'register1', start: 16, app: 'register1', refs: ['page1_1', 'page1_2'],
    title: { de: 'Registrierung 1/4', en: 'Registration 1/4' },
    text: {
      de: 'Die Validierung greift sofort – im Video an einem ungültigen Leerzeichen im Profilnamen. Die Regeln entsprechen exakt denen der Original-Website.',
      en: 'Validation reacts immediately – shown with an invalid space in the profile name. The rules match the original website exactly.',
    },
  },
  {
    id: 'register2', start: 66, app: 'register2', refs: ['page2_1', 'page2_2'],
    title: { de: 'Registrierung 2/4', en: 'Registration 2/4' },
    text: {
      de: 'Weitere Angaben wie Sprachen und Postadresse sowie die Bestätigung, dass die Plattform nicht zum Dating genutzt wird. Global Penfriends achtet streng auf die Sicherheit seiner Mitglieder.',
      en: 'More details such as languages and postal address, plus the confirmation that the platform is not used for dating. Global Penfriends is strict about its members’ safety.',
    },
  },
  {
    id: 'register3', start: 109, app: 'register3', refs: ['page3'],
    title: { de: 'Registrierung 3/4 · Interessen', en: 'Registration 3/4 · Interests' },
    text: {
      de: 'Alle Interessen der Website (Stand 12.02.2026) – in der App zusätzlich nach Themen gruppiert und als Chips auswählbar, weil die lange Checkbox-Liste des Originals unübersichtlich ist.',
      en: 'Every interest offered by the website (as of 12 Feb 2026) – grouped by topic and selectable as chips in the app, because the original’s long checkbox list is hard to scan.',
    },
  },
  {
    id: 'register4', start: 136, app: 'register4', refs: ['page_4'],
    title: { de: 'Registrierung 4/4 · Über mich', en: 'Registration 4/4 · About me' },
    text: {
      de: 'Kurze Seite, viel Inhalt: Selbstbeschreibung, was man in einem Brieffreund sucht und etwas über die eigene Kultur – mit Mindest- und Maximallänge und Zeichenzähler.',
      en: 'Short page, real effort: describe yourself, what you look for in a penpal and something about your culture – with minimum and maximum length and a live character counter.',
    },
  },
  {
    id: 'review', start: 154, app: 'review', refs: ['profile_finish'],
    title: { de: 'Profil in Prüfung', en: 'Profile under review' },
    text: {
      de: 'Wie auf der Website: Das Profil wird von einem Menschen geprüft und dann freigeschaltet. Bis dahin lassen sich Bilder und Profil bearbeiten.',
      en: 'As on the website: a real person reviews the profile before it goes live. Until then, pictures and profile can still be edited.',
    },
  },
  {
    id: 'dashboard', start: 156, app: 'dashboard', refs: ['dashboard'],
    title: { de: 'Dashboard', en: 'Dashboard' },
    text: {
      de: 'Look & Feel des Originals: Begrüßung mit Abo-Stufe, ID, Snailmail-Guthaben und Profilbild, die offenen Schritte mit Freigabestatus, Hinweise der Admins und der Weg zum Premium-Upgrade.',
      en: 'The original’s look and feel: welcome box with plan, ID, snail-mail credits and profile picture, the open steps with approval status, admin notices and the way to premium.',
    },
  },
  {
    id: 'upload', start: 162, app: 'upload', refs: [],
    title: { de: 'Profilbild hochladen', en: 'Upload a profile photo' },
    text: {
      de: 'Ein Tipp auf die Kamera öffnet die Bildauswahl des Telefons. Das Foto wird zum aktiven Profilbild, bis zu drei Bilder sind möglich; beim Löschen rückt das nächste automatisch nach.',
      en: 'Tapping the camera opens the phone’s photo picker. The photo becomes the active profile picture; up to three are allowed, and deleting one moves the next into place.',
    },
  },
  {
    id: 'profile', start: 174, app: 'profile', refs: [],
    title: { de: 'Eigenes Profil', en: 'My profile' },
    text: {
      de: 'Alle vier Registrierungsseiten in einer gut lesbaren Ansicht mit Abschnitten. Bilder öffnen sich bildschirmfüllend, gemeinsame Interessen leuchten bei fremden Profilen grün, unten gibt es ähnliche Profile als Vorschläge.',
      en: 'All four registration pages in one readable view with sections. Photos open full screen, shared interests light up green on other profiles, and similar profiles are suggested at the bottom.',
    },
  },
  {
    id: 'notifications', start: 230, app: 'notifications', refs: [],
    title: { de: 'Push-Benachrichtigungen', en: 'Push notifications' },
    text: {
      de: 'Der eigentliche Grund für das Projekt: Die Website hat keine App und meldet neue Nachrichten nur per E-Mail – ohne Absender und Inhalt. Die App zeigt echte Systembenachrichtigungen; die Testknöpfe dafür gäbe es in einer Veröffentlichung nicht.',
      en: 'The actual reason for this project: the website has no app and announces new messages only by email – without sender or content. The app shows real system notifications; the test buttons for them would not ship in a release.',
    },
  },
  {
    id: 'messaging', start: 239, app: 'messaging', refs: ['direct_message_1', 'direct_message_2'],
    title: { de: 'Nachrichten', en: 'Messaging' },
    text: {
      de: 'Ein Tipp auf die Benachrichtigung führt direkt in den Chat. Nachrichten funktionieren wie in modernen Messengern; das Vertrauens-System der Website (erst nach mehreren Schritten Kontaktdaten teilen) ist übernommen. Über das Menü: Profil ansehen, blockieren, melden.',
      en: 'Tapping the notification opens the chat directly. Messaging works like a modern messenger, and the website’s trust system (contact details only after several steps) is preserved. The menu lets you view the profile, block or report.',
    },
  },
  {
    id: 'other-profile', start: 266, app: 'other-profile', refs: [],
    title: { de: 'Fremdes Profil', en: 'Another member’s profile' },
    text: {
      de: 'Mit einem Smile Interesse zeigen – sinnvoll, weil kostenlose Kontakte pro Tag begrenzt sind – oder direkt schreiben. Premium-Informationen sind gesperrt und führen zur Upgrade-Seite.',
      en: 'Send a smile to show interest – useful because free contacts per day are limited – or write directly. Premium details are locked and lead to the upgrade page.',
    },
  },
  {
    id: 'monetization', start: 286, app: 'monetization', refs: ['monetization', 'monetization_2', 'monetization_3'],
    title: { de: 'Premium & Add-ons', en: 'Premium & add-ons' },
    text: {
      de: 'Die Abo- und Zusatzangebote der Website, nahezu 1:1 für das Smartphone umgesetzt.',
      en: 'The website’s subscription and add-on offers, rebuilt almost one-to-one for the phone.',
    },
  },
  {
    id: 'inbox', start: 367, app: 'inbox', refs: ['inbox_1'],
    title: { de: 'Posteingang', en: 'Inbox' },
    text: {
      de: 'Zuletzt kontaktierte Profile mit Badges für ungelesene Nachrichten – live aktualisiert statt wie auf der Website erst nach einem Neuladen.',
      en: 'Recently contacted profiles with unread badges – updated live instead of only after a page reload, as on the website.',
    },
  },
  {
    id: 'search', start: 389, app: 'search', refs: ['search_1', 'search_2'],
    title: { de: 'Navigation & Penpal-Suche', en: 'Navigation & penpal search' },
    text: {
      de: 'Ein Burger-Menü für schnelle Navigation und die Brieffreund-Suche mit allen Filtern der Website, Premium-Filter entsprechend gesperrt.',
      en: 'A burger menu for quick navigation and the penpal search with all of the website’s filters, premium filters locked accordingly.',
    },
  },
  {
    id: 'reminders', start: 428, app: 'reminders', refs: [],
    title: { de: 'Erinnerungen', en: 'Reminders' },
    text: {
      de: 'Weitere Benachrichtigungen: mehrere Nachrichten (führen in den Posteingang), tägliche Smile- und Credit-Erinnerung und eine zeitgesteuerte Benachrichtigung, während die App im Hintergrund ist.',
      en: 'More notifications: several messages at once (open the inbox), daily smile and credit reminders, and a scheduled notification while the app is in the background.',
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
      kicker: '.NET MAUI · C# · Android & iOS',
      title: ['Global Penfriends,', 'als App gedacht.'],
      lead: 'Die Brieffreundschafts-Plattform gibt es nur im Browser – neue Nachrichten erfährt man per E-Mail. Ich habe gezeigt, wie eine native App aussehen könnte: gleiche Regeln, gleiches Look & Feel, aber mit Push-Benachrichtigungen.',
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
      noRef: 'Neu in der App – auf der Website gibt es das so nicht.',
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
      text: 'Dies ist ein privates, nicht kommerzielles Hobbyprojekt. Es steht in keiner Verbindung zu Global Penfriends oder deren Betreibern; Name und Logo gehören ihren Inhabern. Die Vergleichsbilder der Website dienen nur der Gegenüberstellung, persönliche Daten anderer Mitglieder sind nicht enthalten.',
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
      kicker: '.NET MAUI · C# · Android & iOS',
      title: ['Global Penfriends,', 'imagined as an app.'],
      lead: 'The pen-pal platform only exists in the browser – new messages arrive by email. I built what a native app could look like: same rules, same look and feel, but with push notifications.',
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
      noRef: 'New in the app – the website has nothing like it.',
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
      text: 'This is a private, non-commercial hobby project. It is not affiliated with Global Penfriends or its operators; name and logo belong to their owners. Screenshots of the website are shown for comparison only and contain no personal data of other members.',
    },
    footer: { by: 'A project by', imprint: 'Legal notice', privacy: 'Privacy' },
    switchLang: 'Deutsch',
    close: 'Close',
  },
};

export const fmtTime = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
