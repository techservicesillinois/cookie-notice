import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";

const content = html`
    <ilw-org-chart>
    </ilw-org-chart>`;

test("renders slotted content", async () => {
    const screen = render(content);
    const element = screen.getByText("No organization data provided");
    await expect.element(element).toBeInTheDocument();
});