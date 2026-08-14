# A Little Invitation 💍

> A little digital invitation, made with a lot of love, for a very special bride.

## About The Project

**A Little Invitation** is a personalized interactive wedding-train invitation created as a gift for my childhood friend in preparation for her wedding.

Instead of sending a conventional message asking a few special women to be part of the wedding train, I wanted to create something more personal — something she could share with the women she loves and something they could experience before officially saying yes.

The project turns a simple invitation into a small interactive journey.

From the moment the page opens, the guest is welcomed with photographs of the bride and a personal message. They are then invited to answer the big question:

**"Will you be part of my wedding train?"**

The experience continues differently depending on their response, eventually leading those who say yes to a celebratory confirmation and an invitation to join the Aso Ebi ladies' WhatsApp group.

This project was created not simply as a website, but as a digital keepsake for an important moment in my friend's life.

---

## The Story Behind It

Some friendships begin long before we understand how important they will become.

This project was made for a childhood friend — someone whose journey I have had the privilege of witnessing over the years.

As she prepares to begin a new chapter of her life, I wanted to create something that felt personal, thoughtful, and memorable.

The goal was simple:

**Make asking "Will you be on my wedding train?" feel like an experience.**

Rather than creating a traditional invitation card, this project combines photography, typography, animation, interaction, and a little bit of playful persuasion to create a digital invitation that feels warm and personal.

Every screen was designed around the feeling of celebrating friendship, sisterhood, and the excitement of getting ready for a wedding together.

---

## The Experience

The invitation is built around four interactive screens.

### 01 — The Invitation

The experience begins with a rotating photo gallery of the bride.

A personal introduction follows:

> "I have something very special to ask you…"

The guest is then invited to continue and discover what the bride wants to ask.

---

### 02 — The Question

The guest arrives at the main question:

> **"Will you be part of my wedding train?"**

There are two possible responses:

- **YES, I'M IN!**
- **Let me think…**

The interface keeps the experience simple while giving the guest room to respond naturally.

---

### 03 — The Celebration

For guests who say yes, the experience transforms into a celebratory confirmation.

The screen communicates that their place in the bride's squad is official and includes a subtle animated confetti effect.

The final call-to-action invites them to join the Aso Ebi ladies' WhatsApp group.

---

### 04 — A Little Persuasion

For anyone who chooses to think about it, the invitation doesn't end immediately.

Instead, the guest receives a playful and heartfelt message about the memories they could share together:

- getting ready together
- laughing over nothing
- taking too many pictures
- fixing each other's outfits
- creating memories together

They are then given another opportunity to say yes.

The intention is playful rather than forceful — a little reminder of why having them there would mean so much.

---

## Design Direction

The visual identity of the invitation was intentionally kept soft, warm, and elegant.

### Colour Palette

The interface uses a neutral wedding-inspired palette built around:

- Warm cream
- Soft beige
- Taupe
- Muted brown
- Deep espresso

The restrained palette keeps the photographs and typography as the primary visual elements.

### Typography

Two typefaces are used throughout the experience:

**Cormorant Garamond**

Used for large headings, emotional copy, and elegant editorial moments.

**DM Sans**

Used for buttons, labels, navigation elements, and supporting interface text.

The combination creates a balance between a classic editorial wedding aesthetic and a clean modern interface.

### Icons

Font Awesome icons are used throughout the interface instead of Unicode emojis, keeping the visual language consistent across devices and browsers.

---

## Features

- Responsive design
- Bride photo slider
- Automatic image transitions
- Animated slider indicators
- Multi-screen invitation experience
- Interactive response buttons
- "Let me think" modal
- Playful persuasion screen
- Animated success screen
- Dynamic confetti animation
- Font Awesome icon integration
- WhatsApp group call-to-action
- Smooth transitions and micro-interactions
- Mobile-first layout
- Desktop responsive styling
- Google Fonts integration

---

## User Flow

