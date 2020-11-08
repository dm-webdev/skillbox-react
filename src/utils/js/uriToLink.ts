import { useCallback } from "react";

export function uriToLink(uri: string | undefined) {
  if (uri !== undefined){
    let url = new URL(uri);
    return (url.origin + url.pathname);
  }
  return undefined;
}