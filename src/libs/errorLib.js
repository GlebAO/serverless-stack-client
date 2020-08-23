import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/apm";

const isLocal = process.env.NODE_ENV === "development";
export function initSentry() {
  if (isLocal) {
    return;
  }
  Sentry.init({
    dsn:
      "https://10086684837845e0bd2a59e5f7f8d7d1@o437993.ingest.sentry.io/5401157",
    integrations: [new Integrations.Tracing()],
    tracesSampleRate: 1.0,
  });
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }
  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
  let errorInfo = {};
  let message = error.toString();
  // Auth errors
  if (!(error instanceof Error) && error.message) {
    errorInfo = error;
    message = error.message;
    error = new Error(message);
    // API errors
  } else if (error.config && error.config.url) {
    errorInfo.url = error.config.url;
  }
  logError(error, errorInfo);
  alert(message);
}
