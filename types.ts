import type React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  livePreviewUrl?: string;
}

export interface Article {
  imageUrl: string;
  title: string;
  tags: string[];
  url: string;
}
