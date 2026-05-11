---
id: module-7-api-testing
title: Module 7 - API Testing
sidebar_position: 8
---

# 🔌 Module 7 – API Testing with Playwright

Playwright is not just for UI testing. It has a built-in API testing engine that allows you to test REST APIs directly.

---

## ✅ Why Test APIs with Playwright?

- ⚡ **Insanely Fast**: API tests run in milliseconds compared to seconds/minutes for UI tests.
- 🔗 **End-to-End Validation**: You can create data via API, verify it on the UI, and then delete it via API.
- 🛠️ **No Extra Tools**: You don't need Postman or Axios; Playwright handles it with the built-in `{ request }` fixture.

---

## ✅ The `{ request }` Fixture

Instead of `{ page }` which launches a browser, API tests use `{ request }` to make raw HTTP requests.

```javascript
test('My API Test', async ({ request }) => {
  const response = await request.get('https://api.example.com/data');
});
```

---

## ✅ Complete API Test Suite

Here is the code we wrote and executed successfully:

```javascript
const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('API Testing with Playwright', () => {

  // 1. GET Request (Read)
  test('GET - Fetch all posts', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts`);
    
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
  });

  // 2. GET Request with Path Param (Read Single)
  test('GET - Fetch single post', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`);
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
  });

  // 3. POST Request (Create)
  test('POST - Create a new post', async ({ request }) => {
    const newPost = {
      title: 'Playwright API Testing',
      body: 'This is a test post created by Playwright',
      userId: 1
    };
    
    const response = await request.post(`${BASE_URL}/posts`, {
      data: newPost
    });
    
    expect(response.status()).toBe(201);
    
    const body = await response.json();
    expect(body.title).toBe(newPost.title);
    expect(body).toHaveProperty('id');
  });

  // 4. PUT Request (Update)
  test('PUT - Update a post', async ({ request }) => {
    const updatedPost = {
      id: 1,
      title: 'Updated Title',
      body: 'Updated body content',
      userId: 1
    };
    
    const response = await request.put(`${BASE_URL}/posts/1`, {
      data: updatedPost
    });
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.title).toBe(updatedPost.title);
  });

  // 5. DELETE Request (Delete)
  test('DELETE - Delete a post', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);
  });

});
```

---

## ✅ API Assertons Deep Dive

When validating API responses, we can assert various parts of the payload:

| Assertion | Explanation |
|-----------|-------------|
| `expect(response.status()).toBe(200)` | Asserts the HTTP status code |
| `expect(response.ok()).toBeTruthy()` | Asserts status code is between 200-299 |
| `await response.json()` | Parses response body to JSON object |
| `expect(body).toHaveProperty('key', value)` | Asserts field exists and matches value |

---

## 🎯 Summary

- ✅ Playwright handles API testing natively using `{ request }`.
- ✅ You can easily perform `GET`, `POST`, `PUT`, `DELETE` methods.
- ✅ API testing is perfect for fast, atomic validations before UI tests run.