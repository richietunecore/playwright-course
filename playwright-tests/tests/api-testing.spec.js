const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('API Testing with Playwright', () => {

  test('GET - Fetch all posts', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts`);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
  });

  test('GET - Fetch single post', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
    expect(body).toHaveProperty('userId');
  });

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

  test('DELETE - Delete a post', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);
  });

});