```text
                    ┌─────────────────────┐
                    │   Invitation Opens  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Meet the Bride    │
                    │   Photo Experience   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Continue to       │
                    │      Question       │
                    └──────────┬──────────┘
                               │
                               ▼
                 ┌────────────────────────────┐
                 │ Will you join the wedding  │
                 │           train?            │
                 └─────────────┬──────────────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
                    ▼                     ▼
             ┌─────────────┐       ┌─────────────┐
             │ YES, I'M IN │       │ Let me think│
             └──────┬──────┘       └──────┬──────┘
                    │                     │
                    │                     ▼
                    │              ┌─────────────┐
                    │              │ Think Modal │
                    │              └──────┬──────┘
                    │                     │
                    │              ┌──────┴──────┐
                    │              │             │
                    │              ▼             ▼
                    │        ┌───────────┐ ┌────────────┐
                    │        │ I'm In!   │ │ Still      │
                    │        └─────┬─────┘ │ Thinking   │
                    │              │       └─────┬──────┘
                    │              │             │
                    │              │             ▼
                    │              │       ┌────────────┐
                    │              │       │ Persuasion │
                    │              │       │   Screen   │
                    │              │       └─────┬──────┘
                    │              │             │
                    │              │             ▼
                    │              │       ┌────────────┐
                    │              │       │   YES!     │
                    │              │       └─────┬──────┘
                    │              │             │
                    └──────────────┴─────────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │  YOU SAID YES!    │
                         │  Celebration      │
                         │  + Confetti       │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │ Join Aso Ebi      │
                         │ Ladies on WhatsApp│
                         └───────────────────┘


## Project Structure

```text
wedding/
│
├── assets/
│   ├── bride-1.jpg
│   ├── bride-2.jpg
│   └── bride-3.jpg
│
├── index.html
├── styles.css
├── scripts.js
└── README.md

## Technologies Used
### HTML5

Used to structure the invitation screens, content, buttons, modal, and interactive elements.

### CSS3

Used for:

Responsive layouts
Typography
Animations
Transitions
Photo presentation
Modal styling
Confetti
Hover states
Responsive behaviour

### JavaScript

Used to control:

Photo slider
Screen transitions
Button interactions
Modal behaviour
Success state
Dynamic confetti generation
WhatsApp redirection
Google Fonts
Cormorant Garamond
DM Sans
Font Awesome

Used for interface icons throughout the invitation.
Running The Project Locally

Because this is a lightweight frontend project, there is no backend or package installation required.

Clone the repository:

git clone YOUR_REPOSITORY_URL

Navigate into the project:

cd wedding

Then open index.html in a browser.

For the best development experience, the project can also be opened using the Live Server extension in Visual Studio Code.

Customization

The invitation can easily be personalized for another bride or event.

Photos

Replace the images inside:

assets/

while keeping the filenames:

bride-1.jpg
bride-2.jpg
bride-3.jpg
Invitation Text

The messages can be edited directly inside index.html.

WhatsApp Group

Update the WhatsApp group link inside scripts.js:

const whatsappGroupLink = "YOUR_WHATSAPP_GROUP_LINK";
Accessibility & UX Considerations

The project includes several small details intended to make the experience comfortable and intuitive:

Semantic HTML structure
Descriptive image alt attributes
Clear interactive buttons
Large touch-friendly controls
High contrast between primary text and backgrounds
Responsive typography
Keyboard-accessible buttons
Visual feedback through hover and active states
Modal close control
Why I Built It

This project started with a simple idea:

A special person deserves more than a generic invitation.

Technology doesn't always have to solve a complex business problem or demonstrate a complicated technical concept.

Sometimes, it can simply help us express something meaningful.

This project is one of those moments.

It is a small combination of code, design, photography, and friendship — created to celebrate a woman stepping into one of the most important chapters of her life.

Future Improvements

Potential improvements for future versions include:

Personalized guest names
Individual invitation links
RSVP tracking
Guest response dashboard
Wedding countdown
Additional wedding details
Personalized Aso Ebi information
Music toggle
More advanced photo transitions
Guest-specific WhatsApp links
Analytics for invitation responses
Credits

Concept & Development:
Asike Sandra

Created for:
A childhood friend preparing for her wedding

Purpose:
A personalized digital wedding-train invitation and keepsake.

A Little Note

This isn't just a frontend project.

It's a reminder that sometimes the smallest projects can carry the biggest meaning.

Built with HTML, CSS, JavaScript, photographs, a little animation, and a whole lot of love.

Here's to friendship, sisterhood, and the beautiful chapters ahead.

© 2026 Asike Sandra. Created as a personal wedding gift.