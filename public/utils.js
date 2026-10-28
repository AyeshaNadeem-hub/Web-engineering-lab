export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
export function makeCounter(start = 0) {
    let count = start;
    return () => {
        count += 1;
        return count;
    };
}
export function getRequired(selector, root = document) {
    const element = root.querySelector(selector);
    if (!element) {
        throw new Error(`Required element not found: ${selector}`);
    }
    return element;
}
export function describeSlot(slot) {
    const status = slot.booked ? 'Booked' : 'Available';
    return ` at  - `;
}
