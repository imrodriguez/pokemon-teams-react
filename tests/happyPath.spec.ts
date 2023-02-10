import { expect, test } from "@playwright/test";

test("happy path", async ({ page }) => {
  await page.goto("http://127.0.0.1:3001/");
  await page.getByRole("heading", { name: "Make your Pokemon team" }).click();
  await page.getByText(
    "Select the pokemon that you would like to add to your team",
  ).click();
  await page.getByTestId("emptyposition").first().click();
  await page.getByTestId("pokemoncard").first().getByTestId("addtoteam")
    .click();
  expect(await page.getByRole("img")).toBeTruthy();
  await page.getByTestId("pokemonposition").first().getByTestId("removepokemon")
    .click();

  await page.getByTestId("emptyposition").first().click();
  await page.getByTestId("pokemoncard").first().getByTestId("moreinfo").click();
  expect(await page.getByTestId("pokemonname")).toBeTruthy();
});
