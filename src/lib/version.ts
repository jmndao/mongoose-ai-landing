export async function getGitHubVersion(): Promise<string> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/jmndao/mongoose-ai/releases/latest"
    );
    if (response.ok) {
      const data = await response.json();
      const version = data.tag_name || data.name || "1.4.0";
      return version.startsWith("v") ? version.slice(1) : version;
    }
  } catch {
    // Fallback to default version
  }
  return "1.4.0";
}

export function getBuildVersion(): string {
  // For build-time, return default and let client-side fetch handle it
  return "1.4.0";
}
