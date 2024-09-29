import express from 'express';

declare global {
  namespace Express {
    interface Request {
      authorization?: Record<string, any>;
    }
  }
}
