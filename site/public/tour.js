// Guided tour of the Global Penfriends showcase (German and English) – mechanics in site-tour.js,
// shared with every project on umut-aslan.dev. The page's own video tour is a different thing (#tour).
import { startTours } from '/site-tour.js';

const en = document.documentElement.lang.startsWith('en');
const home = () => location.pathname === '/' || location.pathname === '/en/';

const de = [
  {
    title: 'Willkommen!',
    text: `Diese Seite zeigt Umuts App **Global Penfriends** – ein inoffizielles Hobbyprojekt: So könnte die internationale
Brieffreundschafts-Plattform als **native Smartphone-App** aussehen.`,
  },
  {
    target: '#why .cards',
    title: 'Warum diese App?',
    mood: 'worried',
    text: `Laut FAQ gibt es **keine App**, neue Nachrichten kommen nur als **E-Mail ohne Absender und Inhalt**, und der Posteingang
aktualisiert sich **nicht live**.

Jede Karte zeigt: die Website heute – und wie die App es löst.`,
  },
  {
    target: '#tour .stage',
    title: 'Die Video-Tour',
    text: `Video starten oder ein **Kapitel wählen** – dazu erscheinen die Erklärung und die **Original-Website zum Vergleich**.`,
  },
  {
    target: '#screens',
    title: 'Screens aus der App',
    text: `Standbilder aus dem Demo-Video: die echte App auf einem Android-Gerät, mit Testdaten.`,
  },
  {
    target: '#tech',
    title: 'Unter der Haube',
    text: `**.NET MAUI und C#**, aufgebaut wie eine produktive App: klare Schichten mit MVVM, eigene Projekte für Unit- und
Integrationstests, austauschbare Datenquelle.`,
  },
  {
    target: '#download',
    title: 'Selbst ausprobieren',
    mood: 'curious',
    text: `Die **APK für Android** herunterladen und mit dem Demo-Zugang anmelden. Die App läuft komplett lokal mit Testdaten –
keine echten Konten oder Nachrichten.`,
  },
  {
    title: 'Viel Spaß!',
    mood: 'celebrate',
    text: `Weitere Projekte – Lager, ERP, Maschinen, Excel-Ablösung – finden Sie auf [umut-aslan.dev](https://umut-aslan.dev).
Jedes hat eine eigene Tour wie diese.`,
  },
];

const enSteps = [
  {
    title: 'Welcome!',
    text: `This page shows Umut's app **Global Penfriends** – an unofficial hobby project: how the international pen-pal platform
could look as a **native smartphone app**.`,
  },
  {
    target: '#why .cards',
    title: 'Why this app?',
    mood: 'worried',
    text: `According to the FAQ there is **no app**, new messages only arrive as an **email without sender or content**, and the inbox
does **not update live**.

Each card shows the website today – and how the app solves it.`,
  },
  {
    target: '#tour .stage',
    title: 'The video tour',
    text: `Play the video or **pick a chapter** – the explanation and the **original website for comparison** appear next to it.`,
  },
  {
    target: '#screens',
    title: 'Screens from the app',
    text: `Stills from the demo video: the real app on an Android device, with test data.`,
  },
  {
    target: '#tech',
    title: 'Under the hood',
    text: `**.NET MAUI and C#**, built like a production app: clear layers with MVVM, separate projects for unit and integration tests,
a replaceable data source.`,
  },
  {
    target: '#download',
    title: 'Try it yourself',
    mood: 'curious',
    text: `Download the **APK for Android** and sign in with the demo login. The app runs fully locally with test data –
no real accounts or messages.`,
  },
  {
    title: 'Have fun!',
    mood: 'celebrate',
    text: `More projects – warehouse, ERP, machines, replacing Excel – are on [umut-aslan.dev](https://umut-aslan.dev).
Each one has its own tour like this.`,
  },
];

startTours([{ id: 'globalpenfriends', lang: en ? 'en' : 'de', when: home, steps: en ? enSteps : de }]);
