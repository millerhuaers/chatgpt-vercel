import { type SessionSettings } from "./env"

export const enum LocalStorageKey {
  GLOBALSETTINGS = "gpt-global-settings",
  THEME = "gpt-theme",
  PREFIXSESSION = "gpt-session-"
}

export interface ChatMessage {
  role: Role
  content: string
  type?: "default" | "locked" | "temporary"
}

export type Role = "system" | "user" | "assistant" | "error"
export type SimpleModel = “gpt-4o” | “gpt-4o-mini” | “gpt-4-turbo-2024-04-09” | “claude-3-haiku-20240307” | “claude-3-5-sonnet-20240620” | “gemini-1.5-pro-latest” | “gemini-1.5-flash-latest” | “Meta-Llama-3.1-70B-Instruct-Turbo” | “Meta-Llama-3.1-405B-Instruct-Turbo” | “llama-3.1-sonar-large-128k-online” | “mistral-large-2407”
export type Model = “gpt-4o” | “gpt-4o-mini” | “gpt-4-turbo-2024-04-09” | “claude-3-haiku-20240307” | “claude-3-5-sonnet-20240620” | “gemini-1.5-pro-latest” | “gemini-1.5-flash-latest” | “Meta-Llama-3.1-70B-Instruct-Turbo” | “Meta-Llama-3.1-405B-Instruct-Turbo” | “llama-3.1-sonar-large-128k-online” | “mistral-large-2407”

export interface Prompt {
  desc: string
  detail: string
}

export interface Session {
  id: string
  lastVisit: number
  messages: ChatMessage[]
  settings: SessionSettings
}

export interface Option {
  desc: string
  title: string
  positions?: Set<number>
  extra?: any
}
