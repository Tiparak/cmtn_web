export interface DemoResponse {
  message: string;
  data: {
    version: string;
    features: string[];
  };
}

export interface PingResponse {
  message: string;
  timestamp: string;
}