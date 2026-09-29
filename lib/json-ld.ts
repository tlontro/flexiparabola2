type JsonLd = Record<string, unknown>;

export function serializeJsonLd(data: JsonLd) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
