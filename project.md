# Ahash Mendis Portfolio – Project Specification

## Project Overview

This project is a **modern cinematic portfolio website** for **Ahash Mendis**, a digital creator, entrepreneur, and technology enthusiast.

The portfolio is designed to showcase **multiple creative and technical domains**, acting as a **central ecosystem hub** for:

* Web development
* Software development
* Video production
* Drone videography
* Social media work
* Personal brands and startups

Unlike a traditional developer portfolio, this website should feel like a **multi-disciplinary creative studio website**.

The design should be **visually impressive, interactive, and animation-driven**.

---

# Technology Stack

Framework: Next.js (App Router)
Language: TypeScript
Styling: Tailwind CSS
Animations: Framer Motion

Deployment target: Vercel

The architecture should follow modern **React best practices**, reusable components, and scalable folder structure.

---

# Design System

## Theme

Primary theme: **Dark Blue / Navy**

Color palette:

Primary background:

* Dark Navy
* Midnight Blue
* Deep Ocean Blue

Accent colors:

* Electric Blue
* Cyan
* Light Neon Blue

Design characteristics:

* modern
* cinematic
* futuristic
* clean but visually rich
* dark UI

The site should feel like a **high-end tech and creative portfolio**.

---

# Visual Style

Design elements should include:

Dark gradient backgrounds
Subtle glowing highlights
Glassmorphism cards
Animated gradient borders
Smooth motion effects

The overall experience should feel **immersive and dynamic**.

---

# Animations

Animations are extremely important in this project.

Use **Framer Motion** for:

* section reveal animations
* hover animations
* card hover glow
* fade-in scroll transitions
* slide-up animations
* smooth page transitions

Examples:

### Scroll Reveal

Sections should appear slowly while scrolling.

Animation style:

* fade in
* slide upward

### Hover Animations

Cards should:

* scale slightly on hover
* glow with blue light
* display animated borders

### Smooth Scrolling

The entire site should have smooth scroll transitions.

---

# Website Structure

## Homepage

The homepage acts as the **central navigation hub** for the entire ecosystem.

Sections should appear sequentially while scrolling.

Homepage sections:

1. Hero Section
2. Navigation Grid
3. Brand Ecosystem
4. Skills Section
5. Recent Projects Section
6. Portfolio Categories
7. Contact Section

---

# Hero Section

The hero section should be visually striking.

Display:

Title
Ahash Mendis

Subtitle
Digital creator building brands, websites, films and experiences.

Hero features:

* animated text entrance
* subtle particle background
* glowing typography
* parallax scrolling effect

Buttons:

Primary button:
Contact Me

Secondary button:
View My Work

Buttons should include hover animations.

---

# Navigation Grid

Create **six animated cards** in the center of the homepage.

Cards:

* Websites
* Software
* Video Production
* Drone Shoots
* Social Media
* Brands

Each card should include:

icon
title
hover animation

Clicking a card scrolls to its section.

---

# Brand Ecosystem Section

This section highlights **brands created by Ahash**.

Each brand should have its **own page within the site**.

Routes:

/brands/lenscape
/brands/hover
/brands/activeedge

Brand descriptions:

Lenscape
A cinematic video production studio focused on storytelling and wedding films.

Hover by Ahash
Drone cinematography brand offering aerial videography and landscape visuals.

Active Edge
A performance apparel and fitness clothing brand.

Future brands may be added later.

---

# Skills Section

Add a dedicated **skills section on the homepage**.

This section should resemble a **tech terminal / categorized skill dashboard**.

Skill categories:

Web Development
Software Development
Video Production
Drone Cinematography
Social Media Management

Each category should display:

icons
skill tags
animated cards

Example skills:

Web Development
Next.js
React
Tailwind
Node.js

Software Development
Python
Automation Tools
AI Tools

Video Production
Premiere Pro
DaVinci Resolve
Cinematic Editing

Drone Cinematography
Aerial Filming
Real Estate Drone
Landscape Cinematography

Social Media
Content Strategy
Reels Production
Audience Growth

---

# Recent Projects Section

Display **recent work across all disciplines**.

Project cards should include:

Project title
Project type
Short description
Technologies used
External link

Project types may include:

Web Project
Video Production
Drone Shoot
Software Tool
Social Media Campaign

Example card structure:

Project Title
Type: Web Development
Description: Short explanation of the project.

Cards should include hover animation and glow effects.

---

# Portfolio Categories

Each discipline should have its own visual section.

## Web Development

Display websites and web applications built by Ahash.

Use a project grid layout.

---

## Software Tools

Display software tools or utilities created by Ahash.

Examples:

automation tools
AI utilities
productivity tools

---

## Video Production

Show cinematic work produced through **Lenscape**.

Content examples:

wedding videos
commercial productions
cinematic reels

Use a **video gallery layout**.

---

## Drone Videography

Show aerial work created under **Hover by Ahash**.

Examples:

landscape aerial shots
real estate drone videos
event aerial coverage

---

## Social Media Projects

Show social media work including:

content production
brand campaigns
viral short-form videos

---

# Contact Section

Add a visually appealing **contact section**.

Buttons:

Send a Message
LinkedIn
Email

Buttons should include hover animation and glowing highlights.

The contact section should encourage collaboration.

---

# Components

Create reusable React components.

Suggested components:

Navbar
Hero
NavigationCard
SkillCard
ProjectCard
BrandCard
ContactSection

Components should be placed in:

/components

---

# Responsiveness

The site must work well on:

desktop
tablet
mobile

Tailwind responsive utilities should be used.

---

# Future Expansion

The architecture must support future additions:

* new brands
* new project categories
* additional portfolio pages
* blog content
* client case studies

The design should remain scalable.
