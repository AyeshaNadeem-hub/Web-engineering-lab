
export interface Slot {
  id: number;
  title: string;
  time: string;
  booked: boolean;
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function makeCounter(start: number = 0): () => number {
  let count = start;

  return () => {
    count += 1;
    return count;
  };
}

export function getRequired<T>(
  selector: string,
  root: ParentNode = document,
): T {
  const element = root.querySelector(selector);

  if (!element) {
    throw new Error(`Required element not found: ${selector}`);
  }

  return element as T;
}
