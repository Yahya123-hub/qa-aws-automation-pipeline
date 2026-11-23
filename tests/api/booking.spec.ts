import { test, expect } from '@playwright/test';

test('booking API returns a valid booking list @smoke', async ({ request }) => {
  const response = await request.get(
    'https://restful-booker.herokuapp.com/booking'
  );

  expect(response.status()).toBe(200);

  const bookings = await response.json();

  expect(Array.isArray(bookings)).toBeTruthy();
});