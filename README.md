<div align="center">

# 🥛 Doodhwala

### *Your milkman, finally online.*

A daily-milk delivery marketplace connecting local milkmen with the households they serve — schedules, milk types, quantities, and billing, all in one place.

<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

![Status](https://img.shields.io/badge/status-in%20development-yellow?style=flat-square)
![Frontend](https://img.shields.io/badge/backend-not%20connected-lightgrey?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Made with](https://img.shields.io/badge/made%20with-%E2%9D%A4-red?style=flat-square)

**[🔗 Live Preview](https://amanwithgit.github.io/yadav-infotech/)**

</div>

<br>

---

## 📖 What is Doodhwala?

Every Indian household knows the *doodhwala* — the milkman who shows up every morning, keeps a handwritten register, and gets paid at month-end. **Doodhwala** takes that exact daily habit and moves it online:

- 🧑‍🌾 **Milkmen** list their dairy, set prices per milk type, and manage subscribers from a dashboard instead of a notebook.
- 🏠 **Customers** browse local milkmen, pick a milk type, set quantity + delivery days, and get one bill a month.

No app store, no backend yet — this is the **front-end structure** of the product: fully designed, fully clickable, ready to be wired up to a real database.

<br>

## 🧭 Table of Contents

- [Features](#-features)
- [Pages Overview](#-pages-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Design System](#-design-system)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

<br>

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🔄 | **Flexible schedules** | Daily, alternate-day, or pick exact days of the week |
| 🥛 | **Multiple milk types** | Cow, buffalo, toned, full cream, A2 desi, organic |
| ⚖️ | **Precise quantities** | Order in 0.5 L steps with a live price calculator |
| ✈️ | **Vacation pause** | Pause any subscription for exact dates |
| 🧾 | **One monthly bill** | Every delivery auto-logged, billed once a month |
| 📅 | **Delivery calendar** | See delivered / pending / skipped days at a glance |
| ★ | **Ratings & trust** | Every milkman shows real ratings before you subscribe |
| 🛣️ | **Route view for milkmen** | Today's deliveries sorted by street & time slot |
| 💬 | **Direct messaging** *(UI only)* | Message a subscriber or milkman directly |

<br>

## 🗺️ Pages Overview

<table>
<tr>
<td width="50%" valign="top">

### 🏠 `index.html`
The marketing homepage — hero section with a live toggleable delivery ledger, "How it works" tabs (customer vs. milkman), browse-milkmen cards, and a features grid.

### 🔐 `login.html`
A single login/signup form that switches between **Customer** and **Milkman** modes, with role-specific fields.

</td>
<td width="50%" valign="top">

### 🧑‍🤝‍🧑 `customer-dashboard.html`
Browse & filter milkmen, subscribe via a guided modal (milk type → quantity → days → time slot), manage active subscriptions, view the delivery calendar and billing history.

### 🧑‍🌾 `milkman-dashboard.html`
Today's stats, a delivery route checklist, subscriber list, product/pricing table, delivery calendar, and earnings history.

</td>
</tr>
</table>

<br>

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology | Why |
|---|---|---|
| Structure | **HTML5** | Semantic tags (`header`, `main`, `section`, `footer`) for clean, accessible markup |
| Styling | **CSS3** | Custom design system using CSS variables — no framework, fully hand-built |
| Behaviour | **Vanilla JavaScript** | No build tools, no dependencies — plain DOM manipulation & event listeners |
| Hosting | **GitHub Pages** | Free static hosting, auto-deploys on every push to `main` |

</div>

> 💡 No backend, database, or payment system is connected yet — every "Confirm", "Subscribe", or "Save" button is UI-only for now.

<br>

## 📁 Project Structure

```
doodhwala/
├── 📄 index.html                 → Landing / marketing page
├── 📄 login.html                 → Login & signup (customer + milkman)
├── 📄 customer-dashboard.html    → Customer app
├── 📄 milkman-dashboard.html     → Milkman app
├── 📂 css/
│   └── style.css                 → Shared design system (colors, layout, components)
├── 📂 js/
│   └── script.js                 → Shared interactivity + mock data
└── 📄 README.md                  → You are here
```

<br>

## 🚀 Getting Started

**Option 1 — Just view it live:**

👉 **[amanwithgit.github.io/yadav-infotech](https://amanwithgit.github.io/yadav-infotech/)**

**Option 2 — Run it on your machine:**

```bash
# Clone the repo
git clone https://github.com/AmanwithGit/yadav-infotech.git

# Move into the folder
cd yadav-infotech

# Open it — no build step, no install needed
# (just double-click index.html, or use a live server extension)
```

That's it — it's plain HTML/CSS/JS, so there's nothing to install or compile.

<br>

## 🎨 Design System

<div align="center">

| Color | Swatch | Usage |
|---|---|---|
| Forest Green `#2F6B4F` | 🟩 | Primary buttons, links, trust |
| Turmeric Gold `#E29A2E` | 🟨 | Accents, secondary CTAs |
| Milk-can Steel `#4C7B9E` | 🟦 | Tags, info highlights |
| Sage Mist `#EFF3EC` | ⬜ | Page background |

**Typography:** `Fraunces` (headings) · `Inter` (body text) · `IBM Plex Mono` (numbers, schedules, ledger)

</div>

The whole visual identity is built around the idea of the **traditional milk register (bahi-khata)** — the punch-card style "ledger" widget on the homepage and the delivery calendars are both modeled on that handwritten notebook every real milkman keeps.

<br>

## 🧩 Roadmap

- [ ] Connect a real backend (auth, database for milkmen/customers/orders)
- [ ] Real payment integration for monthly billing
- [ ] Live order/delivery status updates
- [ ] Milkman verification & KYC
- [ ] Push notifications for delivery reminders
- [ ] Multi-language support (Hindi / Punjabi)

<br>

## 🤝 Contributing

This is currently a solo learning project. Suggestions and feedback are welcome — feel free to open an issue.

<br>

## 📜 License

Licensed under the **MIT License** — free to use, modify, and learn from.

<br>

---

<div align="center">

Made with 🥛 and ❤️ for every doodhwala who deserves better than a paper register.

</div>
