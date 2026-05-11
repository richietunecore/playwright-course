---
id: module-5-actions-assertions
title: Module 5 - Actions & Assertions
sidebar_position: 6
---




# ⚡ Module 5 – Actions & Assertions

Actions are how we **interact** with the page.  
Assertions are how we **verify** the page behaves correctly.

---

## ✅ Actions

---

### 1️⃣ Navigation

```javascript
// Go to URL
await page.goto('https://example.com');

// Go back
await page.goBack();

// Go forward
await page.goForward();

// Reload page
await page.reload();
```

---

### 2️⃣ Clicking

```javascript
// Single click
await page.getByRole('button', { name: 'Submit' }).click();

// Double click
await page.getByRole('button', { name: 'Submit' }).dblclick();

// Right click
await page.getByRole('button', { name: 'Submit' }).click({ button: 'right' });

// Click with delay
await page.getByRole('button', { name: 'Submit' }).click({ delay: 100 });
```

---

### 3️⃣ Typing & Filling

```javascript
// Fill input (clears first then fills)
await page.getByLabel('Email').fill('user@test.com');

// Type slowly character by character
await page.getByLabel('Email').pressSequentially('user@test.com', { delay: 100 });

// Clear input
await page.getByLabel('Email').clear();

// Press key
await page.keyboard.press('Enter');
await page.keyboard.press('Tab');
await page.keyboard.press('Escape');
```

---

### 4️⃣ Dropdowns & Select

```javascript
// Select by value
await page.getByLabel('Country').selectOption('US');

// Select by label
await page.getByLabel('Country').selectOption({ label: 'United States' });

// Select multiple
await page.getByLabel('Colors').selectOption(['red', 'blue']);
```

---

### 5️⃣ Checkboxes & Radio Buttons

```javascript
// Check a checkbox
await page.getByLabel('I agree').check();

// Uncheck a checkbox
await page.getByLabel('I


---

## 🚀 Keep Going

Apply what you learned in this module:

- 🧪 **[Practice Exercises](./practice)** — hands-on tasks to build real skills
- 🏗️ **[Real Projects](./real-projects)** — real-world automation examples

