import { fetchGitHubData } from "@/lib/github";
import GitHubActivityClient from "./GitHubActivityClient";

export default async function GitHubActivity() {
  const data = await fetchGitHubData();
  return <GitHubActivityClient data={data} />;
}
