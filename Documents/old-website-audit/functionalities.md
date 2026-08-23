# Old Website Functionality — gesundheits-thaimassage.ch

## Scroll-triggered animations (the main one)
Sections fade/slide in as you scroll down the page, rather than being visible immediately.

## Navigation
- HOME / ANGEBOT / ÜBER UNS are not separate pages — they're client-side tabs (confirmed: hitting the URLs directly returns 404). Switching tabs swaps the whole page content without a real page load.
- "JETZT BUCHEN" (top nav) and "Termin buchen" (hero button) both go to the Angebot tab (the service/price list) — not straight to a booking calendar.

## Angebot (services) page
- Service list is filterable via tabs: Alle Services / Traditionelle Thai-Massage / Klassische Massage / Aroma- und Ölmassage / Hot-Stone. Selecting one filters the price list below to that category.
- Each price row has its own "Jetzt buchen" button, and this one behaves differently from the nav buttons: it navigates to a dedicated booking page (see jetztbuchen-page screenshot) with a real calendar, rather than just another tab. The specific price tier clicked carries through to that page.
- Google Maps is embedded directly on the Angebot/contact section (interactive, pinned to the business address), not just a static image or link.

## Contact form
Fields: Vorname, Nachname, E-Mail-Adresse* (required), Telefonnummer, Nachricht* (required). Submit button: "Einreichen". Behavior on submit not yet tested (likely a Wix form handler emailing the owner) — worth checking what confirmation the user sees.

## Not yet tested / open questions
- What happens after picking an actual available time slot on the booking page (payment/deposit step? contact info form? confirmation email?)
- What happens after submitting the contact form
- Whether there's a cookie/consent banner (none seen in screenshots, but worth checking on first visit / private browsing)
- No language switcher — German only
