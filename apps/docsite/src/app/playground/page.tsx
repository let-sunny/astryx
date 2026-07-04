// Copyright (c) Meta Platforms, Inc. and affiliates.

import type {Metadata} from 'next';
import {Suspense} from 'react';
import {getDefaultIsMobile} from '../../lib/serverMobileHint';
import {PlaygroundClient} from './PlaygroundClient';

export const metadata: Metadata = {
  title: 'Astryx Playground',
  description: 'Interactive code playground for Astryx components',
};

export default async function PlaygroundPage() {
  const defaultIsMobile = await getDefaultIsMobile();

  return (
    <Suspense fallback={null}>
      <PlaygroundClient defaultIsMobile={defaultIsMobile} />
    </Suspense>
  );
}
